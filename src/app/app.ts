import { Component, signal } from '@angular/core';
import { TodoList } from "./components/todo-list/todo-list";
import { AutoList } from "./components/auto-list/auto-list";

@Component({
  selector: 'app-root',
  imports: [TodoList, AutoList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ng-todo');
}
