---
title: "drone の PR の build で差分に応じて処理を分ける"
date: 2018-09-30T21:14:34+09:00
draft: true
tags:
- drone
archives: ["2018/09"]
---

drone 0.8.5 で検証しています。

drone で PR の build を行う際、PRの差分に応じて処理を分けたいことがあると思います。
例えば、 `*.js` が修正された場合のみ JS のテストをするとか、
逆に `docs/` 配下のファイルのみの修正では build を実行しないとか。

drone の機能としては特にこういった用途の機能はありません。

次のようなgitコマンドを実行すればファイル名のリストが取れます。

```
git fetch origin $DRONE_BRANCH
git diff --name-only origin/$DRONE_BRANCH
```

例として、frontendディレクトリ配下のファイルが修正されたら、`npm test` を実行するとしましょう。

drone の pipeline, step の条件分岐では、コマンドの実行結果による分岐は出来ないので、commands内で分岐させる必要があります。
ワンライナーで書こうとすると見にくいので次のようなスクリプトをcommands内で呼び出すようにします。

```sh
git fetch origin $DRONE_BRANCH
if `git diff --name-only origin/$DRONE_BRANCH | grep '^frontend/'`; then
  npm test
fi
```

上記の方法の場合、`npm test`を実行したいコンテナ内にgitが必要ですし、
また、分岐したい度にgit diffコマンドを実行する必要があります。
なので、diffの結果を workspace 配下のファイルに書き出すstepを用意し、そのファイルを参照するようにしたほうが良いと思います。

.drone.yml

```yaml
pipeline:
  # diffをファイルに書き込むstep
  diff:
    image: plugins/git
    commands:
      - git fetch origin $DRONE_BRANCH
      - git diff --name-only origin/$DRONE_BRANCH > diff.txt
    when:
      event: pull_request

  frontend_test:
    image: frontend
    commands:
      - drone_commands/frontend_test.sh
    when:
      event: pull_request
```

drone_commands/frontend_test.sh

```sh
if `grep '^frontend/' diff.txt`; then
  npm test
fi
```

## 将来的には drone でサポートされるかも?

https://github.com/drone/drone/issues/1021
