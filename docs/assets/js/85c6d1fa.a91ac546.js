"use strict";(self.webpackChunktechblog_szksh_cloud_github_io=self.webpackChunktechblog_szksh_cloud_github_io||[]).push([[976],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>b});var n=r(7294);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var a=n.createContext({}),p=function(e){var t=n.useContext(a),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(a.Provider,{value:t},e.children)},c="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,l=e.mdxType,o=e.originalType,a=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),c=p(r),m=l,b=c["".concat(a,".").concat(m)]||c[m]||f[m]||o;return r?n.createElement(b,u(u({ref:t},s),{},{components:r})):n.createElement(b,u({ref:t},s))}));function b(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=r.length,u=new Array(o);u[0]=m;var i={};for(var a in t)hasOwnProperty.call(t,a)&&(i[a]=t[a]);i.originalType=e,i[c]="string"==typeof e?e:l,u[1]=i;for(var p=2;p<o;p++)u[p]=r[p];return n.createElement.apply(null,u)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},3849:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>a,contentTitle:()=>u,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var n=r(7462),l=(r(7294),r(3905));const o={title:"buildflow \u3067\u8a2d\u5b9a\u30d5\u30a1\u30a4\u30eb\u3092\u5206\u5272\u3059\u308b",date:new Date("2020-10-17T11:49:28.000Z"),tags:["oss","buildflow"],authors:["suzuki-shunsuke"]},u=void 0,i={permalink:"/buildflow-split-files",source:"@site/blog/buildflow-split-files.md",title:"buildflow \u3067\u8a2d\u5b9a\u30d5\u30a1\u30a4\u30eb\u3092\u5206\u5272\u3059\u308b",description:"buildflow \u3068\u3044\u3046\u30c4\u30fc\u30eb\u3092\u958b\u767a\u3057\u3066\u3044\u308b\u306e\u3067 buildflow \u3068\u3044\u3046\u30bf\u30b0\u3092\u3064\u3051\u3066\u4f55\u56de\u304b\u306b\u5206\u3051\u3066\u30d6\u30ed\u30b0\u3092\u66f8\u3053\u3046\u304b\u306a\u3068\u601d\u3044\u307e\u3059\u3002",date:"2020-10-17T11:49:28.000Z",formattedDate:"October 17, 2020",tags:[{label:"oss",permalink:"/tags/oss"},{label:"buildflow",permalink:"/tags/buildflow"}],readingTime:1.92,truncated:!1,authors:[{name:"Shunsuke Suzuki",title:"Platform Engineer / OSS Developer / Go / Terraform",url:"https://github.com/suzuki-shunsuke",imageURL:"https://github.com/suzuki-shunsuke.png",key:"suzuki-shunsuke"}],frontMatter:{title:"buildflow \u3067\u8a2d\u5b9a\u30d5\u30a1\u30a4\u30eb\u3092\u5206\u5272\u3059\u308b",date:"2020-10-17T11:49:28.000Z",tags:["oss","buildflow"],authors:["suzuki-shunsuke"]},prevItem:{title:"buildflow \u306e task \u306e input, output \u3068\u3044\u3046\u6a5f\u80fd",permalink:"/buildflow-input-output"},nextItem:{title:"buildflow \u306e script \u3084 template \u306b\u6e21\u3055\u308c\u308b parameter",permalink:"/buildflow-parameter"}},a={authorsImageUrls:[void 0]},p=[],s={toc:p};function c(e){let{components:t,...r}=e;return(0,l.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"buildflow \u3068\u3044\u3046\u30c4\u30fc\u30eb\u3092\u958b\u767a\u3057\u3066\u3044\u308b\u306e\u3067 ",(0,l.kt)("inlineCode",{parentName:"p"},"buildflow")," \u3068\u3044\u3046\u30bf\u30b0\u3092\u3064\u3051\u3066\u4f55\u56de\u304b\u306b\u5206\u3051\u3066\u30d6\u30ed\u30b0\u3092\u66f8\u3053\u3046\u304b\u306a\u3068\u601d\u3044\u307e\u3059\u3002"),(0,l.kt)("p",null,"\u3053\u306e\u8a18\u4e8b\u3067\u306f buildflow \u306e\u8a2d\u5b9a\u30d5\u30a1\u30a4\u30eb\u3092\u5206\u5272\u3059\u308b\u65b9\u6cd5\u306b\u3064\u3044\u3066\u8aac\u660e\u3057\u307e\u3059\u3002"),(0,l.kt)("p",null,"buildflow \u3067\u306f\u4e00\u90e8\u306e\u8a2d\u5b9a\u9805\u76ee\u306b\u3064\u3044\u3066\u4ed6\u306e\u30d5\u30a1\u30a4\u30eb\u306e\u30d1\u30b9\u3092\u6307\u5b9a\u3057\u3066\u8aad\u307f\u8fbc\u3080\u3068\u3044\u3046\u3053\u3068\u304c\u51fa\u6765\u307e\u3059\u3002\n1 \u3064\u306e\u30d5\u30a1\u30a4\u30eb\u306b\u5168\u90e8\u306e\u8a2d\u5b9a\u3092\u66f8\u3044\u3066\u3044\u308b\u3068\u3001\u30d5\u30a1\u30a4\u30eb\u304c\u5927\u304d\u304f\u306a\u3063\u3066\u30e1\u30f3\u30c6\u30ca\u30f3\u30b9\u6027\u304c\u60aa\u304f\u306a\u3063\u305f\u308a\u3001\n\u30b3\u30fc\u30c9\u30aa\u30fc\u30ca\u30fc\u304c\u66d6\u6627\u306b\u306a\u3063\u305f\u308a\u3059\u308b\u306e\u3067\u3001\u305d\u3046\u3044\u3046\u5834\u5408\u306f\u5206\u5272\u3059\u308b\u3068\u826f\u3044\u3067\u3057\u3087\u3046\u3002\n\u30b3\u30fc\u30c9\u30aa\u30fc\u30ca\u30fc\u304c\u7570\u306a\u308b\u8907\u6570\u306e\u30b5\u30fc\u30d3\u30b9\u3067\u5171\u901a\u306e\u8a2d\u5b9a\u30d5\u30a1\u30a4\u30eb\u3092\u7528\u3044\u308b\u5834\u5408\u3001\u30d5\u30a1\u30a4\u30eb\u3092\u5206\u5272\u3057\u3066\nGitHub \u306e CODEOWNERS \u3092\u8a2d\u5b9a\u3059\u308b\u306e\u3082\u3088\u3044\u3067\u3057\u3087\u3046\u3002\n\u3042\u307e\u308a\u306a\u3044\u304b\u3082\u3057\u308c\u307e\u305b\u3093\u304c\u3001\u30d5\u30a1\u30a4\u30eb\u3092\u5206\u5272\u3059\u308b\u3068\u540c\u3058\u30d5\u30a1\u30a4\u30eb\u3092\u8aad\u307f\u8fbc\u3093\u3067\u518d\u5229\u7528\u3082\u51fa\u6765\u307e\u3059\u3002"),(0,l.kt)("p",null,"\u307e\u305f\u3001 Tengo script \u3092\u72ec\u7acb\u3057\u305f\u30d5\u30a1\u30a4\u30eb\u306b\u5206\u5272\u3059\u308b\u3068\u3001 test \u304c\u53ef\u80fd\u306b\u306a\u308a\u307e\u3059\u3002\nTengo script \u3092\u30c6\u30b9\u30c8\u3059\u308b\u305f\u3081\u306e\u30c4\u30fc\u30eb\u3068\u3057\u3066 ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/suzuki-shunsuke/tengo-tester"},"tengo-tester")," \u3068\u3044\u3046\u30c4\u30fc\u30eb\u3082\u958b\u767a\u3057\u3066\u3044\u308b\u306e\u3067\u3001\u305d\u3061\u3089\u3092\u304a\u4f7f\u3044\u304f\u3060\u3055\u3044\u3002"),(0,l.kt)("p",null,"\u4ee5\u4e0b\u306e\u3088\u3046\u306a\u30d5\u30a1\u30a4\u30eb\u8aad\u307f\u8fbc\u307f\u306e\u8a2d\u5b9a\u304c\u3042\u308a\u307e\u3059\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"phase.import"),(0,l.kt)("li",{parentName:"ul"},"task.import:"),(0,l.kt)("li",{parentName:"ul"},"task.input_file"),(0,l.kt)("li",{parentName:"ul"},"task.output_file"),(0,l.kt)("li",{parentName:"ul"},"task.when_file"),(0,l.kt)("li",{parentName:"ul"},"command.command_file"),(0,l.kt)("li",{parentName:"ul"},"command.env[].value_file"),(0,l.kt)("li",{parentName:"ul"},"write_file.template_file")),(0,l.kt)("p",null,"\u30d5\u30a1\u30a4\u30eb\u306e\u30d1\u30b9\u306f\u3001\u7d76\u5bfe\u30d1\u30b9\u304b\u3001\u5b9f\u884c\u4e2d\u306e build \u306e\u8a2d\u5b9a\u30d5\u30a1\u30a4\u30eb\u304c\u5b58\u5728\u3059\u308b\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u304b\u3089\u306e\u76f8\u5bfe\u30d1\u30b9\u306b\u306a\u308a\u307e\u3059\u3002"))}c.isMDXComponent=!0}}]);