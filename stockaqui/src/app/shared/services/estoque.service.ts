import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Estoque } from '../model/estoque';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class EstoqueService {
  URL_ESTOQUES = 'http://localhost:3000/estoques';
  
  constructor(private httpClient: HttpClient) { }

  listar(): Observable<Estoque[]> {
    return this.httpClient.get<Estoque[]>(this.URL_ESTOQUES);
  }

  encontrar(nomeParaEdicao: string): Observable<Estoque> {
    return this.httpClient.get<Estoque>(`${this.URL_ESTOQUES}/${nomeParaEdicao}`)
  }

  inserir(estoque: Estoque): Observable<Estoque> {
    if (estoque.nome && estoque.capacidade && estoque.descricao) {
      if (!Number.isNaN(Number(estoque.capacidade)) && Number(estoque.capacidade) > 0) {
        return this.httpClient.post<Estoque>(this.URL_ESTOQUES, estoque);
      }
    }

    return new Observable<Estoque>(observer => observer.error(new Error('Estoque inválido!')));
  }

  atualizar(estoque: Estoque): Observable<Estoque> {
    return this.httpClient.put<Estoque>(`${this.URL_ESTOQUES}/${estoque.id}`, estoque);
  }

  remover(estoqueRemovido: Estoque): Observable<Estoque> {
    if (estoqueRemovido) {
      return this.httpClient.delete<Estoque>(`${this.URL_ESTOQUES}/${estoqueRemovido.id}`)
    }

    return new Observable<Estoque>(observer => observer.error(new Error('Estoque inválido!')));
  }
}
