---
title: "terraformer で雑に生成した tf ファイル と state を分割したくてツールを書いた"
date: 2021-01-31T14:53:23+09:00
archives: ["2021/01"]
tags:
- oss
- terraform
authors:
- suzuki-shunsuke
---

[terraformer](https://github.com/GoogleCloudPlatform/terraformer) で雑に生成した Terraform の設定ファイル (以下 tf ファイル) と state を分割したくてツールを書きました。

[tfmigrator](https://github.com/suzuki-shunsuke/tfmigrator)

## 経緯

### miam から Terraform へ移行したい

[miam](https://github.com/codenize-tools/miam) というツールで管理されている大量のリソースを Terraform で管理したくなりました。
多くの AWS Resource は Terraform で管理されていますが、 IAM に関しては miam で管理されています。
なぜ Terraform ではなく miam で管理されているかというと、当時のことは自分には分かりませんが、歴史的な経緯もあると思います。
昔は今よりも Terraform の表現力が豊かではなく、 Ruby で自由にかける miam のほうが扱いやすかったとか、
miam だと miam でリソースを管理することを強制できるため、権限管理を厳格にやるという観点では都合が良いという点もあるかと思います。

ではなぜ Terraform で管理したくなったかというと、
一番大きな理由は miam で頻繁に rate limit に引っかかるようになったからです。
Terraform にしろ miam にしろ CI/CD で test, apply が実行されるようになっています。
miam では毎回全部のリソースを対象に処理が実行されるため、リソースの数が増えるにつれて rate limit に引っかかりやすくなります。
CI を rerun すれば成功するのですが、悪いときは 3 回連続で rate limit に引っかかり、 4 回目でようやく成功するということもありました。

Terraform ではサービスや環境単位で State が分割されており、 CI も PR でファイルが変更された state に対してのみ実行されるため、
rate limit に引っかかることは基本ないようになっています。

他にも色々理由はあるのですが、本題からそれるのでやめておきます。
rate limit だけなら miam でも exclude する機能があるので頑張ればなんとかなる気はします。

### やりたかったこと

* Terraform で既存のリソースを管理したい
  * tf ファイル と state を生成したい
* Terraform の設定ファイル と state はサービス・環境ごとに分割したい
* Terraform のリソースパスはヒューマンリーダブルにしたい
  * これは難しければ諦めるのもありだが、できればやりたい

### terraformer で自動生成するも色々問題があった

まずは terraformer で雑に tf ファイル と state を生成しました。
今回 terraformer を使うのは初めてで、 terraformer で万事解決なら話は簡単だったのですが、話はそんな簡単ではありませんでした。
これに関しては、自分の問題(使い方を間違っている、ドキュメントをちゃんと読んでいない)なのか、 あるいは terraformer 側の問題なのかよく分かってない部分もあります。

まずドキュメントを読んでもいまいちリソースのフィルタリングの仕方が分かりませんでした。
試しに IAM role の名前を指定してそれだけ import しようとしましたが、なぜか全 IAM リソースが import されてしまいました。

良くわからないので、これは全 IAM リソースを雑に import してからサービス・環境ごとに分割するしか無いかなぁと思いました。

加えて、リソースパスが全然ヒューマンリーダブルではありませんでした。 terraformer としてはこれは仕方ないと思いますが、なんとかリネームしたいと思いました。

### 最初手作業で始めるも、自動化が必要と悟る

最初特定のサービスに関して手作業で tf ファイル, state を移行する作業を行ってみました。
簡単なシェルスクリプトを書いて半自動化してみました。
tf ファイルの操作には [hcledit](https://github.com/minamijoyo/hcledit) が便利です。

以下のようなコマンドを使いました。

* terraform state mv
* hcledit block get
* hcledit block mv
* hcledit block list

で、やってみたものの、なにせ対象が多いので、これを一つ一つ手作業でやるのは大変だし、ヒューマンエラーは避けられないと感じました。
そこでちょっとしたツールを作ることにしました。
手作業で一回やった分手順はイメージできているので、割と簡単にできるだろうと思いました。

## tfmigrator

そこで作ったのが [tfmigrator](https://github.com/suzuki-shunsuke/tfmigrator) です。
今回は AWS の IAM リソースを扱いますが、 tfmigrator は特定の provider などには依存しないツールです。
Terraform CLI と hcledit が必要です。

まず terraformer で IAM リソースを全部 import してきます。

```
$ terraformer import aws -r iam --compact --path-pattern .
```

こうすると resources.tf と terraform.tfstate が作られます。

tfmigrator の設定ファイル tfmigrator.yaml を書きます。

```yaml
---
items:
# 既に Terraform で管理されているものは無視
- rule: '"tags" in Values && Values.tags.ManagedBy == "Terraform"'
  exclude: true
- rule: '"name" not in Values'
  exclude: true
# `name` に "foo" が含まれているものはサービス foo のリソースとみなして分割
- rule: 'Values.name contains "foo"'
  state_out: foo/terraform.tfstate
  resource_name: "{{.Values.name}}"
  tf_path: foo/resource.tf
# 以下略
```

tfmigrator の処理の流れをなんとなくそれっぽい擬似言語で表現します。
実際の処理の流れとは若干異なりますが、雰囲気が伝わればと思います。

```
for resource in state
  for item config.items
    if item.rule.match(resource)
      if item.exclude
        # このリソースは処理せず次のリソースの処理に移る
        break
      # tf の migration (note: 元の tf はそのまま)
      hcledit block get resource.path < tf | hcledit block mv resource.path "${resource.type}.${item.resource_name(resource)}" >> item.tf_path
      terraform state mv
      # 次のリソースの処理に移る
      break
```

各 item の設定の意味はこんな感じです。

* rule: [expr](https://github.com/antonmedv/expr/blob/master/docs/Language-Definition.md) の expression 。この条件にマッチしたリソースをこの item で処理する
* exclude: true の場合、この item にマッチしたリソースは無視する
* state_out: `terraform state mv` の `-state-out`
* resource_name: 新しいリソース名。デフォルトでは名前はそのまま。 Go の [text/template](https://golang.org/pkg/text/template/) で処理されます
* tf_path: Terraform の設定ファイルの出力先

設定ファイルを書いたら tfmigrator を実行します。 
いきなりマイグレーションをするというよりは、まずは dry run てきなことをして動作を確認したいですね。
`-skip-state` をつけると `terraform state mv` を skip し、分割される tf ファイル を新しいファイルに出力だけします。

```
$ cat *.tf | tfmigrator run -skip-state
```

生成された tf ファイル を眺めて、良さそうなら `-skip-state` をとって実行します。

## tf ファイル生成時の注意点

tf ファイルの生成は現状追記モードで実行されます。なので `-skip-state` をつけて複数回実行すると同じ設定が重複して書き込まれることになります。
それが困る場合は実行前に対象ファイルを消してから実行してください。

また、tf ファイルの移行は既存の tf ファイルに対して `hcledit block get`, `hcledit block mv` を実行して行われるため、
元の tf ファイルはそのまま残ること、また expression は評価されないことに注意が必要です。
例えば `name = var.name` のように変数を参照している場合、それもそのまま評価されずに残ります。
とりあえず自分がやりたかったのは terraformer で生成した tf ファイルの移行だったので、そんなに問題にはならないだろうと思っています。

## エラーハンドリング

あるリソースの処理でエラーが起こったら即座に異常終了するようにしています。
(当然ですが)ロールバックとかはしません(し、できません)。
エラー出力しつつ次のリソースの処理に移る、というのも考えられますが、間違って `terraform state mv` されると面倒なので、現状即座に終了するようにしています。
問題のあるリソースを無視したい場合は、 tfmigrator の設定でそのリソースにマッチする item を追加し `exclude: true` とすればよいでしょう。

## このツールの便利なところ

* expr を用いてリソースを分類できる
* 設定ファイルに記述し、ワン・コマンドで実行できる
  * レビューできる
  * 後で見返せる

ローカルで試行錯誤しながら複数のコマンドを実行していると、後でなにやったかわからなくなりがちですし、途中で作業を中断したりすると、あとで今どういう状態なのか分からなくなったりします。
ワン・コマンドで実行できるとそういう問題がなくて便利ですね。

## 肝心の移行はできたのか

まだできていません。移行するために tfmigrator を作ったので、これから移行していこうという段階です。
なので tfmigrator はまだ全然使い込んでないですし、使ってく中で機能修正したりすることもあると思います。

## 最後に

terraformer で雑に import してきた tf ファイルと state をいい感じに分割するために tfmigrator というツールを作りました。
tfmigrator が役に立つケースは割と限られているというか、日常的に使うようなツールでもないですが、
terraformer で雑に import してきたのは良いが、扱いに困っているなんて人には役に立つかもしれません。
