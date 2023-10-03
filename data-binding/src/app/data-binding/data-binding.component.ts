import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss']
})
export class DataBindingComponent implements OnInit {

  public nome: string = "João";
  public idade: number = 21;
  public maisUm: number = 1;
  public checkedDisabled: boolean = true;
  public imgTitle: string ="Property Binding"

  public position: {x: number, y: number} = {x: 0, y: 0};

  public imgSrc: string = "https://img.freepik.com/fotos-gratis/um-por-do-sol-sobre-uma-praia-com-um-por-do-sol-dourado-ao-fundo_188544-33419.jpg?w=1380&t=st=1696341118~exp=1696341718~hmac=8f72ca6b832febf72c1afaef8c736c4af3703601e07662c9a439e66dc9850991"

  constructor() { }

  ngOnInit(): void { }

  public alertaInfo(valor: MouseEvent){
    console.log(valor);
  }

  public mouseMoveTeste(valor: MouseEvent){
    this.position.x = valor.offsetX;
    this.position.y  = valor.offsetY;
  }

}
