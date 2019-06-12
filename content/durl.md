---
title: "durl - 壊れたURLを検知するCLIツール"
date: 2019-04-28T21:25:00+09:00
draft: false
tags:
- oss
archives: ["2019/04"]
---

結構前に開発したツールですが、まだ記事にしてなかったので紹介します。

https://github.com/suzuki-shunsuke/durl

ファイル中の URL が壊れていないかチェックするツールです。
ファイル中の URL を抽出し、HTTPリクエストを投げてステータスコードが 2xx でないものがあった場合、異常終了します。

なお、ページ内リンク(アンカー)が壊れているものについては検知できません。

## インストール

Go製で、バイナリを GitHub Releases で公開しています。

https://github.com/suzuki-shunsuke/durl/releases

## Docker イメージ

https://quay.io/repository/suzuki_shunsuke/durl

busybox ベースの Docker イメージも提供しています。
CI で使うのに便利です。

## 使い方

`durl init` で設定ファイル `.durl.yml` を生成します。

```
$ durl init
```

`durl check` に対象ファイルパスのリストを標準入力として渡してください。
`find` コマンドなどと組み合わせると良いです。

https://github.com/suzuki-shunsuke/go-errlog/blob/v0.9.0/scripts/durl.sh#L9

```
find . \
  -type d -name node_modules -prune -o \
  -type d -name .git -prune -o \
  -type d -name vendor -prune -o \
  -type f -print | \
  grep -v package-lock.json | \
  grep -v Gopkg.toml | \
  grep -v Gopkg.lock | \
  durl check || exit 1
```

壊れた URL が見つかったら ファイルのパス、URL、HTTPのステータスコードを標準エラー出力します。

```
$ echo bar.txt | durl check
[bar.txt] https://github.com/suzuki-shunsuke/dead-repository is dead (404)
```

## 無視するドメイン

https://github.com/suzuki-shunsuke/durl/issues/11

これらは無視します。

* example.com, example.org, example.net
* localhost

## 設定

https://github.com/suzuki-shunsuke/durl#configuration

* ignore_urls: 無視するURL(完全一致)のリスト
* ignore_hosts: 無視するドメイン(完全一致)のリスト
* http_method: HTTPリクエストのメソッド
  * head,get: HEADリクエストに失敗したらGETリクエスト
  * head: HEADリクエスト
  * get: GETリクエスト
* max_request_count: 同時に並列でリクエストする最大数
* max_failed_request_count: 最大の失敗URL数。これを超えると即時異常終了する
* http_request_timeout: HTTPリクエストのタイムアウト

## CI に組み込む

ドキュメントやブログをGitHubなどでホスティングしている場合、CIに組み込むことも出来ます。

* https://github.com/suzuki-shunsuke/go-errlog/blob/v0.9.0/.drone.yml#L35-L38
* https://github.com/suzuki-shunsuke/go-errlog/blob/v0.9.0/scripts/durl.sh#L9
