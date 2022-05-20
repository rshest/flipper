"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4457],{3905:(e,t,n)=>{n.r(t),n.d(t,{MDXContext:()=>p,MDXProvider:()=>c,mdx:()=>g,useMDXComponents:()=>u,withMDXComponents:()=>d});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),d=function(e){return function(t){var n=u(t.components);return r.createElement(e,a({},t,{components:n}))}},u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(n),c=i,f=d["".concat(o,".").concat(c)]||d[c]||m[c]||a;return n?r.createElement(f,l(l({ref:t},p),{},{components:n})):r.createElement(f,l({ref:t},p))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var p=2;p<a;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},13919:(e,t,n)=>{function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function i(e){return void 0!==e&&!r(e)}n.d(t,{b:()=>r,Z:()=>i})},44996:(e,t,n)=>{n.r(t),n.d(t,{useBaseUrlUtils:()=>a,default:()=>o});var r=n(52263),i=n(13919);function a(){var e=(0,r.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,a=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var a=void 0===r?{}:r,o=a.forcePrependBaseUrl,l=void 0!==o&&o,s=a.absolute,p=void 0!==s&&s;if(!n)return n;if(n.startsWith("#"))return n;if((0,i.b)(n))return n;if(l)return t+n;var d=n.startsWith(t)?n:t+n.replace(/^\//,"");return p?e+d:d}(a,n,e,t)}}}function o(e,t){return void 0===t&&(t={}),(0,a().withBaseUrl)(e,t)}},87203:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>s,contentTitle:()=>p,metadata:()=>d,toc:()=>u,default:()=>h});var r=n(83117),i=n(80102),a=(n(67294),n(3905)),o=n(44996),l=["components"],s={id:"js-setup",title:"Building a Desktop Plugin - Setup",sidebar_label:"Setup"},p=void 0,d={unversionedId:"tutorial/js-setup",id:"tutorial/js-setup",isDocsHomePage:!1,title:"Building a Desktop Plugin - Setup",description:"Now that the native side is covered (see the previous pages in this tutorial), it's time to display the data you're sending on the desktop side.",source:"@site/../docs/tutorial/js-setup.mdx",sourceDirName:"tutorial",slug:"/tutorial/js-setup",permalink:"/docs/tutorial/js-setup",editUrl:"https://github.com/facebook/flipper/blob/main/website/../docs/tutorial/js-setup.mdx",tags:[],version:"current",frontMatter:{id:"js-setup",title:"Building a Desktop Plugin - Setup",sidebar_label:"Setup"},sidebar:"extending",previous:{title:"Building a JavaScript (Browser) Plugin",permalink:"/docs/tutorial/javascript"},next:{title:"Showing a Table",permalink:"/docs/tutorial/js-table"}},u=[{value:"Scaffolding a new Desktop plugin",id:"scaffolding-a-new-desktop-plugin",children:[],level:2}],c=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.mdx)("div",t)}},m=c("FbInternalOnly"),f=c("OssOnly"),g={toc:u};function h(e){var t=e.components,n=(0,i.Z)(e,l);return(0,a.mdx)("wrapper",(0,r.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("p",null,"Now that the native side is covered (see the previous pages in this tutorial), it's time to display the data you're sending on the desktop side."),(0,a.mdx)("p",null,"The following desktop screenshot shows the 'Sea-mammals' plugin, of this tutorial, in action."),(0,a.mdx)("img",{alt:"Custom cards UI for the sea mammals plugin",src:(0,o.default)("img/js-custom.png")}),(0,a.mdx)(m,{mdxType:"FbInternalOnly"},(0,a.mdx)("p",null,"After scaffolding and starting Flipper from source, no further steps are needed to setup the desktop plugin.")),(0,a.mdx)(f,{mdxType:"OssOnly"},(0,a.mdx)("h2",{id:"scaffolding-a-new-desktop-plugin"},"Scaffolding a new Desktop plugin"),(0,a.mdx)("p",null,"A new Flipper Desktop plugin can be scaffolded by running ",(0,a.mdx)("inlineCode",{parentName:"p"},"npx flipper-pkg init")," in the directory where you want to store the plugin sources."),(0,a.mdx)("div",{className:"admonition admonition-warning alert alert--danger"},(0,a.mdx)("div",{parentName:"div",className:"admonition-heading"},(0,a.mdx)("h5",{parentName:"div"},(0,a.mdx)("span",{parentName:"h5",className:"admonition-icon"},(0,a.mdx)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,a.mdx)("div",{parentName:"div",className:"admonition-content"},(0,a.mdx)("p",{parentName:"div"},"Don't run this command inside the Flipper repository!. Before running this command, make sure Flipper is closed."))),(0,a.mdx)("p",null,"The following snippet shows an example:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-bash"},"mkdir ~/FlipperPlugins\ncd ~/FlipperPlugins\nnpx flipper-pkg init\n")),(0,a.mdx)("p",null,"Add the directory (shown in the snippet) to the Flipper watch folder if asked."),(0,a.mdx)("p",null,"In this tutorial, you'll be creating a ",(0,a.mdx)("inlineCode",{parentName:"p"},"client")," plugin. ",(0,a.mdx)("inlineCode",{parentName:"p"},"device")," plugins are only used when creating plugins that ",(0,a.mdx)("em",{parentName:"p"},"don't")," connect to a specific application."),(0,a.mdx)("p",null,"Take the following steps for npx:"),(0,a.mdx)("ol",null,(0,a.mdx)("li",{parentName:"ol"},"The npx tool asks you to provide the 'id' and 'title' for your plugin. For the sake of this tutorial, use 'sea-mammals' as 'id' and 'Sea Mammals' as the 'title'."),(0,a.mdx)("li",{parentName:"ol"},"The npx tool creates two files in the directory: ",(0,a.mdx)("inlineCode",{parentName:"li"},"package.json")," and ",(0,a.mdx)("inlineCode",{parentName:"li"},"src/index.tsx"),"."),(0,a.mdx)("li",{parentName:"ol"},"After the process has finished, use ",(0,a.mdx)("inlineCode",{parentName:"li"},"yarn watch")," in the generated directory to start compiling the plugin on the fly.")),(0,a.mdx)("p",null,"Now that the package has been set up, you are ready to build a UI for your plugin. This can be achieved either by using a standardized ",(0,a.mdx)("a",{parentName:"p",href:"/docs/tutorial/js-table"},"table-based plugin"),", or by creating a ",(0,a.mdx)("a",{parentName:"p",href:"/docs/tutorial/js-custom"},"custom UI"),".")),(0,a.mdx)("p",null,"For more background on the generated files and overall plugin structure, see the ",(0,a.mdx)("a",{parentName:"p",href:"/docs/extending/desktop-plugin-structure"},"Plugin Structure")," page."))}h.isMDXComponent=!0}}]);