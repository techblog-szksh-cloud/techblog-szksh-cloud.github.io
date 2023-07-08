"use strict";(self.webpackChunktechblog_szksh_cloud_github_io=self.webpackChunktechblog_szksh_cloud_github_io||[]).push([[8594],{3905:(e,t,r)=>{r.d(t,{Zo:()=>g,kt:()=>c});var n=r(7294);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var u=n.createContext({}),p=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},g=function(e){var t=p(e.components);return n.createElement(u.Provider,{value:t},e.children)},s="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,l=e.mdxType,a=e.originalType,u=e.parentName,g=i(e,["components","mdxType","originalType","parentName"]),s=p(r),m=l,c=s["".concat(u,".").concat(m)]||s[m]||k[m]||a;return r?n.createElement(c,o(o({ref:t},g),{},{components:r})):n.createElement(c,o({ref:t},g))}));function c(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=r.length,o=new Array(a);o[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[s]="string"==typeof e?e:l,o[1]=i;for(var p=2;p<a;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},6067:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>k,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var n=r(7462),l=(r(7294),r(3905));const a={title:"Go \u306b\u304a\u3051\u308b\u30a8\u30e9\u30fc\u30cf\u30f3\u30c9\u30ea\u30f3\u30b0\u3068\u30ed\u30ae\u30f3\u30b0\u306e\u30d7\u30e9\u30af\u30c6\u30a3\u30b9",date:new Date("2018-12-25T12:51:41.000Z"),tags:["golang","logging"],authors:["suzuki-shunsuke"]},o=void 0,i={permalink:"/golang-logging-error-handling-practice",source:"@site/blog/golang-logging-error-handling-practice.md",title:"Go \u306b\u304a\u3051\u308b\u30a8\u30e9\u30fc\u30cf\u30f3\u30c9\u30ea\u30f3\u30b0\u3068\u30ed\u30ae\u30f3\u30b0\u306e\u30d7\u30e9\u30af\u30c6\u30a3\u30b9",description:"2018-12-30 \u8ffd\u8a18",date:"2018-12-25T12:51:41.000Z",formattedDate:"December 25, 2018",tags:[{label:"golang",permalink:"/tags/golang"},{label:"logging",permalink:"/tags/logging"}],readingTime:10.48,truncated:!1,authors:[{name:"Shunsuke Suzuki",title:"Platform Engineer / OSS Developer / Go / Terraform",url:"https://github.com/suzuki-shunsuke",imageURL:"https://github.com/suzuki-shunsuke.png",key:"suzuki-shunsuke"}],frontMatter:{title:"Go \u306b\u304a\u3051\u308b\u30a8\u30e9\u30fc\u30cf\u30f3\u30c9\u30ea\u30f3\u30b0\u3068\u30ed\u30ae\u30f3\u30b0\u306e\u30d7\u30e9\u30af\u30c6\u30a3\u30b9",date:"2018-12-25T12:51:41.000Z",tags:["golang","logging"],authors:["suzuki-shunsuke"]},prevItem:{title:"Github\u3092Free Plan\u306b\u30c0\u30a6\u30f3\u30b0\u30ec\u30fc\u30c9\u3057\u305f",permalink:"/downgrade-github-plan"},nextItem:{title:"Graylog\u306eAlert\u306e\u8ab2\u984c",permalink:"/graylog-alert-issue"}},u={authorsImageUrls:[void 0]},p=[{value:"2018-12-30 \u8ffd\u8a18",id:"2018-12-30-\u8ffd\u8a18",level:2},{value:"\u30ed\u30ae\u30f3\u30b0\u306b\u95a2\u3059\u308b\u95a2\u9023\u8a18\u4e8b",id:"\u30ed\u30ae\u30f3\u30b0\u306b\u95a2\u3059\u308b\u95a2\u9023\u8a18\u4e8b",level:2},{value:"\u30ed\u30b0\u30ec\u30d9\u30eb\u306f\u5206\u3051\u308b",id:"\u30ed\u30b0\u30ec\u30d9\u30eb\u306f\u5206\u3051\u308b",level:2},{value:"logrus \u3092\u4f7f\u3063\u3066\u30ed\u30b0\u3092\u69cb\u9020\u5316\u3059\u308b",id:"logrus-\u3092\u4f7f\u3063\u3066\u30ed\u30b0\u3092\u69cb\u9020\u5316\u3059\u308b",level:2},{value:"\u30a8\u30e9\u30fc\u30ed\u30b0\u306f\u4e2d\u592e\u96c6\u6a29\u7684\u306b main \u306b\u8fd1\u3044\u6240\u3067\u51fa\u529b\u3059\u308b",id:"\u30a8\u30e9\u30fc\u30ed\u30b0\u306f\u4e2d\u592e\u96c6\u6a29\u7684\u306b-main-\u306b\u8fd1\u3044\u6240\u3067\u51fa\u529b\u3059\u308b",level:2},{value:"\u30ed\u30ae\u30f3\u30b0\u306b\u5fc5\u8981\u306a\u60c5\u5831\u3092\u623b\u308a\u5024\u306eerror\u306b\u542b\u3081\u308b",id:"\u30ed\u30ae\u30f3\u30b0\u306b\u5fc5\u8981\u306a\u60c5\u5831\u3092\u623b\u308a\u5024\u306eerror\u306b\u542b\u3081\u308b",level:2},{value:"error \u306b\u542b\u3081\u308b\u60c5\u5831\u306e\u8cac\u52d9",id:"error-\u306b\u542b\u3081\u308b\u60c5\u5831\u306e\u8cac\u52d9",level:2},{value:"\u30a8\u30e9\u30fc\u306e\u30ed\u30ae\u30f3\u30b0\u306f\u30b7\u30f3\u30d7\u30eb\u306b",id:"\u30a8\u30e9\u30fc\u306e\u30ed\u30ae\u30f3\u30b0\u306f\u30b7\u30f3\u30d7\u30eb\u306b",level:2},{value:"\u305d\u306e\u4ed6 go-errlog \u306e\u6a5f\u80fd",id:"\u305d\u306e\u4ed6-go-errlog-\u306e\u6a5f\u80fd",level:2},{value:"\u6700\u5f8c\u306b",id:"\u6700\u5f8c\u306b",level:2}],g={toc:p},s="wrapper";function k(e){let{components:t,...r}=e;return(0,l.kt)(s,(0,n.Z)({},g,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"2018-12-30-\u8ffd\u8a18"},"2018-12-30 \u8ffd\u8a18"),(0,l.kt)("p",null,"\u3053\u306e\u8a18\u4e8b\u3092\u5143\u306b\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u3092\u66f8\u3044\u3066\u307f\u307e\u3057\u305f\u3002"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/suzuki-shunsuke/go-error-handling-logging-practice"},"https://github.com/suzuki-shunsuke/go-error-handling-logging-practice")),(0,l.kt)("p",null,"\u8ffd\u8a18\u3053\u3053\u307e\u3067"),(0,l.kt)("hr",null),(0,l.kt)("p",null,"Go \u3067\u30a8\u30e9\u30fc\u30cf\u30f3\u30c9\u30ea\u30f3\u30b0\u3068\u30ed\u30ae\u30f3\u30b0\u3092\u3057\u3066\u304d\u3066\u81ea\u5206\u306e\u4e2d\u3067\u56fa\u307e\u308a\u3064\u3064\u3042\u308b\u30d7\u30e9\u30af\u30c6\u30a3\u30b9\u3092\u660e\u6587\u5316\u3057\u307e\u3059\u3002\n\u660e\u6587\u5316\u3059\u308b\u3053\u3068\u3067\u4ee5\u4e0b\u306e\u3053\u3068\u3092\u76ee\u6307\u3057\u307e\u3059\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u8ff7\u3044\u3092\u306a\u304f\u3059"),(0,l.kt)("li",{parentName:"ul"},"\u30b3\u30fc\u30c9\u306e\u4e00\u8cab\u6027\u3092\u4fdd\u3064"),(0,l.kt)("li",{parentName:"ul"},"\u30b3\u30fc\u30c7\u30a3\u30f3\u30b0\u898f\u7d04\u3068\u3059\u308b\u3053\u3068\u3067\u30ec\u30d3\u30e5\u30fc\u306e\u54c1\u8cea\u3092\u4e0a\u3052\u308b(\u81ea\u52d5\u5316\u306f\u51fa\u6765\u306a\u3044\u3051\u3069)"),(0,l.kt)("li",{parentName:"ul"},"\u30b3\u30fc\u30c9\u306e\u54c1\u8cea\u3092\u4e0a\u3052\u308b(\u30b3\u30fc\u30c9\u304c\u30b4\u30c1\u30e3\u3064\u304b\u306a\u304f\u306a\u308b)"),(0,l.kt)("li",{parentName:"ul"},"\u9069\u5207\u306b\u30a8\u30e9\u30fc\u3092\u30ed\u30ae\u30f3\u30b0\u3059\u308b(\u5fc5\u8981\u5341\u5206\u306a\u60c5\u5831\u3092\u30ed\u30b0\u3068\u3057\u3066\u6b8b\u3059)")),(0,l.kt)("p",null,"\u307e\u305f\u30a8\u30e9\u30fc\u30cf\u30f3\u30c9\u30ea\u30f3\u30b0\u3068\u30ed\u30ae\u30f3\u30b0\u306e\u305f\u3081\u306e\u30e9\u30a4\u30d6\u30e9\u30ea\u3092\u81ea\u4f5c\u3057\u3066\u3044\u308b\u306e\u3067\u305d\u308c\u3082\u7d39\u4ecb\u3057\u307e\u3059\u3002"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/suzuki-shunsuke/go-errlog"},"https://github.com/suzuki-shunsuke/go-errlog")),(0,l.kt)("h2",{id:"\u30ed\u30ae\u30f3\u30b0\u306b\u95a2\u3059\u308b\u95a2\u9023\u8a18\u4e8b"},"\u30ed\u30ae\u30f3\u30b0\u306b\u95a2\u3059\u308b\u95a2\u9023\u8a18\u4e8b"),(0,l.kt)("p",null,"\u3053\u306e\u8a18\u4e8b\u3092\u66f8\u304f\u524d\u306b\u8efd\u304f\u30b0\u30b0\u3063\u3066\u307f\u305f\u3060\u3051\u3067\u3061\u3083\u3093\u3068\u8aad\u3093\u3067\u306a\u3044\u306e\u3067\u3059\u304c\u3001\n\u8208\u5473\u306e\u3042\u308b\u4eba\u306f\u8aad\u3093\u3067\u307f\u3066\u304f\u3060\u3055\u3044\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.loggly.com/blog/think-differently-about-what-to-log-in-go-best-practices-examined/"},"https://www.loggly.com/blog/think-differently-about-what-to-log-in-go-best-practices-examined/")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://dave.cheney.net/2015/11/05/lets-talk-about-logging"},"https://dave.cheney.net/2015/11/05/lets-talk-about-logging")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://postd.cc/go-best-practices-2016/#logging-and-instrumentation"},"https://postd.cc/go-best-practices-2016/#logging-and-instrumentation"))),(0,l.kt)("h2",{id:"\u30ed\u30b0\u30ec\u30d9\u30eb\u306f\u5206\u3051\u308b"},"\u30ed\u30b0\u30ec\u30d9\u30eb\u306f\u5206\u3051\u308b"),(0,l.kt)("p",null,"\u30ed\u30b0\u30ec\u30d9\u30eb\u3067warning\u3068\u304b\u3044\u3089\u306a\u3044\u3068\u3044\u3046\u610f\u898b\u3082\u3042\u308a\u307e\u3059\u304c\u3001\u81ea\u5206\u306f\u5fc5\u8981\u3060\u3068\u601d\u3063\u3066\u3044\u307e\u3059\u3002\n\u81ea\u5206\u306f\u4ee5\u4e0b\u306e\u30ed\u30b0\u30ec\u30d9\u30eb\u3092\u4f7f\u3044\u5206\u3051\u307e\u3059\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"debug: \u3042\u307e\u308a\u4f7f\u308f\u306a\u3044\u3002\u8abf\u67fb\u76ee\u7684\u3067\u4e00\u6642\u7684\u306b\u57cb\u3081\u8fbc\u3080\u30ed\u30b0\u3002\u8abf\u67fb\u304c\u7d42\u308f\u3063\u305f\u3089\u51fa\u529b\u3057\u306a\u3044\u3088\u3046\u306b\u3059\u308b\u3002\u4e00\u6642\u7684\u3067\u306a\u3044\u3082\u306e\u306finfo\u306b\u3059\u308b"),(0,l.kt)("li",{parentName:"ul"},"info: \u30a8\u30e9\u30fc\u3067\u306a\u3044\u30ed\u30b0\u3002\u30a4\u30d9\u30f3\u30c8\u3001\u51e6\u7406\u306e\u958b\u59cb\u6642\u3084\u7d42\u4e86\u3092\u8a18\u9332\u3059\u308b\u306e\u306b\u4f7f\u3046\u3053\u3068\u304c\u591a\u3044"),(0,l.kt)("li",{parentName:"ul"},"warn: 4xx\u7cfb\u306e\u30a8\u30e9\u30fc\u3002\u305d\u308c\u304c\u8d77\u3053\u3063\u305f\u3060\u3051\u3067\u306f\u30a2\u30e9\u30fc\u30c8\u3092\u98db\u3070\u3055\u306a\u3044\u304c\u3001\u6570\u304c\u901a\u5e38\u6642\u3088\u308a\u591a\u3044\u5834\u5408\u306f\u30d0\u30b0\u304bUI\u306b\u554f\u984c\u304c\u3042\u3063\u3066\u30e6\u30fc\u30b6\u30fc\u304c\u9593\u9055\u3048\u3084\u3059\u304f\u306a\u3063\u3066\u3044\u308b\u53ef\u80fd\u6027\u304c\u3042\u308b\u306e\u3067\u30a2\u30e9\u30fc\u30c8\u3092\u98db\u3070\u3059"),(0,l.kt)("li",{parentName:"ul"},"error: 5xx\u7cfb\u306e\u30a8\u30e9\u30fc\u3002\u30a2\u30e9\u30fc\u30c8\u3092\u98db\u3070\u3059(\u95be\u5024\u306f\u8abf\u6574)"),(0,l.kt)("li",{parentName:"ul"},"fatal: \u51e6\u7406\u7d99\u7d9a\u304c\u4e0d\u53ef\u80fd\u306a\u81f4\u547d\u7684\u306a\u30a8\u30e9\u30fc\u3002\u30b7\u30b9\u30c6\u30e0\u3092\u6b62\u3081\u308b")),(0,l.kt)("p",null,"\u66f8\u3044\u3066\u304b\u3089\u601d\u3044\u307e\u3057\u305f\u304c\u3001\u3053\u308c\u306b\u95a2\u3057\u3066\u306f\u6a19\u6e96\u7684\u306a\u4f7f\u3044\u5206\u3051\u306e\u30eb\u30fc\u30eb\u304c\u3042\u308a\u305d\u3046\u3067\u3059\u306d(\u8981\u8abf\u67fb)\u3002\u3002"),(0,l.kt)("h2",{id:"logrus-\u3092\u4f7f\u3063\u3066\u30ed\u30b0\u3092\u69cb\u9020\u5316\u3059\u308b"},"logrus \u3092\u4f7f\u3063\u3066\u30ed\u30b0\u3092\u69cb\u9020\u5316\u3059\u308b"),(0,l.kt)("p",null,"\u524d\u63d0\u3068\u3057\u3066web\u30b7\u30b9\u30c6\u30e0\u3084\u30d0\u30c3\u30c1\u30b7\u30b9\u30c6\u30e0\u306a\u3069\u3092\u60f3\u5b9a\u3057\u3066\u3044\u307e\u3059\u3002CLI\u30c4\u30fc\u30eb\u306a\u3089\u3070\u8a71\u306f\u5909\u308f\u308b\u3067\u3057\u3087\u3046\u3002\nJSON\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u3067\u51fa\u529b\u3057\u3066fluentd\u3067Elasticsearch\u306b\u30d5\u30a9\u30ef\u30fc\u30c9\u3059\u308b\u306e\u304c\u500b\u4eba\u7684\u306b\u3088\u304f\u3042\u308b\u30d1\u30bf\u30fc\u30f3\u3067\u3059\u3002"),(0,l.kt)("p",null,"go-errlog\u3082logrus\u306e\u4f7f\u7528\u3092\u524d\u63d0\u3068\u3057\u3066\u3044\u307e\u3059\u3002"),(0,l.kt)("p",null,"\u30ed\u30ae\u30f3\u30b0\u306e\u30e9\u30a4\u30d6\u30e9\u30ea\u306f\u4ed6\u306b\u3082\u8272\u3005\u3042\u308b\u306e\u3067\u3001logrus\u3067\u6e80\u8db3\u3067\u304d\u306a\u3044\u4eba\u306f\u4ee5\u4e0b\u304b\u3089\u63a2\u3057\u3066\u307f\u308b\u3068\u3088\u3044\u3067\u3057\u3087\u3046\u3002"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/avelino/awesome-go#logging"},"https://github.com/avelino/awesome-go#logging")),(0,l.kt)("h2",{id:"\u30a8\u30e9\u30fc\u30ed\u30b0\u306f\u4e2d\u592e\u96c6\u6a29\u7684\u306b-main-\u306b\u8fd1\u3044\u6240\u3067\u51fa\u529b\u3059\u308b"},"\u30a8\u30e9\u30fc\u30ed\u30b0\u306f\u4e2d\u592e\u96c6\u6a29\u7684\u306b main \u306b\u8fd1\u3044\u6240\u3067\u51fa\u529b\u3059\u308b"),(0,l.kt)("p",null,"\u30a8\u30e9\u30fc\u30ed\u30b0\u3092\u3069\u3053\u3067\u51fa\u529b\u3059\u308b\u304b\u3067\u3059\u304c\u3001\u539f\u5247\u4e2d\u592e\u96c6\u6a29\u7684\u306b main \u306b\u8fd1\u3044\u6240\u3067\u51fa\u529b\u3057\u307e\u3059\u3002\n\u56e0\u307f\u306b\u4e2d\u592e\u96c6\u6a29\u7684\u3068\u3044\u3046\u8868\u73fe\u306f echo \u306e centralized error handling \u304b\u3089\u3082\u3058\u3063\u3066\u3044\u307e\u3059\u3002"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://echo.labstack.com/guide/error-handling"},"https://echo.labstack.com/guide/error-handling")),(0,l.kt)("p",null,"error \u304c\u767a\u751f\u3057\u3066\u3082\u3059\u3050\u30ed\u30b0\u3092\u5410\u304f\u306e\u3067\u306f\u306a\u304f\u3001error \u3092\u95a2\u6570\u306e\u623b\u308a\u5024\u3068\u3057\u3066\u8fd4\u3057\u3001\u30ed\u30ae\u30f3\u30b0\u3059\u308b\u8cac\u52d9\u3092\u89aa\u306b\u59d4\u8b72\u3057\u307e\u3059\u3002\nGo\u3067\u306f\u4ee5\u4e0b\u306e\u3088\u3046\u306a\u30a4\u30c7\u30a3\u30aa\u30e0\u304c\u3088\u304f\u898b\u3089\u308c\u307e\u3059\u306d\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},"if err != nil {\n    return err\n}\n")),(0,l.kt)("h2",{id:"\u30ed\u30ae\u30f3\u30b0\u306b\u5fc5\u8981\u306a\u60c5\u5831\u3092\u623b\u308a\u5024\u306eerror\u306b\u542b\u3081\u308b"},"\u30ed\u30ae\u30f3\u30b0\u306b\u5fc5\u8981\u306a\u60c5\u5831\u3092\u623b\u308a\u5024\u306eerror\u306b\u542b\u3081\u308b"),(0,l.kt)("p",null,"\u4e0a\u8a18\u306e\u30b3\u30fc\u30c9\u3067\u554f\u984c\u306a\u306e\u306f\u3001\u30a8\u30e9\u30fc\u306b\u95a2\u3059\u308b\u60c5\u5831\u304c\u6b20\u640d\u3059\u308b\u3053\u3068\u304c\u3042\u308b\u3053\u3068\u3067\u3059\u3002"),(0,l.kt)("p",null,"\u3053\u308c\u306b\u95a2\u3057\u3066\u306f\u4ee5\u4e0b\u306e\u8a18\u4e8b\u304c\u53c2\u8003\u306b\u306a\u308a\u307e\u3059\u3002"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://deeeet.com/writing/2016/04/25/go-pkg-errors/"},"https://deeeet.com/writing/2016/04/25/go-pkg-errors/")),(0,l.kt)("p",null,"\u30a8\u30e9\u30fc\u306b\u95a2\u3059\u308b\u60c5\u5831\u306b\u306f2\u7a2e\u985e\u3042\u308b\u3068\u500b\u4eba\u7684\u306b\u8003\u3048\u3066\u3044\u3066\u300c\u30e1\u30c3\u30bb\u30fc\u30b8\u300d\u3068\u300c\u30e1\u30bf\u60c5\u5831\u300d\u306a\u3093\u3066\u98a8\u306b\u8133\u5185\u3067\u547c\u3093\u3067\u305f\u308a\u3057\u307e\u3059\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u30e1\u30c3\u30bb\u30fc\u30b8: \u30a8\u30e9\u30fc\u306e\u539f\u56e0\u3092\u793a\u3059human readable \u306a\u30c6\u30ad\u30b9\u30c8(",(0,l.kt)("a",{parentName:"li",href:"https://github.com/pkg/errors"},"pkg/errors"),"\u306f\u3053\u308c\u306b\u5bfe\u5fdc\u3057\u3066\u3044\u308b)",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u30ea\u30b9\u30c8\u306b\u306a\u308b"))),(0,l.kt)("li",{parentName:"ul"},"\u30e1\u30bf\u60c5\u5831: \u30a8\u30e9\u30fc\u306b\u95a2\u3059\u308b\u69cb\u9020\u5316\u3055\u308c\u305f\u30c7\u30fc\u30bf",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u30cf\u30c3\u30b7\u30e5\u306b\u306a\u308b")))),(0,l.kt)("p",null,"\u4f8b\u3048\u3070 foo \u3068\u3044\u3046\u30e6\u30fc\u30b6\u30fc\u540d\u304c\u65e2\u306b\u4f7f\u308f\u308c\u3066\u3044\u3066\u30e6\u30fc\u30b6\u30fc\u306e\u4f5c\u6210\u306b\u5931\u6557\u3057\u305f\u5834\u5408"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u30e1\u30c3\u30bb\u30fc\u30b8",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"username is already used"),(0,l.kt)("li",{parentName:"ul"},"invalid username"),(0,l.kt)("li",{parentName:"ul"},"failed to create a user"))),(0,l.kt)("li",{parentName:"ul"},"\u30e1\u30bf\u60c5\u5831",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"username: foo")))),(0,l.kt)("p",null,"\u3068\u8a00\u3063\u305f\u611f\u3058\u306b\u306a\u308a\u307e\u3059\u3002\n\u30e1\u30c3\u30bb\u30fc\u30b8\u306b\u30e1\u30bf\u60c5\u5831\u3092\u542b\u3081\u3066 ",(0,l.kt)("inlineCode",{parentName:"p"},'"foo" is invalid username')," \u3068\u3044\u3063\u305f\u98a8\u306b\u3082\u51fa\u6765\u307e\u3059\u304c\u3001\u305d\u3046\u3059\u308b\u3068\u691c\u7d22\u30fb\u96c6\u8a08\u3057\u3065\u3089\u304b\u3063\u305f\u308a\u3001\u30e1\u30c3\u30bb\u30fc\u30b8\u306e\u751f\u6210\u306b\u4e00\u624b\u9593\u304b\u304b\u3063\u305f\u308a\u3059\u308b\u306e\u3067\u30e1\u30c3\u30bb\u30fc\u30b8\u306b\u306f\u30e1\u30bf\u60c5\u5831\u3092\u542b\u3081\u307e\u305b\u3093\u3002"),(0,l.kt)("p",null,"pkg/errors \u3060\u3068\u30e1\u30bf\u60c5\u5831\u306b\u306f\u5bfe\u5fdc\u3067\u304d\u306a\u3044\u306e\u3067\u81ea\u5206\u3067\u30e9\u30a4\u30d6\u30e9\u30ea\u3092\u4f5c\u308a\u307e\u3057\u305f\u3002"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/suzuki-shunsuke/go-errlog"},"https://github.com/suzuki-shunsuke/go-errlog")),(0,l.kt)("p",null,"\u3053\u3093\u306a\u611f\u3058\u306b\u306a\u308a\u307e\u3059\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},'return errlog.Wrap(err, logrus.Fields{"username": "foo"}, "failed to create a user")\n')),(0,l.kt)("h2",{id:"error-\u306b\u542b\u3081\u308b\u60c5\u5831\u306e\u8cac\u52d9"},"error \u306b\u542b\u3081\u308b\u60c5\u5831\u306e\u8cac\u52d9"),(0,l.kt)("p",null,"\u4e0a\u8a18\u306e\u3088\u3046\u306b error \u306b\u60c5\u5831\u3092\u542b\u3081\u308b\u5834\u5408\u3001\u3069\u3053\u307e\u3067\u542b\u3081\u308b\u304b\u3068\u3044\u3046\u306e\u304c\u554f\u984c\u306b\u306a\u308a\u307e\u3059\u3002\n\u3053\u3053\u3067\u30d7\u30e9\u30af\u30c6\u30a3\u30b9\u3068\u3057\u3066\u3001\n",(0,l.kt)("strong",{parentName:"p"},"\u95a2\u6570\u304cerror\u3092\u8fd4\u3059\u5834\u5408\u3001\u305d\u306e\u95a2\u6570\u304c\u3082\u3063\u3066\u3044\u308b\u60c5\u5831\u306f\u5168\u3066\u542b\u3081\u308b\u8cac\u52d9\u304c\u3042\u308a\u3001\n\u9006\u306b\u5b50\u95a2\u6570\u304b\u3089\u8fd4\u3063\u3066\u304d\u305ferror\u306b\u306f\u5b50\u95a2\u6570\u306b\u6e21\u3063\u3066\u3044\u308b\u60c5\u5831\u304c\u542b\u307e\u308c\u3066\u3044\u308b\u306e\u3067\u547c\u3073\u51fa\u3057\u5143\u3067\u4ed8\u4e0e\u3059\u308b\u5fc5\u8981\u306f\u306a\u3044"),"\u3068\u3044\u3046\u3075\u3046\u306b\u3057\u3066\u3044\u307e\u3059\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},'func createUser(name string, age int) error {\n    if err := checkName(name); err != nil {\n        return errlog.Wrap(err, logrus.Fields{"age": age}, "failed to create a user")\n    }\n}\n')),(0,l.kt)("p",null,"\u3064\u307e\u308a\u4e0a\u306e\u30b3\u30fc\u30c9\u3067\u306f\u5b50\u95a2\u6570\u306b\u6e21\u3063\u3066\u3044\u308b\u30e1\u30bf\u60c5\u5831",(0,l.kt)("inlineCode",{parentName:"p"},"name"),"\u3084\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"invalid username")," \u306e\u3088\u3046\u306a\u30e1\u30c3\u30bb\u30fc\u30b8\u3092 ",(0,l.kt)("inlineCode",{parentName:"p"},"errlog.Wrap")," \u306b\u6e21\u3059\u5fc5\u8981\u306f\u3042\u308a\u307e\u305b\u3093\u3002\n\u4e0a\u8a18\u306e\u4f8b\u3060\u3068\u30a8\u30e9\u30fc\u306b\u95a2\u4fc2\u306a\u3044 ",(0,l.kt)("inlineCode",{parentName:"p"},"age")," \u3082\u6e21\u3059\u5fc5\u8981\u306f\u306a\u3044\u306e\u3067\u306f\u306a\u3044\u304b\u3068\u3082\u8003\u3048\u3089\u308c\u307e\u3059\u304c\u3001\u539f\u5247\u30ed\u30b0\u306b\u6b8b\u3059\u3053\u3068\u3068\u3057\u307e\u3059\u3002"),(0,l.kt)("p",null,"\u305f\u3060\u3057\u3001\u5b50\u95a2\u6570\u304c\u6a19\u6e96\u95a2\u6570\u3084\u30b5\u30fc\u30c9\u30d1\u30fc\u30c6\u30a3\u306e\u30e9\u30a4\u30d6\u30e9\u30ea\u306a\u3069\u3001\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u5916\u90e8\u3067\u5b9a\u7fa9\u3055\u308c\u305f\u95a2\u6570\u3067\u3042\u308c\u3070\u8a71\u306f\u5225\u3067\u3059\u3002\n\u305d\u308c\u3089\u304c\u3069\u306e\u3088\u3046\u306a\u30a8\u30e9\u30fc\u3092\u8fd4\u3059\u304b\u306f\u4fdd\u8a3c\u304c\u3042\u308a\u307e\u305b\u3093\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},'if f, err := os.Open(filename); err != nil {\n    return errlog.Wrap(err, logrus.Fields{"filename": filename}, "failed to open a file", "failed to create a user")\n}\n')),(0,l.kt)("p",null,"\u4e0a\u8a18\u306e\u4f8b\u3060\u3068\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"os.Open"),"\u306b\u6e21\u3057\u305f\u30e1\u30bf\u60c5\u5831 ",(0,l.kt)("inlineCode",{parentName:"p"},"filename")," \u3084 os.Open\u306b\u5931\u6557\u3057\u305f\u3053\u3068\u3092\u793a\u3059 ",(0,l.kt)("inlineCode",{parentName:"p"},"failed to open a file")," \u3068\u3044\u3063\u305f\u30e1\u30c3\u30bb\u30fc\u30b8\u3082",(0,l.kt)("inlineCode",{parentName:"p"},"errlog.Wrap"),"\u306b\u6e21\u3057\u3066\u3044\u307e\u3059\u3002"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"errlog.Wrap")," \u306f\u8907\u6570\u306e\u30e1\u30c3\u30bb\u30fc\u30b8\u3092\u6e21\u305b\u308b\u3088\u3046\u306b\u306a\u3063\u3066\u3044\u307e\u3059\u3002\n\u30e1\u30c3\u30bb\u30fc\u30b8\u306e\u9806\u756a\u306f\u5de6\u304b\u3089\u30a4\u30d9\u30f3\u30c8\u304c\u767a\u751f\u3057\u305f\u9806\u306b\u306a\u308b\u3088\u3046\u306b\u3057\u307e\u3059\u3002\n\u4e0a\u8a18\u306e\u4f8b\u3060\u3068\u300c\u30d5\u30a1\u30a4\u30eb\u306e\u30aa\u30fc\u30d7\u30f3\u306b\u5931\u6557\u300d\u3057\u305f\u7d50\u679c\u3001\u300c\u30e6\u30fc\u30b6\u306e\u4f5c\u6210\u306b\u5931\u6557\u300d\u3059\u308b\u3068\u3044\u3046\u9806\u5e8f\u306b\u306a\u308a\u307e\u3059\u3002"),(0,l.kt)("h2",{id:"\u30a8\u30e9\u30fc\u306e\u30ed\u30ae\u30f3\u30b0\u306f\u30b7\u30f3\u30d7\u30eb\u306b"},"\u30a8\u30e9\u30fc\u306e\u30ed\u30ae\u30f3\u30b0\u306f\u30b7\u30f3\u30d7\u30eb\u306b"),(0,l.kt)("p",null,"go-errlog\u3067\u306f\u30b7\u30f3\u30d7\u30eb\u306b\u30ed\u30ae\u30f3\u30b0\u3092\u8a18\u8ff0\u3067\u304d\u307e\u3059\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},'logger := errlog.NewLogger(nil)\n// err != nil \u306a\u3089 logging \u3059\u308b\n// err \u304c\u30e1\u30bf\u60c5\u5831\u3092\u6301\u3063\u3066\u305f\u3089 logrus\u3067\u69cb\u9020\u5316\u3057\u3066\u30ed\u30ae\u30f3\u30b0\u3059\u308b\n// \u30e1\u30c3\u30bb\u30fc\u30b8\u3082 pkg/errors \u306e\u3088\u3046\u306b\u4e00\u3064\u306e\u30c6\u30ad\u30b9\u30c8\u306b\u9023\u7d50\u3057\u3066\u30ed\u30ae\u30f3\u30b0\nlogger.Fatal(createUser("foo", 10))\n')),(0,l.kt)("h2",{id:"\u305d\u306e\u4ed6-go-errlog-\u306e\u6a5f\u80fd"},"\u305d\u306e\u4ed6 go-errlog \u306e\u6a5f\u80fd"),(0,l.kt)("p",null,"\u30e1\u30bf\u60c5\u5831\u3084\u30e1\u30c3\u30bb\u30fc\u30b8\u306b\u3088\u3063\u3066\u6761\u4ef6\u5206\u5c90\u3057\u305f\u308a\u51fa\u6765\u308b\u3088\u3046\u306b\u30d8\u30eb\u30d1\u30fc\u95a2\u6570\u3092\u5e7e\u3064\u304b\u63d0\u4f9b\u3057\u3066\u3044\u307e\u3059\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"CheckField"),(0,l.kt)("li",{parentName:"ul"},"HasField"),(0,l.kt)("li",{parentName:"ul"},"HasMsg")),(0,l.kt)("p",null,"\u8a73\u7d30\u306f",(0,l.kt)("a",{parentName:"p",href:"https://godoc.org/github.com/suzuki-shunsuke/go-errlog"},"GoDoc"),"\u3084\u30bd\u30fc\u30b9\u30b3\u30fc\u30c9\u3092\u898b\u3066\u304f\u3060\u3055\u3044\u3002"),(0,l.kt)("h2",{id:"\u6700\u5f8c\u306b"},"\u6700\u5f8c\u306b"),(0,l.kt)("p",null,"\u8272\u3005\u66f8\u3044\u3066\u3057\u307e\u3044\u307e\u3057\u305f\u304c\u3001\u4e00\u756a\u8a00\u3044\u305f\u304b\u3063\u305f\u3053\u3068\u306f"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},"\u95a2\u6570\u304cerror\u3092\u8fd4\u3059\u5834\u5408\u3001\u305d\u306e\u95a2\u6570\u304c\u3082\u3063\u3066\u3044\u308b\u60c5\u5831\u306f\u5168\u3066\u542b\u3081\u308b\u8cac\u52d9\u304c\u3042\u308a\u3001\n\u9006\u306b\u5b50\u95a2\u6570\u304b\u3089\u8fd4\u3063\u3066\u304d\u305ferror\u306b\u306f\u5b50\u95a2\u6570\u306b\u6e21\u3063\u3066\u3044\u308b\u60c5\u5831\u304c\u542b\u307e\u308c\u3066\u3044\u308b\u306e\u3067\u547c\u3073\u51fa\u3057\u5143\u3067\u4ed8\u4e0e\u3059\u308b\u5fc5\u8981\u306f\u306a\u3044"),"\u3068\u3044\u3046\u3075\u3046\u306b\u3057\u3066\u3044\u307e\u3059\u3002"),(0,l.kt)("p",{parentName:"blockquote"},"\u305f\u3060\u3057\u3001\u5b50\u95a2\u6570\u304c\u6a19\u6e96\u95a2\u6570\u3084\u30b5\u30fc\u30c9\u30d1\u30fc\u30c6\u30a3\u306e\u30e9\u30a4\u30d6\u30e9\u30ea\u306a\u3069\u3001\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u5916\u90e8\u3067\u5b9a\u7fa9\u3055\u308c\u305f\u95a2\u6570\u3067\u3042\u308c\u3070\u8a71\u306f\u5225\u3067\u3059\u3002")),(0,l.kt)("p",null,"\u306e\u90e8\u5206\u3067\u3059\u3002\u3053\u306e\u8fba\u306f\u5143\u3005\u81ea\u5206\u306e\u4e2d\u3067\u30eb\u30fc\u30eb\u304c\u6c7a\u307e\u3063\u3066\u306a\u304f\u3066\u305a\u3063\u3068\u30e2\u30e4\u30e2\u30e4\u3057\u3066\u3066\u3001\n\u30b3\u30fc\u30c9\u3092\u66f8\u304f\u305f\u3073\u306b\u3076\u308c\u3066\u305f\u306e\u3067\u3059\u304c\u3001\u300c\u3053\u3046\u3059\u308c\u3070\u3044\u3051\u308b\u3093\u3058\u3083\u306a\u3044\u304b\u300d\u3068\u601d\u3044\u3064\u304d\u3001\u305d\u306e\u5b9f\u88c5\u3092\u88dc\u52a9\u3059\u308b\u30e9\u30a4\u30d6\u30e9\u30ea\u3092\u958b\u767a\u3057\u3001\n\u5b9f\u8df5\u3057\u305f\u3068\u3053\u308d\u4eca\u306e\u6240\u305d\u3053\u305d\u3053\u3046\u307e\u304f\u884c\u3063\u3066\u3044\u307e\u3059\u3002\n\u305f\u3060\u307e\u3060\u65e5\u304c\u6d45\u3044\u306e\u3067\u5c11\u3057\u305a\u3064\u30d6\u30e9\u30c3\u30b7\u30e5\u30a2\u30c3\u30d7\u3055\u308c\u3066\u3044\u304f\u90e8\u5206\u3082\u3042\u308b\u3068\u601d\u3044\u307e\u3059\u304c\u3001\n\u305d\u306e\u5834\u5408\u3067\u3082\u300c\u306a\u3093\u3068\u306a\u304f\u300d\u3067\u306f\u306a\u304f\u3001\u53ef\u80fd\u306a\u9650\u308a\u660e\u6587\u5316\u3057\u3066\u3044\u304f\u3053\u3068\u3067\u3001\u8ff7\u3044\u3092\u306a\u304f\u3057\u3001\u30b3\u30fc\u30c9\u3068\u30ed\u30b0\u306e\u54c1\u8cea\u3092\u4e0a\u3052\u3066\u3044\u304d\u305f\u3044\u3068\u601d\u3044\u307e\u3059\u3002"))}k.isMDXComponent=!0}}]);