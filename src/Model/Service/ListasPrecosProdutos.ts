import { prismaAntigo, prismaNovo } from "../../../prisma";
import { ErrorResponse } from "../Error/ErrorResponse";
import { convertBigIntToString } from "../Utils";

export default class ListasPrecosProdutos{
	async troca(){
		try {
			const ListasPrecosProdutosAntigos = await prismaAntigo.listas_precos_x_produtos.findMany({});
			const ListasPrecosProdutosNovos = ListasPrecosProdutosAntigos.map((ListasPrecosProdutosAntigo)=>({
				id_lpp: parseInt(convertBigIntToString(ListasPrecosProdutosAntigo.id)),
				id_lista_lpp: parseInt(convertBigIntToString(ListasPrecosProdutosAntigo.lista_id)),
				id_produto_lpp: parseInt(convertBigIntToString(ListasPrecosProdutosAntigo.produto_id)),
				valor_lpp: ListasPrecosProdutosAntigo.valor,
				id_produto_sirius_lpp: parseInt(convertBigIntToString(ListasPrecosProdutosAntigo.id_sirius))
			}));
			if(ListasPrecosProdutosNovos.length > 0){
				await prismaNovo.listas_precos_produtos.createMany({data: ListasPrecosProdutosNovos});
			}
		} catch (error) {
			throw new ErrorResponse(500, "Erro interno do servidor ao trocar Listas precos produtos: " + error);
		}
	}
}