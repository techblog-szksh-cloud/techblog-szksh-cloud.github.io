"use strict";(self.webpackChunktechblog_szksh_cloud_github_io=self.webpackChunktechblog_szksh_cloud_github_io||[]).push([[2710],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>h});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},c="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=u(n),s=a,h=c["".concat(p,".").concat(s)]||c[s]||f[s]||o;return n?r.createElement(h,i(i({ref:t},m),{},{components:n})):r.createElement(h,i({ref:t},m))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=s;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[c]="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},7553:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>f,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var r=n(7462),a=(n(7294),n(3905));const o={title:"tfnotify \u306e parse error \u3092\u901a\u77e5\u3059\u308b",date:new Date("2020-09-11T23:05:59.000Z"),tags:["terraform","tfnotify","github-comment"],authors:["suzuki-shunsuke"]},i=void 0,l={permalink:"/post-tfnotify-parse-error",source:"@site/blog/post-tfnotify-parse-error.md",title:"tfnotify \u306e parse error \u3092\u901a\u77e5\u3059\u308b",description:"tfnotify \u304c terraform \u306e\u6a19\u6e96\u51fa\u529b\u306e\u30d1\u30fc\u30b9\u306b\u5931\u6557\u3057\u3066\u30b3\u30e1\u30f3\u30c8\u3092\u6295\u7a3f\u3067\u304d\u306a\u3044\u3053\u3068\u304c\u3042\u308a\u307e\u3059\u3002",date:"2020-09-11T23:05:59.000Z",formattedDate:"September 11, 2020",tags:[{label:"terraform",permalink:"/tags/terraform"},{label:"tfnotify",permalink:"/tags/tfnotify"},{label:"github-comment",permalink:"/tags/github-comment"}],readingTime:1.785,truncated:!1,authors:[{name:"Shunsuke Suzuki",title:"Platform Engineer / OSS Developer / Go / Terraform",url:"https://github.com/suzuki-shunsuke",imageURL:"https://github.com/suzuki-shunsuke.png",key:"suzuki-shunsuke"}],frontMatter:{title:"tfnotify \u306e parse error \u3092\u901a\u77e5\u3059\u308b",date:"2020-09-11T23:05:59.000Z",tags:["terraform","tfnotify","github-comment"],authors:["suzuki-shunsuke"]},prevItem:{title:"buildflow \u3068\u3044\u3046\u30ef\u30fc\u30af\u30d5\u30ed\u30fc\u30a8\u30f3\u30b8\u30f3\u306e\u3088\u3046\u306a\u30bf\u30b9\u30af\u30e9\u30f3\u30ca\u30fc\u306e\u3088\u3046\u306a\u30c4\u30fc\u30eb\u3092\u4f5c\u3063\u3066\u3044\u308b",permalink:"/buildflow-1"},nextItem:{title:"AWS CodeBuild \u826f\u3055\u305d\u3046",permalink:"/codebuild-1"}},p={authorsImageUrls:[void 0]},u=[{value:"tfnotify \u306e\u30b3\u30fc\u30c9\u3092\u78ba\u8a8d",id:"tfnotify-\u306e\u30b3\u30fc\u30c9\u3092\u78ba\u8a8d",level:2}],m={toc:u},c="wrapper";function f(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/mercari/tfnotify"},"tfnotify")," \u304c terraform \u306e\u6a19\u6e96\u51fa\u529b\u306e\u30d1\u30fc\u30b9\u306b\u5931\u6557\u3057\u3066\u30b3\u30e1\u30f3\u30c8\u3092\u6295\u7a3f\u3067\u304d\u306a\u3044\u3053\u3068\u304c\u3042\u308a\u307e\u3059\u3002"),(0,a.kt)("p",null,"\u30b3\u30e1\u30f3\u30c8\u3092\u6295\u7a3f\u3067\u304d\u306a\u304f\u3066\u3082\u30d3\u30eb\u30c9\u306e\u30ed\u30b0\u306b\u306f\u6b8b\u308b\u306e\u3067\u3059\u304c\u3001\u3084\u306f\u308a\u30b3\u30e1\u30f3\u30c8\u3092\u6295\u7a3f\u3067\u304d\u308b\u3068\u4fbf\u5229\u306a\u306e\u3067\u3001tfnotify \u304c\u30d1\u30fc\u30b9\u30a8\u30e9\u30fc\u3067\u30b3\u30e1\u30f3\u30c8\u306e\u6295\u7a3f\u306b\u5931\u6557\u3057\u305f\u3089\u3001 ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/suzuki-shunsuke/github-comment"},"github-comment")," \u3067\u30b3\u30e1\u30f3\u30c8\u3092\u6295\u7a3f\u3059\u308b\u3088\u3046\u306b\u3057\u307e\u3057\u305f\u3002"),(0,a.kt)("p",null,"\u306a\u304a\u3001\u3053\u306e\u8a18\u4e8b\u3092\u66f8\u3044\u3066\u3044\u308b\u6642\u70b9\u306e\u30d0\u30fc\u30b8\u30e7\u30f3\u306f tfnotify v0.7.0, github-comment v1.9.0 \u3067\u3059\u3002"),(0,a.kt)("p",null,"\u4f8b\u3048\u3070 ",(0,a.kt)("inlineCode",{parentName:"p"},"tfnotify plan")," \u304c\u30d1\u30fc\u30b9\u30a8\u30e9\u30fc\u306b\u306a\u3063\u305f\u5834\u5408\u3001 ",(0,a.kt)("inlineCode",{parentName:"p"},"cannot parse plan result")," \u3068\u3044\u3046\u30e1\u30c3\u30bb\u30fc\u30b8\u304c\u6a19\u6e96\u30a8\u30e9\u30fc\u51fa\u529b\u3055\u308c\u307e\u3059\u3002\n\u305d\u3053\u3067\u6a19\u6e96\u30a8\u30e9\u30fc\u51fa\u529b\u306b ",(0,a.kt)("inlineCode",{parentName:"p"},"cannot parse plan result")," \u304c\u542b\u307e\u308c\u3066\u3044\u305f\u3089 github-comment \u3067\u30b3\u30e1\u30f3\u30c8\u3059\u308b\u3088\u3046\u306b\u3057\u307e\u3059\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"terraform plan | github-comment exec -k plan -- tfnotify plan\n")),(0,a.kt)("p",null,".github-comment.yml"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'# \u7d30\u304b\u304f template \u3092\u5206\u3051\u3066\u3044\u308b\u304c\u3001\u5225\u306b\u5206\u3051\u306a\u304f\u3066\u3082\u3088\u3044\ntemplates:\n  # header \u306f CodeBuild \u306e\u5834\u5408\n  header: \'{{Env "TARGET"}} [Build link]({{Env "CODEBUILD_BUILD_URL"}})\'\n  exit_code: \':{{if eq .ExitCode 0}}white_check_mark{{else}}x{{end}}: Exit Code {{.ExitCode}}\'\n  join_command: |\n    ```\n    $ {{.JoinCommand}}\n    ```\n  hidden_combined_output: |\n    <details>\n\n    <pre><code>{{.CombinedOutput}}</code></pre>\n\n    </details>\n  exec_default: |\n    {{template "header" .}}\n\n    {{template "exit_code" .}}\n\n    {{template "join_command" .}}\n\n    {{template "hidden_combined_output" .}}\nexec:\n  plan:\n  - when: |\n      Stderr contains "cannot parse plan result"\n    template: |\n      {{template "exec_default" .}}\n')),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"tfnotify apply")," \u306e\u5834\u5408\u306f ",(0,a.kt)("inlineCode",{parentName:"p"},"cannot parse apply result")," \u3068\u3044\u3046\u30e1\u30c3\u30bb\u30fc\u30b8\u3092\u51fa\u529b\u3059\u308b\u306e\u3067\n\u6b21\u306e\u3088\u3046\u306b\u306a\u308a\u307e\u3059\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"terraform apply -auto-approve | github-comment exec -k apply -- tfnotify apply\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'exec:\n  apply:\n  - when: |\n      Stderr contains "cannot parse apply result"\n    template: |\n      {{template "exec_default" .}}\n')),(0,a.kt)("h2",{id:"tfnotify-\u306e\u30b3\u30fc\u30c9\u3092\u78ba\u8a8d"},"tfnotify \u306e\u30b3\u30fc\u30c9\u3092\u78ba\u8a8d"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/mercari/tfnotify/blob/v0.7.0/terraform/parser.go#L158"},"https://github.com/mercari/tfnotify/blob/v0.7.0/terraform/parser.go#L158")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/mercari/tfnotify/blob/v0.7.0/terraform/parser.go#L111"},"https://github.com/mercari/tfnotify/blob/v0.7.0/terraform/parser.go#L111")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/mercari/tfnotify/blob/v0.7.0/notifier/github/notify.go#L20-L21"},"https://github.com/mercari/tfnotify/blob/v0.7.0/notifier/github/notify.go#L20-L21")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/mercari/tfnotify/blob/v0.7.0/main.go#L193"},"https://github.com/mercari/tfnotify/blob/v0.7.0/main.go#L193"))))}f.isMDXComponent=!0}}]);