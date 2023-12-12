import { prismaBancao, prismaNovo } from "../../../../prisma";
import { parametros } from "../../../../prisma/databases/novoprisma";
import { ErrorResponse } from "../../Error/ErrorResponse";



export default class parametrosService{
	async troca(){
		try {
			const parametrosBancao = await prismaBancao.parametros.findMany({});
			const parametros:parametros[] = parametrosBancao.map((parametroBancao) => ({
				id_parametro: parametroBancao.id_parametro,
				nm_parametro: parametroBancao.nm_parametro,
				valor_parametro: parametroBancao.valor_parametro,
				descricao_parametro: parametroBancao.descricao_parametro,
			}));
			if(parametros.length > 0){
				await prismaNovo.parametros.createMany({data: parametros});
				const totalParametro = await prismaNovo.parametros.count();
				const antigoParametro = await prismaBancao.parametros.count();
				console.log(antigoParametro, " registros localizados em parametros antigo");
				console.log(totalParametro, " registros adicionados em parametros novo");
			}
		} catch (error) {
			throw new ErrorResponse(500, "Erro interno do servidor ao trocar parametros: " + error);
		}
	}
}
