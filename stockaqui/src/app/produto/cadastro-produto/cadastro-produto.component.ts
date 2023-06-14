import { Component } from '@angular/core';
import { Produto } from '../../shared/model/produto';
import { EstoqueService } from '../../shared/services/estoque.service'
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-cadastro-produto',
  templateUrl: './cadastro-produto.component.html',
  styleUrls: ['./cadastro-produto.component.css']
})
export class CadastroProdutoComponent {
  produtoDeManutencao: Produto;
  estahCadastrando = true;
  nomeBotaoManutencao = 'Cadastrar';


  constructor(private rotaAtual: ActivatedRoute, private roteador: Router, private estoqueService: EstoqueService) {
    this.produtoDeManutencao = new Produto(null, null, null);
    //const idParaEdicao = this.rotaAtual.snapshot.paramMap.get('id');

    //if (idParaEdicao) {
    //  this.produtoService.encontrar(idParaEdicao).subscribe(
    //    produtoEncontrado => {
    //      this.estahCadastrando = false;
    //      this.nomeBotaoManutencao = 'Salvar';
    //      this.produtoDeManutencao = produtoEncontrado;
    //    }
    //  );
    //} else {
    //  this.nomeBotaoManutencao = 'Cadastrar';
    //}
  }

  ngOnInit(): void { 
  }
      
  manter(): void {
    /*
    if (this.estahCadastrando && this.produtoDeManutencao) {
      this.estoqueService.inserirProduto(this.produtoDeManutencao).subscribe();
    } else {
      this.estoqueService.atualizarProduto(this.produtoDeManutencao).subscribe();
    }
    */

    this.produtoDeManutencao = new Produto(null, null, null);
    this.nomeBotaoManutencao = 'Cadastrar';
    //this.roteador.navigate(['listagemestoque']);
  }
}
