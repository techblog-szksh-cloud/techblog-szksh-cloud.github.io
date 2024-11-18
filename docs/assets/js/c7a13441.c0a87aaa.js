"use strict";(self.webpackChunktechblog_szksh_cloud_github_io=self.webpackChunktechblog_szksh_cloud_github_io||[]).push([[5839],{5680:(e,r,n)=>{n.d(r,{xA:()=>p,yg:()=>y});var t=n(6540);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function o(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function l(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?o(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function i(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var g=t.createContext({}),u=function(e){var r=t.useContext(g),n=r;return e&&(n="function"==typeof e?e(r):l(l({},r),e)),n},p=function(e){var r=u(e.components);return t.createElement(g.Provider,{value:r},e.children)},c="mdxType",s={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},m=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,o=e.originalType,g=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=u(n),m=a,y=c["".concat(g,".").concat(m)]||c[m]||s[m]||o;return n?t.createElement(y,l(l({ref:r},p),{},{components:n})):t.createElement(y,l({ref:r},p))}));function y(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var g in r)hasOwnProperty.call(r,g)&&(i[g]=r[g]);i.originalType=e,i[c]="string"==typeof e?e:a,l[1]=i;for(var u=2;u<o;u++)l[u]=n[u];return t.createElement.apply(null,l)}return t.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8864:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>g,contentTitle:()=>l,default:()=>s,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var t=n(8168),a=(n(6540),n(5680));const o={title:"go-error-handling-logging-practice v0.2",date:new Date("2019-02-01T13:26:13.000Z"),tags:["golang"],authors:["suzuki-shunsuke"]},l=void 0,i={permalink:"/golang-logging-error-handling-practice-0.2.0",source:"@site/blog/golang-logging-error-handling-practice-0.2.0.md",title:"go-error-handling-logging-practice v0.2",description:"\u4ee5\u524d Golang \u306e\u30ed\u30ae\u30f3\u30b0\u30fb\u30a8\u30e9\u30fc\u30cf\u30f3\u30c9\u30ea\u30f3\u30b0\u306b\u3064\u3044\u3066\u66f8\u304d\u307e\u3057\u305f\u3002",date:"2019-02-01T13:26:13.000Z",formattedDate:"February 1, 2019",tags:[{label:"golang",permalink:"/tags/golang"}],readingTime:2.21,hasTruncateMarker:!1,authors:[{name:"Shunsuke Suzuki",title:"Platform Engineer / OSS Developer / Go / Terraform",url:"https://github.com/suzuki-shunsuke",imageURL:"https://github.com/suzuki-shunsuke.png",key:"suzuki-shunsuke"}],frontMatter:{title:"go-error-handling-logging-practice v0.2",date:"2019-02-01T13:26:13.000Z",tags:["golang"],authors:["suzuki-shunsuke"]},prevItem:{title:"Go \u306e\u597d\u304d\u306a\u3068\u3053\u308d",permalink:"/golang-good-point"},nextItem:{title:"Terraform Provider\u3067 import \u3092\u5b9f\u88c5\u3059\u308b\u65b9\u6cd5",permalink:"/terraform-provider-graylog-import"}},g={authorsImageUrls:[void 0]},u=[{value:"\u5909\u66f4\u70b9",id:"\u5909\u66f4\u70b9",level:2},{value:"\u5909\u66f4\u7406\u7531",id:"\u5909\u66f4\u7406\u7531",level:2}],p={toc:u},c="wrapper";function s(e){let{components:r,...n}=e;return(0,a.yg)(c,(0,t.A)({},p,n,{components:r,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"\u4ee5\u524d Golang \u306e\u30ed\u30ae\u30f3\u30b0\u30fb\u30a8\u30e9\u30fc\u30cf\u30f3\u30c9\u30ea\u30f3\u30b0\u306b\u3064\u3044\u3066\u66f8\u304d\u307e\u3057\u305f\u3002"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"https://suzuki-shunsuke.github.io/golang-logging-error-handling-practice/"},"https://suzuki-shunsuke.github.io/golang-logging-error-handling-practice/")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"https://github.com/suzuki-shunsuke/go-error-handling-logging-practice"},"https://github.com/suzuki-shunsuke/go-error-handling-logging-practice"))),(0,a.yg)("p",null,"\u305d\u308c\u3092\u5c11\u3057 v0.1 \u304b\u3089 v0.2 \u306b\u4e92\u63db\u6027\u3092\u58ca\u3059\u5f62\u3067\u30a2\u30c3\u30d7\u30c7\u30fc\u30c8\u3057\u3088\u3046\u304b\u3068\u601d\u3044\u307e\u3059\u3002\n\u672c\u8a18\u4e8b\u3067\u306f\u305d\u306e\u5909\u66f4\u70b9\u306b\u3064\u3044\u3066\u66f8\u304d\u307e\u3059\u3002"),(0,a.yg)("h2",{id:"\u5909\u66f4\u70b9"},"\u5909\u66f4\u70b9"),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"\u95a2\u6570\u306e\u30a8\u30e9\u30fc\u306b\u60c5\u5831\u3092\u4ed8\u4e0e\u3059\u308b\u8cac\u52d9\u3092\u95a2\u6570\u306b\u5272\u308a\u5f53\u3066\u3066\u3044\u305f\u3082\u306e\u3092\u3001\u547c\u3073\u51fa\u3057\u5143\u306b\u5272\u308a\u5f53\u3066\u308b\u3088\u3046\u306b\u3057\u307e\u3059\u3002")),(0,a.yg)("p",null,"\u5177\u4f53\u7684\u306b\u306f\u5143\u3005"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-go"},'func createUser(name string, age int) error {\n    return errlog.Wrap(checkName(name), logrus.Fields{"age": age}, "failed to create a user")\n}\n')),(0,a.yg)("p",null,"\u3060\u3063\u305f\u3082\u306e\u304c"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-go"},'func createUser(name string, age int) error {\n    return errlog.Wrap(checkName(name), nil, "user name is invalid")\n}\n')),(0,a.yg)("p",null,"\u306b\u306a\u308a\u307e\u3059\u3002"),(0,a.yg)("h2",{id:"\u5909\u66f4\u7406\u7531"},"\u5909\u66f4\u7406\u7531"),(0,a.yg)("p",null,"\u30e1\u30bf\u60c5\u5831\u306e\u30d5\u30a3\u30fc\u30eb\u30c9\u540d\u306f\u30b3\u30f3\u30c6\u30ad\u30b9\u30c8\u306b\u4f9d\u5b58\u3057\u307e\u3059\u3002\n\u4e0a\u8a18\u306e\u4f8b\u3060\u3068\u30e6\u30fc\u30b6\u30fc\u540d\u3068\u3044\u3046\u30e1\u30bf\u60c5\u5831\u306e\u30d5\u30a3\u30fc\u30eb\u30c9\u540d\u306f ",(0,a.yg)("inlineCode",{parentName:"p"},"name")," \u3088\u308a ",(0,a.yg)("inlineCode",{parentName:"p"},"user_name")," \u3084 ",(0,a.yg)("inlineCode",{parentName:"p"},"admin_name"),", ",(0,a.yg)("inlineCode",{parentName:"p"},"owner_name")," \u3068\u3057\u305f\u307b\u3046\u304c\u9069\u5207\u304b\u3082\u3057\u308c\u307e\u305b\u3093\u3002\u305d\u308c\u306f\u95a2\u6570\u5185\u90e8\u3067\u306f\u5206\u304b\u3089\u305a\u3001\u547c\u3073\u51fa\u3057\u5143\u3067\u306a\u3044\u3068\u5206\u304b\u308a\u307e\u305b\u3093\u3002\u547c\u3073\u51fa\u3057\u5143\u3067\u306a\u3044\u3068\u30d5\u30a3\u30fc\u30eb\u30c9\u540d\u306e\u885d\u7a81\u304c\u907f\u3051\u3089\u308c\u306a\u3044\u3053\u3068\u3082\u3042\u308b\u3067\u3057\u3087\u3046\u3002"),(0,a.yg)("p",null,"\u30e1\u30c3\u30bb\u30fc\u30b8\u306b\u95a2\u3057\u3066\u3082\u540c\u69d8\u306e\u3053\u3068\u304c\u8a00\u3048\u307e\u3059\u3002\n\u307e\u305f\u3001\u5143\u3005 v0.1 \u3067\u306f\u30e6\u30fc\u30b6\u30fc\u304c\u5b9a\u7fa9\u3057\u305f\u95a2\u6570\u3068"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"\u6a19\u6e96\u95a2\u6570\u3084\u30b5\u30fc\u30c9\u30d1\u30fc\u30c6\u30a3\u306e\u30e9\u30a4\u30d6\u30e9\u30ea\u306a\u3069\u3001\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u5916\u90e8\u3067\u5b9a\u7fa9\u3055\u308c\u305f\u95a2\u6570"),(0,a.yg)("li",{parentName:"ul"},"interface \u306e\u95a2\u6570\u3084\u30e1\u30bd\u30c3\u30c9")),(0,a.yg)("p",null,"\u3092\u533a\u5225\u3057\u3001\u524d\u8005\u3067\u306f\u95a2\u6570\u5074\u3067\u30a8\u30e9\u30fc\u306b\u60c5\u5831\u3092\u4ed8\u4e0e\u3055\u305b\u308b\u4e00\u65b9\u3001\u5f8c\u8005\u3067\u306f\u547c\u3073\u51fa\u3057\u5143\u3067\u60c5\u5831\u3092\u4ed8\u4e0e\u3055\u305b\u308b\u3068\u3044\u3046\u3075\u3046\u306b\u3057\u3066\u3044\u307e\u3057\u305f\u3002"),(0,a.yg)("p",null,"v0.2 \u3067\u306f\u4e21\u8005\u3092\u533a\u5225\u305b\u305a\u3001\u3069\u3061\u3089\u306e\u5834\u5408\u3067\u3082\u547c\u3073\u51fa\u3057\u5143\u306b\u4ed8\u4e0e\u3055\u305b\u308b\u3068\u3044\u3046\u3075\u3046\u306b\u3059\u308b\u3053\u3068\u3067\u3088\u308a\u30eb\u30fc\u30eb\u304c\u30b7\u30f3\u30d7\u30eb\u306b\u306a\u308a\u307e\u3059\u3002"))}s.isMDXComponent=!0}}]);