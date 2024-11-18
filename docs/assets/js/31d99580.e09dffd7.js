"use strict";(self.webpackChunktechblog_szksh_cloud_github_io=self.webpackChunktechblog_szksh_cloud_github_io||[]).push([[7124],{5680:(e,t,r)=>{r.d(t,{xA:()=>l,yg:()=>d});var n=r(6540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},i="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),i=c(r),g=a,d=i["".concat(p,".").concat(g)]||i[g]||m[g]||o;return r?n.createElement(d,u(u({ref:t},l),{},{components:r})):n.createElement(d,u({ref:t},l))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,u=new Array(o);u[0]=g;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[i]="string"==typeof e?e:a,u[1]=s;for(var c=2;c<o;c++)u[c]=r[c];return n.createElement.apply(null,u)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},3038:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>u,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=r(8168),a=(r(6540),r(5680));const o={title:"Renovate \u306e PR \u306b\u4fbf\u5229\u306a\u30ea\u30f3\u30af\u3092\u8ffd\u52a0",date:new Date("2020-12-28T05:32:31.000Z"),tags:["renovate"],authors:["suzuki-shunsuke"]},u=void 0,s={permalink:"/renovate-add-compare",source:"@site/blog/renovate-add-compare.md",title:"Renovate \u306e PR \u306b\u4fbf\u5229\u306a\u30ea\u30f3\u30af\u3092\u8ffd\u52a0",description:"Renovate \u306b\u3088\u308b PR \u3092\u30ec\u30d3\u30e5\u30fc\u3059\u308b\u969b\u3001\u5dee\u5206\u304c\u306a\u3093\u306a\u306e\u304b\u5206\u304b\u308a\u3065\u3089\u3044\u3068\u304d\u304c\u3042\u308a\u307e\u3059\u3002",date:"2020-12-28T05:32:31.000Z",formattedDate:"December 28, 2020",tags:[{label:"renovate",permalink:"/tags/renovate"}],readingTime:1.24,hasTruncateMarker:!1,authors:[{name:"Shunsuke Suzuki",title:"Platform Engineer / OSS Developer / Go / Terraform",url:"https://github.com/suzuki-shunsuke",imageURL:"https://github.com/suzuki-shunsuke.png",key:"suzuki-shunsuke"}],frontMatter:{title:"Renovate \u306e PR \u306b\u4fbf\u5229\u306a\u30ea\u30f3\u30af\u3092\u8ffd\u52a0",date:"2020-12-28T05:32:31.000Z",tags:["renovate"],authors:["suzuki-shunsuke"]},prevItem:{title:"\u4ed5\u4e8b\u3067\u3084\u3063\u305f\u3053\u3068 2020-11-01 ~ 2020-11-30",permalink:"/2020/11/01/job-11-30"},nextItem:{title:"Renovate \u3068 Dependabot \u306e\u6bd4\u8f03",permalink:"/compare-renovate-dependabot"}},p={authorsImageUrls:[void 0]},c=[],l={toc:c},i="wrapper";function m(e){let{components:t,...r}=e;return(0,a.yg)(i,(0,n.A)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"Renovate \u306b\u3088\u308b PR \u3092\u30ec\u30d3\u30e5\u30fc\u3059\u308b\u969b\u3001\u5dee\u5206\u304c\u306a\u3093\u306a\u306e\u304b\u5206\u304b\u308a\u3065\u3089\u3044\u3068\u304d\u304c\u3042\u308a\u307e\u3059\u3002\n\u4f8b\u3048\u3070 data source \u304c github-release \u306e\u5834\u5408\u3001 PR \u306e description \u306b Release Note \u304c\u542b\u307e\u308c\u3066\u304a\u308a\u3001\u30b3\u30fc\u30c9\u306e\u5dee\u5206\u3082 link \u304c\u3042\u308b\u306e\u3067\u4fbf\u5229\u3067\u3059\u3002\n\u4e00\u65b9 helm data source \u306e\u5834\u5408\u3001 \u305d\u3046\u3044\u3063\u305f\u3082\u306e\u304c\u306a\u304f\u5dee\u5206\u304c\u306a\u3093\u306a\u306e\u304b\u5206\u304b\u3089\u306a\u3044\u3053\u3068\u304c\u3042\u308a\u307e\u3059\u3002\n\u305d\u3046\u3044\u3046\u5834\u5408\u3001 ",(0,a.yg)("a",{parentName:"p",href:"https://docs.renovatebot.com/configuration-options/#prbodynotes"},"prBodyNotes")," \u3092\u5229\u7528\u3057\u3066 link \u3092\u8ffd\u52a0\u3059\u308b\u3068\u4fbf\u5229\u3067\u3059\u3002"),(0,a.yg)("p",null,"\u4f8b\u3048\u3070\u3001 datadog helm chart \u306e\u5834\u5408"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "datasources": ["helm"],\n  "packageNames": ["datadog"],\n  "prBodyNotes": [\n    "[compare](https://github.com/DataDog/helm-charts/compare/datadog-{{currentVersion}}...datadog-{{newVersion}})"\n  ]\n}\n')),(0,a.yg)("p",null,"\u3068\u3059\u308b\u3068\u3001 PR \u306e description \u306b\u30ea\u30f3\u30af\u304c\u8ffd\u52a0\u3055\u308c\u307e\u3059\u3002\u5730\u5473\u3067\u3059\u304c\u4fbf\u5229\u3067\u3059\u3002\nRelease page \u3078\u306e\u30ea\u30f3\u30af\u3092\u8ffd\u52a0\u3057\u3066\u3082\u4fbf\u5229\u304b\u3082\u3057\u308c\u307e\u305b\u3093\u306d\u3002"),(0,a.yg)("p",null,"ex. ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/suzuki-shunsuke/test-renovate-2/pull/28"},"https://github.com/suzuki-shunsuke/test-renovate-2/pull/28")),(0,a.yg)("p",null,"template \u3067\u4f7f\u3048\u308b\u5909\u6570\u306f ",(0,a.yg)("a",{parentName:"p",href:"https://docs.renovatebot.com/templates/"},"https://docs.renovatebot.com/templates/")," \u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002\nhelm chart \u3054\u3068\u306b\u8a2d\u5b9a\u3092\u66f8\u304b\u306a\u3044\u3068\u3044\u3051\u306a\u3044\u306e\u304c\u9762\u5012\u3067\u3059\u304c\u3001\u4ed5\u65b9\u306a\u3044\u3067\u3059\u306d\u3002"))}m.isMDXComponent=!0}}]);