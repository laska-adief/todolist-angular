import { AfterContentChecked, Component, OnInit } from '@angular/core';
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
  }

  getCompleteTodo() {
    this.todoService.getTodos().subscribe((resp) => {
      const completeTodoData = resp.filter(
        (todo: any) => todo.isCompleted === true
      );
      this.completeTodos = completeTodoData;
    });
  }

  unCompleteTodo(id: any) {
    setTimeout(() => {
      this.todoService.doneUndoneTodo(id);
      this.getCompleteTodo();
    }, 200);
  }
}
