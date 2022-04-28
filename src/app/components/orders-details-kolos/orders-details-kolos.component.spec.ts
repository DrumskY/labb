import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersDetailsKolosComponent } from './orders-details-kolos.component';

describe('OrdersDetailsKolosComponent', () => {
  let component: OrdersDetailsKolosComponent;
  let fixture: ComponentFixture<OrdersDetailsKolosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdersDetailsKolosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersDetailsKolosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
