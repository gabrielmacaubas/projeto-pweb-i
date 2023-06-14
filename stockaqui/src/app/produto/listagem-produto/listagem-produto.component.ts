import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Produto } from '../../shared/model/produto';
import { EstoqueService } from 'src/app/shared/services/estoque.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-listagem-produto',
  templateUrl: './listagem-produto.component.html',
  styleUrls: ['./listagem-produto.component.css']
})


export class ListagemProdutoComponent implements OnInit {
  dataSource: MatTableDataSource<Produto>;
  mostrarColunas = ['nome', 'valor', 'descricao', 'acoes'];
  estoqueId?: string;

  constructor(private estoqueService: EstoqueService, private rotaAtual: ActivatedRoute, private roteador: Router) {
    this.dataSource = new MatTableDataSource();
  }

  ngOnInit() {
    if (this.rotaAtual.snapshot.paramMap.has('id')) {
      const id = this.rotaAtual.snapshot.paramMap.get('id');

      if (id) {
        this.estoqueId = id;
        this.estoqueService.encontrar(id).subscribe(
          estoque => {
            this.dataSource = new MatTableDataSource(estoque.produtos);
          }
        )
      }
    }
  }

  filtrar(texto: string): void {
    this.dataSource.filter = texto.trim().toLowerCase();
  }
}
