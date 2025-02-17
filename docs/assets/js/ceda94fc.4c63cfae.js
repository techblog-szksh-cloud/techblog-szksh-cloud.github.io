"use strict";(self.webpackChunktechblog_szksh_cloud_github_io=self.webpackChunktechblog_szksh_cloud_github_io||[]).push([[1844],{1179:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>u,default:()=>c,frontMatter:()=>r,metadata:()=>a,toc:()=>g});var l=n(8168),o=(n(6540),n(5680));const r={title:"buildflow \u3067\u306f\u306a\u305c Tengo \u3092\u63a1\u7528\u3057\u3066\u3044\u308b\u306e\u304b",date:new Date("2020-10-17T13:35:56.000Z"),tags:["oss","buildflow"],authors:["suzuki-shunsuke"]},u=void 0,a={permalink:"/buildflow-why-tengo",source:"@site/blog/buildflow-why-tengo.md",title:"buildflow \u3067\u306f\u306a\u305c Tengo \u3092\u63a1\u7528\u3057\u3066\u3044\u308b\u306e\u304b",description:"buildflow \u3068\u3044\u3046\u30c4\u30fc\u30eb\u3092\u958b\u767a\u3057\u3066\u3044\u308b\u306e\u3067 buildflow \u3068\u3044\u3046\u30bf\u30b0\u3092\u3064\u3051\u3066\u4f55\u56de\u304b\u306b\u5206\u3051\u3066\u30d6\u30ed\u30b0\u3092\u66f8\u304d\u307e\u3059\u3002",date:"2020-10-17T13:35:56.000Z",formattedDate:"October 17, 2020",tags:[{label:"oss",permalink:"/tags/oss"},{label:"buildflow",permalink:"/tags/buildflow"}],readingTime:6.515,hasTruncateMarker:!1,authors:[{name:"Shunsuke Suzuki",title:"Platform Engineer / OSS Developer / Go / Terraform",url:"https://github.com/suzuki-shunsuke",imageURL:"https://github.com/suzuki-shunsuke.png",key:"suzuki-shunsuke"}],frontMatter:{title:"buildflow \u3067\u306f\u306a\u305c Tengo \u3092\u63a1\u7528\u3057\u3066\u3044\u308b\u306e\u304b",date:"2020-10-17T13:35:56.000Z",tags:["oss","buildflow"],authors:["suzuki-shunsuke"]},prevItem:{title:"buildflow \u304c\u81ea\u52d5\u3067\u53d6\u5f97\u3059\u308b Pull Request \u306e\u60c5\u5831",permalink:"/buildflow-pr-info"},nextItem:{title:"buildflow \u306e dynamic task",permalink:"/buildflow-dynamic-task"}},i={authorsImageUrls:[void 0]},g=[{value:"\u306a\u305c\u30b9\u30af\u30ea\u30d7\u30c8\u8a00\u8a9e\u3092\u63a1\u7528\u3057\u3066\u3044\u308b\u306e\u304b",id:"\u306a\u305c\u30b9\u30af\u30ea\u30d7\u30c8\u8a00\u8a9e\u3092\u63a1\u7528\u3057\u3066\u3044\u308b\u306e\u304b",level:2},{value:"\u306a\u305c\u4ed6\u306e\u8a00\u8a9e\u3067\u306f\u306a\u304f Tengo \u306a\u306e\u304b",id:"\u306a\u305c\u4ed6\u306e\u8a00\u8a9e\u3067\u306f\u306a\u304f-tengo-\u306a\u306e\u304b",level:2},{value:"buildflow \u3067\u30b9\u30af\u30ea\u30d7\u30c8\u8a00\u8a9e\u306b\u6c42\u3081\u3066\u3044\u308b\u3082\u306e",id:"buildflow-\u3067\u30b9\u30af\u30ea\u30d7\u30c8\u8a00\u8a9e\u306b\u6c42\u3081\u3066\u3044\u308b\u3082\u306e",level:2},{value:"Tengo \u306b\u95a2\u3059\u308b\u4e0d\u6e80",id:"tengo-\u306b\u95a2\u3059\u308b\u4e0d\u6e80",level:2},{value:"Tengo script \u306e\u5b9f\u884c\u3001 Test",id:"tengo-script-\u306e\u5b9f\u884c-test",level:2}],s={toc:g},p="wrapper";function c(e){let{components:t,...n}=e;return(0,o.yg)(p,(0,l.A)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("p",null,"buildflow \u3068\u3044\u3046\u30c4\u30fc\u30eb\u3092\u958b\u767a\u3057\u3066\u3044\u308b\u306e\u3067 ",(0,o.yg)("inlineCode",{parentName:"p"},"buildflow")," \u3068\u3044\u3046\u30bf\u30b0\u3092\u3064\u3051\u3066\u4f55\u56de\u304b\u306b\u5206\u3051\u3066\u30d6\u30ed\u30b0\u3092\u66f8\u304d\u307e\u3059\u3002"),(0,o.yg)("p",null,"\u3053\u306e\u8a18\u4e8b\u3067\u306f buildflow \u3067\u306a\u305c Tengo \u3092\u63a1\u7528\u3057\u3066\u3044\u308b\u306e\u304b\u306b\u3064\u3044\u3066\u8aac\u660e\u3057\u307e\u3059\u3002"),(0,o.yg)("p",null,(0,o.yg)("a",{parentName:"p",href:"https://github.com/d5/tengo"},"https://github.com/d5/tengo")),(0,o.yg)("p",null,"Tengo \u306b\u95a2\u3057\u3066\u306f ",(0,o.yg)("a",{parentName:"p",href:"https://techblog.szksh.cloud/buildflow-1/"},"https://techblog.szksh.cloud/buildflow-1/")," \u3067\u3082\u591a\u5c11\u89e6\u308c\u3066\u3044\u307e\u3059\u3002"),(0,o.yg)("p",null,"\u306a\u305c Tengo \u3092\u63a1\u7528\u3057\u3066\u3044\u308b\u306e\u304b\u306b\u95a2\u3057\u3066\u306f"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"\u306a\u305c\u30b9\u30af\u30ea\u30d7\u30c8\u8a00\u8a9e\u3092\u63a1\u7528\u3057\u3066\u3044\u308b\u306e\u304b"),(0,o.yg)("li",{parentName:"ul"},"\u306a\u305c\u4ed6\u306e\u8a00\u8a9e\u3067\u306f\u306a\u304f Tengo \u306a\u306e\u304b")),(0,o.yg)("p",null,"\u306e 2 \u3064\u306e\u89b3\u70b9\u3067\u8a71\u3057\u307e\u3059\u3002"),(0,o.yg)("h2",{id:"\u306a\u305c\u30b9\u30af\u30ea\u30d7\u30c8\u8a00\u8a9e\u3092\u63a1\u7528\u3057\u3066\u3044\u308b\u306e\u304b"},"\u306a\u305c\u30b9\u30af\u30ea\u30d7\u30c8\u8a00\u8a9e\u3092\u63a1\u7528\u3057\u3066\u3044\u308b\u306e\u304b"),(0,o.yg)("p",null,"\u9006\u306b\u30b9\u30af\u30ea\u30d7\u30c8\u8a00\u8a9e\u3092\u63a1\u7528\u3057\u306a\u3044\u65b9\u6cd5\u3068\u3057\u3066\u306f\u3001 YAML \u306a\u3069\u3067\u72ec\u81ea DSL \u306e\u3088\u3046\u306a\u3082\u306e\u3092\u5b9a\u7fa9\u3059\u308b\u65b9\u6cd5\u304c\u3042\u308a\u307e\u3059\u3002\nDSL \u3068\u8a00\u3046\u3068\u5927\u3052\u3055\u304b\u3082\u3057\u308c\u307e\u305b\u3093\u304c\u3001 AND, OR, NOT \u3068\u3044\u3063\u305f\u8ad6\u7406\u3092 YAML \u306e\u3088\u3046\u306a\u30c7\u30fc\u30bf\u8a18\u8ff0\u8a00\u8a9e\u3067\u8868\u73fe\u3057\u3088\u3046\u3068\u601d\u3046\u3068\u305d\u3093\u306a\u611f\u3058\u306b\u306a\u308b\u3068\u601d\u3044\u307e\u3059\u3002"),(0,o.yg)("p",null,"\u3053\u306e\u65b9\u6cd5\u306f\u6271\u3044\u305f\u3044\u30ed\u30b8\u30c3\u30af\u304c\u5358\u7d14\u306a\u3082\u306e\u306b\u9650\u3089\u308c\u308b\u306e\u3067\u3042\u308c\u3070\u554f\u984c\u306a\u3044\u3067\u3059\u304c\u3001\n\u3088\u308a\u67d4\u8edf\u306a\u30ed\u30b8\u30c3\u30af\u3092\u8868\u73fe\u3057\u305f\u3044\u3068\u306a\u3063\u305f\u5834\u5408\u306b\u3001\u7121\u7406\u304c\u3042\u308a\u307e\u3059\u3002"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"\u3069\u3046\u3084\u3063\u3066\u8868\u73fe\u3059\u308c\u3070\u3044\u3044\u306e\u304b\u81ea\u5206\u3067\u8003\u3048\u306a\u3044\u3068\u3044\u3051\u306a\u3044",(0,o.yg)("ul",{parentName:"li"},(0,o.yg)("li",{parentName:"ul"},"\u3069\u3046\u9811\u5f35\u3063\u3066\u3082\u72ec\u81ea\u30eb\u30fc\u30eb\u306b\u306a\u308b\u305f\u3081\u3001\u30e6\u30fc\u30b6\u30fc\u306b\u3068\u3063\u3066\u76f4\u611f\u7684\u3068\u306f\u8a00\u3048\u306a\u3044"))),(0,o.yg)("li",{parentName:"ul"},"\u6b63\u3057\u304f\u5b9f\u88c5\u3057\u306a\u3044\u3068\u3044\u3051\u306a\u3044"),(0,o.yg)("li",{parentName:"ul"},"\u4ed5\u69d8\u3092\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u5316\u3057\u306a\u3044\u3068\u3044\u3051\u306a\u3044")),(0,o.yg)("p",null,"\u4e00\u65b9\u3001 Go \u3067\u306f\u5e7e\u3064\u304b\u306e\u30b9\u30af\u30ea\u30d7\u30c8\u8a00\u8a9e\u304c\u30b5\u30fc\u30c9\u30d1\u30fc\u30c6\u30a3\u306e\u30e9\u30a4\u30d6\u30e9\u30ea\u3068\u3057\u3066\u5b9f\u88c5\u3055\u308c\u3066\u304a\u308a\u3001 buildflow \u306e\u3088\u3046\u306a\u30c4\u30fc\u30eb\u306b\u7d44\u307f\u8fbc\u3080\u3053\u3068\u304c\u51fa\u6765\u307e\u3059\u3002"),(0,o.yg)("p",null,(0,o.yg)("a",{parentName:"p",href:"https://github.com/avelino/awesome-go#embeddable-scripting-languages"},"https://github.com/avelino/awesome-go#embeddable-scripting-languages")),(0,o.yg)("p",null,"\u3053\u308c\u3089\u3092\u6d3b\u7528\u3059\u308c\u3070\u4e0a\u8a18\u306e\u554f\u984c\u306f\u89e3\u6c7a\u3067\u304d\u308b\u3046\u3048\u306b\u3001\u975e\u5e38\u306b\u67d4\u8edf\u306b\u30ed\u30b8\u30c3\u30af\u3092\u5b9f\u88c5\u3067\u304d\u307e\u3059(\u52ff\u8ad6\u8a00\u8a9e\u306b\u3088\u308a\u307e\u3059\u304c)\u3002"),(0,o.yg)("h2",{id:"\u306a\u305c\u4ed6\u306e\u8a00\u8a9e\u3067\u306f\u306a\u304f-tengo-\u306a\u306e\u304b"},"\u306a\u305c\u4ed6\u306e\u8a00\u8a9e\u3067\u306f\u306a\u304f Tengo \u306a\u306e\u304b"),(0,o.yg)("p",null,"\u5358\u7d14\u306b ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/avelino/awesome-go#embeddable-scripting-languages"},"https://github.com/avelino/awesome-go#embeddable-scripting-languages")," \u3067\u7d39\u4ecb\u3055\u308c\u3066\u3044\u308b\u30e9\u30a4\u30d6\u30e9\u30ea\u306e\u4e2d\u3067\u4e00\u756a\u8981\u4ef6\u306b\u30de\u30c3\u30c1\u3057\u3066\u305d\u3046\u3060\u3063\u305f\u304b\u3089\u3067\u3059\u3002\n\u3068\u3044\u3063\u3066\u3082\u5168\u3066\u3092\u3061\u3083\u3093\u3068\u30c1\u30a7\u30c3\u30af\u3057\u305f\u308f\u3051\u3067\u306f\u3042\u308a\u307e\u305b\u3093\u304c\u3002\nLua \u3068\u304b\u3082\u3042\u308b\u306e\u3067\u305d\u308c\u3067\u3082\u826f\u304b\u3063\u305f\u304b\u3082\u3067\u3059\u304c\u3001\u81ea\u5206\u306f Lua \u3092\u5168\u7136\u77e5\u308a\u307e\u305b\u3093\u3002\n\u3042\u3068\u3061\u3083\u3093\u3068\u30d0\u30fc\u30b8\u30e7\u30f3\u30cb\u30f3\u30b0\u3055\u308c\u3066\u3044\u305f\u306e\u3082\u7406\u7531\u306e\u4e00\u3064\u3067\u3059\u3002\nTengo \u3088\u308a\u4eba\u6c17\u306e\u3042\u308b\u8a00\u8a9e\u3082\u3042\u308a\u307e\u3057\u305f\u304c\u3001\u30d0\u30fc\u30b8\u30e7\u30cb\u30f3\u30b0\u3055\u308c\u3066\u306a\u3044\u3068\u3044\u3046\u7406\u7531\u3067\u898b\u9001\u3063\u305f\u308a\u3057\u307e\u3057\u305f\u3002"),(0,o.yg)("p",null,"\u5b9f\u306f Tengo \u306e\u524d\u306b\u4ed6\u306e\u8a00\u8a9e ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/antonmedv/expr"},"antonmedv/expr")," \u3092\u63a1\u7528\u3057\u3066\u3044\u305f\u306e\u3067\u3059\u304c\u3001\u9014\u4e2d\u3067\u8868\u73fe\u529b\u304c\u8db3\u308a\u3066\u306a\u3044\u306e\u3067\u79fb\u884c\u3057\u307e\u3057\u305f\u3002\ngithub-comment \u3067\u3082 antonmedv/expr \u306f\u4f7f\u3063\u3066\u307e\u3059\u3057\u3001\u4fbf\u5229\u3067\u306f\u3042\u308b\u306e\u3067\u3059\u304c\u3001\n\u5909\u6570\u304c\u5ba3\u8a00\u3067\u304d\u305a\u3001\u57fa\u672c\u30ef\u30f3\u30e9\u30a4\u30ca\u30fc\u3067\u66f8\u304f\u3057\u304b\u306a\u3044\u306e\u3067\u7121\u7406\u3060\u306a\u3068\u5224\u65ad\u3057\u307e\u3057\u305f\u3002"),(0,o.yg)("p",null,(0,o.yg)("a",{parentName:"p",href:"https://github.com/suzuki-shunsuke/buildflow/issues/20"},"https://github.com/suzuki-shunsuke/buildflow/issues/20")),(0,o.yg)("h2",{id:"buildflow-\u3067\u30b9\u30af\u30ea\u30d7\u30c8\u8a00\u8a9e\u306b\u6c42\u3081\u3066\u3044\u308b\u3082\u306e"},"buildflow \u3067\u30b9\u30af\u30ea\u30d7\u30c8\u8a00\u8a9e\u306b\u6c42\u3081\u3066\u3044\u308b\u3082\u306e"),(0,o.yg)("p",null,"buildflow \u306b\u304a\u3051\u308b Tengo \u306e\u7528\u9014\u306f\u3042\u304f\u307e\u3067\u30ed\u30b8\u30c3\u30af\u306e\u8a18\u8ff0\u3001\u30b7\u30a7\u30eb\u30b9\u30af\u30ea\u30d7\u30c8\u3067\u306f\u6271\u3044\u306b\u304f\u3044 map \u7b49\u306e\u64cd\u4f5c\u3067\u3059\u3002\nTengo \u3067\u5916\u90e8\u30b3\u30de\u30f3\u30c9\u3092\u547c\u3073\u51fa\u3057\u305f\u308a\u3068\u304b\u30d5\u30a1\u30a4\u30eb\u3092\u8aad\u307f\u66f8\u304d\u3057\u305f\u308a\u3068\u304b\u305d\u3046\u3044\u3046\u3053\u3068\u306f\u8003\u3048\u3066\u3044\u307e\u305b\u3093\n(\u3066\u3063\u304d\u308a\u305d\u3046\u3044\u3046\u3053\u3068\u304c\u51fa\u6765\u306a\u3044\u8a00\u8a9e\u306a\u306e\u304b\u3068\u5f53\u521d\u601d\u3063\u3066\u3044\u307e\u3057\u305f\u304c\u3001\u3067\u304d\u308b\u3088\u3046\u3067\u3059\u306d)\u3002"),(0,o.yg)("p",null,"Tengo \u306f Python \u3084 Ruby, Go \u3068\u3044\u3063\u305f\u8a00\u8a9e\u306b\u6bd4\u3079\u308c\u3070\u8a00\u8a9e\u4ed5\u69d8\u304c\u30b3\u30f3\u30d1\u30af\u30c8\u3067\u3042\u308a\u3001\n\u3088\u304f\u77e5\u3089\u306a\u304f\u3066\u3082\u306a\u3093\u3068\u306a\u304f\u8aad\u3081\u308b\u3057\u3001\u7c21\u5358\u306b\u304b\u3051\u308b\u3068\u601d\u3063\u3066\u3044\u307e\u3059\u3002"),(0,o.yg)("p",null,"\u307e\u305f\u3001 Tengo \u3067\u306f\u30c6\u30ad\u30b9\u30c8\u51e6\u7406\u306a\u3069\u306b\u4f7f\u3048\u308b\u6a19\u6e96\u30e9\u30a4\u30d6\u30e9\u30ea\u304c\u63d0\u4f9b\u3055\u308c\u3066\u3044\u307e\u3059(\u3053\u308c\u304c\u306a\u3044\u3068\u8f9b\u304b\u3063\u305f\u3051\u3069\u3001\u3042\u308b\u306e\u3067\u5341\u5206)\u3002"),(0,o.yg)("p",null,"\u306a\u306e\u3067\u4eca\u306e\u6240 Tengo \u3067\u5341\u5206\u3060\u3068\u8003\u3048\u3066\u3044\u307e\u3059\u3002 Tengo \u3088\u308a\u30ea\u30c3\u30c1\u306a\u8a00\u8a9e\u304c\u3042\u3063\u305f\u3068\u3057\u3066\u3082\u3001\u4eca\u306e\u6240\u3042\u307e\u308a\u79fb\u884c\u3059\u308b\u30e2\u30c1\u30d9\u30fc\u30b7\u30e7\u30f3\u306f\u3042\u308a\u307e\u305b\u3093\u3002"),(0,o.yg)("h2",{id:"tengo-\u306b\u95a2\u3059\u308b\u4e0d\u6e80"},"Tengo \u306b\u95a2\u3059\u308b\u4e0d\u6e80"),(0,o.yg)("p",null,"Tengo \u306b\u95a2\u3059\u308b\u4e0d\u6e80\u3092\u6319\u3052\u308b\u3068\u4ee5\u4e0b\u306e\u3088\u3046\u306a\u3082\u306e\u304c\u3042\u308a\u307e\u3059\u3002"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"\u3084\u306f\u308a\u8a8d\u77e5\u5ea6\u304c\u4f4e\u3044"),(0,o.yg)("li",{parentName:"ul"},"linter \u306a\u3069\u304c\u306a\u3044"),(0,o.yg)("li",{parentName:"ul"},"\u5404\u7a2e editor \u3067 syntax highlight \u304c\u306a\u3044(issue \u306f\u3042\u308b) ",(0,o.yg)("a",{parentName:"li",href:"https://github.com/d5/tengo/issues/146"},"https://github.com/d5/tengo/issues/146"))),(0,o.yg)("p",null,"\u60c5\u5831\u304c\u5c11\u306a\u3044\u306e\u306b\u95a2\u3057\u3066\u306f\u3001\u8a00\u8a9e\u4ed5\u69d8\u304c\u30b7\u30f3\u30d7\u30eb\u306a\u306e\u3067\u500b\u4eba\u7684\u306b\u306f\u4eca\u306e\u6240\u56f0\u3063\u3066\u307e\u305b\u3093(\u516c\u5f0f\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u8aad\u3081\u3070\u5206\u304b\u308b"),(0,o.yg)("h2",{id:"tengo-script-\u306e\u5b9f\u884c-test"},"Tengo script \u306e\u5b9f\u884c\u3001 Test"),(0,o.yg)("p",null,"\u3088\u304f\u77e5\u3089\u306a\u3044\u8a00\u8a9e\u3067\u3042\u308c\u3070\u3001\u8a66\u3057\u306b\u5b9f\u884c\u3057\u3066\u307f\u305f\u308a\u3001\u3061\u3083\u3093\u3068\u30c6\u30b9\u30c8\u3092\u66f8\u3044\u305f\u308a\u3057\u305f\u3044\u3067\u3059\u3088\u306d\u3002"),(0,o.yg)("p",null,"\u5b9f\u884c\u306b\u95a2\u3057\u3066\u306f\u516c\u5f0f\u306e\u65b9\u3067\u30c4\u30fc\u30eb\u304c\u3042\u3063\u305f\u308a\u3057\u307e\u3059\u3002"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"https://tengolang.com/"},"https://tengolang.com/")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"https://github.com/d5/tengo/blob/master/docs/tengo-cli.md"},"https://github.com/d5/tengo/blob/master/docs/tengo-cli.md"))),(0,o.yg)("p",null,"\u30c6\u30b9\u30c8\u306b\u95a2\u3057\u3066\u306f\u7c21\u5358\u306a\u30c4\u30fc\u30eb\u3092\u5225\u306b\u4f5c\u308a\u307e\u3057\u305f ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/suzuki-shunsuke/tengo-tester"},"https://github.com/suzuki-shunsuke/tengo-tester"),"\n\u5f93\u6765\u30b7\u30a7\u30eb\u30b9\u30af\u30ea\u30d7\u30c8\u3067\u3053\u3046\u3044\u3046\u30ed\u30b8\u30c3\u30af\u3092\u5b9f\u88c5\u3057\u3066\u3082\u300c\u52d5\u3051\u3070\u3044\u3044\u300d\u7a0b\u5ea6\u306b\u8003\u3048\u3066\u3044\u3066\u30c6\u30b9\u30c8\u306f\u66f8\u304b\u306a\u3044\u3053\u3068\u304c\u591a\u304b\u3063\u305f\u3067\u3059\u304c\u3001\n\u30ed\u30b8\u30c3\u30af\u3060\u3051\u3092 Tengo \u306e\u30b9\u30af\u30ea\u30d7\u30c8\u3068\u3057\u3066\u5207\u308a\u51fa\u3057\u3001\u30c6\u30b9\u30c8\u30c4\u30fc\u30eb\u3082\u7528\u610f\u3059\u308b\u3053\u3068\u3067\u3061\u3083\u3093\u3068\u30c6\u30b9\u30c8\u3092\u66f8\u304f\u3088\u3046\u306b\u306a\u308b\u3053\u3068\u3092\u671f\u5f85\u3057\u3066\u3044\u307e\u3059\u3002"))}c.isMDXComponent=!0},5680:(e,t,n)=>{n.d(t,{xA:()=>s,yg:()=>y});var l=n(6540);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,l,o=function(e,t){if(null==e)return{};var n,l,o={},r=Object.keys(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=l.createContext({}),g=function(e){var t=l.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},s=function(e){var t=g(e.components);return l.createElement(i.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},m=l.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),p=g(n),m=o,y=p["".concat(i,".").concat(m)]||p[m]||c[m]||r;return n?l.createElement(y,u(u({ref:t},s),{},{components:n})):l.createElement(y,u({ref:t},s))}));function y(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,u=new Array(r);u[0]=m;var a={};for(var i in t)hasOwnProperty.call(t,i)&&(a[i]=t[i]);a.originalType=e,a[p]="string"==typeof e?e:o,u[1]=a;for(var g=2;g<r;g++)u[g]=n[g];return l.createElement.apply(null,u)}return l.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);