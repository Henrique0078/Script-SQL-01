import { PrismaClient as PrismaClientAntigo} from "../../../prisma/databases/antigoprisma";
import { PrismaClient as PrismaClientNovo } from "../../../prisma/databases/novoprisma";
import { contatos } from "../../../prisma/databases/novoprisma";
import { ErrorResponse } from "../Error/ErrorResponse";
import { convertBigIntToString } from "../Utils";

export default class ContatosService{
	async troca(prismaNovo:PrismaClientNovo, prismaAntigo: PrismaClientAntigo){
		try {
			const ContatosAntigos = await prismaAntigo.contatos.findMany({});
			const ContatosNovos: contatos[] = ContatosAntigos.map((ContatosAntigo)=>({
				id_contato: parseInt(convertBigIntToString(ContatosAntigo.id)),
				nm_contato: ContatosAntigo.contato,
				tipo_contato: ContatosAntigo.tipoContato,
				id_cliente_contato: parseInt(convertBigIntToString(ContatosAntigo.cliente_id))
			}));
			if(ContatosNovos.length > 0){
				await prismaNovo.contatos.createMany({data: ContatosNovos});
				const totalProdutos = await prismaNovo.contatos.count();
				const antigoCertiticado = await prismaAntigo.contatos.count();
				console.log(antigoCertiticado, " registros localizados em Contatos antigo");
				console.log(totalProdutos, " registros adicionados em Contatos novo");
				console.log("-----------------------------------------------------");
			}else{
				console.log("Contatos vazio");
			}
		} catch (error) {
			throw new ErrorResponse(500, "Erro interno do servidor ao trocar Pedidos venda itens: " + error);
		}
	}
}
