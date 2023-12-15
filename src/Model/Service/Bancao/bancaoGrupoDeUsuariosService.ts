import { grupos_usuarios } from "../../../../prisma/databases/novoprisma";
import { PrismaClient as PrismaClientNovo } from "../../../../prisma/databases/novoprisma";
import { ErrorResponse } from "../../Error/ErrorResponse";
import BancaoPermissoesGrupoUsuarioService from "./bancaoPermissoesGrupoUsuarioService";
import BancaoAtividadeGruposService from "./bancaoAtividadeGruposService";


export default class BancaoGrupoDeUsuariosService{
	async troca(prismaNovo:PrismaClientNovo){
		try {
			const gruposUsuarios : grupos_usuarios[] = [{id_gu:1,nm_gu:"Supervisor", pg_inicial_gu:undefined},{id_gu:2,nm_gu:"Comum", pg_inicial_gu:undefined}];
			if(gruposUsuarios.length > 0){
				await prismaNovo.grupos_usuarios.createMany({data: gruposUsuarios});

				const PermissoesService = new BancaoPermissoesGrupoUsuarioService();
				const AtividadeService = new BancaoAtividadeGruposService();

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
