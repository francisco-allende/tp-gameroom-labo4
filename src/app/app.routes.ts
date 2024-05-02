import { Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { LoginComponent } from './views/login/login.component';
import { PageNotFoundComponent } from './views/page-not-found/page-not-found.component';
import { QuienSoyComponent } from './components/quien-soy/quien-soy.component';
import { ExplicacionJuegoPropioComponent } from './components/explicacion-juego-propio/explicacion-juego-propio.component';
import { RegisterComponent } from './views/register/register.component';

export const routes: Routes = [

    { path: '', redirectTo: '/login', pathMatch: "full" },
    { path: 'home', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'quien-soy', component: QuienSoyComponent },
    { path: 'explicacion-juego-propio', component: ExplicacionJuegoPropioComponent },
    { path: '**', component: PageNotFoundComponent }
];
