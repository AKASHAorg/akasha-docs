"use strict";(self.webpackChunkakasha_docs=self.webpackChunkakasha_docs||[]).push([[15573],{9550:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>l});var s=t(74848),i=t(28453);const o={},c="Event Bus",r={id:"event-bus/index",title:"Event Bus",description:"Extensions often need to communicate and react to changes occuring in other extensions. For example, when a user logs in through the",source:"@site/docs/event-bus/index.md",sourceDirName:"event-bus",slug:"/event-bus/",permalink:"/event-bus/",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:1718965939e3,frontMatter:{},sidebar:"defaultSidebar",previous:{title:"URI",permalink:"/composedb-models/types/scalars/uri"},next:{title:"Global Event Bus",permalink:"/event-bus/global-events/"}},a={},l=[{value:"UIEvents Bus",id:"uievents-bus",level:2},{value:"GlobalEvent Bus",id:"globalevent-bus",level:2},{value:"Why not using plugin system for inter-app communication?",id:"why-not-using-plugin-system-for-inter-app-communication",level:2}];function u(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"event-bus",children:"Event Bus"}),"\n",(0,s.jsx)(n.p,{children:"Extensions often need to communicate and react to changes occuring in other extensions. For example, when a user logs in through the\nAuthentication App, almost all of other extensions needs to update their state accordingly. Managing such inter-extension communication\nis done using an event bus."}),"\n",(0,s.jsx)(n.p,{children:"In short, an event bus allows publish/subscribe-style communication between different integrations without being directly dependent to\neach other. Extensions can emit or subscribe to these events independently which reduces inter-extension dependency."}),"\n",(0,s.jsx)(n.h2,{id:"uievents-bus",children:"UIEvents Bus"}),"\n",(0,s.jsxs)(n.p,{children:["UI event bus is accessible as props in root component of the integration ",(0,s.jsx)(n.code,{children:"(props.uiEvents)"}),". Currently this event bus is used to trigger UI changes such as showing/hiding the sidebar, mounting/unmounting extension-points, trigger theme change across all integrations, etc. The UI event bus is a ",(0,s.jsx)(n.code,{children:"rxjs Subject"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"globalevent-bus",children:"GlobalEvent Bus"}),"\n",(0,s.jsxs)(n.p,{children:["Global event bus is accessible through the sdk ",(0,s.jsx)(n.code,{children:"(sdk.api.globalChannel)"}),". Almost all calls to the sdk APIs methods will also trigger an event on the global event bus.\nThe Global event bus is a ",(0,s.jsx)(n.code,{children:"rxjs ReplaySubject"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"why-not-using-plugin-system-for-inter-app-communication",children:"Why not using plugin system for inter-app communication?"}),"\n",(0,s.jsx)(n.p,{children:"Using the plugin system for inter-extension communication is perfectly fine but it comes with some drawbacks when compared to an event bus:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Tight Coupling"}),": direct api calls create a tighter coupling between extensions."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Point-to-point Communication"}),": Plugins usually facilitate point-to-point communication, which can be less efficient when multiple extensions need to react to the same change."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Increased Complexity"}),": Updates to a plugin are not automatically reflected in the view so developers still needs to come up with their own synchronization mechanisms."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Static Contracts"}),": Using plugins for inter-extension communication create static contracts that needs to be maintained, versioned, etc."]}),"\n"]}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsx)(n.p,{children:"We will merge this 2 event buses in the future."})})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>r});var s=t(96540);const i={},o=s.createContext(i);function c(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);