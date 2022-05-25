"use strict";(self.webpackChunktechblog_szksh_cloud_github_io=self.webpackChunktechblog_szksh_cloud_github_io||[]).push([[8080],{3905:function(e,t,r){r.d(t,{Zo:function(){return i},kt:function(){return b}});var n=r(7294);function u(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){u(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,u=function(e,t){if(null==e)return{};var r,n,u={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(u[r]=e[r]);return u}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(u[r]=e[r])}return u}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},i=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,u=e.mdxType,a=e.originalType,s=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),c=p(r),b=u,h=c["".concat(s,".").concat(b)]||c[b]||m[b]||a;return r?n.createElement(h,o(o({ref:t},i),{},{components:r})):n.createElement(h,o({ref:t},i))}));function b(e,t){var r=arguments,u=t&&t.mdxType;if("string"==typeof e||u){var a=r.length,o=new Array(a);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:u,o[1]=l;for(var p=2;p<a;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},5818:function(e,t,r){r.r(t),r.d(t,{assets:function(){return i},contentTitle:function(){return s},default:function(){return b},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return m}});var n=r(7462),u=r(3366),a=(r(7294),r(3905)),o=["components"],l={title:"Drone \u3067\u300c\u30d3\u30eb\u30c9\u5b9f\u884c\u6642\u306b\u30d1\u30e9\u30e1\u30fc\u30bf\u3092\u6e21\u3059\u300d\u3063\u307d\u3044\u3053\u3068\u3092\u3059\u308b",date:new Date("2019-06-20T08:50:11.000Z"),tags:["drone"],authors:["suzuki-shunsuke"]},s=void 0,p={permalink:"/how-to-imitate-jenkins-parameterized-build-at-drone",source:"@site/blog/how-to-imitate-jenkins-parameterized-build-at-drone.md",title:"Drone \u3067\u300c\u30d3\u30eb\u30c9\u5b9f\u884c\u6642\u306b\u30d1\u30e9\u30e1\u30fc\u30bf\u3092\u6e21\u3059\u300d\u3063\u307d\u3044\u3053\u3068\u3092\u3059\u308b",description:"Jenkins \u3067\u306f parameterized build \u3068\u3044\u3046\u6a5f\u80fd\u3067\u3001\u30d3\u30eb\u30c9\u5b9f\u884c\u6642\u306b Web UI \u304b\u3089\u30d1\u30e9\u30e1\u30fc\u30bf\u3092\u6307\u5b9a\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002",date:"2019-06-20T08:50:11.000Z",formattedDate:"June 20, 2019",tags:[{label:"drone",permalink:"/tags/drone"}],readingTime:2.71,truncated:!1,authors:[{name:"Shunsuke Suzuki",title:"SRE / OSS Contributor / Tool Maker / Go / Terraform",url:"https://github.com/suzuki-shunsuke",imageURL:"https://github.com/suzuki-shunsuke.png",key:"suzuki-shunsuke"}],frontMatter:{title:"Drone \u3067\u300c\u30d3\u30eb\u30c9\u5b9f\u884c\u6642\u306b\u30d1\u30e9\u30e1\u30fc\u30bf\u3092\u6e21\u3059\u300d\u3063\u307d\u3044\u3053\u3068\u3092\u3059\u308b",date:"2019-06-20T08:50:11.000Z",tags:["drone"],authors:["suzuki-shunsuke"]},prevItem:{title:"Flute - Golang HTTP client testing framework",permalink:"/fagott"},nextItem:{title:"Drone v0.8 \u306e .drone.yml \u3092 v1 \u306e .drone.jsonnet \u306b\u5909\u63db\u3059\u308b\u30c4\u30fc\u30eb\u3092\u4f5c\u3063\u305f",permalink:"/drone-jsonnet-generator"}},i={authorsImageUrls:[void 0]},m=[],c={toc:m};function b(e){var t=e.components,r=(0,u.Z)(e,o);return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Jenkins \u3067\u306f parameterized build \u3068\u3044\u3046\u6a5f\u80fd\u3067\u3001\u30d3\u30eb\u30c9\u5b9f\u884c\u6642\u306b Web UI \u304b\u3089\u30d1\u30e9\u30e1\u30fc\u30bf\u3092\u6307\u5b9a\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,a.kt)("p",null,"Drone \u3067\u306f\u57fa\u672c\u7684\u306b Git \u306e\u30a4\u30d9\u30f3\u30c8\u3092\u30d5\u30c3\u30af\u3057\u3066\u52d5\u304f\u306e\u3067\u300c\u30d3\u30eb\u30c9\u3092\u5b9f\u884c\u6642\u306b\u624b\u52d5\u3067\u30d1\u30e9\u30e1\u30fc\u30bf\u3092\u8a2d\u5b9a\u3059\u308b\u300d\u3068\u3044\u3046\u3053\u3068\u306f\u51fa\u6765\u307e\u305b\u3093\u3002"),(0,a.kt)("p",null,"\u81ea\u5206\u306f\u57fa\u672c\u7684\u306b\u3067\u304d\u306a\u304f\u3066\u3082\u69cb\u308f\u306a\u3044\u3068\u601d\u3063\u3066\u3044\u307e\u3059\u304c\u3001\n\u3053\u3046\u3044\u3063\u305f\u6a5f\u80fd\u304c\u306a\u3044\u304b\u3089 Drone \u3092\u4f7f\u308f\u306a\u3044\u3068\u3044\u3046\u4eba\u3082\u4e2d\u306b\u306f\u3044\u308b\u306e\u3067\u3001\nDrone \u3067\u3082\u3061\u3087\u3063\u3068\u3057\u305f\u5de5\u592b\u3067\u305d\u308c\u3063\u307d\u3044\u3053\u3068\u306f\u51fa\u6765\u308b\u3093\u3058\u3083\u306a\u3044\u304b\u3068\u601d\u3044\u3001\u7c21\u5358\u306a\u30b5\u30f3\u30d7\u30eb\u3092\u66f8\u3044\u3066\u307f\u307e\u3057\u305f\u3002"),(0,a.kt)("p",null,"\u4e00\u5fdc\u8a00\u3063\u3066\u304a\u304f\u3068\u3001 Jenkins \u306e parameterized build \u3092\u5b8c\u5168\u306b\u4ee3\u66ff\u3059\u308b\u3088\u3046\u306a\u3082\u306e\u3067\u306f\u3042\u308a\u307e\u305b\u3093\u3002"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/suzuki-shunsuke/example-drone-build-parameter"},"https://github.com/suzuki-shunsuke/example-drone-build-parameter")),(0,a.kt)("p",null,"\u4ee5\u4e0b\u306e\u30d5\u30a1\u30a4\u30eb\u304c\u5fc5\u8981\u3067\u3059\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/suzuki-shunsuke/example-drone-build-parameter/blob/master/build_params/params.sh.tpl"},"build_params/params.sh.tpl"),": \u30d3\u30eb\u30c9\u30d1\u30e9\u30e1\u30fc\u30bf\u3092\u8a18\u8ff0\u3059\u308b\u30d5\u30a1\u30a4\u30eb\u306e\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/suzuki-shunsuke/example-drone-build-parameter/blob/master/scripts/deploy.sh"},"scripts/deploy.sh"),": \u30c7\u30d7\u30ed\u30a4\u6642\u306b\u5b9f\u884c\u3059\u308b\u30b9\u30af\u30ea\u30d7\u30c8"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/suzuki-shunsuke/example-drone-build-parameter/blob/master/.drone.yml"},".drone.yml"),": Drone \u306e\u8a2d\u5b9a\u30d5\u30a1\u30a4\u30eb")),(0,a.kt)("p",null,"\u30b9\u30af\u30ea\u30d7\u30c8\u3092\u5b9f\u884c\u3057\u3066\u30c7\u30d7\u30ed\u30a4\u3057\u307e\u3059\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"$ bash scripts/deploy.sh\n")),(0,a.kt)("p",null,"\u3059\u308b\u3068\u30d1\u30e9\u30e1\u30fc\u30bf\u3092\u8a18\u8ff0\u3059\u308b\u30d5\u30a1\u30a4\u30eb\u304c\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u304b\u3089\u4f5c\u6210\u3055\u308c\u3001\u30a8\u30c7\u30a3\u30bf\u3067\u958b\u304d\u307e\u3059\u3002"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/suzuki-shunsuke/example-drone-build-parameter/blob/master/scripts/deploy.sh#L12-L17"},"https://github.com/suzuki-shunsuke/example-drone-build-parameter/blob/master/scripts/deploy.sh#L12-L17")),(0,a.kt)("p",null,"\u30d1\u30e9\u30e1\u30fc\u30bf\u3092\u8a18\u8ff0\u3057\u3001\u30a8\u30c7\u30a3\u30bf\u3092\u9589\u3058\u307e\u3059\u3002"),(0,a.kt)("p",null,"\u3059\u308b\u3068\u305d\u306e\u30d5\u30a1\u30a4\u30eb\u304c\u30b3\u30df\u30c3\u30c8\u3055\u308c\u3001\u65b0\u3057\u3044\u30bf\u30b0\u304c\u4f5c\u6210\u3055\u308c\u3001\u30b3\u30df\u30c3\u30c8\u3068\u30bf\u30b0\u304c\u30ea\u30e2\u30fc\u30c8\u306b\u30d7\u30c3\u30b7\u30e5\u3055\u308c\u307e\u3059\u3002"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/suzuki-shunsuke/example-drone-build-parameter/blob/master/scripts/deploy.sh#L27-L35"},"https://github.com/suzuki-shunsuke/example-drone-build-parameter/blob/master/scripts/deploy.sh#L27-L35")),(0,a.kt)("p",null,"Drone \u3067\u30bf\u30b0\u3092\u30d7\u30c3\u30b7\u30e5\u3059\u308b\u30a4\u30d9\u30f3\u30c8\u3092\u30d5\u30c3\u30af\u3057\u3066\u30d3\u30eb\u30c9\u304c\u5b9f\u884c\u3055\u308c\u307e\u3059\u3002"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/suzuki-shunsuke/example-drone-build-parameter/blob/master/.drone.yml#L13-L17"},"https://github.com/suzuki-shunsuke/example-drone-build-parameter/blob/master/.drone.yml#L13-L17")),(0,a.kt)("p",null,"\u30d3\u30eb\u30c9\u3067\u306f\u30b3\u30df\u30c3\u30c8\u3055\u308c\u305f\u30d1\u30e9\u30e1\u30fc\u30bf\u306e\u8a2d\u5b9a\u30d5\u30a1\u30a4\u30eb\u3092\u8aad\u307f\u8fbc\u3080\u3053\u3068\u3067\u30d3\u30eb\u30c9\u306b\u30d1\u30e9\u30e1\u30fc\u30bf\u3092\u6e21\u305b\u307e\u3059\u3002"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/suzuki-shunsuke/example-drone-build-parameter/blob/master/.drone.yml#L10"},"https://github.com/suzuki-shunsuke/example-drone-build-parameter/blob/master/.drone.yml#L10")),(0,a.kt)("p",null,"\u3053\u3046\u3059\u308b\u3053\u3068\u3067\u30d3\u30eb\u30c9\u306b\u30d1\u30e9\u30e1\u30fc\u30bf\u3092\u6e21\u3059\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\n\u30d1\u30e9\u30e1\u30fc\u30bf\u306e\u8a2d\u5b9a\u30d5\u30a1\u30a4\u30eb\u306f\u30b3\u30df\u30c3\u30c8\u3055\u308c\u308b\u306e\u3067 Git \u3067\u7ba1\u7406\u3067\u304d\u308b\u3068\u3044\u3046\u306e\u3082\u7279\u5fb4\u3067\u3059\u3002"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/suzuki-shunsuke/example-drone-build-parameter/blob/master/build_params/2019-07-07T10-04-02JST/params.sh"},"https://github.com/suzuki-shunsuke/example-drone-build-parameter/blob/master/build_params/2019-07-07T10-04-02JST/params.sh")),(0,a.kt)("p",null,"\u4e0a\u8a18\u306e\u30b9\u30af\u30ea\u30d7\u30c8\u3067\u306f\u30d1\u30e9\u30e1\u30fc\u30bf\u306e\u8a2d\u5b9a\u30d5\u30a1\u30a4\u30eb\u3068\u3057\u3066\u30b7\u30a7\u30eb\u30b9\u30af\u30ea\u30d7\u30c8\u3067\u74b0\u5883\u5909\u6570\u3092\u5b9a\u7fa9\u3057\u3066\u3044\u307e\u3059\u304c\u3001\n\u30b7\u30a7\u30eb\u30b9\u30af\u30ea\u30d7\u30c8\u3067\u3042\u308b\u5fc5\u8981\u6027\u306f\u306a\u304f\u3001\u4f8b\u3048\u3070 JSON \u30d5\u30a1\u30a4\u30eb\u3092\u8a18\u8ff0\u3057\u3066\u30d3\u30eb\u30c9\u3067 JSON \u30d5\u30a1\u30a4\u30eb\u3092\u8aad\u307f\u8fbc\u3093\u3067\u3082\u3088\u3044\u3057\u3001\n\u30d1\u30e9\u30e1\u30fc\u30bf\u3092\u9078\u629e\u3055\u305b\u308b\u3088\u3046\u306a\u3053\u3068\u304c\u3057\u305f\u3051\u308c\u3070 ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/junegunn/fzf"},"fzf")," \u306e\u3088\u3046\u306a\u3082\u306e\u3092\u4f7f\u3063\u3066\u3082\u3088\u3044\u3057\u3001\n\u3044\u304f\u3089\u3067\u3082\u6539\u5584\u3067\u304d\u307e\u3059\u3002"),(0,a.kt)("p",null,"\u4ee5\u4e0a\u3001\u7c21\u5358\u306a tips \u3067\u3057\u305f\u3002"))}b.isMDXComponent=!0}}]);