"use strict";(self.webpackChunktechblog_szksh_cloud_github_io=self.webpackChunktechblog_szksh_cloud_github_io||[]).push([[3055],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>g});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=s(r),m=o,g=c["".concat(u,".").concat(m)]||c[m]||d[m]||a;return r?n.createElement(g,i(i({ref:t},p),{},{components:r})):n.createElement(g,i({ref:t},p))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[c]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},8074:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var n=r(7462),o=(r(7294),r(3905));const a={title:"Drone v1 \u3067 gRPC \u304c\u4f7f\u308f\u308c\u306a\u304f\u306a\u3063\u305f",date:new Date("2019-08-14T22:39:18.000Z"),tags:["drone","grpc"],authors:["suzuki-shunsuke"]},i=void 0,l={permalink:"/drone-v1-deprecate-grpc",source:"@site/blog/drone-v1-deprecate-grpc.md",title:"Drone v1 \u3067 gRPC \u304c\u4f7f\u308f\u308c\u306a\u304f\u306a\u3063\u305f",description:"v0.8 \u3067\u306f server - agent \u9593\u306e\u901a\u4fe1\u306b gPRC \u304c\u4f7f\u308f\u308c\u3066\u3044\u307e\u3057\u305f\u304c\u3001 v1 \u3067\u306f\u4f7f\u308f\u308c\u306a\u304f\u306a\u308a\u307e\u3057\u305f\u3002",date:"2019-08-14T22:39:18.000Z",formattedDate:"August 14, 2019",tags:[{label:"drone",permalink:"/tags/drone"},{label:"grpc",permalink:"/tags/grpc"}],readingTime:1.71,truncated:!1,authors:[{name:"Shunsuke Suzuki",title:"Platform Engineer / OSS Developer / Go / Terraform",url:"https://github.com/suzuki-shunsuke",imageURL:"https://github.com/suzuki-shunsuke.png",key:"suzuki-shunsuke"}],frontMatter:{title:"Drone v1 \u3067 gRPC \u304c\u4f7f\u308f\u308c\u306a\u304f\u306a\u3063\u305f",date:"2019-08-14T22:39:18.000Z",tags:["drone","grpc"],authors:["suzuki-shunsuke"]},prevItem:{title:"Drone Extension \u306e\u30ea\u30b9\u30af",permalink:"/risk-of-drone-extension"},nextItem:{title:"Golang \u3067\u306e\u6642\u523b\u306e\u6271\u3044\u65b9\u3092\u6574\u7406\u3059\u308b",permalink:"/golang-time"}},u={authorsImageUrls:[void 0]},s=[{value:"\u7406\u7531",id:"\u7406\u7531",level:2},{value:"v1 \u3067\u306e\u901a\u4fe1\u65b9\u6cd5",id:"v1-\u3067\u306e\u901a\u4fe1\u65b9\u6cd5",level:2}],p={toc:s};function c(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"v0.8 \u3067\u306f server - agent \u9593\u306e\u901a\u4fe1\u306b gPRC \u304c\u4f7f\u308f\u308c\u3066\u3044\u307e\u3057\u305f\u304c\u3001 v1 \u3067\u306f\u4f7f\u308f\u308c\u306a\u304f\u306a\u308a\u307e\u3057\u305f\u3002"),(0,o.kt)("h2",{id:"\u7406\u7531"},"\u7406\u7531"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://discourse.drone.io/t/curious-about-decision-to-drop-grpc/3987"},"https://discourse.drone.io/t/curious-about-decision-to-drop-grpc/3987"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"gRPC\u95a2\u9023\u306e\u30c8\u30e9\u30d6\u30eb\u306e\u554f\u3044\u5408\u308f\u305b\u304c\u591a\u3059\u304e\u3066\u30b5\u30dd\u30fc\u30c8\u3057\u304d\u308c\u306a\u3044\u306e\u3067\u6b62\u3081\u305f")))),(0,o.kt)("h2",{id:"v1-\u3067\u306e\u901a\u4fe1\u65b9\u6cd5"},"v1 \u3067\u306e\u901a\u4fe1\u65b9\u6cd5"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://discourse.drone.io/t/drone-agents-keep-closing-connections-with-499-code/5197/2"},"https://discourse.drone.io/t/drone-agents-keep-closing-connections-with-499-code/5197/2"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"agent \u304c\u30ed\u30f3\u30b0\u30dd\u30fc\u30ea\u30f3\u30b0\u3057\u3066\u3044\u308b"),(0,o.kt)("li",{parentName:"ul"},"30\u79d2\u5f8c\u3001\u306a\u3093\u306e\u30d3\u30eb\u30c9\u3082\u306a\u3051\u308c\u3070\u30b3\u30cd\u30af\u30b7\u30e7\u30f3\u3092\u5207\u3063\u3066\u3001\u518d\u63a5\u7d9a\u3059\u308b(\u5f35\u308a\u3063\u3071\u306a\u3057\u306b\u3057\u3066\u308b\u3068\u3001LB\u3084\u30d5\u30a1\u30a4\u30a2\u30a6\u30a9\u30fc\u30eb\u306b\u30b3\u30cd\u30af\u30b7\u30e7\u30f3\u5207\u3089\u308c\u308b\u305f\u3081)")))),(0,o.kt)("hr",null),(0,o.kt)("p",null,"\u81ea\u5206\u3082 v0.8 \u304b\u3089 Drone \u3092\u904b\u7528\u3057\u3066\u3044\u3066\u6700\u8fd1 v1 \u306b upgrade \u3057\u307e\u3057\u305f\u304c\u3001\nv0.8 \u3067\u306f gRPC \u95a2\u9023\u306e\u30c8\u30e9\u30d6\u30eb\u304c\u983b\u767a\u3057\u3066\u3044\u307e\u3057\u305f\u3002\nserver \u306e\u30ed\u30b0\u3067\u306f\u7d76\u3048\u305a gRPC \u95a2\u9023\u306e\u30a8\u30e9\u30fc\u3092\u5410\u3044\u3066\u3044\u307e\u3057\u305f\u3057\u3001\nserver - agent \u9593\u306e TCP connection \u304c\u5207\u308c\u3063\u3071\u306a\u3057\u306b\u306a\u3063\u3066\u623b\u3089\u304f\u306a\u3063\u3066 agent \u6570\u304c\u3069\u3093\u3069\u3093\u6e1b\u3063\u3066\u3044\u3063\u305f\u308a\n\u30d3\u30eb\u30c9\u304c pending \u306e\u307e\u307e\u306b\u306a\u3063\u305f\u308a\u3001\u8272\u3005\u3042\u308a\u307e\u3057\u305f\u3002"),(0,o.kt)("p",null,"\u95a2\u9023\u3059\u308b issue \u306f\u3042\u308a\u3001\u5e7e\u3064\u304b\u5bfe\u7b56\u3092\u6253\u3063\u3066\u307f\u305f\u308a\u3057\u307e\u3057\u305f\u304c\u3001\u7d50\u5c40\u89e3\u6c7a\u3057\u307e\u305b\u3093\u3067\u3057\u305f\u3002"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/drone/drone/issues/2090"},"https://github.com/drone/drone/issues/2090")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/drone/drone/issues/2246"},"https://github.com/drone/drone/issues/2246")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/drone/drone/pull/2294"},"https://github.com/drone/drone/pull/2294")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.reddit.com/r/droneci/comments/8opifu/drone_stops_working_after_some_little_time/e06d1gn/"},"https://www.reddit.com/r/droneci/comments/8opifu/drone_stops_working_after_some_little_time/e06d1gn/"))),(0,o.kt)("p",null,"\u305d\u308c\u304c v1 \u306b\u30a2\u30c3\u30d7\u30b0\u30ec\u30fc\u30c9\u3057\u3066 gRPC \u304c\u4f7f\u308f\u308c\u306a\u304f\u306a\u3063\u3066\u304b\u3089\u89e3\u6d88\u3057\u3001\u500b\u4eba\u7684\u306b\u306f\u3068\u3066\u3082\u52a9\u304b\u308a\u307e\u3057\u305f\u3002\n\u7ba1\u7406\u8005\u7684\u306b\u306f\u30a2\u30c3\u30d7\u30b0\u30ec\u30fc\u30c9\u3057\u3066\u4e00\u756a\u5b09\u3057\u3044\u70b9\u3067\u3059\u306d\u3002"))}c.isMDXComponent=!0}}]);