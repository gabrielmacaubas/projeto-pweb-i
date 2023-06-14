import { Produto } from "./produto";

export class Estoque {
    nome: string | null;
    capacidade: number | null;
    descricao: string | null;
    produtos: Produto[] = [];
    ocupacao: number = 0;

    constructor(fnome: string | null, fdescricao:string | null, fcapacidade: number | null, public id?: number) {
        this.nome = fnome;
        this.capacidade = fcapacidade;
        this.descricao = fdescricao;
    }
}
