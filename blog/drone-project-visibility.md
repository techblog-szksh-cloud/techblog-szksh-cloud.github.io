---
title: "drone の project visibility とは"
date: 2018-09-30T20:32:20+09:00
draft: false
tags:
- drone
archives: ["2018/09"]
---

恐らく公式ドキュメントに説明がない気がするので書いておきます。
と言っても、以下のissueに全部書いてありますが。

https://github.com/drone/drone/issues/2042

droneの web ui からリポジトリごとに設定できます。
そのリポジトリが誰に見えるかの設定です。

* public: ログインしていなくても誰でも見れる(publicリポジトリのデフォルト)
* private: リポジトリにアクセスできる人しか見れない(privateリポジトリのデフォルト)
* internal: ログインしていれば誰でも見れる
