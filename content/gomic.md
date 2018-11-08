---
title: "gomic - Goのモックジェネレータ"
date: 2018-10-30T08:35:16+09:00
draft: false
tags:
- oss
- golang
- gomic
---

自作のOSS [gomic](https://github.com/suzuki-shunsuke/gomic) の紹介をします。

* なぜわざわざこんなものを作ったのか
* 生成されたモックの簡単な使い方

を主に説明したいと思います。

## まとめ

* gomic は Goのinterfaceを実装したモックを生成するCLIツール
* モックを手で書くのが辛すぎた & 既存ツールで満足できなかったため作った
  * 自動生成できるコードは自動生成すべき
* 設定ファイルで管理するため、interfaceの更新に合わせてmockの更新が容易
* 生成されるモックはシンプルなAPIのみ提供するので学習コストが低い

## gomic とは

gomic は Goのinterfaceを実装したモックを生成するCLIツールです。
これによってモックを使ったテストの作成を効率化します。
単調な作業を自動化し、本来注力すべきことに注力できるようにするためのツールです。

Goで書かれています。

https://github.com/suzuki-shunsuke/gomic/releases からバイナリをダウンロードしてインストールできます。

同様のツールは幾つかあります。

* https://github.com/avelino/awesome-go#testing
* https://github.com/golang/mock (以下 gomock)
* https://github.com/gojuno/minimock (以下 minimock)

特に gomock は有名ですね。

## なぜ作ったのか

上述のように既に同様のツールはありますし、 gomock と minimock は試しました。
しかしあまり満足のいくものではなかったため、自分で作ることにしました。

自分が欲しかったのは学習コストの低いシンプルなAPIです。
interfaceのメソッドを実装した関数をモックに渡すことで
簡単にメソッドの実装を切り替えたいのです。

```go
// Getwd メソッドのモック
mock.SetFuncGetwd(func() (string, error) {
	return "/tmp", nil
})

mock.Getwd() // "/tmp", nil
```

これは非常にシンプルで分かりやすく、柔軟性のあるパターンです(minimockはこのパターンもサポートしています)。

gomock や minimock では

```go
mockSample.EXPECT().Method("hoge").Return(1)
```

のように 関数のパラメータと戻り値のペアを渡してモックを実装するパターン(何か名前があるのでしょうか？)をサポートしています。
このパターンを gomic はサポートしていません。
このパターンはごく簡単なサンプルでは有効かもしれませんが、実際には使えないことが多いかなと感じています。

また、gomock はそれ以外にも [gomock.InOrder](https://godoc.org/github.com/golang/mock/gomock#InOrder) や [gomock#Call.After](https://godoc.org/github.com/golang/mock/gomock#Call.After) など、色々便利なAPIを提供していますが、
それらは学習コストを上げてしまう要因になると思います。
gomicはそういったAPIは提供していません。

### 素のGoで良いのでは(gomicいらなくない)?

上述のように関数を渡すだけの実装なら gomic なんて使わなくても素のGoで良いのではないかという意見もありそうですね。

http://haya14busa.com/golang-how-to-write-mock-of-interface-for-testing/

でも似たようなモッキングの方法がライブラリに依存しないでmockを書くパターンとして紹介されています
(似たようなというか、[gomicも v0.4.0 までは構造体のフィールドに代入していました](https://github.com/suzuki-shunsuke/gomic/blob/v0.4.0/examples/os_mock_test.go#L20-L22))。

Goではライブラリに依存しないで標準ライブラリだけで書くのが良いという思想・意見がよく見られます。
そのため、gomicのようなツールを好まない方がいるのは承知しています。

ただ、自分はこのパターンの実装を手で愚直に書くのは辛いし、生産的ではないのでツールによって自動生成すべきだと思っています。

以下は2つのメソッドのみ持つシンプルなインタフェースとそのモックです。

* https://github.com/suzuki-shunsuke/gomic/blob/master/examples/os.go
* https://github.com/suzuki-shunsuke/gomic/blob/master/examples/os_mock.go

とてもシンプルな interface とそのモックですが、それでもモックを実装するのはそこそこ面倒です。
メソッド、interfaceの数に比例してどんどん面倒になります。
golintのようなlinterでエラーにならないようにコードコメントを書くのも地味に大変です。

interfaceを更新すればmockも更新しないといけません。

ツールによって自動化すべきです。

## モックの使い方

生成されたモックの使い方について軽く説明します。
[v0.5.0](https://github.com/suzuki-shunsuke/gomic/releases/tag/v0.5.0) 時点のものなので古くなっているかもしれません。
最新の使い方は

* https://github.com/suzuki-shunsuke/gomic
* https://github.com/suzuki-shunsuke/gomic/tree/master/examples

をご確認ください。

以下のサンプルは [v0.5.0のサンプル](https://github.com/suzuki-shunsuke/gomic/tree/v0.5.0/examples) を元にしています。

まず mock を生成します(以下このモックを生成する関数を"コンストラクタ"と呼びます)。

```go
mock := examples.NewOSMock(nil, nil)
```

第一引数は *testing.T で、通常のテストならテスト関数の引数をそのまま渡せば良いし、そうでなければ nil を渡せば良いと思います。
第二引数は `func(t *testing.T, intfName, methodName string)` 型の関数で、interfaceのメソッドの実装がセットされていない場合に呼び出されます。nil を渡すと代わりに[gomic.DefaultCallbackNotImplemented](https://godoc.org/github.com/suzuki-shunsuke/gomic/gomic#DefaultCallbackNotImplemented) が呼び出されます。

mockは interface を実装しています。

次にinterfaceのメソッドを実装した関数をmockにセットします。

```go
mock.SetFuncGetwd(func() (string, error) {
	return "/tmp", fmt.Errorf("")
})
```

`mock.Getwd` を呼び出すと `SetFuncGetwd` に渡した関数が呼び出されます。

上記のサンプルのように決まった値を返すだけの fake はよくあるので、以下のように簡単に書けるようにしています。

```go
mock.SetReturnGetwd("/tmp", fmt.Errorf(""))
```

モックの `SetFuncXXX` 及び `SetReturnXXX` はモック自身を返すのでメソッドチェーンが出来るようになっています。

```go
mock := examples.NewOSMock(nil, nil).
  SetReturnMkdir(nil).
	SetFuncGetwd(func() (string, error) {
		return "/tmp", fmt.Errorf("")
	})
```

実装がセットされていない状態でモックのメソッドを呼び出すと
コンストラクタの第二引数で渡した関数が呼び出されます。

コンストラクタの第二引数がnilだと [gomic.DefaultCallbackNotImplemented](https://godoc.org/github.com/suzuki-shunsuke/gomic/gomic#DefaultCallbackNotImplemented) が呼びだされます。
gomic.DefaultCallbackNotImplemented は コンストラクタの第一引数が nil だと [log.Fatal](https://golang.org/pkg/log/#Fatal) を、そうでなければ [testing.T#Fatal](https://golang.org/pkg/testing/#T.Fatal) を呼び出し、そこで処理を停止します。

コンストラクタの第二引数で渡した関数で log.Fatal や testing.Fatal によって処理を止めなければ、interfaceのメソッドを実装していない場合、[zero value](https://golang.org/ref/spec#The_zero_value) を返す fake になります。

一番簡単なのは [gomic.DoNothing](https://godoc.org/github.com/suzuki-shunsuke/gomic/gomic#DoNothing) を渡すことです。

```go
s, err := mock.Getwd(nil, gomic.DoNothing)
```

上で説明したことは

https://github.com/suzuki-shunsuke/gomic/blob/v0.5.0/examples/os_mock.go#L27-L67

を見てもらえばわかると思います。
