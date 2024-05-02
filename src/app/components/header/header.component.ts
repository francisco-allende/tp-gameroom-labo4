import { Component } from '@angular/core';
import { UserModel } from '../../models/user-model';
import { RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPowerOff, faUser, faSearch, } from '@fortawesome/free-solid-svg-icons';
import { faPlusSquare } from '@fortawesome/free-regular-svg-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FontAwesomeModule, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  
  faPowerOff = faPowerOff;
  faUser = faUser;
  faSearch = faSearch;
  faPlusSquare = faPlusSquare;

  currentUser:UserModel = {email: 'franallende2000@gmail.com', password: 'pepe123'} ;

  constructor(private _router: Router) {}

  logout(){
    this._router.navigateByUrl('/login');
  }

}