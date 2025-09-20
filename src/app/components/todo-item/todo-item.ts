import { Component, Input, output } from '@angular/core';
import { Todo } from '../../models/todo';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-todo-item',
  imports: [NgClass],
  templateUrl: './todo-item.html',
  styleUrl: './todo-item.css'
})
export class TodoItem {
  @Input()
  todo?: Todo;

  // Dichiarazione di un EventEmitter che emette valori di tipo number
  // Questo oggetto sarà usato per notificare altri componenti o servizi quando una richiesta di completamento è attivata
  onRichiestaCompletamento = output<number>();

  // Definizione del metodo richiediCompletamento
  richiediCompletamento() {
    this.onRichiestaCompletamento.emit(this.todo!.id);
    // Emette l'ID dell'oggetto todo (di tipo number) tramite l'EventEmitter
    // Il punto esclamativo (!) indica che siamo certi che this.todo non è null o undefined
    // L'evento notifica i sottoscrittori (es. un componente genitore) passando l'ID del todo
  }
}
