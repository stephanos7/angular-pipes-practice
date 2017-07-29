import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.css']
})
export class CurrencyComponent implements OnInit {
product: Object = {
  price: 342,
  name : "Headphones"
}
  constructor() { }

  ngOnInit() {
  }

}
