import { from, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';

import { Estoque } from 'src/app/shared/model/estoque';
import { MensagemService } from 'src/app/shared/services/mensagem.service';


@Injectable({
  providedIn: 'root'
})

export class EstoqueService {
  colecaoEstoques: AngularFirestoreCollection<Estoque>;
  NOME_COLECAO = 'estoques';
  
  constructor(private afs: AngularFirestore, private mensagemService: MensagemService) { 
    this.colecaoEstoques = afs.collection(this.NOME_COLECAO);
  }

  listar(): Observable<Estoque[]> {
    return this.colecaoEstoques.valueChanges({idField: 'id'});
  }

  estoquesCheios(): Observable<Estoque[]> {
    let estoquesCheios: number;
    
    return from(
      this.colecaoEstoques.ref.get()
        .then((snapshot) => {
            return snapshot.docs
              .map((doc) => {
                const data = doc.data() as Estoque;
                const id = doc.id;
                return { id, ...data };
              })
            .filter((estoque => estoque.capacidade === estoque.ocupacao));
        })
    );
  }

  encontrar(idParaEdicao: string): Observable<Estoque> {
    return this.colecaoEstoques.doc(idParaEdicao).get().pipe(map(
      document => {
        return new Estoque(document.id, document.data());
      }
    ));
  }

  inserir(estoque: Estoque): Observable<Object> {
    delete estoque.id;

    if (estoque.nome && estoque.capacidade && estoque.descricao) {
      if (!Number.isNaN(Number(estoque.capacidade)) && Number(estoque.capacidade) > 0) {
        return from(this.colecaoEstoques.add(Object.assign({}, estoque)));
      }
    }
    
    this.mensagemService.error('Estoque inválido!');
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

    return new Observable<void>(observer => observer.error(new Error('Estoque inválido!')));
  }
}
