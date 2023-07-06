import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { RouterLink } from '@angular/router';

import { CadastroEstoqueComponent } from './cadastro-estoque/cadastro-estoque.component';
import { ListagemEstoqueComponent } from './listagem-estoque/listagem-estoque.component';


@NgModule({
  declarations: [
    CadastroEstoqueComponent,
    ListagemEstoqueComponent
  ],
  exports: [
    CadastroEstoqueComponent,
    ListagemEstoqueComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatCardModule,
    MatDividerModule,
    MatIconModule,
    MatButtonModule,
    FormsModule,
    MatInputModule,
    RouterLink,
    MatSnackBarModule,
  ]
})
export class EstoqueModule { }
