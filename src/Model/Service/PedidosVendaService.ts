import { prismaAntigo, prismaNovo } from "../../../prisma";
import { ErrorResponse } from "../Error/ErrorResponse";
import { convertBigIntToString } from "../Utils";

export default class PedidosVendaService{
	async troca(){
		try {
			const PedidosVendaAntigo = await prismaAntigo.pedidos_venda.findMany({});
			const PedidosVendaNovos = PedidosVendaAntigo.map((PedidosVenda)=>({
				id_pv: parseInt(convertBigIntToString(PedidosVenda.id)),
				numero_pv: PedidosVenda.numero,
				id_vendedor_pv: parseInt(convertBigIntToString(PedidosVenda.vendedor_id)),
				id_cliente_pv: parseInt(convertBigIntToString(PedidosVenda.cliente_id)),
				id_usuario_pv: parseInt(convertBigIntToString(PedidosVenda.usuario_id)),
				desconto_pv: PedidosVenda.desconto,
				valor_bruto_pv: PedidosVenda.valor_bruto,
				valor_liquido_pv: PedidosVenda.valor_liquido,
				status_pv: PedidosVenda.status,
				observacoes_pv: PedidosVenda.observacoes,
				data_criacao_pv: PedidosVenda.data_criacao,
				cliente_contato_pv: PedidosVenda.cliente_contato,
				data_realizacao_pv: PedidosVenda.data_realizacao,
				data_sincronizacao_pv: PedidosVenda.data_sincronizacao,
				id_condicao_pagamento_pv: parseInt(convertBigIntToString(PedidosVenda.condicao_pagamento_id)),
				entrega_cep_pv: PedidosVenda.entrega_cep,
				entrega_logradouro_pv: PedidosVenda.entrega_logradouro,
				entrega_numero_pv: PedidosVenda.entrega_numero,
				entrega_complemento_pv: PedidosVenda.entrega_complemento,
				entrega_bairro_pv: PedidosVenda.entrega_bairro,
				entrega_cidade_pv: PedidosVenda.entrega_cidade,
				entrega_uf_pv: PedidosVenda.entrega_uf,
				id_transportadores_pv: PedidosVenda.id_transportador_sirius,
				id_modalidade_frete_pv: PedidosVenda.modalidade_frete,
				id_cliente_encolheu_pv: PedidosVenda.id_pedido_cliente,
				pagamento_pv: null,
				troco_pv: null
			}));
			if(PedidosVendaNovos.length > 0){
				await prismaNovo.pedidos_venda.createMany({data: PedidosVendaNovos});
				const totalProdutos = await prismaNovo.pedidos_venda.count();
				const antigoCertiticado = await prismaAntigo.pedidos_venda.count();
				console.log(antigoCertiticado, " registros localizados em Pedidos venda antigo");
				console.log(totalProdutos, " registros adicionados em Pedidos venda novo");
			}
		} catch (error) {
			throw new ErrorResponse(500, "Erro interno do servidor ao trocar Pedidos Venda: " + error);
		}
	}
}