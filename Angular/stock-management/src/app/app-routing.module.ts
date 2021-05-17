import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { CreateStockComponent } from './stock/create-stock/create-stock.component';
import { ItemsInStockComponent } from './stock/items-in-stock/items-in-stock.component';
import { ListOfStockComponent } from './stock/list-of-stock/list-of-stock.component';
import { CommonModule } from '@angular/common';
const routes: Routes = [
  // List of routes here:
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'create-stock', component: CreateStockComponent},
  {path: "stock-list", component: ListOfStockComponent },
  {path: "items-in-stock", component: ItemsInStockComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = {
  // List of components to be imported in app.module here:
  ListOfStockComponent, CreateStockComponent,ItemsInStockComponent

}
