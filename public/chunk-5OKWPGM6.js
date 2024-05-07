import{a as y,b as w}from"./chunk-VDDVFE27.js";import"./chunk-LWA7XIGA.js";import"./chunk-L63OU4FS.js";import"./chunk-IEDQCF33.js";import{V as M}from"./chunk-PS6SIGCY.js";import{$a as h,Db as A,Na as a,Oa as O,cb as S,da as F,gb as c,hb as g,ib as C,jb as b,kb as r,lb as o,ma as _,mb as l,na as f,pb as v,sb as u,tb as m,wb as p,xb as P,yb as x}from"./chunk-PTIACT43.js";function z(e,n){e&1&&l(0,"div",5)}function k(e,n){e&1&&l(0,"div",6)}function E(e,n){e&1&&l(0,"div",7)}function U(e,n){e&1&&l(0,"div",8)}function I(e,n){e&1&&l(0,"div",9)}function $(e,n){e&1&&l(0,"div",10)}function q(e,n){if(e&1&&(r(0,"span"),p(1),o()),e&2){let s=m().$implicit;a(),P(s)}}function V(e,n){e&1&&(r(0,"span"),p(1,"_"),o())}function Y(e,n){if(e&1&&(r(0,"span",12),h(1,q,2,1,"span")(2,V,2,0,"span"),o()),e&2){let s=n.$implicit,t=m();a(),c(1,t.letraYaSeleccionada(s)?1:-1),a(),c(2,t.letraYaSeleccionada(s)?-1:2)}}function j(e,n){if(e&1){let s=v();r(0,"button",17),u("click",function(){let d=_(s).$implicit,i=m();return f(i.seleccionarLetra(d))}),p(1),o()}if(e&2){let s=n.$implicit,t=m();S("disabled",t.letraYaSeleccionada(s)),a(),x(" ",s," ")}}function L(e,n){if(e&1){let s=v();r(0,"button",18),u("click",function(){_(s);let d=m();return f(d.playAgain())}),p(1," Play Again "),o()}}var K=(()=>{let n=class n{constructor(t){this.toast=t,this.abecedario="abcdefghijklmn\xF1opqrstuvwxyz".split(""),this.palabraOculta="angular",this.letrasSeleccionadas=[],this.intentosFallidos=0,this.puntos=0,this.showPlayAgain=!1}handleSetUser(t){this.currentUser=t}seleccionarLetra(t){this.letrasSeleccionadas.push(t),this.palabraOculta.includes(t)||this.intentosFallidos++,this.evaluarJuego()}letraYaSeleccionada(t){return this.letrasSeleccionadas.includes(t)}letraCorrecta(t){return this.palabraOculta.includes(t)}evaluarJuego(){this.intentosFallidos>=6&&!this.palabraCompleta()?this.perder():this.intentosFallidos<6&&this.palabraCompleta()&&this.ganar()}palabraCompleta(){for(let t of this.palabraOculta)if(!this.letrasSeleccionadas.includes(t))return!1;return!0}ganar(){this.puntos+=10,this.toast.success(`Felicitaciones ${this.currentUser.email} ganaste ${this.puntos} puntos`),this.gameOver()}perder(){this.puntos-=5,this.toast.error(`Lo sentimos ${this.currentUser.email}, perdiste ${this.puntos} puntos`),this.gameOver()}gameOver(){this.showPlayAgain=!0,this.letrasSeleccionadas=this.abecedario}playAgain(){this.showPlayAgain=!1,this.puntos=0,this.palabraOculta="angular",this.letrasSeleccionadas=[],this.intentosFallidos=0}};n.\u0275fac=function(d){return new(d||n)(O(M))},n.\u0275cmp=F({type:n,selectors:[["app-ahorcado"]],inputs:{currentUser:"currentUser"},standalone:!0,features:[A],decls:29,vars:8,consts:[[3,"sendCurrentUser"],[1,"main"],[1,"container","text-center","justify-content-center","align-items-center"],[1,"title"],[1,"mu\xF1eco"],[1,"cabeza"],[1,"cuerpo"],[1,"brazo-izquierdo"],[1,"brazo-derecho"],[1,"pierna-izquierda"],[1,"pierna-derecha"],[1,"palabra-oculta"],[1,"letter-to-guess"],[1,"abecedario"],[1,"letter-to-choose","btn","btn-dark",3,"disabled"],[1,"intentos"],[1,"btn","btn-danger"],[1,"letter-to-choose","btn","btn-dark",3,"click","disabled"],[1,"btn","btn-danger",3,"click"]],template:function(d,i){d&1&&(r(0,"app-header",0),u("sendCurrentUser",function(T){return i.handleSetUser(T)}),o(),r(1,"div",1)(2,"div",2)(3,"div",3)(4,"h1"),p(5,"Ahorcado"),o(),l(6,"br")(7,"br"),r(8,"div",4),h(9,z,1,0,"div",5)(10,k,1,0,"div",6)(11,E,1,0,"div",7)(12,U,1,0,"div",8)(13,I,1,0,"div",9)(14,$,1,0,"div",10),o()(),r(15,"div",11),C(16,Y,3,2,"span",12,g),o(),l(18,"br"),r(19,"div",13),C(20,j,2,2,"button",14,g),o(),l(22,"br"),r(23,"div",15)(24,"h4"),p(25),o()(),l(26,"br"),h(27,L,2,0,"button",16),o()(),l(28,"app-footer")),d&2&&(a(9),c(9,i.intentosFallidos==1||i.intentosFallidos>=1?9:-1),a(),c(10,i.intentosFallidos==2||i.intentosFallidos>=2?10:-1),a(),c(11,i.intentosFallidos==3||i.intentosFallidos>=3?11:-1),a(),c(12,i.intentosFallidos==4||i.intentosFallidos>=4?12:-1),a(),c(13,i.intentosFallidos==5||i.intentosFallidos>=5?13:-1),a(),c(14,i.intentosFallidos==6||i.intentosFallidos>=6?14:-1),a(2),b(i.palabraOculta),a(4),b(i.abecedario),a(5),x("Intentos fallidos: ",i.intentosFallidos,""),a(2),c(27,i.showPlayAgain?27:-1))},dependencies:[y,w],styles:[".main[_ngcontent-%COMP%]{height:100vh;background-color:#91e4f1}.title[_ngcontent-%COMP%]{margin-bottom:4rem}.container[_ngcontent-%COMP%]{padding-top:2rem}.letter-to-guess[_ngcontent-%COMP%], .letter-to-choose[_ngcontent-%COMP%]{font-size:xx-large;margin-left:1rem;margin-top:1rem}.mu\\f1 eco[_ngcontent-%COMP%]{position:absolute;display:inline-block;margin-left:250px}.cabeza[_ngcontent-%COMP%], .cuerpo[_ngcontent-%COMP%], .brazo-izquierdo[_ngcontent-%COMP%], .brazo-derecho[_ngcontent-%COMP%], .pierna-izquierda[_ngcontent-%COMP%], .pierna-derecha[_ngcontent-%COMP%]{position:absolute;background-color:#000}.cabeza[_ngcontent-%COMP%]{width:40px;height:40px;border-radius:50%;top:-40px;left:50%;transform:translate(-50%)}.cuerpo[_ngcontent-%COMP%]{width:10px;height:60px;top:0;left:50%;transform:translate(-50%)}.brazo-izquierdo[_ngcontent-%COMP%]{width:60px;height:10px;top:20px;left:-10px;transform:rotate(55deg)}.brazo-derecho[_ngcontent-%COMP%]{width:60px;height:10px;top:20px;right:-10px;transform:rotate(-55deg)}.pierna-izquierda[_ngcontent-%COMP%]{width:60px;height:10px;top:80px;left:-20px;transform:rotate(65deg)}.pierna-derecha[_ngcontent-%COMP%]{width:60px;height:10px;top:80px;right:-20px;transform:rotate(-65deg)}"]});let e=n;return e})();export{K as AhorcadoComponent};