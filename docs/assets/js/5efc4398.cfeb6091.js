"use strict";(self.webpackChunktechblog_szksh_cloud_github_io=self.webpackChunktechblog_szksh_cloud_github_io||[]).push([[5091],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),k=c(n),m=o,b=k["".concat(s,".").concat(m)]||k[m]||p[m]||a;return n?r.createElement(b,l(l({ref:t},u),{},{components:n})):r.createElement(b,l({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=k;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var c=2;c<a;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},3029:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return p}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),l=["components"],i={title:"Docker\u3092\u4f7f\u3063\u3066ansible playbook\u3092\u30c6\u30b9\u30c8\u3059\u308b",date:new Date("2018-10-12T12:02:51.000Z"),draft:!1,tags:["ansible"],archives:["2018/10"],authors:["suzuki-shunsuke"]},s=void 0,c={permalink:"/test-ansible-on-docker",source:"@site/blog/test-ansible-on-docker.md",title:"Docker\u3092\u4f7f\u3063\u3066ansible playbook\u3092\u30c6\u30b9\u30c8\u3059\u308b",description:"ansible playbook\u3092(VM\u306e\u4ee3\u308f\u308a\u306b)Docker\u30b3\u30f3\u30c6\u30ca\u306b\u5bfe\u3057\u3066\u5b9f\u884c\u3059\u308b\u3068\u3001\u52b9\u7387\u3088\u304f\u52d5\u4f5c\u78ba\u8a8d\u3067\u304d\u308b\u3068\u3044\u3046\u304a\u8a71\u3067\u3059\u3002",date:"2018-10-12T12:02:51.000Z",formattedDate:"October 12, 2018",tags:[{label:"ansible",permalink:"/tags/ansible"}],readingTime:2.77,truncated:!1,authors:[{name:"Shunsuke Suzuki",title:"SRE / OSS Contributor / Tool Maker / Go / Terraform",url:"https://github.com/suzuki-shunsuke",imageURL:"https://github.com/suzuki-shunsuke.png",key:"suzuki-shunsuke"}],frontMatter:{title:"Docker\u3092\u4f7f\u3063\u3066ansible playbook\u3092\u30c6\u30b9\u30c8\u3059\u308b",date:"2018-10-12T12:02:51.000Z",draft:!1,tags:["ansible"],archives:["2018/10"],authors:["suzuki-shunsuke"]},prevItem:{title:"gomic - Go\u306e\u30e2\u30c3\u30af\u30b8\u30a7\u30cd\u30ec\u30fc\u30bf",permalink:"/gomic"},nextItem:{title:"Project site \u3092 User site \u306b\u79fb\u884c\u3057\u307e\u3057\u305f (GitHub Pages)",permalink:"/migrate-to-user-gh-pages"}},u={authorsImageUrls:[void 0]},p=[{value:"\u30b5\u30f3\u30d7\u30eb",id:"\u30b5\u30f3\u30d7\u30eb",level:2},{value:"\u8aac\u660e",id:"\u8aac\u660e",level:2},{value:"\u95a2\u4fc2\u3042\u308a\u305d\u3046\u306a\u30c4\u30fc\u30eb",id:"\u95a2\u4fc2\u3042\u308a\u305d\u3046\u306a\u30c4\u30fc\u30eb",level:2},{value:"Vagrant Docker Provider",id:"vagrant-docker-provider",level:3},{value:"Ansible Container",id:"ansible-container",level:3},{value:"Packer",id:"packer",level:3}],k={toc:p};function m(e){var t=e.components,n=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"ansible playbook\u3092(VM\u306e\u4ee3\u308f\u308a\u306b)Docker\u30b3\u30f3\u30c6\u30ca\u306b\u5bfe\u3057\u3066\u5b9f\u884c\u3059\u308b\u3068\u3001\u52b9\u7387\u3088\u304f\u52d5\u4f5c\u78ba\u8a8d\u3067\u304d\u308b\u3068\u3044\u3046\u304a\u8a71\u3067\u3059\u3002\nansible playbook\u306e\u52d5\u4f5c\u78ba\u8a8d\u306e\u305f\u3081\u306bvagrant\u3067VM\u3092\u8d77\u52d5\u3057\u305f\u308a\u3057\u3066\u3044\u308b\u3068\u52d5\u4f5c\u78ba\u8a8d\u306b\u6642\u9593\u304c\u304b\u304b\u308b\u3057\u3001\u5bb9\u91cf\u3082\u55b0\u3044\u307e\u3059\u3002\nDocker\u30b3\u30f3\u30c6\u30ca\u3092\u4f7f\u3063\u3066\u52d5\u4f5c\u78ba\u8a8d\u3067\u304d\u308c\u3070\u3053\u308c\u3089\u306e\u554f\u984c\u3092\u89e3\u6c7a\u3067\u304d\u307e\u3059\u3002"),(0,a.kt)("p",null,"\u305f\u3060\u3057\u3001Docker\u30b3\u30f3\u30c6\u30ca\u306e\u5834\u5408\u3001\u4e00\u90e8\u306eansible \u306etask\u304c\u5931\u6557\u3059\u308b\u3053\u3068\u304c\u3042\u308b\u306e\u3067\nansible playbook\u306b\u3088\u3063\u3066\u306fDocker\u30b3\u30f3\u30c6\u30ca\u3067\u306f\u30c6\u30b9\u30c8\u306b\u306a\u3089\u306a\u3044\u5834\u5408\u3082\u3042\u308b\u304b\u3068\u601d\u3044\u307e\u3059\u3002"),(0,a.kt)("h2",{id:"\u30b5\u30f3\u30d7\u30eb"},"\u30b5\u30f3\u30d7\u30eb"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/suzuki-shunsuke/example/tree/master/ansible/test-on-docker"},"https://github.com/suzuki-shunsuke/example/tree/master/ansible/test-on-docker")),(0,a.kt)("p",null,"\u7c21\u5358\u306a\u30b5\u30f3\u30d7\u30eb\u3092\u7528\u610f\u3057\u307e\u3057\u305f\u3002"),(0,a.kt)("p",null,"ansible playbook\u306b\u52a0\u3048\u3001"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"docker-compose.yml"),(0,a.kt)("li",{parentName:"ul"},"test_docker.sh: \u7c21\u5358\u306a\u30b7\u30a7\u30eb\u30b9\u30af\u30ea\u30d7\u30c8")),(0,a.kt)("p",null,"\u3092\u4f5c\u6210\u3057\u3066\u3042\u308a\u307e\u3059\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"$ bash test_docker.sh\n")),(0,a.kt)("p",null,"\u3068\u3059\u308b\u3053\u3068\u3067\u52d5\u4f5c\u78ba\u8a8d\u3067\u304d\u307e\u3059\u3002"),(0,a.kt)("h2",{id:"\u8aac\u660e"},"\u8aac\u660e"),(0,a.kt)("p",null,"\u30b9\u30af\u30ea\u30d7\u30c8\u3067\u3084\u3063\u3066\u3044\u308b\u3053\u3068\u306f"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Docker Compose \u3067\u30b3\u30f3\u30c6\u30ca\u3092\u8d77\u52d5"),(0,a.kt)("li",{parentName:"ol"},"\u30b3\u30f3\u30c6\u30ca\u306eID\u3092\u53d6\u5f97\u3057\u3001inventory \u30d5\u30a1\u30a4\u30eb\u3092\u4f5c\u6210"),(0,a.kt)("li",{parentName:"ol"},"Docker Connection Plugin\u3092\u4f7f\u3063\u3066\u30b3\u30f3\u30c6\u30ca\u306bplaybook\u3092\u5b9f\u884c")),(0,a.kt)("p",null,"\u3067\u3059\u3002"),(0,a.kt)("p",null,"Docker Connection Plugin \u3092\u4f7f\u3046\u3068Docker\u30b3\u30f3\u30c6\u30ca\u306b\u5bfe\u3057\u3066ansible playbook\u3092\u5b9f\u884c\u3067\u304d\u307e\u3059\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.ansible.com/ansible/2.6/plugins/connection.html"},"https://docs.ansible.com/ansible/2.6/plugins/connection.html")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.ansible.com/ansible/2.6/plugins/connection/docker.html"},"https://docs.ansible.com/ansible/2.6/plugins/connection/docker.html"))),(0,a.kt)("p",null,"\u307e\u305f\u3001Docker Hub\u3067\u516c\u958b\u3055\u308c\u3066\u3044\u308b\u591a\u304f\u306eDocker\u30a4\u30e1\u30fc\u30b8\u306eUSER\u306f root \u3067\u3059\u304c\u3001\nansible playbook\u306e\u52d5\u4f5c\u78ba\u8a8d\u3068\u3057\u3066\u306f\u90fd\u5408\u304c\u60aa\u304b\u3063\u305f\u308a\u3057\u307e\u3059\u3002"),(0,a.kt)("p",null,"\u305d\u3053\u3067\u81ea\u5206\u306f\u975eroot\u30e6\u30fc\u30b6\u30fc\u3092\u4f5c\u6210\u3057\u305fDocker Image\u3092\u4f7f\u3063\u3066\u3044\u307e\u3059\u3002"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://hub.docker.com/r/suzukishunsuke/ansible-test-centos/"},"https://hub.docker.com/r/suzukishunsuke/ansible-test-centos/")),(0,a.kt)("h2",{id:"\u95a2\u4fc2\u3042\u308a\u305d\u3046\u306a\u30c4\u30fc\u30eb"},"\u95a2\u4fc2\u3042\u308a\u305d\u3046\u306a\u30c4\u30fc\u30eb"),(0,a.kt)("p",null,"\u4eca\u56de\u306f\u7c21\u5358\u306a\u30b9\u30af\u30ea\u30d7\u30c8\u3068docker-compose.yml\u3092\u7528\u610f\u3057\u307e\u3057\u305f\u304c\u3001\n\u3082\u3063\u3068\u30a4\u30b1\u3066\u308b\u3084\u308a\u65b9\u304c\u3042\u308a\u305d\u3046\u306a\u3082\u306e\u3067\u3059\u3002"),(0,a.kt)("h3",{id:"vagrant-docker-provider"},"Vagrant Docker Provider"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.vagrantup.com/docs/docker/"},"https://www.vagrantup.com/docs/docker/")),(0,a.kt)("p",null,"\u306a\u3093\u304b\u3042\u307e\u308a\u4f7f\u3048\u306a\u3055\u305d\u3046\u3067\u3059\u3002\nLinux\u4ee5\u5916\u3060\u3068\u7d50\u5c40VM\u304c\u5fc5\u8981\u3067\u3001\u65e2\u306b\u975e\u63a8\u5968\u306a boot2docker \u3092\u30c7\u30d5\u30a9\u30eb\u30c8\u3067\u306f\u4f7f\u3046\u3089\u3057\u304f\u3060\u3081\u305d\u3046\u3060\u306a\u3063\u3066\u601d\u3044\u307e\u3057\u305f\u3002\n\u3042\u307e\u308a\u8abf\u3079\u3066\u307e\u305b\u3093\u3002"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.vagrantup.com/docs/docker/basics.html#host-vm"},"https://www.vagrantup.com/docs/docker/basics.html#host-vm")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"By default, the host VM Vagrant spins up is backed by boot2docker, because it launches quickly and uses little resources. ")),(0,a.kt)("h3",{id:"ansible-container"},"Ansible Container"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://docs.ansible.com/ansible-container/"},"https://docs.ansible.com/ansible-container/")),(0,a.kt)("p",null,"\u3088\u304f\u77e5\u308a\u307e\u305b\u3093\u3002\u52d5\u4f5c\u78ba\u8a8d\u3057\u305f\u3044\u3060\u3051\u3060\u3068\u30aa\u30fc\u30d0\u30fc\u30b9\u30da\u30c3\u30af\u306a\u5370\u8c61\u306f\u53d7\u3051\u307e\u3059\u3002"),(0,a.kt)("h3",{id:"packer"},"Packer"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.packer.io/docs/builders/docker.html"},"https://www.packer.io/docs/builders/docker.html")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.packer.io/docs/provisioners/ansible.html"},"https://www.packer.io/docs/provisioners/ansible.html"))),(0,a.kt)("p",null,"\u8a18\u4e8b\u3092\u66f8\u304d\u7d42\u308f\u3063\u3066\u304b\u3089\u305d\u3046\u3044\u3048\u3070 Packer \u304c\u3042\u3063\u305f\u306a\u3068\u601d\u3044\u51fa\u3057\u307e\u3057\u305f\u3002"))}m.isMDXComponent=!0}}]);