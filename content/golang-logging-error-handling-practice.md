---
title: "Golangにおけるエラーハンドリングとロギングのプラクティス"
date: 2018-12-25T21:51:41+09:00
draft: false
tags:
- golang
- logging
archives: ["2018/12"]
---

## 2018-12-30 追記

この記事を元にドキュメントを書いてみました。

https://github.com/suzuki-shunsuke/go-error-handling-logging-practice

追記ここまで

---

Golang でエラーハンドリングとロギングをしてきて自分の中で固まりつつあるプラクティスを明文化します。
明文化することで以下のことを目指します。

* 迷いをなくす
* コードの一貫性を保つ
* コーディング規約とすることでレビューの品質を上げる(自動化は出来ないけど)
* コードの品質を上げる(コードがゴチャつかなくなる)
* 適切にエラーをロギングする(必要十分な情報をログとして残す)

またエラーハンドリングとロギングのためのライブラリを自作しているのでそれも紹介します。

https://github.com/suzuki-shunsuke/go-errlog

## ロギングに関する関連記事

この記事を書く前に軽くググってみただけでちゃんと読んでないのですが、
興味のある人は読んでみてください。

* https://logmatic.io/blog/our-guide-to-a-golang-logs-world/
* https://www.loggly.com/blog/think-differently-about-what-to-log-in-go-best-practices-examined/
* https://dave.cheney.net/2015/11/05/lets-talk-about-logging
* https://postd.cc/go-best-practices-2016/#logging-and-instrumentation

## ログレベルは分ける

ログレベルでwarningとかいらないという意見もありますが、自分は必要だと思っています。
自分は以下のログレベルを使い分けます。

* debug: あまり使わない。調査目的で一時的に埋め込むログ。調査が終わったら出力しないようにする。一時的でないものはinfoにする
* info: エラーでないログ。イベント、処理の開始時や終了を記録するのに使うことが多い
* warn: 4xx系のエラー。それが起こっただけではアラートを飛ばさないが、数が通常時より多い場合はバグかUIに問題があってユーザーが間違えやすくなっている可能性があるのでアラートを飛ばす
* error: 5xx系のエラー。アラートを飛ばす(閾値は調整)
* fatal: 処理継続が不可能な致命的なエラー。システムを止める

書いてから思いましたが、これに関しては標準的な使い分けのルールがありそうですね(要調査)。。

## logrus を使ってログを構造化する

前提としてwebシステムやバッチシステムなどを想定しています。CLIツールならば話は変わるでしょう。
JSONフォーマットで出力してfluentdでElasticsearchにフォワードするのが個人的によくあるパターンです。

go-errlogもlogrusの使用を前提としています。

ロギングのライブラリは他にも色々あるので、logrusで満足できない人は以下から探してみるとよいでしょう。

https://github.com/avelino/awesome-go#logging

## エラーログは中央集権的に main に近い所で出力する

エラーログをどこで出力するかですが、原則中央集権的に main に近い所で出力します。
因みに中央集権的という表現は echo の centralized error handling からもじっています。

https://echo.labstack.com/guide/error-handling

error が発生してもすぐログを吐くのではなく、error を関数の戻り値として返し、ロギングする責務を親に委譲します。
Goでは以下のようなイディオムがよく見られますね。

```go
if err != nil {
	return err
}
```

## ロギングに必要な情報を戻り値のerrorに含める

上記のコードで問題なのは、エラーに関する情報が欠損することがあることです。

これに関しては以下の記事が参考になります。

https://deeeet.com/writing/2016/04/25/go-pkg-errors/

エラーに関する情報には2種類あると個人的に考えていて「メッセージ」と「メタ情報」なんて風に脳内で呼んでたりします。

* メッセージ: エラーの原因を示すhuman readable なテキスト([pkg/errors](https://github.com/pkg/errors)はこれに対応している)
  * リストになる
* メタ情報: エラーに関する構造化されたデータ
  * ハッシュになる

例えば foo というユーザー名が既に使われていてユーザーの作成に失敗した場合

* メッセージ
  * username is already used
  * invalid username
  * failed to create a user
* メタ情報
  * username: foo

と言った感じになります。
メッセージにメタ情報を含めて `"foo" is invalid username` といった風にも出来ますが、そうすると検索・集計しづらかったり、メッセージの生成に一手間かかったりするのでメッセージにはメタ情報を含めません。

pkg/errors だとメタ情報には対応できないので自分でライブラリを作りました。

https://github.com/suzuki-shunsuke/go-errlog

こんな感じになります。

```go
return errlog.Wrap(err, logrus.Fields{"username": "foo"}, "failed to create a user")
```

## error に含める情報の責務

上記のように error に情報を含める場合、どこまで含めるかというのが問題になります。
ここでプラクティスとして、
**関数がerrorを返す場合、その関数がもっている情報は全て含める責務があり、
逆に子関数から返ってきたerrorには子関数に渡っている情報が含まれているので呼び出し元で付与する必要はない**というふうにしています。

```go
func createUser(name string, age int) error {
	if err := checkName(name); err != nil {
		return errlog.Wrap(err, logrus.Fields{"age": age}, "failed to create a user")
	}
}
```

つまり上のコードでは子関数に渡っているメタ情報`name`や、`invalid username` のようなメッセージを `errlog.Wrap` に渡す必要はありません。
上記の例だとエラーに関係ない `age` も渡す必要はないのではないかとも考えられますが、原則ログに残すこととします。

ただし、子関数が標準関数やサードパーティのライブラリなど、プロジェクト外部で定義された関数であれば話は別です。
それらがどのようなエラーを返すかは保証がありません。

```go
if f, err := os.Open(filename); err != nil {
	return errlog.Wrap(err, logrus.Fields{"filename": filename}, "failed to open a file", "failed to create a user")
}
```

上記の例だと、`os.Open`に渡したメタ情報 `filename` や os.Openに失敗したことを示す `failed to open a file` といったメッセージも`errlog.Wrap`に渡しています。

`errlog.Wrap` は複数のメッセージを渡せるようになっています。
メッセージの順番は左からイベントが発生した順になるようにします。
上記の例だと「ファイルのオープンに失敗」した結果、「ユーザの作成に失敗」するという順序になります。

## エラーのロギングはシンプルに

go-errlogではシンプルにロギングを記述できます。

```go
logger := errlog.NewLogger(nil)
// err != nil なら logging する
// err がメタ情報を持ってたら logrusで構造化してロギングする
// メッセージも pkg/errors のように一つのテキストに連結してロギング
logger.Fatal(createUser("foo", 10))
```

## その他 go-errlog の機能

メタ情報やメッセージによって条件分岐したり出来るようにヘルパー関数を幾つか提供しています。

* CheckField
* HasField
* HasMsg

詳細は[GoDoc](https://godoc.org/github.com/suzuki-shunsuke/go-errlog)やソースコードを見てください。

## 最後に

色々書いてしまいましたが、一番言いたかったことは

> **関数がerrorを返す場合、その関数がもっている情報は全て含める責務があり、
> 逆に子関数から返ってきたerrorには子関数に渡っている情報が含まれているので呼び出し元で付与する必要はない**というふうにしています。
> 
> ただし、子関数が標準関数やサードパーティのライブラリなど、プロジェクト外部で定義された関数であれば話は別です。

の部分です。この辺は元々自分の中でルールが決まってなくてずっとモヤモヤしてて、
コードを書くたびにぶれてたのですが、「こうすればいけるんじゃないか」と思いつき、その実装を補助するライブラリを開発し、
実践したところ今の所そこそこうまく行っています。
ただまだ日が浅いので少しずつブラッシュアップされていく部分もあると思いますが、
その場合でも「なんとなく」ではなく、可能な限り明文化していくことで、迷いをなくし、コードとログの品質を上げていきたいと思います。
