---
title: "Drone で「ビルド実行時にパラメータを渡す」っぽいことをする"
date: 2019-06-20T17:50:11+09:00
tags:
- drone
---

Jenkins では parameterized build という機能で、ビルド実行時に Web UI からパラメータを指定することができます。

Drone では基本的に Git のイベントをフックして動くので「ビルドを実行時に手動でパラメータを設定する」ということは出来ません。

自分は基本的にできなくても構わないと思っていますが、
こういった機能がないから Drone を使わないという人も中にはいるので、
Drone でもちょっとした工夫でそれっぽいことは出来るんじゃないかと思い、簡単なサンプルを書いてみました。

一応言っておくと、 Jenkins の parameterized build を完全に代替するようなものではありません。

https://github.com/suzuki-shunsuke/example-drone-build-parameter

以下のファイルが必要です。

* [build_params/params.sh.tpl](https://github.com/suzuki-shunsuke/example-drone-build-parameter/blob/master/build_params/params.sh.tpl): ビルドパラメータを記述するファイルのテンプレート
* [scripts/deploy.sh](https://github.com/suzuki-shunsuke/example-drone-build-parameter/blob/master/scripts/deploy.sh): デプロイ時に実行するスクリプト
* [.drone.yml](https://github.com/suzuki-shunsuke/example-drone-build-parameter/blob/master/.drone.yml): Drone の設定ファイル

スクリプトを実行してデプロイします。

```console
$ bash scripts/deploy.sh
```

するとパラメータを記述するファイルがテンプレートから作成され、エディタで開きます。

https://github.com/suzuki-shunsuke/example-drone-build-parameter/blob/master/scripts/deploy.sh#L12-L17

パラメータを記述し、エディタを閉じます。

するとそのファイルがコミットされ、新しいタグが作成され、コミットとタグがリモートにプッシュされます。

https://github.com/suzuki-shunsuke/example-drone-build-parameter/blob/master/scripts/deploy.sh#L27-L35

Drone でタグをプッシュするイベントをフックしてビルドが実行されます。

https://github.com/suzuki-shunsuke/example-drone-build-parameter/blob/master/.drone.yml#L13-L17

ビルドではコミットされたパラメータの設定ファイルを読み込むことでビルドにパラメータを渡せます。

https://github.com/suzuki-shunsuke/example-drone-build-parameter/blob/master/.drone.yml#L10

こうすることでビルドにパラメータを渡すことができます。
パラメータの設定ファイルはコミットされるので Git で管理できるというのも特徴です。

https://github.com/suzuki-shunsuke/example-drone-build-parameter/blob/master/build_params/2019-07-07T10-04-02JST/params.sh

上記のスクリプトではパラメータの設定ファイルとしてシェルスクリプトで環境変数を定義していますが、
シェルスクリプトである必要性はなく、例えば JSON ファイルを記述してビルドで JSON ファイルを読み込んでもよいし、
パラメータを選択させるようなことがしたければ [fzf](https://github.com/junegunn/fzf) のようなものを使ってもよいし、
いくらでも改善できます。

以上、簡単な tips でした。
