import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'getType'
})
export class GetTypePipe implements PipeTransform {
  
  transform(obj: any) {
    let type;
    switch(typeof(obj)){
      case 'boolean': type = '布尔值'; break;
      case 'string': type = '字符串'; break;
      case 'number': type = '数字';break;
      case 'object': type = '对象';break;
      default: type = typeof obj;break;
    }
    return type;
  }
}
