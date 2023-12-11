import { prismaAntigo, prismaNovo } from "../../../prisma";
import { ErrorResponse } from "../Error/ErrorResponse";
import { convertBigIntToString } from "../Utils";

export default class VendedoresUsuarios{
	async troca(){
		try {
			const vendedoresUsuariosAntigos = await prismaAntigo.vendedores_x_usuarios.findMany({});
			const vendedoresUsuariosNovos = vendedoresUsuariosAntigos.map((vendedoresUsuariosAntigo)=> ({
				id_vu: parseInt(convertBigIntToString(vendedoresUsuariosAntigo.id)),
				id_usuario_vu: parseInt(convertBigIntToString(vendedoresUsuariosAntigo.id_usuario)),
				id_vendedor_vu: parseInt(convertBigIntToString(vendedoresUsuariosAntigo.id_vendedor)),
				id_sirius_vendedor_vu: parseInt(convertBigIntToString(vendedoresUsuariosAntigo.id_vendedor_sirius))
			}));
			if(vendedoresUsuariosNovos.length > 0){
				await prismaNovo.vendedores_usuarios.createMany({data: vendedoresUsuariosNovos});
				const totalProdutos = await prismaNovo.vendedores_usuarios.count();
				const antigoCertiticado = await prismaAntigo.vendedores_x_usuarios.count();
				console.log(antigoCertiticado, " registros localizados em Vendedores Usuarios antigo");
				console.log(totalProdutos, " registros adicionados em Vendedores Usuarios novo");
			}
		} catch (error) {
			throw new ErrorResponse(500, "Erro interno do servidor ao trocar Vendedores Usuarios: " + error);
		}
		
	}
}