package stockaqui.api.modelo;

import jakarta.persistence.*;
import lombok.*;
import stockaqui.api.estoque.DadosCadastroEstoque;

@Table(name = "estoques")
@Entity(name = "Estoque")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(of = "id")
public class Estoque {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String nome;
    private int capacidade;
    private String descricao;
    private int ocupacao;

    public Estoque(DadosCadastroEstoque dados) {
        this.nome = dados.nome();
        this.capacidade = dados.capacidade();
        this.descricao = dados.descricao();
        this.ocupacao = 0;
    }
}
