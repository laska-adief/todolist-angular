import { Component, OnInit } from '@angular/core';
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
      const todolistData = resp.filter((todo: any) => todo.isompleted !== true);
      this.todolist = todolistData;
    });
  }
}
