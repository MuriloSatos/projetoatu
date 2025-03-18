import { VendasService } from "../service/VendasService";
const prompt = require("prompt-sync")
import promptSync from "prompt-sync";

export class VendaView {
    private venda: VendasService
    private prompt: promptSync;

    constructor() {
        this.venda = new VendasService
        this.prompt = promptSync();
    }


    public async exibirMenu(): Promise<void> {
        console.log("")
        console.log("1 - Listar venda ")
        console.log("2 - Inserir venda ")
        console.log("3 - Buscar venda por codigo venda ")
        console.log("4 - Deletar venda ")
        console.log("5 - Sair")
        console.log("")
        


        let pergunta = this.prompt("Selecione alguma das opções acima  ")
        switch (pergunta) {
            case "1":
                console.table(await this.venda.listarVendas())
                this.exibirMenu()
                break;
            case "2":
                let email = this.prompt("Qual o email do cliente que fez a venda: ")
                let codigoproduto = this.prompt("Qual o codigo do produto:  ")
                let datavenda = this.prompt("Qual a data da venda: ")
                let cocodigovendas = this.prompt("Qual o codigo da venda: ")
                let pecaquantidade = this.prompt("Qual a quantidade de produtos:  ")
                let valortotal = this.prompt("Valor total da venda: ")
                let statusvendas = this.prompt("Qual o status da venda vendida ou não vendida: ")
                await this.venda.inserirVenda(email,codigoproduto,datavenda,cocodigovendas,pecaquantidade,valortotal,statusvendas)
                this.exibirMenu()
                break;
            case "3":
                let buscavenda = this.prompt("Digite o codigo da venda que deseja buscar: ")
                console.table(await this.venda.buscarcodvenda(buscavenda))
                this.exibirMenu()
            
                
                break;
            case "4":
                let deletevenda = this.prompt("Digite o codigo da venda que deseja excluir: ")
                await this.venda.deletarVenda(deletevenda)
                console.table(await this.venda.listarVendas())
                this.exibirMenu()
        
                break;
            case "5":
                console.log("Voce saiu...")
                break;
        }
    }
}