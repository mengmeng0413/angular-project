import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TodoComponent} from './todo.component';
import {TodoRoutingModule} from './todo.routing.module';
import {CreateTodoComponent} from './create-todo/create-todo.component';
import {TodoListComponent} from './todo-list/todo-list.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CategoryPipe} from '../pipes/category.pipe';


@NgModule({
  declarations: [TodoComponent, CreateTodoComponent, TodoListComponent, CategoryPipe],
  imports: [CommonModule, TodoRoutingModule, FormsModule, ReactiveFormsModule],
  exports: [TodoComponent, CreateTodoComponent, TodoListComponent],
  providers: [],
})

export class TodoModule {

}
