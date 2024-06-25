import{v as w,d as l,t as c,P as B,N as H,an as O,b5 as m,r as q,w as s,e as _,aB as $,bz as C}from"./index-BGuuL7R9.js";import{b as F}from"./QLayout-DVeDTjXA.js";const R=w({name:"QToolbar",props:{inset:Boolean},setup(t,{slots:f}){const i=l(()=>"q-toolbar row no-wrap items-center"+(t.inset===!0?" q-toolbar--inset":""));return()=>c("div",{class:i.value,role:"toolbar"},B(f.default))}}),S=w({name:"QHeader",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,revealOffset:{type:Number,default:250},bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(t,{slots:f,emit:i}){const{proxy:{$q:v}}=H(),a=O(C,m);if(a===m)return console.error("QHeader needs to be child of QLayout"),m;const d=q(parseInt(t.heightHint,10)),r=q(!0),h=l(()=>t.reveal===!0||a.view.value.indexOf("H")!==-1||v.platform.is.ios&&a.isContainer.value===!0),b=l(()=>{if(t.modelValue!==!0)return 0;if(h.value===!0)return r.value===!0?d.value:0;const e=d.value-a.scroll.value.position;return e>0?e:0}),y=l(()=>t.modelValue!==!0||h.value===!0&&r.value!==!0),z=l(()=>t.modelValue===!0&&y.value===!0&&t.reveal===!0),V=l(()=>"q-header q-layout__section--marginal "+(h.value===!0?"fixed":"absolute")+"-top"+(t.bordered===!0?" q-header--bordered":"")+(y.value===!0?" q-header--hidden":"")+(t.modelValue!==!0?" q-layout--prevent-focus":"")),Q=l(()=>{const e=a.rows.value.top,u={};return e[0]==="l"&&a.left.space===!0&&(u[v.lang.rtl===!0?"right":"left"]=`${a.left.size}px`),e[2]==="r"&&a.right.space===!0&&(u[v.lang.rtl===!0?"left":"right"]=`${a.right.size}px`),u});function o(e,u){a.update("header",e,u)}function n(e,u){e.value!==u&&(e.value=u)}function p({height:e}){n(d,e),o("size",e)}function x(e){z.value===!0&&n(r,!0),i("focusin",e)}s(()=>t.modelValue,e=>{o("space",e),n(r,!0),a.animate()}),s(b,e=>{o("offset",e)}),s(()=>t.reveal,e=>{e===!1&&n(r,t.modelValue)}),s(r,e=>{a.animate(),i("reveal",e)}),s(a.scroll,e=>{t.reveal===!0&&n(r,e.direction==="up"||e.position<=t.revealOffset||e.position-e.inflectionPoint<100)});const g={};return a.instances.header=g,t.modelValue===!0&&o("size",d.value),o("space",t.modelValue),o("offset",b.value),_(()=>{a.instances.header===g&&(a.instances.header=void 0,o("size",0),o("offset",0),o("space",!1))}),()=>{const e=$(f.default,[]);return t.elevated===!0&&e.push(c("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),e.push(c(F,{debounce:0,onResize:p})),c("header",{class:V.value,style:Q.value,onFocusin:x},e)}}});export{R as Q,S as a};
