import { Decimal } from "@prisma/client/runtime/library";
import { PrismaClient as PrismaClientAntigo} from "../../../prisma/databases/antigoprisma";
import { PrismaClient as PrismaClientNovo } from "../../../prisma/databases/novoprisma";
import { pedidos_venda_itens } from "../../../prisma/databases/novoprisma";
import { ErrorResponse } from "../Error/ErrorResponse";
import { convertBigIntToString } from "../Utils";

export default class PedidosVendaItensService{
	async troca(listaPrecoNovaComMaiorPK: number,prismaNovo:PrismaClientNovo, prismaAntigo: PrismaClientAntigo){
		try {
			const PedidosVendaItensAntigos = await prismaAntigo.pedidos_venda_itens.findMany({});
			const PedidosVendaItensNovos: pedidos_venda_itens[] = PedidosVendaItensAntigos.map((PedidosVendaItens)=>({
				id_pvi: parseInt(convertBigIntToString(PedidosVendaItens.id)),
				id_pedido_pvi: parseInt(convertBigIntToString(PedidosVendaItens.pedido_id)) > 0 ? parseInt(convertBigIntToString(PedidosVendaItens.pedido_id)) : null,
				id_produto_pvi: parseInt(convertBigIntToString(PedidosVendaItens.produto_id)) > 0 ? parseInt(convertBigIntToString(PedidosVendaItens.produto_id)) : null,
				id_produto_sirius_pvi: parseInt(convertBigIntToString(PedidosVendaItens.produto_sirius_id)),
				prod_descricao_pvi: PedidosVendaItens.descricao,
				prod_unidade_pvi: PedidosVendaItens.unidade,
				prod_quantidade_pvi: new Decimal(PedidosVendaItens.quantidade),
				prod_valor_unitario_pvi: PedidosVendaItens.valor_unitario,
				prod_ean_pvi: null,
				prod_codigo_pvi: PedidosVendaItens.codigo,
				valor_total_pvi: PedidosVendaItens.valor_total,
				id_lista_preco_pvi: PedidosVendaItens.idListaPreco > 0 && PedidosVendaItens.idListaPreco < listaPrecoNovaComMaiorPK ? PedidosVendaItens.idListaPreco : null
			}));
			if(PedidosVendaItensNovos.length > 0){
				await prismaNovo.pedidos_venda_itens.createMany({data: PedidosVendaItensNovos});
				const totalProdutos = await prismaNovo.pedidos_venda_itens.count();
				const antigoCertiticado = await prismaAntigo.pedidos_venda_itens.count();
				console.log(antigoCertiticado, " registros localizados em Pedidos venda itens antigo");
				console.log(totalProdutos, " registros adicionados em Pedidos venda itens novo");
				console.log("-----------------------------------------------------");
			}else{
				console.log("Pedidos Venda Itens vazio");
			}
		} catch (error) {
			throw new ErrorResponse(500, "Erro interno do servidor ao trocar Pedidos venda itens: " + error);
		}
	}
}
