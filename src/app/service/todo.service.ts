import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  todos = [
    { id: 1, name: 'shopping', isompleted: false },
    { id: 1, name: 'meeting', isompleted: true },
    { id: 1, name: 'walking cat', isompleted: false },
  ];

  constructor() {}
}
