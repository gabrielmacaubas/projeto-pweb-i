import { Component } from '@angular/core';
import { Estoque } from './shared/model/estoque';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'stockaqui';
  estoques: Estoque[];

  constructor() {
    this.estoques = [new Estoque("a", null), new Estoque("b", null), new Estoque("c", null)];
  }
}
