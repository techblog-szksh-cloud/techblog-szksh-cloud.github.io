---
title: "buildflow の dynamic task"
date: 2020-10-17T21:29:51+09:00
archives: ["2020/10"]
tags:
- oss
- buildflow
---

buildflow というツールを開発しているので `buildflow` というタグをつけて何回かに分けてブログを書きます。

この記事では buildflow の dynamic task という機能について説明します。
dynamic task では task.items の値でループを回し、複数の task を動的に生成できます。
勿論 task.items はオプションなので、指定しなければ普通の task として扱われます。
task.items を指定する場合、 map か list か、それらを返す Tengo script でないといけません。

```yaml
---
phases:
- name: main
  tasks:
  - name: "list {{.Item.Key}} {{.Item.Value.name}}"
    command:
      command: "echo {{.Item.Key}} {{.Item.Value.name}} {{.Item.Value.age}}"
    items:
    - name: foo
      age: 10
    - name: bar
      age: 20
```

上記の設定は dynamic task を使わないとこうなります。

```yaml
---
phases:
- name: main
  tasks:
  - name: "list 0 foo"
    command:
      command: "echo 0 foo 10"
  - name: "list 1 bar"
    command:
      command: "echo 1 bar 20"
```

パラメータ `Item` は Key, Value を持ち、 Items が map の場合、それぞれ map の key, value が渡され、 list の場合、 index と value が渡されます。

上記の例は単純すぎてイマイチかもしれませんが、
例えばファイルなどの一覧を返すコマンドの実行結果を元に
dynamic task でファイルごとに別の task で並列に処理するとかが考えられそうです。

## 制約

task.items は phase の最初に評価されます。
つまり同じ phase の task の結果を参照したり出来ません。

これは task.dependency の評価時に、 task のリストが定まっていないと評価できないためです。

ただし、前の phase 及び phase の task の実行結果は参照できるため、 items で特定の task の実行結果を参照したい場合は、phase を分けることになります。

実は dynamic task を実現する上で上記の問題をクリアするために phase という概念を導入したという経緯があったります。
