export class Estoque {
    id?: string;
    nome = '';
    capacidade = '';
    descricao = '';
    ocupacao?: number = 0;

    constructor(id?:string, estoque: Estoque = {nome: '', capacidade: '', descricao: ''}) {
        this.id = id;
        this.nome = estoque.nome;
        this.capacidade = estoque.capacidade;
        this.descricao = estoque.descricao;
    }
}
