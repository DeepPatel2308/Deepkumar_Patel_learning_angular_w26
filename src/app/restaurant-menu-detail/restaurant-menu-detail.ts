import { Component, Input } from '@angular/core';
import { Restaurant } from '../models/restaurant.Menu';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-restaurant-menu-detail',
  imports: [CommonModule],
  templateUrl: './restaurant-menu-detail.html',
  styleUrl: './restaurant-menu-detail.css',
})
export class RestaurantMenuDetail {
  @Input() restaurant?:Restaurant;
  @Input() index?: number = 0;
}
