"use strict";(self.webpackChunktechblog_szksh_cloud_github_io=self.webpackChunktechblog_szksh_cloud_github_io||[]).push([[2540],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>m});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var a=n.createContext({}),p=function(e){var r=n.useContext(a),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},u=function(e){var r=p(e.components);return n.createElement(a.Provider,{value:r},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},k=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,c=e.originalType,a=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=p(t),k=o,m=s["".concat(a,".").concat(k)]||s[k]||d[k]||c;return t?n.createElement(m,i(i({ref:r},u),{},{components:t})):n.createElement(m,i({ref:r},u))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var c=t.length,i=new Array(c);i[0]=k;var l={};for(var a in r)hasOwnProperty.call(r,a)&&(l[a]=r[a]);l.originalType=e,l[s]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<c;p++)i[p]=t[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}k.displayName="MDXCreateElement"},475:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>a,contentTitle:()=>i,default:()=>d,frontMatter:()=>c,metadata:()=>l,toc:()=>p});var n=t(7462),o=(t(7294),t(3905));const c={title:"Drone \u3068 Circle CI \u306e workspace \u306e\u6271\u3044\u306e\u9055\u3044\u306b\u3064\u3044\u3066",date:new Date("2018-09-30T10:27:59.000Z"),tags:["drone","circleci"],authors:["suzuki-shunsuke"]},i=void 0,l={permalink:"/drone-circle-volume-difference",source:"@site/blog/drone-circle-volume-difference.md",title:"Drone \u3068 Circle CI \u306e workspace \u306e\u6271\u3044\u306e\u9055\u3044\u306b\u3064\u3044\u3066",description:"drone \u306f\u540c\u3058 pipeline \u306e step \u9593\u3067\u540c\u3058 workspace \u3092 docker \u306e volume \u3068\u3057\u3066\u30de\u30a6\u30f3\u30c8\u3059\u308b\u3053\u3068\u3067 workspace \u3092\u5171\u6709\u3057\u307e\u3059\u3002",date:"2018-09-30T10:27:59.000Z",formattedDate:"September 30, 2018",tags:[{label:"drone",permalink:"/tags/drone"},{label:"circleci",permalink:"/tags/circleci"}],readingTime:2.765,truncated:!1,authors:[{name:"Shunsuke Suzuki",title:"Platform Engineer / OSS Developer / Go / Terraform",url:"https://github.com/suzuki-shunsuke",imageURL:"https://github.com/suzuki-shunsuke.png",key:"suzuki-shunsuke"}],frontMatter:{title:"Drone \u3068 Circle CI \u306e workspace \u306e\u6271\u3044\u306e\u9055\u3044\u306b\u3064\u3044\u3066",date:"2018-09-30T10:27:59.000Z",tags:["drone","circleci"],authors:["suzuki-shunsuke"]},prevItem:{title:"Drone \u306e build \u5b9f\u884c\u6642\u306e\u8a8d\u8a3c\u65b9\u6cd5",permalink:"/drone-git-authentication"},nextItem:{title:"drone exec \u3092\u4e26\u5217\u5b9f\u884c\u3057\u305f\u969b\u306edocker network name \u306e\u885d\u7a81\u306b\u3064\u3044\u3066",permalink:"/drone-exec-network-name-collision"}},a={authorsImageUrls:[void 0]},p=[{value:"\u7d50\u5c40\u3069\u3063\u3061\u306e\u307b\u3046\u304c\u3044\u3044\u306e\u304b",id:"\u7d50\u5c40\u3069\u3063\u3061\u306e\u307b\u3046\u304c\u3044\u3044\u306e\u304b",level:2}],u={toc:p},s="wrapper";function d(e){let{components:r,...t}=e;return(0,o.kt)(s,(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"drone \u306f\u540c\u3058 pipeline \u306e step \u9593\u3067\u540c\u3058 workspace \u3092 docker \u306e volume \u3068\u3057\u3066\u30de\u30a6\u30f3\u30c8\u3059\u308b\u3053\u3068\u3067 workspace \u3092\u5171\u6709\u3057\u307e\u3059\u3002"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"http://docs.drone.io/workspace/"},"http://docs.drone.io/workspace/")),(0,o.kt)("p",null,"circle ci \u306f\u30c7\u30d5\u30a9\u30eb\u30c8\u3067 job \u9593\u3067 workspace \u3092\u5171\u6709\u3057\u307e\u305b\u3093\u3002\npersist_to_workspace \u3092\u6307\u5b9a\u3059\u308b\u3053\u3068\u3067\u5171\u6709\u3059\u308b\u4e8b\u304c\u3067\u304d\u307e\u3059\u3002"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://circleci.com/docs/2.0/workflows/#using-workspaces-to-share-data-among-jobs"},"https://circleci.com/docs/2.0/workflows/#using-workspaces-to-share-data-among-jobs")),(0,o.kt)("p",null,"circle ci \u306e\u5834\u5408\u306f volume \u3092\u5171\u6709\u3059\u308b\u306e\u3067\u306f\u306a\u304f\u3001\u6307\u5b9a\u3057\u305f\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u3092 archive \u3057\u3001\u6b21\u306e job \u3067\u5c55\u958b\u3059\u308b\u3053\u3068\u3067\u30d5\u30a1\u30a4\u30eb\u3092\u5171\u6709\u3059\u308b\u3088\u3046\u3067\u3059\u3002"),(0,o.kt)("p",null,"\u3053\u306e\u9055\u3044\u306b\u306f\u4e00\u9577\u4e00\u77ed\u304c\u3042\u308a\u307e\u3059\u3002"),(0,o.kt)("p",null,"circle ci \u306e\u5834\u5408\u306f archive, unarchive \u3059\u308b\u5206\u3001volume \u5171\u6709\u306b\u6bd4\u3079\u3066\u6642\u9593\u304c\u304b\u304b\u308a\u307e\u3059\u3002"),(0,o.kt)("p",null,"\u305d\u306e\u305f\u3081\u3001\u4e0b\u624b\u306b job \u3092\u5206\u3051\u308b\u3088\u308a\u4e00\u3064\u306e job \u3067\u51e6\u7406\u3057\u305f\u307b\u3046\u304c\u51e6\u7406\u6642\u9593\u304c\u77ed\u304f\u306a\u308b\u5834\u5408\u304c\u3042\u308a\u307e\u3059\u304c\u3001\nbuild \u3084 test \u3068\u3044\u3063\u305f\u51e6\u7406\u306f\u51fa\u6765\u308c\u3070\u5225\u306e job \u3068\u3057\u3066\u5b9f\u884c\u3057\u305f\u3044\u3067\u3057\u3087\u3046\u3057\u3001\u305d\u308c\u3067\u306f workflow \u304c\u4f7f\u3048\u307e\u305b\u3093\u3002"),(0,o.kt)("p",null,"\u305f\u3060\u3057\u3001\u5171\u6709\u3059\u308b\u30d1\u30b9\u306f\u81ea\u7531\u306b\u9078\u3079\u308b\u306e\u3067\u5fc5\u8981\u6700\u5c0f\u9650\u306b\u6291\u3048\u308b\u3053\u3068\u3067\u6642\u9593\u3092\u77ed\u7e2e\u3067\u304d\u307e\u3059\u3002"),(0,o.kt)("p",null,"\u307e\u305f\u3001circle ci \u306e\u5834\u5408\u306f archive \u3059\u308b\u30d1\u30b9\u53ca\u3073\u5c55\u958b\u5148\u306e\u30d1\u30b9\u3092\u81ea\u7531\u306b\u9078\u3079\u308b\u306e\u3067\u81ea\u7531\u5ea6\u304c\u9ad8\u3044\u3067\u3059\u3002\ndrone \u306e\u5834\u5408\u3001 workspace \u4ee5\u5916\u306e\u30d5\u30a1\u30a4\u30eb\u3092\u5171\u6709\u3067\u304d\u307e\u305b\u3093\u3002"),(0,o.kt)("p",null,"\u307e\u305f\u3001drone \u306e\u5834\u5408 volume \u3092\u5171\u6709\u3059\u308b\u306e\u3067\u540c\u3058 pipeline \u306e step \u306f\u540c\u3058\u30ce\u30fc\u30c9\u3067\u5b9f\u884c\u3055\u308c\u308b\u3068\u3044\u3046\u5236\u7d04\u304c\u3042\u308a\u307e\u3059\u304c\u3001\ncircle ci \u306e\u5834\u5408\u3001\u5225\u306e\u30ce\u30fc\u30c9\u3067\u306e\u5b9f\u884c\u304c\u53ef\u80fd\u3067\u3059\u3002\ndrone \u306e group \u3092\u4f7f\u3063\u3066\u4e26\u5217\u306b\u5b9f\u884c\u3059\u308b\u5834\u5408\u3001\u8907\u6570\u306e\u30ce\u30fc\u30c9\u306b\u5206\u6563\u3067\u304d\u307e\u305b\u3093\u304c\u3001 circle ci \u306e\u5834\u5408\u5206\u6563\u3067\u304d\u308b\u306e\u3067\u3088\u308a\u30b9\u30b1\u30fc\u30eb\u3057\u3084\u3059\u3044\u3068\u8a00\u3048\u308b\u3067\u3057\u3087\u3046\u3002"),(0,o.kt)("h2",{id:"\u7d50\u5c40\u3069\u3063\u3061\u306e\u307b\u3046\u304c\u3044\u3044\u306e\u304b"},"\u7d50\u5c40\u3069\u3063\u3061\u306e\u307b\u3046\u304c\u3044\u3044\u306e\u304b"),(0,o.kt)("p",null,"\u4e00\u9577\u4e00\u77ed\u304c\u3042\u308b\u3068\u8a00\u3063\u305f\u3068\u304a\u308a\u3001\u4e00\u6982\u306b\u3069\u3063\u3061\u304c\u826f\u3044\u3068\u306f\u8a00\u3048\u307e\u305b\u3093\u304c\u3001\u500b\u4eba\u7684\u306b\u306f drone \u306e\u3084\u308a\u65b9\u306e\u307b\u3046\u304c\u76f4\u611f\u7684\u3060\u3057\u3001\n\u4f55\u3088\u308a\u901f\u3044\u306e\u3067\u597d\u304d\u3067\u3059\u3002\u540c\u3058 pipeline \u306e\u51e6\u7406\u3092\u8907\u6570\u306e\u30ce\u30fc\u30c9\u306b\u5206\u6563\u3055\u305b\u305f\u3044\u3053\u3068\u3063\u3066\u500b\u4eba\u7684\u306b\u306f\u3042\u307e\u308a\u3042\u308a\u307e\u305b\u3093\u3002"))}d.isMDXComponent=!0}}]);