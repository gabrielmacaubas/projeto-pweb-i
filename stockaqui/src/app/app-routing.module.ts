import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroEstoqueComponent } from './estoque/cadastro-estoque/cadastro-estoque.component';
import { ListagemEstoqueComponent } from './estoque/listagem-estoque/listagem-estoque.component';

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
    path: 'editaestoque/:nome',
    component: CadastroEstoqueComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
