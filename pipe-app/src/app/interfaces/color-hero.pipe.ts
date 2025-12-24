import {Pipe, PipeTransform} from '@angular/core';
import {Color} from './hero.interface';

@Pipe({
  name: 'heroColor'
})

export class NamePipe implements PipeTransform {
  transform(value: Color): string {
        return Color[value];
  }
}
