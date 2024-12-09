"use strict";(self.webpackChunktechblog_szksh_cloud_github_io=self.webpackChunktechblog_szksh_cloud_github_io||[]).push([[8595],{5680:(e,t,r)=>{r.d(t,{xA:()=>g,yg:()=>s});var n=r(6540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),p=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},g=function(e){var t=p(e.components);return n.createElement(u.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,g=i(e,["components","mdxType","originalType","parentName"]),c=p(r),y=a,s=c["".concat(u,".").concat(y)]||c[y]||m[y]||l;return r?n.createElement(s,o(o({ref:t},g),{},{components:r})):n.createElement(s,o({ref:t},g))}));function s(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=y;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[c]="string"==typeof e?e:a,o[1]=i;for(var p=2;p<l;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},8631:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var n=r(8168),a=(r(6540),r(5680));const l={title:"Go \u306e\u597d\u304d\u306a\u3068\u3053\u308d",date:new Date("2019-02-10T08:49:58.000Z"),tags:["golang"],authors:["suzuki-shunsuke"]},o=void 0,i={permalink:"/golang-good-point",source:"@site/blog/golang-good-point.md",title:"Go \u306e\u597d\u304d\u306a\u3068\u3053\u308d",description:"\u81ea\u5206\u306f 2017/8\u9803(\u66d6\u6627)\u304b\u3089\u30e1\u30a4\u30f3\u3067\u66f8\u304f\u8a00\u8a9e\u3092 Python \u304b\u3089 Go \u306b\u5909\u66f4\u3057\u307e\u3057\u305f\u3002",date:"2019-02-10T08:49:58.000Z",formattedDate:"February 10, 2019",tags:[{label:"golang",permalink:"/tags/golang"}],readingTime:2.635,hasTruncateMarker:!1,authors:[{name:"Shunsuke Suzuki",title:"Platform Engineer / OSS Developer / Go / Terraform",url:"https://github.com/suzuki-shunsuke",imageURL:"https://github.com/suzuki-shunsuke.png",key:"suzuki-shunsuke"}],frontMatter:{title:"Go \u306e\u597d\u304d\u306a\u3068\u3053\u308d",date:"2019-02-10T08:49:58.000Z",tags:["golang"],authors:["suzuki-shunsuke"]},prevItem:{title:"JS\u4ee5\u5916\u3067\u306enpm\u306e\u6d3b\u7528",permalink:"/use-npm"},nextItem:{title:"go-error-handling-logging-practice v0.2",permalink:"/golang-logging-error-handling-practice-0.2.0"}},u={authorsImageUrls:[void 0]},p=[],g={toc:p},c="wrapper";function m(e){let{components:t,...r}=e;return(0,a.yg)(c,(0,n.A)({},g,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"\u81ea\u5206\u306f 2017/8\u9803(\u66d6\u6627)\u304b\u3089\u30e1\u30a4\u30f3\u3067\u66f8\u304f\u8a00\u8a9e\u3092 Python \u304b\u3089 Go \u306b\u5909\u66f4\u3057\u307e\u3057\u305f\u3002\nGo\u3092\u66f8\u304d\u59cb\u3081\u3066\u5272\u3068\u65e9\u3044\u6bb5\u968e\u3067Go\u304c\u4e00\u756a\u597d\u304d\u306b\u306a\u308a\u307e\u3057\u305f\u3002\n\u305d\u3053\u3067\u306a\u3093\u3067 Go \u304c\u597d\u304d\u306a\u306e\u304b\u3068\u3044\u3046\u3053\u3068\u3092\u9811\u5f35\u3063\u3066\u8a00\u8a9e\u5316\u3057\u3088\u3046\u3068\u601d\u3044\u307e\u3059\u3002"),(0,a.yg)("p",null,"\u82e5\u5e72\u4ed6\u306e\u8a00\u8a9e\u3068\u6bd4\u8f03\u3059\u308b\u90e8\u5206\u3082\u3042\u308a\u307e\u3059\u304c\u3001\u6c7a\u3057\u3066\u4ed6\u306e\u8a00\u8a9e\u3092\u30c7\u30a3\u30b9\u3063\u305f\u308a\u3001\n\u4ed6\u306e\u8a00\u8a9e\u3088\u308a\u512a\u308c\u3066\u3044\u308b\u3068\u3044\u3046\u3053\u3068\u304c\u8a00\u3044\u305f\u3044\u308f\u3051\u3067\u306f\u306a\u3044\u306e\u3067\u3054\u4e86\u627f\u304f\u3060\u3055\u3044\u3002"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"\u4f9d\u5b58\u3059\u308b\u3082\u306e\u304c\u5c0f\u3055\u304f\u3001\u30d0\u30a4\u30ca\u30ea1\u3064\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b\u3060\u3051\u3067\u826f\u3044",(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"Prometheus \u306e exporter \u3068\u304b\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b\u306e\u7c21\u5358"),(0,a.yg)("li",{parentName:"ul"},"Docker Image\u3082\u6700\u5c0f\u9650\u306b\u306a\u308b"))),(0,a.yg)("li",{parentName:"ul"},"\u9759\u7684\u578b\u4ed8\u3051",(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"\u30d3\u30eb\u30c9\u51fa\u6765\u3066\u3044\u308b\u6642\u70b9\u3067\u4e00\u5b9a\u306e\u4fe1\u983c\u6027\u304c\u62c5\u4fdd\u3055\u308c\u3066\u3044\u308b"),(0,a.yg)("li",{parentName:"ul"},"\u3088\u304f\u77e5\u3089\u306a\u3044\u30b3\u30fc\u30c9\u3092\u8aad\u3093\u3060\u308a\u4fee\u6b63\u3059\u308b\u3068\u304d\u3068\u304b\u3060\u3044\u3076\u6709\u308a\u96e3\u3044"))),(0,a.yg)("li",{parentName:"ul"},"GoDoc\u304c\u7d20\u6674\u3089\u3057\u3044",(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"\u4f55\u3082\u3057\u306a\u304f\u3066\u3082\u30e9\u30a4\u30d6\u30e9\u30ea\u306e\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u304c\u51fa\u6765\u4e0a\u304c\u3063\u3066\u3044\u308b"))),(0,a.yg)("li",{parentName:"ul"},"\u30e9\u30a4\u30d6\u30e9\u30ea\u306e\u516c\u958b\u304c\u5bb9\u6613",(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"GitHub\u306b\u516c\u958b\u3059\u308b\u3060\u3051"),(0,a.yg)("li",{parentName:"ul"},"npm \u3084 pypi \u306e\u3088\u3046\u306a\u30ec\u30b8\u30b9\u30c8\u30ea\u304c\u306a\u3044\u306e\u3067\u697d"))),(0,a.yg)("li",{parentName:"ul"},"go test \u3068\u304b go vet, gofmt \u307f\u305f\u3044\u306b\u6a19\u6e96\u30c4\u30fc\u30eb\u304c\u63c3\u3063\u3066\u3044\u308b"),(0,a.yg)("li",{parentName:"ul"},"\u30b3\u30fc\u30c7\u30a3\u30f3\u30b0\u898f\u7d04\u3067\u60a9\u3080\u5fc5\u8981\u304c\u306a\u3044"),(0,a.yg)("li",{parentName:"ul"},"lint\u30c4\u30fc\u30eb\u304c\u5145\u5b9f\u3057\u3066\u3044\u308b",(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"gometalinter \u3068\u304b\u4f7f\u3063\u3066\u304a\u3051\u3070 OK"),(0,a.yg)("li",{parentName:"ul"},"lint\u3067\u304d\u308b\u74b0\u5883\u3092\u69cb\u7bc9\u3059\u308b\u306e\u306b\u305d\u3053\u307e\u3067\u9811\u5f35\u3089\u306a\u304f\u3066\u826f\u3044"))),(0,a.yg)("li",{parentName:"ul"},"\u30a8\u30e9\u30fc\u30cf\u30f3\u30c9\u30ea\u30f3\u30b0\u304c\u6697\u9ed9\u7684\u306b\u7701\u7565\u3067\u304d\u306a\u3044\u306e\u3067\u4fe1\u983c\u6027\u304c\u9ad8\u3044",(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"Go\u306e\u30a8\u30e9\u30fc\u30cf\u30f3\u30c9\u30ea\u30f3\u30b0\u5acc\u3044\u3063\u3066\u4eba\u3082\u3044\u308b\u3057\u3001v2\u3067\u6539\u5584\u3055\u308c\u308b\u3063\u3066\u8a71\u3082\u805e\u304f\u3051\u3069\u3001\u81ea\u5206\u306f\u3080\u3057\u308d\u597d\u304d(\u9762\u5012\u306a\u306e\u306f\u7406\u89e3\u3067\u304d\u308b\u3051\u3069)"))),(0,a.yg)("li",{parentName:"ul"},"\u8a00\u8a9e\u4ed5\u69d8\u304c\u30b7\u30f3\u30d7\u30eb(\u5ba2\u89b3\u7684\u306a\u6839\u62e0\u306f\u306a\u3044\u3057\u3001\u96e3\u3057\u3044\u90e8\u5206\u3082\u3042\u308b\u3051\u3069\u3001\u305d\u3093\u306a\u6c17\u304c\u3059\u308b)",(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"\u30e1\u30bf\u30d7\u30ed\u30b0\u30e9\u30df\u30f3\u30b0\u4f7f\u3063\u305f\u3001\u9b54\u8853\u7684\u306a\u30b3\u30fc\u30c9\u306b\u306a\u308a\u306b\u304f\u3044"))),(0,a.yg)("li",{parentName:"ul"},"interface \u4f7f\u3063\u3066\u30b3\u30fc\u30c9\u3092\u758e\u7d50\u5408\u306b\u3059\u308b\u306e\u304c\u66f8\u3044\u3066\u3066\u6c17\u6301\u3061\u3044\u3044"),(0,a.yg)("li",{parentName:"ul"},"\u4e26\u5217\u51e6\u7406\u304c\u66f8\u304d\u3084\u3059\u3044")))}m.isMDXComponent=!0}}]);