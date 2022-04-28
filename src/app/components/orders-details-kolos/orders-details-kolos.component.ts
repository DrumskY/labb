import {Component, Input, OnInit} from '@angular/core';
import {KolosDataService} from "../../service/kolos-data.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-orders-details-kolos',
  templateUrl: './orders-details-kolos.component.html',
  styleUrls: ['./orders-details-kolos.component.css']
})
export class OrdersDetailsKolosComponent implements OnInit {
  public item: any;


  constructor(private service: KolosDataService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    let id: string = '';
    this.route.paramMap.subscribe((params:any)=>{
      id = params.get('id');
    })

    this.service.getById(id).subscribe((res: any) => {
      this.item = res[0];
    });
  }

}
