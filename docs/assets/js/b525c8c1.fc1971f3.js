"use strict";(self.webpackChunktechblog_szksh_cloud_github_io=self.webpackChunktechblog_szksh_cloud_github_io||[]).push([[5459],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return f}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=s(r),f=a,d=m["".concat(l,".").concat(f)]||m[f]||p[f]||o;return r?n.createElement(d,u(u({ref:t},c),{},{components:r})):n.createElement(d,u({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,u=new Array(o);u[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,u[1]=i;for(var s=2;s<o;s++)u[s]=r[s];return n.createElement.apply(null,u)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},3540:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return p}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),u=["components"],i={title:"metabase \u3092\u4f7f\u3063\u3066 drone \u306e\u5229\u7528\u72b6\u6cc1\u3092\u53ef\u8996\u5316\u3059\u308b",date:new Date("2018-09-30T13:55:57.000Z"),draft:!1,tags:["drone","metabase"],archives:["2018/09"],authors:["suzuki-shunsuke"]},l=void 0,s={permalink:"/visualize-drone-usage-by-metabase",source:"@site/blog/visualize-drone-usage-by-metabase.md",title:"metabase \u3092\u4f7f\u3063\u3066 drone \u306e\u5229\u7528\u72b6\u6cc1\u3092\u53ef\u8996\u5316\u3059\u308b",description:"drone OSS 0.8.5 \u3067\u691c\u8a3c\u3057\u3066\u3044\u307e\u3059\u3002",date:"2018-09-30T13:55:57.000Z",formattedDate:"September 30, 2018",tags:[{label:"drone",permalink:"/tags/drone"},{label:"metabase",permalink:"/tags/metabase"}],readingTime:.81,truncated:!1,authors:[{name:"Shunsuke Suzuki",title:"SRE / OSS Contributor / Tool Maker / Go / Terraform",url:"https://github.com/suzuki-shunsuke",imageURL:"https://github.com/suzuki-shunsuke.png",key:"suzuki-shunsuke"}],frontMatter:{title:"metabase \u3092\u4f7f\u3063\u3066 drone \u306e\u5229\u7528\u72b6\u6cc1\u3092\u53ef\u8996\u5316\u3059\u308b",date:"2018-09-30T13:55:57.000Z",draft:!1,tags:["drone","metabase"],archives:["2018/09"],authors:["suzuki-shunsuke"]},prevItem:{title:"travis ci \u304b\u3089 circle ci \u3078\u306e\u79fb\u884c\u306e\u3059\u3059\u3081",permalink:"/migrate-from-travis-ci-to-circle-ci"},nextItem:{title:"drone \u306e\u7ba1\u7406\u306e\u305f\u3081\u306b portainer \u3092\u5c0e\u5165\u3057\u305f",permalink:"/use-portainer-for-drone-admin"}},c={authorsImageUrls:[void 0]},p=[{value:"\u3069\u3093\u306a\u30b0\u30e9\u30d5\u3092\u4f5c\u3063\u305f\u306e\u304b",id:"\u3069\u3093\u306a\u30b0\u30e9\u30d5\u3092\u4f5c\u3063\u305f\u306e\u304b",level:2}],m={toc:p};function f(e){var t=e.components,r=(0,a.Z)(e,u);return(0,o.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"drone OSS 0.8.5 \u3067\u691c\u8a3c\u3057\u3066\u3044\u307e\u3059\u3002"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://drone.io/"},"https://drone.io/")," \u3068 ",(0,o.kt)("a",{parentName:"p",href:"https://www.metabase.com/"},"https://www.metabase.com/")," \u306e\u8a71\u3067\u3059\u3002"),(0,o.kt)("p",null,"drone \u306e\u5229\u7528\u72b6\u6cc1\u3092\u53ef\u8996\u5316\u3057\u305f\u304b\u3063\u305f\u306e\u3067\u3001\ndrone \u306e DB(MySQL) \u306e\u30c7\u30fc\u30bf\u3092 metabase \u3067\u53ef\u8996\u5316\u3057\u307e\u3057\u305f\u3002"),(0,o.kt)("h2",{id:"\u3069\u3093\u306a\u30b0\u30e9\u30d5\u3092\u4f5c\u3063\u305f\u306e\u304b"},"\u3069\u3093\u306a\u30b0\u30e9\u30d5\u3092\u4f5c\u3063\u305f\u306e\u304b"),(0,o.kt)("p",null,"\u3044\u3056\u30b0\u30e9\u30d5\u3092\u4f5c\u6210\u3059\u308b\u3068\u306a\u308b\u3068\u3001\u4f55\u3092\u4f5c\u3063\u305f\u3089\u3044\u3044\u306e\u304b\u8ff7\u3044\u307e\u3057\u305f\u304c\u3001\u4ee5\u4e0b\u306e\u3088\u3046\u306a\u3082\u306e\u3092\u3068\u308a\u3042\u3048\u305a\u4f5c\u3063\u3066\u307f\u307e\u3057\u305f\u3002"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u30e6\u30fc\u30b6\u30fc\u6570"),(0,o.kt)("li",{parentName:"ul"},"\u6709\u52b9\u5316\u3055\u308c\u305f\u30ea\u30dd\u30b8\u30c8\u30ea\u6570"),(0,o.kt)("li",{parentName:"ul"},"build\u306e\u591a\u3044\u30ea\u30dd\u30b8\u30c8\u30ea"),(0,o.kt)("li",{parentName:"ul"},"build\u3092\u3088\u304f\u5b9f\u884c\u3057\u3066\u3044\u308b\u30e6\u30fc\u30b6\u30fc"),(0,o.kt)("li",{parentName:"ul"},"\u30d3\u30eb\u30c9\u6642\u9593\u306e\u5206\u5e03"),(0,o.kt)("li",{parentName:"ul"},"build event \u306e\u5272\u5408(push, tag, pull request, deployment)"),(0,o.kt)("li",{parentName:"ul"},"\u30ea\u30dd\u30b8\u30c8\u30ea\u306esecrets\u306e\u6570\u306e\u5206\u5e03")))}f.isMDXComponent=!0}}]);