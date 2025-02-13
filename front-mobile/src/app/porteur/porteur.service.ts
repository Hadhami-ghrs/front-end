import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PorteurService {
  findPorteurById(id: number) {
    throw new Error('Method not implemented.');
  }
  getAll() {
    throw new Error('Method not implemented.');
  }
  findUserById(id: number) {
    throw new Error('Method not implemented.');
  }
  getAllPorteurs() : Observable<any[]> {
    throw new Error('Method not implemented.');
  }
  
  constructor() { }
}
