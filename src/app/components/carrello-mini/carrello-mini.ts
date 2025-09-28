import { Component, inject } from '@angular/core';
import { CarrelloService } from '../../services/carrello-service';

@Component({
  selector: 'app-carrello-mini',
  imports: [],
  templateUrl: './carrello-mini.html',
  styleUrl: './carrello-mini.css'
})
export class CarrelloMini {


  carrelloService: CarrelloService = inject(CarrelloService);
  // Creo una proprietà chiamata carrelloService
  // Il tipo della proprietà è CarrelloService (importato sopra)
  // Con inject() ottengo l'istanza reale del servizio
  // Così posso usare carrelloService dentro la classe CarrelloMini
}
