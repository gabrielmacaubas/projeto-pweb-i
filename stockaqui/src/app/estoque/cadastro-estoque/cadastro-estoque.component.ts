import { Component } from '@angular/core';
import { Estoque } from '../../shared/model/estoque';
import { ESTOQUES } from '../../shared/model/ESTOQUES';
import { ThisReceiver } from '@angular/compiler';

@Component({
  selector: 'app-cadastro-estoque',
  templateUrl: './cadastro-estoque.component.html',
  styleUrls: ['./cadastro-estoque.component.css']
})


export class CadastroEstoqueComponent {
    estoque: Estoque;
    estoques: Estoque[];

    constructor() {
        this.estoque = new Estoque(null, null, null);
        this.estoques = ESTOQUES;
    }

    ngOnInit(): void {

    }

    inserirEstoque(): void {
        this.estoques.push(this.estoque);
        this.estoque = new Estoque(null, null, null);
        console.log(ESTOQUES);
    }
}
