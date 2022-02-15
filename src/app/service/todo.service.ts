import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  todos = [
    { id: 1, name: 'shopping', isompleted: false },
    { id: 1, name: 'meeting', isompleted: true },
    { id: 1, name: 'walking cat', isompleted: false },
  ];

  dataTodos = new BehaviorSubject<any>(this.todos);
  data = this.dataTodos.asObservable();

  constructor() {}

  getTodos() {
    return this.data;
  }
}
