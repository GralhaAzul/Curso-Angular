import { Component, OnInit } from '@angular/core';

//services
import { FoodlistService } from './../../services/food-list.service';

@Component({
  selector: 'app-food-add',
  templateUrl: './food-add.component.html',
  styleUrls: ['./food-add.component.scss']
})
export class FoodAddComponent implements OnInit{

  constructor(private foodlistService: FoodlistService){ }

  ngOnInit(): void {

  }

  public listAddItem(value: string){
    return this.foodlistService.foodListAdd(value)
    .subscribe({
        next: (res) => this.foodlistService.foodListAlert(res),
        error: (err) => console.log (err),
    })
  }
}
