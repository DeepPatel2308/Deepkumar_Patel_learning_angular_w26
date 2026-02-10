import { provideRouter} from '@angular/router';
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import {restaurantMenuList} from './app/data/mock-restaurant-menu';
import {RestaurantMenuList} from './app/restaurant-menu-list/restaurant-menu-list';
import {RestaurantMenuDetail} from './app/restaurant-menu-detail/restaurant-menu-detail';
import {ModifyListItem} from './app/modify-list-item/modify-list-item';
import {PageNotFound} from './app/page-not-found/page-not-found';

const routes = [
  { path:'', redirectTo: '/restaurant-menu', pathMatch:'full'},
  { path: 'restaurant-menu', component: RestaurantMenuList},
  { path: 'reataurant-menu/:id', component: RestaurantMenuDetail},
  { path:'modify-list-item', component: ModifyListItem},
  { path: '**', component:PageNotFound}
];
