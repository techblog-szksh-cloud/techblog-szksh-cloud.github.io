"use strict";(self.webpackChunktechblog_szksh_cloud_github_io=self.webpackChunktechblog_szksh_cloud_github_io||[]).push([[3269],{3905:function(r,e,t){t.d(e,{Zo:function(){return c},kt:function(){return g}});var o=t(7294);function a(r,e,t){return e in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}function n(r,e){var t=Object.keys(r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(r);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),t.push.apply(t,o)}return t}function i(r){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?n(Object(t),!0).forEach((function(e){a(r,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(t,e))}))}return r}function l(r,e){if(null==r)return{};var t,o,a=function(r,e){if(null==r)return{};var t,o,a={},n=Object.keys(r);for(o=0;o<n.length;o++)t=n[o],e.indexOf(t)>=0||(a[t]=r[t]);return a}(r,e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(r);for(o=0;o<n.length;o++)t=n[o],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(r,t)&&(a[t]=r[t])}return a}var p=o.createContext({}),u=function(r){var e=o.useContext(p),t=e;return r&&(t="function"==typeof r?r(e):i(i({},e),r)),t},c=function(r){var e=u(r.components);return o.createElement(p.Provider,{value:e},r.children)},m={inlineCode:"code",wrapper:function(r){var e=r.children;return o.createElement(o.Fragment,{},e)}},s=o.forwardRef((function(r,e){var t=r.components,a=r.mdxType,n=r.originalType,p=r.parentName,c=l(r,["components","mdxType","originalType","parentName"]),s=u(t),g=a,f=s["".concat(p,".").concat(g)]||s[g]||m[g]||n;return t?o.createElement(f,i(i({ref:e},c),{},{components:t})):o.createElement(f,i({ref:e},c))}));function g(r,e){var t=arguments,a=e&&e.mdxType;if("string"==typeof r||a){var n=t.length,i=new Array(n);i[0]=s;var l={};for(var p in e)hasOwnProperty.call(e,p)&&(l[p]=e[p]);l.originalType=r,l.mdxType="string"==typeof r?r:a,i[1]=l;for(var u=2;u<n;u++)i[u]=t[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}s.displayName="MDXCreateElement"},6114:function(r,e,t){t.r(e),t.d(e,{assets:function(){return c},contentTitle:function(){return p},default:function(){return g},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return m}});var o=t(7462),a=t(3366),n=(t(7294),t(3905)),i=["components"],l={title:"Terraform Provider\u3067 import \u3092\u5b9f\u88c5\u3059\u308b\u65b9\u6cd5",date:new Date("2019-01-25T13:38:28.000Z"),draft:!1,tags:["terraform","graylog"],archives:["2019/01"]},p=void 0,u={permalink:"/terraform-provider-graylog-import",source:"@site/blog/terraform-provider-graylog-import.md",title:"Terraform Provider\u3067 import \u3092\u5b9f\u88c5\u3059\u308b\u65b9\u6cd5",description:"terraform provider graylog \u3067 alert condition \u3068 stream rule \u306e import \u3092\u5b9f\u88c5\u3057\u307e\u3057\u305f\u3002",date:"2019-01-25T13:38:28.000Z",formattedDate:"January 25, 2019",tags:[{label:"terraform",permalink:"/tags/terraform"},{label:"graylog",permalink:"/tags/graylog"}],readingTime:1.955,truncated:!1,authors:[],frontMatter:{title:"Terraform Provider\u3067 import \u3092\u5b9f\u88c5\u3059\u308b\u65b9\u6cd5",date:"2019-01-25T13:38:28.000Z",draft:!1,tags:["terraform","graylog"],archives:["2019/01"]},prevItem:{title:"go-error-handling-logging-practice v0.2",permalink:"/golang-logging-error-handling-practice-0.2.0"},nextItem:{title:"Github\u3092Free Plan\u306b\u30c0\u30a6\u30f3\u30b0\u30ec\u30fc\u30c9\u3057\u305f",permalink:"/downgrade-github-plan"}},c={authorsImageUrls:[]},m=[],s={toc:m};function g(r){var e=r.components,t=(0,a.Z)(r,i);return(0,n.kt)("wrapper",(0,o.Z)({},s,t,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"terraform provider graylog \u3067 alert condition \u3068 stream rule \u306e import \u3092\u5b9f\u88c5\u3057\u307e\u3057\u305f\u3002"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/suzuki-shunsuke/go-graylog/pull/59"},"https://github.com/suzuki-shunsuke/go-graylog/pull/59")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/suzuki-shunsuke/go-graylog/pull/60"},"https://github.com/suzuki-shunsuke/go-graylog/pull/60"))),(0,n.kt)("p",null,"\u305d\u3053\u3067 import \u3092\u5b9f\u88c5\u3059\u308b\u65b9\u6cd5\u3092\u7d39\u4ecb\u3057\u305f\u3044\u3068\u601d\u3044\u307e\u3059\u3002"),(0,n.kt)("p",null,"terraform \u3067\u30ea\u30bd\u30fc\u30b9\u3092import\u3059\u308b\u306b\u306f\u30ea\u30bd\u30fc\u30b9\u304cimport\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002\n",(0,n.kt)("a",{parentName:"p",href:"https://godoc.org/github.com/hashicorp/terraform/helper/schema#Resource"},"schema.Resource \u306e Importer \u30d5\u30a3\u30fc\u30eb\u30c9"),"\u3067\u3059\u306d\u3002\u30ea\u30bd\u30fc\u30b9\u304cID\u3060\u3051\u3067Get\u51fa\u6765\u308b\u5834\u5408\u3001",(0,n.kt)("a",{parentName:"p",href:"https://godoc.org/github.com/hashicorp/terraform/helper/schema#ImportStatePassthrough"},"schema.ImportStatePassthrough"),"\u3092\u4f7f\u3048\u3070\u7d42\u308f\u308a\u3067\u3059\u3002\n\u4e00\u65b9\u3001Graylog\u306ealert condition \u3084 stream rule \u306fID\u3060\u3051\u3067\u306a\u304f\u3001stream id \u3082\u5fc5\u8981\u306b\u306a\u308a\u307e\u3059\u3002\nterraform import \u30b3\u30de\u30f3\u30c9\u306f1\u3064\u306e\u5f15\u6570\u3057\u304b\u53d6\u3089\u306a\u3044\u305f\u3081\u3001\u30b5\u30dd\u30fc\u30c8\u3067\u304d\u306a\u3044\u306e\u3067\u306f\uff1f\u3068\u4ee5\u524d\u307e\u3067\u601d\u3063\u3066\u3044\u307e\u3057\u305f\u3002\n\u305d\u3046\u3044\u3063\u305f\u5834\u5408\u3001\u6b21\u306e\u3088\u3046\u306bStateFunc\u3092\u5b9f\u88c5\u3059\u308c\u3070\u30b5\u30dd\u30fc\u30c8\u3067\u304d\u307e\u3059\u3002"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/suzuki-shunsuke/go-graylog/pull/59/commits/baee1165f49d2bc21b6ea7551ceff6b7daf01543#diff-f41be2a3640efd12ad4e808d77c5c8d5"},"https://github.com/suzuki-shunsuke/go-graylog/pull/59/commits/baee1165f49d2bc21b6ea7551ceff6b7daf01543#diff-f41be2a3640efd12ad4e808d77c5c8d5")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'# "/" \u3067\u533a\u5207\u3063\u3066 stream id \u3068 ID \u3092\u6e21\u3059\n$ terraform import graylog_alarm_callback.test 5bb1b4b5c9e77bbbbbbbbbbb/5c4acaefc9e77bbbbbbbbbbb\n')),(0,n.kt)("p",null,'\u533a\u5207\u308a\u6587\u5b57\u306f\u4f55\u3067\u3082\u826f\u3044\u306e\u3067\u3057\u3087\u3046\u304c\u3001\u516c\u5f0f\u306eprovider \u304c "/" \u3067\u533a\u5207\u3063\u3066\u3044\u305f\u306e\u3067\u305d\u308c\u306b\u5f93\u3046\u3053\u3068\u306b\u3057\u307e\u3057\u305f\u3002'),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://www.terraform.io/docs/providers/google/r/spanner_database.html#import"},"https://www.terraform.io/docs/providers/google/r/spanner_database.html#import")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://godoc.org/github.com/hashicorp/terraform/helper/schema#ImportStatePassthrough"},"https://godoc.org/github.com/hashicorp/terraform/helper/schema#ImportStatePassthrough")," \u306e\u5b9f\u88c5\u3092\u898b\u3066\u307f\u308c\u3070\u5206\u304b\u308a\u307e\u3059\u304c\u3001\nStateFunc \u306e\u4e2d\u3067\u306f GET API \u3092\u53e9\u3044\u3066\u30ea\u30bd\u30fc\u30b9\u3092\u53d6\u5f97\u3057\u305f\u308a\u306f\u3057\u307e\u305b\u3093\u3002\n",(0,n.kt)("inlineCode",{parentName:"p"},"terraform import")," \u30b3\u30de\u30f3\u30c9\u306e\u6a19\u6e96\u51fa\u529b\u3092\u898b\u308b\u3068\u5206\u304b\u308a\u307e\u3059\u304c refresh \u3092\u5b9f\u884c\u3057\u3066\u3044\u308b\u306e\u3067\u305d\u3053\u3067GET\u3057\u3066\u3044\u308b\u3088\u3046\u3067\u3059\u3002\nStateFunc \u306f *schema.ResourceData \u306e\u914d\u5217\u3092\u8fd4\u3057\u307e\u3059\u304c\u3001\u3053\u308c\u306f1\u5ea6\u306eGET\u3067\u8907\u6570\u306e\u30ea\u30bd\u30fc\u30b9\u3092\u53d6\u5f97\u3059\u308b\u3088\u3046\u306aAPI\u3092\u30b5\u30dd\u30fc\u30c8\u3059\u308b\u305f\u3081\u306e\u3088\u3046\u3067\u3059\u3002"),(0,n.kt)("p",null,"\u4ee5\u4e0a\u3001terraform import \u306e\u5b9f\u88c5\u65b9\u6cd5\u306b\u3064\u3044\u3066\u7d39\u4ecb\u3057\u307e\u3057\u305f\u3002"))}g.isMDXComponent=!0}}]);