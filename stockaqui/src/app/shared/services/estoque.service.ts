import { Injectable } from '@angular/core';
import {from, Observable} from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Estoque } from '../model/estoque';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/compat/firestore';
import {map} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})

export class EstoqueService {
  colecaoEstoques: AngularFirestoreCollection<Estoque>;
  NOME_COLECAO = 'estoques';
  URL_ESTOQUES = 'https://json-server-pweb.gabrielmacaubas.repl.co/estoques';
  
  constructor(private afs: AngularFirestore, private httpClient: HttpClient) { 
    this.colecaoEstoques = afs.collection(this.NOME_COLECAO);
  }

  listar(): Observable<Estoque[]> {
    return this.colecaoEstoques.valueChanges({idField: 'id'});
  }

  encontrar(idParaEdicao: string): Observable<Estoque> {
    return this.colecaoEstoques.doc(idParaEdicao).get().pipe(map(
      document => new Estoque(document.id, document.data())
    ));
  }

  inserir(estoque: Estoque): Observable<Object> {
    delete estoque.id;

    if (estoque.nome && estoque.capacidade && estoque.descricao) {
      if (!Number.isNaN(Number(estoque.capacidade)) && Number(estoque.capacidade) > 0) {
        return from(this.colecaoEstoques.add(Object.assign({}, estoque)));
      }
    }
    
    alert("Estoque Inválido!");
    return new Observable<Estoque>(observer => observer.error(new Error('Estoque inválido!')));
  }

  atualizar(estoque: Estoque): Observable<void> {
    const id = estoque.id;

    delete estoque.id;
    return from(this.colecaoEstoques.doc(id).update(Object.assign({}, estoque)));
  }

  remover(estoqueRemovido: Estoque): Observable<void> {
    if (estoqueRemovido) {
      return from(this.colecaoEstoques.doc(estoqueRemovido.id).delete());
    }

    alert("Erro ao excluir!");
    return new Observable<void>(observer => observer.error(new Error('Estoque inválido!')));
  }
}
