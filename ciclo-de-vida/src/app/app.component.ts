import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-title *ngIf="destruir" title="Jorge"></app-title>
    <br>
    <button (click)="destruirComponent()">Destruir componente</button>
    <br>
    <br>
    {{ valor }}
    <button (click)="adicionar()">Adicionar</button>
    <router-outlet></router-outlet>
  `
})
export class AppComponent implements OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked {

  public valor: number = 1;

  public destruir:boolean = true

  constructor() {}

  public adicionar(): number {
    return this.valor += 1;
  }

  public destruirComponent(){
    this.destruir = false;
  }

  ngOnInit(): void { };
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked');
  };
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit');
  };
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked');
   };
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
   };
  ngDoCheck(): void {
    console.log('ngDoCheck');
   };
}
