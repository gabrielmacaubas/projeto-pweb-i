import { Component } from '@angular/core';
import { Estoque } from '../../shared/model/estoque';
import { ActivatedRoute, Router } from '@angular/router';
import { EstoqueService } from 'src/app/shared/services/estoque.service';

@Component({
  selector: 'app-cadastro-estoque',
  templateUrl: './cadastro-estoque.component.html',
  styleUrls: ['./cadastro-estoque.component.css']
})


export class CadastroEstoqueComponent {
  estoqueDeManutencao: Estoque;
  estahCadastrando = true;
  nomeBotaoManutencao = 'Cadastrar';


  constructor(private rotaAtual: ActivatedRoute, private roteador: Router, private estoqueService: EstoqueService) {
    this.estoqueDeManutencao = new Estoque(null, null, null);
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
      
  manter(): void {
    if (this.estahCadastrando && this.estoqueDeManutencao) {
      this.estoqueService.inserir(this.estoqueDeManutencao).subscribe();
    } else {
      this.estoqueService.atualizar(this.estoqueDeManutencao).subscribe();
    }

    this.estoqueDeManutencao = new Estoque(null, null, null);
    this.nomeBotaoManutencao = 'Cadastrar';
    this.roteador.navigate(['listagemestoque']);
  }
    
}
