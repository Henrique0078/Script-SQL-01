import ClientesProdutosService from "../Model/Service/ClientesProdutosService";
import ContatosService from "../Model/Service/ContatosService";
import EnderecosService from "../Model/Service/EnderecosService";
import FornecedoresService from "../Model/Service/FornecedoresService";
import GruposUsuariosService from "../Model/Service/GruposUsuariosService";
import ListasPrecosProdutos from "../Model/Service/ListasPrecosProdutos";
import ListasPrecos from "../Model/Service/ListasPrecosService";
import ParametrosService from "../Model/Service/ParametrosService";
import PedidosVendaItensService from "../Model/Service/PedidosVendaItensService";
import PedidosVendaPagamentosService from "../Model/Service/PedidosVendaPagamentosService";
import PedidosVendaService from "../Model/Service/PedidosVendaService";
import PermissoesService from "../Model/Service/PermissoesService";
import ProdutosService from "../Model/Service/ProdutosService";
import TransportadoreService from "../Model/Service/TransportadoresService";
import UsuariosGruposUsuarios from "../Model/Service/UsuariosGruposUsuariosService";
import VendedoresUsuarios from "../Model/Service/VendedoresUsuariosService";
import CertificadoService from "../Model/Service/certificadoService";
import ClientesService from "../Model/Service/clientesService";
import CondicoesPagamentoService from "../Model/Service/condicoesPagamentoService";
import VendedoresService from "../Model/Service/vendedoresService";

export class TrocaController{
	async troca(){
		const certificado = new CertificadoService();
		const vendedores = new VendedoresService(); //funfou
		const condicao_pagamento = new CondicoesPagamentoService();
		const clientes = new ClientesService();
		const enderecos = new EnderecosService();
		const contatos = new ContatosService();
		const fornecedores = new FornecedoresService();
		const grupos_usuarios = new GruposUsuariosService();
		const vendedores_usuarios = new VendedoresUsuarios();
		const usuarios_grupos_usuarios = new UsuariosGruposUsuarios();
		const permissoes = new PermissoesService();
		const parametros = new ParametrosService();
		const transportadores = new TransportadoreService();
		const produtos = new ProdutosService();
		const lista_preco = new ListasPrecos();
		const listas_precos_produtos = new ListasPrecosProdutos();
		const pedidos_venda = new PedidosVendaService();
		const pedidos_venda_itens = new PedidosVendaItensService();
		const pedidos_venda_pagamentos = new PedidosVendaPagamentosService();
		const clientes_produtos = new ClientesProdutosService();

		certificado.troca();
		vendedores.troca();
		condicao_pagamento.troca();
		clientes.troca();
		enderecos.troca();
		contatos.troca();
		fornecedores.troca();
		grupos_usuarios.troca();
		vendedores_usuarios.troca();
		usuarios_grupos_usuarios.troca();
		permissoes.troca();
		parametros.troca();
		transportadores.troca();
		produtos.troca();
		lista_preco.troca();
		listas_precos_produtos.troca();
		pedidos_venda.troca();
		pedidos_venda_itens.troca();
		pedidos_venda_pagamentos.troca();
		clientes_produtos.troca();
	}
}
