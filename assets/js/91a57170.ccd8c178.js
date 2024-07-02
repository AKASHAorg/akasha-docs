"use strict";(self.webpackChunkakasha_docs=self.webpackChunkakasha_docs||[]).push([[41934],{55999:(e,a,s)=>{s.r(a),s.d(a,{Badge:()=>m,Bullet:()=>c,Details:()=>x,SpecifiedBy:()=>h,assets:()=>o,contentTitle:()=>r,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>b});var n=s(74848),t=s(28453),d=s(96540);const i={id:"akasha-beam-index",title:"akashaBeamIndex"},r=void 0,l={id:"composedb-models/api/queries/akasha-beam-index",title:"akashaBeamIndex",description:"No description",source:"@site/docs/composedb-models/api/queries/akasha-beam-index.mdx",sourceDirName:"composedb-models/api/queries",slug:"/composedb-models/api/queries/akasha-beam-index",permalink:"/composedb-models/api/queries/akasha-beam-index",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"akasha-beam-index",title:"akashaBeamIndex"},sidebar:"defaultSidebar",previous:{title:"akashaBeamCount",permalink:"/composedb-models/api/queries/akasha-beam-count"},next:{title:"akashaBeamInterfaceCount",permalink:"/composedb-models/api/queries/akasha-beam-interface-count"}},o={},c=()=>{const e={span:"span",...(0,t.R)()};return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},h=e=>{const a={a:"a",...(0,t.R)()};return(0,n.jsxs)(n.Fragment,{children:["Specification",(0,n.jsx)(a.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},m=e=>{const a={span:"span",...(0,t.R)()};return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(a.span,{className:e.class,children:e.text})})},x=({dataOpen:e,dataClose:a,children:s,startOpen:i=!1})=>{const r={details:"details",summary:"summary",...(0,t.R)()},[l,o]=(0,d.useState)(i);return(0,n.jsxs)(r.details,{...l?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,n.jsx)(r.summary,{onClick:e=>{e.preventDefault(),o((e=>!e))},style:{listStyle:"none"},children:l?e:a}),l&&s]})},b=[{value:"Arguments",id:"arguments",level:3},{value:'<code>akashaBeamIndex.<b>after</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"akashabeamindexafterstring-",level:4},{value:'<code>akashaBeamIndex.<b>before</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"akashabeamindexbeforestring-",level:4},{value:'<code>akashaBeamIndex.<b>filters</b></code><Bullet></Bullet><code>AkashaBeamFiltersInput</code> <Badge class="badge badge--secondary"></Badge>',id:"akashabeamindexfiltersakashabeamfiltersinput-",level:4},{value:'<code>akashaBeamIndex.<b>first</b></code><Bullet></Bullet><code>Int</code> <Badge class="badge badge--secondary"></Badge>',id:"akashabeamindexfirstint-",level:4},{value:'<code>akashaBeamIndex.<b>last</b></code><Bullet></Bullet><code>Int</code> <Badge class="badge badge--secondary"></Badge>',id:"akashabeamindexlastint-",level:4},{value:'<code>akashaBeamIndex.<b>sorting</b></code><Bullet></Bullet><code>AkashaBeamSortingInput</code> <Badge class="badge badge--secondary"></Badge>',id:"akashabeamindexsortingakashabeamsortinginput-",level:4},{value:"Type",id:"type",level:3},{value:'<code>AkashaBeamConnection</code> <Badge class="badge badge--secondary"></Badge>',id:"akashabeamconnection-",level:4}];function u(e){const a={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,t.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.p,{children:"No description"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-graphql",children:"akashaBeamIndex(\n  after: String\n  before: String\n  filters: AkashaBeamFiltersInput\n  first: Int\n  last: Int\n  sorting: AkashaBeamSortingInput\n): AkashaBeamConnection\n"})}),"\n",(0,n.jsx)(a.h3,{id:"arguments",children:"Arguments"}),"\n",(0,n.jsxs)(a.h4,{id:"akashabeamindexafterstring-",children:[(0,n.jsx)(a.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["akashaBeamIndex.",(0,n.jsx)("b",{children:"after"})]})}),(0,n.jsx)(c,{}),(0,n.jsx)(a.a,{href:"/composedb-models/types/scalars/string",children:(0,n.jsx)(a.code,{children:"String"})})," ",(0,n.jsx)(m,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsxs)(a.blockquote,{children:["\n",(0,n.jsx)(a.p,{children:"Returns the items in the list that come after the specified cursor."}),"\n"]}),"\n",(0,n.jsxs)(a.h4,{id:"akashabeamindexbeforestring-",children:[(0,n.jsx)(a.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["akashaBeamIndex.",(0,n.jsx)("b",{children:"before"})]})}),(0,n.jsx)(c,{}),(0,n.jsx)(a.a,{href:"/composedb-models/types/scalars/string",children:(0,n.jsx)(a.code,{children:"String"})})," ",(0,n.jsx)(m,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsxs)(a.blockquote,{children:["\n",(0,n.jsx)(a.p,{children:"Returns the items in the list that come before the specified cursor."}),"\n"]}),"\n",(0,n.jsxs)(a.h4,{id:"akashabeamindexfiltersakashabeamfiltersinput-",children:[(0,n.jsx)(a.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["akashaBeamIndex.",(0,n.jsx)("b",{children:"filters"})]})}),(0,n.jsx)(c,{}),(0,n.jsx)(a.a,{href:"/composedb-models/types/inputs/akasha-beam-filters-input",children:(0,n.jsx)(a.code,{children:"AkashaBeamFiltersInput"})})," ",(0,n.jsx)(m,{class:"badge badge--secondary",text:"input"})]}),"\n",(0,n.jsx)(a.blockquote,{children:"\n"}),"\n",(0,n.jsxs)(a.h4,{id:"akashabeamindexfirstint-",children:[(0,n.jsx)(a.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["akashaBeamIndex.",(0,n.jsx)("b",{children:"first"})]})}),(0,n.jsx)(c,{}),(0,n.jsx)(a.a,{href:"/composedb-models/types/scalars/int",children:(0,n.jsx)(a.code,{children:"Int"})})," ",(0,n.jsx)(m,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsxs)(a.blockquote,{children:["\n",(0,n.jsx)(a.p,{children:"Returns the first n items from the list."}),"\n"]}),"\n",(0,n.jsxs)(a.h4,{id:"akashabeamindexlastint-",children:[(0,n.jsx)(a.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["akashaBeamIndex.",(0,n.jsx)("b",{children:"last"})]})}),(0,n.jsx)(c,{}),(0,n.jsx)(a.a,{href:"/composedb-models/types/scalars/int",children:(0,n.jsx)(a.code,{children:"Int"})})," ",(0,n.jsx)(m,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsxs)(a.blockquote,{children:["\n",(0,n.jsx)(a.p,{children:"Returns the last n items from the list."}),"\n"]}),"\n",(0,n.jsxs)(a.h4,{id:"akashabeamindexsortingakashabeamsortinginput-",children:[(0,n.jsx)(a.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["akashaBeamIndex.",(0,n.jsx)("b",{children:"sorting"})]})}),(0,n.jsx)(c,{}),(0,n.jsx)(a.a,{href:"/composedb-models/types/inputs/akasha-beam-sorting-input",children:(0,n.jsx)(a.code,{children:"AkashaBeamSortingInput"})})," ",(0,n.jsx)(m,{class:"badge badge--secondary",text:"input"})]}),"\n",(0,n.jsx)(a.blockquote,{children:"\n"}),"\n",(0,n.jsx)(a.h3,{id:"type",children:"Type"}),"\n",(0,n.jsxs)(a.h4,{id:"akashabeamconnection-",children:[(0,n.jsx)(a.a,{href:"/composedb-models/types/objects/akasha-beam-connection",children:(0,n.jsx)(a.code,{children:"AkashaBeamConnection"})})," ",(0,n.jsx)(m,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,n.jsxs)(a.blockquote,{children:["\n",(0,n.jsx)(a.p,{children:"A connection to a list of items."}),"\n"]})]})}function p(e={}){const{wrapper:a}={...(0,t.R)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},28453:(e,a,s)=>{s.d(a,{R:()=>i,x:()=>r});var n=s(96540);const t={},d=n.createContext(t);function i(e){const a=n.useContext(d);return n.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function r(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),n.createElement(d.Provider,{value:a},e.children)}}}]);