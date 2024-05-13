import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { UserModel } from '../../models/user-model';
import { Router, RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPowerOff, faUser, faSearch, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faPlusSquare } from '@fortawesome/free-regular-svg-icons';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FontAwesomeModule, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{
  
  faPowerOff = faPowerOff;
  faUser = faUser;
  faSearch = faSearch;
  faPlusSquare = faPlusSquare;
  faArrowLeft = faArrowLeft;
  currentRoute: string = '';
  puntajeTotal:number = 0; //componente aparte

  currentUser:UserModel = {email: this.loginService.getLoggedUser(), password: ''} ;
  @Output() sendCurrentUser:EventEmitter<UserModel> = new EventEmitter<UserModel>

  constructor(private loginService: LoginService, 
              public router: Router) {}

  ngOnInit(){
    if(this.loginService.getLoggedUser() == ''){
      this.logOut();
    }else{
      this.sendCurrentUser.emit(this.currentUser);
    }
  }

  logOut(){
    this.loginService.logOut();
    this.router.navigateByUrl('/login');
  }

  goBack(){
    this.currentRoute = this.router.url;
    if (this.currentRoute.includes('home')) {
      this.router.navigate(['/']);
    } else {
      this.router.navigate(['/home']);
    }
  }

  

}