import { Injectable } from '@angular/core';
import {catchError, Observable, of, throwError} from 'rxjs';
import { Restaurant } from '../models/restaurant.Menu';
import { restaurantMenuList } from '../data/mock-restaurant-menu';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestaurantMenuService {
  private apiUrl = 'api/restaurantMenuList';
  private menu: Restaurant[] = restaurantMenuList;
  constructor(private http: HttpClient) { }

  getAll(): Observable<Restaurant[]> {
    return this.http.get<Restaurant[]>(this.apiUrl).pipe(catchError(this.handleError));
  }

  //get menu item by id
  getById(id: number): Observable<Restaurant> {
    return this.http.get<Restaurant>(`${this.apiUrl}/${id}`).pipe(catchError(this.handleError));
  }

  //add menu item
  create(item: Restaurant): Observable<Restaurant> {
    item.Id = this.generateNewId();
    return this.http.post<Restaurant>(this.apiUrl, item).pipe(catchError(this.handleError));
  }

  // updating the menu item
  update(item: Restaurant): Observable<Restaurant | undefined> {
    const url = `${this.apiUrl}/${item.Id}`;
    return this.http.put<Restaurant>(url, item).pipe(catchError(this.handleError));
  }

  // delete menu item
  delete(id: number): Observable<{}> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete(url).pipe(catchError(this.handleError));
  }

  generateNewId(): number {
    return this.menu.length > 0 ? Math.max(...this.menu.map(m => m.Id)) + 1 : 1;
  }

  //error handler
  private handleError(error: HttpErrorResponse){
    console.error('API error:', error);
    return throwError(() => new Error('Server error, please try again.'));
  }
}
