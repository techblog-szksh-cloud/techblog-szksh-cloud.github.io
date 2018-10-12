---
title: "Dockerを使ってansible playbookをテストする"
date: 2018-10-12T21:02:51+09:00
draft: false
tags:
- ansible
---

ansible playbookを(VMの代わりに)Dockerコンテナに対して実行すると、効率よく動作確認できるというお話です。
ansible playbookの動作確認のためにvagrantでVMを起動したりしていると動作確認に時間がかかるし、容量も喰います。
Dockerコンテナを使って動作確認できればこれらの問題を解決できます。

ただし、Dockerコンテナの場合、一部のansible のtaskが失敗することがあるので
ansible playbookによってはDockerコンテナではテストにならない場合もあるかと思います。

## サンプル

https://github.com/suzuki-shunsuke/example/tree/master/ansible/test-on-docker

簡単なサンプルを用意しました。

ansible playbookに加え、

* docker-compose.yml
* test_docker.sh: 簡単なシェルスクリプト

を作成してあります。

```console
$ bash test_docker.sh
```

とすることで動作確認できます。

## 説明

スクリプトでやっていることは

1. Docker Compose でコンテナを起動
2. コンテナのIDを取得し、inventory ファイルを作成
3. Docker Connection Pluginを使ってコンテナにplaybookを実行

です。

Docker Connection Plugin を使うとDockerコンテナに対してansible playbookを実行できます。

* https://docs.ansible.com/ansible/2.6/plugins/connection.html
* https://docs.ansible.com/ansible/2.6/plugins/connection/docker.html

また、Docker Hubで公開されている多くのDockerイメージのUSERは root ですが、
ansible playbookの動作確認としては都合が悪かったりします。

そこで自分は非rootユーザーを作成したDocker Imageを使っています。

https://hub.docker.com/r/suzukishunsuke/ansible-test-centos/

## 関係ありそうなツール

今回は簡単なスクリプトとdocker-compose.ymlを用意しましたが、
もっとイケてるやり方がありそうなものです。

### Vagrant Docker Provider

https://www.vagrantup.com/docs/docker/

なんかあまり使えなさそうです。
Linux以外だと結局VMが必要で、既に非推奨な boot2docker をデフォルトでは使うらしくだめそうだなって思いました。
あまり調べてません。

https://www.vagrantup.com/docs/docker/basics.html#host-vm

> By default, the host VM Vagrant spins up is backed by boot2docker, because it launches quickly and uses little resources. 

### Ansible Container

https://docs.ansible.com/ansible-container/

よく知りません。動作確認したいだけだとオーバースペックな印象は受けます。

### Packer

* https://www.packer.io/docs/builders/docker.html
* https://www.packer.io/docs/provisioners/ansible.html

記事を書き終わってからそういえば Packer があったなと思い出しました。
