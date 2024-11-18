"use strict";(self.webpackChunktechblog_szksh_cloud_github_io=self.webpackChunktechblog_szksh_cloud_github_io||[]).push([[7912],{5680:(e,n,r)=>{r.d(n,{xA:()=>b,yg:()=>g});var t=r(6540);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=t.createContext({}),p=function(e){var n=t.useContext(c),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},b=function(e){var n=p(e.components);return t.createElement(c.Provider,{value:n},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),d=p(r),m=o,g=d["".concat(c,".").concat(m)]||d[m]||u[m]||a;return r?t.createElement(g,i(i({ref:n},b),{},{components:r})):t.createElement(g,i({ref:n},b))}));function g(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l[d]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=r[p];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}m.displayName="MDXCreateElement"},8684:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var t=r(8168),o=(r(6540),r(5680));const a={title:"drone exec \u3092\u4e26\u5217\u5b9f\u884c\u3057\u305f\u969b\u306edocker network name \u306e\u885d\u7a81\u306b\u3064\u3044\u3066",date:new Date("2018-09-30T09:52:34.000Z"),tags:["drone"],authors:["suzuki-shunsuke"]},i=void 0,l={permalink:"/drone-exec-network-name-collision",source:"@site/blog/drone-exec-network-name-collision.md",title:"drone exec \u3092\u4e26\u5217\u5b9f\u884c\u3057\u305f\u969b\u306edocker network name \u306e\u885d\u7a81\u306b\u3064\u3044\u3066",description:"drone exec \u3092\u4e26\u5217\u5b9f\u884c\u3059\u308b\u3068 docker network name \u304c\u885d\u7a81\u3059\u308b\u3053\u3068\u304c\u3042\u308a\u307e\u3059\u3002",date:"2018-09-30T09:52:34.000Z",formattedDate:"September 30, 2018",tags:[{label:"drone",permalink:"/tags/drone"}],readingTime:1.75,hasTruncateMarker:!1,authors:[{name:"Shunsuke Suzuki",title:"Platform Engineer / OSS Developer / Go / Terraform",url:"https://github.com/suzuki-shunsuke",imageURL:"https://github.com/suzuki-shunsuke.png",key:"suzuki-shunsuke"}],frontMatter:{title:"drone exec \u3092\u4e26\u5217\u5b9f\u884c\u3057\u305f\u969b\u306edocker network name \u306e\u885d\u7a81\u306b\u3064\u3044\u3066",date:"2018-09-30T09:52:34.000Z",tags:["drone"],authors:["suzuki-shunsuke"]},prevItem:{title:"Drone \u3068 Circle CI \u306e workspace \u306e\u6271\u3044\u306e\u9055\u3044\u306b\u3064\u3044\u3066",permalink:"/drone-circle-volume-difference"},nextItem:{title:"go-gencfg - viper\u306e\u500b\u3005\u306e\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u7528\u306e\u30e9\u30c3\u30d1\u30fc\u306e\u30b3\u30fc\u30c9\u30b8\u30a7\u30cd\u30ec\u30fc\u30bf",permalink:"/go-gencfg"}},c={authorsImageUrls:[void 0]},p=[],b={toc:p},d="wrapper";function u(e){let{components:n,...r}=e;return(0,o.yg)(d,(0,t.A)({},b,r,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("p",null,"drone exec \u3092\u4e26\u5217\u5b9f\u884c\u3059\u308b\u3068 docker network name \u304c\u885d\u7a81\u3059\u308b\u3053\u3068\u304c\u3042\u308a\u307e\u3059\u3002"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},'$ drone exec --local & drone exec --local\n[1] 42934\n2018/06/06 01:58:12 Error response from daemon: network drone_default is ambiguous (4 matches found on name)\n2018/06/06 01:58:12 Error response from daemon: Conflict. The container name "/drone_step_0" is already in use by container "464a29b0726d6ff1a352d81df9c837330501085be550bb16abac3d338dfad887". You have to remove (or rename) that container to be able to reuse that name.\n[1]  + exit 1     drone exec --local\n')),(0,o.yg)("p",null,"drone \u306f pipeline \u5b9f\u884c\u6642\u306b network \u3092\u4f5c\u6210\u3057\u3001pipeline \u304c\u7d42\u4e86\u3059\u308b\u3068 network \u3092\u524a\u9664\u3057\u307e\u3059\u3002"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"https://github.com/cncd/pipeline/blob/b03959913369b4e2a6c49be514f52d076ef6b172/pipeline/pipeline.go#L58"},"https://github.com/cncd/pipeline/blob/b03959913369b4e2a6c49be514f52d076ef6b172/pipeline/pipeline.go#L58")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"https://github.com/cncd/pipeline/blob/b03959913369b4e2a6c49be514f52d076ef6b172/pipeline/pipeline.go#L62"},"https://github.com/cncd/pipeline/blob/b03959913369b4e2a6c49be514f52d076ef6b172/pipeline/pipeline.go#L62")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"https://github.com/cncd/pipeline/blob/b03959913369b4e2a6c49be514f52d076ef6b172/pipeline/backend/docker/docker.go#L50"},"https://github.com/cncd/pipeline/blob/b03959913369b4e2a6c49be514f52d076ef6b172/pipeline/backend/docker/docker.go#L50")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"https://github.com/cncd/pipeline/blob/b03959913369b4e2a6c49be514f52d076ef6b172/pipeline/backend/docker/docker.go#L179"},"https://github.com/cncd/pipeline/blob/b03959913369b4e2a6c49be514f52d076ef6b172/pipeline/backend/docker/docker.go#L179"))),(0,o.yg)("p",null,"\u524a\u9664\u3059\u308b\u306e\u3067\u3001\u4e26\u5217\u3067\u5b9f\u884c\u3057\u306a\u3044\u9650\u308a\u57fa\u672c\u7684\u306b\u885d\u7a81\u3057\u305f\u308a\u3059\u308b\u3053\u3068\u306f\u3042\u308a\u307e\u305b\u3093\u3002"),(0,o.yg)("p",null,"\u306a\u304a\u3001 docker \u306e\u4ed5\u69d8\u3067\u306f\u540c\u3058\u540d\u524d\u306e network \u3092\u4f5c\u6210\u3067\u304d\u308b\u3088\u3046\u3067\u3059\u3002"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"https://github.com/moby/moby/issues/20648"},"https://github.com/moby/moby/issues/20648")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"https://github.com/moby/moby/issues/18864"},"https://github.com/moby/moby/issues/18864"))),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"drone exec")," \u306f ",(0,o.yg)("inlineCode",{parentName:"p"},"{prefix}_default")," \u3068\u3044\u3046\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u3092\u4f5c\u6210\u3057\u307e\u3059\u3002"),(0,o.yg)("p",null,(0,o.yg)("a",{parentName:"p",href:"https://github.com/cncd/pipeline/blob/b03959913369b4e2a6c49be514f52d076ef6b172/pipeline/frontend/yaml/compiler/compiler.go#L85"},"https://github.com/cncd/pipeline/blob/b03959913369b4e2a6c49be514f52d076ef6b172/pipeline/frontend/yaml/compiler/compiler.go#L85")),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"{prefix}")," \u306f\u30c7\u30d5\u30a9\u30eb\u30c8\u3067 ",(0,o.yg)("inlineCode",{parentName:"p"},"drone")," \u3067\u3059\u304c\u3001\u30b3\u30de\u30f3\u30c9\u30e9\u30a4\u30f3\u5f15\u6570\u3067\u6307\u5b9a\u3067\u304d\u307e\u3059\u3002"),(0,o.yg)("p",null,(0,o.yg)("a",{parentName:"p",href:"https://github.com/drone/drone-cli/blob/800d6949bd96847b4d5c400e261b18386ea2226f/drone/exec/exec.go#L62"},"https://github.com/drone/drone-cli/blob/800d6949bd96847b4d5c400e261b18386ea2226f/drone/exec/exec.go#L62")),(0,o.yg)("p",null,"\u3053\u306eprefix\u3092\u5909\u3048\u308c\u3070\u885d\u7a81\u306f\u56de\u907f\u3067\u304d\u307e\u3059\u3002\nbash, zsh\u306a\u3089\u6b21\u306e\u3088\u3046\u306b\u4e71\u6570\u3092\u6307\u5b9a\u3059\u308c\u3070\u826f\u3044\u3068\u601d\u3044\u307e\u3059\u3002"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"$ drone exec --local --prefix drone_${RANDOM}\n")),(0,o.yg)("p",null,"\u306a\u304a\u3001 ",(0,o.yg)("inlineCode",{parentName:"p"},"drone exec --help")," \u306e\u4e2d\u306b ",(0,o.yg)("inlineCode",{parentName:"p"},"--prefix")," \u30aa\u30d7\u30b7\u30e7\u30f3\u306f\u3042\u308a\u307e\u305b\u3093\u304c\u3001\u3053\u308c\u306f\u660e\u793a\u7684\u306bhelp\u304b\u3089\u6d88\u3057\u3066\u3044\u308b\u304b\u3089\u3067\u3059\u3002"),(0,o.yg)("p",null,(0,o.yg)("a",{parentName:"p",href:"https://github.com/drone/drone-cli/blob/eca37514c1c3a441dbb0618531b91e05f56067e8/drone/exec/exec.go#L65"},"https://github.com/drone/drone-cli/blob/eca37514c1c3a441dbb0618531b91e05f56067e8/drone/exec/exec.go#L65")),(0,o.yg)("p",null,"\u306a\u305c\u6d88\u3057\u3066\u3044\u308b\u304b\u306f\u5206\u304b\u308a\u307e\u305b\u3093\u3002"),(0,o.yg)("p",null,"\u306a\u304a\u3001 drone \u306e build \u3067\u306f prefix \u306b \u30d7\u30ed\u30bb\u30b9ID\u3068\u4e71\u6570\u3092\u4f7f\u3046\u3053\u3068\u3067\u885d\u7a81\u3092\u907f\u3051\u3066\u3044\u308b\u3088\u3046\u3067\u3059\u3002"),(0,o.yg)("p",null,(0,o.yg)("a",{parentName:"p",href:"https://github.com/drone/drone/blob/29785b86f6534ded974120de0fcf7c21397a9d0d/server/hook.go#L552"},"https://github.com/drone/drone/blob/29785b86f6534ded974120de0fcf7c21397a9d0d/server/hook.go#L552")))}u.isMDXComponent=!0}}]);