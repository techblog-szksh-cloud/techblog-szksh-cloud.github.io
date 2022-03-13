---
title: "Graylog の Terraform を CI/CDで実行する"
date: 2018-12-07T08:22:49+09:00
draft: false
tags:
- graylog
- terraform
- ci
archives: ["2018/12"]
---

以前 Graylog を Terraform で管理する記事を書きました。

https://suzuki-shunsuke.github.io/graylog-terraform/

今回はそれを CI/CD で実行できるようにした話です。

ただし、今回の内容は Graylog に限らず Terraform を CI/CD で実行する方法として使えると思います。

今回実現したのは以下のことです。

* PR時にテストをする
* `plan/*` tag を push すると `terraform plan` が実行される
* `apply/*` tag を push すると `terraform apply` が実行され、tfstate がコミット、プッシュされる

## ソースコード

https://github.com/suzuki-shunsuke/example/tree/master/graylog-terraform に置いておきました。

* https://github.com/suzuki-shunsuke/example/blob/master/graylog-terraform/role.tf#L13-L25
* https://github.com/suzuki-shunsuke/example/blob/master/graylog-terraform/user.tf#L12-L21
* https://github.com/suzuki-shunsuke/example/blob/master/graylog-terraform/.drone.yml
* https://github.com/suzuki-shunsuke/example/blob/master/graylog-terraform/terraform.tfvars.tpl
* https://github.com/suzuki-shunsuke/example/blob/master/graylog-terraform/drone_pipeline_commands/git.sh

## CI/CD用の user, role を作成する

まずは role を作成します。

```
resource "graylog_role" "terraform" {
  name        = "terraform"
  description = "terraform"

  permissions = [
    "dashboards:*",
    "indexsets:*",
    "inputs:*",
    "roles:*",
    "streams:*",
    "users:*",
  ]
}
```

permission は terraform で管理するリソースのみ付与しますが、
それでも結構強い権限を付与するので取扱に注意してください。

よりちゃんと権限管理するのであれば project ごとに role, user を分けるという手もありそうですが、そうすると管理も大変そうです。

次に user を作成します。

```
resource "graylog_user" "terraform" {
  username  = "terraform"
  email     = "terraform@example.com"
  full_name = "terraform"

  roles = [
    "terraform",
    "Reader",
  ]
}
```

Reader か Admin は必須らしいのでReaderを付与しています。

http://docs.graylog.org/en/2.5/pages/users_and_roles/permission_system.html

> Every user needs to at least have the standard “Reader” permissions 
> but those do not provide any access to data or maintenance functionalities.

次にこのユーザーの token を発行します。

http://docs.graylog.org/en/2.5/pages/configuration/rest_api.html#creating-and-using-access-token

```
$ curl -u <username>:<password> -H 'Accept: application/json' -X POST 'https://graylog.example.com/api/users/<username>/tokens/<tokenname>?pretty=true'
```

発行したトークンを CI/CD にクレデンシャルとしてセットします。
やり方は利用するCI/CDによって変わります。

以降は [drone ci](https://drone.io/) という CI/CD プラットフォームを前提に書きますが、
travis ci や circle ci, jenkins など他のCI/CDでも考え方は一緒だと思います。

.drone.yml は 以下のようになります。

```yaml
---
pipeline:
  envsubst:
    image: suzukishunsuke/alpine-envsubst:0.1.0
    commands:
    - envsubst < terraform.tfvars.tpl > terraform.tfvars
    secrets:
    - source: terraform_token_prod
      target: graylog_auth_name
    when:
      event: tag
  plan:
    image: &terraform_image "suzukishunsuke/terraform-graylog:0.1.2"
    commands:
    - terraform init
    - terraform validate
    - terraform fmt -check
    - terraform plan
    when:
      event: tag
      ref: refs/tags/plan/*
  apply:
    image: *terraform_image
    commands:
    - terraform init
    - terraform validate
    - terraform plan
    - terraform fmt -check
    - terraform apply -auto-approve
    when:
      event: tag
      ref: refs/tags/apply/*
  git:
    image: plugins/git
    commands:
    - sh drone_pipeline_commands/git.sh
    when:
      event: tag
      ref: refs/tags/apply/*
  validate:
    image: *terraform_image
    environment:
    - "TF_VAR_auth_name=dummy"
    - "TF_VAR_auth_password=token"
    - "TF_VAR_web_endpoint_uri=https://graylog.example.com/api"
    commands:
    - terraform init
    - terraform validate
    - terraform fmt -check
    when:
      event: pull_request
```

まずは terraform を実行するための Docker Image を用意しました。

https://hub.docker.com/r/suzukishunsuke/terraform-graylog/

PR時のテストでは terraform validate と terraform fmt を実行します。

```yaml
  validate:
    image: *terraform_image
    environment:
    - "TF_VAR_auth_name=dummy"
    - "TF_VAR_auth_password=token"
    - "TF_VAR_web_endpoint_uri=https://graylog.example.com/api"
    commands:
    - terraform init
    - terraform validate
    - terraform fmt -check
    when:
      event: pull_request
```

`TF_VAR_` で始まるのが terraform の変数です。

https://www.terraform.io/docs/configuration/variables.html#environment-variables

token は適当な文字列をセットしてください。PR時には実際にgraylog の API を呼ばないので適当なので問題ありません。

次に `plan/*` と tag を push すると `terraform plan` が実行されます。
この結果を見て `terraform apply` を実行します。

これは [drone の secrets](https://0-8-0.docs.drone.io/manage-secrets/) の都合なのですが、secrets の環境変数は全部大文字になってしまうため `TF_VAR_auth_name` という環境変数をセットできません。そのため [envsubst](https://www.gnu.org/software/gettext/manual/html_node/envsubst-Invocation.html) を使って terraform.tfvars に token を書き込んでいます。

```yaml
  envsubst:
    image: suzukishunsuke/alpine-envsubst:0.1.0
    commands:
    - envsubst < terraform.tfvars.tpl > terraform.tfvars
    secrets:
    - source: terraform_token_prod
      target: graylog_auth_name
    when:
      event: tag
```

terraform.tfvars.tpl はこんな感じです。

```
web_endpoint_uri = "https://graylog.example.com/api"
auth_name = "$GRAYLOG_AUTH_NAME"
auth_password = "token"
```

plan を実行する step です。

```yaml
  plan:
    image: &terraform_image "suzukishunsuke/terraform-graylog:0.1.2"
    commands:
    - terraform init
    - terraform validate
    - terraform fmt -check
    - terraform plan
    when:
      event: tag
      ref: refs/tags/plan/*
```

`apply/*` と tag を push すると `terraform apply` が実行されます。

```yaml
  apply:
    image: *terraform_image
    commands:
    - terraform init
    - terraform validate
    - terraform plan
    - terraform fmt -check
    - terraform apply -auto-approve
    when:
      event: tag
      ref: refs/tags/apply/*
```

terraform.tfstate をコミット, プッシュします。

```yaml
  git:
    image: plugins/git
    commands:
    - sh drone_pipeline_commands/git.sh
    when:
      event: tag
      ref: refs/tags/apply/*
```

drone_pipeline_commands/git.sh はこんな感じです。

```sh
git status --porcelain || exit 1
if `git diff --exit-code --quiet terraform.tfstate`; then
  echo "terraform.tfstate isn't changed"
  exit 0
else
  git config user.name drone
  git config user.email drone@example.com
  git add . || exit 1
  git commit -m "build: commit by drone" || exit 1
  git push origin HEAD:master || exit 1
fi
```

terraform.tfstate に変化があった場合のみ コミット・プッシュするようにしています。
この辺のやり方はもっとうまいやり方があるかもしれません
(自分のシェルスクリプト力が低いため)。

`terraform plan` の `-detailed-exitcode` オプションを使うのが良い気がします。

```
  -detailed-exitcode  Return detailed exit codes when the command exits. This
                      will change the meaning of exit codes to:
                      0 - Succeeded, diff is empty (no changes)
                      1 - Errored
                      2 - Succeeded, there is a diff
```

以上 Graylog の Terraform を CI/CD で実行する方法を紹介しました。
Graylog に限らず、 Terraform を CI/CD で実行する方法として使えると思うので参考になれば幸いです。
