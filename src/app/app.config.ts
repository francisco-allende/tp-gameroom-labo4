import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideToastr } from 'ngx-toastr';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getDatabase, provideDatabase } from '@angular/fire/database';
import { provideHttpClient } from '@angular/common/http';


export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes), 
    provideAnimations(), 
    provideToastr(), 
    provideHttpClient(),
    importProvidersFrom(provideFirebaseApp(() => initializeApp({
      "projectId":"tp-gameroom-allende",
      "appId":"1:533090559504:web:0cf41f78c5e4ef25a68c95",
      "storageBucket":"tp-gameroom-allende.appspot.com",
      "apiKey":"AIzaSyCg2VKIpXGwr-MRyKUYP8Zti9np40FGviw",
      "authDomain":"tp-gameroom-allende.firebaseapp.com",
      "messagingSenderId":"533090559504"}))), 
    importProvidersFrom(provideAuth(() => getAuth())), importProvidersFrom(provideFirestore(() => getFirestore())), importProvidersFrom(provideFirebaseApp(() => initializeApp({"projectId":"tp-gameroom-allende","appId":"1:533090559504:web:0cf41f78c5e4ef25a68c95","storageBucket":"tp-gameroom-allende.appspot.com","apiKey":"AIzaSyCg2VKIpXGwr-MRyKUYP8Zti9np40FGviw","authDomain":"tp-gameroom-allende.firebaseapp.com","messagingSenderId":"533090559504"}))), importProvidersFrom(provideAuth(() => getAuth())), importProvidersFrom(provideFirestore(() => getFirestore()))]
};