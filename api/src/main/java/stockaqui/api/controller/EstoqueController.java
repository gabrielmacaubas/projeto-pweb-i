package stockaqui.api.controller;

import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import stockaqui.api.estoque.DadosCadastroEstoque;
import stockaqui.api.modelo.Estoque;
import stockaqui.api.servico.EstoqueService;

import java.util.List;


@RestController
@RequestMapping("/estoques")
public class EstoqueController {

    @Autowired
    private EstoqueService estoqueService;

    @GetMapping("/cheios")
    public List<Estoque> listarEstoquesCheios() {
        return this.estoqueService.listarEstoquesCheios();
    }

    @GetMapping("/{id}")
    public Estoque getEstoquePorId(@PathVariable("id") Long idEstoque) {
        return this.estoqueService.getEstoquePorId(idEstoque);
    }

    @GetMapping
    public List<Estoque> listarProdutos() {
        return this.estoqueService.listarEstoques();
    }

    @PostMapping
    public Estoque inserir(@RequestBody DadosCadastroEstoque dados) {
        return this.estoqueService.inserirOuAtualizar(new Estoque(dados));
    }

    @PutMapping("/{id}")
    public Estoque atualizar(@RequestBody Estoque estoqueEditado) {
        return this.estoqueService.inserirOuAtualizar(estoqueEditado);
    }

    @DeleteMapping("/{id}")
    public void apagar(@PathVariable("id") Long id) {
        this.estoqueService.apagar(id);
    }
}
