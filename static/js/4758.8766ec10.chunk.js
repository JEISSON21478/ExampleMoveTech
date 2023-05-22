"use strict";(self.webpackChunkmovetech=self.webpackChunkmovetech||[]).push([[4758],{34758:function(e,t,o){o.d(t,{Z:function(){return D}});var n=o(87462),r=o(63366),i=o(29439),s=o(72791),p=o(47563),a=o(75721),l=o(99723),c=o(40761),u=o(71217),f=o(60545),d=o(19224),m=o(43120),v=o(39265);var Z={name:"applyStyles",enabled:!0,phase:"write",fn:function(e){var t=e.state;Object.keys(t.elements).forEach((function(e){var o=t.styles[e]||{},n=t.attributes[e]||{},r=t.elements[e];(0,v.Re)(r)&&(0,m.Z)(r)&&(Object.assign(r.style,o),Object.keys(n).forEach((function(e){var t=n[e];!1===t?r.removeAttribute(e):r.setAttribute(e,!0===t?"":t)})))}))},effect:function(e){var t=e.state,o={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,o.popper),t.styles=o,t.elements.arrow&&Object.assign(t.elements.arrow.style,o.arrow),function(){Object.keys(t.elements).forEach((function(e){var n=t.elements[e],r=t.attributes[e]||{},i=Object.keys(t.styles.hasOwnProperty(e)?t.styles[e]:o[e]).reduce((function(e,t){return e[t]="",e}),{});(0,v.Re)(n)&&(0,m.Z)(n)&&(Object.assign(n.style,i),Object.keys(r).forEach((function(e){n.removeAttribute(e)})))}))}},requires:["computeStyles"]},b=o(5934),P=o(95468),y=o(81694),h=o(78702),O=o(41668),R=[u.Z,f.Z,d.Z,Z,b.Z,P.Z,y.Z,h.Z,O.Z],w=(0,c.kZ)({defaultModifiers:R}),E=o(94419),k=o(96174),j=o(21217);function M(e){return(0,j.Z)("MuiPopper",e)}(0,o(75878).Z)("MuiPopper",["root"]);var x=o(57271),S=o(6826),T=o(80184),g=["anchorEl","children","direction","disablePortal","modifiers","open","placement","popperOptions","popperRef","slotProps","slots","TransitionProps","ownerState"],A=["anchorEl","children","container","direction","disablePortal","keepMounted","modifiers","open","placement","popperOptions","popperRef","style","transition","slotProps","slots"];function B(e){return"function"===typeof e?e():e}function C(e){return void 0!==e.nodeType}var U={},q=s.forwardRef((function(e,t){var o,l=e.anchorEl,c=e.children,u=e.direction,f=e.disablePortal,d=e.modifiers,m=e.open,v=e.placement,Z=e.popperOptions,b=e.popperRef,P=e.slotProps,y=void 0===P?{}:P,h=e.slots,O=void 0===h?{}:h,R=e.TransitionProps,k=(0,r.Z)(e,g),j=s.useRef(null),A=(0,p.Z)(j,t),C=s.useRef(null),U=(0,p.Z)(C,b),q=s.useRef(U);(0,a.Z)((function(){q.current=U}),[U]),s.useImperativeHandle(b,(function(){return C.current}),[]);var F=function(e,t){if("ltr"===t)return e;switch(e){case"bottom-end":return"bottom-start";case"bottom-start":return"bottom-end";case"top-end":return"top-start";case"top-start":return"top-end";default:return e}}(v,u),H=s.useState(F),I=(0,i.Z)(H,2),N=I[0],W=I[1],z=s.useState(B(l)),D=(0,i.Z)(z,2),G=D[0],J=D[1];s.useEffect((function(){C.current&&C.current.forceUpdate()})),s.useEffect((function(){l&&J(B(l))}),[l]),(0,a.Z)((function(){if(G&&m){var e=[{name:"preventOverflow",options:{altBoundary:f}},{name:"flip",options:{altBoundary:f}},{name:"onUpdate",enabled:!0,phase:"afterWrite",fn:function(e){var t=e.state;W(t.placement)}}];null!=d&&(e=e.concat(d)),Z&&null!=Z.modifiers&&(e=e.concat(Z.modifiers));var t=w(G,j.current,(0,n.Z)({placement:F},Z,{modifiers:e}));return q.current(t),function(){t.destroy(),q.current(null)}}}),[G,f,d,m,Z,F]);var K={placement:N};null!==R&&(K.TransitionProps=R);var L=(0,E.Z)({root:["root"]},(0,S.T)(M)),Q=null!=(o=O.root)?o:"div",V=(0,x.Z)({elementType:Q,externalSlotProps:y.root,externalForwardedProps:k,additionalProps:{role:"tooltip",ref:A},ownerState:e,className:L.root});return(0,T.jsx)(Q,(0,n.Z)({},V,{children:"function"===typeof c?c(K):c}))})),F=s.forwardRef((function(e,t){var o,p=e.anchorEl,a=e.children,c=e.container,u=e.direction,f=void 0===u?"ltr":u,d=e.disablePortal,m=void 0!==d&&d,v=e.keepMounted,Z=void 0!==v&&v,b=e.modifiers,P=e.open,y=e.placement,h=void 0===y?"bottom":y,O=e.popperOptions,R=void 0===O?U:O,w=e.popperRef,E=e.style,j=e.transition,M=void 0!==j&&j,x=e.slotProps,S=void 0===x?{}:x,g=e.slots,F=void 0===g?{}:g,H=(0,r.Z)(e,A),I=s.useState(!0),N=(0,i.Z)(I,2),W=N[0],z=N[1];if(!Z&&!P&&(!M||W))return null;if(c)o=c;else if(p){var D=B(p);o=D&&C(D)?(0,l.Z)(D).body:(0,l.Z)(null).body}var G=P||!Z||M&&!W?void 0:"none",J=M?{in:P,onEnter:function(){z(!1)},onExited:function(){z(!0)}}:void 0;return(0,T.jsx)(k.Z,{disablePortal:m,container:o,children:(0,T.jsx)(q,(0,n.Z)({anchorEl:p,direction:f,disablePortal:m,modifiers:b,ref:t,open:M?!W:P,placement:h,popperOptions:R,popperRef:w,slotProps:S,slots:F},H,{style:(0,n.Z)({position:"fixed",top:0,left:0,display:G},E),TransitionProps:J,children:a}))})})),H=o(69120),I=o(66934),N=o(31402),W=["anchorEl","component","components","componentsProps","container","disablePortal","keepMounted","modifiers","open","placement","popperOptions","popperRef","transition","slots","slotProps"],z=(0,I.ZP)(F,{name:"MuiPopper",slot:"Root",overridesResolver:function(e,t){return t.root}})({}),D=s.forwardRef((function(e,t){var o,i=(0,H.Z)(),s=(0,N.Z)({props:e,name:"MuiPopper"}),p=s.anchorEl,a=s.component,l=s.components,c=s.componentsProps,u=s.container,f=s.disablePortal,d=s.keepMounted,m=s.modifiers,v=s.open,Z=s.placement,b=s.popperOptions,P=s.popperRef,y=s.transition,h=s.slots,O=s.slotProps,R=(0,r.Z)(s,W),w=null!=(o=null==h?void 0:h.root)?o:null==l?void 0:l.Root,E=(0,n.Z)({anchorEl:p,container:u,disablePortal:f,keepMounted:d,modifiers:m,open:v,placement:Z,popperOptions:b,popperRef:P,transition:y},R);return(0,T.jsx)(z,(0,n.Z)({as:a,direction:null==i?void 0:i.direction,slots:{root:w},slotProps:null!=O?O:c},E,{ref:t}))}))}}]);
//# sourceMappingURL=4758.8766ec10.chunk.js.map