import { Injectable } from '@angular/core';
import { AUTOS } from '../data/auto';

@Injectable({
  providedIn: 'root'
})
export class AutoService {

  constructor() { }

  // Funzione che richiama i dati
  getAutos() {
    return AUTOS;
  }
}
