"use strict";(self.webpackChunktechblog_szksh_cloud_github_io=self.webpackChunktechblog_szksh_cloud_github_io||[]).push([[990],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>h});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),u=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return o.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),c=u(n),m=a,h=c["".concat(l,".").concat(m)]||c[m]||d[m]||r;return n?o.createElement(h,i(i({ref:t},s),{},{components:n})):o.createElement(h,i({ref:t},s))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[c]="string"==typeof e?e:a,i[1]=p;for(var u=2;u<r;u++)i[u]=n[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7922:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>p,toc:()=>u});var o=n(7462),a=(n(7294),n(3905));const r={title:"Renovate \u3068 Dependabot \u306e\u6bd4\u8f03",date:new Date("2020-12-05T03:37:17.000Z"),tags:["dependabot","renovate"],authors:["suzuki-shunsuke"]},i=void 0,p={permalink:"/compare-renovate-dependabot",source:"@site/blog/compare-renovate-dependabot.md",title:"Renovate \u3068 Dependabot \u306e\u6bd4\u8f03",description:"\u666e\u6bb5 Renovate \u3092\u4e3b\u306b\u4f7f\u3063\u3066\u3044\u308b\u81ea\u5206\u304c\u3001 Dependabot \u3068 Renovate \u306e\u9055\u3044\u306b\u3064\u3044\u3066\u8abf\u3079\u3066\u307f\u307e\u3057\u305f\u3002",date:"2020-12-05T03:37:17.000Z",formattedDate:"December 5, 2020",tags:[{label:"dependabot",permalink:"/tags/dependabot"},{label:"renovate",permalink:"/tags/renovate"}],readingTime:4.235,truncated:!1,authors:[{name:"Shunsuke Suzuki",title:"Platform Engineer / OSS Developer / Go / Terraform",url:"https://github.com/suzuki-shunsuke",imageURL:"https://github.com/suzuki-shunsuke.png",key:"suzuki-shunsuke"}],frontMatter:{title:"Renovate \u3068 Dependabot \u306e\u6bd4\u8f03",date:"2020-12-05T03:37:17.000Z",tags:["dependabot","renovate"],authors:["suzuki-shunsuke"]},prevItem:{title:"Renovate \u306e PR \u306b\u4fbf\u5229\u306a\u30ea\u30f3\u30af\u3092\u8ffd\u52a0",permalink:"/renovate-add-compare"},nextItem:{title:"Terraform \u306e Docker Provider \u306e Collaborator \u306b\u306a\u308a\u307e\u3057\u305f",permalink:"/collaborator-of-terraform-docker-provider"}},l={authorsImageUrls:[void 0]},u=[{value:"\u8a2d\u5b9a\u9805\u76ee\u306e\u6570",id:"\u8a2d\u5b9a\u9805\u76ee\u306e\u6570",level:2},{value:"scheduling",id:"scheduling",level:2},{value:"Dependabot \u306f 1 \u500b 1 \u500b\u8a2d\u5b9a\u3057\u306a\u3044\u3068\u3044\u3051\u306a\u3044\uff1f",id:"dependabot-\u306f-1-\u500b-1-\u500b\u8a2d\u5b9a\u3057\u306a\u3044\u3068\u3044\u3051\u306a\u3044",level:2},{value:"Renovate \u306f .circleci/config.yml \u306a\u3069\u306e update \u3082\u30b5\u30dd\u30fc\u30c8",id:"renovate-\u306f-circleciconfigyml-\u306a\u3069\u306e-update-\u3082\u30b5\u30dd\u30fc\u30c8",level:2},{value:"Renovate \u306f\u6b63\u898f\u8868\u73fe\u306b\u3088\u308b update \u3092\u30b5\u30dd\u30fc\u30c8",id:"renovate-\u306f\u6b63\u898f\u8868\u73fe\u306b\u3088\u308b-update-\u3092\u30b5\u30dd\u30fc\u30c8",level:2},{value:"Renovate \u306f Grouping \u3092\u30b5\u30dd\u30fc\u30c8",id:"renovate-\u306f-grouping-\u3092\u30b5\u30dd\u30fc\u30c8",level:2},{value:"Renovate \u3067 PR \u3092\u307e\u3068\u3081\u3089\u308c\u305f\u304f\u306a\u3044\u5834\u5408\u306f additionalBranchPrefix \u306a\u3069\u306e\u8a2d\u5b9a\u304c\u5fc5\u8981",id:"renovate-\u3067-pr-\u3092\u307e\u3068\u3081\u3089\u308c\u305f\u304f\u306a\u3044\u5834\u5408\u306f-additionalbranchprefix-\u306a\u3069\u306e\u8a2d\u5b9a\u304c\u5fc5\u8981",level:2},{value:"Renovate \u306f\u8a2d\u5b9a\u3092\u30e9\u30a4\u30d6\u30e9\u30ea\u306e\u3088\u3046\u306b\u5171\u6709\u3067\u304d\u308b",id:"renovate-\u306f\u8a2d\u5b9a\u3092\u30e9\u30a4\u30d6\u30e9\u30ea\u306e\u3088\u3046\u306b\u5171\u6709\u3067\u304d\u308b",level:2}],s={toc:u};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u666e\u6bb5 Renovate \u3092\u4e3b\u306b\u4f7f\u3063\u3066\u3044\u308b\u81ea\u5206\u304c\u3001 Dependabot \u3068 Renovate \u306e\u9055\u3044\u306b\u3064\u3044\u3066\u8abf\u3079\u3066\u307f\u307e\u3057\u305f\u3002\n\u666e\u6bb5 Renovate \u3092\u4e3b\u306b\u4f7f\u3063\u3066\u3044\u308b\u306e\u3067\u3001 Renovate \u5bc4\u308a\u306e\u5185\u5bb9\u306b\u306a\u3063\u3066\u3044\u307e\u3059\u3002\n\u6c17\u5206\u3092\u5bb3\u3059\u308b\u4eba\u304c\u3044\u307e\u3057\u305f\u3089\u7533\u3057\u8a33\u3042\u308a\u307e\u305b\u3093\u3002\nDependabot \u306e\u7406\u89e3\u304c\u6d45\u3044\u306e\u3067\u9593\u9055\u3063\u3066\u305f\u3089\u6307\u6458\u3057\u3066\u3082\u3089\u3048\u308b\u3068\u52a9\u304b\u308a\u307e\u3059\u3002\n2020-12-01 \u6642\u70b9\u306e\u60c5\u5831\u3067\u3059\u3002"),(0,a.kt)("h2",{id:"\u8a2d\u5b9a\u9805\u76ee\u306e\u6570"},"\u8a2d\u5b9a\u9805\u76ee\u306e\u6570"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.github.com/en/free-pro-team@latest/github/administering-a-repository/configuration-options-for-dependency-updates#directory"},"https://docs.github.com/en/free-pro-team@latest/github/administering-a-repository/configuration-options-for-dependency-updates#directory")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.renovatebot.com/configuration-options/"},"https://docs.renovatebot.com/configuration-options/"))),(0,a.kt)("p",null,"\u307e\u305a\u306f\u8a2d\u5b9a\u306e\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u3092\u898b\u6bd4\u3079\u308b\u3068\u3001 Renovate \u306e\u307b\u3046\u304c\u8a2d\u5b9a\u9805\u76ee\u304c\u591a\u3044\u3067\u3059\u3002\nRenovate \u306f\u3088\u304f\u8a00\u3046\u3068\u8a2d\u5b9a\u9805\u76ee\u304c\u591a\u304f\u3001\u67d4\u8edf\u306a\u8a2d\u5b9a\u304c\u3067\u304d\u308b\u3068\u3044\u3048\u308b\u4e00\u65b9\u3001\u3059\u3079\u3066\u306e\u8a2d\u5b9a\u3092\u7406\u89e3\u3057\u4f7f\u3044\u3053\u306a\u3059\u306e\u306f\u96e3\u3057\u3044\u3067\u3059\u3002\n\u6c7a\u3057\u3066\u65e5\u672c\u8a9e\u306e\u60c5\u5831\u3082\u591a\u304f\u306a\u3044\u306e\u3067\u3001\u8272\u3005\u8a66\u884c\u932f\u8aa4\u3057\u305f\u308a\u3059\u308b\u3053\u3068\u3082\u3042\u308a\u307e\u3059\u3002\nDependabot \u306e\u5834\u5408\u3001\u8a2d\u5b9a\u304c\u305d\u3093\u306a\u306b\u591a\u304f\u306a\u304f\u5272\u3068\u5206\u304b\u308a\u3084\u3059\u3044\u5370\u8c61\u304c\u3042\u308a\u307e\u3059\u3002"),(0,a.kt)("h2",{id:"scheduling"},"scheduling"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.github.com/en/free-pro-team@latest/github/administering-a-repository/configuration-options-for-dependency-updates#scheduleinterval"},"https://docs.github.com/en/free-pro-team@latest/github/administering-a-repository/configuration-options-for-dependency-updates#scheduleinterval")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.renovatebot.com/configuration-options/#prhourlylimit"},"https://docs.renovatebot.com/configuration-options/#prhourlylimit")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.renovatebot.com/configuration-options/#schedule"},"https://docs.renovatebot.com/configuration-options/#schedule"))),(0,a.kt)("p",null,"Dependabot \u306f schedule \u306e\u8a2d\u5b9a\u304c\u5fc5\u9808\u3067\u3059\u3002\nRenovate \u3067\u3082 schedule \u306e\u8a2d\u5b9a\u306f\u51fa\u6765\u307e\u3059\u3002"),(0,a.kt)("h2",{id:"dependabot-\u306f-1-\u500b-1-\u500b\u8a2d\u5b9a\u3057\u306a\u3044\u3068\u3044\u3051\u306a\u3044"},"Dependabot \u306f 1 \u500b 1 \u500b\u8a2d\u5b9a\u3057\u306a\u3044\u3068\u3044\u3051\u306a\u3044\uff1f"),(0,a.kt)("p",null,"Renovate \u306f renovate.json \u3055\u3048\u4f5c\u308c\u3070\u4e2d\u8eab\u304c\u307b\u307c\u7a7a\u3067\u3082\u52dd\u624b\u306b update \u3055\u308c\u307e\u3059\u3002\n\u9006\u306b\u5bfe\u8c61\u3092\u7d5e\u308a\u305f\u304b\u3063\u305f\u3089\u660e\u793a\u7684\u306b\u6307\u5b9a\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"),(0,a.kt)("p",null,"\u4e00\u65b9\u3067 Dependabot \u306f\u5bfe\u8c61\u3092 1 \u3064 1 \u3064\u6307\u5b9a\u3057\u306a\u3044\u3068\u3044\u3051\u306a\u3044\u3088\u3046\u3067\u3059\u306d\u3002"),(0,a.kt)("p",null,"\u3082\u3061\u308d\u3093\u3001\u3053\u308c\u306f\u5fc5\u305a\u3057\u3082\u60aa\u3044\u3053\u3068\u3067\u306f\u306a\u3044\u3067\u3059\u3057\u3001\u826f\u3044\u9762\u3082\u3042\u308a\u307e\u3059\u3002\n\u8a2d\u5b9a\u304c\u660e\u793a\u7684\u306b\u66f8\u304b\u308c\u3066\u3044\u305f\u307b\u3046\u304c\u6319\u52d5\u3092\u7406\u89e3\u3057\u3084\u3059\u3044\u3067\u3059\u3057\u306d\u3002"),(0,a.kt)("p",null,"\u305f\u3060\u3057\u3001\u6570\u304c\u591a\u3044\u3068\u5927\u5909\u3067\u3059\u3057\u3001\u30b5\u30fc\u30d3\u30b9\u3092\u8ffd\u52a0\u3059\u308b\u305f\u3073\u306b\u8a2d\u5b9a\u3092\u8ffd\u52a0\u3057\u306a\u3044\u3068\u3044\u3051\u306a\u3055\u305d\u3046\u3067\u3059\u3002"),(0,a.kt)("h2",{id:"renovate-\u306f-circleciconfigyml-\u306a\u3069\u306e-update-\u3082\u30b5\u30dd\u30fc\u30c8"},"Renovate \u306f .circleci/config.yml \u306a\u3069\u306e update \u3082\u30b5\u30dd\u30fc\u30c8"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.renovatebot.com/modules/manager/"},"https://docs.renovatebot.com/modules/manager/")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.github.com/en/free-pro-team@latest/github/administering-a-repository/configuration-options-for-dependency-updates#package-ecosystem"},"https://docs.github.com/en/free-pro-team@latest/github/administering-a-repository/configuration-options-for-dependency-updates#package-ecosystem"))),(0,a.kt)("p",null,"Renovate \u306f .circleci/config.yml \u3084 .drone.yml \u306e Docker image \u306e\u30d0\u30fc\u30b8\u30e7\u30f3\u306e update \u3082\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u3059\u3002\nDependabot \u306f\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u306a\u3044\u3088\u3046\u3067\u3059\u306d\u3002"),(0,a.kt)("h2",{id:"renovate-\u306f\u6b63\u898f\u8868\u73fe\u306b\u3088\u308b-update-\u3092\u30b5\u30dd\u30fc\u30c8"},"Renovate \u306f\u6b63\u898f\u8868\u73fe\u306b\u3088\u308b update \u3092\u30b5\u30dd\u30fc\u30c8"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://docs.renovatebot.com/modules/manager/regex/"},"https://docs.renovatebot.com/modules/manager/regex/")),(0,a.kt)("p",null,"GitHub Releases \u304b\u3089\u30d0\u30a4\u30ca\u30ea\u3092\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u3057\u3066\u304d\u3066\u3044\u308b\u3088\u3046\u306a\u5834\u5408\u3067\u3082\u3001\nRenovate \u3067\u306f Regex Manager \u3092\u4f7f\u3048\u3070 update \u51fa\u6765\u307e\u3059\u3002\nCI \u3067\u4f7f\u3063\u3066\u3044\u308b\u30c4\u30fc\u30eb\u3092 GitHub Releases \u304b\u3089\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u3057\u3066\u304d\u3066\u3044\u308b\u30b1\u30fc\u30b9\u304c\u591a\u3044\u306e\u3067\u91cd\u5b9d\u3057\u3066\u3044\u307e\u3059\u3002"),(0,a.kt)("h2",{id:"renovate-\u306f-grouping-\u3092\u30b5\u30dd\u30fc\u30c8"},"Renovate \u306f Grouping \u3092\u30b5\u30dd\u30fc\u30c8"),(0,a.kt)("p",null,"Renovate \u306f\u8907\u6570\u306e\u30bd\u30d5\u30c8\u30a6\u30a7\u30a2\u306e\u30a2\u30c3\u30d7\u30c7\u30fc\u30c8\u3092\u540c\u3058 PR \u3067\u307e\u3068\u3081\u3066 update \u3067\u304d\u307e\u3059\u3002"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://docs.renovatebot.com/configuration-options/#group"},"https://docs.renovatebot.com/configuration-options/#group")),(0,a.kt)("h2",{id:"renovate-\u3067-pr-\u3092\u307e\u3068\u3081\u3089\u308c\u305f\u304f\u306a\u3044\u5834\u5408\u306f-additionalbranchprefix-\u306a\u3069\u306e\u8a2d\u5b9a\u304c\u5fc5\u8981"},"Renovate \u3067 PR \u3092\u307e\u3068\u3081\u3089\u308c\u305f\u304f\u306a\u3044\u5834\u5408\u306f additionalBranchPrefix \u306a\u3069\u306e\u8a2d\u5b9a\u304c\u5fc5\u8981"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://docs.renovatebot.com/configuration-options/#additionalbranchprefix"},"https://docs.renovatebot.com/configuration-options/#additionalbranchprefix")),(0,a.kt)("p",null,"Renovate \u3060\u3068\u540c\u3058\u30d1\u30c3\u30b1\u30fc\u30b8\u3092\u8907\u6570\u306e\u30b5\u30fc\u30d3\u30b9\u3067\u4f7f\u3063\u3066\u3044\u308b\u5834\u5408\u3001\u4f55\u3082\u8a2d\u5b9a\u3057\u306a\u3044\u3068 1 \u3064\u306e PR \u306b\u66f4\u65b0\u304c\u307e\u3068\u3081\u3089\u308c\u3066\u3057\u307e\u3044\u307e\u3059\u3002\nadditionalBranchPrefix \u3092\u8a2d\u5b9a\u3059\u308b\u3053\u3068\u3067\u56de\u907f\u304c\u3067\u304d\u307e\u3059\u304c\u3001\u3053\u306e\u89e3\u6c7a\u7b56\u3092\u898b\u3064\u3051\u308b\u307e\u3067\u306b\u5c11\u3005\u82e6\u52b4\u3057\u307e\u3057\u305f\u3002\nRenovate \u306e\u96e3\u3057\u3044\u3068\u3053\u308d\u3067\u3059\u306d\u3002"),(0,a.kt)("h2",{id:"renovate-\u306f\u8a2d\u5b9a\u3092\u30e9\u30a4\u30d6\u30e9\u30ea\u306e\u3088\u3046\u306b\u5171\u6709\u3067\u304d\u308b"},"Renovate \u306f\u8a2d\u5b9a\u3092\u30e9\u30a4\u30d6\u30e9\u30ea\u306e\u3088\u3046\u306b\u5171\u6709\u3067\u304d\u308b"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://docs.renovatebot.com/config-presets/"},"https://docs.renovatebot.com/config-presets/")),(0,a.kt)("p",null,"Renovate \u306f\u6c4e\u7528\u7684\u306a\u8a2d\u5b9a\u3092 OSS \u306e\u3088\u3046\u306b\u516c\u958b\u3057\u518d\u5229\u7528\u3059\u308b\u3053\u3068\u304c\u51fa\u6765\u307e\u3059\u3002\n\u4ed5\u4e8b\u3060\u3068\u7279\u306b\u4f7f\u3063\u3066\u306a\u3044\u3067\u3059\u304c\u3001\n\u500b\u4eba\u306e Go \u306e Project \u306a\u3093\u304b\u306f\u540c\u3058\u3082\u306e\u3092\u4f7f\u3063\u3066\u3044\u3066\u3001\u4fbf\u5229\u3067\u3059\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/suzuki-shunsuke/renovate-config/blob/master/golang.json"},"https://github.com/suzuki-shunsuke/renovate-config/blob/master/golang.json")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/suzuki-shunsuke/github-comment/blob/master/renovate.json"},"https://github.com/suzuki-shunsuke/github-comment/blob/master/renovate.json"))))}c.isMDXComponent=!0}}]);