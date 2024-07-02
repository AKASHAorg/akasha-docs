"use strict";(self.webpackChunkakasha_docs=self.webpackChunkakasha_docs||[]).push([[86155],{83962:(e,a,d)=>{d.r(a),d.d(a,{Badge:()=>h,Bullet:()=>i,Details:()=>m,SpecifiedBy:()=>x,assets:()=>l,contentTitle:()=>c,default:()=>g,frontMatter:()=>r,metadata:()=>o,toc:()=>b});var s=d(74848),n=d(28453),t=d(96540);const r={id:"akasha-indexed-stream",title:"AkashaIndexedStream"},c=void 0,o={id:"composedb-models/types/objects/akasha-indexed-stream",title:"AkashaIndexedStream",description:"No description",source:"@site/docs/composedb-models/types/objects/akasha-indexed-stream.mdx",sourceDirName:"composedb-models/types/objects",slug:"/composedb-models/types/objects/akasha-indexed-stream",permalink:"/composedb-models/types/objects/akasha-indexed-stream",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"akasha-indexed-stream",title:"AkashaIndexedStream"},sidebar:"defaultSidebar",previous:{title:"AkashaIndexedStreamEdge",permalink:"/composedb-models/types/objects/akasha-indexed-stream-edge"},next:{title:"AkashaInterestsStreamConnection",permalink:"/composedb-models/types/objects/akasha-interests-stream-connection"}},l={},i=()=>{const e={span:"span",...(0,n.R)()};return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},x=e=>{const a={a:"a",...(0,n.R)()};return(0,s.jsxs)(s.Fragment,{children:["Specification",(0,s.jsx)(a.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},h=e=>{const a={span:"span",...(0,n.R)()};return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(a.span,{className:e.class,children:e.text})})},m=({dataOpen:e,dataClose:a,children:d,startOpen:r=!1})=>{const c={details:"details",summary:"summary",...(0,n.R)()},[o,l]=(0,t.useState)(r);return(0,s.jsxs)(c.details,{...o?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,s.jsx)(c.summary,{onClick:e=>{e.preventDefault(),l((e=>!e))},style:{listStyle:"none"},children:o?e:a}),o&&d]})},b=[{value:"Fields",id:"fields",level:3},{value:'<code>AkashaIndexedStream.<b>active</b></code><Bullet></Bullet><code>Boolean!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"akashaindexedstreamactiveboolean--",level:4},{value:'<code>AkashaIndexedStream.<b>createdAt</b></code><Bullet></Bullet><code>DateTime!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"akashaindexedstreamcreatedatdatetime--",level:4},{value:'<code>AkashaIndexedStream.<b>id</b></code><Bullet></Bullet><code>ID!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"akashaindexedstreamidid--",level:4},{value:'<code>AkashaIndexedStream.<b>indexType</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"akashaindexedstreamindextypestring--",level:4},{value:'<code>AkashaIndexedStream.<b>indexValue</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"akashaindexedstreamindexvaluestring--",level:4},{value:'<code>AkashaIndexedStream.<b>moderation</b></code><Bullet></Bullet><code>Node</code> <Badge class="badge badge--secondary"></Badge>',id:"akashaindexedstreammoderationnode-",level:4},{value:'<code>AkashaIndexedStream.<b>moderationID</b></code><Bullet></Bullet><code>CeramicStreamID</code> <Badge class="badge badge--secondary"></Badge>',id:"akashaindexedstreammoderationidceramicstreamid-",level:4},{value:'<code>AkashaIndexedStream.<b>status</b></code><Bullet></Bullet><code>AkashaIndexedStreamModerationStatus</code> <Badge class="badge badge--secondary"></Badge>',id:"akashaindexedstreamstatusakashaindexedstreammoderationstatus-",level:4},{value:'<code>AkashaIndexedStream.<b>stream</b></code><Bullet></Bullet><code>CeramicStreamID!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"akashaindexedstreamstreamceramicstreamid--",level:4},{value:'<code>AkashaIndexedStream.<b>streamType</b></code><Bullet></Bullet><code>AkashaIndexedStreamStreamType</code> <Badge class="badge badge--secondary"></Badge>',id:"akashaindexedstreamstreamtypeakashaindexedstreamstreamtype-",level:4},{value:'<code>AkashaIndexedStream.<b>streamView</b></code><Bullet></Bullet><code>Node</code> <Badge class="badge badge--secondary"></Badge>',id:"akashaindexedstreamstreamviewnode-",level:4},{value:"Interfaces",id:"interfaces",level:3},{value:'<code>AkashaIndexStreamInterface</code> <Badge class="badge badge--secondary"></Badge>',id:"akashaindexstreaminterface-",level:4},{value:'<code>Node</code> <Badge class="badge badge--secondary"></Badge>',id:"node-",level:4},{value:"Member Of",id:"member-of",level:3}];function j(e){const a={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,n.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(a.p,{children:"No description"}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-graphql",children:"type AkashaIndexedStream implements AkashaIndexStreamInterface, Node {\n  active: Boolean!\n  createdAt: DateTime!\n  id: ID!\n  indexType: String!\n  indexValue: String!\n  moderation: Node\n  moderationID: CeramicStreamID\n  status: AkashaIndexedStreamModerationStatus\n  stream: CeramicStreamID!\n  streamType: AkashaIndexedStreamStreamType\n  streamView: Node\n}\n"})}),"\n",(0,s.jsx)(a.h3,{id:"fields",children:"Fields"}),"\n",(0,s.jsxs)(a.h4,{id:"akashaindexedstreamactiveboolean--",children:[(0,s.jsx)(a.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["AkashaIndexedStream.",(0,s.jsx)("b",{children:"active"})]})}),(0,s.jsx)(i,{}),(0,s.jsx)(a.a,{href:"/composedb-models/types/scalars/boolean",children:(0,s.jsx)(a.code,{children:"Boolean!"})})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,s.jsx)(a.blockquote,{children:"\n"}),"\n",(0,s.jsxs)(a.h4,{id:"akashaindexedstreamcreatedatdatetime--",children:[(0,s.jsx)(a.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["AkashaIndexedStream.",(0,s.jsx)("b",{children:"createdAt"})]})}),(0,s.jsx)(i,{}),(0,s.jsx)(a.a,{href:"/composedb-models/types/scalars/date-time",children:(0,s.jsx)(a.code,{children:"DateTime!"})})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,s.jsx)(a.blockquote,{children:"\n"}),"\n",(0,s.jsxs)(a.h4,{id:"akashaindexedstreamidid--",children:[(0,s.jsx)(a.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["AkashaIndexedStream.",(0,s.jsx)("b",{children:"id"})]})}),(0,s.jsx)(i,{}),(0,s.jsx)(a.a,{href:"/composedb-models/types/scalars/id",children:(0,s.jsx)(a.code,{children:"ID!"})})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,s.jsx)(a.blockquote,{children:"\n"}),"\n",(0,s.jsxs)(a.h4,{id:"akashaindexedstreamindextypestring--",children:[(0,s.jsx)(a.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["AkashaIndexedStream.",(0,s.jsx)("b",{children:"indexType"})]})}),(0,s.jsx)(i,{}),(0,s.jsx)(a.a,{href:"/composedb-models/types/scalars/string",children:(0,s.jsx)(a.code,{children:"String!"})})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,s.jsx)(a.blockquote,{children:"\n"}),"\n",(0,s.jsxs)(a.h4,{id:"akashaindexedstreamindexvaluestring--",children:[(0,s.jsx)(a.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["AkashaIndexedStream.",(0,s.jsx)("b",{children:"indexValue"})]})}),(0,s.jsx)(i,{}),(0,s.jsx)(a.a,{href:"/composedb-models/types/scalars/string",children:(0,s.jsx)(a.code,{children:"String!"})})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,s.jsx)(a.blockquote,{children:"\n"}),"\n",(0,s.jsxs)(a.h4,{id:"akashaindexedstreammoderationnode-",children:[(0,s.jsx)(a.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["AkashaIndexedStream.",(0,s.jsx)("b",{children:"moderation"})]})}),(0,s.jsx)(i,{}),(0,s.jsx)(a.a,{href:"/composedb-models/types/interfaces/node",children:(0,s.jsx)(a.code,{children:"Node"})})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"interface"})]}),"\n",(0,s.jsx)(a.blockquote,{children:"\n"}),"\n",(0,s.jsxs)(a.h4,{id:"akashaindexedstreammoderationidceramicstreamid-",children:[(0,s.jsx)(a.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["AkashaIndexedStream.",(0,s.jsx)("b",{children:"moderationID"})]})}),(0,s.jsx)(i,{}),(0,s.jsx)(a.a,{href:"/composedb-models/types/scalars/ceramic-stream-id",children:(0,s.jsx)(a.code,{children:"CeramicStreamID"})})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,s.jsx)(a.blockquote,{children:"\n"}),"\n",(0,s.jsxs)(a.h4,{id:"akashaindexedstreamstatusakashaindexedstreammoderationstatus-",children:[(0,s.jsx)(a.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["AkashaIndexedStream.",(0,s.jsx)("b",{children:"status"})]})}),(0,s.jsx)(i,{}),(0,s.jsx)(a.a,{href:"/composedb-models/types/enums/akasha-indexed-stream-moderation-status",children:(0,s.jsx)(a.code,{children:"AkashaIndexedStreamModerationStatus"})})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,s.jsx)(a.blockquote,{children:"\n"}),"\n",(0,s.jsxs)(a.h4,{id:"akashaindexedstreamstreamceramicstreamid--",children:[(0,s.jsx)(a.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["AkashaIndexedStream.",(0,s.jsx)("b",{children:"stream"})]})}),(0,s.jsx)(i,{}),(0,s.jsx)(a.a,{href:"/composedb-models/types/scalars/ceramic-stream-id",children:(0,s.jsx)(a.code,{children:"CeramicStreamID!"})})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,s.jsx)(a.blockquote,{children:"\n"}),"\n",(0,s.jsxs)(a.h4,{id:"akashaindexedstreamstreamtypeakashaindexedstreamstreamtype-",children:[(0,s.jsx)(a.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["AkashaIndexedStream.",(0,s.jsx)("b",{children:"streamType"})]})}),(0,s.jsx)(i,{}),(0,s.jsx)(a.a,{href:"/composedb-models/types/enums/akasha-indexed-stream-stream-type",children:(0,s.jsx)(a.code,{children:"AkashaIndexedStreamStreamType"})})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,s.jsx)(a.blockquote,{children:"\n"}),"\n",(0,s.jsxs)(a.h4,{id:"akashaindexedstreamstreamviewnode-",children:[(0,s.jsx)(a.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["AkashaIndexedStream.",(0,s.jsx)("b",{children:"streamView"})]})}),(0,s.jsx)(i,{}),(0,s.jsx)(a.a,{href:"/composedb-models/types/interfaces/node",children:(0,s.jsx)(a.code,{children:"Node"})})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"interface"})]}),"\n",(0,s.jsx)(a.blockquote,{children:"\n"}),"\n",(0,s.jsx)(a.h3,{id:"interfaces",children:"Interfaces"}),"\n",(0,s.jsxs)(a.h4,{id:"akashaindexstreaminterface-",children:[(0,s.jsx)(a.a,{href:"/composedb-models/types/interfaces/akasha-index-stream-interface",children:(0,s.jsx)(a.code,{children:"AkashaIndexStreamInterface"})})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"interface"})]}),"\n",(0,s.jsx)(a.blockquote,{children:"\n"}),"\n",(0,s.jsxs)(a.h4,{id:"node-",children:[(0,s.jsx)(a.a,{href:"/composedb-models/types/interfaces/node",children:(0,s.jsx)(a.code,{children:"Node"})})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"interface"})]}),"\n",(0,s.jsxs)(a.blockquote,{children:["\n",(0,s.jsx)(a.p,{children:"An object with an ID"}),"\n"]}),"\n",(0,s.jsx)(a.h3,{id:"member-of",children:"Member Of"}),"\n",(0,s.jsxs)(a.p,{children:[(0,s.jsx)(a.a,{href:"/composedb-models/types/objects/akasha-indexed-stream-edge",children:(0,s.jsx)(a.code,{children:"AkashaIndexedStreamEdge"})}),"  ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"object"}),(0,s.jsx)(i,{}),(0,s.jsx)(a.a,{href:"/composedb-models/types/objects/ceramic-account",children:(0,s.jsx)(a.code,{children:"CeramicAccount"})}),"  ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"object"}),(0,s.jsx)(i,{}),(0,s.jsx)(a.a,{href:"/composedb-models/types/objects/enable-indexing-akasha-indexed-stream-payload",children:(0,s.jsx)(a.code,{children:"EnableIndexingAkashaIndexedStreamPayload"})}),"  ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"object"}),(0,s.jsx)(i,{}),(0,s.jsx)(a.a,{href:"/composedb-models/types/objects/set-akasha-indexed-stream-payload",children:(0,s.jsx)(a.code,{children:"SetAkashaIndexedStreamPayload"})}),"  ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"object"}),(0,s.jsx)(i,{}),(0,s.jsx)(a.a,{href:"/composedb-models/types/objects/update-akasha-indexed-stream-payload",children:(0,s.jsx)(a.code,{children:"UpdateAkashaIndexedStreamPayload"})}),"  ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"object"})]})]})}function g(e={}){const{wrapper:a}={...(0,n.R)(),...e.components};return a?(0,s.jsx)(a,{...e,children:(0,s.jsx)(j,{...e})}):j(e)}},28453:(e,a,d)=>{d.d(a,{R:()=>r,x:()=>c});var s=d(96540);const n={},t=s.createContext(n);function r(e){const a=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function c(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),s.createElement(t.Provider,{value:a},e.children)}}}]);