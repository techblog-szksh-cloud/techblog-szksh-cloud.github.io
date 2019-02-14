---
title: "JS以外でのnpmの活用"
date: 2019-02-14T21:34:22+09:00
draft: false
tags:
- npm
---

npm は Node.js のパッケージマネージャーですが、自分はJS以外のプロジェクトでも使えると思っています。
実際、Goのアプリケーション、OSS、ansible role, playbook など種類を問わず、自分が管理している多くのリポジトリで使っています。
ただ、GoのOSSで npm 使っているのは自分以外で見たことはないですし、
正直あまり賛同はされないかなと思いますが、こういう考え方もあると思っていただけたらと思います。

npm を使う理由は

* Node製のツールを使うため
* npm scripts を使うため (今回書きたいのはこっち)

の2つあります。

## Node製のツール

* [husky](https://github.com/typicode/husky): Git Hookを設定
* [commitlint](https://conventional-changelog.github.io/commitlint/#/): commit メッセージのlint
* [standard-version](https://github.com/conventional-changelog/standard-version): コミットログによって Change Log を生成

などを使っています。
Nodeはバージョンの変化が速く、互換性が壊れたりとかも多い印象ですが、
グローバルにインストールしなくてもリポジトリごとに install 出来る(package.jsonで管理できる)のでその点は(特にチーム開発では)良いと思います。

## npm scripts

npm scripts によってそのリポジトリの開発に使うコマンド群を管理するということを自分はしています。

https://github.com/suzuki-shunsuke/gomic/blob/master/package.json

なにもツールを使わない場合に比べ、こうすることでチーム全体でコマンドを統一できますし、一連のコマンドをスクリプト化して npm scripts で実行できるようにするなど、自動化も促進されます。

ごく簡単な自動化の例ですが、tag を打つと同時にソースコード中のバージョン番号を更新するのを `npm run tag v1.1.0` といったコマンドで出来るようにしています。
こうすることで tag とversionコマンドで出力されるバージョンが違うなんてことを防ぐことが出来ます。

https://github.com/suzuki-shunsuke/gomic/blob/master/scripts/tag.sh

また、オプションによって動作が変わるようなコマンドは npm scripts によって実行することでオプションを統一できます。
例えば `gofmt` は `-s` オプションの有無で結果が変わります。

## Make でいいのでは

npm scripts ではなくて Make のほうがいいんじゃないのという意見もあるかと思います。

* npm が特定の言語のパッケージマネージャーなのに対し、Makeはより汎用的なツールなので、Node以外ではMakeのほうが適切では
* Makeのほうがnpm scriptsより多機能
  * 依存関係のあるタスクを管理する場合はMakeのほうが良い
* package.jsonはjsonなのでコメントを書けないのが不便

ただ、Makeよりnpm scriptsのほうが良いと感じている部分が少なからずあります。

* Makeには派生がある(BSD, GNU, etc)
* Makeは複雑すぎる(1冊の本になるくらい)
  * npm scripts は機能が少ない分、とてもシンプル
* npm scripts はカレントディレクトリに依存しない(package.jsonがあるディレクトリから実行される)
  * MakeではカレントディレクトリにMakefile がない場合、Makefileのパスを指定する必要がある
* Makeは引数が渡しづらい(make FOO=foo みたいに引数名を指定する必要がある)

そのため、自分は npm scripts を使っています(huskyとかを使うからというのもありますが)。

それ以外のツールとの比較はしていません。
npm はかなり一般的なツールであり、そのへんのツールよりは導入障壁が低いと思います。

## npm scripts の関数・エイリアス

npm scripts をよく使う場合、関数やエイリアスを設定すると便利です。

```sh
nx() {
  npm --silent run $1 -- ${@:2}
}
alias npm="npm --silent"
```

`--silent` オプションは、ログレベルの設定です。 https://docs.npmjs.com/misc/config#loglevel
ログレベルを特に指定しないと、Nodeに関するログも出力されてしまい、見通しが悪くなります。

```
$ /usr/local/bin/npm run vet

> @ vet /Users/suzuki-shunsuke/repos/src/github.com/suzuki-shunsuke/gomic
> go vet ./...

# github.com/suzuki-shunsuke/gomic/internal/usecase/gencmd/output
internal/usecase/gencmd/output/output.go:9:14: undefined: imports
npm ERR! code ELIFECYCLE
npm ERR! errno 2
npm ERR! @ vet: `go vet ./...`
npm ERR! Exit status 2
npm ERR!
npm ERR! Failed at the @ vet script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     /Users/suzuki-shunsuke/.npm/_logs/2019-02-14T22_44_50_065Z-debug.log
```

`--silent` をつけるとすっきりします。

```
$ /usr/local/bin/npm --silent run vet
# github.com/suzuki-shunsuke/gomic/internal/usecase/gencmd/output
internal/usecase/gencmd/output/output.go:9:14: undefined: imports
```

ただこのオプションつけると、npm scripts で間違ったコマンドを指定してもなんのエラーも出力してくれなくなるので注意してください。
