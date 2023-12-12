import { PrismaClient as PrismaClientAntigo} from "../../../prisma/databases/antigoprisma";
import { PrismaClient as PrismaClientNovo } from "../../../prisma/databases/novoprisma";
import { condicoes_pagamento } from "../../../prisma/databases/novoprisma";
import { ErrorResponse } from "../Error/ErrorResponse";
import { convertBigIntToString } from "../Utils";

export default class CondicoesPagamentoService{
	async troca(prismaNovo:PrismaClientNovo, prismaAntigo: PrismaClientAntigo){
		try {
			const condicoesPagamentoAntigos = await prismaAntigo.condicoes_pagamento.findMany({});
			const condicoesPagamento: condicoes_pagamento[] = condicoesPagamentoAntigos.map((condicaoPagamentoAntigo) => ({
				id_cp: parseInt(convertBigIntToString(condicaoPagamentoAntigo.id)),
				id_sirius_cp: parseInt(convertBigIntToString(condicaoPagamentoAntigo.id_sirius)),
				descricao_cp: condicaoPagamentoAntigo.descricao,
			}));
			if(condicoesPagamento.length > 0){
				await prismaNovo.condicoes_pagamento.createMany({data: condicoesPagamento});
				const totalProdutos = await prismaNovo.condicoes_pagamento.count();
				const antigoCertiticado = await prismaAntigo.condicoes_pagamento.count();
				console.log(antigoCertiticado, " registros localizados em condicoes pagamento antigo");
				console.log(totalProdutos, " registros adicionados em condicoes pagamento novo");
				console.log("-----------------------------------------------------");
			}else{
				console.log("Condicoes pagamento vazio");
			}
		} catch (error) {
			throw new ErrorResponse(500, "Erro interno do servidor ao trocar Condições de Pagamento: " + error);
		}
	}
}
