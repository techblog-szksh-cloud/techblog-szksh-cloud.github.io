"use strict";(self.webpackChunktechblog_szksh_cloud_github_io=self.webpackChunktechblog_szksh_cloud_github_io||[]).push([[7618],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>k});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=n.createContext({}),u=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},c=function(e){var r=u(e.components);return n.createElement(p.Provider,{value:r},e.children)},m="mdxType",s={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=u(t),f=a,k=m["".concat(p,".").concat(f)]||m[f]||s[f]||o;return t?n.createElement(k,i(i({ref:r},c),{},{components:t})):n.createElement(k,i({ref:r},c))}));function k(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=f;var l={};for(var p in r)hasOwnProperty.call(r,p)&&(l[p]=r[p]);l.originalType=e,l[m]="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=t[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},921:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var n=t(7462),a=(t(7294),t(3905));const o={title:"terraform init \u3067 lock \u30d5\u30a1\u30a4\u30eb\u304c\u66f4\u65b0\u3055\u308c\u308b\u554f\u984c\u306e\u5bfe\u5fdc",date:new Date("2021-04-24T12:57:27.000Z"),archives:["2021/04"],tags:["terraform"],authors:["suzuki-shunsuke"]},i=void 0,l={permalink:"/terraform-providers-lock",source:"@site/blog/terraform-providers-lock.md",title:"terraform init \u3067 lock \u30d5\u30a1\u30a4\u30eb\u304c\u66f4\u65b0\u3055\u308c\u308b\u554f\u984c\u306e\u5bfe\u5fdc",description:"Terraform v0.14 \u3067 local \u3067 terraform init \u3059\u308b\u3068 lock \u30d5\u30a1\u30a4\u30eb\u304c\u66f4\u65b0\u3055\u308c\u3066\u3057\u307e\u3046\u554f\u984c\u306b\u5bfe\u5fdc\u3057\u307e\u3057\u305f\u3002",date:"2021-04-24T12:57:27.000Z",formattedDate:"April 24, 2021",tags:[{label:"terraform",permalink:"/tags/terraform"}],readingTime:3.45,truncated:!1,authors:[{name:"Shunsuke Suzuki",title:"Platform Engineer / OSS Developer / Go / Terraform",url:"https://github.com/suzuki-shunsuke",imageURL:"https://github.com/suzuki-shunsuke.png",key:"suzuki-shunsuke"}],frontMatter:{title:"terraform init \u3067 lock \u30d5\u30a1\u30a4\u30eb\u304c\u66f4\u65b0\u3055\u308c\u308b\u554f\u984c\u306e\u5bfe\u5fdc",date:"2021-04-24T12:57:27.000Z",archives:["2021/04"],tags:["terraform"],authors:["suzuki-shunsuke"]},prevItem:{title:"PR \u3067\u5909\u66f4\u3055\u308c\u305f\u30d5\u30a1\u30a4\u30eb\u3084 PR Label \u306b\u5fdc\u3058\u3066 matrix build \u3092\u5b9f\u884c\u3059\u308b Github Actions \u306e Workflow \u306e\u30b5\u30f3\u30d7\u30eb\u3092\u66f8\u3044\u3066\u307f\u305f",permalink:"/example-github-actions-dynamic-matrix"},nextItem:{title:"Terraform Module \u306e Template \u3068\u3044\u3046\u4f7f\u3044\u65b9",permalink:"/terraform-module-template"}},p={authorsImageUrls:[void 0]},u=[],c={toc:u};function m(e){let{components:r,...t}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Terraform v0.14 \u3067 local \u3067 ",(0,a.kt)("inlineCode",{parentName:"p"},"terraform init")," \u3059\u308b\u3068 lock \u30d5\u30a1\u30a4\u30eb\u304c\u66f4\u65b0\u3055\u308c\u3066\u3057\u307e\u3046\u554f\u984c\u306b\u5bfe\u5fdc\u3057\u307e\u3057\u305f\u3002"),(0,a.kt)("p",null,"\u7d50\u8ad6\u3092\u6700\u521d\u306b\u8a00\u3046\u3068\u3001 ",(0,a.kt)("a",{parentName:"p",href:"https://blog.studysapuri.jp/entry/2021/03/12/080000"},"100 \u4ee5\u4e0a\u306e Terraform \u74b0\u5883\u3092\u3044\u3044\u611f\u3058\u306b v0.14 \u306b upgrade \u3057\u305f\u65b9\u6cd5"),"\u3067\u7d39\u4ecb\u3057\u3066\u3044\u308b\u65b9\u6cd5\u3067 Renovate \u3067 Terraform Provider \u3092 update \u3059\u308b\u969b\u306b ",(0,a.kt)("inlineCode",{parentName:"p"},"terraform init -upgrade")," \u3092\u5b9f\u884c\u3057\u3066 lock \u30d5\u30a1\u30a4\u30eb\u3092\u66f4\u65b0\u3057\u3066\u30b3\u30df\u30c3\u30c8\u30fb\u30d7\u30c3\u30b7\u30e5\u3057\u3066\u3044\u308b\u306e\u3067\u3059\u304c\u3001\n\u305d\u306e\u969b\u306b ",(0,a.kt)("inlineCode",{parentName:"p"},"terraform providers lock -platform=darwin_amd64")," \u3092\u5b9f\u884c\u3059\u308b\u3088\u3046\u306b\u3057\u307e\u3057\u305f\u3002"),(0,a.kt)("p",null,"Terraform v0.14 \u3067 lock \u30d5\u30a1\u30a4\u30eb ",(0,a.kt)("inlineCode",{parentName:"p"},".terraform.lock.hcl")," \u304c\u5c0e\u5165\u3055\u308c\u307e\u3057\u305f\u3002\nRenovate \u3067 Terraform Provider \u3092 update \u3059\u308b\u969b\u306b\u3082 lock \u30d5\u30a1\u30a4\u30eb\u3092\u66f4\u65b0\u3059\u308b\u5fc5\u8981\u304c\u3042\u308b\u306e\u3067\u3001\n",(0,a.kt)("inlineCode",{parentName:"p"},"terraform init -upgrade")," \u3092\u5b9f\u884c\u3057\u3066 lock \u30d5\u30a1\u30a4\u30eb\u3092\u66f4\u65b0\u3057\u3066\u30b3\u30df\u30c3\u30c8\u30fb\u30d7\u30c3\u30b7\u30e5\u3057\u3066\u3044\u307e\u3059\u3002\n\u306a\u306e\u3067\u3059\u304c\u3001\u30ed\u30fc\u30ab\u30eb\u3067 ",(0,a.kt)("inlineCode",{parentName:"p"},"terraform init")," \u3092\u5b9f\u884c\u3059\u308b\u3068\u306a\u3093\u304b lock \u30d5\u30a1\u30a4\u30eb\u304c\u66f4\u65b0\u3055\u308c\u308b\u3053\u3068\u304c\u826f\u304f\u3042\u308a\u307e\u3057\u305f\u3002\u3057\u3070\u3089\u304f\u653e\u7f6e\u3057\u3066\u3044\u305f\u306e\u3067\u3059\u304c\u3001 developer \u304b\u3089\u300c\u306a\u3093\u304b\u30d5\u30a1\u30a4\u30eb\u66f4\u65b0\u3055\u308c\u305f\u3093\u3060\u3051\u3069\u3001\u3053\u308c\u30b3\u30df\u30c3\u30c8\u3057\u3066\u3044\u3044\u306e\uff1f\u300d\u3068\u805e\u304b\u308c\u3001\u3053\u306e\u307e\u307e\u653e\u3063\u3066\u304a\u3044\u3066\u56f0\u60d1\u3055\u305b\u305f\u308a\u3082\u3084\u3063\u3068\u3055\u305b\u305f\u308a\u3059\u308b\u306e\u306f\u826f\u304f\u306a\u3044\u306a\u3068\u601d\u3044\u3001\u8abf\u3079\u3066\u307f\u307e\u3057\u305f\u3002"),(0,a.kt)("p",null,"lock \u30d5\u30a1\u30a4\u30eb\u306b\u3064\u3044\u3066 ",(0,a.kt)("a",{parentName:"p",href:"https://speakerdeck.com/minamijoyo/how-to-update-terraform-dot-lock-dot-hcl-efficiently"},".terraform.lock.hcl \u5b8c\u5168\u306b\u7406\u89e3\u3057\u305f"),"\u3067\u8a73\u3057\u304f\u89e3\u8aac\u3055\u308c\u3066\u3044\u305f\u306e\u3067\u5927\u5909\u52a9\u304b\u308a\u307e\u3057\u305f\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"lock \u30d5\u30a1\u30a4\u30eb\u306b\u306f provider \u306e hash \u5024\u304c\u8a18\u9332\u3055\u308c\u3066\u3044\u308b"),(0,a.kt)("li",{parentName:"ul"},"lock \u30d5\u30a1\u30a4\u30eb\u306f ",(0,a.kt)("inlineCode",{parentName:"li"},"terraform init")," \u3067\u81ea\u52d5\u7684\u306b\u66f4\u65b0\u3055\u308c\u308b"),(0,a.kt)("li",{parentName:"ul"},"hash \u5024\u306f platform (Mac, Linux, etc) \u306b\u3088\u3063\u3066\u9055\u3046"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"terraform init")," \u5b9f\u884c\u6642\u306b\u3001\u305d\u306e platform \u306e hash \u5024\u304c lock \u30d5\u30a1\u30a4\u30eb\u306b\u306a\u3051\u308c\u3070\u8ffd\u52a0\u3055\u308c\u308b",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u30c7\u30d5\u30a9\u30eb\u30c8\u3067\u306f\u5b9f\u884c\u74b0\u5883\u4ee5\u5916\u306e Platform \u306e hash \u5024\u306f\u8ffd\u52a0\u3055\u308c\u306a\u3044"))),(0,a.kt)("li",{parentName:"ul"},"CI \u306f Linux \u4e0a\u3067\u5b9f\u884c\u3057\u3066\u3044\u308b\u306e\u3067\u3001 Linux \u306e hash \u5024\u3060\u3051\u304c\u8a18\u9332\u3055\u308c\u308b"),(0,a.kt)("li",{parentName:"ul"},"\u30ed\u30fc\u30ab\u30eb\u3067 Mac \u4e0a\u3067 ",(0,a.kt)("inlineCode",{parentName:"li"},"terraform init")," \u3059\u308b\u3068 Mac \u306e hash \u5024\u304c\u8ffd\u52a0\u3055\u308c\u3001 lock \u30d5\u30a1\u30a4\u30eb\u306b\u5dee\u5206\u304c\u751f\u3058\u308b")),(0,a.kt)("p",null,"\u306a\u306e\u3067\u5dee\u5206\u304c\u51fa\u3066\u3057\u307e\u3063\u305f\u5834\u5408\u306f\u30b3\u30df\u30c3\u30c8\u3059\u308b\u3067\u826f\u3044\u3068\u306f\u601d\u3044\u307e\u3059\u304c\u3001\u305d\u3082\u305d\u3082 CI \u3067 lock \u30d5\u30a1\u30a4\u30eb\u3092\u66f4\u65b0\u3059\u308b\u969b\u306b Mac \u306e hash \u5024\u3082\u8ffd\u52a0\u3057\u3066\u3057\u307e\u3048\u3070\u30ed\u30fc\u30ab\u30eb\u3067 Mac \u4e0a\u3067 ",(0,a.kt)("inlineCode",{parentName:"p"},"terraform init")," \u3057\u3066\u3082\u5dee\u5206\u304c\u51fa\u306a\u304f\u306a\u308a\u307e\u3059\u3002\u3061\u306a\u307f\u306b Windows \u4e0a\u3067 ",(0,a.kt)("inlineCode",{parentName:"p"},"terraform init")," \u3059\u308b\u4eba\u306f\u81ea\u5206\u306e\u5468\u308a\u306b\u306f\u3044\u306a\u3055\u305d\u3046\u306a\u306e\u3067\u3001 Windows \u306f\u5bfe\u5fdc\u3057\u306a\u3044\u3053\u3068\u306b\u3057\u307e\u3057\u305f\u3002"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://blog.studysapuri.jp/entry/2021/03/12/080000"},"100 \u4ee5\u4e0a\u306e Terraform \u74b0\u5883\u3092\u3044\u3044\u611f\u3058\u306b v0.14 \u306b upgrade \u3057\u305f\u65b9\u6cd5"),"\u3067\u7d39\u4ecb\u3057\u3066\u3044\u308b\u3088\u3046\u306b\u3059\u3067\u306b lock \u30d5\u30a1\u30a4\u30eb\u3092\u66f4\u65b0\u3057\u3066\u30b3\u30df\u30c3\u30c8\u30fb\u30d7\u30c3\u30b7\u30e5\u3059\u308b\u4ed5\u7d44\u307f\u306f\u3042\u308b\u306e\u3067\u3001\u5909\u66f4\u3068\u3057\u3066\u306f 1 (\u6b63\u78ba\u306b\u306f\u30b3\u30fc\u30c9\u30b3\u30e1\u30f3\u30c8\u5165\u308c\u30664)\u884c\u8ffd\u52a0\u3059\u308b\u3060\u3051\u3067\u3057\u305f\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"github-comment exec -- terraform providers lock -platform=darwin_amd64\n")))}m.isMDXComponent=!0}}]);