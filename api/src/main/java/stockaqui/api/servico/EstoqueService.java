package stockaqui.api.servico;

import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import stockaqui.api.estoque.EstoqueRepository;
import stockaqui.api.modelo.Estoque;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class EstoqueService {

    @Autowired
    private EstoqueRepository estoqueRepository;

    public List<Estoque> listarEstoques() {
        return this.estoqueRepository.findAll();
    }

    public Estoque getEstoquePorId(Long idEstoque) {
        return this.estoqueRepository.findById(idEstoque).orElse(null);
    }

    public List<Estoque> listarEstoquesCheios() {
        return this.estoqueRepository.findAll()
                .stream().filter(estoque -> estoque.getCapacidade() == estoque.getOcupacao())
                .collect(Collectors.toList());
    }

    @Transactional
    public Estoque inserirOuAtualizar(Estoque estoque) {
        Estoque estoqueInserido = this.estoqueRepository.save(estoque);
        if (estoqueInserido.getCapacidade() <= 0) {
            throw new RuntimeException("Menor ou igual a zero");
        }

        return estoqueInserido;
    }

    public void apagar(Long id) {
        this.estoqueRepository.deleteById(id);
    }
}
