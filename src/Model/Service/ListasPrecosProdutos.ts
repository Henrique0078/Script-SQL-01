import { PrismaClient as PrismaClientAntigo} from "../../../prisma/databases/antigoprisma";
import { PrismaClient as PrismaClientNovo } from "../../../prisma/databases/novoprisma";
import { ErrorResponse } from "../Error/ErrorResponse";
import { convertBigIntToString } from "../Utils";

export default class ListasPrecosProdutos{
	async troca(prismaNovo:PrismaClientNovo, prismaAntigo: PrismaClientAntigo){
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
				const totalProdutos = await prismaNovo.listas_precos_produtos.count();
				const antigoCertiticado = await prismaAntigo.listas_precos_x_produtos.count();
				console.log(antigoCertiticado, " registros localizados em Listas precos Produtos antigo");
				console.log(totalProdutos, " registros adicionados em Listas precos Produtos novo");
				console.log("-----------------------------------------------------");
			}else{
				console.log("Listas Precos Produtos vazio");
			}
		} catch (error) {
			throw new ErrorResponse(500, "Erro interno do servidor ao trocar Listas precos produtos: " + error);
		}
	}
}
