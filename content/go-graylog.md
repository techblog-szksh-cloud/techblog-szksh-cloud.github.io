---
title: "go-graylog - graylogのAPI Client (Go) 及び terraform provider"
date: 2018-10-31T22:15:13+09:00
draft: true
tags:
- oss
- graylog
- terraform
---

自作のOSS [go-graylog](https://github.com/suzuki-shunsuke/go-graylog)の紹介をします。

## まとめ

* go-graylog は以下の3つを提供する
  * graylog の terraform provider
  * Graylogの API Client for Go
  * Graylog API のモックサーバ
* Graylogのリソースを terraform によって管理できる
* Graylogの一部の機能はWeb UIでは使えずAPIでしか使えないのでAPIを使ったリソース管理が必要
  * 逆にAPIがサポートしていなくてWeb UIからじゃないと出来ないこともある
* terraform provider は自作できる
  * ドキュメントは少ない
* Graylogのリソース及びAPIの数は非常に多いので一部しかサポートできていない
* モックサーバは terraform providerのテストのために開発しているが、APIクライアントやterraform providerよりも開発コストが高くて困っている
* Graylog APIはところどころイケてない
  * バリデーションがいまいち(400返すべきところで500返してくる)

## go-graylog とは

go-graylog は Graylog API の Go Client 及びそれを作って作られた Graylog の terraform provider、及びそれらをテストするための Graylog API のモックサーバです。

[Graylog](https://www.graylog.org/) はOSSのログ管理システムです。

Graylog は Web UIを使って操作できるわけですが、Web UIでポチポチするのは疲れますし、ソースコードで管理したいものです。
また、Web UIからでは細かな権限管理は出来ず(限られた権限管理しか出来ない)、APIを使ってする必要があります。
そこで Graylog API を使って terraform privider を開発しました。

terraform provider と API Client を CI でテストするためにモックサーバも開発しました。
ローカルでのテストは Docker で graylog 起動するなりして実際に Graylog API を叩いてテストも出来ますが、
SaaS の travis ci や circle ci の無料プランで実際の Graylog API を使ってテストは難しいので、モックサーバを開発しました。
ただ、このモックサーバの開発が APIクライアントやterraform provider よりも開発コストが高く、開発スピードを下げる要因にもなっていて困っています。モックサーバを作ったのは失敗だったかもしれません。

Graylog のリソース及び API の数は非常に多いので、現状一部しかサポートできていません。

terraform provider の開発はドキュメントが少なく動かしつつ手探りで書いていたりしています。
terraform provider の開発に興味のある方はこの辺を見てみると良いと思います。

* https://www.terraform.io/docs/plugins/provider.html
* https://www.terraform.io/guides/writing-custom-terraform-providers.html
* https://godoc.org/github.com/hashicorp/terraform/helper/schema
* https://godoc.org/github.com/hashicorp/terraform/helper/resource#TestCase
