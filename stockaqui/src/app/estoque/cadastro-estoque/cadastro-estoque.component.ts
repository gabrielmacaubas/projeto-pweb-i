import { Component } from '@angular/core';
import { Estoque } from '../../shared/model/estoque';
import { ESTOQUES } from '../../shared/model/ESTOQUES';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-estoque',
  templateUrl: './cadastro-estoque.component.html',
  styleUrls: ['./cadastro-estoque.component.css']
})


export class CadastroEstoqueComponent {
  estoqueDeManutencao: Estoque;
  estahCadastrando = true;
  nomeBotaoManutencao = 'Cadastrar';
  estoques = ESTOQUES;

  constructor(private rotaAtual: ActivatedRoute, private roteador: Router) {
    this.estoqueDeManutencao = new Estoque(null, null, null);
    const nomeParaEdicao = this.rotaAtual.snapshot.paramMap.get('nome');

    if (nomeParaEdicao) {
      const estoqueEncontrado = this.estoques.find(
        estoque => estoque.nome === nomeParaEdicao
      );

      if (estoqueEncontrado) {
        this.estahCadastrando = false;
        this.nomeBotaoManutencao = 'Salvar';
        this.estoqueDeManutencao = estoqueEncontrado;
      } else {
            this.nomeBotaoManutencao = 'Cadastrar';
      }
    }
  }

  ngOnInit(): void {
        
  }
      
  manter(): void {
    if (this.estahCadastrando && this.estoqueDeManutencao) {
        this.estoques.push(this.estoqueDeManutencao);
    }

    this.estoqueDeManutencao = new Estoque(null, null, null);
    this.nomeBotaoManutencao = 'Cadastrar';
    this.roteador.navigate(['listagemestoque']);
  }
    
}
