---
title: "drone exec を並列実行した際のdocker network name の衝突について"
date: 2018-09-30T18:52:34+09:00
draft: false
tags:
- drone
---

drone exec を並列実行すると docker network name が衝突することがあります。

```
$ drone exec --local & drone exec --local
[1] 42934
2018/06/06 01:58:12 Error response from daemon: network drone_default is ambiguous (4 matches found on name)
2018/06/06 01:58:12 Error response from daemon: Conflict. The container name "/drone_step_0" is already in use by container "464a29b0726d6ff1a352d81df9c837330501085be550bb16abac3d338dfad887". You have to remove (or rename) that container to be able to reuse that name.
[1]  + exit 1     drone exec --local
```

drone は pipeline 実行時に network を作成し、pipeline が終了すると network を削除します。

* https://github.com/cncd/pipeline/blob/b03959913369b4e2a6c49be514f52d076ef6b172/pipeline/pipeline.go#L58
* https://github.com/cncd/pipeline/blob/b03959913369b4e2a6c49be514f52d076ef6b172/pipeline/pipeline.go#L62
* https://github.com/cncd/pipeline/blob/b03959913369b4e2a6c49be514f52d076ef6b172/pipeline/backend/docker/docker.go#L50
* https://github.com/cncd/pipeline/blob/b03959913369b4e2a6c49be514f52d076ef6b172/pipeline/backend/docker/docker.go#L179

削除するので、並列で実行しない限り基本的に衝突したりすることはありません。

なお、 docker の仕様では同じ名前の network を作成できるようです。

* https://github.com/moby/moby/issues/20648
* https://github.com/moby/moby/issues/18864

`drone exec` は `{prefix}_default` というネットワークを作成します。

https://github.com/cncd/pipeline/blob/b03959913369b4e2a6c49be514f52d076ef6b172/pipeline/frontend/yaml/compiler/compiler.go#L85

`{prefix}` はデフォルトで `drone` ですが、コマンドライン引数で指定できます。

https://github.com/drone/drone-cli/blob/800d6949bd96847b4d5c400e261b18386ea2226f/drone/exec/exec.go#L62

このprefixを変えれば衝突は回避できます。
bash, zshなら次のように乱数を指定すれば良いと思います。

```
$ drone exec --local --prefix drone_${RANDOM}
```

なお、 `drone exec --help` の中に `--prefix` オプションはありませんが、これは明示的にhelpから消しているからです。

https://github.com/drone/drone-cli/blob/eca37514c1c3a441dbb0618531b91e05f56067e8/drone/exec/exec.go#L65

なぜ消しているかは分かりません。

なお、 drone の build では prefix に プロセスIDと乱数を使うことで衝突を避けているようです。

https://github.com/drone/drone/blob/29785b86f6534ded974120de0fcf7c21397a9d0d/server/hook.go#L552
