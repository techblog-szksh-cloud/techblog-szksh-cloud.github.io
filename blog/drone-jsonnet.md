---
title: "Drone v1 では Jsonnet が extension なしで使える"
date: 2019-08-02T23:02:57+09:00
tags:
- drone
authors:
- suzuki-shunsuke
---

Drone では v1 から冗長な YAML を DRY にする一つの手として、 Jsonnet の利用が推奨されています。
これについては過去のブログでも触れています。

https://techblog.szksh.cloud/drone-jsonnet-generator/

しかし、 v1 の rc の時点では Jsonnet の活用には Jsonnet Extension が必要でした。

https://engineering.linecorp.com/ja/blog/go-oss-ci-cd-platform-drone-1-0-0-rc-1/#title7-1

しかし、 v1 の正式版では Jsonnet Extension がなくても Jsonnet が利用できるようになっています。

まず Drone の管理者側で Drone server に環境変数 `DRONE_JSONNET_ENABLED=true` を設定する必要があります。

そうしたら、ユーザー側は次のようにすることで jsonnet が使えます。

1. .drone.yml の代わりに .drone.jsonnet をコミットする (.drone.yml は不要)
2. 各リポジトリの settings の Main > Configuration で設定ファイルのパスを変更する

こうすることでビルド実行時に自動で Jsonnet が YAML に変換され処理されるようです。

## いつから Jsonnet Extension は不要になったのか

* https://github.com/drone/drone/compare/v1.0.0-rc.6...v1.0.0
* https://github.com/drone/drone/commit/5013cfa993fa455fc56f10e45b9f36cf1d6dff57

v1 の rc ではサポートされてませんでしたが、正式版をリリースするタイミングで Jsonnet Extension が不要になっていたようです。

## 注意点

* SaaS https://cloud.drone.io は 2019-08-02 時点で未対応
* Jsonnet は pipeline が 1 つでも `[]` で囲い、配列にする必要がある
* Jsonnet の Imports はサポートしていない

## リファレンス

* https://discourse.drone.io/t/how-to-reduce-yaml-boilerplate/3704
