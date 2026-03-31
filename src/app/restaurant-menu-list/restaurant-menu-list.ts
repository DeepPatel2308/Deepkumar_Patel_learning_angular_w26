import { Component, OnInit } from '@angular/core';
import {RestaurantMenuDetail} from '../restaurant-menu-detail/restaurant-menu-detail';
import {CommonModule, NgFor, NgForOf, NgIf} from '@angular/common';
import { Restaurant } from '../models/restaurant.Menu';
import { RouterLink } from '@angular/router';
import { RestaurantMenuService } from '../services/restaurant-menu';
import { NameCategoryPipe } from '../pipes/name-category-pipe';
import {HoverHighlightDirective} from '../directives/hover-highlight';


@Component({
  selector: 'app-restaurant-menu-list',
  standalone: true,
  imports: [
    NgForOf,
    RouterLink,
    CommonModule,
    NameCategoryPipe,
    HoverHighlightDirective
  ],
  templateUrl: './restaurant-menu-list.html',
  styleUrl: './restaurant-menu-list.css',
})
export class RestaurantMenuList implements OnInit{

  displayedColumns: string[] = ['Id', 'Name', 'Category', 'Price'];
  menuList: Restaurant[] = [];
  error: string | null = null;


  constructor(private restaurantMenuService: RestaurantMenuService){}
  ngOnInit() {
    this.restaurantMenuService.getAll().subscribe({
      next: (data: Restaurant[]) => {
        this.menuList = data;
        this.error = null;
      },
      error: (err: any) => {
        this.error = 'Error fetching menu items';
        console.error('Error fetching menu items', err);
      },
      complete: () => console.log('Menu data fetch complete!')
    });
  }
  selectedMenuItem?: Restaurant;
  selectMenuItem(item: Restaurant): void {
    this.selectedMenuItem = item;
  }

  onDelete(id: number): void {
    this.restaurantMenuService.delete(id).subscribe({
      next: () => {
        this.menuList = this.menuList.filter(m => m.Id != id);
      },
      error: err => {
        this.error = 'Error deleting menu item';
        console.error('Delete error', err);
      },
      complete:() => console.log('Delete operation complete!')
    });
  }
}
