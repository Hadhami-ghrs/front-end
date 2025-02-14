import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Porteur } from './porteur';  
@Injectable({
  providedIn: 'root'
})
export class PorteurService {

  private apiUrl = 'http://localhost:3000/';
  constructor(private http: HttpClient) { }
  
  getAllPorteur() :Observable<any>{
    return this.http.get(this.apiUrl+'/porteur/list-porteur') as Observable<[Porteur[],number]>;
  }
  addPorteur( porteur:Porteur):Observable<Porteur>
  {
    return this.http.post<Porteur>(this.apiUrl+'/porteur/create-porteur',porteur) as Observable <Porteur>
  }
  editPorteurById(ID: number, porteur: Porteur): Observable<Porteur> {
    return this.http.patch<Porteur>(this.apiUrl+ '/porteur/update-porteur/:id' + JSON.stringify(ID), porteur);
  }
  findAPorteurById(ID: number):Observable<any>{
    return this.http.get<Porteur>(this.apiUrl+ '/porteur/porteur/:id' + JSON.stringify(ID))
  }
  deletePorteur( porteur:Porteur):Observable<Porteur>
  {
    return this.http.post<Porteur>(this.apiUrl+'/porteur/delete-porteur/:id',porteur) as Observable <Porteur>
  }
}
