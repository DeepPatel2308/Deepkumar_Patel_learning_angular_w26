import {provideRouter, Routes} from '@angular/router';
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import {restaurantMenuList} from './app/data/mock-restaurant-menu';
import {RestaurantMenuList} from './app/restaurant-menu-list/restaurant-menu-list';
import {RestaurantMenuDetail} from './app/restaurant-menu-detail/restaurant-menu-detail';
import {ModifyListItem} from './app/modify-list-item/modify-list-item';
import {PageNotFound} from './app/page-not-found/page-not-found';
import {provideHttpClient} from '@angular/common/http';
import {importProvidersFrom} from '@angular/core';
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import {InMemoryDataService} from './app/services/inMemoryDataService';

const routes: Routes = [
  { path:'', redirectTo: '/restaurant-menu', pathMatch:'full'},
  { path: 'restaurant-menu', component: RestaurantMenuList},
  { path: 'restaurant-menu/:id', component: RestaurantMenuDetail},
  { path:'modify-menu', component: ModifyListItem},
  { path: '**', component:PageNotFound}
];

// @ts-ignore
bootstrapApplication(App, {
  providers: [
    provideHttpClient(),
    provideRouter(routes),
    importProvidersFrom(
      HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { delay: 1000 })
     )
  ],
}).catch(err => console.error(err));
