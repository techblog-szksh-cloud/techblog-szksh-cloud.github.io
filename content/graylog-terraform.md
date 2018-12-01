---
title: "GraylogをTerraformで管理する"
date: 2018-12-01T14:56:00+09:00
draft: true
tags:
- oss
- graylog
- terraform
---

Graylogのリソースを terraform で管理する方法について書きます。

[Graylog](https://www.graylog.org/) はOSSのログ管理システムです。

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
* Ldap Setting

Role はサポートしているので権限管理は問題なく出来ます。
Stream Rule と Dashboard もサポートしたいです。

出来れば Alert の設定も出来ると良いのですが、Alertに関するCRUD APIが提供されていない(GETのみ)ので、サポートできません。

## terraform provider の開発について

terraform provider の開発はドキュメントが少なく動かしつつ手探りで書いていたりしています。
terraform provider の開発に興味のある方はこの辺を見てみると良いと思います。

* https://www.terraform.io/docs/plugins/provider.html
* https://www.terraform.io/guides/writing-custom-terraform-providers.html
* https://godoc.org/github.com/hashicorp/terraform/helper/schema
* https://godoc.org/github.com/hashicorp/terraform/helper/resource#TestCase
