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
    console.log("TodoList Loaded");
    this.todos = TODOS; // Qui ci sarà la chiamata ajax
  }
  // Usa l'interfaccia `OnInit` per eseguire codice quando il componente è pronto.
  // `ngOnInit` è una funzione speciale di Angular che si avvia automaticamente dopo che il componente è stato creato e configurato.
  // Nel metodo `ngOnInit`:
  // - Mostra un messaggio in console ("TodoList Loaded") per confermare che il componente è caricato.
  // - Imposta la lista delle attività (`todos`) usando i dati di `TODOS` per popolare l'elenco delle attività.
}
