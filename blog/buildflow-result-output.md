---
title: "buildflow の実行結果の出力形式"
date: 2020-10-18T08:36:09+09:00
tags:
- oss
- buildflow
authors:
- suzuki-shunsuke
---

buildflow というツールを開発しているので `buildflow` というタグをつけて何回かに分けてブログを書きます。

この記事では buildflow の実行結果の出力フォーマットなどについて説明します。

ちょっと出力はわかりにくいかもしれません。
改善したいと思いつつ、どうあるべきなのかまだ見えてないのでこんな感じになっています。

task の標準出力、標準エラー出力はリアルタイムで出力されます。
また、複数のタスクを並列実行できます。
複数のタスクのログをリアルタイムで出力すると当然混じるので、区別がつくように各行の prefix に `timestamp | task name | ` をつけて出力します。
それでも混じるとわかりにくいので、 phase が完了後に、 phase の全 task のログを混ざらないようにそれぞれ標準エラー出力します。
つまり同じログが 2 回出力されますが 2 回実行されているわけではないです。

```
==============
= Phase: phase 名 =
==============
10:47:54UTC | task A | + /bin/sh -c echo hello # 実行されるコマンド
10:47:54UTC | task B | + /bin/sh -c echo foo
10:47:54UTC | task A | hello # コマンドの標準(エラー)出力
10:47:54UTC | task A | 
... # リアルタイムに出力されるので複数の task のログが混ざる場合がある


================
= Phase Result: phase 名 = # 該当 phase の全 task 完了後に全 task の結果と標準(エラー)出力を出力する
================
status: succeeded
task: task A
status: succeeded
exit code: 0
start time: 2020-10-14T10:47:54Z
end time: 2020-10-14T10:47:54Z
duration: 4.818877ms
+ /bin/sh -c echo hello
hello

...
```
