"use strict";(self.webpackChunktechblog_szksh_cloud_github_io=self.webpackChunktechblog_szksh_cloud_github_io||[]).push([[7522],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return s}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(n),s=a,k=m["".concat(u,".").concat(s)]||m[s]||d[s]||o;return n?r.createElement(k,i(i({ref:t},c),{},{components:n})):r.createElement(k,i({ref:t},c))}));function s(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4156:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return s},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return d}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],l={title:"dd-time - \u30b3\u30de\u30f3\u30c9\u306e\u5b9f\u884c\u6642\u9593\u3092 Datadog \u306b\u9001\u308b\u30c4\u30fc\u30eb",date:new Date("2019-11-30T04:54:47.000Z"),tags:["oss","datadog"],authors:["suzuki-shunsuke"]},u=void 0,p={permalink:"/dd-time",source:"@site/blog/dd-time.md",title:"dd-time - \u30b3\u30de\u30f3\u30c9\u306e\u5b9f\u884c\u6642\u9593\u3092 Datadog \u306b\u9001\u308b\u30c4\u30fc\u30eb",description:"\u30b3\u30de\u30f3\u30c9\u306e\u5b9f\u884c\u6642\u9593\u3092 Datadog \u306b\u9001\u308b dd-time \u3068\u3044\u3046\u30c4\u30fc\u30eb\u3092\u4f5c\u308a\u307e\u3057\u305f\u3002",date:"2019-11-30T04:54:47.000Z",formattedDate:"November 30, 2019",tags:[{label:"oss",permalink:"/tags/oss"},{label:"datadog",permalink:"/tags/datadog"}],readingTime:3.09,truncated:!1,authors:[{name:"Shunsuke Suzuki",title:"Platform Engineer / OSS Developer / Go / Terraform",url:"https://github.com/suzuki-shunsuke",imageURL:"https://github.com/suzuki-shunsuke.png",key:"suzuki-shunsuke"}],frontMatter:{title:"dd-time - \u30b3\u30de\u30f3\u30c9\u306e\u5b9f\u884c\u6642\u9593\u3092 Datadog \u306b\u9001\u308b\u30c4\u30fc\u30eb",date:"2019-11-30T04:54:47.000Z",tags:["oss","datadog"],authors:["suzuki-shunsuke"]},prevItem:{title:"Terraform \u306e State Locking \u306e\u6982\u8981",permalink:"/terraform-state-locking"},nextItem:{title:"\u30e2\u30d6\u30ec\u30d3\u30e5\u30fc\u3084\u3063\u3066\u3044\u304d\u305f\u3044",permalink:"/mobreview"}},c={authorsImageUrls:[void 0]},d=[],m={toc:d};function s(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u30b3\u30de\u30f3\u30c9\u306e\u5b9f\u884c\u6642\u9593\u3092 Datadog \u306b\u9001\u308b ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/suzuki-shunsuke/dd-time"},"dd-time")," \u3068\u3044\u3046\u30c4\u30fc\u30eb\u3092\u4f5c\u308a\u307e\u3057\u305f\u3002"),(0,o.kt)("p",null,"\u3053\u306e\u30c4\u30fc\u30eb\u306f ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/yuya-takeyama/circle-dd-bench"},"circle-dd-bench")," \u306b\u30a4\u30f3\u30b9\u30d1\u30a4\u30a2\u3055\u308c\u3066\u3044\u307e\u3059\u304c\u3001 CircleCI \u4ee5\u5916\u3067\u3082\u9700\u8981\u3042\u308b\u3068\u601d\u3063\u305f\u308a\u3001\u4ed6\u306b\u3082\u5e7e\u3064\u304b\u6539\u5584\u3057\u305f\u3044\u90e8\u5206\u304c\u3042\u3063\u305f\u306e\u3067\u81ea\u4f5c\u3059\u308b\u3053\u3068\u306b\u3057\u307e\u3057\u305f\u3002"),(0,o.kt)("p",null,"circle-dd-bench \u306b\u3064\u3044\u3066\u306f circle-dd-bench \u306e\u4f5c\u8005\u304c\u66f8\u3044\u305f\u30d6\u30ed\u30b0 ",(0,o.kt)("a",{parentName:"p",href:"https://blog.yuyat.jp/post/circle-dd-bench/"},"https://blog.yuyat.jp/post/circle-dd-bench/")," \u3082\u53c2\u8003\u306b\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,o.kt)("p",null,"dd-time \u306f Go \u88fd\u306a\u306e\u3067 ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/suzuki-shunsuke/dd-time/releases"},"GitHub Releases")," \u304b\u3089\u30d0\u30a4\u30ca\u30ea\u3092\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u3057\u3066\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308c\u3070\u4f7f\u3048\u307e\u3059\u3002"),(0,o.kt)("p",null,"\u4f7f\u3044\u65b9\u306f\u30b7\u30f3\u30d7\u30eb\u3067\u5b9f\u884c\u6642\u9593\u3092\u8a08\u6e2c\u3057\u305f\u3044\u30b3\u30de\u30f3\u30c9\u306e\u524d\u306b ",(0,o.kt)("inlineCode",{parentName:"p"},"dd-time --")," \u3092\u3064\u3051\u308b\u3060\u3051\u3067\u3059\u3002\n\u4f8b\u3048\u3070 Docker image \u306e\u30d3\u30eb\u30c9\u306e\u6642\u9593\u3092\u8a08\u6e2c\u3057\u305f\u3044\u5834\u5408\u6b21\u306e\u3088\u3046\u306a\u611f\u3058\u306b\u306a\u308a\u307e\u3059\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ dd-time -t command:docker-build -- docker build .\n")),(0,o.kt)("p",null,"Datadog \u306e API key \u3092\u74b0\u5883\u5909\u6570 ",(0,o.kt)("inlineCode",{parentName:"p"},"DATADOG_API_KEY")," \u3068\u3057\u3066\u8a2d\u5b9a\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002\n\u3053\u3046\u3059\u308b\u3068 ",(0,o.kt)("a",{parentName:"p",href:"https://docs.datadoghq.com/api/?lang=python#post-timeseries-points"},"Datadog \u306e Post timeseries points API")," \u3092\u4f7f\u3044\u3001",(0,o.kt)("inlineCode",{parentName:"p"},"command_execution_time")," \u3068\u3044\u3046\u30e1\u30c8\u30ea\u30c3\u30af\u30b9\u540d(\u5909\u66f4\u53ef\u80fd)\u3067\u30b3\u30de\u30f3\u30c9\u306e\u5b9f\u884c\u6642\u9593\u304c\u9001\u3089\u308c\u307e\u3059\u3002"),(0,o.kt)("p",null,"\u30e1\u30c8\u30ea\u30c3\u30af\u30b9\u306e\u540d\u524d\u3084 host, tags \u306f\u305d\u308c\u305e\u308c ",(0,o.kt)("inlineCode",{parentName:"p"},"--metric-name (-m)"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"--host"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"--tag (-t)")," \u3067\u6307\u5b9a\u3067\u304d\u307e\u3059\u3002\n",(0,o.kt)("inlineCode",{parentName:"p"},"--tag")," \u306f\u8907\u6570\u56de\u6307\u5b9a\u53ef\u80fd\u3067\u3001 ",(0,o.kt)("inlineCode",{parentName:"p"},"key:value")," \u3068\u3044\u3046\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u3067\u6307\u5b9a\u3057\u307e\u3059\u3002"),(0,o.kt)("p",null,"CircleCI \u3067\u5b9f\u884c\u3057\u305f\u5834\u5408\u3001 CircleCI \u306e\u30d3\u30eb\u30c9\u30a4\u30f3\u74b0\u5883\u5909\u6570\u304c tag \u3068\u3057\u3066\u52dd\u624b\u306b\u8a2d\u5b9a\u3055\u308c\u307e\u3059\u304c\u3001 CircleCI \u4ee5\u5916\u3067\u3082\u4f7f\u3048\u307e\u3059\u3002"),(0,o.kt)("p",null,"dd-time \u3092\u4f5c\u308b\u4e0a\u3067\u610f\u8b58\u3057\u305f\u3053\u3068\u306f\u3001",(0,o.kt)("inlineCode",{parentName:"p"},"\u900f\u904e\u7684\u306b\u3059\u308b(\u5143\u306e\u30b3\u30fc\u30c9\u306b\u307b\u3068\u3093\u3069\u5f71\u97ff\u3092\u4e0e\u3048\u305a\u306b\u4f7f\u3048\u308b\u3088\u3046\u306b\u3059\u308b)"),"\u3068\u3044\u3046\u3053\u3068\u3067\u3059\u3002\n\u5177\u4f53\u7684\u306b\u306f\u4ee5\u4e0b\u306e\u3088\u3046\u306a\u70b9\u3067\u3059\u3002"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u6a19\u6e96\u5165\u529b\u3092\u305d\u306e\u307e\u307e\u30b3\u30de\u30f3\u30c9\u306b\u6e21\u3059"),(0,o.kt)("li",{parentName:"ul"},"\u30b3\u30de\u30f3\u30c9\u306e\u6a19\u6e96\u51fa\u529b\u30fb\u6a19\u6e96\u30a8\u30e9\u30fc\u51fa\u529b\u3092\u305d\u306e\u307e\u307e\u51fa\u529b\u3059\u308b"),(0,o.kt)("li",{parentName:"ul"},"\u30b3\u30de\u30f3\u30c9\u306e exit code \u3092\u305d\u306e\u307e\u307e dd-time \u306e exit code \u3068\u3059\u308b"),(0,o.kt)("li",{parentName:"ul"},"Datadog \u3078\u306e\u9001\u4fe1\u306b\u5931\u6557\u3057\u3066\u3082 dd-time \u306e exit code \u306f 0 \u3068\u3059\u308b\n(option \u3067 non zero \u306b\u3082\u3067\u304d\u308b\u3088\u3046\u306b\u3059\u308b\u306e\u3082\u3042\u308a\u3060\u304c\u3001\u73fe\u72b6\u306f\u305d\u3046\u3057\u3066\u306a\u3044)"),(0,o.kt)("li",{parentName:"ul"},"Datadog \u3078\u306e\u9001\u4fe1\u306b\u5931\u6557\u3057\u305f\u5834\u5408\u306e\u30a8\u30e9\u30fc\u30e1\u30c3\u30bb\u30fc\u30b8\u3092\u30d5\u30a1\u30a4\u30eb\u306b\u5410\u304d\u51fa\u305b\u308b(\u30b3\u30de\u30f3\u30c9\u306e\u51fa\u529b\u3068\u6df7\u3056\u3089\u306a\u3044\u3088\u3046\u306b\u3067\u304d\u308b)",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"\u30c7\u30d5\u30a9\u30eb\u30c8\u306f\u6a19\u6e96\u30a8\u30e9\u30fc\u51fa\u529b\u3060\u304c\u3001 ",(0,o.kt)("inlineCode",{parentName:"li"},"--output (-o)")," \u3068 ",(0,o.kt)("inlineCode",{parentName:"li"},"--apend (-a)")," \u30aa\u30d7\u30b7\u30e7\u30f3\u3067\u5909\u66f4\u3067\u304d\u308b"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"--append")," \u3092\u6307\u5b9a\u3059\u308b\u3068\u8ffd\u8a18\u30e2\u30fc\u30c9\u3067\u51fa\u529b\u3067\u304d\u308b"))),(0,o.kt)("li",{parentName:"ul"},"\u9069\u5207\u306b\u30b7\u30b0\u30ca\u30eb\u30cf\u30f3\u30c9\u30ea\u30f3\u30b0\u3059\u308b(\u672c\u5f53\u306b\u9069\u5207\u3068\u8a00\u3048\u308b\u304b\u306f\u5206\u304b\u308a\u307e\u305b\u3093\u304c)")),(0,o.kt)("p",null,"\u4ee5\u4e0a\u3001\u7c21\u5358\u3067\u3059\u304c dd-time \u306e\u7d39\u4ecb\u3067\u3057\u305f\u3002"))}s.isMDXComponent=!0}}]);