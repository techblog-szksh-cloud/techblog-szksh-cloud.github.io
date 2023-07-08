"use strict";(self.webpackChunktechblog_szksh_cloud_github_io=self.webpackChunktechblog_szksh_cloud_github_io||[]).push([[2381],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>d});var l=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,l)}return a}function u(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,l,n=function(e,t){if(null==e)return{};var a,l,n={},r=Object.keys(e);for(l=0;l<r.length;l++)a=r[l],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)a=r[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=l.createContext({}),p=function(e){var t=l.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):u(u({},t),e)),a},s=function(e){var t=p(e.components);return l.createElement(o.Provider,{value:t},e.children)},m="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},c=l.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,o=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=p(a),c=n,d=m["".concat(o,".").concat(c)]||m[c]||k[c]||r;return a?l.createElement(d,u(u({ref:t},s),{},{components:a})):l.createElement(d,u({ref:t},s))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,u=new Array(r);u[0]=c;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i[m]="string"==typeof e?e:n,u[1]=i;for(var p=2;p<r;p++)u[p]=a[p];return l.createElement.apply(null,u)}return l.createElement.apply(null,a)}c.displayName="MDXCreateElement"},8488:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>u,default:()=>k,frontMatter:()=>r,metadata:()=>i,toc:()=>p});var l=a(7462),n=(a(7294),a(3905));const r={title:"buildflow \u306e script \u3084 template \u306b\u6e21\u3055\u308c\u308b parameter",date:new Date("2020-10-17T10:44:39.000Z"),tags:["oss","buildflow"],authors:["suzuki-shunsuke"]},u=void 0,i={permalink:"/buildflow-parameter",source:"@site/blog/buildflow-parameter.md",title:"buildflow \u306e script \u3084 template \u306b\u6e21\u3055\u308c\u308b parameter",description:"buildflow \u3068\u3044\u3046\u30c4\u30fc\u30eb\u3092\u958b\u767a\u3057\u3066\u3044\u308b\u306e\u3067 buildflow \u3068\u3044\u3046\u30bf\u30b0\u3092\u3064\u3051\u3066\u4f55\u56de\u304b\u306b\u5206\u3051\u3066\u30d6\u30ed\u30b0\u3092\u66f8\u3053\u3046\u3068\u601d\u3044\u307e\u3059\u3002",date:"2020-10-17T10:44:39.000Z",formattedDate:"October 17, 2020",tags:[{label:"oss",permalink:"/tags/oss"},{label:"buildflow",permalink:"/tags/buildflow"}],readingTime:2.34,truncated:!1,authors:[{name:"Shunsuke Suzuki",title:"Platform Engineer / OSS Developer / Go / Terraform",url:"https://github.com/suzuki-shunsuke",imageURL:"https://github.com/suzuki-shunsuke.png",key:"suzuki-shunsuke"}],frontMatter:{title:"buildflow \u306e script \u3084 template \u306b\u6e21\u3055\u308c\u308b parameter",date:"2020-10-17T10:44:39.000Z",tags:["oss","buildflow"],authors:["suzuki-shunsuke"]},prevItem:{title:"buildflow \u3067\u8a2d\u5b9a\u30d5\u30a1\u30a4\u30eb\u3092\u5206\u5272\u3059\u308b",permalink:"/buildflow-split-files"},nextItem:{title:"buildflow \u306e task \u306e\u8a2d\u5b9a\u9805\u76ee",permalink:"/buildflow-task"}},o={authorsImageUrls:[void 0]},p=[{value:"Template \u3067\u30d1\u30e9\u30e1\u30fc\u30bf\u3092\u53c2\u7167\u3059\u308b",id:"template-\u3067\u30d1\u30e9\u30e1\u30fc\u30bf\u3092\u53c2\u7167\u3059\u308b",level:2},{value:"Tengo script \u3067\u30d1\u30e9\u30e1\u30fc\u30bf\u3092\u53c2\u7167\u3059\u308b",id:"tengo-script-\u3067\u30d1\u30e9\u30e1\u30fc\u30bf\u3092\u53c2\u7167\u3059\u308b",level:2}],s={toc:p},m="wrapper";function k(e){let{components:t,...a}=e;return(0,n.kt)(m,(0,l.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"buildflow \u3068\u3044\u3046\u30c4\u30fc\u30eb\u3092\u958b\u767a\u3057\u3066\u3044\u308b\u306e\u3067 ",(0,n.kt)("inlineCode",{parentName:"p"},"buildflow")," \u3068\u3044\u3046\u30bf\u30b0\u3092\u3064\u3051\u3066\u4f55\u56de\u304b\u306b\u5206\u3051\u3066\u30d6\u30ed\u30b0\u3092\u66f8\u3053\u3046\u3068\u601d\u3044\u307e\u3059\u3002"),(0,n.kt)("p",null,"\u3053\u306e\u8a18\u4e8b\u3067\u306f buildflow \u306e Tengo script \u3084\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u306b\u30d1\u30e9\u30e1\u30fc\u30bf\u3068\u3057\u3066\u6e21\u3055\u308c\u308b\u5909\u6570\u306b\u3064\u3044\u3066\u7d39\u4ecb\u3057\u307e\u3059\u3002"),(0,n.kt)("p",null,"buildflow \u3067\u306f Tengo script \u306f\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u304c\u4f7f\u3048\u308b\u8a2d\u5b9a\u9805\u76ee\u304c\u591a\u304f\u3042\u308a\u307e\u3059\u3002\u305d\u308c\u3089\u306e\u8a2d\u5b9a\u306b\u306f\u5171\u901a\u306e\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u306e\u30d1\u30e9\u30e1\u30fc\u30bf\u304c\u6e21\u3055\u308c\u307e\u3059\u3002"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"PR: Pull Request \u306e\u60c5\u5831: ",(0,n.kt)("a",{parentName:"li",href:"https://docs.github.com/en/free-pro-team@latest/rest/reference/pulls#get-a-pull-request"},"GitHub API")," \u306e\u30ec\u30b9\u30dd\u30f3\u30b9 body"),(0,n.kt)("li",{parentName:"ul"},"Files: Pull Request \u3067\u66f4\u65b0\u3055\u308c\u305f\u30d5\u30a1\u30a4\u30eb\u306e\u4e00\u89a7: ",(0,n.kt)("a",{parentName:"li",href:"https://docs.github.com/en/free-pro-team@latest/rest/reference/pulls#list-pull-requests-files"},"GitHub API")," \u306e\u30ec\u30b9\u30dd\u30f3\u30b9 body"),(0,n.kt)("li",{parentName:"ul"},"Phases: \u5bfe\u8c61\u306e Phase \u3088\u308a\u3082\u524d\u306e Phase \u306e\u7d50\u679c"),(0,n.kt)("li",{parentName:"ul"},"Phase: \u5bfe\u8c61\u306e Phase"),(0,n.kt)("li",{parentName:"ul"},"Tasks: \u5bfe\u8c61\u306e Phase \u306e Task \u306e\u7d50\u679c"),(0,n.kt)("li",{parentName:"ul"},"Task: \u5bfe\u8c61\u306e Task"),(0,n.kt)("li",{parentName:"ul"},"Item: dynamic task \u306e\u30d1\u30e9\u30e1\u30fc\u30bf\u3068\u3057\u3066\u6e21\u3055\u308c\u308b"),(0,n.kt)("li",{parentName:"ul"},"Meta: \u8a2d\u5b9a meta")),(0,n.kt)("p",null,"Phase"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Status: Phase \u306e\u5b9f\u884c\u7d50\u679c",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"succeeded"),(0,n.kt)("li",{parentName:"ul"},"failed"),(0,n.kt)("li",{parentName:"ul"},"skipped"))),(0,n.kt)("li",{parentName:"ul"},"Tasks: Phase \u306e task \u306e\u5b9f\u884c\u7d50\u679c"),(0,n.kt)("li",{parentName:"ul"},"Meta: phase \u306e \u8a2d\u5b9a meta")),(0,n.kt)("p",null,"Task"),(0,n.kt)("p",null,"type \u306b\u3088\u3089\u305a\u5171\u901a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Type: task \u306e type"),(0,n.kt)("li",{parentName:"ul"},"Name: task \u540d"),(0,n.kt)("li",{parentName:"ul"},"Status: Task \u306e\u5b9f\u884c\u7d50\u679c",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"queue"),(0,n.kt)("li",{parentName:"ul"},"running"),(0,n.kt)("li",{parentName:"ul"},"succeeded"),(0,n.kt)("li",{parentName:"ul"},"failed"),(0,n.kt)("li",{parentName:"ul"},"skipped"))),(0,n.kt)("li",{parentName:"ul"},"Meta: task \u306e meta \u306e\u8a2d\u5b9a"),(0,n.kt)("li",{parentName:"ul"},"Input:"),(0,n.kt)("li",{parentName:"ul"},"Output:")),(0,n.kt)("p",null,"command"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"ExitCode"),(0,n.kt)("li",{parentName:"ul"},"StdOut"),(0,n.kt)("li",{parentName:"ul"},"StdErr"),(0,n.kt)("li",{parentName:"ul"},"CombinedOutput")),(0,n.kt)("p",null,"read_file"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"File",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Text: \u30d5\u30a1\u30a4\u30eb\u306e\u5185\u5bb9"),(0,n.kt)("li",{parentName:"ul"},"Data: read_file \u306e format \u3092\u6307\u5b9a\u3057\u305f\u5834\u5408\u3001\u30d1\u30fc\u30b9\u3055\u308c\u305f\u7d50\u679c")))),(0,n.kt)("p",null,"write_file"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"File",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Text: \u30d5\u30a1\u30a4\u30eb\u306e\u5185\u5bb9")))),(0,n.kt)("h2",{id:"template-\u3067\u30d1\u30e9\u30e1\u30fc\u30bf\u3092\u53c2\u7167\u3059\u308b"},"Template \u3067\u30d1\u30e9\u30e1\u30fc\u30bf\u3092\u53c2\u7167\u3059\u308b"),(0,n.kt)("p",null,"\u4f8b\u3048\u3070 command \u306e\u5834\u5408"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yaml"},"---\nphases:\n- name: main\n  tasks:\n  - name: hello\n    command:\n      command: 'echo \"{{.Task.Name}}\"'\n")),(0,n.kt)("h2",{id:"tengo-script-\u3067\u30d1\u30e9\u30e1\u30fc\u30bf\u3092\u53c2\u7167\u3059\u308b"},"Tengo script \u3067\u30d1\u30e9\u30e1\u30fc\u30bf\u3092\u53c2\u7167\u3059\u308b"),(0,n.kt)("p",null,"\u4f8b\u3048\u3070 task foo \u304c\u6210\u529f\u3057\u305f\u5834\u5408\u306e\u307f\u3001 task bar \u3092\u5b9f\u884c\u3057\u305f\u3044\u5834\u5408"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yaml"},'---\nphases:\n- name: main\n  tasks:\n  - name: foo\n    command:\n      command: echo hello\n  - name: bar\n    command:\n      command: echo hello\n    dependency:\n    - foo\n    when: |\n      task := {}\n      for t in Tasks {\n        if t.Name == "foo" {\n          task = t\n          break\n        }\n      }\n      result := task.Status == "succeeded"\n')),(0,n.kt)("p",null,"\u3053\u306e\u3088\u3046\u306b\u4ed6\u306e task \u306e\u5b9f\u884c\u7d50\u679c\u3084 PR \u306e\u60c5\u5831\u306a\u3069\u3092\u4f7f\u3063\u3066\u30d3\u30eb\u30c9\u306e\u6319\u52d5\u3092\u5909\u3048\u308b\u3053\u3068\u304c\u51fa\u6765\u307e\u3059\u3002"))}k.isMDXComponent=!0}}]);