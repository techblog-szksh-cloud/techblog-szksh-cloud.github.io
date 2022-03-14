---
title: "2021-08 やったこと"
date: 2021-09-02T14:33:16+09:00
archives: ["2021/08"]
tags:
- job
- oss
authors:
- suzuki-shunsuke
---

## 仕事

* AWS IAM User を削除する際に force_destroy が true になっているか Conftest でテスト
* Terraform の State 分割
* Terraform Modules を別リポジトリで管理して versioning
* git-secrets を secretlint に移行
  * git-secrets がメンテされてなくて、既知バグが放置されているから
* CI で terraform fmt によるフォーマットの自動化
* WIP: AWS WAF の COUNT, BLOCK ログを Firehose で抽出
* WIP: AWS CodeBuild で Provisioning Error が発生したら自動で Retry
* WIP: AWS CodeBuild のための GitHub App の開発
* WIP: AWS SSO について調査

## OSS Contribution

Renovate の GitHub Actions のドキュメントの修正をしました。
ドキュメント中に書かれたバージョンを Renovate で自動 update するようにしました。

* [docs: fix broken links and update GitHub Actions](https://github.com/renovatebot/github-action/pull/556)
* [chore: update GitHub Actions in README by Renovate](https://github.com/renovatebot/github-action/pull/557)

## 新たに作った OSS

* [logrus-error](https://github.com/suzuki-shunsuke/logrus-error): [logrus](https://github.com/sirupsen/logrus).Fields を error に埋め込む Go の薄いライブラリ
* [aqua](https://github.com/suzuki-shunsuke/aqua): Command Line Tools Version Manager
  * [aqua-proxy](https://github.com/suzuki-shunsuke/aqua-proxy): aqua の内部ツール 
  * [aqua-installer](https://github.com/suzuki-shunsuke/aqua-installer): aqua をインストールするスクリプトと GitHub Actions
* [go-checkout-github-merged-commit](https://github.com/suzuki-shunsuke/go-checkout-github-merged-commit): PR の merged commit を checkout する Go のライブラリ
* [aws-codebuild-retry](https://github.com/suzuki-shunsuke/aws-codebuild-retry): AWS CodeBuild を Retry する Lambda Function

## Blog

* https://techblog.szksh.cloud/archives/2021/08/
  * [aqua - CLI ツールのバージョン管理](https://techblog.szksh.cloud/aqua/)
  * [AWS CodeBuild を実行する Github App を作る](https://techblog.szksh.cloud/github-app-for-codebuild/)
* Quipper
  * [Terraform の CI に tfmigrate を導入した話](https://blog.studysapuri.jp/entry/2021/08/11/080000)
  * [AWS IAM の管理を miam から Terraform に移行した話](https://blog.studysapuri.jp/entry/2021/08/02/080000)
