export class Estoque {
    nome: string;
    descricao: string;
    capacidade: number;
    ocupacao: number;

    constructor(fnome: string, fcapacidade: number, fdescricao:string="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis, incidunt explicabo sapiente nisi facere sint nulla odio commodi consequatur repellat") {
        this.nome = fnome;
        this.capacidade = fcapacidade;
        this.descricao = fdescricao;
        this.ocupacao = 0;
    }
}
