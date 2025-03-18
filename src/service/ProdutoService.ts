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


    public async buscarcod(codigoproduto:number): Promise<Produto[]> {
        let lista: Produto[] = []
        lista = await this.repo.buscarcod(codigoproduto)
     return lista 
    }

    public async inserirProduto(codigoproduto : number,nomeproduto : string,tipoproduto : string,preco : number ,tamanhoproduto : string,marcaproduto : string) {
        return await this.repo.inserirProduto(codigoproduto, nomeproduto, tipoproduto, preco,tamanhoproduto,marcaproduto);
    }

    public async deletarProduto(codigoproduto:number):Promise<Produto[]>{
        let lista: Produto[] = []
        lista = await this.repo.deletarProduto(codigoproduto)
        return lista
      


    }
    
}