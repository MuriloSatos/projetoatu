


import { ClienteService } from "./service/ClienteService";
import { ProdutoService } from "./service/ProdutoService";
import { ClienteRepository } from "./repository/ClienteRepository";
import { Vendas } from "./entidades/Vendas";
import { VendasService } from "./service/VendasService";
import { ClienteView } from "./View/ClienteView";
import { ProdutoView } from "./View/ProdutoView";
import { VendaView } from "./View/VendaView";


const servico2 = new ClienteView()
servico2.exibirMenu()

/*
const servico5 = new ProdutoView()
servico5.exibirMenu()
*/
/*
 const servico3 = new VendaView()
servico3.exibirMenu()
*/

/*
//const servico = new ClienteService();
//async function teste() {
//  console.table(await servico.listarClientes())
//}
//teste()
/* const servico1 = new ProdutoService();
async function teste1() {

 console. table(await servico1.listarProdutos);
 servico1.inserirProduto(4,"bicicleta montada","bicicleta",1000,"29","gios")
 console.table(await servico1.listarProdutos())

}
teste1()
servico1.listarProdutos();
*/

/*
const servico4 = new VendasService();

async function teste2() {
    

    console.table(await servico4.listarVendas())
    servico4.inserirVenda("mu@gmail.com",14,"12-02-2025",3,10,1099,"vendida")
    
    console.table(await servico4.listarVendas())

}

teste2()
servico4.listarVendas()

/*
 const servico7 = new ClienteService();
async function teste5() {
   
    console. table(await servico7.listarClientes);
    servico7.inserirCliente("Victor2", "victor3", "98765432101","victor13@gmail.com");
    console.table(await servico7.listarClientes())

}
teste5()
servico7.listarClientes()
*/

/*
async function vendas(){
    const ven = new VendasService()
    console.table(await ven.listarVendas())
}
vendas()
*/

