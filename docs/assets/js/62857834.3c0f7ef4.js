"use strict";(self.webpackChunktechblog_szksh_cloud_github_io=self.webpackChunktechblog_szksh_cloud_github_io||[]).push([[1246],{5680:(e,t,r)=>{r.d(t,{xA:()=>p,yg:()=>y});var n=r(6540);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),c=s(r),d=o,y=c["".concat(l,".").concat(d)]||c[d]||m[d]||i;return r?n.createElement(y,a(a({ref:t},p),{},{components:r})):n.createElement(y,a({ref:t},p))}));function y(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u[c]="string"==typeof e?e:o,a[1]=u;for(var s=2;s<i;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},1291:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>m,frontMatter:()=>i,metadata:()=>u,toc:()=>s});var n=r(8168),o=(r(6540),r(5680));const i={title:"drone \u306e project visibility \u3068\u306f",date:new Date("2018-09-30T11:32:20.000Z"),tags:["drone"],authors:["suzuki-shunsuke"]},a=void 0,u={permalink:"/drone-project-visibility",source:"@site/blog/drone-project-visibility.md",title:"drone \u306e project visibility \u3068\u306f",description:"\u6050\u3089\u304f\u516c\u5f0f\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u306b\u8aac\u660e\u304c\u306a\u3044\u6c17\u304c\u3059\u308b\u306e\u3067\u66f8\u3044\u3066\u304a\u304d\u307e\u3059\u3002",date:"2018-09-30T11:32:20.000Z",formattedDate:"September 30, 2018",tags:[{label:"drone",permalink:"/tags/drone"}],readingTime:.635,hasTruncateMarker:!1,authors:[{name:"Shunsuke Suzuki",title:"Platform Engineer / OSS Developer / Go / Terraform",url:"https://github.com/suzuki-shunsuke",imageURL:"https://github.com/suzuki-shunsuke.png",key:"suzuki-shunsuke"}],frontMatter:{title:"drone \u306e project visibility \u3068\u306f",date:"2018-09-30T11:32:20.000Z",tags:["drone"],authors:["suzuki-shunsuke"]},prevItem:{title:"drone \u306e step \u3092\u5b9f\u884c\u3059\u308b\u304b\u5426\u304b\u3092\u30bf\u30b0\u540d\u3067\u5224\u5b9a\u3059\u308b\u65b9\u6cd5",permalink:"/drone-tag-conditional-step"},nextItem:{title:"drone \u306e matrix build \u304c27\u500b\u3057\u304b\u5b9f\u884c\u3055\u308c\u306a\u3044",permalink:"/drone-matrix-build-run-only-27"}},l={authorsImageUrls:[void 0]},s=[],p={toc:s},c="wrapper";function m(e){let{components:t,...r}=e;return(0,o.yg)(c,(0,n.A)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("p",null,"\u6050\u3089\u304f\u516c\u5f0f\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u306b\u8aac\u660e\u304c\u306a\u3044\u6c17\u304c\u3059\u308b\u306e\u3067\u66f8\u3044\u3066\u304a\u304d\u307e\u3059\u3002\n\u3068\u8a00\u3063\u3066\u3082\u3001\u4ee5\u4e0b\u306eissue\u306b\u5168\u90e8\u66f8\u3044\u3066\u3042\u308a\u307e\u3059\u304c\u3002"),(0,o.yg)("p",null,(0,o.yg)("a",{parentName:"p",href:"https://github.com/drone/drone/issues/2042"},"https://github.com/drone/drone/issues/2042")),(0,o.yg)("p",null,"drone\u306e web ui \u304b\u3089\u30ea\u30dd\u30b8\u30c8\u30ea\u3054\u3068\u306b\u8a2d\u5b9a\u3067\u304d\u307e\u3059\u3002\n\u305d\u306e\u30ea\u30dd\u30b8\u30c8\u30ea\u304c\u8ab0\u306b\u898b\u3048\u308b\u304b\u306e\u8a2d\u5b9a\u3067\u3059\u3002"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"public: \u30ed\u30b0\u30a4\u30f3\u3057\u3066\u3044\u306a\u304f\u3066\u3082\u8ab0\u3067\u3082\u898b\u308c\u308b(public\u30ea\u30dd\u30b8\u30c8\u30ea\u306e\u30c7\u30d5\u30a9\u30eb\u30c8)"),(0,o.yg)("li",{parentName:"ul"},"private: \u30ea\u30dd\u30b8\u30c8\u30ea\u306b\u30a2\u30af\u30bb\u30b9\u3067\u304d\u308b\u4eba\u3057\u304b\u898b\u308c\u306a\u3044(private\u30ea\u30dd\u30b8\u30c8\u30ea\u306e\u30c7\u30d5\u30a9\u30eb\u30c8)"),(0,o.yg)("li",{parentName:"ul"},"internal: \u30ed\u30b0\u30a4\u30f3\u3057\u3066\u3044\u308c\u3070\u8ab0\u3067\u3082\u898b\u308c\u308b")))}m.isMDXComponent=!0}}]);