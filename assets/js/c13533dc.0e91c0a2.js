"use strict";(self.webpackChunkakasha_docs=self.webpackChunkakasha_docs||[]).push([[1586],{80433:(e,a,t)=>{t.r(a),t.d(a,{Badge:()=>b,Bullet:()=>i,Details:()=>k,SpecifiedBy:()=>h,assets:()=>r,contentTitle:()=>d,default:()=>x,frontMatter:()=>s,metadata:()=>l,toc:()=>p});var n=t(74848),o=t(28453),c=t(96540);const s={id:"create-akasha-content-block-payload",title:"CreateAkashaContentBlockPayload"},d=void 0,l={id:"composedb-models/types/objects/create-akasha-content-block-payload",title:"CreateAkashaContentBlockPayload",description:"No description",source:"@site/docs/composedb-models/types/objects/create-akasha-content-block-payload.mdx",sourceDirName:"composedb-models/types/objects",slug:"/composedb-models/types/objects/create-akasha-content-block-payload",permalink:"/composedb-models/types/objects/create-akasha-content-block-payload",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"create-akasha-content-block-payload",title:"CreateAkashaContentBlockPayload"},sidebar:"defaultSidebar",previous:{title:"CreateAkashaBeamPayload",permalink:"/composedb-models/types/objects/create-akasha-beam-payload"},next:{title:"CreateAkashaProfileInterestsPayload",permalink:"/composedb-models/types/objects/create-akasha-profile-interests-payload"}},r={},i=()=>{const e={span:"span",...(0,o.R)()};return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},h=e=>{const a={a:"a",...(0,o.R)()};return(0,n.jsxs)(n.Fragment,{children:["Specification",(0,n.jsx)(a.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},b=e=>{const a={span:"span",...(0,o.R)()};return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(a.span,{className:e.class,children:e.text})})},k=({dataOpen:e,dataClose:a,children:t,startOpen:s=!1})=>{const d={details:"details",summary:"summary",...(0,o.R)()},[l,r]=(0,c.useState)(s);return(0,n.jsxs)(d.details,{...l?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,n.jsx)(d.summary,{onClick:e=>{e.preventDefault(),r((e=>!e))},style:{listStyle:"none"},children:l?e:a}),l&&t]})},p=[{value:"Fields",id:"fields",level:3},{value:'<code>CreateAkashaContentBlockPayload.<b>clientMutationId</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"createakashacontentblockpayloadclientmutationidstring-",level:4},{value:'<code>CreateAkashaContentBlockPayload.<b>document</b></code><Bullet></Bullet><code>AkashaContentBlock!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"createakashacontentblockpayloaddocumentakashacontentblock--",level:4},{value:'<code>CreateAkashaContentBlockPayload.<b>node</b></code><Bullet></Bullet><code>Node</code> <Badge class="badge badge--secondary"></Badge>',id:"createakashacontentblockpayloadnodenode-",level:4},{value:'<code>CreateAkashaContentBlockPayload.node.<b>id</b></code><Bullet></Bullet><code>ID!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"createakashacontentblockpayloadnodeidid--",level:5},{value:'<code>CreateAkashaContentBlockPayload.<b>viewer</b></code><Bullet></Bullet><code>CeramicAccount</code> <Badge class="badge badge--secondary"></Badge>',id:"createakashacontentblockpayloadviewerceramicaccount-",level:4},{value:"Returned By",id:"returned-by",level:3}];function u(e){const a={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",h5:"h5",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.p,{children:"No description"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-graphql",children:"type CreateAkashaContentBlockPayload {\n  clientMutationId: String\n  document: AkashaContentBlock!\n  node(\n    id: ID!\n  ): Node\n  viewer: CeramicAccount\n}\n"})}),"\n",(0,n.jsx)(a.h3,{id:"fields",children:"Fields"}),"\n",(0,n.jsxs)(a.h4,{id:"createakashacontentblockpayloadclientmutationidstring-",children:[(0,n.jsx)(a.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["CreateAkashaContentBlockPayload.",(0,n.jsx)("b",{children:"clientMutationId"})]})}),(0,n.jsx)(i,{}),(0,n.jsx)(a.a,{href:"/composedb-models/types/scalars/string",children:(0,n.jsx)(a.code,{children:"String"})})," ",(0,n.jsx)(b,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsx)(a.blockquote,{children:"\n"}),"\n",(0,n.jsxs)(a.h4,{id:"createakashacontentblockpayloaddocumentakashacontentblock--",children:[(0,n.jsx)(a.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["CreateAkashaContentBlockPayload.",(0,n.jsx)("b",{children:"document"})]})}),(0,n.jsx)(i,{}),(0,n.jsx)(a.a,{href:"/composedb-models/types/objects/akasha-content-block",children:(0,n.jsx)(a.code,{children:"AkashaContentBlock!"})})," ",(0,n.jsx)(b,{class:"badge badge--secondary",text:"non-null"})," ",(0,n.jsx)(b,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,n.jsx)(a.blockquote,{children:"\n"}),"\n",(0,n.jsxs)(a.h4,{id:"createakashacontentblockpayloadnodenode-",children:[(0,n.jsx)(a.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["CreateAkashaContentBlockPayload.",(0,n.jsx)("b",{children:"node"})]})}),(0,n.jsx)(i,{}),(0,n.jsx)(a.a,{href:"/composedb-models/types/interfaces/node",children:(0,n.jsx)(a.code,{children:"Node"})})," ",(0,n.jsx)(b,{class:"badge badge--secondary",text:"interface"})]}),"\n",(0,n.jsxs)(a.blockquote,{children:["\n",(0,n.jsx)(a.p,{children:"Fetches an object given its ID"}),"\n",(0,n.jsxs)(a.h5,{id:"createakashacontentblockpayloadnodeidid--",children:[(0,n.jsx)(a.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["CreateAkashaContentBlockPayload.node.",(0,n.jsx)("b",{children:"id"})]})}),(0,n.jsx)(i,{}),(0,n.jsx)(a.a,{href:"/composedb-models/types/scalars/id",children:(0,n.jsx)(a.code,{children:"ID!"})})," ",(0,n.jsx)(b,{class:"badge badge--secondary",text:"non-null"})," ",(0,n.jsx)(b,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsx)(a.p,{children:"The ID of an object"}),"\n"]}),"\n",(0,n.jsxs)(a.h4,{id:"createakashacontentblockpayloadviewerceramicaccount-",children:[(0,n.jsx)(a.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["CreateAkashaContentBlockPayload.",(0,n.jsx)("b",{children:"viewer"})]})}),(0,n.jsx)(i,{}),(0,n.jsx)(a.a,{href:"/composedb-models/types/objects/ceramic-account",children:(0,n.jsx)(a.code,{children:"CeramicAccount"})})," ",(0,n.jsx)(b,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,n.jsxs)(a.blockquote,{children:["\n",(0,n.jsx)(a.p,{children:"Account currently authenticated on the Ceramic instance, if set"}),"\n"]}),"\n",(0,n.jsx)(a.h3,{id:"returned-by",children:"Returned By"}),"\n",(0,n.jsxs)(a.p,{children:[(0,n.jsx)(a.a,{href:"/composedb-models/api/mutations/create-akasha-content-block",children:(0,n.jsx)(a.code,{children:"createAkashaContentBlock"})}),"  ",(0,n.jsx)(b,{class:"badge badge--secondary",text:"mutation"})]})]})}function x(e={}){const{wrapper:a}={...(0,o.R)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},28453:(e,a,t)=>{t.d(a,{R:()=>s,x:()=>d});var n=t(96540);const o={},c=n.createContext(o);function s(e){const a=n.useContext(c);return n.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function d(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),n.createElement(c.Provider,{value:a},e.children)}}}]);