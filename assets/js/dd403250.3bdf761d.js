"use strict";(self.webpackChunkakasha_docs=self.webpackChunkakasha_docs||[]).push([[92411],{90683:(e,a,s)=>{s.r(a),s.d(a,{Badge:()=>h,Bullet:()=>i,Details:()=>g,SpecifiedBy:()=>p,assets:()=>l,contentTitle:()=>c,default:()=>b,frontMatter:()=>d,metadata:()=>r,toc:()=>m});var n=s(74848),o=s(28453),t=s(96540);const d={id:"akasha-app-edge",title:"AkashaAppEdge"},c=void 0,r={id:"composedb-models/types/objects/akasha-app-edge",title:"AkashaAppEdge",description:"An edge in a connection.",source:"@site/docs/composedb-models/types/objects/akasha-app-edge.mdx",sourceDirName:"composedb-models/types/objects",slug:"/composedb-models/types/objects/akasha-app-edge",permalink:"/composedb-models/types/objects/akasha-app-edge",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"akasha-app-edge",title:"AkashaAppEdge"},sidebar:"defaultSidebar",previous:{title:"AkashaAppConnection",permalink:"/composedb-models/types/objects/akasha-app-connection"},next:{title:"AkashaAppInterfaceConnection",permalink:"/composedb-models/types/objects/akasha-app-interface-connection"}},l={},i=()=>{const e={span:"span",...(0,o.R)()};return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},p=e=>{const a={a:"a",...(0,o.R)()};return(0,n.jsxs)(n.Fragment,{children:["Specification",(0,n.jsx)(a.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},h=e=>{const a={span:"span",...(0,o.R)()};return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(a.span,{className:e.class,children:e.text})})},g=({dataOpen:e,dataClose:a,children:s,startOpen:d=!1})=>{const c={details:"details",summary:"summary",...(0,o.R)()},[r,l]=(0,t.useState)(d);return(0,n.jsxs)(c.details,{...r?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,n.jsx)(c.summary,{onClick:e=>{e.preventDefault(),l((e=>!e))},style:{listStyle:"none"},children:r?e:a}),r&&s]})},m=[{value:"Fields",id:"fields",level:3},{value:'<code>AkashaAppEdge.<b>cursor</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"akashaappedgecursorstring--",level:4},{value:'<code>AkashaAppEdge.<b>node</b></code><Bullet></Bullet><code>AkashaApp</code> <Badge class="badge badge--secondary"></Badge>',id:"akashaappedgenodeakashaapp-",level:4},{value:"Member Of",id:"member-of",level:3}];function u(e){const a={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.p,{children:"An edge in a connection."}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-graphql",children:"type AkashaAppEdge {\n  cursor: String!\n  node: AkashaApp\n}\n"})}),"\n",(0,n.jsx)(a.h3,{id:"fields",children:"Fields"}),"\n",(0,n.jsxs)(a.h4,{id:"akashaappedgecursorstring--",children:[(0,n.jsx)(a.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["AkashaAppEdge.",(0,n.jsx)("b",{children:"cursor"})]})}),(0,n.jsx)(i,{}),(0,n.jsx)(a.a,{href:"/composedb-models/types/scalars/string",children:(0,n.jsx)(a.code,{children:"String!"})})," ",(0,n.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,n.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsxs)(a.blockquote,{children:["\n",(0,n.jsx)(a.p,{children:"A cursor for use in pagination"}),"\n"]}),"\n",(0,n.jsxs)(a.h4,{id:"akashaappedgenodeakashaapp-",children:[(0,n.jsx)(a.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["AkashaAppEdge.",(0,n.jsx)("b",{children:"node"})]})}),(0,n.jsx)(i,{}),(0,n.jsx)(a.a,{href:"/composedb-models/types/objects/akasha-app",children:(0,n.jsx)(a.code,{children:"AkashaApp"})})," ",(0,n.jsx)(h,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,n.jsxs)(a.blockquote,{children:["\n",(0,n.jsx)(a.p,{children:"The item at the end of the edge"}),"\n"]}),"\n",(0,n.jsx)(a.h3,{id:"member-of",children:"Member Of"}),"\n",(0,n.jsxs)(a.p,{children:[(0,n.jsx)(a.a,{href:"/composedb-models/types/objects/akasha-app-connection",children:(0,n.jsx)(a.code,{children:"AkashaAppConnection"})}),"  ",(0,n.jsx)(h,{class:"badge badge--secondary",text:"object"})]})]})}function b(e={}){const{wrapper:a}={...(0,o.R)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},28453:(e,a,s)=>{s.d(a,{R:()=>d,x:()=>c});var n=s(96540);const o={},t=n.createContext(o);function d(e){const a=n.useContext(t);return n.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function c(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:d(e.components),n.createElement(t.Provider,{value:a},e.children)}}}]);