import { Component, output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo-add',
  imports: [FormsModule],
  // templateUrl: './todo-add.html', // è possibile togliere questo templete per poi ricrearlo con "template:" qui sotto
  styleUrl: './todo-add.css',
  template: ` 
  <div class="d-flex justify-content-between gap-2">
    <input type="text" class="form-control" placeholder="Aggiungi alla lista Todo" [(ngModel)]="testo">
  <!-- [(ngModel)]="testo" in Angular implementa il two-way data binding, sincronizzando bidirezionalmente il valore dell'input con la proprietà 'testo' definita nella classe del componente. Quando l'utente scrive nell'input, 'testo' si aggiorna, e viceversa. -->
    <!-- {{ testo }} -->
    <button type="button" class="btn btn-primary" (click)="richiediInserimento()">
      <i class="bi bi-plus"></i>
    </button>
  </div>
  `
})
export class TodoAdd {
  testo = "";

  onRichiestaInserimento = output<string>();
  // Evento output serve a far comunicare il figlio con il genitore, specificando che tipo di dato viene passato (in questo caso un oggetto di tipo stringa).

  richiediInserimento() {
    this.onRichiestaInserimento.emit(this.testo);
    // Emette (Invia) l'evento verso il genitore passando il prodotto come dato

    this.testo = ""; // Cancello il contenuto
  }
}
