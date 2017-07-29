import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-decimal',
  templateUrl: './decimal.component.html',
  styleUrls: ['./decimal.component.css']
})
export class DecimalComponent implements OnInit {
number: Number = 431.896554;
  constructor() { }

  ngOnInit() {
  }

}
