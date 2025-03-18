import { Pool } from "pg";
import { Database } from "./Database";
import { Cliente } from "../entidades/Cliente"
import { isExclamationToken } from "typescript";


export class ClienteRepository {

    private pool: Pool;

    constructor() {
        this.pool = Database.iniciarConexao();
    }

    async listarClientes(): Promise<Cliente[]> {

        const query = "SELECT * FROM sistema.cliente";
        const result = await this.pool.query(query);

        const listaClientes: Cliente[] = [];

        for (const row of result.rows) {
            const cliente = new Cliente(row.nome, row.senha, row.cpf, row.email);
            listaClientes.push(cliente);

        }

        return listaClientes;
    }
    async buscarPorCpf(cpf: string): Promise<Cliente[]> {
        let query = "select * from sistema.cliente where cpf = $1"
        let result = await this.pool.query(query, [cpf])

        const listaClientes: Cliente[] = [];

        for (const row of result.rows) {
            const cliente = new Cliente(row.nome, row.senha, row.cpf, row.email);
            listaClientes.push(cliente)

        }
        return listaClientes;
    }



    public async inserirCliente(nome: string, senha: string, cpf: string, email: string) {
        let query = "INSERT INTO sistema.cliente (nome, senha,cpf ,email ) VALUES ($1,$2,$3,$4)"
        await this.pool.query(query, [nome, senha, cpf, email]);



    }

    public async deletarCliente(cpf: string) {
        const query = 'DELETE FROM sistema.cliente where cpf = $1'
        const result = await this.pool.query(query, [cpf])
        return result.rows

    }


    public async atualizarcliente(email : string,senha : string){
        const query = 'UPDATE sistema.cliente  SET senha = $2 WHERE email = $1;'
        const result = await this.pool.query(query,[email , senha])
        return result.rows
    }

}
