import { Vendas } from "../entidades/Vendas";
import { VendasRepository } from "../repository/VendasRepository";

export class VendasService {

    private repo: VendasRepository
    constructor() {
        this.repo = new VendasRepository();
    }

    async listarVendas(): Promise<Vendas[]> {

        return await this.repo.listarVendas()
    }

    public async inserirVenda(email: string, codigoproduto: number, datavenda: string, codigovendas: number, pecaquantidade: number, valortotal: number, statusvendas: string) {
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (!emailRegex.test(email)) {
            console.log("Email inválido.");
            return;
        }

       
        if (isNaN(codigoproduto)) {
            console.log("O código do produto deve ser um número  .");
            return;
        }

        if (isNaN(codigovendas)) {
            console.log("O código da venda deve ser um número .");
            return;
        }
        if (!/^\d{2}\/\d{2}\/\d{4}$/.test(datavenda)) {
            console.log('Data de nascimento inválida. Use o formato DD/MM/AAAA.');
            return;
        }

        const [dia, mes, ano] = datavenda.split('/');
        const nascimentoFormatado = `${ano}-${mes}-${dia}`;

        const nascimento = new Date(nascimentoFormatado);

        if (isNaN(nascimento.getTime())) {
            console.log('Data de nascimento inválida. Certifique-se de que a data inserida é válida.');
            return;
        }

        const hoje = new Date();
        if (nascimento > hoje) {
            console.log('A data de nascimento não pode ser maior que a data de hoje.');
            return;
        }
        
        if (pecaquantidade <= 0) {
            console.log("A quantidade de peças deve ser um número inteiro positivo.");
            return;
        }

       
        if (valortotal <= 0) {
            console.log("O valor total da venda deve ser um valor positivo.");
            return;
        }

       
        const statusValido = ["pendente", "concluida", "cancelada"];
        if (!statusValido.includes(statusvendas.toLowerCase())) {
            console.log("Status da venda inválido. Os status válidos são: 'pendente', 'concluida', 'cancelada'.");
            return;
        }

        
        return await this.repo.inserirVenda(email, codigoproduto, datavenda, codigovendas, pecaquantidade, valortotal, statusvendas);
    }




    public async buscarcodvenda(codigovendas: number): Promise<Vendas[]> {
        let lista: Vendas[] = []
        lista = await this.repo.buscarcodvenda(codigovendas)
        if (lista.length != 0) {
            console.log(" ")
            console.table(lista)
        }
        else {
            console.log("Nao encontramos esse codigo venda")
        } return lista
    }

    public async deletarVenda(codigovendas: number): Promise<Vendas[]> {
        let lista: Vendas[] = []
        lista = await this.repo.deletarVenda(codigovendas)

        if (lista.length == 0) {
            console.log("Nao encontramos o codigo do produto para deletar ")
        }
        return lista



    }

    public async atualizarvenda(codigovendas: number, statusvendas: string){
     try {
        const vendaExistente = await this.repo.buscarcodvenda(codigovendas)
        if (vendaExistente.length == 0) {
            console.log('Produto não encontrado para atualização.');
        }

        return await this.repo.atualizarvenda(codigovendas,statusvendas)
    } catch (err) {
        throw new Error('Erro ao atualizar o produto: ' + err.message);
    }
}

}