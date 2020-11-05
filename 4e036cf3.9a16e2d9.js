(window.webpackJsonp=window.webpackJsonp||[]).push([[226],{284:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(1),i=n(6),o=(n(0),n(807)),a={title:"Logging"},c={unversionedId:"debugging",id:"version-4.0/debugging",isDocsHomePage:!1,title:"Logging",description:"For development purposes it might come handy to enable logging and debug mode:",source:"@site/versioned_docs/version-4.0/debugging.md",slug:"/debugging",permalink:"/docs/4.0/debugging",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-4.0/debugging.md",version:"4.0",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1604598906,sidebar:"version-4.0/docs",previous:{title:"Using Query Builder",permalink:"/docs/4.0/query-builder"},next:{title:"Smart Nested Populate",permalink:"/docs/4.0/nested-populate"}},l=[{value:"Custom Logger",id:"custom-logger",children:[]},{value:"Logger Namespaces",id:"logger-namespaces",children:[]},{value:"Highlighters",id:"highlighters",children:[]}],s={rightToc:l};function u(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"For development purposes it might come handy to enable logging and debug mode:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"return MikroORM.init({\n  debug: true,\n});\n")),Object(o.b)("p",null,"By doing this ",Object(o.b)("inlineCode",{parentName:"p"},"MikroORM")," will start using ",Object(o.b)("inlineCode",{parentName:"p"},"console.log()")," function to dump all queries:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"[query] select `e0`.* from `author` as `e0` where `e0`.`name` = ? limit ? [took 2 ms]\n[query] begin [took 1 ms]\n[query] insert into `author` (`name`, `email`, `created_at`, `updated_at`, `terms_accepted`) values (?, ?, ?, ?, ?) [took 2 ms]\n[query] commit [took 2 ms]\n")),Object(o.b)("p",null,"It is also useful for debugging problems with entity discovery, as you will see information\nabout every processed entity:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"[discovery] ORM entity discovery started\n[discovery] - processing entity Author\n[discovery] - using cached metadata for entity Author\n[discovery] - processing entity Book\n[discovery] - processing entity BookTag\n[discovery] - entity discovery finished after 13 ms\n")),Object(o.b)("h2",{id:"custom-logger"},"Custom Logger"),Object(o.b)("p",null,"You can also provide your own logger via ",Object(o.b)("inlineCode",{parentName:"p"},"logger")," option. "),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"return MikroORM.init({\n  debug: true,\n  logger: msg => myCustomLogger.log(msg),\n});\n")),Object(o.b)("h2",{id:"logger-namespaces"},"Logger Namespaces"),Object(o.b)("p",null,"There are multiple Logger Namespaces that you can specifically request, while omitting the rest.\nJust specify array of them via the ",Object(o.b)("inlineCode",{parentName:"p"},"debug")," option:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"return MikroORM.init({\n  debug: ['query'], // now only queries will be logged\n});\n")),Object(o.b)("p",null,"Currently, there are 4 namespaces \u2013 ",Object(o.b)("inlineCode",{parentName:"p"},"query"),", ",Object(o.b)("inlineCode",{parentName:"p"},"query-params"),", ",Object(o.b)("inlineCode",{parentName:"p"},"discovery")," and ",Object(o.b)("inlineCode",{parentName:"p"},"info"),"."),Object(o.b)("p",null,"If you provide ",Object(o.b)("inlineCode",{parentName:"p"},"query-params")," then you must also provide ",Object(o.b)("inlineCode",{parentName:"p"},"query")," in order for it to take effect."),Object(o.b)("h2",{id:"highlighters"},"Highlighters"),Object(o.b)("p",null,"Previously Highlight.js was used to highlight various things in the CLI,\nlike SQL and mongo queries, or migrations or entities generated via CLI.\nWhile the library worked fine, it was causing performance issues mainly\nfor those bundling via webpack and using lambdas, as the library was huge."),Object(o.b)("p",null,"In v4 highlighting is disabled by default, and there are 2 highlighters\nyou can optionally use (you need to install them first)."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"import { SqlHighlighter } from '@mikro-orm/sql-highlighter';\n\nMikroORM.init({\n  highlighter: new SqlHighlighter(),\n  // ...\n});\n")),Object(o.b)("p",null,"For MongoDB you can use ",Object(o.b)("inlineCode",{parentName:"p"},"MongoHighlighter")," from ",Object(o.b)("inlineCode",{parentName:"p"},"@mikro-orm/mongo-highlighter"),"\npackage."))}u.isMDXComponent=!0},807:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var r=n(0),i=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=i.a.createContext({}),u=function(e){var t=i.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=u(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},b=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,a=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(n),b=r,d=p["".concat(a,".").concat(b)]||p[b]||g[b]||o;return n?i.a.createElement(d,c(c({ref:t},s),{},{components:n})):i.a.createElement(d,c({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var s=2;s<o;s++)a[s]=n[s];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);