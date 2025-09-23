import { Injectable } from '@angular/core';
import { Todo } from '../models/todo';
import { TODOS } from '../data/data';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  constructor() { }

  todos: Todo[] = [];

  getTodo() {
    // Simula chiamata ajax al server per recuperare i todo
    this.todos = TODOS;
  }
}
