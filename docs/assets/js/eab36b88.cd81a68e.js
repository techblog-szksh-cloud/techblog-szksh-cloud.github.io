"use strict";(self.webpackChunktechblog_szksh_cloud_github_io=self.webpackChunktechblog_szksh_cloud_github_io||[]).push([[8260],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>k});var i=a(7294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function u(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,i,l=function(e,t){if(null==e)return{};var a,i,l={},n=Object.keys(e);for(i=0;i<n.length;i++)a=n[i],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)a=n[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var r=i.createContext({}),p=function(e){var t=i.useContext(r),a=t;return e&&(a="function"==typeof e?e(t):u(u({},t),e)),a},s=function(e){var t=p(e.components);return i.createElement(r.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},b=i.forwardRef((function(e,t){var a=e.components,l=e.mdxType,n=e.originalType,r=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=p(a),b=l,k=d["".concat(r,".").concat(b)]||d[b]||c[b]||n;return a?i.createElement(k,u(u({ref:t},s),{},{components:a})):i.createElement(k,u({ref:t},s))}));function k(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var n=a.length,u=new Array(n);u[0]=b;var o={};for(var r in t)hasOwnProperty.call(t,r)&&(o[r]=t[r]);o.originalType=e,o[d]="string"==typeof e?e:l,u[1]=o;for(var p=2;p<n;p++)u[p]=a[p];return i.createElement.apply(null,u)}return i.createElement.apply(null,a)}b.displayName="MDXCreateElement"},3360:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>r,contentTitle:()=>u,default:()=>c,frontMatter:()=>n,metadata:()=>o,toc:()=>p});var i=a(7462),l=(a(7294),a(3905));const n={title:"AWS CodeBuild \u3092\u5b9f\u884c\u3059\u308b Github App \u3092\u4f5c\u308b",date:new Date("2021-08-16T00:10:51.000Z"),tags:["aws","codebuild","github-app"],authors:["suzuki-shunsuke"]},u=void 0,o={permalink:"/github-app-for-codebuild",source:"@site/blog/github-app-for-codebuild.md",title:"AWS CodeBuild \u3092\u5b9f\u884c\u3059\u308b Github App \u3092\u4f5c\u308b",description:"GitHub Repository \u306e CI \u306b CodeBuild \u3092\u4f7f\u3046\u5834\u5408\u3001 CodeBuild \u306e Webhook integration (\u4ee5\u4e0b CodeBuild GitHub integration \u3068\u547c\u3076\u3053\u3068\u306b\u3057\u307e\u3059) \u3092\u4f7f\u3046\u306e\u304c\u4e00\u756a\u81ea\u7136\u3067\u3057\u3087\u3046\u3002",date:"2021-08-16T00:10:51.000Z",formattedDate:"August 16, 2021",tags:[{label:"aws",permalink:"/tags/aws"},{label:"codebuild",permalink:"/tags/codebuild"},{label:"github-app",permalink:"/tags/github-app"}],readingTime:9.08,truncated:!1,authors:[{name:"Shunsuke Suzuki",title:"Platform Engineer / OSS Developer / Go / Terraform",url:"https://github.com/suzuki-shunsuke",imageURL:"https://github.com/suzuki-shunsuke.png",key:"suzuki-shunsuke"}],frontMatter:{title:"AWS CodeBuild \u3092\u5b9f\u884c\u3059\u308b Github App \u3092\u4f5c\u308b",date:"2021-08-16T00:10:51.000Z",tags:["aws","codebuild","github-app"],authors:["suzuki-shunsuke"]},prevItem:{title:"aqua - CLI \u30c4\u30fc\u30eb\u306e\u30d0\u30fc\u30b8\u30e7\u30f3\u7ba1\u7406",permalink:"/aqua"},nextItem:{title:"2021-07 \u3084\u3063\u305f\u3053\u3068",permalink:"/what-i-did-2021-07"}},r={authorsImageUrls:[void 0]},p=[{value:"\u89e3\u6c7a\u3057\u305f\u3044\u8ab2\u984c",id:"\u89e3\u6c7a\u3057\u305f\u3044\u8ab2\u984c",level:2},{value:"GitHub App",id:"github-app",level:2},{value:"merged event \u3067 merged commit sha \u3067 build \u3092\u5b9f\u884c",id:"merged-event-\u3067-merged-commit-sha-\u3067-build-\u3092\u5b9f\u884c",level:2},{value:"GitHub \u306e Personal Access Token \u306e\u4ee3\u308f\u308a\u306b GitHub App installation access token \u3092\u4f7f\u3046",id:"github-\u306e-personal-access-token-\u306e\u4ee3\u308f\u308a\u306b-github-app-installation-access-token-\u3092\u4f7f\u3046",level:2},{value:"Lambda \u304b\u3089 Repository \u306e\u30b3\u30fc\u30c9\u3092\u53c2\u7167\u3059\u308b",id:"lambda-\u304b\u3089-repository-\u306e\u30b3\u30fc\u30c9\u3092\u53c2\u7167\u3059\u308b",level:2},{value:"GitHub App \u306e\u958b\u767a\u3092\u3044\u304b\u306b\u697d\u306b\u3059\u308b\u304b",id:"github-app-\u306e\u958b\u767a\u3092\u3044\u304b\u306b\u697d\u306b\u3059\u308b\u304b",level:2},{value:"\u30b5\u30f3\u30d7\u30eb",id:"\u30b5\u30f3\u30d7\u30eb",level:2}],s={toc:p},d="wrapper";function c(e){let{components:t,...a}=e;return(0,l.kt)(d,(0,i.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"GitHub Repository \u306e CI \u306b CodeBuild \u3092\u4f7f\u3046\u5834\u5408\u3001 ",(0,l.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/codebuild/latest/userguide/github-webhook.html"},"CodeBuild \u306e Webhook integration")," (\u4ee5\u4e0b ",(0,l.kt)("inlineCode",{parentName:"p"},"CodeBuild GitHub integration")," \u3068\u547c\u3076\u3053\u3068\u306b\u3057\u307e\u3059) \u3092\u4f7f\u3046\u306e\u304c\u4e00\u756a\u81ea\u7136\u3067\u3057\u3087\u3046\u3002\n\u57fa\u672c\u7684\u306a\u30e6\u30fc\u30b9\u30b1\u30fc\u30b9\u306a\u3089\u3053\u308c\u3067\u3088\u3044\u306e\u3067\u3059\u304c\u3001 GitHub App \u3092\u6d3b\u7528\u3059\u308b\u3053\u3068\u3067\u3088\u308a\u9ad8\u5ea6\u306a CI \u3092\u5b9f\u73fe\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,l.kt)("h2",{id:"\u89e3\u6c7a\u3057\u305f\u3044\u8ab2\u984c"},"\u89e3\u6c7a\u3057\u305f\u3044\u8ab2\u984c"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Batch Build \u306e\u8ab2\u984c",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u8d77\u52d5\u30fb\u7d42\u4e86\u304c\u9045\u3044"),(0,l.kt)("li",{parentName:"ul"},"\u5168 build \u304c\u6210\u529f\u3057\u305f Batch Build \u3092 Retry \u3067\u304d\u306a\u3044"),(0,l.kt)("li",{parentName:"ul"},"Web UI \u304c\u308f\u304b\u308a\u306b\u304f\u3044",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u4f59\u8a08\u306a build \u304c\u8d77\u52d5\u3059\u308b"),(0,l.kt)("li",{parentName:"ul"},"build \u5358\u4f53\u3092 Retry \u3067\u304d\u306a\u3044"))),(0,l.kt)("li",{parentName:"ul"},"build \u3054\u3068\u306b\u6761\u4ef6\u8a2d\u5b9a\u3068\u304b\u3067\u304d\u306a\u3044"),(0,l.kt)("li",{parentName:"ul"},"buildspec \u3092\u52d5\u7684\u306b\u751f\u6210\u3067\u304d\u306a\u3044"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"CodeBuild GitHub integration")," \u306e\u8ab2\u984c",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Build Project \u3054\u3068\u306b Repository Webhook \u304c 1 \u3064\u4f5c\u3089\u308c\u308b",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://docs.github.com/en/developers/webhooks-and-events/webhooks/about-webhooks"},"webhook 1 repository \u3042\u305f\u308a 20 \u500b\u307e\u3067\u3057\u304b\u4f5c\u308c\u306a\u3044")),(0,l.kt)("li",{parentName:"ul"},"(\u3053\u308c\u3092\u88cf\u4ed8\u3051\u308b\u5ba2\u89b3\u7684\u306a\u30bd\u30fc\u30b9\u306f\u306a\u3044\u3067\u3059\u304c) webhook \u306e\u6570\u304c\u5897\u3048\u308b\u3068 build \u306e\u52d5\u4f5c\u304c\u4e0d\u5b89\u5b9a\u306b\u306a\u308b\u306e\u3092\u89b3\u6e2c\u3057\u3066\u3044\u307e\u3059"))),(0,l.kt)("li",{parentName:"ul"},"Filter \u306e\u6761\u4ef6\u304c\u9650\u3089\u308c\u3066\u3044\u308b(\u4f8b\u3048\u3070 PR label \u3067 filter \u3068\u304b\u3067\u304d\u306a\u3044)"),(0,l.kt)("li",{parentName:"ul"},"\u8907\u6570\u306e build \u3092\u5b9f\u884c\u3067\u304d\u306a\u3044(Batch Build \u3082 1 \u3064\u3068\u307f\u306a\u3057\u305f\u5834\u5408\u306e\u8a71)"))),(0,l.kt)("li",{parentName:"ul"},"CodeBuild \u306e\u8ab2\u984c",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Retry \u3057\u305f\u5834\u5408 webhook \u3067\u8d77\u52d5\u3057\u305f\u3068\u304d\u306e\u74b0\u5883\u5909\u6570\u304c\u8a2d\u5b9a\u3055\u308c\u306a\u3044")))),(0,l.kt)("h2",{id:"github-app"},"GitHub App"),(0,l.kt)("p",null,"Amazon API Gateway \u3068 Lambda \u3092\u4f7f\u3063\u3066 GitHub App \u3092\u69cb\u7bc9\u3057\u307e\u3059\u3002\nLambda \u3067 webhook \u3092\u53d7\u3051\u53d6\u308a\u3001 AWS SDK \u3092\u4f7f\u3063\u3066 build \u3092\u5b9f\u884c\u3057\u307e\u3059\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/13323303/129534257-391da6ac-9690-46df-b6df-53605d3c0c6a.png",alt:"codebuilder-architecture"})),(0,l.kt)("p",null,"GitHub App \u3092\u4f5c\u6210\u3057\u3001 Webhook URL \u3068\u3057\u3066 API Gateway \u306e endpoint \u3092\u6307\u5b9a\u3057\u307e\u3059\u3002\ninternet facing \u306a API Gateway \u306f Repository \u3054\u3068\u306b\u4f5c\u308b\u306e\u3067\u306f\u306a\u304f\u3001\u5171\u6709\u3067 1 \u3064\u4f5c\u308b\u3088\u3046\u306b\u3057\u305f\u307b\u3046\u304c\u826f\u3044\u304b\u3068\u601d\u3044\u307e\u3059\u3002\nLambda \u306f Repository \u3054\u3068\u306b\u5206\u3051\u305f\u307b\u3046\u304c\u6a29\u9650\u3092\u7d5e\u308c\u308b\u3057\u3001 Function \u304c\u30b7\u30f3\u30d7\u30eb\u306b\u306a\u308b\u3057\u3001\u3042\u308b\u30ea\u30dd\u30b8\u30c8\u30ea\u306e\u305f\u3081\u306e\u5909\u66f4\u304c\u4ed6\u306e\u30ea\u30dd\u30b8\u30c8\u30ea\u306b\u5f71\u97ff\u3059\u308b\u3053\u3068\u304c\u306a\u3044\u306e\u3067\u826f\u3044\u3067\u3057\u3087\u3046\u3002"),(0,l.kt)("p",null,"Batch Build \u3092\u4f7f\u3046\u4ee3\u308f\u308a\u306b Build \u3092\u8907\u6570\u4e26\u5217\u3067\u8d77\u52d5\u3059\u308b\u3053\u3068\u3067\u3001 Batch Build \u306e\u8ab2\u984c\u3092\u89e3\u6c7a\u3067\u304d\u307e\u3059\u3002\n\u5b9f\u884c\u6642\u306b",(0,l.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/sdk-for-go/api/service/codebuild/#CodeBuild.StartBuildWithContext"},"\u30d1\u30e9\u30e1\u30fc\u30bf"),"\u3092\u5909\u3048\u308b\u3053\u3068\u3082\u3067\u304d\u307e\u3059\u3002\nWebhook \u306e Payload \u3082\u53c2\u7167\u3067\u304d\u308b\u306e\u3067\u3001 Payload \u304b\u3089\u5f97\u305f\u30c7\u30fc\u30bf(PR \u756a\u53f7\u3001 label\u3001PR Author \u540d\u3001 etc)\u3092\u74b0\u5883\u5909\u6570\u3068\u3057\u3066 build \u306b\u308f\u305f\u3059\u3053\u3068\u3082\u3067\u304d\u307e\u3059\u3002"),(0,l.kt)("p",null,"\u5f93\u6765\u306f build \u5185\u3067 GitHub API \u3092\u4f7f\u3063\u3066\u53d6\u5f97\u3057\u3066\u3044\u305f PR \u306e\u60c5\u5831\u3092\u74b0\u5883\u5909\u6570\u3068\u3057\u3066\u6e21\u305b\u308b\u3053\u3068\u3067\nbuild \u306e\u51e6\u7406\u304c\u7c21\u7565\u5316\u3055\u308c\u307e\u3059\u3057\u3001 GitHub API \u306e call \u6570\u3092\u6e1b\u3089\u3059\u3053\u3068\u3082\u3067\u304d\u307e\u3059(\u3053\u308c\u306f API \u306e rate limit \u304c\u554f\u984c\u306b\u306a\u308b\u5834\u5408\u306b\u91cd\u8981\u3067\u3059)\u3002"),(0,l.kt)("p",null,"PR label \u306b\u3088\u308b build \u306e\u30d5\u30a3\u30eb\u30bf\u30ea\u30f3\u30b0\u306a\u3069\u3001 ",(0,l.kt)("inlineCode",{parentName:"p"},"CodeBuild GitHub integration")," \u3067\u306f\u96e3\u3057\u3044\u3088\u308a\u8907\u96d1\u306a filter \u3082\u5b9f\u73fe\u3067\u304d\u307e\u3059\u3002"),(0,l.kt)("p",null,"GitHub App \u3067\u3042\u308c\u3070 Repository Webhook \u304c\u4f5c\u3089\u308c\u308b\u3053\u3068\u3082\u3042\u308a\u307e\u305b\u3093\u3057\u3001 Build Project \u3054\u3068\u306b webhook \u306e\u8a2d\u5b9a\u3092\u3059\u308b\u5fc5\u8981\u3082\u3042\u308a\u307e\u305b\u3093\u3002"),(0,l.kt)("p",null,"Assume Role \u3059\u308b\u3053\u3068\u3067\u5225\u306e AWS Account \u306e Build Project \u306e build \u3092\u5b9f\u884c\u3059\u308b\u3053\u3068\u3082\u3067\u304d\u307e\u3059\u3002"),(0,l.kt)("h2",{id:"merged-event-\u3067-merged-commit-sha-\u3067-build-\u3092\u5b9f\u884c"},"merged event \u3067 merged commit sha \u3067 build \u3092\u5b9f\u884c"),(0,l.kt)("p",null,"PR \u304c\u30de\u30fc\u30b8\u3055\u308c\u305f\u3089 merged commit \u306e SHA \u3067 CI \u3092\u5b9f\u884c\u3057\u305f\u3044\u5834\u5408\u3001 push event \u3092 hook \u3059\u308b\u306e\u304c\u304a\u305d\u3089\u304f\u4e00\u822c\u7684\u304b\u3068\u601d\u3044\u307e\u3059\u3002"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"CodeBuild GitHub integration")," \u3067\u306f ",(0,l.kt)("inlineCode",{parentName:"p"},"merged")," event \u3092 hook \u3059\u308b\u3053\u3068\u3082\u3067\u304d\u307e\u3059\u304c\u3001\n\u3053\u306e\u5834\u5408 PR \u306e head branch \u306e SHA \u3067 build \u304c\u5b9f\u884c\u3055\u308c\u3066\u3057\u307e\u3044\u307e\u3059\u3057\u3001 base branch \u306e commit status \u304c\u66f4\u65b0\u3055\u308c\u307e\u305b\u3093\u3002"),(0,l.kt)("p",null,"\u3057\u304b\u3057 ",(0,l.kt)("inlineCode",{parentName:"p"},"push")," event \u3067\u306f\u95a2\u9023\u3059\u308b PR \u306e\u60c5\u5831\u304c\u53d6\u308c\u306a\u3044(build \u306e\u74b0\u5883\u5909\u6570\u3068\u3057\u3066 PR \u306e\u60c5\u5831\u304c\u6e21\u3055\u308c\u306a\u3044)\u3068\u3044\u3046\u554f\u984c\u304c\u3042\u308a\u307e\u3059\u3002\n",(0,l.kt)("a",{parentName:"p",href:"https://docs.github.com/en/rest/reference/repos#list-pull-requests-associated-with-a-commit"},"GitHub API \u3067\u30b3\u30df\u30c3\u30c8\u3068\u95a2\u9023\u3057\u305f PR \u306e\u4e00\u89a7\u304c\u53d6\u308c\u307e\u3059"),"\u304c\u3001\u8907\u6570\u306e PR \u3068\u95a2\u9023\u3065\u3044\u3066\u3044\u308b\u5834\u5408\u3001\u3069\u306e PR \u306a\u306e\u304b\u7279\u5b9a\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u305b\u3093(\u7279\u5b9a\u306e\u6761\u4ef6\u4ed8\u304d\u3067\u3042\u308c\u3070\u3067\u304d\u307e\u3059\u304c)\u3002"),(0,l.kt)("p",null,"\u305d\u3053\u3067 GitHub App \u3067 ",(0,l.kt)("inlineCode",{parentName:"p"},"merged")," event (\u6b63\u78ba\u306b\u306f ",(0,l.kt)("inlineCode",{parentName:"p"},"closed")," event \u3067 PR \u304c\u30de\u30fc\u30b8\u6e08\u306e\u5834\u5408) \u3092 hook \u3057\u3064\u3064\u3001\nbuild \u8d77\u52d5\u6642\u306b source version \u3068\u3057\u3066 merged commit sha \u3092\u6307\u5b9a\u3059\u308b\u3053\u3068\u3067\nwebhook \u304b\u3089 PR \u306e\u60c5\u5831\u3092\u53d6\u5f97\u3057\u3064\u3064 merged commit \u306e SHA \u3067 CI \u3092\u5b9f\u884c\u3067\u304d\u307e\u3059\u3002"),(0,l.kt)("h2",{id:"github-\u306e-personal-access-token-\u306e\u4ee3\u308f\u308a\u306b-github-app-installation-access-token-\u3092\u4f7f\u3046"},"GitHub \u306e Personal Access Token \u306e\u4ee3\u308f\u308a\u306b GitHub App installation access token \u3092\u4f7f\u3046"),(0,l.kt)("p",null,"CodeBuild \u306e build \u5185\u3067 GitHub API \u3092\u4f7f\u3044\u305f\u3044\u5834\u5408\u3001 Personal Access Token \u3092\u767a\u884c\u3059\u308b\u306e\u304c\u30b7\u30f3\u30d7\u30eb\u3067\u3059\u304c\u3001 Personal Access Token \u306b\u306f\u3044\u304f\u3064\u304b\u8ab2\u984c\u304c\u3042\u308a\u307e\u3059\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"token \u6d41\u51fa\u306e\u30ea\u30b9\u30af",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"rotation \u304c\u96e3\u3057\u3044\u306e\u3067\u6709\u52b9\u671f\u9650\u304c\u8a2d\u5b9a\u3055\u308c\u3066\u306a\u3044\u5834\u5408\u304c\u591a\u3044"))),(0,l.kt)("li",{parentName:"ul"},"rate limit",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"token \u304c organization \u3067\u5e83\u304f\u5171\u6709\u3055\u308c\u305f\u308a\u3059\u308b\u3088\u3046\u306b\u306a\u308b\u3068\u554f\u984c\u306b\u306a\u308a\u3084\u3059\u3044"),(0,l.kt)("li",{parentName:"ul"},"rate limit \u306f account \u5358\u4f4d\u306a\u306e\u3067\u3001\u540c\u3058 account \u306e token \u3092\u5225\u306b\u4f5c\u3063\u3066\u3082\u610f\u5473\u304c\u306a\u3044"),(0,l.kt)("li",{parentName:"ul"},"account \u3092\u5897\u3084\u3057\u3066 org \u306b\u8ffd\u52a0\u3059\u308b\u3068\u3001 org \u306e\u30e1\u30f3\u30d0\u30fc\u304c\u5897\u3048\u308b\u306e\u3067\u304a\u91d1\u304c\u304b\u304b\u308b(\u307e\u3041\u91d1\u984d\u7684\u306b\u7121\u8996\u3057\u3066\u3082\u3088\u3044\u304b\u3082\u3057\u308c\u307e\u305b\u3093\u304c)")))),(0,l.kt)("p",null,"GitHub App \u3067\u306f rotation \u306a\u3069\u3092\u8003\u3048\u306a\u304f\u3066\u3082\u4e00\u6642\u7684\u306a token \u3092\u767a\u884c\u3067\u304d\u308b\u306e\u3067\u3001\u30bb\u30ad\u30e5\u30ea\u30c6\u30a3\u7684\u306b\u30ea\u30b9\u30af\u304c\u4f4e\u3044\u3067\u3059\u3057\u3001\nGitHub App \u3092\u4f5c\u3063\u3066\u3082\u304a\u91d1\u306f\u304b\u304b\u308a\u307e\u305b\u3093\u3002\ntoken \u3092\u767a\u884c\u3059\u308b\u306b\u306f"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"App ID"),(0,l.kt)("li",{parentName:"ul"},"Installation ID (webhook \u306e payload \u306b\u542b\u307e\u308c\u3066\u3044\u308b)"),(0,l.kt)("li",{parentName:"ul"},"Private key")),(0,l.kt)("p",null,"\u304c\u5fc5\u8981\u3067\u3001 build \u5b9f\u884c\u6642\u306b installation id \u3092\u74b0\u5883\u5909\u6570\u3068\u3057\u3066\u6e21\u3059\u3053\u3068\u3067 Lambda \u3060\u3051\u3067\u306a\u304f Codebuild \u3067\u3082 installation access token \u304c\u4f7f\u3048\u307e\u3059\u3002"),(0,l.kt)("p",null,"\u3082\u3061\u308d\u3093 GitHub App \u3092\u4f7f\u3063\u3066\u3082 rate limit \u306b\u5f15\u3063\u304b\u304b\u308b\u3053\u3068\u306f\u3042\u308a\u307e\u3059\u304c\u3001 Personal Access Token \u306b\u6bd4\u3079\u3066\u56de\u907f\u3057\u3084\u3059\u3044\u304b\u3068\u306f\u601d\u3044\u307e\u3059\u3002"),(0,l.kt)("h2",{id:"lambda-\u304b\u3089-repository-\u306e\u30b3\u30fc\u30c9\u3092\u53c2\u7167\u3059\u308b"},"Lambda \u304b\u3089 Repository \u306e\u30b3\u30fc\u30c9\u3092\u53c2\u7167\u3059\u308b"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://blog.studysapuri.jp/entry/2020/12/03/080000"},"https://blog.studysapuri.jp/entry/2020/12/03/080000")," \u3067\u306f CodeBuild \u3067\u30ea\u30dd\u30b8\u30c8\u30ea\u306e\u30b3\u30fc\u30c9\u3092 checkout \u3057\u3001\nbuild \u306e\u4e2d\u3067\u52d5\u7684\u306b buildspec \u3092\u751f\u6210\u3057\u3066 batch build \u3092\u5b9f\u884c\u3057\u3066\u3044\u307e\u3059\u3002"),(0,l.kt)("p",null,"\u540c\u3058\u3088\u3046\u306a\u3053\u3068\u3092 Lambda \u3067\u3084\u308d\u3046\u3068\u3057\u305f\u5834\u5408\u3001\u8272\u3005\u5236\u7d04\u304c\u3042\u308a\u307e\u3059\u3002\nLambda \u3067\u306f\u30ea\u30dd\u30b8\u30c8\u30ea\u3092 checkout \u3057\u3066\u304f\u308b\u4ee3\u308f\u308a\u306b\u3001 build \u3092\u5b9f\u884c\u3059\u308b\u306e\u306b\u5fc5\u8981\u306a\u60c5\u5831\u3092\u9759\u7684\u306b\u751f\u6210\u3057\u3066\u30ea\u30dd\u30b8\u30c8\u30ea\u306b\u30b3\u30df\u30c3\u30c8\u3057\u3066\u304a\u304d\u305d\u308c\u3092 GitHub API \u3067\u53d6\u5f97\u3059\u308b\u3068\u3044\u3046\u3084\u308a\u65b9\u304c\u3042\u308a\u307e\u3059\u3002\n\u305d\u306e\u5834\u5408\u3001\u30d5\u30a1\u30a4\u30eb\u3092\u751f\u6210\u3059\u308b\u30b3\u30de\u30f3\u30c9\u3092\u30ea\u30dd\u30b8\u30c8\u30ea\u306b\u7528\u610f\u3057\u3066\u304a\u304d\u3001 \u3061\u3083\u3093\u3068\u30d5\u30a1\u30a4\u30eb\u304c\u6700\u65b0\u306b\u306a\u3063\u3066\u3044\u308b\u304b CI \u306e\u4e2d\u3067\u30c1\u30a7\u30c3\u30af\u3057\u3001\n\u306a\u3063\u3066\u3044\u306a\u3051\u308c\u3070 CI \u3092 fail \u3055\u305b\u308b\u304b\u81ea\u52d5\u3067\u66f4\u65b0\u3057\u3066\u30b3\u30df\u30c3\u30c8\u3059\u308b\u3068\u3044\u3046\u306e\u3092\u3084\u308b\u306e\u304c\u826f\u3055\u305d\u3046\u3067\u3059\u3002\nGit \u306e pre-push hook \u306a\u3069\u3067 check \u3059\u308b\u306e\u3082\u3042\u308a\u304b\u3082\u3057\u308c\u307e\u305b\u3093\u3002"),(0,l.kt)("h2",{id:"github-app-\u306e\u958b\u767a\u3092\u3044\u304b\u306b\u697d\u306b\u3059\u308b\u304b"},"GitHub App \u306e\u958b\u767a\u3092\u3044\u304b\u306b\u697d\u306b\u3059\u308b\u304b"),(0,l.kt)("p",null,"\u3088\u3046\u306f webhook \u3092\u53d7\u3051\u53d6\u3063\u3066 build \u3092\u5b9f\u884c\u3059\u308b Lambda Function \u3092\u5b9f\u88c5\u3059\u308c\u3070\u3044\u3044\u3060\u3051\u306a\u306e\u3067\u3059\u304c\u3001\n\u6bce\u56de 0 \u304b\u3089\u30b3\u30fc\u30c9\u3092\u66f8\u304f\u306e\u306f\u3061\u3087\u3063\u3068\u3057\u305f\u624b\u9593\u306a\u306e\u3067\u3001 Go \u306e\u7c21\u5358\u306a library \u3092\u4f5c\u3063\u3066\u3044\u307e\u3059\u3002"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/suzuki-shunsuke/go-github-app-for-aws-codebuild"},"https://github.com/suzuki-shunsuke/go-github-app-for-aws-codebuild")),(0,l.kt)("p",null,"\u3053\u306e\u30e9\u30a4\u30d6\u30e9\u30ea\u81ea\u4f53\u306f\u5927\u3057\u305f\u3082\u306e\u3067\u306f\u306a\u3044\u306e\u3067\u3001\u7686\u3055\u3093\u306e\u30e6\u30fc\u30b9\u30b1\u30fc\u30b9\u3084\u8a00\u8a9e\u306b\u5408\u308f\u305b\u3066\u72ec\u81ea\u306b\u4f5c\u3063\u3066\u3082\u826f\u3044\u3067\u3057\u3087\u3046\u3002"),(0,l.kt)("h2",{id:"\u30b5\u30f3\u30d7\u30eb"},"\u30b5\u30f3\u30d7\u30eb"),(0,l.kt)("p",null,"\u7c21\u5358\u306a\u30b5\u30f3\u30d7\u30eb\u3082\u66f8\u3044\u3066\u3044\u307e\u3059\u3002"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/suzuki-shunsuke/example-github-app-for-aws-codebuild"},"https://github.com/suzuki-shunsuke/example-github-app-for-aws-codebuild")))}c.isMDXComponent=!0}}]);