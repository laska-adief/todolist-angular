import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  todos: any = [];

  dataTodos = new BehaviorSubject<any>(this.todos);
  data = this.dataTodos.asObservable();

  constructor() {}

  getTodos() {
    return this.data;
  }

  addTodo(todo: any) {
    const dataTodo = this.todos;
    dataTodo.push(todo);
    this.dataTodos.next(dataTodo);
  }

  doneUndoneTodo(id: any) {
    const dataTodo = this.todos;
    const findTodo: any = dataTodo.find((todo: any) => todo.id === id);
    findTodo.isCompleted = !findTodo.isCompleted;
  }
}
