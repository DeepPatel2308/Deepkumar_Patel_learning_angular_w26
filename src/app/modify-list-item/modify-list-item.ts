import {Component, OnInit} from '@angular/core';
import { FormBuilder, Validators,} from '@angular/forms';
import {FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ActivatedRoute, Router, RouterLink, RouterLinkActive} from '@angular/router';
import { RestaurantMenuService} from '../services/restaurant-menu';
import { Restaurant } from '../models/restaurant.Menu';
import {restaurantMenuList} from '../data/mock-restaurant-menu';


@Component({
  selector: 'app-modify-list-item',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './modify-list-item.html',
  styleUrl: './modify-list-item.css',
})
export class ModifyListItem implements OnInit{

  //create needed vars
  listForm!: FormGroup;
  list: Restaurant | undefined;
  error: string | null = null;

  constructor(private restaurantMenuService: RestaurantMenuService,
              private fb: FormBuilder,
              private router: Router,
              private route: ActivatedRoute){}

  ngOnInit() {
      this.listForm = this.fb.group({
        Id: ["",Validators.required],
        Name: ["", Validators.required],
        Price: [""],
        Category: [""],
        Quantity: [""],
        Description: [""]
      });
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if(id){
      this.restaurantMenuService.getById(id).subscribe({
        next: list => {
          if(list){
            this.list = list;
            this.listForm.patchValue(list);
          }
        },
        error: err => {
          this.error = "Error Fetching Lists";
        console.error("Error Fetching: ", err);
      }
    });
  }
}
  onSubmit() :void {
  if(this.listForm.invalid) return;
  const list: Restaurant = this.listForm.value


  if (!this.list) {
    this.restaurantMenuService.update(list).subscribe(() => {this.router.navigate(["/lists"])});
  } else {
    list.Id = this.restaurantMenuService.generateNewId();
    this.restaurantMenuService.create(list).subscribe(() => this.router.navigate(["/lists"]));
  }

  }
  onDelete(): void {
    const id = this.listForm.value.Id;
    if (id) {
      this.restaurantMenuService.delete(id).subscribe(() => {
        this.router.navigate(['/lists'])
      });
    }
  }

  protected readonly navigator = navigator;
  protected readonly restaurantMenuList = restaurantMenuList;
}
