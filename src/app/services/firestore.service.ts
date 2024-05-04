import { Injectable } from '@angular/core';
import { addDoc, collection, collectionData, Firestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(public firestore: Firestore) { }

  addToLogger(emailValue:string){
    let col = collection(this.firestore, 'logs');
    addDoc(col, { userEmail: emailValue, fecha: new Date()});
  }
}
