export class Produto {
    nome: string | null;
    valor: number | null;
    descricao: string | null;
    fk_estoque: number | null;

    constructor(fnome: string | null, fvalor: number | null, fdescricao:string | null, fk: number, public id?: number) {
        this.nome = fnome;
        this.valor = fvalor;
        this.descricao = fdescricao;
        this.fk_estoque = fk;
    }
}
