import { TestBed } from '@angular/core/testing';

import { RestaurantMenu } from './restaurant-menu';

describe('RestaurantMenu', () => {
  let service: RestaurantMenu;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RestaurantMenu);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
