import { Component } from '@angular/core';
import {RestaurantMenuDetail} from '../restaurant-menu-detail/restaurant-menu-detail';
import {CommonModule} from '@angular/common';
import { Restaurant } from '../models/restaurant.Menu';
// @ts-ignore
@Component({
  selector: 'app-restaurant-menu-list',
  imports: [CommonModule, RestaurantMenuDetail],
  templateUrl: './restaurant-menu-list.html',
  styleUrl: './restaurant-menu-list.css',
})
export class RestaurantMenuList {

  restaurantMenuList: Restaurant[] = [
    {Id:1, Name: "Manchurian", Price: 12, Category: "Starter", Quantity: 250, Description: "Prepared with tomato pury."},
    {Id:2, Name: "Paneer Tikka", Price: 18, Category: "Starter", Quantity: 200, Description: "Prepared with migrated cubes of paneer."},
    {Id:3, Name: "Paneer Butter Masala", Price: 23, Category: "Main Course", Quantity: 280, Description: "Prepared with gray with paneer."},
    {Id:4, Name: "Fries", Price: 16, Category: "Starter", Quantity: 300, Description: "Prepared with patato fries."},
    {Id:5, Name: "Zira Rice", Price: 9, Category: "Main Course", Quantity: 300, Description: "Prepared with zira flavoured rice."}
  ];

}
