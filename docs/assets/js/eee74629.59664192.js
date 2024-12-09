"use strict";(self.webpackChunktechblog_szksh_cloud_github_io=self.webpackChunktechblog_szksh_cloud_github_io||[]).push([[9040],{5680:(e,n,t)=>{t.d(n,{xA:()=>p,yg:()=>y});var r=t(6540);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=r.createContext({}),s=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=s(e.components);return r.createElement(u.Provider,{value:n},e.children)},c="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=s(t),m=o,y=c["".concat(u,".").concat(m)]||c[m]||g[m]||i;return t?r.createElement(y,a(a({ref:n},p),{},{components:t})):r.createElement(y,a({ref:n},p))}));function y(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=m;var l={};for(var u in n)hasOwnProperty.call(n,u)&&(l[u]=n[u]);l.originalType=e,l[c]="string"==typeof e?e:o,a[1]=l;for(var s=2;s<i;s++)a[s]=t[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},9652:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>a,default:()=>g,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=t(8168),o=(t(6540),t(5680));const i={title:"Drone Extension \u306e\u30ea\u30b9\u30af",date:new Date("2019-08-14T22:54:23.000Z"),tags:["drone"],authors:["suzuki-shunsuke"]},a=void 0,l={permalink:"/risk-of-drone-extension",source:"@site/blog/risk-of-drone-extension.md",title:"Drone Extension \u306e\u30ea\u30b9\u30af",description:"Drone v1 \u3067\u306f Extension \u3068\u3044\u3046\u4ed5\u7d44\u307f\u304c\u5c0e\u5165\u3055\u308c\u307e\u3057\u305f\u3002",date:"2019-08-14T22:54:23.000Z",formattedDate:"August 14, 2019",tags:[{label:"drone",permalink:"/tags/drone"}],readingTime:3.67,hasTruncateMarker:!1,authors:[{name:"Shunsuke Suzuki",title:"Platform Engineer / OSS Developer / Go / Terraform",url:"https://github.com/suzuki-shunsuke",imageURL:"https://github.com/suzuki-shunsuke.png",key:"suzuki-shunsuke"}],frontMatter:{title:"Drone Extension \u306e\u30ea\u30b9\u30af",date:"2019-08-14T22:54:23.000Z",tags:["drone"],authors:["suzuki-shunsuke"]},prevItem:{title:"cmdx - task runner",permalink:"/cmdx"},nextItem:{title:"Drone v1 \u3067 gRPC \u304c\u4f7f\u308f\u308c\u306a\u304f\u306a\u3063\u305f",permalink:"/drone-v1-deprecate-grpc"}},u={authorsImageUrls:[void 0]},s=[],p={toc:s},c="wrapper";function g(e){let{components:n,...t}=e;return(0,o.yg)(c,(0,r.A)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("p",null,"Drone v1 \u3067\u306f Extension \u3068\u3044\u3046\u4ed5\u7d44\u307f\u304c\u5c0e\u5165\u3055\u308c\u307e\u3057\u305f\u3002"),(0,o.yg)("p",null,"\u3053\u308c\u306f\u6587\u5b57\u901a\u308a Drone \u3092\u62e1\u5f35\u3059\u308b\u4ed5\u7d44\u307f\u3067\u3001\u4ed5\u69d8\u306b\u5f93\u3063\u3066\u4f5c\u308c\u3070\u81ea\u7531\u306b Drone \u3092\u62e1\u5f35\u3067\u304d\u307e\u3059\u3002"),(0,o.yg)("p",null,(0,o.yg)("a",{parentName:"p",href:"https://docs.drone.io/extensions/overview/"},"https://docs.drone.io/extensions/overview/")),(0,o.yg)("p",null,"\u5168\u3066\u3092\u672c\u4f53\u3067\u3084\u308b\u306e\u3067\u306f\u306a\u304f\u3001\u62e1\u5f35\u3059\u308b\u4ed5\u7d44\u307f\u3092\u63d0\u4f9b\u3057\u3001\u3042\u3068\u306f\u30b3\u30df\u30e5\u30cb\u30c6\u30a3\u306b\u59d4\u306d\u308b\u3068\u3044\u3046\u306e\u304c Drone \u306e\u4e00\u3064\u306e\u65b9\u91dd\u3068\u3082\u8a00\u3048\u308b\u3068\u601d\u3044\u307e\u3059\u3002"),(0,o.yg)("p",null,"Extension \u306f\u975e\u5e38\u306b\u9762\u767d\u3044\u4ed5\u7d44\u307f\u3060\u3068\u601d\u3044\u307e\u3059\u304c\u3001 Drone \u3092\u904b\u7528\u3059\u308b\u7acb\u5834\u304b\u3089\u3059\u308b\u3068\u4e2d\u3005\u982d\u304c\u75db\u3044\u4ed5\u7d44\u307f\u306a\u6c17\u304c\u3057\u3066\u3066\u3001\n\u81ea\u5206\u306f\u5c0e\u5165\u306b\u5bfe\u3057\u614e\u91cd\u306a\u7acb\u5834\u3067\u3059\u3002\n\u5358\u306a\u308b\u675e\u6182\u3067\u6e08\u3081\u3070\u826f\u3044\u306e\u3067\u3059\u304c\u3001\u305d\u306e\u61f8\u5ff5\u306b\u3064\u3044\u3066\u66f8\u304d\u305f\u3044\u3068\u601d\u3044\u307e\u3059\u3002"),(0,o.yg)("p",null,"\u6839\u672c\u306f Drone Extension \u56fa\u6709\u306e\u554f\u984c\u3068\u8a00\u3046\u3088\u308a\u3001\u4e00\u822c\u7684\u306a\u62e1\u5f35\u6a5f\u69cb\u5168\u822c\u306b\u8a00\u3048\u308b\u3053\u3068\u3060\u3068\u601d\u3044\u307e\u3059\u3002\n\u305f\u3060\u3057\u3001 Drone Extension \u306f\u5168\u3066\u306e\u30d3\u30eb\u30c9\u306b\u5f71\u97ff\u3092\u53ca\u307c\u3059\u3001\nCI/CD\u30b7\u30b9\u30c6\u30e0\u304c\u52d5\u304b\u306a\u304f\u306a\u308b\u3068\u30b5\u30fc\u30d3\u30b9\u306e\u30ea\u30ea\u30fc\u30b9\u306b\u5f71\u97ff\u3092\u53ca\u307c\u3057\u304b\u306d\u306a\u3044\u3068\u3044\u3046\u3053\u3068\u304b\u3089\u3088\u308a\u30ea\u30b9\u30af\u306e\u9ad8\u3044\u3082\u306e\u306b\u306a\u3063\u3066\u3044\u307e\u3059\u3002"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"\u672c\u4f53\u306e drone/drone \u3068\u6bd4\u3079\u3001\u958b\u767a\u306f\u6d3b\u767a\u3067\u306f\u306a\u304f\u3001\u30b5\u30fc\u30c9\u30d1\u30fc\u30c6\u30a3\u306e extension \u306f\u3044\u3064\u958b\u767a\u304c\u6b62\u307e\u3063\u3066\u3082\u304a\u304b\u3057\u304f\u306a\u3044"),(0,o.yg)("li",{parentName:"ul"},"\u672c\u4f53\u306e drone/drone \u3068\u6bd4\u3079\u3001\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u3084\u30b5\u30dd\u30fc\u30c8\u4f53\u5236\u304c\u8ca7\u5f31\u3060\u3068\u601d\u308f\u308c\u308b(drone \u306b\u95a2\u3057\u3066\u306f ",(0,o.yg)("a",{parentName:"li",href:"https://discourse.drone.io"},"https://discourse.drone.io")," \u3067\u30b5\u30dd\u30fc\u30c8\u3055\u308c\u3066\u3044\u308b\u304c\u3001\u30b5\u30fc\u30c9\u30d1\u30fc\u30c6\u30a3\u306e extension \u3067\u306f\u96e3\u3057\u3044)"),(0,o.yg)("li",{parentName:"ul"},"\u30e6\u30fc\u30b6\u30fc\u304b\u3089\u306e extension \u306b\u95a2\u3059\u308b\u8981\u671b\u3092\u53d7\u3051\u4ed8\u3051\u308b\u3088\u3046\u306b\u306a\u308b\u3068\u3001\u7ba1\u7406\u8005\u306e\u8ca0\u62c5\u306b\u306a\u308b"),(0,o.yg)("li",{parentName:"ul"},"extension \u306e\u30af\u30a9\u30ea\u30c6\u30a3\u306f\u30de\u30c1\u30de\u30c1\u3067\u3042\u308a\u3001\u4f8b\u5916\u51e6\u7406\u304c\u7518\u304b\u3063\u305f\u308a\u3001\u3061\u3083\u3093\u3068\u30a8\u30e9\u30fc\u3092\u5410\u304b\u306a\u3044\u3082\u306e\u3082\u3042\u308b\u3060\u308d\u3046"),(0,o.yg)("li",{parentName:"ul"},"\u30c8\u30e9\u30d6\u30eb\u30b7\u30e5\u30fc\u30c6\u30a3\u30f3\u30b0\u304c\u96e3\u3057\u3044\u3068\u601d\u308f\u308c\u308b"),(0,o.yg)("li",{parentName:"ul"},"extension \u306e\u4ed5\u7d44\u307f\u4e0a\u3001extension \u3092\u5fc5\u8981\u3068\u3057\u306a\u3044\u30d3\u30eb\u30c9\u306b\u3082\u5f71\u97ff\u3092\u53ca\u307c\u3057\u3046\u308b"),(0,o.yg)("li",{parentName:"ul"},"\u4e00\u5ea6\u8ffd\u52a0\u3057\u3001\u4f9d\u5b58\u3057\u3060\u3059\u3068\u6d88\u3059\u306e\u304c\u96e3\u3057\u304f\u306a\u308b"),(0,o.yg)("li",{parentName:"ul"},"extension \u304c\u843d\u3061\u308b\u3068\u5168 build \u306b\u5f71\u97ff\u3059\u308b\u306e\u3067\u3001\u8010\u969c\u5bb3\u6027(\u5197\u9577\u5316)\u3001\u30e2\u30cb\u30bf\u30ea\u30f3\u30b0\u304c\u5fc5\u8981"),(0,o.yg)("li",{parentName:"ul"},"etc")),(0,o.yg)("p",null,"\u52ff\u8ad6\u3001\u4e0a\u8a18\u306e\u61f8\u5ff5\u70b9\u306f Extension \u306b\u3088\u3063\u3066\u63d0\u4f9b\u3055\u308c\u308b\u6a5f\u80fd\u3068\u30c8\u30ec\u30fc\u30c9\u30aa\u30d5\u3067\u3042\u308a\u3001\nExtension \u306e\u5c0e\u5165\u65b9\u91dd\u306f Drone \u304c\u904b\u7528\u3055\u308c\u308b\u74b0\u5883\u306b\u3088\u3063\u3066\u5927\u304d\u304f\u4f9d\u5b58\u3059\u308b\u3068\u601d\u3044\u307e\u3059\u3002"),(0,o.yg)("p",null,"\u4f8b\u3048\u3070\u5168\u54e1\u304c\u9854\u898b\u77e5\u308a\u306e\u3088\u3046\u306a\u5c0f\u3055\u306a\u7d44\u7e54\u3067\u7279\u5b9a\u306e\u30b5\u30fc\u30d3\u30b9\u5c02\u7528\u306b Drone \u3092\u4f7f\u3063\u3066\u3044\u3066\u304b\u3064 Drone \u306e\u904b\u7528\u4f53\u5236(\u4eba\u54e1)\u306b\u5341\u5206\u4f59\u88d5\u304c\u3042\u308b\u306a\u3089\n\u7a4d\u6975\u7684\u306b Extension \u3092\u5c0e\u5165\u3057\u3066\u3082\u554f\u984c\u306a\u3044\u304b\u3082\u3057\u308c\u307e\u305b\u3093\u3002"),(0,o.yg)("p",null,"\u4e00\u65b9\u5927\u304d\u306a\u7d44\u7e54\u3067\u8272\u3005\u306a\u30b5\u30fc\u30d3\u30b9\u3067\u540c\u3058 Drone \u3092\u4f7f\u3063\u3066\u3044\u3066\u304b\u3064 Drone \u306e\u904b\u7528\u4f53\u5236\u304c\u4e0d\u5341\u5206(\u4eba\u624b\u4e0d\u8db3)\u306a\u3089\u3070\u3001 Extension \u306e\u5c0e\u5165\u306b\u306f\u614e\u91cd\u306b\u306a\u3089\u3056\u308b\u3092\u5f97\u306a\u3044\u306e\u3067\u306f\u306a\u3044\u304b\u3068\u601d\u3044\u307e\u3059\u3002"))}g.isMDXComponent=!0}}]);