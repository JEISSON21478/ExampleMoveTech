"use strict";(self.webpackChunkmovetech=self.webpackChunkmovetech||[]).push([[481],{84314:function(e,n,r){var i=r(1413),t=r(45987),o=r(72791),a=r(42195),l=r.n(a),s=r(64554),c=r(80184),d=["children"],h=(0,o.forwardRef)((function(e,n){var r=e.children,o=(0,t.Z)(e,d);return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)?(0,c.jsx)(s.Z,{ref:n,sx:{overflowX:"auto"},children:r}):(0,c.jsx)(l(),(0,i.Z)((0,i.Z)({ref:n},o),{},{children:r}))}));n.Z=h},63293:function(e,n,r){var i=r(1413),t=r(45987),o=(r(72791),r(66934)),a=r(61419),l=r(80184),s=["bgcolor"],c=(0,o.ZP)("span")((function(e){var n=e.theme;return{borderRadius:"50%",width:21,height:21,boxShadow:"dark"===n.palette.mode?"0 0 0 1px rgb(16 22 26 / 40%)":"inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)",backgroundColor:"dark"===n.palette.mode?"rgba(0,0,0,0.4)":"",".Mui-focusVisible &":{outline:"2px auto rgba(19,124,189,.6)",outlineOffset:2},"input:hover ~ &":{backgroundColor:(n.palette.mode,n.palette.primary)},"input:disabled ~ &":{boxShadow:"none",background:"dark"===n.palette.mode?"rgba(57,75,89,.5)":"rgba(206,217,224,.5)"}}})),d=(0,o.ZP)(c)((function(e){return{boxShadow:"none","&:before":{display:"block",width:21,height:21,backgroundImage:"dark"===e.theme.palette.mode?"radial-gradient(#282C34,#282C34 28%,transparent 32%)":"radial-gradient(#fff,#fff 28%,transparent 32%)",content:'""'}}}));n.Z=function(e){var n=e.bgcolor,r=(0,t.Z)(e,s);return(0,l.jsx)(a.Z,(0,i.Z)({sx:{"&:hover":{bgcolor:"transparent"}},disableRipple:!0,color:"default",checkedIcon:(0,l.jsx)(d,{sx:{backgroundColor:n||"primary.main"}}),icon:(0,l.jsx)(c,{})},r))}},54433:function(e,n,r){var i=r(1413),t=(r(72791),r(66934)),o=r(64280),a=r(80184),l=(0,t.ZP)((function(e){return(0,a.jsx)(o.Z,(0,i.Z)({},e))}))((function(e){var n=e.theme;return{"& .MuiOutlinedInput-input::-webkit-input-placeholder":{color:"#767e89",opacity:"1"},"& .MuiOutlinedInput-notchedOutline":{borderColor:"".concat("dark"===n.palette.mode?"rgba(255, 255, 255, 0.12)":"#dee3e9")},"& .MuiOutlinedInput-input.Mui-disabled":{backgroundColor:"".concat("dark"===n.palette.mode?"rgba(0, 0, 0, 0.12) ":"#f8f9fb ")},"& .MuiOutlinedInput-input.Mui-disabled::-webkit-input-placeholder":{color:"#767e89",opacity:"1"}}}));n.Z=l},40481:function(e,n,r){r.r(n),r.d(n,{default:function(){return te}});var i=r(29439),t=r(4942),o=r(72791),a=r(66934),l=r(95193),s=r(89164),c=r(64554),d=r(57689),h=r(59434),x=r(1413),p=r(11087),u=r(90493),g=r(20890),j=r(84852),f=r(57064),m=r(49900),Z=r(56125),b=r(1598),v=r(74330),y=r.n(v),k=r(89246),w=[{title:"Inicio",icon:"home",href:"/dashboards/dashboard1"}],C=r(84314),M=r(80184),S=function(e){var n=e.isMobileSidebarOpen,r=e.onSidebarClose,t=e.isSidebarOpen,a=o.useState(!0),s=(0,i.Z)(a,2),h=s[0],v=s[1],S=(0,d.TH)().pathname,P=S,T=S.slice(0,S.lastIndexOf("/")),I=(0,l.Z)((function(e){return e.breakpoints.up("lg")})),E=function(e){v(h===e?function(e){return!e}:e)},O=(0,M.jsx)(C.Z,{style:{height:"calc(100vh - 5px)"},children:(0,M.jsx)(c.Z,{sx:{p:2},children:(0,M.jsx)(c.Z,{children:(0,M.jsx)(u.Z,{children:w.map((function(e,n){return e.subheader?(0,M.jsx)("li",{children:(0,M.jsx)(g.Z,{variant:"subtitle2",fontWeight:"500",sx:{my:2,mt:4,opacity:"0.4"},children:e.subheader})},e.subheader):e.children?(0,M.jsxs)(o.Fragment,{children:[(0,M.jsxs)(j.ZP,{button:!0,component:"li",onClick:function(){return E(n)},selected:T===e.href,sx:(0,x.Z)({mb:1},T===e.href&&{color:"white",backgroundColor:function(e){return"".concat(e.palette.primary.main,"!important")}}),children:[(0,M.jsx)(f.Z,{sx:(0,x.Z)({},T===e.href&&{color:"white"}),children:(0,M.jsx)(y(),{icon:e.icon,width:"20",height:"20"})}),(0,M.jsx)(m.Z,{children:e.title}),n===h||T===e.href?(0,M.jsx)(y(),{icon:"chevron-down",size:"16"}):(0,M.jsx)(y(),{icon:"chevron-right",size:"16"})]}),(0,M.jsx)(Z.Z,{in:n===h,timeout:"auto",unmountOnExit:!0,children:(0,M.jsx)(u.Z,{component:"li",disablePadding:!0,children:e.children.map((function(e){return(0,M.jsxs)(j.ZP,{button:!0,component:p.OL,to:e.href,onClick:r,selected:P===e.href,sx:(0,x.Z)({mb:1},P===e.href&&{color:"primary.main",backgroundColor:"transparent!important"}),children:[(0,M.jsx)(f.Z,{sx:(0,x.Z)({svg:{width:"14px",marginLeft:"3px"}},P===e.href&&{color:"primary.main"}),children:(0,M.jsx)(y(),{icon:e.icon,width:"20",height:"20"})}),(0,M.jsx)(m.Z,{children:e.title})]},e.title)}))})})]},e.title):(0,M.jsx)(u.Z,{component:"li",disablePadding:!0,children:(0,M.jsxs)(j.ZP,{onClick:function(){return E(n)},button:!0,component:p.OL,to:e.href,selected:P===e.href,sx:(0,x.Z)({mb:1},P===e.href&&{color:"white",backgroundColor:function(e){return"".concat(e.palette.primary.main,"!important")}}),children:[(0,M.jsx)(f.Z,{sx:(0,x.Z)({},P===e.href&&{color:"white"}),children:(0,M.jsx)(y(),{icon:e.icon,width:"20",height:"20"})}),(0,M.jsx)(m.Z,{onClick:r,children:e.title})]})},e.title)}))})})})});return I?(0,M.jsx)(b.ZP,{anchor:"left",open:t,variant:"persistent",PaperProps:{sx:{width:k.r9,border:"0 !important",boxShadow:"0px 7px 30px 0px rgb(113 122 131 / 11%)"}},children:O}):(0,M.jsx)(b.ZP,{anchor:"left",open:n,onClose:r,PaperProps:{sx:{width:k.r9,border:"0 !important"}},variant:"temporary",children:O})},P=r(84395),T=r(34663),I=r(13400),E=r(29472),O=r(80911),z=r(81918),R=r(24518),W=r(93044),B=r(23786),L=r(94721),H=r(69314),D=r(70655),N=(r(86193),r(70643),r(30417),[{avatar:D,title:"Nuevo Mensaje",subtitle:"Tienes un mensaje de Jeisson"}]),A=[{avatar:H,title:"Notificacion 1",subtitle:"Pruebas",time:"4:39 AM",status:"success"}],_=function(){return(0,M.jsx)(c.Z,{children:A.map((function(e){return(0,M.jsxs)(c.Z,{children:[(0,M.jsx)(B.Z,{sx:{pt:2,pb:2,borderRadius:"0px"},children:(0,M.jsxs)(c.Z,{display:"flex",alignItems:"center",children:[(0,M.jsx)(E.Z,{variant:"dot",color:e.status,children:(0,M.jsx)(W.Z,{src:e.avatar,alt:e.avatar,sx:{width:"45px",height:"45px"}})}),(0,M.jsxs)(c.Z,{sx:{ml:2},children:[(0,M.jsx)(g.Z,{variant:"h5",noWrap:!0,sx:{width:"240px"},children:e.title}),(0,M.jsx)(g.Z,{color:"textSecondary",variant:"h6",fontWeight:"400",sx:{width:"240px"},noWrap:!0,children:e.subtitle}),(0,M.jsx)(g.Z,{color:"textSecondary",variant:"body2",children:e.time})]})]})}),(0,M.jsx)(L.Z,{style:{marginTop:0,marginBottom:0}})]},e.title)}))})},G=function(){return(0,M.jsx)(c.Z,{children:N.map((function(e){return(0,M.jsxs)(c.Z,{children:[(0,M.jsx)(B.Z,{sx:{pt:2,pb:2,borderRadius:"0px"},children:(0,M.jsxs)(c.Z,{display:"flex",alignItems:"center",children:[(0,M.jsx)(W.Z,{src:e.avatar,alt:e.avatar,sx:{width:"45px",height:"45px"}}),(0,M.jsxs)(c.Z,{sx:{ml:2},children:[(0,M.jsx)(g.Z,{variant:"h5",noWrap:!0,sx:{width:"240px"},children:e.title}),(0,M.jsx)(g.Z,{color:"textSecondary",variant:"h6",noWrap:!0,fontWeight:"400",sx:{width:"240px"},children:e.subtitle})]})]})}),(0,M.jsx)(L.Z,{style:{marginTop:0,marginBottom:0}})]},e.title)}))})},J=function(){return(0,M.jsxs)(c.Z,{children:[(0,M.jsx)(c.Z,{sx:{pb:3,mt:3},children:(0,M.jsxs)(c.Z,{display:"flex",alignItems:"center",children:[(0,M.jsx)(W.Z,{src:D,alt:D,sx:{width:"90px",height:"90px"}}),(0,M.jsxs)(c.Z,{sx:{ml:2},children:[(0,M.jsx)(g.Z,{variant:"h4",sx:{lineHeight:"1.235"},children:"Jeisson Junco Gonzalez"}),(0,M.jsx)(g.Z,{color:"textSecondary",variant:"h6",fontWeight:"400",children:"Desarrollador"}),(0,M.jsxs)(c.Z,{display:"flex",alignItems:"center",children:[(0,M.jsx)(g.Z,{color:"textSecondary",display:"flex",alignItems:"center",sx:{color:function(e){return e.palette.grey.A200},mr:1},children:(0,M.jsx)(y(),{icon:"mail",width:"18"})}),(0,M.jsx)(g.Z,{color:"textSecondary",variant:"h6",children:"jjunco@pruebas.com"})]})]})]})}),(0,M.jsx)(L.Z,{style:{marginTop:0,marginBottom:0}}),(0,M.jsx)(c.Z,{children:(0,M.jsx)(L.Z,{style:{marginTop:0,marginBottom:0}})})]})},U=r(54433),V=function(e){var n=e.sx,r=e.customClass,t=e.toggleSidebar,a=e.toggleMobileSidebar,l=o.useState(null),s=(0,i.Z)(l,2),d=s[0],h=s[1],x=function(){h(null)},u=o.useState(null),j=(0,i.Z)(u,2),f=j[0],m=j[1],Z=o.useState(null),v=(0,i.Z)(Z,2),k=v[0],w=v[1],C=(0,o.useState)(!1),S=(0,i.Z)(C,2),B=S[0],L=S[1];return(0,M.jsx)(P.Z,{sx:n,elevation:0,className:r,children:(0,M.jsxs)(T.Z,{children:[(0,M.jsx)(I.Z,{edge:"start",color:"inherit","aria-label":"menu",onClick:t,size:"large",sx:{display:{lg:"flex",xs:"none"}},children:(0,M.jsx)(y(),{icon:"menu"})}),(0,M.jsx)(I.Z,{size:"large",color:"inherit","aria-label":"menu",onClick:a,sx:{display:{lg:"none",xs:"flex"}},children:(0,M.jsx)(y(),{icon:"menu",width:"20",height:"20"})}),(0,M.jsx)(I.Z,{"aria-label":"show 4 new mails",color:"inherit","aria-controls":"search-menu","aria-haspopup":"true",onClick:function(){return L(!0)},size:"large",children:(0,M.jsx)(y(),{icon:"search",width:"20",height:"20"})}),(0,M.jsx)(b.ZP,{anchor:"top",open:B,onClose:function(){return L(!1)},sx:{"& .MuiDrawer-paper":{padding:"15px 30px"}},children:(0,M.jsxs)(c.Z,{display:"flex",alignItems:"center",children:[(0,M.jsx)(U.Z,{id:"tb-search",size:"small",placeholder:"Buscar",fullWidth:!0,inputProps:{"aria-label":"Search here"}}),(0,M.jsx)(c.Z,{sx:{ml:"auto"},children:(0,M.jsx)(I.Z,{color:"inherit",sx:{color:function(e){return e.palette.grey.A200}},onClick:function(){L(!1)},children:(0,M.jsx)(y(),{icon:"x-circle"})})})]})}),(0,M.jsx)(c.Z,{flexGrow:1}),(0,M.jsx)(I.Z,{size:"large","aria-label":"show 11 new notifications",color:"inherit","aria-controls":"msgs-menu","aria-haspopup":"true",onClick:function(e){m(e.currentTarget)},children:(0,M.jsx)(E.Z,{variant:"dot",color:"primary",children:(0,M.jsx)(y(),{icon:"message-square",width:"20",height:"20"})})}),(0,M.jsxs)(O.Z,{id:"msgs-menu",anchorEl:f,keepMounted:!0,open:Boolean(f),onClose:function(){m(null)},anchorOrigin:{horizontal:"right",vertical:"bottom"},transformOrigin:{horizontal:"right",vertical:"top"},sx:{"& .MuiMenu-paper":{width:"385px",right:0,top:"70px !important"},"& .MuiList-padding":{p:"30px"}},children:[(0,M.jsx)(c.Z,{sx:{mb:1},children:(0,M.jsxs)(c.Z,{display:"flex",alignItems:"center",children:[(0,M.jsx)(g.Z,{variant:"h4",fontWeight:"500",children:"Mensajes"}),(0,M.jsx)(c.Z,{sx:{ml:2},children:(0,M.jsx)(z.Z,{size:"small",label:"5 new",sx:{borderRadius:"6px",pl:"5px",pr:"5px",backgroundColor:function(e){return e.palette.secondary.main},color:"#fff"}})})]})}),(0,M.jsx)(_,{})]}),(0,M.jsx)(I.Z,{size:"large","aria-label":"menu",color:"inherit","aria-controls":"notification-menu","aria-haspopup":"true",onClick:function(e){h(e.currentTarget)},children:(0,M.jsx)(E.Z,{variant:"dot",color:"secondary",children:(0,M.jsx)(y(),{icon:"bell",width:"20",height:"20"})})}),(0,M.jsxs)(O.Z,{id:"notification-menu",anchorEl:d,keepMounted:!0,open:Boolean(d),onClose:x,anchorOrigin:{horizontal:"right",vertical:"bottom"},transformOrigin:{horizontal:"right",vertical:"top"},sx:{"& .MuiMenu-paper":{width:"385px",right:0,top:"70px !important"},"& .MuiList-padding":{p:"30px"}},children:[(0,M.jsx)(c.Z,{sx:{mb:1},children:(0,M.jsxs)(c.Z,{display:"flex",alignItems:"center",children:[(0,M.jsx)(g.Z,{variant:"h4",fontWeight:"500",children:"Notificaciones"}),(0,M.jsx)(c.Z,{sx:{ml:2},children:(0,M.jsx)(z.Z,{size:"small",label:"1 nuevo",sx:{borderRadius:"6px",pl:"5px",pr:"5px",backgroundColor:function(e){return e.palette.warning.main},color:"#fff"}})})]})}),(0,M.jsx)(G,{}),(0,M.jsx)(R.Z,{sx:{mt:2,display:"block",width:"100%"},variant:"contained",color:"primary",onClick:x,children:(0,M.jsx)(p.rU,{to:"/",style:{color:"#fff",width:"100%",display:"block",textDecoration:"none"},children:"Ver m\xe1s"})})]}),(0,M.jsx)(c.Z,{sx:{width:"1px",backgroundColor:"rgba(0,0,0,0.1)",height:"25px",ml:1,mr:1}}),(0,M.jsx)(R.Z,{"aria-label":"menu",color:"inherit","aria-controls":"profile-menu","aria-haspopup":"true",onClick:function(e){w(e.currentTarget)},children:(0,M.jsxs)(c.Z,{display:"flex",alignItems:"center",children:[(0,M.jsx)(W.Z,{src:D,alt:D,sx:{width:"30px",height:"30px"}}),(0,M.jsxs)(c.Z,{sx:{display:{xs:"none",sm:"flex"},alignItems:"center"},children:[(0,M.jsx)(g.Z,{color:"textSecondary",variant:"h5",fontWeight:"400",sx:{ml:1},children:"Hola,"}),(0,M.jsx)(g.Z,{variant:"h5",fontWeight:"700",sx:{ml:1},children:"Invitado"}),(0,M.jsx)(y(),{icon:"chevron-down",width:"20",height:"20"})]})]})}),(0,M.jsxs)(O.Z,{id:"profile-menu",anchorEl:k,keepMounted:!0,open:Boolean(k),onClose:function(){w(null)},sx:{"& .MuiMenu-paper":{width:"385px",right:0,top:"70px !important"},"& .MuiList-padding":{p:"30px"}},children:[(0,M.jsx)(c.Z,{sx:{mb:1},children:(0,M.jsx)(c.Z,{display:"flex",alignItems:"center",children:(0,M.jsx)(g.Z,{variant:"h4",fontWeight:"500",children:"Perfil"})})}),(0,M.jsx)(J,{}),(0,M.jsx)(p.rU,{style:{textDecoration:"none"},to:"/auth/login",children:(0,M.jsx)(R.Z,{sx:{mt:2,display:"block",width:"100%"},variant:"contained",color:"primary",children:"Salir"})})]})]})})},q=function(){return(0,M.jsx)(c.Z,{sx:{p:3,textAlign:"center"},children:(0,M.jsx)(g.Z,{children:"\xa9 2023 Todos los derechos reservados por MoveTech "})})},F=r(68096),X=r(88970),$=r(85523),K=r(20068),Q=r(49877),Y=r(46721),ee=r(63293),ne=function(){var e=(0,o.useState)(!1),n=(0,i.Z)(e,2),r=n[0],t=n[1],a=(0,h.v9)((function(e){return e.CustomizerReducer})),l=(0,h.I0)();return(0,M.jsx)("div",{children:(0,M.jsxs)(b.ZP,{anchor:"right",open:r,onClose:function(){return t(!1)},PaperProps:{sx:{width:"320px"}},children:[(0,M.jsx)(c.Z,{p:2,children:(0,M.jsx)(g.Z,{variant:"h3",children:"Settings"})}),(0,M.jsx)(L.Z,{}),(0,M.jsxs)(c.Z,{p:2,children:[(0,M.jsx)(g.Z,{variant:"h4",gutterBottom:!0,children:"Theme Option"}),(0,M.jsx)(F.Z,{component:"fieldset",children:(0,M.jsxs)(X.Z,{"aria-label":"theme",name:"theme",value:a.activeMode,onChange:function(e){return l((n=e.target.value,{type:Y.$J,payload:n}));var n},children:[(0,M.jsx)($.Z,{value:"light",control:(0,M.jsx)(ee.Z,{}),label:"Light"}),(0,M.jsx)($.Z,{value:"dark",control:(0,M.jsx)(ee.Z,{}),label:"Dark"})]})}),(0,M.jsx)(c.Z,{pt:3}),(0,M.jsx)(g.Z,{variant:"h4",gutterBottom:!0,children:"Theme Direction"}),(0,M.jsx)(F.Z,{component:"fieldset",children:(0,M.jsxs)(X.Z,{"aria-label":"themedir",name:"themedir",value:a.activeDir,onChange:function(e){return l((n=e.target.value,{type:Y.JR,payload:n}));var n},children:[(0,M.jsx)($.Z,{value:"ltr",control:(0,M.jsx)(ee.Z,{}),label:"LTR"}),(0,M.jsx)($.Z,{value:"rtl",control:(0,M.jsx)(ee.Z,{}),label:"RTL"})]})}),(0,M.jsx)(c.Z,{pt:3}),(0,M.jsx)(g.Z,{variant:"h4",gutterBottom:!0,children:"Theme Colors"}),[{id:1,bgColor:"#1a9bfc",disp:"BLUE_THEME"},{id:2,bgColor:"#00cec3",disp:"GREEN_THEME"},{id:3,bgColor:"#7352ff",disp:"PURPLE_THEME"},{id:4,bgColor:"#ff5c8e",disp:"RED_THEME"},{id:5,bgColor:"#1e4db7",disp:"INDIGO_THEME"},{id:6,bgColor:"#fb9678",disp:"ORANGE_THEME"}].map((function(e){return(0,M.jsx)(K.Z,{title:e.disp,placement:"top",children:(0,M.jsx)(Q.Z,{color:"primary",style:{backgroundColor:e.bgColor},sx:{marginRight:"3px"},size:"small",onClick:function(){return l((n=e.disp,{type:Y.l1,payload:n}));var n},"aria-label":e.bgcolor,children:a.activeTheme===e.disp?(0,M.jsx)(y(),{icon:"check",size:"16"}):""})},e.id)})),(0,M.jsx)(c.Z,{pt:3})]})]})})},re=(0,a.ZP)("div")((function(){return{display:"flex",minHeight:"100vh",overflow:"hidden",width:"100%"}})),ie=(0,a.ZP)("div")((function(e){var n,r=e.theme;return n={display:"flex",flex:"1 1 auto",overflow:"hidden",backgroundColor:r.palette.background.default},(0,t.Z)(n,r.breakpoints.up("lg"),{paddingTop:k.Z}),(0,t.Z)(n,r.breakpoints.down("lg"),{paddingTop:"64px"}),n})),te=function(){var e=(0,o.useState)(!0),n=(0,i.Z)(e,2),r=n[0],t=n[1],a=(0,o.useState)(!1),x=(0,i.Z)(a,2),p=x[0],u=x[1],g=(0,h.v9)((function(e){return e.CustomizerReducer})),j=(0,l.Z)((function(e){return e.breakpoints.up("lg")}));return(0,M.jsxs)(re,{className:"dark"===g.activeMode?"darkbg":"",children:[(0,M.jsx)(V,{sx:{paddingLeft:r&&j?"265px":"",backgroundColor:"dark"===g.activeMode?"#20232a":"#fafbfb"},toggleSidebar:function(){return t(!r)},toggleMobileSidebar:function(){return u(!0)}}),(0,M.jsx)(S,{isSidebardir:"ltr"===g.activeDir?"left":"right",isSidebarOpen:r,isMobileSidebarOpen:p,onSidebarClose:function(){return u(!1)}}),(0,M.jsx)(ie,{children:(0,M.jsxs)(s.Z,{maxWidth:!1,sx:{paddingTop:"20px",paddingLeft:r&&j?"280px!important":""},children:[(0,M.jsx)(c.Z,{sx:{minHeight:"calc(100vh - 170px)"},children:(0,M.jsx)(d.j3,{})}),(0,M.jsx)(ne,{}),(0,M.jsx)(q,{})]})})]})}},86193:function(e,n,r){e.exports=r.p+"static/media/s1.69341801e3f5245c8020.jpg"},70643:function(e,n,r){e.exports=r.p+"static/media/s2.3260a3b510aa12fc136b.jpg"},30417:function(e,n,r){e.exports=r.p+"static/media/s3.323ebcbe88240bd8423f.jpg"}}]);
//# sourceMappingURL=481.f9fd1659.chunk.js.map