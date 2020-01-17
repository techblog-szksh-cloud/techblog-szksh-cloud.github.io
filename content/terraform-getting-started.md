---
title: "Terraform 入門"
date: 2020-01-05T09:25:05+09:00
archives: ["2020/01"]
tags:
- terraform
---

## 参考

* [10分で理解するTerraform | Qiita](https://qiita.com/Chanmoro/items/55bf0da3aaf37dc26f73)
* [Terraform入門資料(v0.12.0対応) ~基本知識から設計や運用、知っておくべきtipsまで~ | Qiita](https://qiita.com/fukubaka0825/items/68506b1e6644404d6cc0)
* [AWSでTerraformに入門 | Developers.io](https://dev.classmethod.jp/cloud/terraform-getting-started-with-aws/)
* [Terraform職人入門: 日々の運用で学んだ知見を淡々とまとめる | Qiita](https://qiita.com/minamijoyo/items/1f57c62bed781ab8f4d7)

## 前提

* 執筆時点 (2020/01/05) で Terraform の最新バージョンは v0.12.18 です

## Terraform とは

[Terraform](https://www.terraform.io/) は Infrastructure as Code を実現する汎用的なCLIツールです。
インフラの状態を設定ファイルに定義し、コマンドを実行することで、
実際のインフラの状態と設定ファイルの差分を検知し、設定ファイルに記述されたとおりになるようにインフラを変更(CRUD)します。

[Hashicorp](https://www.hashicorp.com/) という企業がホストしている OSS になります。
Go で書かれています。 https://github.com/hashicorp/terraform

## Terraform のインストール

Terraform は Go 製なので 1 バイナリをダウンロードしてインストールするだけです。

https://www.terraform.io/downloads.html

tfenv を使うと管理が楽です。

https://github.com/tfutils/tfenv

tfenv は Terraform のバージョン管理ツールです。
pyenv や rbenv の Terraform 版みたいなものです。

## 用語集

https://www.terraform.io/docs/glossary.html

## Provider

https://www.terraform.io/docs/glossary.html#terraform-provider

Terraform を「汎用的な」ツールといいましたが、ここでいう「汎用的」とは、 AWS などの特定のサービス専用ではなく、様々なサービスを同じように扱うことが出来るという意味です。
実際に AWS などのインフラを操作する場合にはインフラが提供する API を利用するわけですが、
サービス固有の API 呼び出しなどの処理を `Provider` という形で Terraform 本体から切り出すことでこの汎用性は実現されています。
Provider は AWS や GCP などの Hashicorp 公式のものもあれば、サードパーティ製のものもありますし、自分で作ってしまうことも出来ます。

* 公式 Provider
  * https://www.terraform.io/docs/providers/index.html
  * https://github.com/terraform-providers
* サードパーティ Provider
  * https://www.terraform.io/docs/providers/type/community-index.html
  * [宣伝] [Graylog](https://www.graylog.org/products/open-source) の Provider https://github.com/suzuki-shunsuke/go-graylog

少し突っ込んだ話をすると、 Terraform 本体同様 Provider も実態は Golang で書かれた1バイナリであり、本体から Provider を RPC によって呼び出すという形でプラグイン機構を実現しています。
https://github.com/hashicorp/go-plugin

### 余談: Provider の自作

Provider の自作に興味のある方は https://www.terraform.io/docs/extend/writing-custom-providers.html を読むと良いでしょう。
ただし、それを読めば全てわかるということはなく、作りながら Terraform 本体や AWSなどの公式の Provider のソースコードや GoDoc を読みつつ試行錯誤することになると思います。

* https://github.com/terraform-providers/terraform-provider-aws/tree/master/aws
* https://godoc.org/github.com/hashicorp/terraform/helper/schema#Schema
* https://godoc.org/github.com/hashicorp/terraform/helper/schema#ResourceData

## リソース

https://www.terraform.io/docs/glossary.html#resource

Terraform ではインフラを構成する最小の構成要素を `リソース` と呼びます。
例えばサーバが 3 台あればそれぞれが別々のリソースと言えます。
リソースごとに設定を記述します。
`terraform apply` コマンドを実行すると各リソースについて設定と実際のインフラの状態の差分が検知され、リソースごとに CRUD 処理が実行されます。

## 設定ファイル

* https://www.terraform.io/docs/configuration/index.html
* https://github.com/hashicorp/hcl/blob/hcl2/hclsyntax/spec.md

設定ファイルは [HCL](https://github.com/hashicorp/hcl) という言語で記述します。
HCL は Hashicorp Configuration Language の略で、 Hashicorp が開発している JSON や YAML のような設定を記述する言語です。

Terraform v0.12 では HCL の v2 を使います。 v1 は古いので注意してください。

設定ファイルの拡張子は基本 `.tf` です。
次のような形でリソースを定義します。

```hcl
# resource "リソースの種類" "リソース名"
resource "aws_instance" "example" {
  # 属性名 = 属性値
  ami           = "ami-2757f631"
  instance_type = "t2.micro"
}
```

余談ですが、 [GFM (GitHub Flavored Markdown)](https://github.github.com/gfm/) では `hcl` でシンタックスハイライトができます。

各リソース定義はパスによって識別されます。
上記のようなシンプルなリソースの定義の場合 `リソースの種類.リソース名` (`aws_instance.example`) です。パスは一意でなければいけません。

設定ファイルは同じ1つのディレクトリに置きます。
`terraform plan` などのコマンドはカレントディレクトリ直下のファイルしか見ません。

リソースの属性はリソースの種類によって異なります。
各Provider のドキュメントを参照しましょう。

例えば AWS の EC2 instance のドキュメントはこちらです。 https://www.terraform.io/docs/providers/aws/r/instance.html

## リソースの属性の参照

あるリソースの設定で他のリソースの属性値を参照することが出来ます。

サンプルを示します。

```hcl
resource "aws_iam_instance_profile" "example" {
  # リソース aws_iam_role.example の属性 name の値を参照
  role = aws_iam_role.example.name
}
```

## State

https://www.terraform.io/docs/state/index.html

設定ファイルと実際のインフラの差分を検知するには、設定ファイルのリソース定義と実際のインフラのマッピングが必要になります。
設定ファイル上ではリソースはパスによって識別されますが、実際のインフラのリソースはインフラ固有の ID などで識別されます。
設定ファイル上のリソースのパスと、実際のインフラのリソースの ID とのマッピングを保存するストレージが `State` になります。
ただし State の役割はマッピングだけではありません。詳細は https://www.terraform.io/docs/state/purpose.html を参照してください。
「ストレージ」といいましたがその実態はデフォルトではただの JSON ファイルです。
デフォルトでは `terraform apply` などを実行すると勝手に `terraform.tfstate` という名前のファイルがカレントディレクトリに作成、更新されます。
State の保存先は S3 を含め色々サポートされています。

https://www.terraform.io/docs/backends/types/index.html

### 発展: State を持たないツールとの違い

Terraform の他にもインフラを管理するツールはありますが、その中には State のようなマッピングを持たないものもあります。
マッピングを持たないツールだと、ツールを使わずに作ったリソースがツールによって削除される可能性があります。
一方、 Terraform ではツールを使わずに作ったリソースは変更の対象になりません。
変更の対象にしたい場合はそのリソースの情報を State に追加する必要があります。
ただの JSON ファイルなので手で修正することも出来ますが、 [terraform import](https://www.terraform.io/docs/commands/import.html) という専用のコマンドがあるのでそれを使うほうが安全です。

https://www.terraform.io/docs/import/index.html

逆に、あまりないケースではありますが、あるリソースについて Terraform で管理するのをやめたい場合、
そのリソースを設定ファイルだけでなく State からも削除する必要があります。
単純に設定ファイルから削除するだけだと、 Terraform によって実際のインフラのリソースが削除されてしまいます。
State から削除するには [terraform state rm](https://www.terraform.io/docs/commands/state/rm.html) というコマンドを使います。

その他 State を管理するためのコマンドが色々あるのでドキュメントを参照してください。

https://www.terraform.io/docs/commands/state/index.html

### 発展: Remote State を使うか否か

Terraform を CI/CD によって実行する前提です。
基本的に remote state を使うべきだと思います。

remote state を使わない場合、 `terraform.tfstate` を Git で管理することになるでしょう。
その場合、 feature branch の terraform.tfstate と実際のインフラの状態の乖離が起こりえます。
チームの規模が大きく複数の開発が並行して行われれば行われるほど、乖離の弊害が大きくなり、 remote state を使ったほうが良いということになるでしょう。

また、 CI/CD で更新された `terraform.tfstate` を commit & push する必要があります。
`terraform apply` で失敗した場合、一部のリソースの更新には成功し、State が更新されているかもしれません。
`terraform apply` が失敗しても即座に終了させずに `terraform.tfstate` を commit & push する必要があります。
これは CI/CD のコードで気をつければ問題ないのでデメリットと言うほどではないですが、昔自分は何度か commit & push し損ねて面倒くさいことになりました。

## 変数

* https://www.terraform.io/docs/glossary.html#variables
* https://learn.hashicorp.com/terraform/getting-started/variables.html

設定ファイルでは変数が使えます。
変数を使うには宣言が必要です。宣言では型なども指定できます。

https://www.terraform.io/docs/configuration/types.html

変数の宣言はつぎのようにします。 `.tf` のどこに書いても大丈夫です。

```hcl
# variable "変数名"
variable "region" {
  type    = "string"
  default = "us-east-1"
}
```

変数の値の設定は次のようにします。 `terraform.tfvars` というファイル名に書いておくとコマンド実行時に自動で読み込まれます。

```hcl
ami = {
  "us-east-1" = "ami-abc123"
  "us-west-2" = "ami-def456"
}
```

コマンドライン引数で渡すことも出来ます。

## Provider の設定

Provider を使うには設定が必要です。
設定の属性は Provider によって違います。

```hcl
# provider "Provider名"
provider "google" {
  project = "acme-app"
  region  = "us-central1"
}
```

## Module

https://www.terraform.io/docs/modules/index.html
https://www.terraform.io/docs/configuration/modules.html

複数のリソースの設定をまとめて再利用可能な形でパッケージングする仕組みとして Module があります。
リソースが1つだけでも、チーム固有の設定を Module のデフォルト値として設定したり、チームでは使わないリソースの属性を隠蔽したり用途はあるかと思います。

Module の作り方は通常の Terraform の設定ファイルの記述と同様、 1つのディレクトリ直下にパッケージングするリソースの設定ファイルを記述するだけです。

Module は次のように使います。

```hcl
# module "名前"
module "servers" {
  # モジュールへのパス
  source = "./app-cluster"

  # モジュールのパラメータ
  servers = 5
}
```

Module のパスは `module.モジュール名` (module.servers) になります。

Module の `source` としてはローカルのディレクトリへのパス以外にも様々なものをサポートしています。

https://www.terraform.io/docs/modules/sources.html

### コミュニティの Module

コミュニティによって様々な Module が提供されています。

* https://registry.terraform.io/
* https://registry.terraform.io/modules/terraform-aws-modules
* https://github.com/terraform-community-modules
* https://github.com/terraform-aws-modules

### Module 化するべきか否か

Go や Python などのプログラミング言語でのモジュール(ライブラリやパッケージ等呼び方は様々ですが)化と比べ、
Terraform の Module 化は慎重でなければなりません。
理由はいくつかありますが、

* Module を変更すると State の変更も必要になる場合もある
* Terraform の設定は中々パワフルだとは思いますが、プログラミング言語に比べると柔軟性が足らず、変更に弱く、複雑になるとメンテナンス性が悪くなります

偏見かもしれませんが、プログラミング言語に比べると、 Terraform に「精通」している人はそれほど多くないと思います。
初心者は直ぐ Module 化に飛びつくのはやめた方が良いと思います(尤も使ってみないと理解が深まらないという意味では使ったほうが良いですが)。

## Output

https://www.terraform.io/docs/configuration/outputs.html

Module で定義したリソースの属性は基本的に外部から隠蔽されます。
リソースの属性を参照できるようにするには、次のように個別に Output として宣言する必要があります。

```hcl
output "instance_ip_addr" {
  value = aws_instance.server.private_ip
}
```

これはモジュールで定義したリソース `aws_instance.server` の属性 `private_ip` を Module の属性 `instance_ip_addr` として外部に公開するという意味です。
Module のパスが module.servers だとすると、 `module.servers.instance_ip_addr` で参照できます。

## Data Source

https://www.terraform.io/docs/configuration/data-sources.html

Data source は Terraform で管理していない(あるいは他の State で管理している)リソースの属性を参照するための仕組みです。

次のように記述します。

```hcl
# data "リソースの種類" "リソース名"
data "aws_ami" "example" {
  # リソースを一意に識別するためのクエリ

  most_recent = true

  owners = ["self"]
  tags = {
    Name   = "app-server"
    Tested = "true"
  }
}
```

Data source では属性によって実際のインフラのリソースを検索します。検索にマッチするリソースは必ず1つでなければならず、
複数マッチしたり1つもマッチしなかったりすると失敗します(厳密には Provider の実装次第ですが)。

### 他の State で管理されているリソースの属性を Data source として参照する

https://www.terraform.io/docs/providers/terraform/d/remote_state.html

他の State で管理されているリソースの属性を Data source を使って参照するために `terraform_remote_state` があります。
参照するには Module 同様 その属性が Output によって外部に公開されている必要があります。

```hcl
data "terraform_remote_state" "vpc" {
  backend = "remote"

  config = {
    organization = "hashicorp"
    workspaces = {
      name = "vpc-prod"
    }
  }
}
```

## workspace

* https://www.terraform.io/docs/state/workspaces.html
* [Terraform workspaceを利用して環境毎のリソース名の変更を行う](https://blog.mosuke.tech/entry/2018/06/16/terraform-workspaces/)
* [Terraform 運用ベストプラクティス 2019 ~workspace をやめてみた等諸々~](http://kenzo0107.hatenablog.com/entry/2019/04/17/103558)

Terraform には workspace という機能がありますが、こちらの機能は自分は使ったことがないので簡単に触れるだけに留めます。
workspace の代表的なユースケースは production や staging などの異なる環境で同じ設定ファイルを共有しつつ State を switch することだと思います。

workspace を使わない場合環境ごとにディレクトリ及び設定ファイルを完全に分けることになると思います。

```
production/
  ec2.tf
  terraform.tfstate
  ...
staging/
  ec2.tf
  terraform.tfstate
  ...
```

workspace を使うと設定ファイルを共有できます。

```
ec2.tf
terraform.tfstate.d/
  production/
    terraform.tfstate
  staging/
    terraform.tfstate
```

環境ごとの設定の微妙な違いは設定ファイル内で分岐することになるのでしょう。

### 発展: workspace を使うべきか

workspace を使うべきか否かは意見が分かれている様に思えます。
恐らくユースケースやチームメンバーの Terraform への成熟度にもよるでしょう。

現状自分は「使わない」というスタンスです。

自分がこれまで関わってきたチーム事情だと Terraform に全員が精通しているというよりは、むしろ Terraform にそこまで詳しくない人も触ることが多いです。
偏見かもしれませんが、そういうチームは少なくないのではないでしょうか？
そういうチーム状況では、 workspace を使って DRY になるというメリット以上に、 workspace そのものへの学習コストや環境によって設定ファイル内で分岐する学習コストを省き、
Terraform に精通していなくても理解できるくらいシンプルに保つことのほうが大事なのではないかなと思います。

特に、これまで Terraform を特定のサービス横断的なチームで管理していた状態から各サービスの担当者に ownership を委譲しようとする場合、上述の学習コスト・複雑さが弊害になるのではないかなと感じています。

ただし、繰り返しになりますが自分は workspace を使ったことがありません。
上記の自分の認識が間違っているかもしれませんし、今後 workspace を使ってみたら考えが変わるかもしれません。

## Terraform command の基本的な使い方

https://www.terraform.io/docs/commands/index.html

設定ファイルを書いた上で基本的なコマンドの使い方について説明します。

### terraform init

https://www.terraform.io/docs/commands/init.html

まず、 `terraform init` を実行する必要があります。

```
$ terraform init
```

`terraform init` によって、依存する Provider がインストールされたりします。

### terraform fmt

https://www.terraform.io/docs/commands/fmt.html

`terraform fmt` によってコードを整形することが出来ます。

```
$ terraform fmt [-check] [-recursive]
```

`-check` をつけると、コードを整形する代わりに、コードが整形されていなかったら exit code が non 0 で終了します。
CI でコードが整形されているかのチェックに使えます。

### terraform plan

https://www.terraform.io/docs/commands/plan.html

`terraform plan` によって `terraform apply` の dry run が出来ます。

```
$ terraform plan [-refresh=false]
```

実際のインフラは変更されず、 `apply` を実行した場合にどのような変更が行われるか出力されます。

### terraform apply

https://www.terraform.io/docs/commands/apply.html

実際にインフラを設定ファイルに合わせて変更します。

```
$ terraform apply [-auto-approve]
```

デフォルトでは最初に plan の実行結果が出力されて本当に変更を適用してよいか確認があります。
`-auto-approve` を指定すると確認を skip 出来ます。

`plan` に成功しても `apply` には失敗する場合もあります。
簡単な例としては更新する権限がない場合です。
`apply` に失敗すると一部のリソースだけ更新されるということは起こりえます。
そうなってもロールバックとかは出来ない(terraform に rollback の機能はない)ので注意してください。

### terraform destroy

https://www.terraform.io/docs/commands/destroy.html

Terraform で作成したインフラを削除します。

```
$ terraform destroy
```

恐らく実際の運用でこれを使うことはあまりないと思います。
削除したいなら設定ファイルからそのリソースを消して apply するでしょう。
Terraform の勉強がてら遊びで作ったものを丸っと消すとか主にそういう用途で使われる気がします。

### terraform refresh

https://www.terraform.io/docs/commands/refresh.html

State を実際のインフラの状態に合わせて更新します。
インフラは更新されません。
手動でインフラを変更した場合に、その変更を State に反映させるのに使えます。

```
$ terraform refresh
```

### terraform import

https://www.terraform.io/docs/commands/import.html
https://www.terraform.io/docs/import/index.html

Terraform で管理されていないリソースのデータを State にインポートします。
State はリソースパスとインフラのID のマッピングを管理すると言いましたが、 import コマンドの引数ではこの2つを渡すことでマッピングできるようにします。

```
# リソースパス ID
$ terraform import aws_instance.example i-abcd1234
```

ちなみに、一部のリソースは import をサポートしてません。
サポートしているかどうかは Provider の実装に依存します。

### terraform state

https://www.terraform.io/docs/commands/state/index.html

State を操作するためのコマンドです。様々なサブコマンドがあります。

## Terraform の CI/CD

terraform apply は原則 CD によって実行されるべきだし、
CI によって `terraform fmt -check` や `terraform plan` は実行されるべきだと思っています。

逆に `terraform plan` や `apply` は CI/CD でやってるけど、
`terraform state` や `terraform import` はローカルから実行しているというチームも少なくはないのかなという気がしています。

課題となりうるのは

* Credential の管理
* IP制限

かなと思います。

### Credential の管理

Terraform で使うクレデンシャルは強力な権限を持ちがちなので扱いに注意しないといけません。
権限を絞るのが理想ですが、結構難しかったりします。

例えば PR の CI では `terraform apply` を実行しないのであれば、 PR の CI 用に Read Only なクレデンシャルを用意するとかもありかもしれません。

例えば AWS のインフラ管理を Terraform + CircleCI で行う場合、
AWS のクレデンシャルを CircleCI で参照できるようにする必要があります。
CircleCI では SSH でコンテナにログインできるため、クレデンシャルを盗もうと盗めますし、
CircleCI に限らず悪意のあるコードを CI で実行して外部にクレデンシャルを送ることも出来ます。

### IP 制限

CI で Terraform を使う場合、 CI の実行環境からインフラの API にアクセスできる必要があります。
IP 制限をかけている場合、 CI の実行環境からはアクセスできるようにするなどの工夫が必要です。
CI の実行環境の IP range が定まってない場合、話は更に難しくなります。

## 発展: 設定ファイル中で使える関数

設定ファイル内ではビルドイン関数が使えます。
公式ドキュメントを参照してください。

https://www.terraform.io/docs/configuration/functions.html

## 余談: awesome-terraform

https://github.com/shuaibiyy/awesome-terraform

Terraform 関連の awesome なツールのリンク集です。
