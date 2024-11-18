"use strict";(self.webpackChunktechblog_szksh_cloud_github_io=self.webpackChunktechblog_szksh_cloud_github_io||[]).push([[9118],{5680:(e,t,r)=>{r.d(t,{xA:()=>c,yg:()=>g});var n=r(6540);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=l(r),m=o,g=p["".concat(u,".").concat(m)]||p[m]||d[m]||a;return r?n.createElement(g,i(i({ref:t},c),{},{components:r})):n.createElement(g,i({ref:t},c))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s[p]="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},7581:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var n=r(8168),o=(r(6540),r(5680));const a={title:"drone \u3067\u975eroot\u30e6\u30fc\u30b6\u30fc\u3067\u5b9f\u884c\u3055\u308c\u308bImage\u3092\u4f7f\u3048\u306a\u3044",date:new Date("2018-09-30T12:42:16.000Z"),authors:["suzuki-shunsuke"],tags:["drone"]},i=void 0,s={permalink:"/drone-cant-use-nonroot-image",source:"@site/blog/drone-cant-use-nonroot-image.md",title:"drone \u3067\u975eroot\u30e6\u30fc\u30b6\u30fc\u3067\u5b9f\u884c\u3055\u308c\u308bImage\u3092\u4f7f\u3048\u306a\u3044",description:"drone \u3067\u975eroot\u30e6\u30fc\u30b6\u30fc\u3067\u5b9f\u884c\u3055\u308c\u308bDocker Image\u3092\u4f7f\u304a\u3046\u3068\u3059\u308b\u3068build\u306b\u5931\u6557\u3057\u307e\u3059\u3002",date:"2018-09-30T12:42:16.000Z",formattedDate:"September 30, 2018",tags:[{label:"drone",permalink:"/tags/drone"}],readingTime:.48,hasTruncateMarker:!1,authors:[{name:"Shunsuke Suzuki",title:"Platform Engineer / OSS Developer / Go / Terraform",url:"https://github.com/suzuki-shunsuke",imageURL:"https://github.com/suzuki-shunsuke.png",key:"suzuki-shunsuke"}],frontMatter:{title:"drone \u3067\u975eroot\u30e6\u30fc\u30b6\u30fc\u3067\u5b9f\u884c\u3055\u308c\u308bImage\u3092\u4f7f\u3048\u306a\u3044",date:"2018-09-30T12:42:16.000Z",authors:["suzuki-shunsuke"],tags:["drone"]},prevItem:{title:"drone \u306e\u7ba1\u7406\u306e\u305f\u3081\u306b portainer \u3092\u5c0e\u5165\u3057\u305f",permalink:"/use-portainer-for-drone-admin"},nextItem:{title:"drone \u306e step \u3092\u5b9f\u884c\u3059\u308b\u304b\u5426\u304b\u3092\u30bf\u30b0\u540d\u3067\u5224\u5b9a\u3059\u308b\u65b9\u6cd5",permalink:"/drone-tag-conditional-step"}},u={authorsImageUrls:[void 0]},l=[],c={toc:l},p="wrapper";function d(e){let{components:t,...r}=e;return(0,o.yg)(p,(0,n.A)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("p",null,"drone \u3067\u975eroot\u30e6\u30fc\u30b6\u30fc\u3067\u5b9f\u884c\u3055\u308c\u308bDocker Image\u3092\u4f7f\u304a\u3046\u3068\u3059\u308b\u3068build\u306b\u5931\u6557\u3057\u307e\u3059\u3002"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"/bin/sh: 3: cannot create /root/.netrc: Permission denied\n")),(0,o.yg)("p",null,"\u3053\u308c\u306b\u3064\u3044\u3066\u306f drone \u306e\u958b\u767a\u8005\u304c\u56de\u7b54\u3057\u3066\u3044\u307e\u3059\u3002"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"https://discourse.drone.io/t/solved-netrc-permission-denied/171/2"},"https://discourse.drone.io/t/solved-netrc-permission-denied/171/2")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"https://discourse.drone.io/t/solved-netrc-permission-denied/171/4"},"https://discourse.drone.io/t/solved-netrc-permission-denied/171/4"))),(0,o.yg)("p",null,"\u7d50\u8ad6\u3092\u8a00\u3046\u3068\u3001\n\u4ed6\u306e\u30a4\u30e1\u30fc\u30b8\u3092\u4f7f\u3046\u304b\u3001\nroot\u3067\u5b9f\u884c\u3055\u308c\u308b\u3088\u3046\u306b\u30a4\u30e1\u30fc\u30b8\u3092\u4fee\u6b63\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u305d\u3046\u3067\u3059\u3002"))}d.isMDXComponent=!0}}]);