"use strict";(self.webpackChunktechblog_szksh_cloud_github_io=self.webpackChunktechblog_szksh_cloud_github_io||[]).push([[3453],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},u=Object.keys(e);for(r=0;r<u.length;r++)n=u[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(r=0;r<u.length;r++)n=u[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var a=r.createContext({}),p=function(e){var t=r.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(a.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,u=e.originalType,a=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),f=p(n),m=l,k=f["".concat(a,".").concat(m)]||f[m]||c[m]||u;return n?r.createElement(k,i(i({ref:t},s),{},{components:n})):r.createElement(k,i({ref:t},s))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var u=n.length,i=new Array(u);i[0]=f;var o={};for(var a in t)hasOwnProperty.call(t,a)&&(o[a]=t[a]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var p=2;p<u;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},1508:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return a},default:function(){return m},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return c}});var r=n(7462),l=n(3366),u=(n(7294),n(3905)),i=["components"],o={title:"buildflow \u304c\u81ea\u52d5\u3067\u53d6\u5f97\u3059\u308b Pull Request \u306e\u60c5\u5831",date:new Date("2020-10-17T23:13:48.000Z"),tags:["oss","buildflow"],authors:["suzuki-shunsuke"]},a=void 0,p={permalink:"/buildflow-pr-info",source:"@site/blog/buildflow-pr-info.md",title:"buildflow \u304c\u81ea\u52d5\u3067\u53d6\u5f97\u3059\u308b Pull Request \u306e\u60c5\u5831",description:"buildflow \u3068\u3044\u3046\u30c4\u30fc\u30eb\u3092\u958b\u767a\u3057\u3066\u3044\u308b\u306e\u3067 buildflow \u3068\u3044\u3046\u30bf\u30b0\u3092\u3064\u3051\u3066\u4f55\u56de\u304b\u306b\u5206\u3051\u3066\u30d6\u30ed\u30b0\u3092\u66f8\u304d\u307e\u3059\u3002",date:"2020-10-17T23:13:48.000Z",formattedDate:"October 17, 2020",tags:[{label:"oss",permalink:"/tags/oss"},{label:"buildflow",permalink:"/tags/buildflow"}],readingTime:3.6,truncated:!1,authors:[{name:"Shunsuke Suzuki",title:"Platform Engineer / OSS Developer / Go / Terraform",url:"https://github.com/suzuki-shunsuke",imageURL:"https://github.com/suzuki-shunsuke.png",key:"suzuki-shunsuke"}],frontMatter:{title:"buildflow \u304c\u81ea\u52d5\u3067\u53d6\u5f97\u3059\u308b Pull Request \u306e\u60c5\u5831",date:"2020-10-17T23:13:48.000Z",tags:["oss","buildflow"],authors:["suzuki-shunsuke"]},prevItem:{title:"buildflow \u306e\u5b9f\u884c\u7d50\u679c\u306e\u51fa\u529b\u5f62\u5f0f",permalink:"/buildflow-result-output"},nextItem:{title:"buildflow \u3067\u306f\u306a\u305c Tengo \u3092\u63a1\u7528\u3057\u3066\u3044\u308b\u306e\u304b",permalink:"/buildflow-why-tengo"}},s={authorsImageUrls:[void 0]},c=[{value:"\u53d6\u5f97\u3055\u308c\u308b\u60c5\u5831",id:"\u53d6\u5f97\u3055\u308c\u308b\u60c5\u5831",level:2},{value:"\u81ea\u52d5\u53d6\u5f97\u306e\u4ed5\u7d44\u307f",id:"\u81ea\u52d5\u53d6\u5f97\u306e\u4ed5\u7d44\u307f",level:2}],f={toc:c};function m(e){var t=e.components,n=(0,l.Z)(e,i);return(0,u.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,u.kt)("p",null,"buildflow \u3068\u3044\u3046\u30c4\u30fc\u30eb\u3092\u958b\u767a\u3057\u3066\u3044\u308b\u306e\u3067 ",(0,u.kt)("inlineCode",{parentName:"p"},"buildflow")," \u3068\u3044\u3046\u30bf\u30b0\u3092\u3064\u3051\u3066\u4f55\u56de\u304b\u306b\u5206\u3051\u3066\u30d6\u30ed\u30b0\u3092\u66f8\u304d\u307e\u3059\u3002"),(0,u.kt)("p",null,"\u3053\u306e\u8a18\u4e8b\u3067\u306f buildflow \u304c\u81ea\u52d5\u3067 Pull Request (\u4ee5\u4e0b PR) \u306e\u60c5\u5831\u3092\u53d6\u5f97\u3057\u3066\u304f\u308b\u6a5f\u80fd\u306b\u3064\u3044\u3066\u8aac\u660e\u3057\u307e\u3059\u3002"),(0,u.kt)("p",null,"\u3053\u306e\u6a5f\u80fd\u306f GitHub \u306e\u307f\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u3059\u3002 GitLab \u3084 BitBucket \u306f\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u305b\u3093\u3002\n\u3053\u308c\u306f\u5358\u7d14\u306b\u81ea\u5206\u304c GitHub \u3057\u304b\u4f7f\u308f\u306a\u3044\u304b\u3089\u3067\u3059\u3002"),(0,u.kt)("p",null,"PR \u306e CI \u3067\u306f"),(0,u.kt)("ul",null,(0,u.kt)("li",{parentName:"ul"},"\u5909\u66f4\u3055\u308c\u305f\u3082\u306e\u3060\u3051\u30c6\u30b9\u30c8\u3059\u308b"),(0,u.kt)("li",{parentName:"ul"},"\u7279\u5b9a\u306e PR \u30e9\u30d9\u30eb\u304c\u3064\u3044\u3066\u3044\u305f\u3089\u5b9f\u884c\u3059\u308b"),(0,u.kt)("li",{parentName:"ul"},"\u7279\u5b9a\u306e\u30e6\u30fc\u30b6\u30fc\u306e PR \u3060\u3051\u51e6\u7406\u3092\u5909\u3048\u308b(bot \u3068\u304b)")),(0,u.kt)("p",null,"\u306e\u3088\u3046\u306b PR \u306e\u60c5\u5831\u306b\u57fa\u3065\u3044\u3066\u6319\u52d5\u3092\u5909\u3048\u305f\u304f\u306a\u3063\u305f\u308a\u3057\u307e\u3059\u3002"),(0,u.kt)("p",null,"\u30b7\u30a7\u30eb\u30b9\u30af\u30ea\u30d7\u30c8\u3067 GitHub API \u53e9\u3044\u3066\u60c5\u5831\u3068\u3063\u3066\u304d\u3066 jq \u3067\u30d1\u30fc\u30b9\u3057\u3066\u3068\u304b\u3001\u9811\u5f35\u308c\u3070\u5225\u306b\u3067\u304d\u308b\u3093\u3067\u3059\u304c\u3001\n\u6bce\u56de\u305d\u3046\u3044\u3046\u30b3\u30fc\u30c9\u3092\u66f8\u304d\u305f\u304f\u306a\u3044\u306a\u3068\u611f\u3058\u3066\u3044\u307e\u3057\u305f\u3002"),(0,u.kt)("p",null,"\u306a\u304a\u3001 PR \u306e\u60c5\u5831\u3092\u3068\u3063\u3066\u304f\u308b\u6a5f\u80fd\u306f\u30c7\u30d5\u30a9\u30eb\u30c8\u3067\u7121\u52b9\u5316\u3055\u308c\u3066\u3044\u307e\u3059(GitHub Access Token \u5fc5\u8981\u3067\u3059\u3057\u306d)\u3002\n\u8a2d\u5b9a\u3067 ",(0,u.kt)("inlineCode",{parentName:"p"},"pr: true")," \u3092\u6307\u5b9a\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,u.kt)("p",null,"PR \u306e\u60c5\u5831\u3092\u3068\u3063\u3066\u304f\u308b\u306b\u306f\u3001\u4ee5\u4e0b\u306e\u60c5\u5831\u304c\u5fc5\u8981\u3067\u3059\u3002"),(0,u.kt)("ul",null,(0,u.kt)("li",{parentName:"ul"},"repository owner: \u8a2d\u5b9a\u30d5\u30a1\u30a4\u30eb\u3067 ",(0,u.kt)("inlineCode",{parentName:"li"},"owner")," \u3092\u8a2d\u5b9a\u3059\u308b\u304b\u3001\u81ea\u52d5\u53d6\u5f97\u3002 ",(0,u.kt)("inlineCode",{parentName:"li"},"owner")," \u3092\u8a2d\u5b9a\u3057\u3066\u3042\u308b\u5834\u5408\u306f\u305d\u3061\u3089\u304c\u512a\u5148\u3055\u308c\u308b"),(0,u.kt)("li",{parentName:"ul"},"repository name: \u8a2d\u5b9a\u30d5\u30a1\u30a4\u30eb\u3067 ",(0,u.kt)("inlineCode",{parentName:"li"},"repo")," \u3092\u8a2d\u5b9a\u3059\u308b\u304b\u3001\u81ea\u52d5\u53d6\u5f97\u3002 ",(0,u.kt)("inlineCode",{parentName:"li"},"repo")," \u3092\u8a2d\u5b9a\u3057\u3066\u3042\u308b\u5834\u5408\u306f\u305d\u3061\u3089\u304c\u512a\u5148\u3055\u308c\u308b"),(0,u.kt)("li",{parentName:"ul"},"pull request number: \u81ea\u52d5\u53d6\u5f97"),(0,u.kt)("li",{parentName:"ul"},"GitHub Access Token: \u74b0\u5883\u5909\u6570 ",(0,u.kt)("inlineCode",{parentName:"li"},"GITHUB_TOKEN")," \u307e\u305f\u306f ",(0,u.kt)("inlineCode",{parentName:"li"},"GITHUB_ACCESS_TOKEN")," \u3092\u6307\u5b9a\u3057\u3066\u304f\u3060\u3055\u3044")),(0,u.kt)("h2",{id:"\u53d6\u5f97\u3055\u308c\u308b\u60c5\u5831"},"\u53d6\u5f97\u3055\u308c\u308b\u60c5\u5831"),(0,u.kt)("p",null,"\u4ee5\u4e0b\u306e\u30d1\u30e9\u30e1\u30fc\u30bf\u304c\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u3084 Tengo script \u306b\u6e21\u3055\u308c\u307e\u3059\u3002"),(0,u.kt)("ul",null,(0,u.kt)("li",{parentName:"ul"},"PR: PR \u306e\u60c5\u5831: ",(0,u.kt)("a",{parentName:"li",href:"https://docs.github.com/en/free-pro-team@latest/rest/reference/pulls#get-a-pull-request"},"GitHub API")," \u306e\u30ec\u30b9\u30dd\u30f3\u30b9 body"),(0,u.kt)("li",{parentName:"ul"},"Files: PR \u3067\u66f4\u65b0\u3055\u308c\u305f\u30d5\u30a1\u30a4\u30eb\u306e\u4e00\u89a7: ",(0,u.kt)("a",{parentName:"li",href:"https://docs.github.com/en/free-pro-team@latest/rest/reference/pulls#list-pull-requests-files"},"GitHub API")," \u306e\u30ec\u30b9\u30dd\u30f3\u30b9 body")),(0,u.kt)("p",null,"Files \u306b\u95a2\u3057\u3066\u306f\u30da\u30fc\u30b8\u30cd\u30fc\u30b7\u30e7\u30f3\u3055\u308c\u3066\u3044\u3066\u3082\u5168\u3066\u306e\u30d5\u30a1\u30a4\u30eb\u304c\u53d6\u5f97\u3067\u304d\u308b\u307e\u3067\u7e70\u308a\u8fd4\u3057 API \u3092\u53e9\u3044\u3066\u3044\u307e\u3059\u3002"),(0,u.kt)("h2",{id:"\u81ea\u52d5\u53d6\u5f97\u306e\u4ed5\u7d44\u307f"},"\u81ea\u52d5\u53d6\u5f97\u306e\u4ed5\u7d44\u307f"),(0,u.kt)("p",null,"\u5404\u7a2e CI \u30b5\u30fc\u30d3\u30b9\u306e\u7d44\u307f\u8fbc\u307f\u306e\u74b0\u5883\u5909\u6570\u304b\u3089\u305d\u308c\u3089\u306e\u60c5\u5831\u3092\u81ea\u52d5\u3067\u53d6\u5f97\u3057\u3066\u304f\u308c\u307e\u3059\u3002"),(0,u.kt)("p",null,"\u5185\u90e8\u7684\u306b\u306f go-ci-env \u3092\u4f7f\u3063\u3066\u3044\u308b\u306e\u3067\u3001 PR \u60c5\u5831\u306e\u81ea\u52d5\u53d6\u5f97\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u308b CI \u30b5\u30fc\u30d3\u30b9\u306f\u4ee5\u4e0b\u306e\u3068\u304a\u308a\u3067\u3059\u3002"),(0,u.kt)("p",null,(0,u.kt)("a",{parentName:"p",href:"https://github.com/suzuki-shunsuke/go-ci-env#supported-ci-services"},"https://github.com/suzuki-shunsuke/go-ci-env#supported-ci-services")),(0,u.kt)("p",null,"PR \u756a\u53f7\u304c\u74b0\u5883\u5909\u6570\u304b\u3089\u53d6\u5f97\u3067\u304d\u306a\u3044\u5834\u5408\u3001 revision \u304b\u3089\u95a2\u9023\u3059\u308b PR \u306e\u30ea\u30b9\u30c8\u3092\u53d6\u5f97\u3057\u3001\u4e00\u756a\u6700\u521d\u306e PR \u3068\u307f\u306a\u3057\u307e\u3059\u3002\n\u3053\u308c\u306f PR \u306e\u30de\u30fc\u30b8\u30b3\u30df\u30c3\u30c8\u306e CI \u3067\u306f\u30de\u30fc\u30b8\u3055\u308c\u305f PR \u306e\u60c5\u5831\u3092\u53d6\u5f97\u3059\u308b\u3053\u3068\u3092\u610f\u56f3\u3057\u3066\u3044\u307e\u3059\u3002"),(0,u.kt)("p",null,"\u95a2\u9023\u3059\u308b PR \u304c\u5b58\u5728\u3057\u306a\u3044\u5834\u5408\u306f\u53d6\u5f97\u3055\u308c\u308b\u30d1\u30e9\u30e1\u30fc\u30bf\u304c ",(0,u.kt)("inlineCode",{parentName:"p"},"nil")," \u306b\u306a\u308b\u3060\u3051\u3067\u3001 buildflow \u306f\u7570\u5e38\u7d42\u4e86\u3057\u305f\u308a\u305b\u305a\u306b\u51e6\u7406\u3092\u7d9a\u884c\u3057\u307e\u3059\u3002"))}m.isMDXComponent=!0}}]);