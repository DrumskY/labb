import { Component, OnInit } from '@angular/core';
import {KolosDataService} from "../../service/kolos-data.service";

@Component({
  selector: 'app-orders-kolos',
  templateUrl: './orders-kolos.component.html',
  styleUrls: ['./orders-kolos.component.css']
})
export class OrdersKolosComponent implements OnInit {

  public items$: any;

  constructor(private service: KolosDataService) {

  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll(){
    this.service.getAll().subscribe(response => {
      this.items$ = response;
    })
  }

}
