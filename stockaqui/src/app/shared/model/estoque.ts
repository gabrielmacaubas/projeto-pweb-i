export class Estoque {
    id?: string;
    nome = '';
    capacidade: number;
    descricao = '';
    ocupacao: number;

    constructor(id?:string, estoque: Estoque = {nome: '', capacidade: 0, descricao: '', ocupacao: 0}) {
        this.id = id;
        this.nome = estoque.nome;
        this.capacidade = estoque.capacidade;
        this.descricao = estoque.descricao;
        this.ocupacao = estoque.ocupacao;
    }
}
