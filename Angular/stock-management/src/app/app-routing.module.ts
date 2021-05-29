import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { ItemsInStockComponent } from './stock/items-in-stock/items-in-stock.component';
import { ListOfStockComponent } from './stock/list-of-stock/list-of-stock.component';
import { CommonModule } from '@angular/common';
import { CheckoutComponent } from './stock/checkout/checkout.component';
const routes: Routes = [
  // List of routes here:
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  {path: "list-of-stock", component: ListOfStockComponent },
  {path: "items-in-stock", component: ItemsInStockComponent },
  {path: "check-out", component: CheckoutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }

