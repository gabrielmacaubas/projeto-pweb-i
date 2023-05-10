export class Estoque {
    nome: string | null;
    capacidade: string | null;
    ocupacao: number;

    constructor(fnome: string | null, fcapacidade: string | null) {
        this.nome = fnome;
        this.capacidade = fcapacidade;
        this.ocupacao = 0;
    }
}
