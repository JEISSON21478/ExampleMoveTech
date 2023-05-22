"use strict";(self.webpackChunkmovetech=self.webpackChunkmovetech||[]).push([[8358],{56768:function(e,t,o){o(72791);var n=o(54270),r=o(80184);t.Z=function(e){var t=e.title,o=e.description,i=e.children;return(0,r.jsxs)("div",{children:[(0,r.jsxs)(n.q,{children:[(0,r.jsx)("title",{children:t}),(0,r.jsx)("meta",{name:"description",content:o})]}),i]})}},84314:function(e,t,o){var n=o(1413),r=o(45987),i=o(72791),a=o(42195),l=o.n(a),c=o(64554),s=o(80184),d=["children"],u=(0,i.forwardRef)((function(e,t){var o=e.children,i=(0,r.Z)(e,d);return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)?(0,s.jsx)(c.Z,{ref:t,sx:{overflowX:"auto"},children:o}):(0,s.jsx)(l(),(0,n.Z)((0,n.Z)({ref:t},i),{},{children:o}))}));t.Z=u},38914:function(e,t,o){var n=o(1413),r=(o(72791),o(66934)),i=o(20890),a=o(80184),l=(0,r.ZP)((function(e){return(0,a.jsx)(i.Z,(0,n.Z)((0,n.Z)({variant:"h6"},e),{},{component:"label",htmlFor:e.htmlFor}))}))((function(){return{marginBottom:"5px",marginTop:"15px",display:"block"}}));t.Z=l},54433:function(e,t,o){var n=o(1413),r=(o(72791),o(66934)),i=o(64280),a=o(80184),l=(0,r.ZP)((function(e){return(0,a.jsx)(i.Z,(0,n.Z)({},e))}))((function(e){var t=e.theme;return{"& .MuiOutlinedInput-input::-webkit-input-placeholder":{color:"#767e89",opacity:"1"},"& .MuiOutlinedInput-notchedOutline":{borderColor:"".concat("dark"===t.palette.mode?"rgba(255, 255, 255, 0.12)":"#dee3e9")},"& .MuiOutlinedInput-input.Mui-disabled":{backgroundColor:"".concat("dark"===t.palette.mode?"rgba(0, 0, 0, 0.12) ":"#f8f9fb ")},"& .MuiOutlinedInput-input.Mui-disabled::-webkit-input-placeholder":{color:"#767e89",opacity:"1"}}}));t.Z=l},69148:function(e,t,o){o(72791);var n=o(61889),r=o(20890),i=o(93517),a=o(50533),l=o(64554),c=o(11087),s=o(98333),d=o(80184);t.Z=function(e){var t=e.subtitle,o=e.items,u=e.title,p=e.children;return(0,d.jsxs)(n.ZP,{container:!0,sx:{p:"15px"},children:[(0,d.jsxs)(n.ZP,{item:!0,xs:12,sm:6,lg:8,children:[(0,d.jsx)(r.Z,{color:"textSecondary",fontWeight:"400",variant:"h4",children:t}),(0,d.jsx)(i.Z,{separator:(0,d.jsx)(s.Z,{fontSize:"small"}),"aria-label":"breadcrumb",children:o?o.map((function(e){return(0,d.jsx)("div",{children:e.to?(0,d.jsx)(a.Z,{underline:"none",color:"inherit",component:c.OL,to:e.to,children:e.title}):(0,d.jsx)(r.Z,{color:"textPrimary",children:e.title})},e.title)})):""}),(0,d.jsx)(r.Z,{fontWeight:"700",variant:"h1",sx:{lineHeight:"1.235"},children:u})]}),(0,d.jsx)(n.ZP,{item:!0,xs:12,sm:6,lg:4,display:"flex",alignItems:"flex-end",children:(0,d.jsx)(l.Z,{sx:{display:{xs:"none",md:"block",lg:"flex"},alignItems:"center",justifyContent:"flex-end",width:"100%"},children:p})})]})}},88358:function(e,t,o){o.r(t),o.d(t,{default:function(){return O}});var n=o(29439),r=o(72791),i=o(57621),a=o(64554),l=o(69148),c=o(56768),s=o(4942),d=o(95193),u=o(1598),p=o(94721),h=o(20890),v=o(36314),f=o(49900),m=o(20068),x=o(13400),b=o(59434),g=o(74330),Z=o.n(g),y=o(84314),S=o(31243),w=o(46721),z=function(e,t,o){return{type:w.Bv,id:e,field:t,value:o}},C=o(54433),j=o(80184),k=function(){var e=(0,b.I0)(),t=(0,b.v9)((function(e){return e.notesReducer.notesContent})),o=(0,b.v9)((function(e){return e.notesReducer.noteSearch}));(0,r.useEffect)((function(){e((function(e){S.Z.get("/api/data/notes/NotesData").then((function(t){e({type:w.Oe,notes:t.data})})).catch((function(e){return e}))}))}),[e]);var n=(0,b.v9)((function(e){return function(e,t){return""!==t?e.filter((function(e){return!e.deleted&&e.title.toLocaleLowerCase().concat(" ").includes(t.toLocaleLowerCase())})):e.filter((function(e){return!e.deleted}))}(e.notesReducer.notes,e.notesReducer.noteSearch)}));return(0,j.jsxs)(a.Z,{children:[(0,j.jsx)(a.Z,{sx:{p:"15px"},children:(0,j.jsx)(C.Z,{id:"search",value:o,placeholder:"Search Notes",inputProps:{"aria-label":"Search Notes"},size:"small",type:"search",variant:"outlined",fullWidth:!0,onChange:function(t){return e(function(e){return{type:w.jF,searchTerm:e}}(t.target.value))}})}),(0,j.jsx)(p.Z,{}),(0,j.jsx)(a.Z,{sx:{height:{lg:"calc(100vh - 365px)",sm:"100vh"}},children:(0,j.jsx)(y.Z,{children:n&&n.length?n.map((function(o){return(0,j.jsxs)("div",{children:[(0,j.jsxs)(a.Z,{p:2,sx:{position:"relative",cursor:"pointer",backgroundColor:t===o.id?"rgba(230,244,255,0.3)":""},onClick:function(){return e((t=o.id,{type:w.$P,id:t}));var t},children:[(0,j.jsx)(a.Z,{sx:{position:"absolute",width:"5px",height:"100%",left:0,top:0,backgroundColor:"secondary"===o.color?function(e){return e.palette.secondary.main}:"error"===o.color?function(e){return e.palette.error.main}:"warning"===o.color?function(e){return e.palette.warning.main}:"success"===o.color?function(e){return e.palette.success.main}:(o.color,function(e){return e.palette.primary.main})}}),(0,j.jsx)(h.Z,{variant:"h5",sx:{width:"240px"},noWrap:!0,children:o.title}),(0,j.jsxs)(v.Z,{direction:"row",justifyContent:"space-between",alignItems:"center",spacing:2,children:[(0,j.jsx)(f.Z,{secondary:new Date(o.datef).toLocaleDateString({weekday:"short",year:"numeric",month:"short"})}),(0,j.jsx)(m.Z,{title:"Delete",children:(0,j.jsx)(x.Z,{"aria-label":"delete",size:"small",sx:{flexShrink:"0"},onClick:function(){return e((t=o.id,{type:w.fP,id:t}));var t},children:(0,j.jsx)(Z(),{icon:"trash-2",width:"16"})})})]})]}),(0,j.jsx)(p.Z,{})]},o.id)})):"No Notes Found"})})]})},R=function(e){var t=e.isMobileSidebarOpen,o=e.onSidebarClose;return(0,d.Z)((function(e){return e.breakpoints.up("lg")}))?(0,j.jsx)(u.ZP,{sx:(0,s.Z)({width:260,flexShrink:0,zIndex:1},"& .MuiDrawer-paper",{position:"relative"}),variant:"permanent",children:(0,j.jsx)(k,{})}):(0,j.jsx)(u.ZP,{sx:(0,s.Z)({width:260,zIndex:1},"& .MuiDrawer-paper",{width:290,paddingTop:"70px"}),open:t,onClose:o,variant:"temporary",children:(0,j.jsx)(k,{})})},I=o(24518),N=o(49877),M=o(38914),F=function(e){var t,o,n=e.toggleNoteSidebar,r=(0,b.v9)((function(e){return e.notesReducer.notes[e.notesReducer.notesContent-1]})),i=(0,b.v9)((function(e){return e.notesReducer.notes.length+1})),l=(0,b.I0)();return(0,j.jsxs)(a.Z,{children:[(0,j.jsxs)(a.Z,{display:"flex",alignItems:"center",p:2,children:[(0,j.jsx)(a.Z,{sx:{display:{xs:"block",md:"block",lg:"none"},mr:"10px"},children:(0,j.jsx)(Z(),{icon:"menu",width:"18",onClick:n})}),(0,j.jsx)("input",{style:{display:"none"},type:"text",name:"title",id:"title",ref:function(e){t=e}}),(0,j.jsx)("input",{style:{display:"none"},type:"text",name:"color",id:"color",ref:function(e){o=e}}),(0,j.jsx)(I.Z,{variant:"contained",disableElevation:!0,color:"primary",style:{marginLeft:"auto"},onClick:function(e){e.preventDefault(),l(function(e){return{type:w.IZ,id:e++,color:function(e){return e.palette.primary.main},title:"This is new Note"}}(i,t.value,o.value)),t.value="",o.value="#1a97f5"},children:"Add Notes"})]}),(0,j.jsx)(p.Z,{}),r&&!1===r.deleted?(0,j.jsxs)(a.Z,{p:2,children:[(0,j.jsx)(M.Z,{htmlFor:"outlined-multiline-static",children:"Edit Note"}),(0,j.jsx)(C.Z,{id:"outlined-multiline-static",placeholder:"Edit Note",multiline:!0,fullWidth:!0,rows:4,variant:"outlined",value:r.title,onChange:function(e){return l(z(r.id,"title",e.target.value))}}),(0,j.jsx)("br",{}),(0,j.jsx)(M.Z,{htmlFor:"demo-simple-select-label",children:"Change Note Color"}),[{lineColor:"#fdc90f",disp:"warning"},{lineColor:"#1a97f5",disp:"primary"},{lineColor:"#fc4b6c",disp:"error"},{lineColor:"#39cb7f",disp:"success"},{lineColor:"#1e4db7",disp:"secondary"}].map((function(e){return(0,j.jsx)(N.Z,{color:"primary",style:{backgroundColor:e.lineColor},sx:{marginRight:"3px"},size:"small",onClick:function(){return l(z(r.id,"color",e.disp))},children:r.color===e.disp?(0,j.jsx)(Z(),{icon:"check",size:"16"}):""},e.disp)}))]}):(0,j.jsx)(a.Z,{sx:{textAlign:"center",fontSize:"24px",mt:2},children:"Select a Note"})]})},P=[{to:"/",title:"Home"},{title:"Notes"}],O=function(){var e=(0,r.useState)(!0),t=(0,n.Z)(e,2),o=t[0],s=t[1];return(0,j.jsxs)(c.Z,{title:"Notes ui",description:"this is Note page",children:[(0,j.jsx)(l.Z,{title:"Note app",items:P}),(0,j.jsxs)(i.Z,{sx:{display:"flex",p:0},children:[(0,j.jsx)(R,{isMobileSidebarOpen:o,onSidebarClose:function(){return s(!1)}}),(0,j.jsx)(a.Z,{flexGrow:1,children:(0,j.jsx)(F,{toggleNoteSidebar:function(){return s(!0)}})})]})]})}},91793:function(e,t,o){var n=o(72791).createContext({});t.Z=n},24518:function(e,t,o){o.d(t,{Z:function(){return j}});var n=o(4942),r=o(63366),i=o(87462),a=o(72791),l=o(28182),c=o(35735),s=o(94419),d=o(12065),u=o(66934),p=o(31402),h=o(23701),v=o(14036),f=o(75878),m=o(21217);function x(e){return(0,m.Z)("MuiButton",e)}var b=(0,f.Z)("MuiButton",["root","text","textInherit","textPrimary","textSecondary","textSuccess","textError","textInfo","textWarning","outlined","outlinedInherit","outlinedPrimary","outlinedSecondary","outlinedSuccess","outlinedError","outlinedInfo","outlinedWarning","contained","containedInherit","containedPrimary","containedSecondary","containedSuccess","containedError","containedInfo","containedWarning","disableElevation","focusVisible","disabled","colorInherit","textSizeSmall","textSizeMedium","textSizeLarge","outlinedSizeSmall","outlinedSizeMedium","outlinedSizeLarge","containedSizeSmall","containedSizeMedium","containedSizeLarge","sizeMedium","sizeSmall","sizeLarge","fullWidth","startIcon","endIcon","iconSizeSmall","iconSizeMedium","iconSizeLarge"]),g=o(91793),Z=o(80184),y=["children","color","component","className","disabled","disableElevation","disableFocusRipple","endIcon","focusVisibleClassName","fullWidth","size","startIcon","type","variant"],S=function(e){return(0,i.Z)({},"small"===e.size&&{"& > *:nth-of-type(1)":{fontSize:18}},"medium"===e.size&&{"& > *:nth-of-type(1)":{fontSize:20}},"large"===e.size&&{"& > *:nth-of-type(1)":{fontSize:22}})},w=(0,u.ZP)(h.Z,{shouldForwardProp:function(e){return(0,u.FO)(e)||"classes"===e},name:"MuiButton",slot:"Root",overridesResolver:function(e,t){var o=e.ownerState;return[t.root,t[o.variant],t["".concat(o.variant).concat((0,v.Z)(o.color))],t["size".concat((0,v.Z)(o.size))],t["".concat(o.variant,"Size").concat((0,v.Z)(o.size))],"inherit"===o.color&&t.colorInherit,o.disableElevation&&t.disableElevation,o.fullWidth&&t.fullWidth]}})((function(e){var t,o,r,a=e.theme,l=e.ownerState,c="light"===a.palette.mode?a.palette.grey[300]:a.palette.grey[800],s="light"===a.palette.mode?a.palette.grey.A100:a.palette.grey[700];return(0,i.Z)({},a.typography.button,(t={minWidth:64,padding:"6px 16px",borderRadius:(a.vars||a).shape.borderRadius,transition:a.transitions.create(["background-color","box-shadow","border-color","color"],{duration:a.transitions.duration.short}),"&:hover":(0,i.Z)({textDecoration:"none",backgroundColor:a.vars?"rgba(".concat(a.vars.palette.text.primaryChannel," / ").concat(a.vars.palette.action.hoverOpacity,")"):(0,d.Fq)(a.palette.text.primary,a.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"text"===l.variant&&"inherit"!==l.color&&{backgroundColor:a.vars?"rgba(".concat(a.vars.palette[l.color].mainChannel," / ").concat(a.vars.palette.action.hoverOpacity,")"):(0,d.Fq)(a.palette[l.color].main,a.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"outlined"===l.variant&&"inherit"!==l.color&&{border:"1px solid ".concat((a.vars||a).palette[l.color].main),backgroundColor:a.vars?"rgba(".concat(a.vars.palette[l.color].mainChannel," / ").concat(a.vars.palette.action.hoverOpacity,")"):(0,d.Fq)(a.palette[l.color].main,a.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"contained"===l.variant&&{backgroundColor:a.vars?a.vars.palette.Button.inheritContainedHoverBg:s,boxShadow:(a.vars||a).shadows[4],"@media (hover: none)":{boxShadow:(a.vars||a).shadows[2],backgroundColor:(a.vars||a).palette.grey[300]}},"contained"===l.variant&&"inherit"!==l.color&&{backgroundColor:(a.vars||a).palette[l.color].dark,"@media (hover: none)":{backgroundColor:(a.vars||a).palette[l.color].main}}),"&:active":(0,i.Z)({},"contained"===l.variant&&{boxShadow:(a.vars||a).shadows[8]})},(0,n.Z)(t,"&.".concat(b.focusVisible),(0,i.Z)({},"contained"===l.variant&&{boxShadow:(a.vars||a).shadows[6]})),(0,n.Z)(t,"&.".concat(b.disabled),(0,i.Z)({color:(a.vars||a).palette.action.disabled},"outlined"===l.variant&&{border:"1px solid ".concat((a.vars||a).palette.action.disabledBackground)},"contained"===l.variant&&{color:(a.vars||a).palette.action.disabled,boxShadow:(a.vars||a).shadows[0],backgroundColor:(a.vars||a).palette.action.disabledBackground})),t),"text"===l.variant&&{padding:"6px 8px"},"text"===l.variant&&"inherit"!==l.color&&{color:(a.vars||a).palette[l.color].main},"outlined"===l.variant&&{padding:"5px 15px",border:"1px solid currentColor"},"outlined"===l.variant&&"inherit"!==l.color&&{color:(a.vars||a).palette[l.color].main,border:a.vars?"1px solid rgba(".concat(a.vars.palette[l.color].mainChannel," / 0.5)"):"1px solid ".concat((0,d.Fq)(a.palette[l.color].main,.5))},"contained"===l.variant&&{color:a.vars?a.vars.palette.text.primary:null==(o=(r=a.palette).getContrastText)?void 0:o.call(r,a.palette.grey[300]),backgroundColor:a.vars?a.vars.palette.Button.inheritContainedBg:c,boxShadow:(a.vars||a).shadows[2]},"contained"===l.variant&&"inherit"!==l.color&&{color:(a.vars||a).palette[l.color].contrastText,backgroundColor:(a.vars||a).palette[l.color].main},"inherit"===l.color&&{color:"inherit",borderColor:"currentColor"},"small"===l.size&&"text"===l.variant&&{padding:"4px 5px",fontSize:a.typography.pxToRem(13)},"large"===l.size&&"text"===l.variant&&{padding:"8px 11px",fontSize:a.typography.pxToRem(15)},"small"===l.size&&"outlined"===l.variant&&{padding:"3px 9px",fontSize:a.typography.pxToRem(13)},"large"===l.size&&"outlined"===l.variant&&{padding:"7px 21px",fontSize:a.typography.pxToRem(15)},"small"===l.size&&"contained"===l.variant&&{padding:"4px 10px",fontSize:a.typography.pxToRem(13)},"large"===l.size&&"contained"===l.variant&&{padding:"8px 22px",fontSize:a.typography.pxToRem(15)},l.fullWidth&&{width:"100%"})}),(function(e){var t;return e.ownerState.disableElevation&&(t={boxShadow:"none","&:hover":{boxShadow:"none"}},(0,n.Z)(t,"&.".concat(b.focusVisible),{boxShadow:"none"}),(0,n.Z)(t,"&:active",{boxShadow:"none"}),(0,n.Z)(t,"&.".concat(b.disabled),{boxShadow:"none"}),t)})),z=(0,u.ZP)("span",{name:"MuiButton",slot:"StartIcon",overridesResolver:function(e,t){var o=e.ownerState;return[t.startIcon,t["iconSize".concat((0,v.Z)(o.size))]]}})((function(e){var t=e.ownerState;return(0,i.Z)({display:"inherit",marginRight:8,marginLeft:-4},"small"===t.size&&{marginLeft:-2},S(t))})),C=(0,u.ZP)("span",{name:"MuiButton",slot:"EndIcon",overridesResolver:function(e,t){var o=e.ownerState;return[t.endIcon,t["iconSize".concat((0,v.Z)(o.size))]]}})((function(e){var t=e.ownerState;return(0,i.Z)({display:"inherit",marginRight:-4,marginLeft:8},"small"===t.size&&{marginRight:-2},S(t))})),j=a.forwardRef((function(e,t){var o=a.useContext(g.Z),n=(0,c.Z)(o,e),d=(0,p.Z)({props:n,name:"MuiButton"}),u=d.children,h=d.color,f=void 0===h?"primary":h,m=d.component,b=void 0===m?"button":m,S=d.className,j=d.disabled,k=void 0!==j&&j,R=d.disableElevation,I=void 0!==R&&R,N=d.disableFocusRipple,M=void 0!==N&&N,F=d.endIcon,P=d.focusVisibleClassName,O=d.fullWidth,B=void 0!==O&&O,W=d.size,E=void 0===W?"medium":W,T=d.startIcon,L=d.type,V=d.variant,D=void 0===V?"text":V,A=(0,r.Z)(d,y),q=(0,i.Z)({},d,{color:f,component:b,disabled:k,disableElevation:I,disableFocusRipple:M,fullWidth:B,size:E,type:L,variant:D}),G=function(e){var t=e.color,o=e.disableElevation,n=e.fullWidth,r=e.size,a=e.variant,l=e.classes,c={root:["root",a,"".concat(a).concat((0,v.Z)(t)),"size".concat((0,v.Z)(r)),"".concat(a,"Size").concat((0,v.Z)(r)),"inherit"===t&&"colorInherit",o&&"disableElevation",n&&"fullWidth"],label:["label"],startIcon:["startIcon","iconSize".concat((0,v.Z)(r))],endIcon:["endIcon","iconSize".concat((0,v.Z)(r))]},d=(0,s.Z)(c,x,l);return(0,i.Z)({},l,d)}(q),H=T&&(0,Z.jsx)(z,{className:G.startIcon,ownerState:q,children:T}),$=F&&(0,Z.jsx)(C,{className:G.endIcon,ownerState:q,children:F});return(0,Z.jsxs)(w,(0,i.Z)({ownerState:q,className:(0,l.Z)(o.className,G.root,S),component:b,disabled:k,focusRipple:!M,focusVisibleClassName:(0,l.Z)(G.focusVisible,P),ref:t,type:L},A,{classes:G,children:[H,u,$]}))}))},49877:function(e,t,o){o.d(t,{Z:function(){return Z}});var n=o(4942),r=o(63366),i=o(87462),a=o(72791),l=o(28182),c=o(94419),s=o(23701),d=o(14036),u=o(31402),p=o(75878),h=o(21217);function v(e){return(0,h.Z)("MuiFab",e)}var f=(0,p.Z)("MuiFab",["root","primary","secondary","extended","circular","focusVisible","disabled","colorInherit","sizeSmall","sizeMedium","sizeLarge","info","error","warning","success"]),m=o(66934),x=o(80184),b=["children","className","color","component","disabled","disableFocusRipple","focusVisibleClassName","size","variant"],g=(0,m.ZP)(s.Z,{name:"MuiFab",slot:"Root",shouldForwardProp:function(e){return(0,m.FO)(e)||"classes"===e},overridesResolver:function(e,t){var o=e.ownerState;return[t.root,t[o.variant],t["size".concat((0,d.Z)(o.size))],"inherit"===o.color&&t.colorInherit,t[(0,d.Z)(o.size)],t[o.color]]}})((function(e){var t,o,r=e.theme,a=e.ownerState;return(0,i.Z)({},r.typography.button,(0,n.Z)({minHeight:36,transition:r.transitions.create(["background-color","box-shadow","border-color"],{duration:r.transitions.duration.short}),borderRadius:"50%",padding:0,minWidth:0,width:56,height:56,zIndex:(r.vars||r).zIndex.fab,boxShadow:(r.vars||r).shadows[6],"&:active":{boxShadow:(r.vars||r).shadows[12]},color:r.vars?r.vars.palette.text.primary:null==(t=(o=r.palette).getContrastText)?void 0:t.call(o,r.palette.grey[300]),backgroundColor:(r.vars||r).palette.grey[300],"&:hover":{backgroundColor:(r.vars||r).palette.grey.A100,"@media (hover: none)":{backgroundColor:(r.vars||r).palette.grey[300]},textDecoration:"none"}},"&.".concat(f.focusVisible),{boxShadow:(r.vars||r).shadows[6]}),"small"===a.size&&{width:40,height:40},"medium"===a.size&&{width:48,height:48},"extended"===a.variant&&{borderRadius:24,padding:"0 16px",width:"auto",minHeight:"auto",minWidth:48,height:48},"extended"===a.variant&&"small"===a.size&&{width:"auto",padding:"0 8px",borderRadius:17,minWidth:34,height:34},"extended"===a.variant&&"medium"===a.size&&{width:"auto",padding:"0 16px",borderRadius:20,minWidth:40,height:40},"inherit"===a.color&&{color:"inherit"})}),(function(e){var t=e.theme,o=e.ownerState;return(0,i.Z)({},"inherit"!==o.color&&"default"!==o.color&&null!=(t.vars||t).palette[o.color]&&{color:(t.vars||t).palette[o.color].contrastText,backgroundColor:(t.vars||t).palette[o.color].main,"&:hover":{backgroundColor:(t.vars||t).palette[o.color].dark,"@media (hover: none)":{backgroundColor:(t.vars||t).palette[o.color].main}}})}),(function(e){var t=e.theme;return(0,n.Z)({},"&.".concat(f.disabled),{color:(t.vars||t).palette.action.disabled,boxShadow:(t.vars||t).shadows[0],backgroundColor:(t.vars||t).palette.action.disabledBackground})})),Z=a.forwardRef((function(e,t){var o=(0,u.Z)({props:e,name:"MuiFab"}),n=o.children,a=o.className,s=o.color,p=void 0===s?"default":s,h=o.component,f=void 0===h?"button":h,m=o.disabled,Z=void 0!==m&&m,y=o.disableFocusRipple,S=void 0!==y&&y,w=o.focusVisibleClassName,z=o.size,C=void 0===z?"large":z,j=o.variant,k=void 0===j?"circular":j,R=(0,r.Z)(o,b),I=(0,i.Z)({},o,{color:p,component:f,disabled:Z,disableFocusRipple:S,size:C,variant:k}),N=function(e){var t=e.color,o=e.variant,n=e.classes,r=e.size,a={root:["root",o,"size".concat((0,d.Z)(r)),"inherit"===t?"colorInherit":t]},l=(0,c.Z)(a,v,n);return(0,i.Z)({},n,l)}(I);return(0,x.jsx)(g,(0,i.Z)({className:(0,l.Z)(N.root,a),component:f,disabled:Z,focusRipple:!S,focusVisibleClassName:(0,l.Z)(N.focusVisible,w),ownerState:I,ref:t},R,{classes:N,children:n}))}))},13400:function(e,t,o){o.d(t,{Z:function(){return y}});var n=o(4942),r=o(63366),i=o(87462),a=o(72791),l=o(28182),c=o(94419),s=o(12065),d=o(66934),u=o(31402),p=o(23701),h=o(14036),v=o(75878),f=o(21217);function m(e){return(0,f.Z)("MuiIconButton",e)}var x=(0,v.Z)("MuiIconButton",["root","disabled","colorInherit","colorPrimary","colorSecondary","colorError","colorInfo","colorSuccess","colorWarning","edgeStart","edgeEnd","sizeSmall","sizeMedium","sizeLarge"]),b=o(80184),g=["edge","children","className","color","disabled","disableFocusRipple","size"],Z=(0,d.ZP)(p.Z,{name:"MuiIconButton",slot:"Root",overridesResolver:function(e,t){var o=e.ownerState;return[t.root,"default"!==o.color&&t["color".concat((0,h.Z)(o.color))],o.edge&&t["edge".concat((0,h.Z)(o.edge))],t["size".concat((0,h.Z)(o.size))]]}})((function(e){var t=e.theme,o=e.ownerState;return(0,i.Z)({textAlign:"center",flex:"0 0 auto",fontSize:t.typography.pxToRem(24),padding:8,borderRadius:"50%",overflow:"visible",color:(t.vars||t).palette.action.active,transition:t.transitions.create("background-color",{duration:t.transitions.duration.shortest})},!o.disableRipple&&{"&:hover":{backgroundColor:t.vars?"rgba(".concat(t.vars.palette.action.activeChannel," / ").concat(t.vars.palette.action.hoverOpacity,")"):(0,s.Fq)(t.palette.action.active,t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"start"===o.edge&&{marginLeft:"small"===o.size?-3:-12},"end"===o.edge&&{marginRight:"small"===o.size?-3:-12})}),(function(e){var t,o=e.theme,r=e.ownerState,a=null==(t=(o.vars||o).palette)?void 0:t[r.color];return(0,i.Z)({},"inherit"===r.color&&{color:"inherit"},"inherit"!==r.color&&"default"!==r.color&&(0,i.Z)({color:null==a?void 0:a.main},!r.disableRipple&&{"&:hover":(0,i.Z)({},a&&{backgroundColor:o.vars?"rgba(".concat(a.mainChannel," / ").concat(o.vars.palette.action.hoverOpacity,")"):(0,s.Fq)(a.main,o.palette.action.hoverOpacity)},{"@media (hover: none)":{backgroundColor:"transparent"}})}),"small"===r.size&&{padding:5,fontSize:o.typography.pxToRem(18)},"large"===r.size&&{padding:12,fontSize:o.typography.pxToRem(28)},(0,n.Z)({},"&.".concat(x.disabled),{backgroundColor:"transparent",color:(o.vars||o).palette.action.disabled}))})),y=a.forwardRef((function(e,t){var o=(0,u.Z)({props:e,name:"MuiIconButton"}),n=o.edge,a=void 0!==n&&n,s=o.children,d=o.className,p=o.color,v=void 0===p?"default":p,f=o.disabled,x=void 0!==f&&f,y=o.disableFocusRipple,S=void 0!==y&&y,w=o.size,z=void 0===w?"medium":w,C=(0,r.Z)(o,g),j=(0,i.Z)({},o,{edge:a,color:v,disabled:x,disableFocusRipple:S,size:z}),k=function(e){var t=e.classes,o=e.disabled,n=e.color,r=e.edge,i=e.size,a={root:["root",o&&"disabled","default"!==n&&"color".concat((0,h.Z)(n)),r&&"edge".concat((0,h.Z)(r)),"size".concat((0,h.Z)(i))]};return(0,c.Z)(a,m,t)}(j);return(0,b.jsx)(Z,(0,i.Z)({className:(0,l.Z)(k.root,d),centerRipple:!0,focusRipple:!S,disabled:x,ref:t,ownerState:j},C,{children:s}))}))},36314:function(e,t,o){o.d(t,{Z:function(){return k}});var n=o(4942),r=o(63366),i=o(87462),a=o(72791),l=o(28182),c=o(82466),s=o(94419),d=o(21217),u=o(93457),p=o(86083),h=o(78519),v=o(85080),f=o(51184),m=o(45682),x=o(80184),b=["component","direction","spacing","divider","children","className","useFlexGap"],g=(0,v.Z)(),Z=(0,u.Z)("div",{name:"MuiStack",slot:"Root",overridesResolver:function(e,t){return t.root}});function y(e){return(0,p.Z)({props:e,name:"MuiStack",defaultTheme:g})}function S(e,t){var o=a.Children.toArray(e).filter(Boolean);return o.reduce((function(e,n,r){return e.push(n),r<o.length-1&&e.push(a.cloneElement(t,{key:"separator-".concat(r)})),e}),[])}var w=function(e){var t=e.ownerState,o=e.theme,r=(0,i.Z)({display:"flex",flexDirection:"column"},(0,f.k9)({theme:o},(0,f.P$)({values:t.direction,breakpoints:o.breakpoints.values}),(function(e){return{flexDirection:e}})));if(t.spacing){var a=(0,m.hB)(o),l=Object.keys(o.breakpoints.values).reduce((function(e,o){return("object"===typeof t.spacing&&null!=t.spacing[o]||"object"===typeof t.direction&&null!=t.direction[o])&&(e[o]=!0),e}),{}),s=(0,f.P$)({values:t.direction,base:l}),d=(0,f.P$)({values:t.spacing,base:l});"object"===typeof s&&Object.keys(s).forEach((function(e,t,o){if(!s[e]){var n=t>0?s[o[t-1]]:"column";s[e]=n}}));r=(0,c.Z)(r,(0,f.k9)({theme:o},d,(function(e,o){return t.useFlexGap?{gap:(0,m.NA)(a,e)}:{"& > :not(style) + :not(style)":(0,n.Z)({margin:0},"margin".concat((r=o?s[o]:t.direction,{row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"}[r])),(0,m.NA)(a,e))};var r})))}return r=(0,f.dt)(o.breakpoints,r)};var z=o(66934),C=o(31402),j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.createStyledComponent,o=void 0===t?Z:t,n=e.useThemeProps,c=void 0===n?y:n,u=e.componentName,p=void 0===u?"MuiStack":u,v=o(w),f=a.forwardRef((function(e,t){var o=c(e),n=(0,h.Z)(o),a=n.component,u=void 0===a?"div":a,f=n.direction,m=void 0===f?"column":f,g=n.spacing,Z=void 0===g?0:g,y=n.divider,w=n.children,z=n.className,C=n.useFlexGap,j=void 0!==C&&C,k=(0,r.Z)(n,b),R={direction:m,spacing:Z,useFlexGap:j},I=(0,s.Z)({root:["root"]},(function(e){return(0,d.Z)(p,e)}),{});return(0,x.jsx)(v,(0,i.Z)({as:u,ownerState:R,ref:t,className:(0,l.Z)(I.root,z)},k,{children:y?S(w,y):w}))}));return f}({createStyledComponent:(0,z.ZP)("div",{name:"MuiStack",slot:"Root",overridesResolver:function(e,t){return t.root}}),useThemeProps:function(e){return(0,C.Z)({props:e,name:"MuiStack"})}}),k=j},93457:function(e,t,o){var n=(0,o(44046).ZP)();t.Z=n}}]);
//# sourceMappingURL=8358.61e752b2.chunk.js.map