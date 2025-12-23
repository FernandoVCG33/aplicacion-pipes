import {Component, signal} from '@angular/core';

@Component({
  selector: 'app-numbers-page',
  imports: [],
  templateUrl: './numbers-page.html',
})
export default class NumbersPage {
    totalSell=signal(2_423_232.5567);
    percet=signal(0.5846);

}
