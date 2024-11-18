"use strict";(self.webpackChunktechblog_szksh_cloud_github_io=self.webpackChunktechblog_szksh_cloud_github_io||[]).push([[7745],{5680:(e,r,t)=>{t.d(r,{xA:()=>s,yg:()=>h});var a=t(6540);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function n(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?n(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,a,o=function(e,r){if(null==e)return{};var t,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)t=n[a],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)t=n[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=a.createContext({}),p=function(e){var r=a.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},s=function(e){var r=p(e.components);return a.createElement(u.Provider,{value:r},e.children)},c="mdxType",g={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},m=a.forwardRef((function(e,r){var t=e.components,o=e.mdxType,n=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),c=p(t),m=o,h=c["".concat(u,".").concat(m)]||c[m]||g[m]||n;return t?a.createElement(h,i(i({ref:r},s),{},{components:t})):a.createElement(h,i({ref:r},s))}));function h(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var n=t.length,i=new Array(n);i[0]=m;var l={};for(var u in r)hasOwnProperty.call(r,u)&&(l[u]=r[u]);l.originalType=e,l[c]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<n;p++)i[p]=t[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},3202:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>u,contentTitle:()=>i,default:()=>g,frontMatter:()=>n,metadata:()=>l,toc:()=>p});var a=t(8168),o=(t(6540),t(5680));const n={title:"Terraform Provider\u3067 import \u3092\u5b9f\u88c5\u3059\u308b\u65b9\u6cd5",date:new Date("2019-01-25T13:38:28.000Z"),draft:!1,tags:["terraform","graylog"],archives:["2019/01"],authors:["suzuki-shunsuke"]},i=void 0,l={permalink:"/terraform-provider-graylog-import",source:"@site/blog/terraform-provider-graylog-import.md",title:"Terraform Provider\u3067 import \u3092\u5b9f\u88c5\u3059\u308b\u65b9\u6cd5",description:"terraform provider graylog \u3067 alert condition \u3068 stream rule \u306e import \u3092\u5b9f\u88c5\u3057\u307e\u3057\u305f\u3002",date:"2019-01-25T13:38:28.000Z",formattedDate:"January 25, 2019",tags:[{label:"terraform",permalink:"/tags/terraform"},{label:"graylog",permalink:"/tags/graylog"}],readingTime:1.955,hasTruncateMarker:!1,authors:[{name:"Shunsuke Suzuki",title:"Platform Engineer / OSS Developer / Go / Terraform",url:"https://github.com/suzuki-shunsuke",imageURL:"https://github.com/suzuki-shunsuke.png",key:"suzuki-shunsuke"}],frontMatter:{title:"Terraform Provider\u3067 import \u3092\u5b9f\u88c5\u3059\u308b\u65b9\u6cd5",date:"2019-01-25T13:38:28.000Z",draft:!1,tags:["terraform","graylog"],archives:["2019/01"],authors:["suzuki-shunsuke"]},prevItem:{title:"go-error-handling-logging-practice v0.2",permalink:"/golang-logging-error-handling-practice-0.2.0"},nextItem:{title:"Github\u3092Free Plan\u306b\u30c0\u30a6\u30f3\u30b0\u30ec\u30fc\u30c9\u3057\u305f",permalink:"/downgrade-github-plan"}},u={authorsImageUrls:[void 0]},p=[],s={toc:p},c="wrapper";function g(e){let{components:r,...t}=e;return(0,o.yg)(c,(0,a.A)({},s,t,{components:r,mdxType:"MDXLayout"}),(0,o.yg)("p",null,"terraform provider graylog \u3067 alert condition \u3068 stream rule \u306e import \u3092\u5b9f\u88c5\u3057\u307e\u3057\u305f\u3002"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"https://github.com/suzuki-shunsuke/go-graylog/pull/59"},"https://github.com/suzuki-shunsuke/go-graylog/pull/59")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"https://github.com/suzuki-shunsuke/go-graylog/pull/60"},"https://github.com/suzuki-shunsuke/go-graylog/pull/60"))),(0,o.yg)("p",null,"\u305d\u3053\u3067 import \u3092\u5b9f\u88c5\u3059\u308b\u65b9\u6cd5\u3092\u7d39\u4ecb\u3057\u305f\u3044\u3068\u601d\u3044\u307e\u3059\u3002"),(0,o.yg)("p",null,"terraform \u3067\u30ea\u30bd\u30fc\u30b9\u3092import\u3059\u308b\u306b\u306f\u30ea\u30bd\u30fc\u30b9\u304cimport\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002\n",(0,o.yg)("a",{parentName:"p",href:"https://godoc.org/github.com/hashicorp/terraform/helper/schema#Resource"},"schema.Resource \u306e Importer \u30d5\u30a3\u30fc\u30eb\u30c9"),"\u3067\u3059\u306d\u3002\u30ea\u30bd\u30fc\u30b9\u304cID\u3060\u3051\u3067Get\u51fa\u6765\u308b\u5834\u5408\u3001",(0,o.yg)("a",{parentName:"p",href:"https://godoc.org/github.com/hashicorp/terraform/helper/schema#ImportStatePassthrough"},"schema.ImportStatePassthrough"),"\u3092\u4f7f\u3048\u3070\u7d42\u308f\u308a\u3067\u3059\u3002\n\u4e00\u65b9\u3001Graylog\u306ealert condition \u3084 stream rule \u306fID\u3060\u3051\u3067\u306a\u304f\u3001stream id \u3082\u5fc5\u8981\u306b\u306a\u308a\u307e\u3059\u3002\nterraform import \u30b3\u30de\u30f3\u30c9\u306f1\u3064\u306e\u5f15\u6570\u3057\u304b\u53d6\u3089\u306a\u3044\u305f\u3081\u3001\u30b5\u30dd\u30fc\u30c8\u3067\u304d\u306a\u3044\u306e\u3067\u306f\uff1f\u3068\u4ee5\u524d\u307e\u3067\u601d\u3063\u3066\u3044\u307e\u3057\u305f\u3002\n\u305d\u3046\u3044\u3063\u305f\u5834\u5408\u3001\u6b21\u306e\u3088\u3046\u306bStateFunc\u3092\u5b9f\u88c5\u3059\u308c\u3070\u30b5\u30dd\u30fc\u30c8\u3067\u304d\u307e\u3059\u3002"),(0,o.yg)("p",null,(0,o.yg)("a",{parentName:"p",href:"https://github.com/suzuki-shunsuke/go-graylog/pull/59/commits/baee1165f49d2bc21b6ea7551ceff6b7daf01543#diff-f41be2a3640efd12ad4e808d77c5c8d5"},"https://github.com/suzuki-shunsuke/go-graylog/pull/59/commits/baee1165f49d2bc21b6ea7551ceff6b7daf01543#diff-f41be2a3640efd12ad4e808d77c5c8d5")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},'# "/" \u3067\u533a\u5207\u3063\u3066 stream id \u3068 ID \u3092\u6e21\u3059\n$ terraform import graylog_alarm_callback.test 5bb1b4b5c9e77bbbbbbbbbbb/5c4acaefc9e77bbbbbbbbbbb\n')),(0,o.yg)("p",null,'\u533a\u5207\u308a\u6587\u5b57\u306f\u4f55\u3067\u3082\u826f\u3044\u306e\u3067\u3057\u3087\u3046\u304c\u3001\u516c\u5f0f\u306eprovider \u304c "/" \u3067\u533a\u5207\u3063\u3066\u3044\u305f\u306e\u3067\u305d\u308c\u306b\u5f93\u3046\u3053\u3068\u306b\u3057\u307e\u3057\u305f\u3002'),(0,o.yg)("p",null,(0,o.yg)("a",{parentName:"p",href:"https://www.terraform.io/docs/providers/google/r/spanner_database.html#import"},"https://www.terraform.io/docs/providers/google/r/spanner_database.html#import")),(0,o.yg)("p",null,(0,o.yg)("a",{parentName:"p",href:"https://godoc.org/github.com/hashicorp/terraform/helper/schema#ImportStatePassthrough"},"https://godoc.org/github.com/hashicorp/terraform/helper/schema#ImportStatePassthrough")," \u306e\u5b9f\u88c5\u3092\u898b\u3066\u307f\u308c\u3070\u5206\u304b\u308a\u307e\u3059\u304c\u3001\nStateFunc \u306e\u4e2d\u3067\u306f GET API \u3092\u53e9\u3044\u3066\u30ea\u30bd\u30fc\u30b9\u3092\u53d6\u5f97\u3057\u305f\u308a\u306f\u3057\u307e\u305b\u3093\u3002\n",(0,o.yg)("inlineCode",{parentName:"p"},"terraform import")," \u30b3\u30de\u30f3\u30c9\u306e\u6a19\u6e96\u51fa\u529b\u3092\u898b\u308b\u3068\u5206\u304b\u308a\u307e\u3059\u304c refresh \u3092\u5b9f\u884c\u3057\u3066\u3044\u308b\u306e\u3067\u305d\u3053\u3067GET\u3057\u3066\u3044\u308b\u3088\u3046\u3067\u3059\u3002\nStateFunc \u306f *schema.ResourceData \u306e\u914d\u5217\u3092\u8fd4\u3057\u307e\u3059\u304c\u3001\u3053\u308c\u306f1\u5ea6\u306eGET\u3067\u8907\u6570\u306e\u30ea\u30bd\u30fc\u30b9\u3092\u53d6\u5f97\u3059\u308b\u3088\u3046\u306aAPI\u3092\u30b5\u30dd\u30fc\u30c8\u3059\u308b\u305f\u3081\u306e\u3088\u3046\u3067\u3059\u3002"),(0,o.yg)("p",null,"\u4ee5\u4e0a\u3001terraform import \u306e\u5b9f\u88c5\u65b9\u6cd5\u306b\u3064\u3044\u3066\u7d39\u4ecb\u3057\u307e\u3057\u305f\u3002"))}g.isMDXComponent=!0}}]);