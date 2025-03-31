import { cp } from "fs";
import { Cliente } from "../entidades/Cliente";
import { ClienteRepository } from "../repository/ClienteRepository";
import { listenerCount } from "process";
export class ClienteService {

    private repo: ClienteRepository
    constructor() {
        this.repo = new ClienteRepository();
    }

    public async listarClientes(): Promise<Cliente[]> {

        return await this.repo.listarClientes()
    }


    public async buscarPorCpf(cpf: string): Promise<Cliente[]> {
        let lista: Cliente[] = []
        lista = await this.repo.buscarPorCpf(cpf)
        if (!cpf || cpf.trim().length === 0) {
            console.log("CPF não pode ser vazio.");
        }
        const cpfRegex = /^\d+$/;
        if (!cpfRegex.test(cpf)) {
            console.log(("CPF deve conter apenas números."));
        }
        if (lista.length != 0) {
            console.log(" ")
            console.table(lista)
        }
        else {
            console.log("Nao encontramos esse cpf")
        }

        return lista
    }



    public async inserirCliente(nome: string, senha: string, cpf: string, email: string) {
        const nomevalido = /^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/; // Expressão regular para validar apenas letras e espaços
        if (!nomevalido.test(nome)) {
            console.log("Nome deve conter apenas letras.");
        return } 
        if (!cpf || cpf.length !== 11 || !/^\d{11}$/.test(cpf)) {
            console.log("O cpf deve conter apenas numeros")
        return}
        const valido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const emailValido = valido.test(email)
        if (!emailValido) {
            console.log("Email invalido")
        return}
        return await this.repo.inserirCliente(nome, senha, cpf, email);

    }

    public async deletarCliente(cpf: string): Promise<Cliente[]> {
        let lista: Cliente[] = []
        lista = await this.repo.deletarCliente(cpf)
        console.log("digite o cpf certo para poder excluir o cliente")
        return lista



    }

    public async atualizarcliente(email: string, senha: string) {
        let lista: Cliente[] = []
        lista = await this.repo.atualizarcliente(email, senha)
        return lista
    }
    

}

