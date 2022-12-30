"use strict";(self.webpackChunktechblog_szksh_cloud_github_io=self.webpackChunktechblog_szksh_cloud_github_io||[]).push([[9726],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>f});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),c=u(n),d=r,f=c["".concat(s,".").concat(d)]||c[d]||p[d]||l;return n?a.createElement(f,o(o({ref:t},m),{},{components:n})):a.createElement(f,o({ref:t},m))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[c]="string"==typeof e?e:r,o[1]=i;for(var u=2;u<l;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6287:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var a=n(7462),r=(n(7294),n(3905));const l={title:"buildflow \u306e dynamic task",date:new Date("2020-10-17T12:29:51.000Z"),tags:["oss","buildflow"],authors:["suzuki-shunsuke"]},o=void 0,i={permalink:"/buildflow-dynamic-task",source:"@site/blog/buildflow-dynamic-task.md",title:"buildflow \u306e dynamic task",description:"buildflow \u3068\u3044\u3046\u30c4\u30fc\u30eb\u3092\u958b\u767a\u3057\u3066\u3044\u308b\u306e\u3067 buildflow \u3068\u3044\u3046\u30bf\u30b0\u3092\u3064\u3051\u3066\u4f55\u56de\u304b\u306b\u5206\u3051\u3066\u30d6\u30ed\u30b0\u3092\u66f8\u304d\u307e\u3059\u3002",date:"2020-10-17T12:29:51.000Z",formattedDate:"October 17, 2020",tags:[{label:"oss",permalink:"/tags/oss"},{label:"buildflow",permalink:"/tags/buildflow"}],readingTime:2.5,truncated:!1,authors:[{name:"Shunsuke Suzuki",title:"Platform Engineer / OSS Developer / Go / Terraform",url:"https://github.com/suzuki-shunsuke",imageURL:"https://github.com/suzuki-shunsuke.png",key:"suzuki-shunsuke"}],frontMatter:{title:"buildflow \u306e dynamic task",date:"2020-10-17T12:29:51.000Z",tags:["oss","buildflow"],authors:["suzuki-shunsuke"]},prevItem:{title:"buildflow \u3067\u306f\u306a\u305c Tengo \u3092\u63a1\u7528\u3057\u3066\u3044\u308b\u306e\u304b",permalink:"/buildflow-why-tengo"},nextItem:{title:"buildflow \u306e task \u306e input, output \u3068\u3044\u3046\u6a5f\u80fd",permalink:"/buildflow-input-output"}},s={authorsImageUrls:[void 0]},u=[{value:"\u5236\u7d04",id:"\u5236\u7d04",level:2}],m={toc:u};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"buildflow \u3068\u3044\u3046\u30c4\u30fc\u30eb\u3092\u958b\u767a\u3057\u3066\u3044\u308b\u306e\u3067 ",(0,r.kt)("inlineCode",{parentName:"p"},"buildflow")," \u3068\u3044\u3046\u30bf\u30b0\u3092\u3064\u3051\u3066\u4f55\u56de\u304b\u306b\u5206\u3051\u3066\u30d6\u30ed\u30b0\u3092\u66f8\u304d\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u3053\u306e\u8a18\u4e8b\u3067\u306f buildflow \u306e dynamic task \u3068\u3044\u3046\u6a5f\u80fd\u306b\u3064\u3044\u3066\u8aac\u660e\u3057\u307e\u3059\u3002\ndynamic task \u3067\u306f task.items \u306e\u5024\u3067\u30eb\u30fc\u30d7\u3092\u56de\u3057\u3001\u8907\u6570\u306e task \u3092\u52d5\u7684\u306b\u751f\u6210\u3067\u304d\u307e\u3059\u3002\n\u52ff\u8ad6 task.items \u306f\u30aa\u30d7\u30b7\u30e7\u30f3\u306a\u306e\u3067\u3001\u6307\u5b9a\u3057\u306a\u3051\u308c\u3070\u666e\u901a\u306e task \u3068\u3057\u3066\u6271\u308f\u308c\u307e\u3059\u3002\ntask.items \u3092\u6307\u5b9a\u3059\u308b\u5834\u5408\u3001 map \u304b list \u304b\u3001\u305d\u308c\u3089\u3092\u8fd4\u3059 Tengo script \u3067\u306a\u3044\u3068\u3044\u3051\u307e\u305b\u3093\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'---\nphases:\n- name: main\n  tasks:\n  - name: "list {{.Item.Key}} {{.Item.Value.name}}"\n    command:\n      command: "echo {{.Item.Key}} {{.Item.Value.name}} {{.Item.Value.age}}"\n    items:\n    - name: foo\n      age: 10\n    - name: bar\n      age: 20\n')),(0,r.kt)("p",null,"\u4e0a\u8a18\u306e\u8a2d\u5b9a\u306f dynamic task \u3092\u4f7f\u308f\u306a\u3044\u3068\u3053\u3046\u306a\u308a\u307e\u3059\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'---\nphases:\n- name: main\n  tasks:\n  - name: "list 0 foo"\n    command:\n      command: "echo 0 foo 10"\n  - name: "list 1 bar"\n    command:\n      command: "echo 1 bar 20"\n')),(0,r.kt)("p",null,"\u30d1\u30e9\u30e1\u30fc\u30bf ",(0,r.kt)("inlineCode",{parentName:"p"},"Item")," \u306f Key, Value \u3092\u6301\u3061\u3001 Items \u304c map \u306e\u5834\u5408\u3001\u305d\u308c\u305e\u308c map \u306e key, value \u304c\u6e21\u3055\u308c\u3001 list \u306e\u5834\u5408\u3001 index \u3068 value \u304c\u6e21\u3055\u308c\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u4e0a\u8a18\u306e\u4f8b\u306f\u5358\u7d14\u3059\u304e\u3066\u30a4\u30de\u30a4\u30c1\u304b\u3082\u3057\u308c\u307e\u305b\u3093\u304c\u3001\n\u4f8b\u3048\u3070\u30d5\u30a1\u30a4\u30eb\u306a\u3069\u306e\u4e00\u89a7\u3092\u8fd4\u3059\u30b3\u30de\u30f3\u30c9\u306e\u5b9f\u884c\u7d50\u679c\u3092\u5143\u306b\ndynamic task \u3067\u30d5\u30a1\u30a4\u30eb\u3054\u3068\u306b\u5225\u306e task \u3067\u4e26\u5217\u306b\u51e6\u7406\u3059\u308b\u3068\u304b\u304c\u8003\u3048\u3089\u308c\u305d\u3046\u3067\u3059\u3002"),(0,r.kt)("h2",{id:"\u5236\u7d04"},"\u5236\u7d04"),(0,r.kt)("p",null,"task.items \u306f phase \u306e\u6700\u521d\u306b\u8a55\u4fa1\u3055\u308c\u307e\u3059\u3002\n\u3064\u307e\u308a\u540c\u3058 phase \u306e task \u306e\u7d50\u679c\u3092\u53c2\u7167\u3057\u305f\u308a\u51fa\u6765\u307e\u305b\u3093\u3002"),(0,r.kt)("p",null,"\u3053\u308c\u306f task.dependency \u306e\u8a55\u4fa1\u6642\u306b\u3001 task \u306e\u30ea\u30b9\u30c8\u304c\u5b9a\u307e\u3063\u3066\u3044\u306a\u3044\u3068\u8a55\u4fa1\u3067\u304d\u306a\u3044\u305f\u3081\u3067\u3059\u3002"),(0,r.kt)("p",null,"\u305f\u3060\u3057\u3001\u524d\u306e phase \u53ca\u3073 phase \u306e task \u306e\u5b9f\u884c\u7d50\u679c\u306f\u53c2\u7167\u3067\u304d\u308b\u305f\u3081\u3001 items \u3067\u7279\u5b9a\u306e task \u306e\u5b9f\u884c\u7d50\u679c\u3092\u53c2\u7167\u3057\u305f\u3044\u5834\u5408\u306f\u3001phase \u3092\u5206\u3051\u308b\u3053\u3068\u306b\u306a\u308a\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u5b9f\u306f dynamic task \u3092\u5b9f\u73fe\u3059\u308b\u4e0a\u3067\u4e0a\u8a18\u306e\u554f\u984c\u3092\u30af\u30ea\u30a2\u3059\u308b\u305f\u3081\u306b phase \u3068\u3044\u3046\u6982\u5ff5\u3092\u5c0e\u5165\u3057\u305f\u3068\u3044\u3046\u7d4c\u7def\u304c\u3042\u3063\u305f\u308a\u307e\u3059\u3002"))}c.isMDXComponent=!0}}]);