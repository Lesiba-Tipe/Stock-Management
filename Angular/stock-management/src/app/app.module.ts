import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemsInStockComponent } from './stock/items-in-stock/items-in-stock.component';
import { ListOfStockComponent } from './stock/list-of-stock/list-of-stock.component';
import { HomeComponent } from './home/home/home.component';

import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    ItemsInStockComponent,
    ListOfStockComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
