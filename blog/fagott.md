---
title: "Flute - Golang HTTP client testing framework"
date: 2019-07-07T08:20:00+09:00
tags:
- oss
- golang
- flute
authors:
- suzuki-shunsuke
---

## 2019-07-17 追記

プロジェクト名が変わりました

https://github.com/suzuki-shunsuke/flute/issues/20

---

Go の HTTP client のテストフレームワークを作ったので紹介します。

https://github.com/suzuki-shunsuke/flute

執筆時点のバージョンは v0.6.0 です。

* リクエストパラメータのテスト
* HTTP サーバのモッキング

を目的としています。

比較的実践的なサンプルとして、ユーザーを作成する簡単な API client とそのテストを書いたので参考にしてください。

* https://github.com/suzuki-shunsuke/flute/blob/master/examples/create_user.go
* https://github.com/suzuki-shunsuke/flute/blob/master/examples/create_user_test.go#L17-L53

元々自分はこの目的のために [h2non/gock](https://github.com/h2non/gock) を使っていました。
ただ、 gock だとリクエストがマッチしなかったときに、なぜマッチしないのかがわからず、調査に困るという問題がありました。

そこで flute では request に対し、matcher と tester という概念を導入し、
matcher でマッチしたリクエストを tester でテストするというふうにしました。
テストでは内部で [stretchr/testify](https://github.com/stretchr/testify) の assert を使っており、テストに失敗したときになぜ失敗したのかが分かりやすく出力されるようになっています。

例えば以下の例は、リクエストの Authorization header にトークンがセットされていなかった場合のエラーメッセージです。

```console
=== RUN   TestClient_CreateUser
--- FAIL: TestClient_CreateUser (0.00s)
    tester.go:168:
                Error Trace:    tester.go:168
                                                        tester.go:32
                                                        transport.go:25
                                                        client.go:250
                                                        client.go:174
                                                        client.go:641
                                                        client.go:509
                                                        create_user.go:45
                                                        create_user_test.go:56
                Error:          Not equal:
                                expected: []string{"token XXXXX"}
                                actual  : []string{"token "}

                                Diff:
                                --- Expected
                                +++ Actual
                                @@ -1,3 +1,3 @@
                                 ([]string) (len=1) {
                                - (string) (len=11) "token XXXXX"
                                + (string) (len=6) "token "
                                 }
                Test:           TestClient_CreateUser
                Messages:       the request header "Authorization" should match
                                service: http://example.com
                                request name: create a user
```

また、当たり前かもしれませんが、モックとしてレスポンスも返します。

マッチングやテストで使える項目としては

* リクエストパス (ex. "/users")
* method (ex. "GET", "POST")
* クエリパラメータ(パラメータの有無、値)
* ヘッダー(ヘッダーの有無、値)
* リクエストボディ
  * 文字列完全一致
  * JSONとしての等価性
* ユーザー定義のカスタム関数

などがあります。

詳細は コード中にコメントを入れているので [godoc](https://godoc.org/github.com/suzuki-shunsuke/flute/flute) を読んでください。

技術的には [*http.Client](https://golang.org/pkg/net/http/#Client) の Transport に *flute.Transport を設定することで HTTP サーバのモッキングをしています。

API のデザイン面で考慮したこととしては、
グローバル変数である http.DefaultClient の変更をライブラリ側でやらないことです。
あくまで http.RoundTripper の実装を提供するだけで、それを http.DefaultClient に設定する場合、それのコントロールはユーザーに任せています。

* ライブラリでグローバル変数の変更を隠蔽し、ユーザーが無意識のうちに変更してたりするのは良くない
  * gock では http.DefaultClient を変更しているが、それを理解しないまま使っているユーザーもいるはず
  * グローバル変数の変更には副作用もあるので、ユーザーが理解した上で明示的に行うべきである
  * 明示的に `http.DefaultClient = client` のようにユーザーに書かせれば、理解しないまま使うことはないはず
* ライブラリの外からも変更できるグローバル変数をライブラリで完全に管理するのは不可能なので、ユーザーに任せる

以上、簡単ですが自作の OSS [flute](https://github.com/suzuki-shunsuke/flute) の紹介でした。
