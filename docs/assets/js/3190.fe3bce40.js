"use strict";(self.webpackChunktechblog_szksh_cloud_github_io=self.webpackChunktechblog_szksh_cloud_github_io||[]).push([[3190],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>g});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),s=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=s(e.components);return a.createElement(i.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),p=s(n),d=r,g=p["".concat(i,".").concat(d)]||p[d]||u[d]||l;return n?a.createElement(g,o(o({ref:t},m),{},{components:n})):a.createElement(g,o({ref:t},m))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=d;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[p]="string"==typeof e?e:r,o[1]=c;for(var s=2;s<l;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8665:(e,t,n)=>{n.d(t,{Z:()=>h});var a=n(7294),r=n(6010),l=n(7014),o=n(9960);const c="sidebar_a9qW",i="sidebarItemTitle_uKok",s="sidebarItemList_Kvuv",m="sidebarItem_CF0Q",p="sidebarItemLink_miNk",u="sidebarItemLinkActive_RRTD";var d=n(5999);function g(e){let{sidebar:t}=e;return 0===t.items.length?null:a.createElement("nav",{className:(0,r.Z)(c,"thin-scrollbar"),"aria-label":(0,d.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},a.createElement("div",{className:(0,r.Z)(i,"margin-bottom--md")},t.title),a.createElement("ul",{className:s},t.items.map((e=>a.createElement("li",{key:e.permalink,className:m},a.createElement(o.Z,{isNavLink:!0,to:e.permalink,className:p,activeClassName:u},e.title))))))}function h(e){const{sidebar:t,toc:n,children:o,...c}=e,i=t&&t.items.length>0;return a.createElement(l.Z,c,a.createElement("div",{className:"container margin-vert--lg"},a.createElement("div",{className:"row"},i&&a.createElement("aside",{className:"col col--3"},a.createElement(g,{sidebar:t})),a.createElement("main",{className:(0,r.Z)("col",{"col--7":i,"col--9 col--offset-1":!i}),itemScope:!0,itemType:"http://schema.org/Blog"},o),n&&a.createElement("div",{className:"col col--2"},n))))}},6048:(e,t,n)=>{n.d(t,{Z:()=>te});var a=n(7294),r=n(6010),l=n(3905),o=n(5999),c=n(9960),i=n(4996),s=n(650),m=n(8780),p=n(7462),u=n(5742);const d={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","atrule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]};var g={Prism:n(7410).default,theme:d};function h(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function y(){return y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},y.apply(this,arguments)}var f=/\r\n|\r|\n/,b=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},v=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},E=function(e,t){var n=e.plain,a=Object.create(null),r=e.styles.reduce((function(e,n){var a=n.languages,r=n.style;return a&&!a.includes(t)||n.types.forEach((function(t){var n=y({},e[t],r);e[t]=n})),e}),a);return r.root=n,r.plain=y({},n,{backgroundColor:null}),r};function k(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===t.indexOf(a)&&(n[a]=e[a]);return n}const N=function(e){function t(){for(var t=this,n=[],a=arguments.length;a--;)n[a]=arguments[a];e.apply(this,n),h(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?E(e.theme,e.language):void 0;return t.themeDict=n})),h(this,"getLineProps",(function(e){var n=e.key,a=e.className,r=e.style,l=y({},k(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),o=t.getThemeDict(t.props);return void 0!==o&&(l.style=o.plain),void 0!==r&&(l.style=void 0!==l.style?y({},l.style,r):r),void 0!==n&&(l.key=n),a&&(l.className+=" "+a),l})),h(this,"getStyleForToken",(function(e){var n=e.types,a=e.empty,r=n.length,l=t.getThemeDict(t.props);if(void 0!==l){if(1===r&&"plain"===n[0])return a?{display:"inline-block"}:void 0;if(1===r&&!a)return l[n[0]];var o=a?{display:"inline-block"}:{},c=n.map((function(e){return l[e]}));return Object.assign.apply(Object,[o].concat(c))}})),h(this,"getTokenProps",(function(e){var n=e.key,a=e.className,r=e.style,l=e.token,o=y({},k(e,["key","className","style","token"]),{className:"token "+l.types.join(" "),children:l.content,style:t.getStyleForToken(l),key:void 0});return void 0!==r&&(o.style=void 0!==o.style?y({},o.style,r):r),void 0!==n&&(o.key=n),a&&(o.className+=" "+a),o})),h(this,"tokenize",(function(e,t,n,a){var r={code:t,grammar:n,language:a,tokens:[]};e.hooks.run("before-tokenize",r);var l=r.tokens=e.tokenize(r.code,r.grammar,r.language);return e.hooks.run("after-tokenize",r),l}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,a=e.code,r=e.children,l=this.getThemeDict(this.props),o=t.languages[n];return r({tokens:function(e){for(var t=[[]],n=[e],a=[0],r=[e.length],l=0,o=0,c=[],i=[c];o>-1;){for(;(l=a[o]++)<r[o];){var s=void 0,m=t[o],p=n[o][l];if("string"==typeof p?(m=o>0?m:["plain"],s=p):(m=v(m,p.type),p.alias&&(m=v(m,p.alias)),s=p.content),"string"==typeof s){var u=s.split(f),d=u.length;c.push({types:m,content:u[0]});for(var g=1;g<d;g++)b(c),i.push(c=[]),c.push({types:m,content:u[g]})}else o++,t.push(m),n.push(s),a.push(0),r.push(s.length)}o--,t.pop(),n.pop(),a.pop(),r.pop()}return b(c),i}(void 0!==o?this.tokenize(t,a,o,n):[a]),className:"prism-code language-"+n,style:void 0!==l?l.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(a.Component);const _="codeBlockContainer_I0IT",Z="codeBlockContent_wNvx",T="codeBlockTitle_BvAR",P="codeBlock_jd64",O="codeBlockStandalone_csWH",w="copyButton_wuS7",C="codeBlockLines_mRuA";function x(e){let{children:t,className:n="",metastring:l,title:c,language:i}=e;const{prism:m}=(0,s.LU)(),[u,d]=(0,a.useState)(!1),[h,y]=(0,a.useState)(!1);(0,a.useEffect)((()=>{y(!0)}),[]);const f=(0,s.bc)(l)||c,b=(0,s.pJ)();if(a.Children.toArray(t).some((e=>(0,a.isValidElement)(e))))return a.createElement(N,(0,p.Z)({},g,{key:String(h),theme:b,code:"",language:"text"}),(e=>{let{className:l,style:o}=e;return a.createElement("pre",{tabIndex:0,className:(0,r.Z)(l,O,"thin-scrollbar",_,n,s.kM.common.codeBlock),style:o},a.createElement("code",{className:C},t))}));const v=Array.isArray(t)?t.join(""):t,E=i??(0,s.Vo)(n)??m.defaultLanguage,{highlightLines:k,code:x}=(0,s.nZ)(v,l,E),j=()=>{!function(e,t){let{target:n=document.body}=void 0===t?{}:t;const a=document.createElement("textarea"),r=document.activeElement;a.value=e,a.setAttribute("readonly",""),a.style.contain="strict",a.style.position="absolute",a.style.left="-9999px",a.style.fontSize="12pt";const l=document.getSelection();let o=!1;l.rangeCount>0&&(o=l.getRangeAt(0)),n.append(a),a.select(),a.selectionStart=0,a.selectionEnd=e.length;let c=!1;try{c=document.execCommand("copy")}catch{}a.remove(),o&&(l.removeAllRanges(),l.addRange(o)),r&&r.focus()}(x),d(!0),setTimeout((()=>d(!1)),2e3)};return a.createElement(N,(0,p.Z)({},g,{key:String(h),theme:b,code:x,language:E??"text"}),(e=>{let{className:t,style:l,tokens:c,getLineProps:i,getTokenProps:m}=e;return a.createElement("div",{className:(0,r.Z)(_,n,{[`language-${E}`]:E&&!n.includes(`language-${E}`)},s.kM.common.codeBlock)},f&&a.createElement("div",{style:l,className:T},f),a.createElement("div",{className:(0,r.Z)(Z,E)},a.createElement("pre",{tabIndex:0,className:(0,r.Z)(t,P,"thin-scrollbar"),style:l},a.createElement("code",{className:C},c.map(((e,t)=>{1===e.length&&"\n"===e[0].content&&(e[0].content="");const n=i({line:e,key:t});return k.includes(t)&&(n.className+=" docusaurus-highlight-code-line"),a.createElement("span",(0,p.Z)({key:t},n),e.map(((e,t)=>a.createElement("span",(0,p.Z)({key:t},m({token:e,key:t}))))),a.createElement("br",null))})))),a.createElement("button",{type:"button","aria-label":(0,o.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),className:(0,r.Z)(w,"clean-btn"),onClick:j},u?a.createElement(o.Z,{id:"theme.CodeBlock.copied",description:"The copied button label on code blocks"},"Copied"):a.createElement(o.Z,{id:"theme.CodeBlock.copy",description:"The copy button label on code blocks"},"Copy"))))}))}const j="anchorWithStickyNavbar_mojV",L="anchorWithHideOnScrollNavbar_R0VQ";function D(e){let{as:t,id:n,...l}=e;const{navbar:{hideOnScroll:c}}=(0,s.LU)();return n?a.createElement(t,(0,p.Z)({},l,{className:(0,r.Z)("anchor",{[L]:c,[j]:!c}),id:n}),l.children,a.createElement("a",{className:"hash-link",href:`#${n}`,title:(0,o.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"\u200b")):a.createElement(t,l)}function S(e){let{as:t,...n}=e;return"h1"===t?a.createElement("h1",(0,p.Z)({},n,{id:void 0}),n.children):a.createElement(D,(0,p.Z)({as:t},n))}const A="details_BAp3";function B(e){let{...t}=e;return a.createElement(s.PO,(0,p.Z)({},t,{className:(0,r.Z)("alert alert--info",A,t.className)}))}const I={head:e=>{const t=a.Children.map(e.children,(e=>function(e){if(e?.props?.mdxType&&e?.props?.originalType){const{mdxType:t,originalType:n,...r}=e.props;return a.createElement(e.props.originalType,r)}return e}(e)));return a.createElement(u.Z,e,t)},code:e=>{const t=["a","b","big","i","span","em","strong","sup","sub","small"];return a.Children.toArray(e.children).every((e=>"string"==typeof e&&!e.includes("\n")||a.isValidElement(e)&&t.includes(e.props.mdxType)))?a.createElement("code",e):a.createElement(x,e)},a:e=>a.createElement(c.Z,e),pre:e=>a.createElement(x,(0,a.isValidElement)(e.children)&&"code"===e.children.props.originalType?e.children?.props:{...e}),details:e=>{const t=a.Children.toArray(e.children),n=t.find((e=>"summary"===e?.props?.mdxType)),r=a.createElement(a.Fragment,null,t.filter((e=>e!==n)));return a.createElement(B,(0,p.Z)({},e,{summary:n}),r)},h1:e=>a.createElement(S,(0,p.Z)({as:"h1"},e)),h2:e=>a.createElement(S,(0,p.Z)({as:"h2"},e)),h3:e=>a.createElement(S,(0,p.Z)({as:"h3"},e)),h4:e=>a.createElement(S,(0,p.Z)({as:"h4"},e)),h5:e=>a.createElement(S,(0,p.Z)({as:"h5"},e)),h6:e=>a.createElement(S,(0,p.Z)({as:"h6"},e))},R="iconEdit_dcUD";function z(e){let{className:t,...n}=e;return a.createElement("svg",(0,p.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,r.Z)(R,t),"aria-hidden":"true"},n),a.createElement("g",null,a.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))}function U(e){let{editUrl:t}=e;return a.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:s.kM.common.editThisPage},a.createElement(z,null),a.createElement(o.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}const F="blogPostTitle_rzP5",M="blogPostData_Zg1s",V="blogPostDetailsFull_h6_j";var W=n(7774);const Q="tags_XVD_",$="tag_JSN8";function q(e){let{tags:t}=e;return a.createElement(a.Fragment,null,a.createElement("b",null,a.createElement(o.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),a.createElement("ul",{className:(0,r.Z)(Q,"padding--none","margin-left--sm")},t.map((e=>{let{label:t,permalink:n}=e;return a.createElement("li",{key:n,className:$},a.createElement(W.Z,{name:t,permalink:n}))}))))}const H="image_o0gy";function J(e){return e.href?a.createElement(c.Z,e):a.createElement(a.Fragment,null,e.children)}function K(e){let{author:t}=e;const{name:n,title:r,url:l,imageURL:o,email:c}=t,i=l||c&&`mailto:${c}`||void 0;return a.createElement("div",{className:"avatar margin-bottom--sm"},o&&a.createElement("span",{className:"avatar__photo-link avatar__photo"},a.createElement(J,{href:i},a.createElement("img",{className:H,src:o,alt:n}))),n&&a.createElement("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person"},a.createElement("div",{className:"avatar__name"},a.createElement(J,{href:i,itemProp:"url"},a.createElement("span",{itemProp:"name"},n))),r&&a.createElement("small",{className:"avatar__subtitle",itemProp:"description"},r)))}const X="authorCol_FlmR",G="imageOnlyAuthorRow_trpF",Y="imageOnlyAuthorCol_S2np";function ee(e){let{authors:t,assets:n}=e;if(0===t.length)return null;const l=t.every((e=>{let{name:t}=e;return!t}));return a.createElement("div",{className:(0,r.Z)("margin-top--md margin-bottom--sm",l?G:"row")},t.map(((e,t)=>a.createElement("div",{className:(0,r.Z)(!l&&"col col--6",l?Y:X),key:t},a.createElement(K,{author:{...e,imageURL:n.authorsImageUrls[t]??e.imageURL}})))))}function te(e){const t=function(){const{selectMessage:e}=(0,s.c2)();return t=>{const n=Math.ceil(t);return e(n,(0,o.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:n}))}}(),{withBaseUrl:n}=(0,i.C)(),{children:p,frontMatter:u,assets:d,metadata:g,truncated:h,isBlogPostPage:y=!1}=e,{date:f,formattedDate:b,permalink:v,tags:E,readingTime:k,title:N,editUrl:_,authors:Z}=g,T=d.image??u.image,P=!y&&h,O=E.length>0,w=y?"h1":"h2";return a.createElement("article",{className:y?void 0:"margin-bottom--xl",itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},a.createElement("header",null,a.createElement(w,{className:F,itemProp:"headline"},y?N:a.createElement(c.Z,{itemProp:"url",to:v},N)),a.createElement("div",{className:(0,r.Z)(M,"margin-vert--md")},a.createElement("time",{dateTime:f,itemProp:"datePublished"},b),void 0!==k&&a.createElement(a.Fragment,null," \xb7 ",t(k))),a.createElement(ee,{authors:Z,assets:d})),T&&a.createElement("meta",{itemProp:"image",content:n(T,{absolute:!0})}),a.createElement("div",{id:y?m.blogPostContainerID:void 0,className:"markdown",itemProp:"articleBody"},a.createElement(l.Zo,{components:I},p)),(O||h)&&a.createElement("footer",{className:(0,r.Z)("row docusaurus-mt-lg",{[V]:y})},O&&a.createElement("div",{className:(0,r.Z)("col",{"col--9":P})},a.createElement(q,{tags:E})),y&&_&&a.createElement("div",{className:"col margin-top--sm"},a.createElement(U,{editUrl:_})),P&&a.createElement("div",{className:(0,r.Z)("col text--right",{"col--3":O})},a.createElement(c.Z,{to:g.permalink,"aria-label":(0,o.I)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:N})},a.createElement("b",null,a.createElement(o.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More"))))))}},1750:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(7294),r=n(9960);function l(e){const{permalink:t,title:n,subLabel:l}=e;return a.createElement(r.Z,{className:"pagination-nav__link",to:t},l&&a.createElement("div",{className:"pagination-nav__sublabel"},l),a.createElement("div",{className:"pagination-nav__label"},n))}},7774:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(7294),r=n(6010),l=n(9960);const o="tag_hD8n",c="tagRegular_D6E_",i="tagWithCount_i0QQ";function s(e){const{permalink:t,name:n,count:s}=e;return a.createElement(l.Z,{href:t,className:(0,r.Z)(o,{[c]:!s,[i]:s})},n,s&&a.createElement("span",null,s))}}}]);