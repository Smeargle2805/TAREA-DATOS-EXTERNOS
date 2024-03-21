import { Injectable } from '@angular/core';
import { IItem } from './interfaces/IItem';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IItemDetalle } from './interfaces/IItemDetalle';
import { IBerry } from './interfaces/IBerry';
import { IBerryDetalle } from './interfaces/IBerryDetalle';

@Injectable({
  providedIn: 'root'
})
export class PokeapiService {private urlBase = "https://pokeapi.co/api/v2";
  
constructor(private cliente: HttpClient) { }

private httpOptions ={
  headers: new HttpHeaders({"Content-Type": "application/json"})
}

getItem(limit?: number): Observable<IItem>{
  let url = (!limit) ? `${this.urlBase}/item` : `${this.urlBase}/item/?limit=${limit}`

  return this.cliente.get<IItem>(url, this.httpOptions)
}

getItemDetalle(url: string){
  return this.cliente.get<IItemDetalle>(url, this.httpOptions)
}

getBerry(limit?: number): Observable<IBerry>{
  let url = (!limit) ? `${this.urlBase}/berry` : `${this.urlBase}/berry/?limit=${limit}`

  return this.cliente.get<IBerry>(url, this.httpOptions)
}

getBerryDetalle(url: string){
  return this.cliente.get<IBerryDetalle>(url, this.httpOptions)
}

}
