import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RestaurantMenuList } from './restaurant-menu-list/restaurant-menu-list';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RestaurantMenuList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title: string = 'Deepkumar Patel';
}
