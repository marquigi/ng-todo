import { Component, inject, Input } from '@angular/core';
import { Auto } from '../../models/auto';
import { CommonModule } from '@angular/common';
import { CarrelloService } from '../../services/carrello-service';

@Component({
  selector: 'app-auto-item',
  imports: [CommonModule],
  templateUrl: './auto-item.html',
  styleUrl: './auto-item.css'
})
export class AutoItem {
  @Input()
  auto?: Auto;

  carelloService: CarrelloService = inject(CarrelloService);
  // Creo una proprietà chiamata carelloService
  // Il tipo della proprietà è CarrelloService (importato sopra)
  // Con inject() ottengo l'oggetto reale (istanza) di quel servizio
  // Così posso usare carelloService dentro la classe AutoItem
}
