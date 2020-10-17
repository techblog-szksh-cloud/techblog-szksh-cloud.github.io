---
title: "buildflow というワークフローエンジンのようなタスクランナーのようなツールを作っている"
date: 2020-10-17T16:06:31+09:00
archives: ["2020/10"]
tags:
- oss
- buildflow
---

buildflow というツールを開発しているので紹介します。
`buildflow` というタグをつけて何回かに分けてブログを書こうかなと思います。
1本目のこの記事では

* どんなツールか
* Hello World
* 特徴

について簡単に説明します。

## どんなツールか

https://github.com/suzuki-shunsuke/buildflow

ワークフローを実行するための CLI ツールです。
ワークフローエンジンと言うと Airflow とか Azkaban, Argo Workflows のようなツールをイメージするかと思いますが、
それらとは目的も機能も違います。
一部の CI サービスではワークフローのローカル実行をサポートしてたりしますが、そんなイメージで良いかもしれません。
buildflow では task と task の依存関係を設定ファイルに定義し、コマンドを実行するとローカルでタスクが実行されます。
そういうとタスクランナーといったほうがいいのかもしれませんが、個別のタスクを指定して実行するような機能はないので、タスクランナーとも違う気がします。

CI サービス上で実行することを目的として開発しています(汎用的なツールなので他の目的でも使えるとは思います)。

## Hello World

まだどんなツールかピンと来てない人もいるかもしれないので、簡単な Hello World をやってみましょう。

[GitHub Releases](https://github.com/suzuki-shunsuke/buildflow/releases) からバイナリをダウンロードしてください。

次のような設定ファイル `.buildflow.yaml` を用意します。

```yaml
---
phases:
- name: main
  tasks:
  - name: hello
    command:
      command: echo hello
```

次のコマンドを実行すると task が実行されます。

```
$ buildflow run

==============
= Phase: main =
==============
07:50:46UTC | hello | + /bin/sh -c echo hello
07:50:46UTC | hello |
07:50:46UTC | hello | hello
07:50:46UTC | hello |

================
= Phase Result: main =
================
status: succeeded
task: hello
status: succeeded
exit code: 0
start time: 2020-10-17T07:50:46Z
end time: 2020-10-17T07:50:46Z
duration: 4.317259ms
+ /bin/sh -c echo hello
hello
```

## 特徴

task を依存関係に基づいて並列実行できます。加えて以下のような特徴があります。

* ワンバイナリで動く。他に依存するものがない
  * Go で書かれています
* 他のタスクの実行結果によってタスクの挙動を変えられる
  * 標準(エラー)出力、 exit code, etc
  * dynamic に task を生成することも可能
* Tengo というスクリプト言語を用いて柔軟な設定を書ける
  * 設定ファイルは YAML ですが、一部の設定に Tengo というスクリプト言語が使えます
  * Tengo の処理系も buildflow に内包されているので、 Tengo の処理系をインストールする必要はありません
* CI で実行時に Pull Request (以下 PR) の情報に基づいて処理を変えられる
  * GitHub 前提(GitLab や BitBucket はサポート外)
  * 自動で PR の情報を取得

Tengo は Go で実行されたスクリプト言語です。 https://github.com/d5/tengo を参照してください。
なぜ Tengo を採用したかとかは別に書きたいと思います。

Tengo は Python や Ruby, Go といった言語に比べれば言語仕様がコンパクトであり、
よく知らなくてもなんとなく読めるし、簡単にかけると思っています。
加えて、そもそも buildflow の中での Tengo の役割は限定されており、 Tengo をゴリゴリ書く必要はないと思います。

PR の情報に基づき、例えば以下のようなことが出来ます。

* 特定のラベルがついたら task を実行する
* 特定のファイルが PR で更新されたら task を実行する
* 特定のユーザー(botとか)からの PR では task を実行しない

これらのロジックは自分がよく欲しくなるので、 buildflow を使えば簡単に実装できるようにしました。

他にも様々な機能がありますので、また別の記事で紹介できたらと思います。
