---
title: "2022-02 振り返り"
date: 2022-03-14T14:16:55+09:00
authors:
- suzuki-shunsuke
tags:
- job
- oss
---

## まとめ

aqua, aqua-registry, aqua-installer の v1 をリリースしました。
v1 に伴う変更は特にありません。
aqua v1.1.0 では `aqua g -i` によって aqua.yaml に package を追加できるようにし、使い勝手を良くしました。
tfaction は結構色々機能追加やバグ修正が入ってます。
仕事ではブログにも書いたように Renovate の大量 PR を自動で処理できるように改善を行いました。

## 仕事

* Terraform
  * tfaction バグ修正
  * GITHUB_TOKEN rate limit 引っかかったので GitHub App の token に置き換え
  * CI こけた renovate PR の自動 close 検討
  * tfsec や AWS Provider v4 の update 対応をどうするか検討したり、対応したりしてた
* AWS Account 分割

## Blog

* [Migrate Terraform CI from AWS CodeBuild to GitHub Actions](https://devs.quipper.com/2022/02/25/terraform-github-actions.html)
* [Renovate の大量の Pull Request を処理する技術](https://blog.studysapuri.jp/entry/2022/02/18/080000)
* [Terraform の CI を AWS CodeBuild から GitHub Actions + tfaction に移行しました](https://blog.studysapuri.jp/entry/2022/02/04/080000)

## OSS 開発

* aqua v1.0.0 ~ v1.1.0
* aqua-registry v1.0.0 ~ v1.5.0
* aqua-installer v1.0.0
* tfaction v0.4.0 ~ v0.4.12
* New
  * https://github.com/suzuki-shunsuke/reenable-automerge-action
  * https://github.com/suzuki-shunsuke/renovate-autoclose-action
