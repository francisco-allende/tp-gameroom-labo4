import { Injectable } from '@angular/core';
import { addDoc, collection, collectionData, Firestore, query, orderBy, limit, where, getDocs, updateDoc } from '@angular/fire/firestore';
import { Observable, distinct } from 'rxjs';
import { UserModel } from '../models/user-model';
import { map } from 'rxjs';
import { PuntajeModel } from '../models/puntaje-model';

@Injectable({
  providedIn: 'root'
})
export class PuntosService {
  
  constructor(public firestore: Firestore) { }

  //Updatea si existe, crea si no existe
  async updatePuntos(email: string, puntos: number, juego: string) {
    try {
      const col = collection(this.firestore, 'puntos');
      const q = query(col, where('userEmail', '==', email), where('juego', '==', juego));

      
      const querySnapshot = await getDocs(q);
      if (!querySnapshot.empty) {
        let existingPoints = await this.getPuntosPorUsuarioYJuego(email, juego);
        let newPuntos = Number(existingPoints[0].puntos) + Number(puntos);

        const docRef = querySnapshot.docs[0].ref;
        await updateDoc(docRef, { puntos: newPuntos });
      } else {
        await addDoc(col, { userEmail: email, puntos: puntos, juego: juego, fecha: new Date() });
      }
    } catch (error) {
      console.error('Error actualizando los puntos:', error);
      throw error;
    }
  }

  async getPuntosPorUsuarioYJuego(email: string, juego: string) {
    const col = collection(this.firestore, 'puntos');
    const q = query(col, where('userEmail', '==', email), where('juego', '==', juego));
  
    try {
      const querySnapshot = await getDocs(q);
     
        const puntos:any = [];
        querySnapshot.forEach((doc) => {
          puntos.push(doc.data() as PuntajeModel);
        });
        
        return puntos;
  
    } catch (error) {
      console.error('Error obteniendo los puntos:', error);
      throw error;
    }
  }


  async getPuntosByJuego(juego: string) {
    const col = collection(this.firestore, 'puntos');
    const querySnapshot = await getDocs(col);
    
    let puntajes:any = [];
    querySnapshot.forEach((doc) => {
      let puntaje = doc.data() as PuntajeModel;
      puntajes.push(puntaje);
    });
    puntajes = puntajes.filter((x:any) => x.juego === juego);
    return puntajes;
  }
}
