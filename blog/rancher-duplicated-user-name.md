---
title: "Rancherでusername が重複してログインできなくなった場合の解消方法"
date: 2019-03-16T21:17:05+09:00
tags:
- rancher
authors:
- suzuki-shunsuke
---

先日起こった Rancher のトラブルの解消方法について紹介したいと思います。
Rancher のバージョンは v2.1.6 です。
admin ユーザーでログインしようとしたところ、エラーが起こりました。
最初パスワードが間違っているのかと思い、パスワードリセットしたものの、解消しませんでした。

https://rancher.com/docs/rancher/v2.x/en/faq/technical/#how-can-i-reset-the-admin-password

エラーメッセージをよく見ると 500 エラーでした。そこで rancher のコンテナのログを見ました。

```
[ERROR] API error response 500 for POST /v3-public/localProviders/local?action=login. Cause: found more than one users with username admin
```

username が `admin` のユーザーが複数人いるからログインに失敗しているようです。
であれば、ユーザーを rename ないし delete すれば解消しそうです。
しかし Admin 権限を持っているのが admin しかいないため、ユーザーを rename したり delete するのが難しいです。

どうすればよいかと思って調べてたところ
rancher のコンテナ内で kubectl コマンドを使うことで Rancher の Custom Resource を操作できそうなことを知りました。

https://qiita.com/yamamoto-febc/items/498b911611dd25351ad7

そこで 2 人いる `admin` の片方を rename することで解消しました。

```
# rancher のコンテナに入る
$ docker exec -ti rancher bash
# CRDの一覧
$ kubectl get crd
# ユーザー一覧
$ kubectl get users.management.cattle.io -o yaml
# rename する user をファイルに書き出す
$ kubectl get users.management.cattle.io/<id> -o yaml > /tmp/user.yaml
# vi がコンテナにないため sed で対応
$ sed -e "s/username: admin/username: admin2/" /tmp/user.yaml | kubectl apply -f -
```
