"use strict";(self.webpackChunktechblog_szksh_cloud_github_io=self.webpackChunktechblog_szksh_cloud_github_io||[]).push([[3662],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},u=Object.keys(e);for(n=0;n<u.length;n++)r=u[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(n=0;n<u.length;n++)r=u[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},d=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,u=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=c(r),m=o,f=p["".concat(l,".").concat(m)]||p[m]||s[m]||u;return r?n.createElement(f,a(a({ref:t},d),{},{components:r})):n.createElement(f,a({ref:t},d))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var u=r.length,a=new Array(u);a[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:o,a[1]=i;for(var c=2;c<u;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5419:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>u,metadata:()=>i,toc:()=>c});var n=r(7462),o=(r(7294),r(3905));const u={title:"drone \u306e build \u306e timeout \u304c\u5909\u66f4\u3067\u304d\u306a\u3044",date:new Date("2018-09-30T11:16:28.000Z"),tags:["drone"],authors:["suzuki-shunsuke"]},a=void 0,i={permalink:"/drone-build-timeout",source:"@site/blog/drone-build-timeout.md",title:"drone \u306e build \u306e timeout \u304c\u5909\u66f4\u3067\u304d\u306a\u3044",description:"drone 0.8.5 \u3067\u691c\u8a3c\u3057\u3066\u3044\u307e\u3059\u3002",date:"2018-09-30T11:16:28.000Z",formattedDate:"September 30, 2018",tags:[{label:"drone",permalink:"/tags/drone"}],readingTime:.5,truncated:!1,authors:[{name:"Shunsuke Suzuki",title:"Platform Engineer / OSS Developer / Go / Terraform",url:"https://github.com/suzuki-shunsuke",imageURL:"https://github.com/suzuki-shunsuke.png",key:"suzuki-shunsuke"}],frontMatter:{title:"drone \u306e build \u306e timeout \u304c\u5909\u66f4\u3067\u304d\u306a\u3044",date:"2018-09-30T11:16:28.000Z",tags:["drone"],authors:["suzuki-shunsuke"]},prevItem:{title:"drone \u306e matrix build \u304c27\u500b\u3057\u304b\u5b9f\u884c\u3055\u308c\u306a\u3044",permalink:"/drone-matrix-build-run-only-27"},nextItem:{title:"Drone \u306e build \u5b9f\u884c\u6642\u306e\u8a8d\u8a3c\u65b9\u6cd5",permalink:"/drone-git-authentication"}},l={authorsImageUrls:[void 0]},c=[],d={toc:c};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"drone 0.8.5 \u3067\u691c\u8a3c\u3057\u3066\u3044\u307e\u3059\u3002"),(0,o.kt)("p",null,"drone \u306e build \u306e \u30bf\u30a4\u30e0\u30a2\u30a6\u30c8\u306e\u8a2d\u5b9a\u306f\u30ea\u30dd\u30b8\u30c8\u30ea\u306e settings \u304b\u3089\u5909\u66f4\u3067\u304d\u305d\u3046\u3067\u3059\u304c\u3001\n\u5b9f\u306f drone \u306e admin \u3057\u304b\u5909\u66f4\u3067\u304d\u307e\u305b\u3093\u3002"),(0,o.kt)("p",null,"\u30d6\u30e9\u30a6\u30b6\u306e\u30c7\u30d9\u30ed\u30c3\u30d1\u30fc\u30c4\u30fc\u30eb\u3092\u4f7f\u3046\u3068\u3001\u3053\u306e Timeout \u306e\u8a2d\u5b9a\u3092\u5909\u66f4\u3057\u305f\u969b\u306b"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"PATCH /api/repos/:owner/:name\n")),(0,o.kt)("p",null,"\u306b\u30ea\u30af\u30a8\u30b9\u30c8\u304c\u98db\u3093\u3067\u3044\u308b\u306e\u3067\u3001\u305d\u3053\u304b\u3089\u30b3\u30fc\u30c9\u3092\u8ffd\u3044\u304b\u3051\u308b\u3068\u5206\u304b\u308a\u307e\u3059\u3002"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/drone/drone/blob/29785b86f6534ded974120de0fcf7c21397a9d0d/router/router.go#L109"},"https://github.com/drone/drone/blob/29785b86f6534ded974120de0fcf7c21397a9d0d/router/router.go#L109")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/drone/drone/blob/29785b86f6534ded974120de0fcf7c21397a9d0d/server/repo.go#L117"},"https://github.com/drone/drone/blob/29785b86f6534ded974120de0fcf7c21397a9d0d/server/repo.go#L117"))))}p.isMDXComponent=!0}}]);