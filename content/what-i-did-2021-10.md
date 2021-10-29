---
title: "2021-10 やったこと"
date: 2021-10-26T20:43:03+09:00
archives: ["2021/10"]
tags:
- job
- oss
---

## Job

* AWS SSO の導入
  * Google アカウントで AWS へサインインできるように設定
  * AWS SSO の Terraform 管理
  * ssosync を Lambda で定期実行
  * 開発者向けの移行ガイドの作成し、実際に案内
  * terraform, kubectl などのツールで AWS にアクセスできるかの検証
* AWS WAF の COUNT, BLOCK の log を Firehose, Lambda で抽出
* [akoi](http://github.com/suzuki-shunsuke/akoi) を [aqua](https://github.com/suzuki-shunsuke/aqua) にリプレース

## Blog

* [2021-10-13: HashiTalks Japan 2021 で弊プロダクトの Terraform Platform について登壇しました](https://quipper.hatenablog.com/entry/2021/10/13/080000)

## OSS

https://github.com/pulls?q=is%3Aclosed+is%3Apublic+is%3Apr+author%3Asuzuki-shunsuke+archived%3Afalse+created%3A2021-10-01..2021-10-31+

* Profile などの更新: https://github.com/suzuki-shunsuke/suzuki-shunsuke
* GitHub Actions の開発
* 自作ツールを Homebrew でインストールできるようにした
* aqua: v0.7.3 => v0.7.10
  * aqua-registry: v0.8.8 => v0.10.3

### OSS Contribution

* [hashicorp/terraform-provider-aws: fix make testacc](https://github.com/hashicorp/terraform-provider-aws/pull/21385)
