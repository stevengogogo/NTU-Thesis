(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{121:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return b}));var r=n(0),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),u=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=u(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=u(n),d=r,b=s["".concat(a,".").concat(d)]||s[d]||f[d]||i;return n?o.a.createElement(b,c(c({ref:t},p),{},{components:n})):o.a.createElement(b,c({ref:t},p))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var p=2;p<i;p++)a[p]=n[p];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},93:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(3),o=n(7),i=(n(0),n(121)),a={title:"LaTeX",hide_title:!0},c={unversionedId:"plotting/latex",id:"plotting/latex",isDocsHomePage:!1,title:"LaTeX",description:"[ LaTeX ]",source:"@site/docs/plotting/latex.md",slug:"/plotting/latex",permalink:"/NTU-Thesis/docs/plotting/latex",editUrl:"https://github.com/Hsins/NTU-Thesis/edit/master/website/docs/plotting/latex.md",version:"current",lastUpdatedAt:1606940950,sidebar:"docs",previous:{title:"ggplot2",permalink:"/NTU-Thesis/docs/plotting/ggplot2"},next:{title:"MATLAB",permalink:"/NTU-Thesis/docs/plotting/matlab"}},l=[{value:"PGFPlots",id:"pgfplots",children:[]},{value:"TikZ",id:"tikz",children:[]}],p={rightToc:l};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("div",{align:"center"},Object(i.b)("h1",null,"[ LaTeX ]")),Object(i.b)("h2",{id:"pgfplots"},"PGFPlots"),Object(i.b)("h2",{id:"tikz"},"TikZ"))}u.isMDXComponent=!0}}]);