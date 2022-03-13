---
title: "buildflow の task の input, output という機能"
date: 2020-10-17T21:05:41+09:00
archives: ["2020/10"]
tags:
- oss
- buildflow
---

buildflow というツールを開発しているので `buildflow` というタグをつけて何回かに分けてブログを書きます。

この記事では buildflow の task の input, output という機能について説明します。
task の input, output は Tengo script で task のパラメータを整形する機能です。

task の command.command や write_file.template など、幾つかの設定では Go の text/template が使えますが、 text/template は複雑なロジックを記述したりするのには向いていません。
そこで task の input で Tengo script を使って必要なデータの整形を行うことで、
template は比較的きれいな状態に保つことが出来ます。

これは MVC モデルで View とロジックを分離するみたいな考え方と似ているかもしれません。

output ではコマンドの実行結果を整形することが出来ます。
例えばコマンドの標準出力をユニークな文字列のリストにしたり出来ます。

task.input は task.when が評価されたあと、 task の command などが実行される前に評価されます。
つまり、 task.when や task.dependency で同じ task の input の結果を参照は出来ません。
