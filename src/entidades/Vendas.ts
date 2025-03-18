export class Vendas {
    private email : string;
    private codigoproduto : number;
    private datavenda : Date;
    private codigovendas : number;
    private pecaquantidade : number; 
    private valortotal : number;
    private statusvendas : string;



    constructor(email : string,codigoproduto : number,datavenda : Date,codigovendas : number,pecaquantidade : number,valortotal : number,statusvendas : string){
        this.email =  email;
        this.codigoproduto = codigoproduto;
        this.datavenda = datavenda;
        this.codigovendas =  codigovendas;
        this.pecaquantidade = pecaquantidade;
        this.valortotal = valortotal;
        this.statusvendas = statusvendas;
    }

}
