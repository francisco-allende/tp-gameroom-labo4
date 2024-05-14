import { Component, Input, OnInit } from '@angular/core';
import { RouterOutlet, Router } from '@angular/router';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { UserModel } from '../../models/user-model';
import { LoginService } from '../../services/login.service';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  
  currentUser:UserModel = {email: this.loginService.getLoggedUser(), password: ''}
  cards = [
    { title: 'Ahorcado', text:'Pone a prueba tu habilidad para adivinar palabras en este clásico juego.', clickText:'Jugar', route: '/ahorcado' },
    { title: 'Mayor o Menor',  text:'Pone a prueba tu intuición y suma puntos en este emociante juego de cartas' , clickText: 'Jugar',  route: '/mayor-or-menor' },
    { title: 'Preguntados',  text:'Pone a prueba tu intelecto y tu conocimiento del mundo' , clickText: 'Jugar',  route: '/preguntados' },
    { title: 'Juego Propio',  text:'¡Ponete a prueba con el Desafío de los Colores! ¿Podrás en un Maestro del Color?' , clickText: 'Jugar',  route: '/juego-propio' },
    { title: 'Explicacion Juego Propio', text:'Breve tutorial del juego de mi creación', clickText:'Conocer más', route: '/explicacion-juego-propio' },
    { title: 'About Me', text:'Conoce al desarrollador de esta sala de juegos', clickText:'Ir', route: '/aboutme' },
    { title: 'Sala de chat', text:'Comparte tus mensajes con otros usuarios de la app', clickText:'Chatear', route: '/sala-chat' },
    { title: 'Puntaje', text:'¡Descubrí cuántos puntos acumulaste!', clickText:'Ver mi puntaje', route: '/puntaje' },
  ];

  constructor(public loginService: LoginService,
              public router: Router){}

  ngOnInit(): void {
    
  }
  redirectTo(route: string) {
    this.router.navigate([route]);
  }
}