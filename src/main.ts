import { provideRouter} from '@angular/router';
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import {restaurantMenuList} from './app/data/mock-restaurant-menu';
import {RestaurantMenuList} from './app/restaurant-menu-list/restaurant-menu-list';
import {RestaurantMenuDetail} from './app/restaurant-menu-detail/restaurant-menu-detail';

const routes = [
  { path: 'restaurant-menu', component: RestaurantMenuList},
  { path: 'reataurant-menu/:id', component: RestaurantMenuDetail}
];
