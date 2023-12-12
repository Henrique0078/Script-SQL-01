import { PrismaClient as PrismaClientAntigo} from "../../../prisma/databases/antigoprisma";
import { PrismaClient as PrismaClientNovo } from "../../../prisma/databases/novoprisma";
import { pedidos_venda_pagamentos } from "../../../prisma/databases/novoprisma";
import { ErrorResponse } from "../Error/ErrorResponse";
import { convertBigIntToString } from "../Utils";

export default class PedidosVendaPagamentosService{
	async troca(prismaNovo:PrismaClientNovo, prismaAntigo: PrismaClientAntigo){
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
				const totalProdutos = await prismaNovo.pedidos_venda_pagamentos.count();
				const antigoCertiticado = await prismaAntigo.pedidos_venda_pagamentos.count();
				console.log(antigoCertiticado, " registros localizados em Pedidos venda pagamentos antigo");
				console.log(totalProdutos, " registros adicionados em Pedidos venda pagamentos novo");
				console.log("-----------------------------------------------------");
			}else{
				console.log("Pedidos Venda Pagamentos vazio");
			}
		} catch (error) {
			throw new ErrorResponse(500, "Erro interno do servidor ao trocar Pedidos Venda Pagamentos: " + error);
		}
	}
}
