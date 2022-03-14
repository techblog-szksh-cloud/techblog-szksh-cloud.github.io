---
title: "skaffold を使って GitOps する"
date: 2021-01-11T16:24:44+09:00
tags:
- skaffold
- gitops
- k8s
authors:
- suzuki-shunsuke
---

skaffold を用いてマニフェストを動的に生成しつつ GitOps する方法を考えたので紹介します。
なお、現時点ではあくまで考えてみただけで実際に導入したりはしていません。

GitOps はマニフェストを Git リポジトリにコミットしないといけないわけですが、
Docker image をビルド、プッシュし、マニフェストの image tag を書き換えるという一連の処理をどうやってやるのがいいのか
個人的に考えていました。

自分は FluxCD には詳しくないのですが、
FluxCD では registry をポーリングして自動で最新のタグに書き換える機能があるそうですね。

https://toolkit.fluxcd.io/guides/image-update/

ただし、まだ alpha であることと、 semver に従っていないといけないようです。
これだと master branch が update されるたびに image をビルドして sha でタグを付与するみたいな運用は難しそうです。

Skaffold だとマニフェストの image tag を自動で書き換えてくれる機能があります。
加えて [skaffold render](https://skaffold.dev/docs/references/cli/#skaffold-render) コマンドを使うと manifest の apply はせずにファイルへの出力だけやってくれます。
出力された manifest を Git リポジトリに commit, push すれば GitOps が実現できそうです。

## How

リポジトリを 2 つ用意します。

* app: アプリケーションのコードとマニフェストを管理するリポジトリ
* manifest: GitOps が連携するマニフェストを管理するリポジトリ

app は Monorepo になっているとします。ディレクトリ構成は次のような感じをイメージしています。

```
services/
  foo/
    skaffold.yaml
    Dockerfile
    kubernetes/
      base/
        kustomization.yaml
        deployment.yaml
      overlays/
        develop/
          kustomization.yaml
        production/
          kustomization.yaml
```

skaffold.yaml

```yaml
---
apiVersion: skaffold/v2beta10
kind: Config
build:
  tagPolicy:
    gitCommit:
      prefix: develop-
  artifacts:
  - image: foo
deploy:
  kustomize:
    paths:
    - kubernetes/overlays/develop
profiles:
- name: production
  build:
    tagPolicy:
      gitCommit:
        prefix: production-
  deploy:
    kustomize:
      paths:
      - kubernetes/overlays/production
```

[profile](https://skaffold.dev/docs/environment/profiles/) によって develop と production を区別しています。

manifest では tag を指定しないようにします。

```yaml
    spec:
      containers:
      - name: foo
        image: foo
```

`skaffold render` で manifest を生成します。

```
$ skaffold render \
  -p production \
  --default-repo xxx.dkr.ecr.ap-northeast-1.amazonaws.com \
  --offline=true \
  --loud=true \
  --output manifest.yaml
```

`--loud=true` をつけないとなにも出力しないのでなにが起こってるのかわかりません。

生成されたマニフェストをみると tag が自動で付与されています。

```yaml
      - image: xxx.dkr.ecr.ap-northeast-1.amazonaws.com/foo:production-e3a42e0@sha256:7032af912c511ab0c8353c28604461d8960833144953fb50853f087db55ffdd0
```

生成した manifest を `manifest` リポジトリに commit, push します。
manifest リポジトリを checkout してきて git コマンドでやることもできますが、 [ghcp](https://github.com/int128/ghcp) を使うとコマンド1つでできるので便利です。

manifest リポジトリは対象のサービス及び環境ごとにブランチを分けることにします。
そうしたほうが push の際に失敗しにくいと思います(多分。分からないけど)。

```
$ ghcp commit -u suzuki-shunsuke -r manifest -b "foo/production" -m "message" manifest.yaml
```

message は実際にはもっと詳細なメッセージにすべきでしょう。 CI で実行することになると思うので、 build URL を含めたりすると良いでしょう。

こうすると `foo/production` ブランチに manifest.yaml が push されます。
あとは ArgoCD や FluxCD のような GitOps ツール で foo/production の manifest.yaml をデプロイすればよいはずです。

```yaml
apiVersion: argoproj.io/v1alpha1
kind: Application
metadata:
  name: foo
  namespace: argocd
spec:
  source:
    repoURL: https://github.com/suzuki-shunsuke/manifest.git
    targetRevision: foo/production
    path: manifest.yaml
  destination:
    server: https://kubernetes.default.svc
    namespace: production
```

## さいごに

以上、 Skaffold を使っていい感じに tag を書き換えて GitOps する仕組みを考えてみました。
Skaffold 使うと Docker image の build, push といった一連の流れも全部やってくれるので楽で良いなと感じました。

GitOps じゃなくても CIOps でも Skaffold でデプロイすると便利そうだなと思いました。
その場合は `skaffold render` ではなく、 [skaffold run](https://skaffold.dev/docs/references/cli/#skaffold-run) になりそうですね。

https://skaffold.dev/docs/workflows/ci-cd/
