const a="modulepreload",i={},u="/mulligans-lane/_app/",m=function(s,r){return!r||r.length===0?s():Promise.all(r.map(e=>{if(e=`${u}${e}`,e in i)return;i[e]=!0;const n=e.endsWith(".css"),l=n?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${l}`))return;const t=document.createElement("link");if(t.rel=n?"stylesheet":a,n||(t.as="script",t.crossOrigin=""),t.href=e,document.head.appendChild(t),n)return new Promise((o,c)=>{t.addEventListener("load",o),t.addEventListener("error",c)})})).then(()=>s())};export{m as _};
