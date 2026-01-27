import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantMenuDetail } from './restaurant-menu-detail';

describe('RestaurantMenuDetail', () => {
  let component: RestaurantMenuDetail;
  let fixture: ComponentFixture<RestaurantMenuDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RestaurantMenuDetail]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RestaurantMenuDetail);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
