import { Component, signal } from '@angular/core';
import { TodoList } from "./components/todo-list/todo-list";
import { AutoList } from "./components/auto-list/auto-list";
import { CarrelloMini } from "./components/carrello-mini/carrello-mini";

// Creo un tipo di nome 'Section' usando un *union type*: può essere solo "todo" o "auto" o "carello" o null
type Section = "todo" | "auto" | "carrello" | null;

@Component({
  selector: 'app-root',
  imports: [TodoList, AutoList, CarrelloMini],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ng-todo');


  // metodo 1:
  selectedSection: Section = "auto";

  select(section: Section) {
    this.selectedSection = section;
  }

  // metodo 2:

  // Variabile che indica quale sezione è attiva: "todo" o "auto"
  // selectedSection: "todo" | "auto" = "todo";

  // Funzione per cambiare la sezione attiva
  //select(section: "todo" | "auto") {
  // 'section' è il parametro passato alla funzione, usa un *union type*: può essere solo "todo" o "auto"
  // Indica quale sezione vogliamo attivare ("todo" o "auto")

  // Aggiorna la proprietà 'selectedSection' della classe con il nuovo valore
  // 'this.selectedSection' si riferisce alla variabile dichiarata nella classe
  // this.selectedSection = section;

  // Dopo questa riga, la variabile selectedSection contiene il valore passato
  // Aggiorna la sezione attiva e Angular mostra automaticamente la parte di interfaccia corrispondente
  //  }
}
