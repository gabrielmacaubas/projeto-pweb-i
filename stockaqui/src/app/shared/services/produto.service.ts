import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Produto } from '../model/produto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  URL_PRODUTOS = 'https://json-server-pweb.gabrielmacaubas.repl.co/produtos';
  
  constructor(private httpClient: HttpClient) { }

  encontrar(idParaEdicao: string): Observable<Produto> {
    return this.httpClient.get<Produto>(`${this.URL_PRODUTOS}/${idParaEdicao}`);
  }
  
  encontrarPorEstoque(fk_estoque: string): Observable<Produto[]> {
    return this.httpClient.get<Produto[]>(`${this.URL_PRODUTOS}?fk_estoque=${fk_estoque}`);
  }

  inserir(produto: Produto): Observable<Produto> {
    if (produto.nome && produto.valor && produto.descricao) {
      if (!Number.isNaN(Number(produto.valor)) && Number(produto.valor) > 0) {
        return this.httpClient.post<Produto>(this.URL_PRODUTOS, produto);
      }
    }

    alert("Produto Inválido!");
    return new Observable<Produto>(observer => observer.error(new Error('Produto inválido!')));
  }

  atualizar(produto: Produto): Observable<Produto> {
    return this.httpClient.put<Produto>(`${this.URL_PRODUTOS}/${produto.id}`, produto);
  }

  remover(produtoRemovido: Produto): Observable<Produto> {
    if (produtoRemovido) {
      return this.httpClient.delete<Produto>(`${this.URL_PRODUTOS}/${produtoRemovido.id}`);
    }

    alert("Erro ao excluir!");
    return new Observable<Produto>(observer => observer.error(new Error('Produto inválido!')));
  }
  
}
