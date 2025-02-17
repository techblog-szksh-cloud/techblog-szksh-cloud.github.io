"use strict";(self.webpackChunktechblog_szksh_cloud_github_io=self.webpackChunktechblog_szksh_cloud_github_io||[]).push([[3560],{3156:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>g,frontMatter:()=>l,metadata:()=>u,toc:()=>c});var r=n(8168),a=(n(6540),n(5680));const l={title:"clap - \u7c21\u5358\u306b\u30c4\u30fc\u30eb\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b\u305f\u3081\u306e\u30c4\u30fc\u30eb\u3092\u4f5c\u3063\u305f",date:new Date("2020-07-06T07:52:58.000Z"),tags:["oss"],authors:["suzuki-shunsuke"]},o=void 0,u={permalink:"/clap",source:"@site/blog/clap.md",title:"clap - \u7c21\u5358\u306b\u30c4\u30fc\u30eb\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b\u305f\u3081\u306e\u30c4\u30fc\u30eb\u3092\u4f5c\u3063\u305f",description:"\u591a\u5206\u8eca\u8f2a\u306e\u518d\u767a\u660e\u3060\u3068\u306f\u601d\u3044\u307e\u3059\u304c\u3001\u7c21\u5358\u306b\u30c4\u30fc\u30eb\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b\u305f\u3081\u306e CLI \u30c4\u30fc\u30eb\u3092\u4f5c\u308a\u307e\u3057\u305f\u3002",date:"2020-07-06T07:52:58.000Z",formattedDate:"July 6, 2020",tags:[{label:"oss",permalink:"/tags/oss"}],readingTime:2.33,hasTruncateMarker:!1,authors:[{name:"Shunsuke Suzuki",title:"Platform Engineer / OSS Developer / Go / Terraform",url:"https://github.com/suzuki-shunsuke",imageURL:"https://github.com/suzuki-shunsuke.png",key:"suzuki-shunsuke"}],frontMatter:{title:"clap - \u7c21\u5358\u306b\u30c4\u30fc\u30eb\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b\u305f\u3081\u306e\u30c4\u30fc\u30eb\u3092\u4f5c\u3063\u305f",date:"2020-07-06T07:52:58.000Z",tags:["oss"],authors:["suzuki-shunsuke"]},prevItem:{title:"github-comment - GitHub \u306b\u30b3\u30e1\u30f3\u30c8\u3092\u6295\u7a3f\u3059\u308b CLI",permalink:"/github-comment"},nextItem:{title:"CircleCI \u306e run \u306e\u5b9f\u884c\u6642\u9593\u3092 DataDog \u306b\u9001\u308b",permalink:"/send-circleci-run-execution-time-to-datadog"}},s={authorsImageUrls:[void 0]},c=[],p={toc:c},i="wrapper";function g(e){let{components:t,...n}=e;return(0,a.yg)(i,(0,r.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"\u591a\u5206\u8eca\u8f2a\u306e\u518d\u767a\u660e\u3060\u3068\u306f\u601d\u3044\u307e\u3059\u304c\u3001\u7c21\u5358\u306b\u30c4\u30fc\u30eb\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b\u305f\u3081\u306e CLI \u30c4\u30fc\u30eb\u3092\u4f5c\u308a\u307e\u3057\u305f\u3002\ntarball \u3084 zip \u3092\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u3057\u3066\u5c55\u958b\u3057\u3066\u6307\u5b9a\u3057\u305f\u30d1\u30b9\u306b\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b\u30c4\u30fc\u30eb\u3067\u3059\u3002"),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"https://github.com/suzuki-shunsuke/clap"},"https://github.com/suzuki-shunsuke/clap")),(0,a.yg)("p",null,"Go \u3067\u66f8\u304b\u308c\u3066\u3044\u307e\u3059\u3002\n\u30c4\u30fc\u30eb\u306e\u540d\u524d(clap)\u306b\u306f\u7279\u5225\u306a\u610f\u5473\u3084\u7406\u7531\u306f\u306a\u304f\u3001\u306a\u3093\u3068\u306a\u304f\u3067\u3059\u3002"),(0,a.yg)("p",null,"CI \u3067\u4f55\u304b\u3057\u3089\u306e\u30c4\u30fc\u30eb\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b\u3053\u3068\u304c\u307e\u307e\u3042\u3063\u3066\u3001\u305d\u306e\u305f\u3081\u306e\u30b7\u30a7\u30eb\u30b9\u30af\u30ea\u30d7\u30c8\u3092\u90fd\u5ea6\u66f8\u304f\u306e\u304c\u5272\u3068\u9762\u5012\u306a\u306e\u3067\u30c4\u30fc\u30eb\u5316\u3057\u307e\u3057\u305f\u3002"),(0,a.yg)("p",null,"\u3053\u306e\u30d6\u30ed\u30b0\u3092\u66f8\u3044\u3066\u3044\u308b\u6642\u70b9\u3067\u30d0\u30fc\u30b8\u30e7\u30f3\u306f v0.1.0-1 \u3067\u3001\u6700\u4f4e\u9650\u306e\u6a5f\u80fd\u3057\u304b\u3042\u308a\u307e\u305b\u3093\u304c\u30019\u5272\u578b\u30cb\u30fc\u30ba\u3092\u6e80\u305f\u305b\u308b\u304b\u306a\u3068\u601d\u3044\u307e\u3059\u3002"),(0,a.yg)("p",null,"\u4f7f\u3044\u65b9\u306f\u4ee5\u4e0b\u306e\u3088\u3046\u306b\u306a\u3063\u3066\u3044\u307e\u3059\u3002"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"$ clap <URL> <\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b\u30d5\u30a1\u30a4\u30eb\u306e\u30a2\u30fc\u30ab\u30a4\u30d6\u5185\u3067\u306e\u76f8\u5bfe\u30d1\u30b9>:<\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u5148> [<\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b\u30d5\u30a1\u30a4\u30eb\u306e\u30a2\u30fc\u30ab\u30a4\u30d6\u5185\u3067\u306e\u76f8\u5bfe\u30d1\u30b9>:<\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u5148>...]\n")),(0,a.yg)("p",null,"\u4f8b\u3048\u3070 ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/open-policy-agent/conftest"},"conftest")," \u3092 /usr/local/bin \u306b\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b\u5834\u5408\u6b21\u306e\u3088\u3046\u306b\u306a\u308a\u307e\u3059\u3002"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sh"},"CONFTEST_VERSION=0.18.2\nclap install https://github.com/instrumenta/conftest/releases/download/v${CONFTEST_VERSION}/conftest_${CONFTEST_VERSION}_Linux_x86_64.tar.gz conftest:/usr/local/bin/conftest\nchmod a+x /usr/local/bin/conftest\n")),(0,a.yg)("p",null,"\u30d1\u30fc\u30df\u30c3\u30b7\u30e7\u30f3\u306e\u4ed8\u4e0e\u306f\u3084\u3063\u3066\u304f\u308c\u306a\u3044\u306e\u3067\u5fc5\u8981\u306b\u5fdc\u3058\u3066\u3084\u3063\u3066\u304f\u3060\u3055\u3044\u3002\n\u30d5\u30a1\u30a4\u30eb\u306e\u5727\u7e2e\u5f62\u5f0f\u306f URL \u304b\u3089\u81ea\u52d5\u3067\u5224\u5225\u3057\u3066\u304f\u308c\u307e\u3059\u3002"),(0,a.yg)("p",null,"\u4e0a\u8a18\u306e conftest \u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3092\u4eca\u307e\u3067\u306f\u6b21\u306e\u3088\u3046\u306a\u30b7\u30a7\u30eb\u30b9\u30af\u30ea\u30d7\u30c8\u3092\u66f8\u3044\u3066\u3044\u307e\u3057\u305f\u3002"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sh"},'#!/usr/bin/env bash\n\nset -eu\n\nCONFTEST_VERSION=0.18.2\n\ndirpath=$(mktemp -d)\npushd "$dirpath"\nTARFILE=conftest_${CONFTEST_VERSION}_Linux_x86_64.tar.gz\ncurl -OL https://github.com/instrumenta/conftest/releases/download/v${CONFTEST_VERSION}/${TARFILE}\ntar xvzf $TARFILE\nmv conftest /usr/local/bin/conftest\nchmod a+x /usr/local/bin/conftest\npopd\nrm -R "$dirpath"\n')),(0,a.yg)("p",null,"\u5730\u5473\u306b\u9762\u5012\u3067\u3059\u306d\u3002\u3053\u308c\u3092\u30c4\u30fc\u30eb\u6bce\u306b\u66f8\u3044\u3066\u3001\u3057\u304b\u3082\u5727\u7e2e\u5f62\u5f0f\u306b\u3088\u3063\u3066\u5fae\u5999\u306b\u5909\u3048\u306a\u3044\u3068\u3044\u3051\u307e\u305b\u3093\u3002"),(0,a.yg)("p",null,"clap \u81ea\u4f53\u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u306f\u3069\u3046\u3059\u308b\u304b\u3068\u3044\u3046\u3068\u3001 ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/suzuki-shunsuke/clap/releases"},"GitHub Releases \u3067 tarball \u306e\u4ed6\u306b\u30d0\u30a4\u30ca\u30ea\u5358\u4f53\u3067\u3082\u914d\u5e03"),"\u3057\u3066\u3044\u308b\u306e\u3067\u7c21\u5358\u306b\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3067\u304d\u307e\u3059\u3002"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"CLAP_VERSION=0.1.0-1\ncurl -L -o /usr/local/bin/clap https://github.com/suzuki-shunsuke/clap/releases/download/v${CLAP_VERSION}/clap_${CLAP_VERSION}_linux_amd64\nchmod a+x /usr/local/bin/clap\n")),(0,a.yg)("p",null,"\u4ee5\u4e0a\u3001\u7c21\u5358\u306a\u7d39\u4ecb\u3067\u3057\u305f\u3002"))}g.isMDXComponent=!0},5680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>h});var r=n(6540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},i="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),i=c(n),m=a,h=i["".concat(s,".").concat(m)]||i[m]||g[m]||l;return n?r.createElement(h,o(o({ref:t},p),{},{components:n})):r.createElement(h,o({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=m;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u[i]="string"==typeof e?e:a,o[1]=u;for(var c=2;c<l;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);