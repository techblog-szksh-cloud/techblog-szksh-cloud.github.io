"use strict";(self.webpackChunktechblog_szksh_cloud_github_io=self.webpackChunktechblog_szksh_cloud_github_io||[]).push([[6519],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},m="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=u(n),s=l,f=m["".concat(p,".").concat(s)]||m[s]||k[s]||a;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function f(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,i=new Array(a);i[0]=s;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[m]="string"==typeof e?e:l,i[1]=o;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},6575:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>k,frontMatter:()=>a,metadata:()=>o,toc:()=>u});var r=n(7462),l=(n(7294),n(3905));const a={title:"matchfile - \u5909\u66f4\u3055\u308c\u305f\u30d5\u30a1\u30a4\u30eb\u306e\u4e00\u89a7\u304b\u3089\u5fc5\u8981\u306a\u30bf\u30b9\u30af\u3092\u5c0e\u51fa\u3059\u308b\u305f\u3081\u306e CLI \u30c4\u30fc\u30eb",date:new Date("2020-10-27T10:39:44.000Z"),tags:["oss"],authors:["suzuki-shunsuke"]},i=void 0,o={permalink:"/matchfile",source:"@site/blog/matchfile.md",title:"matchfile - \u5909\u66f4\u3055\u308c\u305f\u30d5\u30a1\u30a4\u30eb\u306e\u4e00\u89a7\u304b\u3089\u5fc5\u8981\u306a\u30bf\u30b9\u30af\u3092\u5c0e\u51fa\u3059\u308b\u305f\u3081\u306e CLI \u30c4\u30fc\u30eb",description:"\u81ea\u4f5c\u306e CLI \u30c4\u30fc\u30eb matchfile \u306b\u3064\u3044\u3066\u7d39\u4ecb\u3057\u307e\u3059\u3002",date:"2020-10-27T10:39:44.000Z",formattedDate:"October 27, 2020",tags:[{label:"oss",permalink:"/tags/oss"}],readingTime:5.05,truncated:!1,authors:[{name:"Shunsuke Suzuki",title:"Platform Engineer / OSS Developer / Go / Terraform",url:"https://github.com/suzuki-shunsuke",imageURL:"https://github.com/suzuki-shunsuke.png",key:"suzuki-shunsuke"}],frontMatter:{title:"matchfile - \u5909\u66f4\u3055\u308c\u305f\u30d5\u30a1\u30a4\u30eb\u306e\u4e00\u89a7\u304b\u3089\u5fc5\u8981\u306a\u30bf\u30b9\u30af\u3092\u5c0e\u51fa\u3059\u308b\u305f\u3081\u306e CLI \u30c4\u30fc\u30eb",date:"2020-10-27T10:39:44.000Z",tags:["oss"],authors:["suzuki-shunsuke"]},prevItem:{title:"github-ci-monitor: CI \u306e\u30b9\u30c6\u30fc\u30bf\u30b9\u3092 DataDog \u3067\u76e3\u8996",permalink:"/github-ci-monitor"},nextItem:{title:"\u306a\u305c buildflow \u3092\u4f5c\u3063\u305f\u306e\u304b",permalink:"/buildflow-goal"}},p={authorsImageUrls:[void 0]},u=[],c={toc:u},m="wrapper";function k(e){let{components:t,...n}=e;return(0,l.kt)(m,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u81ea\u4f5c\u306e CLI \u30c4\u30fc\u30eb matchfile \u306b\u3064\u3044\u3066\u7d39\u4ecb\u3057\u307e\u3059\u3002"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/suzuki-shunsuke/matchfile"},"https://github.com/suzuki-shunsuke/matchfile")),(0,l.kt)("p",null,"\u3053\u306e\u8a18\u4e8b\u306e\u57f7\u7b46\u6642\u70b9\u3067\u6700\u65b0\u30d0\u30fc\u30b8\u30e7\u30f3\u306f v0.1.1 \u3067\u3059\u3002"),(0,l.kt)("p",null,"\u5909\u66f4\u3055\u308c\u305f\u30d5\u30a1\u30a4\u30eb\u306e\u4e00\u89a7\u304b\u3089\u5b9f\u884c\u3059\u308b\u5fc5\u8981\u306e\u3042\u308b\u30bf\u30b9\u30af\u3092\u5c0e\u51fa\u3059\u308b\u305f\u3081\u306e CLI \u30c4\u30fc\u30eb\u3067\u3059\u3002\nGo \u3067\u66f8\u304b\u308c\u3066\u3044\u3066\u3001\u30d0\u30a4\u30ca\u30ea\u3092\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u3057\u3066\u304f\u308c\u3070\u4f7f\u3048\u307e\u3059\u3002"),(0,l.kt)("p",null,"Pull Request (\u4ee5\u4e0b PR) \u306e CI \u3067\u306f PR \u3067\u5909\u66f4\u3055\u308c\u305f\u30d5\u30a1\u30a4\u30eb\u306b\u5fdc\u3058\u3066\n\u5fc5\u8981\u306a\u30bf\u30b9\u30af(build, test, lint, etc) \u3060\u3051\u3092\u5b9f\u884c\u3057\u305f\u304b\u3063\u305f\u308a\u3057\u307e\u3059\u3002"),(0,l.kt)("p",null,"\u305d\u3053\u3067\u3001 ",(0,l.kt)("inlineCode",{parentName:"p"},"PR \u3067\u5909\u66f4\u3055\u308c\u305f\u30d5\u30a1\u30a4\u30eb\u30d1\u30b9\u306e\u30ea\u30b9\u30c8")," \u3068 ",(0,l.kt)("inlineCode",{parentName:"p"},"\u30bf\u30b9\u30af\u304c\u4f9d\u5b58\u3059\u308b\u30d5\u30a1\u30a4\u30eb\u30d1\u30b9\u306e\u6761\u4ef6")," \u3092\u5143\u306b\u3001\u305d\u306e\u30bf\u30b9\u30af\u3092\u5b9f\u884c\u3059\u308b\u5fc5\u8981\u304c\u3042\u308b\u304b\u5224\u5b9a\u3059\u308b\u305f\u3081\u306e\u30b3\u30de\u30f3\u30c9\u3068\u3057\u3066 matchfile \u3092\u958b\u767a\u3057\u307e\u3057\u305f\u3002"),(0,l.kt)("p",null,"\u305f\u3060\u3057\u3001 matchfile \u306e\u6a5f\u80fd\u3068\u3057\u3066\u306f PR \u3084 CI \u3068\u306f\u72ec\u7acb\u3057\u3066\u3044\u308b\u306e\u3067\u3001\u3082\u3063\u3068\u5225\u306e\u76ee\u7684\u3067\u3082\u4f7f\u3048\u308b\u3068\u306f\u601d\u3044\u307e\u3059\u3002"),(0,l.kt)("p",null,"matchfile \u306f ",(0,l.kt)("inlineCode",{parentName:"p"},"PR \u3067\u5909\u66f4\u3055\u308c\u305f\u30d5\u30a1\u30a4\u30eb\u30d1\u30b9\u306e\u30ea\u30b9\u30c8")," \u3084 ",(0,l.kt)("inlineCode",{parentName:"p"},"\u30bf\u30b9\u30af\u304c\u4f9d\u5b58\u3059\u308b\u30d5\u30a1\u30a4\u30eb\u30d1\u30b9\u306e\u6761\u4ef6")," \u3092\u53d6\u5f97\u3057\u305f\u308a\u3059\u308b\u6a5f\u80fd\u306f\u3042\u308a\u307e\u305b\u3093\u3002"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"PR \u3067\u5909\u66f4\u3055\u308c\u305f\u30d5\u30a1\u30a4\u30eb\u30d1\u30b9\u306e\u30ea\u30b9\u30c8")," \u306f ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/suzuki-shunsuke/ci-info"},"ci-info")," \u3068\u3044\u3046\u81ea\u5206\u304c\u4f5c\u3063\u305f\u5225\u306e\u30c4\u30fc\u30eb\u3092\u4f7f\u3046\u3068\u53d6\u5f97\u3067\u304d\u307e\u3059\u3002"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"\u30bf\u30b9\u30af\u304c\u4f9d\u5b58\u3059\u308b\u30d5\u30a1\u30a4\u30eb\u30d1\u30b9\u306e\u6761\u4ef6")," \u306f\u30bf\u30b9\u30af\u306b\u5927\u304d\u304f\u4f9d\u5b58\u3059\u308b\u306e\u3067 matchfile \u306f\u30ab\u30d0\u30fc\u3057\u3066\u3044\u307e\u305b\u3093\u3002"),(0,l.kt)("p",null,"matchfile \u306e\u4f7f\u3044\u65b9\u3068\u3057\u3066\u306f"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"$ matchfile run <PR \u3067\u5909\u66f4\u3055\u308c\u305f\u30d5\u30a1\u30a4\u30eb\u30d1\u30b9\u306e\u30ea\u30b9\u30c8\u304c\u66f8\u304b\u308c\u305f\u30d5\u30a1\u30a4\u30eb\u3078\u306e\u30d1\u30b9> <\u30bf\u30b9\u30af\u304c\u4f9d\u5b58\u3059\u308b\u30d5\u30a1\u30a4\u30eb\u30d1\u30b9\u306e\u6761\u4ef6\u304c\u66f8\u304b\u308c\u305f\u30d5\u30a1\u30a4\u30eb\u3078\u306e\u30d1\u30b9>\n")),(0,l.kt)("p",null,"\u3067\u3001 ",(0,l.kt)("inlineCode",{parentName:"p"},"PR \u3067\u5909\u66f4\u3055\u308c\u305f\u30d5\u30a1\u30a4\u30eb\u30d1\u30b9\u306e\u30ea\u30b9\u30c8")," \u306e\u3046\u3061\u4e00\u3064\u3067\u3082 ",(0,l.kt)("inlineCode",{parentName:"p"},"\u30bf\u30b9\u30af\u304c\u4f9d\u5b58\u3059\u308b\u30d5\u30a1\u30a4\u30eb\u30d1\u30b9\u306e\u6761\u4ef6")," \u306b\u30de\u30c3\u30c1\u3059\u308c\u3070 ",(0,l.kt)("inlineCode",{parentName:"p"},"true")," \u3092\u3001\u30de\u30c3\u30c1\u3057\u306a\u3051\u308c\u3070 ",(0,l.kt)("inlineCode",{parentName:"p"},"false")," \u3092\u6a19\u6e96\u51fa\u529b\u3057\u307e\u3059\u3002\n\u30b3\u30de\u30f3\u30c9\u306e exit code \u3067\u7d50\u679c\u3092\u8868\u73fe\u3059\u308b\u3053\u3068\u3082\u8003\u3048\u3089\u308c\u307e\u3057\u305f\u304c\u3001\u305d\u3046\u3059\u308b\u3068 ",(0,l.kt)("inlineCode",{parentName:"p"},"set -e")," \u3057\u3066\u3044\u308b\u3068\u304d\u306b\u82e5\u5e72\u9762\u5012\u304f\u3055\u3044\u306e\u3067\u3001\u6a19\u6e96\u51fa\u529b\u3067\u8868\u73fe\u3057\u307e\u3057\u305f\u3002"),(0,l.kt)("p",null,"\u3054\u304f\u7c21\u5358\u306a\u4f8b\u3092\u793a\u3057\u307e\u3059\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"$ echo template/foo.tpl > changed_files.txt\n$ echo template > template_dependencies.txt\n$ matchfile run changed_files.txt template_dependencies.txt\ntrue\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"\u30bf\u30b9\u30af\u304c\u4f9d\u5b58\u3059\u308b\u30d5\u30a1\u30a4\u30eb\u30d1\u30b9\u306e\u6761\u4ef6")," \u306f\u72ec\u81ea\u306e\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u3067\u6307\u5b9a\u3057\u307e\u3059\u3002\n",(0,l.kt)("a",{parentName:"p",href:"https://git-scm.com/docs/gitignore"},"gitignore \u306e\u30d5\u30a9\u30fc\u30de\u30c3\u30c8"),"\u306b\u30a4\u30f3\u30b9\u30d1\u30a4\u30a2\u3055\u308c\u3066\u3044\u307e\u3059\u304c\u3001\u6b63\u898f\u8868\u73fe\u304c\u4f7f\u3048\u308b\u306a\u3069\u3001\u72ec\u81ea\u306e\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u306b\u306a\u3063\u3066\u3044\u307e\u3059\u3002\nCI \u306e\u4e2d\u3067\u30b7\u30a7\u30eb\u30b9\u30af\u30ea\u30d7\u30c8\u3067\u52d5\u7684\u306b\u751f\u6210\u3059\u308b\u3053\u3068\u3092\u60f3\u5b9a\u3057\u3001\u884c\u6307\u5411\u306e\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u306b\u306a\u3063\u3066\u3044\u307e\u3059\u3002\nGo \u5b9f\u88c5\u306e\u30d1\u30fc\u30b5\u30fc\u304c\u63d0\u4f9b\u3055\u308c\u305f\u3088\u304f\u77e5\u3089\u308c\u305f\u884c\u6307\u5411\u306e(\u30b3\u30de\u30f3\u30c9\u3067\u751f\u6210\u3057\u3084\u3059\u3044)\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u304c\u3042\u308c\u3070\u826f\u304b\u3063\u305f\u3093\u3067\u3059\u304c\u3001\u898b\u3064\u304b\u3089\u306a\u304b\u3063\u305f\u306e\u3067\u7c21\u5358\u306b\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u3092\u5b9a\u7fa9\u3057\u3066\u307f\u307e\u3057\u305f\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"[#][!][<kind>,...] <path>\n...\n")),(0,l.kt)("p",null,"1\u884c\u306b1\u3064\u6761\u4ef6\u3092\u66f8\u304d\u307e\u3059\u3002\n\u4e0a\u304b\u3089\u5168\u90e8\u8a55\u4fa1\u3055\u308c\u307e\u3059(\u3069\u308c\u304b\u30de\u30c3\u30c1\u3057\u3066\u3082\u7d42\u308f\u308a\u307e\u305b\u3093)\u3002\n",(0,l.kt)("inlineCode",{parentName:"p"},"#")," \u306f\u30b3\u30e1\u30f3\u30c8\u3067\u3059\u3002\u884c\u306e\u9014\u4e2d\u306b\u30b3\u30e1\u30f3\u30c8\u3092\u66f8\u304f\u3053\u3068\u306f\u3067\u304d\u307e\u305b\u3093\u3002"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"!")," \u306f gitignore \u3068\u4f3c\u3066\u3044\u307e\u3059\u304c\u3001\u305d\u306e\u884c\u3092\u8a55\u4fa1\u3059\u308b\u6642\u70b9\u3067\u8a55\u4fa1\u7d50\u679c\u304c ",(0,l.kt)("inlineCode",{parentName:"p"},"true")," \u3067\u3042\u308a\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"!")," \u3092\u9664\u3044\u305f\u305d\u306e\u884c\u306e\u8a55\u4fa1\u304c ",(0,l.kt)("inlineCode",{parentName:"p"},"true")," \u306e\u5834\u5408\u3001\u8a55\u4fa1\u7d50\u679c\u304c ",(0,l.kt)("inlineCode",{parentName:"p"},"false")," \u306b\u306a\u308a\u307e\u3059\u3002\n\u65e5\u672c\u8a9e\u304c\u4e0b\u624b\u304f\u305d\u3067\u3059\u306d\u3002"),(0,l.kt)("p",null,"\u7c21\u5358\u306a\u4f8b\u3092\u793a\u3059\u3068\u3001 ",(0,l.kt)("inlineCode",{parentName:"p"},"foo/foo.txt \u4ee5\u5916\u306e foo \u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u76f4\u4e0b\u306e\u30d5\u30a1\u30a4\u30eb")," \u3068\u3057\u305f\u3044\u5834\u5408\u3001\u6b21\u306e\u3088\u3046\u306b\u306a\u308a\u307e\u3059\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"glob foo/*\n!glob foo/foo.txt\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"kind")," \u306f ",(0,l.kt)("inlineCode",{parentName:"p"},"path")," \u3092\u3069\u3046\u6271\u3046\u304b\u3092\u793a\u3057\u3066\u3044\u3066\u3001\u5e7e\u3064\u304b\u7a2e\u985e\u304c\u3042\u308a\u307e\u3059\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"equal: \u30d5\u30a1\u30a4\u30eb\u30d1\u30b9\u304c\u6587\u5b57\u5217\u3068\u3057\u3066\u5b8c\u5168\u306b\u4e00\u81f4\u3059\u308c\u3070\u30de\u30c3\u30c1"),(0,l.kt)("li",{parentName:"ul"},"dir: \u30d5\u30a1\u30a4\u30eb\u30d1\u30b9\u304c ",(0,l.kt)("inlineCode",{parentName:"li"},"<path>/")," \u3067\u59cb\u307e\u308c\u3070\u30de\u30c3\u30c1"),(0,l.kt)("li",{parentName:"ul"},"regexp: \u6b63\u898f\u8868\u73fe"),(0,l.kt)("li",{parentName:"ul"},"glob: \u30b0\u30ed\u30d6\u3002 ",(0,l.kt)("inlineCode",{parentName:"li"},"**")," \u306f\u30b5\u30dd\u30fc\u30c8\u3055\u308c\u3066\u307e\u305b\u3093")),(0,l.kt)("p",null,"kind \u306f\u30ab\u30f3\u30de\u3064\u306a\u304e\u3067\u8907\u6570\u6307\u5b9a\u3067\u304d\u3001\u8907\u6570\u6307\u5b9a\u3057\u305f\u5834\u5408\u306f\u3001\u5148\u306b\u6307\u5b9a\u3057\u305f\u3082\u306e\u304b\u3089\u30de\u30c3\u30c1\u3059\u308b\u304b\u30c6\u30b9\u30c8\u3055\u308c\u3001\u4e00\u3064\u3067\u3082\u30de\u30c3\u30c1\u3057\u305f\u3089\u305d\u306e\u6761\u4ef6\u304c\u30de\u30c3\u30c1\u3059\u308b\u3082\u306e\u3068\u3057\u3066\u6271\u308f\u308c\u307e\u3059\u3002"),(0,l.kt)("p",null,"kind \u306e\u6307\u5b9a\u306f\u4efb\u610f\u3067\u3001\u6307\u5b9a\u3057\u306a\u3044\u5834\u5408\u3001 kind \u306f ",(0,l.kt)("inlineCode",{parentName:"p"},"equal,dir,glob")," \u3068\u3057\u3066\u6271\u308f\u308c\u307e\u3059\u3002"),(0,l.kt)("p",null,"\u3064\u307e\u308a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"foo.txt\n")),(0,l.kt)("p",null,"\u306f"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"equal,dir,glob foo.txt\n")),(0,l.kt)("p",null,"\u3068\u540c\u3058\u3067\u3059\u3002"))}k.isMDXComponent=!0}}]);