import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Produto } from 'src/app/shared/model/produto';
import { ProdutoService } from 'src/app/shared/services/produto.service';
import { MensagemService } from 'src/app/shared/services/mensagem.service';


@Component({
  selector: 'app-cadastro-produto',
  templateUrl: './cadastro-produto.component.html',
  styleUrls: ['./cadastro-produto.component.css']
})
export class CadastroProdutoComponent {
  produtoDeManutencao: Produto;
  estahCadastrando = true;
  nomeBotaoManutencao = 'Cadastrar';
  idEstoque: string | null;


  constructor(private rotaAtual: ActivatedRoute, private roteador: Router, 
              private produtoService: ProdutoService,  private mensagemService: MensagemService) {
    this.idEstoque = this.rotaAtual.snapshot.paramMap.get('idestoque');
    const idParaEdicao = this.rotaAtual.snapshot.paramMap.get('idproduto');
    this.produtoDeManutencao = new Produto();
    
    if (this.idEstoque) {
      this.produtoDeManutencao.fk_estoque = this.idEstoque;
    }
    
    if (idParaEdicao) {
      this.produtoService.encontrar(idParaEdicao).subscribe(
        produtoEncontrado => {
          this.estahCadastrando = false;
          this.nomeBotaoManutencao = 'Salvar';
          this.produtoDeManutencao = produtoEncontrado;
        }
      );
    } else {
      this.nomeBotaoManutencao = 'Cadastrar';
    }
  }

  ngOnInit(): void { 
  }

  manterAux(): void {
    this.produtoDeManutencao = new Produto();

    if (this.idEstoque) {
      this.produtoDeManutencao.fk_estoque = this.idEstoque;
    }

    this.nomeBotaoManutencao = 'Cadastrar';
    this.roteador.navigate(['listagemproduto', this.idEstoque]);
  }
      
  manter(): void { 
    if (this.estahCadastrando && this.produtoDeManutencao) {
      this.produtoService.inserir(this.produtoDeManutencao).subscribe(
        retorno => {
          this.mensagemService.success(`Produto '${this.produtoDeManutencao.nome}' cadastrado com sucesso!`);
          this.manterAux();
        }
      );
    } else {
      this.produtoService.atualizar(this.produtoDeManutencao).subscribe(
        retorno => {
          this.mensagemService.success(`Produto '${this.produtoDeManutencao.nome}' atualizado com sucesso!`);
          this.manterAux();
        }
      );
    }
  }
}
