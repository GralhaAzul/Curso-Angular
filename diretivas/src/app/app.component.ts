import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <!-- <app-diretivas-estruturais></app-diretivas-estruturais> -->
  <!-- <app-diretivas-atributos>
    <h1>Aulas de Diretivas</h1>
    <h3>Final da Aula</h3>
  </app-diretivas-atributos>

  <app-diretivas-atributos>
    <h1>Ze Ruela</h1>
    <h3>Coco de nene</h3>
  </app-diretivas-atributos>
  <router-outlet></router-outlet> -->
  <app-diretivas-atributos></app-diretivas-atributos>
  `
})
export class AppComponent implements OnInit{

  constructor(){ }

  ngOnInit(): void {

  }
}
