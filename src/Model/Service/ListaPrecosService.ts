import { prismaAntigo } from "../../../prisma";
import { ErrorResponse } from "../Error/ErrorResponse";

export default class ListaPrecos{
	async troca(){
		try {
			const ListasPrecosAntigas = await prismaAntigo.listas_precos.findMany({});
			const ListaPrecosNovas = ListasPrecosAntigas.map((ListasPrecosAntiga)=>({
                id_lp
                descricao_lp
                id_sirius_lp
			}));
		} catch (error) {
			throw new ErrorResponse(500, "Erro interno do servidor ao trocar Lista Precos: " + error);
		}
	}
}