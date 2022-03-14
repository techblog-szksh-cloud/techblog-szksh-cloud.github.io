---
title: "GraylogのAlertの課題"
date: 2018-12-19T21:02:11+09:00
tags:
- graylog
authors:
- suzuki-shunsuke
---

Graylogを運用してきて感じているAlert機能周りの課題をリストアップします。
自分のGraylogの理解が不十分で勘違いしている部分もあるかもしれませんが、ご了承ください。
Graylogのバージョンは 2.5.0 です。
ここでいう「メンション」とは、Slackのようなチャットツールのメンションを指します。
リストの詳細を書きだしてみたものの、リストだけでだいたい言いたいことが言えてしまっていたのと、単なる愚痴っぽくなってしまったので、
リストだけに留めます。

## 2018-12-31 追記

元々 Alert Condition, Notification の APIがないと勘違いしていたのですが、
実はちゃんとあったので terraform で管理できるように go-graylog を更新しました。

* https://github.com/suzuki-shunsuke/go-graylog/pull/50
* https://github.com/suzuki-shunsuke/go-graylog/pull/52
* https://github.com/suzuki-shunsuke/go-graylog/blob/v11.0.0/docs/resources/alarm_callback.md
* https://github.com/suzuki-shunsuke/go-graylog/blob/v11.0.0/docs/resources/alert_condition.md

## 課題リスト

* ~~APIでAlert Condition, Notificationを管理できない~~
  * ~~APIがないので terraform でサポートも出来ない~~
  * ~~数が増えるとWeb UIでは管理が辛い・修正漏れや設定ミスが出やすい~~
* Condition, NotificationがStreamに紐づく
  * ConditionによってNotificationを変えられない
    * 条件に応じてアラートの文面・通知先・メンション先・メンションの有無を変えられない
      (正確にはテンプレートエンジンで頑張ればある程度対応できるかもしれないが、個人的にはテンプレートそのものを切り替えたい)
  * ConditionやNotificationを複数のStreamで使い回せない
* (少なくとも標準機能では)時間帯によってアラートの挙動を変更できない
  * 夜中にはアラートを飛ばさない・メンションをつけないといったことが出来ない
  * [一時的にアラートを止められない](https://github.com/Graylog2/graylog2-server/issues/3182)
* Pluginを使うにしてもどれを使ったら良いか分からない
  * もっとGraylogがメジャーになれば状況も変わるかもしれない
