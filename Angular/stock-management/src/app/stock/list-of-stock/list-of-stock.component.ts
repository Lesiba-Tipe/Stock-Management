 import { Component, OnInit } from '@angular/core';
 import { quantity, products } from 'src/app/Globals';
import { Product, Quantity } from 'src/app/Product';
@Component({
  selector: 'app-list-of-stock',
  templateUrl: './list-of-stock.component.html',
  styleUrls: ['./list-of-stock.component.css']
})
export class ListOfStockComponent implements OnInit {

  //get products() { return products; } 
  get quantity() { return quantity; } 

  //products : Product[] = []
  public get products(){
    return products
  }
  
  public set products(v : Product[]) {
    this.products = v;
  }
  
  selectedProduct = "";
  isCreated: boolean = false;
  public productId = 0;
  public price = 0;
  public noOfItems : number = 0;
  constructor() { }

  ngOnInit(): void {}

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

  create(){

    quantity.forEach(q => {
      if (q.productId == this.productId) {
        q.numOfStock = q.numOfStock + parseInt(this.noOfItems.toString())
        console.log(q.numOfStock)
      }
    })

    this.isCreated = true
    this.fadeOutAlert()
  }

  fadeOutAlert() {
    setTimeout(() => { this.isCreated = false }, 3000);
   }

  onChangeProduct(newObj : Product){
    this.productId = newObj.id
  }
}
