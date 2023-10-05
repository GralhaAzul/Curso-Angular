import { Component, OnInit } from '@angular/core';
import { FoodList } from 'src/app/module/food-list';
import { FoodlistService } from 'src/app/services/food-list.service';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: [ './food-list.component.scss' ]
})
export class FoodListComponent implements OnInit {

  public foodList: Array<FoodList> = [];
  constructor(private foodlistService: FoodlistService) { }

  ngOnInit(): void {
    this.foodlistService.foodList()
      .subscribe({
        next: (res) => this.foodList = (res),
        error: (err) => console.log(err),
      });

    this.foodlistService.emitEvent.subscribe(
      res => {
        alert(`You add an item: ${ res.nome }`);
        return this.foodList.push(res)
      }
    );
  }

  public foodListEdit(value: string, id: number) {
    this.foodlistService.foodListEdit(value, id)
      .subscribe(
        {
          next: (res) => {
            return console.log(res)
          },
          error: (err) => console.log(err)
        }
      )
  }

  public foodListDelete(id: number) {
    return this.foodlistService.foodListDelete(id)
      .subscribe({
        next: (res) => {
          this.foodList = this.foodList.filter(
            item => {
              return id !== item.id
            }
          )
        },
        error: (error) => console.log(error)
      })
  }
}
