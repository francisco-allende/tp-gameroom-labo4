import{A as p,C as h,D as g,E as c,v as m,y as w,z as u}from"./chunk-6WCNAO4G.js";import{V as d,_ as y,e as i}from"./chunk-VUEWXBX5.js";var D=(()=>{let s=class s{constructor(o){this.firestore=o}updatePuntos(o,e,n){return i(this,null,function*(){try{let t=u(this.firestore,"puntos"),r=h(t,c("userEmail","==",o),c("juego","==",n)),a=yield p(r);if(a.empty)yield w(t,{userEmail:o,puntos:e,juego:n,fecha:new Date});else{let f=yield this.getPuntosPorUsuarioYJuego(o,n),j=Number(f[0].puntos)+Number(e),E=a.docs[0].ref;yield g(E,{puntos:j})}}catch(t){throw console.error("Error actualizando los puntos:",t),t}})}getPuntosPorUsuarioYJuego(o,e){return i(this,null,function*(){let n=u(this.firestore,"puntos"),t=h(n,c("userEmail","==",o),c("juego","==",e));try{let r=yield p(t),a=[];return r.forEach(f=>{a.push(f.data())}),a}catch(r){throw console.error("Error obteniendo los puntos:",r),r}})}getPuntosByJuego(o){return i(this,null,function*(){let e=u(this.firestore,"puntos"),n=yield p(e),t=[];return n.forEach(r=>{let a=r.data();t.push(a)}),t=t.filter(r=>r.juego===o),t})}};s.\u0275fac=function(e){return new(e||s)(y(m))},s.\u0275prov=d({token:s,factory:s.\u0275fac,providedIn:"root"});let l=s;return l})();export{D as a};