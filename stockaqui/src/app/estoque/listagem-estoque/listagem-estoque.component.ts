import { Component } from '@angular/core';
import { Estoque } from 'src/app/shared/model/estoque';
import { ESTOQUES } from 'src/app/shared/model/ESTOQUES';

@Component({
  selector: 'app-listagem-estoque',
  templateUrl: './listagem-estoque.component.html',
  styleUrls: ['./listagem-estoque.component.css']
})
export class ListagemEstoqueComponent {
    estoques: Estoque[];

    constructor() {
        this.estoques = ESTOQUES;
    }

    remover(estoqueRemovido: Estoque): void {
        const index: number = this.estoques.findIndex(estoque => estoque.nome == estoqueRemovido.nome);

        this.estoques.splice(index, 1);
    }
}
