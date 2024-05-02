import { Component, OnInit } from '@angular/core';
import { UserModel } from '../../models/user-model';
import { FormsModule, FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  user: UserModel = { email: '', password: '' }; 
  registerForm!:FormGroup;

  constructor(private fb: FormBuilder,
              private _router: Router,
              private _toast: ToastrService) { }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  get fc() { return this.registerForm.controls; }

  createUser(){
    if (this.registerForm.valid) {
      if(this.saveUserInDB()){
        this.showSuccess();
        this._router.navigateByUrl('/login');
      }else{
        this.showError();
        this.registerForm.reset();
      }
    }
  }

  saveUserInDB(): boolean{
    try{
      const formData = this.registerForm.value;
      this.user = { ...this.user, ...formData };
      localStorage.setItem('user', JSON.stringify(this.user));
      return true;
    }catch(error){
      console.log(error)
      return false;
    }
  }

  showSuccess() {
    this._toast.success('Usuario creado con éxito', `Bienvenido ${this.user.email}!`);
  }
  showError(){
    this._toast.error('Sucedió un error', `Intente nuevamente`);
  }
}
