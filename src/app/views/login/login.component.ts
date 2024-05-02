import { Component, Output, EventEmitter } from '@angular/core';
import { UserModel } from '../../models/user-model';
import { FormBuilder, FormGroup, FormControl, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Auth, User, signInWithEmailAndPassword, signOut } from '@angular/fire/auth';
import { addDoc, collection, collectionData, Firestore } from '@angular/fire/firestore';
import { BehaviorSubject, Subscription } from 'rxjs';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  @Output() loadLoggedUser:EventEmitter<UserModel> = new EventEmitter<UserModel>();
  loginForm: FormGroup;

  user: UserModel = {email: '', password: '' }; 

  public loginsCollection:UserModel[] = [];
  
  public countLogins:number = 0;
  private sub!:Subscription;


  constructor(private _router: Router, 
              private fb: FormBuilder,
              private _toast: ToastrService,
              public auth: Auth, 
              public firestore: Firestore) 
              {
                this.loginForm = this.fb.group({
                  email: ['', [Validators.required, Validators.email]],
                  password: ['', Validators.required]
                });
               }


  ngOnInit(): void {

  }

  Login() {
    let col = collection(this.firestore, 'logins');
    addDoc(col, { fecha: new Date().toDateString(), userEmail: this.user.email});
    this.loadLoggedUser.emit();
    this._router.navigateByUrl('/home');
  }

  register():void{
    this._router.navigateByUrl('/register');
  }
}