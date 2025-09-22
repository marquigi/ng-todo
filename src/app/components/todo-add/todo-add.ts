import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo-add',
  imports: [FormsModule],
  // templateUrl: './todo-add.html', // è possibile togliere questo templete per poi ricrearlo con "template:" qui sotto
  styleUrl: './todo-add.css',
  template: ` 
  <div class="d-flex justify-content-between gap-2">
    <input type="text" class="form-control" placeholder="Aggiungi alla lista Todo" [(ngModel)]="testo">
    <!-- [(ngModel)]="" in Angular implementa il two-way data binding, cioè una sincronizzazione bidirezionale tra il valore di un elemento HTML (in questo caso l'<input>) e una proprietà del componente (qui testo). -->
     <!-- [(ngModel)]="testo" lega il valore dell'input alla proprietà testo definita nella classe TodoAdd -->
    {{ testo }}
    <button type="button" class="btn btn-primary">
      <i class="bi bi-plus"></i>
    </button>
  </div>
  `
})
export class TodoAdd {
  testo = "";
}
