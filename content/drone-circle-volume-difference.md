---
title: "Drone と Circle CI の workspace の扱いの違いについて"
date: 2018-09-30T19:27:59+09:00
draft: false
tags:
- drone
- circleci
archives: ["2018/09"]
---

drone は同じ pipeline の step 間で同じ workspace を docker の volume としてマウントすることで workspace を共有します。

http://docs.drone.io/workspace/

circle ci はデフォルトで job 間で workspace を共有しません。
persist_to_workspace を指定することで共有する事ができます。

https://circleci.com/docs/2.0/workflows/#using-workspaces-to-share-data-among-jobs

circle ci の場合は volume を共有するのではなく、指定したディレクトリを archive し、次の job で展開することでファイルを共有するようです。

この違いには一長一短があります。

circle ci の場合は archive, unarchive する分、volume 共有に比べて時間がかかります。

そのため、下手に job を分けるより一つの job で処理したほうが処理時間が短くなる場合がありますが、
build や test といった処理は出来れば別の job として実行したいでしょうし、それでは workflow が使えません。

ただし、共有するパスは自由に選べるので必要最小限に抑えることで時間を短縮できます。

また、circle ci の場合は archive するパス及び展開先のパスを自由に選べるので自由度が高いです。
drone の場合、 workspace 以外のファイルを共有できません。

また、drone の場合 volume を共有するので同じ pipeline の step は同じノードで実行されるという制約がありますが、
circle ci の場合、別のノードでの実行が可能です。
drone の group を使って並列に実行する場合、複数のノードに分散できませんが、 circle ci の場合分散できるのでよりスケールしやすいと言えるでしょう。

## 結局どっちのほうがいいのか

一長一短があると言ったとおり、一概にどっちが良いとは言えませんが、個人的には drone のやり方のほうが直感的だし、
何より速いので好きです。同じ pipeline の処理を複数のノードに分散させたいことって個人的にはあまりありません。

