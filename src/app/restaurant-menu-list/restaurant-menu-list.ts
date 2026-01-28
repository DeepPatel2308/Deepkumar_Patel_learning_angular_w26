import { Component } from '@angular/core';
import {RestaurantMenuDetail} from '../restaurant-menu-detail/restaurant-menu-detail';
import {CommonModule} from '@angular/common';
import { Restaurant } from '../models/restaurant.Menu';
@Component({
  selector: 'app-restaurant-menu-list',
  imports: [RestaurantMenuDetail,CommonModule],
  templateUrl: './restaurant-menu-list.html',
  styleUrl: './restaurant-menu-list.css',
})
export class RestaurantMenuList {

  restaurantMenuList: Restaurant[] = [
    {Name: "Manchurian", Price: 12, Category: "Starter", Quantity: 250, Description: "Prepared with tomato pury."},
    {Name: "Paneer Tikka", Price: 18, Category: "Starter", Quantity: 200, Description: "Prepared with migrated cubes of paneer."},
    {Name: "Paneer Butter Masala", Price: 23, Category: "Main Course", Quantity: 280, Description: "Prepared with gray with paneer."},
    {Name: "Fries", Price: 16, Category: "Starter", Quantity: 300, Description: "Prepared with patato fries."},
    {Name: "Zira Rice", Price: 9, Category: "Main Course", Quantity: 300, Description: "Prepared with zira flavoured rice."}
  ];

}
