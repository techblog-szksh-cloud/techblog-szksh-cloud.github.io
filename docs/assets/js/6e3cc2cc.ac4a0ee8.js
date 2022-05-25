"use strict";(self.webpackChunktechblog_szksh_cloud_github_io=self.webpackChunktechblog_szksh_cloud_github_io||[]).push([[5950],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return k}});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var i=a.createContext({}),p=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,i=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),m=p(n),k=l,f=m["".concat(i,".").concat(k)]||m[k]||s[k]||r;return n?a.createElement(f,o(o({ref:t},c),{},{components:n})):a.createElement(f,o({ref:t},c))}));function k(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,o=new Array(r);o[0]=m;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u.mdxType="string"==typeof e?e:l,o[1]=u;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3443:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return i},default:function(){return k},frontMatter:function(){return u},metadata:function(){return p},toc:function(){return s}});var a=n(7462),l=n(3366),r=(n(7294),n(3905)),o=["components"],u={title:"aqua \u3067\u7d44\u7e54\u30fb\u30c1\u30fc\u30e0\u306e\u30c4\u30fc\u30eb\u7fa4\u3092\u7ba1\u7406",date:new Date("2021-09-25T03:01:56.000Z"),tags:["oss","aqua"],authors:["suzuki-shunsuke"]},i=void 0,p={permalink:"/aqua-global-configs",source:"@site/blog/aqua-global-configs.md",title:"aqua \u3067\u7d44\u7e54\u30fb\u30c1\u30fc\u30e0\u306e\u30c4\u30fc\u30eb\u7fa4\u3092\u7ba1\u7406",description:"aqua v0.7.3 \u3092\u30ea\u30ea\u30fc\u30b9\u3057\u3001",date:"2021-09-25T03:01:56.000Z",formattedDate:"September 25, 2021",tags:[{label:"oss",permalink:"/tags/oss"},{label:"aqua",permalink:"/tags/aqua"}],readingTime:3.975,truncated:!1,authors:[{name:"Shunsuke Suzuki",title:"SRE / OSS Contributor / Tool Maker / Go / Terraform",url:"https://github.com/suzuki-shunsuke",imageURL:"https://github.com/suzuki-shunsuke.png",key:"suzuki-shunsuke"}],frontMatter:{title:"aqua \u3067\u7d44\u7e54\u30fb\u30c1\u30fc\u30e0\u306e\u30c4\u30fc\u30eb\u7fa4\u3092\u7ba1\u7406",date:"2021-09-25T03:01:56.000Z",tags:["oss","aqua"],authors:["suzuki-shunsuke"]},prevItem:{title:"2021-09 \u3084\u3063\u305f\u3053\u3068",permalink:"/what-i-did-2021-09"},nextItem:{title:"aqua \u306e\u8a2d\u5b9a\u30d5\u30a1\u30a4\u30eb\u3092\u30a4\u30f3\u30bf\u30e9\u30af\u30c6\u30a3\u30d6\u306b\u751f\u6210\u3059\u308b generate \u30b3\u30de\u30f3\u30c9",permalink:"/aqua-generate"}},c={authorsImageUrls:[void 0]},s=[{value:"<code>aqua install</code> \u306b\u8ffd\u52a0\u3055\u308c\u305f <code>-a</code> option",id:"aqua-install-\u306b\u8ffd\u52a0\u3055\u308c\u305f--a-option",level:2}],m={toc:s};function k(e){var t=e.components,n=(0,l.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/suzuki-shunsuke/aqua"},"aqua")," ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/suzuki-shunsuke/aqua/releases/tag/v0.7.3"},"v0.7.3")," \u3092\u30ea\u30ea\u30fc\u30b9\u3057\u3001\n\u8907\u6570\u306e global configuration \u3092\u30b5\u30dd\u30fc\u30c8\u3057\u307e\u3057\u305f\u3002"),(0,r.kt)("p",null,"\u500b\u4eba\u3067\u4f7f\u3046\u5206\u306b\u306f\u3042\u307e\u308a\u5b09\u3057\u3044\u6a5f\u80fd\u3067\u3082\u306a\u3044\u304b\u3082\u3057\u308c\u307e\u305b\u3093\u304c\u3001\n\u4f1a\u793e\u30fb\u7d44\u7e54\u30fb\u30c1\u30fc\u30e0\u3068\u3044\u3063\u305f\u96c6\u56e3(\u4ee5\u4e0b",(0,r.kt)("inlineCode",{parentName:"p"},"\u7d44\u7e54"),"\u3067\u7d71\u4e00)\u3067\u8a2d\u5b9a\u3092\u5171\u6709\u3059\u308b\u306b\u306f\u4fbf\u5229\u306a\u6a5f\u80fd\u3060\u3068\u601d\u3044\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u3053\u308c\u307e\u3067 aqua \u3067\u306f 2 \u3064\u306e\u8a2d\u5b9a\u30d5\u30a1\u30a4\u30eb\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u3057\u305f\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"-c \u3067\u6307\u5b9a\u3057\u305f\u5834\u5408\u306f\u305d\u306e\u30d5\u30a1\u30a4\u30eb\u3001\u305d\u3046\u3067\u306a\u3051\u308c\u3070\u30ab\u30ec\u30f3\u30c8\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u304b\u3089\u63a2\u7d22\u3057\u3066\u6700\u521d\u306b\u898b\u3064\u304b\u3063\u305f\u30d5\u30a1\u30a4\u30eb",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u30ea\u30dd\u30b8\u30c8\u30ea\u76f4\u4e0b\u306b\u305d\u306e\u30ea\u30dd\u30b8\u30c8\u30ea\u7528\u306e aqua.yaml \u3092\u304a\u304f"))),(0,r.kt)("li",{parentName:"ul"},"global configuration (\u30c7\u30d5\u30a9\u30eb\u30c8\u306f ",(0,r.kt)("inlineCode",{parentName:"li"},"~/.aqua/global/[.]aqua.y[a]ml"),")",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u500b\u4eba\u306e dotfiles \u3068\u304b\u3067 aqua.yaml \u3092\u7ba1\u7406\u3057\u3066\u304a\u304f")))),(0,r.kt)("p",null,"\u3053\u3046\u3059\u308b\u3053\u3068\u3067\u7279\u5b9a\u306e\u30ea\u30dd\u30b8\u30c8\u30ea\u7528\u306e\u8a2d\u5b9a\u3068\u500b\u4eba\u306e\u8a2d\u5b9a\u3092\u7ba1\u7406\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u3057\u304b\u3057\u3001\u7b2c\u4e09\u306e\u8a2d\u5b9a\u3092\u53c2\u7167\u3059\u308b\u3053\u3068\u306f\u3067\u304d\u307e\u305b\u3093\u3067\u3057\u305f\u3002\n\u4f8b\u3048\u3070\u3042\u308b\u7d44\u7e54\u3067\u4f7f\u3046\u30c4\u30fc\u30eb\u30bb\u30c3\u30c8\u3092 aqua \u3067\u7ba1\u7406\u3057\u3088\u3046\u3068\u601d\u3063\u3066\u3082\u3053\u308c\u307e\u3067\u306f\u96e3\u3057\u304b\u3063\u305f\u3067\u3059\u3002"),(0,r.kt)("p",null,"\u305d\u3053\u3067 ",(0,r.kt)("inlineCode",{parentName:"p"},"AQUA_GLOBAL_CONFIG")," \u3068\u3044\u3046\u74b0\u5883\u5909\u6570\u306b ",(0,r.kt)("inlineCode",{parentName:"p"},":")," \u533a\u5207\u308a\u3067\u8a2d\u5b9a\u30d5\u30a1\u30a4\u30eb\u3078\u306e\u30d1\u30b9\u3092\u8a2d\u5b9a\u3059\u308b\u3053\u3068\u3067\u5148\u982d\u304b\u3089\u9806\u306b\u8a2d\u5b9a\u30d5\u30a1\u30a4\u30eb\u3092\u53c2\u7167\u3059\u308b\u3088\u3046\u306b\u3057\u307e\u3057\u305f\u3002"),(0,r.kt)("p",null,"\u8a2d\u5b9a\u30d5\u30a1\u30a4\u30eb\u306e\u512a\u5148\u9806\u4f4d\u306f\u9ad8\u3044\u65b9\u304b\u3089\u9806\u306b\u6b21\u306e\u3088\u3046\u306b\u306a\u308a\u307e\u3059\u3002"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"-c \u3067\u6307\u5b9a\u3057\u305f\u5834\u5408\u306f\u305d\u306e\u30d5\u30a1\u30a4\u30eb\u3001\u305d\u3046\u3067\u306a\u3051\u308c\u3070\u30ab\u30ec\u30f3\u30c8\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u304b\u3089\u63a2\u7d22\u3057\u3066\u6700\u521d\u306b\u898b\u3064\u304b\u3063\u305f\u30d5\u30a1\u30a4\u30eb"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"AQUA_GLOBAL_CONFIG")),(0,r.kt)("li",{parentName:"ol"},"global configuration (\u30c7\u30d5\u30a9\u30eb\u30c8\u306f ",(0,r.kt)("inlineCode",{parentName:"li"},"~/.aqua/global/[.]aqua.y[a]ml"),")")),(0,r.kt)("p",null,"\u30a4\u30e1\u30fc\u30b8\u3068\u3057\u3066\u306f"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8(\u30ea\u30dd\u30b8\u30c8\u30ea)\u306e\u8a2d\u5b9a"),(0,r.kt)("li",{parentName:"ol"},"\u7d44\u7e54\u306e\u8a2d\u5b9a"),(0,r.kt)("li",{parentName:"ol"},"\u500b\u4eba\u306e\u8a2d\u5b9a")),(0,r.kt)("p",null,"\u3068\u3044\u3046\u611f\u3058\u3067\u3059\u3002"),(0,r.kt)("p",null,"\u4f8b\u3048\u3070 GitHub Organizations \u306b aqua-config \u3068\u3044\u3046\u30ea\u30dd\u30b8\u30c8\u30ea\u3092\u4f5c\u6210\u3057\u3001\u4ee5\u4e0b\u306e\u3088\u3046\u306a\u30d5\u30a1\u30a4\u30eb\u3092\u7528\u610f\u3057\u305f\u3068\u3057\u307e\u3057\u3087\u3046\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"all.yaml: \u5168 Developer \u7528\u306e\u8a2d\u5b9a"),(0,r.kt)("li",{parentName:"ul"},"sre.yaml: SRE Team \u7528\u306e\u8a2d\u5b9a")),(0,r.kt)("p",null,"\u305d\u306e\u30ea\u30dd\u30b8\u30c8\u30ea\u3092\u30ed\u30fc\u30ab\u30eb ",(0,r.kt)("inlineCode",{parentName:"p"},"/home/foo/aqua-config")," \u306b checkout \u3057\u305f\u3068\u3057\u307e\u3057\u3087\u3046\u3002\n\u3042\u306a\u305f\u304c SRE \u306e\u5834\u5408\u3001 AQUA_GLOBAL_CONFIG \u3092\u6b21\u306e\u3088\u3046\u306b\u8a2d\u5b9a\u3057\u307e\u3057\u3087\u3046\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"export AQUA_GLOBAL_CONFIG=/home/foo/aqua-config/sre.yaml:/home/foo/aqua-config/all.yaml\n")),(0,r.kt)("p",null,"\u3053\u3046\u3059\u308b\u3053\u3068\u3067\u7279\u5b9a\u306e\u30ea\u30dd\u30b8\u30c8\u30ea\u7528\u306e\u8a2d\u5b9a\u3068\u500b\u4eba\u306e\u8a2d\u5b9a(dotfiles)\u306b\u52a0\u3048\u3066\u3001\n\u81ea\u5206\u304c\u6240\u5c5e\u3059\u308b\u7d44\u7e54\u7528\u306e\u8a2d\u5b9a\u3082\u53c2\u7167\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u7d44\u7e54\u3068\u3057\u3066\u306f\u7d44\u7e54\u306b\u5fc5\u8981\u306a\u30c4\u30fc\u30eb\u7fa4\u3092 aqua \u3067\u5ba3\u8a00\u7684\u306b\u7ba1\u7406\u3067\u304d\u308b\u305f\u3081\u3001\n\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7\u306e\u30b3\u30b9\u30c8\u3082\u4e0b\u304c\u308a\u3001\u30d0\u30fc\u30b8\u30e7\u30f3\u3082\u7d44\u7e54\u3067\u7d71\u4e00\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,r.kt)("h2",{id:"aqua-install-\u306b\u8ffd\u52a0\u3055\u308c\u305f--a-option"},(0,r.kt)("inlineCode",{parentName:"h2"},"aqua install")," \u306b\u8ffd\u52a0\u3055\u308c\u305f ",(0,r.kt)("inlineCode",{parentName:"h2"},"-a")," option"),(0,r.kt)("p",null,"v0.7.3 \u3067\u306f ",(0,r.kt)("inlineCode",{parentName:"p"},"aqua install")," \u306b ",(0,r.kt)("inlineCode",{parentName:"p"},"-a")," option \u304c\u8ffd\u52a0\u3055\u308c\u307e\u3057\u305f\u3002\n",(0,r.kt)("inlineCode",{parentName:"p"},"aqua install")," \u306f\u30c7\u30d5\u30a9\u30eb\u30c8\u3067\u306f global configuration \u306f\u53c2\u7167\u3057\u307e\u305b\u3093\u3002\nglobal configuration \u3092\u53c2\u7167\u3059\u308b\u306e\u306f ",(0,r.kt)("inlineCode",{parentName:"p"},"aqua exec")," \u53ca\u3073 aqua \u3067\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3055\u308c\u305f\u30c4\u30fc\u30eb\u3092\u5b9f\u884c\u3057\u305f\u3068\u304d(\u5185\u90e8\u7684\u306b ",(0,r.kt)("inlineCode",{parentName:"p"},"aqua exec")," \u304c\u5b9f\u884c\u3055\u308c\u3066\u3044\u308b)\u3060\u3051\u3067\u3059\u3002"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"-a")," option \u3092\u3064\u3051\u308b\u3068 global configuration \u3082\u542b\u3081\u3066\u5168\u3066\u306e\u8a2d\u5b9a\u30d5\u30a1\u30a4\u30eb\u3092\u53c2\u7167\u3057 install \u3092\u5b9f\u884c\u3057\u307e\u3059\u3002"),(0,r.kt)("p",null,"aqua.yaml \u3092 Git \u3067\u7ba1\u7406\u3057\u3066\u3044\u308b\u5834\u5408\u306f\u5b9a\u671f\u7684\u306b \u30ea\u30dd\u30b8\u30c8\u30ea\u3092 pull \u3057\u3066 ",(0,r.kt)("inlineCode",{parentName:"p"},"aqua i -a -l")," \u3092\u5b9f\u884c\u3059\u308b\u306e\u304c\u826f\u3044\u3067\u3057\u3087\u3046\u3002\n\u7c21\u5358\u306a\u30b9\u30af\u30ea\u30d7\u30c8\u3092\u66f8\u3044\u305f\u308a\u3001 cron \u3067\u5b9a\u671f\u5b9f\u884c\u3059\u308b\u3088\u3046\u306b\u3059\u308b\u3068\u3088\u3044\u304b\u3082\u3057\u308c\u307e\u305b\u3093\u3002"))}k.isMDXComponent=!0}}]);