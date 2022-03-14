---
title: "The Top 10 Most Common Mistakes I’ve Seen in Go Projects を読んでみて"
date: 2019-07-21T18:13:53+09:00
tags:
- go
archives: ["2019/07"]
authors:
- suzuki-shunsuke
---

[The Top 10 Most Common Mistakes I’ve Seen in Go Projects](https://itnext.io/the-top-10-most-common-mistakes-ive-seen-in-go-projects-4b79d4f6cd65) という記事を読んで面白かったのでメモります。
翻訳ではないです。メモなので、原文を読んでください。

1. Unknown Enum Value: Unknown であることを表す enum の値は 0 にしよう。値がセットされていない場合に Unknown として扱えるから
2. Benchmarking: ベンチマークを取るのは難しい。コンパイラの最適化によってベンチマークの結果が不適切になる場合がある
3. Pointers! Pointers Everywhere!: パフォーマンスの観点から基本的にはポインタを使うべきではない。変数を共有する必要がある場合のみ、ポインタを使う
4. Breaking a for/switch or a for/select: for, switch が入れ子になっている場合、switch の中で break しても for から抜けられない。抜けたければ labeled break を使う
5. Errors Management
6. Slice Initialization
7. Context Management
8. Not Using the -race Option: `go test` コマンドでは `-race` オプションをつけよう
9. Using a Filename as an Input: 引数としてファイル名を渡すのではなく、 io.Reader や io.Writer を渡そう
10. Goroutines and Loop Variables

## Pointers! Pointers Everywhere!

変数はヒープかスタックに割り当てられる。

* スタック: 関数内の変数は、関数が返されると、スタックからポップされる
* ヒープ: 共有変数、グローバル変数

関数で生成した構造体を返すと、スタックで管理され、返された時点でポップされる。
関数内で生成したポインタを返すと、それは Heap で管理される。
スタックで管理すると、関数が返された時点でポップされてしまい、関数の外でポインタが指す値にアクセスできなくなるため。

```go
func getFooValue() foo {
	var result foo
	// Do something
	return result
}
```

```go
func getFooPointer() *foo {
	var result foo
	// Do something
	return &result
}
```

スタックのほうが効率が良い理由

* ガベージコレクタが不要
  * 関数を抜けた時点でスタックからポップされる
  * 未使用の変数を回収する複雑な処理が不要
* スタックの変数は一つの goroutine に属するため、共有のための同期が不要だから

よって基本的にはポインタを使うべきではない。変数を共有する必要がある場合のみ、ポインタを使う。

## Error Management

* エラーは一回だけハンドリングされるべき。エラーはロギングされるか、プロパゲートされるべき(ロギングしつつプロパゲートはだめ)
* pkg/errors を使うと根本的なエラーの型を見て条件分岐できる
  * 自分が作ってる [go-errlog](https://github.com/suzuki-shunsuke/go-errlog) の v0.9.1 だとそれは出来ない。改善すべきか

```go
switch errors.Cause(err).(type) {
default:
	log.WithError(err).Errorf("unable to server HTTP POST request for customer %s", customer.ID)
	return Status{ok: false}
case *db.DBError:
	return retry(customer)
}
```

## Slice Initialization

https://tour.golang.org/moretypes/11

* slice には length と capacity がある
* length は slice が保持する要素の数
* capacity は slice の裏にある配列の要素数を slice の最初の要素から数えたもの

https://golang.org/ref/spec#Making_slices_maps_and_channels

slice の場合

```go
make(T, n) // length, capacity 共に n
make(T, n, m) // length は n, capacity は m
```

https://play.golang.org/p/R1CF1e1K3L6

```go
a := make([]int, 0, 10)
fmt.Println(len(a), cap(a)) // 0, 10
a = append(a, 1)
fmt.Println(len(a), cap(a)) // 1, 10
```

`append` はコストが高いからインデックスを指定したほうが良いというが、
`make` でスライスを生成していれば、`append` してもそこまでコストは高くない。
若干インデックスを指定したほうが効率が良いが、一貫性という観点では `append` を使ったほうがよいかもしれない。

## Goroutines and Loop Variables

```go
ints := []int{1, 2, 3}
for _, i := range ints {
	go func() {
		fmt.Printf("%v\n", i)
	}()
}
```

これだと全ての goroutine で同じ i を共有してしまう。関数の引数として渡すか、for ループ内の変数として定義する。

```go
ints := []int{1, 2, 3}
for _, i := range ints {
	go func(i int) {
		fmt.Printf("%v\n", i)
	}(i)
}
```

```go
ints := []int{1, 2, 3}
for _, i := range ints {
	i := i // 初見だと奇妙に見えるが、正しい。
	go func() {
		fmt.Printf("%v\n", i)
	}()
}
```
