import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-uppercase',
  templateUrl: './uppercase.component.html',
  styleUrls: ['./uppercase.component.css']
})
export class UppercaseComponent implements OnInit {
name : string = "Andrew";
nameUpper : string = "JONAS";

  constructor() { }

  ngOnInit() {
  }

}
