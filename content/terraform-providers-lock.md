---
title: "terraform init で lock ファイルが更新される問題の対応"
date: 2021-04-24T21:57:27+09:00
archives: ["2021/04"]
tags:
- terraform
---

Terraform v0.14 で local で `terraform init` すると lock ファイルが更新されてしまう問題に対応しました。

結論を最初に言うと、 [100 以上の Terraform 環境をいい感じに v0.14 に upgrade した方法](https://quipper.hatenablog.com/entry/2021/03/12/080000)で紹介している方法で Renovate で Terraform Provider を update する際に `terraform init -upgrade` を実行して lock ファイルを更新してコミット・プッシュしているのですが、
その際に `terraform providers lock -platform=darwin_amd64` を実行するようにしました。

Terraform v0.14 で lock ファイル `.terraform.lock.hcl` が導入されました。
Renovate で Terraform Provider を update する際にも lock ファイルを更新する必要があるので、
`terraform init -upgrade` を実行して lock ファイルを更新してコミット・プッシュしています。
なのですが、ローカルで `terraform init` を実行するとなんか lock ファイルが更新されることが良くありました。しばらく放置していたのですが、 developer から「なんかファイル更新されたんだけど、これコミットしていいの？」と聞かれ、このまま放っておいて困惑させたりもやっとさせたりするのは良くないなと思い、調べてみました。

lock ファイルについて [.terraform.lock.hcl 完全に理解した](https://speakerdeck.com/minamijoyo/how-to-update-terraform-dot-lock-dot-hcl-efficiently)で詳しく解説されていたので大変助かりました。

* lock ファイルには provider の hash 値が記録されている
* lock ファイルは `terraform init` で自動的に更新される
* hash 値は platform (Mac, Linux, etc) によって違う
* `terraform init` 実行時に、その platform の hash 値が lock ファイルになければ追加される
  * デフォルトでは実行環境以外の Platform の hash 値は追加されない
* CI は Linux 上で実行しているので、 Linux の hash 値だけが記録される
* ローカルで Mac 上で `terraform init` すると Mac の hash 値が追加され、 lock ファイルに差分が生じる

なので差分が出てしまった場合はコミットするで良いとは思いますが、そもそも CI で lock ファイルを更新する際に Mac の hash 値も追加してしまえばローカルで Mac 上で `terraform init` しても差分が出なくなります。ちなみに Windows 上で `terraform init` する人は自分の周りにはいなさそうなので、 Windows は対応しないことにしました。

[100 以上の Terraform 環境をいい感じに v0.14 に upgrade した方法](https://quipper.hatenablog.com/entry/2021/03/12/080000)で紹介しているようにすでに lock ファイルを更新してコミット・プッシュする仕組みはあるので、変更としては 1 (正確にはコードコメント入れて4)行追加するだけでした。

```sh
github-comment exec -- terraform providers lock -platform=darwin_amd64
```
