import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {OrdersKolosComponent} from "./components/orders-kolos/orders-kolos.component";
import {OrdersDetailsKolosComponent} from "./components/orders-details-kolos/orders-details-kolos.component";

const routes: Routes = [
  {
    path: '',
    component: OrdersKolosComponent
  },
  {
    path: 'order/items/:id',
    component: OrdersDetailsKolosComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
