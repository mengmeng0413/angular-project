import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'objVal'
})
export class ObjValPipe implements PipeTransform {
  
  transform(obj: any) {
    let result = [];
    for(let key in obj){
      if(obj.hasOwnProperty(key)){
        result.push(obj[key]);
      }
    }
    return result;
  }
}
