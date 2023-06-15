import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Produto } from '../../shared/model/produto';
import { ProdutoService } from 'src/app/shared/services/produto.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-listagem-produto',
  templateUrl: './listagem-produto.component.html',
  styleUrls: ['./listagem-produto.component.css']
})


export class ListagemProdutoComponent implements OnInit {
  dataSource: MatTableDataSource<Produto>;
  mostrarColunas = ['nome', 'valor', 'descricao', 'acoes'];

  constructor(private produtoService: ProdutoService, private rotaAtual: ActivatedRoute, private roteador: Router) {
    this.dataSource = new MatTableDataSource();
  }

  ngOnInit() {
    if (this.rotaAtual.snapshot.paramMap.has('idestoque')) {
      const id = this.rotaAtual.snapshot.paramMap.get('idestoque');
      
      if (id) {
        this.produtoService.encontrarPorEstoque(id).subscribe(
          produtos => {
            this.dataSource = new MatTableDataSource(produtos);
          }
        )
      }
    }
  }

  filtrar(texto: string): void {
    this.dataSource.filter = texto.trim().toLowerCase();
  }

  remover(produtoRemovido: Produto): void {
    this.produtoService.remover(produtoRemovido).subscribe(
      resposta => {
        const indxEstoqueARemover = this.dataSource.data.findIndex(
          produto => produto.id === produtoRemovido.id
        );

        if (indxEstoqueARemover > -1) {
          this.dataSource.data.splice(indxEstoqueARemover, 1);
          this.dataSource = new MatTableDataSource<Produto>(this.dataSource.data);
        }
      }
    )
  }
}
