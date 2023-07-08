"use strict";(self.webpackChunktechblog_szksh_cloud_github_io=self.webpackChunktechblog_szksh_cloud_github_io||[]).push([[9469],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>g});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=r.createContext({}),p=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},s=function(e){var n=p(e.components);return r.createElement(u.Provider,{value:n},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},c=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,l=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=p(t),c=o,g=m["".concat(u,".").concat(c)]||m[c]||d[c]||l;return t?r.createElement(g,a(a({ref:n},s),{},{components:t})):r.createElement(g,a({ref:n},s))}));function g(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var l=t.length,a=new Array(l);a[0]=c;var i={};for(var u in n)hasOwnProperty.call(n,u)&&(i[u]=n[u]);i.originalType=e,i[m]="string"==typeof e?e:o,a[1]=i;for(var p=2;p<l;p++)a[p]=t[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}c.displayName="MDXCreateElement"},9915:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>a,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var r=t(7462),o=(t(7294),t(3905));const l={title:"Drone v0.8 \u306e .drone.yml \u3092 v1 \u306e .drone.jsonnet \u306b\u5909\u63db\u3059\u308b\u30c4\u30fc\u30eb\u3092\u4f5c\u3063\u305f",date:new Date("2019-06-11T22:40:45.000Z"),tags:["oss","drone"],authors:["suzuki-shunsuke"]},a=void 0,i={permalink:"/drone-jsonnet-generator",source:"@site/blog/drone-jsonnet-generator.md",title:"Drone v0.8 \u306e .drone.yml \u3092 v1 \u306e .drone.jsonnet \u306b\u5909\u63db\u3059\u308b\u30c4\u30fc\u30eb\u3092\u4f5c\u3063\u305f",description:"Drone v0.8 \u306e .drone.yml \u3092 v1 \u306e .drone.jsonnet \u306b\u5909\u63db\u3059\u308b\u30c4\u30fc\u30eb\u3092\u4f5c\u3063\u305f\u306e\u3067\u7d39\u4ecb\u3057\u307e\u3059\u3002",date:"2019-06-11T22:40:45.000Z",formattedDate:"June 11, 2019",tags:[{label:"oss",permalink:"/tags/oss"},{label:"drone",permalink:"/tags/drone"}],readingTime:4.66,truncated:!1,authors:[{name:"Shunsuke Suzuki",title:"Platform Engineer / OSS Developer / Go / Terraform",url:"https://github.com/suzuki-shunsuke",imageURL:"https://github.com/suzuki-shunsuke.png",key:"suzuki-shunsuke"}],frontMatter:{title:"Drone v0.8 \u306e .drone.yml \u3092 v1 \u306e .drone.jsonnet \u306b\u5909\u63db\u3059\u308b\u30c4\u30fc\u30eb\u3092\u4f5c\u3063\u305f",date:"2019-06-11T22:40:45.000Z",tags:["oss","drone"],authors:["suzuki-shunsuke"]},prevItem:{title:"Drone \u3067\u300c\u30d3\u30eb\u30c9\u5b9f\u884c\u6642\u306b\u30d1\u30e9\u30e1\u30fc\u30bf\u3092\u6e21\u3059\u300d\u3063\u307d\u3044\u3053\u3068\u3092\u3059\u308b",permalink:"/how-to-imitate-jenkins-parameterized-build-at-drone"},nextItem:{title:".drone.jsonnet \u3068 .drone.yml \u3092\u6bd4\u8f03\u3059\u308b Drone plugin \u3092\u4f5c\u3063\u305f",permalink:"/drone-plugin-jsonnet-check"}},u={authorsImageUrls:[void 0]},p=[{value:"\u80cc\u666f",id:"\u80cc\u666f",level:2},{value:"\u4f7f\u3044\u65b9",id:"\u4f7f\u3044\u65b9",level:2}],s={toc:p},m="wrapper";function d(e){let{components:n,...t}=e;return(0,o.kt)(m,(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Drone v0.8 \u306e .drone.yml \u3092 v1 \u306e .drone.jsonnet \u306b\u5909\u63db\u3059\u308b\u30c4\u30fc\u30eb\u3092\u4f5c\u3063\u305f\u306e\u3067\u7d39\u4ecb\u3057\u307e\u3059\u3002"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/suzuki-shunsuke/drone-jsonnet-generator"},"https://github.com/suzuki-shunsuke/drone-jsonnet-generator")),(0,o.kt)("h2",{id:"\u80cc\u666f"},"\u80cc\u666f"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://docs.drone.io/user-guide/pipeline/migrating/"},"https://docs.drone.io/user-guide/pipeline/migrating/")),(0,o.kt)("p",null,"Drone \u306f v0.8 \u304b\u3089 v1 \u3067 .drone.yml \u306e\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u304c\u5927\u304d\u304f\u5909\u308f\u3063\u3066\u3044\u307e\u3059\u3002\nDrone v1 \u3067\u306f\u30d3\u30eb\u30c9\u5b9f\u884c\u6642\u306b\u81ea\u52d5\u3067\u5909\u63db\u3057\u3066\u3044\u308b\u305f\u3081\u3001v0.8 \u306e .drone.yml \u3067\u3082\u305d\u306e\u307e\u307e\u52d5\u304d\u307e\u3059(matrix builds \u3082\u52d5\u304d\u307e\u3059)\u3002"),(0,o.kt)("p",null,"\u305d\u306e\u305f\u3081\u3001Drone v0.8 \u304b\u3089 v1 \u306b\u79fb\u884c\u3059\u308b\u969b\u3001\u3059\u3050\u306b .drone.yml \u3092\u4fee\u6b63\u3057\u306a\u304f\u3066\u3082\u554f\u984c\u306a\u3044\u306e\u3067\u3059\u304c\u3001\nv1 \u72ec\u81ea\u306e\u6a5f\u80fd\u304c\u51fa\u3066\u304d\u305f\u5834\u5408 v0.8 \u306e\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u306e\u5834\u5408\u5229\u7528\u3067\u304d\u306a\u3044\u304b\u3082\u3057\u308c\u307e\u305b\u3093\u3057\u3001\n\u3044\u3064\u307e\u3067\u3082\u53e4\u3044\u307e\u307e\u3060\u3068\u6c17\u6301\u3061\u60aa\u3044\u306e\u3067\u51fa\u6765\u308b\u306a\u3089\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u3092\u5909\u63db\u3057\u305f\u3044\u3067\u3059\u3002"),(0,o.kt)("p",null,"drone-cli \u3067\u306f\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u3092\u5909\u63db\u3059\u308b ",(0,o.kt)("inlineCode",{parentName:"p"},"drone convert")," \u3068\u3044\u3046\u30b3\u30de\u30f3\u30c9\u304c\u63d0\u4f9b\u3055\u308c\u3066\u3044\u307e\u3059\u3002"),(0,o.kt)("p",null,"\u305f\u3060\u3057\u3001 ",(0,o.kt)("inlineCode",{parentName:"p"},"drone convert")," \u306f matrix build \u3092 multiple pipeline \u306b\u5909\u63db\u3059\u308b\u306e\u3067\u3059\u304c\u3001\n\u975e\u5e38\u306b\u5197\u9577\u306b\u306a\u308a\u307e\u3059\u3002\n\u305d\u306e\u305f\u3081\u3001",(0,o.kt)("a",{parentName:"p",href:"https://jsonnet.org/"},"jsonnet")," \u3092\u5229\u7528\u3059\u308b\u3053\u3068\u304c\u63a8\u5968\u3055\u308c\u3066\u3044\u307e\u3059\u3002"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://docs.drone.io/user-guide/pipeline/migrating/"},"https://docs.drone.io/user-guide/pipeline/migrating/")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The above syntax can be quite verbose if you are testing a large number of variations.\nTo simplify your configuration we recommend using jsonnet.")),(0,o.kt)("p",null,"\u3053\u306e .drone.jsonnet \u306e\u751f\u6210\u306f ",(0,o.kt)("inlineCode",{parentName:"p"},"drone convert")," \u3067\u306f\u51fa\u6765\u306a\u3044\u3067\u3059\u3057\u3001\u624b\u4f5c\u696d\u306b\u306a\u308b\u306e\u3067\u3059\u304c\u3001\u7d50\u69cb\u9762\u5012\u3067\u3059\u3002\nv0.8 \u304b\u3089 v1 \u3067\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u304c\u5909\u308f\u3063\u3066\u307e\u3059\u3057\u3001jsonnet \u306b\u99b4\u67d3\u307f\u306e\u8584\u3044\u4eba\u3082\u5c11\u306a\u304f\u306a\u3044\u3067\u3057\u3087\u3046\u3002\n\u79fb\u884c\u5bfe\u8c61\u306e\u30ea\u30dd\u30b8\u30c8\u30ea\u304c\u591a\u3044\u5834\u5408\u3001\u975e\u5e38\u306b\u82e6\u884c\u306b\u306a\u308a\u307e\u3059\u3002"),(0,o.kt)("p",null,"\u305d\u3053\u3067\u4eca\u56de\u3053\u306e .drone.jsonnet \u3092\u751f\u6210\u3059\u308b\u30c4\u30fc\u30eb\u3092\u958b\u767a\u3057\u307e\u3057\u305f\u3002"),(0,o.kt)("h2",{id:"\u4f7f\u3044\u65b9"},"\u4f7f\u3044\u65b9"),(0,o.kt)("p",null,"\u975e\u5e38\u306b\u30b7\u30f3\u30d7\u30eb\u3067\u3059\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"$ drone-jsonnet-generator gen [--source .drone.yml] [--target .drone.jsonnet] [--stdout]\n")),(0,o.kt)("p",null,"\u3092\u5b9f\u884c\u3059\u308b\u3068 .drone.yml \u304b\u3089 .drone.jsonnet \u3092\u751f\u6210\u3057\u307e\u3059\u3002"),(0,o.kt)("p",null,"\u4f8b\u3048\u3070"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"---\npipeline:\n  build:\n    image: golang:${GO_VERSION}\n    commands:\n    - echo hello\nservices:\n  database:\n    image: ${DATABASE}\nmatrix:\n  include:\n  - GO_VERSION: 1.4\n    DATABASE: mysql:5.5\n  - GO_VERSION: 1.4\n    DATABASE: mysql:6.5\n  - GO_VERSION: 1.3\n    DATABASE: mysql:5.5\n")),(0,o.kt)("p",null,"\u304b\u3089"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsonnet"},'local pipeline(GO_VERSION, DATABASE) = {\n  "kind": "pipeline",\n  "name": "\'GO_VERSION:\' + GO_VERSION + \' DATABASE:\' + DATABASE",\n  "platform": {\n    "arch": "amd64",\n    "os": "linux"\n  },\n  "services": [\n    {\n      "image": "${DATABASE}",\n      "name": "database",\n      "pull": "default"\n    }\n  ],\n  "steps": [\n    {\n      "commands": [\n        "echo hello"\n      ],\n      "image": "golang:${GO_VERSION}",\n      "name": "build",\n      "pull": "default"\n    }\n  ]\n};\n\nlocal args = [\n  {\n    "DATABASE": "mysql:5.5",\n    "GO_VERSION": "1.4"\n  },\n  {\n    "DATABASE": "mysql:6.5",\n    "GO_VERSION": "1.4"\n  },\n  {\n    "DATABASE": "mysql:5.5",\n    "GO_VERSION": "1.3"\n  }\n];\n\n[\n  pipeline(arg.GO_VERSION, arg.DATABASE) for arg in args\n]\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u6b8b\u5ff5\u306a\u304c\u3089\u751f\u6210\u3055\u308c\u305f jsonnet \u306f\u305d\u306e\u307e\u307e\u3067\u306f\u4f7f\u3048\u307e\u305b\u3093\u3002\u4fee\u6b63\u304c\u5fc5\u8981\u3067\u3059\u3002"),"\n\u305d\u308c\u3067\u3082\u4e00\u304b\u3089 .drone.jsonnet \u3092\u66f8\u304f\u3088\u308a\u306f\u5727\u5012\u7684\u306b\u52b9\u7387\u304c\u826f\u3044\u3067\u3059\u3002"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"pipeline \u4e2d\u306e\u5909\u6570\u304c ",(0,o.kt)("inlineCode",{parentName:"li"},"${\u5909\u6570\u540d}")," \u3068\u306a\u3063\u3066\u3044\u308b\u306e\u3067\u76f4\u3059 (",(0,o.kt)("inlineCode",{parentName:"li"},'"golang:${GO_VERSION}"')," -> ",(0,o.kt)("inlineCode",{parentName:"li"},'"golang:" + GO_VERSION'),")"),(0,o.kt)("li",{parentName:"ul"},"pipeline name \u304c ",(0,o.kt)("inlineCode",{parentName:"li"},'"')," \u3067\u56f2\u307e\u308c\u3066\u308b\u306e\u3067\u53d6\u308a\u9664\u304f (",(0,o.kt)("inlineCode",{parentName:"li"},"\"'GO_VERSION:' + GO_VERSION + ' DATABASE:' + DATABASE\"")," -> ",(0,o.kt)("inlineCode",{parentName:"li"},"'GO_VERSION:' + GO_VERSION + ' DATABASE:' + DATABASE"),")")),(0,o.kt)("p",null,"\u3042\u3068\u3001\u4e00\u90e8\u306e\u30b3\u30fc\u30c9\u3092 JSON \u3068\u3057\u3066\u751f\u6210\u3057\u3066\u3044\u308b\u306e\u3067\u3001jsonnet \u3068\u3057\u3066\u306f\u591a\u5c11\u7dba\u9e97\u3067\u306f\u306a\u3044(\u30d5\u30a3\u30fc\u30eb\u30c9\u304c",(0,o.kt)("inlineCode",{parentName:"p"},'"'),"\u3067\u56f2\u307e\u308c\u3066\u305f\u308a\u3059\u308b)\u3067\u3059\u304c\u3001\u5b9f\u7528\u4e0a\u7279\u306b\u554f\u984c\u306a\u3044\u3068\u601d\u3044\u307e\u3059\u3002"),(0,o.kt)("p",null,"\u3061\u306a\u307f\u306b\u4e0a\u306e\u4f8b\u3067\u306f matrix build \u306e ",(0,o.kt)("inlineCode",{parentName:"p"},"include")," \u304c\u4f7f\u308f\u308c\u3066\u3044\u307e\u3059\u304c\u3001\u4f7f\u3063\u3066\u3044\u306a\u3044\u5834\u5408\u306b\u3082\u5bfe\u5fdc\u3057\u3066\u307e\u3059\u3057\u3001\n",(0,o.kt)("inlineCode",{parentName:"p"},"include")," \u304c\u4f7f\u308f\u308c\u3066\u3044\u306a\u3044\u5834\u5408\u3001\u82e5\u5e72\u751f\u6210\u3055\u308c\u308b\u30b3\u30fc\u30c9\u306e\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u304c\u9055\u3044\u307e\u3059\u3002"),(0,o.kt)("p",null,"\u306a\u304a\u3001\u4eca\u56de\u306e\u30c4\u30fc\u30eb\u306e\u5bfe\u8c61\u306b\u306a\u308b .drone.yml \u306f matrix build \u3092\u4f7f\u3063\u3066\u3044\u308b\u306e\u304c\u524d\u63d0\u306b\u306a\u308a\u307e\u3059\u3002\nmatrix build \u304c\u4f7f\u308f\u308c\u3066\u3044\u306a\u3044\u3068\u30a8\u30e9\u30fc\u3092\u8fd4\u3057\u307e\u3059\u3002\nmatrix build \u3092\u4f7f\u3063\u3066\u3044\u306a\u3044\u306e\u3067\u3042\u308c\u3070 jsonnet \u3092\u4f7f\u3046\u5fc5\u8981\u6027\u304c\u5f31\u3044\u3067\u3059\u3057\u3001 ",(0,o.kt)("inlineCode",{parentName:"p"},"drone convert")," \u3067\u5909\u63db\u3059\u308c\u3070\u826f\u3044\u6c17\u304c\u3057\u307e\u3059\u3002"),(0,o.kt)("p",null,"\u4ee5\u4e0a\u3001\u81ea\u4f5c\u306eOSS\u306e\u7d39\u4ecb\u3067\u3057\u305f\u3002\nDrone v0.8 \u304b\u3089 v1 \u3078\u306e\u79fb\u884c\u3067\u56f0\u3063\u3066\u3044\u308b\u4eba\u306f\u662f\u975e\u4f7f\u3063\u3066\u307f\u3066\u304f\u3060\u3055\u3044\u3002\n\u5feb\u9069\u306a Drone \u30e9\u30a4\u30d5\u3092\u3002"))}d.isMDXComponent=!0}}]);