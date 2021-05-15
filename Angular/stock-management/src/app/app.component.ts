import { Component } from '@angular/core';
import { Product } from './Product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'stock-management';
  
  stocks: Product[] = [];
  count: number = 0;

  products: Product[] = [
    {id : 1, name : "Tomato", price : 15.45 },
    {id : 2, name : "onion", price : 13.50 },
    {id : 3, name : "Avocado", price : 36.10 },
  ]

  
  ngOnInit(): void {
    
  }

  addStock(product: Product): void {

    this.stocks.push(product);

    console.log(this.stocks);
  }

 
}
