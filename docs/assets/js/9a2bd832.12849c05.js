"use strict";(self.webpackChunktechblog_szksh_cloud_github_io=self.webpackChunktechblog_szksh_cloud_github_io||[]).push([[1610],{3905:(t,e,n)=>{n.d(e,{Zo:()=>c,kt:()=>k});var o=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function r(t,e){if(null==t)return{};var n,o,a=function(t,e){if(null==t)return{};var n,o,a={},i=Object.keys(t);for(o=0;o<i.length;o++)n=i[o],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(o=0;o<i.length;o++)n=i[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var m=o.createContext({}),p=function(t){var e=o.useContext(m),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},c=function(t){var e=p(t.components);return o.createElement(m.Provider,{value:e},t.children)},g="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return o.createElement(o.Fragment,{},e)}},s=o.forwardRef((function(t,e){var n=t.components,a=t.mdxType,i=t.originalType,m=t.parentName,c=r(t,["components","mdxType","originalType","parentName"]),g=p(n),s=a,k=g["".concat(m,".").concat(s)]||g[s]||u[s]||i;return n?o.createElement(k,l(l({ref:e},c),{},{components:n})):o.createElement(k,l({ref:e},c))}));function k(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=n.length,l=new Array(i);l[0]=s;var r={};for(var m in e)hasOwnProperty.call(e,m)&&(r[m]=e[m]);r.originalType=t,r[g]="string"==typeof t?t:a,l[1]=r;for(var p=2;p<i;p++)l[p]=n[p];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}s.displayName="MDXCreateElement"},8734:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>m,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>r,toc:()=>p});var o=n(7462),a=(n(7294),n(3905));const i={title:"Golang \u3067\u306e\u6642\u523b\u306e\u6271\u3044\u65b9\u3092\u6574\u7406\u3059\u308b",date:new Date("2019-08-14T11:28:56.000Z"),tags:["golang"],authors:["suzuki-shunsuke"]},l=void 0,r={permalink:"/golang-time",source:"@site/blog/golang-time.md",title:"Golang \u3067\u306e\u6642\u523b\u306e\u6271\u3044\u65b9\u3092\u6574\u7406\u3059\u308b",description:"\u4eca\u66f4\u306a\u304c\u3089 Golang \u3067\u306e\u6642\u523b\u306e\u6271\u3044\u65b9\u306b\u3064\u3044\u3066\u6539\u3081\u3066\u6574\u7406\u3057\u3066\u307f\u307e\u3057\u305f\u3002",date:"2019-08-14T11:28:56.000Z",formattedDate:"August 14, 2019",tags:[{label:"golang",permalink:"/tags/golang"}],readingTime:6.665,truncated:!1,authors:[{name:"Shunsuke Suzuki",title:"Platform Engineer / OSS Developer / Go / Terraform",url:"https://github.com/suzuki-shunsuke",imageURL:"https://github.com/suzuki-shunsuke.png",key:"suzuki-shunsuke"}],frontMatter:{title:"Golang \u3067\u306e\u6642\u523b\u306e\u6271\u3044\u65b9\u3092\u6574\u7406\u3059\u308b",date:"2019-08-14T11:28:56.000Z",tags:["golang"],authors:["suzuki-shunsuke"]},prevItem:{title:"Drone v1 \u3067 gRPC \u304c\u4f7f\u308f\u308c\u306a\u304f\u306a\u3063\u305f",permalink:"/drone-v1-deprecate-grpc"},nextItem:{title:"Drone v1 \u3067\u306f Jsonnet \u304c extension \u306a\u3057\u3067\u4f7f\u3048\u308b",permalink:"/drone-jsonnet"}},m={authorsImageUrls:[void 0]},p=[{value:"\u307e\u3068\u3081",id:"\u307e\u3068\u3081",level:2},{value:"\u30b0\u30ed\u30fc\u30d0\u30eb\u306a location",id:"\u30b0\u30ed\u30fc\u30d0\u30eb\u306a-location",level:2},{value:"location \u3092\u8a2d\u5b9a\u3059\u308b",id:"location-\u3092\u8a2d\u5b9a\u3059\u308b",level:2},{value:"\u53b3\u5bc6\u306b UTC \u306a Location \u3092\u53d6\u5f97\u3059\u308b",id:"\u53b3\u5bc6\u306b-utc-\u306a-location-\u3092\u53d6\u5f97\u3059\u308b",level:2},{value:"\u52d5\u4f5c\u74b0\u5883\u306b\u4f9d\u5b58\u3057\u306a\u3044\u30b3\u30fc\u30c9\u306b\u3059\u308b\u305f\u3081\u306b",id:"\u52d5\u4f5c\u74b0\u5883\u306b\u4f9d\u5b58\u3057\u306a\u3044\u30b3\u30fc\u30c9\u306b\u3059\u308b\u305f\u3081\u306b",level:2},{value:"\u6587\u5b57\u5217\u3092 time.Time \u306b\u5909\u63db\u3059\u308b",id:"\u6587\u5b57\u5217\u3092-timetime-\u306b\u5909\u63db\u3059\u308b",level:2},{value:"time.Time \u306e Location \u3092\u5909\u66f4\u3059\u308b",id:"timetime-\u306e-location-\u3092\u5909\u66f4\u3059\u308b",level:2},{value:"time.Time \u3092\u6587\u5b57\u5217\u306b\u5909\u63db\u3059\u308b",id:"timetime-\u3092\u6587\u5b57\u5217\u306b\u5909\u63db\u3059\u308b",level:2},{value:"time.Now \u306e location",id:"timenow-\u306e-location",level:2},{value:"\u4ed6\u306e\u30d1\u30c3\u30b1\u30fc\u30b8\u306e location \u306e\u6271\u3044",id:"\u4ed6\u306e\u30d1\u30c3\u30b1\u30fc\u30b8\u306e-location-\u306e\u6271\u3044",level:2},{value:"log",id:"log",level:3},{value:"logrus",id:"logrus",level:3},{value:"robfig/cron",id:"robfigcron",level:3},{value:"go-sql-driver/misql",id:"go-sql-drivermisql",level:3},{value:"gorm",id:"gorm",level:3}],c={toc:p},g="wrapper";function u(t){let{components:e,...n}=t;return(0,a.kt)(g,(0,o.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u4eca\u66f4\u306a\u304c\u3089 Golang \u3067\u306e\u6642\u523b\u306e\u6271\u3044\u65b9\u306b\u3064\u3044\u3066\u6539\u3081\u3066\u6574\u7406\u3057\u3066\u307f\u307e\u3057\u305f\u3002"),(0,a.kt)("h2",{id:"\u307e\u3068\u3081"},"\u307e\u3068\u3081"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"time.Local \u306f\u660e\u793a\u7684\u306b\u8a2d\u5b9a\u3059\u308b(\u57fa\u672cUTC)"),(0,a.kt)("li",{parentName:"ul"},"DB \u306a\u3069\u306b\u306f \u57fa\u672cUTC \u3067\u6c38\u7d9a\u5316\u3059\u308b"),(0,a.kt)("li",{parentName:"ul"},"\u51fa\u529b\u6642\u306b\u5fc5\u8981\u306b\u306a\u3063\u305f\u3089\u30bf\u30a4\u30e0\u30be\u30fc\u30f3\u3092\u5909\u66f4\u3059\u308b",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"location \u306f\u51fa\u529b\u6642\u306b\u554f\u984c\u306b\u306a\u308b\u306e\u3067\u51fa\u529b\u6642\u306b location \u3092\u660e\u793a\u7684\u306b\u6307\u5b9a\u3059\u308b"),(0,a.kt)("li",{parentName:"ul"},"\u9006\u306b\u8a00\u3046\u3068\u51fa\u529b\u6642\u4ee5\u5916\u306f\u554f\u984c\u306b\u306a\u3089\u306a\u3044\u306e\u3067\u7121\u7406\u306b location \u3092 UTC \u306b\u3057\u306a\u304f\u3066\u3082\u826f\u3044\u304b\u3082\u3057\u308c\u306a\u3044"),(0,a.kt)("li",{parentName:"ul"},"\u30b5\u30fc\u30c9\u30d1\u30fc\u30c6\u30a3(ex. ORM) \u306b time.Time \u3092\u6e21\u3059\u5834\u5408\u306f location \u306b\u6ce8\u610f\u304c\u5fc5\u8981"))),(0,a.kt)("li",{parentName:"ul"},"\u6587\u5b57\u5217\u3068\u3057\u3066\u6642\u523b\u306e\u5165\u529b\u3092\u53d7\u3051\u4ed8\u3051\u308b\u5834\u5408\u306f location \u3092\u660e\u793a\u7684\u306b\u30bb\u30c3\u30c8\u3059\u308b"),(0,a.kt)("li",{parentName:"ul"},"\u30b5\u30fc\u30c9\u30d1\u30fc\u30c6\u30a3\u304c time.Local \u306b\u4f9d\u5b58\u3059\u308b\u5834\u5408\u3001 time.Local \u3092\u660e\u793a\u7684\u306b UTC \u306b\u3057\u305f\u308a\u3059\u308b\u5fc5\u8981\u304c\u3042\u308b\u304b\u3082\u3057\u308c\u306a\u3044"),(0,a.kt)("li",{parentName:"ul"},"\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3067\u5229\u7528\u3059\u308b location \u304c\u5206\u304b\u3063\u3066\u3044\u308b\u5834\u5408\u3001location \u3092\u53d6\u5f97\u3059\u308b\u30d8\u30eb\u30d1\u30fc\u95a2\u6570\u3092\u5b9a\u7fa9\u3059\u308b"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"time.LoadLocation")," \u306f\u74b0\u5883\u4f9d\u5b58\u306a\u306e\u3067\u4e88\u3081 location \u304c\u5206\u304b\u3063\u3066\u3044\u308b\u306a\u3089\u4f7f\u308f\u306a\u3044\u307b\u3046\u304c\u3088\u3044"),(0,a.kt)("li",{parentName:"ul"},"\u6587\u5b57\u5217\u3092 time.Time \u306b\u5909\u63db\u3059\u308b\u5834\u5408\u3001",(0,a.kt)("inlineCode",{parentName:"li"},"time.ParseInLocation")," \u3067 Location \u3092\u6307\u5b9a\u3057\u3066 time.Time \u306b\u5909\u63db\u5f8c\u3001time.Time.UTC() \u3067 UTC \u306b\u5909\u63db\u3059\u308b"),(0,a.kt)("li",{parentName:"ul"},"time.Time \u3092\u6587\u5b57\u5217\u306b\u5909\u63db\u3059\u308b\u5834\u5408\u3001time.In \u3067 location \u3092\u5909\u63db\u5f8c\u3001time.Time.Format \u3067\u6587\u5b57\u5217\u306b\u5909\u63db\u3059\u308b")),(0,a.kt)("h2",{id:"\u30b0\u30ed\u30fc\u30d0\u30eb\u306a-location"},"\u30b0\u30ed\u30fc\u30d0\u30eb\u306a location"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://golang.org/pkg/time/#Location"},"https://golang.org/pkg/time/#Location")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Local represents the system's local time zone.")),(0,a.kt)("h2",{id:"location-\u3092\u8a2d\u5b9a\u3059\u308b"},"location \u3092\u8a2d\u5b9a\u3059\u308b"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://crieit.net/posts/Go-time-LoadLocation"},"https://crieit.net/posts/Go-time-LoadLocation")," \u306b\u66f8\u3044\u3066\u3042\u308b\u3068\u304a\u308a\u3001\n",(0,a.kt)("inlineCode",{parentName:"p"},"time.LoadLocation")," \u3092\u4e0b\u624b\u306b\u547c\u3073\u51fa\u3059\u3068\u74b0\u5883\u306b\u3088\u3063\u3066\u306f ",(0,a.kt)("inlineCode",{parentName:"p"},"unknown time zone")," \u30a8\u30e9\u30fc\u304c\u8d77\u3053\u308b\u305f\u3081\n\u6b21\u306e\u3088\u3046\u306b time.FixedZone \u3067 Location \u3092\u751f\u6210\u3057\u307e\u3059\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'jp := time.FixedZone("Asia/Tokyo", 9*60*60)\n')),(0,a.kt)("p",null,"FixedZone \u3068\u3044\u3046\u95a2\u6570\u540d\u304c\u7d1b\u3089\u308f\u3057\u3044\u6c17\u3082\u3057\u307e\u3059\u304c\u3001\u65b0\u3057\u3044 Location \u3092\u751f\u6210\u3057\u3066\u3044\u308b\u3060\u3051\u3067\u526f\u4f5c\u7528\u306f\u3042\u308a\u307e\u305b\u3093\u3002"),(0,a.kt)("p",null,'\u3061\u306a\u307f\u306b time.FixedZone \u306b\u6e21\u3059\u6587\u5b57\u5217\u306f "foo" \u307f\u305f\u3044\u306a\u9069\u5f53\u306a\u6587\u5b57\u5217\u3067\u3082\u52d5\u304f\u3088\u3046\u3067\u3059\u3002'),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://golang.org/pkg/time/#FixedZone"},"https://golang.org/pkg/time/#FixedZone")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/golang/go/blob/9e277f7d554455e16ba3762541c53e9bfc1d8188/src/time/zoneinfo.go#L263-L308"},"https://github.com/golang/go/blob/9e277f7d554455e16ba3762541c53e9bfc1d8188/src/time/zoneinfo.go#L263-L308")),(0,a.kt)("p",null,"\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3067\u5229\u7528\u3059\u308b location \u304c\u6c7a\u307e\u3063\u3066\u3044\u308b\u5834\u5408\u3001\u6b21\u306e\u3088\u3046\u306b location \u3092\u8fd4\u3059\u30d8\u30eb\u30d1\u30fc\u95a2\u6570\u3092\u7528\u610f\u3059\u308b\u3068\u826f\u3055\u305d\u3046\u3067\u3059\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'package location\n\nimport (\n    "time"\n)\n\nvar (\n    jp *time.Location\n)\n\nfunc init() {\n    jp = time.FixedZone("Asia/Tokyo", 9*60*60)\n}\n\nfunc JP() *time.Location {\n    return jp\n}\n')),(0,a.kt)("h2",{id:"\u53b3\u5bc6\u306b-utc-\u306a-location-\u3092\u53d6\u5f97\u3059\u308b"},"\u53b3\u5bc6\u306b UTC \u306a Location \u3092\u53d6\u5f97\u3059\u308b"),(0,a.kt)("p",null,"\u53b3\u5bc6\u306b\u8a00\u3046\u3068\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"time.UTC")," \u306f\u5909\u66f4\u53ef\u80fd\u306a\u306e\u3067 UTC \u3060\u3068\u306f\u9650\u308a\u307e\u305b\u3093\u3002\n\u305d\u306e\u305f\u3081\u3001\u672c\u6765 ",(0,a.kt)("inlineCode",{parentName:"p"},"time.UTC")," \u306f\u30b2\u30c3\u30bf\u30fc\u95a2\u6570\u3067\u3042\u308b\u3079\u304d\u3060\u3063\u305f\u3093\u3058\u3083\u306a\u3044\u304b\u306a\u3068\u3044\u3046\u6c17\u3082\u3057\u307e\u3059\u3002"),(0,a.kt)("p",null,"\u53b3\u5bc6\u306b UTC \u306a Location \u3092\u53d6\u5f97\u3059\u308b\u306b\u306f\u30d8\u30eb\u30d1\u30fc\u95a2\u6570\u3092\u66f8\u304f\u3068\u826f\u3055\u305d\u3046\u3067\u3059\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'package location\n\nimport (\n    "time"\n)\n\nvar (\n    utc *time.Location\n)\n\nfunc init() {\n    utc = time.FixedZone("UTC", 0)\n}\n\nfunc UTC() *time.Location {\n    return utc\n}\n')),(0,a.kt)("h2",{id:"\u52d5\u4f5c\u74b0\u5883\u306b\u4f9d\u5b58\u3057\u306a\u3044\u30b3\u30fc\u30c9\u306b\u3059\u308b\u305f\u3081\u306b"},"\u52d5\u4f5c\u74b0\u5883\u306b\u4f9d\u5b58\u3057\u306a\u3044\u30b3\u30fc\u30c9\u306b\u3059\u308b\u305f\u3081\u306b"),(0,a.kt)("p",null,"\u52d5\u4f5c\u74b0\u5883\u306b\u3088\u3063\u3066 ",(0,a.kt)("inlineCode",{parentName:"p"},"time.Local")," \u306e\u5024\u304c\u9055\u3046\u3053\u3068\u3067\u7d50\u679c\u304c\u5909\u308f\u3063\u3066\u3057\u307e\u3046\u5834\u5408\u304c\u3042\u308a\u307e\u3059\u3002\n\u305d\u308c\u3092\u9632\u3050\u305f\u3081\u306b\u3001\u30d7\u30ed\u30b0\u30e9\u30e0\u306e\u6700\u521d\u306b ",(0,a.kt)("inlineCode",{parentName:"p"},"time.Local")," \u3092 UTC \u306b\u3059\u308b\u3068\u3044\u3046\u624b\u3082\u3042\u308a\u305d\u3046\u3067\u3059\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"time.Local = location.UTC()\n")),(0,a.kt)("p",null,"\u305f\u3060\u3057\u3001\u305d\u308c\u3067\u3082\u30b0\u30ed\u30fc\u30d0\u30eb\u5909\u6570\u3067\u3042\u308b\u4ee5\u4e0a\u3001\u884c\u5100\u306e\u60aa\u3044\u30b5\u30fc\u30c9\u30d1\u30fc\u30c6\u30a3\u306e\u30e9\u30a4\u30d6\u30e9\u30ea\u306b\u3088\u3063\u3066\u5909\u66f4\u3055\u308c\u308b\u304b\u3082\u3057\u308c\u307e\u305b\u3093\u3057\u3001\n\u5fc5\u8981\u306a\u7b87\u6240\u3067 location \u3092\u660e\u793a\u7684\u306b\u6307\u5b9a\u3057\u3066\u30b0\u30ed\u30fc\u30d0\u30eb\u5909\u6570\u306b\u4f9d\u5b58\u3057\u306a\u3044\u3088\u3046\u306a\u30b3\u30fc\u30c9\u3092\u66f8\u304f\u3053\u3068\u3092\u5fc3\u304c\u3051\u305f\u307b\u3046\u304c\u826f\u3044\u6c17\u3082\u3057\u307e\u3059\u3002"),(0,a.kt)("h2",{id:"\u6587\u5b57\u5217\u3092-timetime-\u306b\u5909\u63db\u3059\u308b"},"\u6587\u5b57\u5217\u3092 time.Time \u306b\u5909\u63db\u3059\u308b"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://golang.org/pkg/time/#Parse"},"https://golang.org/pkg/time/#Parse")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://golang.org/pkg/time/#ParseInLocation"},"https://golang.org/pkg/time/#ParseInLocation"))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"ParseInLocation is like Parse but differs in two important ways.\nFirst, in the absence of time zone information, Parse interprets a time as UTC;\nParseInLocation interprets the time as in the given location.\nSecond, when given a zone offset or abbreviation, Parse tries to match it against the Local location;\nParseInLocation uses the given location.")),(0,a.kt)("p",null,"ParseInLocation \u3068 Parse \u306e\u9055\u3044"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u6587\u5b57\u5217\u306b location \u306e\u60c5\u5831\u304c\u306a\u3044\u5834\u5408\u3001 Parse \u306f UTC \u3068\u3057\u3066\u6271\u3046"),(0,a.kt)("li",{parentName:"ul"},"zone offset \u304c\u6307\u5b9a\u3055\u308c\u305f\u5834\u5408\u3001 Parse \u306f Local location \u304b\u3089\u306e offset \u3068\u3057\u3066\u6271\u3046",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"ParseInLocation \u3067\u660e\u793a\u7684\u306b Location \u3092\u6307\u5b9a\u3057\u305f\u307b\u3046\u304c\u826f\u3055\u305d\u3046")))),(0,a.kt)("p",null,"\u4e88\u3081 location \u304c\u308f\u304b\u3063\u3066\u3044\u308b\u5834\u5408 time.ParseInLocation \u3067 location \u3092\u6307\u5b9a\u3057\u3066 time.Time \u306b\u5909\u63db\u3057\u305f\u5f8c time.Time.In \u3067 UTC \u306b\u3059\u308b\u306e\u304c\u826f\u3055\u305d\u3046\u3067\u3059\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'t, err := time.ParseInLocation("2006-01-02T15:04:05", "2019-08-13T21:30:00", jp)\nif err != nil {\n    return err\n}\nt = t.UTC()\n')),(0,a.kt)("h2",{id:"timetime-\u306e-location-\u3092\u5909\u66f4\u3059\u308b"},"time.Time \u306e Location \u3092\u5909\u66f4\u3059\u308b"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://golang.org/pkg/time/#Time.In"},"https://golang.org/pkg/time/#Time.In")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"In returns a copy of t representing the same time instant,\nbut with the copy's location information set to loc for display purposes.")),(0,a.kt)("p",null,"time.Time.In \u306f time.Time \u306e Location \u3060\u3051\u5909\u66f4\u3057\u305f\u30b3\u30d4\u30fc\u3092\u8fd4\u3057\u307e\u3059\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n    "fmt"\n    "time"\n)\n\nfunc main() {\n    time.Local = location.UTC()\n    t := time.Now()\n    fmt.Println(t) // 2019-08-14 12:08:44.150725 +0000 UTC m=+0.000212031\n    t2 := t.In(location.JP())\n    fmt.Println(t2) // 2019-08-14 21:08:44.150725 +0900 Asia/Tokyo\n}\n')),(0,a.kt)("h2",{id:"timetime-\u3092\u6587\u5b57\u5217\u306b\u5909\u63db\u3059\u308b"},"time.Time \u3092\u6587\u5b57\u5217\u306b\u5909\u63db\u3059\u308b"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://golang.org/pkg/time/#Time.Format"},"https://golang.org/pkg/time/#Time.Format")),(0,a.kt)("p",null,"time.Time.In \u3067 location \u3092\u5909\u66f4\u3057\u305f\u5f8c time.Time.Format \u3067\u6587\u5b57\u5217\u306b\u5909\u63db\u3059\u308b\u306e\u304c\u826f\u3055\u305d\u3046\u3067\u3059\u3002"),(0,a.kt)("h2",{id:"timenow-\u306e-location"},"time.Now \u306e location"),(0,a.kt)("p",null,"Location \u306f ",(0,a.kt)("inlineCode",{parentName:"p"},"time.Local")," \u306b\u306a\u308a\u307e\u3059\u3002"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://golang.org/pkg/time/#Now"},"https://golang.org/pkg/time/#Now")),(0,a.kt)("h2",{id:"\u4ed6\u306e\u30d1\u30c3\u30b1\u30fc\u30b8\u306e-location-\u306e\u6271\u3044"},"\u4ed6\u306e\u30d1\u30c3\u30b1\u30fc\u30b8\u306e location \u306e\u6271\u3044"),(0,a.kt)("h3",{id:"log"},"log"),(0,a.kt)("p",null,"log \u30d1\u30c3\u30b1\u30fc\u30b8\u3067\u51fa\u529b\u3055\u308c\u308b\u6642\u523b\u306e\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u3068 location \u306f log.SetFlags \u306b\u3088\u3063\u3066\u3042\u308b\u7a0b\u5ea6\u5909\u66f4\u3067\u304d\u307e\u3059\u3002"),(0,a.kt)("p",null,"\u30c7\u30d5\u30a9\u30eb\u30c8\u306f \u65e5\u6642\u3092 time.Local \u3067\u51fa\u529b\u3057\u307e\u3059\u3002\nlog.LUTC \u3092\u30bb\u30c3\u30c8\u3059\u308b\u3053\u3068\u3067 UTC \u306b\u306a\u308a\u307e\u3059\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://golang.org/pkg/log/#SetFlags"},"https://golang.org/pkg/log/#SetFlags")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://golang.org/pkg/log/#pkg-constants"},"https://golang.org/pkg/log/#pkg-constants"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"log.SetFlags(log.Flags() | log.LUTC)\n")),(0,a.kt)("h3",{id:"logrus"},"logrus"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/Sirupsen/logrus"},"logrus")," \u306e\u30ed\u30b0\u306e\u6642\u523b\u306e location \u3082 time.Local \u306a\u3088\u3046\u3067\u3059\u3002"),(0,a.kt)("h3",{id:"robfigcron"},"robfig/cron"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/robfig/cron"},"https://github.com/robfig/cron")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"All interpretation and scheduling is done in the machine's local time zone (as provided by the Go time package (",(0,a.kt)("a",{parentName:"p",href:"http://www.golang.org/pkg/time"},"http://www.golang.org/pkg/time"),").")),(0,a.kt)("p",null,"time.Local \u306a\u3088\u3046\u3067\u3059\u3002"),(0,a.kt)("h3",{id:"go-sql-drivermisql"},"go-sql-driver/misql"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/go-sql-driver/mysql#timetime-support"},"https://github.com/go-sql-driver/mysql#timetime-support")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.sambaiz.net/article/189/"},"https://www.sambaiz.net/article/189/"))),(0,a.kt)("h3",{id:"gorm"},"gorm"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/jinzhu/gorm/wiki/How-To-Do-Time"},"https://github.com/jinzhu/gorm/wiki/How-To-Do-Time")))}u.isMDXComponent=!0}}]);