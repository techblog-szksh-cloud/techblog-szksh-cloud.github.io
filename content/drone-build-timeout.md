---
title: "drone の build の timeout が変更できない"
date: 2018-09-30T20:16:28+09:00
draft: false
tags:
- drone
---

drone 0.8.5 で検証しています。

drone の build の タイムアウトの設定はリポジトリの settings から変更できそうですが、
実は drone の admin しか変更できません。

ブラウザのデベロッパーツールを使うと、この Timeout の設定を変更した際に

```
PATCH /api/repos/:owner/:name
```

にリクエストが飛んでいるので、そこからコードを追いかけると分かります。

* https://github.com/drone/drone/blob/29785b86f6534ded974120de0fcf7c21397a9d0d/router/router.go#L109
* https://github.com/drone/drone/blob/29785b86f6534ded974120de0fcf7c21397a9d0d/server/repo.go#L117
