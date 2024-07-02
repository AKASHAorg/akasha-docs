"use strict";(self.webpackChunkakasha_docs=self.webpackChunkakasha_docs||[]).push([[86461],{41634:(e,o,a)=>{a.r(o),a.d(o,{Badge:()=>h,Bullet:()=>i,Details:()=>b,SpecifiedBy:()=>g,assets:()=>r,contentTitle:()=>d,default:()=>m,frontMatter:()=>c,metadata:()=>l,toc:()=>k});var s=a(74848),n=a(28453),t=a(96540);const c={id:"akasha-block-storage-connection",title:"AkashaBlockStorageConnection"},d=void 0,l={id:"composedb-models/types/objects/akasha-block-storage-connection",title:"AkashaBlockStorageConnection",description:"A connection to a list of items.",source:"@site/docs/composedb-models/types/objects/akasha-block-storage-connection.mdx",sourceDirName:"composedb-models/types/objects",slug:"/composedb-models/types/objects/akasha-block-storage-connection",permalink:"/composedb-models/types/objects/akasha-block-storage-connection",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"akasha-block-storage-connection",title:"AkashaBlockStorageConnection"},sidebar:"defaultSidebar",previous:{title:"AkashaBeam",permalink:"/composedb-models/types/objects/akasha-beam"},next:{title:"AkashaBlockStorageEdge",permalink:"/composedb-models/types/objects/akasha-block-storage-edge"}},r={},i=()=>{const e={span:"span",...(0,n.R)()};return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},g=e=>{const o={a:"a",...(0,n.R)()};return(0,s.jsxs)(s.Fragment,{children:["Specification",(0,s.jsx)(o.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},h=e=>{const o={span:"span",...(0,n.R)()};return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(o.span,{className:e.class,children:e.text})})},b=({dataOpen:e,dataClose:o,children:a,startOpen:c=!1})=>{const d={details:"details",summary:"summary",...(0,n.R)()},[l,r]=(0,t.useState)(c);return(0,s.jsxs)(d.details,{...l?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,s.jsx)(d.summary,{onClick:e=>{e.preventDefault(),r((e=>!e))},style:{listStyle:"none"},children:l?e:o}),l&&a]})},k=[{value:"Fields",id:"fields",level:3},{value:'<code>AkashaBlockStorageConnection.<b>edges</b></code><Bullet></Bullet><code>[AkashaBlockStorageEdge]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"akashablockstorageconnectionedgesakashablockstorageedge--",level:4},{value:'<code>AkashaBlockStorageConnection.<b>pageInfo</b></code><Bullet></Bullet><code>PageInfo!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"akashablockstorageconnectionpageinfopageinfo--",level:4},{value:"Returned By",id:"returned-by",level:3},{value:"Member Of",id:"member-of",level:3}];function p(e){const o={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,n.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(o.p,{children:"A connection to a list of items."}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-graphql",children:"type AkashaBlockStorageConnection {\n  edges: [AkashaBlockStorageEdge]\n  pageInfo: PageInfo!\n}\n"})}),"\n",(0,s.jsx)(o.h3,{id:"fields",children:"Fields"}),"\n",(0,s.jsxs)(o.h4,{id:"akashablockstorageconnectionedgesakashablockstorageedge--",children:[(0,s.jsx)(o.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["AkashaBlockStorageConnection.",(0,s.jsx)("b",{children:"edges"})]})}),(0,s.jsx)(i,{}),(0,s.jsx)(o.a,{href:"/composedb-models/types/objects/akasha-block-storage-edge",children:(0,s.jsx)(o.code,{children:"[AkashaBlockStorageEdge]"})})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"list"})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,s.jsxs)(o.blockquote,{children:["\n",(0,s.jsx)(o.p,{children:"A list of edges."}),"\n"]}),"\n",(0,s.jsxs)(o.h4,{id:"akashablockstorageconnectionpageinfopageinfo--",children:[(0,s.jsx)(o.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["AkashaBlockStorageConnection.",(0,s.jsx)("b",{children:"pageInfo"})]})}),(0,s.jsx)(i,{}),(0,s.jsx)(o.a,{href:"/composedb-models/types/objects/page-info",children:(0,s.jsx)(o.code,{children:"PageInfo!"})})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,s.jsxs)(o.blockquote,{children:["\n",(0,s.jsx)(o.p,{children:"Information to aid in pagination."}),"\n"]}),"\n",(0,s.jsx)(o.h3,{id:"returned-by",children:"Returned By"}),"\n",(0,s.jsxs)(o.p,{children:[(0,s.jsx)(o.a,{href:"/composedb-models/api/queries/akasha-block-storage-index",children:(0,s.jsx)(o.code,{children:"akashaBlockStorageIndex"})}),"  ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"query"})]}),"\n",(0,s.jsx)(o.h3,{id:"member-of",children:"Member Of"}),"\n",(0,s.jsxs)(o.p,{children:[(0,s.jsx)(o.a,{href:"/composedb-models/types/objects/ceramic-account",children:(0,s.jsx)(o.code,{children:"CeramicAccount"})}),"  ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"object"})]})]})}function m(e={}){const{wrapper:o}={...(0,n.R)(),...e.components};return o?(0,s.jsx)(o,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},28453:(e,o,a)=>{a.d(o,{R:()=>c,x:()=>d});var s=a(96540);const n={},t=s.createContext(n);function c(e){const o=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function d(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:c(e.components),s.createElement(t.Provider,{value:o},e.children)}}}]);