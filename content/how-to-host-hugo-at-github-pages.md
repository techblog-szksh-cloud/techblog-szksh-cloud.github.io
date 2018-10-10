---
title: "Hugo製ブログをGitHub PagesへCIでデプロイ"
date: 2018-10-01T08:04:16+09:00
draft: false
tags:
- hugo
---

https://gohugo.io/ と https://pages.github.com/ の話です。
master に push したら GitHub Pages に circle ciでデプロイするようにする方法の紹介です。

## 前提

* テーマは master branch に含めない(CIでcloneする)
* buildしたものは gh-pages ブランチにデプロイ

## コード

.circleci/config.yml

```yaml
---
version: 2
jobs:
  build:
    docker:
    - image: suzukishunsuke/hugo-ci:0.1.2
    steps:
    - checkout
    - run: git config user.name "***"
    - run: git config user.email "***@example.com"
    # --depth 1 で高速化
    - run: git clone --depth 1 https://github.com/suzuki-shunsuke/tale-hugo themes/tale
    - run: hugo
    - run: sh release.sh
workflows:
  version: 2
  build:
    jobs:
    - build:
        filters:
          branches:
            only: master
```

release.sh

```sh
git checkout gh-pages
mv .git .circleci public
cd public

# 生成物に差分があったときのみデプロイ
git status --porcelain
if [ -n "`git status --porcelain`" ]; then
  git add .
  git commit -m "update"
  git push origin gh-pages
fi
```

hugo をインストールした Docker Image を用意しておきます。

https://hub.docker.com/r/suzukishunsuke/hugo-ci/

ビルドしたものを gh-pages ブランチにデプロイする方法を工夫していて、
`.git` を `public` ディレクトリに移動しています。

```sh
git checkout gh-pages
mv .git .circleci public
cd public
```

あと、ビルドされたものに差分があったときのみデプロイするようにしています。

```sh
if [ -n "`git status --porcelain`" ]; then
```
