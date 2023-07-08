"use strict";(self.webpackChunktechblog_szksh_cloud_github_io=self.webpackChunktechblog_szksh_cloud_github_io||[]).push([[2609],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),o=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=o(e.components);return a.createElement(s.Provider,{value:t},e.children)},k="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),k=o(n),c=r,g=k["".concat(s,".").concat(c)]||k[c]||m[c]||i;return n?a.createElement(g,l(l({ref:t},p),{},{components:n})):a.createElement(g,l({ref:t},p))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=c;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u[k]="string"==typeof e?e:r,l[1]=u;for(var o=2;o<i;o++)l[o]=n[o];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},7371:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>u,toc:()=>o});var a=n(7462),r=(n(7294),n(3905));const i={title:"aqua v0.1.0 \u304b\u3089 v0.5.0 \u3067\u306e\u5909\u66f4\u70b9",date:new Date("2021-09-04T02:58:42.000Z"),tags:["oss","aqua"],authors:["suzuki-shunsuke"]},l=void 0,u={permalink:"/aqua-v0.5",source:"@site/blog/aqua-v0.5.md",title:"aqua v0.1.0 \u304b\u3089 v0.5.0 \u3067\u306e\u5909\u66f4\u70b9",description:"\u5148\u65e5 aqua v0.1.0 \u3092\u30ea\u30ea\u30fc\u30b9\u3057\u305f\u8a18\u4e8b\u3092\u66f8\u3044\u305f\u3070\u304b\u308a\u3067\u3059\u304c\u3001",date:"2021-09-04T02:58:42.000Z",formattedDate:"September 4, 2021",tags:[{label:"oss",permalink:"/tags/oss"},{label:"aqua",permalink:"/tags/aqua"}],readingTime:8.745,truncated:!1,authors:[{name:"Shunsuke Suzuki",title:"Platform Engineer / OSS Developer / Go / Terraform",url:"https://github.com/suzuki-shunsuke",imageURL:"https://github.com/suzuki-shunsuke.png",key:"suzuki-shunsuke"}],frontMatter:{title:"aqua v0.1.0 \u304b\u3089 v0.5.0 \u3067\u306e\u5909\u66f4\u70b9",date:"2021-09-04T02:58:42.000Z",tags:["oss","aqua"],authors:["suzuki-shunsuke"]},prevItem:{title:"aqua \u306e\u8a2d\u5b9a\u30d5\u30a1\u30a4\u30eb\u3092\u30a4\u30f3\u30bf\u30e9\u30af\u30c6\u30a3\u30d6\u306b\u751f\u6210\u3059\u308b generate \u30b3\u30de\u30f3\u30c9",permalink:"/aqua-generate"},nextItem:{title:"2021-08 \u3084\u3063\u305f\u3053\u3068",permalink:"/what-i-did-2021-08"}},s={authorsImageUrls:[void 0]},o=[{value:"PATH \u3092 project (aqua.yaml) \u6bce\u306b\u8a2d\u5b9a\u3059\u308b\u5fc5\u8981\u304c\u306a\u304f\u306a\u308a\u307e\u3057\u305f",id:"path-\u3092-project-aquayaml-\u6bce\u306b\u8a2d\u5b9a\u3059\u308b\u5fc5\u8981\u304c\u306a\u304f\u306a\u308a\u307e\u3057\u305f",level:2},{value:"\u5fdc\u7528 <code>~/.aqua/bin</code> \u914d\u4e0b\u306b symbolic link \u3092\u4f5c\u308b\u4e0a\u3067\u306e\u8ab2\u984c\u3068\u305d\u308c\u306e\u89e3\u6c7a\u6cd5",id:"\u5fdc\u7528-aquabin-\u914d\u4e0b\u306b-symbolic-link-\u3092\u4f5c\u308b\u4e0a\u3067\u306e\u8ab2\u984c\u3068\u305d\u308c\u306e\u89e3\u6c7a\u6cd5",level:3},{value:"<code>install</code> \u30b3\u30de\u30f3\u30c9\u306b <code>--test</code> option \u3092\u8ffd\u52a0\u3057\u3001 <code>file.src</code> \u306e\u8a2d\u5b9a\u304c\u6b63\u3057\u3044\u304b\u30c6\u30b9\u30c8\u3067\u304d\u308b\u3088\u3046\u306b\u306a\u308a\u307e\u3057\u305f",id:"install-\u30b3\u30de\u30f3\u30c9\u306b---test-option-\u3092\u8ffd\u52a0\u3057-filesrc-\u306e\u8a2d\u5b9a\u304c\u6b63\u3057\u3044\u304b\u30c6\u30b9\u30c8\u3067\u304d\u308b\u3088\u3046\u306b\u306a\u308a\u307e\u3057\u305f",level:2},{value:"GitHub Release \u3060\u3051\u3067\u306a\u304f\u3001\u4efb\u610f\u306e URL \u304b\u3089 tool \u306e\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u30fb\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u304c\u3067\u304d\u308b\u3088\u3046\u306b\u306a\u308a\u307e\u3057\u305f",id:"github-release-\u3060\u3051\u3067\u306a\u304f\u4efb\u610f\u306e-url-\u304b\u3089-tool-\u306e\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u304c\u3067\u304d\u308b\u3088\u3046\u306b\u306a\u308a\u307e\u3057\u305f",level:2},{value:"Breaking Change: <code>inline_registry</code> \u306e\u8a2d\u5b9a\u306e\u5f62\u5f0f\u3092\u5909\u66f4\u3057\u307e\u3057\u305f",id:"breaking-change-inline_registry-\u306e\u8a2d\u5b9a\u306e\u5f62\u5f0f\u3092\u5909\u66f4\u3057\u307e\u3057\u305f",level:2},{value:"aqua \u306e\u8a2d\u5b9a\u306e\u518d\u5229\u7528\u6027\u3092\u9ad8\u3081\u308b <code>Registry</code> \u3068\u3044\u3046\u4ed5\u7d44\u307f\u3092\u5c0e\u5165\u3057\u307e\u3057\u305f",id:"aqua-\u306e\u8a2d\u5b9a\u306e\u518d\u5229\u7528\u6027\u3092\u9ad8\u3081\u308b-registry-\u3068\u3044\u3046\u4ed5\u7d44\u307f\u3092\u5c0e\u5165\u3057\u307e\u3057\u305f",level:2},{value:"inline registry",id:"inline-registry",level:3},{value:"local registry",id:"local-registry",level:2},{value:"github_content registry",id:"github_content-registry",level:2},{value:"Registry \u3092\u516c\u958b\u3059\u308b",id:"registry-\u3092\u516c\u958b\u3059\u308b",level:3},{value:"Standard Registry",id:"standard-registry",level:2}],p={toc:o},k="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(k,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/aqua/"},"\u5148\u65e5 aqua v0.1.0 \u3092\u30ea\u30ea\u30fc\u30b9\u3057\u305f\u8a18\u4e8b\u3092\u66f8\u3044\u305f"),"\u3070\u304b\u308a\u3067\u3059\u304c\u3001\n\u305d\u3053\u304b\u3089\u66f4\u306b\u958b\u767a\u3092\u7d9a\u3051\u3066 v0.5.0 \u3092\u30ea\u30ea\u30fc\u30b9\u3057\u305f\u306e\u3067\u3001\u5909\u66f4\u70b9\u3092\u7d39\u4ecb\u3057\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u57fa\u672c\u7684\u306b ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/suzuki-shunsuke/aqua/releases"},"Release Note")," \u306b\u66f8\u3044\u3066\u3042\u308b\u3068\u304a\u308a\u3067\u3059\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"PATH \u3092 project (aqua.yaml) \u6bce\u306b\u8a2d\u5b9a\u3059\u308b\u5fc5\u8981\u304c\u306a\u304f\u306a\u308a\u307e\u3057\u305f",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"~/.aqua/bin")," \u3092 PATH \u306b\u8ffd\u52a0\u3059\u308c\u3070\u3088\u304f\u306a\u308a\u307e\u3057\u305f"),(0,r.kt)("li",{parentName:"ul"},"direnv \u306a\u3069\u3092\u4f7f\u3063\u3066\u74b0\u5883\u5909\u6570\u3092\u8ffd\u52a0\u3059\u308b\u5fc5\u8981\u304c\u306a\u304f\u306a\u308a\u307e\u3057\u305f"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"install")," \u30b3\u30de\u30f3\u30c9\u306b ",(0,r.kt)("inlineCode",{parentName:"li"},"--test")," option \u3092\u8ffd\u52a0\u3057\u3001 ",(0,r.kt)("inlineCode",{parentName:"li"},"file.src")," \u306e\u8a2d\u5b9a\u304c\u6b63\u3057\u3044\u304b\u30c6\u30b9\u30c8\u3067\u304d\u308b\u3088\u3046\u306b\u306a\u308a\u307e\u3057\u305f",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"CI \u3067 aqua \u306e\u8a2d\u5b9a\u3092\u30c6\u30b9\u30c8\u3059\u308b\u306e\u306b\u4fbf\u5229"))),(0,r.kt)("li",{parentName:"ul"},"GitHub Release \u3060\u3051\u3067\u306a\u304f\u3001\u4efb\u610f\u306e URL \u304b\u3089 tool \u306e\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u30fb\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u304c\u3067\u304d\u308b\u3088\u3046\u306b\u306a\u308a\u307e\u3057\u305f",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Go \u3084 helm, Hashicorp \u306e product \u306e\u3088\u3046\u306a\u516c\u5f0f\u30b5\u30a4\u30c8\u304b\u3089\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u3059\u308b\u30bf\u30a4\u30d7\u306e\u30c4\u30fc\u30eb\u3082 install \u3067\u304d\u308b\u3088\u3046\u306b\u306a\u308a\u307e\u3057\u305f"))),(0,r.kt)("li",{parentName:"ul"},"Breaking Change: ",(0,r.kt)("inlineCode",{parentName:"li"},"inline_registry")," \u306e\u8a2d\u5b9a\u306e\u5f62\u5f0f\u3092\u5909\u66f4\u3057\u307e\u3057\u305f"),(0,r.kt)("li",{parentName:"ul"},"aqua \u306e\u8a2d\u5b9a\u306e\u518d\u5229\u7528\u6027\u3092\u9ad8\u3081\u308b ",(0,r.kt)("inlineCode",{parentName:"li"},"Registry")," \u3068\u3044\u3046\u4ed5\u7d44\u307f\u3092\u5c0e\u5165\u3057\u307e\u3057\u305f",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"standard ",(0,r.kt)("inlineCode",{parentName:"li"},"Registry")," \u3092\u516c\u958b\u3057\u307e\u3057\u305f ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/suzuki-shunsuke/aqua-registry"},"https://github.com/suzuki-shunsuke/aqua-registry")))),(0,r.kt)("li",{parentName:"ul"},"\u7c21\u5358\u306a slide \u3092\u516c\u958b\u3057\u307e\u3057\u305f: ",(0,r.kt)("a",{parentName:"li",href:"https://speakerdeck.com/szksh/introduction-of-aqua"},"https://speakerdeck.com/szksh/introduction-of-aqua"))),(0,r.kt)("h2",{id:"path-\u3092-project-aquayaml-\u6bce\u306b\u8a2d\u5b9a\u3059\u308b\u5fc5\u8981\u304c\u306a\u304f\u306a\u308a\u307e\u3057\u305f"},"PATH \u3092 project (aqua.yaml) \u6bce\u306b\u8a2d\u5b9a\u3059\u308b\u5fc5\u8981\u304c\u306a\u304f\u306a\u308a\u307e\u3057\u305f"),(0,r.kt)("p",null,"aqua v0.1.0 \u3067\u306f symbolic link \u3092 aqua.yaml \u306e\u3042\u308b\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u306e ",(0,r.kt)("inlineCode",{parentName:"p"},".aqua/bin")," \u914d\u4e0b\u306b\u4f5c\u6210\u3057\u3066\u304a\u308a\u3001\u3053\u3053\u3092 PATH \u306b\u8ffd\u52a0\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3057\u305f\u3002\ndirenv \u3068\u304b\u3092\u4f7f\u3046\u3068\u4fbf\u5229\u3067\u3059\u304c\u3001\u9593\u63a5\u7684\u306b(?) aqua \u304c direnv \u306e\u3088\u3046\u306a\u30c4\u30fc\u30eb\u306b\u4f9d\u5b58\u3057\u3066\u3044\u308b\u5f62\u306b\u306a\u308a\u3001\u5fae\u5999\u3067\u3057\u305f\u3002"),(0,r.kt)("p",null,"aqua v0.5.0 \u3067\u306f symbolic link \u3092 ",(0,r.kt)("inlineCode",{parentName:"p"},"~/.aqua/bin")," \u914d\u4e0b\u306b\u4f5c\u6210\u3059\u308b\u305f\u3081\u3001 .bashrc \u306a\u3069\u3067 ",(0,r.kt)("inlineCode",{parentName:"p"},"~/.aqua/bin")," \u3092 PATH \u306b\u8ffd\u52a0\u3057\u3066\u304a\u3051\u3070 project \u3054\u3068\u306b\u74b0\u5883\u5909\u6570\u3092\u8ffd\u52a0\u3059\u308b\u5fc5\u8981\u306f\u306a\u304f\u306a\u308a\u307e\u3057\u305f\u3002\n\u3061\u306a\u307f\u306b\u4f5c\u6210\u3055\u308c\u308b symbolic link \u306f aqua-proxy \u3078\u306e\u30ea\u30f3\u30af\u3067\u3042\u308a\u3001\u30c4\u30fc\u30eb\u306e\u30d0\u30fc\u30b8\u30e7\u30f3\u306b\u306f\u4f9d\u5b58\u3057\u306a\u3044\u306e\u3067 ",(0,r.kt)("inlineCode",{parentName:"p"},"~/.aqua/bin")," \u3092\u5171\u6709\u3057\u3066\u3082\u5e72\u6e09\u3059\u308b\u3053\u3068\u306f\u3042\u308a\u307e\u305b\u3093\u3002"),(0,r.kt)("h3",{id:"\u5fdc\u7528-aquabin-\u914d\u4e0b\u306b-symbolic-link-\u3092\u4f5c\u308b\u4e0a\u3067\u306e\u8ab2\u984c\u3068\u305d\u308c\u306e\u89e3\u6c7a\u6cd5"},"[\u5fdc\u7528]"," ",(0,r.kt)("inlineCode",{parentName:"h3"},"~/.aqua/bin")," \u914d\u4e0b\u306b symbolic link \u3092\u4f5c\u308b\u4e0a\u3067\u306e\u8ab2\u984c\u3068\u305d\u308c\u306e\u89e3\u6c7a\u6cd5"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"~/.aqua/bin")," \u914d\u4e0b\u306b symbolic link \u3092\u4f5c\u3063\u3066 PATH \u306b\u8ffd\u52a0\u3059\u308b\u5834\u5408\u3001\u4e00\u3064\u5927\u304d\u306a\u8ab2\u984c\u304c\u3042\u308a\u307e\u3059\n(\u3060\u304b\u3089\u3053\u305d v0.1.0 \u3067\u306f\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3054\u3068\u306b symbolic link \u3092\u4f5c\u3063\u3066\u3044\u307e\u3057\u305f)\u3002\n",(0,r.kt)("inlineCode",{parentName:"p"},"~/.aqua/bin")," \u914d\u4e0b\u306b symbolic link \u3092\u4f5c\u3063\u3066 PATH \u306b\u8ffd\u52a0\u3059\u308b\u3068\u3001\u57fa\u672c\u7684\u306b\u305d\u306e\u30d5\u30a1\u30a4\u30eb\u304c\u547c\u3070\u308c\u308b\u3053\u3068\u306b\u306a\u308a\u307e\u3059\u3002\n\u305d\u306e\u30c4\u30fc\u30eb\u3092 aqua \u3067\u7ba1\u7406\u3057\u3066\u3044\u308b\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u914d\u4e0b\u306a\u3089\u305d\u308c\u3067\u826f\u3044\u3067\u3059\u304c\u3001\u305d\u3046\u3067\u306a\u3044\u5834\u5408\u3001\u672c\u6765 aqua \u4ee5\u5916\u3067\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3057\u305f\u3082\u306e\u3092\u5b9f\u884c\u3057\u305f\u304f\u3066\u3082\u5b9f\u884c\u3067\u304d\u307e\u305b\u3093\u3002\n\u4f8b\u3048\u3070 homebrew \u3067 jq \u3092 install \u3057\u3066\u3044\u3066\u3001\u3042\u308b\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3067\u306f aqua \u3092\u4f7f\u3063\u3066\u30d0\u30fc\u30b8\u30e7\u30f3\u3092\u56fa\u5b9a\u3057\u305f\u3082\u306e\u3092\u4f7f\u3044\u305f\u3044\u304c\u3001\u305d\u308c\u4ee5\u5916\u3067\u306f homebrew \u3067 install \u3057\u305f\u3082\u306e\u3092\u4f7f\u3044\u305f\u3044\u3068\u3044\u3063\u305f\u5834\u5408\u306b\u554f\u984c\u306b\u306a\u308a\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u3053\u306e\u554f\u984c\u3092\u89e3\u6c7a\u3059\u308b\u305f\u3081\u3001 aqua \u3067\u306f\u30c4\u30fc\u30eb\u3092\u547c\u3073\u51fa\u3059\u969b\u306b ",(0,r.kt)("inlineCode",{parentName:"p"},"PATH")," \u3092\u30c1\u30a7\u30c3\u30af\u3057\u3066 aqua-proxy \u3078\u306e\u30ea\u30f3\u30af\u3068\u306a\u3063\u3066\u3044\u308b\u3082\u306e\u306f\u9664\u5916\u3059\u308b\u3068\u3044\u3046\u30cf\u30c3\u30af(?)\u306e\u3088\u3046\u306a\u3053\u3068\u3092\u3057\u3066\u3044\u307e\u3059\u3002"),(0,r.kt)("h2",{id:"install-\u30b3\u30de\u30f3\u30c9\u306b---test-option-\u3092\u8ffd\u52a0\u3057-filesrc-\u306e\u8a2d\u5b9a\u304c\u6b63\u3057\u3044\u304b\u30c6\u30b9\u30c8\u3067\u304d\u308b\u3088\u3046\u306b\u306a\u308a\u307e\u3057\u305f"},(0,r.kt)("inlineCode",{parentName:"h2"},"install")," \u30b3\u30de\u30f3\u30c9\u306b ",(0,r.kt)("inlineCode",{parentName:"h2"},"--test")," option \u3092\u8ffd\u52a0\u3057\u3001 ",(0,r.kt)("inlineCode",{parentName:"h2"},"file.src")," \u306e\u8a2d\u5b9a\u304c\u6b63\u3057\u3044\u304b\u30c6\u30b9\u30c8\u3067\u304d\u308b\u3088\u3046\u306b\u306a\u308a\u307e\u3057\u305f"),(0,r.kt)("p",null,"\u5730\u5473\u306a\u66f4\u65b0\u3067\u3059\u304c\u3001 aqua \u306e\u8a2d\u5b9a\u3092\u66f4\u65b0\u3057\u305f\u969b\u306b CI \u3067\u30c6\u30b9\u30c8\u3059\u308b\u306e\u306b\u4fbf\u5229\u3067\u3059\u3002\n",(0,r.kt)("inlineCode",{parentName:"p"},"--test")," option \u306a\u3057\u3060\u3068\u3001 warning \u306f\u51fa\u529b\u3057\u307e\u3059\u304c\u3001 exit code \u306f 0 \u306b\u306a\u308a\u307e\u3059\u3002"),(0,r.kt)("h2",{id:"github-release-\u3060\u3051\u3067\u306a\u304f\u4efb\u610f\u306e-url-\u304b\u3089-tool-\u306e\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u304c\u3067\u304d\u308b\u3088\u3046\u306b\u306a\u308a\u307e\u3057\u305f"},"GitHub Release \u3060\u3051\u3067\u306a\u304f\u3001\u4efb\u610f\u306e URL \u304b\u3089 tool \u306e\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u30fb\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u304c\u3067\u304d\u308b\u3088\u3046\u306b\u306a\u308a\u307e\u3057\u305f"),(0,r.kt)("p",null,"\u3061\u306a\u307f\u306b\u3001 GitHub Release \u3067\u516c\u958b\u3055\u308c\u3066\u306a\u3044\u3088\u3046\u306a\u30c4\u30fc\u30eb\u3067\u3082\u3001\nGitHub \u30ea\u30dd\u30b8\u30c8\u30ea\u3067 versioning \u3055\u308c\u3066\u3044\u3066 Renovate \u306e ",(0,r.kt)("inlineCode",{parentName:"p"},"github_release")," data source \u3067\u81ea\u52d5\u66f4\u65b0\u3067\u304d\u308b\u30b1\u30fc\u30b9\u306f\u5c11\u306a\u304f\u306a\u3044\u3068\u601d\u3044\u307e\u3059\u3002"),(0,r.kt)("h2",{id:"breaking-change-inline_registry-\u306e\u8a2d\u5b9a\u306e\u5f62\u5f0f\u3092\u5909\u66f4\u3057\u307e\u3057\u305f"},"Breaking Change: ",(0,r.kt)("inlineCode",{parentName:"h2"},"inline_registry")," \u306e\u8a2d\u5b9a\u306e\u5f62\u5f0f\u3092\u5909\u66f4\u3057\u307e\u3057\u305f"),(0,r.kt)("p",null,"\u5c0f\u3055\u306a breaking change \u3067\u3059\u304c\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"inline_registry")," \u306e\u5f62\u5f0f\u304c\u5909\u308f\u308a\u307e\u3057\u305f\u3002"),(0,r.kt)("p",null,"AS IS"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"inline_registry:\n- name: jq\n  type: github_release\n  repo_owner: stedolan\n  repo_name: jq\n  asset: 'jq-{{if eq .OS \"darwin\"}}osx{{else}}{{.OS}}{{end}}-{{.Arch}}'\n  files:\n  - name: jq\n")),(0,r.kt)("p",null,"TO BE"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"inline_registry:\n  packages:\n  - name: jq\n    type: github_release\n    repo_owner: stedolan\n    repo_name: jq\n    asset: 'jq-{{if eq .OS \"darwin\"}}osx{{else}}{{.OS}}{{end}}-{{.Arch}}'\n    files:\n    - name: jq\n")),(0,r.kt)("h2",{id:"aqua-\u306e\u8a2d\u5b9a\u306e\u518d\u5229\u7528\u6027\u3092\u9ad8\u3081\u308b-registry-\u3068\u3044\u3046\u4ed5\u7d44\u307f\u3092\u5c0e\u5165\u3057\u307e\u3057\u305f"},"aqua \u306e\u8a2d\u5b9a\u306e\u518d\u5229\u7528\u6027\u3092\u9ad8\u3081\u308b ",(0,r.kt)("inlineCode",{parentName:"h2"},"Registry")," \u3068\u3044\u3046\u4ed5\u7d44\u307f\u3092\u5c0e\u5165\u3057\u307e\u3057\u305f"),(0,r.kt)("p",null,"\u3053\u308c\u304c\u4e00\u756a\u5927\u304d\u306a\u66f4\u65b0\u3067\u3059\u3002\naqua \u3092\u4f7f\u3046\u306b\u306f\u30c4\u30fc\u30eb\u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u65b9\u6cd5\u3092 YAML \u3067\u8a18\u8ff0\u3057\u306a\u3044\u3068\u3044\u3051\u307e\u305b\u3093\u304c\u3001\n\u3053\u308c\u306f\u3061\u3087\u3063\u3068\u3057\u305f\u624b\u9593\u3067\u3059\u3057\u3001\u65b0\u898f\u30e6\u30fc\u30b6\u30fc\u306b\u3068\u3063\u3066\u969c\u58c1\u3068\u306a\u308b\u3067\u3057\u3087\u3046\u3002"),(0,r.kt)("p",null,"\u30c4\u30fc\u30eb\u3068\u305d\u306e\u30d0\u30fc\u30b8\u30e7\u30f3\u3092\u5b9a\u7fa9\u3057\u305f\u3089\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3067\u304d\u3066\u307b\u3057\u3044\u3082\u306e\u3067\u3059\u3002\n\u30c4\u30fc\u30eb\u3068\u305d\u306e\u30d0\u30fc\u30b8\u30e7\u30f3\u306e\u5b9a\u7fa9\u306f ",(0,r.kt)("inlineCode",{parentName:"p"},"aqua.yaml")," \u306e ",(0,r.kt)("inlineCode",{parentName:"p"},"packages")," \u306e\u90e8\u5206\u306a\u306e\u3067\u3001\u305d\u308c\u4ee5\u5916\u306e\u8a2d\u5b9a\u3092\u5982\u4f55\u306b\u7c21\u7565\u5316\u3059\u308b\u304b\u3068\u3044\u3046\u8a71\u306b\u306a\u308a\u307e\u3059\u3002"),(0,r.kt)("p",null,"Registry \u306f\u30c4\u30fc\u30eb\u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u65b9\u6cd5\u306e\u8a2d\u5b9a\u3092\u3001\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u56fa\u6709\u306e\u30d0\u30fc\u30b8\u30e7\u30f3\u8a2d\u5b9a\u3068\u306f\u72ec\u7acb\u3055\u305b\u3001\u518d\u5229\u7528\u53ef\u80fd\u306a\u5f62\u3067\u5171\u6709\u3059\u308b\u4ed5\u7d44\u307f\u3067\u3059\u3002"),(0,r.kt)("p",null,"Registry \u306b\u306f\u73fe\u72b6 4 \u7a2e\u985e\u3042\u308a\u307e\u3059\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"inline regisry: aqua.yaml \u306e\u4e2d\u306b\u76f4\u63a5 install \u65b9\u6cd5\u3092\u5b9a\u7fa9\u3059\u308b\u3002 v0.1.0 \u304b\u3089\u30b5\u30dd\u30fc\u30c8\u3055\u308c\u3066\u3044\u308b\u65b9\u6cd5"),(0,r.kt)("li",{parentName:"ul"},"github_content registry: GitHub Repository \u306b\u3042\u308b\u30d5\u30a1\u30a4\u30eb\u3092 Registry \u3068\u3057\u3066\u53c2\u7167\u3059\u308b\u65b9\u6cd5"),(0,r.kt)("li",{parentName:"ul"},"local registry: GitHub Repository \u306b\u3042\u308b\u30d5\u30a1\u30a4\u30eb\u3092 Regisry \u3068\u3057\u3066\u53c2\u7167\u3059\u308b\u65b9\u6cd5"),(0,r.kt)("li",{parentName:"ul"},"standard registry: \u81ea\u5206\u304c\u30e1\u30f3\u30c6\u3057\u3066\u3044\u308b github_content registry \u306e\u30a8\u30a4\u30ea\u30a2\u30b9")),(0,r.kt)("h3",{id:"inline-registry"},"inline registry"),(0,r.kt)("p",null,"inline registry \u306f\u5f93\u6765\u304b\u3089\u3042\u308b\u3084\u3064\u3067\u3001 aqua.yaml \u5185\u306b\u5b9a\u7fa9\u3059\u308b\u65b9\u6cd5\u3067\u3059\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"inline_registry:\n  packages:\n  - name: jq\n    type: github_release\n    repo_owner: stedolan\n    repo_name: jq\n    asset: 'jq-{{if eq .OS \"darwin\"}}osx{{else}}{{.OS}}{{end}}-{{.Arch}}'\n    files:\n    - name: jq\n")),(0,r.kt)("p",null,"\u30b7\u30f3\u30d7\u30eb\u3067\u306f\u3042\u308a\u307e\u3059\u304c\u3001\u30b3\u30d4\u30da\u3059\u308b\u4ee5\u5916\u306b\u518d\u5229\u7528\u6027\u304c\u3042\u308a\u307e\u305b\u3093\u3002"),(0,r.kt)("h2",{id:"local-registry"},"local registry"),(0,r.kt)("p",null,"local registry \u306f\u30ed\u30fc\u30ab\u30eb\u306b\u3042\u308b\u30d5\u30a1\u30a4\u30eb\u3092\u53c2\u7167\u3059\u308b registry \u3067\u3059\u3002\n\u7d76\u5bfe\u30d1\u30b9\u304b\u3001 aqua.yaml \u304b\u3089\u306e\u76f8\u5bfe\u30d1\u30b9\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002"),(0,r.kt)("h2",{id:"github_content-registry"},"github_content registry"),(0,r.kt)("p",null,"\u30e6\u30fc\u30b6\u30fc\u3068\u3057\u3066\u306f\u6b21\u306e\u3088\u3046\u306b Registry \u3092\u5b9a\u7fa9\u3059\u308c\u3070\u3042\u3068\u306f ",(0,r.kt)("inlineCode",{parentName:"p"},"packages")," \u3067 Registry \u3092\u53c2\u7167\u3067\u304d\u307e\u3059\u3002\nGitHub Access Token \u3092\u74b0\u5883\u5909\u6570 ",(0,r.kt)("inlineCode",{parentName:"p"},"GITHUB_TOKEN")," \u3068\u3057\u3066\u8a2d\u5b9a\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"registries:\n- name: suzuki-shunsuke/aqua-registry\n  type: github_content\n  repo_owner: suzuki-shunsuke\n  repo_name: aqua-registry\n  ref: v0.2.0 # renovate: depName=suzuki-shunsuke/aqua-registry\n  path: registry.yaml\n\npackages:\n- name: conftest\n  registry: standard\n  version: v0.27.0 # renovate: depName=open-policy-agent/conftest\n")),(0,r.kt)("h3",{id:"registry-\u3092\u516c\u958b\u3059\u308b"},"Registry \u3092\u516c\u958b\u3059\u308b"),(0,r.kt)("p",null,"\u81ea\u5206\u3067 Registry \u3092\u516c\u958b\u3057\u305f\u3044\u5834\u5408\u306f GitHub Repository \u306b\u8a2d\u5b9a\u30d5\u30a1\u30a4\u30eb\u3092\u7f6e\u304f\u3060\u3051\u3067 OK \u3067\u3059\u3002\ne.g. ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/suzuki-shunsuke/aqua-registry/blob/main/registry.yaml"},"https://github.com/suzuki-shunsuke/aqua-registry/blob/main/registry.yaml")),(0,r.kt)("h2",{id:"standard-registry"},"Standard Registry"),(0,r.kt)("p",null,"Standard Registry \u3082\u4f5c\u308a\u307e\u3057\u305f\u3002"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/suzuki-shunsuke/aqua-registry"},"https://github.com/suzuki-shunsuke/aqua-registry")),(0,r.kt)("p",null,"jq \u3084 gh, kubectl, Terraform \u306a\u3069\u6709\u540d\u306a\u30c4\u30fc\u30eb\u306f\u3053\u306e Registry \u3092\u4f7f\u3048\u3070\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3067\u304d\u307e\u3059\u304c\u3001\n\u5f53\u7136 PR \u3082\u53d7\u3051\u4ed8\u3051\u3066\u3044\u308b\u306e\u3067\u3001\u8ffd\u52a0\u3057\u3066\u307b\u3057\u3044\u30c4\u30fc\u30eb\u304c\u3042\u308c\u3070 PR \u3092\u6295\u3052\u3066\u304f\u3060\u3055\u3044\u3002"),(0,r.kt)("p",null,"Official Registry \u3092 github_content Registry \u3068\u3057\u3066\u5229\u7528\u3059\u308b\u3053\u3068\u3082\u5f53\u7136\u3067\u304d\u307e\u3059\u304c\u3001\n\u3088\u308a\u7c21\u6f54\u306b\u66f8\u3051\u308b\u3088\u3046\u306b ",(0,r.kt)("inlineCode",{parentName:"p"},"type: standard")," \u3068\u3044\u3046 Registry \u304c\u30b5\u30dd\u30fc\u30c8\u3055\u308c\u3066\u3044\u307e\u3059\u3002"),(0,r.kt)("p",null,"AS IS"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"registries:\n- name: standard\n  type: github_content\n  repo_owner: suzuki-shunsuke\n  repo_name: aqua-registry\n  ref: v0.2.0 # renovate: depName=suzuki-shunsuke/aqua-registry\n  path: registry.yaml\n")),(0,r.kt)("p",null,"TO BE"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"registries:\n- type: standard\n  ref: v0.2.0 # renovate: depName=suzuki-shunsuke/aqua-registry\n")),(0,r.kt)("p",null,"\u4e0a 2 \u3064\u306f\u7b49\u4fa1\u3067\u306f\u3042\u308a\u307e\u3059\u304c\u3001\u5f8c\u8005\u306e\u307b\u3046\u304c\u7c21\u6f54\u3067\u3059\u3002"))}m.isMDXComponent=!0}}]);