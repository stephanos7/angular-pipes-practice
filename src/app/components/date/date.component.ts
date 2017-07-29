import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
export class DateComponent implements OnInit {
dateToDisplay = new Date();
incrementedDay = String;

  constructor() { }

  ngOnInit() {
  }

  increment():void{
    let incrementedDay = new Date(this.dateToDisplay);
    console.log(incrementedDay);
    incrementedDay.setDate(incrementedDay.getDate() +1);
    this.dateToDisplay = incrementedDay;
  }

}
