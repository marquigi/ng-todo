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
  onRichiestaCompletamento = output<number>(); // Creo l'allarme, cioè il dispositivo che può generare eventi

  // Definizione del metodo richiediCompletamento
  richiediCompletamento() {
    this.onRichiestaCompletamento.emit(this.todo!.id); // genero l'evento
    // Questo codice "avvisa" il genitore passando il numero ID del todo.
    // Il `!` significa che siamo sicuri che `this.todo` esiste e non è vuoto.
  }
}
