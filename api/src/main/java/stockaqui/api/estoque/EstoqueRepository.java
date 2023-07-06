package stockaqui.api.estoque;

import org.springframework.data.jpa.repository.JpaRepository;
import stockaqui.api.modelo.Estoque;

public interface EstoqueRepository extends JpaRepository<Estoque, Long> {
}
