import { Component, Input, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { SpinnerComponent } from '../spinner/spinner.component';
import { HttpClientModule } from '@angular/common/http';
import { ApiPaisesService } from '../../services/api-paises.service';
import { ToastrService } from 'ngx-toastr';
import { PuntosService } from '../../services/puntos.service';
import { Subscription } from 'rxjs';
import { PaisModel } from '../../models/pais.-model';

@Component({
  selector: 'app-preguntados',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, SpinnerComponent, HttpClientModule],
  templateUrl: './preguntados.component.html',
  styleUrl: './preguntados.component.css'
})
export class PreguntadosComponent {
  
  @Input() currentUser:any;
  loading: boolean = false;
  private paisesSubscription: Subscription | undefined;
  paises:PaisModel[] = [];
  ochoPaises:PaisModel[] = [];
  alreadyChosen:PaisModel[] = [];
  
  puntos:number = 0;
  paisActual:PaisModel =  {name:'', flag:''};;
  siguientePais: PaisModel = {name:'', flag:''};
  vidas:number = 3;
  showPlayAgain:boolean = false;

  constructor(public api: ApiPaisesService,
              public toast: ToastrService,
              public puntosService: PuntosService) {}

  //Para evitar problemas de asincronismo, llamamos funciones y cargamos data dentro de la suscripcion
  ngOnInit():void{
    this.loading = true;
    this.paisesSubscription = this.api.getCountries().subscribe(data => {
      this.paises = data;
      this.chooseRandomCountry(); 
      this.loading = false;
    });
  } 

  chooseRandomCountry(){
    const indice = this.getRandomCountryIndex();
    this.mezclarPaises(this.paises[indice], indice);
  }
  
  mezclarPaises(pais:PaisModel, indexToRemove:number){
    this.paisActual = pais;
    this.alreadyChosen.push(this.paisActual);
    this.paises.splice(indexToRemove, 1);
    
    // Mezclo y separo 8
    this.randomSort(this.paises);
    this.paises.unshift(this.paisActual);
    this.ochoPaises = this.paises.slice(0, 8);
    this.randomSort(this.ochoPaises)
  }

  //mezclo aleatoriamente el listado de paises
  randomSort(arr:PaisModel[]){
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }

  getRandomCountryIndex = ():number => Math.floor(Math.random() * this.paises.length);

  checkAnswer(selectedPais: PaisModel) {
    const indiceSiguienteCarta = this.getRandomCountryIndex();
    this.siguientePais = this.paises[indiceSiguienteCarta];

    //Evito repetidos
    const indexToRemove = this.paises.indexOf(this.paisActual);
    if (indexToRemove !== -1) {
      this.paises.splice(indexToRemove, 1);
    }

    selectedPais.name == this.paisActual?.name ? this.ganaPuntos() : this.pierdePuntos();
    
    this.mezclarPaises(this.siguientePais, indiceSiguienteCarta);
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
    this.showPlayAgain = true;
  }

  playAgain(){
    this.showPlayAgain = false;
    this.puntos = 0;
    this.vidas = 3;
    this.paises = [];
    this.loading = true;
    this.paisesSubscription = this.api.getCountries().subscribe(data => {
      this.paises = data;
      this.chooseRandomCountry(); 
      this.loading = false;
    });
  }

  handleSetUser(e:any){
    this.currentUser = e;
  }

  sendPoints(){
    this.puntosService.updatePuntos(this.currentUser, this.puntos, 'preguntados');
  }

  ngOnDestroy(){
    if (this.paisesSubscription) {
      this.paisesSubscription.unsubscribe();
    }
  }
}
