import {Component, signal} from '@angular/core';
import {ToggleCasePipe} from '../../pipes/toggle-case.pipe';
import {heroes} from '../../data/heroes.data';
import {NamePipe} from '../../interfaces/color-hero.pipe';
import {HeroCreatorPipe} from '../../pipes/hero-creator.pipe';
import {UpperCasePipe} from '@angular/common';
import {HeroSortByPipe} from '../../pipes/hero-sort-by-pipe';
import {Hero} from '../../interfaces/hero.interface';

@Component({
  selector: 'app-custom-page',
  imports: [
    ToggleCasePipe,
    NamePipe,
    HeroCreatorPipe,
    UpperCasePipe,
    HeroSortByPipe
  ],
  templateUrl: './custom-page.html',
})
export default class CustomPage {
    name=signal('Fernando Catacora');
    //valor=signal(true);
    upperCase=signal(true);

    heroes=signal(heroes);
    sortBy=signal<keyof Hero | null>(null);
    search=signal('');
}
