import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Estoque } from 'src/app/shared/model/estoque';
import { MensagemService } from 'src/app/shared/services/mensagem.service';


@Injectable({
  providedIn: 'root'
})

export class EstoqueService {
  URL_ESTOQUES = 'http://localhost:8080/estoques';
  
  constructor(private mensagemService: MensagemService, private httpClient: HttpClient) { 
  }

  listar(): Observable<Estoque[]> {
    return this.httpClient.get<Estoque[]>(this.URL_ESTOQUES);
  }

  estoquesCheios(): Observable<Estoque[]> {
    return this.httpClient.get<Estoque[]>(this.URL_ESTOQUES + "/cheios");
  }

  encontrar(idParaEdicao: string): Observable<Estoque> {
    return this.httpClient.get<Estoque>(`${this.URL_ESTOQUES}/${idParaEdicao}`)
  }

  inserir(estoque: Estoque): Observable<Object> {
    if (estoque.nome && estoque.capacidade && estoque.descricao) {
      if (!Number.isNaN(Number(estoque.capacidade)) && Number(estoque.capacidade) > 0) {
        return this.httpClient.post<Estoque>(this.URL_ESTOQUES, estoque);
      }
    }
    
    this.mensagemService.error('Estoque inválido!');
    return new Observable<Estoque>(observer => observer.error(new Error('Estoque inválido!')));
  }

  atualizar(estoque: Estoque): Observable<Estoque> {
    return this.httpClient.put<Estoque>(`${this.URL_ESTOQUES}/${estoque.id}`, estoque);
  }

  remover(id: string): Observable<Estoque> {
    return this.httpClient.delete<Estoque>(`${this.URL_ESTOQUES}/${id}`)
  }
}
