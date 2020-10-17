---
title: "buildflow が自動で取得する Pull Request の情報"
date: 2020-10-18T08:13:48+09:00
archives: ["2020/10"]
tags:
- oss
- buildflow
---

buildflow というツールを開発しているので `buildflow` というタグをつけて何回かに分けてブログを書きます。

この記事では buildflow が自動で Pull Request (以下 PR) の情報を取得してくる機能について説明します。

この機能は GitHub のみサポートしています。 GitLab や BitBucket はサポートしていません。
これは単純に自分が GitHub しか使わないからです。

PR の CI では

* 変更されたものだけテストする
* 特定の PR ラベルがついていたら実行する
* 特定のユーザーの PR だけ処理を変える(bot とか)

のように PR の情報に基づいて挙動を変えたくなったりします。

シェルスクリプトで GitHub API 叩いて情報とってきて jq でパースしてとか、頑張れば別にできるんですが、
毎回そういうコードを書きたくないなと感じていました。

なお、 PR の情報をとってくる機能はデフォルトで無効化されています(GitHub Access Token 必要ですしね)。
設定で `pr: true` を指定してください。

PR の情報をとってくるには、以下の情報が必要です。

* repository owner: 設定ファイルで `owner` を設定するか、自動取得。 `owner` を設定してある場合はそちらが優先される
* repository name: 設定ファイルで `repo` を設定するか、自動取得。 `repo` を設定してある場合はそちらが優先される
* pull request number: 自動取得
* GitHub Access Token: 環境変数 `GITHUB_TOKEN` または `GITHUB_ACCESS_TOKEN` を指定してください

## 取得される情報

以下のパラメータがテンプレートや Tengo script に渡されます。

* PR: PR の情報: [GitHub API](https://docs.github.com/en/free-pro-team@latest/rest/reference/pulls#get-a-pull-request) のレスポンス body
* Files: PR で更新されたファイルの一覧: [GitHub API](https://docs.github.com/en/free-pro-team@latest/rest/reference/pulls#list-pull-requests-files) のレスポンス body

Files に関してはページネーションされていても全てのファイルが取得できるまで繰り返し API を叩いています。

## 自動取得の仕組み

各種 CI サービスの組み込みの環境変数からそれらの情報を自動で取得してくれます。

内部的には go-ci-env を使っているので、 PR 情報の自動取得をサポートしている CI サービスは以下のとおりです。

https://github.com/suzuki-shunsuke/go-ci-env#supported-ci-services

PR 番号が環境変数から取得できない場合、 revision から関連する PR のリストを取得し、一番最初の PR とみなします。
これは PR のマージコミットの CI ではマージされた PR の情報を取得することを意図しています。

関連する PR が存在しない場合は取得されるパラメータが `nil` になるだけで、 buildflow は異常終了したりせずに処理を続行します。
