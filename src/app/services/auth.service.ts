import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Auth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from '@angular/fire/auth';
import { ToastrService } from 'ngx-toastr';
import { UserModel } from '../models/user-model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public auth: Auth, 
              public toast: ToastrService,
              public router: Router) { }

  loggedUser:string='';


  setLoggedUser = (email:string) => this.loggedUser = email;
  getLoggedUser = ():string => this.loggedUser;

    logIn(userLogin:UserModel){
      signInWithEmailAndPassword(this.auth, userLogin.email, userLogin.password).then((res)=> {
        if(res.user.email != null){
          this.setLoggedUser(res.user.email);
          this.toast.success(`Nos alegra verte de nuevo ${res.user.email}`);
          this.router.navigateByUrl('/home');
        } 
      }).catch((error) => {
        switch (error.code) {
          case "auth/invalid-credential":
            this.toast.error("Usuario inexistente"); 
            break;
          default:
            this.toast.error("Sucedió un error al intentar loguearse");
          break;
        }
        console.log(`error en el login: ${error.code}`)
      })
    }

    logOut(){
      signOut(this.auth).then(() => {
        this.setLoggedUser('');
        console.log(this.auth.currentUser?.email)
      })
    }

    register(newUser:UserModel){
      createUserWithEmailAndPassword(this.auth, newUser.email, newUser.password).then((res)=> {
        if(res.user.email != null){
          this.setLoggedUser(res.user.email);
          this.toast.success('Usuario creado con éxito', `Bienvenido ${res.user.email}!`);
          this.router.navigateByUrl('/home');
        } 
      }).catch((error) => {
        switch (error.code) {
          case "auth/invalid-email":
            this.toast.error("Email invalido"); 
            break;
          case "auth/email-already-in-use":
            this.toast.error("Email ya en uso"); 
            break;
          default:
            this.toast.error("Sucedió un error inesperado"); 
            console.log(error)
            break;
        }
      });
    }
}


