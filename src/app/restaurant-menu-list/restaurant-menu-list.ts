import {Component, OnInit, ViewChild, viewChild} from '@angular/core';
import {RestaurantMenuDetail} from '../restaurant-menu-detail/restaurant-menu-detail';
import {CommonModule, CurrencyPipe, DatePipe, NgFor, NgForOf, NgIf} from '@angular/common';
import { Restaurant } from '../models/restaurant.Menu';
import { RouterLink } from '@angular/router';
import { RestaurantMenuService } from '../services/restaurant-menu';
import { NameCategoryPipe } from '../pipes/name-category-pipe';
import {HoverHighlightDirective} from '../directives/hover-highlight';
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef, MatHeaderRow, MatHeaderRowDef,
  MatRow,
  MatRowDef,
  MatTable, MatTableDataSource
} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';


@Component({
  selector: 'app-restaurant-menu-list',
  standalone: true,
  imports: [
    RouterLink,
    NgIf,
    CurrencyPipe,
    NameCategoryPipe,
    HoverHighlightDirective,
    MatTable,
    MatHeaderCellDef,
    MatCellDef,
    MatRowDef,
    MatHeaderRowDef,
    MatHeaderCell,
    MatColumnDef,
    MatCell,
    MatHeaderRow,
    MatRow,
    MatPaginator,
    DatePipe
  ],
  templateUrl: './restaurant-menu-list.html',
  styleUrl: './restaurant-menu-list.css',
})
export class RestaurantMenuList implements OnInit{

  displayedColumns: string[] = ['id', 'nameCategory','price', 'addOn', 'description'];
  menuList: Restaurant[] = [];
  dataSource: MatTableDataSource<Restaurant> = new MatTableDataSource(this.menuList);
  error: string | null = null;

  @ViewChild(MatPaginator) paginator: MatPaginator | null =null;

  constructor(private restaurantMenuService: RestaurantMenuService){}
  ngOnInit() {
    this.restaurantMenuService.getAll().subscribe({
      next: (data: Restaurant[]) => {
        this.menuList = data;
        this.error = null;
        this.dataSource.data = data;
        this.dataSource.paginator = this.paginator;
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
