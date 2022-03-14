---
title: "drone の管理のために portainer を導入した"
date: 2018-09-30T21:56:42+09:00
draft: false
tags:
- drone
- portainer
archives: ["2018/09"]
authors:
- suzuki-shunsuke
---

drone OSS 0.8.5 で検証しています。

https://drone.io/ と https://portainer.io/ の話です。

drone はかなり安定したシステムだと思いますが、
ユーザーが好きなイメージで好きなコマンドを実行できる以上、トラブルが起こることはあります。

その結果、 特定の build がタイムアウトにならずに延々と実行され続けるなんてことがあります。

その場合、

1. どのノードのどのコンテナでトラブルが起きているのか
2. そのコンテナで何が起こっているのか

というのを知りたいのですが、 drone にはそういった管理機能はありません。

そこで 複数のサーバで実行されている Docker コンテナを管理できるツールはないかと探したところ、
[portainer](https://portainer.readthedocs.io/en/stable/) が良さそうだったので導入しました。

portainer を使うと複数のサーバのコンテナを一覧で見ることが出来、
コンテナを操作(削除、停止、再起動etc)出来ます。
コンテナのログや簡単なメトリックス(CPU, memory, network usage) が見れます。
コンテナだけでなく、network や volume, image といったリソースも管理できます。

## portainer の導入

公式ドキュメントに書いてありますが、 swarm cluster を構築してそこにデプロイすればよいです。

* https://docs.docker.com/engine/swarm/swarm-tutorial/
* https://portainer.readthedocs.io/en/stable/deployment.html#inside-a-swarm-cluster

## 困っていること

### 毎回検索で絞り込みしないといけない

検索で絞り込んだ後に特定のコンテナの詳細画面飛んだ後一覧に戻ると
検索がクリアされているのでもう一度検索しないといけないのが面倒です。

### もう少し高度な検索がしたい

自由入力の検索ボックスが1つあるだけで、特にクエリが書けるわけでもなさそうなので、
もう少し高度な検索がしたいです。
例えば Created At で 1時間以上前に特定のノードで作られたコンテナの一覧とか。

### docker API でエラーが出て、コンテナを操作できない

これは多分不具合とかではなく自分の設定が良くないのだと思います。
この辺の issue が関係してそうですが、まだ解消できていません。

* https://github.com/portainer/portainer/issues/831
* https://github.com/portainer/portainer/issues/1897

```
http error: Unable to proxy the request via the Docker socket (err=context canceled) (code=500)
```

```
cron error: endpoint snapshot error (endpoint=primary, URL=tcp://tasks.agent:9001) (err=Cannot connect to the Docker daemon at tcp://tasks.agent:9001. Is the docker daemon running?)
```

```
http error: Unable to execute cluster operation (err=Get https://192.160.0.16:9001/volumes: net/http: request canceled (Client.Timeout exceeded while awaiting headers)) (code=500)
```
