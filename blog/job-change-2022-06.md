---
title: "転職します"
date: 2022-05-19T19:22:40+09:00
authors:
- suzuki-shunsuke
tags:
- job
- oss
---

転職することになったのでその経緯とかを書こうかなと思います。

## 現職ではなにをやっていたのか

現職では Recruit でスタディサプリ及び Quipper Product (Quipper School, Quipper Video) の SRE をやっていました。

https://brand.studysapuri.jp/career/position/sre

2019-10-01 から Quipper Japan Branch の SRE team に Join し、
Quipper Japan Branch が 2021-10-01 に Recruit に統合されてからは Recruit の SRE をやっていました。
統合されてからも携わっているプロダクトや業務内容は特に変わってないので、 2 年 9 ヶ月ほど在籍していたことになります。

https://github.com/suzuki-shunsuke/resume に職務経歴書を置いているのでそちらも参照してください。
ちなみにこのリポジトリは今回の転職の際に作ったのですが、このリポジトリが更新されているのに気づいて自分の転職をいち早く察した方もいたようでした。

SRE として様々なことを経験しましたが、特に自分は Terraform の CI/CD Pipeline の改善に注力してきました。
そしてその過程で様々な OSS を開発してきました。
詳細はブログや職務経歴書に書いてあるので割愛します。

コロナの流行に伴い途中から今に至るまでフルリモートになり、フルリモートだった期間のほうが長いです。
フルリモートになってからはオフィスにはワクチンの職域接種を除き 1 回しか行ってないですし、
同じチームでも自分の後に入社した方とは直接会ったことはないです。
ですが、 Slack や Google Meet などでコミュニケーションを取っていたので自分としては特に不便はありませんでした。

### スタサプ SRE のすすめ

IT の力で教育に変革を起こし、学びたい人がより自由に学べる世界を目指すスタディサプリ及び Quipper Product に関われて嬉しく思っています。
転職する自分が言うのもなんですが、スタサプの SRE チームは本当に恵まれた環境です。転職を考えている人は是非候補に入れてみてください。

スタサプ SRE の良いところ:

* 同僚(SRE 以外も含む)が優秀
  * ブログも是非読んでください: https://blog.studysapuri.jp/
* 現状に満足することなく、日々改善に取り組んでいる
  * 技術的な部分だでなく、 MTG などのあり方なども日々見直している
  * 振り返りをし、課題と改善案を考え実行するというサイクルを日々回している
* 自己完結なプロダクトチームのためのプラットフォームの開発を行っている
  * SRE がプロダクトチームに依頼を受けてインフラを構築するのではない
* 裁量が大きく、自分で課題を見つけて改善することが出来る
  * なぜそれが必要なのか Issue を書くなど、説明責任は伴うが、ちゃんと説明できれば No とはあまり言われない
  * 自走出来ない人には向きません
* 情報が比較的オープン
  * Slack の Private channel や DM でのコミュニケーションがほぼない
  * GitHub リポジトリもスタサプ関連のものならほぼ全部見れる
  * GitHub を検索すればだいたい情報が見つかる
* ドキュメントを書く文化もある
* Postomortem や Design Doc, Production Readiness Check, SLI/SLO といった SRE の基本的なプラクティスが既に定着している
* サービスが安定している
  * サービスの性質上・ SNS でバズって急にスパイクするようなことがほぼない
  * 基本的には k8s の Cluster Autoscaler や Horizontal Pod Autoscaler で対応できる(長期的なサービス拡大のために他にもやっていることはあります)
  * 障害は少なく、深夜や休日に稼働しないといけないことも少ないので、 QOL を損なわない

https://brand.studysapuri.jp/career/position/sre にもいいことが書いてあるので、読んでみてください。

あと、 Security に特化したポジションもあるので、そちらも興味があれば是非。

https://brand.studysapuri.jp/career/position/product-security-engineer

## 転職への流れ

転職のきっかけは、 [@deeeet](https://twitter.com/deeeet) さんから Twitter DM で声をかけていただいたことでした。
deeeet さんとは過去に 2 回ほど面識があり、最初は「[突撃 Terraform](https://twitter.com/deeeet/status/1192410426413182977)」、2 回目は [Open Policy Agent Rego Knowledge Sharing Meetup](https://mercari.connpass.com/event/211073/) というオンライン LT 会でした。
ただ、面識があるとはいえ deeeet さんが自分のことを認識しているとは思っていなかったので驚きました。
ここ何年か OSS の開発や blog の執筆などを精力的に行ってきたのが功を奏したのかもしれません。

DM で声をかけていただいてから直ぐにカジュアル面談をして頂き、その後直ぐ採用ページから応募しました。
職務経歴書の言語の指定は特にありませんでしたが、採用ページに日本語の JD がないことから、英語で書きました。
markdown で書いて [md-to-pdf](https://github.com/simonhaenisch/md-to-pdf) で PDF に変換しました。
markdown で職務経歴書を書いたのははじめてですが、自分にとっては Word などと比べてずっと書きやすかったです。

https://github.com/suzuki-shunsuke/resume

自分は今回のも含めて過去に 3 回転職をしていますが、
エージェントを介さずに直接応募したのははじめてでした。
過去 2 回の転職活動は色々な会社の募集要項に目を通して複数社の面接を受けて日程を調整して面接を受けに行ってと、なかなか精神的にも肉体的にも大変でした。
一方、今回は 1 社しか受けなかったこと、またこのご時世なので面接も全てリモートだったこともありだいぶ負担は少なかったです。

## どこに転職するのか

2022-07-01 から、 Mercari の [Platform Group](https://apply.workable.com/mercari/j/111722DA96/) に Join します。まだ1ヶ月以上先ですが、今から楽しみです。

Mercari には優秀なエンジニアが集まってますし、 [Platform Group の Blog Series](https://twitter.com/deeeet/status/1482879967977684996) を読んで技術的にチャレンジングなことをやっていて面白そうだと感じました。
自分が現職で取り組んでいた Terraform CI/CD Pipeline などの改善にも通じる部分があり、自分の経験・強みを活かしつつ新しいことに挑戦できるのではないかと思いました。
Blog Series や OSS の公開など、社外にも技術をオープンにしているのも良い文化だと感じました。

現職でプラットフォームエンジニアリングのようなことをやっていく中で、
抽象化された UI/UX を提供すること・生産性を損なわずにプラットフォームのセキュリティを担保することがとても重要かつ難しい課題だと感じていて、
[Developer Experience at Mercari](https://engineering.mercari.com/en/blog/entry/20220125-developer-experience-at-mercari/) や [Securing Terraform monorepo CI](https://engineering.mercari.com/en/blog/entry/20220121-securing-terraform-monorepo-ci/) に書かれていることに共感しました。

余談ですが、とある方から転職するなら ○ashicorp に転職して欲しいと言われました。
自分のこれまでの OSS の開発の経験を活かし、より多くの人・組織に使ってもらえる OSS の開発に携わってほしい(そのほうがより大きなバリューが出せる)という意図だと思いますが、
具体的な社名が出てくるとは思っていなかったのでびっくりしました。
どこに所属するにせよ、より多くの人・組織に使ってもらえるような OSS の開発をしていきたいですね。

## おまけ: OSS 活動の振り返り

転職の話とは関係ないですが、ついでにここ数年の OSS 活動などについても振り返りたいと思います。

[![GitHub followers](https://img.shields.io/github/followers/suzuki-shunsuke.svg?style=social&label=Follow&maxAge=2592000)](https://github.com/suzuki-shunsuke?tab=followers)

2022-05-19 時点の状況

[GitHub Followers: 139](https://github.com/suzuki-shunsuke?tab=followers)

![image](https://user-images.githubusercontent.com/13323303/169187254-97423eb7-cdbf-485c-bcb5-6852c89b8669.png)

やはり Star 数上位 3 つは思い入れがありますし、 [github-comment](https://github.com/suzuki-shunsuke/github-comment) や [ci-info](https://github.com/suzuki-shunsuke/ci-info) も便利なのでもっと評価されてほしいと思います。
色々なものを作ってきましたが、ここではこれらに絞って紹介します。

### aqua

一番思い入れがあるのは [aqua](https://aquaproj.github.io/) です。
汎用的な CLI のバージョン管理ツールは色々ありそうで意外とあまりありません(多分)。
有名なのは [asdf](https://asdf-vm.com/) くらいですが、これは自分が求めているものではありませんでした ([Nix](https://nixos.org/) とかもあるけど、良く知りません) 。

バージョンを固定することで、バージョンの違いによるトラブルを起こらないようにすることができます。
aqua は使うのがとても簡単で、 (symbolic link さえ作られていれば) コマンド実行時に自動で指定したバージョンがインストールされバージョンが切り替わります。
aqua g による検索は使い勝手がよいです。 GitHub Actions で簡単に導入ができるよう Action が提供されています。

aqua は Renovate の Preset Config を提供しており、 Renovate を使って簡単に update の自動化ができます。
aqua は Renovate を最も上手く活用した OSS の一つだと思っています。

aqua には Registry という Ecosystem があります。
aqua 本体への contribution にはそれなりのハードルがあるかと思いますが、 [aqua-registry](https://github.com/aquaproj/aqua-registry) という公式の Registry には簡単に Contribution することができます。
2022-05-19 時点でありがたいことに自分以外に [13 人の方に Contribution 頂いています](https://github.com/aquaproj/aqua-registry/graphs/contributors)。
本体とは独立した拡張機構を持った OSS を作ることができたことにも満足しています。

aqua-registry に登録されているツールの数は、 2022-05-19 現在 [asdf-plugins](https://github.com/asdf-vm/asdf-plugins) を超えました。
だから aqua のほうが優れているという話ではありませんが、 asdf と同等以上に多くのツールをサポートしているとは言えると思います。

```console
$ asdf plugin list all | wc -l   
     470

$ aqua list | wc -l
     499
```

aqua はツールのインストールと継続的 update を非常に容易にします。
ツールをダウンロードして展開してインストールするような定型的なシェルスクリプトを書く必要はありませんし、いつまでも古いバージョンが使われることもありません。

また、 Go で GitHub Actions の Action を作りたいと行った場合に、態々 Action としてパッケージングせずに aqua で install して run step で実行するということもやりやすくなります。
例えば自分は [renovate-issue-action](https://github.com/suzuki-shunsuke/renovate-issue-action) という GitHub Actions で実行することを前提とした CLI ツールを作っていますが、
これも態々 Action としてパッケージングせずに aqua で install して run step で実行するようにしています。

e.g.

```yaml
- uses: aquaproj/aqua-installer@v1.0.0
  with:
    aqua_version: v1.6.0
- run: renovate-issue-action
```

### tfaction

[tfaction](https://github.com/suzuki-shunsuke/tfaction) は GitHub Actions で Terraform の CI/CD Pipeline を構築するための Action の Collection です。
便利な単体の Action は色々あると思いますが、 workflow 全体をカバーするものはあまり他にないのではないかと思っています。
こういう CI/CD Pipeline はあまりオープンにされない面もあると思うので、それを OSS にできたことは有意義なことだと思っています。

### tfcmt

[tfcmt](https://github.com/suzuki-shunsuke/tfcmt) は CI で実行した terraform plan, apply の結果を Pull Request に分かりやすく通知する CLI ツールです。
[tfnotify](https://github.com/mercari/tfnotify) のフォークですが、 GitHub への通知に特化する代わりに様々な機能改善を入れています。
GitHub を使っているのであれば tfcmt を個人的にはオススメします。
OSS は気に入らなければフォークすればいいとはよく言ったものですが(?)、実際にフォークして個人でここまで開発するとは、我ながらよくやったなと思います。

### github-comment

[github-comment](https://github.com/suzuki-shunsuke/github-comment) は Pull Request, Issue にコメントをしたりコメントを非表示にしたりする CLI ツールです。
使い方次第ですが、 CI をよりユーザーフレンドリーにし、 Developer と DevOps Engineer の双方の生産性を高めることもできるツールです。

[github-comment で PR にコメントをして CI の結果を分かりやすくする](https://zenn.dev/shunsuke_suzuki/articles/improve-cicd-with-github-comment)

### ci-info

[ci-info](https://github.com/suzuki-shunsuke/ci-info) は地味なツールですが、 CI に関連した情報を取得してファイルに書き出したり環境変数として出力する CLI ツールです。
CI を実装していると、 push event に関連する Pull Request とか、 Pull Request の label の list とか、 Pull Request で変更されたファイルの一覧とか、 Pull Request の Author とか欲しくなったりするのですが、そういった情報を取得するコードを毎回書くのは地味に面倒です。ページネーションとかも考えるとなおさらです。
また、 CircleCI や GitHub Actions など複数の CI Platform に対応していて、それらの違いを吸収する意味合いもあります。

## さいごに

以上、現職でやってきたこと、転職の経緯、ここ数年やってきた OSS 開発について書きました。
