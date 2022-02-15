import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TodoService } from 'src/app/service/todo.service';

@Component({
  selector: 'app-todo-input',
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.css'],
})
export class TodoInputComponent implements OnInit {
  todoForm!: FormGroup;

  constructor(private fb: FormBuilder, private todoService: TodoService) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.todoForm = this.fb.group({
      todoName: [''],
    });
  }

  addTodo() {
    const id = Math.random();
    const name = this.todoForm.get('todoName')?.value;
    const isCompleted = false;

    const todo = { id: id, name: name, isCompleted: isCompleted };

    this.todoService.addTodo(todo);

    this.todoForm.patchValue({ todoName: '' });
  }
}
