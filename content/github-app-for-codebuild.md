---
title: "AWS CodeBuild を実行する Github App を作る"
date: 2021-08-16T09:10:51+09:00
archives: ["2021/08"]
tags:
- aws
- codebuild
- github-app
---

GitHub Repository の CI に CodeBuild を使う場合、 [CodeBuild の Webhook integration](https://docs.aws.amazon.com/codebuild/latest/userguide/github-webhook.html) (以下 `CodeBuild GitHub integration` と呼ぶことにします) を使うのが一番自然でしょう。
基本的なユースケースならこれでよいのですが、 GitHub App を活用することでより高度な CI を実現することができます。

## 解決したい課題

* Batch Build の課題
  * 起動・終了が遅い
  * 全 build が成功した Batch Build を Retry できない
  * Web UI がわかりにくい
    * 余計な build が起動する
    * build 単体を Retry できない
  * build ごとに条件設定とかできない
  * buildspec を動的に生成できない
* `CodeBuild GitHub integration` の課題
  * Build Project ごとに Repository Webhook が 1 つ作られる
    * [webhook 1 repository あたり 20 個までしか作れない](https://docs.github.com/en/developers/webhooks-and-events/webhooks/about-webhooks)
    * (これを裏付ける客観的なソースはないですが) webhook の数が増えると build の動作が不安定になるのを観測しています
  * Filter の条件が限られている(例えば PR label で filter とかできない)
  * 複数の build を実行できない(Batch Build も 1 つとみなした場合の話)
* CodeBuild の課題
  * Retry した場合 webhook で起動したときの環境変数が設定されない

## GitHub App

Amazon API Gateway と Lambda を使って GitHub App を構築します。
Lambda で webhook を受け取り、 AWS SDK を使って build を実行します。

![codebuilder-architecture](https://user-images.githubusercontent.com/13323303/129534257-391da6ac-9690-46df-b6df-53605d3c0c6a.png)

GitHub App を作成し、 Webhook URL として API Gateway の endpoint を指定します。
internet facing な API Gateway は Repository ごとに作るのではなく、共有で 1 つ作るようにしたほうが良いかと思います。
Lambda は Repository ごとに分けたほうが権限を絞れるし、 Function がシンプルになるし、あるリポジトリのための変更が他のリポジトリに影響することがないので良いでしょう。

Batch Build を使う代わりに Build を複数並列で起動することで、 Batch Build の課題を解決できます。
実行時に[パラメータ](https://docs.aws.amazon.com/sdk-for-go/api/service/codebuild/#CodeBuild.StartBuildWithContext)を変えることもできます。
Webhook の Payload も参照できるので、 Payload から得たデータ(PR 番号、 label、PR Author 名、 etc)を環境変数として build にわたすこともできます。

従来は build 内で GitHub API を使って取得していた PR の情報を環境変数として渡せることで
build の処理が簡略化されますし、 GitHub API の call 数を減らすこともできます(これは API の rate limit が問題になる場合に重要です)。

PR label による build のフィルタリングなど、 `CodeBuild GitHub integration` では難しいより複雑な filter も実現できます。

GitHub App であれば Repository Webhook が作られることもありませんし、 Build Project ごとに webhook の設定をする必要もありません。

Assume Role することで別の AWS Account の Build Project の build を実行することもできます。

## merged event で merged commit sha で build を実行

PR がマージされたら merged commit の SHA で CI を実行したい場合、 push event を hook するのがおそらく一般的かと思います。

`CodeBuild GitHub integration` では `merged` event を hook することもできますが、
この場合 PR の head branch の SHA で build が実行されてしまいますし、 base branch の commit status が更新されません。

しかし `push` event では関連する PR の情報が取れない(build の環境変数として PR の情報が渡されない)という問題があります。
[GitHub API でコミットと関連した PR の一覧が取れます](https://docs.github.com/en/rest/reference/repos#list-pull-requests-associated-with-a-commit)が、複数の PR と関連づいている場合、どの PR なのか特定することができません(特定の条件付きであればできますが)。

そこで GitHub App で `merged` event (正確には `closed` event で PR がマージ済の場合) を hook しつつ、
build 起動時に source version として merged commit sha を指定することで
webhook から PR の情報を取得しつつ merged commit の SHA で CI を実行できます。

## GitHub の Personal Access Token の代わりに GitHub App installation access token を使う

CodeBuild の build 内で GitHub API を使いたい場合、 Personal Access Token を発行するのがシンプルですが、 Personal Access Token にはいくつか課題があります。

* token 流出のリスク
  * rotation が難しいので有効期限が設定されてない場合が多い
* rate limit
  * token が organization で広く共有されたりするようになると問題になりやすい
  * rate limit は account 単位なので、同じ account の token を別に作っても意味がない
  * account を増やして org に追加すると、 org のメンバーが増えるのでお金がかかる(まぁ金額的に無視してもよいかもしれませんが)

GitHub App では rotation などを考えなくても一時的な token を発行できるので、セキュリティ的にリスクが低いですし、
GitHub App を作ってもお金はかかりません。
token を発行するには

* App ID
* Installation ID (webhook の payload に含まれている)
* Private key

が必要で、 build 実行時に installation id を環境変数として渡すことで Lambda だけでなく Codebuild でも installation access token が使えます。

もちろん GitHub App を使っても rate limit に引っかかることはありますが、 Personal Access Token に比べて回避しやすいかとは思います。

## Lambda から Repository のコードを参照する

https://quipper.hatenablog.com/entry/2020/12/03/080000 では CodeBuild でリポジトリのコードを checkout し、
build の中で動的に buildspec を生成して batch build を実行しています。

同じようなことを Lambda でやろうとした場合、色々制約があります。
Lambda ではリポジトリを checkout してくる代わりに、 build を実行するのに必要な情報を静的に生成してリポジトリにコミットしておきそれを GitHub API で取得するというやり方があります。
その場合、ファイルを生成するコマンドをリポジトリに用意しておき、 ちゃんとファイルが最新になっているか CI の中でチェックし、
なっていなければ CI を fail させるか自動で更新してコミットするというのをやるのが良さそうです。
Git の pre-push hook などで check するのもありかもしれません。

## GitHub App の開発をいかに楽にするか

ようは webhook を受け取って build を実行する Lambda Function を実装すればいいだけなのですが、
毎回 0 からコードを書くのはちょっとした手間なので、 Go の簡単な library を作っています。

https://github.com/suzuki-shunsuke/go-github-app-for-aws-codebuild

このライブラリ自体は大したものではないので、皆さんのユースケースや言語に合わせて独自に作っても良いでしょう。

## サンプル

簡単なサンプルも書いています。

https://github.com/suzuki-shunsuke/example-github-app-for-aws-codebuild
