import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JuegoPropioService {
  
  private apiUrl = `https://random-flat-colors.vercel.app/api/random?count=`;

  constructor(private http: HttpClient) { }

  getRandomColor(cantidadColores:number): Observable<any> {
    let url = `${this.apiUrl}${cantidadColores}`;
    return this.http.get<any>(url).pipe(
        map(data => {
          return data.colors
        }
      )
    );
  }
}
