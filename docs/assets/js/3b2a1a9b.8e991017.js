"use strict";(self.webpackChunktechblog_szksh_cloud_github_io=self.webpackChunktechblog_szksh_cloud_github_io||[]).push([[1512],{5680:(e,t,r)=>{r.d(t,{xA:()=>p,yg:()=>h});var a=r(6540);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},u=Object.keys(e);for(a=0;a<u.length;a++)r=u[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(a=0;a<u.length;a++)r=u[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var o=a.createContext({}),s=function(e){var t=a.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return a.createElement(o.Provider,{value:t},e.children)},g="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,u=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),g=s(r),m=n,h=g["".concat(o,".").concat(m)]||g[m]||c[m]||u;return r?a.createElement(h,i(i({ref:t},p),{},{components:r})):a.createElement(h,i({ref:t},p))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var u=r.length,i=new Array(u);i[0]=m;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[g]="string"==typeof e?e:n,i[1]=l;for(var s=2;s<u;s++)i[s]=r[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},7353:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>c,frontMatter:()=>u,metadata:()=>l,toc:()=>s});var a=r(8168),n=(r(6540),r(5680));const u={title:"2021-08 \u3084\u3063\u305f\u3053\u3068",date:new Date("2021-09-02T05:33:16.000Z"),archives:["2021/08"],tags:["job","oss"],authors:["suzuki-shunsuke"]},i=void 0,l={permalink:"/what-i-did-2021-08",source:"@site/blog/what-i-did-2021-08.md",title:"2021-08 \u3084\u3063\u305f\u3053\u3068",description:"\u4ed5\u4e8b",date:"2021-09-02T05:33:16.000Z",formattedDate:"September 2, 2021",tags:[{label:"job",permalink:"/tags/job"},{label:"oss",permalink:"/tags/oss"}],readingTime:1.61,hasTruncateMarker:!1,authors:[{name:"Shunsuke Suzuki",title:"Platform Engineer / OSS Developer / Go / Terraform",url:"https://github.com/suzuki-shunsuke",imageURL:"https://github.com/suzuki-shunsuke.png",key:"suzuki-shunsuke"}],frontMatter:{title:"2021-08 \u3084\u3063\u305f\u3053\u3068",date:"2021-09-02T05:33:16.000Z",archives:["2021/08"],tags:["job","oss"],authors:["suzuki-shunsuke"]},prevItem:{title:"aqua v0.1.0 \u304b\u3089 v0.5.0 \u3067\u306e\u5909\u66f4\u70b9",permalink:"/aqua-v0.5"},nextItem:{title:"aqua - CLI \u30c4\u30fc\u30eb\u306e\u30d0\u30fc\u30b8\u30e7\u30f3\u7ba1\u7406",permalink:"/aqua"}},o={authorsImageUrls:[void 0]},s=[{value:"\u4ed5\u4e8b",id:"\u4ed5\u4e8b",level:2},{value:"OSS Contribution",id:"oss-contribution",level:2},{value:"\u65b0\u305f\u306b\u4f5c\u3063\u305f OSS",id:"\u65b0\u305f\u306b\u4f5c\u3063\u305f-oss",level:2},{value:"Blog",id:"blog",level:2}],p={toc:s},g="wrapper";function c(e){let{components:t,...r}=e;return(0,n.yg)(g,(0,a.A)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h2",{id:"\u4ed5\u4e8b"},"\u4ed5\u4e8b"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"AWS IAM User \u3092\u524a\u9664\u3059\u308b\u969b\u306b force_destroy \u304c true \u306b\u306a\u3063\u3066\u3044\u308b\u304b Conftest \u3067\u30c6\u30b9\u30c8"),(0,n.yg)("li",{parentName:"ul"},"Terraform \u306e State \u5206\u5272"),(0,n.yg)("li",{parentName:"ul"},"Terraform Modules \u3092\u5225\u30ea\u30dd\u30b8\u30c8\u30ea\u3067\u7ba1\u7406\u3057\u3066 versioning"),(0,n.yg)("li",{parentName:"ul"},"git-secrets \u3092 secretlint \u306b\u79fb\u884c",(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},"git-secrets \u304c\u30e1\u30f3\u30c6\u3055\u308c\u3066\u306a\u304f\u3066\u3001\u65e2\u77e5\u30d0\u30b0\u304c\u653e\u7f6e\u3055\u308c\u3066\u3044\u308b\u304b\u3089"))),(0,n.yg)("li",{parentName:"ul"},"CI \u3067 terraform fmt \u306b\u3088\u308b\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u306e\u81ea\u52d5\u5316"),(0,n.yg)("li",{parentName:"ul"},"WIP: AWS WAF \u306e COUNT, BLOCK \u30ed\u30b0\u3092 Firehose \u3067\u62bd\u51fa"),(0,n.yg)("li",{parentName:"ul"},"WIP: AWS CodeBuild \u3067 Provisioning Error \u304c\u767a\u751f\u3057\u305f\u3089\u81ea\u52d5\u3067 Retry"),(0,n.yg)("li",{parentName:"ul"},"WIP: AWS CodeBuild \u306e\u305f\u3081\u306e GitHub App \u306e\u958b\u767a"),(0,n.yg)("li",{parentName:"ul"},"WIP: AWS SSO \u306b\u3064\u3044\u3066\u8abf\u67fb")),(0,n.yg)("h2",{id:"oss-contribution"},"OSS Contribution"),(0,n.yg)("p",null,"Renovate \u306e GitHub Actions \u306e\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u306e\u4fee\u6b63\u3092\u3057\u307e\u3057\u305f\u3002\n\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u4e2d\u306b\u66f8\u304b\u308c\u305f\u30d0\u30fc\u30b8\u30e7\u30f3\u3092 Renovate \u3067\u81ea\u52d5 update \u3059\u308b\u3088\u3046\u306b\u3057\u307e\u3057\u305f\u3002"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://github.com/renovatebot/github-action/pull/556"},"docs: fix broken links and update GitHub Actions")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://github.com/renovatebot/github-action/pull/557"},"chore: update GitHub Actions in README by Renovate"))),(0,n.yg)("h2",{id:"\u65b0\u305f\u306b\u4f5c\u3063\u305f-oss"},"\u65b0\u305f\u306b\u4f5c\u3063\u305f OSS"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://github.com/suzuki-shunsuke/logrus-error"},"logrus-error"),": ",(0,n.yg)("a",{parentName:"li",href:"https://github.com/sirupsen/logrus"},"logrus"),".Fields \u3092 error \u306b\u57cb\u3081\u8fbc\u3080 Go \u306e\u8584\u3044\u30e9\u30a4\u30d6\u30e9\u30ea"),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://github.com/suzuki-shunsuke/aqua"},"aqua"),": Command Line Tools Version Manager",(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://github.com/suzuki-shunsuke/aqua-proxy"},"aqua-proxy"),": aqua \u306e\u5185\u90e8\u30c4\u30fc\u30eb "),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://github.com/suzuki-shunsuke/aqua-installer"},"aqua-installer"),": aqua \u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b\u30b9\u30af\u30ea\u30d7\u30c8\u3068 GitHub Actions"))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://github.com/suzuki-shunsuke/go-checkout-github-merged-commit"},"go-checkout-github-merged-commit"),": PR \u306e merged commit \u3092 checkout \u3059\u308b Go \u306e\u30e9\u30a4\u30d6\u30e9\u30ea"),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://github.com/suzuki-shunsuke/aws-codebuild-retry"},"aws-codebuild-retry"),": AWS CodeBuild \u3092 Retry \u3059\u308b Lambda Function")),(0,n.yg)("h2",{id:"blog"},"Blog"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://techblog.szksh.cloud/archives/2021/08/"},"https://techblog.szksh.cloud/archives/2021/08/"),(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://techblog.szksh.cloud/aqua/"},"aqua - CLI \u30c4\u30fc\u30eb\u306e\u30d0\u30fc\u30b8\u30e7\u30f3\u7ba1\u7406")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://techblog.szksh.cloud/github-app-for-codebuild/"},"AWS CodeBuild \u3092\u5b9f\u884c\u3059\u308b Github App \u3092\u4f5c\u308b")))),(0,n.yg)("li",{parentName:"ul"},"Quipper",(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://blog.studysapuri.jp/entry/2021/08/11/080000"},"Terraform \u306e CI \u306b tfmigrate \u3092\u5c0e\u5165\u3057\u305f\u8a71")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://blog.studysapuri.jp/entry/2021/08/02/080000"},"AWS IAM \u306e\u7ba1\u7406\u3092 miam \u304b\u3089 Terraform \u306b\u79fb\u884c\u3057\u305f\u8a71"))))))}c.isMDXComponent=!0}}]);