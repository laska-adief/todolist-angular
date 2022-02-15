import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/service/todo.service';

@Component({
  selector: 'app-todo-complete',
  templateUrl: './todo-complete.component.html',
  styleUrls: ['./todo-complete.component.css'],
})
export class TodoCompleteComponent implements OnInit {
  completeTodos: any = [];
  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.getCompleteTodo();
    console.log(this.completeTodos);
  }

  getCompleteTodo() {
    this.todoService.getTodos().subscribe((resp) => {
      const completeTodoData = resp.filter(
        (todo: any) => todo.isCompleted === true
      );
      this.completeTodos = completeTodoData;
    });
  }
}
