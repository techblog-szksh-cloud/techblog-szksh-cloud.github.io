---
title: "aqua で組織・チームのツール群を管理"
date: 2021-09-25T12:01:56+09:00
tags:
- oss
- aqua
authors:
- suzuki-shunsuke
---

[aqua](https://github.com/suzuki-shunsuke/aqua) [v0.7.3](https://github.com/suzuki-shunsuke/aqua/releases/tag/v0.7.3) をリリースし、
複数の global configuration をサポートしました。

個人で使う分にはあまり嬉しい機能でもないかもしれませんが、
会社・組織・チームといった集団(以下`組織`で統一)で設定を共有するには便利な機能だと思います。

これまで aqua では 2 つの設定ファイルをサポートしていました。

* -c で指定した場合はそのファイル、そうでなければカレントディレクトリから探索して最初に見つかったファイル
  * リポジトリ直下にそのリポジトリ用の aqua.yaml をおく
* global configuration (デフォルトは `~/.aqua/global/[.]aqua.y[a]ml`)
  * 個人の dotfiles とかで aqua.yaml を管理しておく

こうすることで特定のリポジトリ用の設定と個人の設定を管理することができます。

しかし、第三の設定を参照することはできませんでした。
例えばある組織で使うツールセットを aqua で管理しようと思ってもこれまでは難しかったです。

そこで `AQUA_GLOBAL_CONFIG` という環境変数に `:` 区切りで設定ファイルへのパスを設定することで先頭から順に設定ファイルを参照するようにしました。

設定ファイルの優先順位は高い方から順に次のようになります。

1. -c で指定した場合はそのファイル、そうでなければカレントディレクトリから探索して最初に見つかったファイル
1. `AQUA_GLOBAL_CONFIG`
1. global configuration (デフォルトは `~/.aqua/global/[.]aqua.y[a]ml`)

イメージとしては

1. プロジェクト(リポジトリ)の設定
1. 組織の設定
1. 個人の設定

という感じです。

例えば GitHub Organizations に aqua-config というリポジトリを作成し、以下のようなファイルを用意したとしましょう。

* all.yaml: 全 Developer 用の設定
* sre.yaml: SRE Team 用の設定

そのリポジトリをローカル `/home/foo/aqua-config` に checkout したとしましょう。
あなたが SRE の場合、 AQUA_GLOBAL_CONFIG を次のように設定しましょう。

```sh
export AQUA_GLOBAL_CONFIG=/home/foo/aqua-config/sre.yaml:/home/foo/aqua-config/all.yaml
```

こうすることで特定のリポジトリ用の設定と個人の設定(dotfiles)に加えて、
自分が所属する組織用の設定も参照することができます。

組織としては組織に必要なツール群を aqua で宣言的に管理できるため、
セットアップのコストも下がり、バージョンも組織で統一することができます。

## `aqua install` に追加された `-a` option

v0.7.3 では `aqua install` に `-a` option が追加されました。
`aqua install` はデフォルトでは global configuration は参照しません。
global configuration を参照するのは `aqua exec` 及び aqua でインストールされたツールを実行したとき(内部的に `aqua exec` が実行されている)だけです。

`-a` option をつけると global configuration も含めて全ての設定ファイルを参照し install を実行します。

aqua.yaml を Git で管理している場合は定期的に リポジトリを pull して `aqua i -a -l` を実行するのが良いでしょう。
簡単なスクリプトを書いたり、 cron で定期実行するようにするとよいかもしれません。
