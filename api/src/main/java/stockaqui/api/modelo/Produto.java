package stockaqui.api.modelo;

import jakarta.persistence.*;
import lombok.*;
import stockaqui.api.produto.DadosCadastroProduto;

@Table(name = "produtos")
@Entity(name = "Produto")
@Getter
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(of = "id")
public class Produto {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nome;
    private double valor;
    private String descricao;

    @ManyToOne
    private Estoque estoque;

    public Produto(DadosCadastroProduto dados, Estoque estoque) {
        this.nome = dados.nome();
        this.valor = dados.valor();
        this.descricao = dados.descricao();
        this.estoque = estoque;
    }
}
