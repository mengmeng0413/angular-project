import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ListComponent} from './list.component';
import {ListRoutingModule} from './list.routing.module';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {GetTypePipe} from '../pipes/getType.pipe';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatTreeModule} from '@angular/material/tree';

@NgModule({
  declarations:[ListComponent, GetTypePipe],
  imports: [CommonModule, ListRoutingModule, MatGridListModule, MatFormFieldModule, MatSelectModule, FlexLayoutModule, MatTreeModule],
  exports: [ListComponent],
  providers:[]
})
export class ListModule{

}
