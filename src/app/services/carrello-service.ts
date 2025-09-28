import { Injectable } from '@angular/core';
import { Auto } from '../models/auto';

@Injectable({
  providedIn: 'root'
})
export class CarrelloService {

  // Variabile array di dati di tipo Auto
  autoNelCarrello: Auto[] = [];

  constructor() { }

  // Funzioni
  aggiungiCarrello(auto: Auto) { // il parametro auto (nome fittizio) di tipo Auto
    this.autoNelCarrello.push(auto); // L'auto che scegli sarà aggiungo nella variabile array
  }

  svuotaCarrello() {
    this.autoNelCarrello = [];
  }

}
