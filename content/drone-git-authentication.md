---
title: "Drone の build 実行時の認証方法"
date: 2018-09-30T19:44:27+09:00
draft: false
tags:
- drone
---

drone の build における GitHub (GitHub前提で書きますが、GitHub以外でも同じだと思います) の認証の話(どうやって認証しているか)について書いておこうと思います。
drone の build は clone step で対象のリポジトリを GitHub から clone してきています。
この際に何かしらの方法で認証しているはずです。

結論を言うと、

あるリポジトリAのbuildでは、
リポジトリAの **drone連携を有効化したユーザー** Bの access token を **.netrc** に書き込んで認証しています。
よってユーザーBにcloneする権限があるリポジトリはcloneできるし、
ユーザーBにcloneする権限がないリポジトリはcloneできません。
つまり、 **誰が連携を有効化するかが重要** になります(これについては後述します)。
なお、drone連携の有効化はそのリポジトリのowner以上でないと出来ません。

drone上でリポジトリの連携を有効化すると、
リポジトリのHookが作成されます。
リポジトリの settings > Hooks から確認できます。
この Hook の Payload URL を見ると access_token クエリがあると思います。
JWTのようですね。これはリポジトリの連携を有効化したユーザーのtokenです。

このtokenが GitHub から drone への webhook のパラメータとして送られてくるので、
drone 側で認証し、認証したユーザーのGitHub  のaccess token を取得し、
build 時にコンテナの /root/.netrc に書き込むようです。

.netrcに書き込まれているのは試しに個人の private repository で .netrc をcatしてみればわかります。
他人も見えるrepositoryでcatすると悪用されかねないので気をつけましょう。

```
pipeline:
netrc:
image: alpine:3.6
commands:
- cat ~/.netrc
```

```
+ cat ~/.netrc
machine gihub.com
login **************
password x-oauth-basic
```

## cloneステップ以外での .netrcの活用

.netrc のおかげで難しいこと考えずに clone 出来ているわけですが、この .netrc は当然 clone ステップ以外でも使えます。
例えば private repository の ansible role の install です。

roles.yml
 
```yaml
- src: https://github.com/<owner>/<repo>
  name: foo.bar
  scm: git
```

.drone.yml

```yaml
commands:
- ansible-galaxy install -r roles.yml
```

## 誰が連携を有効化するべきか

結論を言うと、ベストな方法は分かりません。

連携を有効化した人が退職してしまったり、organizationから抜けてしまった場合、急にビルドが失敗するリスクがあります。
理想を言えば特定の個人のアカウントで連携するのではなく、連携用のアカウントを用意するのが良いのかもしれませんが、
それはそれで運用が難しいかもしれません。

drone API ないし CLI で有効化は出来るので、CIで連携を自動化することは可能だと思います。

* http://docs.drone.io/cli-repository-add/
* http://docs.drone.io/api-repo-create/

自分のところではまだそこまでやってなく、個人で有効化してしまっているのですが、
自動化したらまた記事にでもしたいと思います。
