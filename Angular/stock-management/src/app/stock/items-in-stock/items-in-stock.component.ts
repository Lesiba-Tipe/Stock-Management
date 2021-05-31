import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { users, GlobalVars } from 'src/app/Globals';
import { Product, Quantity } from 'src/app/Product';
import { User } from 'src/app/User';

@Component({
  selector: 'app-items-in-stock',
  templateUrl: './items-in-stock.component.html',
  styleUrls: ['./items-in-stock.component.css']
})
export class ItemsInStockComponent implements OnInit {

  public get users() { return users}

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

    console.log(this.stocks)
    console.log(GlobalVars.stocks)
    console.log('break')
  }

  fadeOutAlert() {
    setTimeout(() => { this.isCheckedOut = false }, 2500);
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
    GlobalVars.stocks.forEach(stock => {this.totaldue += stock.price});
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
    GlobalVars.stocks.forEach(stock => {

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

      GlobalVars.stocks = []
      this.stocks = []
      this.quantities = [];
      this.totaldue = 0;
      setTimeout(() => { this.router.navigate(['/home']) }, 3000);
    }else{
      this.isUserExist = true;
      this.email = "";
    }
  }

  add(product: Product){
    GlobalVars.stocks.push(product)
    this.quantities.forEach(q => {
      if(q.productId == product.id )
      {
        q.numOfStock++
      }
    })
  }

  remove(product: Product){
    var p = GlobalVars.stocks.find(s => s.id == product.id)
    
    this.quantities.forEach(q => {
      if(q.productId == product.id && q.numOfStock > 1)
      {
        q.numOfStock--
        if(p != null) { //if product exist
          GlobalVars.stocks.splice(GlobalVars.stocks.indexOf(p),1)
        }
      }
    })
  }

  delete(product : Product){
    var prod = this.stocks.find(s => s.id == product.id)
    if(prod != null) {
      this.stocks.splice(GlobalVars.stocks.indexOf(prod),1)
    }

    GlobalVars.stocks.forEach(p => {
      if(p.id == product.id)
      {GlobalVars.stocks.splice(GlobalVars.stocks.indexOf(p),1)}
    })

    var filtered = GlobalVars.stocks.filter(function(value, index, arr){ 
      return value.id != product.id;
    });
    console.log(filtered)
    GlobalVars.stocks = filtered
  }
}
