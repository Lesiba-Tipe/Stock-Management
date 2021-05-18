import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemsInStockComponent } from './stock/items-in-stock/items-in-stock.component';
import { CreateStockComponent } from './stock/create-stock/create-stock.component';
import { ListOfStockComponent } from './stock/list-of-stock/list-of-stock.component';
import { HomeComponent } from './home/home/home.component';
import { LoginComponent } from './login/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemsInStockComponent,
    CreateStockComponent,
    ListOfStockComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
