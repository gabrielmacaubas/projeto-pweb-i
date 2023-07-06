package stockaqui.api.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import stockaqui.api.produto.DadosCadastroProduto;
import stockaqui.api.modelo.Produto;
import stockaqui.api.modelo.Estoque;
import stockaqui.api.servico.EstoqueService;
import stockaqui.api.servico.ProdutoService;

import java.util.List;


@RestController
@RequestMapping("/produtos")
public class ProdutoController {

    @Autowired
    private ProdutoService produtoService;

    @Autowired
    private EstoqueService estoqueService;

    @PostMapping
    public Produto inserir(@RequestBody DadosCadastroProduto dados) {
        Estoque estoque = this.getEstoque(dados.fk_estoque());

        return this.produtoService.inserirOuAtualizar(new Produto(dados, estoque));
    }

    @GetMapping
    private Estoque getEstoque(long id) {
        return this.estoqueService.getEstoquePorId(id);
    }

    @GetMapping("/{fk_estoque}")
    public List<Produto> listarProdutos(@PathVariable("fk_estoque") Long idEstoque) {
        Estoque estoque = this.getEstoque(idEstoque);

        return this.produtoService.listarProdutosPorEstoque(estoque);
    }

    @GetMapping("/encontrar/{id}")
    public Produto getProdutoPorId(@PathVariable("id") Long idProduto) {
        return this.produtoService.getProdutoPorId(idProduto);
    }

    @PutMapping("/{id}")
    public Produto atualizar(@RequestBody Produto produtoEditado) {
        return this.produtoService.inserirOuAtualizar(produtoEditado);
    }

    @DeleteMapping("/{id}")
    public void apagar(@PathVariable("id") Long id) {
        Estoque estoque = this.getProdutoPorId(id).getEstoque();
        estoque.setOcupacao(estoque.getOcupacao()-1);

        this.estoqueService.inserirOuAtualizar(estoque);
        this.produtoService.apagar(id);
    }
}
