import { PrismaClient as PrismaClientAntigo} from "../../../prisma/databases/antigoprisma";
import { PrismaClient as PrismaClientNovo } from "../../../prisma/databases/novoprisma";
import { ErrorResponse } from "../Error/ErrorResponse";
import { convertBigIntToString } from "../Utils";

export default class PedidosVendaService{
	async troca(prismaNovo:PrismaClientNovo, prismaAntigo: PrismaClientAntigo){
		try {
			const PedidosVendaAntigo = await prismaAntigo.pedidos_venda.findMany({});
			const PedidosVendaNovos = PedidosVendaAntigo.map((PedidosVenda)=>({
				id_pv: parseInt(convertBigIntToString(PedidosVenda.id)),
				numero_pv: PedidosVenda.numero > 0 ? PedidosVenda.numero : null,
				id_vendedor_pv: parseInt(convertBigIntToString(PedidosVenda.vendedor_id)) > 0 ? parseInt(convertBigIntToString(PedidosVenda.vendedor_id)) : null,
				id_cliente_pv: parseInt(convertBigIntToString(PedidosVenda.cliente_id)) > 0 ? parseInt(convertBigIntToString(PedidosVenda.cliente_id)) : null,
				id_usuario_pv: parseInt(convertBigIntToString(PedidosVenda.usuario_id)) > 0 ? parseInt(convertBigIntToString(PedidosVenda.usuario_id)) : null,
				desconto_pv: PedidosVenda.desconto,
				valor_bruto_pv: PedidosVenda.valor_bruto,
				valor_liquido_pv: PedidosVenda.valor_liquido,
				status_pv: PedidosVenda.status,
				observacoes_pv: PedidosVenda.observacoes,
				data_criacao_pv: PedidosVenda.data_criacao,
				cliente_contato_pv: PedidosVenda.cliente_contato,
				data_realizacao_pv: PedidosVenda.data_realizacao,
				data_sincronizacao_pv: PedidosVenda.data_sincronizacao,
				id_condicao_pagamento_pv: parseInt(convertBigIntToString(PedidosVenda.condicao_pagamento_id)) > 0 ? parseInt(convertBigIntToString(PedidosVenda.condicao_pagamento_id)) : null,
				entrega_cep_pv: PedidosVenda.entrega_cep,
				entrega_logradouro_pv: PedidosVenda.entrega_logradouro,
				entrega_numero_pv: PedidosVenda.entrega_numero,
				entrega_complemento_pv: PedidosVenda.entrega_complemento,
				entrega_bairro_pv: PedidosVenda.entrega_bairro,
				entrega_cidade_pv: PedidosVenda.entrega_cidade,
				entrega_uf_pv: PedidosVenda.entrega_uf,
				id_transportadores_pv: PedidosVenda.id_transportador_sirius > 0 ? PedidosVenda.id_transportador_sirius : null,
				id_modalidade_frete_pv: PedidosVenda.modalidade_frete > 0 ? PedidosVenda.modalidade_frete : null,
				id_cliente_escolheu_pv: PedidosVenda.id_pedido_cliente,
				pagamento_pv: null,
				troco_pv: null
			}));
			if(PedidosVendaNovos.length > 0){
				await prismaNovo.pedidos_venda.createMany({data: PedidosVendaNovos});
				const totalProdutos = await prismaNovo.pedidos_venda.count();
				const antigoCertiticado = await prismaAntigo.pedidos_venda.count();
				console.log(antigoCertiticado, " registros localizados em Pedidos venda antigo");
				console.log(totalProdutos, " registros adicionados em Pedidos venda novo");
				console.log("-----------------------------------------------------");
			}else{
				console.log("Pedidos Venda vazio");
			}
		} catch (error) {
			throw new ErrorResponse(500, "Erro interno do servidor ao trocar Pedidos Venda: " + error);
		}
	}
}
