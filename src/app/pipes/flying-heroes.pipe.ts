import { Pipe, PipeTransform } from '@angular/core';
import { Flyer } from "../heroes";

@Pipe({
  name: 'flyingHeroes',
  pure: false
})
export class FlyingHeroesPipe implements PipeTransform {
  transform(allHeroes: Flyer[]){
    let a = allHeroes.filter(hero => hero.canFly);
    return a;
  }
}
