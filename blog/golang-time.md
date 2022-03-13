---
title: "Golang での時刻の扱い方を整理する"
date: 2019-08-14T20:28:56+09:00
tags:
- golang
archives: ["2019/08"]
---

今更ながら Golang での時刻の扱い方について改めて整理してみました。

## まとめ

* time.Local は明示的に設定する(基本UTC)
* DB などには 基本UTC で永続化する
* 出力時に必要になったらタイムゾーンを変更する
  * location は出力時に問題になるので出力時に location を明示的に指定する
  * 逆に言うと出力時以外は問題にならないので無理に location を UTC にしなくても良いかもしれない
  * サードパーティ(ex. ORM) に time.Time を渡す場合は location に注意が必要
* 文字列として時刻の入力を受け付ける場合は location を明示的にセットする
* サードパーティが time.Local に依存する場合、 time.Local を明示的に UTC にしたりする必要があるかもしれない
* アプリケーションで利用する location が分かっている場合、location を取得するヘルパー関数を定義する
* `time.LoadLocation` は環境依存なので予め location が分かっているなら使わないほうがよい
* 文字列を time.Time に変換する場合、`time.ParseInLocation` で Location を指定して time.Time に変換後、time.Time.UTC() で UTC に変換する
* time.Time を文字列に変換する場合、time.In で location を変換後、time.Time.Format で文字列に変換する

## グローバルな location

https://golang.org/pkg/time/#Location

> Local represents the system's local time zone.

## location を設定する

https://crieit.net/posts/Go-time-LoadLocation に書いてあるとおり、
`time.LoadLocation` を下手に呼び出すと環境によっては `unknown time zone` エラーが起こるため
次のように time.FixedZone で Location を生成します。

```go
jp := time.FixedZone("Asia/Tokyo", 9*60*60)
```

FixedZone という関数名が紛らわしい気もしますが、新しい Location を生成しているだけで副作用はありません。

ちなみに time.FixedZone に渡す文字列は "foo" みたいな適当な文字列でも動くようです。

https://golang.org/pkg/time/#FixedZone

https://github.com/golang/go/blob/9e277f7d554455e16ba3762541c53e9bfc1d8188/src/time/zoneinfo.go#L263-L308

アプリケーションで利用する location が決まっている場合、次のように location を返すヘルパー関数を用意すると良さそうです。

```go
package location

import (
	"time"
)

var (
	jp *time.Location
)

func init() {
	jp = time.FixedZone("Asia/Tokyo", 9*60*60)
}

func JP() *time.Location {
	return jp
}
```

## 厳密に UTC な Location を取得する

厳密に言うと、`time.UTC` は変更可能なので UTC だとは限りません。
そのため、本来 `time.UTC` はゲッター関数であるべきだったんじゃないかなという気もします。

厳密に UTC な Location を取得するにはヘルパー関数を書くと良さそうです。

```go
package location

import (
	"time"
)

var (
	utc *time.Location
)

func init() {
	utc = time.FixedZone("UTC", 0)
}

func UTC() *time.Location {
	return utc
}
```

## 動作環境に依存しないコードにするために

動作環境によって `time.Local` の値が違うことで結果が変わってしまう場合があります。
それを防ぐために、プログラムの最初に `time.Local` を UTC にするという手もありそうです。

```go
time.Local = location.UTC()
```

ただし、それでもグローバル変数である以上、行儀の悪いサードパーティのライブラリによって変更されるかもしれませんし、
必要な箇所で location を明示的に指定してグローバル変数に依存しないようなコードを書くことを心がけたほうが良い気もします。

## 文字列を time.Time に変換する

* https://golang.org/pkg/time/#Parse
* https://golang.org/pkg/time/#ParseInLocation

> ParseInLocation is like Parse but differs in two important ways.
> First, in the absence of time zone information, Parse interprets a time as UTC;
> ParseInLocation interprets the time as in the given location.
> Second, when given a zone offset or abbreviation, Parse tries to match it against the Local location;
> ParseInLocation uses the given location.

ParseInLocation と Parse の違い

* 文字列に location の情報がない場合、 Parse は UTC として扱う
* zone offset が指定された場合、 Parse は Local location からの offset として扱う
  * ParseInLocation で明示的に Location を指定したほうが良さそう

予め location がわかっている場合 time.ParseInLocation で location を指定して time.Time に変換した後 time.Time.In で UTC にするのが良さそうです。

```go
t, err := time.ParseInLocation("2006-01-02T15:04:05", "2019-08-13T21:30:00", jp)
if err != nil {
	return err
}
t = t.UTC()
```

## time.Time の Location を変更する

https://golang.org/pkg/time/#Time.In

> In returns a copy of t representing the same time instant,
> but with the copy's location information set to loc for display purposes.

time.Time.In は time.Time の Location だけ変更したコピーを返します。

```go
package main

import (
	"fmt"
	"time"
)

func main() {
	time.Local = location.UTC()
	t := time.Now()
	fmt.Println(t) // 2019-08-14 12:08:44.150725 +0000 UTC m=+0.000212031
	t2 := t.In(location.JP())
	fmt.Println(t2) // 2019-08-14 21:08:44.150725 +0900 Asia/Tokyo
}
```

## time.Time を文字列に変換する

https://golang.org/pkg/time/#Time.Format

time.Time.In で location を変更した後 time.Time.Format で文字列に変換するのが良さそうです。

## time.Now の location

Location は `time.Local` になります。

https://golang.org/pkg/time/#Now

## 他のパッケージの location の扱い

### log

log パッケージで出力される時刻のフォーマットと location は log.SetFlags によってある程度変更できます。

デフォルトは 日時を time.Local で出力します。
log.LUTC をセットすることで UTC になります。

* https://golang.org/pkg/log/#SetFlags
* https://golang.org/pkg/log/#pkg-constants

```go
log.SetFlags(log.Flags() | log.LUTC)
```

### logrus

[logrus](https://github.com/Sirupsen/logrus) のログの時刻の location も time.Local なようです。

### robfig/cron 

https://github.com/robfig/cron

> All interpretation and scheduling is done in the machine's local time zone (as provided by the Go time package (http://www.golang.org/pkg/time).

time.Local なようです。

### go-sql-driver/misql

* https://github.com/go-sql-driver/mysql#timetime-support
* https://www.sambaiz.net/article/189/

### gorm

https://github.com/jinzhu/gorm/wiki/How-To-Do-Time
