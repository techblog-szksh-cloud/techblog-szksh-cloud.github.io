---
title: "Renovate と Dependabot の比較"
date: 2020-12-05T12:37:17+09:00
tags:
- dependabot
- renovate
authors:
- suzuki-shunsuke
---

普段 Renovate を主に使っている自分が、 Dependabot と Renovate の違いについて調べてみました。
普段 Renovate を主に使っているので、 Renovate 寄りの内容になっています。
気分を害する人がいましたら申し訳ありません。
Dependabot の理解が浅いので間違ってたら指摘してもらえると助かります。
2020-12-01 時点の情報です。

## 設定項目の数

* https://docs.github.com/en/free-pro-team@latest/github/administering-a-repository/configuration-options-for-dependency-updates#directory
* https://docs.renovatebot.com/configuration-options/

まずは設定のドキュメントを見比べると、 Renovate のほうが設定項目が多いです。
Renovate はよく言うと設定項目が多く、柔軟な設定ができるといえる一方、すべての設定を理解し使いこなすのは難しいです。
決して日本語の情報も多くないので、色々試行錯誤したりすることもあります。
Dependabot の場合、設定がそんなに多くなく割と分かりやすい印象があります。

## scheduling

* https://docs.github.com/en/free-pro-team@latest/github/administering-a-repository/configuration-options-for-dependency-updates#scheduleinterval
* https://docs.renovatebot.com/configuration-options/#prhourlylimit
* https://docs.renovatebot.com/configuration-options/#schedule

Dependabot は schedule の設定が必須です。
Renovate でも schedule の設定は出来ます。

## Dependabot は 1 個 1 個設定しないといけない？

Renovate は renovate.json さえ作れば中身がほぼ空でも勝手に update されます。
逆に対象を絞りたかったら明示的に指定する必要があります。

一方で Dependabot は対象を 1 つ 1 つ指定しないといけないようですね。

もちろん、これは必ずしも悪いことではないですし、良い面もあります。
設定が明示的に書かれていたほうが挙動を理解しやすいですしね。

ただし、数が多いと大変ですし、サービスを追加するたびに設定を追加しないといけなさそうです。

## Renovate は .circleci/config.yml などの update もサポート

* https://docs.renovatebot.com/modules/manager/
* https://docs.github.com/en/free-pro-team@latest/github/administering-a-repository/configuration-options-for-dependency-updates#package-ecosystem

Renovate は .circleci/config.yml や .drone.yml の Docker image のバージョンの update もサポートしています。
Dependabot はサポートしていないようですね。

## Renovate は正規表現による update をサポート

https://docs.renovatebot.com/modules/manager/regex/

GitHub Releases からバイナリをダウンロードしてきているような場合でも、
Renovate では Regex Manager を使えば update 出来ます。
CI で使っているツールを GitHub Releases からダウンロードしてきているケースが多いので重宝しています。

## Renovate は Grouping をサポート

Renovate は複数のソフトウェアのアップデートを同じ PR でまとめて update できます。

https://docs.renovatebot.com/configuration-options/#group

## Renovate で PR をまとめられたくない場合は additionalBranchPrefix などの設定が必要

https://docs.renovatebot.com/configuration-options/#additionalbranchprefix

Renovate だと同じパッケージを複数のサービスで使っている場合、何も設定しないと 1 つの PR に更新がまとめられてしまいます。
additionalBranchPrefix を設定することで回避ができますが、この解決策を見つけるまでに少々苦労しました。
Renovate の難しいところですね。

## Renovate は設定をライブラリのように共有できる

https://docs.renovatebot.com/config-presets/

Renovate は汎用的な設定を OSS のように公開し再利用することが出来ます。
仕事だと特に使ってないですが、
個人の Go の Project なんかは同じものを使っていて、便利です。

* https://github.com/suzuki-shunsuke/renovate-config/blob/master/golang.json
* https://github.com/suzuki-shunsuke/github-comment/blob/master/renovate.json
