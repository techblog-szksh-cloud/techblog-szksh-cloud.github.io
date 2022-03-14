---
title: "travis ci から circle ci への移行のすすめ"
date: 2018-10-01T07:23:15+09:00
tags:
- circleci
- travisci
authors:
- suzuki-shunsuke
---

travis ci と circle ci の無償SaaS 版を比較しています。

OSS の CI では travis ci がよく使われる印象がありますが、
場合によっては circle CI に移行するとCIの時間が大幅に短くなったりして良いと思います。
ただし、複数バージョンで並列にテストしたい場合、circle ci の無償planだと並列に実行できないため、
travis でやったほうが速いかもしれません。

## Circle CI の良いところ

* 好きな Docker Image が使える
* ローカルでテストが出来る
* Pending 時間が travis ci に比べて短い気がする(主観)
* private repository の CI も出来る

好きな Docker Image が使えるのが大きいですね。
予め CI に必要なツールをインストールした Image を用意しておくことで大幅に高速化出来ますし、
ツールがインストールできなかったりバージョンが変わってしまったりするトラブルも避けられます。
同じImageを使ってローカルでテストできるのでローカルでの検証もしやすいです。

自分の場合 Golang のツールの CI用に Docker Image を用意しています。

https://hub.docker.com/r/suzukishunsuke/go-ci/
