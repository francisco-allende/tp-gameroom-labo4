import { Component, Input } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { SpinnerComponent } from '../spinner/spinner.component';
import { JuegoPropioService } from '../../services/juego-propio.service';
import { PuntosService } from '../../services/puntos.service';
import { ToastrService } from 'ngx-toastr';
import { faL } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-juego-propio',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, SpinnerComponent],
  templateUrl: './juego-propio.component.html',
  styleUrl: './juego-propio.component.css'
})
export class JuegoPropioComponent {
  @Input() currentUser:any;
  loading: boolean = false;
  vidas:number = 3;
  showPlayAgain:boolean = false;
  puntos:number = 0;

  colores: any[] = [];
  cantidadColores:number = 5;
  colorIndex = 0;
  opcionesAdicionales: string[] = [];
  showOpciones = false;
  showOriginal = true;
  indexToChoose = 0;

  constructor(private api: JuegoPropioService, 
              private puntosService: PuntosService,
              private toast: ToastrService) { }

  ngOnInit(): void {
    this.loadData(); 
    this.showData();
  }
  

  loadData(): void {
    this.loading = true;
    this.colores = []; 
    this.api.getRandomColor(this.cantidadColores).subscribe(data => {
      this.colores = data;
      this.opcionesAdicionales = this.randomSort(data);
      this.loading = false;
    });
  }

  showData(){
    this.showOpciones = false;
    this.showOriginal = true;
    setTimeout(() => {
      this.colorIndex++;
      this.showOpciones = true;
      this.showOriginal = false;
      this.indexToChoose = this.getRandomNumber(this.cantidadColores);
    }, 3000);
  }

  getRandomNumber(max: number): number{
    return Math.floor(Math.random() * max) + 1;
  }

  randomSort(arr: any[]): any[] {
    const newArr = [...arr]; // Creo una copia del array original
    for (let i = newArr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
    }
    return newArr;
  }
  

  checkOption(opcionIndex: number): void {
    if (opcionIndex === this.indexToChoose) {
      this.ganaPuntos();
      this.loadData();
      this.showData();
    } else {
      this.pierdePuntos();
    }
  }

  ganaPuntos(){
    this.puntos++;
    this.toast.success('Correcto!');
  }

  pierdePuntos(){
    this.vidas --;
    this.puntos--;
    this.toast.error('Fallaste!');
    if(this.vidas == 0){
      this.gameOver();
    }
  }

  gameOver(){
    this.sendPoints();
    this.toast.info(`Game Over! Puntaje: ${this.puntos}`);
    this.showOpciones = false;
    
    this.loadData();
    this.showOriginal = true;
    this.showPlayAgain = true;
  }


  playAgain(){
    this.showPlayAgain = false;
    this.puntos = 0;
    this.vidas = 3;
    this.loadData();
    this.showData();
  }

  handleSetUser(e:any){
    this.currentUser = e;
  }

  sendPoints(){
    this.puntosService.updatePuntos(this.currentUser, this.puntos, 'maestro-del-color');
  }
}
