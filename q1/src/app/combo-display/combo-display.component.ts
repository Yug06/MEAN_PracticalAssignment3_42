import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-combo-display',
  templateUrl: './combo-display.component.html',
  styleUrls: ['./combo-display.component.css']
})
export class ComboDisplayComponent implements OnInit {
  dataArray: string[] = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];
  selectedItem: string = '';

  constructor() { }

  ngOnInit(): void {
  }
}
