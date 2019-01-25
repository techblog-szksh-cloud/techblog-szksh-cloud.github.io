---
title: "Terraform Providerで import を実装する方法"
date: 2019-01-25T22:38:28+09:00
draft: false
tags:
- terraform
- graylog
---

terraform provider graylog で alert condition と stream rule の import を実装しました。

* https://github.com/suzuki-shunsuke/go-graylog/pull/59
* https://github.com/suzuki-shunsuke/go-graylog/pull/60

そこで import を実装する方法を紹介したいと思います。

terraform でリソースをimportするにはリソースがimportをサポートしている必要があります。
[schema.Resource の Importer フィールド](https://godoc.org/github.com/hashicorp/terraform/helper/schema#Resource)ですね。リソースがIDだけでGet出来る場合、[schema.ImportStatePassthrough](https://godoc.org/github.com/hashicorp/terraform/helper/schema#ImportStatePassthrough)を使えば終わりです。
一方、Graylogのalert condition や stream rule はIDだけでなく、stream id も必要になります。
terraform import コマンドは1つの引数しか取らないため、サポートできないのでは？と以前まで思っていました。
そういった場合、次のようにStateFuncを実装すればサポートできます。

https://github.com/suzuki-shunsuke/go-graylog/pull/59/commits/baee1165f49d2bc21b6ea7551ceff6b7daf01543#diff-f41be2a3640efd12ad4e808d77c5c8d5

```
# "/" で区切って stream id と ID を渡す
$ terraform import graylog_alarm_callback.test 5bb1b4b5c9e77bbbbbbbbbbb/5c4acaefc9e77bbbbbbbbbbb
```

区切り文字は何でも良いのでしょうが、公式のprovider が "/" で区切っていたのでそれに従うことにしました。

https://www.terraform.io/docs/providers/google/r/spanner_database.html#import

https://godoc.org/github.com/hashicorp/terraform/helper/schema#ImportStatePassthrough の実装を見てみれば分かりますが、
StateFunc の中では GET API を叩いてリソースを取得したりはしません。
`terraform import` コマンドの標準出力を見ると分かりますが refresh を実行しているのでそこでGETしているようです。
StateFunc は *schema.ResourceData の配列を返しますが、これは1度のGETで複数のリソースを取得するようなAPIをサポートするためのようです。

以上、terraform import の実装方法について紹介しました。
