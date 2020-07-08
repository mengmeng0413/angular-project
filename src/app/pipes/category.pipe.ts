import {Pipe, PipeTransform} from '@angular/core';
import {Category} from '../interface';

@Pipe({
  name: 'category'
})
export class CategoryPipe implements PipeTransform {
  
  transform(value: number): string {
    return Category[value];
  }
  
}
