import { Component, Input, OnInit } from '@angular/core';
import { Todo } from '../../models/todo';
import { TODOS } from '../../data/data';
import { TodoItem } from "../todo-item/todo-item";

@Component({
  selector: 'app-todo-list',
  imports: [TodoItem],
  templateUrl: './todo-list.html',
  styleUrl: './todo-list.css'
})
export class TodoList implements OnInit {
  @Input()
  todos: Todo[] = [];

  ngOnInit(): void {
    console.log("TodoList Loaded"); // Mostra un messaggio in console ("TodoList Loaded") per confermare che il componente è caricato.
    this.todos = TODOS; // Qui ci sarà la chiamata ajax
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



}
