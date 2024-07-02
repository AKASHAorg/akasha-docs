"use strict";(self.webpackChunkakasha_docs=self.webpackChunkakasha_docs||[]).push([[10236],{45164:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>r,toc:()=>p});var s=t(74848),i=t(28453);const o={sidebar_position:3,sidebar_label:"Plugins"},a="Plugins",r={id:"extensions/plugins",title:"Plugins",description:"Integration with other apps can also happen at the data layer. Until now, we've presented a few ways in which apps can display different functionalities belonging to other apps (through extension points and content-blocks) but in some cases we are only interested in data. This is where we use plugins.",source:"@site/docs/extensions/plugins.md",sourceDirName:"extensions",slug:"/extensions/plugins",permalink:"/extensions/plugins",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:1719843115e3,sidebarPosition:3,frontMatter:{sidebar_position:3,sidebar_label:"Plugins"},sidebar:"defaultSidebar",previous:{title:"Widgets",permalink:"/extensions/widgets"},next:{title:"Layout Widget",permalink:"/extensions/layout_widget"}},l={},p=[{value:"Registration",id:"registration",level:2},{value:"Accessing and using plugins",id:"accessing-and-using-plugins",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"plugins",children:"Plugins"}),"\n",(0,s.jsxs)(n.p,{children:["Integration with other apps can also happen at the data layer. Until now, we've presented a few ways in which apps can display different functionalities belonging to other apps (through ",(0,s.jsx)(n.a,{href:"/extensions/extension_points",children:"extension points"})," and ",(0,s.jsx)(n.a,{href:"/extensions/content_blocks",children:"content-blocks"}),") but in some cases we are only interested in data. This is where we use plugins."]}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsxs)(n.p,{children:["Plugins do not ",(0,s.jsx)(n.code,{children:"render"})," anything in the view but can be used to store, retrieve and manipulate data."]})}),"\n",(0,s.jsx)(n.p,{children:"For example, let's say we are building an app, and we require a property from a specific profile app. We can do this by accessing the methods exposed by that specific profile through plugins."}),"\n",(0,s.jsxs)(n.p,{children:["It is ",(0,s.jsx)(n.strong,{children:"NOT"})," mandatory for the applications to also provide a plugin. However, the plugin system is a quite powerful way to integrate with other apps at the data layer."]}),"\n",(0,s.jsx)(n.h2,{id:"registration",children:"Registration"}),"\n",(0,s.jsxs)(n.p,{children:["Unlike the apps and widget plugins are registered using the ",(0,s.jsx)(n.code,{children:"getPlugin"})," function. getPlugin should be a named export from the entry file. This is an ",(0,s.jsx)(n.code,{children:"async"})," method that should return an object. There is no standard in the shape on this object however keep in mind that changing it should be done preserving backward compatibility."]}),"\n",(0,s.jsx)(n.p,{children:"Example of a plugin registration function:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",metastring:'title="index.ts"',children:"\nexport const getPlugin = async () => {\n  return {\n    // my plugin properties\n  };\n};\n"})}),"\n",(0,s.jsx)(n.p,{children:"Plugins are registered first, before"}),"\n",(0,s.jsx)(n.h2,{id:"accessing-and-using-plugins",children:"Accessing and using plugins"}),"\n",(0,s.jsx)(n.p,{children:"Plugins are passed to the register function and as well as to the root extension's component via props."}),"\n",(0,s.jsx)(n.p,{children:"Example of usage of a plugin in the register function:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"export const register = (opts) => {\n  const plugin = opts.plugins[someAppName];\n\n  plugin.someFunction();\n\n  return {\n    // ...\n  };\n};\n"})}),"\n",(0,s.jsx)(n.p,{children:"Example of using plugins in the React root component:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",children:"const MyRootComponent = (props: RootComponentProps) => {\n  const examplePlugin = props.plugins[appNameHere];\n  examplePlugin.someFunction();\n\n  return <>Hello World!</>;\n};\n"})}),"\n",(0,s.jsxs)(n.admonition,{type:"tip",children:[(0,s.jsxs)(n.p,{children:["In React you can use the already provided ",(0,s.jsx)(n.code,{children:"useRootComponentProps"})," to avoid prop-drilling."]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",children:"import { useRootComponentProps } from '@akashaorg/ui-awf-hooks';\n\n// deeply nested react component\nconst MyReactComponent = () => {\n  const { plugins } = useRootComponentProps();\n  const examplePlugin = plugins[appNameHere];\n  examplePlugin.saveLocalData(someData);\n  return <>Hello Plugins!</>;\n};\n"})})]})]})}function d(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>r});var s=t(96540);const i={},o=s.createContext(i);function a(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);