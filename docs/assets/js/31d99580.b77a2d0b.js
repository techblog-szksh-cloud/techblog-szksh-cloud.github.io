"use strict";(self.webpackChunktechblog_szksh_cloud_github_io=self.webpackChunktechblog_szksh_cloud_github_io||[]).push([[6659],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),i=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=i(e.components);return r.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),m=i(n),f=o,d=m["".concat(u,".").concat(f)]||m[f]||s[f]||a;return n?r.createElement(d,c(c({ref:t},l),{},{components:n})):r.createElement(d,c({ref:t},l))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=m;var p={};for(var u in t)hasOwnProperty.call(t,u)&&(p[u]=t[u]);p.originalType=e,p.mdxType="string"==typeof e?e:o,c[1]=p;for(var i=2;i<a;i++)c[i]=n[i];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7535:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return p},metadata:function(){return i},toc:function(){return s}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),c=["components"],p={title:"Renovate \u306e PR \u306b\u4fbf\u5229\u306a\u30ea\u30f3\u30af\u3092\u8ffd\u52a0",date:new Date("2020-12-28T05:32:31.000Z"),archives:["2020/12"],tags:["renovate"]},u=void 0,i={permalink:"/renovate-add-compare",source:"@site/blog/renovate-add-compare.md",title:"Renovate \u306e PR \u306b\u4fbf\u5229\u306a\u30ea\u30f3\u30af\u3092\u8ffd\u52a0",description:"Renovate \u306b\u3088\u308b PR \u3092\u30ec\u30d3\u30e5\u30fc\u3059\u308b\u969b\u3001\u5dee\u5206\u304c\u306a\u3093\u306a\u306e\u304b\u5206\u304b\u308a\u3065\u3089\u3044\u3068\u304d\u304c\u3042\u308a\u307e\u3059\u3002",date:"2020-12-28T05:32:31.000Z",formattedDate:"December 28, 2020",tags:[{label:"renovate",permalink:"/tags/renovate"}],readingTime:1.24,truncated:!1,authors:[],frontMatter:{title:"Renovate \u306e PR \u306b\u4fbf\u5229\u306a\u30ea\u30f3\u30af\u3092\u8ffd\u52a0",date:"2020-12-28T05:32:31.000Z",archives:["2020/12"],tags:["renovate"]},prevItem:{title:"\u4ed5\u4e8b\u3067\u3084\u3063\u305f\u3053\u3068 2020-11-01 ~ 2020-11-30",permalink:"/2020/11/01/job-11-30"},nextItem:{title:"Renovate \u3068 Dependabot \u306e\u6bd4\u8f03",permalink:"/compare-renovate-dependabot"}},l={authorsImageUrls:[]},s=[],m={toc:s};function f(e){var t=e.components,n=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Renovate \u306b\u3088\u308b PR \u3092\u30ec\u30d3\u30e5\u30fc\u3059\u308b\u969b\u3001\u5dee\u5206\u304c\u306a\u3093\u306a\u306e\u304b\u5206\u304b\u308a\u3065\u3089\u3044\u3068\u304d\u304c\u3042\u308a\u307e\u3059\u3002\n\u4f8b\u3048\u3070 data source \u304c github-release \u306e\u5834\u5408\u3001 PR \u306e description \u306b Release Note \u304c\u542b\u307e\u308c\u3066\u304a\u308a\u3001\u30b3\u30fc\u30c9\u306e\u5dee\u5206\u3082 link \u304c\u3042\u308b\u306e\u3067\u4fbf\u5229\u3067\u3059\u3002\n\u4e00\u65b9 helm data source \u306e\u5834\u5408\u3001 \u305d\u3046\u3044\u3063\u305f\u3082\u306e\u304c\u306a\u304f\u5dee\u5206\u304c\u306a\u3093\u306a\u306e\u304b\u5206\u304b\u3089\u306a\u3044\u3053\u3068\u304c\u3042\u308a\u307e\u3059\u3002\n\u305d\u3046\u3044\u3046\u5834\u5408\u3001 ",(0,a.kt)("a",{parentName:"p",href:"https://docs.renovatebot.com/configuration-options/#prbodynotes"},"prBodyNotes")," \u3092\u5229\u7528\u3057\u3066 link \u3092\u8ffd\u52a0\u3059\u308b\u3068\u4fbf\u5229\u3067\u3059\u3002"),(0,a.kt)("p",null,"\u4f8b\u3048\u3070\u3001 datadog helm chart \u306e\u5834\u5408"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "datasources": ["helm"],\n  "packageNames": ["datadog"],\n  "prBodyNotes": [\n    "[compare](https://github.com/DataDog/helm-charts/compare/datadog-{{currentVersion}}...datadog-{{newVersion}})"\n  ]\n}\n')),(0,a.kt)("p",null,"\u3068\u3059\u308b\u3068\u3001 PR \u306e description \u306b\u30ea\u30f3\u30af\u304c\u8ffd\u52a0\u3055\u308c\u307e\u3059\u3002\u5730\u5473\u3067\u3059\u304c\u4fbf\u5229\u3067\u3059\u3002\nRelease page \u3078\u306e\u30ea\u30f3\u30af\u3092\u8ffd\u52a0\u3057\u3066\u3082\u4fbf\u5229\u304b\u3082\u3057\u308c\u307e\u305b\u3093\u306d\u3002"),(0,a.kt)("p",null,"ex. ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/suzuki-shunsuke/test-renovate-2/pull/28"},"https://github.com/suzuki-shunsuke/test-renovate-2/pull/28")),(0,a.kt)("p",null,"template \u3067\u4f7f\u3048\u308b\u5909\u6570\u306f ",(0,a.kt)("a",{parentName:"p",href:"https://docs.renovatebot.com/templates/"},"https://docs.renovatebot.com/templates/")," \u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002\nhelm chart \u3054\u3068\u306b\u8a2d\u5b9a\u3092\u66f8\u304b\u306a\u3044\u3068\u3044\u3051\u306a\u3044\u306e\u304c\u9762\u5012\u3067\u3059\u304c\u3001\u4ed5\u65b9\u306a\u3044\u3067\u3059\u306d\u3002"))}f.isMDXComponent=!0}}]);