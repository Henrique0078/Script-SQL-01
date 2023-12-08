import { prismaAntigo, prismaNovo } from "../../../prisma";
import { ErrorResponse } from "../Error/ErrorResponse";

export default class PermissoesService{
	async troca(){
		try {
			const PermissoesAntigas = await prismaAntigo.permissoes.findMany({});
			const PermissoesNovas = PermissoesAntigas.map((PermissoesAntiga)=>({
				id_permissao: PermissoesAntiga.id_permissao,
				id_grupo_usuarios_permissao: PermissoesAntiga.grupo_id,
				nm_permissao: "",
				modulo_permissao: PermissoesAntiga.modulo,
				criar_permissao: PermissoesAntiga.criar,
				ler_permissao: PermissoesAntiga.ler,
				atualizar_permissao: PermissoesAntiga.atualizar,
				deletar_permissao: PermissoesAntiga.deletar
			}));
			if (PermissoesNovas.length > 0){
				await prismaNovo.permissoes.createMany({data: PermissoesNovas});
			}
		} catch (error) {
			throw new ErrorResponse(500, "Erro interno do servidor ao trocar Permissoes: " + error);
		}
		
	}
}