---
title: "2019-10 から今(2020-12-31)に至るまで仕事でやっていること"
date: 2020-12-31T11:00:40+09:00
tags:
- job
authors:
- suzuki-shunsuke
---

2019-10-01 から今の職場で SRE として働いています。
その中で自分がどういうことをやっているかという話をします。

2020-12-31 現在の内容です。

## 要約

* プロダクト横断的な SRE チームで、プロダクトのプラットフォームを運用・開発している
* 特に CI/CD の改善が得意
* developer に CI/CD をいわばサービスとして提供しており、 DX の改善に取り組んでいる
* Monorepo の負の側面(CIが遅い、関係ないTestがこけるetc)の解消にも取り組んでいる
* 自分が直面している課題を解決する OSS を色々開発している

## キーワード

* SRE
* Monorepo
* CI/CD
* Developer Experience
* Terraform
* Go / Shell script
* k8s
* CircleCI / CodeBuild
* Conftest
* Renovate

## より具体的にやっていることを書いた記事

* 個人ブログ
  * https://techblog.szksh.cloud/job-2020-10-01-10-31/
  * https://techblog.szksh.cloud/job-2020-07-01-09-30/
  * https://techblog.szksh.cloud/job-2020-04-01-06-30/
  * https://techblog.szksh.cloud/job-2020-01-01-03-31/
  * https://techblog.szksh.cloud/job-2019-10-01-12-31/
* 会社ブログ
  * [Renovate の Tips](https://blog.studysapuri.jp/entry/2020/12/10/080000)
  * [Terraform の CI/CD を CodeBuild に移行した話](https://blog.studysapuri.jp/entry/2020/12/03/080000)
  * [巨大な .circleci/config.yml を分割した話](https://blog.studysapuri.jp/entry/2020/12/01/080000)
  * [Docker Hub の Rate Limit 問題に対応した話](https://blog.studysapuri.jp/entry/2020/11/02/080000)
  * [CI の修正をリリース前に本番と同じ条件下で検証出来る仕組みを構築した話](https://blog.studysapuri.jp/entry/2020/04/06/080000)

## 何をやっているか

プロダクト横断的な SRE チームで、プロダクトのプラットフォームを運用・開発しています。

SRE と一言で言っても、その領域は非常に多岐にわたります。
組織によって `SRE` の実態は異なるでしょう。
例えば SRE とは別にセキュリティの専門チームがあるような組織もあるとは思いますが、
現職ではそのようなものはないのでそこも SRE が見ています。
全ての領域に関して個人がスペシャリティを持つというのは非常に難しいので、
全体的にある程度カバーしつつも特定の領域に対しスペシャリティを持つというのが割と現実的な話だと思います。

自分の場合、 CI/CD の改善を強みとし、そこに主に取り組んでいます。
プラットフォームを運用・開発していると言いましたが、それには CI/CD も含まれます。
現職では Monorepo アーキテクチャが採用されています。
Monorepo にすることで複数のサービスにまたがる変更を 1 つの Pull Request (以下PR) でまとめて出来たり、 CI/CD などの仕組みを共通化することが出来ます。
現職では幾つかの Monorepo があります。

* アプリケーションのコードと k8s manifest の Monorepo
* Ansible の Monorepo
* Terraform の Monorepo
* などなど

Monorepo の中で CI/CD に関しては SRE が ownership を持ち、言わばサービスとして developer に提供しています。
といっても Jenkins や CircleCI のようなものを自作しているという意味ではありません。
CI/CD には主に CircleCI を使っていますが、CIの設定や CI/CD で使われるスクリプトなどをメンテしています。
全てを SRE が書くということではなく、むしろ developer が新しいサービスを追加する際に簡単に CI/CD をセットアップできるようにしています。

例えば Terraform ではサービス・環境(staging, production, etc) ごとに State をディレクトリを分けていますが、新しいサービスを追加する際は、まずは generator を実行してコード生成し、そこに Terraform の configuration を書けば CI/CD で test や lint, apply が実行されるようになっています。
元々新しいサービスの追加時には .circleci/config.yml に設定を書き足す必要がありましたが、
最近 [Terraform の CI/CD を CircleCI から CodeBuild に移行した](https://blog.studysapuri.jp/entry/2020/12/03/080000) ことでそれが一切不要になりました。日々進化しています。
単に PR で terraform plan して master で terraform apply するだけなら簡単ですが、
より DX の高いものにするのが自分の強み・専門性です。

Lint や Test を導入したりもします。勿論 Rails などで書かれたアプリケーションのテストを書くということではなく(それを書くのは基本 developer)、例えば k8s のマニフェストのテストや Terraform の lint などです。
Lint や Test は、導入して CI が失敗するようになったら終わり、ではありません。
現職では developer が k8s のマニフェストや Terraform の configuration も書きますが、必ずしも全員がそれらに習熟しているわけではありません。
失敗するようになっても、developer が失敗した原因を理解できなかったら、無駄に rerun してみて結局解決しなくて SRE に質問してくるだけです。
そうではなく、 なぜ CI がこけたのか、どうすればいいのか、その lint はどういう経緯で導入されたのかなどを developer が自分で理解し、自己解決できるようにすることが重要です(勿論必要に応じて問い合わせが発生するのは仕方ないですし、遠慮はしてほしくはありません)。
そこで PR にそれらの情報をコメントするようにしています。
シェルスクリプトから簡単にコメントできるように OSS としてツールも開発しています([gihtub-comment](https://github.com/suzuki-shunsuke/github-comment))。 

Monorepo では単純に全てのサービスのテスト・ビルド・デプロイを実行すると時間がかかったり、 PR に関係ないテストが落ちたりします。
そのため、必要な job だけ実行するような仕組みが必要です。
そのへんをコードを書かずにいい感じに出来るのが理想ではありますが、 Monorepo のエコシステムはそこまで醸成していないと思っており、自分たちである程度コードを書く必要があります。
自分は Go や Shell Script でそういったコードを普段書きます。

現職の Monorepo のうち、アプリケーションのコードと k8s manifest の Monorepo は非常に大きく、 CI/CD をナイーブに実装すると非常に時間がかかったり効率が悪かったりします。
そういった問題点を見つけ出し、チューニングするといったこともやりました。

その中で生まれた OSS もあります。
自分が直面している課題を解決する OSS を開発するのが自分のライフワークです。

https://github.com/suzuki-shunsuke/profile#libraries

仕事でも使っているツールを幾つか紹介します。

* [gihtub-comment](https://github.com/suzuki-shunsuke/github-comment) GitHub の PR, commit にコメントするツール
* [circleci-config-merge](https://github.com/suzuki-shunsuke/circleci-config-merge) 分割された .circleci/config.yml をマージ
* [github-ci-monitor](https://github.com/suzuki-shunsuke/github-ci-monitor) CI のステータスを DataDog でモニタリングする AWS SAM application
* [matchfile](https://github.com/suzuki-shunsuke/matchfile) Monorepo の CI で、特定のサービスが依存するファイルに変更があったか判定するのに便利
* [ci-info](https://github.com/suzuki-shunsuke/ci-info) GitHub API を使って CI の情報を取得
* [dd-time](https://github.com/suzuki-shunsuke/dd-time) コマンドの実行時間を DataDog に送る
* [akoi](https://github.com/suzuki-shunsuke/akoi) バイナリのバージョン管理
