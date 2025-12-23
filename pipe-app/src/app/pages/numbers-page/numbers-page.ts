import {Component, signal} from '@angular/core';
import {CurrencyPipe, DecimalPipe, PercentPipe} from '@angular/common';

@Component({
  selector: 'app-numbers-page',
  imports: [
    DecimalPipe,
    CurrencyPipe,
    PercentPipe,
  ],
  templateUrl: './numbers-page.html',
})
export default class NumbersPage {
    totalSell=signal(2_423_232.5567);
    percet=signal(0.5846);

}
