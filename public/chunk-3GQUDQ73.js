import{a as D,c as W,d as N}from"./chunk-3T2OU2AC.js";import{a as O,b as p,c as I,d as j,e as P,f as T,g as U,i as L,j as E,k as B}from"./chunk-5YDXURHO.js";import{a as S}from"./chunk-IEDQCF33.js";import{V as F,g as k}from"./chunk-PS6SIGCY.js";import{Ab as h,Bb as b,Db as w,Eb as v,Na as d,Oa as a,V as y,_ as M,cb as g,da as _,kb as s,lb as l,mb as C,sb as u,wb as m,zb as f}from"./chunk-PTIACT43.js";var R=(()=>{let e=class e{constructor(o){this.firestore=o}addToLogger(o){let i=N(this.firestore,"logs");W(i,{userEmail:o,fecha:new Date})}};e.\u0275fac=function(i){return new(i||e)(M(D))},e.\u0275prov=y({token:e,factory:e.\u0275fac,providedIn:"root"});let r=e;return r})();var G=()=>({standalone:!0}),Q=(()=>{let e=class e{constructor(o,i,t,c,n){this.fb=o,this.router=i,this.toast=t,this._auth=c,this._firestoreService=n,this.loginUser={email:"",password:""},this.goToRegister=()=>this.router.navigateByUrl("/register"),this.loginForm=this.fb.group({email:["",[p.required,p.email]],password:["",p.required]})}ngOnInit(){}login(){this._firestoreService.addToLogger(this.loginUser.email),this._auth.logIn(this.loginUser)}};e.\u0275fac=function(i){return new(i||e)(a(L),a(k),a(F),a(S),a(R))},e.\u0275cmp=_({type:e,selectors:[["app-login"]],standalone:!0,features:[w],decls:20,vars:7,consts:[[1,"container-fluid","vh-100","m-0","p-0"],[1,"row","justify-content-center","align-items-top","h-100","form-container"],[1,"col-md-12"],[1,"card"],[1,"card-body"],[1,"card-title"],[3,"formGroup"],[1,"form-group"],["type","text","placeholder","Email",1,"form-control",3,"ngModelChange","ngModel","ngModelOptions"],["type","password","placeholder","Contrase\xF1a",1,"form-control",3,"ngModelChange","ngModel","ngModelOptions"],[1,"login-btns"],["type","button",1,"btn","btn-success","btn-block",3,"click"],["type","button",1,"btn","btn-primary","btn-block",3,"click"]],template:function(i,t){i&1&&(s(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"h1",5),m(6,"Ingrese su usuario"),l(),C(7,"br"),s(8,"form",6)(9,"div",7)(10,"input",8),b("ngModelChange",function(n){return h(t.loginUser.email,n)||(t.loginUser.email=n),n}),l()(),s(11,"div",7)(12,"input",9),b("ngModelChange",function(n){return h(t.loginUser.password,n)||(t.loginUser.password=n),n}),l()(),s(13,"div",10)(14,"div",7)(15,"button",11),u("click",function(){return t.login()}),m(16,"Iniciar Sesi\xF3n"),l()(),s(17,"div",7)(18,"button",12),u("click",function(){return t.goToRegister()}),m(19,"Registrarse"),l()()()()()()()()()),i&2&&(d(8),g("formGroup",t.loginForm),d(2),f("ngModel",t.loginUser.email),g("ngModelOptions",v(5,G)),d(2),f("ngModel",t.loginUser.password),g("ngModelOptions",v(6,G)))},dependencies:[E,T,O,I,j,P,B,U],styles:['.container-fluid[_ngcontent-%COMP%]{background-color:#000;background-image:url("./media/login-pacman-background-FV4BYAKB.gif");background-size:contain;background-repeat:no-repeat;background-position:center;display:flex;flex-direction:column;align-items:center;padding:20px;margin:1%}.form-container[_ngcontent-%COMP%]{margin-top:5em;justify-content:center}.form-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{margin-bottom:1em}.card-body[_ngcontent-%COMP%]{padding:2em}.login-btns[_ngcontent-%COMP%]{text-align:center}h1[_ngcontent-%COMP%], button[_ngcontent-%COMP%]{margin-top:1em}']});let r=e;return r})();export{Q as LoginComponent};
