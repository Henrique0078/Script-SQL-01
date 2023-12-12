import { PrismaClient as PrismaClientAntigo} from "../../../prisma/databases/antigoprisma";
import { PrismaClient as PrismaClientNovo } from "../../../prisma/databases/novoprisma";
import { ErrorResponse } from "../Error/ErrorResponse";
import { convertBigIntToString } from "../Utils";

export default class ListasPrecos{
	async troca(prismaNovo:PrismaClientNovo, prismaAntigo: PrismaClientAntigo){
		try {
			const ListasPrecosAntigas = await prismaAntigo.listas_precos.findMany({});
			const ListaPrecosNovas = ListasPrecosAntigas.map((ListasPrecosAntiga)=>({
				id_lp: parseInt(convertBigIntToString(ListasPrecosAntiga.id)),
				descricao_lp: ListasPrecosAntiga.descricao,
				id_sirius_lp: parseInt(convertBigIntToString(ListasPrecosAntiga.id_sirius))
			}));
			if(ListaPrecosNovas.length > 0){
				await prismaNovo.listas_precos.createMany({data: ListaPrecosNovas});
				const totalProdutos = await prismaNovo.listas_precos.count();
				const antigoCertiticado = await prismaAntigo.listas_precos.count();
				console.log(antigoCertiticado, " registros localizados em Listas precos antigo");
				console.log(totalProdutos, " registros adicionados em Listas precos novo");
				console.log("-----------------------------------------------------");
			}else{
				console.log("Lista Preco vazio");
			}
		} catch (error) {
			throw new ErrorResponse(500, "Erro interno do servidor ao trocar Lista Precos: " + error);
		}
	}
}
