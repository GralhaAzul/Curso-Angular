import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

//components
import { FormsModule } from '@angular/forms';
import { FoodAddComponent } from './food-add/food-add.component';
import { FoodListComponent } from './food-list/food-list.component';


@NgModule({
  declarations: [FoodListComponent, FoodAddComponent],
  exports:[FoodListComponent, FoodAddComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule
  ]
})
export class SharedModule { }
