const prompt = require("prompt-sync")
import promptSync from "prompt-sync";
import { ProdutoService } from "../service/ProdutoService";
import { ProdutoRepository } from "../repository/ProdutoRepository";








export class ProdutoView {
    private produto: ProdutoService;
    private prompt: promptSync;

    constructor() {
        this.produto = new ProdutoService()
        this.prompt = promptSync();
    }


    public async exibirMenu(): Promise<void> {
        console.log("")
        console.log("1 - Listar Produto")
        console.log("2 - Inserir Produto")
        console.log("3 - Buscar produto")
        console.log("4 - Deletar produto")
        console.log("5 - Sair")
        console.log("")



        let pergunta = this.prompt("Selecione alguma das opções acima  ")
        switch (pergunta) {
            case "1":
                console.table(await this.produto.listarProdutos())
                this.exibirMenu()
                break;
            case "2":
                let codigoproduto1 = this.prompt("Qual o codigo do produto: ")
                let nomeproduto1 = this.prompt("Qual o tipo do produto: ")
                let tipoproduto1 = this.prompt("Qual o tipo do produto: ")
                let preco1 = this.prompt("Qual o preco do produto: ")
                let tamanhoproduto1 = this.prompt("Qual o tamanho do produto: ")
                let marcaproduto1 = this.prompt("Qual a marca do produto: ")
                await this.produto.inserirProduto(codigoproduto1, nomeproduto1, tipoproduto1, preco1, tamanhoproduto1, marcaproduto1)
                this.exibirMenu()
                break;
            case "3":
                let buscar1 = this.prompt("Digite o codigo  do produto que deseja buscar: ")
                console.table(await this.produto.buscarcod(buscar1))
                this.exibirMenu()
                break;
            case "4":
                let deleteproduto = this.prompt("Digite o codigo do produto que deseja excluir: ")
                await this.produto.deletarProduto(deleteproduto)
                console.table(await this.produto.listarProdutos())
                this.exibirMenu()

                break;
            case "5":
                console.log("Voce saiu...")
                break;
        }
    }
}