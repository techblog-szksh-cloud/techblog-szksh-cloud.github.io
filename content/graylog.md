---
title: "Graylog で log を管理する"
date: 2018-11-27T16:40:33+09:00
draft: true
tags:
- oss
- graylog
---

Java 製の OSS ログ管理システム Graylog の紹介です。

なお、本記事中で「現在」「現時点」といった場合、特に断りがなければ記事執筆時点 2018-11-27 を指します。

## Graylog のバージョン

検証に用いるGraylogのバージョンは 2.4.6 になります。

OSSバージョンとEnterpriseバージョンがありますが、本記事ではOSSバージョンを使用します。

## Graylog とは

* https://www.graylog.org/
* https://github.com/Graylog2/graylog2-server

Kibana と Elasticsearch(以下ES) を使ったことがある人は、Kibanaに代わるものだと思っていただくとイメージしやすいかと思います。
ログはGraylogそのものが保持するのではなく、ESにインデキシングされます。
Kibana同様、ESに収集されたログを検索したり、ダッシュボードを作ったり出来ます。
ダッシュボードに関してはKibanaのほうが優れているようにも思えますが、
Graylogは認証・認可によりダッシュボードやログを操作できる人を制限・管理することが出来ます。

Graylogでログを管理する場合、ユーザーは直接ESにはログを送らず、Graylogを経由して送ります。
ESに対するGraylog以外のアクセスを制限できるので安全にログを管理できます。

Graylog は多機能なシステムであり、ログを整形したり、アラートを飛ばしたり、他のシステムにログをフォワードしたりすることも出来ます。
marketplace でサードパーティの plugin が公開されており、機能を拡張することが出来ます。
APIも提供されており、ある程度自動化が可能です。

## 認証・認可

オンプレミスでログを管理する場合、社外からは勿論社内からのアクセスも制限したいです。
Graylog では LDAP や Active Directory によってアクセスを制限できます。

## ログの収集

ログの収集をするには Graylog で幾つかのリソースを作成する必要があります。

* Input
* Index Set
* Stream
* Stream Rule

こう書くと面倒臭そうですが、terraform を使うことである程度自動化出来ます(後述)。

Input はログの入力のフォーマットの設定であり、
どのポートでどういったフォーマットのログを受け付けるかという設定になります。
フォーマットは様々なものがサポートされています。

* AWS Flow Logs
* AWS Cloud Watch Logs
* AWS Cloud Trail
* Beats
* CEF AMQP
* CEF Kafka
* CEF TCP
* CEF UDP
* Fake HTTP Message
* GELF AMQP
* GELF HTTP
* GELF Kafka
* GELF TCP
* GELF UDP
* JSON Path
* NetFlow UDP
* Raw AMQP
* Syslog AMQP
* Syslog Kafka
* Syslog TCP
* Syslog UDP

この設定はアプリケーションごとに設定するというより、グローバルな設定なので、他のアプリケーションで既に同じ形式でログを収集していたら新たに設定する必要はありません。

Index SetはESのIndexの論理的なセットです。
GraylogはESの複数のIndexを1つのセットとして管理します。
Index Setの設定で古いログを自動でcloseしたり削除したりする事ができるのでログの管理が楽になります。
ESのログは収集しているだけだとどんどん肥大化していってしまうので、[Curatorなどを使って古いものを消したりする必要がありますが](https://dev.classmethod.jp/server-side/elasticsearch/elastic-curator/)、そういったことをgraylogが自動でやってくれます。

Stream はGraylogに収集されたログを分類する仕組みです。
Stream毎に検索したりダッシュボードを作ったりアラートを飛ばしたりログの閲覧を制限したりします。
分類の仕方は自由ですが、自分はアプリケーション毎にStreamを作っています。
Stream毎にStream Ruleを定義し、Stream Ruleの条件にマッチしたログはそのStreamに振り分けられます。
自分はfluentdから送ったログの tag によってStreamを分けています。

ここまでやればログを検索したり出来ます。

## Alert

アラートの設定は

* Condition: アラートの条件
* Notification: アラート先(どこにアラートを飛ばすか)

の2つに分かれます。それぞれStreamに関連づいた設定です。

Condition では

* Field content condition
* Field aggregation condition
* Message count condition

といった条件で設定できます。

Notification は標準では

* HTTP(Webhook)
* Email

の2種類しかないのですが、pluginで Slack などにも通知することが出来ます。
自分は https://github.com/graylog-labs/graylog-plugin-slack を使って Slack に通知しています。

Notification のメッセージのテンプレートは自由に変えられますが、どういったテンプレートが良いかは難しいです。
自分は次のような感じにしています。

```
Alert Condition: ${alert_condition.title}
Messages:
${foreach backlog message}
<https://graylog.example.com/messages/<active index>/${message.id} | link> ${message.message} (${message.fields.error})

${end}
```

graylog の URL と `<active index>` は適宜変更してください。 `<active index>` は適当に対象のStreamのメッセージ1つ選んでPermalinkのURLを見れば分かります。

ここで注意が必要なのが、graylog-plugin-slack の設定で `Graylog URL (optional)`を設定しないと `${graylog_url}` などが空になってしまうことです。自分は optional なので元々設定していなかったのでハマりました(ググっても分からなかった)。
`Graylog URL`という設定は notification 毎に変えるようなものでもないのでglobalに設定できるとよいのですが、どうも出来なそうです。

また、テンプレート中で使える変数の中にmessageのURLはないそうです。

https://community.graylog.org/t/message-url-in-alert-notification/1916

`<active index>` の部分は恐らくESのインデックスが変わると変わってしまう気がする(要検証)ので出来れば変数として参照できるようになってほしいです。

## ダッシュボードの作成

ダッシュボードの作成は

1. Dashboardページ: 空のDashboardを作る
2. Stream ページ: クエリを実行したりしてグラフを作る
3. Stream ページ: グラフをDashboardに追加する
4. Dashboardページ: グラフを並び替えたりする

詳細は割愛するので http://docs.graylog.org/en/2.4/pages/dashboards.html を読んでください。

## 権限管理

Graylogの権限管理では User と Role という概念があり、
Role の permissions としてどのリソースにどういった操作を許可するか定義し、
User に Role を付与します。

http://docs.graylog.org/en/2.4/pages/users_and_roles/permission_system.html#permissions

perssions として定義できるものは公式なドキュメントが見つからないのですが、APIで取得できます。

https://gist.github.com/suzuki-shunsuke/e371f1bd2716cde31d6fa89bf39f0e77

例えば `streams:read` は全てのStreamをreadする権限となりますし、
`streams:read:<stream id>` とすれば特定のStreamのみreadする権限となります。

プロジェクトごとにroleを定義してプロジェクトの関係者に付与したり、アルバイトや正社員といった雇用形態に応じてroleを定義したり、色々や利用はあると思います。

こういったRoleのpermissionの定義はWeb UIからも出来ますが、
残念ながらWeb UIからではなくAPIを用いないと定義できないpermissionもあります。
そのため、自分は Graylog APIを用いて terraform provider を開発し、terraform で Roleの作成を行っています。

## terraform provider

GraylogはWeb UIから設定をすることが出来ますが、
出来ればソースコードで管理したいですよね(Infrastructure as Code)。
GraylogはAPIを提供しているのでそれを使って自動化をすることが出来ます。
実はAPIでないと出来ない設定は少なくなく、細かな権限設定もその一つです。

既存のソリューションを探したものの特に見つからなかったので、
APIを使ってGraylog用のterraform providerを自作しています。

https://github.com/suzuki-shunsuke/go-graylog

GraylogのAPIの種類は非常に多く、残念ながらカバーできているのはごく一部ですが、以下のようなものをサポートしています。

* input
* user
* role
* index set
* stream
* ldap setting
