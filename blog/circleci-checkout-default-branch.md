---
title: "CircleCI の checkout の注意点"
date: 2020-04-24T16:53:01+09:00
tags:
- circleci
authors:
- suzuki-shunsuke
---

CircleCI の組み込みの command `checkout` の注意点について書きます。

なお、ここに書かれている内容は 2020/04/24 時点のものであり、予告なしに `checkout` の挙動が変わる可能性があります。

また、今回は話を簡略化するため、 `checkout` 実行時点で `.git` がない(つまりキャッシュしていない)ものとします。

## 最初に結論

先に結論を書くと

* CircleCI ではローカルのデフォルトブランチを参照しないほうが良い($CIRCLE_BRANCH がデフォルトブランチである場合は除く)
  * 履歴が origin と異なり、 $CIRCLE_BRANCH と同様になっているため
* 代わりに origin のデフォルトブランチを参照したほうが良い
* `git branch -f <デフォルトブランチ> origin/<デフォルトブランチ>` を実行してデフォルトブランチの履歴を修正するのもあり

## checkout がなにをやっているか

`checkout` でなにをやっているかは実際に使ってみて CircleCI の job の詳細画面(?) から確認できます。

サンプル: https://app.circleci.com/pipelines/github/suzuki-shunsuke/test-circleci/73/workflows/5611059c-d6b1-4a34-91b5-45d6f149d408/jobs/96

ここでは `checkout` の全てについては触れません。一部抜粋します。

```sh
elif [ -n "$CIRCLE_BRANCH" ]
then
  git reset --hard "$CIRCLE_SHA1"
  git checkout -q -B "$CIRCLE_BRANCH"
fi
```

`git reset --hard` などをしています。

## なぜこんなことをしているのか？

なんでこんなことをしているのでしょうか？単に `git checkout $CIRCLE_BRANCH` とかじゃだめなんでしょうか？

本当のところは CircleCI の中の人に聞かないとわかりませんが、自分なりに考えてみました。

昔実行した job を rerun することを思い浮かべてみましょう。
rerun するタイミングではすでに remote branch が削除されているかもしれません。そうなれば単に `git checkout` では失敗します。
また、branch があったとしても $CIRCLE_SHA1 がその branch の HEAD とも限りません。
force push で履歴が変更され、 $CIRCLE_SHA1 が CIRCLE_BRANCH の履歴上にないかもしれません。

そういったケースを考慮し、このような実装になっているのだと思います。

## 注意点

しかし、 `git reset --hard` していることにより、一つ注意が必要です。
`git reset --hard` は branch を $CIRCLE_BRANCH に切り替える前に実行しているため、
実行しているブランチ(基本的にデフォルトブランチ)の履歴が変更されています。

## ローカルで再現してみる

CircleCI の rerun with SSH でも確認できますが、
ローカルの適当なリポジトリで同様のコマンドを叩いてみることで簡単に再現できます。

```
$ mkdir sample
$ cd sample
$ git init
$ git commit --allow-empty -m "master first commit"
$ export CIRCLE_BRANCH=feature/hello
$ git checkout -b $CIRCLE_BRANCH
$ git commit --allow-empty -m "$CIRCLE_BRANCH first commit"
$ git log
$ git checkout master  # clone 直後の状態
$ export CIRCLE_SHA1=$(git rev-parse $CIRCLE_BRANCH)

# ここから CircleCI 同様のコマンドを叩いてみる
$ git reset --hard "$CIRCLE_SHA1"
$ git checkout -q -B "$CIRCLE_BRANCH"
```

ここで git log してみると master branch の履歴が $CIRCLE_BRANCH と同様になっているのが分かると思います。

## 何が困るのか

デフォルトブランチ を参照しなければ特に困ることはないでしょう。
一方でデフォルトブランチとの差分を検知して変更があったものだけビルドするとかそういうことをやっている場合には注意が必要です。

```
$ git diff --name-only master $CIRCLE_BRANCH
```

こうすると差分がないことになってしまいます。

## 回避方法

master の代わりに origin/master を参照すれば良いでしょう。

```
$ git diff --name-only origin/master $CIRCLE_BRANCH
```

ただ、うっかりローカルのデフォルトブランチを参照してしまうことは十分考えられる上に別にエラーは起こらないので間違いに気づきにくいです。

そこで checkout 直後にローカルのデフォルトブランチの履歴を origin と強制的に同じにしてしまうというテクニック(?)が考えられます。

```sh
DEFAULT_BRANCH=master
if [ "${CIRCLE_BRANCH:-}" != "$DEFAULT_BRANCH" ]; then
  git branch -f "$DEFAULT_BRANCH" "origin/$DEFAULT_BRANCH"
fi
```

こうすれば間違えてローカルのデフォルトブランチを参照してしまっても安心です。
とはいえ、コードを部分的に移植したりする際にも危険(間違いに気づきにくい)なので、 origin を参照することを推奨します。
