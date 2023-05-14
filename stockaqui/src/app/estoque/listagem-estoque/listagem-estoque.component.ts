import { Component } from '@angular/core';
import { Estoque } from 'src/app/shared/model/estoque'

@Component({
  selector: 'app-listagem-estoque',
  templateUrl: './listagem-estoque.component.html',
  styleUrls: ['./listagem-estoque.component.css']
})
export class ListagemEstoqueComponent {
  title = 'stockaqui';
  estoques: Estoque[];

  constructor() {
    this.estoques = [new Estoque("Alimentos", 25), new Estoque("Produtos", 50), new Estoque("Medicamentos", 75)];
  }
}
