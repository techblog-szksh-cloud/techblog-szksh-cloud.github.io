---
title: "buildflow の task の設定項目"
date: 2020-10-17T18:26:57+09:00
archives: ["2020/10"]
tags:
- oss
- buildflow
---

buildflow というツールを開発しているので `buildflow` というタグをつけて何回かに分けてブログを書こうと思います。

この記事では buildflow の task の基本的な設定項目などについて説明します。
数が多いので、個々の設定の詳細はまた別の記事に書きます。

task には幾つか type がありますが、全ての type に共通するパラメータが以下になります。

* name: task 名。 unique である必要はない。 Go の text/template が使える
* when: task を実行するか否か。 真偽値か Tengo script
  * when_file で外部ファイルを読み込める
* dependency: task の依存関係の定義。 task 名のリストか、 Tengo script
* items: dynamic task の設定。 loop を使って複数の task を動的に生成できる
  * 任意の list か map か、 Tengo script
* input: Tengo script で task のコマンドのパラメータを生成できる
  * input_file で外部ファイルを読み込める
* output: Tengo script で task の実行結果を整形できる。他の task が参照して挙動を変えたりできる
  * output_file で外部ファイルを読み込める
* meta: ユーザーが自由にパラメータを定義できる map

上記の設定は name 以外はオプションです。

task の type としては以下のものがあります。

* command: 外部コマンドを実行
* read_file: ファイルを読み込む。ファイルの内容を他の task で参照できる
* write_file: ファイルを書き込む

command の設定

* shell, shell_opts: コマンドの実行シェル。デフォルトは `/bin/sh -c`
* command: コマンド。 Go の text/template で処理される
  * command_file で外部ファイルを読み込める
* stdin: コマンドの標準入力。 Go の text/template で処理される
  * stdin_file で外部ファイルを読み込める
* env: 環境変数。環境変数名と値は Go の text/template で処理される

read_file の設定

* path: ファイルのパス。Go の text/template で処理される
* format: ファイルのフォーマット。オプション。 json と yaml をサポート。指定するとパースした結果を他の task が参照できる

write_file の設定

* path: ファイルのパス。Go の text/template で処理される
* template: ファイルの内容。Go の text/template で処理される
  * template_file で外部ファイルを読み込める
