import {Component, signal} from '@angular/core';
import {LowerCasePipe, TitleCasePipe, UpperCasePipe} from '@angular/common';

@Component({
  selector: 'app-basic-page',
  imports: [
    LowerCasePipe,
    UpperCasePipe,
    TitleCasePipe
  ],
  templateUrl: './basic-page.html',
})
export default class BasicPage {
  nameLower= signal('fernando');
  nameUpper=signal('FERNANDO');
  fullName=signal('fErnanDo caTacOra');
}
