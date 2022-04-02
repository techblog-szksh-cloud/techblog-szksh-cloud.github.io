---
title: "2022-03 振り返り"
date: 2022-04-02T14:16:55+09:00
authors:
- suzuki-shunsuke
tags:
- job
- oss
---

3 月は blog を結構読みました。

https://zenn.dev/shunsuke_suzuki/scraps/602d6f6b803168

後は職場のインフラ周りのコードとかを読み返して復習しました。

最近は OSS 開発やブログの執筆などの output が中心で、 input をする時間があまり取れていなかったのでブログなどを読むという形で input をしました。

## 仕事

* Blog 執筆
* Terraform
  * Module を Monorepo に集約: [Terraform Modules を Monorepo で versioning して管理](https://blog.studysapuri.jp/entry/2022/03/30/080000)
* AWS Account 分割

## Blog

date | title
--- | ---
2022-03-30 | [Terraform Modules を Monorepo で versioning して管理](https://blog.studysapuri.jp/entry/2022/03/30/080000)
2022-03-29 | [Automate handling a number of Pull Requests by Renovate in Terraform Monorepo](https://devs.quipper.com/2022/03/29/automate-handling-a-number-of-pull-requests-by-renovate-in-terraform-monorepo.html)
2022-03-05 | [tfaction v0.5.0 の update](https://zenn.dev/shunsuke_suzuki/articles/tfaction-v050)

## OSS 開発

* aqua v1.2.0 ~ v1.3.0
* aqua-registry v1.6.0 ~ v1.11.0
* tfaction v0.5.0 ~ v0.5.7
* [tfcmt v3.1.0](https://github.com/suzuki-shunsuke/tfcmt/releases/tag/v3.1.0)

## その他

AWS CodeDeploy を用いた AWS Lambda の Progressive Delivery に関して検討しました。

https://zenn.dev/shunsuke_suzuki/scraps/64bf029c5eeb7b

PipeCD も考えましたが、 CodeDeploy で出来るんならそれでいい気がするので、まずは CodeDeploy で検討しています。
