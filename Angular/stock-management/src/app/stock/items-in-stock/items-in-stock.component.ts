import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { stocks, users } from 'src/app/Globals';
import { Product, Quantity } from 'src/app/Product';
import { User } from 'src/app/User';

@Component({
  selector: 'app-items-in-stock',
  templateUrl: './items-in-stock.component.html',
  styleUrls: ['./items-in-stock.component.css']
})
export class ItemsInStockComponent implements OnInit {

  public get users() { return users}
  //public set users(v : User[]) {this.users = v;}


  stocks : Product[] = [];
  quantities : Quantity[] = [];

  email : string = "";
  isCheckedOut : boolean = false;
  isUserExist : boolean = false;
  totaldue : number = 0;
  totalPrice : number = 0;

  constructor(private router : Router) { }

  ngOnInit(): void {
    this.setQuantity()
  }

  fadeOutAlert() {
    setTimeout(() => { this.isCheckedOut = false }, 3000);
   }

  currencyFormatter(price:number) {
    var formatter = new Intl.NumberFormat('en-ZA', {
      style: 'currency',
      currency: 'ZAR',
      });
      
    return formatter.format(price);
  }

  TotalDue(){
    this.totaldue = 0;
    stocks.forEach(stock => {this.totaldue += stock.price});
    return this.totaldue;
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

      if(quantity != null){ //Exist
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
    //if email exist
    if(users.find(u => u.email == this.email) == null) {
      
      var user : User = {email : this.email}
      users.push(user);

      this.isCheckedOut = true;
      this.fadeOutAlert()

      this.stocks = []
      this.quantities = [];
      this.totaldue = 0;
      //this.router.navigate(['/home'])
    }else{
      this.isUserExist = true;
      this.email = "";
    }
  }

  add(product: Product){
    stocks.push(product)
    this.quantities.forEach(q => {
      if(q.productId == product.id )
      {
        q.numOfStock++
      }
    })
  }

  remove(product: Product){
    var p = stocks.find(s => s.id == product.id)
    
    this.quantities.forEach(q => {
      if(q.productId == product.id && q.numOfStock > 1)
      {
        q.numOfStock--
        if(p != null) { //if product exist
          stocks.splice(stocks.indexOf(p),1)
        }
      }
    })
  }
}
