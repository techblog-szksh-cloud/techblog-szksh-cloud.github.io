---
title: "go-error-handling-logging-practice v0.2"
date: 2019-02-01T22:26:13+09:00
tags:
- golang
authors:
- suzuki-shunsuke
---

以前 Golang のロギング・エラーハンドリングについて書きました。

* https://suzuki-shunsuke.github.io/golang-logging-error-handling-practice/
* https://github.com/suzuki-shunsuke/go-error-handling-logging-practice

それを少し v0.1 から v0.2 に互換性を壊す形でアップデートしようかと思います。
本記事ではその変更点について書きます。

## 変更点

**関数のエラーに情報を付与する責務を関数に割り当てていたものを、呼び出し元に割り当てるようにします。**

具体的には元々

```go
func createUser(name string, age int) error {
	return errlog.Wrap(checkName(name), logrus.Fields{"age": age}, "failed to create a user")
}
```

だったものが

```go
func createUser(name string, age int) error {
	return errlog.Wrap(checkName(name), nil, "user name is invalid")
}
```

になります。

## 変更理由

メタ情報のフィールド名はコンテキストに依存します。
上記の例だとユーザー名というメタ情報のフィールド名は `name` より `user_name` や `admin_name`, `owner_name` としたほうが適切かもしれません。それは関数内部では分からず、呼び出し元でないと分かりません。呼び出し元でないとフィールド名の衝突が避けられないこともあるでしょう。

メッセージに関しても同様のことが言えます。
また、元々 v0.1 ではユーザーが定義した関数と

* 標準関数やサードパーティのライブラリなど、プロジェクト外部で定義された関数
* interface の関数やメソッド

を区別し、前者では関数側でエラーに情報を付与させる一方、後者では呼び出し元で情報を付与させるというふうにしていました。

v0.2 では両者を区別せず、どちらの場合でも呼び出し元に付与させるというふうにすることでよりルールがシンプルになります。
