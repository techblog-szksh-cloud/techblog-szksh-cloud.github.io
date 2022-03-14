---
title: "drone の step を実行するか否かをタグ名で判定する方法"
date: 2018-09-30T21:30:06+09:00
tags:
- drone
authors:
- suzuki-shunsuke
---

drone 0.8.5 で検証しています。

tag 名による判定方法はドキュメントには書いてないので書いておきます。

```
when:
  ref: refs/tags/foo-*  # タグ名が foo-* ならステップを実行
```

グロブ `*` には `/` は含まれないことには注意してください。

上記の例だと、 tag `foo/bar/0.1.0` はマッチしません。
これは Go の [filepath.Match](https://golang.org/pkg/path/filepath/#Match) を使っているからです。

* https://github.com/cncd/pipeline/blob/f8c48fc9fb9fd113c6e7dd941d63bb9f86a623cb/pipeline/frontend/yaml/constraint.go#L70
* https://github.com/cncd/pipeline/blob/f8c48fc9fb9fd113c6e7dd941d63bb9f86a623cb/pipeline/frontend/yaml/constraint.go#L80
