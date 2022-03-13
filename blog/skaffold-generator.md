---
title: "Skaffold で特定のサービスだけ動かすためのツールを作った"
date: 2020-04-05T18:53:25+09:00
archives: ["2020/04"]
tags:
- k8s
- skaffold
- skaffold-generator
- oss
---

自作の CLI ツール [skaffold-generator](https://github.com/suzuki-shunsuke/skaffold-generator) の紹介です。
プロトタイピングみたいなノリで半日くらいで割と手早く作れました。
名前が長くて適当なのでもっと良い名前ないかなと思ってます。

[Skaffold](https://github.com/suzuki-shunsuke/skaffold-generator) に欲しい機能がないので補完する感じで作ったのですが、「それ〇〇で出来るよ」とかあったら(GitHub issue とか Twitter で)教えていただけると幸いです。

## どんなツールか

設定ファイル `skaffold-generator.yaml` を監視して変更があったら `skaffold.yaml` を生成するツールです。設定ファイルでサービスの依存関係を定義できたり、コマンドライン引数で指定したサービス及びそれが依存するサービスに関連した設定だけを使って `skaffold.yaml` を更新します。
このツールは `skaffold.yaml` を生成するだけなので実際にアプリケーションをビルド・デプロイするには `skaffold` と組み合わせて使います。

## なぜ作ったか

元々ローカルでアプリケーションを動かしながら開発するために Docker Compose を使ってるリポジトリがあるのですが、それを skaffold に移行出来ないか検証しています。
まだ skaffold を触り始めたばかりで理解が浅いのですが、
本番環境は k8s で動いてるからローカルも k8s で動かせるといいかなと思ったり、あとは変更を検知して自動でビルド・デプロイしてくれたりして便利そうかなと思いました。
まぁ結果的に移行しないことになったとしても、 Skaffold と現状の仕組みについて理解が深まればいいかなくらいのつもりです。

検証の過程で、 以下のようなことが Docker Compose だと出来るけど Skaffold だと難しそうだと思いました。

* サービスの依存関係を定義すること
  * Skaffold というより k8s の問題かとは思いますが
  * Docker Compose だと依存するものを自動で起動してくれて便利
* コマンドライン引数で指定したサービスだけ起動すること
  * Skaffold だと skafffold.yaml で定義したものすべてがビルド・デプロイされるという認識

サービスの数が少なければ全部ビルド・デプロイでもいいですが、
マイクロサービスをモノレポで管理しているような場合、
すべてのマイクロサービスをビルド・デプロイするのは無駄が大きかったりします。

そこで `skaffold.yaml` の元となる設定ファイルを用意し、コマンドライン引数でサービスを指定して必要最小限の `skaffold.yaml` を生成するツールを作ってみました。

## インストール

Go のバイナリをダウンロードしてきてください。 https://github.com/suzuki-shunsuke/skaffold-generator/releases

## 使い方

使い方は簡単です。サブコマンドもありません。
リポジトリにサンプルがあるのでそれを見ましょう。

* https://github.com/suzuki-shunsuke/skaffold-generator#getting-started
* https://github.com/suzuki-shunsuke/skaffold-generator/tree/master/examples

まずは `skaffold-generator.yaml` を用意します。

`skaffold-generator.yaml` は `base` と `services` からなります。

`base` は生成される `skaffold.yaml` のベースとなるものです。
`deploy.kubectl.manifests` と `build.artifacts` は上書きされるので指定しないでください。

`services` ではサービスのリストを定義します。
各サービスは以下の属性を持ちます。

* name: サービス名。コマンドライン引数と `depends_on` でサービスを指定するのに使う。ユニークにする
* manifests: skaffold.yaml の `deploy.kubectl.manifests` 
* artifacts: skaffold.yaml の  `build.artifacts`
* depends_on: サービスが依存するサービス名のリスト

用意したら `skaffold-generator` を実行します。 skaffold.yaml が生成(既にあれば上書き)され、 `skaffold-generator.yaml` の変更を監視した状態になります。

```
$ skaffold-generator
2020/04/05 18:19:37 start to watch skaffold-generator.yaml
```

コマンドライン引数でサービス名を指定しない場合、すべてのサービスが `skaffold.yaml` に反映されます。
別のターミナルで `skaffold dev` を実行すれば
生成された `skaffold.yaml` を使ってアプリケーションをビルド・デプロイ出来ます。

```
$ skaffold dev
```

`skaffold-generator.yaml` を変更すれば、その変更を検知し `skaffold.yaml` が更新され、そして `skaffold dev` が `skaffold.yaml` の変更を検知しアプリケーションがビルド・デプロイされます。

引数無しですべてのサービスをデプロイするとこのツールの意味がないので、コマンドライン引数でサービス名を指定しましょう。

```
$ skaffold-generator api
```

こうするとサービス `api` と `api` が依存するサービス(依存関係は再帰的に処理されます)だけが `skaffold.yaml` に反映されます。
依存関係は循環してても大丈夫です。

使い方は以上です。

## Docker Compose みたいにできないこと

Docker Compose みたいに依存関係を定義できるようになりましたが、
Docker Compose みたいにデプロイの順序は考慮されません。
まぁこのツールは `skaffold.yaml` を生成するだけなので仕方ないですね。

## 最後に

以上、 `skaffold-generator` の紹介でした。
まだ作ったばっかで自分でも使えてないので本当に使い物になるのかは分かりませんが、
興味ある人は触ってみてください。
