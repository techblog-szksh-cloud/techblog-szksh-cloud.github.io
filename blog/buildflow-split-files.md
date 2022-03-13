---
title: "buildflow で設定ファイルを分割する"
date: 2020-10-17T20:49:28+09:00
archives: ["2020/10"]
tags:
- oss
- buildflow
---

buildflow というツールを開発しているので `buildflow` というタグをつけて何回かに分けてブログを書こうかなと思います。

この記事では buildflow の設定ファイルを分割する方法について説明します。

buildflow では一部の設定項目について他のファイルのパスを指定して読み込むということが出来ます。
1 つのファイルに全部の設定を書いていると、ファイルが大きくなってメンテナンス性が悪くなったり、
コードオーナーが曖昧になったりするので、そういう場合は分割すると良いでしょう。
コードオーナーが異なる複数のサービスで共通の設定ファイルを用いる場合、ファイルを分割して
GitHub の CODEOWNERS を設定するのもよいでしょう。
あまりないかもしれませんが、ファイルを分割すると同じファイルを読み込んで再利用も出来ます。

また、 Tengo script を独立したファイルに分割すると、 test が可能になります。
Tengo script をテストするためのツールとして [tengo-tester](https://github.com/suzuki-shunsuke/tengo-tester) というツールも開発しているので、そちらをお使いください。

以下のようなファイル読み込みの設定があります。

* phase.import
* task.import:
* task.input_file
* task.output_file
* task.when_file
* command.command_file
* command.env[].value_file
* write_file.template_file

ファイルのパスは、絶対パスか、実行中の build の設定ファイルが存在するディレクトリからの相対パスになります。
