"use strict";(self.webpackChunktechblog_szksh_cloud_github_io=self.webpackChunktechblog_szksh_cloud_github_io||[]).push([[9446],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return k}});var r=a(7294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,l=function(e,t){if(null==e)return{};var a,r,l={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var p=r.createContext({}),s=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,l=e.mdxType,n=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=s(a),k=l,c=m["".concat(p,".").concat(k)]||m[k]||g[k]||n;return a?r.createElement(c,o(o({ref:t},u),{},{components:a})):r.createElement(c,o({ref:t},u))}));function k(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var n=a.length,o=new Array(n);o[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:l,o[1]=i;for(var s=2;s<n;s++)o[s]=a[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},1113:function(e,t,a){a.r(t),a.d(t,{assets:function(){return u},contentTitle:function(){return p},default:function(){return k},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return g}});var r=a(7462),l=a(3366),n=(a(7294),a(3905)),o=["components"],i={title:"Graylog \u3067 log \u3092\u7ba1\u7406\u3059\u308b",date:new Date("2018-11-27T07:40:33.000Z"),tags:["oss","graylog"],authors:["suzuki-shunsuke"]},p=void 0,s={permalink:"/graylog",source:"@site/blog/graylog.md",title:"Graylog \u3067 log \u3092\u7ba1\u7406\u3059\u308b",description:"Java \u88fd\u306e OSS \u30ed\u30b0\u7ba1\u7406\u30b7\u30b9\u30c6\u30e0 Graylog \u306e\u7d39\u4ecb\u3067\u3059\u3002",date:"2018-11-27T07:40:33.000Z",formattedDate:"November 27, 2018",tags:[{label:"oss",permalink:"/tags/oss"},{label:"graylog",permalink:"/tags/graylog"}],readingTime:9.93,truncated:!1,authors:[{name:"Shunsuke Suzuki",title:"SRE / OSS Contributor / Tool Maker / Go / Terraform",url:"https://github.com/suzuki-shunsuke",imageURL:"https://github.com/suzuki-shunsuke.png",key:"suzuki-shunsuke"}],frontMatter:{title:"Graylog \u3067 log \u3092\u7ba1\u7406\u3059\u308b",date:"2018-11-27T07:40:33.000Z",tags:["oss","graylog"],authors:["suzuki-shunsuke"]},prevItem:{title:"Graylog\u3092Terraform\u3067\u7ba1\u7406\u3059\u308b",permalink:"/graylog-terraform"},nextItem:{title:"akoi - binary installer",permalink:"/akoi"}},u={authorsImageUrls:[void 0]},g=[{value:"Graylog \u306e\u30d0\u30fc\u30b8\u30e7\u30f3",id:"graylog-\u306e\u30d0\u30fc\u30b8\u30e7\u30f3",level:2},{value:"Graylog \u3068\u306f",id:"graylog-\u3068\u306f",level:2},{value:"\u8a8d\u8a3c\u30fb\u8a8d\u53ef",id:"\u8a8d\u8a3c\u8a8d\u53ef",level:2},{value:"\u30ed\u30b0\u306e\u53ce\u96c6",id:"\u30ed\u30b0\u306e\u53ce\u96c6",level:2},{value:"\u30ed\u30b0\u3092\u9001\u308b",id:"\u30ed\u30b0\u3092\u9001\u308b",level:2},{value:"Alert",id:"alert",level:2},{value:"\u30c0\u30c3\u30b7\u30e5\u30dc\u30fc\u30c9\u306e\u4f5c\u6210",id:"\u30c0\u30c3\u30b7\u30e5\u30dc\u30fc\u30c9\u306e\u4f5c\u6210",level:2},{value:"\u6a29\u9650\u7ba1\u7406",id:"\u6a29\u9650\u7ba1\u7406",level:2},{value:"\u6700\u5f8c\u306b",id:"\u6700\u5f8c\u306b",level:2}],m={toc:g};function k(e){var t=e.components,a=(0,l.Z)(e,o);return(0,n.kt)("wrapper",(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Java \u88fd\u306e OSS \u30ed\u30b0\u7ba1\u7406\u30b7\u30b9\u30c6\u30e0 Graylog \u306e\u7d39\u4ecb\u3067\u3059\u3002\nGraylog \u306b\u3064\u3044\u3066\u306f\u5e7e\u3064\u304b\u306b\u5206\u3051\u3066\u8a18\u4e8b\u3092\u66f8\u304d\u305f\u3044\u3068\u601d\u3044\u307e\u3059\u3002\n\u4eca\u56de\u306fGraylog\u306e\u5165\u9580\u7684\u306a\u5185\u5bb9\u306b\u306a\u308a\u307e\u3059\u3002"),(0,n.kt)("p",null,"\u306a\u304a\u3001\u672c\u8a18\u4e8b\u4e2d\u3067\u300c\u73fe\u5728\u300d\u300c\u73fe\u6642\u70b9\u300d\u3068\u3044\u3063\u305f\u5834\u5408\u3001\u7279\u306b\u65ad\u308a\u304c\u306a\u3051\u308c\u3070\u8a18\u4e8b\u57f7\u7b46\u6642\u70b9 2018-11-27 \u3092\u6307\u3057\u307e\u3059\u3002"),(0,n.kt)("h2",{id:"graylog-\u306e\u30d0\u30fc\u30b8\u30e7\u30f3"},"Graylog \u306e\u30d0\u30fc\u30b8\u30e7\u30f3"),(0,n.kt)("p",null,"\u691c\u8a3c\u306b\u7528\u3044\u308bGraylog\u306e\u30d0\u30fc\u30b8\u30e7\u30f3\u306f 2.4.6 \u306b\u306a\u308a\u307e\u3059\u3002"),(0,n.kt)("p",null,"OSS\u30d0\u30fc\u30b8\u30e7\u30f3\u3068Enterprise\u30d0\u30fc\u30b8\u30e7\u30f3\u304c\u3042\u308a\u307e\u3059\u304c\u3001\u672c\u8a18\u4e8b\u3067\u306fOSS\u30d0\u30fc\u30b8\u30e7\u30f3\u3092\u4f7f\u7528\u3057\u307e\u3059\u3002"),(0,n.kt)("h2",{id:"graylog-\u3068\u306f"},"Graylog \u3068\u306f"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.graylog.org/"},"https://www.graylog.org/")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/Graylog2/graylog2-server"},"https://github.com/Graylog2/graylog2-server"))),(0,n.kt)("p",null,"Kibana \u3068 Elasticsearch(\u4ee5\u4e0bES) \u3092\u4f7f\u3063\u305f\u3053\u3068\u304c\u3042\u308b\u4eba\u306f\u3001Kibana\u306b\u4ee3\u308f\u308b\u3082\u306e\u3060\u3068\u601d\u3063\u3066\u3044\u305f\u3060\u304f\u3068\u30a4\u30e1\u30fc\u30b8\u3057\u3084\u3059\u3044\u304b\u3068\u601d\u3044\u307e\u3059\u3002\n\u30ed\u30b0\u306fGraylog\u305d\u306e\u3082\u306e\u304c\u4fdd\u6301\u3059\u308b\u306e\u3067\u306f\u306a\u304f\u3001ES\u306b\u30a4\u30f3\u30c7\u30ad\u30b7\u30f3\u30b0\u3055\u308c\u307e\u3059\u3002\nKibana\u540c\u69d8\u3001ES\u306b\u53ce\u96c6\u3055\u308c\u305f\u30ed\u30b0\u3092\u691c\u7d22\u3057\u305f\u308a\u3001\u30c0\u30c3\u30b7\u30e5\u30dc\u30fc\u30c9\u3092\u4f5c\u3063\u305f\u308a\u51fa\u6765\u307e\u3059\u3002\n\u30c0\u30c3\u30b7\u30e5\u30dc\u30fc\u30c9\u306b\u95a2\u3057\u3066\u306fKibana\u306e\u307b\u3046\u304c\u512a\u308c\u3066\u3044\u308b\u3088\u3046\u306b\u3082\u601d\u3048\u307e\u3059\u304c\u3001\nGraylog\u306f\u8a8d\u8a3c\u30fb\u8a8d\u53ef\u306b\u3088\u308a\u30c0\u30c3\u30b7\u30e5\u30dc\u30fc\u30c9\u3084\u30ed\u30b0\u3092\u64cd\u4f5c\u3067\u304d\u308b\u4eba\u3092\u5236\u9650\u30fb\u7ba1\u7406\u3059\u308b\u3053\u3068\u304c\u51fa\u6765\u307e\u3059\u3002"),(0,n.kt)("p",null,"Graylog\u3067\u30ed\u30b0\u3092\u7ba1\u7406\u3059\u308b\u5834\u5408\u3001\u30e6\u30fc\u30b6\u30fc\u306f\u76f4\u63a5ES\u306b\u306f\u30ed\u30b0\u3092\u9001\u3089\u305a\u3001Graylog\u3092\u7d4c\u7531\u3057\u3066\u9001\u308a\u307e\u3059\u3002\nES\u306b\u5bfe\u3059\u308bGraylog\u4ee5\u5916\u306e\u30a2\u30af\u30bb\u30b9\u3092\u5236\u9650\u3057\u76f4\u63a5ES\u306b\u30a2\u30af\u30bb\u30b9\u3055\u308c\u308b\u306e\u3092\u9632\u3050\u3053\u3068\u304c\u51fa\u6765\u307e\u3059\u3002"),(0,n.kt)("p",null,"Graylog \u306f\u591a\u6a5f\u80fd\u306a\u30b7\u30b9\u30c6\u30e0\u3067\u3042\u308a\u3001\u30ed\u30b0\u3092\u6574\u5f62\u3057\u305f\u308a\u3001\u30a2\u30e9\u30fc\u30c8\u3092\u98db\u3070\u3057\u305f\u308a\u3001\u4ed6\u306e\u30b7\u30b9\u30c6\u30e0\u306b\u30ed\u30b0\u3092\u30d5\u30a9\u30ef\u30fc\u30c9\u3057\u305f\u308a\u3059\u308b\u3053\u3068\u3082\u51fa\u6765\u307e\u3059\u3002\n",(0,n.kt)("a",{parentName:"p",href:"http://docs.graylog.org/en/2.5/pages/marketplace.html"},"marketplace")," \u3067\u30b5\u30fc\u30c9\u30d1\u30fc\u30c6\u30a3\u306e plugin \u304c\u516c\u958b\u3055\u308c\u3066\u304a\u308a\u3001\u6a5f\u80fd\u3092\u62e1\u5f35\u3059\u308b\u3053\u3068\u304c\u51fa\u6765\u307e\u3059\u3002\n",(0,n.kt)("a",{parentName:"p",href:"http://docs.graylog.org/en/2.5/pages/configuration/rest_api.html"},"API"),"\u3082\u63d0\u4f9b\u3055\u308c\u3066\u304a\u308a\u3001\u3042\u308b\u7a0b\u5ea6\u81ea\u52d5\u5316\u304c\u53ef\u80fd\u3067\u3059\u3002"),(0,n.kt)("h2",{id:"\u8a8d\u8a3c\u8a8d\u53ef"},"\u8a8d\u8a3c\u30fb\u8a8d\u53ef"),(0,n.kt)("p",null,"\u30aa\u30f3\u30d7\u30ec\u30df\u30b9\u3067\u30ed\u30b0\u3092\u7ba1\u7406\u3059\u308b\u5834\u5408\u3001\u793e\u5916\u304b\u3089\u306f\u52ff\u8ad6\u793e\u5185\u304b\u3089\u306e\u30a2\u30af\u30bb\u30b9\u3082\u5236\u9650\u3057\u305f\u3044\u3067\u3059\u3002\nGraylog \u3067\u306f LDAP \u3084 Active Directory \u306b\u3088\u3063\u3066\u30a2\u30af\u30bb\u30b9\u3092\u5236\u9650\u3067\u304d\u307e\u3059\u3002\n\u30ea\u30bd\u30fc\u30b9\u6bce\u306b\u8ab0\u304c\u4f55\u3092\u51fa\u6765\u308b\u304b\u8a2d\u5b9a\u3067\u304d\u307e\u3059\u3002"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"http://docs.graylog.org/en/2.5/pages/users_and_roles/external_auth.html"},"http://docs.graylog.org/en/2.5/pages/users_and_roles/external_auth.html")),(0,n.kt)("h2",{id:"\u30ed\u30b0\u306e\u53ce\u96c6"},"\u30ed\u30b0\u306e\u53ce\u96c6"),(0,n.kt)("p",null,"\u30ed\u30b0\u306e\u53ce\u96c6\u3092\u3059\u308b\u306b\u306f Graylog \u3067\u5e7e\u3064\u304b\u306e\u30ea\u30bd\u30fc\u30b9\u3092\u4f5c\u6210\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Input"),(0,n.kt)("li",{parentName:"ul"},"Index Set"),(0,n.kt)("li",{parentName:"ul"},"Stream"),(0,n.kt)("li",{parentName:"ul"},"Stream Rule")),(0,n.kt)("p",null,"Input \u306f\u30ed\u30b0\u306e\u5165\u529b\u306e\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u306e\u8a2d\u5b9a\u3067\u3042\u308a\u3001\n\u3069\u306e\u30dd\u30fc\u30c8\u3067\u3069\u3046\u3044\u3063\u305f\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u306e\u30ed\u30b0\u3092\u53d7\u3051\u4ed8\u3051\u308b\u304b\u3068\u3044\u3046\u8a2d\u5b9a\u306b\u306a\u308a\u307e\u3059\u3002\n\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u306f\u69d8\u3005\u306a\u3082\u306e\u304c\u30b5\u30dd\u30fc\u30c8\u3055\u308c\u3066\u3044\u307e\u3059\u3002"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"AWS Flow Logs"),(0,n.kt)("li",{parentName:"ul"},"AWS Cloud Watch Logs"),(0,n.kt)("li",{parentName:"ul"},"AWS Cloud Trail"),(0,n.kt)("li",{parentName:"ul"},"Beats"),(0,n.kt)("li",{parentName:"ul"},"CEF AMQP"),(0,n.kt)("li",{parentName:"ul"},"CEF Kafka"),(0,n.kt)("li",{parentName:"ul"},"CEF TCP"),(0,n.kt)("li",{parentName:"ul"},"CEF UDP"),(0,n.kt)("li",{parentName:"ul"},"Fake HTTP Message"),(0,n.kt)("li",{parentName:"ul"},"GELF AMQP"),(0,n.kt)("li",{parentName:"ul"},"GELF HTTP"),(0,n.kt)("li",{parentName:"ul"},"GELF Kafka"),(0,n.kt)("li",{parentName:"ul"},"GELF TCP"),(0,n.kt)("li",{parentName:"ul"},"GELF UDP"),(0,n.kt)("li",{parentName:"ul"},"JSON Path"),(0,n.kt)("li",{parentName:"ul"},"NetFlow UDP"),(0,n.kt)("li",{parentName:"ul"},"Raw AMQP"),(0,n.kt)("li",{parentName:"ul"},"Syslog AMQP"),(0,n.kt)("li",{parentName:"ul"},"Syslog Kafka"),(0,n.kt)("li",{parentName:"ul"},"Syslog TCP"),(0,n.kt)("li",{parentName:"ul"},"Syslog UDP")),(0,n.kt)("p",null,"\u3053\u306e\u8a2d\u5b9a\u306f\u30ed\u30b0\u3092\u53ce\u96c6\u3059\u308b\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3054\u3068\u306b\u8a2d\u5b9a\u3059\u308b\u3068\u3044\u3046\u3088\u308a\u3001\u30b0\u30ed\u30fc\u30d0\u30eb\u306a\u8a2d\u5b9a\u306a\u306e\u3067\u3001\u4ed6\u306e\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3067\u65e2\u306b\u540c\u3058\u5f62\u5f0f\u3067\u30ed\u30b0\u3092\u53ce\u96c6\u3057\u3066\u3044\u305f\u3089\u65b0\u305f\u306b\u8a2d\u5b9a\u3059\u308b\u5fc5\u8981\u306f\u3042\u308a\u307e\u305b\u3093\u3002"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"http://docs.graylog.org/en/2.5/pages/streams.html#index-sets"},"Index Set"),"\u306fES\u306eIndex\u306e\u8ad6\u7406\u7684\u306a\u30bb\u30c3\u30c8\u3067\u3059\u3002\nGraylog\u306fES\u306e\u8907\u6570\u306eIndex\u30921\u3064\u306e\u30bb\u30c3\u30c8\u3068\u3057\u3066\u7ba1\u7406\u3057\u307e\u3059\u3002\nIndex Set\u306e\u8a2d\u5b9a\u3067\u53e4\u3044\u30ed\u30b0\u3092\u81ea\u52d5\u3067close\u3057\u305f\u308a\u524a\u9664\u3057\u305f\u308a\u3059\u308b\u4e8b\u304c\u3067\u304d\u308b\u306e\u3067\u30ed\u30b0\u306e\u7ba1\u7406\u304c\u697d\u306b\u306a\u308a\u307e\u3059\u3002\nES\u306e\u30ed\u30b0\u306f\u53ce\u96c6\u3057\u3066\u3044\u308b\u3060\u3051\u3060\u3068\u3069\u3093\u3069\u3093\u80a5\u5927\u5316\u3057\u3066\u3044\u3063\u3066\u3057\u307e\u3046\u306e\u3067\u3001",(0,n.kt)("a",{parentName:"p",href:"https://dev.classmethod.jp/server-side/elasticsearch/elastic-curator/"},"Curator\u306a\u3069\u3092\u4f7f\u3063\u3066\u53e4\u3044\u3082\u306e\u3092\u6d88\u3057\u305f\u308a\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u304c"),"\u3001\u305d\u3046\u3044\u3063\u305f\u3053\u3068\u3092Graylog\u304c\u81ea\u52d5\u3067\u3084\u3063\u3066\u304f\u308c\u307e\u3059\u3002"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"http://docs.graylog.org/en/2.5/pages/streams.html"},"Stream")," \u306fGraylog\u306b\u53ce\u96c6\u3055\u308c\u305f\u30ed\u30b0\u3092\u5206\u985e\u3059\u308b\u4ed5\u7d44\u307f\u3067\u3059\u3002\nStream\u6bce\u306b\u691c\u7d22\u3057\u305f\u308a\u30c0\u30c3\u30b7\u30e5\u30dc\u30fc\u30c9\u3092\u4f5c\u3063\u305f\u308a\u30a2\u30e9\u30fc\u30c8\u3092\u98db\u3070\u3057\u305f\u308a\u30ed\u30b0\u306e\u95b2\u89a7\u3092\u5236\u9650\u3057\u305f\u308a\u3057\u307e\u3059\u3002\n\u5206\u985e\u306e\u4ed5\u65b9\u306f\u81ea\u7531\u3067\u3059\u304c\u3001\u81ea\u5206\u306f\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u6bce\u306bStream\u3092\u4f5c\u3063\u3066\u3044\u307e\u3059\u3002\nStream\u6bce\u306bStream Rule\u3092\u5b9a\u7fa9\u3057\u3001Stream Rule\u306e\u6761\u4ef6\u306b\u30de\u30c3\u30c1\u3057\u305f\u30ed\u30b0\u306f\u305d\u306eStream\u306b\u632f\u308a\u5206\u3051\u3089\u308c\u307e\u3059\u3002\n\u81ea\u5206\u306ffluentd\u304b\u3089\u9001\u3063\u305f\u30ed\u30b0\u306e tag \u306b\u3088\u3063\u3066Stream\u3092\u5206\u3051\u3066\u3044\u307e\u3059\u3002"),(0,n.kt)("h2",{id:"\u30ed\u30b0\u3092\u9001\u308b"},"\u30ed\u30b0\u3092\u9001\u308b"),(0,n.kt)("p",null,"\u516c\u5f0f\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u306b\u5e7e\u3064\u304b\u30ed\u30b0\u306e\u9001\u308a\u65b9\u304c\u7d39\u4ecb\u3055\u308c\u3066\u3044\u307e\u3059\u3002"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"http://docs.graylog.org/en/2.5/pages/sending_data.html"},"http://docs.graylog.org/en/2.5/pages/sending_data.html")),(0,n.kt)("p",null,"\u81ea\u5206\u304c\u4e3b\u306b\u3084\u3063\u3066\u3044\u308b\u306e\u304c"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.docker.com/config/containers/logging/gelf/"},"Docker \u306e GELF log driver")," \u3092\u4f7f\u3046"),(0,n.kt)("li",{parentName:"ul"},"k8s \u306e Pod \u3067 fluentd \u3092 side car \u3068\u3057\u3066\u52d5\u304b\u3059(",(0,n.kt)("a",{parentName:"li",href:"https://hub.docker.com/r/suzukishunsuke/fluentd-gelf/"},"fluentd\u306b\u306fout_gelf plugin \u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb"),")")),(0,n.kt)("p",null,"\u3053\u3053\u307e\u3067\u3084\u308c\u3070\u30ed\u30b0\u3092",(0,n.kt)("a",{parentName:"p",href:"http://docs.graylog.org/en/2.5/pages/queries.html"},"\u691c\u7d22"),"\u3057\u305f\u308a\u51fa\u6765\u307e\u3059\u3002"),(0,n.kt)("h2",{id:"alert"},"Alert"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"http://docs.graylog.org/en/2.5/pages/streams/alerts.html"},"http://docs.graylog.org/en/2.5/pages/streams/alerts.html")),(0,n.kt)("p",null,"\u30a2\u30e9\u30fc\u30c8\u306e\u8a2d\u5b9a\u306f"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Condition: \u30a2\u30e9\u30fc\u30c8\u306e\u6761\u4ef6"),(0,n.kt)("li",{parentName:"ul"},"Notification: \u30a2\u30e9\u30fc\u30c8\u5148(\u3069\u3053\u306b\u30a2\u30e9\u30fc\u30c8\u3092\u98db\u3070\u3059\u304b)")),(0,n.kt)("p",null,"\u306e2\u3064\u306b\u5206\u304b\u308c\u307e\u3059\u3002\u305d\u308c\u305e\u308cStream\u306b\u95a2\u9023\u3065\u3044\u305f\u8a2d\u5b9a\u3067\u3059\u3002"),(0,n.kt)("p",null,"Condition \u3067\u306f"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Field content condition"),(0,n.kt)("li",{parentName:"ul"},"Field aggregation condition"),(0,n.kt)("li",{parentName:"ul"},"Message count condition")),(0,n.kt)("p",null,"\u3068\u3044\u3063\u305f\u6761\u4ef6\u3067\u8a2d\u5b9a\u3067\u304d\u307e\u3059\u3002"),(0,n.kt)("p",null,"Notification \u306f\u6a19\u6e96\u3067\u306f"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"HTTP(Webhook)"),(0,n.kt)("li",{parentName:"ul"},"Email")),(0,n.kt)("p",null,"\u306e2\u7a2e\u985e\u3057\u304b\u306a\u3044\u306e\u3067\u3059\u304c\u3001plugin\u3067 Slack \u306a\u3069\u306b\u3082\u901a\u77e5\u3059\u308b\u3053\u3068\u304c\u51fa\u6765\u307e\u3059\u3002\n\u81ea\u5206\u306f ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/graylog-labs/graylog-plugin-slack"},"https://github.com/graylog-labs/graylog-plugin-slack")," \u3092\u4f7f\u3063\u3066 Slack \u306b\u901a\u77e5\u3057\u3066\u3044\u307e\u3059\u3002"),(0,n.kt)("p",null,"Notification \u306e\u30e1\u30c3\u30bb\u30fc\u30b8\u306e\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u306f\u81ea\u7531\u306b\u5909\u3048\u3089\u308c\u307e\u3059\u304c\u3001\u3069\u3046\u3044\u3063\u305f\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u304c\u826f\u3044\u304b\u306f\u96e3\u3057\u3044\u3067\u3059\u3002\n\u81ea\u5206\u306f\u6b21\u306e\u3088\u3046\u306a\u611f\u3058\u306b\u3057\u3066\u3044\u307e\u3059\u3002"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"${alert_condition.title}\n\n${foreach backlog message}\n<https://graylog.example.com/streams/${stream.id}/search?rangetype=absolute&from=${message.timestamp}&to=${message.timestamp} | link> ${message.message}\n${end}\n")),(0,n.kt)("p",null,"graylog \u306e URL \u306f\u9069\u5b9c\u7f6e\u304d\u63db\u3048\u3066\u304f\u3060\u3055\u3044\u3002\n",(0,n.kt)("inlineCode",{parentName:"p"},"link")," \u306e\u90e8\u5206\u3092\u5909\u6570(",(0,n.kt)("inlineCode",{parentName:"p"},"${message.message}"),"\u3068\u304b)\u306b\u3059\u308b\u3068\u30ea\u30f3\u30af\u304c\u58ca\u308c\u3066\u3057\u307e\u3046\u3053\u3068\u304c\u3042\u3063\u305f\u306e\u3067\u56fa\u5b9a\u6587\u5b57\u5217\u306b\u3057\u3066\u3044\u307e\u3059\u3002"),(0,n.kt)("p",null,"graylog-plugin-slack \u306e\u8a2d\u5b9a\u3067 ",(0,n.kt)("inlineCode",{parentName:"p"},"Graylog URL (optional)"),"\u3092\u8a2d\u5b9a\u3057\u306a\u3044\u3068 ",(0,n.kt)("inlineCode",{parentName:"p"},"${stream_url}")," \u306a\u3069\u304c\u7a7a\u306b\u306a\u3063\u3066\u3057\u307e\u3046\u3053\u3068\u306b\u6ce8\u610f\u3057\u3066\u304f\u3060\u3055\u3044\u3002\n\u81ea\u5206\u306f optional \u306a\u306e\u3067\u5143\u3005\u8a2d\u5b9a\u3057\u3066\u3044\u306a\u304b\u3063\u305f\u306e\u3067\u30cf\u30de\u308a\u307e\u3057\u305f(\u30b0\u30b0\u3063\u3066\u3082\u5206\u304b\u3089\u306a\u304b\u3063\u305f)\u3002\n",(0,n.kt)("inlineCode",{parentName:"p"},"Graylog URL"),"\u3068\u3044\u3046\u8a2d\u5b9a\u306f notification \u6bce\u306b\u5909\u3048\u308b\u3088\u3046\u306a\u3082\u306e\u3067\u3082\u306a\u3044\u306e\u3067global\u306b\u8a2d\u5b9a\u3067\u304d\u308b\u3068\u3088\u3044\u306e\u3067\u3059\u304c\u3001\u3069\u3046\u3082\u51fa\u6765\u306a\u305d\u3046\u3067\u3059\u3002"),(0,n.kt)("p",null,"\u307e\u305f\u3001\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u4e2d\u3067\u4f7f\u3048\u308b\u5909\u6570\u306e\u4e2d\u306bmessage\u306eURL\u306f\u306a\u3044\u305d\u3046\u3067\u3059\u3002"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://community.graylog.org/t/message-url-in-alert-notification/1916"},"https://community.graylog.org/t/message-url-in-alert-notification/1916")),(0,n.kt)("p",null,"\u305d\u306e\u305f\u3081\u3001message.timestamp \u3092 from \u3068 to \u306b\u6307\u5b9a\u3057\u3066\u691c\u7d22\u3059\u308b\u3068\u3044\u3046\u56de\u308a\u304f\u3069\u3044(?)\u3053\u3068\u3092\u3057\u3066\u3044\u307e\u3059\u3002"),(0,n.kt)("h2",{id:"\u30c0\u30c3\u30b7\u30e5\u30dc\u30fc\u30c9\u306e\u4f5c\u6210"},"\u30c0\u30c3\u30b7\u30e5\u30dc\u30fc\u30c9\u306e\u4f5c\u6210"),(0,n.kt)("p",null,"\u30c0\u30c3\u30b7\u30e5\u30dc\u30fc\u30c9\u306e\u4f5c\u6210\u306f"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Dashboard\u30da\u30fc\u30b8: \u7a7a\u306eDashboard\u3092\u4f5c\u308b"),(0,n.kt)("li",{parentName:"ol"},"Stream \u30da\u30fc\u30b8: \u30af\u30a8\u30ea\u3092\u5b9f\u884c\u3057\u305f\u308a\u3057\u3066\u30b0\u30e9\u30d5\u3092\u4f5c\u308b"),(0,n.kt)("li",{parentName:"ol"},"Stream \u30da\u30fc\u30b8: \u30b0\u30e9\u30d5\u3092Dashboard\u306b\u8ffd\u52a0\u3059\u308b"),(0,n.kt)("li",{parentName:"ol"},"Dashboard\u30da\u30fc\u30b8: \u30b0\u30e9\u30d5\u3092\u4e26\u3073\u66ff\u3048\u305f\u308a\u3059\u308b")),(0,n.kt)("p",null,"\u8a73\u7d30\u306f\u5272\u611b\u3059\u308b\u306e\u3067 ",(0,n.kt)("a",{parentName:"p",href:"http://docs.graylog.org/en/2.5/pages/dashboards.html"},"http://docs.graylog.org/en/2.5/pages/dashboards.html")," \u3092\u8aad\u3093\u3067\u304f\u3060\u3055\u3044\u3002"),(0,n.kt)("h2",{id:"\u6a29\u9650\u7ba1\u7406"},"\u6a29\u9650\u7ba1\u7406"),(0,n.kt)("p",null,"Graylog\u306e\u6a29\u9650\u7ba1\u7406\u3067\u306f User \u3068 Role \u3068\u3044\u3046\u6982\u5ff5\u304c\u3042\u308a\u3001\nRole \u306e permissions \u3068\u3057\u3066\u3069\u306e\u30ea\u30bd\u30fc\u30b9\u306b\u3069\u3046\u3044\u3063\u305f\u64cd\u4f5c\u3092\u8a31\u53ef\u3059\u308b\u304b\u5b9a\u7fa9\u3057\u3001\nUser \u306b Role \u3092\u4ed8\u4e0e\u3057\u307e\u3059\u3002"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"http://docs.graylog.org/en/2.5/pages/users_and_roles/permission_system.html#permissions"},"http://docs.graylog.org/en/2.5/pages/users_and_roles/permission_system.html#permissions")),(0,n.kt)("p",null,"permissions \u3068\u3057\u3066\u5b9a\u7fa9\u3067\u304d\u308b\u3082\u306e\u306f\u516c\u5f0f\u306a\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u304c\u898b\u3064\u304b\u3089\u306a\u3044\u306e\u3067\u3059\u304c\u3001API\u3067\u53d6\u5f97\u3067\u304d\u307e\u3059\u3002"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://gist.github.com/suzuki-shunsuke/e371f1bd2716cde31d6fa89bf39f0e77"},"https://gist.github.com/suzuki-shunsuke/e371f1bd2716cde31d6fa89bf39f0e77")),(0,n.kt)("p",null,"\u4f8b\u3048\u3070 ",(0,n.kt)("inlineCode",{parentName:"p"},"streams:read")," \u306f\u5168\u3066\u306eStream\u3092read\u3059\u308b\u6a29\u9650\u3068\u306a\u308a\u307e\u3059\u3057\u3001\n",(0,n.kt)("inlineCode",{parentName:"p"},"streams:read:<stream id>")," \u3068\u3059\u308c\u3070\u7279\u5b9a\u306eStream\u306e\u307fread\u3059\u308b\u6a29\u9650\u3068\u306a\u308a\u307e\u3059\u3002"),(0,n.kt)("p",null,"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3054\u3068\u306brole\u3092\u5b9a\u7fa9\u3057\u3066\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u95a2\u4fc2\u8005\u306b\u4ed8\u4e0e\u3057\u305f\u308a\u3001\u30a2\u30eb\u30d0\u30a4\u30c8\u3084\u6b63\u793e\u54e1\u3068\u3044\u3063\u305f\u96c7\u7528\u5f62\u614b\u306b\u5fdc\u3058\u3066role\u3092\u5b9a\u7fa9\u3057\u305f\u308a\u3001\u8272\u3005\u306a\u5229\u7528\u65b9\u6cd5\u306f\u3042\u308b\u3068\u601d\u3044\u307e\u3059\u3002"),(0,n.kt)("p",null,"\u3053\u3046\u3044\u3063\u305fRole\u306epermission\u306e\u5b9a\u7fa9\u306fWeb UI\u304b\u3089\u3082\u51fa\u6765\u307e\u3059\u304c\u3001\n\u6b8b\u5ff5\u306a\u304c\u3089Web UI\u304b\u3089\u3067\u306f\u306a\u304fAPI\u3092\u7528\u3044\u306a\u3044\u3068\u5b9a\u7fa9\u3067\u304d\u306a\u3044permission\u3082\u3042\u308a\u307e\u3059\u3002\n\u305d\u306e\u305f\u3081\u3001\u81ea\u5206\u306f Graylog API\u3092\u7528\u3044\u3066 terraform provider \u3092\u958b\u767a\u3057\u3001terraform \u3067 Role\u306e\u4f5c\u6210\u3092\u884c\u3063\u3066\u3044\u307e\u3059\u3002"),(0,n.kt)("h2",{id:"\u6700\u5f8c\u306b"},"\u6700\u5f8c\u306b"),(0,n.kt)("p",null,"\u4ee5\u4e0a\u3001\u81ea\u5206\u304c\u4e3b\u306b\u4f7f\u3063\u3066\u3044\u308bGraylog\u306e\u6a5f\u80fd\u3092\u7d39\u4ecb\u3057\u307e\u3057\u305f\u3002\nGraylog\u306f\u591a\u6a5f\u80fd\u3067\u81ea\u5206\u304c\u4f7f\u3063\u3066\u3044\u306a\u3044\u3001\u5206\u304b\u3063\u3066\u3044\u306a\u3044\u6a5f\u80fd\u304c\u8272\u3005\u3042\u308a\u307e\u3059\u3002\n\u8208\u5473\u306e\u3042\u308b\u65b9\u306f\u8abf\u3079\u3066\u307f\u3066\u304f\u3060\u3055\u3044\u3002"))}k.isMDXComponent=!0}}]);