import{h as S,u as C,j as T,k as E,d as A,l as J,a as x,b as l,e as c,w as i,g as y,F as D,m as P,n as $,p as R,r as g,o as k,f as B,t as h,q as M,s as W,v as q}from"./index-BjOWWUjL.js";const z=S(100),F=function(){return{depth:z}},K="https://api.binance.com/api/v3/depth",d=S(),O=S("idle"),{depth:V}=F(),{selectedPair:G}=C(),L=function(){async function u(){O.value="loading";const o=`${K}?symbol=${G.value}&limit=${V.value.toString()}`;try{const r=await fetch(o);if(!r.ok)throw new Error("Network response was not ok");const b=await r.json();d.value=b,O.value="idle"}catch(r){throw O.value="idle",console.error("There was a problem with the fetch operation:",r),new Error("Network response has error")}}const v=async()=>{O.value!=="loading"&&(d.value=void 0,await u())},m=()=>{d.value=void 0},w=o=>{if(!d.value)return;for(;o.length>0;){const e=o.shift();if(e){if(!("u"in e)||!("U"in e))return;const p=e.u,f=e.U,t=d.value.lastUpdateId;f<=t+1&&p>=t+1&&(r(d.value.bids,e.b),r(d.value.asks,e.a),d.value.bids.sort((a,_)=>Number(_[0])-Number(a[0])),d.value.asks.sort((a,_)=>Number(a[0])-Number(_[0])),b(d.value.bids,V.value),b(d.value.asks,V.value),d.value.lastUpdateId=p+1)}}function r(e,p){for(const[f,t]of p)if(Number(t)===0){const _=e.findIndex(([N,I])=>N===f);_!==-1&&e.splice(_,1)}else{const _=e.findIndex(([N,I])=>N===f);_!==-1?e[_][1]=t:e.push([f,t])}}function b(e,p){e.length>p&&e.splice(0,e.length-p)}};return{orderBook:T(d),updateOrderBook:w,initOrderBook:v,clearOrderBook:m}},H=S([]),Q=function(){return{depthUpdates:H}},X="wss://stream.binance.com:9443/ws/";let n;const Y=function(){const{orderBook:u,initOrderBook:v,updateOrderBook:m,clearOrderBook:w}=L(),{depthUpdates:o}=Q(),{selectedPair:r}=C(),b=async()=>{n&&n.readyState!==n.CLOSED||(n=new WebSocket(X+r.value.toLowerCase()+"@depth"),n.onopen=()=>{setInterval(()=>{n.readyState===n.OPEN&&n.send(JSON.stringify({ping:Date.now()}))},18e4),n.send(JSON.stringify({method:"SUBSCRIBE",params:[`${r.value.toLowerCase()}@depth`],id:1}))},n.onmessage=f,n.onclose=()=>{},n.onerror=t=>{console.error("WebSocket error:",t)})},e=()=>{w(),n&&n.close()};function p(t,a){t.send(JSON.stringify({pong:a}))}async function f(t){u.value||await v();const a=JSON.parse(t.data);a.ping?p(this,a.ping):("e"in a&&a.e==="depthUpdate"&&o.value.push(a),m(o.value))}return E(()=>{e()}),{start:b,stop:e}},Z=u=>(W("data-v-dceb9e50"),u=u(),q(),u),ee={class:"h-screen h-sm-auto d-flex flex-column justify-start"},te={class:"mt-16 pt-4"},se={class:"depth-selector d-flex align-baseline"},oe=Z(()=>l("div",{class:"text-subtitle-2 pr-2"},"Depth:",-1)),ae=R('<div class="d-flex justify-space-between pt-4" data-v-dceb9e50><div class="flex-grow-1 pr-0 pr-sm-4" data-v-dceb9e50><table class="head-table" data-v-dceb9e50><tr data-v-dceb9e50><td class="first text-center text-sm-left" data-v-dceb9e50>Bid price</td><td class="second text-center text-sm-right" data-v-dceb9e50>Amount</td><td class="third text-center text-sm-right hidden-xs hidden-sm" data-v-dceb9e50>Value</td></tr></table></div><div class="flex-grow-1 pl-0 pl-sm-4" data-v-dceb9e50><table class="head-table" data-v-dceb9e50><tr data-v-dceb9e50><td class="first text-center text-sm-left" data-v-dceb9e50>Ask price</td><td class="second text-center text-sm-right" data-v-dceb9e50>Amount</td><td class="third text-center text-sm-right hidden-xs hidden-sm" data-v-dceb9e50>Value</td></tr></table></div></div>',1),ne={class:"flex-grow-1 overflow-y-scroll"},de={key:0,class:"d-flex text-mono text-right pt-4 pb-8"},re={class:"flex-grow-1 pr-1 pr-sm-4"},ce={key:0,class:"data-table"},ie={class:"first"},le={class:"second"},ue={class:"third hidden-xs hidden-sm"},ve={class:"flex-grow-1 pl-0 pl-sm-4 pr-2 pr-sm-0"},pe={key:0,class:"data-table"},fe={class:"first"},_e={class:"second"},he={class:"third hidden-xs hidden-sm"},me={key:1,class:"ma-12 d-flex justify-center"},be=A({__name:"OrderBookView",setup(u){const{orderBook:v}=L(),{start:m,stop:w}=Y(),{depth:o}=F(),{selectedPair:r}=C();return m(),J(o,async()=>{w(),await new Promise(b=>{setTimeout(()=>{b()},1e3)}),m()}),E(()=>{w()}),(b,e)=>{const p=g("v-btn"),f=g("v-list-item-title"),t=g("v-list-item"),a=g("v-list"),_=g("v-menu"),N=g("v-card-title"),I=g("v-card"),j=g("v-progress-circular");return k(),x("div",ee,[l("div",te,[c(I,{elevation:"0",class:"position-relative"},{default:i(()=>[c(N,null,{default:i(()=>[B("Order Book: "+h(y(r))+" ",1),l("div",se,[oe,c(_,null,{activator:i(({props:s})=>[c(p,M({variant:"tonal"},s),{default:i(()=>[B(h(y(o)),1)]),_:2},1040)]),default:i(()=>[c(a,null,{default:i(()=>[c(t,{value:100,onClick:e[0]||(e[0]=s=>o.value=100)},{default:i(()=>[c(f,null,{default:i(()=>[B(h("100"))]),_:1})]),_:1}),c(t,{value:500,onClick:e[1]||(e[1]=s=>o.value=500)},{default:i(()=>[c(f,null,{default:i(()=>[B(h("500"))]),_:1})]),_:1}),c(t,{value:1e3,onClick:e[2]||(e[2]=s=>o.value=1e3)},{default:i(()=>[c(f,null,{default:i(()=>[B(h("1000"))]),_:1})]),_:1})]),_:1})]),_:1})])]),_:1})]),_:1})]),ae,l("div",ne,[y(v)?(k(),x("div",de,[l("div",re,[y(v)?(k(),x("table",ce,[(k(!0),x(D,null,P(y(v).bids,(s,U)=>(k(),x("tr",{key:U+s[0]},[l("td",ie,h(s[0].slice(0,-2)),1),l("td",le,h(s[1].slice(0,-2)),1),l("td",ue,h((Number(s[0])*Number(s[1])).toFixed(2)),1)]))),128))])):$("",!0)]),l("div",ve,[y(v)?(k(),x("table",pe,[(k(!0),x(D,null,P(y(v).asks,(s,U)=>(k(),x("tr",{key:U+s[0]},[l("td",fe,h(s[0].slice(0,-2)),1),l("td",_e,h(s[1].slice(0,-2)),1),l("td",he,h((Number(s[0])*Number(s[1])).toFixed(2)),1)]))),128))])):$("",!0)])])):(k(),x("div",me,[c(j,{size:60,indeterminate:""})]))])])}}}),xe=(u,v)=>{const m=u.__vccOpts||u;for(const[w,o]of v)m[w]=o;return m},we=xe(be,[["__scopeId","data-v-dceb9e50"]]);export{we as default};