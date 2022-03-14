"use strict";(self.webpackChunktechblog_szksh_cloud_github_io=self.webpackChunktechblog_szksh_cloud_github_io||[]).push([[6772],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,k=d["".concat(u,".").concat(m)]||d[m]||s[m]||a;return n?r.createElement(k,l(l({ref:t},p),{},{components:n})):r.createElement(k,l({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var c=2;c<a;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1325:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return s}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),l=["components"],i={title:"Drone \u306e build \u5b9f\u884c\u6642\u306e\u8a8d\u8a3c\u65b9\u6cd5",date:new Date("2018-09-30T10:44:27.000Z"),tags:["drone"],authors:["suzuki-shunsuke"]},u=void 0,c={permalink:"/drone-git-authentication",source:"@site/blog/drone-git-authentication.md",title:"Drone \u306e build \u5b9f\u884c\u6642\u306e\u8a8d\u8a3c\u65b9\u6cd5",description:"drone \u306e build \u306b\u304a\u3051\u308b GitHub (GitHub\u524d\u63d0\u3067\u66f8\u304d\u307e\u3059\u304c\u3001GitHub\u4ee5\u5916\u3067\u3082\u540c\u3058\u3060\u3068\u601d\u3044\u307e\u3059) \u306e\u8a8d\u8a3c\u306e\u8a71(\u3069\u3046\u3084\u3063\u3066\u8a8d\u8a3c\u3057\u3066\u3044\u308b\u304b)\u306b\u3064\u3044\u3066\u66f8\u3044\u3066\u304a\u3053\u3046\u3068\u601d\u3044\u307e\u3059\u3002",date:"2018-09-30T10:44:27.000Z",formattedDate:"September 30, 2018",tags:[{label:"drone",permalink:"/tags/drone"}],readingTime:3.98,truncated:!1,authors:[{name:"Shunsuke Suzuki",title:"SRE / OSS Contributor / Tool Maker / Go / Terraform",url:"https://github.com/suzuki-shunsuke",imageURL:"https://github.com/suzuki-shunsuke.png",key:"suzuki-shunsuke"}],frontMatter:{title:"Drone \u306e build \u5b9f\u884c\u6642\u306e\u8a8d\u8a3c\u65b9\u6cd5",date:"2018-09-30T10:44:27.000Z",tags:["drone"],authors:["suzuki-shunsuke"]},prevItem:{title:"drone \u306e build \u306e timeout \u304c\u5909\u66f4\u3067\u304d\u306a\u3044",permalink:"/drone-build-timeout"},nextItem:{title:"Drone \u3068 Circle CI \u306e workspace \u306e\u6271\u3044\u306e\u9055\u3044\u306b\u3064\u3044\u3066",permalink:"/drone-circle-volume-difference"}},p={authorsImageUrls:[void 0]},s=[{value:"clone\u30b9\u30c6\u30c3\u30d7\u4ee5\u5916\u3067\u306e .netrc\u306e\u6d3b\u7528",id:"clone\u30b9\u30c6\u30c3\u30d7\u4ee5\u5916\u3067\u306e-netrc\u306e\u6d3b\u7528",level:2},{value:"\u8ab0\u304c\u9023\u643a\u3092\u6709\u52b9\u5316\u3059\u308b\u3079\u304d\u304b",id:"\u8ab0\u304c\u9023\u643a\u3092\u6709\u52b9\u5316\u3059\u308b\u3079\u304d\u304b",level:2}],d={toc:s};function m(e){var t=e.components,n=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"drone \u306e build \u306b\u304a\u3051\u308b GitHub (GitHub\u524d\u63d0\u3067\u66f8\u304d\u307e\u3059\u304c\u3001GitHub\u4ee5\u5916\u3067\u3082\u540c\u3058\u3060\u3068\u601d\u3044\u307e\u3059) \u306e\u8a8d\u8a3c\u306e\u8a71(\u3069\u3046\u3084\u3063\u3066\u8a8d\u8a3c\u3057\u3066\u3044\u308b\u304b)\u306b\u3064\u3044\u3066\u66f8\u3044\u3066\u304a\u3053\u3046\u3068\u601d\u3044\u307e\u3059\u3002\ndrone \u306e build \u306f clone step \u3067\u5bfe\u8c61\u306e\u30ea\u30dd\u30b8\u30c8\u30ea\u3092 GitHub \u304b\u3089 clone \u3057\u3066\u304d\u3066\u3044\u307e\u3059\u3002\n\u3053\u306e\u969b\u306b\u4f55\u304b\u3057\u3089\u306e\u65b9\u6cd5\u3067\u8a8d\u8a3c\u3057\u3066\u3044\u308b\u306f\u305a\u3067\u3059\u3002"),(0,a.kt)("p",null,"\u7d50\u8ad6\u3092\u8a00\u3046\u3068\u3001"),(0,a.kt)("p",null,"\u3042\u308b\u30ea\u30dd\u30b8\u30c8\u30eaA\u306ebuild\u3067\u306f\u3001\n\u30ea\u30dd\u30b8\u30c8\u30eaA\u306e ",(0,a.kt)("strong",{parentName:"p"},"drone\u9023\u643a\u3092\u6709\u52b9\u5316\u3057\u305f\u30e6\u30fc\u30b6\u30fc")," B\u306e access token \u3092 ",(0,a.kt)("strong",{parentName:"p"},".netrc")," \u306b\u66f8\u304d\u8fbc\u3093\u3067\u8a8d\u8a3c\u3057\u3066\u3044\u307e\u3059\u3002\n\u3088\u3063\u3066\u30e6\u30fc\u30b6\u30fcB\u306bclone\u3059\u308b\u6a29\u9650\u304c\u3042\u308b\u30ea\u30dd\u30b8\u30c8\u30ea\u306fclone\u3067\u304d\u308b\u3057\u3001\n\u30e6\u30fc\u30b6\u30fcB\u306bclone\u3059\u308b\u6a29\u9650\u304c\u306a\u3044\u30ea\u30dd\u30b8\u30c8\u30ea\u306fclone\u3067\u304d\u307e\u305b\u3093\u3002\n\u3064\u307e\u308a\u3001 ",(0,a.kt)("strong",{parentName:"p"},"\u8ab0\u304c\u9023\u643a\u3092\u6709\u52b9\u5316\u3059\u308b\u304b\u304c\u91cd\u8981")," \u306b\u306a\u308a\u307e\u3059(\u3053\u308c\u306b\u3064\u3044\u3066\u306f\u5f8c\u8ff0\u3057\u307e\u3059)\u3002\n\u306a\u304a\u3001drone\u9023\u643a\u306e\u6709\u52b9\u5316\u306f\u305d\u306e\u30ea\u30dd\u30b8\u30c8\u30ea\u306eowner\u4ee5\u4e0a\u3067\u306a\u3044\u3068\u51fa\u6765\u307e\u305b\u3093\u3002"),(0,a.kt)("p",null,"drone\u4e0a\u3067\u30ea\u30dd\u30b8\u30c8\u30ea\u306e\u9023\u643a\u3092\u6709\u52b9\u5316\u3059\u308b\u3068\u3001\n\u30ea\u30dd\u30b8\u30c8\u30ea\u306eHook\u304c\u4f5c\u6210\u3055\u308c\u307e\u3059\u3002\n\u30ea\u30dd\u30b8\u30c8\u30ea\u306e settings > Hooks \u304b\u3089\u78ba\u8a8d\u3067\u304d\u307e\u3059\u3002\n\u3053\u306e Hook \u306e Payload URL \u3092\u898b\u308b\u3068 access_token \u30af\u30a8\u30ea\u304c\u3042\u308b\u3068\u601d\u3044\u307e\u3059\u3002\nJWT\u306e\u3088\u3046\u3067\u3059\u306d\u3002\u3053\u308c\u306f\u30ea\u30dd\u30b8\u30c8\u30ea\u306e\u9023\u643a\u3092\u6709\u52b9\u5316\u3057\u305f\u30e6\u30fc\u30b6\u30fc\u306etoken\u3067\u3059\u3002"),(0,a.kt)("p",null,"\u3053\u306etoken\u304c GitHub \u304b\u3089 drone \u3078\u306e webhook \u306e\u30d1\u30e9\u30e1\u30fc\u30bf\u3068\u3057\u3066\u9001\u3089\u308c\u3066\u304f\u308b\u306e\u3067\u3001\ndrone \u5074\u3067\u8a8d\u8a3c\u3057\u3001\u8a8d\u8a3c\u3057\u305f\u30e6\u30fc\u30b6\u30fc\u306eGitHub  \u306eaccess token \u3092\u53d6\u5f97\u3057\u3001\nbuild \u6642\u306b\u30b3\u30f3\u30c6\u30ca\u306e /root/.netrc \u306b\u66f8\u304d\u8fbc\u3080\u3088\u3046\u3067\u3059\u3002"),(0,a.kt)("p",null,".netrc\u306b\u66f8\u304d\u8fbc\u307e\u308c\u3066\u3044\u308b\u306e\u306f\u8a66\u3057\u306b\u500b\u4eba\u306e private repository \u3067 .netrc \u3092cat\u3057\u3066\u307f\u308c\u3070\u308f\u304b\u308a\u307e\u3059\u3002\n\u4ed6\u4eba\u3082\u898b\u3048\u308brepository\u3067cat\u3059\u308b\u3068\u60aa\u7528\u3055\u308c\u304b\u306d\u306a\u3044\u306e\u3067\u6c17\u3092\u3064\u3051\u307e\u3057\u3087\u3046\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"pipeline:\nnetrc:\nimage: alpine:3.6\ncommands:\n- cat ~/.netrc\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"+ cat ~/.netrc\nmachine gihub.com\nlogin **************\npassword x-oauth-basic\n")),(0,a.kt)("h2",{id:"clone\u30b9\u30c6\u30c3\u30d7\u4ee5\u5916\u3067\u306e-netrc\u306e\u6d3b\u7528"},"clone\u30b9\u30c6\u30c3\u30d7\u4ee5\u5916\u3067\u306e .netrc\u306e\u6d3b\u7528"),(0,a.kt)("p",null,".netrc \u306e\u304a\u304b\u3052\u3067\u96e3\u3057\u3044\u3053\u3068\u8003\u3048\u305a\u306b clone \u51fa\u6765\u3066\u3044\u308b\u308f\u3051\u3067\u3059\u304c\u3001\u3053\u306e .netrc \u306f\u5f53\u7136 clone \u30b9\u30c6\u30c3\u30d7\u4ee5\u5916\u3067\u3082\u4f7f\u3048\u307e\u3059\u3002\n\u4f8b\u3048\u3070 private repository \u306e ansible role \u306e install \u3067\u3059\u3002"),(0,a.kt)("p",null,"roles.yml"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"- src: https://github.com/<owner>/<repo>\n  name: foo.bar\n  scm: git\n")),(0,a.kt)("p",null,".drone.yml"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"commands:\n- ansible-galaxy install -r roles.yml\n")),(0,a.kt)("h2",{id:"\u8ab0\u304c\u9023\u643a\u3092\u6709\u52b9\u5316\u3059\u308b\u3079\u304d\u304b"},"\u8ab0\u304c\u9023\u643a\u3092\u6709\u52b9\u5316\u3059\u308b\u3079\u304d\u304b"),(0,a.kt)("p",null,"\u7d50\u8ad6\u3092\u8a00\u3046\u3068\u3001\u30d9\u30b9\u30c8\u306a\u65b9\u6cd5\u306f\u5206\u304b\u308a\u307e\u305b\u3093\u3002"),(0,a.kt)("p",null,"\u9023\u643a\u3092\u6709\u52b9\u5316\u3057\u305f\u4eba\u304c\u9000\u8077\u3057\u3066\u3057\u307e\u3063\u305f\u308a\u3001organization\u304b\u3089\u629c\u3051\u3066\u3057\u307e\u3063\u305f\u5834\u5408\u3001\u6025\u306b\u30d3\u30eb\u30c9\u304c\u5931\u6557\u3059\u308b\u30ea\u30b9\u30af\u304c\u3042\u308a\u307e\u3059\u3002\n\u7406\u60f3\u3092\u8a00\u3048\u3070\u7279\u5b9a\u306e\u500b\u4eba\u306e\u30a2\u30ab\u30a6\u30f3\u30c8\u3067\u9023\u643a\u3059\u308b\u306e\u3067\u306f\u306a\u304f\u3001\u9023\u643a\u7528\u306e\u30a2\u30ab\u30a6\u30f3\u30c8\u3092\u7528\u610f\u3059\u308b\u306e\u304c\u826f\u3044\u306e\u304b\u3082\u3057\u308c\u307e\u305b\u3093\u304c\u3001\n\u305d\u308c\u306f\u305d\u308c\u3067\u904b\u7528\u304c\u96e3\u3057\u3044\u304b\u3082\u3057\u308c\u307e\u305b\u3093\u3002"),(0,a.kt)("p",null,"drone API \u306a\u3044\u3057 CLI \u3067\u6709\u52b9\u5316\u306f\u51fa\u6765\u308b\u306e\u3067\u3001CI\u3067\u9023\u643a\u3092\u81ea\u52d5\u5316\u3059\u308b\u3053\u3068\u306f\u53ef\u80fd\u3060\u3068\u601d\u3044\u307e\u3059\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://0-8-0.docs.drone.io/cli-repository-add/"},"https://0-8-0.docs.drone.io/cli-repository-add/")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://0-8-0.docs.drone.io/api-repo-create/"},"https://0-8-0.docs.drone.io/api-repo-create/"))),(0,a.kt)("p",null,"\u81ea\u5206\u306e\u3068\u3053\u308d\u3067\u306f\u307e\u3060\u305d\u3053\u307e\u3067\u3084\u3063\u3066\u306a\u304f\u3001\u500b\u4eba\u3067\u6709\u52b9\u5316\u3057\u3066\u3057\u307e\u3063\u3066\u3044\u308b\u306e\u3067\u3059\u304c\u3001\n\u81ea\u52d5\u5316\u3057\u305f\u3089\u307e\u305f\u8a18\u4e8b\u306b\u3067\u3082\u3057\u305f\u3044\u3068\u601d\u3044\u307e\u3059\u3002"))}m.isMDXComponent=!0}}]);