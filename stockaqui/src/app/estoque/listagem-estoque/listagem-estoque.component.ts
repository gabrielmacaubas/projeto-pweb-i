import { Component } from '@angular/core';

import { Estoque } from 'src/app/shared/model/estoque';
import { EstoqueService } from 'src/app/shared/services/estoque.service';
import { MensagemService } from 'src/app/shared/services/mensagem.service';


@Component({
  selector: 'app-listagem-estoque',
  templateUrl: './listagem-estoque.component.html',
  styleUrls: ['./listagem-estoque.component.css']
})
export class ListagemEstoqueComponent {
  estoques: Estoque[];

  constructor(private estoqueService: EstoqueService, private mensagemService: MensagemService) {
    this.estoques = [];
  }

  ngOnInit() {
    this.estoqueService.listar().subscribe(
      estoquesRetornados => {
        this.estoques = estoquesRetornados;
      }
    );
  }

  remover(estoqueRemovido: Estoque): void {
    if (estoqueRemovido.id) {
      this.estoqueService.remover(estoqueRemovido.id).subscribe(
        () => {
          const indxEstoqueARemover = this.estoques.findIndex(estoque => estoque.id === estoqueRemovido.id);
          if (indxEstoqueARemover > -1) {
            this.estoques.splice(indxEstoqueARemover, 1)
          }
          this.mensagemService.info(`Estoque '${estoqueRemovido.nome}' removido`);
        }
      );
    }
  }
}
