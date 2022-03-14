---
title: "metabase を使って drone の利用状況を可視化する"
date: 2018-09-30T22:55:57+09:00
draft: false
tags:
- drone
- metabase
archives: ["2018/09"]
authors:
- suzuki-shunsuke
---

drone OSS 0.8.5 で検証しています。

https://drone.io/ と https://www.metabase.com/ の話です。

drone の利用状況を可視化したかったので、
drone の DB(MySQL) のデータを metabase で可視化しました。

## どんなグラフを作ったのか

いざグラフを作成するとなると、何を作ったらいいのか迷いましたが、以下のようなものをとりあえず作ってみました。

* ユーザー数
* 有効化されたリポジトリ数
* buildの多いリポジトリ
* buildをよく実行しているユーザー
* ビルド時間の分布
* build event の割合(push, tag, pull request, deployment)
* リポジトリのsecretsの数の分布
