"use strict";(self.webpackChunktechblog_szksh_cloud_github_io=self.webpackChunktechblog_szksh_cloud_github_io||[]).push([[9148],{3905:function(t,e,l){l.d(e,{Zo:function(){return s},kt:function(){return k}});var n=l(7294);function u(t,e,l){return e in t?Object.defineProperty(t,e,{value:l,enumerable:!0,configurable:!0,writable:!0}):t[e]=l,t}function r(t,e){var l=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),l.push.apply(l,n)}return l}function o(t){for(var e=1;e<arguments.length;e++){var l=null!=arguments[e]?arguments[e]:{};e%2?r(Object(l),!0).forEach((function(e){u(t,e,l[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(l)):r(Object(l)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(l,e))}))}return t}function i(t,e){if(null==t)return{};var l,n,u=function(t,e){if(null==t)return{};var l,n,u={},r=Object.keys(t);for(n=0;n<r.length;n++)l=r[n],e.indexOf(l)>=0||(u[l]=t[l]);return u}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)l=r[n],e.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(t,l)&&(u[l]=t[l])}return u}var a=n.createContext({}),p=function(t){var e=n.useContext(a),l=e;return t&&(l="function"==typeof t?t(e):o(o({},e),t)),l},s=function(t){var e=p(t.components);return n.createElement(a.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},f=n.forwardRef((function(t,e){var l=t.components,u=t.mdxType,r=t.originalType,a=t.parentName,s=i(t,["components","mdxType","originalType","parentName"]),f=p(l),k=u,d=f["".concat(a,".").concat(k)]||f[k]||c[k]||r;return l?n.createElement(d,o(o({ref:e},s),{},{components:l})):n.createElement(d,o({ref:e},s))}));function k(t,e){var l=arguments,u=e&&e.mdxType;if("string"==typeof t||u){var r=l.length,o=new Array(r);o[0]=f;var i={};for(var a in e)hasOwnProperty.call(e,a)&&(i[a]=e[a]);i.originalType=t,i.mdxType="string"==typeof t?t:u,o[1]=i;for(var p=2;p<r;p++)o[p]=l[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,l)}f.displayName="MDXCreateElement"},2924:function(t,e,l){l.r(e),l.d(e,{assets:function(){return s},contentTitle:function(){return a},default:function(){return k},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return c}});var n=l(7462),u=l(3366),r=(l(7294),l(3905)),o=["components"],i={title:"\u306a\u305c buildflow \u3092\u4f5c\u3063\u305f\u306e\u304b",date:new Date("2020-10-18T00:53:08.000Z"),tags:["oss","buildflow"],authors:["suzuki-shunsuke"]},a=void 0,p={permalink:"/buildflow-goal",source:"@site/blog/buildflow-goal.md",title:"\u306a\u305c buildflow \u3092\u4f5c\u3063\u305f\u306e\u304b",description:"buildflow \u3068\u3044\u3046\u30c4\u30fc\u30eb\u3092\u958b\u767a\u3057\u3066\u3044\u308b\u306e\u3067 buildflow \u3068\u3044\u3046\u30bf\u30b0\u3092\u3064\u3051\u3066\u4f55\u56de\u304b\u306b\u5206\u3051\u3066\u30d6\u30ed\u30b0\u3092\u66f8\u304d\u307e\u3059\u3002",date:"2020-10-18T00:53:08.000Z",formattedDate:"October 18, 2020",tags:[{label:"oss",permalink:"/tags/oss"},{label:"buildflow",permalink:"/tags/buildflow"}],readingTime:10.655,truncated:!1,authors:[{name:"Shunsuke Suzuki",title:"Platform Engineer / OSS Developer / Go / Terraform",url:"https://github.com/suzuki-shunsuke",imageURL:"https://github.com/suzuki-shunsuke.png",key:"suzuki-shunsuke"}],frontMatter:{title:"\u306a\u305c buildflow \u3092\u4f5c\u3063\u305f\u306e\u304b",date:"2020-10-18T00:53:08.000Z",tags:["oss","buildflow"],authors:["suzuki-shunsuke"]},prevItem:{title:"matchfile - \u5909\u66f4\u3055\u308c\u305f\u30d5\u30a1\u30a4\u30eb\u306e\u4e00\u89a7\u304b\u3089\u5fc5\u8981\u306a\u30bf\u30b9\u30af\u3092\u5c0e\u51fa\u3059\u308b\u305f\u3081\u306e CLI \u30c4\u30fc\u30eb",permalink:"/matchfile"},nextItem:{title:"buildflow \u306e\u5b9f\u884c\u7d50\u679c\u306e\u51fa\u529b\u5f62\u5f0f",permalink:"/buildflow-result-output"}},s={authorsImageUrls:[void 0]},c=[{value:"\u89e3\u6c7a\u3057\u305f\u3044\u8ab2\u984c",id:"\u89e3\u6c7a\u3057\u305f\u3044\u8ab2\u984c",level:2},{value:"buildflow \u3067\u5fc5\u8981\u306a\u51e6\u7406\u3060\u3051\u3092\u5b9f\u884c\u3059\u308b",id:"buildflow-\u3067\u5fc5\u8981\u306a\u51e6\u7406\u3060\u3051\u3092\u5b9f\u884c\u3059\u308b",level:2},{value:"\u4e26\u5217\u51e6\u7406\u306b\u3088\u308b\u9ad8\u901f\u5316",id:"\u4e26\u5217\u51e6\u7406\u306b\u3088\u308b\u9ad8\u901f\u5316",level:2},{value:"\u30e1\u30f3\u30c6\u30ca\u30f3\u30b9\u6027",id:"\u30e1\u30f3\u30c6\u30ca\u30f3\u30b9\u6027",level:2},{value:"\u30ed\u30b8\u30c3\u30af\u3068\u30b3\u30de\u30f3\u30c9\u306e\u5206\u96e2",id:"\u30ed\u30b8\u30c3\u30af\u3068\u30b3\u30de\u30f3\u30c9\u306e\u5206\u96e2",level:2},{value:"\u307e\u3068\u3081",id:"\u307e\u3068\u3081",level:2}],f={toc:c};function k(t){var e=t.components,l=(0,u.Z)(t,o);return(0,r.kt)("wrapper",(0,n.Z)({},f,l,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"buildflow \u3068\u3044\u3046\u30c4\u30fc\u30eb\u3092\u958b\u767a\u3057\u3066\u3044\u308b\u306e\u3067 ",(0,r.kt)("inlineCode",{parentName:"p"},"buildflow")," \u3068\u3044\u3046\u30bf\u30b0\u3092\u3064\u3051\u3066\u4f55\u56de\u304b\u306b\u5206\u3051\u3066\u30d6\u30ed\u30b0\u3092\u66f8\u304d\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u3053\u306e\u8a18\u4e8b\u3067\u306f \u306a\u305c buildflow \u3092\u4f5c\u3063\u305f\u306e\u304b\u306b\u3064\u3044\u3066\u8aac\u660e\u3057\u307e\u3059\u3002\n\u958b\u767a\u8005\u3067\u3042\u308b\u81ea\u5206\u306e\u597d\u307f\u3084\u7f6e\u304b\u308c\u305f\u74b0\u5883\u306a\u3069\u304c\u6240\u3005\u306b\u53cd\u6620\u3055\u308c\u305f\u5185\u5bb9\u306b\u306a\u3063\u3066\u3044\u307e\u3059\u3002"),(0,r.kt)("h2",{id:"\u89e3\u6c7a\u3057\u305f\u3044\u8ab2\u984c"},"\u89e3\u6c7a\u3057\u305f\u3044\u8ab2\u984c"),(0,r.kt)("p",null,"\u81ea\u5206\u306f CI/CD \u306e DX \u306e\u6539\u5584\u306b\u696d\u52d9\u3068\u3057\u3066\u53d6\u308a\u7d44\u3093\u3067\u3044\u307e\u3059\u3002\n\u30ea\u30dd\u30b8\u30c8\u30ea\u306f\u305f\u304f\u3055\u3093\u3042\u308a\u3001\u6a2a\u65ad\u7684\u306b\u30e1\u30f3\u30c6\u30ca\u30f3\u30b9\u3057\u3066\u3044\u307e\u3059\u3002\n\u5e7e\u3064\u304b\u306e\u30ea\u30dd\u30b8\u30c8\u30ea\u306f\u30e2\u30ce\u30ec\u30dd\u306b\u306a\u3063\u3066\u304a\u308a\u3001 CI \u306e\u8907\u96d1\u3055\u304c\u5897\u3057\u3066\u3044\u305f\u308a\u3001 CI \u306e\u5b9f\u884c\u6642\u9593\u304c\u9577\u304b\u3063\u305f\u308a\u3057\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u73fe\u5728\u306e CI/CD \u306b\u306f\u4ee5\u4e0b\u306e\u3088\u3046\u306a\u554f\u984c\u304c\u3042\u308b\u3068\u611f\u3058\u3066\u3044\u307e\u3059(\u4ed6\u306b\u3082\u3042\u308b\u3093\u3067\u3059\u304c\u3001 buildflow \u3068\u95a2\u4fc2\u306a\u3044\u306e\u3067\u5272\u611b)\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5b9f\u884c\u6642\u9593\u304c\u9577\u3044",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"PR \u3068\u306f\u95a2\u4fc2\u306a\u3044\u51e6\u7406(test, build, etc) \u304c\u5b9f\u884c\u3055\u308c\u3066\u3044\u308b"))),(0,r.kt)("li",{parentName:"ul"},"\u91d1\u92ad\u7684\u306b\u9ad8\u3044",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u5b9f\u884c\u6642\u9593\u304c\u9577\u3044\u306e\u3067\u7121\u99c4\u306b\u304a\u91d1\u304c\u304b\u304b\u3063\u3066\u3044\u308b"),(0,r.kt)("li",{parentName:"ul"},"CI \u30b5\u30fc\u30d3\u30b9\u306b\u3088\u3063\u3066\u306f\u4e26\u5217\u5ea6\u3092\u4e0a\u3052\u308b\u3053\u3068\u3067\u5b9f\u884c\u6642\u9593\u304c\u7e2e\u3080\u5834\u5408\u304c\u3042\u308b\u304c\u3001\u305d\u308c\u3067\u3082\u305d\u306e\u5206\u304a\u91d1\u304c\u304b\u304b\u308b"))),(0,r.kt)("li",{parentName:"ul"},"PR \u3068\u306f\u76f4\u63a5\u95a2\u4fc2\u306a\u3044\u3068\u3053\u308d\u3067\u5931\u6557\u3059\u308b",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"PR \u3068\u306f\u95a2\u4fc2\u306a\u3044\u51e6\u7406(test, build, etc) \u304c\u5b9f\u884c\u3055\u308c\u3066\u3044\u3066\u3001\u305d\u308c\u3089\u304c flaky \u3067\u5931\u6557\u3059\u308b"))),(0,r.kt)("li",{parentName:"ul"},"\u30e1\u30f3\u30c6\u30ca\u30f3\u30b9\u6027\u304c\u60aa\u3044",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u5c5e\u4eba\u5316\u6c17\u5473"),(0,r.kt)("li",{parentName:"ul"},"\u4f55\u3092\u3084\u3063\u3066\u3044\u308b\u306e\u304b\u5206\u304b\u308a\u306b\u304f\u3044"))),(0,r.kt)("li",{parentName:"ul"},"\u540c\u3058\u3088\u3046\u306a\u6a5f\u80fd\u3092\u8907\u6570\u306e\u30ea\u30dd\u30b8\u30c8\u30ea\u3067\u5b9f\u88c5\u30fb\u30e1\u30f3\u30c6\u3057\u305f\u304f\u306a\u3044")),(0,r.kt)("p",null,"\u3053\u308c\u3089\u306e\u554f\u984c\u3092\u89e3\u6c7a\u3059\u308b\u305f\u3081\u306b buildflow \u3092\u958b\u767a\u3057\u307e\u3057\u305f\u3002"),(0,r.kt)("h2",{id:"buildflow-\u3067\u5fc5\u8981\u306a\u51e6\u7406\u3060\u3051\u3092\u5b9f\u884c\u3059\u308b"},"buildflow \u3067\u5fc5\u8981\u306a\u51e6\u7406\u3060\u3051\u3092\u5b9f\u884c\u3059\u308b"),(0,r.kt)("p",null,"buildflow \u3067\u306f PR \u306e\u60c5\u5831\u3092\u81ea\u52d5\u3067\u53d6\u5f97\u3057\u3001\u305d\u308c\u3089\u306b\u5fdc\u3058\u3066\u5b9f\u884c\u3059\u308b\u51e6\u7406\u3092\u5909\u66f4\u3067\u304d\u307e\u3059\u3002\n\u5909\u66f4\u3055\u308c\u305f\u30d5\u30a1\u30a4\u30eb\u306b\u5fdc\u3058\u3066\u3060\u3051\u3067\u306a\u304f\u3001 label \u3084 PR \u306e author \u306a\u3069\u3067\u3082\u5909\u66f4\u3067\u304d\u307e\u3059\u3002\nTengo script \u3092\u7528\u3044\u3066\u67d4\u8edf\u306a\u30ed\u30b8\u30c3\u30af\u3092\u5b9f\u88c5\u3067\u304d\u307e\u3059\u3002\nJSON \u3084 YAML \u306e\u8aad\u307f\u8fbc\u307f\u3082\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u308b\u306e\u3067\u3001\u4f9d\u5b58\u95a2\u4fc2\u306a\u3069\u306e\u8a2d\u5b9a\u3092\u5225\u30d5\u30a1\u30a4\u30eb\u3067\u7ba1\u7406\u3059\u308b\u3053\u3068\u3082\u51fa\u6765\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u4e00\u90e8\u306e CI \u30b5\u30fc\u30d3\u30b9\u306f\u3053\u308c\u3092\u89e3\u6c7a\u3059\u308b\u305f\u3081\u306e\u6a5f\u80fd\u3092\u63d0\u4f9b\u3057\u3066\u3044\u307e\u3059\u3002\nCodeBuild \u306f Webhook \u306e Filter \u3067\u7279\u5b9a\u306e\u30d5\u30a1\u30a4\u30eb\u304c\u5909\u66f4\u3055\u308c\u305f\u5834\u5408\u306e\u307f build \u3092\u5b9f\u884c\u3067\u304d\u307e\u3059\u3057\u3001\nGitHub Actions \u3067\u3082\u4f3c\u305f\u3088\u3046\u306a\u3053\u3068\u304c\u51fa\u6765\u307e\u3059\u3002 "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.github.com/ja/free-pro-team@latest/actions/reference/workflow-syntax-for-github-actions#onpushpull_requestpaths"},"https://docs.github.com/ja/free-pro-team@latest/actions/reference/workflow-syntax-for-github-actions#onpushpull_requestpaths"))),(0,r.kt)("p",null,"\u305d\u308c\u3089\u3067\u4e8b\u8db3\u308a\u308b\u306a\u3089\u305d\u308c\u3067\u3082\u826f\u3044\u3067\u3057\u3087\u3046\u3002\n\u305d\u308c\u3089\u3060\u3051\u3060\u3068\u96e3\u3057\u3044\u5834\u5408\u3001 buildflow \u3092\u4f7f\u3046\u3068\u3088\u308a\u67d4\u8edf\u306b\u5bfe\u5fdc\u3067\u304d\u308b\u304b\u3082\u3057\u308c\u307e\u305b\u3093\u3002"),(0,r.kt)("h2",{id:"\u4e26\u5217\u51e6\u7406\u306b\u3088\u308b\u9ad8\u901f\u5316"},"\u4e26\u5217\u51e6\u7406\u306b\u3088\u308b\u9ad8\u901f\u5316"),(0,r.kt)("p",null,"\u30b7\u30a7\u30eb\u30b9\u30af\u30ea\u30d7\u30c8\u3067 for loop \u306a\u3069\u3067\u51e6\u7406\u3057\u3066\u3044\u3066\u6642\u9593\u304c\u304b\u304b\u3063\u3066\u3044\u308b\u5834\u5408\u3001\nbuildflow \u3067\u4e26\u5217\u51e6\u7406\u3059\u308b\u3068\u9ad8\u901f\u5316\u3059\u308b\u304b\u3082\u3057\u308c\u307e\u305b\u3093\u3002"),(0,r.kt)("h2",{id:"\u30e1\u30f3\u30c6\u30ca\u30f3\u30b9\u6027"},"\u30e1\u30f3\u30c6\u30ca\u30f3\u30b9\u6027"),(0,r.kt)("p",null,"buildflow \u3092\u4f7f\u308f\u306a\u304f\u3066\u3082\u300c\u5fc5\u8981\u306a\u51e6\u7406\u3060\u3051\u3092\u5b9f\u884c\u300d\u3057\u305f\u308a\u300c\u4e26\u5217\u51e6\u7406\u3067\u9ad8\u901f\u5316\u300d\u3057\u305f\u308a\u306f\u3067\u304d\u308b\u3067\u3057\u3087\u3046\u3002\n\u305d\u308c\u3067\u3082 buildflow \u3092\u958b\u767a\u3057\u305f\u306e\u306f\u3001\u697d\u3092\u3059\u308b\u305f\u3081\u3001\u30e1\u30f3\u30c6\u30ca\u30f3\u30b9\u6027\u3092\u9ad8\u3081\u308b\u305f\u3081\u3067\u3059\u3002"),(0,r.kt)("p",null,"PR \u306e\u60c5\u5831\u306f\u3088\u304f\u5fc5\u8981\u306b\u306a\u308b\u306e\u3067\u81ea\u52d5\u3067\u53d6\u5f97\u3059\u308b\u3088\u3046\u306b\u3057\u3066\u3044\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u30b7\u30a7\u30eb\u30b9\u30af\u30ea\u30d7\u30c8\u3067\u8907\u96d1\u306a CI \u3092\u5b9f\u88c5\u3057\u3066\u3044\u308b\u3068\u3001\u30e1\u30f3\u30c6\u30ca\u30f3\u30b9\u6027\u304c\u60aa\u304f\u306a\u308a\u307e\u3059\u3002\n\u30c1\u30fc\u30e0\u30e1\u30f3\u30d0\u30fc\u306e\u30b7\u30a7\u30eb\u30b9\u30af\u30ea\u30d7\u30c8\u3078\u306e\u7fd2\u719f\u5ea6\u306b\u4f9d\u5b58\u3057\u307e\u3059\u304c\u3001\n\u30b7\u30a7\u30eb\u30b9\u30af\u30ea\u30d7\u30c8\u306f\u30a8\u30f3\u30b8\u30cb\u30a2\u306a\u3089\u8ab0\u3067\u3082\u66f8\u3051\u308b\u5206\u5168\u54e1\u304c\u7fd2\u719f\u3057\u3066\u3044\u308b\u3068\u306f\u9650\u308a\u307e\u305b\u3093\u3057\u3001\n\u5bb9\u6613\u306b\u30d0\u30b0\u304c\u751f\u307e\u308c\u307e\u3059\u3002\n\u30c1\u30fc\u30e0\u306b\u3088\u308a\u307e\u3059\u304c\u3001Python \u3084 Ruby, Go \u3068\u3044\u3063\u305f\u4ed6\u306e\u8a00\u8a9e\u3068\u6bd4\u3079\u3001 lint \u3084 test \u304c\u3055\u308c\u3066\u306a\u3044\u3053\u3068\u304c\u591a\u3044\u305b\u3044\u3082\u3042\u308b\u3068\u306f\u601d\u3044\u307e\u3059\u3002\n\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u30b3\u30fc\u30c9\u306f\u5f53\u7136 CI \u3067 test, lint \u3059\u308b\u306e\u306b\u3001\nCI \u3068\u304b\u306e\u30b7\u30a7\u30eb\u30b9\u30af\u30ea\u30d7\u30c8\u306f\u3057\u306a\u3044\u3068\u3044\u3046\u306e\u3082\u73cd\u3057\u304f\u306a\u3044\u3068\u601d\u3044\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u3042\u3068\u306f\u30b5\u30dd\u30fc\u30c8\u3055\u308c\u3066\u3044\u308b\u30c7\u30fc\u30bf\u69cb\u9020\u304c\u8ca7\u5f31\u3060\u3063\u305f\u308a\u3001\u95a2\u6570\u306e I/F \u304c\u308f\u304b\u308a\u306b\u304f\u304b\u3063\u305f\u308a\u3001\u30b0\u30b0\u308a\u306b\u304f\u3044\u6a5f\u80fd\u304c\u591a\u304b\u3063\u305f\u308a\u3001\n\u30b3\u30de\u30f3\u30c9\u306e\u30aa\u30d7\u30b7\u30e7\u30f3\u3092\u9010\u4e00\u8abf\u3079\u306a\u3044\u3068\u308f\u304b\u3089\u306a\u304b\u3063\u305f\u308a\u3057\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u4f59\u8ac7\u3067\u3059\u304c\u3001 shellcheck \u3084 shfmt \u3092\u4f7f\u3046\u3053\u3068\u3092\u30aa\u30b9\u30b9\u30e1\u3057\u307e\u3059\u3002\nshellcheck \u3092\u59cb\u3081\u3066\u4f7f\u3046\u3068\u3001\u30b7\u30a7\u30eb\u30b9\u30af\u30ea\u30d7\u30c8\u306b\u306f\u3053\u3093\u306a\u306b\u8272\u3005\u7f60\u304c\u3042\u308b\u306e\u304b\u3068\u6c17\u4ed8\u304b\u3055\u308c\u308b\u3068\u601d\u3044\u307e\u3059\u3002"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://google.github.io/styleguide/shellguide.html"},"Google \u306e Shell Style Guide")," \u3067\u306f\u6b21\u306e\u3088\u3046\u306b\u66f8\u304b\u308c\u3066\u3044\u307e\u3059\u3002"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"If you are writing a script that is more than 100 lines long, or that uses non-straightforward control flow logic, you should rewrite it in a more structured language now")),(0,r.kt)("p",null,"\u3067\u306f Ruby \u3084 Python \u3068\u3044\u3063\u305f\u30b9\u30af\u30ea\u30d7\u30c8\u8a00\u8a9e\u3067\u66f8\u3044\u305f\u3089\u3069\u3046\u3067\u3057\u3087\u3046\u304b\uff1f\n\u30b7\u30a7\u30eb\u30b9\u30af\u30ea\u30d7\u30c8\u3067\u6319\u3052\u305f\u554f\u984c\u306f\u89e3\u6c7a\u3059\u308b\u3068\u601d\u3044\u307e\u3059\u3057\u3001\u975e\u5e38\u306b\u81ea\u7136\u3067\u5408\u7406\u7684\u306a\u9078\u629e\u3060\u3068\u601d\u3044\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u305d\u308c\u3067\u3082 buildflow \u3092\u5b9f\u88c5\u3057\u305f\u306e\u306b\u306f\u3001\u5e7e\u3064\u304b\u8ab2\u984c\u611f\u304c\u3042\u3063\u305f\u304b\u3089\u3067\u3059\u3002\n\u307e\u305a\u306f\u51e6\u7406\u7cfb\u3001\u30b5\u30fc\u30c9\u30d1\u30fc\u30c6\u30a3\u306e\u30e9\u30a4\u30d6\u30e9\u30ea\u3001 OS \u30d1\u30c3\u30b1\u30fc\u30b8\u306b\u4f9d\u5b58\u3059\u308b\u3053\u3068\u3067\u3059\u3002\n\u30b5\u30fc\u30c9\u30d1\u30fc\u30c6\u30a3\u306e\u30e9\u30a4\u30d6\u30e9\u30ea\u306f\u4f7f\u308f\u306a\u3051\u308c\u3070\u3044\u3044\u8a71\u3067\u3059\u304c\u3001 Ruby \u3084 Python \u3092\u4f7f\u3063\u3066\u3044\u308c\u3070\u4f7f\u3044\u305f\u3044\u3068\u3044\u3046\u58f0\u3082\u51fa\u3066\u304f\u308b\u3053\u3068\u306f\u3042\u308b\u3067\u3057\u3087\u3046\u3002\n\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3067\u540c\u3058\u8a00\u8a9e\u3092\u4f7f\u3063\u3066\u3044\u308c\u3070\u305d\u308c\u3068\u306e\u5171\u5b58\u3082\u6c17\u306b\u3057\u306a\u3044\u3068\u3044\u3051\u306a\u3044\u304b\u3082\u3057\u308c\u307e\u305b\u3093\u3002\nbuildflow \u306b\u9650\u3089\u305a\u3001\u81ea\u5206\u306f Go \u306e\u300c\u30ef\u30f3\u30d0\u30a4\u30ca\u30ea\u3067\u52d5\u304f\u300d\u3068\u3044\u3046\u4e16\u754c\u89b3\u304c\u975e\u5e38\u306b\u597d\u304d\u3067\u3059\u3002"),(0,r.kt)("p",null,"\u81ea\u5206\u306f\u3053\u308c\u307e\u3067\u30b7\u30a7\u30eb\u30b9\u30af\u30ea\u30d7\u30c8\u3092 Go \u3067\u66f8\u304d\u76f4\u3059\u3068\u3044\u3046\u3053\u3068\u3092\u3084\u3063\u3066\u304d\u307e\u3057\u305f\u3002\n\u305d\u306e\u5834\u5408\u4ee5\u4e0b\u306e2\u3064\u304c\u3042\u308a\u307e\u3059\u304c\u3001\u3069\u3061\u3089\u306b\u305b\u3088\u8ab2\u984c\u611f\u304c\u3042\u308a\u307e\u3059\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u30d3\u30eb\u30c9\u6e08\u307f\u306e\u30d0\u30a4\u30ca\u30ea\u3092\u4f7f\u3046",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u914d\u5e03\u65b9\u6cd5\u3092\u8003\u3048\u306a\u3044\u3068\u3044\u3051\u306a\u3044"))),(0,r.kt)("li",{parentName:"ul"},"\u30b9\u30af\u30ea\u30d7\u30c8\u8a00\u8a9e\u306e\u3088\u3046\u306b ",(0,r.kt)("inlineCode",{parentName:"li"},"go run")," \u3067\u5b9f\u884c\u3059\u308b",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u4ed6\u306e\u30b9\u30af\u30ea\u30d7\u30c8\u8a00\u8a9e\u3068\u540c\u69d8\u306e\u554f\u984c\u304c\u3042\u308b")))),(0,r.kt)("h2",{id:"\u30ed\u30b8\u30c3\u30af\u3068\u30b3\u30de\u30f3\u30c9\u306e\u5206\u96e2"},"\u30ed\u30b8\u30c3\u30af\u3068\u30b3\u30de\u30f3\u30c9\u306e\u5206\u96e2"),(0,r.kt)("p",null,"\u30b7\u30a7\u30eb\u30b9\u30af\u30ea\u30d7\u30c8\u3092\u4f55\u304b\u3057\u3089\u306e\u8a00\u8a9e\u3067\u66f8\u304d\u76f4\u3059\u5834\u5408\u3001\n\u5168\u3066\u3092\u305d\u308c\u3089\u3067\u66f8\u304d\u305f\u3044\u308f\u3051\u3067\u306f\u3042\u308a\u307e\u305b\u3093\u3002\n\u3060\u304b\u3089\u3053\u305d\u3001\u898f\u6a21\u304c\u5c0f\u3055\u3044\u3046\u3061\u306f\u30b7\u30a7\u30eb\u30b9\u30af\u30ea\u30d7\u30c8\u3067\u66f8\u304f\u306e\u3067\u3057\u3087\u3046\u3002\n\u30b7\u30a7\u30eb\u30b9\u30af\u30ea\u30d7\u30c8\u3067\u66f8\u3044\u305f\u307b\u3046\u304c\u697d\u306a\u90e8\u5206\u3082\u3042\u308b\u306e\u3067\u3059\u3002"),(0,r.kt)("p",null,"buildflow \u3067\u306f\u30b3\u30fc\u30c9\u3092\u4ee5\u4e0b\u306e3\u3064\u306b\u5206\u96e2\u3057\u307e\u3059\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u8a2d\u5b9a\u30d5\u30a1\u30a4\u30eb(YAML)"),(0,r.kt)("li",{parentName:"ul"},"Tengo script"),(0,r.kt)("li",{parentName:"ul"},"\u30b7\u30a7\u30eb\u30b9\u30af\u30ea\u30d7\u30c8(\u7d30\u304b\u3044\u3053\u3068\u8a00\u3046\u3068\u3001\u30b7\u30a7\u30eb\u30b9\u30af\u30ea\u30d7\u30c8\u4ee5\u5916\u3082\u5b9f\u306f\u4f7f\u3048\u308b\u3051\u3069)")),(0,r.kt)("p",null,"\u3053\u3046\u3057\u3066\u30b7\u30a7\u30eb\u30b9\u30af\u30ea\u30d7\u30c8\u3067\u66f8\u304d\u306b\u304f\u3044\u90e8\u5206\u3092\u5206\u96e2\u3057\u3001\u9069\u5207\u306a\u7c92\u5ea6\u3067\u7ba1\u7406\u3059\u308b\u3053\u3068\u3067\u30e1\u30f3\u30c6\u30ca\u30f3\u30b9\u6027\u3092\u9ad8\u3081\u308b\u3068\u3044\u3046\u306e\u304c\u4e00\u3064\u306e\u72d9\u3044\u3067\u3059\u3002\nTengo script \u306f\u57fa\u672c\u7684\u306b\u30c7\u30fc\u30bf\u306e\u6574\u5f62\u306a\u3069\u306b\u5f79\u5272\u3092\u9650\u5b9a\u3057\u3001\u5916\u90e8\u30d5\u30a1\u30a4\u30eb\u306b\u5207\u308a\u51fa\u305b\u308b\u3088\u3046\u306b\u3059\u308b\u3053\u3068\u3067\n\u30c6\u30b9\u30c8\u3057\u3084\u3059\u3044\u3088\u3046\u306b\u306a\u3063\u3066\u3044\u307e\u3059\u3002"),(0,r.kt)("p",null,"buildflow \u306b\u306f\u30d5\u30ec\u30fc\u30e0\u30ef\u30fc\u30af\u3068\u3057\u3066\u306e\u5074\u9762\u304c\u3042\u308a\u3001\nbuildflow \u306b\u4e57\u3063\u304b\u308b\u3053\u3068\u3067\u5171\u901a\u306e\u6a5f\u80fd\u306e\u5b9f\u88c5\u3092\u7701\u3044\u305f\u308a\u3001\u30b3\u30fc\u30c9\u3092\u9069\u5207\u306b\u5206\u5272\u3057\u3066\u30e1\u30f3\u30c6\u30ca\u30f3\u30b9\u6027\u3092\u7dad\u6301\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u308b\u3068\u671f\u5f85\u3057\u3066\u3044\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u5c24\u3082\u3053\u3053\u306f\u30c8\u30ec\u30fc\u30c9\u30aa\u30d5\u304c\u3042\u308b\u3067\u3057\u3087\u3046\u3002\n\u4e0a\u8a18\u306e 3 \u3064\u3092\u884c\u304d\u6765\u3057\u306a\u3044\u3068\u3044\u3051\u306a\u304f\u3066\u8f9b\u3044\u3068\u3044\u3046\u30d5\u30a3\u30fc\u30c9\u30d0\u30c3\u30af\u3092\u3082\u3089\u3063\u305f\u3053\u3068\u3082\u3042\u308a\u307e\u3059\u3002\n\u30b3\u30fc\u30c9\u5206\u5272\u306f\u5fc5\u9808\u3067\u306f\u306a\u3044\u306e\u3067 YAML \u306b\u30a4\u30f3\u30e9\u30a4\u30f3\u3067\u66f8\u304f\u3053\u3068\u3082\u51fa\u6765\u307e\u3059\u304c\u3001\u3042\u307e\u308a\u304a\u3059\u3059\u3081\u3057\u306a\u3044\u306e\u3068\u3001\n\u305d\u3082\u305d\u3082\u4e0a\u8a18\u306e\u30d5\u30a3\u30fc\u30c9\u30d0\u30c3\u30af\u306f\u30d5\u30a1\u30a4\u30eb\u306e\u884c\u304d\u6765\u3060\u3051\u3067\u306a\u304f"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"buildflow \u306e\u8a2d\u5b9a"),(0,r.kt)("li",{parentName:"ul"},"Tengo Script"),(0,r.kt)("li",{parentName:"ul"},"\u30b7\u30a7\u30eb\u30b9\u30af\u30ea\u30d7\u30c8")),(0,r.kt)("p",null,"\u3068\u3044\u3046 3 \u3064\u306e\u7570\u306a\u308b\u8a00\u8a9e\u3092\u884c\u304d\u6765\u3059\u308b\u3068\u3044\u3046\u610f\u5473\u3082\u3042\u308b\u306e\u3067\u3057\u3087\u3046\u3002"),(0,r.kt)("p",null,"\u305d\u308c\u306f\u305d\u3046\u3044\u3046\u5074\u9762\u3082\u3042\u308b\u3067\u3057\u3087\u3046\u3002\n\u3053\u308c\u306f buildflow \u306e\u6839\u672c\u7684\u306a\u90e8\u5206\u306a\u306e\u3067\u5909\u66f4\u3055\u308c\u308b\u3053\u3068\u306f\u306a\u3044\u3068\u601d\u3044\u307e\u3059\u3002\n\u3082\u3057\u5909\u66f4\u3059\u308b\u3088\u3046\u306a\u3089\u591a\u5206\u5225\u306e\u30c4\u30fc\u30eb\u3068\u3057\u3066\u4f5c\u3063\u3066\u3044\u308b\u3067\u3057\u3087\u3046\u3002"),(0,r.kt)("h2",{id:"\u307e\u3068\u3081"},"\u307e\u3068\u3081"),(0,r.kt)("p",null,"buildflow \u306f\u81ea\u5206\u304c\u76f4\u9762\u3057\u3066\u3044\u308b CI/CD \u306e\u8ab2\u984c"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5fc5\u8981\u306a\u51e6\u7406\u3060\u3051\u5b9f\u884c\u3057\u305f\u3044"),(0,r.kt)("li",{parentName:"ul"},"\u5171\u901a\u306e\u51e6\u7406\u3092\u9010\u4e00\u5b9f\u88c5\u3057\u305f\u304f\u306a\u3044"),(0,r.kt)("li",{parentName:"ul"},"\u30e1\u30f3\u30c6\u30ca\u30f3\u30b9\u6027\u3092\u9ad8\u3081\u305f\u3044")),(0,r.kt)("p",null,"\u3092\u89e3\u6c7a\u3059\u308b\u305f\u3081\u306b\u4f5c\u308a\u307e\u3057\u305f\u3002"),(0,r.kt)("p",null,"buildflow \u306f\u30ef\u30f3\u30d0\u30a4\u30ca\u30ea\u3067\u52d5\u304d\u307e\u3059\u3002\n\u30b3\u30fc\u30c9\u3092\u9069\u5207\u306b\u5206\u96e2\u3057\u3001\u30b7\u30a7\u30eb\u30b9\u30af\u30ea\u30d7\u30c8\u304b\u3089\u8907\u96d1\u306a\u30ed\u30b8\u30c3\u30af\u3092\u9664\u53bb\u3059\u308b\u3053\u3068\u3067\u3001\u30e1\u30f3\u30c6\u30ca\u30f3\u30b9\u6027\u3092\u9ad8\u3081\u308b\u3053\u3068\u3092\u76ee\u6307\u3057\u3066\u3044\u307e\u3059\u3002"))}k.isMDXComponent=!0}}]);