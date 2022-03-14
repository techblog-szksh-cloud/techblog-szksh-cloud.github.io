"use strict";(self.webpackChunktechblog_szksh_cloud_github_io=self.webpackChunktechblog_szksh_cloud_github_io||[]).push([[7617],{3905:function(e,r,t){t.d(r,{Zo:function(){return u},kt:function(){return g}});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var m=n.createContext({}),i=function(e){var r=n.useContext(m),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},u=function(e){var r=i(e.components);return n.createElement(m.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},c=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,m=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=i(t),g=a,f=c["".concat(m,".").concat(g)]||c[g]||p[g]||o;return t?n.createElement(f,l(l({ref:r},u),{},{components:t})):n.createElement(f,l({ref:r},u))}));function g(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=c;var s={};for(var m in r)hasOwnProperty.call(r,m)&&(s[m]=r[m]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var i=2;i<o;i++)l[i]=t[i];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}c.displayName="MDXCreateElement"},6439:function(e,r,t){t.r(r),t.d(r,{assets:function(){return u},contentTitle:function(){return m},default:function(){return g},frontMatter:function(){return s},metadata:function(){return i},toc:function(){return p}});var n=t(7462),a=t(3366),o=(t(7294),t(3905)),l=["components"],s={title:"Graylog \u306e Terraform \u3092 CI/CD\u3067\u5b9f\u884c\u3059\u308b",date:new Date("2018-12-06T23:22:49.000Z"),tags:["graylog","terraform","ci"],authors:["suzuki-shunsuke"]},m=void 0,i={permalink:"/graylog-terraform-ci",source:"@site/blog/graylog-terraform-ci.md",title:"Graylog \u306e Terraform \u3092 CI/CD\u3067\u5b9f\u884c\u3059\u308b",description:"\u4ee5\u524d Graylog \u3092 Terraform \u3067\u7ba1\u7406\u3059\u308b\u8a18\u4e8b\u3092\u66f8\u304d\u307e\u3057\u305f\u3002",date:"2018-12-06T23:22:49.000Z",formattedDate:"December 6, 2018",tags:[{label:"graylog",permalink:"/tags/graylog"},{label:"terraform",permalink:"/tags/terraform"},{label:"ci",permalink:"/tags/ci"}],readingTime:5.98,truncated:!1,authors:[{name:"Shunsuke Suzuki",title:"SRE / OSS Contributor / Tool Maker / Go / Terraform",url:"https://github.com/suzuki-shunsuke",imageURL:"https://github.com/suzuki-shunsuke.png",key:"suzuki-shunsuke"}],frontMatter:{title:"Graylog \u306e Terraform \u3092 CI/CD\u3067\u5b9f\u884c\u3059\u308b",date:"2018-12-06T23:22:49.000Z",tags:["graylog","terraform","ci"],authors:["suzuki-shunsuke"]},prevItem:{title:"Graylog\u306eAlert\u306e\u8ab2\u984c",permalink:"/graylog-alert-issue"},nextItem:{title:"molecule \u3067ansible \u306e role \u3068 playbook \u3092\u30c6\u30b9\u30c8\u3059\u308b",permalink:"/ansible-molecule"}},u={authorsImageUrls:[void 0]},p=[{value:"\u30bd\u30fc\u30b9\u30b3\u30fc\u30c9",id:"\u30bd\u30fc\u30b9\u30b3\u30fc\u30c9",level:2},{value:"CI/CD\u7528\u306e user, role \u3092\u4f5c\u6210\u3059\u308b",id:"cicd\u7528\u306e-user-role-\u3092\u4f5c\u6210\u3059\u308b",level:2}],c={toc:p};function g(e){var r=e.components,t=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,n.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u4ee5\u524d Graylog \u3092 Terraform \u3067\u7ba1\u7406\u3059\u308b\u8a18\u4e8b\u3092\u66f8\u304d\u307e\u3057\u305f\u3002"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://suzuki-shunsuke.github.io/graylog-terraform/"},"https://suzuki-shunsuke.github.io/graylog-terraform/")),(0,o.kt)("p",null,"\u4eca\u56de\u306f\u305d\u308c\u3092 CI/CD \u3067\u5b9f\u884c\u3067\u304d\u308b\u3088\u3046\u306b\u3057\u305f\u8a71\u3067\u3059\u3002"),(0,o.kt)("p",null,"\u305f\u3060\u3057\u3001\u4eca\u56de\u306e\u5185\u5bb9\u306f Graylog \u306b\u9650\u3089\u305a Terraform \u3092 CI/CD \u3067\u5b9f\u884c\u3059\u308b\u65b9\u6cd5\u3068\u3057\u3066\u4f7f\u3048\u308b\u3068\u601d\u3044\u307e\u3059\u3002"),(0,o.kt)("p",null,"\u4eca\u56de\u5b9f\u73fe\u3057\u305f\u306e\u306f\u4ee5\u4e0b\u306e\u3053\u3068\u3067\u3059\u3002"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"PR\u6642\u306b\u30c6\u30b9\u30c8\u3092\u3059\u308b"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"plan/*")," tag \u3092 push \u3059\u308b\u3068 ",(0,o.kt)("inlineCode",{parentName:"li"},"terraform plan")," \u304c\u5b9f\u884c\u3055\u308c\u308b"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"apply/*")," tag \u3092 push \u3059\u308b\u3068 ",(0,o.kt)("inlineCode",{parentName:"li"},"terraform apply")," \u304c\u5b9f\u884c\u3055\u308c\u3001tfstate \u304c\u30b3\u30df\u30c3\u30c8\u3001\u30d7\u30c3\u30b7\u30e5\u3055\u308c\u308b")),(0,o.kt)("h2",{id:"\u30bd\u30fc\u30b9\u30b3\u30fc\u30c9"},"\u30bd\u30fc\u30b9\u30b3\u30fc\u30c9"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/suzuki-shunsuke/example/tree/master/graylog-terraform"},"https://github.com/suzuki-shunsuke/example/tree/master/graylog-terraform")," \u306b\u7f6e\u3044\u3066\u304a\u304d\u307e\u3057\u305f\u3002"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/suzuki-shunsuke/example/blob/master/graylog-terraform/role.tf#L13-L25"},"https://github.com/suzuki-shunsuke/example/blob/master/graylog-terraform/role.tf#L13-L25")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/suzuki-shunsuke/example/blob/master/graylog-terraform/user.tf#L12-L21"},"https://github.com/suzuki-shunsuke/example/blob/master/graylog-terraform/user.tf#L12-L21")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/suzuki-shunsuke/example/blob/master/graylog-terraform/.drone.yml"},"https://github.com/suzuki-shunsuke/example/blob/master/graylog-terraform/.drone.yml")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/suzuki-shunsuke/example/blob/master/graylog-terraform/terraform.tfvars.tpl"},"https://github.com/suzuki-shunsuke/example/blob/master/graylog-terraform/terraform.tfvars.tpl")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/suzuki-shunsuke/example/blob/master/graylog-terraform/drone_pipeline_commands/git.sh"},"https://github.com/suzuki-shunsuke/example/blob/master/graylog-terraform/drone_pipeline_commands/git.sh"))),(0,o.kt)("h2",{id:"cicd\u7528\u306e-user-role-\u3092\u4f5c\u6210\u3059\u308b"},"CI/CD\u7528\u306e user, role \u3092\u4f5c\u6210\u3059\u308b"),(0,o.kt)("p",null,"\u307e\u305a\u306f role \u3092\u4f5c\u6210\u3057\u307e\u3059\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'resource "graylog_role" "terraform" {\n  name        = "terraform"\n  description = "terraform"\n\n  permissions = [\n    "dashboards:*",\n    "indexsets:*",\n    "inputs:*",\n    "roles:*",\n    "streams:*",\n    "users:*",\n  ]\n}\n')),(0,o.kt)("p",null,"permission \u306f terraform \u3067\u7ba1\u7406\u3059\u308b\u30ea\u30bd\u30fc\u30b9\u306e\u307f\u4ed8\u4e0e\u3057\u307e\u3059\u304c\u3001\n\u305d\u308c\u3067\u3082\u7d50\u69cb\u5f37\u3044\u6a29\u9650\u3092\u4ed8\u4e0e\u3059\u308b\u306e\u3067\u53d6\u6271\u306b\u6ce8\u610f\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,o.kt)("p",null,"\u3088\u308a\u3061\u3083\u3093\u3068\u6a29\u9650\u7ba1\u7406\u3059\u308b\u306e\u3067\u3042\u308c\u3070 project \u3054\u3068\u306b role, user \u3092\u5206\u3051\u308b\u3068\u3044\u3046\u624b\u3082\u3042\u308a\u305d\u3046\u3067\u3059\u304c\u3001\u305d\u3046\u3059\u308b\u3068\u7ba1\u7406\u3082\u5927\u5909\u305d\u3046\u3067\u3059\u3002"),(0,o.kt)("p",null,"\u6b21\u306b user \u3092\u4f5c\u6210\u3057\u307e\u3059\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'resource "graylog_user" "terraform" {\n  username  = "terraform"\n  email     = "terraform@example.com"\n  full_name = "terraform"\n\n  roles = [\n    "terraform",\n    "Reader",\n  ]\n}\n')),(0,o.kt)("p",null,"Reader \u304b Admin \u306f\u5fc5\u9808\u3089\u3057\u3044\u306e\u3067Reader\u3092\u4ed8\u4e0e\u3057\u3066\u3044\u307e\u3059\u3002"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"http://docs.graylog.org/en/2.5/pages/users_and_roles/permission_system.html"},"http://docs.graylog.org/en/2.5/pages/users_and_roles/permission_system.html")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Every user needs to at least have the standard \u201cReader\u201d permissions\nbut those do not provide any access to data or maintenance functionalities.")),(0,o.kt)("p",null,"\u6b21\u306b\u3053\u306e\u30e6\u30fc\u30b6\u30fc\u306e token \u3092\u767a\u884c\u3057\u307e\u3059\u3002"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"http://docs.graylog.org/en/2.5/pages/configuration/rest_api.html#creating-and-using-access-token"},"http://docs.graylog.org/en/2.5/pages/configuration/rest_api.html#creating-and-using-access-token")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ curl -u <username>:<password> -H 'Accept: application/json' -X POST 'https://graylog.example.com/api/users/<username>/tokens/<tokenname>?pretty=true'\n")),(0,o.kt)("p",null,"\u767a\u884c\u3057\u305f\u30c8\u30fc\u30af\u30f3\u3092 CI/CD \u306b\u30af\u30ec\u30c7\u30f3\u30b7\u30e3\u30eb\u3068\u3057\u3066\u30bb\u30c3\u30c8\u3057\u307e\u3059\u3002\n\u3084\u308a\u65b9\u306f\u5229\u7528\u3059\u308bCI/CD\u306b\u3088\u3063\u3066\u5909\u308f\u308a\u307e\u3059\u3002"),(0,o.kt)("p",null,"\u4ee5\u964d\u306f ",(0,o.kt)("a",{parentName:"p",href:"https://drone.io/"},"drone ci")," \u3068\u3044\u3046 CI/CD \u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0\u3092\u524d\u63d0\u306b\u66f8\u304d\u307e\u3059\u304c\u3001\ntravis ci \u3084 circle ci, jenkins \u306a\u3069\u4ed6\u306eCI/CD\u3067\u3082\u8003\u3048\u65b9\u306f\u4e00\u7dd2\u3060\u3068\u601d\u3044\u307e\u3059\u3002"),(0,o.kt)("p",null,".drone.yml \u306f \u4ee5\u4e0b\u306e\u3088\u3046\u306b\u306a\u308a\u307e\u3059\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'---\npipeline:\n  envsubst:\n    image: suzukishunsuke/alpine-envsubst:0.1.0\n    commands:\n    - envsubst < terraform.tfvars.tpl > terraform.tfvars\n    secrets:\n    - source: terraform_token_prod\n      target: graylog_auth_name\n    when:\n      event: tag\n  plan:\n    image: &terraform_image "suzukishunsuke/terraform-graylog:0.1.2"\n    commands:\n    - terraform init\n    - terraform validate\n    - terraform fmt -check\n    - terraform plan\n    when:\n      event: tag\n      ref: refs/tags/plan/*\n  apply:\n    image: *terraform_image\n    commands:\n    - terraform init\n    - terraform validate\n    - terraform plan\n    - terraform fmt -check\n    - terraform apply -auto-approve\n    when:\n      event: tag\n      ref: refs/tags/apply/*\n  git:\n    image: plugins/git\n    commands:\n    - sh drone_pipeline_commands/git.sh\n    when:\n      event: tag\n      ref: refs/tags/apply/*\n  validate:\n    image: *terraform_image\n    environment:\n    - "TF_VAR_auth_name=dummy"\n    - "TF_VAR_auth_password=token"\n    - "TF_VAR_web_endpoint_uri=https://graylog.example.com/api"\n    commands:\n    - terraform init\n    - terraform validate\n    - terraform fmt -check\n    when:\n      event: pull_request\n')),(0,o.kt)("p",null,"\u307e\u305a\u306f terraform \u3092\u5b9f\u884c\u3059\u308b\u305f\u3081\u306e Docker Image \u3092\u7528\u610f\u3057\u307e\u3057\u305f\u3002"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://hub.docker.com/r/suzukishunsuke/terraform-graylog/"},"https://hub.docker.com/r/suzukishunsuke/terraform-graylog/")),(0,o.kt)("p",null,"PR\u6642\u306e\u30c6\u30b9\u30c8\u3067\u306f terraform validate \u3068 terraform fmt \u3092\u5b9f\u884c\u3057\u307e\u3059\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'  validate:\n    image: *terraform_image\n    environment:\n    - "TF_VAR_auth_name=dummy"\n    - "TF_VAR_auth_password=token"\n    - "TF_VAR_web_endpoint_uri=https://graylog.example.com/api"\n    commands:\n    - terraform init\n    - terraform validate\n    - terraform fmt -check\n    when:\n      event: pull_request\n')),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"TF_VAR_")," \u3067\u59cb\u307e\u308b\u306e\u304c terraform \u306e\u5909\u6570\u3067\u3059\u3002"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.terraform.io/docs/configuration/variables.html#environment-variables"},"https://www.terraform.io/docs/configuration/variables.html#environment-variables")),(0,o.kt)("p",null,"token \u306f\u9069\u5f53\u306a\u6587\u5b57\u5217\u3092\u30bb\u30c3\u30c8\u3057\u3066\u304f\u3060\u3055\u3044\u3002PR\u6642\u306b\u306f\u5b9f\u969b\u306bgraylog \u306e API \u3092\u547c\u3070\u306a\u3044\u306e\u3067\u9069\u5f53\u306a\u306e\u3067\u554f\u984c\u3042\u308a\u307e\u305b\u3093\u3002"),(0,o.kt)("p",null,"\u6b21\u306b ",(0,o.kt)("inlineCode",{parentName:"p"},"plan/*")," \u3068 tag \u3092 push \u3059\u308b\u3068 ",(0,o.kt)("inlineCode",{parentName:"p"},"terraform plan")," \u304c\u5b9f\u884c\u3055\u308c\u307e\u3059\u3002\n\u3053\u306e\u7d50\u679c\u3092\u898b\u3066 ",(0,o.kt)("inlineCode",{parentName:"p"},"terraform apply")," \u3092\u5b9f\u884c\u3057\u307e\u3059\u3002"),(0,o.kt)("p",null,"\u3053\u308c\u306f ",(0,o.kt)("a",{parentName:"p",href:"https://0-8-0.docs.drone.io/manage-secrets/"},"drone \u306e secrets")," \u306e\u90fd\u5408\u306a\u306e\u3067\u3059\u304c\u3001secrets \u306e\u74b0\u5883\u5909\u6570\u306f\u5168\u90e8\u5927\u6587\u5b57\u306b\u306a\u3063\u3066\u3057\u307e\u3046\u305f\u3081 ",(0,o.kt)("inlineCode",{parentName:"p"},"TF_VAR_auth_name")," \u3068\u3044\u3046\u74b0\u5883\u5909\u6570\u3092\u30bb\u30c3\u30c8\u3067\u304d\u307e\u305b\u3093\u3002\u305d\u306e\u305f\u3081 ",(0,o.kt)("a",{parentName:"p",href:"https://www.gnu.org/software/gettext/manual/html_node/envsubst-Invocation.html"},"envsubst")," \u3092\u4f7f\u3063\u3066 terraform.tfvars \u306b token \u3092\u66f8\u304d\u8fbc\u3093\u3067\u3044\u307e\u3059\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"  envsubst:\n    image: suzukishunsuke/alpine-envsubst:0.1.0\n    commands:\n    - envsubst < terraform.tfvars.tpl > terraform.tfvars\n    secrets:\n    - source: terraform_token_prod\n      target: graylog_auth_name\n    when:\n      event: tag\n")),(0,o.kt)("p",null,"terraform.tfvars.tpl \u306f\u3053\u3093\u306a\u611f\u3058\u3067\u3059\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'web_endpoint_uri = "https://graylog.example.com/api"\nauth_name = "$GRAYLOG_AUTH_NAME"\nauth_password = "token"\n')),(0,o.kt)("p",null,"plan \u3092\u5b9f\u884c\u3059\u308b step \u3067\u3059\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'  plan:\n    image: &terraform_image "suzukishunsuke/terraform-graylog:0.1.2"\n    commands:\n    - terraform init\n    - terraform validate\n    - terraform fmt -check\n    - terraform plan\n    when:\n      event: tag\n      ref: refs/tags/plan/*\n')),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"apply/*")," \u3068 tag \u3092 push \u3059\u308b\u3068 ",(0,o.kt)("inlineCode",{parentName:"p"},"terraform apply")," \u304c\u5b9f\u884c\u3055\u308c\u307e\u3059\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"  apply:\n    image: *terraform_image\n    commands:\n    - terraform init\n    - terraform validate\n    - terraform plan\n    - terraform fmt -check\n    - terraform apply -auto-approve\n    when:\n      event: tag\n      ref: refs/tags/apply/*\n")),(0,o.kt)("p",null,"terraform.tfstate \u3092\u30b3\u30df\u30c3\u30c8, \u30d7\u30c3\u30b7\u30e5\u3057\u307e\u3059\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"  git:\n    image: plugins/git\n    commands:\n    - sh drone_pipeline_commands/git.sh\n    when:\n      event: tag\n      ref: refs/tags/apply/*\n")),(0,o.kt)("p",null,"drone_pipeline_commands/git.sh \u306f\u3053\u3093\u306a\u611f\u3058\u3067\u3059\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'git status --porcelain || exit 1\nif `git diff --exit-code --quiet terraform.tfstate`; then\n  echo "terraform.tfstate isn\'t changed"\n  exit 0\nelse\n  git config user.name drone\n  git config user.email drone@example.com\n  git add . || exit 1\n  git commit -m "build: commit by drone" || exit 1\n  git push origin HEAD:master || exit 1\nfi\n')),(0,o.kt)("p",null,"terraform.tfstate \u306b\u5909\u5316\u304c\u3042\u3063\u305f\u5834\u5408\u306e\u307f \u30b3\u30df\u30c3\u30c8\u30fb\u30d7\u30c3\u30b7\u30e5\u3059\u308b\u3088\u3046\u306b\u3057\u3066\u3044\u307e\u3059\u3002\n\u3053\u306e\u8fba\u306e\u3084\u308a\u65b9\u306f\u3082\u3063\u3068\u3046\u307e\u3044\u3084\u308a\u65b9\u304c\u3042\u308b\u304b\u3082\u3057\u308c\u307e\u305b\u3093\n(\u81ea\u5206\u306e\u30b7\u30a7\u30eb\u30b9\u30af\u30ea\u30d7\u30c8\u529b\u304c\u4f4e\u3044\u305f\u3081)\u3002"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"terraform plan")," \u306e ",(0,o.kt)("inlineCode",{parentName:"p"},"-detailed-exitcode")," \u30aa\u30d7\u30b7\u30e7\u30f3\u3092\u4f7f\u3046\u306e\u304c\u826f\u3044\u6c17\u304c\u3057\u307e\u3059\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"  -detailed-exitcode  Return detailed exit codes when the command exits. This\n                      will change the meaning of exit codes to:\n                      0 - Succeeded, diff is empty (no changes)\n                      1 - Errored\n                      2 - Succeeded, there is a diff\n")),(0,o.kt)("p",null,"\u4ee5\u4e0a Graylog \u306e Terraform \u3092 CI/CD \u3067\u5b9f\u884c\u3059\u308b\u65b9\u6cd5\u3092\u7d39\u4ecb\u3057\u307e\u3057\u305f\u3002\nGraylog \u306b\u9650\u3089\u305a\u3001 Terraform \u3092 CI/CD \u3067\u5b9f\u884c\u3059\u308b\u65b9\u6cd5\u3068\u3057\u3066\u4f7f\u3048\u308b\u3068\u601d\u3046\u306e\u3067\u53c2\u8003\u306b\u306a\u308c\u3070\u5e78\u3044\u3067\u3059\u3002"))}g.isMDXComponent=!0}}]);