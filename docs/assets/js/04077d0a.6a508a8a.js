"use strict";(self.webpackChunktechblog_szksh_cloud_github_io=self.webpackChunktechblog_szksh_cloud_github_io||[]).push([[7980],{529:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>f,frontMatter:()=>u,metadata:()=>a,toc:()=>p});var r=n(8168),o=(n(6540),n(5680));const u={title:"buildflow \u306e task \u306e input, output \u3068\u3044\u3046\u6a5f\u80fd",date:new Date("2020-10-17T12:05:41.000Z"),tags:["oss","buildflow"],authors:["suzuki-shunsuke"]},l=void 0,a={permalink:"/buildflow-input-output",source:"@site/blog/buildflow-input-output.md",title:"buildflow \u306e task \u306e input, output \u3068\u3044\u3046\u6a5f\u80fd",description:"buildflow \u3068\u3044\u3046\u30c4\u30fc\u30eb\u3092\u958b\u767a\u3057\u3066\u3044\u308b\u306e\u3067 buildflow \u3068\u3044\u3046\u30bf\u30b0\u3092\u3064\u3051\u3066\u4f55\u56de\u304b\u306b\u5206\u3051\u3066\u30d6\u30ed\u30b0\u3092\u66f8\u304d\u307e\u3059\u3002",date:"2020-10-17T12:05:41.000Z",formattedDate:"October 17, 2020",tags:[{label:"oss",permalink:"/tags/oss"},{label:"buildflow",permalink:"/tags/buildflow"}],readingTime:1.55,hasTruncateMarker:!1,authors:[{name:"Shunsuke Suzuki",title:"Platform Engineer / OSS Developer / Go / Terraform",url:"https://github.com/suzuki-shunsuke",imageURL:"https://github.com/suzuki-shunsuke.png",key:"suzuki-shunsuke"}],frontMatter:{title:"buildflow \u306e task \u306e input, output \u3068\u3044\u3046\u6a5f\u80fd",date:"2020-10-17T12:05:41.000Z",tags:["oss","buildflow"],authors:["suzuki-shunsuke"]},prevItem:{title:"buildflow \u306e dynamic task",permalink:"/buildflow-dynamic-task"},nextItem:{title:"buildflow \u3067\u8a2d\u5b9a\u30d5\u30a1\u30a4\u30eb\u3092\u5206\u5272\u3059\u308b",permalink:"/buildflow-split-files"}},i={authorsImageUrls:[void 0]},p=[],s={toc:p},c="wrapper";function f(e){let{components:t,...n}=e;return(0,o.yg)(c,(0,r.A)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("p",null,"buildflow \u3068\u3044\u3046\u30c4\u30fc\u30eb\u3092\u958b\u767a\u3057\u3066\u3044\u308b\u306e\u3067 ",(0,o.yg)("inlineCode",{parentName:"p"},"buildflow")," \u3068\u3044\u3046\u30bf\u30b0\u3092\u3064\u3051\u3066\u4f55\u56de\u304b\u306b\u5206\u3051\u3066\u30d6\u30ed\u30b0\u3092\u66f8\u304d\u307e\u3059\u3002"),(0,o.yg)("p",null,"\u3053\u306e\u8a18\u4e8b\u3067\u306f buildflow \u306e task \u306e input, output \u3068\u3044\u3046\u6a5f\u80fd\u306b\u3064\u3044\u3066\u8aac\u660e\u3057\u307e\u3059\u3002\ntask \u306e input, output \u306f Tengo script \u3067 task \u306e\u30d1\u30e9\u30e1\u30fc\u30bf\u3092\u6574\u5f62\u3059\u308b\u6a5f\u80fd\u3067\u3059\u3002"),(0,o.yg)("p",null,"task \u306e command.command \u3084 write_file.template \u306a\u3069\u3001\u5e7e\u3064\u304b\u306e\u8a2d\u5b9a\u3067\u306f Go \u306e text/template \u304c\u4f7f\u3048\u307e\u3059\u304c\u3001 text/template \u306f\u8907\u96d1\u306a\u30ed\u30b8\u30c3\u30af\u3092\u8a18\u8ff0\u3057\u305f\u308a\u3059\u308b\u306e\u306b\u306f\u5411\u3044\u3066\u3044\u307e\u305b\u3093\u3002\n\u305d\u3053\u3067 task \u306e input \u3067 Tengo script \u3092\u4f7f\u3063\u3066\u5fc5\u8981\u306a\u30c7\u30fc\u30bf\u306e\u6574\u5f62\u3092\u884c\u3046\u3053\u3068\u3067\u3001\ntemplate \u306f\u6bd4\u8f03\u7684\u304d\u308c\u3044\u306a\u72b6\u614b\u306b\u4fdd\u3064\u3053\u3068\u304c\u51fa\u6765\u307e\u3059\u3002"),(0,o.yg)("p",null,"\u3053\u308c\u306f MVC \u30e2\u30c7\u30eb\u3067 View \u3068\u30ed\u30b8\u30c3\u30af\u3092\u5206\u96e2\u3059\u308b\u307f\u305f\u3044\u306a\u8003\u3048\u65b9\u3068\u4f3c\u3066\u3044\u308b\u304b\u3082\u3057\u308c\u307e\u305b\u3093\u3002"),(0,o.yg)("p",null,"output \u3067\u306f\u30b3\u30de\u30f3\u30c9\u306e\u5b9f\u884c\u7d50\u679c\u3092\u6574\u5f62\u3059\u308b\u3053\u3068\u304c\u51fa\u6765\u307e\u3059\u3002\n\u4f8b\u3048\u3070\u30b3\u30de\u30f3\u30c9\u306e\u6a19\u6e96\u51fa\u529b\u3092\u30e6\u30cb\u30fc\u30af\u306a\u6587\u5b57\u5217\u306e\u30ea\u30b9\u30c8\u306b\u3057\u305f\u308a\u51fa\u6765\u307e\u3059\u3002"),(0,o.yg)("p",null,"task.input \u306f task.when \u304c\u8a55\u4fa1\u3055\u308c\u305f\u3042\u3068\u3001 task \u306e command \u306a\u3069\u304c\u5b9f\u884c\u3055\u308c\u308b\u524d\u306b\u8a55\u4fa1\u3055\u308c\u307e\u3059\u3002\n\u3064\u307e\u308a\u3001 task.when \u3084 task.dependency \u3067\u540c\u3058 task \u306e input \u306e\u7d50\u679c\u3092\u53c2\u7167\u306f\u51fa\u6765\u307e\u305b\u3093\u3002"))}f.isMDXComponent=!0},5680:(e,t,n)=>{n.d(t,{xA:()=>s,yg:()=>d});var r=n(6540);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},u=Object.keys(e);for(r=0;r<u.length;r++)n=u[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(r=0;r<u.length;r++)n=u[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),p=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},c="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,u=e.originalType,i=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),c=p(n),m=o,d=c["".concat(i,".").concat(m)]||c[m]||f[m]||u;return n?r.createElement(d,l(l({ref:t},s),{},{components:n})):r.createElement(d,l({ref:t},s))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var u=n.length,l=new Array(u);l[0]=m;var a={};for(var i in t)hasOwnProperty.call(t,i)&&(a[i]=t[i]);a.originalType=e,a[c]="string"==typeof e?e:o,l[1]=a;for(var p=2;p<u;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);