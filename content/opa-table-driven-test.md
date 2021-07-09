---
title: "OPA で Table Driven Tests っぽいことをしてみる"
date: 2021-07-09T19:38:55+09:00
archives: ["2021/07"]
tags:
- opa
- conftest
- rego
---

OPA で Table Driven Tests っぽく Policy を Test する方法について考えたので紹介します。

## 背景

先日 [Open Policy Agent Rego Knowledge Sharing Meetup](https://mercari.connpass.com/event/211073/) で発表する機会を頂きました。
発表の資料は[こちら](https://gist.github.com/suzuki-shunsuke/9372337aa62a6f8394bb136582ec068e)。
普段他社の事例を聞いたり OPA について話たりする機会がないので、非常に貴重な時間になりました。

その中で [deeeet](https://twitter.com/deeeet) さんが [Table Driven Tests](https://github.com/golang/go/wiki/TableDrivenTests) っぽくテストしたいというようなことをおっしゃっていました。

だいたいこの辺: https://youtu.be/0YpJhrz6L0A?t=2990

その話を受けて改めて自分で考えてみたところ、できなくはないんじゃないかなという気がしたのでちょっとやってみることにしました。

## サンプル

せっかくなので簡単なサンプルを GitHub に用意しました。

https://github.com/suzuki-shunsuke/example-opa-table-driven-tests

今回は aws_cloud_watch_log_group の retention_in_days が設定されていることをチェックする Rule の Test をします。

* Rule: https://github.com/suzuki-shunsuke/example-opa-table-driven-tests/blob/main/policy/cloudwatch_log_retention_in_days.rego
* Policy Test: https://github.com/suzuki-shunsuke/example-opa-table-driven-tests/blob/main/policy/cloudwatch_log_retention_in_days_test.rego

テストケースを `seeds` という list で定義し、どれか一つでも false だったら fail するようにしています。
テストケースの中身は

* msg: テストケースを示すメッセージ。テストが失敗したときの trace に含める
* resource: rule の input
* exp: rule の評価結果の期待値

になっています。

test の中身は別の rule を否定しているだけになっていますね。

```rego
test_deny_aws_cloudwatch_log_grop_retention_in_days {
	not any_deny_aws_cloudwatch_log_grop_retention_in_days
}
```

この書き方は [Universal Quantification (FOR ALL)](https://www.openpolicyagent.org/docs/latest/policy-language/#universal-quantification-for-all) で説明されています。

Set の比較は `!=`, `==` で大丈夫です。 https://www.openpolicyagent.org/docs/latest/policy-language/#sets

```rego
	result != seed.exp
```

test に失敗した場合に、どのテストケースでなぜ失敗したのかわかりやすいように必要な情報を trace で出力するようにしています。

```rego
	trace(sprintf("FAIL %s (%d): %s, wanted %v, got %v", ["test_deny_aws_cloudwatch_log_grop_retention_in_days", i, seed.msg, seed.exp, result]))
```

Conftest の場合、 `--trace` をつけると出力されます。 `Note` で grep するとわかりやすいです。

```console
$ conftest verify --trace | grep Note
TRAC   | | | | Note "FAIL test_deny_aws_cloudwatch_log_grop_retention_in_days (1): retention_in_days should be greater than 0, wanted {\"aws_cloudwatch_log_group.main: retention_in_days should be set and greater than 0\"}, got set()"
```

以上、簡単ですが Rego で Table Driven Tests っぽく test を書く方法を紹介しました。
