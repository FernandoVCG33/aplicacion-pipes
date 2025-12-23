import {Injectable, signal} from '@angular/core';


export type AvailableLocales ='es'| 'fr'| 'en';

@Injectable({providedIn: 'root'})
export class LocaleService{

  private currenLocale=signal<AvailableLocales>('es');
  constructor() {
    this.currenLocale.set(localStorage.getItem('locale') as AvailableLocales ??'es');
  }
  get getLocale(){
    return this.currenLocale()
  }
  changeLocale(locale:AvailableLocales){
    localStorage.setItem('locale',locale);
    this.currenLocale.set(locale);
    window.location.reload();
  }

}
