import { Component } from '@angular/core';
import { Estoque } from '../../shared/model/estoque';

@Component({
  selector: 'app-cadastro-estoque',
  templateUrl: './cadastro-estoque.component.html',
  styleUrls: ['./cadastro-estoque.component.css']
})


export class CadastroEstoqueComponent {
  estoque: Estoque;

  constructor() {
    this.estoque = new Estoque("a", 25);
  }

  inserirEstoque() {
    console.log(this.estoque);
    this.estoque = new Estoque("a", 25);
  }
}
