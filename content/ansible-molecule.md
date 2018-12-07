---
title: "molecule でansible の role と playbook をテストする"
date: 2018-12-06T23:08:04+09:00
draft: false
tags:
- ansible
- molecule
---

ansible 専用の testing ツール [molecule](https://molecule.readthedocs.io/en/latest/index.html) を紹介します。
molecule の公式ドキュメント以外の情報は少ないので、参考になれば幸いです。

以前 Docker を使って ansible のテストをする方法を紹介しました。

https://suzuki-shunsuke.github.io/test-ansible-on-docker/

この際は Docker Compose と簡単なシェルスクリプトを使って実現しました。
これはこれでブラックボックスな部分がなく、学習コストも低くて悪くないので興味のある方はそちらもご参照ください。

molecule は ansible 専用の testing ツールです。
基本的に playbook というより role 用のツールですが、playbookのテストも工夫すれば出来ます。

* 情報が少ない
* 公式ドキュメントも分かりづらい部分がある
* コマンドがエラー吐いて失敗した際に、ググっても情報が出てこないので辛い

という風に辛い部分もありますが、

* star数はそれなりにある
* ansible の公式のプロジェクトである https://github.com/ansible/molecule/
* [geerlingguy](https://github.com/geerlingguy) さんも使ってる

という風に良い面もあります。

それでは使っていきましょう。

## インストール

https://molecule.readthedocs.io/en/latest/installation.html

```
$ pip install molecule
```

Docker を使う場合 `docker-py` も必要です。

```
$ pip install docker-py
```

## role のテスト

playbookに比べて role のテストは簡単です。

role のディレクトリ(tasksやfilesなどがあるディレクトリ)に移動してコマンドを実行します。

```
$ molecule init scenario -r <role name>
```

こうすると `molecule` ディレクトリが生成されます。

`molecule/default/molecule.yml` を修正します。

https://molecule.readthedocs.io/en/latest/configuration.html

```yaml
---
dependency:
  name: galaxy
  # 依存する role がある場合
  options:
    role-file: roles.yml
driver:
  name: docker
lint:
  name: yamllint
# https://molecule.readthedocs.io/en/latest/configuration.html#platforms
platforms:
  - name: server  # コンテナの名前になる
    # 必要に応じて image を変更
    # 今回は ansibleのremote user を非rootにするために自作の Docker Image を指定
    # https://hub.docker.com/r/suzukishunsuke/ansible-test-centos/
    image: suzukishunsuke/ansible-test-centos:0.1.0
    # systemd を使ったりする場合
    # https://molecule.readthedocs.io/en/latest/examples.html#systemd-container
    privileged: true
    command: /sbin/init  # systemd を使う場合必要
    env:
      USER: foo # DockerだとUSER環境変数が空になってしまうようなので明示的に設定
provisioner:
  # https://molecule.readthedocs.io/en/latest/configuration.html#id12
  name: ansible
  lint:
    name: ansible-lint
  options:
    user: foo # 非rootユーザーで実行
  inventory:
    group_vars:
      # variables を指定
      all:
        nginx_server_name: localhost
        mysql_host: localhost
        mysql_port: 3306
        mysql_database: grafana
        mysql_user: root
        mysql_password: password
scenario:
  name: default
verifier:
  name: testinfra
  lint:
    name: flake8
```

test の前にまずは lint します。

```
$ molecule lint [-s <senario name>]
```

すると yamllint の設定ファイル `.yamllint` が作られていると思うので、必要に応じて修正します。

https://yamllint.readthedocs.io/en/stable/configuration.html

ansible-lint で引っかかった人はこちらを参照してください。

https://github.com/ansible/ansible-lint

そして test コマンドを実行します。

```
$ molecule test [-s <senario name>]
```

`test` コマンドではコンテナが削除されるため、デバッグが難しかったりします。

その場合、 `converge` コマンドを実行すればコンテナは消えません。

```
$ molecule converge [-s <senario name>]
```

消したくなったら destroy コマンドで消しましょう。

```
$ molecule destroy [-s <senario name>]
```

## playbook のテスト

次に playbook のテストです。割とこれが本題だったりします。
molecule は基本的に playbook というより role 用のツールなので若干工夫が必要です。

自分はよく ansible playbook のディレクトリ構成を以下のようにします。

```
hello-molecule/  # ルートディレクトリ
  agent.yml # agent グループ用の playbook
  group_vars/
    all.yml  # 共通のvariables
    agent.yml  # agent グループ用の variables
  roles/  # role
  inventories/
    prod.yml # production用のinventory
  roles.yml  # 依存する role のリスト
  ansible.cfg
```

このときに playbook `agent.yml` のテストがしたいとします。
molecule のためにこの構成を弄ったりは極力したくありません。

playbook のディレクトリで `molecule init` を実行します。
default シナリオは必須のようです。

```
$ molecule init scenario -r hello-molecule
$ molecule init scenario -s agent -r hello-molecule
```

するとこうなります。

```
hello-molecule/
  agent.yml
  group_vars/
    all.yml
    agent.yml
  roles/
  inventories/
    prod.yml
  roles.yml
  ansible.cfg
  molecule/
    default/
    agent/
      molecule.yml
      playbook.yml # これは使わない。消す
```

ここから molecule.yml を修正していきます。
一部抜粋します。

```yaml
---
dependency:
  name: galaxy
  options:
    role-file: roles.yml # ルートディレクトリからの相対パス
platforms:
  - name: server  # group名
    image: centos:7
provisioner:
  name: ansible
  playbooks:
    converge: ../../server.yml # ルートディレクトリにある playbookを指定
  env:
    ANSIBLE_ROLES_PATH: ../../roles:../../_roles  # roleのパスを修正
scenario:
  name: server
```

このように playbookや role のパスを修正すればあとは role のテストと同じ要領でいけると思います。

以上、簡単ですが molecule の使い方を紹介しました。
