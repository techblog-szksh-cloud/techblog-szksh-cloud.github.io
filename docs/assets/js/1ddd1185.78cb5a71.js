"use strict";(self.webpackChunktechblog_szksh_cloud_github_io=self.webpackChunktechblog_szksh_cloud_github_io||[]).push([[607],{3905:function(e,r,t){t.d(r,{Zo:function(){return m},kt:function(){return f}});var a=t(7294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var p=a.createContext({}),u=function(e){var r=a.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},m=function(e){var r=u(e.components);return a.createElement(p.Provider,{value:r},e.children)},c={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},s=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),s=u(t),f=n,d=s["".concat(p,".").concat(f)]||s[f]||c[f]||o;return t?a.createElement(d,l(l({ref:r},m),{},{components:t})):a.createElement(d,l({ref:r},m))}));function f(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,l=new Array(o);l[0]=s;var i={};for(var p in r)hasOwnProperty.call(r,p)&&(i[p]=r[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var u=2;u<o;u++)l[u]=t[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}s.displayName="MDXCreateElement"},9888:function(e,r,t){t.r(r),t.d(r,{assets:function(){return m},contentTitle:function(){return p},default:function(){return f},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return c}});var a=t(7462),n=t(3366),o=(t(7294),t(3905)),l=["components"],i={title:"Terraform \u3067\u7a7a\u306e AWS Lambda Function \u3092\u4f5c\u308b\u65b9\u6cd5",date:new Date("2021-06-24T12:25:24.000Z"),archives:["2021/06"],tags:["terraform","lambda"]},p=void 0,u={permalink:"/create-empty-lambda-by-terraform",source:"@site/blog/create-empty-lambda-by-terraform.md",title:"Terraform \u3067\u7a7a\u306e AWS Lambda Function \u3092\u4f5c\u308b\u65b9\u6cd5",description:"Terraform \u3067\u7a7a\u306e AWS Lambda Function \u3092\u4f5c\u308d\u3046\u3068\u3057\u305f\u969b\u306b\u3061\u3087\u3063\u3068\u30cf\u30de\u3063\u305f\u306e\u3067\u3084\u308a\u65b9\u3092\u66f8\u3044\u3066\u304a\u304d\u307e\u3059\u3002",date:"2021-06-24T12:25:24.000Z",formattedDate:"June 24, 2021",tags:[{label:"terraform",permalink:"/tags/terraform"},{label:"lambda",permalink:"/tags/lambda"}],readingTime:4.88,truncated:!1,authors:[],frontMatter:{title:"Terraform \u3067\u7a7a\u306e AWS Lambda Function \u3092\u4f5c\u308b\u65b9\u6cd5",date:"2021-06-24T12:25:24.000Z",archives:["2021/06"],tags:["terraform","lambda"]},prevItem:{title:"OPA \u3067 Table Driven Tests \u3063\u307d\u3044\u3053\u3068\u3092\u3057\u3066\u307f\u308b",permalink:"/opa-table-driven-test"},nextItem:{title:"\u4ed5\u4e8b\u3067\u3084\u3063\u305f\u3053\u3068 2021-05-01 ~ 2021-05-31",permalink:"/2021/05/01/job-05-31"}},m={authorsImageUrls:[]},c=[],s={toc:c};function f(e){var r=e.components,t=(0,n.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},s,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Terraform \u3067\u7a7a\u306e AWS Lambda Function \u3092\u4f5c\u308d\u3046\u3068\u3057\u305f\u969b\u306b\u3061\u3087\u3063\u3068\u30cf\u30de\u3063\u305f\u306e\u3067\u3084\u308a\u65b9\u3092\u66f8\u3044\u3066\u304a\u304d\u307e\u3059\u3002"),(0,o.kt)("p",null,"\u300c\u7a7a\u306e Lambda Function\u300d\u3068\u3044\u3046\u8868\u73fe\u306f\u9069\u5207\u3067\u306f\u306a\u3044\u304b\u3082\u3057\u308c\u307e\u305b\u3093\u304c\u3001\nLambda \u3067\u5b9f\u884c\u3059\u308b\u30b3\u30fc\u30c9\u306e\u30c7\u30d7\u30ed\u30a4\u306f Terraform \u4ee5\u5916\u306e\u30c4\u30fc\u30eb\u3067\u3084\u308b\u3051\u3069\u3001\nLambda Function \u306e\u4f5c\u6210\u306f Terraform \u3067\u884c\u3046\u306e\u3067\u3001 dummy \u306e\u30b3\u30fc\u30c9\u3092\u6307\u5b9a\u3057\u3066 Terraform \u3067 Lambda \u3092\u4f5c\u308b\u3068\u3044\u3046\u8a71\u3067\u3059\u3002"),(0,o.kt)("p",null,"\u81ea\u5206\u306f\u4eca\u306f ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/fujiwara/lambroll"},"lambroll")," \u3068\u3044\u3046\u30c4\u30fc\u30eb\u3067 Lambda \u3092\u30c7\u30d7\u30ed\u30a4\u3057\u3066\u3044\u307e\u3059\u3002\nlambroll \u306f Lambda Function \u3082\u4f5c\u3063\u3066\u304f\u308c\u308b\u306e\u3067 Terraform \u3067\u4f5c\u308b\u5fc5\u8981\u306f\u5fc5\u305a\u3057\u3082\u3042\u308a\u307e\u305b\u3093\u3002"),(0,o.kt)("p",null,"\u3057\u304b\u3057 Lambda Function \u306b\u95a2\u9023\u3059\u308b\u30ea\u30bd\u30fc\u30b9\u3092 Terraform \u3067\u7ba1\u7406\u3059\u308b\u5834\u5408\u3001\nLambda Function \u3082 Terraform \u3067\u4f5c\u308b\u3068 Lambda Function \u306e ARN \u3084 Invoke ARN \u3092\u53c2\u7167\u3067\u304d\u307e\u3059\u3002"),(0,o.kt)("p",null,"\u307e\u305f lambroll \u3067\u30c7\u30d7\u30ed\u30a4\u3059\u308b\u5834\u5408\u3082\u5148\u306b Terraform \u3067 IAM Role \u3092\u4f5c\u6210\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u304c\u3001\nTerraform \u3067 aws_lambda_permission \u306e\u3088\u3046\u306a\u30ea\u30bd\u30fc\u30b9\u3092\u4f5c\u6210\u3059\u308b\u306b\u306f Lambda Function \u304c\u5148\u306b\u4f5c\u3089\u308c\u3066\u3044\u308b\u5fc5\u8981\u304c\u3042\u308b\u306e\u3067\u3001\n\u4e92\u3044\u306b\u4f9d\u5b58\u95a2\u4fc2\u304c\u767a\u751f\u3057\u3001\u9762\u5012\u306a\u3053\u3068\u306b\u306a\u308a\u307e\u3059\u3002"),(0,o.kt)("p",null,"\u307e\u305f Lambda Function \u306e\u524a\u9664\u3082 Terraform \u3067\u3067\u304d\u308b\u3088\u3046\u306b\u306a\u308a\u307e\u3059\u3002"),(0,o.kt)("p",null,"\u306a\u306e\u3067\u3001 Terraform \u3067 Lambda Function \u3092\u4f5c\u3063\u3066\u304a\u3044\u305f\u307b\u3046\u304c\u8272\u3005\u90fd\u5408\u304c\u826f\u3044\u3067\u3059\u3002"),(0,o.kt)("p",null,"Terraform \u3067\u4f5c\u6210\u3068\u524a\u9664\u306f\u884c\u3046\u3082\u306e\u306e\u3001\u66f4\u65b0\u3092\u3057\u305f\u3044\u308f\u3051\u3067\u306f\u306a\u3044\u306e\u3067\u3001 ",(0,o.kt)("inlineCode",{parentName:"p"},"ignore_changes = all")," \u3092\u6307\u5b9a\u3057\u307e\u3059\u3002"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.terraform.io/docs/language/meta-arguments/lifecycle.html#ignore_changes"},"https://www.terraform.io/docs/language/meta-arguments/lifecycle.html#ignore_changes")),(0,o.kt)("p",null,"Lambda Function \u3092 Web UI \u306a\u3069\u304b\u3089\u4f5c\u308b\u5834\u5408 Function code \u306f\u306a\u304f\u3066\u3082\u5927\u4e08\u592b\u3067\u3059\u304c\u3001\nTerraform \u3067 Lambda Function \u3092\u4f5c\u308b\u5834\u5408\u3001 ",(0,o.kt)("inlineCode",{parentName:"p"},"filename")," \u3084 ",(0,o.kt)("inlineCode",{parentName:"p"},"image_uri"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"s3_bucket")," \u306e\u3044\u305a\u308c\u304b\u304c\u5fc5\u9808\u306b\u306a\u308a\u307e\u3059\u3002\n\u3053\u308c\u306f issue \u3082\u3042\u308a\u307e\u3059\u304c\u3001\u4ed5\u69d8\u306e\u3088\u3046\u306b\u307f\u3048\u307e\u3059\u3002"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/hashicorp/terraform-provider-aws/issues/5945"},"https://github.com/hashicorp/terraform-provider-aws/issues/5945")),(0,o.kt)("p",null,"ECR \u3084 S3 \u306b dummy \u306e\u30b3\u30fc\u30c9\u3092\u7528\u610f\u3059\u308b\u3068\u3044\u3046\u306e\u3082\u4e00\u3064\u306e\u624b\u3067\u3059\u304c\u3001\u74b0\u5883\u306b\u4f9d\u5b58\u3059\u308b\u306e\u304c\u3042\u307e\u308a\u826f\u3044\u6c17\u304c\u3057\u306a\u3044\u306e\u3067\u3001\narchive_file data source \u3092\u4f7f\u3063\u3066 dummy \u306e zip \u30d5\u30a1\u30a4\u30eb\u3092\u751f\u6210\u3059\u308b\u3068\u3044\u3046\u65b9\u6cd5\u3092\u53d6\u308b\u3053\u3068\u306b\u3057\u307e\u3057\u305f\u3002"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://registry.terraform.io/providers/hashicorp/archive/latest/docs/data-sources/archive_file"},"https://registry.terraform.io/providers/hashicorp/archive/latest/docs/data-sources/archive_file")),(0,o.kt)("p",null,"\u6b21\u306e\u3088\u3046\u306a\u30b3\u30fc\u30c9\u3067 CI \u3067 terraform apply \u3092\u5b9f\u884c\u3057\u307e\u3057\u305f\u304c\u3001 zip file \u304c\u306a\u3044\u3068\u8a00\u308f\u308c\u3066\u5931\u6557\u3057\u307e\u3057\u305f\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tf"},'resource "aws_lambda_function" "main" {\n  # https://www.terraform.io/docs/language/meta-arguments/lifecycle.html#ignore_changes\n  # Terraform can create and destroy the remote object but will never propose updates to it.\n  lifecycle {\n    ignore_changes = all\n  }\n\n  function_name = "foo"\n  role          = aws_iam_role.main.arn\n\n  handler  = "bootstrap"\n  runtime  = "provided.al2"\n  filename = data.archive_file.dummy.output_path\n}\n\ndata "archive_file" "dummy" {\n  type        = "zip"\n  output_path = "${path.module}/dummy.zip"\n\n  source {\n    content  = "dummy"\n    filename = "bootstrap"\n  }\n}\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'Error: unable to load "lambda-base/dummy.zip": open lambda-base/dummy.zip: no such file or directory\n')),(0,o.kt)("p",null,"\u3057\u304b\u3057\u30ed\u30fc\u30ab\u30eb\u3067 terraform plan, apply \u3092\u5b9f\u884c\u3057\u3066\u307f\u3066\u3082\u518d\u73fe\u3057\u307e\u305b\u3093\u3067\u3057\u305f\u3002"),(0,o.kt)("p",null,"CI \u3067\u306f Pull Request \u3067 plan file \u3092\u751f\u6210\u3057\u3066 S3 \u306b plan file \u3092 upload \u3057\u3001 PR \u3092\u30de\u30fc\u30b8\u3057\u305f default branch \u3067\u306f terraform plan \u3092\u5b9f\u884c\u305b\u305a\u306b S3 \u304b\u3089 plan file \u3092\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u3057\u3066 terraform apply \u3092\u5b9f\u884c\u3057\u3066\u3044\u307e\u3059\u3002"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://blog.studysapuri.jp/entry/2021/03/10/080000"},"Pull Request \u306e terraform plan \u306e\u5b9f\u884c\u7d50\u679c\u3092 S3 \u306b\u4fdd\u5b58\u3057\u3066\u5b89\u5168\u306b apply | Quipper Product Team Blog")),(0,o.kt)("p",null,"plan file \u3092\u6307\u5b9a\u3057\u3066 terraform apply \u3092\u5b9f\u884c\u3057\u305f\u969b\u306b\u306f zip file \u304c\u4f5c\u6210\u3055\u308c\u305a\u3001\u4e0a\u8a18\u306e\u30a8\u30e9\u30fc\u304c\u767a\u751f\u3059\u308b\u3053\u3068\u304c\u308f\u304b\u308a\u307e\u3057\u305f\u3002"),(0,o.kt)("p",null,"\u95a2\u9023\u3059\u308b issue \u3082\u3042\u308a\u307e\u3057\u305f\u3002 ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/hashicorp/terraform-provider-archive/issues/39"},"https://github.com/hashicorp/terraform-provider-archive/issues/39")),(0,o.kt)("p",null,"\u3053\u306e issue \u3067\u306f\u5e7e\u3064\u304b\u306e\u89e3\u6c7a\u65b9\u6cd5\u304c\u7d39\u4ecb\u3055\u308c\u3066\u3044\u307e\u3059\u3002\u3061\u306a\u307f\u306b 2021-06-24 \u73fe\u5728 Hashicorp \u5074\u304b\u3089\u306f\u7279\u306b\u53cd\u5fdc\u304c\u306a\u3044\u3088\u3046\u306b\u898b\u3048\u307e\u3059\u3002\nrandom_uuid \u3084 random_string \u3092\u4f7f\u3063\u305f\u65b9\u6cd5\u3082\u3042\u308a\u307e\u3059\u304c\u3001 Lambda \u3092\u4f5c\u6210\u3059\u308b\u3060\u3051\u306a\u3089 null_resource \u306b\u4f9d\u5b58\u3055\u305b\u308b\u3060\u3051\u3067\u5341\u5206\u306e\u3088\u3046\u306b\u601d\u3048\u307e\u3057\u305f\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tf"},'data "archive_file" "dummy" {\n  type        = "zip"\n  output_path = "${path.module}/dummy.zip"\n  source {\n    content  = "dummy"\n    filename = "bootstrap"\n  }\n  depends_on = [\n    null_resource.main\n  ]\n}\n\nresource "null_resource" "main" {}\n')),(0,o.kt)("p",null,"\u3053\u306e\u3088\u3046\u306b null_resource \u306b\u4f9d\u5b58\u3055\u305b\u308b\u3068 terraform plan \u3067\u306f zip file \u304c\u4f5c\u3089\u308c\u305a\u3001 terraform apply \u3067\u306f\u3058\u3081\u3066 zip file \u304c\u4f5c\u3089\u308c\u308b\u305f\u3081\u3001\nterraform apply \u304c\u5931\u6557\u3059\u308b\u3053\u3068\u306f\u306a\u304f\u306a\u308a\u307e\u3057\u305f\u3002"))}f.isMDXComponent=!0}}]);