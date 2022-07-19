"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[972],{3905:(e,t,n)=>{n.r(t),n.d(t,{MDXContext:()=>u,MDXProvider:()=>c,mdx:()=>v,useMDXComponents:()=>d,withMDXComponents:()=>s});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},r.apply(this,arguments)}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=i.createContext({}),s=function(e){return function(t){var n=d(t.components);return i.createElement(e,r({},t,{components:n}))}},d=function(e){var t=i.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=d(e.components);return i.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},f=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),s=d(n),c=a,f=s["".concat(l,".").concat(c)]||s[c]||m[c]||r;return n?i.createElement(f,o(o({ref:t},u),{},{components:n})):i.createElement(f,o({ref:t},u))}));function v(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=f;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var u=2;u<r;u++)l[u]=n[u];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}f.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.r(t),n.d(t,{default:()=>l});var i=n(67294),a=n(86010);const r="tabItem_Ymn6";function l(e){var t=e.children,n=e.hidden,l=e.className;return i.createElement("div",{role:"tabpanel",className:(0,a.default)(r,l),hidden:n},t)}},65488:(e,t,n)=>{n.r(t),n.d(t,{default:()=>m});var i=n(83117),a=n(67294),r=n(86010),l=n(72389),o=n(67392),p=n(7094),u=n(12466);const s="tabList__CuJ",d="tabItem_LNqP";function c(e){var t,n,l=e.lazy,c=e.block,m=e.defaultValue,f=e.values,v=e.groupId,g=e.className,h=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=f?f:h.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),y=(0,o.l)(b,(function(e,t){return e.value===t.value}));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var N=null===m?m:null!=(t=null!=m?m:null==(n=h.find((function(e){return e.props.default})))?void 0:n.props.value)?t:h[0].props.value;if(null!==N&&!b.some((function(e){return e.value===N})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+N+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var x=(0,p.U)(),w=x.tabGroupChoices,_=x.setTabGroupChoices,F=(0,a.useState)(N),D=F[0],O=F[1],S=[],P=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=v){var k=w[v];null!=k&&k!==D&&b.some((function(e){return e.value===k}))&&O(k)}var E=function(e){var t=e.currentTarget,n=S.indexOf(t),i=b[n].value;i!==D&&(P(t),O(i),null!=v&&_(v,String(i)))},K=function(e){var t,n=null;switch(e.key){case"ArrowRight":var i,a=S.indexOf(e.currentTarget)+1;n=null!=(i=S[a])?i:S[0];break;case"ArrowLeft":var r,l=S.indexOf(e.currentTarget)-1;n=null!=(r=S[l])?r:S[S.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:(0,r.default)("tabs-container",s)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.default)("tabs",{"tabs--block":c},g)},b.map((function(e){var t=e.value,n=e.label,l=e.attributes;return a.createElement("li",(0,i.Z)({role:"tab",tabIndex:D===t?0:-1,"aria-selected":D===t,key:t,ref:function(e){return S.push(e)},onKeyDown:K,onFocus:E,onClick:E},l,{className:(0,r.default)("tabs__item",d,null==l?void 0:l.className,{"tabs__item--active":D===t})}),null!=n?n:t)}))),l?(0,a.cloneElement)(h.filter((function(e){return e.props.value===D}))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},h.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==D})}))))}function m(e){var t=(0,l.default)();return a.createElement(c,(0,i.Z)({key:String(t)},e))}},81477:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>f,contentTitle:()=>c,default:()=>h,frontMatter:()=>d,metadata:()=>m,toc:()=>v});var i=n(83117),a=n(80102),r=(n(67294),n(3905)),l=n(44996),o=n(39960),p=n(65488),u=n(85162),s=["components"],d={id:"react-native-ios",title:"React Native - Manual iOS Setup",sidebar_label:"Manual iOS Setup"},c=void 0,m={unversionedId:"getting-started/react-native-ios",id:"getting-started/react-native-ios",title:"React Native - Manual iOS Setup",description:"These details within this page are for people manually adding Flipper to a React Native 0.62+ app. This should only be necessary if you have an existing app that cannot be upgraded with the",source:"@site/../docs/getting-started/react-native-ios.mdx",sourceDirName:"getting-started",slug:"/getting-started/react-native-ios",permalink:"/docs/getting-started/react-native-ios",draft:!1,editUrl:"https://github.com/facebook/flipper/blob/main/website/../docs/getting-started/react-native-ios.mdx",tags:[],version:"current",frontMatter:{id:"react-native-ios",title:"React Native - Manual iOS Setup",sidebar_label:"Manual iOS Setup"},sidebar:"main",previous:{title:"Manual Android Setup",permalink:"/docs/getting-started/react-native-android"},next:{title:"JavaScript (browser / Node.js)",permalink:"/docs/getting-started/javascript"}},f={},v=[{value:"Dependencies",id:"dependencies",level:2},{value:"React Native 0.63+",id:"react-native-063",level:3},{value:"React Native 0.62",id:"react-native-062",level:3},{value:"Initialization",id:"initialization",level:2},{value:"React Native 0.68+",id:"react-native-068",level:3},{value:"React Native 0.67",id:"react-native-067",level:3},{value:"Isues or questions",id:"isues-or-questions",level:2},{value:"Further Steps",id:"further-steps",level:2}],g={toc:v};function h(e){var t=e.components,n=(0,a.Z)(e,s);return(0,r.mdx)("wrapper",(0,i.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.mdx)("div",{parentName:"div",className:"admonition-heading"},(0,r.mdx)("h5",{parentName:"div"},(0,r.mdx)("span",{parentName:"h5",className:"admonition-icon"},(0,r.mdx)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.mdx)("div",{parentName:"div",className:"admonition-content"},(0,r.mdx)("p",{parentName:"div"},"These details within this page are for people manually adding Flipper to a React Native 0.62+ app. This should only be necessary if you have an existing app that cannot be upgraded with the\n",(0,r.mdx)("a",{parentName:"p",href:"https://reactnative.dev/docs/upgrading"},"React Native Upgrade tool"),"."))),(0,r.mdx)("h2",{id:"dependencies"},"Dependencies"),(0,r.mdx)("h3",{id:"react-native-063"},"React Native 0.63+"),(0,r.mdx)("p",null,"If using React Native 0.63 or later, your ",(0,r.mdx)("inlineCode",{parentName:"p"},"ios/Podfile")," should look like this:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-ruby"},"platform :ios, '10.0'\n\nrequire_relative '../node_modules/react-native/scripts/react_native_pods'\nrequire_relative '../node_modules/@react-native-community/cli-platform-ios/native_modules'\n\ntarget 'your-app-name' do\n  config = use_native_modules!\n  use_react_native!(path: config['reactNativePath'])\n\n  # Enables Flipper.\n  #\n  # Note that if you have use_frameworks! enabled, Flipper will not work and\n  # you should disable these next few lines.\n  use_flipper!({'Flipper' => '0.58.0'}) # should match the version of your Flipper client app\n  post_install do |installer|\n    flipper_post_install(installer)\n  end\nend\n")),(0,r.mdx)("p",null,"Install the dependencies by running ",(0,r.mdx)("inlineCode",{parentName:"p"},"cd ios && pod install")," then continue to ",(0,r.mdx)("a",{parentName:"p",href:"#initialization"},"Initialization"),"."),(0,r.mdx)("h3",{id:"react-native-062"},"React Native 0.62"),(0,r.mdx)("p",null,"In version 0.62, the setup includes a bit more code (which was moved to a helper in 0.63).\nAdd all of the code below to your ",(0,r.mdx)("inlineCode",{parentName:"p"},"ios/Podfile"),":"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-ruby"},"platform :ios, '9.0'\n\ndef flipper_pods()\n  flipperkit_version = '0.154.0' # should match the version of your Flipper client app\n  pod 'FlipperKit', '~>' + flipperkit_version, :configuration => 'Debug'\n  pod 'FlipperKit/FlipperKitLayoutPlugin', '~>' + flipperkit_version, :configuration => 'Debug'\n  pod 'FlipperKit/SKIOSNetworkPlugin', '~>' + flipperkit_version, :configuration => 'Debug'\n  pod 'FlipperKit/FlipperKitUserDefaultsPlugin', '~>' + flipperkit_version, :configuration => 'Debug'\n  pod 'FlipperKit/FlipperKitReactPlugin', '~>' + flipperkit_version, :configuration => 'Debug'\nend\n\n# Post Install processing for Flipper\ndef flipper_post_install(installer)\n  file_name = Dir.glob(\"*.xcodeproj\")[0]\n  app_project = Xcodeproj::Project.open(file_name)\n  app_project.native_targets.each do |target|\n    target.build_configurations.each do |config|\n      cflags = config.build_settings['OTHER_CFLAGS'] || '$(inherited) '\n      unless cflags.include? '-DFB_SONARKIT_ENABLED=1'\n        puts 'Adding -DFB_SONARKIT_ENABLED=1 in OTHER_CFLAGS...'\n        cflags << '-DFB_SONARKIT_ENABLED=1'\n      end\n      config.build_settings['OTHER_CFLAGS'] = cflags\n    end\n    app_project.save\n  end\n  installer.pods_project.save\nend\n\ntarget 'your-app-name' do\n  ...\n  # Replace the existing yoga import with the following (adding modular_headers):\n  pod 'Yoga', :path => '../node_modules/react-native/ReactCommon/yoga', :modular_headers => true\n  ...\n  use_native_modules!\n\n  # For enabling Flipper.\n  # Note that if you use_framework!, flipper will not work.\n  # Disable these lines if you are doing use_framework!\n  flipper_pods()\n  post_install do |installer|\n    flipper_post_install(installer)\n  end\nend\n")),(0,r.mdx)("p",null,"Install the dependencies by running ",(0,r.mdx)("inlineCode",{parentName:"p"},"cd ios && pod install"),". You can now import and initialize Flipper in your AppDelegate."),(0,r.mdx)("h2",{id:"initialization"},"Initialization"),(0,r.mdx)("p",null,"The code below enables the following integrations:"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Layout Inspector"),(0,r.mdx)("li",{parentName:"ul"},"Network"),(0,r.mdx)("li",{parentName:"ul"},"Shared Preferences"),(0,r.mdx)("li",{parentName:"ul"},"Crash Reporter")),(0,r.mdx)("h3",{id:"react-native-068"},"React Native 0.68+"),(0,r.mdx)("p",null,"If using React Native 0.68 or later, your AppDelegate should include"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-objc"},"...\n#import <React/RCTAppSetupUtils.h>\n")),(0,r.mdx)("p",null,"RCTAppSetupUtils takes care of initializing Flipper and the integrations mentioned above."),(0,r.mdx)("h3",{id:"react-native-067"},"React Native 0.67"),(0,r.mdx)(p.default,{defaultValue:"ios",values:[{label:"iOS",value:"ios"},{label:"Swift",value:"swift"}],mdxType:"Tabs"},(0,r.mdx)(u.default,{value:"ios",mdxType:"TabItem"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-objc"},"...\n#if DEBUG\n#ifdef FB_SONARKIT_ENABLED\n#import <FlipperKit/FlipperClient.h>\n#import <FlipperKitLayoutPlugin/FlipperKitLayoutPlugin.h>\n#import <FlipperKitLayoutPlugin/SKDescriptorMapper.h>\n#import <FlipperKitNetworkPlugin/FlipperKitNetworkPlugin.h>\n#import <FlipperKitReactPlugin/FlipperKitReactPlugin.h>\n#import <FlipperKitUserDefaultsPlugin/FKUserDefaultsPlugin.h>\n#import <SKIOSNetworkPlugin/SKIOSNetworkAdapter.h>\n#endif\n#endif\n\n@implementation AppDelegate\n\n- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions\n{\n  [self initializeFlipper:application];\n  ...\n}\n\n- (void) initializeFlipper:(UIApplication *)application {\n  #if DEBUG\n  #ifdef FB_SONARKIT_ENABLED\n    FlipperClient *client = [FlipperClient sharedClient];\n    SKDescriptorMapper *layoutDescriptorMapper = [[SKDescriptorMapper alloc] initWithDefaults];\n    [client addPlugin: [[FlipperKitLayoutPlugin alloc] initWithRootNode: application withDescriptorMapper: layoutDescriptorMapper]];\n    [client addPlugin: [[FKUserDefaultsPlugin alloc] initWithSuiteName:nil]];\n    [client addPlugin: [FlipperKitReactPlugin new]];\n    [client addPlugin: [[FlipperKitNetworkPlugin alloc] initWithNetworkAdapter:[SKIOSNetworkAdapter new]]];\n    [client start];\n  #endif\n  #endif\n}\n\n@end\n"))),(0,r.mdx)(u.default,{value:"swift",mdxType:"TabItem"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-swift"},"...\n#if DEBUG\n#if FB_SONARKIT_ENABLED\nimport FlipperKit\n#endif\n#endif\n\n@UIApplicationMain\nclass AppDelegate: UIResponder, UIApplicationDelegate {\n\n  func application(\n      _ application: UIApplication,\n      didFinishLaunchingWithOptions\n      launchOptions: [UIApplication.LaunchOptionsKey: Any]?\n    ) -> Bool {\n    initializeFlipper(with: application)\n    ...\n  }\n\n  private func initializeFlipper(with application: UIApplication) {\n    #if DEBUG\n    #if FB_SONARKIT_ENABLED\n      let client = FlipperClient.shared()\n      let layoutDescriptorMapper = SKDescriptorMapper(defaults: ())\n      FlipperKitLayoutComponentKitSupport.setUpWith(layoutDescriptorMapper)\n      client?.add(FlipperKitLayoutPlugin(rootNode: application, with: layoutDescriptorMapper!))\n      client?.add(FKUserDefaultsPlugin(suiteName: nil))\n      client?.add(FlipperKitReactPlugin())\n      client?.add(FlipperKitNetworkPlugin(networkAdapter: SKIOSNetworkAdapter()))\n      client?.add(FlipperReactPerformancePlugin.sharedInstance())\n      client?.start()\n    #endif\n    #endif\n  }\n}\n")))),(0,r.mdx)("p",null,"Lastly, open the Flipper desktop app, and run ",(0,r.mdx)("inlineCode",{parentName:"p"},"yarn ios")," in your terminal."),(0,r.mdx)("h2",{id:"isues-or-questions"},"Isues or questions"),(0,r.mdx)("p",null,"If you encounter any issues or have any questions, refer to the ",(0,r.mdx)("a",{parentName:"p",href:"/docs/getting-started/troubleshooting/"},"Troubleshooting")," section."),(0,r.mdx)("h2",{id:"further-steps"},"Further Steps"),(0,r.mdx)("p",null,"To create your own plugins and integrate with Flipper using JavaScript, check out our ",(0,r.mdx)(o.default,{to:(0,l.default)("/docs/tutorial/react-native"),mdxType:"Link"},"Building a React Native Plugin")," tutorial!"))}h.isMDXComponent=!0}}]);