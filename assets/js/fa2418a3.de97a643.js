"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[880],{3905:(e,t,n)=>{n.r(t),n.d(t,{MDXContext:()=>d,MDXProvider:()=>c,mdx:()=>g,useMDXComponents:()=>m,withMDXComponents:()=>u});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i.apply(this,arguments)}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=r.createContext({}),u=function(e){return function(t){var n=m(t.components);return r.createElement(e,i({},t,{components:n}))}},m=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=m(e.components);return r.createElement(d.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),u=m(n),c=a,f=u["".concat(l,".").concat(c)]||u[c]||s[c]||i;return n?r.createElement(f,o(o({ref:t},d),{},{components:n})):r.createElement(f,o({ref:t},d))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=f;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var d=2;d<i;d++)l[d]=n[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},82872:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>g,frontMatter:()=>d,metadata:()=>m,toc:()=>s});var r=n(83117),a=n(80102),i=(n(67294),n(3905)),l=n(44996),o=n(39960),p=["components"],d={id:"react-native",title:"React Native App - Automatic Setup",sidebar_label:"Automatic Setup"},u=void 0,m={unversionedId:"getting-started/react-native",id:"getting-started/react-native",title:"React Native App - Automatic Setup",description:"Starting with React Native 0.62, after generating your project with react-native init, the Flipper integration is ready out of the box for debug builds:",source:"@site/../docs/getting-started/react-native.mdx",sourceDirName:"getting-started",slug:"/getting-started/react-native",permalink:"/docs/getting-started/react-native",draft:!1,editUrl:"https://github.com/facebook/flipper/blob/main/website/../docs/getting-started/react-native.mdx",tags:[],version:"current",frontMatter:{id:"react-native",title:"React Native App - Automatic Setup",sidebar_label:"Automatic Setup"},sidebar:"main",previous:{title:"Generic iOS Apps",permalink:"/docs/getting-started/ios-native"},next:{title:"Manual Android Setup",permalink:"/docs/getting-started/react-native-android"}},c={},s=[{value:"Using the latest Flipper SDK",id:"using-the-latest-flipper-sdk",level:3},{value:"Manual Setup",id:"manual-setup",level:2}],f={toc:s};function g(e){var t=e.components,n=(0,a.Z)(e,p);return(0,i.mdx)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,i.mdx)("p",null,"Starting with React Native 0.62, after generating your project with ",(0,i.mdx)("inlineCode",{parentName:"p"},"react-native init"),", the Flipper integration is ready out of the box for debug builds:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("strong",{parentName:"li"},"Android")," - start the Flipper Desktop application and start your project using ",(0,i.mdx)("inlineCode",{parentName:"li"},"yarn android"),". Your application will appear in Flipper."),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("strong",{parentName:"li"},"iOS")," - run ",(0,i.mdx)("inlineCode",{parentName:"li"},"pod install")," once in the ",(0,i.mdx)("inlineCode",{parentName:"li"},"ios")," directory of your project. After that, run ",(0,i.mdx)("inlineCode",{parentName:"li"},"yarn ios")," and start Flipper. Your application will show up in Flipper.")),(0,i.mdx)("p",null,"By default, the following plugins will be available:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"Layout Inspector"),(0,i.mdx)("li",{parentName:"ul"},"Network"),(0,i.mdx)("li",{parentName:"ul"},"Databases"),(0,i.mdx)("li",{parentName:"ul"},"Images"),(0,i.mdx)("li",{parentName:"ul"},"Shared Preferences"),(0,i.mdx)("li",{parentName:"ul"},"Crash Reporter"),(0,i.mdx)("li",{parentName:"ul"},"React DevTools"),(0,i.mdx)("li",{parentName:"ul"},"Metro Logs")),(0,i.mdx)("p",null,"Additional plugins can be installed through the Plugin Manager."),(0,i.mdx)("p",null,"To create your own plugins and integrate with Flipper using JavaScript, see the ",(0,i.mdx)(o.default,{to:(0,l.default)("/docs/tutorial/react-native"),mdxType:"Link"},"Building a React Native Plugin")," tutorial."),(0,i.mdx)("h3",{id:"using-the-latest-flipper-sdk"},"Using the latest Flipper SDK"),(0,i.mdx)("p",null,"By default, React Native might ship with an outdated Flipper SDK. To make sure you are using the latest version, determine the latest released version of Flipper by running ",(0,i.mdx)("inlineCode",{parentName:"p"},"npm info flipper"),"."),(0,i.mdx)("p",null,"Android:"),(0,i.mdx)("ol",null,(0,i.mdx)("li",{parentName:"ol"},"Bump the ",(0,i.mdx)("inlineCode",{parentName:"li"},"FLIPPER_VERSION")," variable in ",(0,i.mdx)("inlineCode",{parentName:"li"},"android/gradle.properties"),", for example: ",(0,i.mdx)("inlineCode",{parentName:"li"},"FLIPPER_VERSION=0.154.0"),"."),(0,i.mdx)("li",{parentName:"ol"},"Run ",(0,i.mdx)("inlineCode",{parentName:"li"},"./gradlew clean")," in the ",(0,i.mdx)("inlineCode",{parentName:"li"},"android")," directory.")),(0,i.mdx)("p",null,"iOS:"),(0,i.mdx)("ol",null,(0,i.mdx)("li",{parentName:"ol"},"Call ",(0,i.mdx)("inlineCode",{parentName:"li"},"use_flipper")," with a specific version in ",(0,i.mdx)("inlineCode",{parentName:"li"},"ios/Podfile"),", for example: ",(0,i.mdx)("inlineCode",{parentName:"li"},"use_flipper!({ 'Flipper' => '0.154.0' })"),"."),(0,i.mdx)("li",{parentName:"ol"},"Run ",(0,i.mdx)("inlineCode",{parentName:"li"},"pod install --repo-update")," in the ",(0,i.mdx)("inlineCode",{parentName:"li"},"ios")," directory.")),(0,i.mdx)("h2",{id:"manual-setup"},"Manual Setup"),(0,i.mdx)("p",null,"If you are not using a default React Native template or cannot use the upgrade tool, you can find instructions for how to integrate Flipper into your projects in the following guides:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{href:(0,l.default)("/docs/getting-started/react-native-android")},"React Native for Android")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{href:(0,l.default)("/docs/getting-started/react-native-ios")},"React Native for iOS"))))}g.isMDXComponent=!0}}]);