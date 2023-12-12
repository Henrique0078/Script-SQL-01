
import { PrismaClient as PrismaClientAntigo} from "../../prisma/databases/antigoprisma";
import { PrismaClient as PrismaClientNovo } from "../../prisma/databases/novoprisma";
import BancaoGrupoDeUsuariosService from "../Model/Service/Bancao/bancaoGrupoDeUsuariosService";
import ClientesProdutosService from "../Model/Service/ClientesProdutosService";
import ContatosService from "../Model/Service/ContatosService";
import EnderecosService from "../Model/Service/EnderecosService";
import FornecedoresService from "../Model/Service/FornecedoresService";
import ListasPrecosProdutos from "../Model/Service/ListasPrecosProdutos";
import ListasPrecos from "../Model/Service/ListasPrecosService";
import ParametrosService from "../Model/Service/ParametrosService";
import PedidosVendaItensService from "../Model/Service/PedidosVendaItensService";
import PedidosVendaPagamentosService from "../Model/Service/PedidosVendaPagamentosService";
import PedidosVendaService from "../Model/Service/PedidosVendaService";
import ProdutosService from "../Model/Service/ProdutosService";
import TransportadoreService from "../Model/Service/TransportadoresService";
import VendedoresUsuarios from "../Model/Service/VendedoresUsuariosService";
import CertificadoService from "../Model/Service/certificadoService";
import ClientesService from "../Model/Service/clientesService";
import CondicoesPagamentoService from "../Model/Service/condicoesPagamentoService";
import VendedoresService from "../Model/Service/vendedoresService";

export class TrocaController{
	async troca(prismaNovo:PrismaClientNovo, prismaVelho: PrismaClientAntigo){
		const certificado = new CertificadoService();
		const vendedores = new VendedoresService(); //funfou
		const condicao_pagamento = new CondicoesPagamentoService();
		const clientes = new ClientesService();
		const enderecos = new EnderecosService();
		const contatos = new ContatosService();
		const fornecedores = new FornecedoresService();
		//const grupos_usuarios = new GruposUsuariosService();
		const vendedores_usuarios = new VendedoresUsuarios();
		const bancao_grupo_usuarios = new BancaoGrupoDeUsuariosService();
		//const usuarios_grupos_usuarios = new UsuariosGruposUsuarios();
		//const permissoes = new PermissoesService();
		const parametros = new ParametrosService();
		const transportadores = new TransportadoreService();
		const produtos = new ProdutosService();
		const lista_preco = new ListasPrecos();
		const listas_precos_produtos = new ListasPrecosProdutos();
		const pedidos_venda = new PedidosVendaService();
		const pedidos_venda_itens = new PedidosVendaItensService();
		const pedidos_venda_pagamentos = new PedidosVendaPagamentosService();
		const clientes_produtos = new ClientesProdutosService();

		await certificado.troca(prismaNovo,prismaVelho);
		await vendedores.troca(prismaNovo,prismaVelho);
		await condicao_pagamento.troca(prismaNovo,prismaVelho);
		const condicaoPagamentoAntigaComMaiorPK = await prismaNovo.condicoes_pagamento.findFirst({
			orderBy: {
				id_cp: "desc",
			},
		},);
		await clientes.troca(condicaoPagamentoAntigaComMaiorPK.id_cp,prismaNovo,prismaVelho);
		await enderecos.troca(prismaNovo,prismaVelho);
		await contatos.troca(prismaNovo,prismaVelho);
		await fornecedores.troca(prismaNovo,prismaVelho);
		//await grupos_usuarios.troca(prismaNovo,prismaVelho); //vai ser feita em bancao_grupo_usuarios
		await bancao_grupo_usuarios.troca(prismaNovo,prismaVelho);
		await vendedores_usuarios.troca(prismaNovo,prismaVelho);
		//await usuarios_grupos_usuarios.troca(prismaNovo,prismaVelho);  //pode ficar vazia no inicio devido ao zerofill do grupoUsuarios
		//await permissoes.troca(prismaNovo,prismaVelho); //vai ser feita em bancao_grupo_usuarios
		await parametros.troca(prismaNovo,prismaVelho);
		await transportadores.troca(prismaNovo,prismaVelho);
		await produtos.troca(prismaNovo,prismaVelho);
		await lista_preco.troca(prismaNovo,prismaVelho);
		const listaPrecoNovaComMaiorPK = await prismaNovo.listas_precos.findFirst({
			orderBy: {
				id_lp: "desc",
			},
		});
		await listas_precos_produtos.troca(prismaNovo,prismaVelho);
		await pedidos_venda.troca(prismaNovo,prismaVelho);
		await pedidos_venda_itens.troca(listaPrecoNovaComMaiorPK.id_lp);
		await pedidos_venda_pagamentos.troca(prismaNovo,prismaVelho);
		await clientes_produtos.troca(prismaNovo,prismaVelho);
		console.log("-----------------------------------------------------");
		console.log("CABOOOOOOOOOOOOOOOOOOOOOOOOOOU");
	}
}
