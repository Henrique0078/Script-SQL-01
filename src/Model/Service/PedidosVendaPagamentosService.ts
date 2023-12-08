import { prismaAntigo, prismaNovo } from "../../../prisma";
import { pedidos_venda_pagamentos } from "../../../prisma/databases/novoprisma";
import { ErrorResponse } from "../Error/ErrorResponse";
import { convertBigIntToString } from "../Utils";

export default class PedidosVendaPagamentosService{
	async troca(){
		try {
			const PedidosVendaPagamentosAntigos = await prismaAntigo.pedidos_venda_pagamentos.findMany({});
			const PedidosVendaPagamentosNovos: pedidos_venda_pagamentos[] = PedidosVendaPagamentosAntigos.map((PedidosVendaPagamentosAntigo)=>({
				id_pvp: parseInt(convertBigIntToString(PedidosVendaPagamentosAntigo.id)),
				id_pedido_pvp: parseInt(convertBigIntToString(PedidosVendaPagamentosAntigo.pedido_id)),
				forma_pagamento_pvp: PedidosVendaPagamentosAntigo.forma_pagamento,
				valor_pvp: PedidosVendaPagamentosAntigo.valor,
				data_criacao_pvp: PedidosVendaPagamentosAntigo.data_criacao,
				data_vencimento_pvp: PedidosVendaPagamentosAntigo.data_vencimento
			}));
			if(PedidosVendaPagamentosNovos.length > 0){
				await prismaNovo.pedidos_venda_pagamentos.createMany({data: PedidosVendaPagamentosNovos});
			}
		} catch (error) {
			throw new ErrorResponse(500, "Erro interno do servidor ao trocar Pedidos Venda Pagamentos: " + error);
		}
	}
}