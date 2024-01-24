import { PrismaClient as PrismaClientNovo, forma_pagamento } from "../../../prisma/databases/novoprisma";
import { ErrorResponse } from "../Error/ErrorResponse";

export default class FormaPagamentoService {
	async troca(prismaNovo: PrismaClientNovo) {
		try {
			const formasPagamentosPadroes: forma_pagamento[] = [
				{
					id_fp: 1,
					nm_fp: "PIX"
				},
				{
					id_fp: 2,
					nm_fp: "Dinheiro"
				},
				{
					id_fp: 3,
					nm_fp: "Cartão de Débito"
				},
				{
					id_fp: 4,
					nm_fp: "Cartão de Crédito"
				},
				{
					id_fp: 5,
					nm_fp: "Vale-Refeição"
				},
				{
					id_fp: 6,
					nm_fp: "Vale-Alimentação"
				},
			];
			await prismaNovo.forma_pagamento.createMany({ data: formasPagamentosPadroes });
			const totalProdutos = await prismaNovo.forma_pagamento.count();
			console.log(0, " registros localizados em Fornecedores antigo");
			console.log(totalProdutos, " registros adicionados em Fornecedores novo");
			console.log("-----------------------------------------------------");
		} catch (error) {
			throw new ErrorResponse(500, "Erro interno do servidor ao trocar fornecedores: " + error);
		}
	}
}
