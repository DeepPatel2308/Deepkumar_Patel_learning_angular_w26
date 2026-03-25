import { Pipe, PipeTransform } from '@angular/core';
import {Restaurant} from '../models/restaurant.Menu';

@Pipe({
  name: 'nameCategory',
  standalone: true
})
export class NameCategoryPipe implements PipeTransform {

 transform(restaurant: Restaurant): string {
   return `${restaurant.Name} ${restaurant.Category}`;
 }
}
