"use strict";(self.webpackChunktechblog_szksh_cloud_github_io=self.webpackChunktechblog_szksh_cloud_github_io||[]).push([[8312],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>b});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),s=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,i=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),p=s(n),d=o,b=p["".concat(i,".").concat(d)]||p[d]||f[d]||l;return n?r.createElement(b,a(a({ref:t},c),{},{components:n})):r.createElement(b,a({ref:t},c))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,a=new Array(l);a[0]=d;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u[p]="string"==typeof e?e:o,a[1]=u;for(var s=2;s<l;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2872:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>a,default:()=>p,frontMatter:()=>l,metadata:()=>u,toc:()=>s});var r=n(7462),o=(n(7294),n(3905));const l={title:"buildflow \u306e\u5b9f\u884c\u7d50\u679c\u306e\u51fa\u529b\u5f62\u5f0f",date:new Date("2020-10-17T23:36:09.000Z"),tags:["oss","buildflow"],authors:["suzuki-shunsuke"]},a=void 0,u={permalink:"/buildflow-result-output",source:"@site/blog/buildflow-result-output.md",title:"buildflow \u306e\u5b9f\u884c\u7d50\u679c\u306e\u51fa\u529b\u5f62\u5f0f",description:"buildflow \u3068\u3044\u3046\u30c4\u30fc\u30eb\u3092\u958b\u767a\u3057\u3066\u3044\u308b\u306e\u3067 buildflow \u3068\u3044\u3046\u30bf\u30b0\u3092\u3064\u3051\u3066\u4f55\u56de\u304b\u306b\u5206\u3051\u3066\u30d6\u30ed\u30b0\u3092\u66f8\u304d\u307e\u3059\u3002",date:"2020-10-17T23:36:09.000Z",formattedDate:"October 17, 2020",tags:[{label:"oss",permalink:"/tags/oss"},{label:"buildflow",permalink:"/tags/buildflow"}],readingTime:2.1,truncated:!1,authors:[{name:"Shunsuke Suzuki",title:"Platform Engineer / OSS Developer / Go / Terraform",url:"https://github.com/suzuki-shunsuke",imageURL:"https://github.com/suzuki-shunsuke.png",key:"suzuki-shunsuke"}],frontMatter:{title:"buildflow \u306e\u5b9f\u884c\u7d50\u679c\u306e\u51fa\u529b\u5f62\u5f0f",date:"2020-10-17T23:36:09.000Z",tags:["oss","buildflow"],authors:["suzuki-shunsuke"]},prevItem:{title:"\u306a\u305c buildflow \u3092\u4f5c\u3063\u305f\u306e\u304b",permalink:"/buildflow-goal"},nextItem:{title:"buildflow \u304c\u81ea\u52d5\u3067\u53d6\u5f97\u3059\u308b Pull Request \u306e\u60c5\u5831",permalink:"/buildflow-pr-info"}},i={authorsImageUrls:[void 0]},s=[],c={toc:s};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"buildflow \u3068\u3044\u3046\u30c4\u30fc\u30eb\u3092\u958b\u767a\u3057\u3066\u3044\u308b\u306e\u3067 ",(0,o.kt)("inlineCode",{parentName:"p"},"buildflow")," \u3068\u3044\u3046\u30bf\u30b0\u3092\u3064\u3051\u3066\u4f55\u56de\u304b\u306b\u5206\u3051\u3066\u30d6\u30ed\u30b0\u3092\u66f8\u304d\u307e\u3059\u3002"),(0,o.kt)("p",null,"\u3053\u306e\u8a18\u4e8b\u3067\u306f buildflow \u306e\u5b9f\u884c\u7d50\u679c\u306e\u51fa\u529b\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u306a\u3069\u306b\u3064\u3044\u3066\u8aac\u660e\u3057\u307e\u3059\u3002"),(0,o.kt)("p",null,"\u3061\u3087\u3063\u3068\u51fa\u529b\u306f\u308f\u304b\u308a\u306b\u304f\u3044\u304b\u3082\u3057\u308c\u307e\u305b\u3093\u3002\n\u6539\u5584\u3057\u305f\u3044\u3068\u601d\u3044\u3064\u3064\u3001\u3069\u3046\u3042\u308b\u3079\u304d\u306a\u306e\u304b\u307e\u3060\u898b\u3048\u3066\u306a\u3044\u306e\u3067\u3053\u3093\u306a\u611f\u3058\u306b\u306a\u3063\u3066\u3044\u307e\u3059\u3002"),(0,o.kt)("p",null,"task \u306e\u6a19\u6e96\u51fa\u529b\u3001\u6a19\u6e96\u30a8\u30e9\u30fc\u51fa\u529b\u306f\u30ea\u30a2\u30eb\u30bf\u30a4\u30e0\u3067\u51fa\u529b\u3055\u308c\u307e\u3059\u3002\n\u307e\u305f\u3001\u8907\u6570\u306e\u30bf\u30b9\u30af\u3092\u4e26\u5217\u5b9f\u884c\u3067\u304d\u307e\u3059\u3002\n\u8907\u6570\u306e\u30bf\u30b9\u30af\u306e\u30ed\u30b0\u3092\u30ea\u30a2\u30eb\u30bf\u30a4\u30e0\u3067\u51fa\u529b\u3059\u308b\u3068\u5f53\u7136\u6df7\u3058\u308b\u306e\u3067\u3001\u533a\u5225\u304c\u3064\u304f\u3088\u3046\u306b\u5404\u884c\u306e prefix \u306b ",(0,o.kt)("inlineCode",{parentName:"p"},"timestamp | task name | ")," \u3092\u3064\u3051\u3066\u51fa\u529b\u3057\u307e\u3059\u3002\n\u305d\u308c\u3067\u3082\u6df7\u3058\u308b\u3068\u308f\u304b\u308a\u306b\u304f\u3044\u306e\u3067\u3001 phase \u304c\u5b8c\u4e86\u5f8c\u306b\u3001 phase \u306e\u5168 task \u306e\u30ed\u30b0\u3092\u6df7\u3056\u3089\u306a\u3044\u3088\u3046\u306b\u305d\u308c\u305e\u308c\u6a19\u6e96\u30a8\u30e9\u30fc\u51fa\u529b\u3057\u307e\u3059\u3002\n\u3064\u307e\u308a\u540c\u3058\u30ed\u30b0\u304c 2 \u56de\u51fa\u529b\u3055\u308c\u307e\u3059\u304c 2 \u56de\u5b9f\u884c\u3055\u308c\u3066\u3044\u308b\u308f\u3051\u3067\u306f\u306a\u3044\u3067\u3059\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"==============\n= Phase: phase \u540d =\n==============\n10:47:54UTC | task A | + /bin/sh -c echo hello # \u5b9f\u884c\u3055\u308c\u308b\u30b3\u30de\u30f3\u30c9\n10:47:54UTC | task B | + /bin/sh -c echo foo\n10:47:54UTC | task A | hello # \u30b3\u30de\u30f3\u30c9\u306e\u6a19\u6e96(\u30a8\u30e9\u30fc)\u51fa\u529b\n10:47:54UTC | task A | \n... # \u30ea\u30a2\u30eb\u30bf\u30a4\u30e0\u306b\u51fa\u529b\u3055\u308c\u308b\u306e\u3067\u8907\u6570\u306e task \u306e\u30ed\u30b0\u304c\u6df7\u3056\u308b\u5834\u5408\u304c\u3042\u308b\n\n\n================\n= Phase Result: phase \u540d = # \u8a72\u5f53 phase \u306e\u5168 task \u5b8c\u4e86\u5f8c\u306b\u5168 task \u306e\u7d50\u679c\u3068\u6a19\u6e96(\u30a8\u30e9\u30fc)\u51fa\u529b\u3092\u51fa\u529b\u3059\u308b\n================\nstatus: succeeded\ntask: task A\nstatus: succeeded\nexit code: 0\nstart time: 2020-10-14T10:47:54Z\nend time: 2020-10-14T10:47:54Z\nduration: 4.818877ms\n+ /bin/sh -c echo hello\nhello\n\n...\n")))}p.isMDXComponent=!0}}]);