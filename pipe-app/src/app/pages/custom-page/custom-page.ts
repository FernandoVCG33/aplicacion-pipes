import {Component, signal} from '@angular/core';
import {ToggleCasePipe} from '../../pipes/toggle-case.pipe';

@Component({
  selector: 'app-custom-page',
  imports: [
    ToggleCasePipe
  ],
  templateUrl: './custom-page.html',
})
export default class CustomPage {
    name=signal('Fernando Catacora');
    //valor=signal(true);
    upperCase=signal(true);


}
