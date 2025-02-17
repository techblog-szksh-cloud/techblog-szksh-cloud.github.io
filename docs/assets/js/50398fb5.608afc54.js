"use strict";(self.webpackChunktechblog_szksh_cloud_github_io=self.webpackChunktechblog_szksh_cloud_github_io||[]).push([[5013],{5107:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>a,default:()=>m,frontMatter:()=>o,metadata:()=>u,toc:()=>i});var r=t(8168),l=(t(6540),t(5680));const o={title:"buildflow \u306e build, phase, task \u306b\u3064\u3044\u3066",date:new Date("2020-10-17T09:09:19.000Z"),tags:["oss","buildflow"],authors:["suzuki-shunsuke"]},a=void 0,u={permalink:"/buildflow-build-phase-task",source:"@site/blog/buildflow-build-phase-task.md",title:"buildflow \u306e build, phase, task \u306b\u3064\u3044\u3066",description:"buildflow \u3068\u3044\u3046\u30c4\u30fc\u30eb\u3092\u958b\u767a\u3057\u3066\u3044\u308b\u306e\u3067 buildflow \u3068\u3044\u3046\u30bf\u30b0\u3092\u3064\u3051\u3066\u4f55\u56de\u304b\u306b\u5206\u3051\u3066\u30d6\u30ed\u30b0\u3092\u66f8\u3053\u3046\u3068\u601d\u3044\u307e\u3059\u3002",date:"2020-10-17T09:09:19.000Z",formattedDate:"October 17, 2020",tags:[{label:"oss",permalink:"/tags/oss"},{label:"buildflow",permalink:"/tags/buildflow"}],readingTime:2.065,hasTruncateMarker:!1,authors:[{name:"Shunsuke Suzuki",title:"Platform Engineer / OSS Developer / Go / Terraform",url:"https://github.com/suzuki-shunsuke",imageURL:"https://github.com/suzuki-shunsuke.png",key:"suzuki-shunsuke"}],frontMatter:{title:"buildflow \u306e build, phase, task \u306b\u3064\u3044\u3066",date:"2020-10-17T09:09:19.000Z",tags:["oss","buildflow"],authors:["suzuki-shunsuke"]},prevItem:{title:"buildflow \u306e task \u306e\u8a2d\u5b9a\u9805\u76ee",permalink:"/buildflow-task"},nextItem:{title:"buildflow \u3067\u306e Tengo \u306e\u4f7f\u3044\u65b9",permalink:"/buildflow-tengo"}},s={authorsImageUrls:[void 0]},i=[],p={toc:i},c="wrapper";function m(e){let{components:n,...t}=e;return(0,l.yg)(c,(0,r.A)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,l.yg)("p",null,"buildflow \u3068\u3044\u3046\u30c4\u30fc\u30eb\u3092\u958b\u767a\u3057\u3066\u3044\u308b\u306e\u3067 ",(0,l.yg)("inlineCode",{parentName:"p"},"buildflow")," \u3068\u3044\u3046\u30bf\u30b0\u3092\u3064\u3051\u3066\u4f55\u56de\u304b\u306b\u5206\u3051\u3066\u30d6\u30ed\u30b0\u3092\u66f8\u3053\u3046\u3068\u601d\u3044\u307e\u3059\u3002"),(0,l.yg)("p",null,"\u3053\u306e\u8a18\u4e8b\u3067\u306f buildflow \u306e\u6982\u5ff5\u3067\u3042\u308b build, phase, task \u306b\u3064\u3044\u3066\u66f8\u304d\u305f\u3044\u3068\u601d\u3044\u307e\u3059\u3002"),(0,l.yg)("p",null,"buildflow \u306b\u306f Build, Phase, Task \u3068\u3044\u3046\u6982\u5ff5\u304c\u3042\u308a\u307e\u3059\u3002\nCircleCI \u306e Pipeline, Workflow, Job \u307f\u305f\u3044\u306a\u3082\u306e\u3068\u601d\u3063\u3066\u3082\u3089\u3048\u308b\u3068\u3088\u3044\u3068\u601d\u3044\u307e\u3059\u3002"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},"$ buildflow run\n")),(0,l.yg)("p",null,"\u3067 1 \u3064\u306e build \u304c\u5b9f\u884c\u3055\u308c\u307e\u3059\u3002\nbuild \u306f\u8907\u6570\u306e phase \u304b\u3089\u306a\u308a\u3001 phase \u304c 1 \u3064\u305a\u3064\u9806\u306b\u5b9f\u884c\u3055\u308c\u307e\u3059\u3002\nphase \u306f\u8907\u6570\u306e task \u304b\u3089\u306a\u308a\u3001 task \u304c\u5168\u3066\u7d42\u4e86\u3059\u308b\u3068\u3001\u305d\u306e phase \u3082\u7d42\u4e86\u3068\u306a\u308a\u307e\u3059\u3002\ntask \u306f\u4e26\u5217\u306b\u5b9f\u884c\u3057\u305f\u308a\u3001\u4f9d\u5b58\u95a2\u4fc2\u3092\u5b9a\u7fa9\u3057\u305f\u308a\u3067\u304d\u307e\u3059\u3002\ntask \u3067\u306f\u5916\u90e8\u30b3\u30de\u30f3\u30c9\u3092\u5b9f\u884c\u3057\u305f\u308a\u3067\u304d\u307e\u3059\u3002"),(0,l.yg)("p",null,"\u8a2d\u5b9a\u30d5\u30a1\u30a4\u30eb\u3067\u306f phases, tasks \u3092\u305d\u308c\u305e\u308c\u914d\u5217\u3067\u6307\u5b9a\u3057\u307e\u3059\u3002"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-yaml"},"---\nphases:\n- name: setup\n  tasks:\n  - name: hello\n    command:\n      command: echo hello\n  - name: foo\n    command:\n      command: echo foo\n- name: build\n  tasks:\n  - name: hello\n    command:\n      command: echo hello\n  - name: foo\n    command:\n      command: echo foo\n    dependency:\n    - hello\n- name: post build\n  tasks:\n  - name: hello\n    command:\n      command: echo hello\n")),(0,l.yg)("p",null,"\u4e0a\u306e\u4f8b\u3067\u306f 3 \u3064\u306e phase setup, build, post build \u304c\u9806\u306b\u5b9f\u884c\u3055\u308c\u307e\u3059\u3002\n\u30c7\u30d5\u30a9\u30eb\u30c8\u3067\u306f\u3069\u308c\u304b\u306e phase \u304c\u5931\u6557\u3059\u308b\u3068\u305d\u308c\u4ee5\u964d\u306e phase \u306f\u5b9f\u884c\u3055\u308c\u307e\u305b\u3093(\u3053\u306e\u6319\u52d5\u306f\u5909\u3048\u3089\u308c\u307e\u3059)\u3002"),(0,l.yg)("p",null,"task \u3082 phase \u540c\u69d8\u914d\u5217\u3067\u6307\u5b9a\u3057\u307e\u3059\u304c\u3001\u914d\u5217\u306e\u9806\u5e8f\u306b\u610f\u5473\u306f\u3042\u308a\u307e\u305b\u3093\u3002\n\u4f9d\u5b58\u95a2\u4fc2\u304c\u306a\u3044\u9650\u308a\u3001\u4e26\u5217\u3067\u5b9f\u884c\u3055\u308c\u307e\u3059\u3057\u3001\u5b9f\u884c\u9806\u5e8f\u306f\u4e0d\u5b9a\u3067\u3059\u3002"))}m.isMDXComponent=!0},5680:(e,n,t)=>{t.d(n,{xA:()=>p,yg:()=>f});var r=t(6540);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,l=function(e,n){if(null==e)return{};var t,r,l={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var s=r.createContext({}),i=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=i(e.components);return r.createElement(s.Provider,{value:n},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,l=e.mdxType,o=e.originalType,s=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),c=i(t),d=l,f=c["".concat(s,".").concat(d)]||c[d]||m[d]||o;return t?r.createElement(f,a(a({ref:n},p),{},{components:t})):r.createElement(f,a({ref:n},p))}));function f(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var o=t.length,a=new Array(o);a[0]=d;var u={};for(var s in n)hasOwnProperty.call(n,s)&&(u[s]=n[s]);u.originalType=e,u[c]="string"==typeof e?e:l,a[1]=u;for(var i=2;i<o;i++)a[i]=t[i];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);