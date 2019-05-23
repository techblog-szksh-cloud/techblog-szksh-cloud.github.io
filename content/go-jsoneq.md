---
title: go-jsoneq - 2つの値がJSONとして等しいか比較するGoライブラリ
date: 2019-05-23T11:43:18+09:00
draft: false
tags:
- oss
---

https://github.com/suzuki-shunsuke/go-jsoneq

2つの値がJSONとして等しいか比較するGoライブラリを開発したので紹介します。

「2つの値がJSONとして等しい」とは、2つの値をそれぞれJSON文字列に変換したら、2つが表現するデータがおなじになるという意味です。

```go
struct {
	Foo string `json:"foo"`
}{
	Foo: "bar",
}
```

と

```go
map[string]interface{}{"foo": "bar"}
```

を JSON に変換したらともに

```json
{"foo": "bar"}
```

になりますね。

json.Marshaler のテストや、
実際の JSON 文字列から構造体を定義したときにちゃんと定義できているかチェックするのに使えると思います。

jsoneq.Equal でやっていることは単純です。

1. json.Marshal で []byte に変換
2. json.Unmarshal で []byte を map, array と primitive な型からなるオブジェクト(?)に変換
3. reflect.DeepEqual で比較

引数が []byte の場合は 1 は飛ばします。

GoDoc やサンプルを見れば使い方は簡単にわかると思います。

以上、簡単ですが、自作ライブラリの紹介でした。
