"use strict";(self.webpackChunkreact_ui_animate_docs=self.webpackChunkreact_ui_animate_docs||[]).push([[472],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=u(n),d=a,k=c["".concat(s,".").concat(d)]||c[d]||p[d]||o;return n?r.createElement(k,i(i({ref:t},m),{},{components:n})):r.createElement(k,i({ref:t},m))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},7263:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return p}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],l={sidebar_position:7,id:"use-mouse-move",title:"useMouseMove"},s=void 0,u={unversionedId:"api-references/hooks/use-mouse-move",id:"api-references/hooks/use-mouse-move",title:"useMouseMove",description:"Due to time constraint, we couldn't complete this page. We will complete as soon as possible.",source:"@site/docs/api-references/hooks/use-mouse-move.md",sourceDirName:"api-references/hooks",slug:"/api-references/hooks/use-mouse-move",permalink:"/docs/api-references/hooks/use-mouse-move",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/api-references/hooks/use-mouse-move.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7,id:"use-mouse-move",title:"useMouseMove"},sidebar:"tutorialSidebar",previous:{title:"useScroll",permalink:"/docs/api-references/hooks/use-scroll"},next:{title:"useDrag",permalink:"/docs/api-references/hooks/use-drag"}},m={},p=[{value:"Arguments",id:"arguments",level:2},{value:"<code>callback</code>  function ",id:"callback--function-",level:4},{value:"Returns",id:"returns",level:2},{value:"Example",id:"example",level:2}],c={toc:p};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Due to time constraint, we couldn't complete this page. We will complete as soon as possible."))),(0,o.kt)("p",null,"This hook provides a way to handle mouse move event on a ",(0,o.kt)("inlineCode",{parentName:"p"},"HTMLElement")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"window"),"."),(0,o.kt)("h2",{id:"arguments"},"Arguments"),(0,o.kt)("h4",{id:"callback--function-"},(0,o.kt)("inlineCode",{parentName:"h4"},"callback")," ","[ function ]"),(0,o.kt)("p",null,"First argument is a callback function with an ",(0,o.kt)("inlineCode",{parentName:"p"},"event")," object as its first argument which is called on every mouse move."),(0,o.kt)("p",null,"Here are the properties of an ",(0,o.kt)("inlineCode",{parentName:"p"},"event")," object argument of a callback function:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Property"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"target"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"event.target")," element the mouse move is hovered upon.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"isMoving"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"Boolean")," indicating the current status of mouse movement.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"mouseX"),(0,o.kt)("td",{parentName:"tr",align:null},"Horizontal mouse movement amount.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"mouseY"),(0,o.kt)("td",{parentName:"tr",align:null},"Vertical mouse movement amount.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"velocityX"),(0,o.kt)("td",{parentName:"tr",align:null},"Velocity along horizontal mouse movement direction.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"velocityY"),(0,o.kt)("td",{parentName:"tr",align:null},"Velocity along vertical mouse movement direction.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"directionX"),(0,o.kt)("td",{parentName:"tr",align:null},"Indicates the current horizontal mouse movement direction. For positive +1, for negative -1 and for not moving 0.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"directionY"),(0,o.kt)("td",{parentName:"tr",align:null},"Indicates the current vertical mouse movement direction. For positive +1, for negative -1 and for not moving 0.")))),(0,o.kt)("h2",{id:"returns"},"Returns"),(0,o.kt)("p",null,"It returns a function which can be spread on any ",(0,o.kt)("inlineCode",{parentName:"p"},"HTMLELement"),". If not bound to any ",(0,o.kt)("inlineCode",{parentName:"p"},"HTMLElement"),", event is attached to ",(0,o.kt)("inlineCode",{parentName:"p"},"window"),"."),(0,o.kt)("p",null,"Define a hook for window:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"useMouseMove((event) => doSomething(event));\n")),(0,o.kt)("p",null,"Or you could bind it in any ",(0,o.kt)("inlineCode",{parentName:"p"},"HTMLElement"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const bind = useMouseMove((event) => doSomething(event));\n")),(0,o.kt)("p",null,"Apply it on a ",(0,o.kt)("inlineCode",{parentName:"p"},"HTMLELement"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"<div {...bind()}>...</div>\n")),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("p",null,"In the below example, ",(0,o.kt)("inlineCode",{parentName:"p"},"useMouseMove")," hook is used to get ",(0,o.kt)("inlineCode",{parentName:"p"},"mouseX")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"mouseY"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'import { useMouseMove } from "react-ui-animate";\n\nexport default function() {\n\n  const bind = useMouseMove(\n    function ({ mouseX, mouseY }) {\n        console.log("XY", mouseX, mouseY);\n    },\n  );\n\n  return (...);\n}\n')))}d.isMDXComponent=!0}}]);