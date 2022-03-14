"use strict";(self.webpackChunktechblog_szksh_cloud_github_io=self.webpackChunktechblog_szksh_cloud_github_io||[]).push([[3445],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),s=c(n),d=a,k=s["".concat(u,".").concat(d)]||s[d]||m[d]||l;return n?r.createElement(k,i(i({ref:t},p),{},{components:n})):r.createElement(k,i({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=s;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var c=2;c<l;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},1222:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return m}});var r=n(7462),a=n(3366),l=(n(7294),n(3905)),i=["components"],o={title:"CircleCI \u306e run \u306e\u5b9f\u884c\u6642\u9593\u3092 DataDog \u306b\u9001\u308b",date:new Date("2020-05-23T05:20:53.000Z"),tags:["circleci","dd-time","datadog"],authors:["suzuki-shunsuke"]},u=void 0,c={permalink:"/send-circleci-run-execution-time-to-datadog",source:"@site/blog/send-circleci-run-execution-time-to-datadog.md",title:"CircleCI \u306e run \u306e\u5b9f\u884c\u6642\u9593\u3092 DataDog \u306b\u9001\u308b",description:"\u5c0f\u30cd\u30bf\u3067\u3059\u3002",date:"2020-05-23T05:20:53.000Z",formattedDate:"May 23, 2020",tags:[{label:"circleci",permalink:"/tags/circleci"},{label:"dd-time",permalink:"/tags/dd-time"},{label:"datadog",permalink:"/tags/datadog"}],readingTime:1.755,truncated:!1,authors:[{name:"Shunsuke Suzuki",title:"SRE / OSS Contributor / Tool Maker / Go / Terraform",url:"https://github.com/suzuki-shunsuke",imageURL:"https://github.com/suzuki-shunsuke.png",key:"suzuki-shunsuke"}],frontMatter:{title:"CircleCI \u306e run \u306e\u5b9f\u884c\u6642\u9593\u3092 DataDog \u306b\u9001\u308b",date:"2020-05-23T05:20:53.000Z",tags:["circleci","dd-time","datadog"],authors:["suzuki-shunsuke"]},prevItem:{title:"clap - \u7c21\u5358\u306b\u30c4\u30fc\u30eb\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b\u305f\u3081\u306e\u30c4\u30fc\u30eb\u3092\u4f5c\u3063\u305f",permalink:"/clap"},nextItem:{title:"CircleCI \u306e checkout \u306e\u6ce8\u610f\u70b9",permalink:"/circleci-checkout-default-branch"}},p={authorsImageUrls:[void 0]},m=[],s={toc:m};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u5c0f\u30cd\u30bf\u3067\u3059\u3002"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://techblog.szksh.cloud/dd-time/"},"dd-time")," \u3092\u4f7f\u3063\u3066 CircleCI \u306e ",(0,l.kt)("inlineCode",{parentName:"p"},"run")," \u3092\u4f7f\u3063\u305f\u30b3\u30de\u30f3\u30c9\u306e\u5b9f\u884c\u6642\u9593\u3092\u3069\u3046\u8a08\u6e2c\u3057\u305f\u3089\u3044\u3044\u306e\u304b\u3061\u3087\u3063\u3068\u8003\u3048\u307e\u3057\u305f\u3002"),(0,l.kt)("p",null,"\u4ee5\u524d\u3001\u30b3\u30de\u30f3\u30c9\u306e\u5b9f\u884c\u6642\u9593\u3092 DataDog \u306b\u9001\u308b\u30c4\u30fc\u30eb dd-time \u3092\u4f5c\u308a\u307e\u3057\u305f\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://techblog.szksh.cloud/dd-time/"},"https://techblog.szksh.cloud/dd-time/")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/suzuki-shunsuke/dd-time"},"https://github.com/suzuki-shunsuke/dd-time"))),(0,l.kt)("p",null,"\u3053\u308c\u306f\u57fa\u672c\u7684\u306b\u4ee5\u4e0b\u306e\u3088\u3046\u306b\u5f15\u6570\u3068\u3057\u3066 ",(0,l.kt)("inlineCode",{parentName:"p"},"--")," \u4ee5\u964d\u306b\u5b9f\u884c\u3059\u308b\u30b3\u30de\u30f3\u30c9\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"$ dd-time -m dd_time.execution_time -t command:docker-build -- docker build .\n")),(0,l.kt)("p",null,"\u5b9f\u884c\u3059\u308b\u30b9\u30af\u30ea\u30d7\u30c8\u3092\u6a19\u6e96\u5165\u529b\u3067\u6e21\u3057\u305f\u3044\u5834\u5408\u306f\u3053\u3046\u3057\u307e\u3059\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"$ curl https://example.com/install.sh | dd-time -m dd_time.execution_time -- sh\n")),(0,l.kt)("p",null,"\u3082\u3061\u308d\u3093\u30b7\u30a7\u30eb\u30b9\u30af\u30ea\u30d7\u30c8\u3067\u3042\u308b\u5fc5\u8981\u306f\u306a\u304f\u3066\u4f8b\u3048\u3070 Python \u3060\u3063\u305f\u3089\u3053\u3046\u306a\u308a\u307e\u3059\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"$ curl https://example.com/setup.py | dd-time -m dd_time.execution_time -- python\n")),(0,l.kt)("p",null,"CircleCI \u306e ",(0,l.kt)("inlineCode",{parentName:"p"},"run")," \u3067\u306f ",(0,l.kt)("inlineCode",{parentName:"p"},"shell")," \u30aa\u30d7\u30b7\u30e7\u30f3\u3067 shell \u3092\u6307\u5b9a\u3067\u304d\u307e\u3059\u3002"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://circleci.com/docs/2.0/configuration-reference/#run"},"https://circleci.com/docs/2.0/configuration-reference/#run")),(0,l.kt)("p",null,"\u306a\u306e\u3067 command \u5168\u4f53\u306e\u6642\u9593\u3092\u8a08\u6e2c\u3057\u305f\u3044\u5834\u5408\u306f\u3001 shell \u3092\u6b21\u306e\u3088\u3046\u306b\u3057\u307e\u3059\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"- run:\n    name: test dd-time\n    shell: /usr/local/bin/dd-time -m dd_time.test -- sh -eo pipefail\n    command: |\n      echo start\n      sleep 5\n      echo end\n")),(0,l.kt)("p",null,"\u3053\u3046\u3059\u308b\u3068 ",(0,l.kt)("inlineCode",{parentName:"p"},"shell")," \u4ee5\u5916\u3092\u5f04\u308b\u3053\u3068\u306a\u304f\u5b9f\u884c\u6642\u9593\u3092\u8a08\u6e2c\u3057\u3066 DataDog \u306b\u9001\u308b\u3053\u3068\u304c\u51fa\u6765\u307e\u3059\u3002"),(0,l.kt)("p",null,"\u3053\u306e ",(0,l.kt)("inlineCode",{parentName:"p"},"shell")," \u306e\u30ab\u30b9\u30bf\u30de\u30a4\u30ba\u306f dd-time \u306b\u9650\u3089\u305a\u4f7f\u3048\u308b\u304b\u3082\u77e5\u308c\u306a\u3044\u3067\u3059\u306d\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u30ed\u30b0\u3092\u3069\u3063\u304b\u306b\u9001\u3063\u305f\u308a\u3068\u304b"),(0,l.kt)("li",{parentName:"ul"},"\u30b3\u30de\u30f3\u30c9\u304c\u5931\u6557\u3057\u305f\u3089\u30a8\u30e9\u30fc\u3092\u63e1\u308a\u3064\u3076\u3057\u3064\u3064\u3069\u3063\u304b\u306b\u901a\u77e5\u3057\u305f\u308a\u3068\u304b"),(0,l.kt)("li",{parentName:"ul"},"etc")),(0,l.kt)("p",null,"\u4ee5\u4e0a\u3001\u5c0f\u30cd\u30bf\u3067\u3057\u305f\u3002"))}d.isMDXComponent=!0}}]);