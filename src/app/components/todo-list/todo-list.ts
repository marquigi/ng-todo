import { Component, inject, OnInit } from '@angular/core';
import { Todo } from '../../models/todo';
// import { TODOS } from '../../data/data';
import { TodoItem } from "../todo-item/todo-item";
import { TodoAdd } from "../todo-add/todo-add";
import { TodoService } from '../../services/todo-service';

@Component({
  selector: 'app-todo-list',
  imports: [TodoItem, TodoAdd],
  templateUrl: './todo-list.html',
  styleUrl: './todo-list.css'
})
export class TodoList implements OnInit {

  // Alternativa 1 per richiedere un servizio: constructor
  //constructor(private todoService: TodoService) {}
  // constructor: Metodo speciale per creare il componente.
  // private: Variabile visibile solo nella classe.
  // todoService: Nome della variabile per il servizio.
  // : TodoService: Tipo della variabile (il servizio).
  // { }: Corpo vuoto del costruttore.  

  // Alternativa 2 per richiedere un servizio: inject 
  todoService: TodoService = inject(TodoService);
  // todoService: Nome della variabile per il servizio.
  // : TodoService: Tipo della variabile (il servizio).
  // =: Assegna il servizio alla variabile.
  // inject(TodoService): Funzione che recupera il servizio.


  todos: Todo[] = [];

  ngOnInit(): void {
    this.todos = this.todoService.getTodo(); // Qui ci sarà la chiamata ajax
  }
  // Usa l'interfaccia `OnInit` per eseguire codice quando il componente è pronto.
  // `ngOnInit` è una funzione speciale di Angular che si avvia automaticamente dopo che il componente è stato creato e configurato.
  // Nel metodo `ngOnInit`:
  // - Imposta la lista delle attività (`todos`) usando i dati di `TODOS` per popolare l'elenco delle attività.

  completa(id: number) {
    console.log("Richiesta completamento todo con id:", id);
    // La funzione riceve un numero (l'ID del todo) dal componente figlio e lo stampa. Serve per sapere quale todo è stato completato.

    // Qui ci sarà la richiesta ajax per completare il todo 
    const todoDaCompletare = this.todos.find(t => t.id == id);
    // il metodo .find() è una funzione degli array che serve a trovare il primo elemento in un array che soddisfa una condizione specificata
    // `t => t.id == id` significa: per ogni todo `t`, restituisci true se il suo `id` è uguale a `id`.

    if (todoDaCompletare) {
      todoDaCompletare.completed = !todoDaCompletare.completed;
      // Inverte lo stato del todo (da completato a non completato o viceversa).
    }

  }

  inserisciNuovoTodo(testo: string) {
    // Qui ci sarà la richiesta ajax per inserire il todo 
    const ids: number[] = this.todos.map(t => t.id); // Transformo l'array di todos in array di id ( numbers )
    // Estraggo gli ID perché devo calcolare il massimo tra di essi per generare un nuovo ID univoco, evitando duplicati nell'array di todos

    const nuovoId = Math.max(...ids) + 1  // Math.max() è una funzione di JavaScript che trova il numero più grande tra quelli che gli passi.
    // Calcolo il nuovo ID come il massimo ID esistente +1, per garantire un ID univoco e incrementale senza conflitti

    const nuovoTodo: Todo = {
      id: nuovoId,
      text: testo,
      completed: false
    }
    // Creo un nuovo oggetto Todo con l'ID generato, il testo fornito dall'utente e stato iniziale "non completato", per preparare il todo da aggiungere

    this.todos.push(nuovoTodo);
    // Aggiungo il nuovo todo all'array this.todos, aggiornando la lista nel componente e rendendola persistente per la visualizzazione e future operazioni
  }

}
