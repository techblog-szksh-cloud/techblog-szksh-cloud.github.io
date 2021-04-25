---
title: "PR で変更されたファイルや PR Label に応じて matrix build を実行する Github Actions の Workflow のサンプルを書いてみた"
date: 2021-04-25T16:09:47+09:00
tags:
- github-actions
---

GitHub Actions の勉強がてら Pull Request (以下 PR) で変更されたファイルや PR Label に応じて
Matrix build を実行する Github Actions の Workflow のサンプルを書いてみました。

https://github.com/suzuki-shunsuke/example-github-actions-dynamic-matrix

Monorepo で同じ Job を PR で変更されたものに対してだけ実行したい、
けど workflow をサービスごとに定義するのはめんどいみたいな場合に使えるかもしれません。

勉強がてらちょっと書いてみて軽く動作確認しただけなので、バグってる、あるいは実用的ではないかもしれません。

ここでは Monorepo の CI を GitHub Actions で実行する場合を考えます。

GitHub Actions では path filter を用いて workflow の実行有無を制御することができます。
そこでサービスごとに workflow を作成し、 path filter を設定することでそのサービスが更新されたときのみそのサービスの CI を実行するということが簡単にできます。

しかし多くのサービスが含まれる Monorepo で各サービスに同じ Job を実行したい場合を考えてみましょう。
その場合サービスを追加するたびに workflow を追加していく必要があります。
まぁ .github/workflows 配下に 1 つ YAML をコピペで作成するだけといえばそれまでなのですが、それすらも省略したいとしましょう。

[Terraform の CI/CD を CodeBuild に移行した話](https://quipper.hatenablog.com/entry/2020/12/03/080000)では CodeBuild の Batch Build の buildspec を
PR で変更されたファイルおよび PR Label に応じて動的に生成しています。
これの良いところは、サービスを追加したり、リネームしたり、削除したりしても CI をイジる必要がまったくないところです。

それと似たようなことを GitHub Actions でもやってみました。

foo と bar という 2 つのサービス(Go のアプリケーション)があり、
CI では setup job で CI を実行するサービスのリストを動的に生成し、後続の build job で対象サービスの build を実行しています。
例えばリポジトリ直下の README.md だけを更新した場合、どのサービスのビルドも実行されません。
サービス foo の main.go だけを更新した場合、サービス foo のビルドだけ実行され、 bar のビルドは実行されません。
`target/<サービス名>` という PR Label をつけて CI を実行すると指定したサービスのコードが変更されていなくてもビルドを実行できます。

主に以下のツールを使いつつ、シェルスクリプトで実装しています。

* [ci-info](https://github.com/suzuki-shunsuke/ci-info)
* [matchfile](https://github.com/suzuki-shunsuke/matchfile)
* jq

詳細は https://github.com/suzuki-shunsuke/example-github-actions-dynamic-matrix のコードと [Demo 用の PR](https://github.com/suzuki-shunsuke/example-github-actions-dynamic-matrix/pulls?q=is%3Apr+is%3Aopen+label%3Ademo) を見てください。
