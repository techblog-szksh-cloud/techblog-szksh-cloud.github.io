---
title: "clap - 簡単にツールをインストールするためのツールを作った"
date: 2020-07-06T16:52:58+09:00
tags:
- oss
authors:
- suzuki-shunsuke
---

多分車輪の再発明だとは思いますが、簡単にツールをインストールするための CLI ツールを作りました。
tarball や zip をダウンロードして展開して指定したパスにインストールするツールです。

https://github.com/suzuki-shunsuke/clap

Go で書かれています。
ツールの名前(clap)には特別な意味や理由はなく、なんとなくです。

CI で何かしらのツールをインストールすることがままあって、そのためのシェルスクリプトを都度書くのが割と面倒なのでツール化しました。

このブログを書いている時点でバージョンは v0.1.0-1 で、最低限の機能しかありませんが、9割型ニーズを満たせるかなと思います。

使い方は以下のようになっています。

```
$ clap <URL> <インストールするファイルのアーカイブ内での相対パス>:<インストール先> [<インストールするファイルのアーカイブ内での相対パス>:<インストール先>...]
```

例えば [conftest](https://github.com/open-policy-agent/conftest) を /usr/local/bin にインストールする場合次のようになります。

```sh
CONFTEST_VERSION=0.18.2
clap install https://github.com/instrumenta/conftest/releases/download/v${CONFTEST_VERSION}/conftest_${CONFTEST_VERSION}_Linux_x86_64.tar.gz conftest:/usr/local/bin/conftest
chmod a+x /usr/local/bin/conftest
```

パーミッションの付与はやってくれないので必要に応じてやってください。
ファイルの圧縮形式は URL から自動で判別してくれます。

上記の conftest のインストールを今までは次のようなシェルスクリプトを書いていました。

```sh
#!/usr/bin/env bash

set -eu

CONFTEST_VERSION=0.18.2

dirpath=$(mktemp -d)
pushd "$dirpath"
TARFILE=conftest_${CONFTEST_VERSION}_Linux_x86_64.tar.gz
curl -OL https://github.com/instrumenta/conftest/releases/download/v${CONFTEST_VERSION}/${TARFILE}
tar xvzf $TARFILE
mv conftest /usr/local/bin/conftest
chmod a+x /usr/local/bin/conftest
popd
rm -R "$dirpath"
```

地味に面倒ですね。これをツール毎に書いて、しかも圧縮形式によって微妙に変えないといけません。

clap 自体のインストールはどうするかというと、 [GitHub Releases で tarball の他にバイナリ単体でも配布](https://github.com/suzuki-shunsuke/clap/releases)しているので簡単にインストールできます。

```
CLAP_VERSION=0.1.0-1
curl -L -o /usr/local/bin/clap https://github.com/suzuki-shunsuke/clap/releases/download/v${CLAP_VERSION}/clap_${CLAP_VERSION}_linux_amd64
chmod a+x /usr/local/bin/clap
```

以上、簡単な紹介でした。
