"use strict";(self.webpackChunktechblog_szksh_cloud_github_io=self.webpackChunktechblog_szksh_cloud_github_io||[]).push([[8173],{5680:(e,t,n)=>{n.d(t,{xA:()=>m,yg:()=>h});var o=n(6540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function g(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},l=Object.keys(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=o.createContext({}),i=function(e){var t=o.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},m=function(e){var t=i(e.components);return o.createElement(u.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},s=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,m=g(e,["components","mdxType","originalType","parentName"]),c=i(n),s=a,h=c["".concat(u,".").concat(s)]||c[s]||p[s]||l;return n?o.createElement(h,r(r({ref:t},m),{},{components:n})):o.createElement(h,r({ref:t},m))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,r=new Array(l);r[0]=s;var g={};for(var u in t)hasOwnProperty.call(t,u)&&(g[u]=t[u]);g.originalType=e,g[c]="string"==typeof e?e:a,r[1]=g;for(var i=2;i<l;i++)r[i]=n[i];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}s.displayName="MDXCreateElement"},7239:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>r,default:()=>p,frontMatter:()=>l,metadata:()=>g,toc:()=>i});var o=n(8168),a=(n(6540),n(5680));const l={title:"gomic - Go\u306e\u30e2\u30c3\u30af\u30b8\u30a7\u30cd\u30ec\u30fc\u30bf",date:new Date("2018-10-29T23:35:16.000Z"),tags:["oss","golang","gomic"],authors:["suzuki-shunsuke"]},r=void 0,g={permalink:"/gomic",source:"@site/blog/gomic.md",title:"gomic - Go\u306e\u30e2\u30c3\u30af\u30b8\u30a7\u30cd\u30ec\u30fc\u30bf",description:"\u81ea\u4f5c\u306eOSS gomic \u306e\u7d39\u4ecb\u3092\u3057\u307e\u3059\u3002",date:"2018-10-29T23:35:16.000Z",formattedDate:"October 29, 2018",tags:[{label:"oss",permalink:"/tags/oss"},{label:"golang",permalink:"/tags/golang"},{label:"gomic",permalink:"/tags/gomic"}],readingTime:8.18,hasTruncateMarker:!1,authors:[{name:"Shunsuke Suzuki",title:"Platform Engineer / OSS Developer / Go / Terraform",url:"https://github.com/suzuki-shunsuke",imageURL:"https://github.com/suzuki-shunsuke.png",key:"suzuki-shunsuke"}],frontMatter:{title:"gomic - Go\u306e\u30e2\u30c3\u30af\u30b8\u30a7\u30cd\u30ec\u30fc\u30bf",date:"2018-10-29T23:35:16.000Z",tags:["oss","golang","gomic"],authors:["suzuki-shunsuke"]},prevItem:{title:"akoi - binary installer",permalink:"/akoi"},nextItem:{title:"Docker\u3092\u4f7f\u3063\u3066ansible playbook\u3092\u30c6\u30b9\u30c8\u3059\u308b",permalink:"/test-ansible-on-docker"}},u={authorsImageUrls:[void 0]},i=[{value:"\u307e\u3068\u3081",id:"\u307e\u3068\u3081",level:2},{value:"gomic \u3068\u306f",id:"gomic-\u3068\u306f",level:2},{value:"\u306a\u305c\u4f5c\u3063\u305f\u306e\u304b",id:"\u306a\u305c\u4f5c\u3063\u305f\u306e\u304b",level:2},{value:"\u7d20\u306eGo\u3067\u826f\u3044\u306e\u3067\u306f(gomic\u3044\u3089\u306a\u304f\u306a\u3044)?",id:"\u7d20\u306ego\u3067\u826f\u3044\u306e\u3067\u306fgomic\u3044\u3089\u306a\u304f\u306a\u3044",level:3},{value:"\u30e2\u30c3\u30af\u306e\u4f7f\u3044\u65b9",id:"\u30e2\u30c3\u30af\u306e\u4f7f\u3044\u65b9",level:2}],m={toc:i},c="wrapper";function p(e){let{components:t,...n}=e;return(0,a.yg)(c,(0,o.A)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"\u81ea\u4f5c\u306eOSS ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/suzuki-shunsuke/gomic"},"gomic")," \u306e\u7d39\u4ecb\u3092\u3057\u307e\u3059\u3002"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"\u306a\u305c\u308f\u3056\u308f\u3056\u3053\u3093\u306a\u3082\u306e\u3092\u4f5c\u3063\u305f\u306e\u304b"),(0,a.yg)("li",{parentName:"ul"},"\u751f\u6210\u3055\u308c\u305f\u30e2\u30c3\u30af\u306e\u7c21\u5358\u306a\u4f7f\u3044\u65b9")),(0,a.yg)("p",null,"\u3092\u4e3b\u306b\u8aac\u660e\u3057\u305f\u3044\u3068\u601d\u3044\u307e\u3059\u3002"),(0,a.yg)("h2",{id:"\u307e\u3068\u3081"},"\u307e\u3068\u3081"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"gomic \u306f Go\u306einterface\u3092\u5b9f\u88c5\u3057\u305f\u30e2\u30c3\u30af\u3092\u751f\u6210\u3059\u308bCLI\u30c4\u30fc\u30eb"),(0,a.yg)("li",{parentName:"ul"},"\u30e2\u30c3\u30af\u3092\u624b\u3067\u66f8\u304f\u306e\u304c\u8f9b\u3059\u304e\u305f & \u65e2\u5b58\u30c4\u30fc\u30eb\u3067\u6e80\u8db3\u3067\u304d\u306a\u304b\u3063\u305f\u305f\u3081\u4f5c\u3063\u305f",(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"\u81ea\u52d5\u751f\u6210\u3067\u304d\u308b\u30b3\u30fc\u30c9\u306f\u81ea\u52d5\u751f\u6210\u3059\u3079\u304d"))),(0,a.yg)("li",{parentName:"ul"},"\u8a2d\u5b9a\u30d5\u30a1\u30a4\u30eb\u3067\u7ba1\u7406\u3059\u308b\u305f\u3081\u3001interface\u306e\u66f4\u65b0\u306b\u5408\u308f\u305b\u3066mock\u306e\u66f4\u65b0\u304c\u5bb9\u6613"),(0,a.yg)("li",{parentName:"ul"},"\u751f\u6210\u3055\u308c\u308b\u30e2\u30c3\u30af\u306f\u30b7\u30f3\u30d7\u30eb\u306aAPI\u306e\u307f\u63d0\u4f9b\u3059\u308b\u306e\u3067\u5b66\u7fd2\u30b3\u30b9\u30c8\u304c\u4f4e\u3044")),(0,a.yg)("h2",{id:"gomic-\u3068\u306f"},"gomic \u3068\u306f"),(0,a.yg)("p",null,"gomic \u306f Go\u306einterface\u3092\u5b9f\u88c5\u3057\u305f\u30e2\u30c3\u30af\u3092\u751f\u6210\u3059\u308bCLI\u30c4\u30fc\u30eb\u3067\u3059\u3002\n\u3053\u308c\u306b\u3088\u3063\u3066\u30e2\u30c3\u30af\u3092\u4f7f\u3063\u305f\u30c6\u30b9\u30c8\u306e\u4f5c\u6210\u3092\u52b9\u7387\u5316\u3057\u307e\u3059\u3002\n\u5358\u8abf\u306a\u4f5c\u696d\u3092\u81ea\u52d5\u5316\u3057\u3001\u672c\u6765\u6ce8\u529b\u3059\u3079\u304d\u3053\u3068\u306b\u6ce8\u529b\u3067\u304d\u308b\u3088\u3046\u306b\u3059\u308b\u305f\u3081\u306e\u30c4\u30fc\u30eb\u3067\u3059\u3002"),(0,a.yg)("p",null,"Go\u3067\u66f8\u304b\u308c\u3066\u3044\u307e\u3059\u3002"),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"https://github.com/suzuki-shunsuke/gomic/releases"},"https://github.com/suzuki-shunsuke/gomic/releases")," \u304b\u3089\u30d0\u30a4\u30ca\u30ea\u3092\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u3057\u3066\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3067\u304d\u307e\u3059\u3002"),(0,a.yg)("p",null,"\u540c\u69d8\u306e\u30c4\u30fc\u30eb\u306f\u5e7e\u3064\u304b\u3042\u308a\u307e\u3059\u3002"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"https://github.com/avelino/awesome-go#testing"},"https://github.com/avelino/awesome-go#testing")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"https://github.com/golang/mock"},"https://github.com/golang/mock")," (\u4ee5\u4e0b gomock)"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"https://github.com/gojuno/minimock"},"https://github.com/gojuno/minimock")," (\u4ee5\u4e0b minimock)")),(0,a.yg)("p",null,"\u7279\u306b gomock \u306f\u6709\u540d\u3067\u3059\u306d\u3002"),(0,a.yg)("h2",{id:"\u306a\u305c\u4f5c\u3063\u305f\u306e\u304b"},"\u306a\u305c\u4f5c\u3063\u305f\u306e\u304b"),(0,a.yg)("p",null,"\u4e0a\u8ff0\u306e\u3088\u3046\u306b\u65e2\u306b\u540c\u69d8\u306e\u30c4\u30fc\u30eb\u306f\u3042\u308a\u307e\u3059\u3057\u3001 gomock \u3068 minimock \u306f\u8a66\u3057\u307e\u3057\u305f\u3002\n\u3057\u304b\u3057\u3042\u307e\u308a\u6e80\u8db3\u306e\u3044\u304f\u3082\u306e\u3067\u306f\u306a\u304b\u3063\u305f\u305f\u3081\u3001\u81ea\u5206\u3067\u4f5c\u308b\u3053\u3068\u306b\u3057\u307e\u3057\u305f\u3002"),(0,a.yg)("p",null,"\u81ea\u5206\u304c\u6b32\u3057\u304b\u3063\u305f\u306e\u306f\u5b66\u7fd2\u30b3\u30b9\u30c8\u306e\u4f4e\u3044\u30b7\u30f3\u30d7\u30eb\u306aAPI\u3067\u3059\u3002\ninterface\u306e\u30e1\u30bd\u30c3\u30c9\u3092\u5b9f\u88c5\u3057\u305f\u95a2\u6570\u3092\u30e2\u30c3\u30af\u306b\u6e21\u3059\u3053\u3068\u3067\n\u7c21\u5358\u306b\u30e1\u30bd\u30c3\u30c9\u306e\u5b9f\u88c5\u3092\u5207\u308a\u66ff\u3048\u305f\u3044\u306e\u3067\u3059\u3002"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-go"},'// Getwd \u30e1\u30bd\u30c3\u30c9\u306e\u30e2\u30c3\u30af\nmock.SetFuncGetwd(func() (string, error) {\n    return "/tmp", nil\n})\n\nmock.Getwd() // "/tmp", nil\n')),(0,a.yg)("p",null,"\u3053\u308c\u306f\u975e\u5e38\u306b\u30b7\u30f3\u30d7\u30eb\u3067\u5206\u304b\u308a\u3084\u3059\u304f\u3001\u67d4\u8edf\u6027\u306e\u3042\u308b\u30d1\u30bf\u30fc\u30f3\u3067\u3059(minimock\u306f\u3053\u306e\u30d1\u30bf\u30fc\u30f3\u3082\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u3059)\u3002"),(0,a.yg)("p",null,"gomock \u3084 minimock \u3067\u306f"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-go"},'mockSample.EXPECT().Method("hoge").Return(1)\n')),(0,a.yg)("p",null,"\u306e\u3088\u3046\u306b \u95a2\u6570\u306e\u30d1\u30e9\u30e1\u30fc\u30bf\u3068\u623b\u308a\u5024\u306e\u30da\u30a2\u3092\u6e21\u3057\u3066\u30e2\u30c3\u30af\u3092\u5b9f\u88c5\u3059\u308b\u30d1\u30bf\u30fc\u30f3(\u4f55\u304b\u540d\u524d\u304c\u3042\u308b\u306e\u3067\u3057\u3087\u3046\u304b\uff1f)\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u3059\u3002\n\u3053\u306e\u30d1\u30bf\u30fc\u30f3\u3092 gomic \u306f\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u305b\u3093\u3002\n\u3053\u306e\u30d1\u30bf\u30fc\u30f3\u306f\u3054\u304f\u7c21\u5358\u306a\u30b5\u30f3\u30d7\u30eb\u3067\u306f\u6709\u52b9\u304b\u3082\u3057\u308c\u307e\u305b\u3093\u304c\u3001\u5b9f\u969b\u306b\u306f\u4f7f\u3048\u306a\u3044\u3053\u3068\u304c\u591a\u3044\u304b\u306a\u3068\u611f\u3058\u3066\u3044\u307e\u3059\u3002"),(0,a.yg)("p",null,"\u307e\u305f\u3001gomock \u306f\u305d\u308c\u4ee5\u5916\u306b\u3082 ",(0,a.yg)("a",{parentName:"p",href:"https://godoc.org/github.com/golang/mock/gomock#InOrder"},"gomock.InOrder")," \u3084 ",(0,a.yg)("a",{parentName:"p",href:"https://godoc.org/github.com/golang/mock/gomock#Call.After"},"gomock#Call.After")," \u306a\u3069\u3001\u8272\u3005\u4fbf\u5229\u306aAPI\u3092\u63d0\u4f9b\u3057\u3066\u3044\u307e\u3059\u304c\u3001\n\u305d\u308c\u3089\u306f\u5b66\u7fd2\u30b3\u30b9\u30c8\u3092\u4e0a\u3052\u3066\u3057\u307e\u3046\u8981\u56e0\u306b\u306a\u308b\u3068\u601d\u3044\u307e\u3059\u3002\ngomic\u306f\u305d\u3046\u3044\u3063\u305fAPI\u306f\u63d0\u4f9b\u3057\u3066\u3044\u307e\u305b\u3093\u3002"),(0,a.yg)("h3",{id:"\u7d20\u306ego\u3067\u826f\u3044\u306e\u3067\u306fgomic\u3044\u3089\u306a\u304f\u306a\u3044"},"\u7d20\u306eGo\u3067\u826f\u3044\u306e\u3067\u306f(gomic\u3044\u3089\u306a\u304f\u306a\u3044)?"),(0,a.yg)("p",null,"\u4e0a\u8ff0\u306e\u3088\u3046\u306b\u95a2\u6570\u3092\u6e21\u3059\u3060\u3051\u306e\u5b9f\u88c5\u306a\u3089 gomic \u306a\u3093\u3066\u4f7f\u308f\u306a\u304f\u3066\u3082\u7d20\u306eGo\u3067\u826f\u3044\u306e\u3067\u306f\u306a\u3044\u304b\u3068\u3044\u3046\u610f\u898b\u3082\u3042\u308a\u305d\u3046\u3067\u3059\u306d\u3002"),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"http://haya14busa.com/golang-how-to-write-mock-of-interface-for-testing/"},"http://haya14busa.com/golang-how-to-write-mock-of-interface-for-testing/")),(0,a.yg)("p",null,"\u3067\u3082\u4f3c\u305f\u3088\u3046\u306a\u30e2\u30c3\u30ad\u30f3\u30b0\u306e\u65b9\u6cd5\u304c\u30e9\u30a4\u30d6\u30e9\u30ea\u306b\u4f9d\u5b58\u3057\u306a\u3044\u3067mock\u3092\u66f8\u304f\u30d1\u30bf\u30fc\u30f3\u3068\u3057\u3066\u7d39\u4ecb\u3055\u308c\u3066\u3044\u307e\u3059\n(\u4f3c\u305f\u3088\u3046\u306a\u3068\u3044\u3046\u304b\u3001",(0,a.yg)("a",{parentName:"p",href:"https://github.com/suzuki-shunsuke/gomic/blob/v0.4.0/examples/os_mock_test.go#L20-L22"},"gomic\u3082 v0.4.0 \u307e\u3067\u306f\u69cb\u9020\u4f53\u306e\u30d5\u30a3\u30fc\u30eb\u30c9\u306b\u4ee3\u5165\u3057\u3066\u3044\u307e\u3057\u305f"),")\u3002"),(0,a.yg)("p",null,"Go\u3067\u306f\u30e9\u30a4\u30d6\u30e9\u30ea\u306b\u4f9d\u5b58\u3057\u306a\u3044\u3067\u6a19\u6e96\u30e9\u30a4\u30d6\u30e9\u30ea\u3060\u3051\u3067\u66f8\u304f\u306e\u304c\u826f\u3044\u3068\u3044\u3046\u601d\u60f3\u30fb\u610f\u898b\u304c\u3088\u304f\u898b\u3089\u308c\u307e\u3059\u3002\n\u305d\u306e\u305f\u3081\u3001gomic\u306e\u3088\u3046\u306a\u30c4\u30fc\u30eb\u3092\u597d\u307e\u306a\u3044\u65b9\u304c\u3044\u308b\u306e\u306f\u627f\u77e5\u3057\u3066\u3044\u307e\u3059\u3002"),(0,a.yg)("p",null,"\u305f\u3060\u3001\u81ea\u5206\u306f\u3053\u306e\u30d1\u30bf\u30fc\u30f3\u306e\u5b9f\u88c5\u3092\u624b\u3067\u611a\u76f4\u306b\u66f8\u304f\u306e\u306f\u8f9b\u3044\u3057\u3001\u751f\u7523\u7684\u3067\u306f\u306a\u3044\u306e\u3067\u30c4\u30fc\u30eb\u306b\u3088\u3063\u3066\u81ea\u52d5\u751f\u6210\u3059\u3079\u304d\u3060\u3068\u601d\u3063\u3066\u3044\u307e\u3059\u3002"),(0,a.yg)("p",null,"\u4ee5\u4e0b\u306f2\u3064\u306e\u30e1\u30bd\u30c3\u30c9\u306e\u307f\u6301\u3064\u30b7\u30f3\u30d7\u30eb\u306a\u30a4\u30f3\u30bf\u30d5\u30a7\u30fc\u30b9\u3068\u305d\u306e\u30e2\u30c3\u30af\u3067\u3059\u3002"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"https://github.com/suzuki-shunsuke/gomic/blob/master/examples/os.go"},"https://github.com/suzuki-shunsuke/gomic/blob/master/examples/os.go")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"https://github.com/suzuki-shunsuke/gomic/blob/master/examples/os_mock.go"},"https://github.com/suzuki-shunsuke/gomic/blob/master/examples/os_mock.go"))),(0,a.yg)("p",null,"\u3068\u3066\u3082\u30b7\u30f3\u30d7\u30eb\u306a interface \u3068\u305d\u306e\u30e2\u30c3\u30af\u3067\u3059\u304c\u3001\u305d\u308c\u3067\u3082\u30e2\u30c3\u30af\u3092\u5b9f\u88c5\u3059\u308b\u306e\u306f\u305d\u3053\u305d\u3053\u9762\u5012\u3067\u3059\u3002\n\u30e1\u30bd\u30c3\u30c9\u3001interface\u306e\u6570\u306b\u6bd4\u4f8b\u3057\u3066\u3069\u3093\u3069\u3093\u9762\u5012\u306b\u306a\u308a\u307e\u3059\u3002\ngolint\u306e\u3088\u3046\u306alinter\u3067\u30a8\u30e9\u30fc\u306b\u306a\u3089\u306a\u3044\u3088\u3046\u306b\u30b3\u30fc\u30c9\u30b3\u30e1\u30f3\u30c8\u3092\u66f8\u304f\u306e\u3082\u5730\u5473\u306b\u5927\u5909\u3067\u3059\u3002"),(0,a.yg)("p",null,"interface\u3092\u66f4\u65b0\u3059\u308c\u3070mock\u3082\u66f4\u65b0\u3057\u306a\u3044\u3068\u3044\u3051\u307e\u305b\u3093\u3002"),(0,a.yg)("p",null,"\u30c4\u30fc\u30eb\u306b\u3088\u3063\u3066\u81ea\u52d5\u5316\u3059\u3079\u304d\u3067\u3059\u3002"),(0,a.yg)("h2",{id:"\u30e2\u30c3\u30af\u306e\u4f7f\u3044\u65b9"},"\u30e2\u30c3\u30af\u306e\u4f7f\u3044\u65b9"),(0,a.yg)("p",null,"\u751f\u6210\u3055\u308c\u305f\u30e2\u30c3\u30af\u306e\u4f7f\u3044\u65b9\u306b\u3064\u3044\u3066\u8efd\u304f\u8aac\u660e\u3057\u307e\u3059\u3002\n",(0,a.yg)("a",{parentName:"p",href:"https://github.com/suzuki-shunsuke/gomic/releases/tag/v0.5.0"},"v0.5.0")," \u6642\u70b9\u306e\u3082\u306e\u306a\u306e\u3067\u53e4\u304f\u306a\u3063\u3066\u3044\u308b\u304b\u3082\u3057\u308c\u307e\u305b\u3093\u3002\n\u6700\u65b0\u306e\u4f7f\u3044\u65b9\u306f"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"https://github.com/suzuki-shunsuke/gomic"},"https://github.com/suzuki-shunsuke/gomic")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"https://github.com/suzuki-shunsuke/gomic/tree/master/examples"},"https://github.com/suzuki-shunsuke/gomic/tree/master/examples"))),(0,a.yg)("p",null,"\u3092\u3054\u78ba\u8a8d\u304f\u3060\u3055\u3044\u3002"),(0,a.yg)("p",null,"\u4ee5\u4e0b\u306e\u30b5\u30f3\u30d7\u30eb\u306f ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/suzuki-shunsuke/gomic/tree/v0.5.0/examples"},"v0.5.0\u306e\u30b5\u30f3\u30d7\u30eb")," \u3092\u5143\u306b\u3057\u3066\u3044\u307e\u3059\u3002"),(0,a.yg)("p",null,'\u307e\u305a mock \u3092\u751f\u6210\u3057\u307e\u3059(\u4ee5\u4e0b\u3053\u306e\u30e2\u30c3\u30af\u3092\u751f\u6210\u3059\u308b\u95a2\u6570\u3092"\u30b3\u30f3\u30b9\u30c8\u30e9\u30af\u30bf"\u3068\u547c\u3073\u307e\u3059)\u3002'),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-go"},"mock := examples.NewOSMock(nil, nil)\n")),(0,a.yg)("p",null,"\u7b2c\u4e00\u5f15\u6570\u306f ",(0,a.yg)("em",{parentName:"p"},"testing.T \u3067\u3001\u901a\u5e38\u306e\u30c6\u30b9\u30c8\u306a\u3089\u30c6\u30b9\u30c8\u95a2\u6570\u306e\u5f15\u6570\u3092\u305d\u306e\u307e\u307e\u6e21\u305b\u3070\u826f\u3044\u3057\u3001\u305d\u3046\u3067\u306a\u3051\u308c\u3070 nil \u3092\u6e21\u305b\u3070\u826f\u3044\u3068\u601d\u3044\u307e\u3059\u3002\n\u7b2c\u4e8c\u5f15\u6570\u306f `func(t "),"testing.T, intfName, methodName string)` \u578b\u306e\u95a2\u6570\u3067\u3001interface\u306e\u30e1\u30bd\u30c3\u30c9\u306e\u5b9f\u88c5\u304c\u30bb\u30c3\u30c8\u3055\u308c\u3066\u3044\u306a\u3044\u5834\u5408\u306b\u547c\u3073\u51fa\u3055\u308c\u307e\u3059\u3002nil \u3092\u6e21\u3059\u3068\u4ee3\u308f\u308a\u306b",(0,a.yg)("a",{parentName:"p",href:"https://godoc.org/github.com/suzuki-shunsuke/gomic/gomic#DefaultCallbackNotImplemented"},"gomic.DefaultCallbackNotImplemented")," \u304c\u547c\u3073\u51fa\u3055\u308c\u307e\u3059\u3002"),(0,a.yg)("p",null,"mock\u306f interface \u3092\u5b9f\u88c5\u3057\u3066\u3044\u307e\u3059\u3002"),(0,a.yg)("p",null,"\u6b21\u306binterface\u306e\u30e1\u30bd\u30c3\u30c9\u3092\u5b9f\u88c5\u3057\u305f\u95a2\u6570\u3092mock\u306b\u30bb\u30c3\u30c8\u3057\u307e\u3059\u3002"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-go"},'mock.SetFuncGetwd(func() (string, error) {\n    return "/tmp", fmt.Errorf("")\n})\n')),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"mock.Getwd")," \u3092\u547c\u3073\u51fa\u3059\u3068 ",(0,a.yg)("inlineCode",{parentName:"p"},"SetFuncGetwd")," \u306b\u6e21\u3057\u305f\u95a2\u6570\u304c\u547c\u3073\u51fa\u3055\u308c\u307e\u3059\u3002"),(0,a.yg)("p",null,"\u4e0a\u8a18\u306e\u30b5\u30f3\u30d7\u30eb\u306e\u3088\u3046\u306b\u6c7a\u307e\u3063\u305f\u5024\u3092\u8fd4\u3059\u3060\u3051\u306e fake \u306f\u3088\u304f\u3042\u308b\u306e\u3067\u3001\u4ee5\u4e0b\u306e\u3088\u3046\u306b\u7c21\u5358\u306b\u66f8\u3051\u308b\u3088\u3046\u306b\u3057\u3066\u3044\u307e\u3059\u3002"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-go"},'mock.SetReturnGetwd("/tmp", fmt.Errorf(""))\n')),(0,a.yg)("p",null,"\u30e2\u30c3\u30af\u306e ",(0,a.yg)("inlineCode",{parentName:"p"},"SetFuncXXX")," \u53ca\u3073 ",(0,a.yg)("inlineCode",{parentName:"p"},"SetReturnXXX")," \u306f\u30e2\u30c3\u30af\u81ea\u8eab\u3092\u8fd4\u3059\u306e\u3067\u30e1\u30bd\u30c3\u30c9\u30c1\u30a7\u30fc\u30f3\u304c\u51fa\u6765\u308b\u3088\u3046\u306b\u306a\u3063\u3066\u3044\u307e\u3059\u3002"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-go"},'mock := examples.NewOSMock(nil, nil).\n  SetReturnMkdir(nil).\n    SetFuncGetwd(func() (string, error) {\n        return "/tmp", fmt.Errorf("")\n    })\n')),(0,a.yg)("p",null,"\u5b9f\u88c5\u304c\u30bb\u30c3\u30c8\u3055\u308c\u3066\u3044\u306a\u3044\u72b6\u614b\u3067\u30e2\u30c3\u30af\u306e\u30e1\u30bd\u30c3\u30c9\u3092\u547c\u3073\u51fa\u3059\u3068\n\u30b3\u30f3\u30b9\u30c8\u30e9\u30af\u30bf\u306e\u7b2c\u4e8c\u5f15\u6570\u3067\u6e21\u3057\u305f\u95a2\u6570\u304c\u547c\u3073\u51fa\u3055\u308c\u307e\u3059\u3002"),(0,a.yg)("p",null,"\u30b3\u30f3\u30b9\u30c8\u30e9\u30af\u30bf\u306e\u7b2c\u4e8c\u5f15\u6570\u304cnil\u3060\u3068 ",(0,a.yg)("a",{parentName:"p",href:"https://godoc.org/github.com/suzuki-shunsuke/gomic/gomic#DefaultCallbackNotImplemented"},"gomic.DefaultCallbackNotImplemented")," \u304c\u547c\u3073\u3060\u3055\u308c\u307e\u3059\u3002\ngomic.DefaultCallbackNotImplemented \u306f \u30b3\u30f3\u30b9\u30c8\u30e9\u30af\u30bf\u306e\u7b2c\u4e00\u5f15\u6570\u304c nil \u3060\u3068 ",(0,a.yg)("a",{parentName:"p",href:"https://golang.org/pkg/log/#Fatal"},"log.Fatal")," \u3092\u3001\u305d\u3046\u3067\u306a\u3051\u308c\u3070 ",(0,a.yg)("a",{parentName:"p",href:"https://golang.org/pkg/testing/#T.Fatal"},"testing.T#Fatal")," \u3092\u547c\u3073\u51fa\u3057\u3001\u305d\u3053\u3067\u51e6\u7406\u3092\u505c\u6b62\u3057\u307e\u3059\u3002"),(0,a.yg)("p",null,"\u30b3\u30f3\u30b9\u30c8\u30e9\u30af\u30bf\u306e\u7b2c\u4e8c\u5f15\u6570\u3067\u6e21\u3057\u305f\u95a2\u6570\u3067 log.Fatal \u3084 testing.Fatal \u306b\u3088\u3063\u3066\u51e6\u7406\u3092\u6b62\u3081\u306a\u3051\u308c\u3070\u3001interface\u306e\u30e1\u30bd\u30c3\u30c9\u3092\u5b9f\u88c5\u3057\u3066\u3044\u306a\u3044\u5834\u5408\u3001",(0,a.yg)("a",{parentName:"p",href:"https://golang.org/ref/spec#The_zero_value"},"zero value")," \u3092\u8fd4\u3059 fake \u306b\u306a\u308a\u307e\u3059\u3002"),(0,a.yg)("p",null,"\u4e00\u756a\u7c21\u5358\u306a\u306e\u306f ",(0,a.yg)("a",{parentName:"p",href:"https://godoc.org/github.com/suzuki-shunsuke/gomic/gomic#DoNothing"},"gomic.DoNothing")," \u3092\u6e21\u3059\u3053\u3068\u3067\u3059\u3002"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-go"},"s, err := mock.Getwd(nil, gomic.DoNothing)\n")),(0,a.yg)("p",null,"\u4e0a\u3067\u8aac\u660e\u3057\u305f\u3053\u3068\u306f"),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"https://github.com/suzuki-shunsuke/gomic/blob/v0.5.0/examples/os_mock.go#L27-L67"},"https://github.com/suzuki-shunsuke/gomic/blob/v0.5.0/examples/os_mock.go#L27-L67")),(0,a.yg)("p",null,"\u3092\u898b\u3066\u3082\u3089\u3048\u3070\u308f\u304b\u308b\u3068\u601d\u3044\u307e\u3059\u3002"))}p.isMDXComponent=!0}}]);