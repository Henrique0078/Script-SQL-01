import { prismaAntigo, prismaNovo } from "../../../prisma";
import { ErrorResponse } from "../Error/ErrorResponse";

export default class GruposUsuariosService{
	async troca(){
		try {
			const gruposAntigos = await prismaAntigo.grupos_usuarios.findMany({});
			const gruposNovos = gruposAntigos.map((grupoAntigo)=>({
				id_gu: grupoAntigo.id_grupo_usuario,
				nm_gu: grupoAntigo.nome_grupo
			}));
			if(gruposNovos.length > 0){
				await prismaNovo.grupos_usuarios.createMany({data: gruposNovos});
				const totalProdutos = await prismaNovo.grupos_usuarios.count();
				const antigoCertiticado = await prismaAntigo.grupos_usuarios.count();
				console.log(antigoCertiticado, " registros localizados em Grupos Usuarios antigo");
				console.log(totalProdutos, " registros adicionados em Grupos Usuarios novo");
			}
		} catch (error) {
			throw new ErrorResponse(500, "Erro interno do servidor ao trocar Grupos Usuarios: " + error);
		}
		
	}
}