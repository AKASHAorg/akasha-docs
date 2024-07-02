"use strict";(self.webpackChunkakasha_docs=self.webpackChunkakasha_docs||[]).push([[28815],{17437:(e,s,a)=>{a.r(s),a.d(s,{Badge:()=>x,Bullet:()=>c,Details:()=>u,SpecifiedBy:()=>h,assets:()=>r,contentTitle:()=>d,default:()=>g,frontMatter:()=>t,metadata:()=>i,toc:()=>f});var l=a(74848),o=a(28453),n=a(96540);const t={id:"akasha-follow-index",title:"akashaFollowIndex"},d=void 0,i={id:"composedb-models/api/queries/akasha-follow-index",title:"akashaFollowIndex",description:"No description",source:"@site/docs/composedb-models/api/queries/akasha-follow-index.mdx",sourceDirName:"composedb-models/api/queries",slug:"/composedb-models/api/queries/akasha-follow-index",permalink:"/composedb-models/api/queries/akasha-follow-index",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"akasha-follow-index",title:"akashaFollowIndex"},sidebar:"defaultSidebar",previous:{title:"akashaFollowCount",permalink:"/composedb-models/api/queries/akasha-follow-count"},next:{title:"akashaFollowInterfaceCount",permalink:"/composedb-models/api/queries/akasha-follow-interface-count"}},r={},c=()=>{const e={span:"span",...(0,o.R)()};return(0,l.jsx)(l.Fragment,{children:(0,l.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},h=e=>{const s={a:"a",...(0,o.R)()};return(0,l.jsxs)(l.Fragment,{children:["Specification",(0,l.jsx)(s.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},x=e=>{const s={span:"span",...(0,o.R)()};return(0,l.jsx)(l.Fragment,{children:(0,l.jsx)(s.span,{className:e.class,children:e.text})})},u=({dataOpen:e,dataClose:s,children:a,startOpen:t=!1})=>{const d={details:"details",summary:"summary",...(0,o.R)()},[i,r]=(0,n.useState)(t);return(0,l.jsxs)(d.details,{...i?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,l.jsx)(d.summary,{onClick:e=>{e.preventDefault(),r((e=>!e))},style:{listStyle:"none"},children:i?e:s}),i&&a]})},f=[{value:"Arguments",id:"arguments",level:3},{value:'<code>akashaFollowIndex.<b>after</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"akashafollowindexafterstring-",level:4},{value:'<code>akashaFollowIndex.<b>before</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"akashafollowindexbeforestring-",level:4},{value:'<code>akashaFollowIndex.<b>filters</b></code><Bullet></Bullet><code>AkashaFollowFiltersInput</code> <Badge class="badge badge--secondary"></Badge>',id:"akashafollowindexfiltersakashafollowfiltersinput-",level:4},{value:'<code>akashaFollowIndex.<b>first</b></code><Bullet></Bullet><code>Int</code> <Badge class="badge badge--secondary"></Badge>',id:"akashafollowindexfirstint-",level:4},{value:'<code>akashaFollowIndex.<b>last</b></code><Bullet></Bullet><code>Int</code> <Badge class="badge badge--secondary"></Badge>',id:"akashafollowindexlastint-",level:4},{value:'<code>akashaFollowIndex.<b>sorting</b></code><Bullet></Bullet><code>AkashaFollowSortingInput</code> <Badge class="badge badge--secondary"></Badge>',id:"akashafollowindexsortingakashafollowsortinginput-",level:4},{value:"Type",id:"type",level:3},{value:'<code>AkashaFollowConnection</code> <Badge class="badge badge--secondary"></Badge>',id:"akashafollowconnection-",level:4}];function p(e){const s={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(s.p,{children:"No description"}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-graphql",children:"akashaFollowIndex(\n  after: String\n  before: String\n  filters: AkashaFollowFiltersInput\n  first: Int\n  last: Int\n  sorting: AkashaFollowSortingInput\n): AkashaFollowConnection\n"})}),"\n",(0,l.jsx)(s.h3,{id:"arguments",children:"Arguments"}),"\n",(0,l.jsxs)(s.h4,{id:"akashafollowindexafterstring-",children:[(0,l.jsx)(s.a,{href:"#",children:(0,l.jsxs)("code",{style:{fontWeight:"normal"},children:["akashaFollowIndex.",(0,l.jsx)("b",{children:"after"})]})}),(0,l.jsx)(c,{}),(0,l.jsx)(s.a,{href:"/composedb-models/types/scalars/string",children:(0,l.jsx)(s.code,{children:"String"})})," ",(0,l.jsx)(x,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,l.jsxs)(s.blockquote,{children:["\n",(0,l.jsx)(s.p,{children:"Returns the items in the list that come after the specified cursor."}),"\n"]}),"\n",(0,l.jsxs)(s.h4,{id:"akashafollowindexbeforestring-",children:[(0,l.jsx)(s.a,{href:"#",children:(0,l.jsxs)("code",{style:{fontWeight:"normal"},children:["akashaFollowIndex.",(0,l.jsx)("b",{children:"before"})]})}),(0,l.jsx)(c,{}),(0,l.jsx)(s.a,{href:"/composedb-models/types/scalars/string",children:(0,l.jsx)(s.code,{children:"String"})})," ",(0,l.jsx)(x,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,l.jsxs)(s.blockquote,{children:["\n",(0,l.jsx)(s.p,{children:"Returns the items in the list that come before the specified cursor."}),"\n"]}),"\n",(0,l.jsxs)(s.h4,{id:"akashafollowindexfiltersakashafollowfiltersinput-",children:[(0,l.jsx)(s.a,{href:"#",children:(0,l.jsxs)("code",{style:{fontWeight:"normal"},children:["akashaFollowIndex.",(0,l.jsx)("b",{children:"filters"})]})}),(0,l.jsx)(c,{}),(0,l.jsx)(s.a,{href:"/composedb-models/types/inputs/akasha-follow-filters-input",children:(0,l.jsx)(s.code,{children:"AkashaFollowFiltersInput"})})," ",(0,l.jsx)(x,{class:"badge badge--secondary",text:"input"})]}),"\n",(0,l.jsx)(s.blockquote,{children:"\n"}),"\n",(0,l.jsxs)(s.h4,{id:"akashafollowindexfirstint-",children:[(0,l.jsx)(s.a,{href:"#",children:(0,l.jsxs)("code",{style:{fontWeight:"normal"},children:["akashaFollowIndex.",(0,l.jsx)("b",{children:"first"})]})}),(0,l.jsx)(c,{}),(0,l.jsx)(s.a,{href:"/composedb-models/types/scalars/int",children:(0,l.jsx)(s.code,{children:"Int"})})," ",(0,l.jsx)(x,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,l.jsxs)(s.blockquote,{children:["\n",(0,l.jsx)(s.p,{children:"Returns the first n items from the list."}),"\n"]}),"\n",(0,l.jsxs)(s.h4,{id:"akashafollowindexlastint-",children:[(0,l.jsx)(s.a,{href:"#",children:(0,l.jsxs)("code",{style:{fontWeight:"normal"},children:["akashaFollowIndex.",(0,l.jsx)("b",{children:"last"})]})}),(0,l.jsx)(c,{}),(0,l.jsx)(s.a,{href:"/composedb-models/types/scalars/int",children:(0,l.jsx)(s.code,{children:"Int"})})," ",(0,l.jsx)(x,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,l.jsxs)(s.blockquote,{children:["\n",(0,l.jsx)(s.p,{children:"Returns the last n items from the list."}),"\n"]}),"\n",(0,l.jsxs)(s.h4,{id:"akashafollowindexsortingakashafollowsortinginput-",children:[(0,l.jsx)(s.a,{href:"#",children:(0,l.jsxs)("code",{style:{fontWeight:"normal"},children:["akashaFollowIndex.",(0,l.jsx)("b",{children:"sorting"})]})}),(0,l.jsx)(c,{}),(0,l.jsx)(s.a,{href:"/composedb-models/types/inputs/akasha-follow-sorting-input",children:(0,l.jsx)(s.code,{children:"AkashaFollowSortingInput"})})," ",(0,l.jsx)(x,{class:"badge badge--secondary",text:"input"})]}),"\n",(0,l.jsx)(s.blockquote,{children:"\n"}),"\n",(0,l.jsx)(s.h3,{id:"type",children:"Type"}),"\n",(0,l.jsxs)(s.h4,{id:"akashafollowconnection-",children:[(0,l.jsx)(s.a,{href:"/composedb-models/types/objects/akasha-follow-connection",children:(0,l.jsx)(s.code,{children:"AkashaFollowConnection"})})," ",(0,l.jsx)(x,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,l.jsxs)(s.blockquote,{children:["\n",(0,l.jsx)(s.p,{children:"A connection to a list of items."}),"\n"]})]})}function g(e={}){const{wrapper:s}={...(0,o.R)(),...e.components};return s?(0,l.jsx)(s,{...e,children:(0,l.jsx)(p,{...e})}):p(e)}},28453:(e,s,a)=>{a.d(s,{R:()=>t,x:()=>d});var l=a(96540);const o={},n=l.createContext(o);function t(e){const s=l.useContext(n);return l.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:t(e.components),l.createElement(n.Provider,{value:s},e.children)}}}]);