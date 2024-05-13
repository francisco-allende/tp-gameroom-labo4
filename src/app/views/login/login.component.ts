import { Component, Output, EventEmitter } from '@angular/core';
import { UserModel } from '../../models/user-model';
import { FormBuilder, FormGroup, FormControl, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginService } from '../../services/login.service';
import { Router , ActivatedRoute } from '@angular/router';
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
              private loginService: LoginService) 
              {
                this.loginForm = this.fb.group({
                  email: ['', [Validators.required, Validators.email]],
                  password: ['', Validators.required]
                });
               }


  ngOnInit(): void {

  }

  login() {
    this.loginService.addToLogger(this.loginUser.email);
    this.loginUser.email = this.loginForm.controls['email'].value;
    this.loginUser.password = this.loginForm.controls['password'].value
    this.loginService.logIn(this.loginUser);
  }

  easyLogin(){
    this.loginForm.controls['email'].setValue('test@gmail.com');
    this.loginForm.controls['password'].setValue('testtest');
  }

  goToRegister=()=> this.router.navigateByUrl('/register');

}