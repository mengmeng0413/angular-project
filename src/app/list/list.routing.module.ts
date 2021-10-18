import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {ListComponent} from './list.component';

const listRoutes: Routes = [{path: '', component: ListComponent}];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(listRoutes)],
  exports: [RouterModule],
  providers: [],
})

export class ListRoutingModule {
}
