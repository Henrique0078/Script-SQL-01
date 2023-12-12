import { grupos_usuarios } from "../../../../prisma/databases/novoprisma";
import { PrismaClient as PrismaClientNovo } from "../../../../prisma/databases/novoprisma";
import { ErrorResponse } from "../../Error/ErrorResponse";
import permissoesService from "./bancaoPermissoesGrupoUsuarioService";
import atividadesXgrupoService from "./bancaoAtividadeGruposService";


export default class BancaoGrupoDeUsuariosService{
	async troca(prismaNovo:PrismaClientNovo){
		try {
			const gruposUsuarios : grupos_usuarios[] = [{id_gu:1,nm_gu:"Supervisor"},{id_gu:2,nm_gu:"Comum"}];
			if(gruposUsuarios.length > 0){
				await prismaNovo.grupos_usuarios.createMany({data: gruposUsuarios});

				const PermissoesService = new permissoesService();
				const AtividadeService = new atividadesXgrupoService();

				await PermissoesService.troca(prismaNovo);
				await AtividadeService.troca(prismaNovo);

				const grupos_usuariosCount = await prismaNovo.grupos_usuarios.count();
				console.log("Registros de Grupos Usuario" + grupos_usuariosCount.toString);
			}
		} catch (error) {
			throw new ErrorResponse(500, "Erro interno do servidor ao trocar parametros: " + error);
		}
	}
}
