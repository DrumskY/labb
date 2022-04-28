import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersItemKolosComponent } from './orders-item-kolos.component';

describe('OrdersItemKolosComponent', () => {
  let component: OrdersItemKolosComponent;
  let fixture: ComponentFixture<OrdersItemKolosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdersItemKolosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersItemKolosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
