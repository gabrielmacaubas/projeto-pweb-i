export class Produto {
    nome: string | null;
    valor: number | null;
    descricao: string | null;

    constructor(fnome: string | null, fvalor: number | null, fdescricao:string | null, public id?: number) {
        this.nome = fnome;
        this.valor = fvalor;
        this.descricao = fdescricao;
    }
}
