import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrdersKolosComponent } from './components/orders-kolos/orders-kolos.component';
import { OrdersItemKolosComponent } from './components/orders-item-kolos/orders-item-kolos.component';
import { OrdersDetailsKolosComponent } from './components/orders-details-kolos/orders-details-kolos.component';
import {KolosDataService} from "./service/kolos-data.service";
import {HttpClient, HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    OrdersKolosComponent,
    OrdersItemKolosComponent,
    OrdersDetailsKolosComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    KolosDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
