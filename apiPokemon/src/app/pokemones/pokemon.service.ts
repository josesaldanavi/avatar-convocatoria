import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  
  constructor(private http: HttpClient) {}
  //paso para consumo de API
  getEspecies(urlEspecies: string):Observable<any>{
    return this.http.get(urlEspecies);
  }

}
