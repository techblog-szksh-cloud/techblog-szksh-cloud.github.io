---
title: "Drone v1 で gRPC が使われなくなった"
date: 2019-08-15T07:39:18+09:00
tags:
- drone
- grpc
authors:
- suzuki-shunsuke
---

v0.8 では server - agent 間の通信に gPRC が使われていましたが、 v1 では使われなくなりました。

## 理由

* https://discourse.drone.io/t/curious-about-decision-to-drop-grpc/3987
  * gRPC関連のトラブルの問い合わせが多すぎてサポートしきれないので止めた

## v1 での通信方法

* https://discourse.drone.io/t/drone-agents-keep-closing-connections-with-499-code/5197/2
  * agent がロングポーリングしている
  * 30秒後、なんのビルドもなければコネクションを切って、再接続する(張りっぱなしにしてると、LBやファイアウォールにコネクション切られるため)

---

自分も v0.8 から Drone を運用していて最近 v1 に upgrade しましたが、
v0.8 では gRPC 関連のトラブルが頻発していました。
server のログでは絶えず gRPC 関連のエラーを吐いていましたし、
server - agent 間の TCP connection が切れっぱなしになって戻らくなって agent 数がどんどん減っていったり
ビルドが pending のままになったり、色々ありました。

関連する issue はあり、幾つか対策を打ってみたりしましたが、結局解決しませんでした。

* https://github.com/drone/drone/issues/2090
* https://github.com/drone/drone/issues/2246
* https://github.com/drone/drone/pull/2294
* https://www.reddit.com/r/droneci/comments/8opifu/drone_stops_working_after_some_little_time/e06d1gn/

それが v1 にアップグレードして gRPC が使われなくなってから解消し、個人的にはとても助かりました。
管理者的にはアップグレードして一番嬉しい点ですね。
