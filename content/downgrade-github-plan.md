---
title: "GithubをFree Planにダウングレードした"
date: 2019-01-20T12:27:26+09:00
draft: true
tags:
- github
---

GitHub のプラン体系が変わり、無料プランでも無制限でprivate repositoryが作れるようになりました。

https://github.blog/2019-01-07-new-year-new-github/

そこで無料プランにダウングレードすることにしました。

* https://help.github.com/articles/downgrading-your-github-billing-plan/
* https://blog.jnito.com/entry/2019/01/09/081913

無料プランではwikiはpublic repositoryでしか使えないので、
private repository の wiki を 移行することにしました。

private なソースコード(サービス)のためのwikiではなく、
個人的なメモが書いてあるだけだったので移行することに特に問題はありませんでした。

## 全 private repository の wiki を clone

そこでまずはそういった wiki を clone して一つのリポジトリにまとめることにしました。

https://github.com/suzuki-shunsuke/foo の wiki は
https://github.com/suzuki-shunsuke/foo.wiki で clone できます。

次のようなコマンドを実行し、private repositoryのwikiを全部cloneしました。

https://developer.github.com/v3/repos/#list-your-repositories

```sh
curl "https://api.github.com/user/repos?access_token=$GITHUB_TOKEN&visibility=private" | jq -r '.[].html_url' | xargs -I{} -n 1 git clone {}.wiki
```

wikiが存在しないものに関しては clone に失敗します。
API で wiki のリストが取得できると良かったんですが、
wikiに関するAPIはなさそうです。

また `/user/repos` API のレスポンスの `has_wiki` はwikiが存在しなくても、wikiが無効化されてなければ true なようです。

## wiki を notable に移植

clone した wiki を [notable](https://github.com/fabiospampinato/notable) に移植します。

notable は [moon gift で最近紹介されていて良さそうだった](https://www.moongift.jp/2019/01/notable-%E6%B7%BB%E4%BB%98%E3%83%95%E3%82%A1%E3%82%A4%E3%83%AB%E3%82%82%E4%BD%BF%E3%81%88%E3%82%8Bmarkdown%E8%A8%98%E6%B3%95%E3%81%AE%E3%83%A1%E3%83%A2/)ので使ってみます。

Hugo に移植しても良かったのですが notable が気になったので notable にしました。
notable を使ってみてダメそうだったら Hugo も検討します。

Hugo に比べてnotableが良いところは

* シンタクスハイライト
* tagによる絞り込み
* 検索

がデフォルトで(特に手を加えたりしなくても)いい感じに使えることです。

notable の data directory を private repository で管理します(Dropbox などのクラウドストレージで管理しても良いと思います)。

専用の private repository を1つ作成し、data directory を作成し、notable の設定で作成したdata directory をnotable の data directory にします。

notable の data directory にはバイナリではなく、plain text として wiki が作られるようなので移植も header の部分を notable に合わせて data directory に放り込むだけで良いので簡単でした。

header はこんな感じです。

```
---
title: Ansible action plugin について
tags: [ansible]
---
```

意外と移行対象のwikiが少なかったので1, 2時間で終わりました。
終わったあとプランを無料プランに変更して作業は終了しました。
