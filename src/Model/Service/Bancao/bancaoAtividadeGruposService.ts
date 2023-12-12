import { prismaBancao } from "../../../../prisma";
import { PrismaClient as PrismaClientNovo } from "../../../../prisma/databases/novoprisma";
import { atividades_grupos } from "../../../../prisma/databases/novoprisma";

export default class BancaoAtividadeGruposService {
	async troca(prismaNovo:PrismaClientNovo) {
		const grupoUsuarios = await prismaNovo.grupos_usuarios.findMany({});
		const atividades = await prismaBancao.atividades.findMany({});
		const atividadesXGrupos: atividades_grupos[] = [];
		for (let i = 0; i < grupoUsuarios.length; i++) {
			for (let j = 0; j < atividades.length; j++) {
				atividadesXGrupos.push({
					id_ag: i + j + 1,
					id_atividade_ag: atividades[j].id_atividade,
					id_grupos_usuarios_ag: grupoUsuarios[i].id_gu,
					valor_ag: atividades[j].valor_atividade,
					descricao_ag: atividades[j].descricao_atividade,
				});
			}
		}
		if(atividadesXGrupos.length > 0){
			await prismaNovo.atividades_grupos.createMany({data: atividadesXGrupos});
			const totalParametro = await  prismaNovo.atividades_grupos.count();
			console.log(totalParametro, " registros adicionados em Atividades Novas");
		}else{
			console.log("Atividades Grupos vazio");
		}
	}
}
