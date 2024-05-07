import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { CartaModel } from '../../models/carta-model';
import { ToastrService } from 'ngx-toastr';
import { FirestoreService } from '../../services/firestore.service';


@Component({
  selector: 'app-mayor-or-menor',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './mayor-or-menor.component.html',
  styleUrl: './mayor-or-menor.component.css'
})
export class MayorOrMenorComponent implements OnInit {

  @Input() currentUser:any;
  @Output() updatePuntajeTotal:EventEmitter<number> = new EventEmitter<number>()
  puntos:number = 0;

  cartas: CartaModel[] = [];
  cartaActual: CartaModel = {numero: 0, palo:''};
  siguienteCarta: CartaModel= {numero: 0, palo:''};

  constructor(public toast: ToastrService,
    public _firestore: FirestoreService) {}

  sendPuntajeTotal(){
    this._firestore.updatePuntajeTotal(this.currentUser, this.puntos);
  }

  ngOnInit(): void {
    this.initCartas();
    this.chooseRandomCarta();
  }

  handleSetUser(e:any){
    this.currentUser = e;
  }

  initCartas() {
    const palos = ['basto', 'espada', 'oro', 'copa'];
    for (let numero = 1; numero <= 12; numero++) {
      for (let palo of palos) {
        this.cartas.push({ numero, palo });
      }
    }
  }

  // Al seleccionar la carta actual, la elimino del array para que no se repita
  chooseRandomCarta() {
    const indice = this.getRandomCarta();
    this.mezclarMazo(this.cartas[indice], indice);
  }

  //Comparo y elimino del mazo las cartas que salen
  checkPrediction(esMayor: boolean) {
    const indiceSiguienteCarta = this.getRandomCarta();
    this.siguienteCarta = this.cartas[indiceSiguienteCarta];

    //Si no es mayor ni menor, son iguales. Sino, valido el juego
    if(!this.esIgual()){
      if ((esMayor && this.esMayor()) || (!esMayor && this.esMenor())) {
        this.ganaPuntos();
      } else {
        this.pierdePuntos();
      }
    }else{
      this.toast.warning("Cartas iguales! Continuamos con la que sigue")
    }
    
    this.mezclarMazo(this.siguienteCarta, indiceSiguienteCarta);
  }

  getRandomCarta=():number=> Math.floor(Math.random() * this.cartas.length);

  esIgual=():boolean=>  this.siguienteCarta.numero == this.cartaActual.numero;

  esMayor=():boolean=> this.siguienteCarta.numero > this.cartaActual.numero;
  
  esMenor=():boolean=> this.siguienteCarta.numero < this.cartaActual.numero;

  ganaPuntos(){
    this.puntos++;
    this.sendPuntajeTotal();
    this.toast.success('Correcto!');
  }

  pierdePuntos(){
    this.puntos--;
    this.sendPuntajeTotal();
    this.toast.error('Fallaste!');
  }

  //reasigno mi carta actual y elimino del mazo
  mezclarMazo(carta:CartaModel, indexToRemove:number){
    this.cartaActual = carta;
    this.cartas.splice(indexToRemove, 1);
  }

  getPalo():string{
    if(this.cartaActual.palo == 'basto'){
      return '🌿';
    }else if(this.cartaActual.palo == 'espada'){
      return '🗡'; 
    }else if(this.cartaActual.palo == 'oro'){
      return '💰 ';
    }else{
      return '🍷';
    }
  }

}
