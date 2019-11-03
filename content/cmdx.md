---
title: "cmdx - task runner"
date: 2019-08-23T11:35:13+09:00
archives: ["2019/08"]
draft: true
---

最近自作した OSS, cmdx の紹介です。

https://github.com/suzuki-shunsuke/cmdx

cmdx は task runner です。

`task runner` の定義はググってもわからなかったので、 cmdx を `task runner` と呼ぶのが適切かわかりませんが、
ここではプロジェクト固有のタスク

* 依存するライブラリのインストール
* ビルド
* テスト
* コード整形
* lint
* etc

などを管理するものとします。

類似するものとしては以下のようなものがあります。

* Make
* [npm scripts](https://docs.npmjs.com/misc/scripts)
* [Task](https://taskfile.dev/)
* [tj/robo](https://github.com/tj/robo)
* [mumoshu/variant](https://github.com/mumoshu/variant)

## 使い方

詳細は [README](https://github.com/suzuki-shunsuke/cmdx/blob/master/README.md) を読んでください。

```
$ cmdx -i
```

で設定ファイルの雛形を生成します。

そして設定ファイルに task を定義していきます。
設定に関しては [README](https://github.com/suzuki-shunsuke/cmdx/blob/master/README.md) を参照してください。

そうすると `cmdx -l` でタスクの一覧とその説明が見れます。

例えば次は [cmdx](https://github.com/suzuki-shunsuke/cmdx) のリポジトリでの実行結果です。

```
$ cmdx -l
init, i - setup git hooks
coverage, c - test a package (fzf is required)
test, t - test
fmt - format the go code
vet, v - go vet
lint, l - lint the go code
release, r - release the new version
durl - check dead links (durl is required)
ci-local - run the Drone pipeline at localhost (drone-cli is required)
```

これにより新しくプロジェクトに参画した人もどのような task があるのか直ぐわかります。
例えば test を実行したければ `cmdx t` を実行すればいいことがわかります。
`cmdx help test` とすればここのタスクのより詳細なヘルプが見れます。

ドキュメントに task について書いても、ドキュメントがちゃんと更新されずドキュメントと実態が乖離するなんてことはよくありますが、
cmdx の設定ファイルからヘルプを生成することで乖離しにくくなります(実際に使われてない task が残ってたり、task の description や usage が間違ってたら駄目ですが)。

## なぜ cmdx か

自分は今まで task runner として基本的に npm scripts を使ってきていて、ブログにも書いています。

[JS以外でのnpmの活用](https://techblog.szksh.cloud/use-npm/)

しかし、 npm scripts に対しては以下のような不満がありました。

* security alert が定期的に飛んできて対応が面倒くさい
  * これは husky や commitlint などを使っているのが原因なのであって、 npm scripts の問題ではないですが
  * JS のプロジェクトならまだしも、 task runner のために対応しないといけないのが面倒くさい
* task に対するヘルプメッセージがない
  * 今までは README に書いてたが、本来は help コマンドで自動生成・サポートされるべきだと思っている

他のツールによってこれらの不満は解消できるのですが、他のツールにもそれぞれ微妙に不満があり、
完全に自分のニーズに合うものがなかったので作ることにしました。

npm scripts は

* 設定ファイル (package.json) を探索
* 設定ファイルのあるディレクトリでコマンドを実行

します。これにより

* カレントディレクトリを意識する必要がない
  * 設定ファイルのパスを指定する必要がない
  * コマンドの実行ディレクトリがカレントディレクトリに依存しない(逆に言うとカレントディレクトリに依存した処理を実行しにくいという面もありますが)

という良さがあり、 これが意外と他のツールではサポートされてなく、不満でした。

また、 Make や Task では task の依存関係を定義し、一回のコマンドで複数のタスクを実行できますが、
cmdx ではそのような機能はサポートしていません。
自分が普段そのような機能をあまり必要としていないからです。

cmdx では上のような npm scripts の不満を解消するだけでなく、折角なので幾つか細かな機能を追加しています。

* シェルスクリプトだと面倒なオプション引数をサポート
* 環境変数と変数の相互バインディング
* リッチなプロンプトのサポート
* タイムアウト

cmdx から npm scripts に乗り換えた場合の問題点としては husky や commitlint のようなツールが使えなくなることですが、
必須のツールでもないので許容しています。
