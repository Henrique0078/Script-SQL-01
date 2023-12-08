import { prismaAntigo, prismaNovo } from "../../../prisma";
import { condicoes_pagamento } from "../../../prisma/databases/novoprisma";
import { ErrorResponse } from "../Error/ErrorResponse";
import { convertBigIntToString } from "../Utils";

export default class CondicoesPagamentoService{
	async troca(){
		try {
			const condicoesPagamentoAntigos = await prismaAntigo.condicoes_pagamento.findMany({});
			const condicoesPagamento: condicoes_pagamento[] = condicoesPagamentoAntigos.map((condicaoPagamentoAntigo) => ({
				id_cp: parseInt(convertBigIntToString(condicaoPagamentoAntigo.id)),
				id_sirius_cp: parseInt(convertBigIntToString(condicaoPagamentoAntigo.id_sirius)),
				descricao_cp: condicaoPagamentoAntigo.descricao,
			}));
			if(condicoesPagamento.length > 0){
				await prismaNovo.condicoes_pagamento.createMany({data: condicoesPagamento});
			}
		} catch (error) {
			throw new ErrorResponse(500, "Erro interno do servidor ao trocar Condições de Pagamento: " + error);
		}
	}
}
