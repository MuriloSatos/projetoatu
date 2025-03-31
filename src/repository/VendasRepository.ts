import { Pool } from "pg"
import { Vendas } from "../entidades/Vendas"
import { Database } from "./Database"




export class VendasRepository {

    private pool: Pool;

    constructor() {
        this.pool = Database.iniciarConexao();
    }

    async listarVendas(): Promise<Vendas[]> {

        const query = "SELECT * FROM sistema.vendas";
        const result = await this.pool.query(query);

        const listaVendas: Vendas[] = [];

        for (const row of result.rows) {

            const vendas1 = new Vendas(row.email, row.codigoproduto, row.datavenda, row.codigovendas, row.pecaquantidade, row.valortotal, row.statusvendas)
            listaVendas.push(vendas1);

        }


        return listaVendas;
    }
    
    public async inserirVenda(email: string, codigoproduto: number, datavenda: string, codigovendas: number, pecaquantidade: number, valortotal: number, statusvendas: string) {
        let query = "INSERT INTO sistema.vendas (email,codigoproduto,datavenda,codigovendas,pecaquantidade,valortotal,statusvendas) VALUES ($1,$2,$3,$4,$5,$6,$7)"
        await this.pool.query(query, [email, codigoproduto, datavenda, codigovendas, pecaquantidade, valortotal, statusvendas]);

    }


    async buscarcodvenda(codigovendas: number): Promise<Vendas[]> {
        let query = "SELECT * FROM sistema.vendas where codigovendas = $1"
        let result = await this.pool.query(query, [codigovendas])

        const listaVendas: Vendas[] = [];

        for (const row of result.rows) {
            const vendas = new Vendas(row.email, row.codigoproduto, row.datavenda, row.codigoproduto, row.pecaquantidade, row.valortotal, row.statusvendas)
            listaVendas.push(vendas)

        }
        return listaVendas;
    }

    public async deletarVenda(codigovendas: number) {
        const query = 'DELETE FROM sistema.vendas WHERE codigovendas = $1'
        const result = await this.pool.query(query, [codigovendas])
        return result.rows

    }

    public async atualizarvenda(cocodigovendas : number, statusvendas: string) {
        const query = 'UPDATE sistema.vendas SET statusvendas = $2 WHERE codigovendas = $1;'
        const result = await this.pool.query(query, [cocodigovendas ,statusvendas])
        return result.rows
    }


}