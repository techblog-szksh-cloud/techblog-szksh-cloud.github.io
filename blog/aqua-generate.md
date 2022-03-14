---
title: "aqua の設定ファイルをインタラクティブに生成する generate コマンド"
date: 2021-09-05T10:17:39+09:00
tags:
- oss
- aqua
authors:
- suzuki-shunsuke
---

* [aqua - CLI ツールのバージョン管理](/aqua)
* [aqua v0.1.0 から v0.5.0 での変更点](/aqua-v0.5)

aqua v0.5.1 で追加された generate というサブコマンドを紹介します。

aqua では Registry を活用することで設定を記述する手間を省くことができますが、
Registry を活用するには、インストールしたいツールが Registry で定義されているか、されているとしたら name はなにか調べる必要があります。
Registry で定義されているのに見逃してしまうこともあるでしょう。

また、 aqua でツールをインストールするには version を指定する必要がありますが、多くの場合はとりあえず最新バージョンはなにかを調べることになるでしょう。

これらの手間を減らすために generate というインタラクティブなコマンドを追加しました。
これは aqua.yaml で指定されている Registry で定義されている packages の一覧から package を fuzzy search によって選択し、
更に `github_release` package の場合は release version の一覧を fuzzy search によって選択することで package の YAML 定義を出力するコマンドです。

使ってみるのが早いでしょう。 aqua.yaml に Standard Registry を追加した上で `aqua g` を実行してみます。

```yaml
registries:
- type: standard
  ref: v0.2.1 # renovate: depName=suzuki-shunsuke/aqua-registry
```

すると fuzzy search が起動し、 package が選択できます。
自分が使いたいツール名で検索してみて、あればそれを選択します。

```
  direnv (standard)
  consul (standard)
  conftest (standard)
> golangci-lint (standard)
  47/47
>
```

golangci-lint を選んでみましょう。
すると golangci-lint のバージョンの一覧が選択できます。

```
  v1.40.0
  v1.40.1
  v1.41.0
  v1.41.1
> v1.42.0
  30/30
>
```

version を選ぶと YAML が出力されます。

```console
$ aqua g
- name: golangci-lint
  registry: standard
  version: v1.42.0
```

この YAML を `aqua.yaml` の `packages` に追記すれば OK です。

helm のように GitHub Release からではなく公式サイトからインストールするようなツールはバージョンのリストを取得するのが難しいのでバージョンの選択はできません。

```console
$ aqua g
- name: helm
  registry: standard
  version: ""
```

それでも helm が `helm` という name で standard registry に登録されていることはわかるので、十分便利です。

ちなみに fuzzy search には [ktr0731/go-fuzzyfinder](https://github.com/ktr0731/go-fuzzyfinder) を使わせていただきました。非常に簡単に fuzzy search が実装できてとても便利でした。
