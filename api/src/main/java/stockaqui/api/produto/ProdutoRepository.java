package stockaqui.api.produto;

import org.springframework.data.jpa.repository.JpaRepository;
import stockaqui.api.modelo.Produto;

public interface ProdutoRepository extends JpaRepository<Produto, Long> {
}
