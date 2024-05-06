import { Component, Input } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { ToastrService } from 'ngx-toastr';
import { UserModel } from '../../models/user-model';

@Component({
  selector: 'app-ahorcado',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './ahorcado.component.html',
  styleUrl: './ahorcado.component.css'
})
export class AhorcadoComponent {

  abecedario = 'abcdefghijklmnñopqrstuvwxyz'.split('');
  palabraOculta = 'angular'; //palabra a adivinar
  letrasSeleccionadas: string[] = [];
  intentosFallidos = 0;
  puntos = 0;
  showPlayAgain = false;

  @Input() currentUser:any;

  constructor(public toast: ToastrService) {}

  handleSetUser(e:any){
    this.currentUser = e;
  }

  seleccionarLetra(letra: string) {
    this.letrasSeleccionadas.push(letra);
    if (!this.palabraOculta.includes(letra)) {
      this.intentosFallidos++;
    }
    this.evaluarJuego();
  }

  letraYaSeleccionada(letra: string): boolean {
    return this.letrasSeleccionadas.includes(letra);
  }

  letraCorrecta(letra: string): boolean {
    return this.palabraOculta.includes(letra);
  }

  evaluarJuego() {
    if (this.intentosFallidos >= 6 && !this.palabraCompleta()) {
      this.perder();
    } else if (this.intentosFallidos < 6 && this.palabraCompleta()) {
      this.ganar();
    }
  }

  palabraCompleta(): boolean {
    for (let letra of this.palabraOculta) {
      if (!this.letrasSeleccionadas.includes(letra)) {
        return false;
      }
    }
    return true;
  }

  ganar() {
    this.puntos += 10;
    this.toast.success(`Felicitaciones ${this.currentUser.email} ganaste ${this.puntos} puntos`);
    this.gameOver();
  }

  perder() {
    this.puntos -= 5;
    this.toast.error(`Lo sentimos ${this.currentUser.email}, perdiste ${this.puntos} puntos`);
    this.gameOver();
  }

  gameOver(){
    this.showPlayAgain = true;
    this.letrasSeleccionadas = this.abecedario;
  }

  playAgain(){
    this.showPlayAgain = false;
    this.puntos = 0;
    this.palabraOculta = 'angular'; 
    this.letrasSeleccionadas = [];
    this.intentosFallidos = 0;
  }
}
