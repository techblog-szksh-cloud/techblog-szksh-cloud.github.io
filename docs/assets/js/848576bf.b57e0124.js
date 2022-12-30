"use strict";(self.webpackChunktechblog_szksh_cloud_github_io=self.webpackChunktechblog_szksh_cloud_github_io||[]).push([[1765],{3905:(e,t,n)=>{n.d(t,{Zo:()=>o,kt:()=>d});var r=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},o=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,p=e.parentName,o=i(e,["components","mdxType","originalType","parentName"]),m=s(n),k=l,d=m["".concat(p,".").concat(k)]||m[k]||c[k]||a;return n?r.createElement(d,u(u({ref:t},o),{},{components:n})):r.createElement(d,u({ref:t},o))}));function d(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,u=new Array(a);u[0]=k;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[m]="string"==typeof e?e:l,u[1]=i;for(var s=2;s<a;s++)u[s]=n[s];return r.createElement.apply(null,u)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},3797:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>u,default:()=>m,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var r=n(7462),l=(n(7294),n(3905));const a={title:"cmdx - task runner",date:new Date("2019-08-23T02:35:13.000Z"),tags:["oss"],authors:["suzuki-shunsuke"]},u=void 0,i={permalink:"/cmdx",source:"@site/blog/cmdx.md",title:"cmdx - task runner",description:"\u6700\u8fd1\u81ea\u4f5c\u3057\u305f OSS, cmdx \u306e\u7d39\u4ecb\u3067\u3059\u3002",date:"2019-08-23T02:35:13.000Z",formattedDate:"August 23, 2019",tags:[{label:"oss",permalink:"/tags/oss"}],readingTime:5.46,truncated:!1,authors:[{name:"Shunsuke Suzuki",title:"Platform Engineer / OSS Developer / Go / Terraform",url:"https://github.com/suzuki-shunsuke",imageURL:"https://github.com/suzuki-shunsuke.png",key:"suzuki-shunsuke"}],frontMatter:{title:"cmdx - task runner",date:"2019-08-23T02:35:13.000Z",tags:["oss"],authors:["suzuki-shunsuke"]},prevItem:{title:"go-timeout - command \u306e timeout",permalink:"/go-timeout"},nextItem:{title:"Drone Extension \u306e\u30ea\u30b9\u30af",permalink:"/risk-of-drone-extension"}},p={authorsImageUrls:[void 0]},s=[{value:"\u4f7f\u3044\u65b9",id:"\u4f7f\u3044\u65b9",level:2},{value:"\u306a\u305c cmdx \u304b",id:"\u306a\u305c-cmdx-\u304b",level:2}],o={toc:s};function m(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,r.Z)({},o,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u6700\u8fd1\u81ea\u4f5c\u3057\u305f OSS, cmdx \u306e\u7d39\u4ecb\u3067\u3059\u3002"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/suzuki-shunsuke/cmdx"},"https://github.com/suzuki-shunsuke/cmdx")),(0,l.kt)("p",null,"cmdx \u306f task runner \u3067\u3059\u3002"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"task runner")," \u306e\u5b9a\u7fa9\u306f\u30b0\u30b0\u3063\u3066\u3082\u308f\u304b\u3089\u306a\u304b\u3063\u305f\u306e\u3067\u3001 cmdx \u3092 ",(0,l.kt)("inlineCode",{parentName:"p"},"task runner")," \u3068\u547c\u3076\u306e\u304c\u9069\u5207\u304b\u308f\u304b\u308a\u307e\u305b\u3093\u304c\u3001\n\u3053\u3053\u3067\u306f\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u56fa\u6709\u306e\u30bf\u30b9\u30af"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u4f9d\u5b58\u3059\u308b\u30e9\u30a4\u30d6\u30e9\u30ea\u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb"),(0,l.kt)("li",{parentName:"ul"},"\u30d3\u30eb\u30c9"),(0,l.kt)("li",{parentName:"ul"},"\u30c6\u30b9\u30c8"),(0,l.kt)("li",{parentName:"ul"},"\u30b3\u30fc\u30c9\u6574\u5f62"),(0,l.kt)("li",{parentName:"ul"},"lint"),(0,l.kt)("li",{parentName:"ul"},"etc")),(0,l.kt)("p",null,"\u306a\u3069\u3092\u7ba1\u7406\u3059\u308b\u3082\u306e\u3068\u3057\u307e\u3059\u3002"),(0,l.kt)("p",null,"\u985e\u4f3c\u3059\u308b\u3082\u306e\u3068\u3057\u3066\u306f\u4ee5\u4e0b\u306e\u3088\u3046\u306a\u3082\u306e\u304c\u3042\u308a\u307e\u3059\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Make"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://docs.npmjs.com/misc/scripts"},"npm scripts")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://taskfile.dev/"},"Task")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/tj/robo"},"tj/robo")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/mumoshu/variant"},"mumoshu/variant"))),(0,l.kt)("h2",{id:"\u4f7f\u3044\u65b9"},"\u4f7f\u3044\u65b9"),(0,l.kt)("p",null,"\u8a73\u7d30\u306f ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/suzuki-shunsuke/cmdx/blob/master/README.md"},"README")," \u3092\u8aad\u3093\u3067\u304f\u3060\u3055\u3044\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"$ cmdx -i\n")),(0,l.kt)("p",null,"\u3067\u8a2d\u5b9a\u30d5\u30a1\u30a4\u30eb\u306e\u96db\u5f62\u3092\u751f\u6210\u3057\u307e\u3059\u3002"),(0,l.kt)("p",null,"\u305d\u3057\u3066\u8a2d\u5b9a\u30d5\u30a1\u30a4\u30eb\u306b task \u3092\u5b9a\u7fa9\u3057\u3066\u3044\u304d\u307e\u3059\u3002\n\u8a2d\u5b9a\u306b\u95a2\u3057\u3066\u306f ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/suzuki-shunsuke/cmdx/blob/master/README.md"},"README")," \u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,l.kt)("p",null,"\u305d\u3046\u3059\u308b\u3068 ",(0,l.kt)("inlineCode",{parentName:"p"},"cmdx -l")," \u3067\u30bf\u30b9\u30af\u306e\u4e00\u89a7\u3068\u305d\u306e\u8aac\u660e\u304c\u898b\u308c\u307e\u3059\u3002"),(0,l.kt)("p",null,"\u4f8b\u3048\u3070\u6b21\u306f ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/suzuki-shunsuke/cmdx"},"cmdx")," \u306e\u30ea\u30dd\u30b8\u30c8\u30ea\u3067\u306e\u5b9f\u884c\u7d50\u679c\u3067\u3059\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"$ cmdx -l\ninit, i - setup git hooks\ncoverage, c - test a package (fzf is required)\ntest, t - test\nfmt - format the go code\nvet, v - go vet\nlint, l - lint the go code\nrelease, r - release the new version\ndurl - check dead links (durl is required)\nci-local - run the Drone pipeline at localhost (drone-cli is required)\n")),(0,l.kt)("p",null,"\u3053\u308c\u306b\u3088\u308a\u65b0\u3057\u304f\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306b\u53c2\u753b\u3057\u305f\u4eba\u3082\u3069\u306e\u3088\u3046\u306a task \u304c\u3042\u308b\u306e\u304b\u76f4\u3050\u308f\u304b\u308a\u307e\u3059\u3002\n\u4f8b\u3048\u3070 test \u3092\u5b9f\u884c\u3057\u305f\u3051\u308c\u3070 ",(0,l.kt)("inlineCode",{parentName:"p"},"cmdx t")," \u3092\u5b9f\u884c\u3059\u308c\u3070\u3044\u3044\u3053\u3068\u304c\u308f\u304b\u308a\u307e\u3059\u3002\n",(0,l.kt)("inlineCode",{parentName:"p"},"cmdx help test")," \u3068\u3059\u308c\u3070\u3053\u3053\u306e\u30bf\u30b9\u30af\u306e\u3088\u308a\u8a73\u7d30\u306a\u30d8\u30eb\u30d7\u304c\u898b\u308c\u307e\u3059\u3002"),(0,l.kt)("p",null,"\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u306b task \u306b\u3064\u3044\u3066\u66f8\u3044\u3066\u3082\u3001\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u304c\u3061\u3083\u3093\u3068\u66f4\u65b0\u3055\u308c\u305a\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u3068\u5b9f\u614b\u304c\u4e56\u96e2\u3059\u308b\u306a\u3093\u3066\u3053\u3068\u306f\u3088\u304f\u3042\u308a\u307e\u3059\u304c\u3001\ncmdx \u306e\u8a2d\u5b9a\u30d5\u30a1\u30a4\u30eb\u304b\u3089\u30d8\u30eb\u30d7\u3092\u751f\u6210\u3059\u308b\u3053\u3068\u3067\u4e56\u96e2\u3057\u306b\u304f\u304f\u306a\u308a\u307e\u3059(\u5b9f\u969b\u306b\u4f7f\u308f\u308c\u3066\u306a\u3044 task \u304c\u6b8b\u3063\u3066\u305f\u308a\u3001task \u306e description \u3084 usage \u304c\u9593\u9055\u3063\u3066\u305f\u3089\u99c4\u76ee\u3067\u3059\u304c)\u3002"),(0,l.kt)("h2",{id:"\u306a\u305c-cmdx-\u304b"},"\u306a\u305c cmdx \u304b"),(0,l.kt)("p",null,"\u81ea\u5206\u306f\u4eca\u307e\u3067 task runner \u3068\u3057\u3066\u57fa\u672c\u7684\u306b npm scripts \u3092\u4f7f\u3063\u3066\u304d\u3066\u3044\u3066\u3001\u30d6\u30ed\u30b0\u306b\u3082\u66f8\u3044\u3066\u3044\u307e\u3059\u3002"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://techblog.szksh.cloud/use-npm/"},"JS\u4ee5\u5916\u3067\u306enpm\u306e\u6d3b\u7528")),(0,l.kt)("p",null,"\u3057\u304b\u3057\u3001 npm scripts \u306b\u5bfe\u3057\u3066\u306f\u4ee5\u4e0b\u306e\u3088\u3046\u306a\u4e0d\u6e80\u304c\u3042\u308a\u307e\u3057\u305f\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"security alert \u304c\u5b9a\u671f\u7684\u306b\u98db\u3093\u3067\u304d\u3066\u5bfe\u5fdc\u304c\u9762\u5012\u304f\u3055\u3044",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u3053\u308c\u306f husky \u3084 commitlint \u306a\u3069\u3092\u4f7f\u3063\u3066\u3044\u308b\u306e\u304c\u539f\u56e0\u306a\u306e\u3067\u3042\u3063\u3066\u3001 npm scripts \u306e\u554f\u984c\u3067\u306f\u306a\u3044\u3067\u3059\u304c"))),(0,l.kt)("li",{parentName:"ul"},"task \u306b\u5bfe\u3059\u308b\u30d8\u30eb\u30d7\u30e1\u30c3\u30bb\u30fc\u30b8\u304c\u306a\u3044",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u4eca\u307e\u3067\u306f README \u306b\u66f8\u3044\u3066\u305f\u304c\u3001\u672c\u6765\u306f help \u30b3\u30de\u30f3\u30c9\u3067\u81ea\u52d5\u751f\u6210\u30fb\u30b5\u30dd\u30fc\u30c8\u3055\u308c\u308b\u3079\u304d\u3060\u3068\u601d\u3063\u3066\u3044\u308b")))),(0,l.kt)("p",null,"\u4ed6\u306e\u30c4\u30fc\u30eb\u306b\u3088\u3063\u3066\u3053\u308c\u3089\u306e\u4e0d\u6e80\u306f\u89e3\u6d88\u3067\u304d\u308b\u306e\u3067\u3059\u304c\u3001\u4ed6\u306e\u30c4\u30fc\u30eb\u306b\u3082\u305d\u308c\u305e\u308c\u5fae\u5999\u306b\u4e0d\u6e80\u304c\u3042\u308a\u3001\n\u5b8c\u5168\u306b\u81ea\u5206\u306e\u30cb\u30fc\u30ba\u306b\u5408\u3046\u3082\u306e\u304c\u306a\u304b\u3063\u305f\u306e\u3067\u4f5c\u308b\u3053\u3068\u306b\u3057\u307e\u3057\u305f\u3002"),(0,l.kt)("p",null,"\u4e00\u4f8b\u3067\u3059\u304c\u3001 npm scripts \u306f"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u8a2d\u5b9a\u30d5\u30a1\u30a4\u30eb (package.json) \u3092\u63a2\u7d22"),(0,l.kt)("li",{parentName:"ul"},"\u8a2d\u5b9a\u30d5\u30a1\u30a4\u30eb\u306e\u3042\u308b\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u3067\u30b3\u30de\u30f3\u30c9\u3092\u5b9f\u884c")),(0,l.kt)("p",null,"\u3057\u307e\u3059\u3002\u3053\u308c\u306b\u3088\u308a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u30ab\u30ec\u30f3\u30c8\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u3092\u610f\u8b58\u3059\u308b\u5fc5\u8981\u304c\u306a\u3044",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u8a2d\u5b9a\u30d5\u30a1\u30a4\u30eb\u306e\u30d1\u30b9\u3092\u6307\u5b9a\u3059\u308b\u5fc5\u8981\u304c\u306a\u3044"),(0,l.kt)("li",{parentName:"ul"},"\u30b3\u30de\u30f3\u30c9\u306e\u5b9f\u884c\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u304c\u30ab\u30ec\u30f3\u30c8\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u306b\u4f9d\u5b58\u3057\u306a\u3044(\u9006\u306b\u8a00\u3046\u3068\u30ab\u30ec\u30f3\u30c8\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u306b\u4f9d\u5b58\u3057\u305f\u51e6\u7406\u3092\u5b9f\u884c\u3057\u306b\u304f\u3044\u3068\u3044\u3046\u9762\u3082\u3042\u308a\u307e\u3059\u304c)")))),(0,l.kt)("p",null,"\u3068\u3044\u3046\u826f\u3055\u304c\u3042\u308a\u3001 \u3053\u308c\u304c\u610f\u5916\u3068\u4ed6\u306e\u30c4\u30fc\u30eb\u3067\u306f\u30b5\u30dd\u30fc\u30c8\u3055\u308c\u3066\u306a\u304f(\u4f8b\u3048\u3070 Make \u3060\u3063\u305f\u3089 ",(0,l.kt)("inlineCode",{parentName:"p"},"-F")," \u30aa\u30d7\u30b7\u30e7\u30f3\u3067 Makefile \u306e\u30d1\u30b9\u3092\u6307\u5b9a\u3059\u308b\u5fc5\u8981\u304c\u3042\u308b)\u3001\u4e0d\u6e80\u3067\u3057\u305f\u3002"),(0,l.kt)("p",null,"\u307e\u305f\u3001 Make \u3084 Task \u3067\u306f task \u306e\u4f9d\u5b58\u95a2\u4fc2\u3092\u5b9a\u7fa9\u3057\u3001\u4e00\u56de\u306e\u30b3\u30de\u30f3\u30c9\u3067\u8907\u6570\u306e\u30bf\u30b9\u30af\u3092\u5b9f\u884c\u3067\u304d\u307e\u3059\u304c\u3001\ncmdx \u3067\u306f\u305d\u306e\u3088\u3046\u306a\u6a5f\u80fd\u306f\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u305b\u3093\u3002\n\u81ea\u5206\u304c\u666e\u6bb5\u305d\u306e\u3088\u3046\u306a\u6a5f\u80fd\u3092\u3042\u307e\u308a\u5fc5\u8981\u3068\u3057\u3066\u3044\u306a\u3044\u304b\u3089\u3067\u3059\u3002"),(0,l.kt)("p",null,"cmdx \u3067\u306f\u4e0a\u306e\u3088\u3046\u306a npm scripts \u306e\u4e0d\u6e80\u3092\u89e3\u6d88\u3059\u308b\u3060\u3051\u3067\u306a\u304f\u3001\u6298\u89d2\u306a\u306e\u3067\u5e7e\u3064\u304b\u7d30\u304b\u306a\u6a5f\u80fd\u3092\u8ffd\u52a0\u3057\u3066\u3044\u307e\u3059\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u30b7\u30a7\u30eb\u30b9\u30af\u30ea\u30d7\u30c8\u3060\u3068\u9762\u5012\u306a\u30aa\u30d7\u30b7\u30e7\u30f3\u5f15\u6570\u3092\u30b5\u30dd\u30fc\u30c8"),(0,l.kt)("li",{parentName:"ul"},"\u30ea\u30c3\u30c1\u306a\u30d7\u30ed\u30f3\u30d7\u30c8\u306e\u30b5\u30dd\u30fc\u30c8"),(0,l.kt)("li",{parentName:"ul"},"\u30bf\u30a4\u30e0\u30a2\u30a6\u30c8"),(0,l.kt)("li",{parentName:"ul"},"etc")),(0,l.kt)("p",null,"cmdx \u304b\u3089 npm scripts \u306b\u4e57\u308a\u63db\u3048\u305f\u5834\u5408\u306e\u554f\u984c\u70b9\u3068\u3057\u3066\u306f husky \u3084 commitlint \u306e\u3088\u3046\u306a\u30c4\u30fc\u30eb\u304c\u4f7f\u3048\u306a\u304f\u306a\u308b\u3053\u3068\u3067\u3059\u304c\u3001\n\u5fc5\u9808\u306e\u30c4\u30fc\u30eb\u3067\u3082\u306a\u3044\u306e\u3067\u8a31\u5bb9\u3057\u3066\u3044\u307e\u3059\u3002"))}m.isMDXComponent=!0}}]);