package stockaqui.api.servico;

import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import stockaqui.api.estoque.EstoqueRepository;
import stockaqui.api.modelo.Estoque;
import stockaqui.api.produto.ProdutoRepository;
import stockaqui.api.modelo.Produto;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class ProdutoService {

    @Autowired
    private ProdutoRepository produtoRepository;

    @Autowired
    private EstoqueService estoqueService;

    public List<Produto> listarProdutosPorEstoque(Estoque estoque) {
        return this.produtoRepository.findAll().stream()
                .filter(produto -> produto.getEstoque() == estoque)
                .collect(Collectors.toList());
    }

    public Produto getProdutoPorId(Long idProduto) {
        return this.produtoRepository.findById(idProduto).orElse(null);
    }

    @Transactional
    public Produto inserirOuAtualizar(Produto produto) {
        Produto produtoInserido = this.produtoRepository.save(produto);
        if (produtoInserido.getValor() <= 0) {
            throw new RuntimeException("Menor ou igual a zero");
        }
        if (produtoInserido.getEstoque().getOcupacao()+1 > produtoInserido.getEstoque().getCapacidade()) {
            throw new RuntimeException("Estoque cheio");
        }

        Estoque estoque = produto.getEstoque();
        estoque.setOcupacao(estoque.getOcupacao()+1);

        this.estoqueService.inserirOuAtualizar(estoque);

        return produtoInserido;
    }

    public void apagar(Long id) {
        this.produtoRepository.deleteById(id);
    }
}
