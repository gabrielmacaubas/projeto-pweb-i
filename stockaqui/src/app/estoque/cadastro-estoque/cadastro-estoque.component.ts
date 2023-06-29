import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Estoque } from 'src/app/shared/model/estoque';
import { EstoqueService } from 'src/app/shared/services/estoque.service';
import { MensagemService } from 'src/app/shared/services/mensagem.service';


@Component({
  selector: 'app-cadastro-estoque',
  templateUrl: './cadastro-estoque.component.html',
  styleUrls: ['./cadastro-estoque.component.css']
})
export class CadastroEstoqueComponent {
  estoqueDeManutencao: Estoque;
  estahCadastrando = true;
  nomeBotaoManutencao = 'Cadastrar';


  constructor(private rotaAtual: ActivatedRoute, private roteador: Router, 
              private estoqueService: EstoqueService, private mensagemService: MensagemService) {
    this.estoqueDeManutencao = new Estoque();
    const idParaEdicao = this.rotaAtual.snapshot.paramMap.get('id');

    if (idParaEdicao) {
      this.estoqueService.encontrar(idParaEdicao).subscribe(
        estoqueEncontrado => {
          this.estahCadastrando = false;
          this.nomeBotaoManutencao = 'Salvar';
          this.estoqueDeManutencao = estoqueEncontrado;
        }
      );
    } else {
        this.nomeBotaoManutencao = 'Cadastrar';
    }
  }

  ngOnInit(): void { 
  }

  manterAux(): void {
    this.estoqueDeManutencao = new Estoque();
    this.nomeBotaoManutencao = 'Cadastrar';
    this.roteador.navigate(['listagemestoque']);
  }
      
  manter(): void {
    this.estoqueDeManutencao.capacidade = Number(this.estoqueDeManutencao.capacidade)
    
    if (this.estahCadastrando && this.estoqueDeManutencao) {
      this.estoqueService.inserir(this.estoqueDeManutencao).subscribe(
        retorno => {
          this.mensagemService.success(`Estoque '${this.estoqueDeManutencao.nome}' cadastrado com sucesso!`);
          this.manterAux();
        }
      );
    } else {
      this.estoqueService.atualizar(this.estoqueDeManutencao).subscribe(
        retorno => {
          this.mensagemService.success(`Estoque '${this.estoqueDeManutencao.nome}' atualizado com sucesso!`);
          this.manterAux();
        }
      );
    }
  }
}
