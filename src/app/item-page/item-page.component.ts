import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-page',
  templateUrl: './item-page.component.html',
  styleUrls: ['./item-page.component.css']
})
export class ItemPageComponent implements OnInit {

  @Input() item: string;

  constructor() { }

  ngOnInit() {
  }

}
