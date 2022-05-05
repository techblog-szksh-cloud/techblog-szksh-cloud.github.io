---
title: "2022-04 振り返り"
date: 2022-05-05T14:16:55+09:00
authors:
- suzuki-shunsuke
tags:
- job
- oss
---

## 仕事

* GitHub Discussions の検証
* renovate-issue-action の導入
* tfcmt で patch option の有効化
* etc

GitHub Discussions に仕事のナレッジを蓄積できないか検証したりしました。
Slack と比べてナレッジを蓄積しやすいのではないかと期待する一方、
Slack のようにその場で質問をしてすぐ解決するのには向かないかなという気もしました。
ちゃんとしたドキュメント書くよりはとりあえず Discussions に Q&A 形式でナレッジを残しておくのは低コストでやれるかなと思う反面、手間もかかりそうです。
活用の仕方を模索すること、無理なく運用できるルールを定めること、組織・チームでツールの活用方法・使い分けの認識を合わせる必要がありそうです。

## Blog

* [tfcmt がコメントの更新をサポート](https://zenn.dev/shunsuke_suzuki/articles/tfcmt-plan-patch)
* [tfcmt supports updating comments](https://dev.to/suzukishunsuke/tfcmt-supports-updating-comments-ebg)

## OSS 開発

### 新規開発

first release date | name | badges | lang | type | short description
--- | --- | --- | --- | --- | ---
2022-04-23 | [renovate-issue-action](https://github.com/suzuki-shunsuke/renovate-issue-action) | [![GitHub last commit](https://img.shields.io/github/last-commit/suzuki-shunsuke/renovate-issue-action.svg)](https://github.com/suzuki-shunsuke/renovate-issue-action) | go | cli for GitHub Actions | Create, update, and close GitHub Issues with GitHub Actions according to Renovate Pull Requests
2022-04-21 | [zap-error](https://github.com/suzuki-shunsuke/zap-error) | [![GitHub last commit](https://img.shields.io/github/last-commit/suzuki-shunsuke/zap-error.svg)](https://github.com/suzuki-shunsuke/zap-error) | go | library | Embed zap.Field into error

#### zap-error

zap-error は Go の error に zap.Field を埋め込み、構造化されたコンテキストを error に持たせてロギングできるようにするライブラリです。
Go では `fmt.Errorf` を使ってエラーにコンテキストを付与させるのが一般的ですが、 `fmt.Errorf` では構造化されたコンテキストを付与させることができません。
また、 uber-go/zap を始めとしたライブラリを使った構造化ロギングも一般的に行われることです。
であれば error に構造化されたコンテキストを付与しロギングに活用したいと思うのは個人的には自然なことだと思っています。
zap-error はそのための薄いライブラリです。 error に zap.Fields を付与する関数と、 error を zap.Fields に変換する関数の 2 つの API しか提供していません。
zap の logger をラップするようなことはしていないので zap はそのまま使えます。

ちなみに logrus 用の [logrus-error](https://github.com/suzuki-shunsuke/logrus-error) というのも元々作っています。

#### renovate-issue-action

Renovate ですんなり automerge 出来なかった Pull Request を Issue としてハンドリングするための GitHub Action です(正確には Action ではなくて CLI ですが)。
これはいずれちゃんとブログを書きたいですね。

### Update

* [aquaproj/aqua-registry](https://github.com/aquaproj/aqua-registry)
  * 遂に登録されているツールの数で asdf-plugins を超えました: https://twitter.com/szkdash/status/1518895119205683201
  * v1.11.0 => v2.10.0
* [aquaproj/aqua](https://github.com/aquaproj/aqua)
  * v1.3.0-0 => v1.5.0-0
  * v1.3.0: overrides のサポート
  * v1.4.0: Registry のテスト向けに、 GOOS と GOARCH を環境変数で変更できるようにしました
    * aqua-registry の CI でも使われていて、本来 CI でテストが難しい ARM64 向けのテストに活用されています
    * JSON Schema を追加しました
* [suzuki-shunsuke/tfcmt](https://github.com/suzuki-shunsuke/tfcmt)
  * v3.1.0 => v3.2.1
  * plan のコメントの更新をサポートしました
* [suzuki-shunsuke/tfaction](https://github.com/suzuki-shunsuke/tfaction)
  * v0.5.7 => v0.5.11

## OSS Contribution

merged date | repository | lang | PR's short description
--- | --- | --- | ---
2022-04-29 | [shuaibiyy/awesome-terraform](https://github.com/shuaibiyy/awesome-terraform) | document | [tools: add tfaction](https://github.com/shuaibiyy/awesome-terraform/pull/164)
2022-04-29 | [shuaibiyy/awesome-terraform](https://github.com/shuaibiyy/awesome-terraform) | document | [fix: update links to some tools](https://github.com/shuaibiyy/awesome-terraform/pull/165)
2022-04-22 | [kreuzwerker/terraform-provider-docker](https://github.com/kreuzwerker/terraform-provider-docker) | go | [chore: remove the workflow to close stale issues and pull requests](https://github.com/kreuzwerker/terraform-provider-docker/pull/371)
2022-04-21 | [mitchellh/mapstructure](https://github.com/mitchellh/mapstructure) | go | [fix: panic when Decode's input is array and output is a slice](https://github.com/mitchellh/mapstructure/pull/265)
2022-04-12 | [rhysd/actionlint](https://github.com/rhysd/actionlint) | go | [fix: add permissions "pages" and "discussions" and remove invalid permission "metadata"](https://github.com/rhysd/actionlint/pull/131)
2022-04-06 | [terraform-linters/tflint-ruleset-aws](https://github.com/terraform-linters/tflint-ruleset-aws) | go | [style: format rules/api/rule.go.tmpl and run go generate ./...](https://github.com/terraform-linters/tflint-ruleset-aws/pull/333)

tfaction が awesome-terraform に追加されました。
