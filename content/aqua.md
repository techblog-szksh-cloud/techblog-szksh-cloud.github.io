---
title: "aqua - CLI ツールのバージョン管理"
date: 2021-08-28T09:07:38+09:00
archives: ["2021/08"]
tags:
- oss
---

2021-09-04 追記: [aqua v0.1.0 から v0.5.0 での変更点](/aqua-v0.5)

[aqua](https://github.com/suzuki-shunsuke/aqua) という OSS を開発しているので紹介します。

記事の内容は aqua v0.1.0 に基づきます。将来的に仕様が変わる可能性があります。

## aqua とは

aqua は CLI ツールのバージョン管理のための CLI です。
aqua で管理する主な対象は GitHub Release で公開されているツールです。
YAML の設定ファイルを書いてコマンドを実行すると指定したツールをインストールすることができます。

例えば以下のような設定ファイルを書き、 `aqua install` というコマンドを実行すると
[jq](https://stedolan.github.io/jq/), [conftest](https://www.conftest.dev/) などが GitHub Release からダウンロードされ、インストールされます。

```yaml
packages:
- name: jq
  registry: inline
  version: jq-1.6
- name: conftest
  registry: inline
  version: v0.27.0
inline_registry:
- name: jq
  type: github_release
  repo_owner: stedolan
  repo_name: jq
  asset: 'jq-{{if eq .OS "darwin"}}osx-amd64{{else}}{{if eq .OS "linux"}}linux64{{else}}win64.exe{{end}}{{end}}'
  files:
  - name: jq
- name: conftest
  type: github_release
  repo_owner: open-policy-agent
  repo_name: conftest
  asset: 'conftest_{{trimPrefix "v" .Package.Version}}_{{title .OS}}_x86_64.tar.gz'
  files:
  - name: conftest
```

ちなみに上記の設定ファイルの

```yaml
  asset: 'conftest_{{trimPrefix "v" .Package.Version}}_{{title .OS}}_x86_64.tar.gz'
```

の部分では Go の [text/template](https://pkg.go.dev/text/template) と [sprig](http://masterminds.github.io/sprig/) が使われています。

ツールごとに URL を調べて download して tarball などを展開してインストールしてなどの面倒な作業を aqua で自動化できます。
update も基本的に設定ファイルの version を更新するだけで OK です。

aqua を使うと同じツールの複数のバージョンを管理してプロジェクトによってバージョンを切り替えるといったことも容易にできます。

## 3 つの主なユースケース

aqua では以下の 3 つの主なユースケースを想定しています。

* CI/CD で必要なツールの管理
* ローカルでの開発に必要なプロジェクト(リポジトリ)固有のツールの管理
* 特定のプロジェクト(リポジトリ)によらないツールの管理

### ユースケース1: CI/CD で必要なツールの管理

例えば Terraform の Monorepo の CI で以下のような様々なツールを使っていたとしましょう。

* [gh](https://cli.github.com/)
* [jq](https://stedolan.github.io/jq/)
* [tfsec](https://tfsec.dev/)
* [tflint](https://github.com/terraform-linters/tflint)
* [tfmigrate](https://github.com/minamijoyo/tfmigrate)
* [tfcmt](https://github.com/suzuki-shunsuke/tfcmt)
* [opa](https://github.com/open-policy-agent/opa)
* [conftest](https://www.conftest.dev/)
* [shfmt](https://github.com/mvdan/sh)
* [shellcheck](https://github.com/koalaman/shellcheck)
* [github-comment](https://github.com/suzuki-shunsuke/github-comment)

これらを1個1個 curl などを使ってインストールするコードを書くのは面倒ですが、
aqua であれば設定ファイルを宣言的に書いて `aqua i` を実行すれば終わりです。
新たにツールを追加する場合でも設定ファイルに追記すればよく、スクリプトを更新する必要はありません。
バージョンを明示的に指定できるのでコードを変更してないのに急にツールが更新されることもありませんし、 [Renovate の Regex Manager](https://docs.renovatebot.com/modules/manager/regex/) などを使えば更新を自動化することもできます。

### ユースケース2: ローカルでの開発に必要なプロジェクト(リポジトリ)固有のツールの管理

あるリポジトリのローカルでの開発に必要なツールを aqua で管理することができます。
リポジトリ直下に `aqua.yaml` を置いておけば OK です。
バージョンも指定されているので、人によってバージョンが違ったりする問題も解消できます。
`aqua.yaml` と同じディレクトリに `.aqua` が作成されるのでそれを .gitignore に追加し、 `.aqua/bin` を PATH に追加しましょう。
direnv を使い、リポジトリ直下に .envrc を置いて `.aqua/bin` を PATH に追加すると便利です。

```
aqua.yaml
.aqua/bin
.envrc
```

.envrc

```
PATH_add .aqua/bin
```

`.aqua/bin` を PATH に追加しなくても `aqua exec -- <コマンド> ...` で実行することもできます。

### ユースケース3: 特定のプロジェクト(リポジトリ)によらないツールの管理

特定のプロジェクトによらずにツールを laptop にインストールしたい場合にも使えます。
`~/.aqua/global/aqua.yaml` に設定ファイルを記述し、 `~/.aqua/global/.aqua/bin` を PATH に追加してください。

```sh
export PATH=$HOME/.aqua/global/.aqua/bin:$PATH
```

そして `~/.aqua/global` 配下で `aqua i` を実行すればインストールができます。
`~/.aqua/global` を Git で管理して GitHub などでホスティングするのも良いでしょう。

https://github.com/suzuki-shunsuke/my-aqua-config

## akoi との違い

ところで、自分は aqua に似たツールとして [akoi](http://github.com/suzuki-shunsuke/akoi) というツールを公開していて、自分もこれまでこのツールを使ってきました。
aqua と akoi は「CLI ツールのバージョン管理」という目的・ゴールは同じです。
akoi も結構便利なツールですが、 akoi が抱える様々な課題を解決するために aqua を開発しています。
aqua は akoi のいわば後継ツールです。
ただしコードは全く別物ですし、互換性もありません。

### akoi と比べた aqua の良い点

* GitHub Access Token を使ったインストールをサポート
  * private repository をサポート
  * akoi は anonymous なアクセスなので rate limit に引っかかりやすい
* 管理対象のコマンド実行時にツールのインストールが可能
* 設定ファイルを更新したあとに install コマンドを実行する必要がない
  * akoi は symbolic link を作り直すために install コマンドを実行する必要がある
* 管理対象のツールの実体を共有できる
  * project ごとにツールを install する必要がない(計算資源の効率化)
  * akoi と違って ツールによって実体のインストール先は一意に決まるので、干渉することがなく安全に共有できる
* 事前に archive の中のパスを知っている必要がない
  * akoi は install 時に archive を展開してファイルをコピーし、シンボリックリンクを作成する
    * パスが間違っていると失敗し、 download からやり直しになる
    * そのため、新しいツールを akoi で管理する場合はまず archive の構造を調べる必要がある
  * aqua は install したあとに ~/.aqua 配下を見て file.src を修正すれば良いし、間違っててコマンドの実行に失敗しても download のやり直しとかはない
* `bin_path`, `link_path` ような設定について考えなくて良い
  * akoi は設定ファイルでインストール先などを設定できるようになっている
  * どう設定すべきか悩ましいし、リポジトリによって設定が違ったりして設定を統一するのが難しい
  * aqua はインストール先などが設定できないのでユーザーが迷う必要がない

#### 管理対象のツールの実体を共有できる

aqua はツールの実体を AQUA_ROOT_DIR `~/.aqua` にインストールし、共有することができます。
複数のリポジトリで同じバージョンの同じツールを使う場合に共有できるので、
インストールにかかる時間を短縮できますし、無駄にディスク容量を消費することもありません。
設定ファイルによって動的にバージョンを取得するので、共有していてもリポジトリごとに異なるバージョンを使うこともできます。

安全に共有できるようにツールの実体のインストール先はダウンロード元によってユニークかつ一意に決まるようになっています。
ユーザーがカスタマイズすることはできません(ルートディレクトリは変えられますが、ルート以下は変えられません)。

例えば OSX で jq-1.6 のインストール先は以下になります。

```
.aqua/pkgs/github_release/github.com/stedolan/jq/jq-1.6/jq-osx-amd64/jq-osx-amd64
```

このように GitHub Release からインストールする場合

* リポジトリのオーナー
* リポジトリ名
* tag
* GitHub Release のアセット名

などから一意に決まるため、あるリポジトリでは jq をフォークしたものを使うといった場合でも安全に共存することができます。

## 便利な `--only-link` option

`aqua install` を実行するとツールごとに以下のことが実行されます。

1. `.aqua/bin` 配下にシンボリックリンクを作成
1. ダウンロード
1. tarball などの展開
1. ~/.aqua 配下にインストール

aqua.yaml の packages に大量のツールが定義されていると、
大量のツールが一度にインストールされることになり、
並列で実行されるとはいえ、都合が悪いこともあるでしょう。

`--only-link` option をつけて実行すると、シンボリックリンクだけ作成しダウンロードなどは行わないので直ぐに終わります。

```
$ aqua install --only-link
```

その状態でツールを実行すると、ツールが自動でインストールされてから実行されるので
本当に必要になってからインストールすることが可能であり、余計なインストールが発生しないので便利です。

## コマンド実行時の自動インストール、動的なバージョン切り替えの仕組み

aqua は設定ファイルを更新すると `aqua install` 実行をしなくても更新が反映される、
ツールがまだインストールされていなくてもツールを実行時に自動でインストールされるという機能があります。

tfenv も .terraform-version を更新すればすぐ反映されますし、
terraform コマンドを実行時にまだ指定したバージョンがインストールされてなかったら自動でインストールされますが、それに似ていますね
(ただし tfenv の機能がどう実装されているかは調べてませんし、 aqua を実装する上で参考にしたりはしていません)。

上記の機能が aqua でどう実現されているか簡単に説明します。

例えば aqua で jq をインストールし、 `jq -h` を実行したとしましょう。
jq を実行すると aqua-proxy を経由して `aqua exec -- jq -h` が実行されます。
この辺の詳細は [aqua-proxy とは](#aqua-proxy-とは) を参照してください。
`aqua exec` は aqua の設定ファイルで指定されたバージョンがインストールされているかチェックし、まだインストールされていなかったらインストールし、コマンド `jq -h` を実行します。

## aqua-proxy とは

[aqua-proxy](https://github.com/suzuki-shunsuke/aqua-proxy) は aqua が内部的に依存しているツールです。
コマンド実行時に aqua 及び aqua で管理するツールのバージョンを動的に変更するために作られました。
aqua のために開発されており、 aqua 以外で使われることは想定していません。

aqua-proxy は `aqua install` や `aqua exec` を実行した際に自動で `~/.aqua/bin/aqua-proxy` にインストールされます。
aqua はツールをインストールする際に `.aqua/bin/<ツール>` から `~/.aqua/bin/aqua-proxy` へのシンボリックリンクを作成するので、 `<ツール>` を実行すると `~/.aqua/bin/aqua-proxy` が呼ばれます。

aqua-proxy は [os#Args](https://pkg.go.dev/os#Args) からツール名を取得し、
`aqua exec -- <ツール名> ...` を実行します。
これによりコマンド実行時に aqua 及び `<ツール>` のバージョンを動的に変更することを実現しています。

`.aqua/bin/<ツール>` から aqua-proxy へのシンボリックリンクは静的であり、 aqua-proxy のバージョンを切り替えることは難しいです。
aqua-proxy の機能・責務が大きくなると aqua-proxy のバージョン管理や aqua との互換性を考えなくてはならなくなります。
aqua-proxy のバージョンをほぼ気にしなくて良いよう、 aqua-proxy は最小限の機能・責務しか持たず、安定的であまり変更されないように設計されています。

## プロセスツリーを確認してみる

既に説明したとおり `<ツール>` を実行した際には実はプロセスツリー的には
`aqua-proxy => aqua => <ツール>` という風になっています。

`<ツール>` を直接実行した場合と挙動に違いが出ないように以下のようなことに気を配っています。

* SIGINT, SIGTERM などのシグナルが適切に `<ツール>` のプロセスまで伝達されるようにする
* `<ツール>` の exit code が伝達されるようにする

試しに fzf を実行してみて別のターミナルでプロセスツリーを確認してみます。

```
$ ls | fzf
```

fzf が起動しますが、そのままにしておいて別のターミナルでプロセスツリーを確認してみます。
Mac の `pstree` を使っています。

```
-+- 83548 foo fzf
 \-+- 83549 foo aqua exec -- fzf
   \--- 83550 foo /Users/foo/.aqua/pkgs/github_release/github.com/junegunn/fzf/0.27.2/fzf-0.27.2-darwin_amd64.zip/fzf
```

紛らわしいのですが、最初のプロセスの実体は fzf ではなくて aqua-proxy です。 fzf が aqua-proxy へのシンボリックになっているのでこうなっています。
ここで aqua-proxy に SIGTERM を送ると手元の Mac ではちゃんと子プロセスまで終了しました。

```
$ kill 83548
```

この辺のシグナルハンドリングは Windows だと正常に動かないかもしれません。

https://pkg.go.dev/os#Signal

> The only signal values guaranteed to be present in the os package on all systems are os.Interrupt (send the process an interrupt) and os.Kill (force the process to exit).
> On Windows, sending os.Interrupt to a process with os.Process.Signal is not implemented;
> it will return an error instead of sending a signal.
