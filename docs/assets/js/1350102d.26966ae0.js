"use strict";(self.webpackChunktechblog_szksh_cloud_github_io=self.webpackChunktechblog_szksh_cloud_github_io||[]).push([[3765],{5680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>g});var a=n(6540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},y=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=s(n),y=r,g=u["".concat(c,".").concat(y)]||u[y]||m[y]||o;return n?a.createElement(g,l(l({ref:t},p),{},{components:n})):a.createElement(g,l({ref:t},p))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=y;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:r,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}y.displayName="MDXCreateElement"},6136:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var a=n(8168),r=(n(6540),n(5680));const o={title:"Terraform \u306e State Locking \u306e\u6982\u8981",date:new Date("2020-01-10T07:18:05.000Z"),archives:["2020/01"],tags:["terraform"],authors:["suzuki-shunsuke"]},l=void 0,i={permalink:"/terraform-state-locking",source:"@site/blog/terraform-state-locking.md",title:"Terraform \u306e State Locking \u306e\u6982\u8981",description:"Terraform \u306e State Locking \u3068\u3044\u3046\u6a5f\u80fd\u306e\u6982\u8981\u306b\u3064\u3044\u3066\u8aac\u660e\u3057\u307e\u3059\u3002",date:"2020-01-10T07:18:05.000Z",formattedDate:"January 10, 2020",tags:[{label:"terraform",permalink:"/tags/terraform"}],readingTime:6,hasTruncateMarker:!1,authors:[{name:"Shunsuke Suzuki",title:"Platform Engineer / OSS Developer / Go / Terraform",url:"https://github.com/suzuki-shunsuke",imageURL:"https://github.com/suzuki-shunsuke.png",key:"suzuki-shunsuke"}],frontMatter:{title:"Terraform \u306e State Locking \u306e\u6982\u8981",date:"2020-01-10T07:18:05.000Z",archives:["2020/01"],tags:["terraform"],authors:["suzuki-shunsuke"]},prevItem:{title:"Terraform \u5165\u9580",permalink:"/terraform-getting-started"},nextItem:{title:"dd-time - \u30b3\u30de\u30f3\u30c9\u306e\u5b9f\u884c\u6642\u9593\u3092 Datadog \u306b\u9001\u308b\u30c4\u30fc\u30eb",permalink:"/dd-time"}},c={authorsImageUrls:[void 0]},s=[{value:"State Locking \u3068\u306f",id:"state-locking-\u3068\u306f",level:2},{value:"\u30b3\u30de\u30f3\u30c9\u30e9\u30a4\u30f3\u30aa\u30d7\u30b7\u30e7\u30f3",id:"\u30b3\u30de\u30f3\u30c9\u30e9\u30a4\u30f3\u30aa\u30d7\u30b7\u30e7\u30f3",level:2},{value:"force-unlock",id:"force-unlock",level:2},{value:"S3 backend",id:"s3-backend",level:2},{value:"State Locking \u3092\u3059\u308c\u3070\u5b89\u5168\u3001\u3068\u3044\u3046\u308f\u3051\u3067\u306f\u306a\u3044",id:"state-locking-\u3092\u3059\u308c\u3070\u5b89\u5168\u3068\u3044\u3046\u308f\u3051\u3067\u306f\u306a\u3044",level:2}],p={toc:s},u="wrapper";function m(e){let{components:t,...n}=e;return(0,r.yg)(u,(0,a.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"Terraform \u306e ",(0,r.yg)("a",{parentName:"p",href:"https://www.terraform.io/docs/state/locking.html"},"State Locking")," \u3068\u3044\u3046\u6a5f\u80fd\u306e\u6982\u8981\u306b\u3064\u3044\u3066\u8aac\u660e\u3057\u307e\u3059\u3002\n\u305f\u3060\u3057\u3001\u81ea\u5206\u3082\u3061\u3083\u3093\u3068\u7406\u89e3\u3057\u3066\u3044\u308b\u308f\u3051\u3067\u306f\u306a\u3044\u306e\u3067\u3001\u63a8\u6e2c\u3082\u6df7\u3058\u308a\u307e\u3059\u3002\n\u57fa\u672c\u7684\u306b\u306f\u516c\u5f0f\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u306b\u66f8\u3044\u3066\u3042\u308b\u5185\u5bb9\u306a\u306e\u3067\u305d\u3061\u3089\u3092\u3054\u53c2\u7167\u304f\u3060\u3055\u3044\u3002"),(0,r.yg)("h2",{id:"state-locking-\u3068\u306f"},"State Locking \u3068\u306f"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"terraform plan")," \u306a\u3069\u306e\u30b3\u30de\u30f3\u30c9\u306f State \u3092\u5909\u66f4\u3059\u308b\u5834\u5408\u304c\u3042\u308a\u307e\u3059\u3002\n\u305d\u306e\u51e6\u7406\u306f atomic \u3067\u306f\u306a\u3044\u305f\u3081\u3001\u540c\u6642\u306b\u8907\u6570\u306e\u30b3\u30de\u30f3\u30c9\u304c State \u3092\u66f8\u304d\u63db\u3048\u3088\u3046\u3068\u3059\u308b\u3068\u4e0d\u6574\u5408\u304c\u751f\u3058\u308b\u53ef\u80fd\u6027\u304c\u3042\u308a\u307e\u3059\u3002"),(0,r.yg)("hr",null),(0,r.yg)("p",null,"\u4f8b\u3048\u3070 S3 backend \u306e state \u3092 state rm \u3067\u66f4\u65b0\u3059\u308b\u5834\u5408\u3092\u8003\u3048\u307e\u3059\u3002\n\u3053\u308c\u306f\u30b3\u30de\u30f3\u30c9\u5185\u90e8\u3067"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"\u73fe\u5728\u306e State \u3092\u53d6\u5f97\u3059\u308b (READ)"),(0,r.yg)("li",{parentName:"ol"},"\u4fee\u6b63\u3057\u305f State \u3092 S3 \u306b push \u3059\u308b (WRITE)")),(0,r.yg)("p",null,"\u3068\u3044\u3046\u51e6\u7406\u3092\u884c\u3063\u3066\u3044\u308b\u306f\u305a\u3067\u3042\u308a\u3001\u8907\u6570\u306e\u30b3\u30de\u30f3\u30c9\u3092\u5b9f\u884c\u3057\u305f\u5834\u5408\u3001READ \u3068 WRITE \u306e\u9593\u306b\u4ed6\u306e\u30b3\u30de\u30f3\u30c9\u306b\u3088\u3063\u3066 WRITE \u3055\u308c\u308b\u3068\u3001\u305d\u306e WRITE \u306b\u3088\u308b\u5909\u66f4\u304c\u6d88\u3048\u3066\u3057\u307e\u3044\u307e\u3059\u3002"),(0,r.yg)("hr",null),(0,r.yg)("p",null,"\u305d\u3053\u3067 State Locking \u3092\u4f7f\u3046\u3068\u5404\u30b3\u30de\u30f3\u30c9\u3067 State \u3092\u5909\u66f4\u3059\u308b\u524d\u306b lock \u3092\u53d6\u308a\u3001WRITE \u5f8c\u306b lock \u3092\u89e3\u9664\u3057\u307e\u3059\u3002"),(0,r.yg)("h2",{id:"\u30b3\u30de\u30f3\u30c9\u30e9\u30a4\u30f3\u30aa\u30d7\u30b7\u30e7\u30f3"},"\u30b3\u30de\u30f3\u30c9\u30e9\u30a4\u30f3\u30aa\u30d7\u30b7\u30e7\u30f3"),(0,r.yg)("p",null,"plan, apply, refresh, state rm, state mv, state push \u306b\u306f\u6b21\u306e\u3088\u3046\u306a\u30aa\u30d7\u30b7\u30e7\u30f3\u304c\u3042\u308a\u307e\u3059\u3002"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"-lock=true          Lock the state file when locking is supported.\n-lock-timeout=0s    Duration to retry a state lock.\n")),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"-lock")," \u306f\u30c7\u30d5\u30a9\u30eb\u30c8\u3067 true \u306a\u306e\u3067 State Locking \u306e\u3053\u3068\u3092\u77e5\u3089\u306a\u304f\u3066\u3082\u5b9f\u306f State Locking \u4f7f\u3063\u3066\u305f\u3068\u3044\u3046\u3053\u3068\u3082\u3042\u308a\u3048\u307e\u3059\u304c\u3001 Backend type \u306b\u3088\u3063\u3066\u306f State Locking \u306e\u305f\u3081\u306e\u8a2d\u5b9a\u3092\u3057\u3066\u3044\u306a\u3044\u3068 State Locking \u304c\u7121\u52b9\u306b\u306a\u3063\u3066\u3044\u308b\u53ef\u80fd\u6027\u304c\u3042\u308a\u307e\u3059\u3002"),(0,r.yg)("p",null,"\u4f8b\u3048\u3070 S3 backend \u3067 State Locking \u3092\u3059\u308b\u306b\u306f DynamoDB \u304c\u5fc5\u8981\u3067\u3042\u308a\u3001 DynamoDB \u306e\u8a2d\u5b9a ",(0,r.yg)("inlineCode",{parentName:"p"},"dynamodb_table")," \u304c\u8a2d\u5b9a\u3055\u308c\u3066\u3044\u306a\u3044\u3068 State Locking \u306f\u7121\u52b9\u306b\u306a\u308a\u307e\u3059\u3002"),(0,r.yg)("p",null,"\u307e\u305f\u3001",(0,r.yg)("inlineCode",{parentName:"p"},"-lock=false")," \u3067\u7121\u52b9\u5316\u3067\u304d\u307e\u3059\u304c\u3001\u516c\u5f0f\u7684\u306b\u975e\u63a8\u5968\u306b\u306a\u308a\u307e\u3059\u3002"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"-lock-timeout")," \u306f lock \u306e\u53d6\u5f97\u306b\u5931\u6557\u3057\u305f\u5834\u5408\u306b\u4f55\u79d2\u5f8c\u306b\u30ea\u30c8\u30e9\u30a4\u3059\u308b\u304b\u306e\u8a2d\u5b9a\u306b\u306a\u308a\u307e\u3059\u3002"),(0,r.yg)("h2",{id:"force-unlock"},"force-unlock"),(0,r.yg)("p",null,"lock \u306e\u89e3\u653e\u306b\u5931\u6557\u3057\u305f\u5834\u5408\u306e\u305f\u3081\u306b\u3001 ",(0,r.yg)("a",{parentName:"p",href:"https://www.terraform.io/docs/commands/force-unlock.html"},"force-unlock")," \u3068\u3044\u3046\u30b3\u30de\u30f3\u30c9\u304c\u3042\u308a\u307e\u3059\u3002\n\u4f55\u3089\u304b\u306e\u30c8\u30e9\u30d6\u30eb\u3067 lock \u304c\u89e3\u653e\u3055\u308c\u306a\u3044\u5834\u5408\u306b\u4f7f\u3044\u307e\u3059\u3002"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"$ terraform force-unlock LOCK_ID\n")),(0,r.yg)("p",null,"\u4f8b\u3048\u3070 plan \u3092\u5b9f\u884c\u4e2d\u306b\u30ad\u30e3\u30f3\u30bb\u30eb\u3059\u308b\u3068 lock \u304c\u89e3\u653e\u3055\u308c\u306a\u3044\u3053\u3068\u304c\u3042\u308b\u3088\u3046\u3067\u3059\u3002"),(0,r.yg)("p",null,"lock \u304c\u89e3\u653e\u3055\u308c\u3066\u3044\u306a\u3044\u72b6\u614b\u3067 plan \u306a\u3069\u3092\u5b9f\u884c\u3059\u308b\u3068 lock \u306e\u53d6\u5f97\u306b\u5931\u6557\u3057\u3001\u6b21\u306e\u3088\u3046\u306a\u30a8\u30e9\u30fc\u304c\u8d77\u3053\u308a\u307e\u3059\u3002"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'Acquiring state lock. This may take a few moments...\nError: Error locking state: Error acquiring the state lock: ConditionalCheckFailedException: The conditional request failed\n    status code: 400, request id: xxx\nLock Info:\n  ID:        xxx\n  Path:      terraform.tfstate\n  Operation: OperationTypePlan\n  Who:       xxx\n  Version:   0.12.13\n  Created:   2020-01-09 09:30:37.41120929 +0000 UTC\n  Info:      \nTerraform acquires a state lock to protect the state from being written\nby multiple users at the same time. Please resolve the issue above and try\nagain. For most commands, you can disable locking with the "-lock=false"\nflag, but this is not recommended.\n')),(0,r.yg)("p",null,"\u3053\u3053\u3067\u51fa\u529b\u3055\u308c\u308b ID \u3092 force-unlock \u306e\u5f15\u6570\u3068\u3057\u3066\u6307\u5b9a\u3057\u307e\u3059\u3002"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"$ terraform force-unlock xxx\nDo you really want to force-unlock?\n  Terraform will remove the lock on the remote state.\n  This will allow local Terraform commands to modify this state, even though it\n  may be still be in use. Only 'yes' will be accepted to confirm.\n  Enter a value: yes\nTerraform state has been successfully unlocked!\nThe state has been unlocked, and Terraform commands should now be able to\nobtain a new lock on the remote state.\n")),(0,r.yg)("h2",{id:"s3-backend"},"S3 backend"),(0,r.yg)("p",null,"State Locking \u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u308b\u304b\u306f Backend type \u306b\u3088\u308a\u307e\u3059\u304c\u3001 S3 \u306e\u5834\u5408\u3001 DynamoDB \u3092\u4f7f\u3048\u3070\u3067\u304d\u307e\u3059\u3002"),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"https://www.terraform.io/docs/backends/types/s3.html#configuration-variables"},"https://www.terraform.io/docs/backends/types/s3.html#configuration-variables")),(0,r.yg)("p",null,"backend \u306e\u8a2d\u5b9a\u3067 ",(0,r.yg)("inlineCode",{parentName:"p"},"dynamodb_table")," \u3092\u8a2d\u5b9a\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"https://www.terraform.io/docs/backends/types/s3.html#dynamodb_table"},"https://www.terraform.io/docs/backends/types/s3.html#dynamodb_table")),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"dynamodb_table - (Optional) The name of a DynamoDB table to use for state locking and consistency. The table must have a primary key named LockID. If not present, locking will be disabled.")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-hcl"},'data "terraform_remote_state" "network" {\n  backend = "s3"\n  config = {\n    bucket = "terraform-state-prod"\n    key    = "network/terraform.tfstate"\n    region = "us-east-1"\n\n    # state locking \u306e\u8a2d\u5b9a\n    dynamodb_table = "???"\n  }\n}\n')),(0,r.yg)("p",null,"IAM\u306e\u6a29\u9650\u3068\u3057\u3066\u306f ",(0,r.yg)("a",{parentName:"p",href:"https://www.terraform.io/docs/backends/types/s3.html#dynamodb-table-permissions"},"https://www.terraform.io/docs/backends/types/s3.html#dynamodb-table-permissions")," \u304c\u5fc5\u8981\u3067\u3059\u3002"),(0,r.yg)("p",null,"DynamoDB \u306e\u30c6\u30fc\u30d6\u30eb\u306b\u306f ",(0,r.yg)("inlineCode",{parentName:"p"},"LockID")," \u3068\u3044\u3046 Primary Key \u304c\u5fc5\u8981\u3067\u3059\u3002 \u578b\u306f ",(0,r.yg)("inlineCode",{parentName:"p"},"\u6587\u5b57\u5217")," \u3067\u3059\u3002"),(0,r.yg)("p",null,"\u305d\u3057\u3066 State Locking \u3092\u6709\u52b9\u306b\u3057\u305f\u72b6\u614b\u3067 plan \u306a\u3069\u3092\u5b9f\u884c\u3059\u308b\u3068\nDynamoDB \u306e\u30c6\u30fc\u30d6\u30eb\u306b\u30ec\u30b3\u30fc\u30c9\u304c State \u3054\u3068\u306b\u4f5c\u3089\u308c\u308b\u3088\u3046\u3067\u3059\u3002"),(0,r.yg)("h2",{id:"state-locking-\u3092\u3059\u308c\u3070\u5b89\u5168\u3068\u3044\u3046\u308f\u3051\u3067\u306f\u306a\u3044"},"State Locking \u3092\u3059\u308c\u3070\u5b89\u5168\u3001\u3068\u3044\u3046\u308f\u3051\u3067\u306f\u306a\u3044"),(0,r.yg)("p",null,"State Locking \u81ea\u4f53\u306f\u5b89\u5168\u6027\u306b\u5bc4\u4e0e\u3059\u308b\u4ed5\u7d44\u307f\u3067\u306f\u3042\u308a\u307e\u3059\u304c\u3001 State Locking \u3055\u3048\u3059\u308c\u3070\u5b89\u5168\u304b\u3068\u3044\u3046\u3068\u305d\u3046\u3067\u306f\u306a\u3044\u3068\u601d\u3044\u307e\u3059\u3002"),(0,r.yg)("p",null,"\u8907\u6570\u4eba\u304c\u540c\u6642\u306b plan \u3084 apply \u306a\u3069\u3092\u5b9f\u884c\u3059\u308b\u74b0\u5883\u3067\u306f\u3001\u5225\u306e\u30ed\u30c3\u30af\u6a5f\u69cb\u3082\u5fc5\u8981\u3060\u3068\u601d\u3044\u307e\u3059\u3002"),(0,r.yg)("p",null,"\u8a73\u7d30\u306f\u307e\u305f\u5225\u9014\u66f8\u3053\u3046\u3068\u601d\u3044\u307e\u3059\u304c\u3001CI/CD \u3067 plan, apply \u306a\u3069\u3092\u5b9f\u884c\u3059\u308b\u5834\u5408\u3001 apply \u5b9f\u884c\u4e2d\u306f\u305d\u308c\u304c\u7d42\u308f\u308b\u307e\u3067\u4ed6\u306e plan \u3084 apply \u306e\u5b9f\u884c\u3092 wait \u3059\u308b\u3088\u3046\u306a\u4ed5\u7d44\u307f\u304c\u306a\u3044\u3068\u5371\u967a\u3067\u3059\u3002"))}m.isMDXComponent=!0}}]);