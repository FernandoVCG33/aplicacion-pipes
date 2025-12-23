import {Component, effect, inject, LOCALE_ID, signal} from '@angular/core';
import {DatePipe, LowerCasePipe, TitleCasePipe, UpperCasePipe} from '@angular/common';
import {AvailableLocales, LocaleService} from '../../services/locale.service';

@Component({
  selector: 'app-basic-page',
  imports: [
    LowerCasePipe,
    UpperCasePipe,
    TitleCasePipe,
    DatePipe
  ],
  templateUrl: './basic-page.html',
})
export default class BasicPage {
  currentLocal=signal(inject(LOCALE_ID));
  localeService=inject(LocaleService);
  nameLower= signal('fernando');
  nameUpper=signal('FERNANDO');
  fullName=signal('fErnanDo caTacOra');
  customDate=signal(new Date());


  tickingDateEffect=effect((onCleanup)=>{
    const intervalId=setInterval(()=>{
      this.customDate.set(new Date());
    },1000);
    onCleanup(() =>{
      clearInterval(intervalId);
    });
  });
  changeLocal(local: AvailableLocales){
    console.log({local});
      this.localeService.changeLocale(local);
  }
}
