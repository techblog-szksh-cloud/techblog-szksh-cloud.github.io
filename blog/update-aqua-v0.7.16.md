---
title: "aqua の最近の update (v0.7.4 ~ v0.7.16)"
date: 2021-11-18T20:21:57+09:00
archives: ["2021/11"]
tags:
- oss
- aqua
---

以前 aqua [v0.7.3](https://github.com/suzuki-shunsuke/aqua/releases/tag/v0.7.3) がリリースされた際に [aqua で組織・チームのツール群を管理](/aqua-global-configs/) という記事を書きました。
あれからもうすぐ 2 ヶ月になり、最新バージョンは [v0.7.16](https://github.com/suzuki-shunsuke/aqua/releases/tag/v0.7.16) になりました。
そこで v0.7.4 ~ v0.7.16 の間の更新と、関連 repository の更新を幾つか(全部ではない)紹介します。

基本的に [Release Note](https://github.com/suzuki-shunsuke/aqua/releases) に書いてある内容です。

* GitHub の Access Token が基本的に不要になりました
* Homebrew で install できるようになりました
* aqua.yaml がより簡潔に書けるようになりました
* aqua.yaml の packages を他のローカルのファイルから import できるようになりました
* aqua.yaml をディレクトリの階層的にネストできるようになりました
* aqua which コマンドをサポートしました
* github_archive, github_content type をサポートしました
* (advanced) バージョンによってパッケージの type が変更された場合にも対応できるようになりました
* [Standard Registry](https://github.com/suzuki-shunsuke/aqua-registry) の package の数が 139 => 220 になりました。
* [aqua のための CircleCI Orb](https://circleci.com/developer/orbs/orb/suzuki-shunsuke/aqua) をリリースしました

## GitHub の Access Token が基本的に不要になりました

private repository から package をインストール場合は当然必要ですが、そうでなければ不要になりました。
これにより、 aqua を導入するハードルが下がりましたし、 GitHub API の Rate Limit に引っかかることが基本的になくなりました。

余談ですが、 private repository のツールを簡単に install できるのも aqua の便利な点だなと思っています。

## Homebrew で install できるようになりました

```
$ brew install suzuki-shunsuke/aqua/aqua
```

Homebrew で install できるようにすることで、より手軽に導入してもらえるようになりました。

ちなみに aqua を aqua で管理出来ないのかというと、現状できません(無限ループになってしまう)。

## aqua.yaml がより簡潔に書けるようになりました

AS IS

```yaml
- name: direnv/direnv
  registry: standard
  version: v2.28.0 # renovate: depName=direnv/direnv
```

TO BE

```yaml
- name: direnv/direnv@v2.28.0
```

* `registry: standard` が省略可能
* version を name に @ のあとに書ける
  * これにより、 [Renovate の Regex Manager](https://docs.renovatebot.com/modules/manager/regex) 用にコメント `# renovate: depName=direnv/direnv` を書く必要がなくなりました

これにより 1 行で書けるようになりました。
ただ簡潔にかけて楽というだけでなく、 Renovate 用のコメントでパッケージ名を間違えて指定するリスクがなくなりました。

e.g. パッケージ名を間違えている例

```yaml
- name: direnv/direnv
  registry: standard
  version: v2.28.0 # renovate: depName=cli/cli
```

[aqua-renovate-config](https://github.com/suzuki-shunsuke/aqua-renovate-config) を使えばコメントを書かなくても version を上げることが出来ます。

## aqua.yaml の packages を他のローカルのファイルから import できるようになりました

e.g.

ディレクトリ構成

```
aqua.yaml
aqua/
  reviewdog.yaml
  golangci-lint.yaml
  ...
```

aqua.yaml 

```yaml
packages:
- import: aqua/*.yaml
```

aqua/reviewdog.yaml

```yaml
packages:
- name: reviewdog/reviewdog@v0.13.0
```

このようにファイルを分割することで、特定のパッケージが update された場合のみ CI で特定の job を実行するといったことがやりやすくなります。
例えば GitHub Actions の [`on.<push|pull_request>.paths`](https://docs.github.com/en/actions/learn-github-actions/workflow-syntax-for-github-actions#onpushpull_requestpaths) の場合、

```yaml
name: test
on:
  pull_request:
    paths:
    - '**.go'
    - aqua/golangci-lint.yaml
```

## aqua.yaml をディレクトリの階層的にネストできるようになりました

aqua はカレントディレクトリからルートディレクトリに遡って `^\.?aqua\.ya?ml$` を探索します。
このとき、それまではファイルを一つ見つけた時点で探索をやめていましたが、全ての階層を探索するようになりました。
同じパッケージが定義されていた場合、先に見つかった設定ファイルの version が優先されます。
これにより、 Monorepo でも aqua が使いやすくなりました。
Monorepo 直下に aqua.yaml を置きつつ、サブディレクトリに aqua.yaml を置いても、サブディレクトリ配下で Monorepo 直下の aqua.yaml も参照できるようになりました。

## aqua which コマンドをサポートしました

```console
$ which gh
/Users/shunsuke-suzuki/.aqua/bin/gh

$ aqua which gh
/Users/shunsuke-suzuki/.aqua/pkgs/github_release/github.com/cli/cli/v2.2.0/gh_2.2.0_macOS_amd64.tar.gz/gh_2.2.0_macOS_amd64/bin/gh
```

aqua は `~/.aqua/bin` 配下にシンボリックリンクを作成し、コマンド実行時に動的にバージョンを決定し、インストールされたコマンドを実行します。
よって `which` や `command -v` では実際に実行されるコマンドのパスが分かりませんが、 aqua which コマンドを使うとパスが分かります。
ちなみに aqua で管理されてないコマンドでもパスを取得できます。

```console
$ aqua which git
/usr/local/bin/git
```

少々変わった使い方ですが、 aqua でインストールされた実行ファイルを別のパスにコピーしたい場合に便利です。

```
$ cp "$(aqua which gh)" src/gh
```

## github_archive, github_content type をサポートしました

Standard Registry にある package をインストールしているだけの方は、そもそも package の type というものを気にする必要もないので
あまり関係ない話かもしれませんが、 `http`, `github_release` package に加えて、 `github_archive`, `github_content` package もサポートされました。
`github_archive` は GitHub Repository の Archive をパッケージとして扱うもので、 [tfenv](https://github.com/tfutils/tfenv) を aqua でインストールする際なんかに使われています。
`github_content` は GitHub Content API を使って GitHub Repository の単一ファイルをパッケージとして扱うものです。

## (advanced) バージョンによってパッケージの type が変更された場合にも対応できるようになりました

これまた advanced な内容で多くの方にはあまり関係ない裏側の仕組みの話ですが、パッケージによってはバージョンによって type が変わることがあります(かなりまれですが)。
あとは repository の owner が変わったりなんかもありますが、そういった場合にも対応できるようになりました。
ちなみに GitHub Release の asset のファイル名のフォーマットや、 asset のディレクトリ構成が変わることは時々ありますが、それらには元々対応できています。

e.g.  https://github.com/suzuki-shunsuke/aqua-registry/blob/v0.10.7/registry.yaml#L486-L492

https://github.com/suzuki-shunsuke/aqua/blob/v0.7.16/docs/registry_config.md#version_constraint-version_overrides

## Standard Registry package の数が 139 => 220 になりました。

Standard Registry は [v0.8.6](https://github.com/suzuki-shunsuke/aqua-registry/releases/tag/v0.8.6) から [v0.10.7](https://github.com/suzuki-shunsuke/aqua-registry/releases/tag/v0.10.7) になりましたが、その結果 package の数は 139 から 220 になりました。

## aqua のための CircleCI Orb をリリースしました

CircleCI で Orb を使って aqua を install したり aqua を使ってパッケージをインストールできるようになりました。
aqua とパッケージを cache してくれます。
