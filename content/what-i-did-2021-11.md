---
title: "2021-11 やったこと"
date: 2021-11-28T15:45:55+09:00
archives: ["2021/10"]
tags:
- job
- oss
---

## Job

* AWS Control Tower
  * 登録できてなかった Account を登録できた
* AWS SSO
  * ユーザーへの案内・催促を行い、 IAM User から SSO に移行してもらった
  * ローカルの開発で Access Key に依存していた部分に関して修正し、 Access Key なしでローカルで開発できるようにした(人によってはまだ Access Key に依存したツールを使っている
    * S3 Browser が SSO でなぜか動かないらしい(自分が Windows 持ってないので確認できてないけど
    * Cyberduck が SSO サポートしていない
  * 一部のユーザーの Access Key の deactivate
  * 不要な IAM User のクリーニング
  * 来月中には一部の例外を除き、移行を完了させたい
  * SSO 出来ない人を SSO できるように対応した (同期対象の Group や、 Permission Set を追加したり)
  * SSO に関する User 向け、 SRE 向けドキュメントを英語で書いた
* aqua を更新し、 Access Token なしでも動くようにした(API call を減らし、 rate limit の問題を解決した
* Self Hosted Renovate in GitHub Actions
  * https://github.com/renovatebot/github-action
  * 無事 Self Hosted で動かせるようになった
  * 結果的に Self Hosted じゃなくても良かったのではという気はしている
* AWS WAF
  * COUNT, BLOCK log を Lambda で抽出しようとしているが、なぜか COUNT log が抽出できていない
  * あまり時間取れてない
* Route53 のドメインのアカウントの移管
* Lambda の CI/CD
  * 実現したいことを言語化: https://github.com/suzuki-shunsuke/issue/issues/70
  * 検討(あまり進んでない
* git-secrets から secretlint への移行
* circleci-config-merge を CI で実行して自動修正するようにした

### 課題

* Renovate の Automerge が base branch が更新されたことで disable になり、結局手でマージしないといけなくなっている
  * 自動化の検討

## Blog, Slide

* https://techblog.szksh.cloud/archives/2021/11/
  * [aqua の最近の update (v0.7.4 ~ v0.7.16)](https://techblog.szksh.cloud/update-aqua-v0.7.16/)
* [OPA Policy Testing by Table Driven Test](https://dev.to/suzukishunsuke/opa-policy-testing-by-table-driven-test-289e)
* https://suzuki-shunsuke.github.io/slides/aqua/introduction-5min/

## OSS

aqua の公式サイトを立ち上げました。

https://aquaproj.github.io/

[Docusaurus v2](https://docusaurus.io/) で生成して、 GitHub Pages でホスティングしています。

aqua 用の GitHub Organization を作り、関連リポジトリを transfer しました。

https://github.com/aquaproj

### OSS Contribution

[tfmigrator](https://github.com/tfmigrator/cli) と [tfcmt](https://github.com/suzuki-shunsuke/tfcmt) を [awesome-terraform](https://github.com/shuaibiyy/awesome-terraform) に追加してもらいました。

* https://github.com/shuaibiyy/awesome-terraform/pull/139
* https://github.com/shuaibiyy/awesome-terraform/pull/138

## その他

### このブログのリポジトリを別の GitHub Organization に transfer しました

https://github.com/techblog-szksh-cloud/techblog-szksh-cloud.github.io

理由は techblog.szksh.cloud が suzuki-shunsuke.github.io の CNAME になっていて、
OSS のドキュメントなどを GitHub Pages で公開したいときに都合が悪かったからです。

ついでに CI を Drone から GitHub Actions に移行しました。

### suzuki-shunsuke/issue の活用

https://github.com/suzuki-shunsuke/issue/issues に記録を残すようにしました。

https://github.com/suzuki-shunsuke/issue/issues?q=is%3Aissue+updated%3A2021-11-01..2021-11-30

前から使ってましたが、あまり活用できてなかったので、意識的に活用していこうと思っています。
せっかくツールとかを検証しても、ちゃんと記録が残ってないと忘れてしまいもったいないというのと、
issue に残すと自然と検証とかが進むような気がしています。

### Docusaurus

Docusaurus はいい感じなので [suzuki-shunsuke/profile](https://github.com/suzuki-shunsuke/profile) やこのブログを Docusaurus に移行するのもありかもしれないなと思いました
(思っただけでまだ何もしてません

ただ、 OSS のドキュメントに Docusaurus を使う場合、個人的には package.json を同じリポジトリに置きたくないので、
同じリポジトリでプロダクトとドキュメントを管理しにくいかなという気はしています。
