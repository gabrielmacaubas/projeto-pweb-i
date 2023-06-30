import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CadastroEstoqueComponent } from 'src/app/estoque/cadastro-estoque/cadastro-estoque.component';
import { CadastroProdutoComponent } from 'src/app/produto/cadastro-produto/cadastro-produto.component';
import { ListagemEstoqueComponent } from 'src/app/estoque/listagem-estoque/listagem-estoque.component';
import { ListagemProdutoComponent } from 'src/app/produto/listagem-produto/listagem-produto.component';
import { HomeComponent } from 'src/app/layout/home/home.component';
import { AccountComponent } from 'src/app/layout/account/account.component';

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
  },
  {
    path: 'account',
    component: AccountComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
