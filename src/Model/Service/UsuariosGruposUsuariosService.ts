import { prismaAntigo, prismaNovo } from "../../../prisma";
import { ErrorResponse } from "../Error/ErrorResponse";
import { convertBigIntToString } from "../Utils";

export default class UsuariosGruposUsuarios{
	async troca(){
		try {
			const UsuariosGruposUsuariosAntigos = await prismaAntigo.usuarios_x_grupos.findMany({});
			const UsuariosGruposUsuariosNovos = UsuariosGruposUsuariosAntigos.map((UsuariosGruposUsuariosAntigo)=>({
				id_ugu: parseInt(convertBigIntToString(UsuariosGruposUsuariosAntigo.id_grupo)),
				id_usuario_ugu: parseInt(convertBigIntToString(UsuariosGruposUsuariosAntigo.id_usuario)),
				id_grupos_usuarios_ugu: parseInt(convertBigIntToString(UsuariosGruposUsuariosAntigo.id_usuario_x_grupo))
			}));
			if(UsuariosGruposUsuariosNovos.length > 0){
				await prismaNovo.usuarios_grupos_usuarios.createMany({data: UsuariosGruposUsuariosNovos});
				const totalProdutos = await prismaNovo.usuarios_grupos_usuarios.count();
				const antigoCertiticado = await prismaAntigo.usuarios_x_grupos.count();
				console.log(antigoCertiticado, " registros localizados em Usuarios Grupos antigo");
				console.log(totalProdutos, " registros adicionados em Usuarios Grupos novo");
			}
		} catch (error) {
			throw new ErrorResponse(500, "Erro interno do servidor ao trocar Usuarios Grupos Usuarios: " + error);
		}
		
	}
}