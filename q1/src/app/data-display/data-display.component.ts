import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-display',
  templateUrl: './data-display.component.html',
  styleUrls: ['./data-display.component.css']
})
export class DataDisplayComponent implements OnInit {
  integerData: number = 42;
  stringData: string = 'Yug Parmar';
  dateData: Date = new Date();

  constructor() { }

  ngOnInit(): void {
  }
}
