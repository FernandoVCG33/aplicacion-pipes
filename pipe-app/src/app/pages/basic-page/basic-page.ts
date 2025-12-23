import {Component, effect, signal} from '@angular/core';
import {DatePipe, LowerCasePipe, TitleCasePipe, UpperCasePipe} from '@angular/common';

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
  })
}
