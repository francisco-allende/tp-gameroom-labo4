import { Component, Output, EventEmitter } from '@angular/core';
import { UserModel } from '../../models/user-model';
import { FormBuilder, FormGroup, FormControl, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { FirestoreService } from '../../services/firestore.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginForm: FormGroup;
  loginUser: UserModel = {email: '', password: '' }; 

  constructor(private fb: FormBuilder,
              private router: Router,
              private toast: ToastrService,
              private _auth: AuthService,
              private _firestoreService: FirestoreService) 
              {
                this.loginForm = this.fb.group({
                  email: ['', [Validators.required, Validators.email]],
                  password: ['', Validators.required]
                });
               }


  ngOnInit(): void {

  }

  login() {
    this._firestoreService.addToLogger(this.loginUser.email);
    this._auth.logIn(this.loginUser);
  }

  goToRegister=()=> this.router.navigateByUrl('/register');

}