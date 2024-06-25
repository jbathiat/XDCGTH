import{v as L,N as $,an as I,b5 as P,a0 as j,d as g,t as m,P as _,bz as k,bC as G,aC as J,w as E,a3 as T,e as H,bc as V,aE as X,aF as q,bD as Y,bE as Z,r as y,U as B,a6 as W,bk as R,a9 as x,ao as ee,ar as te}from"./index-BGuuL7R9.js";const re=L({name:"QPageContainer",setup(t,{slots:p}){const{proxy:{$q:n}}=$(),e=I(k,P);if(e===P)return console.error("QPageContainer needs to be child of QLayout"),P;j(G,!0);const r=g(()=>{const a={};return e.header.space===!0&&(a.paddingTop=`${e.header.size}px`),e.right.space===!0&&(a[`padding${n.lang.rtl===!0?"Left":"Right"}`]=`${e.right.size}px`),e.footer.space===!0&&(a.paddingBottom=`${e.footer.size}px`),e.left.space===!0&&(a[`padding${n.lang.rtl===!0?"Right":"Left"}`]=`${e.left.size}px`),a});return()=>m("div",{class:"q-page-container",style:r.value},_(p.default))}}),{passive:D}=q,ne=["both","horizontal","vertical"],oe=L({name:"QScrollObserver",props:{axis:{type:String,validator:t=>ne.includes(t),default:"vertical"},debounce:[String,Number],scrollTarget:J},emits:["scroll"],setup(t,{emit:p}){const n={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let e=null,r,a;E(()=>t.scrollTarget,()=>{l(),v()});function s(){e!==null&&e();const c=Math.max(0,Y(r)),z=Z(r),d={top:c-n.position.top,left:z-n.position.left};if(t.axis==="vertical"&&d.top===0||t.axis==="horizontal"&&d.left===0)return;const w=Math.abs(d.top)>=Math.abs(d.left)?d.top<0?"up":"down":d.left<0?"left":"right";n.position={top:c,left:z},n.directionChanged=n.direction!==w,n.delta=d,n.directionChanged===!0&&(n.direction=w,n.inflectionPoint=n.position),p("scroll",{...n})}function v(){r=X(a,t.scrollTarget),r.addEventListener("scroll",i,D),i(!0)}function l(){r!==void 0&&(r.removeEventListener("scroll",i,D),r=void 0)}function i(c){if(c===!0||t.debounce===0||t.debounce==="0")s();else if(e===null){const[z,d]=t.debounce?[setTimeout(s,t.debounce),clearTimeout]:[requestAnimationFrame(s),cancelAnimationFrame];e=()=>{d(z),e=null}}}const{proxy:h}=$();return E(()=>h.$q.lang.rtl,s),T(()=>{a=h.$el.parentNode,v()}),H(()=>{e!==null&&e(),l()}),Object.assign(h,{trigger:i,getPosition:()=>n}),V}});function ie(){const t=y(!B.value);return t.value===!1&&T(()=>{t.value=!0}),{isHydrated:t}}const U=typeof ResizeObserver<"u",M=U===!0?{}:{style:"display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;",url:"about:blank"},N=L({name:"QResizeObserver",props:{debounce:{type:[String,Number],default:100}},emits:["resize"],setup(t,{emit:p}){let n=null,e,r={width:-1,height:-1};function a(l){l===!0||t.debounce===0||t.debounce==="0"?s():n===null&&(n=setTimeout(s,t.debounce))}function s(){if(n!==null&&(clearTimeout(n),n=null),e){const{offsetWidth:l,offsetHeight:i}=e;(l!==r.width||i!==r.height)&&(r={width:l,height:i},p("resize",r))}}const{proxy:v}=$();if(v.trigger=a,U===!0){let l;const i=h=>{e=v.$el.parentNode,e?(l=new ResizeObserver(a),l.observe(e),s()):h!==!0&&W(()=>{i(!0)})};return T(()=>{i()}),H(()=>{n!==null&&clearTimeout(n),l!==void 0&&(l.disconnect!==void 0?l.disconnect():e&&l.unobserve(e))}),V}else{let l=function(){n!==null&&(clearTimeout(n),n=null),c!==void 0&&(c.removeEventListener!==void 0&&c.removeEventListener("resize",a,q.passive),c=void 0)},i=function(){l(),e&&e.contentDocument&&(c=e.contentDocument.defaultView,c.addEventListener("resize",a,q.passive),s())};const{isHydrated:h}=ie();let c;return T(()=>{W(()=>{e=v.$el,e&&i()})}),H(l),()=>{if(h.value===!0)return m("object",{class:"q--avoid-card-border",style:M.style,tabindex:-1,type:"text/html",data:M.url,"aria-hidden":"true",onLoad:i})}}}}),ae=L({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:t=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(t.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(t,{slots:p,emit:n}){const{proxy:{$q:e}}=$(),r=y(null),a=y(e.screen.height),s=y(t.container===!0?0:e.screen.width),v=y({position:0,direction:"down",inflectionPoint:0}),l=y(0),i=y(B.value===!0?0:R()),h=g(()=>"q-layout q-layout--"+(t.container===!0?"containerized":"standard")),c=g(()=>t.container===!1?{minHeight:e.screen.height+"px"}:null),z=g(()=>i.value!==0?{[e.lang.rtl===!0?"left":"right"]:`${i.value}px`}:null),d=g(()=>i.value!==0?{[e.lang.rtl===!0?"right":"left"]:0,[e.lang.rtl===!0?"left":"right"]:`-${i.value}px`,width:`calc(100% + ${i.value}px)`}:null);function w(o){if(t.container===!0||document.qScrollPrevented!==!0){const u={position:o.position.top,direction:o.direction,directionChanged:o.directionChanged,inflectionPoint:o.inflectionPoint.top,delta:o.delta.top};v.value=u,t.onScroll!==void 0&&n("scroll",u)}}function A(o){const{height:u,width:b}=o;let f=!1;a.value!==u&&(f=!0,a.value=u,t.onScrollHeight!==void 0&&n("scrollHeight",u),Q()),s.value!==b&&(f=!0,s.value=b),f===!0&&t.onResize!==void 0&&n("resize",o)}function K({height:o}){l.value!==o&&(l.value=o,Q())}function Q(){if(t.container===!0){const o=a.value>l.value?R():0;i.value!==o&&(i.value=o)}}let S=null;const O={instances:{},view:g(()=>t.view),isContainer:g(()=>t.container),rootRef:r,height:a,containerHeight:l,scrollbarWidth:i,totalWidth:g(()=>s.value+i.value),rows:g(()=>{const o=t.view.toLowerCase().split(" ");return{top:o[0].split(""),middle:o[1].split(""),bottom:o[2].split("")}}),header:x({size:0,offset:0,space:!1}),right:x({size:300,offset:0,space:!1}),footer:x({size:0,offset:0,space:!1}),left:x({size:300,offset:0,space:!1}),scroll:v,animate(){S!==null?clearTimeout(S):document.body.classList.add("q-body--layout-animate"),S=setTimeout(()=>{S=null,document.body.classList.remove("q-body--layout-animate")},155)},update(o,u,b){O[o][u]=b}};if(j(k,O),R()>0){let o=function(){f=null,C.classList.remove("hide-scrollbar")},u=function(){if(f===null){if(C.scrollHeight>e.screen.height)return;C.classList.add("hide-scrollbar")}else clearTimeout(f);f=setTimeout(o,300)},b=function(F){f!==null&&F==="remove"&&(clearTimeout(f),o()),window[`${F}EventListener`]("resize",u)},f=null;const C=document.body;E(()=>t.container!==!0?"add":"remove",b),t.container!==!0&&b("add"),ee(()=>{b("remove")})}return()=>{const o=te(p.default,[m(oe,{onScroll:w}),m(N,{onResize:A})]),u=m("div",{class:h.value,style:c.value,ref:t.container===!0?void 0:r,tabindex:-1},o);return t.container===!0?m("div",{class:"q-layout-container overflow-hidden",ref:r},[m(N,{onResize:K}),m("div",{class:"absolute-full",style:z.value},[m("div",{class:"scroll",style:d.value},[u])])]):u}}});export{re as Q,ae as a,N as b,oe as c};
