import { Component, OnInit, ViewChild } from '@angular/core';
import { EstoqueService } from './shared/services/estoque.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
    title = 'stockaqui';
    estoquesCheios?: number;

    constructor(private estoqueService: EstoqueService) { }

    ngOnInit(): void {
      this.estoqueService.estoquesCheios().subscribe(
        estoques => this.estoquesCheios = estoques.length
      );
    }
}
