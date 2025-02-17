"use strict";(self.webpackChunktechblog_szksh_cloud_github_io=self.webpackChunktechblog_szksh_cloud_github_io||[]).push([[6436],{1137:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>g,contentTitle:()=>p,default:()=>y,frontMatter:()=>r,metadata:()=>o,toc:()=>i});var a=n(8168),l=(n(6540),n(5680));const r={title:"github-comment - GitHub \u306b\u30b3\u30e1\u30f3\u30c8\u3092\u6295\u7a3f\u3059\u308b CLI",date:new Date("2020-07-31T11:42:54.000Z"),tags:["oss"],authors:["suzuki-shunsuke"]},p=void 0,o={permalink:"/github-comment",source:"@site/blog/github-comment.md",title:"github-comment - GitHub \u306b\u30b3\u30e1\u30f3\u30c8\u3092\u6295\u7a3f\u3059\u308b CLI",description:"GitHub \u306e issue \u3084 pull request, commit \u306b\u30b3\u30e1\u30f3\u30c8\u3092\u6295\u7a3f\u3059\u308b CLI \u30c4\u30fc\u30eb\u3092\u4f5c\u308a\u307e\u3057\u305f(\u7d50\u69cb\u524d\u306e\u8a71\u3067\u3059\u304c)\u3002",date:"2020-07-31T11:42:54.000Z",formattedDate:"July 31, 2020",tags:[{label:"oss",permalink:"/tags/oss"}],readingTime:8.58,hasTruncateMarker:!1,authors:[{name:"Shunsuke Suzuki",title:"Platform Engineer / OSS Developer / Go / Terraform",url:"https://github.com/suzuki-shunsuke",imageURL:"https://github.com/suzuki-shunsuke.png",key:"suzuki-shunsuke"}],frontMatter:{title:"github-comment - GitHub \u306b\u30b3\u30e1\u30f3\u30c8\u3092\u6295\u7a3f\u3059\u308b CLI",date:"2020-07-31T11:42:54.000Z",tags:["oss"],authors:["suzuki-shunsuke"]},prevItem:{title:"AWS CodeBuild \u826f\u3055\u305d\u3046",permalink:"/codebuild-1"},nextItem:{title:"clap - \u7c21\u5358\u306b\u30c4\u30fc\u30eb\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b\u305f\u3081\u306e\u30c4\u30fc\u30eb\u3092\u4f5c\u3063\u305f",permalink:"/clap"}},g={authorsImageUrls:[void 0]},i=[{value:"post \u30b3\u30de\u30f3\u30c9",id:"post-\u30b3\u30de\u30f3\u30c9",level:2},{value:"exec \u30b3\u30de\u30f3\u30c9",id:"exec-\u30b3\u30de\u30f3\u30c9",level:2},{value:"\u8a2d\u5b9a\u30d5\u30a1\u30a4\u30eb",id:"\u8a2d\u5b9a\u30d5\u30a1\u30a4\u30eb",level:2},{value:"exec \u306e\u8a2d\u5b9a",id:"exec-\u306e\u8a2d\u5b9a",level:3},{value:"\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u306e\u518d\u5229\u7528",id:"\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u306e\u518d\u5229\u7528",level:3},{value:"\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u306e\u5909\u6570\u3092\u30b3\u30de\u30f3\u30c9\u30e9\u30a4\u30f3\u5f15\u6570\u3067\u6e21\u3059",id:"\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u306e\u5909\u6570\u3092\u30b3\u30de\u30f3\u30c9\u30e9\u30a4\u30f3\u5f15\u6570\u3067\u6e21\u3059",level:2},{value:"\u8a2d\u5b9a\u30d5\u30a1\u30a4\u30eb\u3067\u5909\u6570\u3092\u5b9a\u7fa9\u3059\u308b",id:"\u8a2d\u5b9a\u30d5\u30a1\u30a4\u30eb\u3067\u5909\u6570\u3092\u5b9a\u7fa9\u3059\u308b",level:2},{value:"post \u30b3\u30de\u30f3\u30c9\u306e\u6a19\u6e96\u5165\u529b\u3067\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u3092\u6e21\u3059",id:"post-\u30b3\u30de\u30f3\u30c9\u306e\u6a19\u6e96\u5165\u529b\u3067\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u3092\u6e21\u3059",level:2},{value:"\u30d1\u30e9\u30e1\u30fc\u30bf\u306e\u88dc\u5b8c",id:"\u30d1\u30e9\u30e1\u30fc\u30bf\u306e\u88dc\u5b8c",level:2},{value:"CircleCI",id:"circleci",level:3},{value:"Drone",id:"drone",level:3},{value:"GitHub Actions",id:"github-actions",level:3},{value:"exec \u306e\u30d1\u30e9\u30e1\u30fc\u30bf\u306e Command \u3068 JoinCommand",id:"exec-\u306e\u30d1\u30e9\u30e1\u30fc\u30bf\u306e-command-\u3068-joincommand",level:2},{value:"\u8a2d\u5b9a\u30d5\u30a1\u30a4\u30eb\u306e\u30d1\u30b9",id:"\u8a2d\u5b9a\u30d5\u30a1\u30a4\u30eb\u306e\u30d1\u30b9",level:2},{value:"\u8a2d\u5b9a\u30d5\u30a1\u30a4\u30eb\u3067 .Org, .Repo \u3092\u6307\u5b9a\u3059\u308b",id:"\u8a2d\u5b9a\u30d5\u30a1\u30a4\u30eb\u3067-org-repo-\u3092\u6307\u5b9a\u3059\u308b",level:2}],u={toc:i},m="wrapper";function y(e){let{components:t,...n}=e;return(0,l.yg)(m,(0,a.A)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.yg)("p",null,"GitHub \u306e issue \u3084 pull request, commit \u306b\u30b3\u30e1\u30f3\u30c8\u3092\u6295\u7a3f\u3059\u308b CLI \u30c4\u30fc\u30eb\u3092\u4f5c\u308a\u307e\u3057\u305f(\u7d50\u69cb\u524d\u306e\u8a71\u3067\u3059\u304c)\u3002"),(0,l.yg)("p",null,(0,l.yg)("a",{parentName:"p",href:"https://github.com/suzuki-shunsuke/github-comment"},"https://github.com/suzuki-shunsuke/github-comment")),(0,l.yg)("p",null,"\u3053\u306e\u30d6\u30ed\u30b0\u306e\u57f7\u7b46\u6642\u70b9\u3067\u6700\u65b0\u306f v1.5.0 \u3067\u3059\u3002"),(0,l.yg)("p",null,"Go \u88fd\u306a\u306e\u3067\u3001 GitHub Releases \u304b\u3089\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u3057\u3066\u304f\u308c\u3070\u7c21\u5358\u306b\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3067\u304d\u307e\u3059\u3002"),(0,l.yg)("p",null,"\u60f3\u5b9a\u3057\u3066\u3044\u308b\u4e3b\u306a\u7528\u9014\u306f\u3001 CI/CD \u306e \u7d50\u679c\u3092\u30b3\u30e1\u30f3\u30c8\u3067\u901a\u77e5\u3059\u308b\u3053\u3068\u3067 DX \u3092\u5411\u4e0a\u3059\u308b\u3053\u3068\u3067\u3059\u3002\n\u4f8b\u3048\u3070 CI \u304c\u3053\u3051\u305f\u3089\u3053\u3051\u305f\u30b3\u30de\u30f3\u30c9\u3068\u30a8\u30e9\u30fc\u30e1\u30c3\u30bb\u30fc\u30b8\u3092\u901a\u77e5\u3059\u308b\u306a\u3069\u3067\u3059\u3002"),(0,l.yg)("p",null,"github-comment \u306b\u306f"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"init: \u8a2d\u5b9a\u30d5\u30a1\u30a4\u30eb\u306e\u96db\u5f62\u3092\u751f\u6210\u3059\u308b"),(0,l.yg)("li",{parentName:"ul"},"post: \u30b3\u30e1\u30f3\u30c8\u3092\u6295\u7a3f\u3059\u308b"),(0,l.yg)("li",{parentName:"ul"},"exec: \u5916\u90e8\u30b3\u30de\u30f3\u30c9\u3092\u5b9f\u884c\u3057\u3001\u305d\u306e\u7d50\u679c\u3092\u5143\u306b\u30b3\u30e1\u30f3\u30c8\u3092\u6295\u7a3f\u3059\u308b")),(0,l.yg)("p",null,"\u3068\u3044\u3046 3 \u3064\u306e\u30b5\u30d6\u30b3\u30de\u30f3\u30c9\u304c\u3042\u308a\u307e\u3059\u3002"),(0,l.yg)("p",null,"\u30b3\u30e1\u30f3\u30c8\u306e\u6295\u7a3f\u306b\u306f GitHub \u306e Access Token \u304c\u5fc5\u8981\u3067\u3059\u3002\n\u30b3\u30de\u30f3\u30c9\u30e9\u30a4\u30f3\u5f15\u6570 ",(0,l.yg)("inlineCode",{parentName:"p"},"-token")," \u3067\u3082\u6e21\u305b\u307e\u3059\u304c\u3001\u74b0\u5883\u5909\u6570\u3068\u3057\u3066\u8a2d\u5b9a\u3057\u307e\u3057\u3087\u3046\u3002"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},"$ export GITHUB_TOKEN=xxx # GITHUB_ACCESS_TOKEN \u3082\u53ef\n")),(0,l.yg)("h2",{id:"post-\u30b3\u30de\u30f3\u30c9"},"post \u30b3\u30de\u30f3\u30c9"),(0,l.yg)("p",null,"\u3053\u3093\u306a\u611f\u3058\u3067\u30b3\u30e1\u30f3\u30c8\u3092\u6295\u7a3f\u3067\u304d\u307e\u3059\u3002"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},"$ github-comment post -org suzuki-shunsuke -repo github-comment -pr 1 -template test\n")),(0,l.yg)("p",null,"\u30d1\u30e9\u30e1\u30fc\u30bf\u306e\u6570\u304c\u591a\u3044\u3067\u3059\u304c\u3001\u3044\u304f\u3064\u304b\u306e Platform \u3067\u306f\u74b0\u5883\u5909\u6570\u304b\u3089\u81ea\u52d5\u3067\u30d1\u30e9\u30e1\u30fc\u30bf\u3092\u88dc\u5b8c\u3057\u3066\u304f\u308c\u307e\u3059\u3002"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"Drone"),(0,l.yg)("li",{parentName:"ul"},"CircleCI"),(0,l.yg)("li",{parentName:"ul"},"GitHub Actions")),(0,l.yg)("p",null,"\u305d\u3046\u3059\u308b\u3068\u3053\u308c\u3067\u3088\u304f\u306a\u308a\u307e\u3059\u3002"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},"$ github-comment post -template test\n")),(0,l.yg)("p",null,"\u30b3\u30e1\u30f3\u30c8\u306f Go \u306e ",(0,l.yg)("a",{parentName:"p",href:"https://golang.org/pkg/text/template/"},"text/template")," \u3067\u51e6\u7406\u3055\u308c\u307e\u3059\u3002\n",(0,l.yg)("inlineCode",{parentName:"p"},"{{.Org}}")," ",(0,l.yg)("inlineCode",{parentName:"p"},"{{.Repo}}")," \u3068\u3044\u3063\u305f\u611f\u3058\u3067\u30d1\u30e9\u30e1\u30fc\u30bf\u3092\u53c2\u7167\u3067\u304d\u307e\u3059\u3002"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},'$ github-comment post -template "{{.Org}}/{{.Repo}} test"\n')),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"PRNumber"),(0,l.yg)("li",{parentName:"ul"},"Org"),(0,l.yg)("li",{parentName:"ul"},"Repo"),(0,l.yg)("li",{parentName:"ul"},"SHA1"),(0,l.yg)("li",{parentName:"ul"},"TemplateKey"),(0,l.yg)("li",{parentName:"ul"},"Vars")),(0,l.yg)("h2",{id:"exec-\u30b3\u30de\u30f3\u30c9"},"exec \u30b3\u30de\u30f3\u30c9"),(0,l.yg)("p",null,"\u30b3\u30de\u30f3\u30c9\u306e\u5b9f\u884c\u7d50\u679c(\u6a19\u6e96\u51fa\u529b\u3001\u6a19\u6e96\u30a8\u30e9\u30fc\u51fa\u529b\u3001 exit code) \u3092\u5143\u306b\u30b3\u30e1\u30f3\u30c8\u3092\u6295\u7a3f\u3057\u305f\u3044\u5834\u5408\u306b\u3001 exec \u30b3\u30de\u30f3\u30c9\u304c\u4f7f\u3048\u307e\u3059\u3002"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},'$ github-comment exec -template "{{.ExitCode}} {{.Stdout}}" -- echo hello\n')),(0,l.yg)("p",null,"\u30b3\u30de\u30f3\u30c9\u3092\u5b9f\u884c\u3057\u305f\u4e0a\u3067\u30b3\u30e1\u30f3\u30c8\u3092\u6295\u7a3f\u3057\u307e\u3059\u3002\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u306e\u5909\u6570\u3068\u3057\u3066\u3001 post \u3067\u3082\u6e21\u3055\u308c\u308b\u30d1\u30e9\u30e1\u30fc\u30bf\u306e\u4ed6\u306b\u30b3\u30de\u30f3\u30c9\u306e\u5b9f\u884c\u7d50\u679c\u304c\u6e21\u3055\u308c\u307e\u3059\u3002"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"ExitCode"),(0,l.yg)("li",{parentName:"ul"},"Stdout"),(0,l.yg)("li",{parentName:"ul"},"Stderr"),(0,l.yg)("li",{parentName:"ul"},"CombinedOutput"),(0,l.yg)("li",{parentName:"ul"},"Command: ",(0,l.yg)("a",{parentName:"li",href:"https://golang.org/pkg/os/exec/#Cmd.String"},"exec.Command.String")),(0,l.yg)("li",{parentName:"ul"},"JoinCommand: \u30b3\u30de\u30f3\u30c9\u5f15\u6570(\u914d\u5217)\u3092\u30b9\u30da\u30fc\u30b9 ",(0,l.yg)("inlineCode",{parentName:"li"},'" "')," \u3067\u3064\u306a\u3044\u3060\u6587\u5b57\u5217")),(0,l.yg)("p",null,"github-comment exec \u306e\u6a19\u6e96\u5165\u529b\u306f\u5b9f\u884c\u3059\u308b\u30b3\u30de\u30f3\u30c9\u306b\u6e21\u3055\u308c\u307e\u3059\u3057\u3001 github-comment exec \u306e exit code \u306f\u5b9f\u884c\u3057\u305f\u30b3\u30de\u30f3\u30c9\u306e exit code \u306b\u306a\u308a\u307e\u3059\u3002"),(0,l.yg)("h2",{id:"\u8a2d\u5b9a\u30d5\u30a1\u30a4\u30eb"},"\u8a2d\u5b9a\u30d5\u30a1\u30a4\u30eb"),(0,l.yg)("p",null,"\u4e0a\u8a18\u306e\u4f8b\u3067\u306f\u6295\u7a3f\u3059\u308b\u30b3\u30e1\u30f3\u30c8\u3092 ",(0,l.yg)("inlineCode",{parentName:"p"},"-template")," \u3067\u6e21\u3057\u3066\u3044\u307e\u3057\u305f\u304c\u3001\u3054\u304f\u77ed\u3044\u30b3\u30e1\u30f3\u30c8\u4ee5\u5916\u306f\u8a2d\u5b9a\u30d5\u30a1\u30a4\u30eb\u306b\u8a18\u8ff0\u3057\u305f\u307b\u3046\u304c\u826f\u3044\u3067\u3057\u3087\u3046\u3002\n\u8a2d\u5b9a\u30d5\u30a1\u30a4\u30eb\u306f ",(0,l.yg)("inlineCode",{parentName:"p"},"github-comment init")," \u3067\u96db\u5f62\u3092\u751f\u6210\u3067\u304d\u307e\u3059\u3002"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},"$ github-comment init\n")),(0,l.yg)("p",null,"\u3053\u3093\u306a\u611f\u3058\u3067\u8907\u6570\u306e\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u3092\u8a18\u8ff0\u3067\u304d\u307e\u3059\u3002"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-yaml"},"post:\n  default: |\n    foo\n  hello: |\n    hello\n  ...\n")),(0,l.yg)("p",null,"\u305d\u3057\u3066 ",(0,l.yg)("inlineCode",{parentName:"p"},"post")," \u5b9f\u884c\u6642\u306b ",(0,l.yg)("inlineCode",{parentName:"p"},"-template-key (-k)")," \u3067\u4f7f\u7528\u3059\u308b\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002\n",(0,l.yg)("inlineCode",{parentName:"p"},"-template")," \u3068 ",(0,l.yg)("inlineCode",{parentName:"p"},"-k")," \u4e21\u65b9\u6307\u5b9a\u3057\u306a\u3044\u5834\u5408\u3001\u30c7\u30d5\u30a9\u30eb\u30c8\u3067 ",(0,l.yg)("inlineCode",{parentName:"p"},"default")," \u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u304c\u4f7f\u7528\u3055\u308c\u307e\u3059\u3002"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},"$ github-comment -k hello\n")),(0,l.yg)("h3",{id:"exec-\u306e\u8a2d\u5b9a"},"exec \u306e\u8a2d\u5b9a"),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"exec")," \u306e\u8a2d\u5b9a\u306f\u3082\u3046\u5c11\u3057\u8907\u96d1\u3067\u3059\u3002\n\u305d\u308c\u306f\u30b3\u30de\u30f3\u30c9\u306e\u5b9f\u884c\u7d50\u679c\u306b\u3088\u3063\u3066\u4f7f\u7528\u3059\u308b\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u3092\u5909\u3048\u305f\u308a\u3001\u3042\u308b\u3044\u306f\u30b3\u30e1\u30f3\u30c8\u3092\u6295\u7a3f\u3057\u306a\u304b\u3063\u305f\u308a\u3067\u304d\u308b\u3088\u3046\u306b\u3059\u308b\u305f\u3081\u3067\u3059\u3002\n\u4e00\u3064\u306e\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u30ad\u30fc\u306b\u5bfe\u3057\u3001\u8907\u6570\u306e\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u3092\u914d\u5217\u3067\u8a2d\u5b9a\u3057\u307e\u3059\u3002"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-yaml"},"exec:\n  default:\n    - when: ExitCode == 0\n      template: |\n        success\n    - when: ExitCode != 0\n      template: |\n        failed\n    ...\n  ...\n")),(0,l.yg)("p",null,"\u305d\u3057\u3066\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u6587\u5b57\u5217\u3068\u306f\u5225\u306b ",(0,l.yg)("inlineCode",{parentName:"p"},"when")," \u3068\u3044\u3046\u3001\u305d\u306e\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u3092\u4f7f\u3046\u6761\u4ef6\u3092\u8a2d\u5b9a\u3057\u307e\u3059\u3002\n\u3053\u306e\u6761\u4ef6\u306f ",(0,l.yg)("a",{parentName:"p",href:"https://github.com/antonmedv/expr"},"antonmedv/expr")," \u306b\u3088\u3063\u3066\u51e6\u7406\u3055\u308c\u307e\u3059\u3002\n\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u306e text/template \u3068\u306f\u307e\u305f\u5225\u306e\u69cb\u6587\u306a\u306e\u304c\u3084\u3084\u3053\u3057\u3044\u3067\u3059\u306d\u3002\n\u6761\u4ef6\u306e\u8a55\u4fa1\u7d50\u679c\u306f\u5f53\u7136\u771f\u507d\u5024\u3067\u306f\u306a\u3044\u3068\u3044\u3051\u307e\u305b\u3093\u3002\n\u8a55\u4fa1\u7d50\u679c\u304c true \u306a\u3089\u3070\u305d\u308c\u3092\u4f7f\u3063\u3066\u30b3\u30e1\u30f3\u30c8\u3057\u3001\u3042\u3068\u306f\u7121\u8996\u3055\u308c\u307e\u3059\u3002\nfalse \u306a\u3089\u6b21\u306e\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u3092\u8a55\u4fa1\u3057\u307e\u3059\u3002\n\u5168\u90e8\u30de\u30c3\u30c1\u3057\u306a\u3051\u308c\u3070\u30b3\u30e1\u30f3\u30c8\u306f\u6295\u7a3f\u3055\u308c\u307e\u305b\u3093\u3057\u3001\u30a8\u30e9\u30fc\u306b\u3082\u306a\u308a\u307e\u305b\u3093\u3002\n",(0,l.yg)("inlineCode",{parentName:"p"},"dont_comment: true")," \u3068\u3059\u308b\u3068\u3001\u305d\u306e\u6761\u4ef6\u306b\u30de\u30c3\u30c1\u3057\u305f\u5834\u5408\u306f\u30b3\u30e1\u30f3\u30c8\u3092\u6295\u7a3f\u305b\u305a\u306b\u7d42\u4e86\u3057\u307e\u3059(\u5f8c\u7d9a\u306e\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u3082\u7121\u8996\u3055\u308c\u307e\u3059)\u3002"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-yaml"},"exec:\n  hello:\n    - when: ExitCode != 0\n      dont_comment: true\n    - when: true\n      template: |\n        Hello, world\n")),(0,l.yg)("h3",{id:"\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u306e\u518d\u5229\u7528"},"\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u306e\u518d\u5229\u7528"),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"templates")," \u3092\u4f7f\u3046\u3068\u8907\u6570\u306e\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u3067\u30d8\u30c3\u30c0\u30fc\u306a\u3069\u3092\u5171\u901a\u5316\u3057\u3066\u518d\u5229\u7528\u3067\u304d\u307e\u3059\u3002"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-yaml"},'templates:\n  header: "# {{.Org}}/{{.Repo}}"\npost:\n  default: |\n    {{template "header" .}}\n')),(0,l.yg)("p",null,"Go \u306e ",(0,l.yg)("a",{parentName:"p",href:"https://golang.org/pkg/text/template/"},"text/template")," \u306b\u99b4\u67d3\u307f\u304c\u306a\u3044\u3068\u308f\u304b\u308a\u306b\u304f\u3044\u304b\u3068\u601d\u3044\u307e\u3059\u304c\u3001"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-yaml"},"templates:\n  \u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u540d: \u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\n")),(0,l.yg)("p",null,"\u3067\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u3092\u5b9a\u7fa9\u3057\u3066"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},'{{template "\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u540d" .}}\n')),(0,l.yg)("p",null,"\u3067\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u3092\u53c2\u7167\u3067\u304d\u307e\u3059\u3002"),(0,l.yg)("h2",{id:"\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u306e\u5909\u6570\u3092\u30b3\u30de\u30f3\u30c9\u30e9\u30a4\u30f3\u5f15\u6570\u3067\u6e21\u3059"},"\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u306e\u5909\u6570\u3092\u30b3\u30de\u30f3\u30c9\u30e9\u30a4\u30f3\u5f15\u6570\u3067\u6e21\u3059"),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"-var \u5909\u6570\u540d:\u5024")," \u3067\u30d1\u30e9\u30e1\u30fc\u30bf\u3092\u6e21\u305b\u307e\u3059\u3002\n",(0,l.yg)("inlineCode",{parentName:"p"},"{{.Var.\u5909\u6570\u540d}}")," \u3067\u53c2\u7167\u3067\u304d\u307e\u3059\u3002"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},'$ github-comment post -var name:foo -template "Hello, {{.Var.name}}"\n')),(0,l.yg)("h2",{id:"\u8a2d\u5b9a\u30d5\u30a1\u30a4\u30eb\u3067\u5909\u6570\u3092\u5b9a\u7fa9\u3059\u308b"},"\u8a2d\u5b9a\u30d5\u30a1\u30a4\u30eb\u3067\u5909\u6570\u3092\u5b9a\u7fa9\u3059\u308b"),(0,l.yg)("p",null,"\u8a2d\u5b9a\u30d5\u30a1\u30a4\u30eb\u3067\u5909\u6570\u3092\u5b9a\u7fa9\u3067\u304d\u307e\u3059\u3002\u4efb\u610f\u306e\u578b\u306e\u5909\u6570\u3092\u5b9a\u7fa9\u3067\u304d\u307e\u3059\u3002\n",(0,l.yg)("inlineCode",{parentName:"p"},"{{.Var}}.\u5909\u6570\u540d")," \u3067\u53c2\u7167\u3067\u304d\u307e\u3059\u3002"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-yaml"},"vars:\n  foo: bar\n  zoo:\n    foo: hello\n")),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"{{.Var.zoo.foo}}")),(0,l.yg)("h2",{id:"post-\u30b3\u30de\u30f3\u30c9\u306e\u6a19\u6e96\u5165\u529b\u3067\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u3092\u6e21\u3059"},"post \u30b3\u30de\u30f3\u30c9\u306e\u6a19\u6e96\u5165\u529b\u3067\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u3092\u6e21\u3059"),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"github-comment post")," \u306e\u6a19\u6e96\u5165\u529b\u3067\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u3092\u6e21\u305b\u307e\u3059\u3002 exec \u306e\u5834\u5408\u306f\u305d\u3046\u306f\u306a\u3089\u306a\u3044(\u5b9f\u884c\u3059\u308b\u30b3\u30de\u30f3\u30c9\u306b\u6e21\u3055\u308c\u308b)\u306e\u3067\u6ce8\u610f\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},"$ echo foo | github-comment post\n")),(0,l.yg)("h2",{id:"\u30d1\u30e9\u30e1\u30fc\u30bf\u306e\u88dc\u5b8c"},"\u30d1\u30e9\u30e1\u30fc\u30bf\u306e\u88dc\u5b8c"),(0,l.yg)("p",null,"\u5148\u306b\u8ff0\u3079\u305f\u3068\u304a\u308a\u3001\u3044\u304f\u3064\u304b\u306e Platform \u3067\u306f\u74b0\u5883\u5909\u6570\u304b\u3089\u81ea\u52d5\u3067\u30d1\u30e9\u30e1\u30fc\u30bf\u3092\u88dc\u5b8c\u3057\u3066\u304f\u308c\u307e\u3059\u3002"),(0,l.yg)("h3",{id:"circleci"},"CircleCI"),(0,l.yg)("p",null,"\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0\u306e\u5224\u5225: ",(0,l.yg)("inlineCode",{parentName:"p"},"CIRCLECI")," \u306e\u6709\u7121"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"\u30d1\u30e9\u30e1\u30fc\u30bf"),(0,l.yg)("th",{parentName:"tr",align:null},"\u30bd\u30fc\u30b9"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},".Org"),(0,l.yg)("td",{parentName:"tr",align:null},"CIRCLE_PROJECT_USERNAME")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},".Repo"),(0,l.yg)("td",{parentName:"tr",align:null},"CIRCLE_PROJECT_REPONAME")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},".PRNumber"),(0,l.yg)("td",{parentName:"tr",align:null},"CIRCLE_PULL_REQUEST")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},".SHA1"),(0,l.yg)("td",{parentName:"tr",align:null},"CIRCLE_SHA1")))),(0,l.yg)("h3",{id:"drone"},"Drone"),(0,l.yg)("p",null,"\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0\u306e\u5224\u5225: ",(0,l.yg)("inlineCode",{parentName:"p"},"DRONE")," \u306e\u6709\u7121"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"\u30d1\u30e9\u30e1\u30fc\u30bf"),(0,l.yg)("th",{parentName:"tr",align:null},"\u30bd\u30fc\u30b9"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},".Org"),(0,l.yg)("td",{parentName:"tr",align:null},"DRONE_REPO_OWNER")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},".Repo"),(0,l.yg)("td",{parentName:"tr",align:null},"DRONE_REPO_NAME")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},".PRNumber"),(0,l.yg)("td",{parentName:"tr",align:null},"DRONE_PULL_REQUEST")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},".SHA1"),(0,l.yg)("td",{parentName:"tr",align:null},"DRONE_COMMIT_SHA1")))),(0,l.yg)("h3",{id:"github-actions"},"GitHub Actions"),(0,l.yg)("p",null,"\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0\u306e\u5224\u5225: ",(0,l.yg)("inlineCode",{parentName:"p"},"GITHUB_ACTIONS")," \u306e\u6709\u7121"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"\u30d1\u30e9\u30e1\u30fc\u30bf"),(0,l.yg)("th",{parentName:"tr",align:null},"\u30bd\u30fc\u30b9"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},".Org"),(0,l.yg)("td",{parentName:"tr",align:null},"GITHUB_REPOSITORY")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},".Repo"),(0,l.yg)("td",{parentName:"tr",align:null},"GITHUB_REPOSITORY")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},".PRNumber"),(0,l.yg)("td",{parentName:"tr",align:null},"GITHUB_EVENT_PATH")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},".SHA1"),(0,l.yg)("td",{parentName:"tr",align:null},"GITHUB_SHA1")))),(0,l.yg)("h2",{id:"exec-\u306e\u30d1\u30e9\u30e1\u30fc\u30bf\u306e-command-\u3068-joincommand"},"exec \u306e\u30d1\u30e9\u30e1\u30fc\u30bf\u306e Command \u3068 JoinCommand"),(0,l.yg)("p",null,"\u5b9f\u884c\u3057\u305f\u30b3\u30de\u30f3\u30c9\u3092\u793a\u3059\u30d1\u30e9\u30e1\u30fc\u30bf\u3068\u3057\u3066 Command \u3068 JoinCommand \u304c\u3042\u308a\u307e\u3059\u3002\n\u3053\u308c\u3089\u306f\u4f3c\u3066\u307e\u3059\u304c\u3001\u5fae\u5999\u306b\u9055\u3044\u307e\u3059\u3002"),(0,l.yg)("p",null,"Command \u306f ",(0,l.yg)("a",{parentName:"p",href:"https://golang.org/pkg/os/exec/#Cmd.String"},"exec.Cmd \u306e .String()")," \u304b\u3089\u53d6\u5f97\u3055\u308c\u308b\u306e\u3067\u3059\u304c\u3001\u30b3\u30de\u30f3\u30c9\u304c\u7d76\u5bfe\u30d1\u30b9\u306b\u306a\u3063\u305f\u308a\u3059\u308b\u306e\u3067\u3001\u3042\u307e\u308a\u671b\u307e\u3057\u304f\u306a\u3044\u3053\u3068\u3082\u3042\u308b\u3067\u3057\u3087\u3046\u3002"),(0,l.yg)("p",null,"\u4f8b\u3048\u3070 ",(0,l.yg)("inlineCode",{parentName:"p"},"echo hello")," \u306e\u5834\u5408 ",(0,l.yg)("inlineCode",{parentName:"p"},"/usr/local/opt/coreutils/libexec/gnubin/echo foo")," \u3068\u306a\u3063\u305f\u308a\u3057\u307e\u3059\u3002"),(0,l.yg)("p",null,"\u4e00\u65b9 JoinCommand \u306f\u30b3\u30de\u30f3\u30c9\u6587\u5b57\u5217\u3092\u5358\u306b\u30b9\u30da\u30fc\u30b9\u3067\u3064\u306a\u3044\u3060\u3082\u306e\u306b\u306a\u308a\u307e\u3059\u3002"),(0,l.yg)("p",null,"exec.Cmd \u306e .String() \u306e\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u306b\u66f8\u3044\u3066\u3042\u308b\u3068\u304a\u308a\u3001 .Command \u3068 .JoinCommand \u306f\u305d\u306e\u307e\u307e shell \u3067\u5b9f\u884c\u3059\u308b\u306e\u306b\u306f\u9069\u3055\u306a\u3044\u5f62\u5f0f\u306a\u306e\u3067\u6ce8\u610f\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,l.yg)("blockquote",null,(0,l.yg)("p",{parentName:"blockquote"},"String returns a human-readable description of c.\nIt is intended only for debugging.\nIn particular, it is not suitable for use as input to a shell.\nThe output of String may vary across Go releases.")),(0,l.yg)("h2",{id:"\u8a2d\u5b9a\u30d5\u30a1\u30a4\u30eb\u306e\u30d1\u30b9"},"\u8a2d\u5b9a\u30d5\u30a1\u30a4\u30eb\u306e\u30d1\u30b9"),(0,l.yg)("p",null,"\u8a2d\u5b9a\u30d5\u30a1\u30a4\u30eb\u306e\u30d1\u30b9\u306f ",(0,l.yg)("inlineCode",{parentName:"p"},"--config -c")," \u30aa\u30d7\u30b7\u30e7\u30f3\u3067\u6307\u5b9a\u3067\u304d\u307e\u3059\u3002\n\u4f55\u3082\u6307\u5b9a\u3057\u306a\u3044\u5834\u5408\u3001\u30ab\u30ec\u30f3\u30c8\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u304b\u3089\u30eb\u30fc\u30c8\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u306b\u5411\u304b\u3063\u3066 ",(0,l.yg)("inlineCode",{parentName:"p"},".github-comment.yml"),", ",(0,l.yg)("inlineCode",{parentName:"p"},".github-comment.yaml")," \u3092\u63a2\u7d22\u3057\u3001\u6700\u521d\u306b\u898b\u3064\u304b\u3063\u305f\u3082\u306e\u3092\u4f7f\u3044\u307e\u3059\u3002"),(0,l.yg)("h2",{id:"\u8a2d\u5b9a\u30d5\u30a1\u30a4\u30eb\u3067-org-repo-\u3092\u6307\u5b9a\u3059\u308b"},"\u8a2d\u5b9a\u30d5\u30a1\u30a4\u30eb\u3067 .Org, .Repo \u3092\u6307\u5b9a\u3059\u308b"),(0,l.yg)("p",null,"\u8a2d\u5b9a\u30d5\u30a1\u30a4\u30eb\u3067\u30b3\u30e1\u30f3\u30c8\u5148\u306e\u30ea\u30dd\u30b8\u30c8\u30ea\u3092\u6307\u5b9a\u3067\u304d\u307e\u3059\u3002\nPlatform \u3067\u88dc\u5b8c\u3055\u308c\u308b\u5834\u5408\u3084\u3001\u660e\u793a\u7684\u306b\u30d1\u30e9\u30e1\u30fc\u30bf\u3067\u6307\u5b9a\u3059\u308b\u5834\u5408\u306f\u4e0d\u8981\u3067\u3059\u3002"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-yaml"},"base:\n  org: suzuki-shunsuke\n  repo: github-comment\n")))}y.isMDXComponent=!0},5680:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>c});var a=n(6540);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var g=a.createContext({}),i=function(e){var t=a.useContext(g),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},u=function(e){var t=i(e.components);return a.createElement(g.Provider,{value:t},e.children)},m="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,g=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=i(n),d=l,c=m["".concat(g,".").concat(d)]||m[d]||y[d]||r;return n?a.createElement(c,p(p({ref:t},u),{},{components:n})):a.createElement(c,p({ref:t},u))}));function c(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,p=new Array(r);p[0]=d;var o={};for(var g in t)hasOwnProperty.call(t,g)&&(o[g]=t[g]);o.originalType=e,o[m]="string"==typeof e?e:l,p[1]=o;for(var i=2;i<r;i++)p[i]=n[i];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);