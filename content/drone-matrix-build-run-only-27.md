---
title: "drone の matrix build が27個しか実行されない"
date: 2018-09-30T20:26:11+09:00
draft: false
---

drone 0.8.5 で検証しています。

```yaml
matrix:
  ZOO:
  - 1
  - 2
  - 3
  - 4
  FOO:
  - 1
  - 2
  - 3
  - 4
  - 5
  - 6
  - 7
  - 8
  BAR:
  - 1
  - 2
```

上記の場合、本来 4 * 8 * 2 = 64 個実行されるはずのmatrix builds が27個しか実行されなかったのでソースコードを確認したところ、
27個しか実行されないようにハードコードされていました。

* https://github.com/cncd/pipeline/blob/d4e09fd3021a16408bc3ebdd3500efd28f51e72c/pipeline/frontend/yaml/matrix/matrix.go#L11
* https://github.com/cncd/pipeline/blob/d4e09fd3021a16408bc3ebdd3500efd28f51e72c/pipeline/frontend/yaml/matrix/matrix.go#L93

関係ある部分だけ抽出すると以下のような感じになります。

```go
limitAxis = 25

axisList := []Axis{}
for p := 0; p < perm; p++ {
	axisList = append(axisList, axis)
	if p > limitAxis {
		break
	}
}
```

制限をかけるのは仕方ないですが、
エラーも warning もなく正常終了し、でもよく見ると 27 個しか実行されていないので
ユーザーとしては混乱しますね。
build の結果の画面の上の方に warning があると嬉しいです。
