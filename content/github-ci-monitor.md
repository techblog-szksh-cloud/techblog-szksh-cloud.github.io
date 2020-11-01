---
title: "github-ci-monitor: CI のステータスを DataDog で監視"
date: 2020-11-01T17:51:44+09:00
archives: ["2020/11"]
tags:
- oss
---

自作の OSS [github-ci-monitor](https://github.com/suzuki-shunsuke/github-ci-monitor) の紹介です。

GitHub リポジトリの CI のステータスを定期的に取得し、 DataDog に送ることで、 CI のステータスを監視するツールです。
現状は AWS Lambda で動かすことを想定していますが、他の方法でも動かせるようにするつもりです。

## Motivation

モチベーションは、 PR をマージしたあとに CI がこけた場合に通知が欲しいというものです。
マージしたあとに CI が一瞬で終わるなら無事終わるのを見届けてもいいんですが、
数分かかると待ってるのも時間がもったいないです。
しばらくしたあとに結果を確認すればいいんですが、それも面倒くさいですし、普通に忘れます。
そうするとデプロイしたつもりが実は CI がこけてたなんてことが普通にあります。

そういうことにすぐ気づけるよう、 Slack に通知がほしいと思っていました。

## 仕組み

仕組みは単純です。

GitHub API で各リポジトリのステータスを取得し、 DataDog API でステータスを送信しています。
DataDog API は [Service Check API](https://docs.datadoghq.com/ja/api/v1/service-checks/) を使っています。
status は以下のようになります。

* 0: 正常
* 1: 異常
* 3: ステータスの取得に失敗

また以下の tag が付きます。

* owner: リポジトリのオーナー
* repo: リポジトリ名
* ref: ブランチ名

各リポジトリのステータスは現状 3 つをサポートしています。

* Commit Status: [Get the combined status for a specific reference](https://docs.github.com/en/free-pro-team@latest/rest/reference/repos#get-the-combined-status-for-a-specific-reference)
* Check API:
  * Check Run: [List check runs for a Git reference](https://docs.github.com/en/free-pro-team@latest/rest/reference/checks#list-check-runs-for-a-git-reference)
  * Check Suite: [List check suites for a Git reference](https://docs.github.com/en/free-pro-team@latest/rest/reference/checks#list-check-suites-for-a-git-reference)

それぞれ on/off を設定でき、複数指定した場合は、どれか 1 つでも失敗していたら status が 1 になります。

## Lambda で動かす場合のアーキテクチャ

CloudWatch Events で定期的(5分毎とか)に Lambda Function を実行します。
リポジトリのリストなどの設定は環境変数で渡し、 GitHub Access Token などのクレデンシャルは AWS Secrets Manager 経由で渡します。

## 実装方針

CI がこけたら通知してほしいという要件を満たす方法は色々あると思います。

まず CI の中でこけた場合に通知を飛ばすようにすることが考えられます。
以下のようなメリットがあります(書いてみたら結構ありますね)。

* ツールをどっかで動かしたりツール自体を監視したりする必要がない
* より詳細なメッセージを送れる
  * コマンドの標準エラー出力を含めたり
  * CI のリンク貼ったり、 PR の author をメンションしたりもしやすい
* CI がこけたらリアルタイムで通知できる
* ポーリングと違い、無駄に API を叩く必要がない

一方で、これを漏れなく実装するのはけっこう大変だと思います。
例えば CircleCI だと全ての Job でちゃんとハンドリングしないといけなかったりすると思います。
リポジトリが 1 個だけならそれでもいいですが、何十個もあるとなるとだいぶ大変だと思います。

今回のツールのような方式だと対象のリポジトリの CI に一切手を加えずに実装できるのが大きいです。

また、 CI の結果を取得する API として CI サービスが提供する API を使って取得することも考えられます。
しかし、 GitHub API を使えば CI サービス毎に実装したりする必要がなくて楽です。

Slack API を使ってメッセージを投稿するようなことも一瞬考えましたが、 DataDog を使うことで以下のメリットがあります。

* 送信先やメッセージのテンプレートとかをツールで管理しなくて良い
* 何度もメッセージを送らないように状態を DB で持たなくて良い
* アラートを一時的に止めたりするのも簡単

また、時間軸でどれだけ CI が壊れた状態だったか、復旧するのにどのくらい時間がかかったか分かるのもなにかに使えるかもしれません。

今回のツールに限らず、 Slack に直接通知するより DataDog や Sentry を経由したほうが上手くいくことも結構あると思っています。

また、定期実行する方法としては Lambda 以外にも

* Jenkins
* 適当なサーバで cron
* CI サービス
* k8s の CronJob
* k8s の Deployment

など色々あると思います。そういう風にも実行できるようにバイナリを今後提供したいと思っています。
Lambda を使うとインフラを管理しなくて良いのがメリットだと思います。

また、 DataDog API で結果を送る push 型のアーキテクチャとは別に、
DataDog Agent + Prometheus Exporter の pull 型もあるんじゃないかなと思います。
そうするとツール側で DataDog API Key が不要になるというメリットがあります。
こちらのパターンも今後実装してみたいと思います。
