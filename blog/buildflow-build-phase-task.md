---
title: "buildflow の build, phase, task について"
date: 2020-10-17T18:09:19+09:00
tags:
- oss
- buildflow
authors:
- suzuki-shunsuke
---

buildflow というツールを開発しているので `buildflow` というタグをつけて何回かに分けてブログを書こうと思います。

この記事では buildflow の概念である build, phase, task について書きたいと思います。

buildflow には Build, Phase, Task という概念があります。
CircleCI の Pipeline, Workflow, Job みたいなものと思ってもらえるとよいと思います。

```
$ buildflow run
```

で 1 つの build が実行されます。
build は複数の phase からなり、 phase が 1 つずつ順に実行されます。
phase は複数の task からなり、 task が全て終了すると、その phase も終了となります。
task は並列に実行したり、依存関係を定義したりできます。
task では外部コマンドを実行したりできます。

設定ファイルでは phases, tasks をそれぞれ配列で指定します。

```yaml
---
phases:
- name: setup
  tasks:
  - name: hello
    command:
      command: echo hello
  - name: foo
    command:
      command: echo foo
- name: build
  tasks:
  - name: hello
    command:
      command: echo hello
  - name: foo
    command:
      command: echo foo
    dependency:
    - hello
- name: post build
  tasks:
  - name: hello
    command:
      command: echo hello
```

上の例では 3 つの phase setup, build, post build が順に実行されます。
デフォルトではどれかの phase が失敗するとそれ以降の phase は実行されません(この挙動は変えられます)。

task も phase 同様配列で指定しますが、配列の順序に意味はありません。
依存関係がない限り、並列で実行されますし、実行順序は不定です。
