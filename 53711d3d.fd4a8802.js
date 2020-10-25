(window.webpackJsonp=window.webpackJsonp||[]).push([[241],{299:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return p}));var r=n(1),a=n(6),i=(n(0),n(804)),o={title:"Entity Generator"},c={unversionedId:"entity-generator",id:"version-4.2/entity-generator",isDocsHomePage:!1,title:"Entity Generator",description:"To generate entities from existing database schema, you can use EntityGenerator helper.",source:"@site/versioned_docs/version-4.2/entity-generator.md",slug:"/entity-generator",permalink:"/docs/entity-generator",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-4.2/entity-generator.md",version:"4.2",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1603615037,sidebar:"version-4.2/docs",previous:{title:"Schema Generator",permalink:"/docs/schema-generator"},next:{title:"Naming Strategy",permalink:"/docs/naming-strategy"}},s=[{value:"Current limitations",id:"current-limitations",children:[]}],l={rightToc:s};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"To generate entities from existing database schema, you can use ",Object(i.b)("inlineCode",{parentName:"p"},"EntityGenerator")," helper. "),Object(i.b)("p",null,"You can use it via CLI: "),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),"npx mikro-orm generate-entities --dump  # Dumps all generated entities\nnpx mikro-orm generate-entities --save --path=./my-entities  # Saves entities into given directory\n")),Object(i.b)("p",null,"Or you can create simple script where you initialize MikroORM like this:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript",metastring:'title="./generate-entities.ts"',title:'"./generate-entities.ts"'}),"import { MikroORM } from '@mikro-orm/core';\n\n(async () => {\n  const orm = await MikroORM.init({\n    dbName: 'your-db-name',\n    // ...\n  });\n  const generator = orm.getEntityGenerator();\n  const dump = await generator.generate({ \n    save: true,\n    baseDir: process.cwd() + '/my-entities',\n  });\n  console.log(dump);\n  await orm.close(true);\n})();\n")),Object(i.b)("p",null,"Then run this script via ",Object(i.b)("inlineCode",{parentName:"p"},"ts-node")," (or compile it to plain JS and use ",Object(i.b)("inlineCode",{parentName:"p"},"node"),"):"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),"$ ts-node generate-entities\n")),Object(i.b)("h2",{id:"current-limitations"},"Current limitations"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"many to many relations are not supported, pivot table will be represented as separate entity"),Object(i.b)("li",{parentName:"ul"},"in mysql, tinyint columns will be defined as boolean properties")))}p.isMDXComponent=!0},804:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(n),b=r,d=u["".concat(o,".").concat(b)]||u[b]||m[b]||i;return n?a.a.createElement(d,c(c({ref:t},l),{},{components:n})):a.a.createElement(d,c({ref:t},l))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var l=2;l<i;l++)o[l]=n[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);