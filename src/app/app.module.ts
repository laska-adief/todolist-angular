import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TodosComponent } from './todos/todos.component';
import { TodoListComponent } from './todos/todo-list/todo-list.component';
import { TodoCompleteComponent } from './todos/todo-complete/todo-complete.component';

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    TodoListComponent,
    TodoCompleteComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
