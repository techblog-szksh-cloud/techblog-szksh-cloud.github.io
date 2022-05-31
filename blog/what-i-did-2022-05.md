---
title: "2022-05 振り返り"
date: 2022-05-28T14:16:55+09:00
authors:
- suzuki-shunsuke
tags:
- job
- oss
---

import LinkCard from '@site/src/components/linkcard';

## 仕事

05-18 がリクルートでの最終出社日でした。

https://twitter.com/szkdash/status/1526875250646204417

https://twitter.com/szkdash/status/1527235538951974912

## Blog

* [aqua supports building tools with Go](https://dev.to/suzukishunsuke/support-building-tools-written-in-go-2l10)
* [Pull Request を再度 review してほしい場合は Re-request review をしましょう](https://techblog.szksh.cloud/github-re-request-review)
* [転職します](https://techblog.szksh.cloud/job-change-2022-06)
* [automerge できなかった Renovate の Pull Request を Issue として管理](https://zenn.dev/shunsuke_suzuki/articles/renovate-issue-action)
* [CLI での構造化ロギングのすすめ](https://zenn.dev/shunsuke_suzuki/articles/cli-structured-logging)
* [tfcmt apply で通知先の取得方法を改善](https://zenn.dev/shunsuke_suzuki/articles/tfcmt-apply-v322)

## OSS 開発

### 新規

特になし

### Update

#### Demo

https://twitter.com/szkdash/status/1531555164800557056

若干情報が古くなっていたので、デモ動画を作り直しました。

<LinkCard url="https://zenn.dev/shunsuke_suzuki/scraps/37c85ae936a651" />

#### aquaproj/aquaproj.github.io

https://github.com/aquaproj/aquaproj.github.io

zenn と違って dev.to, medium で書いた記事は GitHub で管理されていなかったのが嫌だったので、
aquaproj.github.io で Blog を有効化して dev.to, medium の記事をコピーしてきました。
Canonical URL を設定しています。
新たに英語で記事を書く際にはこちらで書いて、 dev.to にクロスポストして Canonical URL を設定することにしました。

関連: https://zenn.dev/shunsuke_suzuki/scraps/43b8f553d08b6f

あと DocSearch による検索がいつの間にか動かなくなっていたのでサポートに問い合わせました。 https://github.com/aquaproj/aquaproj.github.io/issues/76

#### aquaproj/aqua-registry

https://github.com/aquaproj/aqua-registry

v2.11.0 => v2.19.0 (ツール数: 470 => 515)

様々なツールを追加しています。
package type `go` のツールも追加しました。 https://github.com/aquaproj/aqua-registry/pull/3713

#### aquaproj/aqua

https://github.com/aquaproj/aqua

* v1.5.0-0 => v1.9.0
* v1.5.0: package 名のエイリアスをサポート
  * リポジトリ名が変わったり、別の org に transfer されたりしたときのための機能
* v1.5.1
  * 同じツールを複数バージョンインストールする場合(基本そんなことしないけど)のバグを修正
  * Registry ファイルの拡張子が .json の場合、 JSON としてパース
  * リファクタリング
* v1.6.0
  * standard registry の override のサポート: registry.yaml の代わりに registry.json を指定することで若干パフォーマンスが改善する
  * experimental feature という概念の導入
    * execve(2) でコマンド実行をサポート。残念ながら macOS で正常に動作しないケースが見られるので experimental feature としてリリース
  * retry の limit に引っかかった場合にエラーを返すようにした
  * リファクタリング
* v1.6.1
  * log に GOOS と GOARCH を追加。問い合わせ時に便利
  * 大幅なリファクタリング
  * unit test の大幅な追加
* v1.6.2
  * v1.6.1 のバグ修正。 aqua g と aqua list で global configuration を読まなくなっていたのを修正
* v1.6.3
  * aqua g で 1 件もマッチしなかった場合に panic が発生するのを修正
* v1.7.0
  * Go 製のツールをインストール時に go build でビルドするのをサポート
* v1.8.0
  * aqua g で GitHub Tag からバージョンを取得できるようにした
* v1.9.0
  * github_archive, go で commit SHA を version として指定できるようにした

checksum の検証も POC として実装してみました。
しかし checksum のリストのファイルを Git で管理しないといけないのがユーザーの体験を損なうので、どうするのが良いのかよく分からず一旦置いています。

https://github.com/aquaproj/aqua/issues/427

#### tfcmt

https://github.com/suzuki-shunsuke/tfcmt

* v3.2.1 => v3.2.3
* v3.2.2: apply の merge commit に関連する Pull Request を API で取得
* v3.2.3: GitHub Enterprise Support の修正。 Graph QL API の Endpoint を変更できるようにした

#### github-comment

https://github.com/suzuki-shunsuke/github-comment

* v4.1.1 => v4.2.0
* v4.2.0: GitHub Enterprise のサポート

#### renovate-issue-action

https://github.com/suzuki-shunsuke/renovate-issue-action

v0.2.1 => v0.3.1

#### asciinema-trim

https://github.com/suzuki-shunsuke/asciinema-trim

v0.1.0 => v0.1.1

再生速度の変更をサポートしました。

https://twitter.com/szkdash/status/1531563963057852416

## その他

* CLAS でオフィスチェアをレンタルしました
* [英語「なるほど！」ライティング　通じる英文への15ステップ](https://www.amazon.co.jp/gp/product/B00FS9DK3C) を Kindle で読みました
  * https://twitter.com/szkdash/status/1530421071903858689
* [もう一度読む SRE](https://open.spotify.com/show/1PUdFj8hXIZdyFat3nk3Af) を spotify で 1.5 倍速で聞いています
* 運動を頑張っています

### CLAS でオフィスチェアをレンタルしました

以前からオフィスチェアに興味はあったものの、結構高いですしいきなり高いものを買って失敗するのは嫌だったのでレンタルで試すことにしました。
レンタルもはじめてなので一番安い (1,650 円 / 月) のから試すことにしました。

* MS-13 チェア ひじ無し ブラック
* https://clas.style/619

注文してから届くまでに 2 週間以上かかりました。 Amazon とかの翌日配送に慣れていたので、 2 週間以上かかることに驚きましたが、そういうものかと思うことにしました。

一番安いのにしたものの、座り心地は今までのよりだいぶ良いです。
今まで自分は背もたれに寄りかかっている感覚があまりなかったのですが、新しいのだと自然と腰に背もたれが当たって支えられているような感じがします。
と言いつつ、一番安いものなのでもっといいやつも試したいとは思っています。肘掛けが若干ほしいです。

オフィスチェアの他に興味あるものとしては、ベッドも興味あります。
ベッドのレンタルもあるようです。ただベッドの場合は、今使ってるやつをどうすればいいのかよくわからないし、オフィスチェアよりも面倒な気もします。

https://clas.style/furniture/bed/

### 運動

有給消化で時間に余裕もありますし、運動を週 5, 6 くらいでするようにしています。
元々食事には気を使っていてお酒も飲まないし間食もしないのですが、引きこもっていたら気づかぬうちに結構太っていました。
