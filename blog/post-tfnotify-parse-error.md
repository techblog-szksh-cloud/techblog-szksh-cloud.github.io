---
title: "tfnotify の parse error を通知する"
date: 2020-09-12T08:05:59+09:00
tags:
- terraform
- tfnotify
- github-comment
authors:
- suzuki-shunsuke
---

[tfnotify](https://github.com/mercari/tfnotify) が terraform の標準出力のパースに失敗してコメントを投稿できないことがあります。

コメントを投稿できなくてもビルドのログには残るのですが、やはりコメントを投稿できると便利なので、tfnotify がパースエラーでコメントの投稿に失敗したら、 [github-comment](https://github.com/suzuki-shunsuke/github-comment) でコメントを投稿するようにしました。

なお、この記事を書いている時点のバージョンは tfnotify v0.7.0, github-comment v1.9.0 です。

例えば `tfnotify plan` がパースエラーになった場合、 `cannot parse plan result` というメッセージが標準エラー出力されます。
そこで標準エラー出力に `cannot parse plan result` が含まれていたら github-comment でコメントするようにします。

```sh
terraform plan | github-comment exec -k plan -- tfnotify plan
```

.github-comment.yml

```yaml
# 細かく template を分けているが、別に分けなくてもよい
templates:
  # header は CodeBuild の場合
  header: '{{Env "TARGET"}} [Build link]({{Env "CODEBUILD_BUILD_URL"}})'
  exit_code: ':{{if eq .ExitCode 0}}white_check_mark{{else}}x{{end}}: Exit Code {{.ExitCode}}'
  join_command: |
    ```
    $ {{.JoinCommand}}
    ```
  hidden_combined_output: |
    <details>

    <pre><code>{{.CombinedOutput}}</code></pre>

    </details>
  exec_default: |
    {{template "header" .}}

    {{template "exit_code" .}}

    {{template "join_command" .}}

    {{template "hidden_combined_output" .}}
exec:
  plan:
  - when: |
      Stderr contains "cannot parse plan result"
    template: |
      {{template "exec_default" .}}
```

`tfnotify apply` の場合は `cannot parse apply result` というメッセージを出力するので
次のようになります。

```sh
terraform apply -auto-approve | github-comment exec -k apply -- tfnotify apply
```

```yaml
exec:
  apply:
  - when: |
      Stderr contains "cannot parse apply result"
    template: |
      {{template "exec_default" .}}
```

## tfnotify のコードを確認

* https://github.com/mercari/tfnotify/blob/v0.7.0/terraform/parser.go#L158
* https://github.com/mercari/tfnotify/blob/v0.7.0/terraform/parser.go#L111
* https://github.com/mercari/tfnotify/blob/v0.7.0/notifier/github/notify.go#L20-L21
* https://github.com/mercari/tfnotify/blob/v0.7.0/main.go#L193
