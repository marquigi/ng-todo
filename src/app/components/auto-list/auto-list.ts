import { Component, inject, OnInit } from '@angular/core';
import { AutoService } from '../../services/auto-service';
import { Auto } from '../../models/auto';
import { CommonModule } from '@angular/common';
import { AutoItem } from "../auto-item/auto-item";

@Component({
  selector: 'app-auto-list',
  imports: [CommonModule, AutoItem],
  templateUrl: './auto-list.html',
  styleUrl: './auto-list.css'
})
export class AutoList implements OnInit {
  // implements OnInit: Dice che la classe userà il metodo ngOnInit per eseguire codice all'avvio.

  // Richiedo il servizio che gestisce le auto
  autoService: AutoService = inject(AutoService)
  // autoService: Nome della variabile per il servizio.
  // : AutoService: Tipo della variabile (il servizio).
  // =: Assegna il servizio alla variabile.
  // inject(AutoService): Funzione che recupera il servizio.

  autos: Auto[] = []; // Creo un array vuoto per avere già lo spazio pronto dove salvare i dati che arriveranno dal servizio

  // Usa OnInit per eseguire codice all'avvio del componente.
  ngOnInit(): void {
    this.autos = this.autoService.getAutos();
    // Recupera la lista delle auto dal servizio e la assegna alla variabile `autos` così può essere mostrata nel template.
  }
}
