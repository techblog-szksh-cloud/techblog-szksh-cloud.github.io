"use strict";(self.webpackChunktechblog_szksh_cloud_github_io=self.webpackChunktechblog_szksh_cloud_github_io||[]).push([[4149],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return h}});var r=n(7294);function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){u(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,u=function(e,t){if(null==e)return{};var n,r,u={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(u[n]=e[n]);return u}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(u[n]=e[n])}return u}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,u=e.mdxType,o=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),g=s(n),h=u,m=g["".concat(c,".").concat(h)]||g[h]||p[h]||o;return n?r.createElement(m,a(a({ref:t},l),{},{components:n})):r.createElement(m,a({ref:t},l))}));function h(e,t){var n=arguments,u=t&&t.mdxType;if("string"==typeof e||u){var o=n.length,a=new Array(o);a[0]=g;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:u,a[1]=i;for(var s=2;s<o;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},4632:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return c},default:function(){return h},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return p}});var r=n(7462),u=n(3366),o=(n(7294),n(3905)),a=["components"],i={title:"Hugo\u88fd\u30d6\u30ed\u30b0\u3092GitHub Pages\u3078CI\u3067\u30c7\u30d7\u30ed\u30a4",date:new Date("2018-09-30T23:04:16.000Z"),tags:["hugo"],authors:["suzuki-shunsuke"]},c=void 0,s={permalink:"/how-to-host-hugo-at-github-pages",source:"@site/blog/how-to-host-hugo-at-github-pages.md",title:"Hugo\u88fd\u30d6\u30ed\u30b0\u3092GitHub Pages\u3078CI\u3067\u30c7\u30d7\u30ed\u30a4",description:"https//pages.github.com/ \u306e\u8a71\u3067\u3059\u3002",date:"2018-09-30T23:04:16.000Z",formattedDate:"September 30, 2018",tags:[{label:"hugo",permalink:"/tags/hugo"}],readingTime:1.365,truncated:!1,authors:[{name:"Shunsuke Suzuki",title:"SRE / OSS Contributor / Tool Maker / Go / Terraform",url:"https://github.com/suzuki-shunsuke",imageURL:"https://github.com/suzuki-shunsuke.png",key:"suzuki-shunsuke"}],frontMatter:{title:"Hugo\u88fd\u30d6\u30ed\u30b0\u3092GitHub Pages\u3078CI\u3067\u30c7\u30d7\u30ed\u30a4",date:"2018-09-30T23:04:16.000Z",tags:["hugo"],authors:["suzuki-shunsuke"]},prevItem:{title:"Project site \u3092 User site \u306b\u79fb\u884c\u3057\u307e\u3057\u305f (GitHub Pages)",permalink:"/migrate-to-user-gh-pages"},nextItem:{title:"travis ci \u304b\u3089 circle ci \u3078\u306e\u79fb\u884c\u306e\u3059\u3059\u3081",permalink:"/migrate-from-travis-ci-to-circle-ci"}},l={authorsImageUrls:[void 0]},p=[{value:"\u524d\u63d0",id:"\u524d\u63d0",level:2},{value:"\u30b3\u30fc\u30c9",id:"\u30b3\u30fc\u30c9",level:2}],g={toc:p};function h(e){var t=e.components,n=(0,u.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://gohugo.io/"},"https://gohugo.io/")," \u3068 ",(0,o.kt)("a",{parentName:"p",href:"https://pages.github.com/"},"https://pages.github.com/")," \u306e\u8a71\u3067\u3059\u3002\nmaster \u306b push \u3057\u305f\u3089 GitHub Pages \u306b circle ci\u3067\u30c7\u30d7\u30ed\u30a4\u3059\u308b\u3088\u3046\u306b\u3059\u308b\u65b9\u6cd5\u306e\u7d39\u4ecb\u3067\u3059\u3002"),(0,o.kt)("h2",{id:"\u524d\u63d0"},"\u524d\u63d0"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u30c6\u30fc\u30de\u306f master branch \u306b\u542b\u3081\u306a\u3044(CI\u3067clone\u3059\u308b)"),(0,o.kt)("li",{parentName:"ul"},"build\u3057\u305f\u3082\u306e\u306f gh-pages \u30d6\u30e9\u30f3\u30c1\u306b\u30c7\u30d7\u30ed\u30a4")),(0,o.kt)("h2",{id:"\u30b3\u30fc\u30c9"},"\u30b3\u30fc\u30c9"),(0,o.kt)("p",null,".circleci/config.yml"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'---\nversion: 2\njobs:\n  build:\n    docker:\n    - image: suzukishunsuke/hugo-ci:0.1.2\n    steps:\n    - checkout\n    - run: git config user.name "***"\n    - run: git config user.email "***@example.com"\n    # --depth 1 \u3067\u9ad8\u901f\u5316\n    - run: git clone --depth 1 https://github.com/suzuki-shunsuke/tale-hugo themes/tale\n    - run: hugo\n    - run: sh release.sh\nworkflows:\n  version: 2\n  build:\n    jobs:\n    - build:\n        filters:\n          branches:\n            only: master\n')),(0,o.kt)("p",null,"release.sh"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'git checkout gh-pages\nmv .git .circleci public\ncd public\n\n# \u751f\u6210\u7269\u306b\u5dee\u5206\u304c\u3042\u3063\u305f\u3068\u304d\u306e\u307f\u30c7\u30d7\u30ed\u30a4\ngit status --porcelain\nif [ -n "`git status --porcelain`" ]; then\n  git add .\n  git commit -m "update"\n  git push origin gh-pages\nfi\n')),(0,o.kt)("p",null,"hugo \u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3057\u305f Docker Image \u3092\u7528\u610f\u3057\u3066\u304a\u304d\u307e\u3059\u3002"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://hub.docker.com/r/suzukishunsuke/hugo-ci/"},"https://hub.docker.com/r/suzukishunsuke/hugo-ci/")),(0,o.kt)("p",null,"\u30d3\u30eb\u30c9\u3057\u305f\u3082\u306e\u3092 gh-pages \u30d6\u30e9\u30f3\u30c1\u306b\u30c7\u30d7\u30ed\u30a4\u3059\u308b\u65b9\u6cd5\u3092\u5de5\u592b\u3057\u3066\u3044\u3066\u3001\n",(0,o.kt)("inlineCode",{parentName:"p"},".git")," \u3092 ",(0,o.kt)("inlineCode",{parentName:"p"},"public")," \u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u306b\u79fb\u52d5\u3057\u3066\u3044\u307e\u3059\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"git checkout gh-pages\nmv .git .circleci public\ncd public\n")),(0,o.kt)("p",null,"\u3042\u3068\u3001\u30d3\u30eb\u30c9\u3055\u308c\u305f\u3082\u306e\u306b\u5dee\u5206\u304c\u3042\u3063\u305f\u3068\u304d\u306e\u307f\u30c7\u30d7\u30ed\u30a4\u3059\u308b\u3088\u3046\u306b\u3057\u3066\u3044\u307e\u3059\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'if [ -n "`git status --porcelain`" ]; then\n')))}h.isMDXComponent=!0}}]);