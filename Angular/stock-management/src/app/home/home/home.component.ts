import { Component, OnInit } from '@angular/core';
import { Product, Quantity } from 'src/app/Product';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { quantity, stocks,products } from 'src/app/Globals';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  isDisable : boolean = true;
  count: number = 0;
  get products() { return products; }
  get stocks() { return stocks; }
  constructor(
    //private products: products,
    private router: Router,
  ) {}

  ngOnInit(): void {
    console.log(quantity);
    this.disbableButton()
  }

  addStock(product: Product): void {

    stocks.push(product);
    this.removeStock(product.id);

    this.disbableButton()
  }

  removeStock(id: number):void{
    quantity.forEach(element => {
      if(element.productId == id){
        element.numOfStock--;
      }
    });
  }

  currencyFormatter(price:number) {
    var formatter = new Intl.NumberFormat('en-ZA', {
      style: 'currency',
      currency: 'ZAR',
      });
      
    return formatter.format(price);
  }

  goToStock() {
    //this.router.navigate(['/items-in-stock']);
    //routerLink="/items-in-stock"
  }

  disbableButton(){
    if (stocks.length > 0) {
      this.isDisable = false;
    }
  }
}
