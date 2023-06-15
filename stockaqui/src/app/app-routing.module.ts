import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroEstoqueComponent } from './estoque/cadastro-estoque/cadastro-estoque.component';
import { CadastroProdutoComponent } from './produto/cadastro-produto/cadastro-produto.component';
import { ListagemEstoqueComponent } from './estoque/listagem-estoque/listagem-estoque.component';
import { ListagemProdutoComponent } from './produto/listagem-produto/listagem-produto.component';
import { HomeComponent } from './layout/home/home.component';

const routes: Routes = [
  {
    path: 'cadastroestoque',
    component: CadastroEstoqueComponent
  },
  
  {
    path: 'listagemestoque',
    component: ListagemEstoqueComponent
  },
  {
    path: 'editaestoque/:id',
    component: CadastroEstoqueComponent
  },
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'listagemproduto/:idestoque',
    component: ListagemProdutoComponent
  },
  {
    path: 'listagemproduto/:idestoque/cadastroproduto',
    component: CadastroProdutoComponent
  },
  {
    path: 'listagemproduto/:idestoque/editaproduto/:idproduto',
    component: CadastroProdutoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
