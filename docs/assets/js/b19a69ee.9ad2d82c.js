"use strict";(self.webpackChunktechblog_szksh_cloud_github_io=self.webpackChunktechblog_szksh_cloud_github_io||[]).push([[8288],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(n),f=o,d=m["".concat(u,".").concat(f)]||m[f]||p[f]||i;return n?r.createElement(d,a(a({ref:t},c),{},{components:n})):r.createElement(d,a({ref:t},c))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var s=2;s<i;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8344:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return p}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),a=["components"],l={title:"Drone v1 \u3067\u306f Jsonnet \u304c extension \u306a\u3057\u3067\u4f7f\u3048\u308b",date:new Date("2019-08-02T14:02:57.000Z"),tags:["drone"],authors:["suzuki-shunsuke"]},u=void 0,s={permalink:"/drone-jsonnet",source:"@site/blog/drone-jsonnet.md",title:"Drone v1 \u3067\u306f Jsonnet \u304c extension \u306a\u3057\u3067\u4f7f\u3048\u308b",description:"Drone \u3067\u306f v1 \u304b\u3089\u5197\u9577\u306a YAML \u3092 DRY \u306b\u3059\u308b\u4e00\u3064\u306e\u624b\u3068\u3057\u3066\u3001 Jsonnet \u306e\u5229\u7528\u304c\u63a8\u5968\u3055\u308c\u3066\u3044\u307e\u3059\u3002",date:"2019-08-02T14:02:57.000Z",formattedDate:"August 2, 2019",tags:[{label:"drone",permalink:"/tags/drone"}],readingTime:1.7,truncated:!1,authors:[{name:"Shunsuke Suzuki",title:"SRE / OSS Contributor / Tool Maker / Go / Terraform",url:"https://github.com/suzuki-shunsuke",imageURL:"https://github.com/suzuki-shunsuke.png",key:"suzuki-shunsuke"}],frontMatter:{title:"Drone v1 \u3067\u306f Jsonnet \u304c extension \u306a\u3057\u3067\u4f7f\u3048\u308b",date:"2019-08-02T14:02:57.000Z",tags:["drone"],authors:["suzuki-shunsuke"]},prevItem:{title:"Golang \u3067\u306e\u6642\u523b\u306e\u6271\u3044\u65b9\u3092\u6574\u7406\u3059\u308b",permalink:"/golang-time"},nextItem:{title:"The Top 10 Most Common Mistakes I\u2019ve Seen in Go Projects \u3092\u8aad\u3093\u3067\u307f\u3066",permalink:"/the-top-10-most-common-mistakes-ive-seen-in-go-projects"}},c={authorsImageUrls:[void 0]},p=[{value:"\u3044\u3064\u304b\u3089 Jsonnet Extension \u306f\u4e0d\u8981\u306b\u306a\u3063\u305f\u306e\u304b",id:"\u3044\u3064\u304b\u3089-jsonnet-extension-\u306f\u4e0d\u8981\u306b\u306a\u3063\u305f\u306e\u304b",level:2},{value:"\u6ce8\u610f\u70b9",id:"\u6ce8\u610f\u70b9",level:2},{value:"\u30ea\u30d5\u30a1\u30ec\u30f3\u30b9",id:"\u30ea\u30d5\u30a1\u30ec\u30f3\u30b9",level:2}],m={toc:p};function f(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Drone \u3067\u306f v1 \u304b\u3089\u5197\u9577\u306a YAML \u3092 DRY \u306b\u3059\u308b\u4e00\u3064\u306e\u624b\u3068\u3057\u3066\u3001 Jsonnet \u306e\u5229\u7528\u304c\u63a8\u5968\u3055\u308c\u3066\u3044\u307e\u3059\u3002\n\u3053\u308c\u306b\u3064\u3044\u3066\u306f\u904e\u53bb\u306e\u30d6\u30ed\u30b0\u3067\u3082\u89e6\u308c\u3066\u3044\u307e\u3059\u3002"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://techblog.szksh.cloud/drone-jsonnet-generator/"},"https://techblog.szksh.cloud/drone-jsonnet-generator/")),(0,i.kt)("p",null,"\u3057\u304b\u3057\u3001 v1 \u306e rc \u306e\u6642\u70b9\u3067\u306f Jsonnet \u306e\u6d3b\u7528\u306b\u306f Jsonnet Extension \u304c\u5fc5\u8981\u3067\u3057\u305f\u3002"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://engineering.linecorp.com/ja/blog/go-oss-ci-cd-platform-drone-1-0-0-rc-1/#title7-1"},"https://engineering.linecorp.com/ja/blog/go-oss-ci-cd-platform-drone-1-0-0-rc-1/#title7-1")),(0,i.kt)("p",null,"\u3057\u304b\u3057\u3001 v1 \u306e\u6b63\u5f0f\u7248\u3067\u306f Jsonnet Extension \u304c\u306a\u304f\u3066\u3082 Jsonnet \u304c\u5229\u7528\u3067\u304d\u308b\u3088\u3046\u306b\u306a\u3063\u3066\u3044\u307e\u3059\u3002"),(0,i.kt)("p",null,"\u307e\u305a Drone \u306e\u7ba1\u7406\u8005\u5074\u3067 Drone server \u306b\u74b0\u5883\u5909\u6570 ",(0,i.kt)("inlineCode",{parentName:"p"},"DRONE_JSONNET_ENABLED=true")," \u3092\u8a2d\u5b9a\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"),(0,i.kt)("p",null,"\u305d\u3046\u3057\u305f\u3089\u3001\u30e6\u30fc\u30b6\u30fc\u5074\u306f\u6b21\u306e\u3088\u3046\u306b\u3059\u308b\u3053\u3068\u3067 jsonnet \u304c\u4f7f\u3048\u307e\u3059\u3002"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},".drone.yml \u306e\u4ee3\u308f\u308a\u306b .drone.jsonnet \u3092\u30b3\u30df\u30c3\u30c8\u3059\u308b (.drone.yml \u306f\u4e0d\u8981)"),(0,i.kt)("li",{parentName:"ol"},"\u5404\u30ea\u30dd\u30b8\u30c8\u30ea\u306e settings \u306e Main > Configuration \u3067\u8a2d\u5b9a\u30d5\u30a1\u30a4\u30eb\u306e\u30d1\u30b9\u3092\u5909\u66f4\u3059\u308b")),(0,i.kt)("p",null,"\u3053\u3046\u3059\u308b\u3053\u3068\u3067\u30d3\u30eb\u30c9\u5b9f\u884c\u6642\u306b\u81ea\u52d5\u3067 Jsonnet \u304c YAML \u306b\u5909\u63db\u3055\u308c\u51e6\u7406\u3055\u308c\u308b\u3088\u3046\u3067\u3059\u3002"),(0,i.kt)("h2",{id:"\u3044\u3064\u304b\u3089-jsonnet-extension-\u306f\u4e0d\u8981\u306b\u306a\u3063\u305f\u306e\u304b"},"\u3044\u3064\u304b\u3089 Jsonnet Extension \u306f\u4e0d\u8981\u306b\u306a\u3063\u305f\u306e\u304b"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/drone/drone/compare/v1.0.0-rc.6...v1.0.0"},"https://github.com/drone/drone/compare/v1.0.0-rc.6...v1.0.0")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/drone/drone/commit/5013cfa993fa455fc56f10e45b9f36cf1d6dff57"},"https://github.com/drone/drone/commit/5013cfa993fa455fc56f10e45b9f36cf1d6dff57"))),(0,i.kt)("p",null,"v1 \u306e rc \u3067\u306f\u30b5\u30dd\u30fc\u30c8\u3055\u308c\u3066\u307e\u305b\u3093\u3067\u3057\u305f\u304c\u3001\u6b63\u5f0f\u7248\u3092\u30ea\u30ea\u30fc\u30b9\u3059\u308b\u30bf\u30a4\u30df\u30f3\u30b0\u3067 Jsonnet Extension \u304c\u4e0d\u8981\u306b\u306a\u3063\u3066\u3044\u305f\u3088\u3046\u3067\u3059\u3002"),(0,i.kt)("h2",{id:"\u6ce8\u610f\u70b9"},"\u6ce8\u610f\u70b9"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"SaaS ",(0,i.kt)("a",{parentName:"li",href:"https://cloud.drone.io"},"https://cloud.drone.io")," \u306f 2019-08-02 \u6642\u70b9\u3067\u672a\u5bfe\u5fdc"),(0,i.kt)("li",{parentName:"ul"},"Jsonnet \u306f pipeline \u304c 1 \u3064\u3067\u3082 ",(0,i.kt)("inlineCode",{parentName:"li"},"[]")," \u3067\u56f2\u3044\u3001\u914d\u5217\u306b\u3059\u308b\u5fc5\u8981\u304c\u3042\u308b"),(0,i.kt)("li",{parentName:"ul"},"Jsonnet \u306e Imports \u306f\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u306a\u3044")),(0,i.kt)("h2",{id:"\u30ea\u30d5\u30a1\u30ec\u30f3\u30b9"},"\u30ea\u30d5\u30a1\u30ec\u30f3\u30b9"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://discourse.drone.io/t/how-to-reduce-yaml-boilerplate/3704"},"https://discourse.drone.io/t/how-to-reduce-yaml-boilerplate/3704"))))}f.isMDXComponent=!0}}]);