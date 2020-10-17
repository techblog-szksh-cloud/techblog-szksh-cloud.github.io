---
title: "buildflow の script や template に渡される parameter"
date: 2020-10-17T19:44:39+09:00
archives: ["2020/10"]
tags:
- oss
- buildflow
---

buildflow というツールを開発しているので `buildflow` というタグをつけて何回かに分けてブログを書こうと思います。

この記事では buildflow の Tengo script やテンプレートにパラメータとして渡される変数について紹介します。

buildflow では Tengo script はテンプレートが使える設定項目が多くあります。それらの設定には共通のフォーマットのパラメータが渡されます。

* PR: Pull Request の情報: [GitHub API](https://docs.github.com/en/free-pro-team@latest/rest/reference/pulls#get-a-pull-request) のレスポンス body
* Files: Pull Request で更新されたファイルの一覧: [GitHub API](https://docs.github.com/en/free-pro-team@latest/rest/reference/pulls#list-pull-requests-files) のレスポンス body
* Phases: 対象の Phase よりも前の Phase の結果
* Phase: 対象の Phase
* Tasks: 対象の Phase の Task の結果
* Task: 対象の Task
* Item: dynamic task のパラメータとして渡される
* Meta: 設定 meta

Phase

* Status: Phase の実行結果
  * succeeded
  * failed
  * skipped
* Tasks: Phase の task の実行結果
* Meta: phase の 設定 meta

Task

type によらず共通

* Type: task の type
* Name: task 名
* Status: Task の実行結果
  * queue
  * running
  * succeeded
  * failed
  * skipped
* Meta: task の meta の設定
* Input:
* Output:

command

* ExitCode
* StdOut
* StdErr
* CombinedOutput

read_file

* File
  * Text: ファイルの内容
  * Data: read_file の format を指定した場合、パースされた結果

write_file

* File
  * Text: ファイルの内容

## Template でパラメータを参照する

例えば command の場合

```yaml
---
phases:
- name: main
  tasks:
  - name: hello
    command:
      command: 'echo "{{.Task.Name}}"'
```

## Tengo script でパラメータを参照する

例えば task foo が成功した場合のみ、 task bar を実行したい場合

```yaml
---
phases:
- name: main
  tasks:
  - name: foo
    command:
      command: echo hello
  - name: bar
    command:
      command: echo hello
    dependency:
    - foo
    when: |
      task := {}
      for t in Tasks {
        if t.Name == "foo" {
          task = t
          break
        }
      }
      result := task.Status == "succeeded"
```

このように他の task の実行結果や PR の情報などを使ってビルドの挙動を変えることが出来ます。
