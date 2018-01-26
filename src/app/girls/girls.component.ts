import { Component, OnInit } from '@angular/core';

import { Item } from '../item';

@Component({
  selector: 'app-girls',
  templateUrl: './girls.component.html',
  styleUrls: ['./girls.component.css']
})
export class GirlsComponent implements OnInit {

searchResults = [
	    [
	      {
	        id: '1',
	        name: 'item1',
	        details: 'details1',
	        imageURL: 'https://cdn.tobi.com/product_images/sm/1/black-alannah-off-shoulder-bodycon-dress.jpg',
	        price: '$1.00',
	        storeURL: '1'
	      },
	      {
	        id: '2',
	        name: 'item2',
	        details: 'details2',
	        imageURL: 'data:image/gif;base64,R0lGODlhAQABAIABAAJ12AAAACwAAAAAAQABAAACAkQBADs=',
	        price: '$2.00',
	        storeURL: '2'
	      },
	      {
	        id: '3',
	        name: 'item3',
	        details: 'details3',
	        imageURL: 'data:image/gif;base64,R0lGODlhAQABAIABAADcgwAAACwAAAAAAQABAAACAkQBADs=',
	        price: '$3.00',
	        storeURL: '3'
	      },
	      {
	        id: '4',
	        name: 'item4',
	        details: 'details4',
	        imageURL: 'data:image/gif;base64,R0lGODlhAQABAIABAADcgwAAACwAAAAAAQABAAACAkQBADs=',
	        price: '$4.00',
	        storeURL: '4'
	      },
	    ],
	    [
	      {
	        id: '5',
	        name: 'item5',
	        details: 'details5',
	        imageURL: 'data:image/gif;base64,R0lGODlhAQABAIABAAJ12AAAACwAAAAAAQABAAACAkQBADs=',
	        price: '$5.00',
	        storeURL: '5'
	      },
	      {
	        id: '6',
	        name: 'item6',
	        details: 'details6',
	        imageURL: 'data:image/gif;base64,R0lGODlhAQABAIABAAJ12AAAACwAAAAAAQABAAACAkQBADs=',
	        price: '$6.00',
	        storeURL: '6'
	      },
	    ],
	  ];

	  selectedItem: Item = {
	    id: 'NULL',
	    name: 'NULL',
	    details: 'NULL',
	    imageURL: 'NULL',
	    price: 'NULL',
	    storeURL: 'NULL'
	  };

  constructor() { }


  ngOnInit() {
  }

  selectItem(item: Item) {
    this.selectedItem = item;
  }

}
