import { Injectable } from '@angular/core';
import { addDoc, collection, collectionData, Firestore, query, orderBy, limit, where, getDocs } from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  puntajeTotal:number = 0;

  constructor(public firestore: Firestore) { }

  addToLogger(emailValue:string){
    try{
      let col = collection(this.firestore, 'logs');
      addDoc(col, { userEmail: emailValue, fecha: new Date()});
    }catch(error){
      console.error('Error en el add a los logs:', error);
    }
  }

  async updatePuntajeTotal(emailValue:string, puntos:number ){
    try{
      this.puntajeTotal+=puntos;
      let col = collection(this.firestore, 'puntaje-total');
      addDoc(col, { userEmail: emailValue, puntajeTotal:this.puntajeTotal, fecha: new Date()});
    }catch(error){
      console.error('Error updateando el puntaje total:', error);
    }
  }

 

async getPuntajeTotalByEmailUser(emailValue: string) {
    const col = collection(this.firestore, 'puntaje-total');
    const q = query(
      col, 
      where('userEmail', '==', emailValue), 
      orderBy('fecha', 'desc'), 
      limit(1)
      );
  
    try {
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          console.log(doc.data()['puntajeTotal']);
            this.puntajeTotal = doc.data()['puntajeTotal'];
        });
    } catch (error) {
        console.error('Error obteniendo el puntaje total:', error);
    }

    return this.puntajeTotal;
}

}
