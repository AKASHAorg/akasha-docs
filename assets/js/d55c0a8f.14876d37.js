"use strict";(self.webpackChunkakasha_docs=self.webpackChunkakasha_docs||[]).push([[79705],{1084:(e,a,t)=>{t.r(a),t.d(a,{Badge:()=>m,Bullet:()=>i,Details:()=>b,SpecifiedBy:()=>h,assets:()=>r,contentTitle:()=>d,default:()=>p,frontMatter:()=>c,metadata:()=>l,toc:()=>k});var s=t(74848),o=t(28453),n=t(96540);const c={id:"set-akasha-content-block-stream-payload",title:"SetAkashaContentBlockStreamPayload"},d=void 0,l={id:"composedb-models/types/objects/set-akasha-content-block-stream-payload",title:"SetAkashaContentBlockStreamPayload",description:"No description",source:"@site/docs/composedb-models/types/objects/set-akasha-content-block-stream-payload.mdx",sourceDirName:"composedb-models/types/objects",slug:"/composedb-models/types/objects/set-akasha-content-block-stream-payload",permalink:"/composedb-models/types/objects/set-akasha-content-block-stream-payload",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"set-akasha-content-block-stream-payload",title:"SetAkashaContentBlockStreamPayload"},sidebar:"defaultSidebar",previous:{title:"SetAkashaBlockStoragePayload",permalink:"/composedb-models/types/objects/set-akasha-block-storage-payload"},next:{title:"SetAkashaFollowPayload",permalink:"/composedb-models/types/objects/set-akasha-follow-payload"}},r={},i=()=>{const e={span:"span",...(0,o.R)()};return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},h=e=>{const a={a:"a",...(0,o.R)()};return(0,s.jsxs)(s.Fragment,{children:["Specification",(0,s.jsx)(a.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},m=e=>{const a={span:"span",...(0,o.R)()};return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(a.span,{className:e.class,children:e.text})})},b=({dataOpen:e,dataClose:a,children:t,startOpen:c=!1})=>{const d={details:"details",summary:"summary",...(0,o.R)()},[l,r]=(0,n.useState)(c);return(0,s.jsxs)(d.details,{...l?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,s.jsx)(d.summary,{onClick:e=>{e.preventDefault(),r((e=>!e))},style:{listStyle:"none"},children:l?e:a}),l&&t]})},k=[{value:"Fields",id:"fields",level:3},{value:'<code>SetAkashaContentBlockStreamPayload.<b>clientMutationId</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"setakashacontentblockstreampayloadclientmutationidstring-",level:4},{value:'<code>SetAkashaContentBlockStreamPayload.<b>document</b></code><Bullet></Bullet><code>AkashaContentBlockStream!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"setakashacontentblockstreampayloaddocumentakashacontentblockstream--",level:4},{value:'<code>SetAkashaContentBlockStreamPayload.<b>node</b></code><Bullet></Bullet><code>Node</code> <Badge class="badge badge--secondary"></Badge>',id:"setakashacontentblockstreampayloadnodenode-",level:4},{value:'<code>SetAkashaContentBlockStreamPayload.node.<b>id</b></code><Bullet></Bullet><code>ID!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"setakashacontentblockstreampayloadnodeidid--",level:5},{value:'<code>SetAkashaContentBlockStreamPayload.<b>viewer</b></code><Bullet></Bullet><code>CeramicAccount</code> <Badge class="badge badge--secondary"></Badge>',id:"setakashacontentblockstreampayloadviewerceramicaccount-",level:4},{value:"Returned By",id:"returned-by",level:3}];function u(e){const a={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",h5:"h5",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(a.p,{children:"No description"}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-graphql",children:"type SetAkashaContentBlockStreamPayload {\n  clientMutationId: String\n  document: AkashaContentBlockStream!\n  node(\n    id: ID!\n  ): Node\n  viewer: CeramicAccount\n}\n"})}),"\n",(0,s.jsx)(a.h3,{id:"fields",children:"Fields"}),"\n",(0,s.jsxs)(a.h4,{id:"setakashacontentblockstreampayloadclientmutationidstring-",children:[(0,s.jsx)(a.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["SetAkashaContentBlockStreamPayload.",(0,s.jsx)("b",{children:"clientMutationId"})]})}),(0,s.jsx)(i,{}),(0,s.jsx)(a.a,{href:"/composedb-models/types/scalars/string",children:(0,s.jsx)(a.code,{children:"String"})})," ",(0,s.jsx)(m,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,s.jsx)(a.blockquote,{children:"\n"}),"\n",(0,s.jsxs)(a.h4,{id:"setakashacontentblockstreampayloaddocumentakashacontentblockstream--",children:[(0,s.jsx)(a.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["SetAkashaContentBlockStreamPayload.",(0,s.jsx)("b",{children:"document"})]})}),(0,s.jsx)(i,{}),(0,s.jsx)(a.a,{href:"/composedb-models/types/objects/akasha-content-block-stream",children:(0,s.jsx)(a.code,{children:"AkashaContentBlockStream!"})})," ",(0,s.jsx)(m,{class:"badge badge--secondary",text:"non-null"})," ",(0,s.jsx)(m,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,s.jsx)(a.blockquote,{children:"\n"}),"\n",(0,s.jsxs)(a.h4,{id:"setakashacontentblockstreampayloadnodenode-",children:[(0,s.jsx)(a.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["SetAkashaContentBlockStreamPayload.",(0,s.jsx)("b",{children:"node"})]})}),(0,s.jsx)(i,{}),(0,s.jsx)(a.a,{href:"/composedb-models/types/interfaces/node",children:(0,s.jsx)(a.code,{children:"Node"})})," ",(0,s.jsx)(m,{class:"badge badge--secondary",text:"interface"})]}),"\n",(0,s.jsxs)(a.blockquote,{children:["\n",(0,s.jsx)(a.p,{children:"Fetches an object given its ID"}),"\n",(0,s.jsxs)(a.h5,{id:"setakashacontentblockstreampayloadnodeidid--",children:[(0,s.jsx)(a.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["SetAkashaContentBlockStreamPayload.node.",(0,s.jsx)("b",{children:"id"})]})}),(0,s.jsx)(i,{}),(0,s.jsx)(a.a,{href:"/composedb-models/types/scalars/id",children:(0,s.jsx)(a.code,{children:"ID!"})})," ",(0,s.jsx)(m,{class:"badge badge--secondary",text:"non-null"})," ",(0,s.jsx)(m,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,s.jsx)(a.p,{children:"The ID of an object"}),"\n"]}),"\n",(0,s.jsxs)(a.h4,{id:"setakashacontentblockstreampayloadviewerceramicaccount-",children:[(0,s.jsx)(a.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["SetAkashaContentBlockStreamPayload.",(0,s.jsx)("b",{children:"viewer"})]})}),(0,s.jsx)(i,{}),(0,s.jsx)(a.a,{href:"/composedb-models/types/objects/ceramic-account",children:(0,s.jsx)(a.code,{children:"CeramicAccount"})})," ",(0,s.jsx)(m,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,s.jsxs)(a.blockquote,{children:["\n",(0,s.jsx)(a.p,{children:"Account currently authenticated on the Ceramic instance, if set"}),"\n"]}),"\n",(0,s.jsx)(a.h3,{id:"returned-by",children:"Returned By"}),"\n",(0,s.jsxs)(a.p,{children:[(0,s.jsx)(a.a,{href:"/composedb-models/api/mutations/set-akasha-content-block-stream",children:(0,s.jsx)(a.code,{children:"setAkashaContentBlockStream"})}),"  ",(0,s.jsx)(m,{class:"badge badge--secondary",text:"mutation"})]})]})}function p(e={}){const{wrapper:a}={...(0,o.R)(),...e.components};return a?(0,s.jsx)(a,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},28453:(e,a,t)=>{t.d(a,{R:()=>c,x:()=>d});var s=t(96540);const o={},n=s.createContext(o);function c(e){const a=s.useContext(n);return s.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function d(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),s.createElement(n.Provider,{value:a},e.children)}}}]);