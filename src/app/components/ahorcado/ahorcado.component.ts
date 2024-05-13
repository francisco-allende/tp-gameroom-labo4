import { Component, Input } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { ToastrService } from 'ngx-toastr';
import { PuntosService } from '../../services/puntos.service';

@Component({
  selector: 'app-ahorcado',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './ahorcado.component.html',
  styleUrl: './ahorcado.component.css'
})
export class AhorcadoComponent {

  abecedario = 'abcdefghijklmnñopqrstuvwxyz'.split('');
  palabraOculta = ''; 
  letrasSeleccionadas: string[] = [];
  intentosFallidos = 0;
  puntos = 0;
  showPlayAgain = false;
  palabras: string[] = ["agua","barco","cama","gato","sol","luna","perro","calle","camioneta","mesa","taza","papel","piso","angular","rodilla","rabioso","delirio","rancho","cigarrillo","plato","planta","queso","manta","tijera","vino", ];

  @Input() currentUser:any;

  constructor(public toast: ToastrService,
            public puntosService: PuntosService) {}

  ngOnInit(){
    this.palabraOculta = this.getRandomWord();
  }

  handleSetUser(e:any){
    this.currentUser = e;
  }

  getRandomWord(): string {
    const i = Math.floor(Math.random() * this.palabras.length);
    return this.palabras[i];
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
    this.sendPuntajeTotal();
    this.showPlayAgain = true;
    this.letrasSeleccionadas = this.abecedario;
  }

  playAgain(){
    this.showPlayAgain = false;
    this.puntos = 0;
    this.palabraOculta = this.getRandomWord(); 
    this.letrasSeleccionadas = [];
    this.intentosFallidos = 0;
  }

  sendPuntajeTotal(){
    this.puntosService.updatePuntos(this.currentUser, this.puntos, 'ahorcado');
  }

}
