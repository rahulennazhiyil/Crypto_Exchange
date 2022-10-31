import { Component } from '@angular/core';
import { CurrencyService } from './service/currency.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  selectedCurrency : string ="INR";

  constructor(private currencyservice:CurrencyService){

  }
  sendCurrency(event:string){
    console.log(event);
    this.currencyservice.setCurrency(event);
    
  }
}
