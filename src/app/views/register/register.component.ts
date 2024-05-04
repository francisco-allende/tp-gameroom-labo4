import { Component, OnInit } from '@angular/core';
import { UserModel } from '../../models/user-model';
import { FormsModule, FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  newUser: UserModel = { email: '', password: '' }; 
  registerForm!:FormGroup;

  constructor(private fb: FormBuilder,
              public _auth: AuthService) { }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  get fc() { return this.registerForm.controls; }

  createUser(){
    if (this.registerForm.valid) {
      if(this.setNewUser()){
        this._auth.register(this.newUser);
      }
    }
  }

    setNewUser():boolean{
      const { email, password } = this.registerForm.value;
      this.newUser.email = email;
      this.newUser.password = password;
      return this.newUser.email && this.newUser.password ? true : false;
    }
}

