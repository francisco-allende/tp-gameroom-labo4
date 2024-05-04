import { Component } from '@angular/core';
import { UserModel } from '../../models/user-model';
import { Router, RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPowerOff, faUser, faSearch, } from '@fortawesome/free-solid-svg-icons';
import { faPlusSquare } from '@fortawesome/free-regular-svg-icons';
import { AuthService } from '../../services/auth.service';

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

  currentUser:UserModel = {email: this._auth.getLoggedUser(), password: ''} ;

  constructor(private _auth: AuthService, private router: Router) {}

  logOut(){
    this._auth.logOut();
    this.router.navigateByUrl('/login');
  }

}