import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit, OnChanges, OnDestroy {

  @Input() public title:string = "Bem vindo";

  constructor() {}

  ngOnInit(): void { }

  ngOnChanges(changes: SimpleChanges): void {
    alert("Foi alterado com sucesso")
  }

  ngOnDestroy(): void {
      console.log('Deu bom ele foi destruido!');
  }

}
