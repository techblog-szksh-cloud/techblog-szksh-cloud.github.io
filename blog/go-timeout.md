---
title: "go-timeout - command の timeout"
date: 2019-11-04T10:00:21+09:00
tags:
- oss
- golang
authors:
- suzuki-shunsuke
---

作ったのは 2ヶ月くらい前の話ですが、
Go の command の timeout を実装するためのライブラリを作ったので紹介します。

https://github.com/suzuki-shunsuke/go-timeout

基本的には https://github.com/Songmu/timeout をオススメしますが、これだと上手くいかないパターンがあったので自作しました。

Go の command の timeout に関しては https://junkyard.song.mu/slides/gocon2019-spring/#24 がとても参考になります。

上記のスライドでは

* 標準ライブラリの [exec.CommandContext](https://golang.org/pkg/os/exec/#CommandContext) でも停止できるが、 SIGKILL で強制的に停止することになる
  * 子プロセスが停止しない
* [公式見解](https://github.com/golang/go/issues/21135) では、SIGKILL 以外は標準ライブラリではサポートしない。サードパーティでやればよい
* [Songmu/timeout](https://github.com/Songmu/timeout) 使えば SIGKILL 以外でより安全に停止できる

ということが丁寧に説明されています。

自分は [cmdx](https://github.com/suzuki-shunsuke/cmdx) という task runner を開発していてその中で task の実行時に timeout を設定出来るようにしました。
当初 [Songmu/timeout](https://github.com/Songmu/timeout) を使って実装したのですが、問題があることに気づきました。
それは、 command の中で [fzf](https://github.com/junegunn/fzf) を使うと、上手く動かないというものでした。

* https://github.com/suzuki-shunsuke/cmdx/issues/52
* https://twitter.com/szkdash/status/1165529415238815745

正直この辺の挙動はちゃんと理解できていないのですが、
調べてみると Songmu/timeout だと syscall.SysProcAttr の Setpgid を true に設定していて、そうすると fzf が上手く動かないようでした。

https://junkyard.song.mu/slides/gocon2019-spring/#48

https://junkyard.song.mu/slides/gocon2019-spring/#45

には timeout の実装方式として

* GNU timeout の場合
* Songmu timeout の場合

の 2 通り書いてありますが、 suzuki-shunsuke/go-timeout では GNU timeout のパターンで実装しています。 

https://junkyard.song.mu/slides/gocon2019-spring/#46

に書いてあるとおり、少々乱暴な気もしますが、 [cmdx](https://github.com/suzuki-shunsuke/cmdx) で使う分には特に問題ない気がします。
