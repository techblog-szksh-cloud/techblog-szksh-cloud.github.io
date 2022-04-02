"use strict";(self.webpackChunktechblog_szksh_cloud_github_io=self.webpackChunktechblog_szksh_cloud_github_io||[]).push([[7113],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return f}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},u=Object.keys(e);for(n=0;n<u.length;n++)r=u[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(n=0;n<u.length;n++)r=u[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,u=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=s(r),f=a,k=m["".concat(l,".").concat(f)]||m[f]||p[f]||u;return r?n.createElement(k,o(o({ref:t},c),{},{components:r})):n.createElement(k,o({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var u=r.length,o=new Array(u);o[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var s=2;s<u;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},2125:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return p}});var n=r(7462),a=r(3366),u=(r(7294),r(3905)),o=["components"],i={title:"2022-02 \u632f\u308a\u8fd4\u308a",date:new Date("2022-03-14T05:16:55.000Z"),authors:["suzuki-shunsuke"],tags:["job","oss"]},l=void 0,s={permalink:"/what-i-did-2022-02",source:"@site/blog/what-i-did-2022-02.md",title:"2022-02 \u632f\u308a\u8fd4\u308a",description:"\u307e\u3068\u3081",date:"2022-03-14T05:16:55.000Z",formattedDate:"March 14, 2022",tags:[{label:"job",permalink:"/tags/job"},{label:"oss",permalink:"/tags/oss"}],readingTime:1.34,truncated:!1,authors:[{name:"Shunsuke Suzuki",title:"SRE / OSS Contributor / Tool Maker / Go / Terraform",url:"https://github.com/suzuki-shunsuke",imageURL:"https://github.com/suzuki-shunsuke.png",key:"suzuki-shunsuke"}],frontMatter:{title:"2022-02 \u632f\u308a\u8fd4\u308a",date:"2022-03-14T05:16:55.000Z",authors:["suzuki-shunsuke"],tags:["job","oss"]},prevItem:{title:"2022-03 \u632f\u308a\u8fd4\u308a",permalink:"/what-i-did-2022-03"},nextItem:{title:"2021-11 \u3084\u3063\u305f\u3053\u3068",permalink:"/what-i-did-2021-11"}},c={authorsImageUrls:[void 0]},p=[{value:"\u307e\u3068\u3081",id:"\u307e\u3068\u3081",level:2},{value:"\u4ed5\u4e8b",id:"\u4ed5\u4e8b",level:2},{value:"Blog",id:"blog",level:2},{value:"OSS \u958b\u767a",id:"oss-\u958b\u767a",level:2}],m={toc:p};function f(e){var t=e.components,r=(0,a.Z)(e,o);return(0,u.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,u.kt)("h2",{id:"\u307e\u3068\u3081"},"\u307e\u3068\u3081"),(0,u.kt)("p",null,"aqua, aqua-registry, aqua-installer \u306e v1 \u3092\u30ea\u30ea\u30fc\u30b9\u3057\u307e\u3057\u305f\u3002\nv1 \u306b\u4f34\u3046\u5909\u66f4\u306f\u7279\u306b\u3042\u308a\u307e\u305b\u3093\u3002\naqua v1.1.0 \u3067\u306f ",(0,u.kt)("inlineCode",{parentName:"p"},"aqua g -i")," \u306b\u3088\u3063\u3066 aqua.yaml \u306b package \u3092\u8ffd\u52a0\u3067\u304d\u308b\u3088\u3046\u306b\u3057\u3001\u4f7f\u3044\u52dd\u624b\u3092\u826f\u304f\u3057\u307e\u3057\u305f\u3002\ntfaction \u306f\u7d50\u69cb\u8272\u3005\u6a5f\u80fd\u8ffd\u52a0\u3084\u30d0\u30b0\u4fee\u6b63\u304c\u5165\u3063\u3066\u307e\u3059\u3002\n\u4ed5\u4e8b\u3067\u306f\u30d6\u30ed\u30b0\u306b\u3082\u66f8\u3044\u305f\u3088\u3046\u306b Renovate \u306e\u5927\u91cf PR \u3092\u81ea\u52d5\u3067\u51e6\u7406\u3067\u304d\u308b\u3088\u3046\u306b\u6539\u5584\u3092\u884c\u3044\u307e\u3057\u305f\u3002"),(0,u.kt)("h2",{id:"\u4ed5\u4e8b"},"\u4ed5\u4e8b"),(0,u.kt)("ul",null,(0,u.kt)("li",{parentName:"ul"},"Terraform",(0,u.kt)("ul",{parentName:"li"},(0,u.kt)("li",{parentName:"ul"},"tfaction \u30d0\u30b0\u4fee\u6b63"),(0,u.kt)("li",{parentName:"ul"},"GITHUB_TOKEN rate limit \u5f15\u3063\u304b\u304b\u3063\u305f\u306e\u3067 GitHub App \u306e token \u306b\u7f6e\u304d\u63db\u3048"),(0,u.kt)("li",{parentName:"ul"},"CI \u3053\u3051\u305f renovate PR \u306e\u81ea\u52d5 close \u691c\u8a0e"),(0,u.kt)("li",{parentName:"ul"},"tfsec \u3084 AWS Provider v4 \u306e update \u5bfe\u5fdc\u3092\u3069\u3046\u3059\u308b\u304b\u691c\u8a0e\u3057\u305f\u308a\u3001\u5bfe\u5fdc\u3057\u305f\u308a\u3057\u3066\u305f"))),(0,u.kt)("li",{parentName:"ul"},"AWS Account \u5206\u5272")),(0,u.kt)("h2",{id:"blog"},"Blog"),(0,u.kt)("ul",null,(0,u.kt)("li",{parentName:"ul"},(0,u.kt)("a",{parentName:"li",href:"https://devs.quipper.com/2022/02/25/terraform-github-actions.html"},"Migrate Terraform CI from AWS CodeBuild to GitHub Actions")),(0,u.kt)("li",{parentName:"ul"},(0,u.kt)("a",{parentName:"li",href:"https://blog.studysapuri.jp/entry/2022/02/18/080000"},"Renovate \u306e\u5927\u91cf\u306e Pull Request \u3092\u51e6\u7406\u3059\u308b\u6280\u8853")),(0,u.kt)("li",{parentName:"ul"},(0,u.kt)("a",{parentName:"li",href:"https://blog.studysapuri.jp/entry/2022/02/04/080000"},"Terraform \u306e CI \u3092 AWS CodeBuild \u304b\u3089 GitHub Actions + tfaction \u306b\u79fb\u884c\u3057\u307e\u3057\u305f"))),(0,u.kt)("h2",{id:"oss-\u958b\u767a"},"OSS \u958b\u767a"),(0,u.kt)("ul",null,(0,u.kt)("li",{parentName:"ul"},"aqua v1.0.0 ~ v1.1.0"),(0,u.kt)("li",{parentName:"ul"},"aqua-registry v1.0.0 ~ v1.5.0"),(0,u.kt)("li",{parentName:"ul"},"aqua-installer v1.0.0"),(0,u.kt)("li",{parentName:"ul"},"tfaction v0.4.0 ~ v0.4.12"),(0,u.kt)("li",{parentName:"ul"},"New",(0,u.kt)("ul",{parentName:"li"},(0,u.kt)("li",{parentName:"ul"},(0,u.kt)("a",{parentName:"li",href:"https://github.com/suzuki-shunsuke/reenable-automerge-action"},"https://github.com/suzuki-shunsuke/reenable-automerge-action")),(0,u.kt)("li",{parentName:"ul"},(0,u.kt)("a",{parentName:"li",href:"https://github.com/suzuki-shunsuke/renovate-autoclose-action"},"https://github.com/suzuki-shunsuke/renovate-autoclose-action"))))))}f.isMDXComponent=!0}}]);