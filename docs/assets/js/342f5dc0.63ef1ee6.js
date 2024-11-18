"use strict";(self.webpackChunktechblog_szksh_cloud_github_io=self.webpackChunktechblog_szksh_cloud_github_io||[]).push([[2768],{5680:(e,a,t)=>{t.d(a,{xA:()=>p,yg:()=>c});var r=t(6540);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var o=r.createContext({}),u=function(e){var a=r.useContext(o),t=a;return e&&(t="function"==typeof e?e(a):l(l({},a),e)),t},p=function(e){var a=u(e.components);return r.createElement(o.Provider,{value:a},e.children)},g="mdxType",m={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},y=r.forwardRef((function(e,a){var t=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),g=u(t),y=n,c=g["".concat(o,".").concat(y)]||g[y]||m[y]||i;return t?r.createElement(c,l(l({ref:a},p),{},{components:t})):r.createElement(c,l({ref:a},p))}));function c(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var i=t.length,l=new Array(i);l[0]=y;var s={};for(var o in a)hasOwnProperty.call(a,o)&&(s[o]=a[o]);s.originalType=e,s[g]="string"==typeof e?e:n,l[1]=s;for(var u=2;u<i;u++)l[u]=t[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}y.displayName="MDXCreateElement"},1108:(e,a,t)=>{t.d(a,{A:()=>n});var r=t(6540);function n(e){let{url:a}=e;return r.createElement("iframe",{class:"hatenablogcard",style:{width:"100%",height:"155px",maxWidth:"680px"},src:`https://hatenablog-parts.com/embed?url=${a}`,width:"300",height:"150",frameborder:"0",scrolling:"no"})}},6692:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>o,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var r=t(8168),n=(t(6540),t(5680));t(1108);const i={title:"My Activity in 2022-11",date:new Date("2022-12-01T13:13:55.000Z"),authors:["suzuki-shunsuke"],tags:["oss"]},l=void 0,s={permalink:"/what-i-did-2022-11",source:"@site/blog/what-i-did-2022-11.mdx",title:"My Activity in 2022-11",description:"Blog posts",date:"2022-12-01T13:13:55.000Z",formattedDate:"December 1, 2022",tags:[{label:"oss",permalink:"/tags/oss"}],readingTime:2.16,hasTruncateMarker:!1,authors:[{name:"Shunsuke Suzuki",title:"Platform Engineer / OSS Developer / Go / Terraform",url:"https://github.com/suzuki-shunsuke",imageURL:"https://github.com/suzuki-shunsuke.png",key:"suzuki-shunsuke"}],frontMatter:{title:"My Activity in 2022-11",date:"2022-12-01T13:13:55.000Z",authors:["suzuki-shunsuke"],tags:["oss"]},prevItem:{title:"Looking back at Dec 2022",permalink:"/what-i-did-2022-12"},nextItem:{title:"My Activity in 2022-10",permalink:"/what-i-did-2022-10"}},o={authorsImageUrls:[void 0]},u=[{value:"Blog posts",id:"blog-posts",level:2},{value:"OSS Contribution",id:"oss-contribution",level:2},{value:"OSS Development",id:"oss-development",level:2},{value:"aqua",id:"aqua",level:3},{value:"aqua-registry",id:"aqua-registry",level:3},{value:"What I learned",id:"what-i-learned",level:2},{value:"News",id:"news",level:2}],p={toc:u},g="wrapper";function m(e){let{components:a,...t}=e;return(0,n.yg)(g,(0,r.A)({},p,t,{components:a,mdxType:"MDXLayout"}),(0,n.yg)("h2",{id:"blog-posts"},"Blog posts"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"2022-11-15: ",(0,n.yg)("a",{parentName:"li",href:"https://zenn.dev/shunsuke_suzuki/articles/aqua-policy-as-code"},"aqua \u306e Policy as Code")),(0,n.yg)("li",{parentName:"ul"},"2022-11-08: ",(0,n.yg)("a",{parentName:"li",href:"https://dev.to/suzukishunsuke/checksum-verification-by-aqua-5038"},"Checksum Verification by aqua")),(0,n.yg)("li",{parentName:"ul"},"2022-11-07: ",(0,n.yg)("a",{parentName:"li",href:"https://zenn.dev/shunsuke_suzuki/articles/aqua-release-notes-v1200-v1220"},"aqua Release Notes (v1.20.0 ~ v1.22.0)"))),(0,n.yg)("h2",{id:"oss-contribution"},"OSS Contribution"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:null},"merged date"),(0,n.yg)("th",{parentName:"tr",align:null},"repository"),(0,n.yg)("th",{parentName:"tr",align:null},"lang"),(0,n.yg)("th",{parentName:"tr",align:null},"PR's short description"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"2022-11-12"),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"https://github.com/slsa-framework/slsa-verifier"},"slsa-framework/slsa-verifier")),(0,n.yg)("td",{parentName:"tr",align:null},"go"),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"https://github.com/slsa-framework/slsa-verifier/pull/356"},"fix: fix error logs"))))),(0,n.yg)("h2",{id:"oss-development"},"OSS Development"),(0,n.yg)("h3",{id:"aqua"},"aqua"),(0,n.yg)("p",null,"The notable change is ",(0,n.yg)("a",{parentName:"p",href:"https://aquaproj.github.io/docs/tutorial-extras/policy-as-code/"},"the support of Policy as Code"),".\nI'm working on ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/aquaproj/aqua/pull/1413"},"the release of aqua v2")," and ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/aquaproj/aqua/issues/1391"},"signing of aqua and aqua-installer"),"."),(0,n.yg)("p",null,"Please see Release Notes for the detail."),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"WIP",(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://github.com/aquaproj/aqua/releases/tag/v2.0.0-0"},"v2.0.0-0"),(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},"Only standard registry is allowed by default"),(0,n.yg)("li",{parentName:"ul"},"etc"))))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://github.com/aquaproj/aqua/releases/tag/v1.25.0"},"v1.25.0"),(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},"Replace ",(0,n.yg)("inlineCode",{parentName:"li"},"$HOME")," to the home directory in local registry path"))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://github.com/aquaproj/aqua/releases/tag/v1.24.0"},"v1.24.0"),(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},"Support defining the policy of package installation and execution for security"))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://github.com/aquaproj/aqua/releases/tag/v1.23.1"},"v1.23.1"),(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},"generate: Fix a panic when unknown packages are specified"))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://github.com/aquaproj/aqua/releases/tag/v1.23.0"},"v1.23.0"),(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},"Support filtering packages with tags"))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://github.com/aquaproj/aqua/releases/tag/v1.22.0"},"v1.22.0"),(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},"Add ",(0,n.yg)("inlineCode",{parentName:"li"},"update-aqua")," command"),(0,n.yg)("li",{parentName:"ul"},"generate: Support specifying version")))),(0,n.yg)("h3",{id:"aqua-registry"},"aqua-registry"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"version: v3.85.0 => ",(0,n.yg)("a",{parentName:"li",href:"https://github.com/aquaproj/aqua-registry/releases/tag/v3.100.0"},"v3.100.0")),(0,n.yg)("li",{parentName:"ul"},"the number of packages: 923 => 961 (+38)")),(0,n.yg)("p",null,"Thank you, all contributors!"),(0,n.yg)("h2",{id:"what-i-learned"},"What I learned"),(0,n.yg)("p",null,"I'm investigating the signing of aqua and aqua-installer."),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://www.sigstore.dev/"},"Sigstore"))),(0,n.yg)("h2",{id:"news"},"News"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"AWS",(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://www.publickey1.jp/blog/22/aws_lambdaaws_lambda_snapstartaws_reinvent_2022.html"},"\uff3b\u901f\u5831\uff3dAWS Lambda\u306e\u30b3\u30fc\u30eb\u30c9\u30b9\u30bf\u30fc\u30c8\u3092\u5287\u7684\u306b\u901f\u304f\u3059\u308b\u300cAWS Lambda SnapStart\u300d\u767a\u8868\u3002AWS re:Invent 2022")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://aws.amazon.com/about-aws/whats-new/2022/10/amazon-virtual-private-cloud-vpc-transfer-elastic-ip-addresses-between-aws-accounts/"},"Amazon Virtual Private Cloud (VPC) now supports the transfer of Elastic IP addresses between AWS accounts")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://aws.amazon.com/about-aws/whats-new/2022/11/aws-app-runner-supports-privately-accessible-services-amazon-vpc/"},"AWS App Runner now supports privately accessible services within Amazon VPC")))),(0,n.yg)("li",{parentName:"ul"},"GitHub",(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://github.blog/changelog/2022-11-23-repository-archive-date-now-shown-in-ui/"},"Repository archive date now shown in UI")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://docs.github.com/en/issues/tracking-your-work-with-issues/about-tasklists"},"About Tasklists - You can use Tasklists to divide your issues into smaller subtasks")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://github.blog/changelog/2022-10-31-dependabot-now-updates-comments-in-github-actions-workflows-referencing-action-versions/"},"Dependabot now updates comments in GitHub Actions workflows referencing action versions")))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://www.publickey1.jp/blog/22/awsdocker_desktopfinch.html"},"AWS\u3001Docker Desktop\u4ee3\u66ff\u3068\u306a\u308a\u5f97\u308b\u300cFinch\u300d\u3092\u30aa\u30fc\u30d7\u30f3\u30bd\u30fc\u30b9\u3067\u516c\u958b\u3002\u30ed\u30fc\u30ab\u30eb\u30de\u30b7\u30f3\u306b\u4eee\u60f3\u74b0\u5883\u3068\u30b3\u30f3\u30c6\u30ca\u30e9\u30f3\u30bf\u30a4\u30e0\u3001\u30d3\u30eb\u30c9\u30c4\u30fc\u30eb\u306a\u3069\u4e00\u5f0f\u3092\u5c0e\u5165")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://google.github.io/styleguide/go/"},"Go Style Guide from Google")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://engineer.retty.me/entry/2022/11/18/130000"},"Retty \u306e Terraform CI/CD \u89e3\u4f53\u65b0\u66f8"),(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},"In this blog, many my OSS and blog posts are referred"))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://www.docker.com/blog/announcing-docker-hub-oci-artifacts-support/"},"Announcing Docker Hub OCI Artifacts Support")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://gigazine.net/news/20221104-github-copilot-lawsuit/"},"\u3064\u3044\u306bGitHub\u306e\u30b3\u30fc\u30c9\u3067\u5b66\u7fd2\u3057\u305fAI\u300cGitHub Copilot\u300d\u304c\u96c6\u56e3\u8a34\u8a1f\u306b\u76f4\u9762")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://gigazine.net/news/20221101-openssl-critical-vulnerability-fix/"},"OpenSSL\u3067\u53f2\u4e0a2\u5ea6\u76ee\u306e\u300c\u81f4\u547d\u7684\u300d\u30ec\u30d9\u30eb\u306e\u8106\u5f31\u6027\u304c\u767a\u898b\u3055\u308c\u308b\u30012022\u5e7411\u67081\u65e5\u591c\u9593\u306b\u4fee\u6b63\u7248\u304c\u30ea\u30ea\u30fc\u30b9\u3055\u308c\u308b\u305f\u3081\u5373\u66f4\u65b0\u3092"))))}m.isMDXComponent=!0}}]);