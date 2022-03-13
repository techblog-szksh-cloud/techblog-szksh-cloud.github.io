---
title: "2021-07 やったこと"
date: 2021-07-28T06:58:45+09:00
archives: ["2021/07"]
tags:
- job
- oss
---

今まで仕事に限定して書いてきましたが、 OSS 活動なんかにも触れてもいいんじゃないかと思ったので分かる範囲で書きます。

## 仕事

* Docker Image を Docker Hub から ECR へ移行
* Terraform
  * .terraform.lock.hcl を CI の中で自動で更新(commit, push)できるようにした
    * Terraform に詳しくない人も使うので、自動化したほうが良いと判断
  * [tfmigrate](https://github.com/minamijoyo/tfmigrate) を CI に導入
  * (in progress) Terraform Modules を Terraform の Monorepo とは別リポジトリで管理して versioning するようにした
  * Route53 の管理を [Roadworker](https://github.com/codenize-tools/roadworker) から Terraform へ移行
  * tfmigrate を使ったリファクタリング

## Event

* [Open Policy Agent Rego Knowledge Sharing Meetup](https://mercari.connpass.com/event/211073/) で登壇
  * https://gist.github.com/suzuki-shunsuke/9372337aa62a6f8394bb136582ec068e

## OSS Contribution

AWS AppConfig を Terraform で管理できるようにする PR が無事マージされました。

* [feat: add aws_appconfig_deployment](https://github.com/hashicorp/terraform-provider-aws/pull/20172)
* [fix: add the attribute "environment_id" to aws_appconfig_environment](https://github.com/hashicorp/terraform-provider-aws/pull/20176)
* [feat: support AppConfig Deployment Strategy](https://github.com/hashicorp/terraform-provider-aws/pull/19359)
* [feat: support AppConfig Hosted Configuration Version](https://github.com/hashicorp/terraform-provider-aws/pull/19324)
* [feat: add appconfig_configuration_profile](https://github.com/hashicorp/terraform-provider-aws/pull/19320)
* [feat: add aws_appconfig_application and aws_appconfig_environment](https://github.com/hashicorp/terraform-provider-aws/pull/19307)

## 新たに作った OSS

* [tfmigrator/cli](https://github.com/tfmigrator/cli): CLI to Migrate Terraform Configuration and State with terraform state command and hcledit
* [Renovate github-tags Datasource Repositories](https://github.com/suzuki-shunsuke/renovate-github-tags-datasource-repositories)

### tfmigrator

Terraform Configuration と State をマイグレーションする tfmigrator の CLI をリリースしました。
tfmigrator には紆余曲折有り(?)、時系列的に

* [suzuki-shunsuke/tfmigrator](https://github.com/suzuki-shunsuke/tfmigrator) を開発。 CLI
* YAML の設定ファイルの表現力に限界を感じ、 suzuki-shunsuke/tfmigrator をフォークして Go のライブラリ [tfmigrator/tfmigrator](https://github.com/tfmigrator/tfmigrator) を開発
  * 簡単に CLI を実装できるように API も提供
  * ついでに色々改良
    * [hcledit](https://github.com/minamijoyo/hcledit) のインストールが不要
    * ファイルの in place の更新をサポート
    * dry run のサポート
    * 複数のリソースをまとめて扱えるような API も提供 [QuickRunBatch](https://pkg.go.dev/github.com/tfmigrator/tfmigrator@v0.5.1/tfmigrator#QuickRunBatch)
    * etc
* 実際に tfmigrator/tfmigrator を使ってみると Go を書くのがちょっと面倒くさい
  * そもそも複雑な rule を一度に適用しようとするのが間違っていると感じた
* tfmigrator/tfmigrator を使い、 CLI も実装 tfmigrator/cli
  * やはり基本的なユースケースでは YAML 書くほうが楽

### Renovate github-tags Datasource Repositories

Renovate の Datasource や Manager でサポートされていない package を Renovate で update するために、
package ように GitHub Repository を作って package のバージョンに合わせて GitHub tag を更新し、
`github-tags` Datasource として使おうというプロジェクトです。
現状 AWS RDS や AWS Elasticache の engine version 用のリポジトリを作っています。
tag は GitHub Actions を毎日定期実行することで更新します。
詳細はリポジトリの README でも読んでください。

## 新しいバージョンをリリースした OSS

* [tfcmt](https://github.com/suzuki-shunsuke/tfcmt)
  * [v2.0.0-0](https://github.com/suzuki-shunsuke/tfcmt/releases/tag/v2.0.0-0)
  * [v1.1.0](https://github.com/suzuki-shunsuke/tfcmt/releases/tag/v1.1.0)
    * https://twitter.com/szkdash/status/1416263752475836416

terraform v0.15.4 から Terraform 以外での変更も plan に出力されるようになって
わかりにくいと感じたので、 tfcmt でテンプレート変数追加して見やすくできるようにしました。
Refreshing state のログを除外したり、warning 目立たせたりもできて便利です。

## Blog

* https://techblog.szksh.cloud/archives/2021/07/
