import{Q as n}from"./vendor-151c6116.js";const r=()=>{const s=n("__svelte__");return{page:{subscribe:s.page.subscribe},navigating:{subscribe:s.navigating.subscribe},get preloading(){return console.error("stores.preloading is deprecated; use stores.navigating instead"),{subscribe:s.navigating.subscribe}},session:s.session}},a={subscribe(s){return r().page.subscribe(s)}},t=s=>{throw new Error(`Cannot ${s} session store before subscribing`)},o={subscribe(s){const e=r().session;return o.set=e.set,o.update=e.update,e.subscribe(s)},set:()=>t("set"),update:()=>t("update")};export{a as p,o as s};