"use strict";(self.webpackChunkreact_ui_animate_docs=self.webpackChunkreact_ui_animate_docs||[]).push([[31],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),u=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=u(n),d=r,f=m["".concat(p,".").concat(d)]||m[d]||c[d]||o;return n?a.createElement(f,i(i({ref:t},s),{},{components:n})):a.createElement(f,i({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9770:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return c}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),i=["components"],l={sidebar_position:1,id:"interpolate",title:"interpolate"},p=void 0,u={unversionedId:"api-references/methods/interpolate",id:"api-references/methods/interpolate",title:"interpolate",description:"Due to time constraint, we couldn't complete this page. We will complete as soon as possible.",source:"@site/docs/api-references/methods/interpolate.md",sourceDirName:"api-references/methods",slug:"/api-references/methods/interpolate",permalink:"/docs/api-references/methods/interpolate",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/api-references/methods/interpolate.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,id:"interpolate",title:"interpolate"},sidebar:"tutorialSidebar",previous:{title:"useGesture",permalink:"/docs/api-references/hooks/use-gesture"},next:{title:"bInterpolate",permalink:"/docs/api-references/methods/b-interpolate"}},s={},c=[{value:"Arguments",id:"arguments",level:2},{value:"<code>value</code>  number | AnimatedValue ",id:"value--number--animatedvalue-",level:4},{value:"<code>inputRange</code> [ number[] ]",id:"inputrange--number-",level:4},{value:"<code>outputRange</code> [ number[] | string[] ]",id:"outputrange--number--string-",level:4},{value:"<code>extrapolateConfig</code>  object ",id:"extrapolateconfig--object-",level:4},{value:"Returns",id:"returns",level:2},{value:"Example",id:"example",level:2}],m={toc:c};function d(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Due to time constraint, we couldn't complete this page. We will complete as soon as possible."))),(0,o.kt)("p",null,"An interpolation maps input ranges to output ranges, typically using a linear interpolation but also supports easing functions. By default, it will extrapolate the curve beyond the ranges given, but you can also have it clamp the output value. ",(0,o.kt)("inlineCode",{parentName:"p"},"interpolate")," function allows the Animated Value to map from input ranges to output ranges."),(0,o.kt)("h2",{id:"arguments"},"Arguments"),(0,o.kt)("h4",{id:"value--number--animatedvalue-"},(0,o.kt)("inlineCode",{parentName:"h4"},"value")," ","[ number | AnimatedValue ]"),(0,o.kt)("p",null,"Value from within input range that should be map into value from output range."),(0,o.kt)("h4",{id:"inputrange--number-"},(0,o.kt)("inlineCode",{parentName:"h4"},"inputRange")," [ number[] ]"),(0,o.kt)("p",null,"An array of ",(0,o.kt)("inlineCode",{parentName:"p"},"number")," that contains points that indicate the range of the input value. Values in the input range should be increasing."),(0,o.kt)("h4",{id:"outputrange--number--string-"},(0,o.kt)("inlineCode",{parentName:"h4"},"outputRange")," [ number[] | string[] ]"),(0,o.kt)("p",null,"An array of ",(0,o.kt)("inlineCode",{parentName:"p"},"number")," that contains points that indicate the range of the output value. It should have at least the same number of points as the input range."),(0,o.kt)("h4",{id:"extrapolateconfig--object-"},(0,o.kt)("inlineCode",{parentName:"h4"},"extrapolateConfig")," ","[ object ]"),(0,o.kt)("p",null,"Optional config object where you can define the extrapolation using these three options by setting the values to either ",(0,o.kt)("inlineCode",{parentName:"p"},"extend")," | ",(0,o.kt)("inlineCode",{parentName:"p"},"identity")," | ",(0,o.kt)("inlineCode",{parentName:"p"},"clamp"),"."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Option"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"extrapolate"),(0,o.kt)("td",{parentName:"tr",align:null},"Option to set the extrapolation beyond the output range on left or right.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"extrapolateLeft"),(0,o.kt)("td",{parentName:"tr",align:null},"Option to set the extrapolation beyond left of output range.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"extrapolateRight"),(0,o.kt)("td",{parentName:"tr",align:null},"Option to set the extrapolation beyond left of output range.")))),(0,o.kt)("h2",{id:"returns"},"Returns"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"interpolate")," returns the value after interpolation from within the output range."),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("p",null,"A basic mapping to convert a ",(0,o.kt)("inlineCode",{parentName:"p"},"0-1")," range to a ",(0,o.kt)("inlineCode",{parentName:"p"},"0-100")," range would be:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"interpolate(value, [0, 1], [0, 100]);\n")))}d.isMDXComponent=!0}}]);