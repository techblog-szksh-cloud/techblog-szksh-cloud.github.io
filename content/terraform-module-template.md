---
title: "Terraform Module の Template という使い方"
date: 2021-04-03T11:04:25+09:00
tags:
- terraform
---

Terraform Module の使い方として Terraform Module のテンプレートをコピペして使うというアプローチを紹介します。

Terraform の設定ファイル(以下 tfファイル) を書く際、毎回一から書くのは大変です。
多くの場合、既存のコードを再利用したほうが楽でしょう。

Terraform のコードの再利用の仕組みとして、 Module があります。
Module は勿論便利なのですが、使い方には注意が必要で、「安易に Module 化するな。使うな」というふうな考え方もあるでしょう。
自分も基本的に同意見で、 Module を共用するようになると Module への変更がしづらくなったり、パラメータがどんどん増えて複雑になったりします。

例えば次のように共用の local Module を作成するアプローチがあります。

```
modules/
  lambda-base/
    README.md
    main.tf
    variables.tf
    outputs.tf
services/
  foo/
    staging/
      main.tf # リポジトリ直下の modules/lambda-base を参照
    production/
      main.tf # リポジトリ直下の modules/lambda-base を参照
```

こうすると modules 配下の Module を変更した際にその Module を使っているすべてのサービスに影響が出てしまい、
サービスのオーナーが様々だったり、曖昧だったり不在だったりすると変更が難しいですし、どんどん Module が複雑になったりします。

Module を別のリポジトリでバージョニングして管理し、バージョンを指定するようにするというやり方もありますが、
結構複雑というか考えることが多いアプローチだとは思います。

Terraform にそこまで詳しくない developer にも書いてもらうとなると、シンプルなアプローチにするのが望ましいでしょう(当然これは組織によりますが)。

そこで Module のテンプレートを用意し、 Module を使いたくなったらそれをコピペして使うというアプローチがあります。
例えば `lambda-base` という Module の Template を foo というサービスの staging 環境と production 環境で使う場合、次のような感じになります。

```
services/
  foo/
    staging/
      modules/
        lambda-base/ # templates からコピー
      main.tf
    production/
      modules/
        lambda-base/ # templates からコピー
      main.tf
templates/ # Module のテンプレートを置いておく
  lambda-base/ # 中身は普通の Module
    README.md
    main.tf
    variables.tf
    outputs.tf
```

こうすると 2 つの Module はそれぞれ独立しているため、変更がしやすくなりますし、シンプルに保つことが出来ます。

## テンプレートエンジンとかは使わない

Module の Template をコピペする際に、コードに変数を埋め込んでコピペする際に置換したりとか、高度なテンプレートエンジンを使って動的に内容を変えたりといったことも考えられますが、
個人的には複雑度が上がるのでやらないほうが良いかなと思っています。
変数であれば Module の input variable として渡せばよいし、テンプレートエンジン使いたいのであれば、テンプレートを分けたり、 HCL で表現したりすればよいのではという気がします。

## 考えられるデメリット

通常の Module と比べて、デメリットとしては以下のようなことが考えられます。

* コード量が増える(DRY じゃない)
* Module を一箇所で管理できない
  * 一括して変更を加えることが出来ない
  * 設定を強制することができない

しかし、個人的にはこれは大した問題じゃないと思っています。

コードが増えることに関しては、それはそうとしか言いようがありません。
一括して変更を加えることが出来ないのは、トレードオフだと思っていて、むしろ対処のサービスを限定しながら Module に変更を加えられるというメリットのほうが大きいと思っています。
設定を強制することができないのは、たしかにそれはあると思っていて、コピペした Module に一括して変更を加えたり Conftest などでテストする仕組みが必要かなと思います。
