---
title: "Terraform で空の AWS Lambda Function を作る方法"
date: 2021-06-24T21:25:24+09:00
archives: ["2021/06"]
tags:
- terraform
- lambda
---

Terraform で空の AWS Lambda Function を作ろうとした際にちょっとハマったのでやり方を書いておきます。

「空の Lambda Function」という表現は適切ではないかもしれませんが、
Lambda で実行するコードのデプロイは Terraform 以外のツールでやるけど、
Lambda Function の作成は Terraform で行うので、 dummy のコードを指定して Terraform で Lambda を作るという話です。

自分は今は [lambroll](https://github.com/fujiwara/lambroll) というツールで Lambda をデプロイしています。
lambroll は Lambda Function も作ってくれるので Terraform で作る必要は必ずしもありません。

しかし Lambda Function に関連するリソースを Terraform で管理する場合、
Lambda Function も Terraform で作ると Lambda Function の ARN や Invoke ARN を参照できます。

また lambroll でデプロイする場合も先に Terraform で IAM Role を作成する必要がありますが、
Terraform で aws_lambda_permission のようなリソースを作成するには Lambda Function が先に作られている必要があるので、
互いに依存関係が発生し、面倒なことになります。

また Lambda Function の削除も Terraform でできるようになります。

なので、 Terraform で Lambda Function を作っておいたほうが色々都合が良いです。

Terraform で作成と削除は行うものの、更新をしたいわけではないので、 `ignore_changes = all` を指定します。

https://www.terraform.io/docs/language/meta-arguments/lifecycle.html#ignore_changes

Lambda Function を Web UI などから作る場合 Function code はなくても大丈夫ですが、
Terraform で Lambda Function を作る場合、 `filename` や `image_uri`, `s3_bucket` のいずれかが必須になります。
これは issue もありますが、仕様のようにみえます。

https://github.com/hashicorp/terraform-provider-aws/issues/5945

ECR や S3 に dummy のコードを用意するというのも一つの手ですが、環境に依存するのがあまり良い気がしないので、
archive_file data source を使って dummy の zip ファイルを生成するという方法を取ることにしました。

https://registry.terraform.io/providers/hashicorp/archive/latest/docs/data-sources/archive_file

次のようなコードで CI で terraform apply を実行しましたが、 zip file がないと言われて失敗しました。

```tf
resource "aws_lambda_function" "main" {
  # https://www.terraform.io/docs/language/meta-arguments/lifecycle.html#ignore_changes
  # Terraform can create and destroy the remote object but will never propose updates to it.
  lifecycle {
    ignore_changes = all
  }

  function_name = "foo"
  role          = aws_iam_role.main.arn

  handler  = "bootstrap"
  runtime  = "provided.al2"
  filename = data.archive_file.dummy.output_path
}

data "archive_file" "dummy" {
  type        = "zip"
  output_path = "${path.module}/dummy.zip"

  source {
    content  = "dummy"
    filename = "bootstrap"
  }
}
```

```
Error: unable to load "lambda-base/dummy.zip": open lambda-base/dummy.zip: no such file or directory
```

しかしローカルで terraform plan, apply を実行してみても再現しませんでした。

CI では Pull Request で plan file を生成して S3 に plan file を upload し、 PR をマージした default branch では terraform plan を実行せずに S3 から plan file をダウンロードして terraform apply を実行しています。

[Pull Request の terraform plan の実行結果を S3 に保存して安全に apply | Quipper Product Team Blog](https://quipper.hatenablog.com/entry/2021/03/10/080000)

plan file を指定して terraform apply を実行した際には zip file が作成されず、上記のエラーが発生することがわかりました。

関連する issue もありました。 https://github.com/hashicorp/terraform-provider-archive/issues/39

この issue では幾つかの解決方法が紹介されています。ちなみに 2021-06-24 現在 Hashicorp 側からは特に反応がないように見えます。
random_uuid や random_string を使った方法もありますが、 Lambda を作成するだけなら null_resource に依存させるだけで十分のように思えました。

```tf
data "archive_file" "dummy" {
  type        = "zip"
  output_path = "${path.module}/dummy.zip"
  source {
    content  = "dummy"
    filename = "bootstrap"
  }
  depends_on = [
    null_resource.main
  ]
}

resource "null_resource" "main" {}
```

このように null_resource に依存させると terraform plan では zip file が作られず、 terraform apply ではじめて zip file が作られるため、
terraform apply が失敗することはなくなりました。
