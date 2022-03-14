---
title: "Renovate の PR に便利なリンクを追加"
date: 2020-12-28T14:32:31+09:00
tags:
- renovate
authors:
- suzuki-shunsuke
---

Renovate による PR をレビューする際、差分がなんなのか分かりづらいときがあります。
例えば data source が github-release の場合、 PR の description に Release Note が含まれており、コードの差分も link があるので便利です。
一方 helm data source の場合、 そういったものがなく差分がなんなのか分からないことがあります。
そういう場合、 [prBodyNotes](https://docs.renovatebot.com/configuration-options/#prbodynotes) を利用して link を追加すると便利です。

例えば、 datadog helm chart の場合

```json
{
  "datasources": ["helm"],
  "packageNames": ["datadog"],
  "prBodyNotes": [
    "[compare](https://github.com/DataDog/helm-charts/compare/datadog-{{currentVersion}}...datadog-{{newVersion}})"
  ]
}
```

とすると、 PR の description にリンクが追加されます。地味ですが便利です。
Release page へのリンクを追加しても便利かもしれませんね。

ex. https://github.com/suzuki-shunsuke/test-renovate-2/pull/28

template で使える変数は https://docs.renovatebot.com/templates/ を参照してください。
helm chart ごとに設定を書かないといけないのが面倒ですが、仕方ないですね。
