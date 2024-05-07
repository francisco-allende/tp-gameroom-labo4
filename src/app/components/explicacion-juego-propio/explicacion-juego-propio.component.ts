import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-explicacion-juego-propio',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './explicacion-juego-propio.component.html',
  styleUrl: './explicacion-juego-propio.component.css'
})
export class ExplicacionJuegoPropioComponent {

}
