import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-orders-item-kolos',
  templateUrl: './orders-item-kolos.component.html',
  styleUrls: ['./orders-item-kolos.component.css']
})
export class OrdersItemKolosComponent implements OnInit {

  @Input() item?: any;
  @Input() id? : string;
  constructor() { }

  ngOnInit(): void {

  }

}
