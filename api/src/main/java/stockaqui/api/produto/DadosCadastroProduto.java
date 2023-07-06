package stockaqui.api.produto;

public record DadosCadastroProduto(String nome, double valor, String descricao, Long fk_estoque) {
}
