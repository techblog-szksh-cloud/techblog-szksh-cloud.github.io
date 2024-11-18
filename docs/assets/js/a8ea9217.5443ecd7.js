"use strict";(self.webpackChunktechblog_szksh_cloud_github_io=self.webpackChunktechblog_szksh_cloud_github_io||[]).push([[6883],{5680:(e,n,l)=>{l.d(n,{xA:()=>u,yg:()=>g});var t=l(6540);function r(e,n,l){return n in e?Object.defineProperty(e,n,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[n]=l,e}function o(e,n){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),l.push.apply(l,t)}return l}function a(e){for(var n=1;n<arguments.length;n++){var l=null!=arguments[n]?arguments[n]:{};n%2?o(Object(l),!0).forEach((function(n){r(e,n,l[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):o(Object(l)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(l,n))}))}return e}function i(e,n){if(null==e)return{};var l,t,r=function(e,n){if(null==e)return{};var l,t,r={},o=Object.keys(e);for(t=0;t<o.length;t++)l=o[t],n.indexOf(l)>=0||(r[l]=e[l]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)l=o[t],n.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(r[l]=e[l])}return r}var s=t.createContext({}),p=function(e){var n=t.useContext(s),l=n;return e&&(l="function"==typeof e?e(n):a(a({},n),e)),l},u=function(e){var n=p(e.components);return t.createElement(s.Provider,{value:n},e.children)},m="mdxType",y={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},c=t.forwardRef((function(e,n){var l=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=p(l),c=r,g=m["".concat(s,".").concat(c)]||m[c]||y[c]||o;return l?t.createElement(g,a(a({ref:n},u),{},{components:l})):t.createElement(g,a({ref:n},u))}));function g(e,n){var l=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=l.length,a=new Array(o);a[0]=c;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i[m]="string"==typeof e?e:r,a[1]=i;for(var p=2;p<o;p++)a[p]=l[p];return t.createElement.apply(null,a)}return t.createElement.apply(null,l)}c.displayName="MDXCreateElement"},4091:(e,n,l)=>{l.r(n),l.d(n,{assets:()=>s,contentTitle:()=>a,default:()=>y,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var t=l(8168),r=(l(6540),l(5680));const o={title:"molecule \u3067ansible \u306e role \u3068 playbook \u3092\u30c6\u30b9\u30c8\u3059\u308b",date:new Date("2018-12-06T14:08:04.000Z"),authors:["suzuki-shunsuke"],tags:["ansible","molecule"]},a=void 0,i={permalink:"/ansible-molecule",source:"@site/blog/ansible-molecule.md",title:"molecule \u3067ansible \u306e role \u3068 playbook \u3092\u30c6\u30b9\u30c8\u3059\u308b",description:"ansible \u5c02\u7528\u306e testing \u30c4\u30fc\u30eb molecule \u3092\u7d39\u4ecb\u3057\u307e\u3059\u3002",date:"2018-12-06T14:08:04.000Z",formattedDate:"December 6, 2018",tags:[{label:"ansible",permalink:"/tags/ansible"},{label:"molecule",permalink:"/tags/molecule"}],readingTime:5.41,hasTruncateMarker:!1,authors:[{name:"Shunsuke Suzuki",title:"Platform Engineer / OSS Developer / Go / Terraform",url:"https://github.com/suzuki-shunsuke",imageURL:"https://github.com/suzuki-shunsuke.png",key:"suzuki-shunsuke"}],frontMatter:{title:"molecule \u3067ansible \u306e role \u3068 playbook \u3092\u30c6\u30b9\u30c8\u3059\u308b",date:"2018-12-06T14:08:04.000Z",authors:["suzuki-shunsuke"],tags:["ansible","molecule"]},prevItem:{title:"Graylog \u306e Terraform \u3092 CI/CD\u3067\u5b9f\u884c\u3059\u308b",permalink:"/graylog-terraform-ci"},nextItem:{title:"Graylog\u3092Terraform\u3067\u7ba1\u7406\u3059\u308b",permalink:"/graylog-terraform"}},s={authorsImageUrls:[void 0]},p=[{value:"\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb",id:"\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb",level:2},{value:"role \u306e\u30c6\u30b9\u30c8",id:"role-\u306e\u30c6\u30b9\u30c8",level:2},{value:"playbook \u306e\u30c6\u30b9\u30c8",id:"playbook-\u306e\u30c6\u30b9\u30c8",level:2}],u={toc:p},m="wrapper";function y(e){let{components:n,...l}=e;return(0,r.yg)(m,(0,t.A)({},u,l,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"ansible \u5c02\u7528\u306e testing \u30c4\u30fc\u30eb ",(0,r.yg)("a",{parentName:"p",href:"https://molecule.readthedocs.io/en/latest/index.html"},"molecule")," \u3092\u7d39\u4ecb\u3057\u307e\u3059\u3002\nmolecule \u306e\u516c\u5f0f\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u4ee5\u5916\u306e\u60c5\u5831\u306f\u5c11\u306a\u3044\u306e\u3067\u3001\u53c2\u8003\u306b\u306a\u308c\u3070\u5e78\u3044\u3067\u3059\u3002"),(0,r.yg)("p",null,"\u4ee5\u524d Docker \u3092\u4f7f\u3063\u3066 ansible \u306e\u30c6\u30b9\u30c8\u3092\u3059\u308b\u65b9\u6cd5\u3092\u7d39\u4ecb\u3057\u307e\u3057\u305f\u3002"),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"https://suzuki-shunsuke.github.io/test-ansible-on-docker/"},"https://suzuki-shunsuke.github.io/test-ansible-on-docker/")),(0,r.yg)("p",null,"\u3053\u306e\u969b\u306f Docker Compose \u3068\u7c21\u5358\u306a\u30b7\u30a7\u30eb\u30b9\u30af\u30ea\u30d7\u30c8\u3092\u4f7f\u3063\u3066\u5b9f\u73fe\u3057\u307e\u3057\u305f\u3002\n\u3053\u308c\u306f\u3053\u308c\u3067\u30d6\u30e9\u30c3\u30af\u30dc\u30c3\u30af\u30b9\u306a\u90e8\u5206\u304c\u306a\u304f\u3001\u5b66\u7fd2\u30b3\u30b9\u30c8\u3082\u4f4e\u304f\u3066\u60aa\u304f\u306a\u3044\u306e\u3067\u8208\u5473\u306e\u3042\u308b\u65b9\u306f\u305d\u3061\u3089\u3082\u3054\u53c2\u7167\u304f\u3060\u3055\u3044\u3002"),(0,r.yg)("p",null,"molecule \u306f ansible \u5c02\u7528\u306e testing \u30c4\u30fc\u30eb\u3067\u3059\u3002\n\u57fa\u672c\u7684\u306b playbook \u3068\u3044\u3046\u3088\u308a role \u7528\u306e\u30c4\u30fc\u30eb\u3067\u3059\u304c\u3001playbook\u306e\u30c6\u30b9\u30c8\u3082\u5de5\u592b\u3059\u308c\u3070\u51fa\u6765\u307e\u3059\u3002"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"\u60c5\u5831\u304c\u5c11\u306a\u3044"),(0,r.yg)("li",{parentName:"ul"},"\u516c\u5f0f\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u3082\u5206\u304b\u308a\u3065\u3089\u3044\u90e8\u5206\u304c\u3042\u308b"),(0,r.yg)("li",{parentName:"ul"},"\u30b3\u30de\u30f3\u30c9\u304c\u30a8\u30e9\u30fc\u5410\u3044\u3066\u5931\u6557\u3057\u305f\u969b\u306b\u3001\u30b0\u30b0\u3063\u3066\u3082\u60c5\u5831\u304c\u51fa\u3066\u3053\u306a\u3044\u306e\u3067\u8f9b\u3044")),(0,r.yg)("p",null,"\u3068\u3044\u3046\u98a8\u306b\u8f9b\u3044\u90e8\u5206\u3082\u3042\u308a\u307e\u3059\u304c\u3001"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"star\u6570\u306f\u305d\u308c\u306a\u308a\u306b\u3042\u308b"),(0,r.yg)("li",{parentName:"ul"},"ansible \u306e\u516c\u5f0f\u306e\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3067\u3042\u308b ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/ansible/molecule/"},"https://github.com/ansible/molecule/")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://github.com/geerlingguy"},"geerlingguy")," \u3055\u3093\u3082\u4f7f\u3063\u3066\u308b")),(0,r.yg)("p",null,"\u3068\u3044\u3046\u98a8\u306b\u826f\u3044\u9762\u3082\u3042\u308a\u307e\u3059\u3002"),(0,r.yg)("p",null,"\u305d\u308c\u3067\u306f\u4f7f\u3063\u3066\u3044\u304d\u307e\u3057\u3087\u3046\u3002"),(0,r.yg)("h2",{id:"\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb"},"\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb"),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"https://molecule.readthedocs.io/en/latest/installation.html"},"https://molecule.readthedocs.io/en/latest/installation.html")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"$ pip install molecule\n")),(0,r.yg)("p",null,"Docker \u3092\u4f7f\u3046\u5834\u5408 ",(0,r.yg)("inlineCode",{parentName:"p"},"docker-py")," \u3082\u5fc5\u8981\u3067\u3059\u3002"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"$ pip install docker-py\n")),(0,r.yg)("h2",{id:"role-\u306e\u30c6\u30b9\u30c8"},"role \u306e\u30c6\u30b9\u30c8"),(0,r.yg)("p",null,"playbook\u306b\u6bd4\u3079\u3066 role \u306e\u30c6\u30b9\u30c8\u306f\u7c21\u5358\u3067\u3059\u3002"),(0,r.yg)("p",null,"role \u306e\u30c7\u30a3\u30ec\u30af\u30c8\u30ea(tasks\u3084files\u306a\u3069\u304c\u3042\u308b\u30c7\u30a3\u30ec\u30af\u30c8\u30ea)\u306b\u79fb\u52d5\u3057\u3066\u30b3\u30de\u30f3\u30c9\u3092\u5b9f\u884c\u3057\u307e\u3059\u3002"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"$ molecule init scenario -r <role name>\n")),(0,r.yg)("p",null,"\u3053\u3046\u3059\u308b\u3068 ",(0,r.yg)("inlineCode",{parentName:"p"},"molecule")," \u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u304c\u751f\u6210\u3055\u308c\u307e\u3059\u3002"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"molecule/default/molecule.yml")," \u3092\u4fee\u6b63\u3057\u307e\u3059\u3002"),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"https://molecule.readthedocs.io/en/latest/configuration.html"},"https://molecule.readthedocs.io/en/latest/configuration.html")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-yaml"},"---\ndependency:\n  name: galaxy\n  # \u4f9d\u5b58\u3059\u308b role \u304c\u3042\u308b\u5834\u5408\n  options:\n    role-file: roles.yml\ndriver:\n  name: docker\nlint:\n  name: yamllint\n# https://molecule.readthedocs.io/en/latest/configuration.html#platforms\nplatforms:\n  - name: server  # \u30b3\u30f3\u30c6\u30ca\u306e\u540d\u524d\u306b\u306a\u308b\n    # \u5fc5\u8981\u306b\u5fdc\u3058\u3066 image \u3092\u5909\u66f4\n    # \u4eca\u56de\u306f ansible\u306eremote user \u3092\u975eroot\u306b\u3059\u308b\u305f\u3081\u306b\u81ea\u4f5c\u306e Docker Image \u3092\u6307\u5b9a\n    # https://hub.docker.com/r/suzukishunsuke/ansible-test-centos/\n    image: suzukishunsuke/ansible-test-centos:0.1.0\n    # systemd \u3092\u4f7f\u3063\u305f\u308a\u3059\u308b\u5834\u5408\n    # https://molecule.readthedocs.io/en/latest/examples.html#systemd-container\n    privileged: true\n    command: /sbin/init  # systemd \u3092\u4f7f\u3046\u5834\u5408\u5fc5\u8981\n    env:\n      USER: foo # Docker\u3060\u3068USER\u74b0\u5883\u5909\u6570\u304c\u7a7a\u306b\u306a\u3063\u3066\u3057\u307e\u3046\u3088\u3046\u306a\u306e\u3067\u660e\u793a\u7684\u306b\u8a2d\u5b9a\nprovisioner:\n  # https://molecule.readthedocs.io/en/latest/configuration.html#id12\n  name: ansible\n  lint:\n    name: ansible-lint\n  options:\n    user: foo # \u975eroot\u30e6\u30fc\u30b6\u30fc\u3067\u5b9f\u884c\n  inventory:\n    group_vars:\n      # variables \u3092\u6307\u5b9a\n      all:\n        nginx_server_name: localhost\n        mysql_host: localhost\n        mysql_port: 3306\n        mysql_database: grafana\n        mysql_user: root\n        mysql_password: password\nscenario:\n  name: default\nverifier:\n  name: testinfra\n  lint:\n    name: flake8\n")),(0,r.yg)("p",null,"test \u306e\u524d\u306b\u307e\u305a\u306f lint \u3057\u307e\u3059\u3002"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"$ molecule lint [-s <senario name>]\n")),(0,r.yg)("p",null,"\u3059\u308b\u3068 yamllint \u306e\u8a2d\u5b9a\u30d5\u30a1\u30a4\u30eb ",(0,r.yg)("inlineCode",{parentName:"p"},".yamllint")," \u304c\u4f5c\u3089\u308c\u3066\u3044\u308b\u3068\u601d\u3046\u306e\u3067\u3001\u5fc5\u8981\u306b\u5fdc\u3058\u3066\u4fee\u6b63\u3057\u307e\u3059\u3002"),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"https://yamllint.readthedocs.io/en/stable/configuration.html"},"https://yamllint.readthedocs.io/en/stable/configuration.html")),(0,r.yg)("p",null,"ansible-lint \u3067\u5f15\u3063\u304b\u304b\u3063\u305f\u4eba\u306f\u3053\u3061\u3089\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"https://github.com/ansible/ansible-lint"},"https://github.com/ansible/ansible-lint")),(0,r.yg)("p",null,"\u305d\u3057\u3066 test \u30b3\u30de\u30f3\u30c9\u3092\u5b9f\u884c\u3057\u307e\u3059\u3002"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"$ molecule test [-s <senario name>]\n")),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"test")," \u30b3\u30de\u30f3\u30c9\u3067\u306f\u30b3\u30f3\u30c6\u30ca\u304c\u524a\u9664\u3055\u308c\u308b\u305f\u3081\u3001\u30c7\u30d0\u30c3\u30b0\u304c\u96e3\u3057\u304b\u3063\u305f\u308a\u3057\u307e\u3059\u3002"),(0,r.yg)("p",null,"\u305d\u306e\u5834\u5408\u3001 ",(0,r.yg)("inlineCode",{parentName:"p"},"converge")," \u30b3\u30de\u30f3\u30c9\u3092\u5b9f\u884c\u3059\u308c\u3070\u30b3\u30f3\u30c6\u30ca\u306f\u6d88\u3048\u307e\u305b\u3093\u3002"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"$ molecule converge [-s <senario name>]\n")),(0,r.yg)("p",null,"\u6d88\u3057\u305f\u304f\u306a\u3063\u305f\u3089 destroy \u30b3\u30de\u30f3\u30c9\u3067\u6d88\u3057\u307e\u3057\u3087\u3046\u3002"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"$ molecule destroy [-s <senario name>]\n")),(0,r.yg)("h2",{id:"playbook-\u306e\u30c6\u30b9\u30c8"},"playbook \u306e\u30c6\u30b9\u30c8"),(0,r.yg)("p",null,"\u6b21\u306b playbook \u306e\u30c6\u30b9\u30c8\u3067\u3059\u3002\u5272\u3068\u3053\u308c\u304c\u672c\u984c\u3060\u3063\u305f\u308a\u3057\u307e\u3059\u3002\nmolecule \u306f\u57fa\u672c\u7684\u306b playbook \u3068\u3044\u3046\u3088\u308a role \u7528\u306e\u30c4\u30fc\u30eb\u306a\u306e\u3067\u82e5\u5e72\u5de5\u592b\u304c\u5fc5\u8981\u3067\u3059\u3002"),(0,r.yg)("p",null,"\u81ea\u5206\u306f\u3088\u304f ansible playbook \u306e\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u69cb\u6210\u3092\u4ee5\u4e0b\u306e\u3088\u3046\u306b\u3057\u307e\u3059\u3002"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"hello-molecule/  # \u30eb\u30fc\u30c8\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\n  agent.yml # agent \u30b0\u30eb\u30fc\u30d7\u7528\u306e playbook\n  group_vars/\n    all.yml  # \u5171\u901a\u306evariables\n    agent.yml  # agent \u30b0\u30eb\u30fc\u30d7\u7528\u306e variables\n  roles/  # role\n  inventories/\n    prod.yml # production\u7528\u306einventory\n  roles.yml  # \u4f9d\u5b58\u3059\u308b role \u306e\u30ea\u30b9\u30c8\n  ansible.cfg\n")),(0,r.yg)("p",null,"\u3053\u306e\u3068\u304d\u306b playbook ",(0,r.yg)("inlineCode",{parentName:"p"},"agent.yml")," \u306e\u30c6\u30b9\u30c8\u304c\u3057\u305f\u3044\u3068\u3057\u307e\u3059\u3002\nmolecule \u306e\u305f\u3081\u306b\u3053\u306e\u69cb\u6210\u3092\u5f04\u3063\u305f\u308a\u306f\u6975\u529b\u3057\u305f\u304f\u3042\u308a\u307e\u305b\u3093\u3002"),(0,r.yg)("p",null,"playbook \u306e\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u3067 ",(0,r.yg)("inlineCode",{parentName:"p"},"molecule init")," \u3092\u5b9f\u884c\u3057\u307e\u3059\u3002\ndefault \u30b7\u30ca\u30ea\u30aa\u306f\u5fc5\u9808\u306e\u3088\u3046\u3067\u3059\u3002"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"$ molecule init scenario -r hello-molecule\n$ molecule init scenario -s agent -r hello-molecule\n")),(0,r.yg)("p",null,"\u3059\u308b\u3068\u3053\u3046\u306a\u308a\u307e\u3059\u3002"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"hello-molecule/\n  agent.yml\n  group_vars/\n    all.yml\n    agent.yml\n  roles/\n  inventories/\n    prod.yml\n  roles.yml\n  ansible.cfg\n  molecule/\n    default/\n    agent/\n      molecule.yml\n      playbook.yml # \u3053\u308c\u306f\u4f7f\u308f\u306a\u3044\u3002\u6d88\u3059\n")),(0,r.yg)("p",null,"\u3053\u3053\u304b\u3089 molecule.yml \u3092\u4fee\u6b63\u3057\u3066\u3044\u304d\u307e\u3059\u3002\n\u4e00\u90e8\u629c\u7c8b\u3057\u307e\u3059\u3002"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-yaml"},"---\ndependency:\n  name: galaxy\n  options:\n    role-file: roles.yml # \u30eb\u30fc\u30c8\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u304b\u3089\u306e\u76f8\u5bfe\u30d1\u30b9\nplatforms:\n  - name: server  # group\u540d\n    image: centos:7\nprovisioner:\n  name: ansible\n  playbooks:\n    converge: ../../server.yml # \u30eb\u30fc\u30c8\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u306b\u3042\u308b playbook\u3092\u6307\u5b9a\n  env:\n    ANSIBLE_ROLES_PATH: ../../roles:../../_roles  # role\u306e\u30d1\u30b9\u3092\u4fee\u6b63\nscenario:\n  name: server\n")),(0,r.yg)("p",null,"\u3053\u306e\u3088\u3046\u306b playbook\u3084 role \u306e\u30d1\u30b9\u3092\u4fee\u6b63\u3059\u308c\u3070\u3042\u3068\u306f role \u306e\u30c6\u30b9\u30c8\u3068\u540c\u3058\u8981\u9818\u3067\u3044\u3051\u308b\u3068\u601d\u3044\u307e\u3059\u3002"),(0,r.yg)("p",null,"\u4ee5\u4e0a\u3001\u7c21\u5358\u3067\u3059\u304c molecule \u306e\u4f7f\u3044\u65b9\u3092\u7d39\u4ecb\u3057\u307e\u3057\u305f\u3002"))}y.isMDXComponent=!0}}]);