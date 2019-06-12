---
title: "drone で非rootユーザーで実行されるImageを使えない"
date: 2018-09-30T21:42:16+09:00
draft: false
archives: ["2018/09"]
---

drone で非rootユーザーで実行されるDocker Imageを使おうとするとbuildに失敗します。

```
/bin/sh: 3: cannot create /root/.netrc: Permission denied
```

これについては drone の開発者が回答しています。

* https://discourse.drone.io/t/solved-netrc-permission-denied/171/2
* https://discourse.drone.io/t/solved-netrc-permission-denied/171/4

結論を言うと、
他のイメージを使うか、
rootで実行されるようにイメージを修正する必要がありそうです。
