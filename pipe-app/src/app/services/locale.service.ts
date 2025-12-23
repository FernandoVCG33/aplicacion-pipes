import {Injectable, signal} from '@angular/core';

@Injectable()
export class LocaleService{

  private currenLocale=signal<'es'| 'fr'| 'es'>('es');

}
