"use strict";(self.webpackChunktechblog_szksh_cloud_github_io=self.webpackChunktechblog_szksh_cloud_github_io||[]).push([[8078],{3905:function(e,t,n){n.d(t,{Zo:function(){return k},kt:function(){return m}});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=a.createContext({}),o=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},k=function(e){var t=o(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,k=u(e,["components","mdxType","originalType","parentName"]),c=o(n),m=l,h=c["".concat(s,".").concat(m)]||c[m]||p[m]||r;return n?a.createElement(h,i(i({ref:t},k),{},{components:n})):a.createElement(h,i({ref:t},k))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,i=new Array(r);i[0]=c;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u.mdxType="string"==typeof e?e:l,i[1]=u;for(var o=2;o<r;o++)i[o]=n[o];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},1954:function(e,t,n){n.r(t),n.d(t,{assets:function(){return k},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return u},metadata:function(){return o},toc:function(){return p}});var a=n(7462),l=n(3366),r=(n(7294),n(3905)),i=["components"],u={title:"akoi - binary installer",date:new Date("2018-10-30T23:56:04.000Z"),authors:["suzuki-shunsuke"],tags:["oss","ansible"]},s=void 0,o={permalink:"/akoi",source:"@site/blog/akoi.md",title:"akoi - binary installer",description:"\u81ea\u4f5c\u306eOSS akoi \u306e\u7d39\u4ecb\u3092\u3057\u307e\u3059\u3002",date:"2018-10-30T23:56:04.000Z",formattedDate:"October 30, 2018",tags:[{label:"oss",permalink:"/tags/oss"},{label:"ansible",permalink:"/tags/ansible"}],readingTime:5.725,truncated:!1,authors:[{name:"Shunsuke Suzuki",title:"Platform Engineer / OSS Developer / Go / Terraform",url:"https://github.com/suzuki-shunsuke",imageURL:"https://github.com/suzuki-shunsuke.png",key:"suzuki-shunsuke"}],frontMatter:{title:"akoi - binary installer",date:"2018-10-30T23:56:04.000Z",authors:["suzuki-shunsuke"],tags:["oss","ansible"]},prevItem:{title:"Graylog \u3067 log \u3092\u7ba1\u7406\u3059\u308b",permalink:"/graylog"},nextItem:{title:"gomic - Go\u306e\u30e2\u30c3\u30af\u30b8\u30a7\u30cd\u30ec\u30fc\u30bf",permalink:"/gomic"}},k={authorsImageUrls:[void 0]},p=[{value:"\u307e\u3068\u3081",id:"\u307e\u3068\u3081",level:2},{value:"akoi \u3068\u306f",id:"akoi-\u3068\u306f",level:2},{value:"\u306a\u305c\u4f5c\u3063\u305f\u306e\u304b",id:"\u306a\u305c\u4f5c\u3063\u305f\u306e\u304b",level:2},{value:"akoi \u3068 ansible \u3092\u4f7f\u3063\u3066\u30b5\u30fc\u30d0\u306b\u30d0\u30a4\u30ca\u30ea\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb",id:"akoi-\u3068-ansible-\u3092\u4f7f\u3063\u3066\u30b5\u30fc\u30d0\u306b\u30d0\u30a4\u30ca\u30ea\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb",level:2}],c={toc:p};function m(e){var t=e.components,n=(0,l.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u81ea\u4f5c\u306eOSS ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/suzuki-shunsuke/akoi"},"akoi")," \u306e\u7d39\u4ecb\u3092\u3057\u307e\u3059\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u306a\u305c\u3053\u3093\u306a\u3082\u306e\u3092\u4f5c\u3063\u305f\u306e\u304b"),(0,r.kt)("li",{parentName:"ul"},"akoi \u3068 ansible \u3092\u4f7f\u3063\u3066\u30b5\u30fc\u30d0\u306b\u30d0\u30a4\u30ca\u30ea\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b\u65b9\u6cd5")),(0,r.kt)("p",null,"\u306b\u3064\u3044\u3066\u4e3b\u306b\u8aac\u660e\u3057\u307e\u3059\u3002"),(0,r.kt)("h2",{id:"\u307e\u3068\u3081"},"\u307e\u3068\u3081"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"akoi \u306f\u30d0\u30a4\u30ca\u30ea\u30d5\u30a1\u30a4\u30eb\u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30e9"),(0,r.kt)("li",{parentName:"ul"},"\u8a2d\u5b9a\u30d5\u30a1\u30a4\u30eb\u3067\u7ba1\u7406\u3067\u304d\u308b"),(0,r.kt)("li",{parentName:"ul"},"\u51aa\u7b49\u3067\u3042\u308a\u3001\u52b9\u7387\u3088\u304f\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3067\u304d\u308b",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u4e26\u5217\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb"),(0,r.kt)("li",{parentName:"ul"},"Accept-Ranges \u306b\u3088\u308b\u5206\u6563\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9"))),(0,r.kt)("li",{parentName:"ul"},"ansible\u3067\u30b5\u30fc\u30d0\u306b\u30d0\u30a4\u30ca\u30ea\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b\u306e\u3092\u88dc\u52a9\u3057\u3066\u304f\u308c\u308b",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"ansible \u3067\u771f\u9762\u76ee\u306b\u30d0\u30fc\u30b8\u30e7\u30f3\u30b3\u30f3\u30c8\u30ed\u30fc\u30eb\u3057\u3066\u52b9\u7387\u3088\u304f\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b\u306e\u306f\u96e3\u3057\u3044(\u307b\u3068\u3093\u3069\u306e ansible role \u306f\u51fa\u6765\u3066\u3044\u306a\u3044)")))),(0,r.kt)("h2",{id:"akoi-\u3068\u306f"},"akoi \u3068\u306f"),(0,r.kt)("p",null,"akoi \u306f\u30d0\u30a4\u30ca\u30ea\u30d5\u30a1\u30a4\u30eb\u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30e9\u3067\u3059\u3002\n\u8a2d\u5b9a\u30d5\u30a1\u30a4\u30eb\u306b\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b\u30d5\u30a1\u30a4\u30eb\u306e\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9URL\u3068\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u5148\u3092\u8a18\u8ff0\u3057\u3066\u7ba1\u7406\u3057\u307e\u3059\u3002\n\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b\u30d0\u30a4\u30ca\u30ea\u306e\u30d0\u30fc\u30b8\u30e7\u30f3\u7ba1\u7406\u304c\u53ef\u80fd\u3067\u3042\u308a\u3001\u65e2\u306b\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3057\u3066\u3042\u308b\u30d0\u30fc\u30b8\u30e7\u30f3\u3078\u306e\u5207\u308a\u66ff\u3048\u306f\u30b7\u30f3\u30dc\u30ea\u30c3\u30af\u3092\u4f5c\u308a\u76f4\u3059\u3060\u3051\u306a\u306e\u3067\u4e00\u77ac\u3067\u7d42\u308f\u308a\u307e\u3059\u3002\u7121\u99c4\u306b\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u3092\u3057\u305f\u308a\u306f\u3057\u307e\u305b\u3093\u3002\n\u8907\u6570\u306e\u30d0\u30a4\u30ca\u30ea\u3092\u4e26\u5217\u3067\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3057\u305f\u308a\u3001Accept-Ranges \u30d8\u30c3\u30c0\u306b\u3088\u308b\u5206\u6563\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u5206\u6563\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u306b\u3064\u3044\u3066\u306f"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://qiita.com/codehex/items/d0a500ac387d39a34401"},"https://qiita.com/codehex/items/d0a500ac387d39a34401")),(0,r.kt)("p",null,"\u304c\u53c2\u8003\u306b\u306a\u308a\u307e\u3059\u3002"),(0,r.kt)("p",null,"Go\u3067\u66f8\u304b\u308c\u3066\u3044\u307e\u3059\u3002"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/suzuki-shunsuke/akoi/releases"},"https://github.com/suzuki-shunsuke/akoi/releases")," \u304b\u3089\u30d0\u30a4\u30ca\u30ea\u3092\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u3057\u3066\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3067\u304d\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u8a73\u7d30\u306f",(0,r.kt)("a",{parentName:"p",href:"https://github.com/suzuki-shunsuke/akoi"},"README"),"\u3092\u8aad\u3093\u3067\u304f\u3060\u3055\u3044\u3002"),(0,r.kt)("h2",{id:"\u306a\u305c\u4f5c\u3063\u305f\u306e\u304b"},"\u306a\u305c\u4f5c\u3063\u305f\u306e\u304b"),(0,r.kt)("p",null,"\u30b5\u30fc\u30d0\u306b\u30d0\u30a4\u30ca\u30ea\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b ansible role \u3092\u66f8\u304f\u306e\u304c\u8f9b\u304b\u3063\u305f\u304b\u3089\u3067\u3059\u3002\n\u6700\u8fd1\u306f\u8272\u3005\u306a\u30bd\u30d5\u30c8\u30a6\u30a7\u30a2\u304cGo\u3067\u66f8\u304b\u308c\u3001\u30d0\u30a4\u30ca\u30ea\u3067\u914d\u5e03\u3055\u308c\u3066\u3044\u307e\u3059\u3002\n\u305d\u3046\u3044\u3063\u305f\u30d0\u30a4\u30ca\u30ea\u3092\u30b5\u30fc\u30d0\u3078\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b\u306e\u306f\nansible \u3067\u884c\u3063\u3066\u3044\u308b\u3068\u3044\u3046\u65b9\u3082\u5c11\u306a\u304f\u306a\u3044\u306e\u3067\u306f\u306a\u3044\u3067\u3057\u3087\u3046\u304b\uff1f\n\u6709\u540d\u306a\u30bd\u30d5\u30c8\u30a6\u30a7\u30a2\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b ansible role \u306f\u5927\u62b5",(0,r.kt)("a",{parentName:"p",href:"https://galaxy.ansible.com"},"Ansible Galaxy")," \u3067\u516c\u958b\u3055\u308c\u3066\u3044\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u3057\u304b\u3057\u3001\u307b\u3068\u3093\u3069\u306e role \u306f\u300c\u771f\u9762\u76ee\u306b\u300d\u30d0\u30fc\u30b8\u30e7\u30f3\u7ba1\u7406\u3057\u3066\u3044\u307e\u305b\u3093\u3002\n\u3053\u3053\u3067\u3044\u3046\u300c\u771f\u9762\u76ee\u306b\u300d\u3068\u306f"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u30d0\u30fc\u30b8\u30e7\u30f3\u3092\u6307\u5b9a\u3067\u304d\u308b"),(0,r.kt)("li",{parentName:"ol"},"\u30d0\u30fc\u30b8\u30e7\u30f3\u3092\u5909\u66f4\u3067\u304d\u308b"),(0,r.kt)("li",{parentName:"ol"},"\u6307\u5b9a\u3057\u305f\u30d0\u30fc\u30b8\u30e7\u30f3\u304c\u65e2\u306b\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3055\u308c\u3066\u3044\u308b\u5834\u5408\u306f\u7121\u99c4\u306b\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u3057\u305f\u308a\u3057\u306a\u3044")),(0,r.kt)("p",null,"\u3068\u3044\u3063\u305f\u3053\u3068\u3067\u3059\u3002"),(0,r.kt)("p",null,"\u3053\u308c\u3089\u3092 ansible \u3067\u3084\u308d\u3046\u3068\u3059\u308b\u3068\u7d50\u69cb\u9762\u5012\u306a\u3093\u3067\u3059\u3002"),(0,r.kt)("p",null,"\u65e2\u5b58\u306erole\u3067\u3088\u304f\u3042\u308b\u306e\u304c"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u30d0\u30fc\u30b8\u30e7\u30f3\u306b\u304b\u304b\u308f\u3089\u305a\u65e2\u306b\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3055\u308c\u3066\u3044\u305f\u3089\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3057\u306a\u3044(\u30d0\u30fc\u30b8\u30e7\u30f3\u5909\u66f4\u3067\u304d\u306a\u3044)"),(0,r.kt)("li",{parentName:"ol"},"1\u306e\u554f\u984c\u3092\u89e3\u6c7a\u3059\u308b\u305f\u3081\u3001\u5f37\u5236\u7684\u306b\u518d\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b\u30d5\u30e9\u30b0\u304c\u3042\u308b(\u540c\u3058\u30d0\u30fc\u30b8\u30e7\u30f3\u306e\u3082\u306e\u304c\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3055\u308c\u3066\u3044\u3066\u3082\u7121\u99c4\u306b\u518d\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b)")),(0,r.kt)("p",null,"\u3060\u3068\u601d\u3044\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u771f\u9762\u76ee\u306b\u3084\u308d\u3046\u3068\u3059\u308b\u3068\u3053\u3093\u306a\u611f\u3058\u306b\u306a\u308b\u6c17\u304c\u3057\u307e\u3059\u3002"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/suzuki-shunsuke/ansible_role_akoi/blob/master/tasks/install_binary.yml"},"https://github.com/suzuki-shunsuke/ansible_role_akoi/blob/master/tasks/install_binary.yml")),(0,r.kt)("p",null,"\u3053\u308c\u3089\u306e\u30ed\u30b8\u30c3\u30af\u306f\u30bd\u30d5\u30c8\u30a6\u30a7\u30a2\u306b\u95a2\u308f\u3089\u305a\u307b\u3068\u3093\u3069\u5171\u901a\u3067\u3059\u3002\n\u305d\u308c\u3092\u30bd\u30d5\u30c8\u30a6\u30a7\u30a2\u3054\u3068\u306b\u5b9f\u88c5\u3057\u3066\u30c6\u30b9\u30c8\u3057\u3066\u306a\u3093\u3066\u306e\u306f\u9762\u5012\u3067\u3059\u3002"),(0,r.kt)("p",null,"\u305d\u3053\u3067 akoi \u3092\u4f5c\u308b\u524d\u306b\u6c4e\u7528\u7684\u306a ansible role \u3068\u3057\u3066\u958b\u767a\u3057\u3066\u307f\u305f\u306e\u304c"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/suzuki-shunsuke/ansible-role-general-installer"},"https://github.com/suzuki-shunsuke/ansible-role-general-installer")),(0,r.kt)("p",null,"\u3067\u3059\u3002"),(0,r.kt)("p",null,"\u3057\u304b\u3057\u3053\u308c\u306f ansible \u306e\u30d0\u30b0\u3067\u3046\u307e\u304f\u52d5\u304d\u307e\u305b\u3093\u3067\u3057\u305f\u3002"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/ansible/ansible/issues/34736"},"https://github.com/ansible/ansible/issues/34736")),(0,r.kt)("p",null,"\u305d\u3053\u3067\u4f5c\u3089\u308c\u305f\u306e\u304c akoi \u3067\u3059\u3002\n\u7d50\u679c\u7684\u306b ansible \u3067\u3084\u308b\u3088\u308a\u9ad8\u901f\u304b\u3064\u6c4e\u7528\u7684\u306a\u306e\u3067\u4f5c\u3063\u3066\u826f\u304b\u3063\u305f\u3068\u601d\u3044\u307e\u3059\u3002"),(0,r.kt)("h2",{id:"akoi-\u3068-ansible-\u3092\u4f7f\u3063\u3066\u30b5\u30fc\u30d0\u306b\u30d0\u30a4\u30ca\u30ea\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb"},"akoi \u3068 ansible \u3092\u4f7f\u3063\u3066\u30b5\u30fc\u30d0\u306b\u30d0\u30a4\u30ca\u30ea\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb"),(0,r.kt)("p",null,"akoi \u3092\u4f7f\u3046\u306b\u3057\u3066\u3082 ansible \u304c\u4e0d\u8981\u306b\u306a\u308b\u3068\u3044\u3046\u8a71\u3067\u306f\u306a\u304f\u3001ansible \u3067akoi\u306e\u30b3\u30de\u30f3\u30c9\u3092\u5b9f\u884c\u3059\u308b\u611f\u3058\u306b\u306a\u308a\u307e\u3059\u3002\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/suzuki-shunsuke/akoi#use-akoi-at-ansible"},"README")," \u306b\u3082\u66f8\u304d\u307e\u3057\u305f\u304c\u3001 akoi\u3092 ansible \u306e shell \u30e2\u30b8\u30e5\u30fc\u30eb\u304b\u3089\u547c\u3073\u51fa\u3057\u3066\u6a19\u6e96\u51fa\u529b\u3092\u30d1\u30fc\u30b9\u3059\u308b\u3053\u3068\u3067 task \u306e ",(0,r.kt)("inlineCode",{parentName:"p"},"changed")," \u3092\u5224\u5b9a\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'tasks:\n- name: install consul\n  shell: "/usr/local/bin/akoi install -f ansible 2>&1"\n  register: result\n  changed_when: (result.stdout|from_json)["changed"]\n')),(0,r.kt)("p",null,"akoi \u3092\u4f7f\u3063\u3066\u30bd\u30d5\u30c8\u30a6\u30a7\u30a2\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u305f\u3081\u306b\u3001\u305d\u3082\u305d\u3082\u3069\u3046\u3084\u3063\u3066\u30b5\u30fc\u30d0\u306b akoi \u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b\u304b\u3067\u3059\u304c(\u5404\u30b5\u30fc\u30d0\u306b akoi \u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059)\u3001\nakoi \u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b ansible role \u3092\u63d0\u4f9b\u3057\u3066\u3044\u307e\u3059\u3002"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/suzuki-shunsuke/ansible_role_akoi"},"https://github.com/suzuki-shunsuke/ansible_role_akoi")),(0,r.kt)("p",null,"\u3053\u308c\u3067 akoi \u3092\u4f7f\u3063\u3066\u30d0\u30a4\u30ca\u30ea\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3067\u304d\u307e\u3059\u304c\u3001\u30bd\u30d5\u30c8\u30a6\u30a7\u30a2\u306e\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7\u306f\u30d0\u30a4\u30ca\u30ea\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308c\u3070\u7d42\u308f\u308a\u3068\u3044\u3046\u3053\u3068\u3067\u306f\u306a\u304f\u3001\u30e6\u30fc\u30b6\u30fc\u3084\u30b0\u30eb\u30fc\u30d7\u3092\u4f5c\u6210\u3057\u305f\u308a\u3001\u8a2d\u5b9a\u30d5\u30a1\u30a4\u30eb\u3092\u4f5c\u6210\u3057\u305f\u308a\u3001systemd \u306e\u30b5\u30fc\u30d3\u30b9\u3092\u8d77\u52d5\u3057\u305f\u308a\u3068\u8272\u3005\u3042\u308a\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u81ea\u5206\u306f\u305d\u308c\u3089\u306e\u51e6\u7406\u306f\u5225\u306e ansible role \u3068\u3057\u3066\u958b\u767a\u3057\u3066\u3044\u307e\u3059\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://galaxy.ansible.com/suzuki-shunsuke/consul_config"},"suzuki-shunsuke.consul_config")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://galaxy.ansible.com/suzuki-shunsuke/prometheus_node_exporter_config"},"suzuki-shunsuke.prometheus_node_exporter_config"))),(0,r.kt)("p",null,"\u30d0\u30a4\u30ca\u30ea\u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u306f akoi \u3067\u3084\u308a\u3001\u305d\u308c\u4ee5\u5916\u306e\u90e8\u5206\u306f\u5225\u9014 ansible role \u3092\u958b\u767a\u3059\u308b\u3068\u3044\u3046\u30b9\u30bf\u30a4\u30eb\u3067\u3059\u3002\n\u305d\u308c\u3089\u306e role \u3067\u306f\u3044\u3061\u3044\u3061\u30d0\u30a4\u30ca\u30ea\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b\u51e6\u7406\u3092\u66f8\u304b\u306a\u304f\u3066\u826f\u3044\u306e\u3067\u3060\u3044\u3076\u958b\u767a\u304c\u697d\u306b\u306a\u308a\u307e\u3057\u305f\u3002"))}m.isMDXComponent=!0}}]);