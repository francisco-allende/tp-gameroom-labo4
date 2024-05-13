import { Component, OnInit, Input } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import {PuntosService} from '../../services/puntos.service';
import { PuntajeModel } from '../../models/puntaje-model';

@Component({
  selector: 'app-puntaje',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './puntaje.component.html',
  styleUrl: './puntaje.component.css'
})
export class PuntajeComponent {
  
  @Input() currentUser:any;
  users:any[] = [];

  constructor(public puntosService: PuntosService) {}

  ngOnInit(): void{
   this.populateTable();
  }

  async populateTable(){
    
    let ahorcado = await this.puntosService.getPuntosByJuego('ahorcado');
    let mayorOMenor = await this.puntosService.getPuntosByJuego('mayor-o-menor');
    let preguntados  = await this.puntosService.getPuntosByJuego('preguntados');
    let juegoPropio = await this.puntosService.getPuntosByJuego('juego-propio');

    this.loadData(ahorcado, 'Ahorcado');
    this.loadData(mayorOMenor, 'Mayor o Menor');
    this.loadData(preguntados, 'Preguntados');
    this.loadData(juegoPropio, 'Juego Propio');
   }

   loadData(arr:any, gameName:string){
    arr.forEach((puntaje: { userEmail: any; puntos: any; }) => {
      this.users.push({ userEmail: puntaje.userEmail, juego: gameName, puntaje: puntaje.puntos });
    });
   }


  handleSetUser(e:any){
    this.currentUser = e;
  }

}
