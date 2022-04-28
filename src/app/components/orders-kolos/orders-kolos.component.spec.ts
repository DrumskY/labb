import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersKolosComponent } from './orders-kolos.component';

describe('OrdersKolosComponent', () => {
  let component: OrdersKolosComponent;
  let fixture: ComponentFixture<OrdersKolosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdersKolosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersKolosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
