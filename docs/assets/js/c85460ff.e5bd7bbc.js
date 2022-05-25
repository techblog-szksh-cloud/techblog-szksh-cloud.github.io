"use strict";(self.webpackChunktechblog_szksh_cloud_github_io=self.webpackChunktechblog_szksh_cloud_github_io||[]).push([[487],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return c}});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var m=a.createContext({}),u=function(e){var t=a.useContext(m),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=u(e.components);return a.createElement(m.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,m=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),s=u(r),c=n,k=s["".concat(m,".").concat(c)]||s[c]||f[c]||l;return r?a.createElement(k,o(o({ref:t},p),{},{components:r})):a.createElement(k,o({ref:t},p))}));function c(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,o=new Array(l);o[0]=s;var i={};for(var m in t)hasOwnProperty.call(t,m)&&(i[m]=t[m]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var u=2;u<l;u++)o[u]=r[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}s.displayName="MDXCreateElement"},2712:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return m},default:function(){return c},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return f}});var a=r(7462),n=r(3366),l=(r(7294),r(3905)),o=["components"],i={title:"terraformer \u3067\u96d1\u306b\u751f\u6210\u3057\u305f tf \u30d5\u30a1\u30a4\u30eb \u3068 state \u3092\u5206\u5272\u3057\u305f\u304f\u3066\u30c4\u30fc\u30eb\u3092\u66f8\u3044\u305f",date:new Date("2021-01-31T05:53:23.000Z"),archives:["2021/01"],tags:["oss","terraform"],authors:["suzuki-shunsuke"]},m=void 0,u={permalink:"/tfmigrator",source:"@site/blog/tfmigrator.md",title:"terraformer \u3067\u96d1\u306b\u751f\u6210\u3057\u305f tf \u30d5\u30a1\u30a4\u30eb \u3068 state \u3092\u5206\u5272\u3057\u305f\u304f\u3066\u30c4\u30fc\u30eb\u3092\u66f8\u3044\u305f",description:"terraformer \u3067\u96d1\u306b\u751f\u6210\u3057\u305f Terraform \u306e\u8a2d\u5b9a\u30d5\u30a1\u30a4\u30eb (\u4ee5\u4e0b tf \u30d5\u30a1\u30a4\u30eb) \u3068 state \u3092\u5206\u5272\u3057\u305f\u304f\u3066\u30c4\u30fc\u30eb\u3092\u66f8\u304d\u307e\u3057\u305f\u3002",date:"2021-01-31T05:53:23.000Z",formattedDate:"January 31, 2021",tags:[{label:"oss",permalink:"/tags/oss"},{label:"terraform",permalink:"/tags/terraform"}],readingTime:12.43,truncated:!1,authors:[{name:"Shunsuke Suzuki",title:"SRE / OSS Contributor / Tool Maker / Go / Terraform",url:"https://github.com/suzuki-shunsuke",imageURL:"https://github.com/suzuki-shunsuke.png",key:"suzuki-shunsuke"}],frontMatter:{title:"terraformer \u3067\u96d1\u306b\u751f\u6210\u3057\u305f tf \u30d5\u30a1\u30a4\u30eb \u3068 state \u3092\u5206\u5272\u3057\u305f\u304f\u3066\u30c4\u30fc\u30eb\u3092\u66f8\u3044\u305f",date:"2021-01-31T05:53:23.000Z",archives:["2021/01"],tags:["oss","terraform"],authors:["suzuki-shunsuke"]},prevItem:{title:"\u4ed5\u4e8b\u3067\u3084\u3063\u305f\u3053\u3068 2020-12-01 ~ 2020-12-31",permalink:"/2020/12/01/job-12-31"},nextItem:{title:"skaffold \u3092\u4f7f\u3063\u3066 GitOps \u3059\u308b",permalink:"/gitops-skaffold"}},p={authorsImageUrls:[void 0]},f=[{value:"\u7d4c\u7def",id:"\u7d4c\u7def",level:2},{value:"miam \u304b\u3089 Terraform \u3078\u79fb\u884c\u3057\u305f\u3044",id:"miam-\u304b\u3089-terraform-\u3078\u79fb\u884c\u3057\u305f\u3044",level:3},{value:"\u3084\u308a\u305f\u304b\u3063\u305f\u3053\u3068",id:"\u3084\u308a\u305f\u304b\u3063\u305f\u3053\u3068",level:3},{value:"terraformer \u3067\u81ea\u52d5\u751f\u6210\u3059\u308b\u3082\u8272\u3005\u554f\u984c\u304c\u3042\u3063\u305f",id:"terraformer-\u3067\u81ea\u52d5\u751f\u6210\u3059\u308b\u3082\u8272\u3005\u554f\u984c\u304c\u3042\u3063\u305f",level:3},{value:"\u6700\u521d\u624b\u4f5c\u696d\u3067\u59cb\u3081\u308b\u3082\u3001\u81ea\u52d5\u5316\u304c\u5fc5\u8981\u3068\u609f\u308b",id:"\u6700\u521d\u624b\u4f5c\u696d\u3067\u59cb\u3081\u308b\u3082\u81ea\u52d5\u5316\u304c\u5fc5\u8981\u3068\u609f\u308b",level:3},{value:"tfmigrator",id:"tfmigrator",level:2},{value:"tf \u30d5\u30a1\u30a4\u30eb\u751f\u6210\u6642\u306e\u6ce8\u610f\u70b9",id:"tf-\u30d5\u30a1\u30a4\u30eb\u751f\u6210\u6642\u306e\u6ce8\u610f\u70b9",level:2},{value:"\u30a8\u30e9\u30fc\u30cf\u30f3\u30c9\u30ea\u30f3\u30b0",id:"\u30a8\u30e9\u30fc\u30cf\u30f3\u30c9\u30ea\u30f3\u30b0",level:2},{value:"\u3053\u306e\u30c4\u30fc\u30eb\u306e\u4fbf\u5229\u306a\u3068\u3053\u308d",id:"\u3053\u306e\u30c4\u30fc\u30eb\u306e\u4fbf\u5229\u306a\u3068\u3053\u308d",level:2},{value:"\u809d\u5fc3\u306e\u79fb\u884c\u306f\u3067\u304d\u305f\u306e\u304b",id:"\u809d\u5fc3\u306e\u79fb\u884c\u306f\u3067\u304d\u305f\u306e\u304b",level:2},{value:"\u6700\u5f8c\u306b",id:"\u6700\u5f8c\u306b",level:2}],s={toc:f};function c(e){var t=e.components,r=(0,n.Z)(e,o);return(0,l.kt)("wrapper",(0,a.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/GoogleCloudPlatform/terraformer"},"terraformer")," \u3067\u96d1\u306b\u751f\u6210\u3057\u305f Terraform \u306e\u8a2d\u5b9a\u30d5\u30a1\u30a4\u30eb (\u4ee5\u4e0b tf \u30d5\u30a1\u30a4\u30eb) \u3068 state \u3092\u5206\u5272\u3057\u305f\u304f\u3066\u30c4\u30fc\u30eb\u3092\u66f8\u304d\u307e\u3057\u305f\u3002"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/suzuki-shunsuke/tfmigrator"},"tfmigrator")),(0,l.kt)("h2",{id:"\u7d4c\u7def"},"\u7d4c\u7def"),(0,l.kt)("h3",{id:"miam-\u304b\u3089-terraform-\u3078\u79fb\u884c\u3057\u305f\u3044"},"miam \u304b\u3089 Terraform \u3078\u79fb\u884c\u3057\u305f\u3044"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/codenize-tools/miam"},"miam")," \u3068\u3044\u3046\u30c4\u30fc\u30eb\u3067\u7ba1\u7406\u3055\u308c\u3066\u3044\u308b\u5927\u91cf\u306e\u30ea\u30bd\u30fc\u30b9\u3092 Terraform \u3067\u7ba1\u7406\u3057\u305f\u304f\u306a\u308a\u307e\u3057\u305f\u3002\n\u591a\u304f\u306e AWS Resource \u306f Terraform \u3067\u7ba1\u7406\u3055\u308c\u3066\u3044\u307e\u3059\u304c\u3001 IAM \u306b\u95a2\u3057\u3066\u306f miam \u3067\u7ba1\u7406\u3055\u308c\u3066\u3044\u307e\u3059\u3002\n\u306a\u305c Terraform \u3067\u306f\u306a\u304f miam \u3067\u7ba1\u7406\u3055\u308c\u3066\u3044\u308b\u304b\u3068\u3044\u3046\u3068\u3001\u5f53\u6642\u306e\u3053\u3068\u306f\u81ea\u5206\u306b\u306f\u5206\u304b\u308a\u307e\u305b\u3093\u304c\u3001\u6b74\u53f2\u7684\u306a\u7d4c\u7def\u3082\u3042\u308b\u3068\u601d\u3044\u307e\u3059\u3002\n\u6614\u306f\u4eca\u3088\u308a\u3082 Terraform \u306e\u8868\u73fe\u529b\u304c\u8c4a\u304b\u3067\u306f\u306a\u304f\u3001 Ruby \u3067\u81ea\u7531\u306b\u304b\u3051\u308b miam \u306e\u307b\u3046\u304c\u6271\u3044\u3084\u3059\u304b\u3063\u305f\u3068\u304b\u3001\nmiam \u3060\u3068 miam \u3067\u30ea\u30bd\u30fc\u30b9\u3092\u7ba1\u7406\u3059\u308b\u3053\u3068\u3092\u5f37\u5236\u3067\u304d\u308b\u305f\u3081\u3001\u6a29\u9650\u7ba1\u7406\u3092\u53b3\u683c\u306b\u3084\u308b\u3068\u3044\u3046\u89b3\u70b9\u3067\u306f\u90fd\u5408\u304c\u826f\u3044\u3068\u3044\u3046\u70b9\u3082\u3042\u308b\u304b\u3068\u601d\u3044\u307e\u3059\u3002"),(0,l.kt)("p",null,"\u3067\u306f\u306a\u305c Terraform \u3067\u7ba1\u7406\u3057\u305f\u304f\u306a\u3063\u305f\u304b\u3068\u3044\u3046\u3068\u3001\n\u4e00\u756a\u5927\u304d\u306a\u7406\u7531\u306f miam \u3067\u983b\u7e41\u306b rate limit \u306b\u5f15\u3063\u304b\u304b\u308b\u3088\u3046\u306b\u306a\u3063\u305f\u304b\u3089\u3067\u3059\u3002\nTerraform \u306b\u3057\u308d miam \u306b\u3057\u308d CI/CD \u3067 test, apply \u304c\u5b9f\u884c\u3055\u308c\u308b\u3088\u3046\u306b\u306a\u3063\u3066\u3044\u307e\u3059\u3002\nmiam \u3067\u306f\u6bce\u56de\u5168\u90e8\u306e\u30ea\u30bd\u30fc\u30b9\u3092\u5bfe\u8c61\u306b\u51e6\u7406\u304c\u5b9f\u884c\u3055\u308c\u308b\u305f\u3081\u3001\u30ea\u30bd\u30fc\u30b9\u306e\u6570\u304c\u5897\u3048\u308b\u306b\u3064\u308c\u3066 rate limit \u306b\u5f15\u3063\u304b\u304b\u308a\u3084\u3059\u304f\u306a\u308a\u307e\u3059\u3002\nCI \u3092 rerun \u3059\u308c\u3070\u6210\u529f\u3059\u308b\u306e\u3067\u3059\u304c\u3001\u60aa\u3044\u3068\u304d\u306f 3 \u56de\u9023\u7d9a\u3067 rate limit \u306b\u5f15\u3063\u304b\u304b\u308a\u3001 4 \u56de\u76ee\u3067\u3088\u3046\u3084\u304f\u6210\u529f\u3059\u308b\u3068\u3044\u3046\u3053\u3068\u3082\u3042\u308a\u307e\u3057\u305f\u3002"),(0,l.kt)("p",null,"Terraform \u3067\u306f\u30b5\u30fc\u30d3\u30b9\u3084\u74b0\u5883\u5358\u4f4d\u3067 State \u304c\u5206\u5272\u3055\u308c\u3066\u304a\u308a\u3001 CI \u3082 PR \u3067\u30d5\u30a1\u30a4\u30eb\u304c\u5909\u66f4\u3055\u308c\u305f state \u306b\u5bfe\u3057\u3066\u306e\u307f\u5b9f\u884c\u3055\u308c\u308b\u305f\u3081\u3001\nrate limit \u306b\u5f15\u3063\u304b\u304b\u308b\u3053\u3068\u306f\u57fa\u672c\u306a\u3044\u3088\u3046\u306b\u306a\u3063\u3066\u3044\u307e\u3059\u3002"),(0,l.kt)("p",null,"\u4ed6\u306b\u3082\u8272\u3005\u7406\u7531\u306f\u3042\u308b\u306e\u3067\u3059\u304c\u3001\u672c\u984c\u304b\u3089\u305d\u308c\u308b\u306e\u3067\u3084\u3081\u3066\u304a\u304d\u307e\u3059\u3002\nrate limit \u3060\u3051\u306a\u3089 miam \u3067\u3082 exclude \u3059\u308b\u6a5f\u80fd\u304c\u3042\u308b\u306e\u3067\u9811\u5f35\u308c\u3070\u306a\u3093\u3068\u304b\u306a\u308b\u6c17\u306f\u3057\u307e\u3059\u3002"),(0,l.kt)("h3",{id:"\u3084\u308a\u305f\u304b\u3063\u305f\u3053\u3068"},"\u3084\u308a\u305f\u304b\u3063\u305f\u3053\u3068"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Terraform \u3067\u65e2\u5b58\u306e\u30ea\u30bd\u30fc\u30b9\u3092\u7ba1\u7406\u3057\u305f\u3044",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"tf \u30d5\u30a1\u30a4\u30eb \u3068 state \u3092\u751f\u6210\u3057\u305f\u3044"))),(0,l.kt)("li",{parentName:"ul"},"Terraform \u306e\u8a2d\u5b9a\u30d5\u30a1\u30a4\u30eb \u3068 state \u306f\u30b5\u30fc\u30d3\u30b9\u30fb\u74b0\u5883\u3054\u3068\u306b\u5206\u5272\u3057\u305f\u3044"),(0,l.kt)("li",{parentName:"ul"},"Terraform \u306e\u30ea\u30bd\u30fc\u30b9\u30d1\u30b9\u306f\u30d2\u30e5\u30fc\u30de\u30f3\u30ea\u30fc\u30c0\u30d6\u30eb\u306b\u3057\u305f\u3044",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u3053\u308c\u306f\u96e3\u3057\u3051\u308c\u3070\u8ae6\u3081\u308b\u306e\u3082\u3042\u308a\u3060\u304c\u3001\u3067\u304d\u308c\u3070\u3084\u308a\u305f\u3044")))),(0,l.kt)("h3",{id:"terraformer-\u3067\u81ea\u52d5\u751f\u6210\u3059\u308b\u3082\u8272\u3005\u554f\u984c\u304c\u3042\u3063\u305f"},"terraformer \u3067\u81ea\u52d5\u751f\u6210\u3059\u308b\u3082\u8272\u3005\u554f\u984c\u304c\u3042\u3063\u305f"),(0,l.kt)("p",null,"\u307e\u305a\u306f terraformer \u3067\u96d1\u306b tf \u30d5\u30a1\u30a4\u30eb \u3068 state \u3092\u751f\u6210\u3057\u307e\u3057\u305f\u3002\n\u4eca\u56de terraformer \u3092\u4f7f\u3046\u306e\u306f\u521d\u3081\u3066\u3067\u3001 terraformer \u3067\u4e07\u4e8b\u89e3\u6c7a\u306a\u3089\u8a71\u306f\u7c21\u5358\u3060\u3063\u305f\u306e\u3067\u3059\u304c\u3001\u8a71\u306f\u305d\u3093\u306a\u7c21\u5358\u3067\u306f\u3042\u308a\u307e\u305b\u3093\u3067\u3057\u305f\u3002\n\u3053\u308c\u306b\u95a2\u3057\u3066\u306f\u3001\u81ea\u5206\u306e\u554f\u984c(\u4f7f\u3044\u65b9\u3092\u9593\u9055\u3063\u3066\u3044\u308b\u3001\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u3092\u3061\u3083\u3093\u3068\u8aad\u3093\u3067\u3044\u306a\u3044)\u306a\u306e\u304b\u3001 \u3042\u308b\u3044\u306f terraformer \u5074\u306e\u554f\u984c\u306a\u306e\u304b\u3088\u304f\u5206\u304b\u3063\u3066\u306a\u3044\u90e8\u5206\u3082\u3042\u308a\u307e\u3059\u3002"),(0,l.kt)("p",null,"\u307e\u305a\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u3092\u8aad\u3093\u3067\u3082\u3044\u307e\u3044\u3061\u30ea\u30bd\u30fc\u30b9\u306e\u30d5\u30a3\u30eb\u30bf\u30ea\u30f3\u30b0\u306e\u4ed5\u65b9\u304c\u5206\u304b\u308a\u307e\u305b\u3093\u3067\u3057\u305f\u3002\n\u8a66\u3057\u306b IAM role \u306e\u540d\u524d\u3092\u6307\u5b9a\u3057\u3066\u305d\u308c\u3060\u3051 import \u3057\u3088\u3046\u3068\u3057\u307e\u3057\u305f\u304c\u3001\u306a\u305c\u304b\u5168 IAM \u30ea\u30bd\u30fc\u30b9\u304c import \u3055\u308c\u3066\u3057\u307e\u3044\u307e\u3057\u305f\u3002"),(0,l.kt)("p",null,"\u826f\u304f\u308f\u304b\u3089\u306a\u3044\u306e\u3067\u3001\u3053\u308c\u306f\u5168 IAM \u30ea\u30bd\u30fc\u30b9\u3092\u96d1\u306b import \u3057\u3066\u304b\u3089\u30b5\u30fc\u30d3\u30b9\u30fb\u74b0\u5883\u3054\u3068\u306b\u5206\u5272\u3059\u308b\u3057\u304b\u7121\u3044\u304b\u306a\u3041\u3068\u601d\u3044\u307e\u3057\u305f\u3002"),(0,l.kt)("p",null,"\u52a0\u3048\u3066\u3001\u30ea\u30bd\u30fc\u30b9\u30d1\u30b9\u304c\u5168\u7136\u30d2\u30e5\u30fc\u30de\u30f3\u30ea\u30fc\u30c0\u30d6\u30eb\u3067\u306f\u3042\u308a\u307e\u305b\u3093\u3067\u3057\u305f\u3002 terraformer \u3068\u3057\u3066\u306f\u3053\u308c\u306f\u4ed5\u65b9\u306a\u3044\u3068\u601d\u3044\u307e\u3059\u304c\u3001\u306a\u3093\u3068\u304b\u30ea\u30cd\u30fc\u30e0\u3057\u305f\u3044\u3068\u601d\u3044\u307e\u3057\u305f\u3002"),(0,l.kt)("h3",{id:"\u6700\u521d\u624b\u4f5c\u696d\u3067\u59cb\u3081\u308b\u3082\u81ea\u52d5\u5316\u304c\u5fc5\u8981\u3068\u609f\u308b"},"\u6700\u521d\u624b\u4f5c\u696d\u3067\u59cb\u3081\u308b\u3082\u3001\u81ea\u52d5\u5316\u304c\u5fc5\u8981\u3068\u609f\u308b"),(0,l.kt)("p",null,"\u6700\u521d\u7279\u5b9a\u306e\u30b5\u30fc\u30d3\u30b9\u306b\u95a2\u3057\u3066\u624b\u4f5c\u696d\u3067 tf \u30d5\u30a1\u30a4\u30eb, state \u3092\u79fb\u884c\u3059\u308b\u4f5c\u696d\u3092\u884c\u3063\u3066\u307f\u307e\u3057\u305f\u3002\n\u7c21\u5358\u306a\u30b7\u30a7\u30eb\u30b9\u30af\u30ea\u30d7\u30c8\u3092\u66f8\u3044\u3066\u534a\u81ea\u52d5\u5316\u3057\u3066\u307f\u307e\u3057\u305f\u3002\ntf \u30d5\u30a1\u30a4\u30eb\u306e\u64cd\u4f5c\u306b\u306f ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/minamijoyo/hcledit"},"hcledit")," \u304c\u4fbf\u5229\u3067\u3059\u3002"),(0,l.kt)("p",null,"\u4ee5\u4e0b\u306e\u3088\u3046\u306a\u30b3\u30de\u30f3\u30c9\u3092\u4f7f\u3044\u307e\u3057\u305f\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"terraform state mv"),(0,l.kt)("li",{parentName:"ul"},"hcledit block get"),(0,l.kt)("li",{parentName:"ul"},"hcledit block mv"),(0,l.kt)("li",{parentName:"ul"},"hcledit block list")),(0,l.kt)("p",null,"\u3067\u3001\u3084\u3063\u3066\u307f\u305f\u3082\u306e\u306e\u3001\u306a\u306b\u305b\u5bfe\u8c61\u304c\u591a\u3044\u306e\u3067\u3001\u3053\u308c\u3092\u4e00\u3064\u4e00\u3064\u624b\u4f5c\u696d\u3067\u3084\u308b\u306e\u306f\u5927\u5909\u3060\u3057\u3001\u30d2\u30e5\u30fc\u30de\u30f3\u30a8\u30e9\u30fc\u306f\u907f\u3051\u3089\u308c\u306a\u3044\u3068\u611f\u3058\u307e\u3057\u305f\u3002\n\u305d\u3053\u3067\u3061\u3087\u3063\u3068\u3057\u305f\u30c4\u30fc\u30eb\u3092\u4f5c\u308b\u3053\u3068\u306b\u3057\u307e\u3057\u305f\u3002\n\u624b\u4f5c\u696d\u3067\u4e00\u56de\u3084\u3063\u305f\u5206\u624b\u9806\u306f\u30a4\u30e1\u30fc\u30b8\u3067\u304d\u3066\u3044\u308b\u306e\u3067\u3001\u5272\u3068\u7c21\u5358\u306b\u3067\u304d\u308b\u3060\u308d\u3046\u3068\u601d\u3044\u307e\u3057\u305f\u3002"),(0,l.kt)("h2",{id:"tfmigrator"},"tfmigrator"),(0,l.kt)("p",null,"\u305d\u3053\u3067\u4f5c\u3063\u305f\u306e\u304c ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/suzuki-shunsuke/tfmigrator"},"tfmigrator")," \u3067\u3059\u3002\n\u4eca\u56de\u306f AWS \u306e IAM \u30ea\u30bd\u30fc\u30b9\u3092\u6271\u3044\u307e\u3059\u304c\u3001 tfmigrator \u306f\u7279\u5b9a\u306e provider \u306a\u3069\u306b\u306f\u4f9d\u5b58\u3057\u306a\u3044\u30c4\u30fc\u30eb\u3067\u3059\u3002\nTerraform CLI \u3068 hcledit \u304c\u5fc5\u8981\u3067\u3059\u3002"),(0,l.kt)("p",null,"\u307e\u305a terraformer \u3067 IAM \u30ea\u30bd\u30fc\u30b9\u3092\u5168\u90e8 import \u3057\u3066\u304d\u307e\u3059\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"$ terraformer import aws -r iam --compact --path-pattern .\n")),(0,l.kt)("p",null,"\u3053\u3046\u3059\u308b\u3068 resources.tf \u3068 terraform.tfstate \u304c\u4f5c\u3089\u308c\u307e\u3059\u3002"),(0,l.kt)("p",null,"tfmigrator \u306e\u8a2d\u5b9a\u30d5\u30a1\u30a4\u30eb tfmigrator.yaml \u3092\u66f8\u304d\u307e\u3059\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},'---\nitems:\n# \u65e2\u306b Terraform \u3067\u7ba1\u7406\u3055\u308c\u3066\u3044\u308b\u3082\u306e\u306f\u7121\u8996\n- rule: \'"tags" in Values && Values.tags.ManagedBy == "Terraform"\'\n  exclude: true\n- rule: \'"name" not in Values\'\n  exclude: true\n# `name` \u306b "foo" \u304c\u542b\u307e\u308c\u3066\u3044\u308b\u3082\u306e\u306f\u30b5\u30fc\u30d3\u30b9 foo \u306e\u30ea\u30bd\u30fc\u30b9\u3068\u307f\u306a\u3057\u3066\u5206\u5272\n- rule: \'Values.name contains "foo"\'\n  state_out: foo/terraform.tfstate\n  resource_name: "{{.Values.name}}"\n  tf_path: foo/resource.tf\n# \u4ee5\u4e0b\u7565\n')),(0,l.kt)("p",null,"tfmigrator \u306e\u51e6\u7406\u306e\u6d41\u308c\u3092\u306a\u3093\u3068\u306a\u304f\u305d\u308c\u3063\u307d\u3044\u64ec\u4f3c\u8a00\u8a9e\u3067\u8868\u73fe\u3057\u307e\u3059\u3002\n\u5b9f\u969b\u306e\u51e6\u7406\u306e\u6d41\u308c\u3068\u306f\u82e5\u5e72\u7570\u306a\u308a\u307e\u3059\u304c\u3001\u96f0\u56f2\u6c17\u304c\u4f1d\u308f\u308c\u3070\u3068\u601d\u3044\u307e\u3059\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'for resource in state\n  for item config.items\n    if item.rule.match(resource)\n      if item.exclude\n        # \u3053\u306e\u30ea\u30bd\u30fc\u30b9\u306f\u51e6\u7406\u305b\u305a\u6b21\u306e\u30ea\u30bd\u30fc\u30b9\u306e\u51e6\u7406\u306b\u79fb\u308b\n        break\n      # tf \u306e migration (note: \u5143\u306e tf \u306f\u305d\u306e\u307e\u307e)\n      hcledit block get resource.path < tf | hcledit block mv resource.path "${resource.type}.${item.resource_name(resource)}" >> item.tf_path\n      terraform state mv\n      # \u6b21\u306e\u30ea\u30bd\u30fc\u30b9\u306e\u51e6\u7406\u306b\u79fb\u308b\n      break\n')),(0,l.kt)("p",null,"\u5404 item \u306e\u8a2d\u5b9a\u306e\u610f\u5473\u306f\u3053\u3093\u306a\u611f\u3058\u3067\u3059\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"rule: ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/antonmedv/expr/blob/master/docs/Language-Definition.md"},"expr")," \u306e expression \u3002\u3053\u306e\u6761\u4ef6\u306b\u30de\u30c3\u30c1\u3057\u305f\u30ea\u30bd\u30fc\u30b9\u3092\u3053\u306e item \u3067\u51e6\u7406\u3059\u308b"),(0,l.kt)("li",{parentName:"ul"},"exclude: true \u306e\u5834\u5408\u3001\u3053\u306e item \u306b\u30de\u30c3\u30c1\u3057\u305f\u30ea\u30bd\u30fc\u30b9\u306f\u7121\u8996\u3059\u308b"),(0,l.kt)("li",{parentName:"ul"},"state_out: ",(0,l.kt)("inlineCode",{parentName:"li"},"terraform state mv")," \u306e ",(0,l.kt)("inlineCode",{parentName:"li"},"-state-out")),(0,l.kt)("li",{parentName:"ul"},"resource_name: \u65b0\u3057\u3044\u30ea\u30bd\u30fc\u30b9\u540d\u3002\u30c7\u30d5\u30a9\u30eb\u30c8\u3067\u306f\u540d\u524d\u306f\u305d\u306e\u307e\u307e\u3002 Go \u306e ",(0,l.kt)("a",{parentName:"li",href:"https://golang.org/pkg/text/template/"},"text/template")," \u3067\u51e6\u7406\u3055\u308c\u307e\u3059"),(0,l.kt)("li",{parentName:"ul"},"tf_path: Terraform \u306e\u8a2d\u5b9a\u30d5\u30a1\u30a4\u30eb\u306e\u51fa\u529b\u5148")),(0,l.kt)("p",null,"\u8a2d\u5b9a\u30d5\u30a1\u30a4\u30eb\u3092\u66f8\u3044\u305f\u3089 tfmigrator \u3092\u5b9f\u884c\u3057\u307e\u3059\u3002\n\u3044\u304d\u306a\u308a\u30de\u30a4\u30b0\u30ec\u30fc\u30b7\u30e7\u30f3\u3092\u3059\u308b\u3068\u3044\u3046\u3088\u308a\u306f\u3001\u307e\u305a\u306f dry run \u3066\u304d\u306a\u3053\u3068\u3092\u3057\u3066\u52d5\u4f5c\u3092\u78ba\u8a8d\u3057\u305f\u3044\u3067\u3059\u306d\u3002\n",(0,l.kt)("inlineCode",{parentName:"p"},"-skip-state")," \u3092\u3064\u3051\u308b\u3068 ",(0,l.kt)("inlineCode",{parentName:"p"},"terraform state mv")," \u3092 skip \u3057\u3001\u5206\u5272\u3055\u308c\u308b tf \u30d5\u30a1\u30a4\u30eb \u3092\u65b0\u3057\u3044\u30d5\u30a1\u30a4\u30eb\u306b\u51fa\u529b\u3060\u3051\u3057\u307e\u3059\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"$ cat *.tf | tfmigrator run -skip-state\n")),(0,l.kt)("p",null,"\u751f\u6210\u3055\u308c\u305f tf \u30d5\u30a1\u30a4\u30eb \u3092\u773a\u3081\u3066\u3001\u826f\u3055\u305d\u3046\u306a\u3089 ",(0,l.kt)("inlineCode",{parentName:"p"},"-skip-state")," \u3092\u3068\u3063\u3066\u5b9f\u884c\u3057\u307e\u3059\u3002"),(0,l.kt)("h2",{id:"tf-\u30d5\u30a1\u30a4\u30eb\u751f\u6210\u6642\u306e\u6ce8\u610f\u70b9"},"tf \u30d5\u30a1\u30a4\u30eb\u751f\u6210\u6642\u306e\u6ce8\u610f\u70b9"),(0,l.kt)("p",null,"tf \u30d5\u30a1\u30a4\u30eb\u306e\u751f\u6210\u306f\u73fe\u72b6\u8ffd\u8a18\u30e2\u30fc\u30c9\u3067\u5b9f\u884c\u3055\u308c\u307e\u3059\u3002\u306a\u306e\u3067 ",(0,l.kt)("inlineCode",{parentName:"p"},"-skip-state")," \u3092\u3064\u3051\u3066\u8907\u6570\u56de\u5b9f\u884c\u3059\u308b\u3068\u540c\u3058\u8a2d\u5b9a\u304c\u91cd\u8907\u3057\u3066\u66f8\u304d\u8fbc\u307e\u308c\u308b\u3053\u3068\u306b\u306a\u308a\u307e\u3059\u3002\n\u305d\u308c\u304c\u56f0\u308b\u5834\u5408\u306f\u5b9f\u884c\u524d\u306b\u5bfe\u8c61\u30d5\u30a1\u30a4\u30eb\u3092\u6d88\u3057\u3066\u304b\u3089\u5b9f\u884c\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,l.kt)("p",null,"\u307e\u305f\u3001tf \u30d5\u30a1\u30a4\u30eb\u306e\u79fb\u884c\u306f\u65e2\u5b58\u306e tf \u30d5\u30a1\u30a4\u30eb\u306b\u5bfe\u3057\u3066 ",(0,l.kt)("inlineCode",{parentName:"p"},"hcledit block get"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"hcledit block mv")," \u3092\u5b9f\u884c\u3057\u3066\u884c\u308f\u308c\u308b\u305f\u3081\u3001\n\u5143\u306e tf \u30d5\u30a1\u30a4\u30eb\u306f\u305d\u306e\u307e\u307e\u6b8b\u308b\u3053\u3068\u3001\u307e\u305f expression \u306f\u8a55\u4fa1\u3055\u308c\u306a\u3044\u3053\u3068\u306b\u6ce8\u610f\u304c\u5fc5\u8981\u3067\u3059\u3002\n\u4f8b\u3048\u3070 ",(0,l.kt)("inlineCode",{parentName:"p"},"name = var.name")," \u306e\u3088\u3046\u306b\u5909\u6570\u3092\u53c2\u7167\u3057\u3066\u3044\u308b\u5834\u5408\u3001\u305d\u308c\u3082\u305d\u306e\u307e\u307e\u8a55\u4fa1\u3055\u308c\u305a\u306b\u6b8b\u308a\u307e\u3059\u3002\n\u3068\u308a\u3042\u3048\u305a\u81ea\u5206\u304c\u3084\u308a\u305f\u304b\u3063\u305f\u306e\u306f terraformer \u3067\u751f\u6210\u3057\u305f tf \u30d5\u30a1\u30a4\u30eb\u306e\u79fb\u884c\u3060\u3063\u305f\u306e\u3067\u3001\u305d\u3093\u306a\u306b\u554f\u984c\u306b\u306f\u306a\u3089\u306a\u3044\u3060\u308d\u3046\u3068\u601d\u3063\u3066\u3044\u307e\u3059\u3002"),(0,l.kt)("h2",{id:"\u30a8\u30e9\u30fc\u30cf\u30f3\u30c9\u30ea\u30f3\u30b0"},"\u30a8\u30e9\u30fc\u30cf\u30f3\u30c9\u30ea\u30f3\u30b0"),(0,l.kt)("p",null,"\u3042\u308b\u30ea\u30bd\u30fc\u30b9\u306e\u51e6\u7406\u3067\u30a8\u30e9\u30fc\u304c\u8d77\u3053\u3063\u305f\u3089\u5373\u5ea7\u306b\u7570\u5e38\u7d42\u4e86\u3059\u308b\u3088\u3046\u306b\u3057\u3066\u3044\u307e\u3059\u3002\n(\u5f53\u7136\u3067\u3059\u304c)\u30ed\u30fc\u30eb\u30d0\u30c3\u30af\u3068\u304b\u306f\u3057\u307e\u305b\u3093(\u3057\u3001\u3067\u304d\u307e\u305b\u3093)\u3002\n\u30a8\u30e9\u30fc\u51fa\u529b\u3057\u3064\u3064\u6b21\u306e\u30ea\u30bd\u30fc\u30b9\u306e\u51e6\u7406\u306b\u79fb\u308b\u3001\u3068\u3044\u3046\u306e\u3082\u8003\u3048\u3089\u308c\u307e\u3059\u304c\u3001\u9593\u9055\u3063\u3066 ",(0,l.kt)("inlineCode",{parentName:"p"},"terraform state mv")," \u3055\u308c\u308b\u3068\u9762\u5012\u306a\u306e\u3067\u3001\u73fe\u72b6\u5373\u5ea7\u306b\u7d42\u4e86\u3059\u308b\u3088\u3046\u306b\u3057\u3066\u3044\u307e\u3059\u3002\n\u554f\u984c\u306e\u3042\u308b\u30ea\u30bd\u30fc\u30b9\u3092\u7121\u8996\u3057\u305f\u3044\u5834\u5408\u306f\u3001 tfmigrator \u306e\u8a2d\u5b9a\u3067\u305d\u306e\u30ea\u30bd\u30fc\u30b9\u306b\u30de\u30c3\u30c1\u3059\u308b item \u3092\u8ffd\u52a0\u3057 ",(0,l.kt)("inlineCode",{parentName:"p"},"exclude: true")," \u3068\u3059\u308c\u3070\u3088\u3044\u3067\u3057\u3087\u3046\u3002"),(0,l.kt)("h2",{id:"\u3053\u306e\u30c4\u30fc\u30eb\u306e\u4fbf\u5229\u306a\u3068\u3053\u308d"},"\u3053\u306e\u30c4\u30fc\u30eb\u306e\u4fbf\u5229\u306a\u3068\u3053\u308d"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"expr \u3092\u7528\u3044\u3066\u30ea\u30bd\u30fc\u30b9\u3092\u5206\u985e\u3067\u304d\u308b"),(0,l.kt)("li",{parentName:"ul"},"\u8a2d\u5b9a\u30d5\u30a1\u30a4\u30eb\u306b\u8a18\u8ff0\u3057\u3001\u30ef\u30f3\u30fb\u30b3\u30de\u30f3\u30c9\u3067\u5b9f\u884c\u3067\u304d\u308b",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u30ec\u30d3\u30e5\u30fc\u3067\u304d\u308b"),(0,l.kt)("li",{parentName:"ul"},"\u5f8c\u3067\u898b\u8fd4\u305b\u308b")))),(0,l.kt)("p",null,"\u30ed\u30fc\u30ab\u30eb\u3067\u8a66\u884c\u932f\u8aa4\u3057\u306a\u304c\u3089\u8907\u6570\u306e\u30b3\u30de\u30f3\u30c9\u3092\u5b9f\u884c\u3057\u3066\u3044\u308b\u3068\u3001\u5f8c\u3067\u306a\u306b\u3084\u3063\u305f\u304b\u308f\u304b\u3089\u306a\u304f\u306a\u308a\u304c\u3061\u3067\u3059\u3057\u3001\u9014\u4e2d\u3067\u4f5c\u696d\u3092\u4e2d\u65ad\u3057\u305f\u308a\u3059\u308b\u3068\u3001\u3042\u3068\u3067\u4eca\u3069\u3046\u3044\u3046\u72b6\u614b\u306a\u306e\u304b\u5206\u304b\u3089\u306a\u304f\u306a\u3063\u305f\u308a\u3057\u307e\u3059\u3002\n\u30ef\u30f3\u30fb\u30b3\u30de\u30f3\u30c9\u3067\u5b9f\u884c\u3067\u304d\u308b\u3068\u305d\u3046\u3044\u3046\u554f\u984c\u304c\u306a\u304f\u3066\u4fbf\u5229\u3067\u3059\u306d\u3002"),(0,l.kt)("h2",{id:"\u809d\u5fc3\u306e\u79fb\u884c\u306f\u3067\u304d\u305f\u306e\u304b"},"\u809d\u5fc3\u306e\u79fb\u884c\u306f\u3067\u304d\u305f\u306e\u304b"),(0,l.kt)("p",null,"\u307e\u3060\u3067\u304d\u3066\u3044\u307e\u305b\u3093\u3002\u79fb\u884c\u3059\u308b\u305f\u3081\u306b tfmigrator \u3092\u4f5c\u3063\u305f\u306e\u3067\u3001\u3053\u308c\u304b\u3089\u79fb\u884c\u3057\u3066\u3044\u3053\u3046\u3068\u3044\u3046\u6bb5\u968e\u3067\u3059\u3002\n\u306a\u306e\u3067 tfmigrator \u306f\u307e\u3060\u5168\u7136\u4f7f\u3044\u8fbc\u3093\u3067\u306a\u3044\u3067\u3059\u3057\u3001\u4f7f\u3063\u3066\u304f\u4e2d\u3067\u6a5f\u80fd\u4fee\u6b63\u3057\u305f\u308a\u3059\u308b\u3053\u3068\u3082\u3042\u308b\u3068\u601d\u3044\u307e\u3059\u3002"),(0,l.kt)("h2",{id:"\u6700\u5f8c\u306b"},"\u6700\u5f8c\u306b"),(0,l.kt)("p",null,"terraformer \u3067\u96d1\u306b import \u3057\u3066\u304d\u305f tf \u30d5\u30a1\u30a4\u30eb\u3068 state \u3092\u3044\u3044\u611f\u3058\u306b\u5206\u5272\u3059\u308b\u305f\u3081\u306b tfmigrator \u3068\u3044\u3046\u30c4\u30fc\u30eb\u3092\u4f5c\u308a\u307e\u3057\u305f\u3002\ntfmigrator \u304c\u5f79\u306b\u7acb\u3064\u30b1\u30fc\u30b9\u306f\u5272\u3068\u9650\u3089\u308c\u3066\u3044\u308b\u3068\u3044\u3046\u304b\u3001\u65e5\u5e38\u7684\u306b\u4f7f\u3046\u3088\u3046\u306a\u30c4\u30fc\u30eb\u3067\u3082\u306a\u3044\u3067\u3059\u304c\u3001\nterraformer \u3067\u96d1\u306b import \u3057\u3066\u304d\u305f\u306e\u306f\u826f\u3044\u304c\u3001\u6271\u3044\u306b\u56f0\u3063\u3066\u3044\u308b\u306a\u3093\u3066\u4eba\u306b\u306f\u5f79\u306b\u7acb\u3064\u304b\u3082\u3057\u308c\u307e\u305b\u3093\u3002"))}c.isMDXComponent=!0}}]);