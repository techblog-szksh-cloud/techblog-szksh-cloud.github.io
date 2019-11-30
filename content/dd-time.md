---
title: "dd-time - コマンドの実行時間を Datadog に送るツール"
date: 2019-11-30T13:54:47+09:00
archives: ["2019/11"]
tags:
- oss
- datadog
---

コマンドの実行時間を Datadog に送る [dd-time](https://github.com/suzuki-shunsuke/dd-time) というツールを作りました。

このツールは [circle-dd-bench](https://github.com/yuya-takeyama/circle-dd-bench) にインスパイアされていますが、 CircleCI 以外でも需要あると思ったり、他にも幾つか改善したい部分があったので自作することにしました。

circle-dd-bench については circle-dd-bench の作者が書いたブログ https://blog.yuyat.jp/post/circle-dd-bench/ も参考にしてください。

dd-time は Go 製なので [GitHub Releases](https://github.com/suzuki-shunsuke/dd-time/releases) からバイナリをダウンロードしてインストールすれば使えます。

使い方はシンプルで実行時間を計測したいコマンドの前に `dd-time --` をつけるだけです。
例えば Docker image のビルドの時間を計測したい場合次のような感じになります。

```
$ dd-time -t command:docker-build -- docker build .
```

Datadog の API key を環境変数 `DATADOG_API_KEY` として設定する必要があります。
こうすると [Datadog の Post timeseries points API](https://docs.datadoghq.com/api/?lang=python#post-timeseries-points) を使い、`command_execution_time` というメトリックス名(変更可能)でコマンドの実行時間が送られます。

メトリックスの名前や host, tags はそれぞれ `--metric-name (-m)`, `--host`, `--tag (-t)` で指定できます。
`--tag` は複数回指定可能で、 `key:value` というフォーマットで指定します。

CircleCI で実行した場合、 CircleCI のビルドイン環境変数が tag として勝手に設定されますが、 CircleCI 以外でも使えます。

dd-time を作る上で意識したことは、`透過的にする(元のコードにほとんど影響を与えずに使えるようにする)`ということです。
具体的には以下のような点です。

* 標準入力をそのままコマンドに渡す
* コマンドの標準出力・標準エラー出力をそのまま出力する
* コマンドの exit code をそのまま dd-time の exit code とする
* Datadog への送信に失敗しても dd-time の exit code は 0 とする
  (option で non zero にもできるようにするのもありだが、現状はそうしてない)
* Datadog への送信に失敗した場合のエラーメッセージをファイルに吐き出せる(コマンドの出力と混ざらないようにできる)
  * デフォルトは標準エラー出力だが、 `--output (-o)` と `--apend (-a)` オプションで変更できる
  * `--append` を指定すると追記モードで出力できる
* 適切にシグナルハンドリングする(本当に適切と言えるかは分かりませんが)

以上、簡単ですが dd-time の紹介でした。
