---
title: "GraylogをTerraformで管理する"
date: 2018-12-01T14:56:00+09:00
draft: false
tags:
- oss
- graylog
- terraform
---

Graylogのリソースを terraform で管理するために作った terraform provider を紹介します。
[Graylog](https://www.graylog.org/)とは何かは[こちら](/graylog/)を読んでください。

Graylogには様々なリソースがあります。

* User
* Role
* Input
* Index Set
* Stream
* Stream Rule
* Dashboard
* Alert
* etc

これらのリソースはWeb UIから作成したり出来るわけですが、
Web UIでポチポチするのは疲れますし、ソースコードで管理したいものです(Infrastructure as Code)。
また、Web UIからでは細かな権限管理は出来ず(限られた権限管理しか出来ない)、APIを使ってする必要があります。

APIを使って管理できるツールを探したものの見つからなかったので、
APIを使ってGraylog用のterraform providerを自作しています。

https://github.com/suzuki-shunsuke/go-graylog/tree/master/terraform

GraylogのAPIの種類は非常に多く、残念ながらカバーできているのは一部だけですが、以下のようなものをサポートしています。

* Input
* User
* Role
* Index Set
* Stream
* Stream Rule
* Dashboard
* Ldap Setting

Role はサポートしているので権限管理は問題なく出来ます。
Dashboard Widget もサポートしたいです。

出来れば Alert の設定も出来ると良いのですが、Alertに関するCRUD APIが提供されていない(GETのみ)ので、サポートできません。

## terraform を使った管理方法

以下では自分の管理方法を紹介します。

https://github.com/suzuki-shunsuke/example/tree/master/graylog-terraform

にサンプルが置いてあります。

基本はプロジェクトごとに

1. Index Set, Stream, Role といったリソースを作成
2. User に Role を付与

という流れになります。

1のプロジェクトごとの設定は [terraform の module](https://www.terraform.io/docs/modules/index.html) という形でまとめてしまい、プロジェクトごとにディレクトリを作成しています。

## terraform provider の開発について

terraform provider の開発はドキュメントが少なく動かしつつ手探りで書いていたりしています。
terraform provider の開発に興味のある方はこの辺を見てみると良いと思います。

* https://www.terraform.io/docs/plugins/provider.html
* https://www.terraform.io/guides/writing-custom-terraform-providers.html
* https://godoc.org/github.com/hashicorp/terraform/helper/schema
* https://godoc.org/github.com/hashicorp/terraform/helper/resource#TestCase

あとは https://github.com/terraform-providers/terraform-provider-google のような公式の provider のソースコードも参考になります。

## 最後に

API を使って terraform provider を開発することで、Infrastructure as Code をある程度実現できました。

* ~Stream Rule と Dashboard をサポートできていない~
* Alertに関するCRUD APIが提供されていない(GETのみ)ので、サポートできない

という問題がクリア出来てないので、そこをクリアしたいです。

また、

* ~まだ terraform を CI で出来ていない(ローカルから実行している)~
* 新しいプロジェクトやユーザーの追加の際に雛形を自動生成できるツールを作りたい(特に、新しく参画した人のためにあると良い)

といった点も改善したいです(出来たら記事にしたいと思います)。

## 2018-12-03 追記

* Stream Rule サポートしました
* terraform を CI で実行するようにしました(気が向いたら記事書きます)
