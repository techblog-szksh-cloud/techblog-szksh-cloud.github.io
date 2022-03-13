---
title: "Goの設定管理で viper の代わりに confita を使う"
date: 2019-02-16T18:38:45+09:00
draft: false
tags:
- golang
archives: ["2019/02"]
---

Golang の設定管理のライブラリといえば [viper](https://github.com/spf13/viper) が有名ですが、
[confita](https://github.com/heetch/confita) も良さそうだったので紹介したいと思います。

confita の機能としては以下のようなものがあります。

* 構造体に設定をマッピング
* flag や環境変数、設定ファイルに対応
* 複数の設定ファイルに対応

構造体に設定をマッピングすることで、https://github.com/go-playground/validator のようなライブラリを使って設定のバリデーションが出来ます。

また viper は [v1.3.1](https://github.com/spf13/viper/tree/v1.3.1#reading-config-files) の時点で複数の設定ファイルを扱いにくいです。

> Viper can search multiple paths, but currently a single Viper instance only supports a single configuration file.

k8s で ConfigMap と Secret を設定ファイルとして扱う場合、複数のファイルを扱えないと不便です。
その点 confita は複数の設定ファイルを問題なく扱えます。

以下はフラグで指定した複数の設定ファイルから設定を読み込む簡単なサンプルです。

```go
import (
	"context"

	"gopkg.in/go-playground/validator.v9"

	"github.com/heetch/confita"
	"github.com/heetch/confita/backend"
	"github.com/heetch/confita/backend/file"
	flag "github.com/spf13/pflag"
)

func loadConfig(ctx context.Context) (Config, error) {
	cps := flag.StringSliceP("config", "c", nil, "configuration file path")
	flag.Parse()
	fileBackends := []backend.Backend{}
	for _, p := range *cps {
		fileBackends = append(fileBackends, file.NewBackend(p))
	}

	loader := confita.NewLoader(fileBackends...)
	cfg := Config{LogLevel: "info"}	// default value
	if err := loader.Load(ctx, &cfg); err != nil {
		return cfg, err
	}
	validate := validator.New()
	if err := validate.Struct(cfg); err != nil {
		return cfg, err
	}
	return cfg, nil
}
```

以上、簡単な紹介でした。
viper 以外のライブラリを探している人は試してみてください。
