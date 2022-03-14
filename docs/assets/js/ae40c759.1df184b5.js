"use strict";(self.webpackChunktechblog_szksh_cloud_github_io=self.webpackChunktechblog_szksh_cloud_github_io||[]).push([[1018],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,o=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(n),m=l,k=d["".concat(u,".").concat(m)]||d[m]||s[m]||o;return n?r.createElement(k,a(a({ref:t},p),{},{components:n})):r.createElement(k,a({ref:t},p))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=n.length,a=new Array(o);a[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:l,a[1]=i;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4077:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return s}});var r=n(7462),l=n(3366),o=(n(7294),n(3905)),a=["components"],i={title:"AWS CodeBuild \u826f\u3055\u305d\u3046",date:new Date("2020-08-02T04:21:37.000Z"),tags:["aws","codebuild","ci"],authors:["suzuki-shunsuke"]},u=void 0,c={permalink:"/codebuild-1",source:"@site/blog/codebuild-1.md",title:"AWS CodeBuild \u826f\u3055\u305d\u3046",description:"AWS CodeBuild \u3092\u691c\u8a3c\u3057\u3066\u3044\u308b\u3093\u3067\u3059\u304c\u3001\u7d50\u69cb\u826f\u3044\u3067\u3059\u306d\u3002",date:"2020-08-02T04:21:37.000Z",formattedDate:"August 2, 2020",tags:[{label:"aws",permalink:"/tags/aws"},{label:"codebuild",permalink:"/tags/codebuild"},{label:"ci",permalink:"/tags/ci"}],readingTime:5.02,truncated:!1,authors:[{name:"Shunsuke Suzuki",title:"SRE / OSS Contributor / Tool Maker / Go / Terraform",url:"https://github.com/suzuki-shunsuke",imageURL:"https://github.com/suzuki-shunsuke.png",key:"suzuki-shunsuke"}],frontMatter:{title:"AWS CodeBuild \u826f\u3055\u305d\u3046",date:"2020-08-02T04:21:37.000Z",tags:["aws","codebuild","ci"],authors:["suzuki-shunsuke"]},prevItem:{title:"tfnotify \u306e parse error \u3092\u901a\u77e5\u3059\u308b",permalink:"/post-tfnotify-parse-error"},nextItem:{title:"github-comment - GitHub \u306b\u30b3\u30e1\u30f3\u30c8\u3092\u6295\u7a3f\u3059\u308b CLI",permalink:"/github-comment"}},p={authorsImageUrls:[void 0]},s=[{value:"\u5909\u66f4\u691c\u77e5\u306b\u3064\u3044\u3066",id:"\u5909\u66f4\u691c\u77e5\u306b\u3064\u3044\u3066",level:2},{value:"\u6c17\u306b\u306a\u308b\u70b9",id:"\u6c17\u306b\u306a\u308b\u70b9",level:2},{value:"\u304a\u307e\u3051: CodeBuild \u95a2\u9023\u306e\u30cb\u30e5\u30fc\u30b9",id:"\u304a\u307e\u3051-codebuild-\u95a2\u9023\u306e\u30cb\u30e5\u30fc\u30b9",level:2}],d={toc:s};function m(e){var t=e.components,n=(0,l.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"AWS CodeBuild \u3092\u691c\u8a3c\u3057\u3066\u3044\u308b\u3093\u3067\u3059\u304c\u3001\u7d50\u69cb\u826f\u3044\u3067\u3059\u306d\u3002\n\u73fe\u72b6 Jenkins \u3084 CircleCI \u3067\u5b9f\u884c\u3057\u3066\u3044\u308b\u30b8\u30e7\u30d6\u3084 CI/CD \u3092\u4e00\u90e8\u79fb\u884c\u3057\u305f\u3044\u306a\u3068\u601d\u3044\u307e\u3057\u305f\u3002"),(0,o.kt)("p",null,"\u4e00\u90e8\u3068\u8a00\u3063\u3066\u3044\u308b\u306e\u306f\u3001\u5358\u7d14\u306b\u5168\u90e8\u3044\u304d\u306a\u308a\u79fb\u884c\u3059\u308b\u306e\u306f\u96e3\u3057\u3044\u304b\u3089\u5171\u5b58\u3059\u308b\u524d\u63d0\u3067\u8003\u3048\u308b\u304f\u3089\u3044\u306e\u610f\u5473\u3067\u3059\u3002"),(0,o.kt)("p",null,"\u306a\u304a\u3001\u3053\u308c\u3092\u66f8\u3044\u3066\u3044\u308b\u6642\u70b9\u3067\u306f\u307e\u3060\u8efd\u304f\u691c\u8a3c\u3057\u3066\u3044\u308b\u3060\u3051\u306a\u306e\u3067\u3001CodeBuild \u306e\u7406\u89e3\u306f\u6d45\u3044\u3067\u3059\u3002"),(0,o.kt)("p",null,"\u7279\u5fb4\u3068\u3057\u3066\u306f"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Managed"),(0,o.kt)("li",{parentName:"ul"},"AWS \u4ee5\u5916\u306e\u30b5\u30fc\u30d3\u30b9\u306b AWS \u306e credential \u3092\u767b\u9332\u3057\u306a\u304f\u3066\u826f\u3044",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Secret \u3092 AWS Secrets Manager \u3067\u7ba1\u7406\u3067\u304d\u308b"),(0,o.kt)("li",{parentName:"ul"},"Secret \u3092\u81f3\u308b\u3068\u3053\u308d\u306b\u8a2d\u5b9a\u3059\u308b\u306e\u3067\u306f\u306a\u304f\u3001 AWS Secrets Manager \u304b\u4f55\u304b\u3067\u4e00\u5143\u7ba1\u7406\u3059\u308b\u306e\u304c\u7406\u60f3"),(0,o.kt)("li",{parentName:"ul"},"Role \u4f5c\u3063\u3066 Build Project \u306e Service Role \u3068\u3057\u3066\u6307\u5b9a\u3059\u308b\u3060\u3051\u306a\u3089 credential \u3092\u6271\u3046\u5fc5\u8981\u304c\u306a\u304f\u3066\u697d\u3067\u5b89\u5fc3"))),(0,o.kt)("li",{parentName:"ul"},"VPC \u5185\u3067\u5b9f\u884c\u3067\u304d\u308b"),(0,o.kt)("li",{parentName:"ul"},"GitHub \u9023\u643a\u3082\u7c21\u5358",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Webhook \u306e\u8a2d\u5b9a\u3067 PR \u306e\u7d30\u304b\u306a\u30a4\u30d9\u30f3\u30c8(merge \u3068\u304b reopen \u3068\u304b)\u306b\u5bfe\u5fdc\u3057\u3066\u3044\u308b\u306e\u3082\u826f\u3044"),(0,o.kt)("li",{parentName:"ul"},"PR \u3092 merge \u3057\u305f\u3068\u304d\u3082 PR \u3067\u5909\u66f4\u3055\u308c\u305f\u30d5\u30a1\u30a4\u30eb\u306b\u3088\u3063\u3066 Webhook \u3092\u30d5\u30a3\u30eb\u30bf\u3067\u304d\u308b\u306e\u304c\u826f\u3044"))),(0,o.kt)("li",{parentName:"ul"},"\u5909\u66f4\u3055\u308c\u305f\u30d5\u30a1\u30a4\u30eb\u306b\u3088\u3063\u3066\u5b9f\u884c\u3059\u308bBuild Project \u3092\u5909\u66f4\u3059\u308b\u3088\u3046\u306a\u30ed\u30b8\u30c3\u30af\u3092\u5b9f\u73fe\u3067\u304d\u308b(monorepo \u3067\u7279\u306b\u6709\u52b9)")),(0,o.kt)("p",null,"\u3068\u3044\u3063\u305f\u70b9\u304c\u6319\u3052\u3089\u308c\u307e\u3059\u3002"),(0,o.kt)("h2",{id:"\u5909\u66f4\u691c\u77e5\u306b\u3064\u3044\u3066"},"\u5909\u66f4\u691c\u77e5\u306b\u3064\u3044\u3066"),(0,o.kt)("p",null,"\u4e0a\u8a18\u306e\u7279\u5fb4\u306b\u3064\u3044\u3066\u306f\u3060\u3044\u305f\u3044\u300c\u307e\u3041\u305d\u3046\u3060\u306d\u300d\u3068\u3044\u3046\u3075\u3046\u306b\u601d\u3063\u3066\u3082\u3089\u3048\u308b\u306e\u3067\u306f\u306a\u3044\u304b\u3068\u601d\u3044\u307e\u3059\u304c\u3001\u5909\u66f4\u691c\u77e5\u306e\u90e8\u5206\u306b\u3064\u3044\u3066\u88dc\u8db3\u3057\u307e\u3059\u3002\nmonorepo \u3092\u3084\u3063\u3066\u3044\u308b\u3068\u30b5\u30fc\u30d3\u30b9 A \u95a2\u9023\u306e\u30b8\u30e7\u30d6\u306f\u30b5\u30fc\u30d3\u30b9 A \u95a2\u9023\u306e\u30b3\u30fc\u30c9\u304c\u5909\u66f4\u3055\u308c\u305f\u5834\u5408\u306e\u307f\u5b9f\u884c\u3057\u305f\u3044\u3068\u3044\u3046\u306e\u304c\u3042\u308a\u307e\u3059\u3002\n\u306a\u306e\u3067\u3059\u304c\u3001 CircleCI \u3060\u3068\u81ea\u5206\u306e\u77e5\u308b\u9650\u308a\u305d\u308c\u306f\u3067\u304d\u307e\u305b\u3093\u3002"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://circleci.com/docs/2.0/configuration-reference/"},"https://circleci.com/docs/2.0/configuration-reference/")),(0,o.kt)("p",null,"\u306a\u306e\u3067\u73fe\u72b6 Job \u3092\u5b9f\u884c\u3057\u3066\u304b\u3089\u30b5\u30fc\u30d3\u30b9 A \u95a2\u9023\u306e\u30b3\u30fc\u30c9\u304c\u5909\u66f4\u3055\u308c\u3066\u3044\u308b\u304b\u30c1\u30a7\u30c3\u30af\u3057\u3001\u5909\u66f4\u3055\u308c\u3066\u3044\u306a\u304b\u3063\u305f\u3089 skip \u306a\u3044\u3057\n",(0,o.kt)("inlineCode",{parentName:"p"},"circleci step halt")," \u3067 Job \u3092\u7d42\u4e86\u3057\u3066\u3044\u307e\u3059\u3002\n\u305f\u3060\u3001\u5dee\u5206\u691c\u77e5\u306e\u90e8\u5206\u3092\u81ea\u5206\u3067\u5b9f\u88c5\u3057\u306a\u3044\u3068\u3044\u3051\u306a\u3044\u3057\u3001 ",(0,o.kt)("inlineCode",{parentName:"p"},"circleci step halt")," \u3067\u7d42\u4e86\u3059\u308b\u306b\u3057\u3066\u3082 Job \u306e\u8d77\u52d5\u81ea\u4f53\u306b\u305d\u3053\u305d\u3053\u6642\u9593\u304c\u304b\u304b\u3063\u305f\u308a\u3059\u308b\u3057(\u3053\u308c\u3060\u3051\u3067\u3082\u91d1\u92ad\u7684\u30b3\u30b9\u30c8\u304c\u304b\u304b\u3063\u3066\u3044\u308b\u306f\u305a)\u3001 Job \u306e\u5b9f\u884c\u6642\u9593\u3084 error rate \u306e\u30e2\u30cb\u30bf\u30ea\u30f3\u30b0\u3067\u3082\u30ce\u30a4\u30ba\u3068\u3057\u3066\u6df7\u3058\u3063\u3066\u304d\u3066\u3057\u307e\u3044\u307e\u3059\u3002"),(0,o.kt)("p",null,"CodeBuild \u306e\u5834\u5408\u30011\u3064\u306e\u30ea\u30dd\u30b8\u30c8\u30ea\u306b\u8907\u6570\u306e Build Project \u3092\u8a2d\u5b9a\u3067\u304d\u3001 Build Project \u3054\u3068\u306b buildspec \u3092\u6307\u5b9a\u3067\u304d\u307e\u3059\u3002\nBuild Project \u306e Webhook \u306e ",(0,o.kt)("inlineCode",{parentName:"p"},"FILE_PATH")," \u306e\u8a2d\u5b9a\u3067\u7279\u5b9a\u306e\u30d5\u30a1\u30a4\u30eb\u304c\u5909\u66f4\u3055\u308c\u305f\u5834\u5408\u306e\u307f\u30d3\u30eb\u30c9\u3092\u5b9f\u884c\u3059\u308b\u3053\u3068\u3082\u3067\u304d\u307e\u3059\u3002\n\u306a\u306e\u3067\u30b5\u30fc\u30d3\u30b9 A \u7528\u306e build spec \u53ca\u3073 Build Project \u3092\u4f5c\u6210\u3057\u3001\u30b5\u30fc\u30d3\u30b9 A \u306e\u30b3\u30fc\u30c9\u304c\u5909\u66f4\u3055\u308c\u305f\u3068\u304d\u306e\u307f\u305d\u306e Build Project \u304c\u5b9f\u884c\u3055\u308c\u308b\u3088\u3046\u306b Webhook \u3092\u8a2d\u5b9a\u3059\u308c\u3070\u826f\u3055\u305d\u3046\u3067\u3059\u3002"),(0,o.kt)("h2",{id:"\u6c17\u306b\u306a\u308b\u70b9"},"\u6c17\u306b\u306a\u308b\u70b9"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"FILE_PATH")," \u3067 1 \u500b\u306e\u6b63\u898f\u8868\u73fe\u3057\u304b\u8a2d\u5b9a\u3067\u304d\u306a\u3044\u306e\u3067\u3001\u5834\u5408\u306b\u3088\u3063\u3066\u306f\u8907\u96d1\u306a\u6b63\u898f\u8868\u73fe\u3092\u66f8\u304b\u306a\u3044\u3068\u3044\u3051\u306a\u3044"),(0,o.kt)("li",{parentName:"ul"},"Terraform \u3067\u7ba1\u7406\u3059\u308b\u306e\u304c\u7d50\u69cb\u9762\u5012\u304f\u3055\u3044",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"\u3044\u3044\u611f\u3058\u306b\u30e2\u30b8\u30e5\u30fc\u30eb\u5316\u3068\u304b\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u5316\u3057\u306a\u3044\u3068\u3060\u3081\u304b\u3082"))),(0,o.kt)("li",{parentName:"ul"},"Pull Request \u306e\u30e9\u30d9\u30eb\u304c\u3064\u3044\u3066\u3044\u305f\u3089\u3053\u306e\u30b8\u30e7\u30d6\u3092\u5b9f\u884c\u3059\u308b\u3001\u307f\u305f\u3044\u306a\u8907\u96d1\u306a\u3053\u3068\u306f\u4e00\u5de5\u592b\u5fc5\u8981\u304b\u3082",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Webhook \u306e\u8a2d\u5b9a\u3060\u3068\u7121\u7406\u306a\u306e\u3067\u3001 build \u306f\u5b9f\u884c\u3057\u3064\u3064\u30e9\u30d9\u30eb\u304c\u8a2d\u5b9a\u3055\u308c\u3066\u3044\u306a\u304b\u3063\u305f\u3089 skip \u3068\u304b\u3057\u306a\u3044\u3068\u3044\u3051\u306a\u3044")))),(0,o.kt)("h2",{id:"\u304a\u307e\u3051-codebuild-\u95a2\u9023\u306e\u30cb\u30e5\u30fc\u30b9"},"\u304a\u307e\u3051: CodeBuild \u95a2\u9023\u306e\u30cb\u30e5\u30fc\u30b9"),(0,o.kt)("p",null,"\u4ee5\u524d\u691c\u8a3c\u3057\u305f\u3068\u304d\u3088\u308a\u826f\u304f\u306a\u3063\u3066\u308b\u6c17\u304c\u3059\u308b\u306a\u3068\u601d\u3063\u3066\u66f4\u65b0\u3092\u30c1\u30a7\u30c3\u30af\u3057\u305f\u3089\u3084\u3063\u3071\u8272\u3005\u66f4\u65b0\u304c\u3042\u308b\u307f\u305f\u3044\u3067\u3059\u306d\u3002"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://aws.amazon.com/jp/new/?whats-new-content-all.sort-by=item.additionalFields.postDateTime&whats-new-content-all.sort-order=desc&awsf.whats-new-developer-tools=general-products%23aws-codebuild"},"https://aws.amazon.com/jp/new/?whats-new-content-all.sort-by=item.additionalFields.postDateTime&whats-new-content-all.sort-order=desc&awsf.whats-new-developer-tools=general-products%23aws-codebuild")))}m.isMDXComponent=!0}}]);