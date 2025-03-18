const prompt = require("prompt-sync")
import { ClienteService } from "../service/ClienteService";
import promptSync from "prompt-sync";

export class ClienteView {
    private cliente: ClienteService;
    private prompt: promptSync;

    constructor() {
        this.cliente = new ClienteService()
        this.prompt = promptSync();
    }


    public async exibirMenu(): Promise<void> {
        console.log("")
        console.log("1 - Listar clietes")
        console.log("2 - Inserir cliente")
        console.log("3 - Buscar cliente por cpf")
        console.log("4 - Deletar cliente")
        console.log("5 - Atualizar cliente ")
        console.log("6 - Sair")
        console.log("")



        let pergunta = this.prompt("Selecione alguma das opções acima  ")
        switch (pergunta) {
            case "1":
                console.table(await this.cliente.listarClientes())
                this.exibirMenu()
                break;
            case "2":
                let nome = this.prompt("Qual o nome do cliente ")
                let senha = this.prompt("Qual a senha ")
                let cpf = this.prompt("Qual o cpf do cliente ")
                let email = this.prompt("Digite o email ")
                await this.cliente.inserirCliente(nome, senha, cpf, email)
                this.exibirMenu()
                break;
            case "3":
                let cpfusuario = this.prompt("Digite o cpf do usuario que deseja buscar: ")
                console.table(await this.cliente.buscarPorCpf(cpfusuario))
                this.exibirMenu()

                break;
            case "4":
                let deletecliente = this.prompt("Digite o cpf do cliente que deseja excluir: ")
                await this.cliente.deletarCliente(deletecliente)
                console.table(await this.cliente.listarClientes())
                this.exibirMenu()
                break;
            case "5":
                let atualizacliente = this.prompt("Qual o email do cliente que voce deseja mudar: ")
                let cliente1 = this.prompt("Digite a nova senha do cliente: ")
                await this.cliente.atualizarcliente(atualizacliente , cliente1 )
                console.table(await this.cliente.listarClientes())
                this.exibirMenu()
                break;
            case "6":
                console.log("Voce saiu...")
                break;
        }
    }
}