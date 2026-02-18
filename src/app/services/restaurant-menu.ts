import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Restaurant } from '../models/restaurant.Menu';
import { restaurantMenuList } from '../data/mock-restaurant-menu';

@Injectable({
  providedIn: 'root'
})
export class RestaurantMenuService {

  private menu: Restaurant[] = restaurantMenuList;

  constructor() {}

  getAll(): Observable<Restaurant[]> {
    return of(this.menu);
  }

  //read method
  getById(id: number): Observable<Restaurant | undefined> {
    return of(this.menu.find(item => item.Id === id));
  }

  // create method
  create(item: Restaurant): Observable<Restaurant[]> {
    this.menu.push(item);
    return of(this.menu);
  }

  // update method
  update(item: Restaurant): Observable<Restaurant[]> {
    const index = this.menu.findIndex(m => m.Id === item.Id);
    if (index !== -1) {
      this.menu[index] = item;
    }
    return of(this.menu);
  }

  // delete method
  delete(id: number): Observable<Restaurant | undefined> {
    const index = this.menu.findIndex(m => m.Id === id);
    if (index !== -1) {
      const removed = this.menu.splice(index, 1)[0];
      return of(removed);
    }
    return of(undefined);
  }

  generateNewId(): number {
    return Math.max(...this.menu.map(m => m.Id)) + 1;
  }
}
