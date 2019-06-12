---
title: "Drone v0.8 の .drone.yml を v1 の .drone.jsonnet に変換するツールを作った"
date: 2019-06-12T07:40:45+09:00
draft: true
tags:
- oss
- drone
---

Drone v0.8 の .drone.yml を v1 の .drone.jsonnet に変換するツールを作ったので紹介します。

https://github.com/suzuki-shunsuke/drone-jsonnet-generator

## 背景

https://docs.drone.io/user-guide/pipeline/migrating/

Drone は v0.8 から v1 で .drone.yml のフォーマットが大きく変わっています。
Drone v1 ではビルド実行時に自動で変換しているため、v0.8 の .drone.yml でもそのまま動きます(matrix builds も動きます)。

そのため、Drone v0.8 から v1 に移行する際、すぐに .drone.yml を修正しなくても問題ないのですが、
v1 独自の機能が出てきた場合 v0.8 のフォーマットの場合利用できないかもしれませんし、
いつまでも古いままだと気持ち悪いので出来るならフォーマットを変換したいです。

drone-cli ではフォーマットを変換する `drone convert` というコマンドが提供されています。

ただし、 `drone convert` は matrix build を multiple pipeline に変換するのですが、
非常に冗長になります。
そのため、[jsonnet](https://jsonnet.org/) を利用することが推奨されています。

https://docs.drone.io/user-guide/pipeline/migrating/

> The above syntax can be quite verbose if you are testing a large number of variations.
> To simplify your configuration we recommend using jsonnet.

この .drone.jsonnet の生成は `drone convert` では出来ないですし、手作業になるのですが、結構面倒です。
v0.8 から v1 でフォーマットが変わってますし、jsonnet に馴染みの薄い人も少なくないでしょう。
移行対象のリポジトリが多い場合、非常に苦行になります。

そこで今回この .drone.jsonnet を生成するツールを開発しました。

## 使い方

非常にシンプルです。

```console
$ drone-jsonnet-generator gen [--source .drone.yml] [--target .drone.jsonnet] [--stdout]
```

を実行すると .drone.yml から .drone.jsonnet を生成します。

例えば

```yaml
---
pipeline:
  build:
    image: golang:${GO_VERSION}
    commands:
    - echo hello
services:
  database:
    image: ${DATABASE}
matrix:
  include:
  - GO_VERSION: 1.4
    DATABASE: mysql:5.5
  - GO_VERSION: 1.4
    DATABASE: mysql:6.5
  - GO_VERSION: 1.3
    DATABASE: mysql:5.5
```

から

```jsonnet
local pipeline(GO_VERSION, DATABASE) = {
  "kind": "pipeline",
  "name": "'GO_VERSION:' + GO_VERSION + ' DATABASE:' + DATABASE",
  "platform": {
    "arch": "amd64",
    "os": "linux"
  },
  "services": [
    {
      "image": "${DATABASE}",
      "name": "database",
      "pull": "default"
    }
  ],
  "steps": [
    {
      "commands": [
        "echo hello"
      ],
      "image": "golang:${GO_VERSION}",
      "name": "build",
      "pull": "default"
    }
  ]
};

local args = [
  {
    "DATABASE": "mysql:5.5",
    "GO_VERSION": "1.4"
  },
  {
    "DATABASE": "mysql:6.5",
    "GO_VERSION": "1.4"
  },
  {
    "DATABASE": "mysql:5.5",
    "GO_VERSION": "1.3"
  }
];

[
  pipeline(arg.GO_VERSION, arg.DATABASE) for arg in args
]
```

**残念ながら生成された jsonnet はそのままでは使えません。修正が必要です。**
それでも一から .drone.jsonnet を書くよりは圧倒的に効率が良いです。

* pipeline 中の変数が `${変数名}` となっているので直す (`"golang:${GO_VERSION}"` -> `"golang:" + GO_VERSION`)
* pipeline name が `"` で囲まれてるので取り除く (`"'GO_VERSION:' + GO_VERSION + ' DATABASE:' + DATABASE"` -> `'GO_VERSION:' + GO_VERSION + ' DATABASE:' + DATABASE`)

あと、一部のコードを JSON として生成しているので、jsonnet としては多少綺麗ではない(フィールドが`"`で囲まれてたりする)ですが、実用上特に問題ないと思います。

ちなみに上の例では matrix build の `include` が使われていますが、使っていない場合にも対応してますし、
`include` が使われていない場合、若干生成されるコードのテンプレートが違います。

なお、今回のツールの対象になる .drone.yml は matrix build を使っているのが前提になります。
matrix build が使われていないとエラーを返します。
matrix build を使っていないのであれば jsonnet を使う必要性が弱いですし、 `drone convert` で変換すれば良い気がします。

以上、自作のOSSの紹介でした。
Drone v0.8 から v1 への移行で困っている人は是非使ってみてください。
快適な Drone ライフを。
