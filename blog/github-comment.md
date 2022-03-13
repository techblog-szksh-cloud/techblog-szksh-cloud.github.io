---
title: "github-comment - GitHub にコメントを投稿する CLI"
date: 2020-07-31T20:42:54+09:00
draft: false
archives: ["2020/07"]
tags:
- oss
---

GitHub の issue や pull request, commit にコメントを投稿する CLI ツールを作りました(結構前の話ですが)。

https://github.com/suzuki-shunsuke/github-comment

このブログの執筆時点で最新は v1.5.0 です。

Go 製なので、 GitHub Releases からダウンロードしてくれば簡単にインストールできます。

想定している主な用途は、 CI/CD の 結果をコメントで通知することで DX を向上することです。
例えば CI がこけたらこけたコマンドとエラーメッセージを通知するなどです。

github-comment には

- init: 設定ファイルの雛形を生成する
- post: コメントを投稿する
- exec: 外部コマンドを実行し、その結果を元にコメントを投稿する

という 3 つのサブコマンドがあります。

コメントの投稿には GitHub の Access Token が必要です。
コマンドライン引数 `-token` でも渡せますが、環境変数として設定しましょう。

```
$ export GITHUB_TOKEN=xxx # GITHUB_ACCESS_TOKEN も可
```

## post コマンド

こんな感じでコメントを投稿できます。

```
$ github-comment post -org suzuki-shunsuke -repo github-comment -pr 1 -template test
```

パラメータの数が多いですが、いくつかの Platform では環境変数から自動でパラメータを補完してくれます。

* Drone
* CircleCI
* GitHub Actions

そうするとこれでよくなります。

```
$ github-comment post -template test
```

コメントは Go の [text/template](https://golang.org/pkg/text/template/) で処理されます。
`{{.Org}}` `{{.Repo}}` といった感じでパラメータを参照できます。

```
$ github-comment post -template "{{.Org}}/{{.Repo}} test"
```

- PRNumber
- Org
- Repo
- SHA1
- TemplateKey
- Vars

## exec コマンド

コマンドの実行結果(標準出力、標準エラー出力、 exit code) を元にコメントを投稿したい場合に、 exec コマンドが使えます。

```
$ github-comment exec -template "{{.ExitCode}} {{.Stdout}}" -- echo hello
```

コマンドを実行した上でコメントを投稿します。テンプレートの変数として、 post でも渡されるパラメータの他にコマンドの実行結果が渡されます。

- ExitCode
- Stdout
- Stderr
- CombinedOutput
- Command: [exec.Command.String](https://golang.org/pkg/os/exec/#Cmd.String)
- JoinCommand: コマンド引数(配列)をスペース `" "` でつないだ文字列

github-comment exec の標準入力は実行するコマンドに渡されますし、 github-comment exec の exit code は実行したコマンドの exit code になります。

## 設定ファイル

上記の例では投稿するコメントを `-template` で渡していましたが、ごく短いコメント以外は設定ファイルに記述したほうが良いでしょう。
設定ファイルは `github-comment init` で雛形を生成できます。

```
$ github-comment init
```

こんな感じで複数のテンプレートを記述できます。

```yaml
post:
  default: |
    foo
  hello: |
    hello
  ...
```

そして `post` 実行時に `-template-key (-k)` で使用するテンプレートを指定します。
`-template` と `-k` 両方指定しない場合、デフォルトで `default` テンプレートが使用されます。

```
$ github-comment -k hello
```

### exec の設定

`exec` の設定はもう少し複雑です。
それはコマンドの実行結果によって使用するテンプレートを変えたり、あるいはコメントを投稿しなかったりできるようにするためです。
一つのテンプレートキーに対し、複数のテンプレートを配列で設定します。

```yaml
exec:
  default:
    - when: ExitCode == 0
      template: |
        success
    - when: ExitCode != 0
      template: |
        failed
    ...
  ...
```

そしてテンプレート文字列とは別に `when` という、そのテンプレートを使う条件を設定します。
この条件は [antonmedv/expr](https://github.com/antonmedv/expr) によって処理されます。
テンプレートの text/template とはまた別の構文なのがややこしいですね。
条件の評価結果は当然真偽値ではないといけません。
評価結果が true ならばそれを使ってコメントし、あとは無視されます。
false なら次のテンプレートを評価します。
全部マッチしなければコメントは投稿されませんし、エラーにもなりません。
`dont_comment: true` とすると、その条件にマッチした場合はコメントを投稿せずに終了します(後続のテンプレートも無視されます)。

```yaml
exec:
  hello:
    - when: ExitCode != 0
      dont_comment: true
    - when: true
      template: |
        Hello, world
```

### テンプレートの再利用

`templates` を使うと複数のテンプレートでヘッダーなどを共通化して再利用できます。

```yaml
templates:
  header: "# {{.Org}}/{{.Repo}}"
post:
  default: |
    {{template "header" .}}
```

Go の [text/template](https://golang.org/pkg/text/template/) に馴染みがないとわかりにくいかと思いますが、

```yaml
templates:
  テンプレート名: テンプレート
```

でテンプレートを定義して

```
{{template "テンプレート名" .}}
```

でテンプレートを参照できます。

## テンプレートの変数をコマンドライン引数で渡す

`-var 変数名:値` でパラメータを渡せます。
`{{.Var.変数名}}` で参照できます。

```
$ github-comment post -var name:foo -template "Hello, {{.Var.name}}"
```

## 設定ファイルで変数を定義する

設定ファイルで変数を定義できます。任意の型の変数を定義できます。
`{{.Var}}.変数名` で参照できます。

```yaml
vars:
  foo: bar
  zoo:
    foo: hello
```

`{{.Var.zoo.foo}}`

## post コマンドの標準入力でテンプレートを渡す

`github-comment post` の標準入力でテンプレートを渡せます。 exec の場合はそうはならない(実行するコマンドに渡される)ので注意してください。

```
$ echo foo | github-comment post
```

## パラメータの補完

先に述べたとおり、いくつかの Platform では環境変数から自動でパラメータを補完してくれます。

### CircleCI

プラットフォームの判別: `CIRCLECI` の有無

パラメータ | ソース
--- | ---
.Org | CIRCLE_PROJECT_USERNAME
.Repo | CIRCLE_PROJECT_REPONAME
.PRNumber | CIRCLE_PULL_REQUEST
.SHA1 | CIRCLE_SHA1

### Drone

プラットフォームの判別: `DRONE` の有無

パラメータ | ソース
--- | ---
.Org | DRONE_REPO_OWNER
.Repo | DRONE_REPO_NAME
.PRNumber | DRONE_PULL_REQUEST
.SHA1 | DRONE_COMMIT_SHA1

### GitHub Actions

プラットフォームの判別: `GITHUB_ACTIONS` の有無

パラメータ | ソース
--- | ---
.Org | GITHUB_REPOSITORY
.Repo | GITHUB_REPOSITORY
.PRNumber | GITHUB_EVENT_PATH
.SHA1 | GITHUB_SHA1

## exec のパラメータの Command と JoinCommand

実行したコマンドを示すパラメータとして Command と JoinCommand があります。
これらは似てますが、微妙に違います。

Command は [exec.Cmd の .String()](https://golang.org/pkg/os/exec/#Cmd.String) から取得されるのですが、コマンドが絶対パスになったりするので、あまり望ましくないこともあるでしょう。

例えば `echo hello` の場合 `/usr/local/opt/coreutils/libexec/gnubin/echo foo` となったりします。

一方 JoinCommand はコマンド文字列を単にスペースでつないだものになります。

exec.Cmd の .String() のドキュメントに書いてあるとおり、 .Command と .JoinCommand はそのまま shell で実行するのには適さない形式なので注意してください。

> String returns a human-readable description of c.
> It is intended only for debugging.
> In particular, it is not suitable for use as input to a shell.
> The output of String may vary across Go releases.

## 設定ファイルのパス

設定ファイルのパスは `--config -c` オプションで指定できます。
何も指定しない場合、カレントディレクトリからルートディレクトリに向かって `.github-comment.yml`, `.github-comment.yaml` を探索し、最初に見つかったものを使います。

## 設定ファイルで .Org, .Repo を指定する

設定ファイルでコメント先のリポジトリを指定できます。
Platform で補完される場合や、明示的にパラメータで指定する場合は不要です。

```yaml
base:
  org: suzuki-shunsuke
  repo: github-comment
```
