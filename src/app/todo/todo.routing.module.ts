import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {TodoComponent} from './todo.component';

const todoRoutes: Routes = [{path: '', component: TodoComponent}];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(todoRoutes)],
  exports: [RouterModule],
  providers: [],
})

export class TodoRoutingModule {
}
