---
title: "tfnotify を fork した"
date: 2021-01-02T19:42:10+09:00
archives: ["2021/01"]
tags:
- oss
- terraform
---

[mercari/tfnotify](https://github.com/mercari/tfnotify) を Fork して 2 つほど OSS を作りました。

* https://github.com/suzuki-shunsuke/tfnotify - tfnotify と互換性あり
* https://github.com/suzuki-shunsuke/tfcmt - tfnotify と互換性がない

## 開発の経緯

これまで tfnotify を便利に使わせてもらってたのですが、幾つか改善したいと思うところがあり、本家に PR を投げました。
しかし残念ながらこれまでのところ反応がなく、そこまで本家が活発ではないこと、また他にも色々改修したいところがあったことから、自分でフォークしてメンテすることにしました。
最初は互換性を維持しながら [suzuki-shunsuke/tfnotify](https://github.com/suzuki-shunsuke/tfnotify) を開発していました(今もしています)。
しかし、開発を進めるに連れ、自分にとって必要のないプラットフォームなどに関するコードが邪魔であると感じ、それらを消したバージョンを別に開発することにしました。
互換性がなくなることから、名前も変えて tfcmt としました。

https://github.com/suzuki-shunsuke/tfcmt

こういった経緯から、 tfcmt のほうを優先的に開発していますが、 tfcmt で実装した機能を後から suzuki-shunsuke/tfnotify にも実装してたりもします。

## Fork 元のバージョン

[suzuki-shunsuke/tfnotify](https://github.com/suzuki-shunsuke/tfnotify) は [mercari/tfnotify v0.7.0](https://github.com/mercari/tfnotify/releases/tag/v0.7.0) [fb178d8](https://github.com/mercari/tfnotify/commit/fb178d8a5a51f88a51b7fda93ed5443ff56dfc8f) をフォークしました。
一方 tfcmt は [suzuki-shunsuke/tfnotify v1.3.3](https://github.com/suzuki-shunsuke/tfnotify/releases/tag/v1.3.3) をフォークしました。

## mercari/tfnotify との違い

本家との違いは Release Note とドキュメントを参照してください。

* suzuki-shunsuke/tfnotify
  * https://github.com/suzuki-shunsuke/tfnotify/releases
  * https://github.com/suzuki-shunsuke/tfnotify/blob/master/COMPARED_WITH_TFNOTIFY.md
* suzuki-shunsuke/tfcmt
  * https://github.com/suzuki-shunsuke/tfcmt/releases
  * https://github.com/suzuki-shunsuke/tfcmt/blob/master/COMPARED_WITH_TFNOTIFY.md
