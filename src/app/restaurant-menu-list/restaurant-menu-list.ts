import { Component, OnInit } from '@angular/core';
import {RestaurantMenuDetail} from '../restaurant-menu-detail/restaurant-menu-detail';
import {CommonModule} from '@angular/common';
import { Restaurant } from '../models/restaurant.Menu';
import { RouterLink } from '@angular/router';
import { RestaurantMenuService } from '../services/restaurant-menu';

// @ts-ignore
@Component({
  selector: 'app-restaurant-menu-list',
  imports: [CommonModule, RouterLink],
  templateUrl: './restaurant-menu-list.html',
  styleUrl: './restaurant-menu-list.css',
})
export class RestaurantMenuList implements OnInit{

  menuList: Restaurant[] = [];
  constructor(private restaurantMenuService: RestaurantMenuService){}
  ngOnInit() {
    this.loadMenu();
  }
  loadMenu(): void {
    this.restaurantMenuService.getAll().subscribe(list => {
      this.menuList = list;
    });
  }
  onDelete(Id: number): void {
    this.restaurantMenuService.delete(Id).subscribe(() => {
      this.loadMenu();
    });
  }
}
