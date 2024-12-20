import { PrismaClient as PrismaClientAntigo} from "../../../prisma/databases/antigoprisma";
import { PrismaClient as PrismaClientNovo } from "../../../prisma/databases/novoprisma";
import { ErrorResponse } from "../Error/ErrorResponse";

export default class TransportadoreService{
	async troca(prismaNovo:PrismaClientNovo, prismaAntigo: PrismaClientAntigo){
		try {
			const TransportadoresAntigos = await prismaAntigo.transportadores.findMany({});
			const TransportadoresNovos = TransportadoresAntigos.map((TransportadoresAntigo)=> ({
				id_transportador: TransportadoresAntigo.id_transportador,
				id_sirius_transportador: TransportadoresAntigo.id_transportador_sirius,
				nm_transportador: TransportadoresAntigo.nome_transportador,
				status_transportador: TransportadoresAntigo.status_transportador
			}));
			if(TransportadoresNovos.length > 0){
				await prismaNovo.transportadores.createMany({data: TransportadoresNovos});
				const totalProdutos = await prismaNovo.transportadores.count();
				const antigoCertiticado = await prismaAntigo.transportadores.count();
				console.log(antigoCertiticado, " registros localizados em Transportadores antigo");
				console.log(totalProdutos, " registros adicionados em Transportadores novo");
				console.log("-----------------------------------------------------");
			}else{
				console.log("Transportadores vazio");
			}
		} catch (error) {
			throw new ErrorResponse(500, "Erro interno do servidor ao trocar Transportadores: " + error);
		}
	}
}
