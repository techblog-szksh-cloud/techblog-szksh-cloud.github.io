"use strict";(self.webpackChunktechblog_szksh_cloud_github_io=self.webpackChunktechblog_szksh_cloud_github_io||[]).push([[7492],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var l=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,l,r=function(e,t){if(null==e)return{};var n,l,r={},o=Object.keys(e);for(l=0;l<o.length;l++)n=o[l],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(l=0;l<o.length;l++)n=o[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=l.createContext({}),s=function(e){var t=l.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},p=function(e){var t=s(e.components);return l.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},k=l.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),k=s(n),m=r,f=k["".concat(i,".").concat(m)]||k[m]||c[m]||o;return n?l.createElement(f,u(u({ref:t},p),{},{components:n})):l.createElement(f,u({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,u=new Array(o);u[0]=k;var a={};for(var i in t)hasOwnProperty.call(t,i)&&(a[i]=t[i]);a.originalType=e,a.mdxType="string"==typeof e?e:r,u[1]=a;for(var s=2;s<o;s++)u[s]=n[s];return l.createElement.apply(null,u)}return l.createElement.apply(null,n)}k.displayName="MDXCreateElement"},5513:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return a},metadata:function(){return s},toc:function(){return c}});var l=n(7462),r=n(3366),o=(n(7294),n(3905)),u=["components"],a={title:"buildflow \u3068\u3044\u3046\u30ef\u30fc\u30af\u30d5\u30ed\u30fc\u30a8\u30f3\u30b8\u30f3\u306e\u3088\u3046\u306a\u30bf\u30b9\u30af\u30e9\u30f3\u30ca\u30fc\u306e\u3088\u3046\u306a\u30c4\u30fc\u30eb\u3092\u4f5c\u3063\u3066\u3044\u308b",date:new Date("2020-10-17T07:06:31.000Z"),tags:["oss","buildflow"],authors:["suzuki-shunsuke"]},i=void 0,s={permalink:"/buildflow-1",source:"@site/blog/buildflow-1.md",title:"buildflow \u3068\u3044\u3046\u30ef\u30fc\u30af\u30d5\u30ed\u30fc\u30a8\u30f3\u30b8\u30f3\u306e\u3088\u3046\u306a\u30bf\u30b9\u30af\u30e9\u30f3\u30ca\u30fc\u306e\u3088\u3046\u306a\u30c4\u30fc\u30eb\u3092\u4f5c\u3063\u3066\u3044\u308b",description:"buildflow \u3068\u3044\u3046\u30c4\u30fc\u30eb\u3092\u958b\u767a\u3057\u3066\u3044\u308b\u306e\u3067\u7d39\u4ecb\u3057\u307e\u3059\u3002",date:"2020-10-17T07:06:31.000Z",formattedDate:"October 17, 2020",tags:[{label:"oss",permalink:"/tags/oss"},{label:"buildflow",permalink:"/tags/buildflow"}],readingTime:4.995,truncated:!1,authors:[{name:"Shunsuke Suzuki",title:"Platform Engineer / OSS Developer / Go / Terraform",url:"https://github.com/suzuki-shunsuke",imageURL:"https://github.com/suzuki-shunsuke.png",key:"suzuki-shunsuke"}],frontMatter:{title:"buildflow \u3068\u3044\u3046\u30ef\u30fc\u30af\u30d5\u30ed\u30fc\u30a8\u30f3\u30b8\u30f3\u306e\u3088\u3046\u306a\u30bf\u30b9\u30af\u30e9\u30f3\u30ca\u30fc\u306e\u3088\u3046\u306a\u30c4\u30fc\u30eb\u3092\u4f5c\u3063\u3066\u3044\u308b",date:"2020-10-17T07:06:31.000Z",tags:["oss","buildflow"],authors:["suzuki-shunsuke"]},prevItem:{title:"buildflow \u3067\u306e Tengo \u306e\u4f7f\u3044\u65b9",permalink:"/buildflow-tengo"},nextItem:{title:"tfnotify \u306e parse error \u3092\u901a\u77e5\u3059\u308b",permalink:"/post-tfnotify-parse-error"}},p={authorsImageUrls:[void 0]},c=[{value:"\u3069\u3093\u306a\u30c4\u30fc\u30eb\u304b",id:"\u3069\u3093\u306a\u30c4\u30fc\u30eb\u304b",level:2},{value:"Hello World",id:"hello-world",level:2},{value:"\u7279\u5fb4",id:"\u7279\u5fb4",level:2}],k={toc:c};function m(e){var t=e.components,n=(0,r.Z)(e,u);return(0,o.kt)("wrapper",(0,l.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"buildflow \u3068\u3044\u3046\u30c4\u30fc\u30eb\u3092\u958b\u767a\u3057\u3066\u3044\u308b\u306e\u3067\u7d39\u4ecb\u3057\u307e\u3059\u3002\n",(0,o.kt)("inlineCode",{parentName:"p"},"buildflow")," \u3068\u3044\u3046\u30bf\u30b0\u3092\u3064\u3051\u3066\u4f55\u56de\u304b\u306b\u5206\u3051\u3066\u30d6\u30ed\u30b0\u3092\u66f8\u3053\u3046\u304b\u306a\u3068\u601d\u3044\u307e\u3059\u3002\n1\u672c\u76ee\u306e\u3053\u306e\u8a18\u4e8b\u3067\u306f"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u3069\u3093\u306a\u30c4\u30fc\u30eb\u304b"),(0,o.kt)("li",{parentName:"ul"},"Hello World"),(0,o.kt)("li",{parentName:"ul"},"\u7279\u5fb4")),(0,o.kt)("p",null,"\u306b\u3064\u3044\u3066\u7c21\u5358\u306b\u8aac\u660e\u3057\u307e\u3059\u3002"),(0,o.kt)("h2",{id:"\u3069\u3093\u306a\u30c4\u30fc\u30eb\u304b"},"\u3069\u3093\u306a\u30c4\u30fc\u30eb\u304b"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/suzuki-shunsuke/buildflow"},"https://github.com/suzuki-shunsuke/buildflow")),(0,o.kt)("p",null,"\u30ef\u30fc\u30af\u30d5\u30ed\u30fc\u3092\u5b9f\u884c\u3059\u308b\u305f\u3081\u306e CLI \u30c4\u30fc\u30eb\u3067\u3059\u3002\n\u30ef\u30fc\u30af\u30d5\u30ed\u30fc\u30a8\u30f3\u30b8\u30f3\u3068\u8a00\u3046\u3068 Airflow \u3068\u304b Azkaban, Argo Workflows \u306e\u3088\u3046\u306a\u30c4\u30fc\u30eb\u3092\u30a4\u30e1\u30fc\u30b8\u3059\u308b\u304b\u3068\u601d\u3044\u307e\u3059\u304c\u3001\n\u305d\u308c\u3089\u3068\u306f\u76ee\u7684\u3082\u6a5f\u80fd\u3082\u9055\u3044\u307e\u3059\u3002\n\u4e00\u90e8\u306e CI \u30b5\u30fc\u30d3\u30b9\u3067\u306f\u30ef\u30fc\u30af\u30d5\u30ed\u30fc\u306e\u30ed\u30fc\u30ab\u30eb\u5b9f\u884c\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u305f\u308a\u3057\u307e\u3059\u304c\u3001\u305d\u3093\u306a\u30a4\u30e1\u30fc\u30b8\u3067\u826f\u3044\u304b\u3082\u3057\u308c\u307e\u305b\u3093\u3002\nbuildflow \u3067\u306f task \u3068 task \u306e\u4f9d\u5b58\u95a2\u4fc2\u3092\u8a2d\u5b9a\u30d5\u30a1\u30a4\u30eb\u306b\u5b9a\u7fa9\u3057\u3001\u30b3\u30de\u30f3\u30c9\u3092\u5b9f\u884c\u3059\u308b\u3068\u30ed\u30fc\u30ab\u30eb\u3067\u30bf\u30b9\u30af\u304c\u5b9f\u884c\u3055\u308c\u307e\u3059\u3002\n\u305d\u3046\u3044\u3046\u3068\u30bf\u30b9\u30af\u30e9\u30f3\u30ca\u30fc\u3068\u3044\u3063\u305f\u307b\u3046\u304c\u3044\u3044\u306e\u304b\u3082\u3057\u308c\u307e\u305b\u3093\u304c\u3001\u500b\u5225\u306e\u30bf\u30b9\u30af\u3092\u6307\u5b9a\u3057\u3066\u5b9f\u884c\u3059\u308b\u3088\u3046\u306a\u6a5f\u80fd\u306f\u306a\u3044\u306e\u3067\u3001\u30bf\u30b9\u30af\u30e9\u30f3\u30ca\u30fc\u3068\u3082\u9055\u3046\u6c17\u304c\u3057\u307e\u3059\u3002"),(0,o.kt)("p",null,"CI \u30b5\u30fc\u30d3\u30b9\u4e0a\u3067\u5b9f\u884c\u3059\u308b\u3053\u3068\u3092\u76ee\u7684\u3068\u3057\u3066\u958b\u767a\u3057\u3066\u3044\u307e\u3059(\u6c4e\u7528\u7684\u306a\u30c4\u30fc\u30eb\u306a\u306e\u3067\u4ed6\u306e\u76ee\u7684\u3067\u3082\u4f7f\u3048\u308b\u3068\u306f\u601d\u3044\u307e\u3059)\u3002"),(0,o.kt)("h2",{id:"hello-world"},"Hello World"),(0,o.kt)("p",null,"\u307e\u3060\u3069\u3093\u306a\u30c4\u30fc\u30eb\u304b\u30d4\u30f3\u3068\u6765\u3066\u306a\u3044\u4eba\u3082\u3044\u308b\u304b\u3082\u3057\u308c\u306a\u3044\u306e\u3067\u3001\u7c21\u5358\u306a Hello World \u3092\u3084\u3063\u3066\u307f\u307e\u3057\u3087\u3046\u3002"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/suzuki-shunsuke/buildflow/releases"},"GitHub Releases")," \u304b\u3089\u30d0\u30a4\u30ca\u30ea\u3092\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,o.kt)("p",null,"\u6b21\u306e\u3088\u3046\u306a\u8a2d\u5b9a\u30d5\u30a1\u30a4\u30eb ",(0,o.kt)("inlineCode",{parentName:"p"},".buildflow.yaml")," \u3092\u7528\u610f\u3057\u307e\u3059\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"---\nphases:\n- name: main\n  tasks:\n  - name: hello\n    command:\n      command: echo hello\n")),(0,o.kt)("p",null,"\u6b21\u306e\u30b3\u30de\u30f3\u30c9\u3092\u5b9f\u884c\u3059\u308b\u3068 task \u304c\u5b9f\u884c\u3055\u308c\u307e\u3059\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ buildflow run\n\n==============\n= Phase: main =\n==============\n07:50:46UTC | hello | + /bin/sh -c echo hello\n07:50:46UTC | hello |\n07:50:46UTC | hello | hello\n07:50:46UTC | hello |\n\n================\n= Phase Result: main =\n================\nstatus: succeeded\ntask: hello\nstatus: succeeded\nexit code: 0\nstart time: 2020-10-17T07:50:46Z\nend time: 2020-10-17T07:50:46Z\nduration: 4.317259ms\n+ /bin/sh -c echo hello\nhello\n")),(0,o.kt)("h2",{id:"\u7279\u5fb4"},"\u7279\u5fb4"),(0,o.kt)("p",null,"task \u3092\u4f9d\u5b58\u95a2\u4fc2\u306b\u57fa\u3065\u3044\u3066\u4e26\u5217\u5b9f\u884c\u3067\u304d\u307e\u3059\u3002\u52a0\u3048\u3066\u4ee5\u4e0b\u306e\u3088\u3046\u306a\u7279\u5fb4\u304c\u3042\u308a\u307e\u3059\u3002"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u30ef\u30f3\u30d0\u30a4\u30ca\u30ea\u3067\u52d5\u304f\u3002\u4ed6\u306b\u4f9d\u5b58\u3059\u308b\u3082\u306e\u304c\u306a\u3044",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Go \u3067\u66f8\u304b\u308c\u3066\u3044\u307e\u3059"))),(0,o.kt)("li",{parentName:"ul"},"\u4ed6\u306e\u30bf\u30b9\u30af\u306e\u5b9f\u884c\u7d50\u679c\u306b\u3088\u3063\u3066\u30bf\u30b9\u30af\u306e\u6319\u52d5\u3092\u5909\u3048\u3089\u308c\u308b",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"\u6a19\u6e96(\u30a8\u30e9\u30fc)\u51fa\u529b\u3001 exit code, etc"),(0,o.kt)("li",{parentName:"ul"},"dynamic \u306b task \u3092\u751f\u6210\u3059\u308b\u3053\u3068\u3082\u53ef\u80fd"))),(0,o.kt)("li",{parentName:"ul"},"Tengo \u3068\u3044\u3046\u30b9\u30af\u30ea\u30d7\u30c8\u8a00\u8a9e\u3092\u7528\u3044\u3066\u67d4\u8edf\u306a\u8a2d\u5b9a\u3092\u66f8\u3051\u308b",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"\u8a2d\u5b9a\u30d5\u30a1\u30a4\u30eb\u306f YAML \u3067\u3059\u304c\u3001\u4e00\u90e8\u306e\u8a2d\u5b9a\u306b Tengo \u3068\u3044\u3046\u30b9\u30af\u30ea\u30d7\u30c8\u8a00\u8a9e\u304c\u4f7f\u3048\u307e\u3059"),(0,o.kt)("li",{parentName:"ul"},"Tengo \u306e\u51e6\u7406\u7cfb\u3082 buildflow \u306b\u5185\u5305\u3055\u308c\u3066\u3044\u308b\u306e\u3067\u3001 Tengo \u306e\u51e6\u7406\u7cfb\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b\u5fc5\u8981\u306f\u3042\u308a\u307e\u305b\u3093"))),(0,o.kt)("li",{parentName:"ul"},"CI \u3067\u5b9f\u884c\u6642\u306b Pull Request (\u4ee5\u4e0b PR) \u306e\u60c5\u5831\u306b\u57fa\u3065\u3044\u3066\u51e6\u7406\u3092\u5909\u3048\u3089\u308c\u308b",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"GitHub \u524d\u63d0(GitLab \u3084 BitBucket \u306f\u30b5\u30dd\u30fc\u30c8\u5916)"),(0,o.kt)("li",{parentName:"ul"},"\u81ea\u52d5\u3067 PR \u306e\u60c5\u5831\u3092\u53d6\u5f97")))),(0,o.kt)("p",null,"Tengo \u306f Go \u3067\u5b9f\u884c\u3055\u308c\u305f\u30b9\u30af\u30ea\u30d7\u30c8\u8a00\u8a9e\u3067\u3059\u3002 ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/d5/tengo"},"https://github.com/d5/tengo")," \u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002\n\u306a\u305c Tengo \u3092\u63a1\u7528\u3057\u305f\u304b\u3068\u304b\u306f\u5225\u306b\u66f8\u304d\u305f\u3044\u3068\u601d\u3044\u307e\u3059\u3002"),(0,o.kt)("p",null,"Tengo \u306f Python \u3084 Ruby, Go \u3068\u3044\u3063\u305f\u8a00\u8a9e\u306b\u6bd4\u3079\u308c\u3070\u8a00\u8a9e\u4ed5\u69d8\u304c\u30b3\u30f3\u30d1\u30af\u30c8\u3067\u3042\u308a\u3001\n\u3088\u304f\u77e5\u3089\u306a\u304f\u3066\u3082\u306a\u3093\u3068\u306a\u304f\u8aad\u3081\u308b\u3057\u3001\u7c21\u5358\u306b\u304b\u3051\u308b\u3068\u601d\u3063\u3066\u3044\u307e\u3059\u3002\n\u52a0\u3048\u3066\u3001\u305d\u3082\u305d\u3082 buildflow \u306e\u4e2d\u3067\u306e Tengo \u306e\u5f79\u5272\u306f\u9650\u5b9a\u3055\u308c\u3066\u304a\u308a\u3001 Tengo \u3092\u30b4\u30ea\u30b4\u30ea\u66f8\u304f\u5fc5\u8981\u306f\u306a\u3044\u3068\u601d\u3044\u307e\u3059\u3002"),(0,o.kt)("p",null,"PR \u306e\u60c5\u5831\u306b\u57fa\u3065\u304d\u3001\u4f8b\u3048\u3070\u4ee5\u4e0b\u306e\u3088\u3046\u306a\u3053\u3068\u304c\u51fa\u6765\u307e\u3059\u3002"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u7279\u5b9a\u306e\u30e9\u30d9\u30eb\u304c\u3064\u3044\u305f\u3089 task \u3092\u5b9f\u884c\u3059\u308b"),(0,o.kt)("li",{parentName:"ul"},"\u7279\u5b9a\u306e\u30d5\u30a1\u30a4\u30eb\u304c PR \u3067\u66f4\u65b0\u3055\u308c\u305f\u3089 task \u3092\u5b9f\u884c\u3059\u308b"),(0,o.kt)("li",{parentName:"ul"},"\u7279\u5b9a\u306e\u30e6\u30fc\u30b6\u30fc(bot\u3068\u304b)\u304b\u3089\u306e PR \u3067\u306f task \u3092\u5b9f\u884c\u3057\u306a\u3044")),(0,o.kt)("p",null,"\u3053\u308c\u3089\u306e\u30ed\u30b8\u30c3\u30af\u306f\u81ea\u5206\u304c\u3088\u304f\u6b32\u3057\u304f\u306a\u308b\u306e\u3067\u3001 buildflow \u3092\u4f7f\u3048\u3070\u7c21\u5358\u306b\u5b9f\u88c5\u3067\u304d\u308b\u3088\u3046\u306b\u3057\u307e\u3057\u305f\u3002"),(0,o.kt)("p",null,"\u4ed6\u306b\u3082\u69d8\u3005\u306a\u6a5f\u80fd\u304c\u3042\u308a\u307e\u3059\u306e\u3067\u3001\u307e\u305f\u5225\u306e\u8a18\u4e8b\u3067\u7d39\u4ecb\u3067\u304d\u305f\u3089\u3068\u601d\u3044\u307e\u3059\u3002"))}m.isMDXComponent=!0}}]);