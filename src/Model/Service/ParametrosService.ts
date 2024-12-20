import { PrismaClient as PrismaClientAntigo} from "../../../prisma/databases/antigoprisma";
import { PrismaClient as PrismaClientNovo } from "../../../prisma/databases/novoprisma";
import { ErrorResponse } from "../Error/ErrorResponse";

export default class ParametrosService{
	async troca(prismaNovo:PrismaClientNovo, prismaAntigo: PrismaClientAntigo){
		try {
			const ParametrosAntigos = await prismaAntigo.parametros.findMany({});
			const ParametrosNovos = ParametrosAntigos.map((ParametrosAntigo)=>({
				id_parametro: ParametrosAntigo.id_parametro,
				nm_parametro: ParametrosAntigo.parametro,
				valor_parametro: ParametrosAntigo.valor,
				descricao_parametro: ParametrosAntigo.descricao
			}));
			if(ParametrosNovos.length > 0){
				await prismaNovo.parametros.createMany({data: ParametrosNovos});
				const totalProdutos = await prismaNovo.parametros.count();
				const antigoCertiticado = await prismaAntigo.parametros.count();
				console.log(antigoCertiticado, " registros localizados em Parametros antigo");
				console.log(totalProdutos, " registros adicionados em Parametros novo");
				console.log("-----------------------------------------------------");
			}else{
				console.log("Parametros vazio");
			}
		} catch (error) {
			throw new ErrorResponse(500, "Erro interno do servidor ao trocar Parametros: " + error);
		}
	}
}
