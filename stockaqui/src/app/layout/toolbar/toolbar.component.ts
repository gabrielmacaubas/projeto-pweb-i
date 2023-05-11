import { Component } from '@angular/core';
import { Estoque } from 'src/app/shared/model/estoque'

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent {
  title = 'stockaqui';
  estoques: Estoque[];

  constructor() {
    this.estoques = [new Estoque("Alimentos", 25), new Estoque("Produtos", 50), new Estoque("Medicamentos", 75)];
  }
}
