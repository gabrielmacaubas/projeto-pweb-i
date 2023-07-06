import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Produto } from 'src/app/shared/model/produto';
import { EstoqueService } from 'src/app/shared/services/estoque.service';
import { MensagemService } from 'src/app/shared/services/mensagem.service';


@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  URL_PRODUTOS = 'http://localhost:8080/produtos';
  
  constructor(private estoqueService: EstoqueService, private mensagemService: MensagemService, private httpClient: HttpClient) {
  }

  encontrar(idParaEdicao: string): Observable<Produto> {
    return this.httpClient.get<Produto>(`${this.URL_PRODUTOS}/encontrar/${idParaEdicao}`)
  }
  
  encontrarPorEstoque(fk_estoque: string): Observable<Produto[]> {
    return this.httpClient.get<Produto[]>(this.URL_PRODUTOS + '/' + fk_estoque);
  }

  inserir(produto: Produto): Observable<Object> {
    if (produto.nome && produto.valor && produto.descricao) {
      if (!Number.isNaN(Number(produto.valor)) && Number(produto.valor) > 0) {
        return this.httpClient.post<Produto>(this.URL_PRODUTOS, produto, );  
      }
    }

    this.mensagemService.error('Estoque inválido!');
    return new Observable<Produto>(observer => observer.error(new Error('Produto inválido!')));
  }

  atualizar(produto: Produto): Observable<Produto> {
    return this.httpClient.put<Produto>(`${this.URL_PRODUTOS}/${produto.id}`, produto);
  }

  remover(produtoRemovido: Produto): Observable<Produto> | any {
    if (produtoRemovido) {
      return this.httpClient.delete<Produto>(`${this.URL_PRODUTOS}/${produtoRemovido.id}`)
    }

    return new Observable<void>(observer => observer.error(new Error('Produto inválido!')));
  }
  
}
