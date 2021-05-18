 import { Component, OnInit } from '@angular/core';
 import { quantity, products } from 'src/app/Globals';
@Component({
  selector: 'app-list-of-stock',
  templateUrl: './list-of-stock.component.html',
  styleUrls: ['./list-of-stock.component.css']
})
export class ListOfStockComponent implements OnInit {

  get products() { return products; } 
  get quantity() { return quantity; } 

  constructor() { }

  ngOnInit(): void {
  }
  currencyFormatter(price:number) {
    var formatter = new Intl.NumberFormat('en-ZA', {
      style: 'currency',
      currency: 'ZAR',
      });
      
    return formatter.format(price);
  }
  
  getQuantity(id:number): number{
    var myquantity = quantity.find(q => q.productId == id);

    if (myquantity != null) 
    {
      return myquantity.numOfStock
    }      
    return 1;
  }
}
