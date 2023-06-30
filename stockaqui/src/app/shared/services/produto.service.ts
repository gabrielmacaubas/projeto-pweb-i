import { from, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';

import { Produto } from 'src/app/shared/model/produto';
import { EstoqueService } from 'src/app/shared/services/estoque.service';
import { MensagemService } from 'src/app/shared/services/mensagem.service';


@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  colecaoProdutos: AngularFirestoreCollection<Produto>;
  NOME_COLECAO = 'produtos';
  
  constructor(private afs: AngularFirestore, private estoqueService: EstoqueService, private mensagemService: MensagemService) {
    this.colecaoProdutos = afs.collection(this.NOME_COLECAO);
  }

  encontrar(idParaEdicao: string): Observable<Produto> {
    return this.colecaoProdutos.doc(idParaEdicao).get().pipe(map(
      document => new Produto(document.id, document.data())
    ));
  }
  
  encontrarPorEstoque(fk_estoque: string): Observable<Produto[]> {
    return from(this.colecaoProdutos.ref.where('fk_estoque', '==', fk_estoque).get().then(snapshot => {
      return snapshot.docs.map(doc => {
        const data = doc.data() as Produto;
        const id = doc.id;
        return {id, ...data};
      });
    }));
  }

  alterarOcupacao(id: string, aumentar: Boolean): void {
    this.estoqueService.encontrar(id).subscribe(
      estoque => {
        if (estoque.ocupacao != undefined) {
          if (aumentar) {
            estoque.ocupacao = estoque.ocupacao + 1;
            
            this.estoqueService.atualizar(estoque).subscribe(
              retorno => console.log("atualizou")
            );
          } else {
            estoque.ocupacao--;

            this.estoqueService.atualizar(estoque).subscribe(
              retorno => console.log("atualizou")
            );
          }     
        }
      }
    );
  }

  inserir(produto: Produto): Observable<Object> {
    delete produto.id;

    if (produto.nome && produto.valor && produto.descricao) {
      if (!Number.isNaN(Number(produto.valor)) && Number(produto.valor) > 0) {
        this.alterarOcupacao(produto.fk_estoque, true);
        return from(this.colecaoProdutos.add(Object.assign({}, produto)));   
      }
    }

    this.mensagemService.error('Estoque inválido!');
    return new Observable<Produto>(observer => observer.error(new Error('Produto inválido!')));
  }

  atualizar(produto: Produto): Observable<void> {
    const id = produto.id;

    delete produto.id;
    return from(this.colecaoProdutos.doc(id).update(Object.assign({}, produto)));
  }

  remover(produtoRemovido: Produto): Observable<void> {
    if (produtoRemovido) {
      this.alterarOcupacao(produtoRemovido.fk_estoque, false);
      return from(this.colecaoProdutos.doc(produtoRemovido.id).delete());
    }

    return new Observable<void>(observer => observer.error(new Error('Produto inválido!')));
  }
  
}
