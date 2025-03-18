
export class Produto {
    private codigoproduto : number;
    private nomeproduto : string;
    private tipoproduto : string;
    private preco : number ;
    private tamanhoproduto : string;
    private marcaproduto : string;

    constructor (codigoproduto : number,nomeproduto : string,tipoproduto : string,preco : number ,tamanhoproduto : string,marcaproduto : string){
        this.codigoproduto = codigoproduto;
        this.nomeproduto = nomeproduto;
        this.tipoproduto = tipoproduto;
        this.preco = preco;
        this.tamanhoproduto = tamanhoproduto;
        this.marcaproduto = marcaproduto;
    }

}