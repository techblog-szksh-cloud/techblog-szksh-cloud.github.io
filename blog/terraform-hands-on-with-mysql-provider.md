---
title: "Terraform ハンズオン with MySQL Provider"
date: 2020-01-17T09:14:08+09:00
tags:
- terraform
---

Terraform を勉強するには実際に使ってみるのが一番手っ取り早いですが、
では手頃な題材はあるかと言われると少し難しいです。

[公式の Getting Started では AWS が使われています](https://learn.hashicorp.com/terraform/getting-started/build)が、
AWS のアカウントやクレデンシャルが必要ですしお金もかかってしまいます(無料枠はありますが)。
もう少し手軽なものが欲しいところです。

そこで公式の Provider で丁度いいものはないか探したところ、 [MySQL Provider](https://www.terraform.io/docs/providers/mysql/) が良さそうでした。
MySQL のユーザーや Database を Terraform で管理したいとは自分は思いませんが、 Terraform の入門で遊ぶにはちょうどよいでしょう。

ちなみに公式の Provider のリストはこちらです。

* https://github.com/terraform-providers
* https://www.terraform.io/docs/providers/index.html

また、 Terraform に関しては [Terraform 入門](https://techblog.szksh.cloud/terraform-getting-started/) も参照してください。

今回の作業用に適当にディレクトリを作成し、そこで作業しましょう。

以降、コマンドの実行結果は一部省略することがあります。

```
$ mkdir workspace
$ cd workspace
```

## Terraform のバージョンと tfenv

Terraform を複数人で使う場合、 Terraform のバージョンを揃えるのが重要です。 理由の一つとして、 Terraform の State は State を作成した Terraform のバージョンを記録しており、それより古いバージョンの Terraform で `terraform plan` などを実行すると失敗するようになっていることが挙げられます(この点については後でも触れます)。
そういう意味では、 [tfenv](https://github.com/tfutils/tfenv) によってバージョン管理するのが良いです。

`.terraform-version` を作成します。

```
$ echo 0.12.19 > .terraform-version
$ tfenv install
$ terraform version
Terraform v0.12.19
```

## MySQL を Docker で動かす

では MySQL を Docker で動かします。

https://hub.docker.com/_/mysql?tab=description

### Docker Compose 使う場合

docker-compose.yml

```yaml
---
version: "3"
services:
  mysql:
    image: mysql:5.7.28
    ports:
    - "23306:3306"
    environment:
      MYSQL_ROOT_PASSWORD: password
```

```
$ docker-compose up -d
$ docker-compose ps  # コンテナが起動しているか確認
```

不要になったら削除しましょう。

```
$ docker-compose rm -sf mysql
```

これから Terraform で MySQL の Database を作成します。
作成されているか確認するために MySQL に接続しておきます。

```
$ docker-compose exec mysql mysql -u root -p -P 23306
mysql> show databases;  # database の一覧を確認
+--------------------+
| Database           |
+--------------------+
| information_schema |
| mysql              |
| performance_schema |
| sys                |
+--------------------+
4 rows in set (0.00 sec)
```

### Docker Compose を使わない場合

基本的に Docker Compose 使う場合と変わりません。

```
$ docker run --name terraform-mysql -p "23306:3306" -e MYSQL_ROOT_PASSWORD=password -d mysql:5.7.28
$ docker exec -ti terraform-mysql mysql -u root -p -P 23306
$ docker rm -vf terraform-mysql
```

## リソースの作成

次のような設定ファイルを用意します。

main.tf

```hcl
provider "mysql" {
  endpoint = "localhost:23306"
  username = "root"
  password = "password"
}

resource "mysql_database" "foo" {
  name = "foo"
}
```

設定できる属性やその意味などはドキュメントを確認してください。

https://www.terraform.io/docs/providers/mysql/r/database.html

MySQL Provider の設定として MySQL に接続するための情報と、Terraform によって作成するデータベース `foo` の設定が定義されています。
password が平文で書かれているのが気になるかもしれませんが、一旦スルーしてください。

この状態で `terraform plan` を実行してみます。 `terraform plan` は `terraform apply` によるリソースの作成を DRY RUN するコマンドです。

```
$ terraform plan

Error: Could not satisfy plugin requirements


Plugin reinitialization required. Please run "terraform init".

Plugins are external binaries that Terraform uses to access and manipulate
resources. The configuration provided requires plugins which can't be located,
don't satisfy the version constraints, or are otherwise incompatible.

Terraform automatically discovers provider requirements from your
configuration, including providers used in child modules. To see the
requirements and constraints from each module, run "terraform providers".



Error: provider.mysql: no suitable version installed
  version requirements: "(any version)"
  versions installed: none
```

失敗しました。

> Plugin reinitialization required. Please run "terraform init".

とある通り、 `terraform plan` や `apply` などのコマンドを実行する前に `terraform init` を実行する必要があります。

```
$ terraform init

Initializing the backend...

Initializing provider plugins...
- Checking for available provider plugins...
- Downloading plugin for provider "mysql" (terraform-providers/mysql) 1.9.0...
^C
The following providers do not have any version constraints in configuration,
so the latest version was installed.

To prevent automatic upgrades to new major versions that may contain breaking
changes, it is recommended to add version = "..." constraints to the
corresponding provider blocks in configuration, with the constraint strings
suggested below.

* provider.mysql: version = "~> 1.9"

Terraform has been successfully initialized!

You may now begin working with Terraform. Try running "terraform plan" to see
any changes that are required for your infrastructure. All Terraform commands
should now work.

If you ever set or change modules or backend configuration for Terraform,
rerun this command to reinitialize your working directory. If you forget, other
commands will detect it and remind you to do so if necessary.
```

Provider のダウンロードが行われています。
`terraform init` を実行すると `.terraform` というディレクトリが作成されます。

```
$ ls -A
.terraform  .terraform-version  main.tf
```

`terraform init` は何度でも安全に実行できます。
`.terraform` を削除した場合でももう一度 `terraform init` を実行すれば問題ありません。

次に `terraform plan` を実行します。

```
$ terraform plan
Refreshing Terraform state in-memory prior to plan...
The refreshed state will be used to calculate this plan, but will not be
persisted to local or remote state storage.


------------------------------------------------------------------------

An execution plan has been generated and is shown below.
Resource actions are indicated with the following symbols:
  + create

Terraform will perform the following actions:

  # mysql_database.foo will be created
  + resource "mysql_database" "foo" {
      + default_character_set = "utf8"
      + default_collation     = "utf8_general_ci"
      + id                    = (known after apply)
      + name                  = "foo"
    }

Plan: 1 to add, 0 to change, 0 to destroy.

------------------------------------------------------------------------

Note: You didn't specify an "-out" parameter to save this plan, so Terraform
can't guarantee that exactly these actions will be performed if
"terraform apply" is subsequently run.
```

> Plan: 1 to add, 0 to change, 0 to destroy.

とある通り、リソースが 1 つ作成されるようです。 DRY RUN なのでまだ作成されてません。

では実際に作成してみましょう。

```
$ terraform apply
An execution plan has been generated and is shown below.
Resource actions are indicated with the following symbols:
  + create

Terraform will perform the following actions:

  # mysql_database.foo will be created
  + resource "mysql_database" "foo" {
      + default_character_set = "utf8"
      + default_collation     = "utf8_general_ci"
      + id                    = (known after apply)
      + name                  = "foo"
    }

Plan: 1 to add, 0 to change, 0 to destroy.

Do you want to perform these actions?
  Terraform will perform the actions described above.
  Only 'yes' will be accepted to approve.

  Enter a value: yes

mysql_database.foo: Creating...
mysql_database.foo: Creation complete after 0s [id=foo]

Apply complete! Resources: 1 added, 0 changed, 0 destroyed.
```

途中確認があるので `yes` と入力すると実際に変更が適用されます。

本当に Database が作られているか確認します。
MySQL クエリを叩きます。

```
mysql> show databases;
+--------------------+
| Database           |
+--------------------+
| information_schema |
| foo                |
| mysql              |
| performance_schema |
| sys                |
+--------------------+
5 rows in set (0.01 sec)

mysql> select * from INFORMATION_SCHEMA.SCHEMATA where SCHEMA_NAME='foo';
+--------------+-------------+----------------------------+------------------------+----------+
| CATALOG_NAME | SCHEMA_NAME | DEFAULT_CHARACTER_SET_NAME | DEFAULT_COLLATION_NAME | SQL_PATH |
+--------------+-------------+----------------------------+------------------------+----------+
| def          | foo         | utf8                       | utf8_general_ci        | NULL     |
+--------------+-------------+----------------------------+------------------------+----------+
1 row in set (0.00 sec)
```

ありました。

すると `terraform.tfstate` というファイルが作られているはずです。

```
$ ls
docker-compose.yml main.tf  terraform.tfstate
```

こんな JSON ファイルになります。

```json
{
  "version": 4,
  "terraform_version": "0.12.19",
  "serial": 1,
  "lineage": "7011a551-bfa1-96a5-4153-2c9d6f32251c",
  "outputs": {},
  "resources": [
    {
      "mode": "managed",
      "type": "mysql_database",
      "name": "foo",
      "provider": "provider.mysql",
      "instances": [
        {
          "schema_version": 0,
          "attributes": {
            "default_character_set": "utf8",
            "default_collation": "utf8_general_ci",
            "id": "foo",
            "name": "foo"
          },
          "private": "bnVsbA=="
        }
      ]
    }
  ]
}
```

管理されているリソースの情報と、 Terraform のバージョンなどのメタ情報が保存されています。
このファイルは基本的に terraform によって更新されるものであり、人間が手で修正するものではありません。

## 古い Terraform を使ってみる

ここであえて古いバージョンの Terraform を使って `terraform plan` を実行してみます。

```
$ echo 0.12.12 > .terraform-version
$ tfenv install
$ terraform version
$ terraform plan
Error: Error locking state: Error acquiring the state lock: state snapshot was created by Terraform v0.12.19, which is newer than current v0.12.12; upgrade to Terraform v0.12.19 or greater to work with this state

Terraform acquires a state lock to protect the state from being written
by multiple users at the same time. Please resolve the issue above and try
again. For most commands, you can disable locking with the "-lock=false"
flag, but this is not recommended.
```

失敗しました。 State の lock に失敗したようです。 State の lock については https://techblog.szksh.cloud/terraform-state-locking/ も参照してください。

このように古いバージョンの terraform は使えません。
一方新しいバージョンを使うには問題なく使えますが、 State の `terraform_version` が更新され、それまでのバージョンを使ってた人が突然 `terraform plan` などができなくなりますので、注意が必要です。

これが前述した意味になります。

> Terraform を複数人で使う場合、 Terraform のバージョンを揃えるのが重要です。 理由の一つとして、 Terraform の State は State を作成した Terraform のバージョンを記録しており、それより古いバージョンの Terraform で `terraform plan` などを実行すると失敗するようになっていることが挙げられます(この点については後でも触れます)。

では元のバージョンに戻しましょう。

```
$ echo 0.12.19 > .terraform-version
$ terraform version
$ terraform plan
No changes. Infrastructure is up-to-date.
```

## リソースの更新

同じ調子でもう一つ Database を作ってみましょう。
Database foo の設定をコピーして `terraform plan` を実行します。

```hcl
resource "mysql_database" "foo" {
  name = "foo"
}

resource "mysql_database" "foo" {
  name = "foo"
}
```

```
$ terraform plan

Error: Duplicate resource "mysql_database" configuration

  on main.tf line 11:
  11: resource "mysql_database" "foo" {

A mysql_database resource named "foo" was already declared at main.tf:7,1-32.
Resource names must be unique per type in each module.
```

失敗しました。エラーメッセージの通り、リソースパスはユニークでないといけません。
修正しましょう。

```hcl
resource "mysql_database" "foo" {
  name = "foo"
}

resource "mysql_database" "bar" { # "foo" を "bar" に変更
  name = "foo"
}
```

```
$ terraform plan
Terraform will perform the following actions:

  # mysql_database.bar will be created
  + resource "mysql_database" "bar" {
      + default_character_set = "utf8"
      + default_collation     = "utf8_general_ci"
      + id                    = (known after apply)
      + name                  = "foo"
    }

Plan: 1 to add, 0 to change, 0 to destroy.
```

作成されるようです。 apply してみましょう。

```
$ terraform apply
mysql_database.bar: Creating...

Error: Error 1007: Can't create database 'foo'; database exists

  on main.tf line 11, in resource "mysql_database" "bar":
  11: resource "mysql_database" "bar" {
```

失敗しました。同じ名前のデータベースは作成できないので当然です。
このように plan に成功しても apply に失敗することはあります。

では name を修正しましょう。ついでに database foo の default character set を修正します。

```hcl
resource "mysql_database" "foo" {
  name                  = "foo"
  default_character_set = "utf8mb4" # default character set を修正。デフォルトは utf8
}

resource "mysql_database" "bar" {
  name = "bar" # 名前を foo から bar に変更
}
```

```
$ terraform plan
Terraform will perform the following actions:

  # mysql_database.bar will be created
  + resource "mysql_database" "bar" {
      + default_character_set = "utf8"
      + default_collation     = "utf8_general_ci"
      + id                    = (known after apply)
      + name                  = "bar"
    }

  # mysql_database.foo will be updated in-place
  ~ resource "mysql_database" "foo" {
      ~ default_character_set = "utf8" -> "utf8mb4"
        default_collation     = "utf8_general_ci"
        id                    = "foo"
        name                  = "foo"
    }

Plan: 1 to add, 1 to change, 0 to destroy.
```

```
$ terraform apply
mysql_database.bar: Creating...
mysql_database.foo: Modifying... [id=foo]
mysql_database.bar: Creation complete after 0s [id=bar]

Error: Error 1253: COLLATION 'utf8_general_ci' is not valid for CHARACTER SET 'utf8mb4'

  on main.tf line 7, in resource "mysql_database" "foo":
   7: resource "mysql_database" "foo" {
```

mysql_database.foo の変更に失敗しました。一方 mysql_database.bar の作成には成功しています。

```
mysql> show databases;
+--------------------+
| Database           |
+--------------------+
| information_schema |
| bar                |
| foo                |
| mysql              |
| performance_schema |
| sys                |
+--------------------+
6 rows in set (0.00 sec)

mysql> select * from INFORMATION_SCHEMA.SCHEMATA where SCHEMA_NAME='foo';
+--------------+-------------+----------------------------+------------------------+----------+
| CATALOG_NAME | SCHEMA_NAME | DEFAULT_CHARACTER_SET_NAME | DEFAULT_COLLATION_NAME | SQL_PATH |
+--------------+-------------+----------------------------+------------------------+----------+
| def          | foo         | utf8                       | utf8_general_ci        | NULL     |
+--------------+-------------+----------------------------+------------------------+----------+
1 row in set (0.00 sec)
```

このように、一部の変更の適用に失敗にしても、その他の変更は適用されるという、ある意味中途半端に apply される場合があります。こういった場合に rollback するようなコマンドはないので気をつけましょう。適用された変更はちゃんと State に反映されています。

では mysql_database.foo の変更に失敗したので、適切に設定を変更しましょう。

```hcl
resource "mysql_database" "foo" {
  name                  = "foo"
  default_character_set = "utf8mb4"
  default_collation     = "utf8mb4_general_ci" # utf8_general_ci から変更
}
```

apply に `--auto-approve` というオプションをつけると確認なしに適用されます。CIで実行する場合には基本これをつけることになると思います。

```
$ terraform apply --auto-approve
mysql_database.foo: Refreshing state... [id=foo]
mysql_database.bar: Refreshing state... [id=bar]
mysql_database.foo: Modifying... [id=foo]
mysql_database.foo: Modifications complete after 0s [id=foo]

Apply complete! Resources: 0 added, 1 changed, 0 destroyed.
```

変更できました。

```
mysql> select * from INFORMATION_SCHEMA.SCHEMATA where SCHEMA_NAME='foo';
+--------------+-------------+----------------------------+------------------------+----------+
| CATALOG_NAME | SCHEMA_NAME | DEFAULT_CHARACTER_SET_NAME | DEFAULT_COLLATION_NAME | SQL_PATH |
+--------------+-------------+----------------------------+------------------------+----------+
| def          | foo         | utf8mb4                    | utf8mb4_general_ci     | NULL     |
+--------------+-------------+----------------------------+------------------------+----------+
1 row in set (0.00 sec)
```

## terraform.tfstate.backup

ところで `terraform.tfstate.backup` というファイルが作られています。

```
$ ls
docker-compose.yml main.tf  terraform.tfstate  terraform.state.backup
```

これは名前の通り `terraform.tfstate` のバックアップです。
`terraform.tfstate` が terraform のコマンドによって更新される前に自動的にバックアップが作成されます。

## リソースの recreate

今度は database の名前を変更してみましょう。

```hcl
resource "mysql_database" "foo" {
  name                  = "foo2" # foo から変更
  default_character_set = "utf8mb4"
  default_collation     = "utf8mb4_general_ci"
}
```

```
$ terraform plan
Terraform will perform the following actions:

  # mysql_database.foo must be replaced
-/+ resource "mysql_database" "foo" {
        default_character_set = "utf8mb4"
        default_collation     = "utf8mb4_general_ci"
      ~ id                    = "foo" -> (known after apply)
      ~ name                  = "foo" -> "foo2" # forces replacement
    }

Plan: 1 to add, 0 to change, 1 to destroy.
```

先程 default_collation と default_character_set を変更した際は既存のデータベースが更新されましたが、今度は新しく作り直されるようです。
これはリソースの定義に依存します。ソースコードを確認しましょう。

https://github.com/terraform-providers/terraform-provider-mysql/blob/v1.9.0/mysql/resource_database.go#L31

属性の定義で `ForceNew: true` となっている場合、その属性が変更されるとリソースが作り直されます。デフォルトだと既存のリソースの更新になります。
新しく作り直されるということは、テーブルなどは消えるはずです。試しにテーブルを作っておいて、 apply してみましょう。

```
mysql> show tables from foo;
Empty set (0.00 sec)

mysql> create table foo.zoo (id int);
Query OK, 0 rows affected (0.03 sec)

mysql> show tables from foo;
+---------------+
| Tables_in_foo |
+---------------+
| zoo           |
+---------------+
1 row in set (0.00 sec)
```

```
$ terraform apply --auto-approve
mysql_database.foo: Refreshing state... [id=foo]
mysql_database.bar: Refreshing state... [id=bar]
mysql_database.foo: Destroying... [id=foo]
mysql_database.foo: Destruction complete after 0s
mysql_database.foo: Creating...
mysql_database.foo: Creation complete after 0s [id=foo2]

Apply complete! Resources: 1 added, 0 changed, 1 destroyed.
```

> mysql_database.foo: Destroying... [id=foo]

とあるように一度削除されています。

```
mysql> show tables from foo;
ERROR 1049 (42000): Unknown database 'foo'
mysql> show tables from foo2;
Empty set (0.00 sec)
```

新しいデータベースには先程作成したテーブルがありません。このように recreate は危険な操作なのでやるときには注意を払いましょう。

## 変数の利用

変数を使ってみましょう。設定を修正します。

```hcl
resource "mysql_database" "foo" {
  name                  = "foo2"
  default_character_set = var.default_character_set  # 変数 default_character_set を参照
  default_collation     = "utf8mb4_general_ci"
}
```

```
$ terraform plan

Error: Reference to undeclared input variable

  on main.tf line 9, in resource "mysql_database" "foo":
   9:   default_character_set = var.default_character_set

An input variable with the name "default_character_set" has not been declared.
This variable can be declared with a variable "default_character_set" {}
block.
```

エラーになりました。変数を利用するには宣言が必要です。
`variables.tf` というファイルを作成しましょう。

```hcl
variable "default_character_set" {
  type = string
}
```

```
$ terraform plan
var.default_character_set
  Enter a value:
```

値の入力を求められました。これは変数の値が設定されていないからです。
ここでは `foo` と入力してみます。

```
$ terraform plan
var.default_character_set
  Enter a value: foo

Terraform will perform the following actions:

  # mysql_database.foo will be updated in-place
  ~ resource "mysql_database" "foo" {
      ~ default_character_set = "utf8mb4" -> "foo"
        default_collation     = "utf8mb4_general_ci"
        id                    = "foo2"
        name                  = "foo2"
    }

Plan: 0 to add, 1 to change, 0 to destroy.
```

`-input=false` にすると入力を求められずにエラーを返します。

```
$ terraform plan -input=false

Error: No value for required variable

  on variables.tf line 1:
   1: variable "default_character_set" {

The root module input variable "default_character_set" is not set, and has no
default value. Use a -var or -var-file command line argument to provide a
value for this variable.
```

`terraform.tfvars` というファイルを作成し、値を設定しましょう。

```hcl
default_character_set = "utf8mb4"
```

```
$ terraform plan

No changes. Infrastructure is up-to-date.
```

`terraform.tfvars` は特別なファイル名で、カレントディレクトリにこのファイルがあると自動で読み込まれます。

ファイル名を変えて terraform plan をしてみましょう。

```
$ mv terraform.tfvars main.tfvars
$ terraform plan
var.default_character_set
  Enter a value:
```

聞かれました。 main.tfvars が読み込まれていません。 `-var-file` オプションでファイルを指定すれば main.tfvars を読み込めます。

```
$ terraform plan -var-file=main.tfvars
```

もとに戻しておきます。

```
$ mv main.tfvars terraform.tfvars
```

## 他のリソースの属性の参照

設定を修正します。

```hcl
resource "mysql_database" "foo" {
  name                  = "foo2"
  default_character_set = var.default_character_set
  default_collation     = "utf8mb4_general_ci"
}

resource "mysql_database" "bar" {
  name                  = "bar"
  default_character_set = mysql_database.foo.default_character_set  # 他のリソースの属性を参照
  default_collation     = "utf8mb4_general_ci"  # default_character_set に合わせて変更
}
```

```
$ terraform plan
Terraform will perform the following actions:

  # mysql_database.bar will be updated in-place
  ~ resource "mysql_database" "bar" {
      ~ default_character_set = "utf8" -> "utf8mb4"
      ~ default_collation     = "utf8_general_ci" -> "utf8mb4_general_ci"
        id                    = "bar"
        name                  = "bar"
    }

Plan: 0 to add, 1 to change, 0 to destroy.
```

```
$ terraform apply --auto-approve
mysql_database.foo: Refreshing state... [id=foo2]
mysql_database.bar: Refreshing state... [id=bar]
mysql_database.bar: Modifying... [id=bar]
mysql_database.bar: Modifications complete after 0s [id=bar]

Apply complete! Resources: 0 added, 1 changed, 0 destroyed.
```

## terraform state rm

https://www.terraform.io/docs/commands/state/rm.html

Terraform は State によって設定ファイル中のリソースと実際のリソースをマッピングしています。
State からリソースを削除して `terraform plan` を実行してみると、 Terraform はそのリソースを新規で作成しようとします。

```
$ terraform plan
No changes. Infrastructure is up-to-date.

$ terraform state rm mysql_database.bar
Removed mysql_database.bar
Successfully removed 1 resource instance(s).

$ terraform plan
Terraform will perform the following actions:

  # mysql_database.bar will be created
  + resource "mysql_database" "bar" {
      + default_character_set = "utf8mb4"
      + default_collation     = "utf8mb4_general_ci"
      + id                    = (known after apply)
      + name                  = "bar"
    }

Plan: 1 to add, 0 to change, 0 to destroy.
```

実際には同じ名前のデータベースは作成できないので `apply` で失敗するはずです。
`terraform state rm` は元々 Terraform で管理していたものを Terraform で管理するのを止めたり、あるいは手動で削除してしまったリソースを State からも削除するのに使えます。

## terraform import

https://www.terraform.io/docs/import/index.html
https://www.terraform.io/docs/commands/import.html

`terraform import` は Terraform で管理されていないリソースを Terraform で管理するために State にリソースのデータを取り込むコマンドです。
ちょうど `mysql_database.bar` を State から消してしまったので、 import することにしましょう。

https://www.terraform.io/docs/providers/mysql/r/database.html#import にある通り、データベースはデータベース名を指定すれば import 出来ます。

```
$ terraform import mysql_database.bar bar
mysql_database.bar: Importing from ID "bar"...
mysql_database.bar: Import prepared!
  Prepared mysql_database for import
mysql_database.bar: Refreshing state... [id=bar]

Import successful!

The resources that were imported are shown above. These resources are now in
your Terraform state and will henceforth be managed by Terraform.
```

Import 出来ました。 `terraform plan` を実行して差分がなくなっていることを確認します。

```
$ terraform plan
No changes. Infrastructure is up-to-date.
```

次に手動で Database を作成してそれを import してみましょう。

```
mysql> create database zoo;
Query OK, 1 row affected (0.00 sec)
```

```
$ terraform import mysql_database.zoo zoo
Error: resource address "mysql_database.zoo" does not exist in the configuration.

Before importing this resource, please create its configuration in the root module. For example:

resource "mysql_database" "zoo" {
  # (resource arguments)
}
```

失敗しました。 `mysql_database.zoo` が存在しないからです。
空で良いのでリソースの設定を追加しましょう。

```hcl
resource "mysql_database" "zoo" {
}
```

```
$ terraform import mysql_database.zoo zoo
mysql_database.zoo: Importing from ID "zoo"...
mysql_database.zoo: Import prepared!
  Prepared mysql_database for import
mysql_database.zoo: Refreshing state... [id=zoo]

Import successful!

The resources that were imported are shown above. These resources are now in
your Terraform state and will henceforth be managed by Terraform.
```

Import 出来たので zoo を Terraform で管理できるようになりました。
`terraform plan` を実行してみます。

```
$ terraform plan

Error: Missing required argument

  on main.tf line 19, in resource "mysql_database" "zoo":
  19: resource "mysql_database" "zoo" {

The argument "name" is required, but no definition was found.
```

zoo の設定が空で name が設定されていないので失敗しました。
修正します。

```hcl
resource "mysql_database" "zoo" {
  name = "zoo"
}
```

```
$ terraform plan
Terraform will perform the following actions:

  # mysql_database.zoo will be updated in-place
  ~ resource "mysql_database" "zoo" {
      ~ default_character_set = "latin1" -> "utf8"
      ~ default_collation     = "latin1_swedish_ci" -> "utf8_general_ci"
        id                    = "zoo"
        name                  = "zoo"
    }

Plan: 0 to add, 1 to change, 0 to destroy.
```

まだ差分が出てしまいました。

Import は State にはリソースのデータを反映してくれますが、設定ファイルには反映してくれないので自分で反映させる必要があります。
一部の Provider では、設定ファイルに自動で反映させるためのサードパーティのツールもあります。

修正します。

```hcl
resource "mysql_database" "zoo" {
  name                  = "zoo"
  default_character_set = "latin1"
  default_collation     = "latin1_swedish_ci"
}
```

```
$ terraform plan
No changes. Infrastructure is up-to-date.
```

無事差分がなくなりました。

## リソースの削除

次にリソースを削除してみます。

`terraform destroy` もありますが、今回は設定をコメントアウトします。
ちなみに Terraform の設定ファイルの記述言語である HCL ではコメントアウトは `#` でも `//` でもどちらでも良いです。

https://github.com/hashicorp/hcl#syntax

```hcl
# resource "mysql_database" "bar" {
#   name                  = "bar"
#   default_character_set = mysql_database.foo.default_character_set
#   default_collation     = "utf8mb4_general_ci"
# }
```

```
$ terraform plan
Terraform will perform the following actions:

  # mysql_database.bar will be destroyed
  - resource "mysql_database" "bar" {
      - default_character_set = "utf8mb4" -> null
      - default_collation     = "utf8mb4_general_ci" -> null
      - id                    = "bar" -> null
      - name                  = "bar" -> null
    }

Plan: 0 to add, 0 to change, 1 to destroy.
```

```
$ terraform apply --auto-approve
mysql_database.foo: Refreshing state... [id=foo2]
mysql_database.bar: Refreshing state... [id=bar]
mysql_database.bar: Destroying... [id=bar]
mysql_database.bar: Destruction complete after 0s

Apply complete! Resources: 0 added, 0 changed, 1 destroyed.
```

```
mysql> show databases;
+--------------------+
| Database           |
+--------------------+
| information_schema |
| foo2               |
| mysql              |
| performance_schema |
| sys                |
| zoo                |
+--------------------+
6 rows in set (0.00 sec)
```

確かに削除されています。

## terraform state mv

https://www.terraform.io/docs/commands/state/mv.html

ここで リソースの名前を変えて `terraform plan` してみましょう。名前を変えたくなることはまぁあると思います。

```hcl
resource "mysql_database" "foo2" { # foo から foo2 に変更
  name                  = "foo2"
  default_character_set = var.default_character_set
  default_collation     = "utf8mb4_general_ci"
}
```

```
$ terraform plan
Terraform will perform the following actions:

  # mysql_database.foo will be destroyed
  - resource "mysql_database" "foo" {
      - default_character_set = "utf8mb4" -> null
      - default_collation     = "utf8mb4_general_ci" -> null
      - id                    = "foo2" -> null
      - name                  = "foo2" -> null
    }

  # mysql_database.foo2 will be created
  + resource "mysql_database" "foo2" {
      + default_character_set = "utf8mb4"
      + default_collation     = "utf8mb4_general_ci"
      + id                    = (known after apply)
      + name                  = "foo2"
    }

Plan: 1 to add, 0 to change, 1 to destroy.
```

既存のデータベースが削除されて新しいデータベースが作成されてしまいそうです。
State に記録されているリソースのパスを修正する必要があります。

```
$ terraform state mv mysql_database.foo mysql_database.foo2
Move "mysql_database.foo" to "mysql_database.foo2"
Successfully moved 1 object(s).
```

```
$ terraform plan
No changes. Infrastructure is up-to-date.
```

差分がなくなりました。

このようにコマンドによって State を更新する必要があるので、特に複数人で作業する場合は安易にリソースパスを変更するべきではありません。

## terraform refresh

https://www.terraform.io/docs/commands/refresh.html

`terraform refresh` は実際のインフラの情報を取得して State に反映させるコマンドです。
Terraform を使わずに加えた変更を State に反映させるのに使えます。
Terraform を使ってインフラを管理している以上、 Terraform を使わずにインフラを変更するのは望ましくないですが、実際のところはよくある話かと思います。

Terraform を使わずに default_character_set を変更してみましょう。

```
mysql> ALTER DATABASE zoo DEFAULT CHARACTER SET utf8mb4;
Query OK, 1 row affected (0.01 sec)

mysql> select * from INFORMATION_SCHEMA.SCHEMATA where SCHEMA_NAME='zoo';
+--------------+-------------+----------------------------+------------------------+----------+
| CATALOG_NAME | SCHEMA_NAME | DEFAULT_CHARACTER_SET_NAME | DEFAULT_COLLATION_NAME | SQL_PATH |
+--------------+-------------+----------------------------+------------------------+----------+
| def          | zoo         | utf8mb4                    | utf8mb4_general_ci     | NULL     |
+--------------+-------------+----------------------------+------------------------+----------+
1 row in set (0.00 sec)
```

default_character_set を変えると自動で DEFAULT_COLLATION_NAME も変わりました。
設定ファイルにも変更を反映させましょう。

```hcl
resource "mysql_database" "zoo" {
  name                  = "zoo"
  default_character_set = "utf8mb4"
  default_collation     = "utf8mb4_general_ci"
}
```

`-refresh=false` をつけて terraform plan を実行してみます。

```
$ terraform plan -refresh=false
Terraform will perform the following actions:

  # mysql_database.zoo will be updated in-place
  ~ resource "mysql_database" "zoo" {
      ~ default_character_set = "latin1" -> "utf8mb4"
      ~ default_collation     = "latin1_swedish_ci" -> "utf8mb4_general_ci"
        id                    = "zoo"
        name                  = "zoo"
    }

Plan: 0 to add, 1 to change, 0 to destroy.

Warning: Resource targeting is in effect

You are creating a plan with the -target option, which means that the result
of this plan may not represent all of the changes requested by the current
configuration.

The -target option is not for routine use, and is provided only for
exceptional situations such as recovering from errors or mistakes, or when
Terraform specifically suggests to use it as part of an error message.
```

差分が出てしまいました。これは State が更新されていないからです。
terraform.tfstate を確認してみましょう。

```json
    {
      "mode": "managed",
      "type": "mysql_database",
      "name": "zoo",
      "provider": "provider.mysql",
      "instances": [
        {
          "schema_version": 0,
          "attributes": {
            "default_character_set": "latin1",
            "default_collation": "latin1_swedish_ci",
            "id": "zoo",
            "name": "zoo"
          },
          "private": "eyJzY2hlbWFfdmVyc2lvbiI6IjAifQ=="
        }
      ]
    }
```

`-refresh=false` を取ると今度は差分がなくなるはずです。

```
$ terraform plan
No changes. Infrastructure is up-to-date.
```

これは、実は terraform plan はデフォルトでは State の内容と設定ファイルを比較する前に実際のインフラの情報を取得し State の内容をインメモリで更新した上で設定ファイルと比較しているからです。
ただし、インメモリでの更新であり、実際の State が更新されているわけではないです。

今までスルーしてきましたが、そのことは terraform plan の結果でも説明されています。

```
$ terraform plan
Refreshing Terraform state in-memory prior to plan...
The refreshed state will be used to calculate this plan, but will not be
persisted to local or remote state storage.
```

ではなんで `-refresh=false` が必要になるかというと、理由の一つとして `terraform plan` が速くなることが挙げられます。
むしろ `-refresh=false` をつけないと、管理するリソースの数が増えれば増えるほど情報を取得してくるのに時間がかかるようになりますし、
場合によっては API の rate limit に引っかかるなんてこともあるかもしれません。

なので普段 `-refresh=false` をつけて `terraform plan` を実行するようにしていると Terraform を使わずに加えたインフラの修正を State に取り込むために `terraform refresh` を実行する必要が出てきたりします。

State は更新されていないので `-refresh=false` とすれば相変わらず差分は出ます。

```
$ terraform plan -refresh=false
Terraform will perform the following actions:

  # mysql_database.zoo will be updated in-place
  ~ resource "mysql_database" "zoo" {
      ~ default_character_set = "utf8mb4" -> "latin1"
      ~ default_collation     = "utf8mb4_general_ci" -> "latin1_swedish_ci"
        id                    = "zoo"
        name                  = "zoo"
    }

Plan: 0 to add, 1 to change, 0 to destroy.
```

差分が出ました。 `terraform refresh` を実行すると State が更新され、差分がなくなるはずです。

```
$ terraform refresh
module.app.mysql_database.db: Refreshing state... [id=app]
mysql_database.foo2: Refreshing state... [id=foo2]
mysql_database.zoo: Refreshing state... [id=zoo]
```

```json
    {
      "mode": "managed",
      "type": "mysql_database",
      "name": "zoo",
      "provider": "provider.mysql",
      "instances": [
        {
          "schema_version": 0,
          "attributes": {
            "default_character_set": "utf8mb4",
            "default_collation": "utf8mb4_general_ci",
            "id": "zoo",
            "name": "zoo"
          },
          "private": "eyJzY2hlbWFfdmVyc2lvbiI6IjAifQ=="
        }
      ]
    }
```

```
$ terraform plan -refresh=false
No changes. Infrastructure is up-to-date.
```

## Module

https://www.terraform.io/docs/configuration/modules.html

簡単なモジュールを作ってみましょう。

```
$ mkdir database
vi database/database.tf
```

```hcl
resource "mysql_database" "db" {
  name                  = "app"
  default_character_set = "utf8mb4"
  default_collation     = "utf8mb4_general_ci"
}
```

では Module を使って database を作ってみます。

```hcl
module "app" {
  source = "./database"
}
```

```
$ terraform plan
Error: Module not installed

  on main.tf line 25:
  25: module "app" {

This module is not yet installed. Run "terraform init" to install all modules
required by this configuration.
```

失敗しました。 `terraform init` する必要があります。

```
$ terraform init
```

```
$ terraform plan
Terraform will perform the following actions:

  # module.app.mysql_database.db will be created
  + resource "mysql_database" "db" {
      + default_character_set = "utf8mb4"
      + default_collation     = "utf8mb4_general_ci"
      + id                    = (known after apply)
      + name                  = "app"
    }

Plan: 1 to add, 0 to change, 0 to destroy.
```

```
$ terraform apply --auto-approve
Apply complete! Resources: 1 added, 0 changed, 0 destroyed.
```

### Module パラメータ

これで Module を使って Database を作れましたが、 name が "app" 固定なので使いづらいですね。名前を変えられるようにしましょう。

database/database.tf

```hcl
resource "mysql_database" "db" {
  name                  = var.name
  default_character_set = "utf8mb4"
  default_collation     = "utf8mb4_general_ci"
}
```

database/variables.tf

```hcl
variable "name" {
  type = string
}
```

```
$ terraform plan

Error: Missing required argument

  on main.tf line 25, in module "app":
  25: module "app" {

The argument "name" is required, but no definition was found.
```

必須パラメータを指定していないので失敗しました。デフォルト値を設定しましょう。

https://www.terraform.io/docs/configuration/variables.html

```hcl
variable "name" {
  type    = string
  default = "app"
}
```

```
$ terraform plan
No changes. Infrastructure is up-to-date.
```

パラメータを渡して name を変更しましょう。

```hcl
module "app" {
  source = "./database"
  name   = "app2"
}
```

```
$ terraform plan
Terraform will perform the following actions:

  # module.app.mysql_database.db must be replaced
-/+ resource "mysql_database" "db" {
        default_character_set = "utf8mb4"
        default_collation     = "utf8mb4_general_ci"
      ~ id                    = "app" -> (known after apply)
      ~ name                  = "app" -> "app2" # forces replacement
    }
```

パラメータを渡せました。もとに戻しておきます。

```hcl
module "app" {
  source = "./database"
  name   = "app"
}
```

### Module Output

https://www.terraform.io/docs/configuration/outputs.html

mysql_database.bar から mysql_database.foo の属性を参照したように、 `module.app` で作成したデータベースの属性を参照するにはどうしたらよいでしょうか？
モジュール内であれば普通に参照できますが、モジュールの外から参照するには、 Module 側で明示的に公開する必要があります。不便な側面もあるかもしれませんが、カプセル化とも言えますね。

default_character_set を公開しましょう。

database/output.tf

```hcl
output "default_character_set" {
  value = mysql_database.db.default_character_set
}
```

そして参照します。

main.tf

```hcl
resource "mysql_database" "zoo" {
  name                  = "zoo"
  default_character_set = module.app.default_character_set  # 参照
  default_collation     = "utf8mb4_general_ci"
}
```

```
$ terraform plan
No changes. Infrastructure is up-to-date.
```

## terraform destroy

https://www.terraform.io/docs/commands/destroy.html

ここまでお疲れさまでした。
ハンズオンの最後にこれまで作ったデータベースを削除してしまいましょう。
`-target` オプションでリソースパスを指定して特定のリソースだけ削除できます。
`-target` オプションは複数回指定することで複数のリソースを指定できます。

```
$ terraform destroy -target=module.app

Terraform will perform the following actions:

  # mysql_database.zoo will be destroyed
  - resource "mysql_database" "zoo" {
      - default_character_set = "utf8mb4" -> null
      - default_collation     = "utf8mb4_general_ci" -> null
      - id                    = "zoo" -> null
      - name                  = "zoo" -> null
    }

  # module.app.mysql_database.db will be destroyed
  - resource "mysql_database" "db" {
      - default_character_set = "utf8mb4" -> null
      - default_collation     = "utf8mb4_general_ci" -> null
      - id                    = "app" -> null
      - name                  = "app" -> null
    }

Plan: 0 to add, 0 to change, 2 to destroy.

Do you really want to destroy all resources?
  Terraform will destroy all your managed infrastructure, as shown above.
  There is no undo. Only 'yes' will be accepted to confirm.

  Enter a value: yes
```

module.app を消そうとしたら、 mysql_database.zoo も削除されそうになっています。
これは mysql_database.zoo が module.app の属性に依存しているからです。

```hcl
resource "mysql_database" "zoo" {
  name                  = "zoo"
  default_character_set = module.app.default_character_set  # module.app に依存
  default_collation     = "utf8mb4_general_ci"
}
```

`-target` オプションで `mysql_database.zoo` を指定すればそれだけ削除されます。

```
$ terraform destroy -target=mysql_database.zoo
Terraform will perform the following actions:

  # mysql_database.zoo will be destroyed
  - resource "mysql_database" "zoo" {
      - default_character_set = "utf8mb4" -> null
      - default_collation     = "utf8mb4_general_ci" -> null
      - id                    = "zoo" -> null
      - name                  = "zoo" -> null
    }

Plan: 0 to add, 0 to change, 1 to destroy.

Do you really want to destroy all resources?
  Terraform will destroy all your managed infrastructure, as shown above.
  There is no undo. Only 'yes' will be accepted to confirm.

  Enter a value:
```

確認されるので、 yes と入力して削除します。

```
  Enter a value: yes

mysql_database.zoo: Destroying... [id=zoo]
mysql_database.zoo: Destruction complete after 0s

Warning: Applied changes may be incomplete

The plan was created with the -target option in effect, so some changes
requested in the configuration may have been ignored and the output values may
not be fully updated. Run the following command to verify that no other
changes are pending:
    terraform plan

Note that the -target option is not suitable for routine use, and is provided
only for exceptional situations such as recovering from errors or mistakes, or
when Terraform specifically suggests to use it as part of an error message.


Destroy complete! Resources: 1 destroyed.
```

```
mysql> show databases;
+--------------------+
| Database           |
+--------------------+
| information_schema |
| app                |
| foo2               |
| mysql              |
| performance_schema |
| sys                |
+--------------------+
6 rows in set (0.00 sec)
```

確かに消えています。
設定ファイルからは消えていないので `terraform plan` を実行すると Create しようとします。

```
$ terraform plan
Terraform will perform the following actions:

  # mysql_database.zoo will be created
  + resource "mysql_database" "zoo" {
      + default_character_set = "utf8mb4"
      + default_collation     = "utf8mb4_general_ci"
      + id                    = (known after apply)
      + name                  = "zoo"
    }

Plan: 1 to add, 0 to change, 0 to destroy.
```

リソースパスを指定しないと全てのリソースを削除します。

```
$ terraform destroy --auto-approve
module.app.mysql_database.db: Refreshing state... [id=app]
mysql_database.foo2: Refreshing state... [id=foo2]
mysql_database.foo2: Destroying... [id=foo2]
module.app.mysql_database.db: Destroying... [id=app]
module.app.mysql_database.db: Destruction complete after 0s
mysql_database.foo2: Destruction complete after 0s

Destroy complete! Resources: 2 destroyed.
```

```
mysql> show databases;
+--------------------+
| Database           |
+--------------------+
| information_schema |
| mysql              |
| performance_schema |
| sys                |
+--------------------+
4 rows in set (0.00 sec)
```

全部消えました。
