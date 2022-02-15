import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TodosComponent } from './todos/todos.component';
import { TodoListComponent } from './todos/todo-list/todo-list.component';
import { TodoCompleteComponent } from './todos/todo-complete/todo-complete.component';
import { TodoInputComponent } from './todos/todo-input/todo-input.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './shared/angular-material/angular-material.module';

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    TodoListComponent,
    TodoCompleteComponent,
    TodoInputComponent,
  ],
  imports: [BrowserModule, BrowserAnimationsModule, AngularMaterialModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
