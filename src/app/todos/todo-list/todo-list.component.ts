import { AfterContentChecked, Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/service/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
  todolist: any = [];
  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.getTodoList();
  }

  getTodoList() {
    this.todoService.getTodos().subscribe((resp) => {
      const todolistData = resp.filter(
        (todo: any) => todo.isCompleted !== true
      );
      this.todolist = todolistData;
    });
  }

  completeTodo(id: any) {
    setTimeout(() => {
      this.todoService.doneUndoneTodo(id);
      this.getTodoList();
    }, 200);
  }
}
