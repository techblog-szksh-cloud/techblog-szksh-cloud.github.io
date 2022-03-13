---
title: "Terraform の State Locking の概要"
date: 2020-01-10T16:18:05+09:00
archives: ["2020/01"]
tags:
- terraform
---

Terraform の [State Locking](https://www.terraform.io/docs/state/locking.html) という機能の概要について説明します。
ただし、自分もちゃんと理解しているわけではないので、推測も混じります。
基本的には公式ドキュメントに書いてある内容なのでそちらをご参照ください。

## State Locking とは

`terraform plan` などのコマンドは State を変更する場合があります。
その処理は atomic ではないため、同時に複数のコマンドが State を書き換えようとすると不整合が生じる可能性があります。

---

例えば S3 backend の state を state rm で更新する場合を考えます。
これはコマンド内部で

1. 現在の State を取得する (READ)
2. 修正した State を S3 に push する (WRITE)

という処理を行っているはずであり、複数のコマンドを実行した場合、READ と WRITE の間に他のコマンドによって WRITE されると、その WRITE による変更が消えてしまいます。

---

そこで State Locking を使うと各コマンドで State を変更する前に lock を取り、WRITE 後に lock を解除します。

## コマンドラインオプション

plan, apply, refresh, state rm, state mv, state push には次のようなオプションがあります。

```
-lock=true          Lock the state file when locking is supported.
-lock-timeout=0s    Duration to retry a state lock.
```

`-lock` はデフォルトで true なので State Locking のことを知らなくても実は State Locking 使ってたということもありえますが、 Backend type によっては State Locking のための設定をしていないと State Locking が無効になっている可能性があります。

例えば S3 backend で State Locking をするには DynamoDB が必要であり、 DynamoDB の設定 `dynamodb_table` が設定されていないと State Locking は無効になります。

また、`-lock=false` で無効化できますが、公式的に非推奨になります。

`-lock-timeout` は lock の取得に失敗した場合に何秒後にリトライするかの設定になります。

## force-unlock

lock の解放に失敗した場合のために、 [force-unlock](https://www.terraform.io/docs/commands/force-unlock.html) というコマンドがあります。
何らかのトラブルで lock が解放されない場合に使います。

```
$ terraform force-unlock LOCK_ID
```

例えば plan を実行中にキャンセルすると lock が解放されないことがあるようです。

lock が解放されていない状態で plan などを実行すると lock の取得に失敗し、次のようなエラーが起こります。

```
Acquiring state lock. This may take a few moments...
Error: Error locking state: Error acquiring the state lock: ConditionalCheckFailedException: The conditional request failed
	status code: 400, request id: xxx
Lock Info:
  ID:        xxx
  Path:      terraform.tfstate
  Operation: OperationTypePlan
  Who:       xxx
  Version:   0.12.13
  Created:   2020-01-09 09:30:37.41120929 +0000 UTC
  Info:      
Terraform acquires a state lock to protect the state from being written
by multiple users at the same time. Please resolve the issue above and try
again. For most commands, you can disable locking with the "-lock=false"
flag, but this is not recommended.
```

ここで出力される ID を force-unlock の引数として指定します。

```
$ terraform force-unlock xxx
Do you really want to force-unlock?
  Terraform will remove the lock on the remote state.
  This will allow local Terraform commands to modify this state, even though it
  may be still be in use. Only 'yes' will be accepted to confirm.
  Enter a value: yes
Terraform state has been successfully unlocked!
The state has been unlocked, and Terraform commands should now be able to
obtain a new lock on the remote state.
```

## S3 backend

State Locking をサポートしているかは Backend type によりますが、 S3 の場合、 DynamoDB を使えばできます。

https://www.terraform.io/docs/backends/types/s3.html#configuration-variables

backend の設定で `dynamodb_table` を設定する必要があります。

https://www.terraform.io/docs/backends/types/s3.html#dynamodb_table

> dynamodb_table - (Optional) The name of a DynamoDB table to use for state locking and consistency. The table must have a primary key named LockID. If not present, locking will be disabled.

```hcl
data "terraform_remote_state" "network" {
  backend = "s3"
  config = {
    bucket = "terraform-state-prod"
    key    = "network/terraform.tfstate"
    region = "us-east-1"

    # state locking の設定
    dynamodb_table = "???"
  }
}
```

IAMの権限としては https://www.terraform.io/docs/backends/types/s3.html#dynamodb-table-permissions が必要です。

DynamoDB のテーブルには `LockID` という Primary Key が必要です。 型は `文字列` です。

そして State Locking を有効にした状態で plan などを実行すると
DynamoDB のテーブルにレコードが State ごとに作られるようです。

## State Locking をすれば安全、というわけではない

State Locking 自体は安全性に寄与する仕組みではありますが、 State Locking さえすれば安全かというとそうではないと思います。

複数人が同時に plan や apply などを実行する環境では、別のロック機構も必要だと思います。

詳細はまた別途書こうと思いますが、CI/CD で plan, apply などを実行する場合、 apply 実行中はそれが終わるまで他の plan や apply の実行を wait するような仕組みがないと危険です。
