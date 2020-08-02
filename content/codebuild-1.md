---
title: "AWS CodeBuild 良さそう"
date: 2020-08-02T13:21:37+09:00
archives: ["2020/08"]
tags:
- aws
- codebuild
- ci
- job
---

AWS CodeBuild を検証しているんですが、結構良いですね。
現状 Jenkins や CircleCI で実行しているジョブや CI/CD を一部移行したいなと思いました。

一部と言っているのは、単純に全部いきなり移行するのは難しいから共存する前提で考えるくらいの意味です。

なお、これを書いている時点ではまだ軽く検証しているだけなので、CodeBuild の理解は浅いです。

特徴としては

- Managed
- AWS 以外のサービスに AWS の credential を登録しなくて良い
  - Secret を AWS Secrets Manager で管理できる
  - Secret を至るところに設定するのではなく、 AWS Secrets Manager か何かで一元管理するのが理想
- VPC 内で実行できる
- GitHub 連携も簡単
  - Webhook の設定で PR の細かなイベント(merge とか reopen とか)に対応しているのも良い
  - PR を merge したときも PR で変更されたファイルによって Webhook をフィルタできるのが良い
- 変更されたファイルによって実行するBuild Project を変更するようなロジックを実現できる(monorepo で特に有効)

といった点が挙げられます。

## 変更検知について

上記の特徴についてはだいたい「まぁそうだね」というふうに思ってもらえるのではないかと思いますが、変更検知の部分について補足します。
monorepo をやっているとサービス A 関連のジョブはサービス A 関連のコードが変更された場合のみ実行したいというのがあります。
なのですが、 CircleCI だと自分の知る限りそれはできません。

https://circleci.com/docs/2.0/configuration-reference/

なので現状 Job を実行してからサービス A 関連のコードが変更されているかチェックし、変更されていなかったら skip ないし
`circleci step halt` で Job を終了しています。
ただ、差分検知の部分を自分で実装しないといけないし、 `circleci step halt` で終了するにしても Job の起動自体にそこそこ時間がかかったりするし(これだけでも金銭的コストがかかっているはず)、 Job の実行時間や error rate のモニタリングでもノイズとして混じってきてしまいます。

CodeBuild の場合、1つのリポジトリに複数の Build Project を設定でき、 Build Project ごとに buildspec を指定できます。
Build Project の Webhook の `FILE_PATH` の設定で特定のファイルが変更された場合のみビルドを実行することもできます。
なのでサービス A 用の build spec 及び Build Project を作成し、サービス A のコードが変更されたときのみその Build Project が実行されるように Webhook を設定すれば良さそうです。

## 気になる点

* `FILE_PATH` で 1 個の正規表現しか設定できないので、場合によっては複雑な正規表現を書かないといけない
* Terraform で管理するのが結構面倒くさい
  * いい感じにモジュール化とかテンプレート化しないとだめかも
* Pull Request のラベルがついていたらこのジョブを実行する、みたいな複雑なことは一工夫必要かも
  * Webhook の設定だと無理なので、 build は実行しつつラベルが設定されていなかったら skip とかしないといけない

## おまけ: CodeBuild 関連のニュース

以前検証したときより良くなってる気がするなと思って更新をチェックしたらやっぱ色々更新があるみたいですね。

https://aws.amazon.com/jp/new/?whats-new-content-all.sort-by=item.additionalFields.postDateTime&whats-new-content-all.sort-order=desc&awsf.whats-new-developer-tools=general-products%23aws-codebuild
