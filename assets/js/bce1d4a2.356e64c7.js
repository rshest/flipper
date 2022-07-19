"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7713],{3905:(e,n,t)=>{t.r(n),t.d(n,{MDXContext:()=>d,MDXProvider:()=>c,mdx:()=>f,useMDXComponents:()=>m,withMDXComponents:()=>s});var i=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(){return a=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},a.apply(this,arguments)}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var d=i.createContext({}),s=function(e){return function(n){var t=m(n.components);return i.createElement(e,a({},n,{components:t}))}},m=function(e){var n=i.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=m(e.components);return i.createElement(d.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},g=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),s=m(t),c=r,g=s["".concat(l,".").concat(c)]||s[c]||u[c]||a;return t?i.createElement(g,o(o({ref:n},d),{},{components:t})):i.createElement(g,o({ref:n},d))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,l=new Array(a);l[0]=g;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var d=2;d<a;d++)l[d]=t[d];return i.createElement.apply(null,l)}return i.createElement.apply(null,t)}g.displayName="MDXCreateElement"},78531:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>p,default:()=>u,frontMatter:()=>o,metadata:()=>d,toc:()=>m});var i=t(83117),r=t(80102),a=(t(67294),t(3905)),l=["components"],o={id:"deeplinks",title:"Using Deeplinks"},p=void 0,d={unversionedId:"extending/deeplinks",id:"extending/deeplinks",title:"Using Deeplinks",description:"Flipper supports opening Flipper through deeplinks via the flipper:// protocol.",source:"@site/../docs/extending/deeplinks.mdx",sourceDirName:"extending",slug:"/extending/deeplinks",permalink:"/docs/extending/deeplinks",draft:!1,editUrl:"https://github.com/facebook/flipper/blob/main/website/../docs/extending/deeplinks.mdx",tags:[],version:"current",frontMatter:{id:"deeplinks",title:"Using Deeplinks"},sidebar:"main",previous:{title:"Style Guide",permalink:"/docs/extending/style-guide"},next:{title:"Using Node.js APIs",permalink:"/docs/extending/node-apis"}},s={},m=[{value:"open-plugin",id:"open-plugin",level:2},{value:"Handling deeplinks in the plugin",id:"handling-deeplinks-in-the-plugin",level:3}],c={toc:m};function u(e){var n=e.components,t=(0,r.Z)(e,l);return(0,a.mdx)("wrapper",(0,i.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.mdx)("p",null,"Flipper supports opening Flipper through deeplinks via the ",(0,a.mdx)("inlineCode",{parentName:"p"},"flipper://")," protocol."),(0,a.mdx)("h2",{id:"open-plugin"},"open-plugin"),(0,a.mdx)("p",null,"The following link format can be used to open Flipper and open a specific plugin:"),(0,a.mdx)("p",null,(0,a.mdx)("inlineCode",{parentName:"p"},"flipper://open-plugin?plugin-id=<plugin-id>&client=<client>&devices=<devices>&payload=<payload>")),(0,a.mdx)("p",null,"The parameters are specified as follows:"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"plugin-id")," - ","[required]"," the identifier of the plugin that needs to be opened, as specified by the ",(0,a.mdx)("inlineCode",{parentName:"li"},"id")," field in ",(0,a.mdx)("inlineCode",{parentName:"li"},"package.json"),"."),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"client")," - ","[optional]"," the name of the application that should be opened. For device plugins, this doesn't need to be specified. If not set, the user will be prompted to select a client."),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"devices")," - ","[optional]"," comma separated list of device types that are acceptable. For example, ",(0,a.mdx)("inlineCode",{parentName:"li"},"iOS,Android")," or ",(0,a.mdx)("inlineCode",{parentName:"li"},"Metro"),". If set, ",(0,a.mdx)("inlineCode",{parentName:"li"},"client")," and ",(0,a.mdx)("inlineCode",{parentName:"li"},"plugin-id")," must be running on this type of device."),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"payload")," - ","[optional]"," any additional string argument to pass to the plugin. Note that this argument should be properly URL encoded.")),(0,a.mdx)("p",null,"Using this deeplink format ensures that:"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},"[FB-ONLY]"," The user is logged in & connected to Facebook."),(0,a.mdx)("li",{parentName:"ul"},"Flipper is up to date."),(0,a.mdx)("li",{parentName:"ul"},"[FB-ONLY]"," The specified plugin is installed."),(0,a.mdx)("li",{parentName:"ul"},"The plugin is available on the provided client / device, or will prompt the user for a valid device / client selection is made on which the plugin is available."),(0,a.mdx)("li",{parentName:"ul"},"The plugin is enabled.")),(0,a.mdx)("h3",{id:"handling-deeplinks-in-the-plugin"},"Handling deeplinks in the plugin"),(0,a.mdx)("p",null,"If a plugin is opened through a deeplink, for which a ",(0,a.mdx)("inlineCode",{parentName:"p"},"payload")," was set, the ",(0,a.mdx)("a",{parentName:"p",href:"/docs/extending/flipper-plugin#ondeeplink"},(0,a.mdx)("inlineCode",{parentName:"a"},"onDeepLink"))," handler will be triggered directly after initializing and rendering the plugin."),(0,a.mdx)("div",{className:"admonition admonition-note alert alert--secondary"},(0,a.mdx)("div",{parentName:"div",className:"admonition-heading"},(0,a.mdx)("h5",{parentName:"div"},(0,a.mdx)("span",{parentName:"h5",className:"admonition-icon"},(0,a.mdx)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,a.mdx)("div",{parentName:"div",className:"admonition-content"},(0,a.mdx)("p",{parentName:"div"},"The same payload format can also be used to open other plugins programmatically from inside another plugin, by passing the payload as second argument to ",(0,a.mdx)("a",{parentName:"p",href:"/docs/extending/flipper-plugin#selectplugin"},"selectPlugin"),"."))))}u.isMDXComponent=!0}}]);