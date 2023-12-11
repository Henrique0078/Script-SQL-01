import { prismaAntigo, prismaNovo } from "../../../prisma";
import { enderecos } from "../../../prisma/databases/novoprisma";
import { ErrorResponse } from "../Error/ErrorResponse";
import { convertBigIntToString } from "../Utils";

export default class EnderecosService{
	async troca(){
		try {
			const EnderecosAntigos = await prismaAntigo.enderecos.findMany({});
			const EnderecosNovos : enderecos[] = EnderecosAntigos.map((EnderecosAntigo)=>({
				id_endereco: parseInt(convertBigIntToString(EnderecosAntigo.id)),
				cep_endereco: EnderecosAntigo.cep,
				logradouro_endereco: EnderecosAntigo.logradouro,
				numero_endereco: EnderecosAntigo.numero,
				complemento_endereco: EnderecosAntigo.complemento,
				bairro_endereco: EnderecosAntigo.bairro,
				cidade_endereco: EnderecosAntigo.cidade,
				cod_mun_endereco:  EnderecosAntigo.codMun,
				cod_uf_endereco: EnderecosAntigo.codUF,
				uf_endereco: EnderecosAntigo.uf,
				id_cliente_endereco: parseInt(convertBigIntToString(EnderecosAntigo.cliente_id)),
				tipo_endereco_endereco: EnderecosAntigo.tipoEndereco,
				status_endereco: EnderecosAntigo.status,
				tipo_logradouro_endereco: EnderecosAntigo.tipoLogradouro
			}));
			if(EnderecosNovos.length > 0){
				await prismaNovo.enderecos.createMany({data: EnderecosNovos});
				const totalProdutos = await prismaNovo.enderecos.count();
				const antigoCertiticado = await prismaAntigo.enderecos.count();
				console.log(antigoCertiticado, " registros localizados em Enderecos antigo");
				console.log(totalProdutos, " registros adicionados em Enderecos novo");
				console.log("-----------------------------------------------------");
			}else{
				console.log("Enderecos vazio");
			}
		} catch (error) {
			throw new ErrorResponse(500, "Erro interno do servidor ao trocar Enderecos: " + error);
		}
	}
}