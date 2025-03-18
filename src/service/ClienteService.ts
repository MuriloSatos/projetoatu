import { cp } from "fs";
import { Cliente } from "../entidades/Cliente";
import { ClienteRepository } from "../repository/ClienteRepository";
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
        if (lista.length==0 ) {
            throw new Error("Nao encontrei o cpf " + cpf)
        }
        else {
            console.log("encontrei o cpf " + lista)
        }
        
        return lista
    }

    public async inserirCliente(nome: string, senha: string, cpf: string, email: string) {
        const valido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const emailValido = valido.test(email)
        if (!emailValido) {
            throw new Error("Email invalido")
        }
        return await this.repo.inserirCliente(nome, senha, cpf, email);
    }

    public async deletarCliente(cpf: string):Promise<Cliente[]>{
        let lista: Cliente[] = []
        lista = await this.repo.deletarCliente(cpf)
        return lista
      


    }
    
    public async atualizarcliente(email : string,senha : string){
        let lista : Cliente [] = []
        lista = await this.repo.atualizarcliente(email , senha)
        return lista
    }

}

