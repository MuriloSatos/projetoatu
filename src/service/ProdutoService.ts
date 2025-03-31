import { Produto } from "../entidades/produto";
import { ProdutoRepository } from "../repository/ProdutoRepository";

export class ProdutoService {

    private repo: ProdutoRepository
    constructor() {
        this.repo = new ProdutoRepository();
    }

    public async listarProdutos(): Promise<Produto[]> {

        return await this.repo.listarProdutos()
    }


    public async buscarcod(codigoproduto: number): Promise<Produto[]> {
        let lista: Produto[] = []
        lista = await this.repo.buscarcod(codigoproduto)
        if (lista.length != 0) {
            console.log(" ")
            console.table(lista)
        }
        else {
            console.log("Nao encontramos esse codigo do produto")
        } return lista
    }

    public async inserirProduto(codigoproduto: number, nomeproduto: string, tipoproduto: string, preco: number, tamanhoproduto: string, marcaproduto: string) {
        if (isNaN(codigoproduto)) {
            console.log("O código do produto deve ser apenas numero.");
            return;
        }

        const nomevalido = /^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/;
        if (!nomevalido.test(nomeproduto)) {
            console.log("Nome do produto deve conter apenas letras.");
            return
        }
        const tipovalido = /^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/;
        if (!tipovalido.test(tipoproduto)) {
            console.log("Tipo do produto deve conter apenas letras.");
            return
        }
        if (preco <= 0) {
            console.log("O preço do produto deve ser um valor positivo.");
            return
        }
        if (tamanhoproduto.trim() === "") {
            console.log("O tamanho do produto não pode ser vazio.");
            return;
        }
        const marcaValida = /^[A-Za-zÀ-ÖØ-öø-ÿ]+$/; // Expressão regular para letras, incluindo caracteres acentuados
        if (!marcaValida.test(marcaproduto)) {
            console.log("A marca do produto deve conter apenas letras.");
            return;
        }console.log("Produto inserido com sucesso.")
        return await this.repo.inserirProduto(codigoproduto, nomeproduto, tipoproduto, preco, tamanhoproduto, marcaproduto);
      

    }

    public async deletarProduto(codigoproduto: number): Promise<Produto[]> {
        let lista: Produto[] = []
        lista = await this.repo.deletarProduto(codigoproduto)
        try {
        if (lista.length == 0) {
            console.log("Nao encontramos o codigo do produto para deletar ")
        }
        return lista
    } catch (err){
        throw new Error('Erro ao deletar produto:' , err.message)
    }


    }

    public async atualizarproduto(codigoproduto: number, preco: number) {
        try {
            const produtoExistente = await this.repo.buscarcod(codigoproduto)
            if (produtoExistente.length == 0) {
                console.log('Produto não encontrado para atualização.');
            }

            return await this.repo.atualizarproduto(codigoproduto, preco)
        } catch (err) {
            throw new Error('Erro ao atualizar o produto: ' + err.message);
        }
    }

}
