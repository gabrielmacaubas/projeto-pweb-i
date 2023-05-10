import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroEstoqueComponent } from './cadastro-estoque/cadastro-estoque.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CadastroEstoqueComponent
  ],
  exports: [
    CadastroEstoqueComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatCardModule,
    MatDividerModule,
    MatIconModule,
    MatButtonModule,
    FormsModule,
  ]
})
export class EstoqueModule { }
