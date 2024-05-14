import { Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';
import { PageNotFoundComponent } from './views/page-not-found/page-not-found.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { ExplicacionJuegoPropioComponent } from './components/explicacion-juego-propio/explicacion-juego-propio.component';

export const routes: Routes = [
    {
        path: 'home',
        loadComponent: () => import('./views/home/home.component').then((m) => m.HomeComponent)
    },
    {
        path: 'login',
        loadComponent: () => import('./views/login/login.component').then((m) => m.LoginComponent)
    },
    {
        path: 'register',
        loadComponent: () => import('./views/register/register.component').then((m) => m.RegisterComponent)
    },
    {
        path: 'ahorcado',
        loadComponent: () => import('./components/ahorcado/ahorcado.component').then((m) => m.AhorcadoComponent)
    },
    {
        path: 'mayor-or-menor',
        loadComponent: () => import('./components/mayor-or-menor/mayor-or-menor.component').then((m) => m.MayorOrMenorComponent)
    },
    {
        path: 'preguntados',
        loadComponent: () => import('./components/preguntados/preguntados.component').then((m) => m.PreguntadosComponent)
    },
    {
        path: 'juego-propio',
        loadComponent: () => import('./components/juego-propio/juego-propio.component').then((m) => m.JuegoPropioComponent)
    },
    {
        path: 'explicacion-juego-propio',
        loadComponent: () => import('./components/explicacion-juego-propio/explicacion-juego-propio.component').then((m) => m.ExplicacionJuegoPropioComponent)
    },
    {
        path: 'aboutme',
        loadComponent: () => import('./components/about-me/about-me.component').then((m) => m.AboutMeComponent)
    },
    {
        path: 'sala-chat',
        loadComponent: () => import('./components/sala-chat/sala-chat.component').then((m) => m.SalaChatComponent)
    },
    {
        path: 'puntaje',
        loadComponent: () => import('./components/puntaje/puntaje.component').then((m) => m.PuntajeComponent)
    },
    {
        path: 'error',
        loadComponent: () => import('./views/page-not-found/page-not-found.component').then((m) => m.PageNotFoundComponent)
    },
    {
        path: '',
        loadComponent: () => import('./views/login/login.component').then((m) => m.LoginComponent)
      },
    {
        path: '**',
        redirectTo: 'error',
    },
];
