import{H as l,K as n,M as h,N as c,V as u,g as o}from"./chunk-RF5HGZMQ.js";import{V as a,_ as s}from"./chunk-DR62P47H.js";var b=(()=>{let i=class i{constructor(t,e,d){this.auth=t,this.toast=e,this.router=d,this.loggedUser="",this.setLoggedUser=g=>this.loggedUser=g,this.getLoggedUser=()=>this.loggedUser}logIn(t){h(this.auth,t.email,t.password).then(e=>{e.user.email!=null&&(this.setLoggedUser(e.user.email),this.toast.success(`Nos alegra verte de nuevo ${e.user.email}`),this.router.navigateByUrl("/home"))}).catch(e=>{switch(e.code){case"auth/invalid-credential":this.toast.error("Usuario inexistente");break;default:this.toast.error("Sucedi\xF3 un error al intentar loguearse");break}console.log(`error en el login: ${e.code}`)})}logOut(){c(this.auth).then(()=>{this.setLoggedUser(""),console.log(this.auth.currentUser?.email)})}register(t){n(this.auth,t.email,t.password).then(e=>{e.user.email!=null&&(this.setLoggedUser(e.user.email),this.toast.success("Usuario creado con \xE9xito",`Bienvenido ${e.user.email}!`),this.router.navigateByUrl("/home"))}).catch(e=>{switch(e.code){case"auth/invalid-email":this.toast.error("Email invalido");break;case"auth/email-already-in-use":this.toast.error("Email ya en uso");break;default:this.toast.error("Sucedi\xF3 un error inesperado"),console.log(e);break}})}};i.\u0275fac=function(e){return new(e||i)(s(l),s(u),s(o))},i.\u0275prov=a({token:i,factory:i.\u0275fac,providedIn:"root"});let r=i;return r})();export{b as a};
