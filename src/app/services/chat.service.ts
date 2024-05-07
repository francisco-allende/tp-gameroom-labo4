import { Injectable } from '@angular/core';
import { addDoc, collection, collectionData, Firestore, query, orderBy, limit, where, getDocs } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { UserModel } from '../models/user-model';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(public firestore: Firestore) { }

  async addMsjToSalaChat(sender:UserModel, msj:string){
    try{
      let col = collection(this.firestore, 'sala-chat');
      addDoc(col, { sender: sender, content:msj, fecha: new Date()});
    }catch(error){
      console.error('Error en el add a los msjs:', error);
    }
  }

  
  async getAllMensajesSalaChats():Promise<any> {

    const col = collection(this.firestore, 'sala-chat');
    
    try {
        const querySnapshot = await getDocs(col);
        const mensajes:any = [];
        querySnapshot.forEach((doc) => {
            mensajes.push(doc.data());
        });
        return mensajes;
    } catch (error) {
        console.error('Error obteniendo los mensajes:', error);
        throw error;
    }
  }

  getAllMensajesSalaChat(): Observable<any[]> {
    const col = collection(this.firestore, 'sala-chat');
    return collectionData(col).pipe(
      map(mensajes => {
        return mensajes;
      })
    );
  }

}
