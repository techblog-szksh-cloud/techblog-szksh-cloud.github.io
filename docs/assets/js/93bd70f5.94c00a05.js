"use strict";(self.webpackChunktechblog_szksh_cloud_github_io=self.webpackChunktechblog_szksh_cloud_github_io||[]).push([[6152],{12:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>s,contentTitle:()=>o,default:()=>g,frontMatter:()=>r,metadata:()=>i,toc:()=>p});var t=n(8168),l=(n(6540),n(5680));const r={title:"Skaffold \u3067\u7279\u5b9a\u306e\u30b5\u30fc\u30d3\u30b9\u3060\u3051\u52d5\u304b\u3059\u305f\u3081\u306e\u30c4\u30fc\u30eb\u3092\u4f5c\u3063\u305f",date:new Date("2020-04-05T09:53:25.000Z"),tags:["k8s","skaffold","skaffold-generator","oss"],authors:["suzuki-shunsuke"]},o=void 0,i={permalink:"/skaffold-generator",source:"@site/blog/skaffold-generator.md",title:"Skaffold \u3067\u7279\u5b9a\u306e\u30b5\u30fc\u30d3\u30b9\u3060\u3051\u52d5\u304b\u3059\u305f\u3081\u306e\u30c4\u30fc\u30eb\u3092\u4f5c\u3063\u305f",description:"\u81ea\u4f5c\u306e CLI \u30c4\u30fc\u30eb skaffold-generator \u306e\u7d39\u4ecb\u3067\u3059\u3002",date:"2020-04-05T09:53:25.000Z",formattedDate:"April 5, 2020",tags:[{label:"k8s",permalink:"/tags/k-8-s"},{label:"skaffold",permalink:"/tags/skaffold"},{label:"skaffold-generator",permalink:"/tags/skaffold-generator"},{label:"oss",permalink:"/tags/oss"}],readingTime:6.325,hasTruncateMarker:!1,authors:[{name:"Shunsuke Suzuki",title:"Platform Engineer / OSS Developer / Go / Terraform",url:"https://github.com/suzuki-shunsuke",imageURL:"https://github.com/suzuki-shunsuke.png",key:"suzuki-shunsuke"}],frontMatter:{title:"Skaffold \u3067\u7279\u5b9a\u306e\u30b5\u30fc\u30d3\u30b9\u3060\u3051\u52d5\u304b\u3059\u305f\u3081\u306e\u30c4\u30fc\u30eb\u3092\u4f5c\u3063\u305f",date:"2020-04-05T09:53:25.000Z",tags:["k8s","skaffold","skaffold-generator","oss"],authors:["suzuki-shunsuke"]},prevItem:{title:"CircleCI \u306e checkout \u306e\u6ce8\u610f\u70b9",permalink:"/circleci-checkout-default-branch"},nextItem:{title:"Terraform \u30cf\u30f3\u30ba\u30aa\u30f3 with MySQL Provider",permalink:"/terraform-hands-on-with-mysql-provider"}},s={authorsImageUrls:[void 0]},p=[{value:"\u3069\u3093\u306a\u30c4\u30fc\u30eb\u304b",id:"\u3069\u3093\u306a\u30c4\u30fc\u30eb\u304b",level:2},{value:"\u306a\u305c\u4f5c\u3063\u305f\u304b",id:"\u306a\u305c\u4f5c\u3063\u305f\u304b",level:2},{value:"\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb",id:"\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb",level:2},{value:"\u4f7f\u3044\u65b9",id:"\u4f7f\u3044\u65b9",level:2},{value:"Docker Compose \u307f\u305f\u3044\u306b\u3067\u304d\u306a\u3044\u3053\u3068",id:"docker-compose-\u307f\u305f\u3044\u306b\u3067\u304d\u306a\u3044\u3053\u3068",level:2},{value:"\u6700\u5f8c\u306b",id:"\u6700\u5f8c\u306b",level:2}],f={toc:p},u="wrapper";function g(e){let{components:a,...n}=e;return(0,l.yg)(u,(0,t.A)({},f,n,{components:a,mdxType:"MDXLayout"}),(0,l.yg)("p",null,"\u81ea\u4f5c\u306e CLI \u30c4\u30fc\u30eb ",(0,l.yg)("a",{parentName:"p",href:"https://github.com/suzuki-shunsuke/skaffold-generator"},"skaffold-generator")," \u306e\u7d39\u4ecb\u3067\u3059\u3002\n\u30d7\u30ed\u30c8\u30bf\u30a4\u30d4\u30f3\u30b0\u307f\u305f\u3044\u306a\u30ce\u30ea\u3067\u534a\u65e5\u304f\u3089\u3044\u3067\u5272\u3068\u624b\u65e9\u304f\u4f5c\u308c\u307e\u3057\u305f\u3002\n\u540d\u524d\u304c\u9577\u304f\u3066\u9069\u5f53\u306a\u306e\u3067\u3082\u3063\u3068\u826f\u3044\u540d\u524d\u306a\u3044\u304b\u306a\u3068\u601d\u3063\u3066\u307e\u3059\u3002"),(0,l.yg)("p",null,(0,l.yg)("a",{parentName:"p",href:"https://github.com/suzuki-shunsuke/skaffold-generator"},"Skaffold")," \u306b\u6b32\u3057\u3044\u6a5f\u80fd\u304c\u306a\u3044\u306e\u3067\u88dc\u5b8c\u3059\u308b\u611f\u3058\u3067\u4f5c\u3063\u305f\u306e\u3067\u3059\u304c\u3001\u300c\u305d\u308c\u3007\u3007\u3067\u51fa\u6765\u308b\u3088\u300d\u3068\u304b\u3042\u3063\u305f\u3089(GitHub issue \u3068\u304b Twitter \u3067)\u6559\u3048\u3066\u3044\u305f\u3060\u3051\u308b\u3068\u5e78\u3044\u3067\u3059\u3002"),(0,l.yg)("h2",{id:"\u3069\u3093\u306a\u30c4\u30fc\u30eb\u304b"},"\u3069\u3093\u306a\u30c4\u30fc\u30eb\u304b"),(0,l.yg)("p",null,"\u8a2d\u5b9a\u30d5\u30a1\u30a4\u30eb ",(0,l.yg)("inlineCode",{parentName:"p"},"skaffold-generator.yaml")," \u3092\u76e3\u8996\u3057\u3066\u5909\u66f4\u304c\u3042\u3063\u305f\u3089 ",(0,l.yg)("inlineCode",{parentName:"p"},"skaffold.yaml")," \u3092\u751f\u6210\u3059\u308b\u30c4\u30fc\u30eb\u3067\u3059\u3002\u8a2d\u5b9a\u30d5\u30a1\u30a4\u30eb\u3067\u30b5\u30fc\u30d3\u30b9\u306e\u4f9d\u5b58\u95a2\u4fc2\u3092\u5b9a\u7fa9\u3067\u304d\u305f\u308a\u3001\u30b3\u30de\u30f3\u30c9\u30e9\u30a4\u30f3\u5f15\u6570\u3067\u6307\u5b9a\u3057\u305f\u30b5\u30fc\u30d3\u30b9\u53ca\u3073\u305d\u308c\u304c\u4f9d\u5b58\u3059\u308b\u30b5\u30fc\u30d3\u30b9\u306b\u95a2\u9023\u3057\u305f\u8a2d\u5b9a\u3060\u3051\u3092\u4f7f\u3063\u3066 ",(0,l.yg)("inlineCode",{parentName:"p"},"skaffold.yaml")," \u3092\u66f4\u65b0\u3057\u307e\u3059\u3002\n\u3053\u306e\u30c4\u30fc\u30eb\u306f ",(0,l.yg)("inlineCode",{parentName:"p"},"skaffold.yaml")," \u3092\u751f\u6210\u3059\u308b\u3060\u3051\u306a\u306e\u3067\u5b9f\u969b\u306b\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u30d3\u30eb\u30c9\u30fb\u30c7\u30d7\u30ed\u30a4\u3059\u308b\u306b\u306f ",(0,l.yg)("inlineCode",{parentName:"p"},"skaffold")," \u3068\u7d44\u307f\u5408\u308f\u305b\u3066\u4f7f\u3044\u307e\u3059\u3002"),(0,l.yg)("h2",{id:"\u306a\u305c\u4f5c\u3063\u305f\u304b"},"\u306a\u305c\u4f5c\u3063\u305f\u304b"),(0,l.yg)("p",null,"\u5143\u3005\u30ed\u30fc\u30ab\u30eb\u3067\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u52d5\u304b\u3057\u306a\u304c\u3089\u958b\u767a\u3059\u308b\u305f\u3081\u306b Docker Compose \u3092\u4f7f\u3063\u3066\u308b\u30ea\u30dd\u30b8\u30c8\u30ea\u304c\u3042\u308b\u306e\u3067\u3059\u304c\u3001\u305d\u308c\u3092 skaffold \u306b\u79fb\u884c\u51fa\u6765\u306a\u3044\u304b\u691c\u8a3c\u3057\u3066\u3044\u307e\u3059\u3002\n\u307e\u3060 skaffold \u3092\u89e6\u308a\u59cb\u3081\u305f\u3070\u304b\u308a\u3067\u7406\u89e3\u304c\u6d45\u3044\u306e\u3067\u3059\u304c\u3001\n\u672c\u756a\u74b0\u5883\u306f k8s \u3067\u52d5\u3044\u3066\u308b\u304b\u3089\u30ed\u30fc\u30ab\u30eb\u3082 k8s \u3067\u52d5\u304b\u305b\u308b\u3068\u3044\u3044\u304b\u306a\u3068\u601d\u3063\u305f\u308a\u3001\u3042\u3068\u306f\u5909\u66f4\u3092\u691c\u77e5\u3057\u3066\u81ea\u52d5\u3067\u30d3\u30eb\u30c9\u30fb\u30c7\u30d7\u30ed\u30a4\u3057\u3066\u304f\u308c\u305f\u308a\u3057\u3066\u4fbf\u5229\u305d\u3046\u304b\u306a\u3068\u601d\u3044\u307e\u3057\u305f\u3002\n\u307e\u3041\u7d50\u679c\u7684\u306b\u79fb\u884c\u3057\u306a\u3044\u3053\u3068\u306b\u306a\u3063\u305f\u3068\u3057\u3066\u3082\u3001 Skaffold \u3068\u73fe\u72b6\u306e\u4ed5\u7d44\u307f\u306b\u3064\u3044\u3066\u7406\u89e3\u304c\u6df1\u307e\u308c\u3070\u3044\u3044\u304b\u306a\u304f\u3089\u3044\u306e\u3064\u3082\u308a\u3067\u3059\u3002"),(0,l.yg)("p",null,"\u691c\u8a3c\u306e\u904e\u7a0b\u3067\u3001 \u4ee5\u4e0b\u306e\u3088\u3046\u306a\u3053\u3068\u304c Docker Compose \u3060\u3068\u51fa\u6765\u308b\u3051\u3069 Skaffold \u3060\u3068\u96e3\u3057\u305d\u3046\u3060\u3068\u601d\u3044\u307e\u3057\u305f\u3002"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"\u30b5\u30fc\u30d3\u30b9\u306e\u4f9d\u5b58\u95a2\u4fc2\u3092\u5b9a\u7fa9\u3059\u308b\u3053\u3068",(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},"Skaffold \u3068\u3044\u3046\u3088\u308a k8s \u306e\u554f\u984c\u304b\u3068\u306f\u601d\u3044\u307e\u3059\u304c"),(0,l.yg)("li",{parentName:"ul"},"Docker Compose \u3060\u3068\u4f9d\u5b58\u3059\u308b\u3082\u306e\u3092\u81ea\u52d5\u3067\u8d77\u52d5\u3057\u3066\u304f\u308c\u3066\u4fbf\u5229"))),(0,l.yg)("li",{parentName:"ul"},"\u30b3\u30de\u30f3\u30c9\u30e9\u30a4\u30f3\u5f15\u6570\u3067\u6307\u5b9a\u3057\u305f\u30b5\u30fc\u30d3\u30b9\u3060\u3051\u8d77\u52d5\u3059\u308b\u3053\u3068",(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},"Skaffold \u3060\u3068 skafffold.yaml \u3067\u5b9a\u7fa9\u3057\u305f\u3082\u306e\u3059\u3079\u3066\u304c\u30d3\u30eb\u30c9\u30fb\u30c7\u30d7\u30ed\u30a4\u3055\u308c\u308b\u3068\u3044\u3046\u8a8d\u8b58")))),(0,l.yg)("p",null,"\u30b5\u30fc\u30d3\u30b9\u306e\u6570\u304c\u5c11\u306a\u3051\u308c\u3070\u5168\u90e8\u30d3\u30eb\u30c9\u30fb\u30c7\u30d7\u30ed\u30a4\u3067\u3082\u3044\u3044\u3067\u3059\u304c\u3001\n\u30de\u30a4\u30af\u30ed\u30b5\u30fc\u30d3\u30b9\u3092\u30e2\u30ce\u30ec\u30dd\u3067\u7ba1\u7406\u3057\u3066\u3044\u308b\u3088\u3046\u306a\u5834\u5408\u3001\n\u3059\u3079\u3066\u306e\u30de\u30a4\u30af\u30ed\u30b5\u30fc\u30d3\u30b9\u3092\u30d3\u30eb\u30c9\u30fb\u30c7\u30d7\u30ed\u30a4\u3059\u308b\u306e\u306f\u7121\u99c4\u304c\u5927\u304d\u304b\u3063\u305f\u308a\u3057\u307e\u3059\u3002"),(0,l.yg)("p",null,"\u305d\u3053\u3067 ",(0,l.yg)("inlineCode",{parentName:"p"},"skaffold.yaml")," \u306e\u5143\u3068\u306a\u308b\u8a2d\u5b9a\u30d5\u30a1\u30a4\u30eb\u3092\u7528\u610f\u3057\u3001\u30b3\u30de\u30f3\u30c9\u30e9\u30a4\u30f3\u5f15\u6570\u3067\u30b5\u30fc\u30d3\u30b9\u3092\u6307\u5b9a\u3057\u3066\u5fc5\u8981\u6700\u5c0f\u9650\u306e ",(0,l.yg)("inlineCode",{parentName:"p"},"skaffold.yaml")," \u3092\u751f\u6210\u3059\u308b\u30c4\u30fc\u30eb\u3092\u4f5c\u3063\u3066\u307f\u307e\u3057\u305f\u3002"),(0,l.yg)("h2",{id:"\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb"},"\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb"),(0,l.yg)("p",null,"Go \u306e\u30d0\u30a4\u30ca\u30ea\u3092\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u3057\u3066\u304d\u3066\u304f\u3060\u3055\u3044\u3002 ",(0,l.yg)("a",{parentName:"p",href:"https://github.com/suzuki-shunsuke/skaffold-generator/releases"},"https://github.com/suzuki-shunsuke/skaffold-generator/releases")),(0,l.yg)("h2",{id:"\u4f7f\u3044\u65b9"},"\u4f7f\u3044\u65b9"),(0,l.yg)("p",null,"\u4f7f\u3044\u65b9\u306f\u7c21\u5358\u3067\u3059\u3002\u30b5\u30d6\u30b3\u30de\u30f3\u30c9\u3082\u3042\u308a\u307e\u305b\u3093\u3002\n\u30ea\u30dd\u30b8\u30c8\u30ea\u306b\u30b5\u30f3\u30d7\u30eb\u304c\u3042\u308b\u306e\u3067\u305d\u308c\u3092\u898b\u307e\u3057\u3087\u3046\u3002"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"https://github.com/suzuki-shunsuke/skaffold-generator#getting-started"},"https://github.com/suzuki-shunsuke/skaffold-generator#getting-started")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"https://github.com/suzuki-shunsuke/skaffold-generator/tree/master/examples"},"https://github.com/suzuki-shunsuke/skaffold-generator/tree/master/examples"))),(0,l.yg)("p",null,"\u307e\u305a\u306f ",(0,l.yg)("inlineCode",{parentName:"p"},"skaffold-generator.yaml")," \u3092\u7528\u610f\u3057\u307e\u3059\u3002"),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"skaffold-generator.yaml")," \u306f ",(0,l.yg)("inlineCode",{parentName:"p"},"base")," \u3068 ",(0,l.yg)("inlineCode",{parentName:"p"},"services")," \u304b\u3089\u306a\u308a\u307e\u3059\u3002"),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"base")," \u306f\u751f\u6210\u3055\u308c\u308b ",(0,l.yg)("inlineCode",{parentName:"p"},"skaffold.yaml")," \u306e\u30d9\u30fc\u30b9\u3068\u306a\u308b\u3082\u306e\u3067\u3059\u3002\n",(0,l.yg)("inlineCode",{parentName:"p"},"deploy.kubectl.manifests")," \u3068 ",(0,l.yg)("inlineCode",{parentName:"p"},"build.artifacts")," \u306f\u4e0a\u66f8\u304d\u3055\u308c\u308b\u306e\u3067\u6307\u5b9a\u3057\u306a\u3044\u3067\u304f\u3060\u3055\u3044\u3002"),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"services")," \u3067\u306f\u30b5\u30fc\u30d3\u30b9\u306e\u30ea\u30b9\u30c8\u3092\u5b9a\u7fa9\u3057\u307e\u3059\u3002\n\u5404\u30b5\u30fc\u30d3\u30b9\u306f\u4ee5\u4e0b\u306e\u5c5e\u6027\u3092\u6301\u3061\u307e\u3059\u3002"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"name: \u30b5\u30fc\u30d3\u30b9\u540d\u3002\u30b3\u30de\u30f3\u30c9\u30e9\u30a4\u30f3\u5f15\u6570\u3068 ",(0,l.yg)("inlineCode",{parentName:"li"},"depends_on")," \u3067\u30b5\u30fc\u30d3\u30b9\u3092\u6307\u5b9a\u3059\u308b\u306e\u306b\u4f7f\u3046\u3002\u30e6\u30cb\u30fc\u30af\u306b\u3059\u308b"),(0,l.yg)("li",{parentName:"ul"},"manifests: skaffold.yaml \u306e ",(0,l.yg)("inlineCode",{parentName:"li"},"deploy.kubectl.manifests")," "),(0,l.yg)("li",{parentName:"ul"},"artifacts: skaffold.yaml \u306e  ",(0,l.yg)("inlineCode",{parentName:"li"},"build.artifacts")),(0,l.yg)("li",{parentName:"ul"},"depends_on: \u30b5\u30fc\u30d3\u30b9\u304c\u4f9d\u5b58\u3059\u308b\u30b5\u30fc\u30d3\u30b9\u540d\u306e\u30ea\u30b9\u30c8")),(0,l.yg)("p",null,"\u7528\u610f\u3057\u305f\u3089 ",(0,l.yg)("inlineCode",{parentName:"p"},"skaffold-generator")," \u3092\u5b9f\u884c\u3057\u307e\u3059\u3002 skaffold.yaml \u304c\u751f\u6210(\u65e2\u306b\u3042\u308c\u3070\u4e0a\u66f8\u304d)\u3055\u308c\u3001 ",(0,l.yg)("inlineCode",{parentName:"p"},"skaffold-generator.yaml")," \u306e\u5909\u66f4\u3092\u76e3\u8996\u3057\u305f\u72b6\u614b\u306b\u306a\u308a\u307e\u3059\u3002"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},"$ skaffold-generator\n2020/04/05 18:19:37 start to watch skaffold-generator.yaml\n")),(0,l.yg)("p",null,"\u30b3\u30de\u30f3\u30c9\u30e9\u30a4\u30f3\u5f15\u6570\u3067\u30b5\u30fc\u30d3\u30b9\u540d\u3092\u6307\u5b9a\u3057\u306a\u3044\u5834\u5408\u3001\u3059\u3079\u3066\u306e\u30b5\u30fc\u30d3\u30b9\u304c ",(0,l.yg)("inlineCode",{parentName:"p"},"skaffold.yaml")," \u306b\u53cd\u6620\u3055\u308c\u307e\u3059\u3002\n\u5225\u306e\u30bf\u30fc\u30df\u30ca\u30eb\u3067 ",(0,l.yg)("inlineCode",{parentName:"p"},"skaffold dev")," \u3092\u5b9f\u884c\u3059\u308c\u3070\n\u751f\u6210\u3055\u308c\u305f ",(0,l.yg)("inlineCode",{parentName:"p"},"skaffold.yaml")," \u3092\u4f7f\u3063\u3066\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u30d3\u30eb\u30c9\u30fb\u30c7\u30d7\u30ed\u30a4\u51fa\u6765\u307e\u3059\u3002"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},"$ skaffold dev\n")),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"skaffold-generator.yaml")," \u3092\u5909\u66f4\u3059\u308c\u3070\u3001\u305d\u306e\u5909\u66f4\u3092\u691c\u77e5\u3057 ",(0,l.yg)("inlineCode",{parentName:"p"},"skaffold.yaml")," \u304c\u66f4\u65b0\u3055\u308c\u3001\u305d\u3057\u3066 ",(0,l.yg)("inlineCode",{parentName:"p"},"skaffold dev")," \u304c ",(0,l.yg)("inlineCode",{parentName:"p"},"skaffold.yaml")," \u306e\u5909\u66f4\u3092\u691c\u77e5\u3057\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u304c\u30d3\u30eb\u30c9\u30fb\u30c7\u30d7\u30ed\u30a4\u3055\u308c\u307e\u3059\u3002"),(0,l.yg)("p",null,"\u5f15\u6570\u7121\u3057\u3067\u3059\u3079\u3066\u306e\u30b5\u30fc\u30d3\u30b9\u3092\u30c7\u30d7\u30ed\u30a4\u3059\u308b\u3068\u3053\u306e\u30c4\u30fc\u30eb\u306e\u610f\u5473\u304c\u306a\u3044\u306e\u3067\u3001\u30b3\u30de\u30f3\u30c9\u30e9\u30a4\u30f3\u5f15\u6570\u3067\u30b5\u30fc\u30d3\u30b9\u540d\u3092\u6307\u5b9a\u3057\u307e\u3057\u3087\u3046\u3002"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},"$ skaffold-generator api\n")),(0,l.yg)("p",null,"\u3053\u3046\u3059\u308b\u3068\u30b5\u30fc\u30d3\u30b9 ",(0,l.yg)("inlineCode",{parentName:"p"},"api")," \u3068 ",(0,l.yg)("inlineCode",{parentName:"p"},"api")," \u304c\u4f9d\u5b58\u3059\u308b\u30b5\u30fc\u30d3\u30b9(\u4f9d\u5b58\u95a2\u4fc2\u306f\u518d\u5e30\u7684\u306b\u51e6\u7406\u3055\u308c\u307e\u3059)\u3060\u3051\u304c ",(0,l.yg)("inlineCode",{parentName:"p"},"skaffold.yaml")," \u306b\u53cd\u6620\u3055\u308c\u307e\u3059\u3002\n\u4f9d\u5b58\u95a2\u4fc2\u306f\u5faa\u74b0\u3057\u3066\u3066\u3082\u5927\u4e08\u592b\u3067\u3059\u3002"),(0,l.yg)("p",null,"\u4f7f\u3044\u65b9\u306f\u4ee5\u4e0a\u3067\u3059\u3002"),(0,l.yg)("h2",{id:"docker-compose-\u307f\u305f\u3044\u306b\u3067\u304d\u306a\u3044\u3053\u3068"},"Docker Compose \u307f\u305f\u3044\u306b\u3067\u304d\u306a\u3044\u3053\u3068"),(0,l.yg)("p",null,"Docker Compose \u307f\u305f\u3044\u306b\u4f9d\u5b58\u95a2\u4fc2\u3092\u5b9a\u7fa9\u3067\u304d\u308b\u3088\u3046\u306b\u306a\u308a\u307e\u3057\u305f\u304c\u3001\nDocker Compose \u307f\u305f\u3044\u306b\u30c7\u30d7\u30ed\u30a4\u306e\u9806\u5e8f\u306f\u8003\u616e\u3055\u308c\u307e\u305b\u3093\u3002\n\u307e\u3041\u3053\u306e\u30c4\u30fc\u30eb\u306f ",(0,l.yg)("inlineCode",{parentName:"p"},"skaffold.yaml")," \u3092\u751f\u6210\u3059\u308b\u3060\u3051\u306a\u306e\u3067\u4ed5\u65b9\u306a\u3044\u3067\u3059\u306d\u3002"),(0,l.yg)("h2",{id:"\u6700\u5f8c\u306b"},"\u6700\u5f8c\u306b"),(0,l.yg)("p",null,"\u4ee5\u4e0a\u3001 ",(0,l.yg)("inlineCode",{parentName:"p"},"skaffold-generator")," \u306e\u7d39\u4ecb\u3067\u3057\u305f\u3002\n\u307e\u3060\u4f5c\u3063\u305f\u3070\u3063\u304b\u3067\u81ea\u5206\u3067\u3082\u4f7f\u3048\u3066\u306a\u3044\u306e\u3067\u672c\u5f53\u306b\u4f7f\u3044\u7269\u306b\u306a\u308b\u306e\u304b\u306f\u5206\u304b\u308a\u307e\u305b\u3093\u304c\u3001\n\u8208\u5473\u3042\u308b\u4eba\u306f\u89e6\u3063\u3066\u307f\u3066\u304f\u3060\u3055\u3044\u3002"))}g.isMDXComponent=!0},5680:(e,a,n)=>{n.d(a,{xA:()=>f,yg:()=>m});var t=n(6540);function l(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function r(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function o(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?r(Object(n),!0).forEach((function(a){l(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function i(e,a){if(null==e)return{};var n,t,l=function(e,a){if(null==e)return{};var n,t,l={},r=Object.keys(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||(l[n]=e[n]);return l}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=t.createContext({}),p=function(e){var a=t.useContext(s),n=a;return e&&(n="function"==typeof e?e(a):o(o({},a),e)),n},f=function(e){var a=p(e.components);return t.createElement(s.Provider,{value:a},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},d=t.forwardRef((function(e,a){var n=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,f=i(e,["components","mdxType","originalType","parentName"]),u=p(n),d=l,m=u["".concat(s,".").concat(d)]||u[d]||g[d]||r;return n?t.createElement(m,o(o({ref:a},f),{},{components:n})):t.createElement(m,o({ref:a},f))}));function m(e,a){var n=arguments,l=a&&a.mdxType;if("string"==typeof e||l){var r=n.length,o=new Array(r);o[0]=d;var i={};for(var s in a)hasOwnProperty.call(a,s)&&(i[s]=a[s]);i.originalType=e,i[u]="string"==typeof e?e:l,o[1]=i;for(var p=2;p<r;p++)o[p]=n[p];return t.createElement.apply(null,o)}return t.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);