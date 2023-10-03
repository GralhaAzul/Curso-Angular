import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.scss']
})
export class OutputComponent implements OnInit {

  @Output() public enviarDados = new EventEmitter();

  public list: Array<{nome: string, idade: number}> = [
    {nome: "João", idade:21},
    {nome: "Pipipi", idade:84},
    {nome: "CHACHA", idade:25}
  ]

  constructor() { }

  ngOnInit(): void {

  }

  public getDados(event: number){
    this.enviarDados.emit(this.list[event]);
  }
}
