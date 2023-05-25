import { Component } from '@angular/core';
import { Estoque } from 'src/app/shared/model/estoque';
import { EstoqueService } from 'src/app/shared/services/estoque.service';

@Component({
  selector: 'app-listagem-estoque',
  templateUrl: './listagem-estoque.component.html',
  styleUrls: ['./listagem-estoque.component.css']
})

export class ListagemEstoqueComponent {
  estoques: Estoque[];

  constructor(private estoqueService: EstoqueService) {
    this.estoques = [];
  }

  ngOnInit() {
    this.estoqueService.listar().subscribe(
      estoquesRetornados => this.estoques = estoquesRetornados
    );
  }

  remover(estoqueRemovido: Estoque): void {
    this.estoqueService.remover(estoqueRemovido).subscribe(
      retorno => window.location.reload()
    );
  }
}
