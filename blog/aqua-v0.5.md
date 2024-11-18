---
title: "aqua v0.1.0 から v0.5.0 での変更点"
date: 2021-09-04T11:58:42+09:00
tags:
- oss
- aqua
authors:
- suzuki-shunsuke
---

[先日 aqua v0.1.0 をリリースした記事を書いた](/aqua/)ばかりですが、
そこから更に開発を続けて v0.5.0 をリリースしたので、変更点を紹介します。

基本的に [Release Note](https://github.com/suzuki-shunsuke/aqua/releases) に書いてあるとおりです。

* PATH を project (aqua.yaml) 毎に設定する必要がなくなりました
  * `~/.aqua/bin` を PATH に追加すればよくなりました
  * direnv などを使って環境変数を追加する必要がなくなりました
* `install` コマンドに `--test` option を追加し、 `file.src` の設定が正しいかテストできるようになりました
  * CI で aqua の設定をテストするのに便利
* GitHub Release だけでなく、任意の URL から tool のダウンロード・インストールができるようになりました
  * Go や helm, Hashicorp の product のような公式サイトからダウンロードするタイプのツールも install できるようになりました
* Breaking Change: `inline_registry` の設定の形式を変更しました
* aqua の設定の再利用性を高める `Registry` という仕組みを導入しました
  * standard `Registry` を公開しました https://github.com/suzuki-shunsuke/aqua-registry
* 簡単な slide を公開しました: https://speakerdeck.com/szksh/introduction-of-aqua

## PATH を project (aqua.yaml) 毎に設定する必要がなくなりました

aqua v0.1.0 では symbolic link を aqua.yaml のあるディレクトリの `.aqua/bin` 配下に作成しており、ここを PATH に追加する必要がありました。
direnv とかを使うと便利ですが、間接的に(?) aqua が direnv のようなツールに依存している形になり、微妙でした。

aqua v0.5.0 では symbolic link を `~/.aqua/bin` 配下に作成するため、 .bashrc などで `~/.aqua/bin` を PATH に追加しておけば project ごとに環境変数を追加する必要はなくなりました。
ちなみに作成される symbolic link は aqua-proxy へのリンクであり、ツールのバージョンには依存しないので `~/.aqua/bin` を共有しても干渉することはありません。

### [応用] `~/.aqua/bin` 配下に symbolic link を作る上での課題とそれの解決法

`~/.aqua/bin` 配下に symbolic link を作って PATH に追加する場合、一つ大きな課題があります
(だからこそ v0.1.0 ではプロジェクトごとに symbolic link を作っていました)。
`~/.aqua/bin` 配下に symbolic link を作って PATH に追加すると、基本的にそのファイルが呼ばれることになります。
そのツールを aqua で管理しているプロジェクト配下ならそれで良いですが、そうでない場合、本来 aqua 以外でインストールしたものを実行したくても実行できません。
例えば homebrew で jq を install していて、あるプロジェクトでは aqua を使ってバージョンを固定したものを使いたいが、それ以外では homebrew で install したものを使いたいといった場合に問題になります。

この問題を解決するため、 aqua ではツールを呼び出す際に `PATH` をチェックして aqua-proxy へのリンクとなっているものは除外するというハック(?)のようなことをしています。

## `install` コマンドに `--test` option を追加し、 `file.src` の設定が正しいかテストできるようになりました

地味な更新ですが、 aqua の設定を更新した際に CI でテストするのに便利です。
`--test` option なしだと、 warning は出力しますが、 exit code は 0 になります。

## GitHub Release だけでなく、任意の URL から tool のダウンロード・インストールができるようになりました

ちなみに、 GitHub Release で公開されてないようなツールでも、
GitHub リポジトリで versioning されていて Renovate の `github_release` data source で自動更新できるケースは少なくないと思います。

## Breaking Change: `inline_registry` の設定の形式を変更しました

小さな breaking change ですが、`inline_registry` の形式が変わりました。

AS IS

```yaml
inline_registry:
- name: jq
  type: github_release
  repo_owner: stedolan
  repo_name: jq
  asset: 'jq-{{if eq .OS "darwin"}}osx{{else}}{{.OS}}{{end}}-{{.Arch}}'
  files:
  - name: jq
```

TO BE

```yaml
inline_registry:
  packages:
  - name: jq
    type: github_release
    repo_owner: stedolan
    repo_name: jq
    asset: 'jq-{{if eq .OS "darwin"}}osx{{else}}{{.OS}}{{end}}-{{.Arch}}'
    files:
    - name: jq
```

## aqua の設定の再利用性を高める `Registry` という仕組みを導入しました

これが一番大きな更新です。
aqua を使うにはツールのインストール方法を YAML で記述しないといけませんが、
これはちょっとした手間ですし、新規ユーザーにとって障壁となるでしょう。

ツールとそのバージョンを定義したらインストールできてほしいものです。
ツールとそのバージョンの定義は `aqua.yaml` の `packages` の部分なので、それ以外の設定を如何に簡略化するかという話になります。

Registry はツールのインストール方法の設定を、プロジェクト固有のバージョン設定とは独立させ、再利用可能な形で共有する仕組みです。

Registry には現状 4 種類あります。

* inline registry: aqua.yaml の中に直接 install 方法を定義する。 v0.1.0 からサポートされている方法
* github_content registry: GitHub Repository にあるファイルを Registry として参照する方法
* local registry: GitHub Repository にあるファイルを Registry として参照する方法
* standard registry: 自分がメンテしている github_content registry のエイリアス

### inline registry

inline registry は従来からあるやつで、 aqua.yaml 内に定義する方法です。

```yaml
inline_registry:
  packages:
  - name: jq
    type: github_release
    repo_owner: stedolan
    repo_name: jq
    asset: 'jq-{{if eq .OS "darwin"}}osx{{else}}{{.OS}}{{end}}-{{.Arch}}'
    files:
    - name: jq
```

シンプルではありますが、コピペする以外に再利用性がありません。

## local registry

local registry はローカルにあるファイルを参照する registry です。
絶対パスか、 aqua.yaml からの相対パスを指定します。

## github_content registry

ユーザーとしては次のように Registry を定義すればあとは `packages` で Registry を参照できます。
GitHub Access Token を環境変数 `GITHUB_TOKEN` として設定する必要があります。

```yaml
registries:
- name: suzuki-shunsuke/aqua-registry
  type: github_content
  repo_owner: suzuki-shunsuke
  repo_name: aqua-registry
  ref: v0.2.0 # renovate: depName=suzuki-shunsuke/aqua-registry
  path: registry.yaml

packages:
- name: conftest
  registry: standard
  version: v0.27.0 # renovate: depName=open-policy-agent/conftest
```

### Registry を公開する

自分で Registry を公開したい場合は GitHub Repository に設定ファイルを置くだけで OK です。
e.g. https://github.com/suzuki-shunsuke/aqua-registry/blob/main/registry.yaml

## Standard Registry

Standard Registry も作りました。

https://github.com/suzuki-shunsuke/aqua-registry

jq や gh, kubectl, Terraform など有名なツールはこの Registry を使えばインストールできますが、
当然 PR も受け付けているので、追加してほしいツールがあれば PR を投げてください。

Official Registry を github_content Registry として利用することも当然できますが、
より簡潔に書けるように `type: standard` という Registry がサポートされています。

AS IS

```yaml
registries:
- name: standard
  type: github_content
  repo_owner: suzuki-shunsuke
  repo_name: aqua-registry
  ref: v0.2.0 # renovate: depName=suzuki-shunsuke/aqua-registry
  path: registry.yaml
```

TO BE

```yaml
registries:
- type: standard
  ref: v0.2.0 # renovate: depName=suzuki-shunsuke/aqua-registry
```

上 2 つは等価ではありますが、後者のほうが簡潔です。
