---
title: "buildflow での Tengo の使い方"
date: 2020-10-17T17:18:34+09:00
archives: ["2020/10"]
draft: true
tags:
- oss
- buildflow
---

buildflow というツールを開発しているので `buildflow` というタグをつけて何回かに分けてブログを書こうかなと思います。

この記事では buildflow で Tengo というスクリプト言語をどのように使っているか書きたいと思います。

https://github.com/d5/tengo

buildflow の設定では task.when や task.dependency, task.input などで Tengo script が使えますが、
1 つの共通のルールがあります。
`result` という変数を宣言し、 script の実行結果をその変数に持たせるというルールです。
これは Tengo の仕様とかではなく、 buildflow 特有のルールです。
もっとも単純な例だと次のような感じです。

```
result := true
```

task.input, output などだと result の値が Task.Input, Task.Output として参照できるようになります。

```yaml
---
phases:
- name: main
  tasks:
  - name: hello
    input: |
      result := {
        foo: "bar"
      }
    command:
      command: 'echo "{{.Task.Input.foo}}"'
    when: "result := true"
```

## Tengo の標準ライブラリ

Tengo には[標準ライブラリ](https://github.com/d5/tengo/blob/master/docs/stdlib.md)があります。 
buildflow では全ての標準ライブラリが使えます。
