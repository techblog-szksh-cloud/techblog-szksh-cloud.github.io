---
title: "akoi - binary installer"
date: 2018-10-31T08:56:04+09:00
draft: false
tags:
- oss
- ansible
---

自作のOSS [akoi](https://github.com/suzuki-shunsuke/akoi) の紹介をします。

* なぜこんなものを作ったのか
* akoi と ansible を使ってサーバにバイナリをインストールする方法

について主に説明します。

## まとめ

* akoi はバイナリファイルのインストーラ
* 設定ファイルで管理できる
* 冪等であり、効率よくインストールできる
  * 並列インストール
  * Accept-Ranges による分散ダウンロード
* ansibleでサーバにバイナリをインストールするのを補助してくれる
  * ansible で真面目にバージョンコントロールして効率よくインストールするのは難しい(ほとんどの ansible role は出来ていない)

## akoi とは

akoi はバイナリファイルのインストーラです。
設定ファイルにインストールするファイルのダウンロードURLとインストール先を記述して管理します。
インストールするバイナリのバージョン管理が可能であり、既にインストールしてあるバージョンへの切り替えはシンボリックを作り直すだけなので一瞬で終わります。無駄にダウンロードをしたりはしません。
複数のバイナリを並列でインストールしたり、Accept-Ranges ヘッダによる分散ダウンロードをサポートしています。

分散ダウンロードについては

https://qiita.com/codehex/items/d0a500ac387d39a34401

が参考になります。

Goで書かれています。

https://github.com/suzuki-shunsuke/akoi/releases からバイナリをダウンロードしてインストールできます。

詳細は[README](https://github.com/suzuki-shunsuke/akoi)を読んでください。

## なぜ作ったのか

サーバにバイナリをインストールする ansible role を書くのが辛かったからです。
最近は色々なソフトウェアがGoで書かれ、バイナリで配布されています。
そういったバイナリをサーバへインストールするのは
ansible で行っているという方も少なくないのではないでしょうか？
有名なソフトウェアをインストールする ansible role は大抵[Ansible Galaxy](https://galaxy.ansible.com) で公開されています。

しかし、ほとんどの role は「真面目に」バージョン管理していません。
ここでいう「真面目に」とは

1. バージョンを指定できる
2. バージョンを変更できる
3. 指定したバージョンが既にインストールされている場合は無駄にダウンロードしたりしない

といったことです。

これらを ansible でやろうとすると結構面倒なんです。

既存のroleでよくあるのが

1. バージョンにかかわらず既にインストールされていたらインストールしない(バージョン変更できない)
2. 1の問題を解決するため、強制的に再インストールするフラグがある(同じバージョンのものがインストールされていても無駄に再インストールする)

だと思います。

真面目にやろうとするとこんな感じになる気がします。

https://github.com/suzuki-shunsuke/ansible_role_akoi/blob/master/tasks/install_binary.yml

これらのロジックはソフトウェアに関わらずほとんど共通です。
それをソフトウェアごとに実装してテストしてなんてのは面倒です。

そこで akoi を作る前に汎用的な ansible role として開発してみたのが

https://github.com/suzuki-shunsuke/ansible-role-general-installer

です。

しかしこれは ansible のバグでうまく動きませんでした。

https://github.com/ansible/ansible/issues/34736

そこで作られたのが akoi です。
結果的に ansible でやるより高速かつ汎用的なので作って良かったと思います。

## akoi と ansible を使ってサーバにバイナリをインストール

akoi を使うにしても ansible が不要になるという話ではなく、ansible でakoiのコマンドを実行する感じになります。
[README](https://github.com/suzuki-shunsuke/akoi#use-akoi-at-ansible) にも書きましたが、 akoiを ansible の shell モジュールから呼び出して標準出力をパースすることで task の `changed` を判定することができます。

```yaml
tasks:
- name: install consul
  shell: "/usr/local/bin/akoi install -f ansible 2>&1"
  register: result
  changed_when: (result.stdout|from_json)["changed"]
```

akoi を使ってソフトウェアをインストールために、そもそもどうやってサーバに akoi をインストールするかですが(各サーバに akoi をインストールする必要があります)、
akoi をインストールする ansible role を提供しています。

https://github.com/suzuki-shunsuke/ansible_role_akoi

これで akoi を使ってバイナリをインストールできますが、ソフトウェアのセットアップはバイナリをインストールすれば終わりということではなく、ユーザーやグループを作成したり、設定ファイルを作成したり、systemd のサービスを起動したりと色々あります。

自分はそれらの処理は別の ansible role として開発しています。

* [suzuki-shunsuke.consul_config](https://galaxy.ansible.com/suzuki-shunsuke/consul_config)
* [suzuki-shunsuke.prometheus_node_exporter_config](https://galaxy.ansible.com/suzuki-shunsuke/prometheus_node_exporter_config)

バイナリのインストールは akoi でやり、それ以外の部分は別途 ansible role を開発するというスタイルです。
それらの role ではいちいちバイナリをインストールする処理を書かなくて良いのでだいぶ開発が楽になりました。
