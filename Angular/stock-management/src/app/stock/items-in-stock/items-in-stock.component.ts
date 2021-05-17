import { Component, OnInit } from '@angular/core';
import { quantity, stocks } from 'src/app/Globals';

@Component({
  selector: 'app-items-in-stock',
  templateUrl: './items-in-stock.component.html',
  styleUrls: ['./items-in-stock.component.css']
})
export class ItemsInStockComponent implements OnInit {

  get stocks() { return stocks; }
  get quantity() { return quantity; }

  constructor() { }

  ngOnInit(): void {
  }

}
