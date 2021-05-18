import { Component, OnInit } from '@angular/core';
import { stocks } from 'src/app/Globals';
import { Product, Quantity } from 'src/app/Product';

@Component({
  selector: 'app-items-in-stock',
  templateUrl: './items-in-stock.component.html',
  styleUrls: ['./items-in-stock.component.css']
})
export class ItemsInStockComponent implements OnInit {


  stocks : Product[] = [];
  quantities : Quantity[] = [];
  constructor() { }

  ngOnInit(): void {
    this.setQuantity()
  }

  currencyFormatter(price:number) {
    var formatter = new Intl.NumberFormat('en-ZA', {
      style: 'currency',
      currency: 'ZAR',
      });
      
    return formatter.format(price);
  }

  TotalDue(){
    var totaldue : number = 0;
    stocks.forEach(stock => {totaldue += stock.price});

    return totaldue;
  }

  getQuantity(id:number): number{
    var quantity = this.quantities.find(q => q.productId == id);

    if (quantity != null) 
    {
      return quantity.numOfStock
    }      
    return 1;
  }

  setQuantity(): void{
    stocks.forEach(stock => {

      var quantity = this.quantities.find(q => q.productId == stock.id)      
      var product = this.stocks.find(p => p.id == stock.id)

      if (product == null) { // Prevent repeatation
        this.stocks.push(stock)
      }  

      if(quantity != null){ //Exist{ 
        quantity.numOfStock++        
      }
      else
      {
        var q : Quantity = { productId: stock.id,numOfStock : 1 } 
        this.quantities.push(q)       
      }
    });
  }
 
  checkout(){
    
  }

}
