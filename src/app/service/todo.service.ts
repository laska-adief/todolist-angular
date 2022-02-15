import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  todos = [
    { id: 1, name: 'shopping', isCompleted: false },
    { id: 1, name: 'meeting', isCompleted: true },
    { id: 1, name: 'walking cat', isCompleted: false },
  ];

  dataTodos = new BehaviorSubject<any>(this.todos);
  data = this.dataTodos.asObservable();

  constructor() {}

  getTodos() {
    return this.data;
  }
}
