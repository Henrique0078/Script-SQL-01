import { permissoes } from "../../../../prisma/databases/novoprisma";
import {  prismaBancao, prismaNovo } from "../../../../prisma";
import { ErrorResponse } from "../../Error/ErrorResponse";


export default class BancaoPermissoesGrupoUsuarioService{
	async troca(){
		try {

			const gruposUsuarios  = await prismaNovo.grupos_usuarios.findMany({});
			const permissoes: permissoes[] = [];
			const modulos = await prismaBancao.modulos.findMany({});
			for (let i = 0; i < gruposUsuarios.length; i++) {
				for (let j = 0; j < modulos.length; j++) {
					permissoes.push({
						id_permissao:i+j+1,
						nm_permissao:gruposUsuarios[i].nm_gu,
						modulo_permissao: modulos[j].nm_modulo,
						id_grupo_usuarios_permissao: gruposUsuarios[i].id_gu,
						criar_permissao: modulos[j].nm_modulo == "Supervisor"? 1 : 0,
						ler_permissao:  modulos[j].nm_modulo == "Supervisor"? 1 : 0,
						atualizar_permissao: modulos[j].nm_modulo == "Supervisor"? 1 : 0,
						deletar_permissao: modulos[j].nm_modulo == "Supervisor"? 1 : 0,
					});
				}
			}
			if(gruposUsuarios.length > 0){
				await prismaNovo.permissoes.createMany({data: permissoes});
				const permissoesCount = await prismaNovo.permissoes.count();
				console.log("Registros de permissoes" + permissoesCount.toString);
			}else{
				console.log("Grupos usuarios vazio");
			}
		} catch (error) {
			throw new ErrorResponse(500, "Erro interno do servidor ao trocar parametros: " + error);
		}
	}
}
