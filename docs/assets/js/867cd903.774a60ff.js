"use strict";(self.webpackChunktechblog_szksh_cloud_github_io=self.webpackChunktechblog_szksh_cloud_github_io||[]).push([[9881],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>k});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var u=a.createContext({}),s=function(e){var t=a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},c="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=s(r),m=n,k=c["".concat(u,".").concat(m)]||c[m]||g[m]||l;return r?a.createElement(k,o(o({ref:t},p),{},{components:r})):a.createElement(k,o({ref:t},p))}));function k(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,o=new Array(l);o[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[c]="string"==typeof e?e:n,o[1]=i;for(var s=2;s<l;s++)o[s]=r[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},7919:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var a=r(7462),n=(r(7294),r(3905));const l={title:"Graylog\u306eAlert\u306e\u8ab2\u984c",date:new Date("2018-12-19T12:02:11.000Z"),tags:["graylog"],authors:["suzuki-shunsuke"]},o=void 0,i={permalink:"/graylog-alert-issue",source:"@site/blog/graylog-alert-issue.md",title:"Graylog\u306eAlert\u306e\u8ab2\u984c",description:"Graylog\u3092\u904b\u7528\u3057\u3066\u304d\u3066\u611f\u3058\u3066\u3044\u308bAlert\u6a5f\u80fd\u5468\u308a\u306e\u8ab2\u984c\u3092\u30ea\u30b9\u30c8\u30a2\u30c3\u30d7\u3057\u307e\u3059\u3002",date:"2018-12-19T12:02:11.000Z",formattedDate:"December 19, 2018",tags:[{label:"graylog",permalink:"/tags/graylog"}],readingTime:2.505,truncated:!1,authors:[{name:"Shunsuke Suzuki",title:"Platform Engineer / OSS Developer / Go / Terraform",url:"https://github.com/suzuki-shunsuke",imageURL:"https://github.com/suzuki-shunsuke.png",key:"suzuki-shunsuke"}],frontMatter:{title:"Graylog\u306eAlert\u306e\u8ab2\u984c",date:"2018-12-19T12:02:11.000Z",tags:["graylog"],authors:["suzuki-shunsuke"]},prevItem:{title:"Go \u306b\u304a\u3051\u308b\u30a8\u30e9\u30fc\u30cf\u30f3\u30c9\u30ea\u30f3\u30b0\u3068\u30ed\u30ae\u30f3\u30b0\u306e\u30d7\u30e9\u30af\u30c6\u30a3\u30b9",permalink:"/golang-logging-error-handling-practice"},nextItem:{title:"Graylog \u306e Terraform \u3092 CI/CD\u3067\u5b9f\u884c\u3059\u308b",permalink:"/graylog-terraform-ci"}},u={authorsImageUrls:[void 0]},s=[{value:"2018-12-31 \u8ffd\u8a18",id:"2018-12-31-\u8ffd\u8a18",level:2},{value:"\u8ab2\u984c\u30ea\u30b9\u30c8",id:"\u8ab2\u984c\u30ea\u30b9\u30c8",level:2}],p={toc:s};function c(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Graylog\u3092\u904b\u7528\u3057\u3066\u304d\u3066\u611f\u3058\u3066\u3044\u308bAlert\u6a5f\u80fd\u5468\u308a\u306e\u8ab2\u984c\u3092\u30ea\u30b9\u30c8\u30a2\u30c3\u30d7\u3057\u307e\u3059\u3002\n\u81ea\u5206\u306eGraylog\u306e\u7406\u89e3\u304c\u4e0d\u5341\u5206\u3067\u52d8\u9055\u3044\u3057\u3066\u3044\u308b\u90e8\u5206\u3082\u3042\u308b\u304b\u3082\u3057\u308c\u307e\u305b\u3093\u304c\u3001\u3054\u4e86\u627f\u304f\u3060\u3055\u3044\u3002\nGraylog\u306e\u30d0\u30fc\u30b8\u30e7\u30f3\u306f 2.5.0 \u3067\u3059\u3002\n\u3053\u3053\u3067\u3044\u3046\u300c\u30e1\u30f3\u30b7\u30e7\u30f3\u300d\u3068\u306f\u3001Slack\u306e\u3088\u3046\u306a\u30c1\u30e3\u30c3\u30c8\u30c4\u30fc\u30eb\u306e\u30e1\u30f3\u30b7\u30e7\u30f3\u3092\u6307\u3057\u307e\u3059\u3002\n\u30ea\u30b9\u30c8\u306e\u8a73\u7d30\u3092\u66f8\u304d\u3060\u3057\u3066\u307f\u305f\u3082\u306e\u306e\u3001\u30ea\u30b9\u30c8\u3060\u3051\u3067\u3060\u3044\u305f\u3044\u8a00\u3044\u305f\u3044\u3053\u3068\u304c\u8a00\u3048\u3066\u3057\u307e\u3063\u3066\u3044\u305f\u306e\u3068\u3001\u5358\u306a\u308b\u611a\u75f4\u3063\u307d\u304f\u306a\u3063\u3066\u3057\u307e\u3063\u305f\u306e\u3067\u3001\n\u30ea\u30b9\u30c8\u3060\u3051\u306b\u7559\u3081\u307e\u3059\u3002"),(0,n.kt)("h2",{id:"2018-12-31-\u8ffd\u8a18"},"2018-12-31 \u8ffd\u8a18"),(0,n.kt)("p",null,"\u5143\u3005 Alert Condition, Notification \u306e API\u304c\u306a\u3044\u3068\u52d8\u9055\u3044\u3057\u3066\u3044\u305f\u306e\u3067\u3059\u304c\u3001\n\u5b9f\u306f\u3061\u3083\u3093\u3068\u3042\u3063\u305f\u306e\u3067 terraform \u3067\u7ba1\u7406\u3067\u304d\u308b\u3088\u3046\u306b go-graylog \u3092\u66f4\u65b0\u3057\u307e\u3057\u305f\u3002"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/suzuki-shunsuke/go-graylog/pull/50"},"https://github.com/suzuki-shunsuke/go-graylog/pull/50")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/suzuki-shunsuke/go-graylog/pull/52"},"https://github.com/suzuki-shunsuke/go-graylog/pull/52")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/suzuki-shunsuke/go-graylog/blob/v11.0.0/docs/resources/alarm_callback.md"},"https://github.com/suzuki-shunsuke/go-graylog/blob/v11.0.0/docs/resources/alarm_callback.md")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/suzuki-shunsuke/go-graylog/blob/v11.0.0/docs/resources/alert_condition.md"},"https://github.com/suzuki-shunsuke/go-graylog/blob/v11.0.0/docs/resources/alert_condition.md"))),(0,n.kt)("h2",{id:"\u8ab2\u984c\u30ea\u30b9\u30c8"},"\u8ab2\u984c\u30ea\u30b9\u30c8"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("del",{parentName:"li"},"API\u3067Alert Condition, Notification\u3092\u7ba1\u7406\u3067\u304d\u306a\u3044"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("del",{parentName:"li"},"API\u304c\u306a\u3044\u306e\u3067 terraform \u3067\u30b5\u30dd\u30fc\u30c8\u3082\u51fa\u6765\u306a\u3044")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("del",{parentName:"li"},"\u6570\u304c\u5897\u3048\u308b\u3068Web UI\u3067\u306f\u7ba1\u7406\u304c\u8f9b\u3044\u30fb\u4fee\u6b63\u6f0f\u308c\u3084\u8a2d\u5b9a\u30df\u30b9\u304c\u51fa\u3084\u3059\u3044")))),(0,n.kt)("li",{parentName:"ul"},"Condition, Notification\u304cStream\u306b\u7d10\u3065\u304f",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Condition\u306b\u3088\u3063\u3066Notification\u3092\u5909\u3048\u3089\u308c\u306a\u3044",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u6761\u4ef6\u306b\u5fdc\u3058\u3066\u30a2\u30e9\u30fc\u30c8\u306e\u6587\u9762\u30fb\u901a\u77e5\u5148\u30fb\u30e1\u30f3\u30b7\u30e7\u30f3\u5148\u30fb\u30e1\u30f3\u30b7\u30e7\u30f3\u306e\u6709\u7121\u3092\u5909\u3048\u3089\u308c\u306a\u3044\n(\u6b63\u78ba\u306b\u306f\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u30a8\u30f3\u30b8\u30f3\u3067\u9811\u5f35\u308c\u3070\u3042\u308b\u7a0b\u5ea6\u5bfe\u5fdc\u3067\u304d\u308b\u304b\u3082\u3057\u308c\u306a\u3044\u304c\u3001\u500b\u4eba\u7684\u306b\u306f\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u305d\u306e\u3082\u306e\u3092\u5207\u308a\u66ff\u3048\u305f\u3044)"))),(0,n.kt)("li",{parentName:"ul"},"Condition\u3084Notification\u3092\u8907\u6570\u306eStream\u3067\u4f7f\u3044\u56de\u305b\u306a\u3044"))),(0,n.kt)("li",{parentName:"ul"},"(\u5c11\u306a\u304f\u3068\u3082\u6a19\u6e96\u6a5f\u80fd\u3067\u306f)\u6642\u9593\u5e2f\u306b\u3088\u3063\u3066\u30a2\u30e9\u30fc\u30c8\u306e\u6319\u52d5\u3092\u5909\u66f4\u3067\u304d\u306a\u3044",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u591c\u4e2d\u306b\u306f\u30a2\u30e9\u30fc\u30c8\u3092\u98db\u3070\u3055\u306a\u3044\u30fb\u30e1\u30f3\u30b7\u30e7\u30f3\u3092\u3064\u3051\u306a\u3044\u3068\u3044\u3063\u305f\u3053\u3068\u304c\u51fa\u6765\u306a\u3044"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/Graylog2/graylog2-server/issues/3182"},"\u4e00\u6642\u7684\u306b\u30a2\u30e9\u30fc\u30c8\u3092\u6b62\u3081\u3089\u308c\u306a\u3044")))),(0,n.kt)("li",{parentName:"ul"},"Plugin\u3092\u4f7f\u3046\u306b\u3057\u3066\u3082\u3069\u308c\u3092\u4f7f\u3063\u305f\u3089\u826f\u3044\u304b\u5206\u304b\u3089\u306a\u3044",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u3082\u3063\u3068Graylog\u304c\u30e1\u30b8\u30e3\u30fc\u306b\u306a\u308c\u3070\u72b6\u6cc1\u3082\u5909\u308f\u308b\u304b\u3082\u3057\u308c\u306a\u3044")))))}c.isMDXComponent=!0}}]);