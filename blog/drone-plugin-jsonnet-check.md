---
title: ".drone.jsonnet と .drone.yml を比較する Drone plugin を作った"
date: 2019-06-01T08:34:10+09:00
tags:
- drone
authors:
- suzuki-shunsuke
---

久しぶりに [Drone plugin](https://docs.drone.io/plugins/) を作ったので紹介します。

https://www.github.com/suzuki-shunsuke/drone-plugin-jsonnet-check

.drone.jsonnet から .drone.yml を生成していて、両方を Git で管理している場合に、
.drone.jsonnet と .drone.yml の状態が一致しているかテストするための plugin です。

Drone v1 では matrix builds が廃止され、multiple pipeline が導入されました。
matrix builds を `drone convert` コマンドで multiple pipeline に変換すると、pipeline の数が多いほど冗長でメンテナンス性が悪くなります。
そこで公式では [jsonnet](https://jsonnet.org) で記述して .drone.yml に変換する方法が推奨されています。

https://docs.drone.io/user-guide/pipeline/migrating/

> To simplify your configuration we recommend using jsonnet.

```console
$ drone jsonnet --format --stream
```

jsonnet から yaml への変換は [Jsonnet extension](https://docs.drone.io/extend/config/jsonnet/) を使うと Drone がビルド実行時に自動で変換してくれるので .drone.yml を管理する必要はなくなりますが、
使っていない場合、 .drone.jsonnet と .drone.yml を Git で管理し、自前で変換してコミットする必要があります。
この作業をなにかしら自動化しないと .drone.jsonnet と .drone.yml に不整合が生じることもあり得ると思います。

* .drone.jsonnet を更新したけど .drone.yml を更新し忘れる
* .drone.yml を直接更新してしまった

そこで CI で不整合が生じていないかテストするための plugin を作りました。

最初は plugin ではなく、ただのサンプルコードとして公開しました。

https://github.com/suzuki-shunsuke/drone-jsonnet-convert-test

しかし、折角なので plugin にしました。

やっていることは単純で、 .drone.jsonnet から YAML を生成し、 .drone.yml と diff を取っているだけです。

使い方は README を見れば分かると思いますが、

`drone jsonnet` コマンドのオプションを plugin のパラメータとして渡せます。

```jsonnet
{
  kind: "pipeline",
  name: "test",
  steps: [
    {
      name: "test .drone.yml",
      image: "suzukishunsuke/jsonnet-check:v1.1.1-v0.1.0",
      settings: {
        format: true,
      },
    },
  ],
}
```

```console
$ drone exec
[test .drone.yml:0] + drone jsonnet --format --target /tmp/.drone.yml
[test .drone.yml:1] + diff .drone.yml /tmp/.drone.yml
[test .drone.yml:2] --- .drone.yml
[test .drone.yml:3] +++ /tmp/.drone.yml
[test .drone.yml:4] @@ -12,5 +12,4 @@
[test .drone.yml:5]    settings:
[test .drone.yml:6]      format: true
[test .drone.yml:7]
[test .drone.yml:8] -
[test .drone.yml:9]  ...
2019/06/01 00:33:27 test .drone.yml : exit code 1
```

シェルスクリプトで実装しました。
テストでは [bats](https://github.com/bats-core/bats-core) を使っています。

以上、簡単ですが、自作 Drone plugin の紹介でした。
