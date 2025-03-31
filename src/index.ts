import PromptSync from "prompt-sync";
import { ClienteView } from "./View/ClienteView";
import { ProdutoView } from "./View/ProdutoView";
import { VendaView } from "./View/VendaView";

export class MenuPrincipal {
    private servico: ClienteView;
    private servico1: ProdutoView;
    private servico2: VendaView;
    private prompt: PromptSync.Prompt;

    constructor() {
        this.servico = new ClienteView();
        this.servico1 = new ProdutoView();
        this.servico2 = new VendaView();
        this.prompt = PromptSync(); // Instância única de PromptSync
    }

    // Função para exibir o menu e tratar as opções
    async exibirMenuPrincipal() {
        console.log(" ");
        console.log("Menu Principal");
        console.log(" ");
        console.log("1- Menu de Clientes");
        console.log("2- Menu de Produtos");
        console.log("3- Menu de Vendas");
        console.log("4- Sair");
        console.log(" ");

        const opcao = this.prompt("Selecione uma das opções acima: "); // Usando this.prompt

        switch (opcao) {
            case "1":
                await this.servico.exibirMenu(); // Acesso correto ao método de ClienteView
                break;
            case "2":
                await this.servico1.exibirMenu(); // Acesso correto ao método de ProdutoView
                break;
            case "3":
                await this.servico2.exibirMenu(); // Acesso correto ao método de VendaView
                break;
            case "4":
                console.log("Você saiu...");
               
                break;
            default:
                console.log("Opção inválida, digite de 1 a 4");
                await this.exibirMenuPrincipal(); // Recursão para tentar novamente
                break;
        }
    }
}

// Criação da instância e chamada do menu principal
const menu = new MenuPrincipal();
menu.exibirMenuPrincipal(); // Chamando o método para exibir o menu
