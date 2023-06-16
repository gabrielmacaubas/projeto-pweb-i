export class Produto {
    id?: string;
    nome = '';
    valor: number;
    descricao = '';
    fk_estoque = '';

    constructor(id?: string, produto: Produto = {nome: '', valor: 0, descricao: '', fk_estoque: ''}) {
        this.id = id;
        this.nome = produto.nome;
        this.valor = produto.valor;
        this.descricao = produto.descricao;
        this.fk_estoque = produto.fk_estoque;
    }
}
