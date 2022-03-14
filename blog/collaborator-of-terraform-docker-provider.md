---
title: "Terraform の Docker Provider の Collaborator になりました"
date: 2020-12-03T09:07:32+09:00
tags:
- oss
- terraform
authors:
- suzuki-shunsuke
---

先日 [kreuzwerker/terraform-provider-docker](https://github.com/kreuzwerker/terraform-provider-docker) の Collaborator になりました。
[kreuzwerker/terraform-provider-docker](https://github.com/kreuzwerker/terraform-provider-docker) は Terraform の Docker Provider であり、 Docker コンテナや image, network などを管理できます。
元々は Hashicorp の Official Provider であった [terraform-providers/terraform-provider-docker](https://github.com/terraform-providers/terraform-provider-docker) が [kreuzwerker/terraform-provider-docker](https://github.com/kreuzwerker/terraform-provider-docker) に移管され、 Community Provider になりました。
元のリポジトリは hashicorp org に移され archive されています。

## Collaborator になった経緯

リポジトリが移管される際に、メンテナを募集していて過去に contribution していた自分にも声をかけていただきました。

https://github.com/hashicorp/terraform-provider-docker/issues/306

## Contributor になった経緯

自分がこの provider に contribution した経緯は、 Terraform の Hands on を書くのに丁度よい provider を探していたことでした。

Hands on の題材として Docker コンテナを作ったりできたらいいんじゃないかなと思って Docker provider を試してみました。
しかし当時の docker_container リソースは read をちゃんとサポートしていませんでした。
なので import や update がまともに動きませんでした。
それを見かねて修正して PR を投げたのが最初です。

* https://github.com/hashicorp/terraform-provider-docker/pull/234
* https://github.com/hashicorp/terraform-provider-docker/pull/236

その後も幾つか contribution をしました。

なお、 PR を投げたものの、 Hands on は MySQL Provider を使って書きました。

https://techblog.szksh.cloud/terraform-hands-on-with-mysql-provider/
