import{S as ge,av as B,bc as we,bw as Ce,bh as L,bx as F,bf as pe,ah as oe,a_ as R,bi as I,a5 as G,v as We,aV as Ne,M as Ve,aW as Fe,N as xe,O as Ie,ba as Xe,an as Ye,b5 as ue,r as $,d as p,aX as je,by as Re,w as x,a3 as Ue,a6 as de,e as He,z as Ke,t as E,W as he,P as ce,bz as Qe,bA as Ge,V as Je,au as Ze,bB as et}from"./index-BGuuL7R9.js";import{c as qe}from"./selection-IaWEEd_A.js";import{b as Q}from"./format-CJebrXOQ.js";const ve={left:!0,right:!0,up:!0,down:!0,horizontal:!0,vertical:!0},tt=Object.keys(ve);ve.all=!0;function J(e){const a={};for(const u of tt)e[u]===!0&&(a[u]=!0);return Object.keys(a).length===0?ve:(a.horizontal===!0?a.left=a.right=!0:a.left===!0&&a.right===!0&&(a.horizontal=!0),a.vertical===!0?a.up=a.down=!0:a.up===!0&&a.down===!0&&(a.vertical=!0),a.horizontal===!0&&a.vertical===!0&&(a.all=!0),a)}const nt=["INPUT","TEXTAREA"];function Z(e,a){return a.event===void 0&&e.target!==void 0&&e.target.draggable!==!0&&typeof a.handler=="function"&&nt.includes(e.target.nodeName.toUpperCase())===!1&&(e.qClonedBy===void 0||e.qClonedBy.indexOf(a.uid)===-1)}function le(e,a,u){const h=R(e);let n,t=h.left-a.event.x,o=h.top-a.event.y,s=Math.abs(t),m=Math.abs(o);const d=a.direction;d.horizontal===!0&&d.vertical!==!0?n=t<0?"left":"right":d.horizontal!==!0&&d.vertical===!0?n=o<0?"up":"down":d.up===!0&&o<0?(n="up",s>m&&(d.left===!0&&t<0?n="left":d.right===!0&&t>0&&(n="right"))):d.down===!0&&o>0?(n="down",s>m&&(d.left===!0&&t<0?n="left":d.right===!0&&t>0&&(n="right"))):d.left===!0&&t<0?(n="left",s<m&&(d.up===!0&&o<0?n="up":d.down===!0&&o>0&&(n="down"))):d.right===!0&&t>0&&(n="right",s<m&&(d.up===!0&&o<0?n="up":d.down===!0&&o>0&&(n="down")));let r=!1;if(n===void 0&&u===!1){if(a.event.isFirst===!0||a.event.lastDir===void 0)return{};n=a.event.lastDir,r=!0,n==="left"||n==="right"?(h.left-=t,s=0,t=0):(h.top-=o,m=0,o=0)}return{synthetic:r,payload:{evt:e,touch:a.event.mouse!==!0,mouse:a.event.mouse===!0,position:h,direction:n,isFirst:a.event.isFirst,isFinal:u===!0,duration:Date.now()-a.event.time,distance:{x:s,y:m},offset:{x:t,y:o},delta:{x:h.left-a.event.lastX,y:h.top-a.event.lastY}}}}let at=0;const se=ge({name:"touch-pan",beforeMount(e,{value:a,modifiers:u}){if(u.mouse!==!0&&B.has.touch!==!0)return;function h(t,o){u.mouse===!0&&o===!0?G(t):(u.stop===!0&&oe(t),u.prevent===!0&&pe(t))}const n={uid:"qvtp_"+at++,handler:a,modifiers:u,direction:J(u),noop:we,mouseStart(t){Z(t,n)&&Ce(t)&&(L(n,"temp",[[document,"mousemove","move","notPassiveCapture"],[document,"mouseup","end","passiveCapture"]]),n.start(t,!0))},touchStart(t){if(Z(t,n)){const o=t.target;L(n,"temp",[[o,"touchmove","move","notPassiveCapture"],[o,"touchcancel","end","passiveCapture"],[o,"touchend","end","passiveCapture"]]),n.start(t)}},start(t,o){if(B.is.firefox===!0&&F(e,!0),n.lastEvt=t,o===!0||u.stop===!0){if(n.direction.all!==!0&&(o!==!0||n.modifiers.mouseAllDir!==!0&&n.modifiers.mousealldir!==!0)){const d=t.type.indexOf("mouse")!==-1?new MouseEvent(t.type,t):new TouchEvent(t.type,t);t.defaultPrevented===!0&&pe(d),t.cancelBubble===!0&&oe(d),Object.assign(d,{qKeyEvent:t.qKeyEvent,qClickOutside:t.qClickOutside,qAnchorHandled:t.qAnchorHandled,qClonedBy:t.qClonedBy===void 0?[n.uid]:t.qClonedBy.concat(n.uid)}),n.initialEvent={target:t.target,event:d}}oe(t)}const{left:s,top:m}=R(t);n.event={x:s,y:m,time:Date.now(),mouse:o===!0,detected:!1,isFirst:!0,isFinal:!1,lastX:s,lastY:m}},move(t){if(n.event===void 0)return;const o=R(t),s=o.left-n.event.x,m=o.top-n.event.y;if(s===0&&m===0)return;n.lastEvt=t;const d=n.event.mouse===!0,r=()=>{h(t,d);let y;u.preserveCursor!==!0&&u.preservecursor!==!0&&(y=document.documentElement.style.cursor||"",document.documentElement.style.cursor="grabbing"),d===!0&&document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),qe(),n.styleCleanup=f=>{if(n.styleCleanup=void 0,y!==void 0&&(document.documentElement.style.cursor=y),document.body.classList.remove("non-selectable"),d===!0){const P=()=>{document.body.classList.remove("no-pointer-events--children")};f!==void 0?setTimeout(()=>{P(),f()},50):P()}else f!==void 0&&f()}};if(n.event.detected===!0){n.event.isFirst!==!0&&h(t,n.event.mouse);const{payload:y,synthetic:f}=le(t,n,!1);y!==void 0&&(n.handler(y)===!1?n.end(t):(n.styleCleanup===void 0&&n.event.isFirst===!0&&r(),n.event.lastX=y.position.left,n.event.lastY=y.position.top,n.event.lastDir=f===!0?void 0:y.direction,n.event.isFirst=!1));return}if(n.direction.all===!0||d===!0&&(n.modifiers.mouseAllDir===!0||n.modifiers.mousealldir===!0)){r(),n.event.detected=!0,n.move(t);return}const w=Math.abs(s),v=Math.abs(m);w!==v&&(n.direction.horizontal===!0&&w>v||n.direction.vertical===!0&&w<v||n.direction.up===!0&&w<v&&m<0||n.direction.down===!0&&w<v&&m>0||n.direction.left===!0&&w>v&&s<0||n.direction.right===!0&&w>v&&s>0?(n.event.detected=!0,n.move(t)):n.end(t,!0))},end(t,o){if(n.event!==void 0){if(I(n,"temp"),B.is.firefox===!0&&F(e,!1),o===!0)n.styleCleanup!==void 0&&n.styleCleanup(),n.event.detected!==!0&&n.initialEvent!==void 0&&n.initialEvent.target.dispatchEvent(n.initialEvent.event);else if(n.event.detected===!0){n.event.isFirst===!0&&n.handler(le(t===void 0?n.lastEvt:t,n).payload);const{payload:s}=le(t===void 0?n.lastEvt:t,n,!0),m=()=>{n.handler(s)};n.styleCleanup!==void 0?n.styleCleanup(m):m()}n.event=void 0,n.initialEvent=void 0,n.lastEvt=void 0}}};if(e.__qtouchpan=n,u.mouse===!0){const t=u.mouseCapture===!0||u.mousecapture===!0?"Capture":"";L(n,"main",[[e,"mousedown","mouseStart",`passive${t}`]])}B.has.touch===!0&&L(n,"main",[[e,"touchstart","touchStart",`passive${u.capture===!0?"Capture":""}`],[e,"touchmove","noop","notPassiveCapture"]])},updated(e,a){const u=e.__qtouchpan;u!==void 0&&(a.oldValue!==a.value&&(typeof value!="function"&&u.end(),u.handler=a.value),u.direction=J(a.modifiers))},beforeUnmount(e){const a=e.__qtouchpan;a!==void 0&&(a.event!==void 0&&a.end(),I(a,"main"),I(a,"temp"),B.is.firefox===!0&&F(e,!1),a.styleCleanup!==void 0&&a.styleCleanup(),delete e.__qtouchpan)}}),ye=150,ct=We({name:"QDrawer",inheritAttrs:!1,props:{...Ne,...Ve,side:{type:String,default:"left",validator:e=>["left","right"].includes(e)},width:{type:Number,default:300},mini:Boolean,miniToOverlay:Boolean,miniWidth:{type:Number,default:57},noMiniAnimation:Boolean,breakpoint:{type:Number,default:1023},showIfAbove:Boolean,behavior:{type:String,validator:e=>["default","desktop","mobile"].includes(e),default:"default"},bordered:Boolean,elevated:Boolean,overlay:Boolean,persistent:Boolean,noSwipeOpen:Boolean,noSwipeClose:Boolean,noSwipeBackdrop:Boolean},emits:[...Fe,"onLayout","miniState"],setup(e,{slots:a,emit:u,attrs:h}){const n=xe(),{proxy:{$q:t}}=n,o=Ie(e,t),{preventBodyScroll:s}=Ge(),{registerTimeout:m,removeTimeout:d}=Xe(),r=Ye(Qe,ue);if(r===ue)return console.error("QDrawer needs to be child of QLayout"),ue;let w,v=null,y;const f=$(e.behavior==="mobile"||e.behavior!=="desktop"&&r.totalWidth.value<=e.breakpoint),P=p(()=>e.mini===!0&&f.value!==!0),C=p(()=>P.value===!0?e.miniWidth:e.width),b=$(e.showIfAbove===!0&&f.value===!1?!0:e.modelValue===!0),X=p(()=>e.persistent!==!0&&(f.value===!0||Pe.value===!0));function z(i,c){if(W(),i!==!1&&r.animate(),S(0),f.value===!0){const q=r.instances[A.value];q!==void 0&&q.belowBreakpoint===!0&&q.hide(!1),_(1),r.isContainer.value!==!0&&s(!0)}else _(0),i!==!1&&ae(!1);m(()=>{i!==!1&&ae(!0),c!==!0&&u("show",i)},ye)}function V(i,c){U(),i!==!1&&r.animate(),_(0),S(O.value*C.value),ie(),c!==!0?m(()=>{u("hide",i)},ye):d()}const{show:Y,hide:M}=je({showing:b,hideOnRouteChange:X,handleShow:z,handleHide:V}),{addToHistory:W,removeFromHistory:U}=Re(b,M,X),N={belowBreakpoint:f,hide:M},T=p(()=>e.side==="right"),O=p(()=>(t.lang.rtl===!0?-1:1)*(T.value===!0?1:-1)),H=$(0),l=$(!1),g=$(!1),k=$(C.value*O.value),A=p(()=>T.value===!0?"left":"right"),ee=p(()=>b.value===!0&&f.value===!1&&e.overlay===!1?e.miniToOverlay===!0?e.miniWidth:C.value:0),te=p(()=>e.overlay===!0||e.miniToOverlay===!0||r.view.value.indexOf(T.value?"R":"L")!==-1||t.platform.is.ios===!0&&r.isContainer.value===!0),j=p(()=>e.overlay===!1&&b.value===!0&&f.value===!1),Pe=p(()=>e.overlay===!0&&b.value===!0&&f.value===!1),ke=p(()=>"fullscreen q-drawer__backdrop"+(b.value===!1&&l.value===!1?" hidden":"")),Se=p(()=>({backgroundColor:`rgba(0,0,0,${H.value*.4})`})),fe=p(()=>T.value===!0?r.rows.value.top[2]==="r":r.rows.value.top[0]==="l"),Te=p(()=>T.value===!0?r.rows.value.bottom[2]==="r":r.rows.value.bottom[0]==="l"),Be=p(()=>{const i={};return r.header.space===!0&&fe.value===!1&&(te.value===!0?i.top=`${r.header.offset}px`:r.header.space===!0&&(i.top=`${r.header.size}px`)),r.footer.space===!0&&Te.value===!1&&(te.value===!0?i.bottom=`${r.footer.offset}px`:r.footer.space===!0&&(i.bottom=`${r.footer.size}px`)),i}),Ae=p(()=>{const i={width:`${C.value}px`,transform:`translateX(${k.value}px)`};return f.value===!0?i:Object.assign(i,Be.value)}),Ee=p(()=>"q-drawer__content fit "+(r.isContainer.value!==!0?"scroll":"overflow-auto")),Me=p(()=>`q-drawer q-drawer--${e.side}`+(g.value===!0?" q-drawer--mini-animate":"")+(e.bordered===!0?" q-drawer--bordered":"")+(o.value===!0?" q-drawer--dark q-dark":"")+(l.value===!0?" no-transition":b.value===!0?"":" q-layout--prevent-focus")+(f.value===!0?" fixed q-drawer--on-top q-drawer--mobile q-drawer--top-padding":` q-drawer--${P.value===!0?"mini":"standard"}`+(te.value===!0||j.value!==!0?" fixed":"")+(e.overlay===!0||e.miniToOverlay===!0?" q-drawer--on-top":"")+(fe.value===!0?" q-drawer--top-padding":""))),Oe=p(()=>{const i=t.lang.rtl===!0?e.side:A.value;return[[se,Le,void 0,{[i]:!0,mouse:!0}]]}),_e=p(()=>{const i=t.lang.rtl===!0?A.value:e.side;return[[se,me,void 0,{[i]:!0,mouse:!0}]]}),De=p(()=>{const i=t.lang.rtl===!0?A.value:e.side;return[[se,me,void 0,{[i]:!0,mouse:!0,mouseAllDir:!0}]]});function ne(){ze(f,e.behavior==="mobile"||e.behavior!=="desktop"&&r.totalWidth.value<=e.breakpoint)}x(f,i=>{i===!0?(w=b.value,b.value===!0&&M(!1)):e.overlay===!1&&e.behavior!=="mobile"&&w!==!1&&(b.value===!0?(S(0),_(0),ie()):Y(!1))}),x(()=>e.side,(i,c)=>{r.instances[c]===N&&(r.instances[c]=void 0,r[c].space=!1,r[c].offset=0),r.instances[i]=N,r[i].size=C.value,r[i].space=j.value,r[i].offset=ee.value}),x(r.totalWidth,()=>{(r.isContainer.value===!0||document.qScrollPrevented!==!0)&&ne()}),x(()=>e.behavior+e.breakpoint,ne),x(r.isContainer,i=>{b.value===!0&&s(i!==!0),i===!0&&ne()}),x(r.scrollbarWidth,()=>{S(b.value===!0?0:void 0)}),x(ee,i=>{D("offset",i)}),x(j,i=>{u("onLayout",i),D("space",i)}),x(T,()=>{S()}),x(C,i=>{S(),re(e.miniToOverlay,i)}),x(()=>e.miniToOverlay,i=>{re(i,C.value)}),x(()=>t.lang.rtl,()=>{S()}),x(()=>e.mini,()=>{e.noMiniAnimation||e.modelValue===!0&&($e(),r.animate())}),x(P,i=>{u("miniState",i)});function S(i){i===void 0?de(()=>{i=b.value===!0?0:C.value,S(O.value*i)}):(r.isContainer.value===!0&&T.value===!0&&(f.value===!0||Math.abs(i)===C.value)&&(i+=O.value*r.scrollbarWidth.value),k.value=i)}function _(i){H.value=i}function ae(i){const c=i===!0?"remove":r.isContainer.value!==!0?"add":"";c!==""&&document.body.classList[c]("q-body--drawer-toggle")}function $e(){v!==null&&clearTimeout(v),n.proxy&&n.proxy.$el&&n.proxy.$el.classList.add("q-drawer--mini-animate"),g.value=!0,v=setTimeout(()=>{v=null,g.value=!1,n&&n.proxy&&n.proxy.$el&&n.proxy.$el.classList.remove("q-drawer--mini-animate")},150)}function Le(i){if(b.value!==!1)return;const c=C.value,q=Q(i.distance.x,0,c);if(i.isFinal===!0){q>=Math.min(75,c)===!0?Y():(r.animate(),_(0),S(O.value*c)),l.value=!1;return}S((t.lang.rtl===!0?T.value!==!0:T.value)?Math.max(c-q,0):Math.min(0,q-c)),_(Q(q/c,0,1)),i.isFirst===!0&&(l.value=!0)}function me(i){if(b.value!==!0)return;const c=C.value,q=i.direction===e.side,K=(t.lang.rtl===!0?q!==!0:q)?Q(i.distance.x,0,c):0;if(i.isFinal===!0){Math.abs(K)<Math.min(75,c)===!0?(r.animate(),_(1),S(0)):M(),l.value=!1;return}S(O.value*K),_(Q(1-K/c,0,1)),i.isFirst===!0&&(l.value=!0)}function ie(){s(!1),ae(!0)}function D(i,c){r.update(e.side,i,c)}function ze(i,c){i.value!==c&&(i.value=c)}function re(i,c){D("size",i===!0?e.miniWidth:c)}return r.instances[e.side]=N,re(e.miniToOverlay,C.value),D("space",j.value),D("offset",ee.value),e.showIfAbove===!0&&e.modelValue!==!0&&b.value===!0&&e["onUpdate:modelValue"]!==void 0&&u("update:modelValue",!0),Ue(()=>{u("onLayout",j.value),u("miniState",P.value),w=e.showIfAbove===!0;const i=()=>{(b.value===!0?z:V)(!1,!0)};if(r.totalWidth.value!==0){de(i);return}y=x(r.totalWidth,()=>{y(),y=void 0,b.value===!1&&e.showIfAbove===!0&&f.value===!1?Y(!1):i()})}),He(()=>{y!==void 0&&y(),v!==null&&(clearTimeout(v),v=null),b.value===!0&&ie(),r.instances[e.side]===N&&(r.instances[e.side]=void 0,D("size",0),D("offset",0),D("space",!1))}),()=>{const i=[];f.value===!0&&(e.noSwipeOpen===!1&&i.push(Ke(E("div",{key:"open",class:`q-drawer__opener fixed-${e.side}`,"aria-hidden":"true"}),Oe.value)),i.push(he("div",{ref:"backdrop",class:ke.value,style:Se.value,"aria-hidden":"true",onClick:M},void 0,"backdrop",e.noSwipeBackdrop!==!0&&b.value===!0,()=>De.value)));const c=P.value===!0&&a.mini!==void 0,q=[E("div",{...h,key:""+c,class:[Ee.value,h.class]},c===!0?a.mini():ce(a.default))];return e.elevated===!0&&b.value===!0&&q.push(E("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),i.push(he("aside",{ref:"content",class:Me.value,style:Ae.value},q,"contentclose",e.noSwipeClose!==!0&&f.value===!0,()=>_e.value)),E("div",{class:"q-drawer-container"},i)}}});function it(e){const a=[.06,6,50];return typeof e=="string"&&e.length&&e.split(":").forEach((u,h)=>{const n=parseFloat(u);n&&(a[h]=n)}),a}const rt=ge({name:"touch-swipe",beforeMount(e,{value:a,arg:u,modifiers:h}){if(h.mouse!==!0&&B.has.touch!==!0)return;const n=h.mouseCapture===!0?"Capture":"",t={handler:a,sensitivity:it(u),direction:J(h),noop:we,mouseStart(o){Z(o,t)&&Ce(o)&&(L(t,"temp",[[document,"mousemove","move",`notPassive${n}`],[document,"mouseup","end","notPassiveCapture"]]),t.start(o,!0))},touchStart(o){if(Z(o,t)){const s=o.target;L(t,"temp",[[s,"touchmove","move","notPassiveCapture"],[s,"touchcancel","end","notPassiveCapture"],[s,"touchend","end","notPassiveCapture"]]),t.start(o)}},start(o,s){B.is.firefox===!0&&F(e,!0);const m=R(o);t.event={x:m.left,y:m.top,time:Date.now(),mouse:s===!0,dir:!1}},move(o){if(t.event===void 0)return;if(t.event.dir!==!1){G(o);return}const s=Date.now()-t.event.time;if(s===0)return;const m=R(o),d=m.left-t.event.x,r=Math.abs(d),w=m.top-t.event.y,v=Math.abs(w);if(t.event.mouse!==!0){if(r<t.sensitivity[1]&&v<t.sensitivity[1]){t.end(o);return}}else if(window.getSelection().toString()!==""){t.end(o);return}else if(r<t.sensitivity[2]&&v<t.sensitivity[2])return;const y=r/s,f=v/s;t.direction.vertical===!0&&r<v&&r<100&&f>t.sensitivity[0]&&(t.event.dir=w<0?"up":"down"),t.direction.horizontal===!0&&r>v&&v<100&&y>t.sensitivity[0]&&(t.event.dir=d<0?"left":"right"),t.direction.up===!0&&r<v&&w<0&&r<100&&f>t.sensitivity[0]&&(t.event.dir="up"),t.direction.down===!0&&r<v&&w>0&&r<100&&f>t.sensitivity[0]&&(t.event.dir="down"),t.direction.left===!0&&r>v&&d<0&&v<100&&y>t.sensitivity[0]&&(t.event.dir="left"),t.direction.right===!0&&r>v&&d>0&&v<100&&y>t.sensitivity[0]&&(t.event.dir="right"),t.event.dir!==!1?(G(o),t.event.mouse===!0&&(document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),qe(),t.styleCleanup=P=>{t.styleCleanup=void 0,document.body.classList.remove("non-selectable");const C=()=>{document.body.classList.remove("no-pointer-events--children")};P===!0?setTimeout(C,50):C()}),t.handler({evt:o,touch:t.event.mouse!==!0,mouse:t.event.mouse,direction:t.event.dir,duration:s,distance:{x:r,y:v}})):t.end(o)},end(o){t.event!==void 0&&(I(t,"temp"),B.is.firefox===!0&&F(e,!1),t.styleCleanup!==void 0&&t.styleCleanup(!0),o!==void 0&&t.event.dir!==!1&&G(o),t.event=void 0)}};if(e.__qtouchswipe=t,h.mouse===!0){const o=h.mouseCapture===!0||h.mousecapture===!0?"Capture":"";L(t,"main",[[e,"mousedown","mouseStart",`passive${o}`]])}B.has.touch===!0&&L(t,"main",[[e,"touchstart","touchStart",`passive${h.capture===!0?"Capture":""}`],[e,"touchmove","noop","notPassiveCapture"]])},updated(e,a){const u=e.__qtouchswipe;u!==void 0&&(a.oldValue!==a.value&&(typeof a.value!="function"&&u.end(),u.handler=a.value),u.direction=J(a.modifiers))},beforeUnmount(e){const a=e.__qtouchswipe;a!==void 0&&(I(a,"main"),I(a,"temp"),B.is.firefox===!0&&F(e,!1),a.styleCleanup!==void 0&&a.styleCleanup(),delete e.__qtouchswipe)}});function ot(){let e=Object.create(null);return{getCache:(a,u)=>e[a]===void 0?e[a]=typeof u=="function"?u():u:e[a],setCache(a,u){e[a]=u},hasCache(a){return Object.hasOwnProperty.call(e,a)},clearCache(a){a!==void 0?delete e[a]:e=Object.create(null)}}}const vt={name:{required:!0},disable:Boolean},be={setup(e,{slots:a}){return()=>E("div",{class:"q-panel scroll",role:"tabpanel"},ce(a.default))}},ft={modelValue:{required:!0},animated:Boolean,infinite:Boolean,swipeable:Boolean,vertical:Boolean,transitionPrev:String,transitionNext:String,transitionDuration:{type:[String,Number],default:300},keepAlive:Boolean,keepAliveInclude:[String,Array,RegExp],keepAliveExclude:[String,Array,RegExp],keepAliveMax:Number},mt=["update:modelValue","beforeTransition","transition"];function pt(){const{props:e,emit:a,proxy:u}=xe(),{getCache:h}=ot();let n,t;const o=$(null),s=$(null);function m(l){const g=e.vertical===!0?"up":"left";W((u.$q.lang.rtl===!0?-1:1)*(l.direction===g?1:-1))}const d=p(()=>[[rt,m,void 0,{horizontal:e.vertical!==!0,vertical:e.vertical,mouse:!0}]]),r=p(()=>e.transitionPrev||`slide-${e.vertical===!0?"down":"right"}`),w=p(()=>e.transitionNext||`slide-${e.vertical===!0?"up":"left"}`),v=p(()=>`--q-transition-duration: ${e.transitionDuration}ms`),y=p(()=>typeof e.modelValue=="string"||typeof e.modelValue=="number"?e.modelValue:String(e.modelValue)),f=p(()=>({include:e.keepAliveInclude,exclude:e.keepAliveExclude,max:e.keepAliveMax})),P=p(()=>e.keepAliveInclude!==void 0||e.keepAliveExclude!==void 0);x(()=>e.modelValue,(l,g)=>{const k=z(l)===!0?V(l):-1;t!==!0&&M(k===-1?0:k<V(g)?-1:1),o.value!==k&&(o.value=k,a("beforeTransition",l,g),de(()=>{a("transition",l,g)}))});function C(){W(1)}function b(){W(-1)}function X(l){a("update:modelValue",l)}function z(l){return l!=null&&l!==""}function V(l){return n.findIndex(g=>g.props.name===l&&g.props.disable!==""&&g.props.disable!==!0)}function Y(){return n.filter(l=>l.props.disable!==""&&l.props.disable!==!0)}function M(l){const g=l!==0&&e.animated===!0&&o.value!==-1?"q-transition--"+(l===-1?r.value:w.value):null;s.value!==g&&(s.value=g)}function W(l,g=o.value){let k=g+l;for(;k!==-1&&k<n.length;){const A=n[k];if(A!==void 0&&A.props.disable!==""&&A.props.disable!==!0){M(l),t=!0,a("update:modelValue",A.props.name),setTimeout(()=>{t=!1});return}k+=l}e.infinite===!0&&n.length!==0&&g!==-1&&g!==n.length&&W(l,l===-1?n.length:-1)}function U(){const l=V(e.modelValue);return o.value!==l&&(o.value=l),!0}function N(){const l=z(e.modelValue)===!0&&U()&&n[o.value];return e.keepAlive===!0?[E(et,f.value,[E(P.value===!0?h(y.value,()=>({...be,name:y.value})):be,{key:y.value,style:v.value},()=>l)])]:[E("div",{class:"q-panel scroll",style:v.value,key:y.value,role:"tabpanel"},[l])]}function T(){if(n.length!==0)return e.animated===!0?[E(Je,{name:s.value},N)]:N()}function O(l){return n=Ze(ce(l.default,[])).filter(g=>g.props!==null&&g.props.slot===void 0&&z(g.props.name)===!0),n.length}function H(){return n}return Object.assign(u,{next:C,previous:b,goTo:X}),{panelIndex:o,panelDirectives:d,updatePanelsList:O,updatePanelIndex:U,getPanelContent:T,getEnabledPanels:Y,getPanels:H,isValidPanelName:z,keepAliveProps:f,needsUniqueKeepAliveWrapper:P,goToPanelByOffset:W,goToPanel:X,nextPanel:C,previousPanel:b}}export{ct as Q,se as T,mt as a,pt as b,vt as c,ot as d,rt as e,ft as u};
