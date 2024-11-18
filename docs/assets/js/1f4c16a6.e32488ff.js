"use strict";(self.webpackChunktechblog_szksh_cloud_github_io=self.webpackChunktechblog_szksh_cloud_github_io||[]).push([[7897],{5680:(r,e,t)=>{t.d(e,{xA:()=>u,yg:()=>f});var o=t(6540);function a(r,e,t){return e in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}function n(r,e){var t=Object.keys(r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(r);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),t.push.apply(t,o)}return t}function i(r){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?n(Object(t),!0).forEach((function(e){a(r,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(t,e))}))}return r}function l(r,e){if(null==r)return{};var t,o,a=function(r,e){if(null==r)return{};var t,o,a={},n=Object.keys(r);for(o=0;o<n.length;o++)t=n[o],e.indexOf(t)>=0||(a[t]=r[t]);return a}(r,e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(r);for(o=0;o<n.length;o++)t=n[o],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(r,t)&&(a[t]=r[t])}return a}var p=o.createContext({}),c=function(r){var e=o.useContext(p),t=e;return r&&(t="function"==typeof r?r(e):i(i({},e),r)),t},u=function(r){var e=c(r.components);return o.createElement(p.Provider,{value:e},r.children)},s="mdxType",m={inlineCode:"code",wrapper:function(r){var e=r.children;return o.createElement(o.Fragment,{},e)}},d=o.forwardRef((function(r,e){var t=r.components,a=r.mdxType,n=r.originalType,p=r.parentName,u=l(r,["components","mdxType","originalType","parentName"]),s=c(t),d=a,f=s["".concat(p,".").concat(d)]||s[d]||m[d]||n;return t?o.createElement(f,i(i({ref:e},u),{},{components:t})):o.createElement(f,i({ref:e},u))}));function f(r,e){var t=arguments,a=e&&e.mdxType;if("string"==typeof r||a){var n=t.length,i=new Array(n);i[0]=d;var l={};for(var p in e)hasOwnProperty.call(e,p)&&(l[p]=e[p]);l.originalType=r,l[s]="string"==typeof r?r:a,i[1]=l;for(var c=2;c<n;c++)i[c]=t[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}d.displayName="MDXCreateElement"},9404:(r,e,t)=>{t.r(e),t.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>n,metadata:()=>l,toc:()=>c});var o=t(8168),a=(t(6540),t(5680));const n={title:"Terraform \u306e Docker Provider \u306e Collaborator \u306b\u306a\u308a\u307e\u3057\u305f",date:new Date("2020-12-03T00:07:32.000Z"),tags:["oss","terraform"],authors:["suzuki-shunsuke"]},i=void 0,l={permalink:"/collaborator-of-terraform-docker-provider",source:"@site/blog/collaborator-of-terraform-docker-provider.md",title:"Terraform \u306e Docker Provider \u306e Collaborator \u306b\u306a\u308a\u307e\u3057\u305f",description:"\u5148\u65e5 kreuzwerker/terraform-provider-docker \u306e Collaborator \u306b\u306a\u308a\u307e\u3057\u305f\u3002",date:"2020-12-03T00:07:32.000Z",formattedDate:"December 3, 2020",tags:[{label:"oss",permalink:"/tags/oss"},{label:"terraform",permalink:"/tags/terraform"}],readingTime:1.605,hasTruncateMarker:!1,authors:[{name:"Shunsuke Suzuki",title:"Platform Engineer / OSS Developer / Go / Terraform",url:"https://github.com/suzuki-shunsuke",imageURL:"https://github.com/suzuki-shunsuke.png",key:"suzuki-shunsuke"}],frontMatter:{title:"Terraform \u306e Docker Provider \u306e Collaborator \u306b\u306a\u308a\u307e\u3057\u305f",date:"2020-12-03T00:07:32.000Z",tags:["oss","terraform"],authors:["suzuki-shunsuke"]},prevItem:{title:"Renovate \u3068 Dependabot \u306e\u6bd4\u8f03",permalink:"/compare-renovate-dependabot"},nextItem:{title:"\u4ed5\u4e8b\u3067\u3084\u3063\u305f\u3053\u3068 2020-10-01 ~ 2020-10-31",permalink:"/2020/10/01/job-10-31"}},p={authorsImageUrls:[void 0]},c=[{value:"Collaborator \u306b\u306a\u3063\u305f\u7d4c\u7def",id:"collaborator-\u306b\u306a\u3063\u305f\u7d4c\u7def",level:2},{value:"Contributor \u306b\u306a\u3063\u305f\u7d4c\u7def",id:"contributor-\u306b\u306a\u3063\u305f\u7d4c\u7def",level:2}],u={toc:c},s="wrapper";function m(r){let{components:e,...t}=r;return(0,a.yg)(s,(0,o.A)({},u,t,{components:e,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"\u5148\u65e5 ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/kreuzwerker/terraform-provider-docker"},"kreuzwerker/terraform-provider-docker")," \u306e Collaborator \u306b\u306a\u308a\u307e\u3057\u305f\u3002\n",(0,a.yg)("a",{parentName:"p",href:"https://github.com/kreuzwerker/terraform-provider-docker"},"kreuzwerker/terraform-provider-docker")," \u306f Terraform \u306e Docker Provider \u3067\u3042\u308a\u3001 Docker \u30b3\u30f3\u30c6\u30ca\u3084 image, network \u306a\u3069\u3092\u7ba1\u7406\u3067\u304d\u307e\u3059\u3002\n\u5143\u3005\u306f Hashicorp \u306e Official Provider \u3067\u3042\u3063\u305f ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/terraform-providers/terraform-provider-docker"},"terraform-providers/terraform-provider-docker")," \u304c ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/kreuzwerker/terraform-provider-docker"},"kreuzwerker/terraform-provider-docker")," \u306b\u79fb\u7ba1\u3055\u308c\u3001 Community Provider \u306b\u306a\u308a\u307e\u3057\u305f\u3002\n\u5143\u306e\u30ea\u30dd\u30b8\u30c8\u30ea\u306f hashicorp org \u306b\u79fb\u3055\u308c archive \u3055\u308c\u3066\u3044\u307e\u3059\u3002"),(0,a.yg)("h2",{id:"collaborator-\u306b\u306a\u3063\u305f\u7d4c\u7def"},"Collaborator \u306b\u306a\u3063\u305f\u7d4c\u7def"),(0,a.yg)("p",null,"\u30ea\u30dd\u30b8\u30c8\u30ea\u304c\u79fb\u7ba1\u3055\u308c\u308b\u969b\u306b\u3001\u30e1\u30f3\u30c6\u30ca\u3092\u52df\u96c6\u3057\u3066\u3044\u3066\u904e\u53bb\u306b contribution \u3057\u3066\u3044\u305f\u81ea\u5206\u306b\u3082\u58f0\u3092\u304b\u3051\u3066\u3044\u305f\u3060\u304d\u307e\u3057\u305f\u3002"),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"https://github.com/hashicorp/terraform-provider-docker/issues/306"},"https://github.com/hashicorp/terraform-provider-docker/issues/306")),(0,a.yg)("h2",{id:"contributor-\u306b\u306a\u3063\u305f\u7d4c\u7def"},"Contributor \u306b\u306a\u3063\u305f\u7d4c\u7def"),(0,a.yg)("p",null,"\u81ea\u5206\u304c\u3053\u306e provider \u306b contribution \u3057\u305f\u7d4c\u7def\u306f\u3001 Terraform \u306e Hands on \u3092\u66f8\u304f\u306e\u306b\u4e01\u5ea6\u3088\u3044 provider \u3092\u63a2\u3057\u3066\u3044\u305f\u3053\u3068\u3067\u3057\u305f\u3002"),(0,a.yg)("p",null,"Hands on \u306e\u984c\u6750\u3068\u3057\u3066 Docker \u30b3\u30f3\u30c6\u30ca\u3092\u4f5c\u3063\u305f\u308a\u3067\u304d\u305f\u3089\u3044\u3044\u3093\u3058\u3083\u306a\u3044\u304b\u306a\u3068\u601d\u3063\u3066 Docker provider \u3092\u8a66\u3057\u3066\u307f\u307e\u3057\u305f\u3002\n\u3057\u304b\u3057\u5f53\u6642\u306e docker_container \u30ea\u30bd\u30fc\u30b9\u306f read \u3092\u3061\u3083\u3093\u3068\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u305b\u3093\u3067\u3057\u305f\u3002\n\u306a\u306e\u3067 import \u3084 update \u304c\u307e\u3068\u3082\u306b\u52d5\u304d\u307e\u305b\u3093\u3067\u3057\u305f\u3002\n\u305d\u308c\u3092\u898b\u304b\u306d\u3066\u4fee\u6b63\u3057\u3066 PR \u3092\u6295\u3052\u305f\u306e\u304c\u6700\u521d\u3067\u3059\u3002"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"https://github.com/hashicorp/terraform-provider-docker/pull/234"},"https://github.com/hashicorp/terraform-provider-docker/pull/234")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"https://github.com/hashicorp/terraform-provider-docker/pull/236"},"https://github.com/hashicorp/terraform-provider-docker/pull/236"))),(0,a.yg)("p",null,"\u305d\u306e\u5f8c\u3082\u5e7e\u3064\u304b contribution \u3092\u3057\u307e\u3057\u305f\u3002"),(0,a.yg)("p",null,"\u306a\u304a\u3001 PR \u3092\u6295\u3052\u305f\u3082\u306e\u306e\u3001 Hands on \u306f MySQL Provider \u3092\u4f7f\u3063\u3066\u66f8\u304d\u307e\u3057\u305f\u3002"),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"https://techblog.szksh.cloud/terraform-hands-on-with-mysql-provider/"},"https://techblog.szksh.cloud/terraform-hands-on-with-mysql-provider/")))}m.isMDXComponent=!0}}]);