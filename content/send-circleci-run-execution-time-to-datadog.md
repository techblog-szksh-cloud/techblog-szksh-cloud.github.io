---
title: "CircleCI の run の実行時間を DataDog に送る"
date: 2020-05-23T14:20:53+09:00
archives: ["2020/05"]
tags:
- circleci
- dd-time
- datadog
---

小ネタです。

[dd-time](https://techblog.szksh.cloud/dd-time/) を使って CircleCI の `run` を使ったコマンドの実行時間をどう計測したらいいのかちょっと考えました。

以前、コマンドの実行時間を DataDog に送るツール dd-time を作りました。

* https://techblog.szksh.cloud/dd-time/
* https://github.com/suzuki-shunsuke/dd-time

これは基本的に以下のように引数として `--` 以降に実行するコマンドを指定します。

```
$ dd-time -m dd_time.execution_time -t command:docker-build -- docker build .
```

実行するスクリプトを標準入力で渡したい場合はこうします。

```
$ curl https://example.com/install.sh | dd-time -m dd_time.execution_time -- sh
```

もちろんシェルスクリプトである必要はなくて例えば Python だったらこうなります。

```
$ curl https://example.com/setup.py | dd-time -m dd_time.execution_time -- python
```

CircleCI の `run` では `shell` オプションで shell を指定できます。

https://circleci.com/docs/2.0/configuration-reference/#run

なので command 全体の時間を計測したい場合は、 shell を次のようにします。

```yaml
- run:
    name: test dd-time
    shell: /usr/local/bin/dd-time -m dd_time.test -- sh -eo pipefail
    command: |
      echo start
      sleep 5
      echo end
```

こうすると `shell` 以外を弄ることなく実行時間を計測して DataDog に送ることが出来ます。

この `shell` のカスタマイズは dd-time に限らず使えるかも知れないですね。

* ログをどっかに送ったりとか
* コマンドが失敗したらエラーを握りつぶしつつどっかに通知したりとか
* etc

以上、小ネタでした。
