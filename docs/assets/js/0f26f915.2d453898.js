"use strict";(self.webpackChunktechblog_szksh_cloud_github_io=self.webpackChunktechblog_szksh_cloud_github_io||[]).push([[3682],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return m}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),u=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(r),m=o,k=d["".concat(p,".").concat(m)]||d[m]||s[m]||a;return r?n.createElement(k,i(i({ref:t},c),{},{components:r})):n.createElement(k,i({ref:t},c))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9834:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return s}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),i=["components"],l={title:"drone \u306e\u7ba1\u7406\u306e\u305f\u3081\u306b portainer \u3092\u5c0e\u5165\u3057\u305f",date:new Date("2018-09-30T12:56:42.000Z"),draft:!1,tags:["drone","portainer"],archives:["2018/09"]},p=void 0,u={permalink:"/use-portainer-for-drone-admin",source:"@site/blog/use-portainer-for-drone-admin.md",title:"drone \u306e\u7ba1\u7406\u306e\u305f\u3081\u306b portainer \u3092\u5c0e\u5165\u3057\u305f",description:"drone OSS 0.8.5 \u3067\u691c\u8a3c\u3057\u3066\u3044\u307e\u3059\u3002",date:"2018-09-30T12:56:42.000Z",formattedDate:"September 30, 2018",tags:[{label:"drone",permalink:"/tags/drone"},{label:"portainer",permalink:"/tags/portainer"}],readingTime:3.205,truncated:!1,authors:[],frontMatter:{title:"drone \u306e\u7ba1\u7406\u306e\u305f\u3081\u306b portainer \u3092\u5c0e\u5165\u3057\u305f",date:"2018-09-30T12:56:42.000Z",draft:!1,tags:["drone","portainer"],archives:["2018/09"]},prevItem:{title:"metabase \u3092\u4f7f\u3063\u3066 drone \u306e\u5229\u7528\u72b6\u6cc1\u3092\u53ef\u8996\u5316\u3059\u308b",permalink:"/visualize-drone-usage-by-metabase"},nextItem:{title:"drone \u3067\u975eroot\u30e6\u30fc\u30b6\u30fc\u3067\u5b9f\u884c\u3055\u308c\u308bImage\u3092\u4f7f\u3048\u306a\u3044",permalink:"/drone-cant-use-nonroot-image"}},c={authorsImageUrls:[]},s=[{value:"portainer \u306e\u5c0e\u5165",id:"portainer-\u306e\u5c0e\u5165",level:2},{value:"\u56f0\u3063\u3066\u3044\u308b\u3053\u3068",id:"\u56f0\u3063\u3066\u3044\u308b\u3053\u3068",level:2},{value:"\u6bce\u56de\u691c\u7d22\u3067\u7d5e\u308a\u8fbc\u307f\u3057\u306a\u3044\u3068\u3044\u3051\u306a\u3044",id:"\u6bce\u56de\u691c\u7d22\u3067\u7d5e\u308a\u8fbc\u307f\u3057\u306a\u3044\u3068\u3044\u3051\u306a\u3044",level:3},{value:"\u3082\u3046\u5c11\u3057\u9ad8\u5ea6\u306a\u691c\u7d22\u304c\u3057\u305f\u3044",id:"\u3082\u3046\u5c11\u3057\u9ad8\u5ea6\u306a\u691c\u7d22\u304c\u3057\u305f\u3044",level:3},{value:"docker API \u3067\u30a8\u30e9\u30fc\u304c\u51fa\u3066\u3001\u30b3\u30f3\u30c6\u30ca\u3092\u64cd\u4f5c\u3067\u304d\u306a\u3044",id:"docker-api-\u3067\u30a8\u30e9\u30fc\u304c\u51fa\u3066\u30b3\u30f3\u30c6\u30ca\u3092\u64cd\u4f5c\u3067\u304d\u306a\u3044",level:3}],d={toc:s};function m(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"drone OSS 0.8.5 \u3067\u691c\u8a3c\u3057\u3066\u3044\u307e\u3059\u3002"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://drone.io/"},"https://drone.io/")," \u3068 ",(0,a.kt)("a",{parentName:"p",href:"https://portainer.io/"},"https://portainer.io/")," \u306e\u8a71\u3067\u3059\u3002"),(0,a.kt)("p",null,"drone \u306f\u304b\u306a\u308a\u5b89\u5b9a\u3057\u305f\u30b7\u30b9\u30c6\u30e0\u3060\u3068\u601d\u3044\u307e\u3059\u304c\u3001\n\u30e6\u30fc\u30b6\u30fc\u304c\u597d\u304d\u306a\u30a4\u30e1\u30fc\u30b8\u3067\u597d\u304d\u306a\u30b3\u30de\u30f3\u30c9\u3092\u5b9f\u884c\u3067\u304d\u308b\u4ee5\u4e0a\u3001\u30c8\u30e9\u30d6\u30eb\u304c\u8d77\u3053\u308b\u3053\u3068\u306f\u3042\u308a\u307e\u3059\u3002"),(0,a.kt)("p",null,"\u305d\u306e\u7d50\u679c\u3001 \u7279\u5b9a\u306e build \u304c\u30bf\u30a4\u30e0\u30a2\u30a6\u30c8\u306b\u306a\u3089\u305a\u306b\u5ef6\u3005\u3068\u5b9f\u884c\u3055\u308c\u7d9a\u3051\u308b\u306a\u3093\u3066\u3053\u3068\u304c\u3042\u308a\u307e\u3059\u3002"),(0,a.kt)("p",null,"\u305d\u306e\u5834\u5408\u3001"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u3069\u306e\u30ce\u30fc\u30c9\u306e\u3069\u306e\u30b3\u30f3\u30c6\u30ca\u3067\u30c8\u30e9\u30d6\u30eb\u304c\u8d77\u304d\u3066\u3044\u308b\u306e\u304b"),(0,a.kt)("li",{parentName:"ol"},"\u305d\u306e\u30b3\u30f3\u30c6\u30ca\u3067\u4f55\u304c\u8d77\u3053\u3063\u3066\u3044\u308b\u306e\u304b")),(0,a.kt)("p",null,"\u3068\u3044\u3046\u306e\u3092\u77e5\u308a\u305f\u3044\u306e\u3067\u3059\u304c\u3001 drone \u306b\u306f\u305d\u3046\u3044\u3063\u305f\u7ba1\u7406\u6a5f\u80fd\u306f\u3042\u308a\u307e\u305b\u3093\u3002"),(0,a.kt)("p",null,"\u305d\u3053\u3067 \u8907\u6570\u306e\u30b5\u30fc\u30d0\u3067\u5b9f\u884c\u3055\u308c\u3066\u3044\u308b Docker \u30b3\u30f3\u30c6\u30ca\u3092\u7ba1\u7406\u3067\u304d\u308b\u30c4\u30fc\u30eb\u306f\u306a\u3044\u304b\u3068\u63a2\u3057\u305f\u3068\u3053\u308d\u3001\n",(0,a.kt)("a",{parentName:"p",href:"https://portainer.readthedocs.io/en/stable/"},"portainer")," \u304c\u826f\u3055\u305d\u3046\u3060\u3063\u305f\u306e\u3067\u5c0e\u5165\u3057\u307e\u3057\u305f\u3002"),(0,a.kt)("p",null,"portainer \u3092\u4f7f\u3046\u3068\u8907\u6570\u306e\u30b5\u30fc\u30d0\u306e\u30b3\u30f3\u30c6\u30ca\u3092\u4e00\u89a7\u3067\u898b\u308b\u3053\u3068\u304c\u51fa\u6765\u3001\n\u30b3\u30f3\u30c6\u30ca\u3092\u64cd\u4f5c(\u524a\u9664\u3001\u505c\u6b62\u3001\u518d\u8d77\u52d5etc)\u51fa\u6765\u307e\u3059\u3002\n\u30b3\u30f3\u30c6\u30ca\u306e\u30ed\u30b0\u3084\u7c21\u5358\u306a\u30e1\u30c8\u30ea\u30c3\u30af\u30b9(CPU, memory, network usage) \u304c\u898b\u308c\u307e\u3059\u3002\n\u30b3\u30f3\u30c6\u30ca\u3060\u3051\u3067\u306a\u304f\u3001network \u3084 volume, image \u3068\u3044\u3063\u305f\u30ea\u30bd\u30fc\u30b9\u3082\u7ba1\u7406\u3067\u304d\u307e\u3059\u3002"),(0,a.kt)("h2",{id:"portainer-\u306e\u5c0e\u5165"},"portainer \u306e\u5c0e\u5165"),(0,a.kt)("p",null,"\u516c\u5f0f\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u306b\u66f8\u3044\u3066\u3042\u308a\u307e\u3059\u304c\u3001 swarm cluster \u3092\u69cb\u7bc9\u3057\u3066\u305d\u3053\u306b\u30c7\u30d7\u30ed\u30a4\u3059\u308c\u3070\u3088\u3044\u3067\u3059\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.docker.com/engine/swarm/swarm-tutorial/"},"https://docs.docker.com/engine/swarm/swarm-tutorial/")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://portainer.readthedocs.io/en/stable/deployment.html#inside-a-swarm-cluster"},"https://portainer.readthedocs.io/en/stable/deployment.html#inside-a-swarm-cluster"))),(0,a.kt)("h2",{id:"\u56f0\u3063\u3066\u3044\u308b\u3053\u3068"},"\u56f0\u3063\u3066\u3044\u308b\u3053\u3068"),(0,a.kt)("h3",{id:"\u6bce\u56de\u691c\u7d22\u3067\u7d5e\u308a\u8fbc\u307f\u3057\u306a\u3044\u3068\u3044\u3051\u306a\u3044"},"\u6bce\u56de\u691c\u7d22\u3067\u7d5e\u308a\u8fbc\u307f\u3057\u306a\u3044\u3068\u3044\u3051\u306a\u3044"),(0,a.kt)("p",null,"\u691c\u7d22\u3067\u7d5e\u308a\u8fbc\u3093\u3060\u5f8c\u306b\u7279\u5b9a\u306e\u30b3\u30f3\u30c6\u30ca\u306e\u8a73\u7d30\u753b\u9762\u98db\u3093\u3060\u5f8c\u4e00\u89a7\u306b\u623b\u308b\u3068\n\u691c\u7d22\u304c\u30af\u30ea\u30a2\u3055\u308c\u3066\u3044\u308b\u306e\u3067\u3082\u3046\u4e00\u5ea6\u691c\u7d22\u3057\u306a\u3044\u3068\u3044\u3051\u306a\u3044\u306e\u304c\u9762\u5012\u3067\u3059\u3002"),(0,a.kt)("h3",{id:"\u3082\u3046\u5c11\u3057\u9ad8\u5ea6\u306a\u691c\u7d22\u304c\u3057\u305f\u3044"},"\u3082\u3046\u5c11\u3057\u9ad8\u5ea6\u306a\u691c\u7d22\u304c\u3057\u305f\u3044"),(0,a.kt)("p",null,"\u81ea\u7531\u5165\u529b\u306e\u691c\u7d22\u30dc\u30c3\u30af\u30b9\u304c1\u3064\u3042\u308b\u3060\u3051\u3067\u3001\u7279\u306b\u30af\u30a8\u30ea\u304c\u66f8\u3051\u308b\u308f\u3051\u3067\u3082\u306a\u3055\u305d\u3046\u306a\u306e\u3067\u3001\n\u3082\u3046\u5c11\u3057\u9ad8\u5ea6\u306a\u691c\u7d22\u304c\u3057\u305f\u3044\u3067\u3059\u3002\n\u4f8b\u3048\u3070 Created At \u3067 1\u6642\u9593\u4ee5\u4e0a\u524d\u306b\u7279\u5b9a\u306e\u30ce\u30fc\u30c9\u3067\u4f5c\u3089\u308c\u305f\u30b3\u30f3\u30c6\u30ca\u306e\u4e00\u89a7\u3068\u304b\u3002"),(0,a.kt)("h3",{id:"docker-api-\u3067\u30a8\u30e9\u30fc\u304c\u51fa\u3066\u30b3\u30f3\u30c6\u30ca\u3092\u64cd\u4f5c\u3067\u304d\u306a\u3044"},"docker API \u3067\u30a8\u30e9\u30fc\u304c\u51fa\u3066\u3001\u30b3\u30f3\u30c6\u30ca\u3092\u64cd\u4f5c\u3067\u304d\u306a\u3044"),(0,a.kt)("p",null,"\u3053\u308c\u306f\u591a\u5206\u4e0d\u5177\u5408\u3068\u304b\u3067\u306f\u306a\u304f\u81ea\u5206\u306e\u8a2d\u5b9a\u304c\u826f\u304f\u306a\u3044\u306e\u3060\u3068\u601d\u3044\u307e\u3059\u3002\n\u3053\u306e\u8fba\u306e issue \u304c\u95a2\u4fc2\u3057\u3066\u305d\u3046\u3067\u3059\u304c\u3001\u307e\u3060\u89e3\u6d88\u3067\u304d\u3066\u3044\u307e\u305b\u3093\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/portainer/portainer/issues/831"},"https://github.com/portainer/portainer/issues/831")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/portainer/portainer/issues/1897"},"https://github.com/portainer/portainer/issues/1897"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"http error: Unable to proxy the request via the Docker socket (err=context canceled) (code=500)\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"cron error: endpoint snapshot error (endpoint=primary, URL=tcp://tasks.agent:9001) (err=Cannot connect to the Docker daemon at tcp://tasks.agent:9001. Is the docker daemon running?)\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"http error: Unable to execute cluster operation (err=Get https://192.160.0.16:9001/volumes: net/http: request canceled (Client.Timeout exceeded while awaiting headers)) (code=500)\n")))}m.isMDXComponent=!0}}]);