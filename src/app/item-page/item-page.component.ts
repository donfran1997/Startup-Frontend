import { Component, Input, OnInit } from '@angular/core';

import { Item } from '../item';

@Component({
  selector: 'app-item-page',
  templateUrl: './item-page.component.html',
  styleUrls: ['./item-page.component.css']
})
export class ItemPageComponent implements OnInit {

  @Input() item: Item;

  constructor() { }

  ngOnInit() {
  }

}
