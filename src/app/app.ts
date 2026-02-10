import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import { RestaurantMenuList } from './restaurant-menu-list/restaurant-menu-list';
import {restaurantMenuList} from './data/mock-restaurant-menu';
import {RestaurantMenuDetail} from './restaurant-menu-detail/restaurant-menu-detail';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RestaurantMenuList, RestaurantMenuDetail, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title: string = 'Deepkumar Patel';
  protected readonly indexedDB = indexedDB;
  protected readonly restaurantMenuList = restaurantMenuList;
}
