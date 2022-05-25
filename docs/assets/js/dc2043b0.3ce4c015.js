"use strict";(self.webpackChunktechblog_szksh_cloud_github_io=self.webpackChunktechblog_szksh_cloud_github_io||[]).push([[6214],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return k}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),c=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),m=c(n),k=a,f=m["".concat(o,".").concat(k)]||m[k]||s[k]||l;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=m;var u={};for(var o in t)hasOwnProperty.call(t,o)&&(u[o]=t[o]);u.originalType=e,u.mdxType="string"==typeof e?e:a,i[1]=u;for(var c=2;c<l;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8549:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return o},default:function(){return k},frontMatter:function(){return u},metadata:function(){return c},toc:function(){return s}});var r=n(7462),a=n(3366),l=(n(7294),n(3905)),i=["components"],u={title:"github-ci-monitor: CI \u306e\u30b9\u30c6\u30fc\u30bf\u30b9\u3092 DataDog \u3067\u76e3\u8996",date:new Date("2020-11-01T08:51:44.000Z"),tags:["oss"],authors:["suzuki-shunsuke"]},o=void 0,c={permalink:"/github-ci-monitor",source:"@site/blog/github-ci-monitor.md",title:"github-ci-monitor: CI \u306e\u30b9\u30c6\u30fc\u30bf\u30b9\u3092 DataDog \u3067\u76e3\u8996",description:"\u81ea\u4f5c\u306e OSS github-ci-monitor \u306e\u7d39\u4ecb\u3067\u3059\u3002",date:"2020-11-01T08:51:44.000Z",formattedDate:"November 1, 2020",tags:[{label:"oss",permalink:"/tags/oss"}],readingTime:6.615,truncated:!1,authors:[{name:"Shunsuke Suzuki",title:"SRE / OSS Contributor / Tool Maker / Go / Terraform",url:"https://github.com/suzuki-shunsuke",imageURL:"https://github.com/suzuki-shunsuke.png",key:"suzuki-shunsuke"}],frontMatter:{title:"github-ci-monitor: CI \u306e\u30b9\u30c6\u30fc\u30bf\u30b9\u3092 DataDog \u3067\u76e3\u8996",date:"2020-11-01T08:51:44.000Z",tags:["oss"],authors:["suzuki-shunsuke"]},prevItem:{title:"Splitting .circleci/config.yml",permalink:"/splitting-circleci-config"},nextItem:{title:"matchfile - \u5909\u66f4\u3055\u308c\u305f\u30d5\u30a1\u30a4\u30eb\u306e\u4e00\u89a7\u304b\u3089\u5fc5\u8981\u306a\u30bf\u30b9\u30af\u3092\u5c0e\u51fa\u3059\u308b\u305f\u3081\u306e CLI \u30c4\u30fc\u30eb",permalink:"/matchfile"}},p={authorsImageUrls:[void 0]},s=[{value:"Motivation",id:"motivation",level:2},{value:"\u4ed5\u7d44\u307f",id:"\u4ed5\u7d44\u307f",level:2},{value:"Lambda \u3067\u52d5\u304b\u3059\u5834\u5408\u306e\u30a2\u30fc\u30ad\u30c6\u30af\u30c1\u30e3",id:"lambda-\u3067\u52d5\u304b\u3059\u5834\u5408\u306e\u30a2\u30fc\u30ad\u30c6\u30af\u30c1\u30e3",level:2},{value:"\u5b9f\u88c5\u65b9\u91dd",id:"\u5b9f\u88c5\u65b9\u91dd",level:2}],m={toc:s};function k(e){var t=e.components,n=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u81ea\u4f5c\u306e OSS ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/suzuki-shunsuke/github-ci-monitor"},"github-ci-monitor")," \u306e\u7d39\u4ecb\u3067\u3059\u3002"),(0,l.kt)("p",null,"GitHub \u30ea\u30dd\u30b8\u30c8\u30ea\u306e CI \u306e\u30b9\u30c6\u30fc\u30bf\u30b9\u3092\u5b9a\u671f\u7684\u306b\u53d6\u5f97\u3057\u3001 DataDog \u306b\u9001\u308b\u3053\u3068\u3067\u3001 CI \u306e\u30b9\u30c6\u30fc\u30bf\u30b9\u3092\u76e3\u8996\u3059\u308b\u30c4\u30fc\u30eb\u3067\u3059\u3002\n\u73fe\u72b6\u306f AWS Lambda \u3067\u52d5\u304b\u3059\u3053\u3068\u3092\u60f3\u5b9a\u3057\u3066\u3044\u307e\u3059\u304c\u3001\u4ed6\u306e\u65b9\u6cd5\u3067\u3082\u52d5\u304b\u305b\u308b\u3088\u3046\u306b\u3059\u308b\u3064\u3082\u308a\u3067\u3059\u3002"),(0,l.kt)("h2",{id:"motivation"},"Motivation"),(0,l.kt)("p",null,"\u30e2\u30c1\u30d9\u30fc\u30b7\u30e7\u30f3\u306f\u3001 PR \u3092\u30de\u30fc\u30b8\u3057\u305f\u3042\u3068\u306b CI \u304c\u3053\u3051\u305f\u5834\u5408\u306b\u901a\u77e5\u304c\u6b32\u3057\u3044\u3068\u3044\u3046\u3082\u306e\u3067\u3059\u3002\n\u30de\u30fc\u30b8\u3057\u305f\u3042\u3068\u306b CI \u304c\u4e00\u77ac\u3067\u7d42\u308f\u308b\u306a\u3089\u7121\u4e8b\u7d42\u308f\u308b\u306e\u3092\u898b\u5c4a\u3051\u3066\u3082\u3044\u3044\u3093\u3067\u3059\u304c\u3001\n\u6570\u5206\u304b\u304b\u308b\u3068\u5f85\u3063\u3066\u308b\u306e\u3082\u6642\u9593\u304c\u3082\u3063\u305f\u3044\u306a\u3044\u3067\u3059\u3002\n\u3057\u3070\u3089\u304f\u3057\u305f\u3042\u3068\u306b\u7d50\u679c\u3092\u78ba\u8a8d\u3059\u308c\u3070\u3044\u3044\u3093\u3067\u3059\u304c\u3001\u305d\u308c\u3082\u9762\u5012\u304f\u3055\u3044\u3067\u3059\u3057\u3001\u666e\u901a\u306b\u5fd8\u308c\u307e\u3059\u3002\n\u305d\u3046\u3059\u308b\u3068\u30c7\u30d7\u30ed\u30a4\u3057\u305f\u3064\u3082\u308a\u304c\u5b9f\u306f CI \u304c\u3053\u3051\u3066\u305f\u306a\u3093\u3066\u3053\u3068\u304c\u666e\u901a\u306b\u3042\u308a\u307e\u3059\u3002"),(0,l.kt)("p",null,"\u305d\u3046\u3044\u3046\u3053\u3068\u306b\u3059\u3050\u6c17\u3065\u3051\u308b\u3088\u3046\u3001 Slack \u306b\u901a\u77e5\u304c\u307b\u3057\u3044\u3068\u601d\u3063\u3066\u3044\u307e\u3057\u305f\u3002"),(0,l.kt)("h2",{id:"\u4ed5\u7d44\u307f"},"\u4ed5\u7d44\u307f"),(0,l.kt)("p",null,"\u4ed5\u7d44\u307f\u306f\u5358\u7d14\u3067\u3059\u3002"),(0,l.kt)("p",null,"GitHub API \u3067\u5404\u30ea\u30dd\u30b8\u30c8\u30ea\u306e\u30b9\u30c6\u30fc\u30bf\u30b9\u3092\u53d6\u5f97\u3057\u3001 DataDog API \u3067\u30b9\u30c6\u30fc\u30bf\u30b9\u3092\u9001\u4fe1\u3057\u3066\u3044\u307e\u3059\u3002\nDataDog API \u306f ",(0,l.kt)("a",{parentName:"p",href:"https://docs.datadoghq.com/ja/api/v1/service-checks/"},"Service Check API")," \u3092\u4f7f\u3063\u3066\u3044\u307e\u3059\u3002\nstatus \u306f\u4ee5\u4e0b\u306e\u3088\u3046\u306b\u306a\u308a\u307e\u3059\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"0: \u6b63\u5e38"),(0,l.kt)("li",{parentName:"ul"},"1: \u7570\u5e38"),(0,l.kt)("li",{parentName:"ul"},"3: \u30b9\u30c6\u30fc\u30bf\u30b9\u306e\u53d6\u5f97\u306b\u5931\u6557")),(0,l.kt)("p",null,"\u307e\u305f\u4ee5\u4e0b\u306e tag \u304c\u4ed8\u304d\u307e\u3059\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"owner: \u30ea\u30dd\u30b8\u30c8\u30ea\u306e\u30aa\u30fc\u30ca\u30fc"),(0,l.kt)("li",{parentName:"ul"},"repo: \u30ea\u30dd\u30b8\u30c8\u30ea\u540d"),(0,l.kt)("li",{parentName:"ul"},"ref: \u30d6\u30e9\u30f3\u30c1\u540d")),(0,l.kt)("p",null,"\u5404\u30ea\u30dd\u30b8\u30c8\u30ea\u306e\u30b9\u30c6\u30fc\u30bf\u30b9\u306f\u73fe\u72b6 3 \u3064\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u3059\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Commit Status: ",(0,l.kt)("a",{parentName:"li",href:"https://docs.github.com/en/free-pro-team@latest/rest/reference/repos#get-the-combined-status-for-a-specific-reference"},"Get the combined status for a specific reference")),(0,l.kt)("li",{parentName:"ul"},"Check API:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Check Run: ",(0,l.kt)("a",{parentName:"li",href:"https://docs.github.com/en/free-pro-team@latest/rest/reference/checks#list-check-runs-for-a-git-reference"},"List check runs for a Git reference")),(0,l.kt)("li",{parentName:"ul"},"Check Suite: ",(0,l.kt)("a",{parentName:"li",href:"https://docs.github.com/en/free-pro-team@latest/rest/reference/checks#list-check-suites-for-a-git-reference"},"List check suites for a Git reference"))))),(0,l.kt)("p",null,"\u305d\u308c\u305e\u308c on/off \u3092\u8a2d\u5b9a\u3067\u304d\u3001\u8907\u6570\u6307\u5b9a\u3057\u305f\u5834\u5408\u306f\u3001\u3069\u308c\u304b 1 \u3064\u3067\u3082\u5931\u6557\u3057\u3066\u3044\u305f\u3089 status \u304c 1 \u306b\u306a\u308a\u307e\u3059\u3002"),(0,l.kt)("h2",{id:"lambda-\u3067\u52d5\u304b\u3059\u5834\u5408\u306e\u30a2\u30fc\u30ad\u30c6\u30af\u30c1\u30e3"},"Lambda \u3067\u52d5\u304b\u3059\u5834\u5408\u306e\u30a2\u30fc\u30ad\u30c6\u30af\u30c1\u30e3"),(0,l.kt)("p",null,"CloudWatch Events \u3067\u5b9a\u671f\u7684(5\u5206\u6bce\u3068\u304b)\u306b Lambda Function \u3092\u5b9f\u884c\u3057\u307e\u3059\u3002\n\u30ea\u30dd\u30b8\u30c8\u30ea\u306e\u30ea\u30b9\u30c8\u306a\u3069\u306e\u8a2d\u5b9a\u306f\u74b0\u5883\u5909\u6570\u3067\u6e21\u3057\u3001 GitHub Access Token \u306a\u3069\u306e\u30af\u30ec\u30c7\u30f3\u30b7\u30e3\u30eb\u306f AWS Secrets Manager \u7d4c\u7531\u3067\u6e21\u3057\u307e\u3059\u3002"),(0,l.kt)("h2",{id:"\u5b9f\u88c5\u65b9\u91dd"},"\u5b9f\u88c5\u65b9\u91dd"),(0,l.kt)("p",null,"CI \u304c\u3053\u3051\u305f\u3089\u901a\u77e5\u3057\u3066\u307b\u3057\u3044\u3068\u3044\u3046\u8981\u4ef6\u3092\u6e80\u305f\u3059\u65b9\u6cd5\u306f\u8272\u3005\u3042\u308b\u3068\u601d\u3044\u307e\u3059\u3002"),(0,l.kt)("p",null,"\u307e\u305a CI \u306e\u4e2d\u3067\u3053\u3051\u305f\u5834\u5408\u306b\u901a\u77e5\u3092\u98db\u3070\u3059\u3088\u3046\u306b\u3059\u308b\u3053\u3068\u304c\u8003\u3048\u3089\u308c\u307e\u3059\u3002\n\u4ee5\u4e0b\u306e\u3088\u3046\u306a\u30e1\u30ea\u30c3\u30c8\u304c\u3042\u308a\u307e\u3059(\u66f8\u3044\u3066\u307f\u305f\u3089\u7d50\u69cb\u3042\u308a\u307e\u3059\u306d)\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u30c4\u30fc\u30eb\u3092\u3069\u3063\u304b\u3067\u52d5\u304b\u3057\u305f\u308a\u30c4\u30fc\u30eb\u81ea\u4f53\u3092\u76e3\u8996\u3057\u305f\u308a\u3059\u308b\u5fc5\u8981\u304c\u306a\u3044"),(0,l.kt)("li",{parentName:"ul"},"\u3088\u308a\u8a73\u7d30\u306a\u30e1\u30c3\u30bb\u30fc\u30b8\u3092\u9001\u308c\u308b",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u30b3\u30de\u30f3\u30c9\u306e\u6a19\u6e96\u30a8\u30e9\u30fc\u51fa\u529b\u3092\u542b\u3081\u305f\u308a"),(0,l.kt)("li",{parentName:"ul"},"CI \u306e\u30ea\u30f3\u30af\u8cbc\u3063\u305f\u308a\u3001 PR \u306e author \u3092\u30e1\u30f3\u30b7\u30e7\u30f3\u3057\u305f\u308a\u3082\u3057\u3084\u3059\u3044"))),(0,l.kt)("li",{parentName:"ul"},"CI \u304c\u3053\u3051\u305f\u3089\u30ea\u30a2\u30eb\u30bf\u30a4\u30e0\u3067\u901a\u77e5\u3067\u304d\u308b"),(0,l.kt)("li",{parentName:"ul"},"\u30dd\u30fc\u30ea\u30f3\u30b0\u3068\u9055\u3044\u3001\u7121\u99c4\u306b API \u3092\u53e9\u304f\u5fc5\u8981\u304c\u306a\u3044")),(0,l.kt)("p",null,"\u4e00\u65b9\u3067\u3001\u3053\u308c\u3092\u6f0f\u308c\u306a\u304f\u5b9f\u88c5\u3059\u308b\u306e\u306f\u3051\u3063\u3053\u3046\u5927\u5909\u3060\u3068\u601d\u3044\u307e\u3059\u3002\n\u4f8b\u3048\u3070 CircleCI \u3060\u3068\u5168\u3066\u306e Job \u3067\u3061\u3083\u3093\u3068\u30cf\u30f3\u30c9\u30ea\u30f3\u30b0\u3057\u306a\u3044\u3068\u3044\u3051\u306a\u304b\u3063\u305f\u308a\u3059\u308b\u3068\u601d\u3044\u307e\u3059\u3002\n\u30ea\u30dd\u30b8\u30c8\u30ea\u304c 1 \u500b\u3060\u3051\u306a\u3089\u305d\u308c\u3067\u3082\u3044\u3044\u3067\u3059\u304c\u3001\u4f55\u5341\u500b\u3082\u3042\u308b\u3068\u306a\u308b\u3068\u3060\u3044\u3076\u5927\u5909\u3060\u3068\u601d\u3044\u307e\u3059\u3002"),(0,l.kt)("p",null,"\u4eca\u56de\u306e\u30c4\u30fc\u30eb\u306e\u3088\u3046\u306a\u65b9\u5f0f\u3060\u3068\u5bfe\u8c61\u306e\u30ea\u30dd\u30b8\u30c8\u30ea\u306e CI \u306b\u4e00\u5207\u624b\u3092\u52a0\u3048\u305a\u306b\u5b9f\u88c5\u3067\u304d\u308b\u306e\u304c\u5927\u304d\u3044\u3067\u3059\u3002"),(0,l.kt)("p",null,"\u307e\u305f\u3001 CI \u306e\u7d50\u679c\u3092\u53d6\u5f97\u3059\u308b API \u3068\u3057\u3066 CI \u30b5\u30fc\u30d3\u30b9\u304c\u63d0\u4f9b\u3059\u308b API \u3092\u4f7f\u3063\u3066\u53d6\u5f97\u3059\u308b\u3053\u3068\u3082\u8003\u3048\u3089\u308c\u307e\u3059\u3002\n\u3057\u304b\u3057\u3001 GitHub API \u3092\u4f7f\u3048\u3070 CI \u30b5\u30fc\u30d3\u30b9\u6bce\u306b\u5b9f\u88c5\u3057\u305f\u308a\u3059\u308b\u5fc5\u8981\u304c\u306a\u304f\u3066\u697d\u3067\u3059\u3002"),(0,l.kt)("p",null,"Slack API \u3092\u4f7f\u3063\u3066\u30e1\u30c3\u30bb\u30fc\u30b8\u3092\u6295\u7a3f\u3059\u308b\u3088\u3046\u306a\u3053\u3068\u3082\u4e00\u77ac\u8003\u3048\u307e\u3057\u305f\u304c\u3001 DataDog \u3092\u4f7f\u3046\u3053\u3068\u3067\u4ee5\u4e0b\u306e\u30e1\u30ea\u30c3\u30c8\u304c\u3042\u308a\u307e\u3059\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u9001\u4fe1\u5148\u3084\u30e1\u30c3\u30bb\u30fc\u30b8\u306e\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u3068\u304b\u3092\u30c4\u30fc\u30eb\u3067\u7ba1\u7406\u3057\u306a\u304f\u3066\u826f\u3044"),(0,l.kt)("li",{parentName:"ul"},"\u4f55\u5ea6\u3082\u30e1\u30c3\u30bb\u30fc\u30b8\u3092\u9001\u3089\u306a\u3044\u3088\u3046\u306b\u72b6\u614b\u3092 DB \u3067\u6301\u305f\u306a\u304f\u3066\u826f\u3044"),(0,l.kt)("li",{parentName:"ul"},"\u30a2\u30e9\u30fc\u30c8\u3092\u4e00\u6642\u7684\u306b\u6b62\u3081\u305f\u308a\u3059\u308b\u306e\u3082\u7c21\u5358")),(0,l.kt)("p",null,"\u307e\u305f\u3001\u6642\u9593\u8ef8\u3067\u3069\u308c\u3060\u3051 CI \u304c\u58ca\u308c\u305f\u72b6\u614b\u3060\u3063\u305f\u304b\u3001\u5fa9\u65e7\u3059\u308b\u306e\u306b\u3069\u306e\u304f\u3089\u3044\u6642\u9593\u304c\u304b\u304b\u3063\u305f\u304b\u5206\u304b\u308b\u306e\u3082\u306a\u306b\u304b\u306b\u4f7f\u3048\u308b\u304b\u3082\u3057\u308c\u307e\u305b\u3093\u3002"),(0,l.kt)("p",null,"\u4eca\u56de\u306e\u30c4\u30fc\u30eb\u306b\u9650\u3089\u305a\u3001 Slack \u306b\u76f4\u63a5\u901a\u77e5\u3059\u308b\u3088\u308a DataDog \u3084 Sentry \u3092\u7d4c\u7531\u3057\u305f\u307b\u3046\u304c\u4e0a\u624b\u304f\u3044\u304f\u3053\u3068\u3082\u7d50\u69cb\u3042\u308b\u3068\u601d\u3063\u3066\u3044\u307e\u3059\u3002"),(0,l.kt)("p",null,"\u307e\u305f\u3001\u5b9a\u671f\u5b9f\u884c\u3059\u308b\u65b9\u6cd5\u3068\u3057\u3066\u306f Lambda \u4ee5\u5916\u306b\u3082"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Jenkins"),(0,l.kt)("li",{parentName:"ul"},"\u9069\u5f53\u306a\u30b5\u30fc\u30d0\u3067 cron"),(0,l.kt)("li",{parentName:"ul"},"CI \u30b5\u30fc\u30d3\u30b9"),(0,l.kt)("li",{parentName:"ul"},"k8s \u306e CronJob"),(0,l.kt)("li",{parentName:"ul"},"k8s \u306e Deployment")),(0,l.kt)("p",null,"\u306a\u3069\u8272\u3005\u3042\u308b\u3068\u601d\u3044\u307e\u3059\u3002\u305d\u3046\u3044\u3046\u98a8\u306b\u3082\u5b9f\u884c\u3067\u304d\u308b\u3088\u3046\u306b\u30d0\u30a4\u30ca\u30ea\u3092\u4eca\u5f8c\u63d0\u4f9b\u3057\u305f\u3044\u3068\u601d\u3063\u3066\u3044\u307e\u3059\u3002\nLambda \u3092\u4f7f\u3046\u3068\u30a4\u30f3\u30d5\u30e9\u3092\u7ba1\u7406\u3057\u306a\u304f\u3066\u826f\u3044\u306e\u304c\u30e1\u30ea\u30c3\u30c8\u3060\u3068\u601d\u3044\u307e\u3059\u3002"),(0,l.kt)("p",null,"\u307e\u305f\u3001 DataDog API \u3067\u7d50\u679c\u3092\u9001\u308b push \u578b\u306e\u30a2\u30fc\u30ad\u30c6\u30af\u30c1\u30e3\u3068\u306f\u5225\u306b\u3001\nDataDog Agent + Prometheus Exporter \u306e pull \u578b\u3082\u3042\u308b\u3093\u3058\u3083\u306a\u3044\u304b\u306a\u3068\u601d\u3044\u307e\u3059\u3002\n\u305d\u3046\u3059\u308b\u3068\u30c4\u30fc\u30eb\u5074\u3067 DataDog API Key \u304c\u4e0d\u8981\u306b\u306a\u308b\u3068\u3044\u3046\u30e1\u30ea\u30c3\u30c8\u304c\u3042\u308a\u307e\u3059\u3002\n\u3053\u3061\u3089\u306e\u30d1\u30bf\u30fc\u30f3\u3082\u4eca\u5f8c\u5b9f\u88c5\u3057\u3066\u307f\u305f\u3044\u3068\u601d\u3044\u307e\u3059\u3002"))}k.isMDXComponent=!0}}]);