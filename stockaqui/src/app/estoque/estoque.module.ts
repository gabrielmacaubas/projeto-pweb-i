import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroEstoqueComponent } from './cadastro-estoque/cadastro-estoque.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { ListagemEstoqueComponent } from './listagem-estoque/listagem-estoque.component';
import {MatDialogModule} from '@angular/material/dialog';


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
    MatInputModule
  ]
})
export class EstoqueModule { }
