import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-array-display',
  templateUrl: './array-display.component.html',
  styleUrls: ['./array-display.component.css']
})
export class ArrayDisplayComponent implements OnInit {
  dataArray: string[] = ['Bicycle', 'Bike', 'Car', 'Plane'];

  constructor() { }

  ngOnInit(): void {
  }
}
