import { PrismaClient as PrismaClientAntigo} from "../../../prisma/databases/antigoprisma";
import { PrismaClient as PrismaClientNovo } from "../../../prisma/databases/novoprisma";
import { ErrorResponse } from "../Error/ErrorResponse";
import { convertBigIntToString } from "../Utils";

export default class FornecedoresService{
	async troca(prismaNovo:PrismaClientNovo, prismaAntigo: PrismaClientAntigo){
		try {
			const fornecedoresAntigos = await prismaAntigo.fornecedores.findMany({});
			const fornecedoresNovos = fornecedoresAntigos.map((fornecedoresAntigo)=>({
				id_forn: parseInt(convertBigIntToString(fornecedoresAntigo.id)),
				fantasia_forn: fornecedoresAntigo.fantasia,
				razao_social_forn: fornecedoresAntigo.razaoSocial,
				status_forn: fornecedoresAntigo.status,
				cpf_cnpj_forn: fornecedoresAntigo.cpfCnpj,
				tipo_forn: fornecedoresAntigo.tipo,
				insc_estadual_forn: fornecedoresAntigo.inscEstadual,
				cep_forn: fornecedoresAntigo.cep,
				logradouro_forn: fornecedoresAntigo.logradouro,
				numero_forn: fornecedoresAntigo.numero,
				complemento_forn: fornecedoresAntigo.complemento,
				bairro_forn: fornecedoresAntigo.bairro,
				cidade_forn: fornecedoresAntigo.cidade,
				uf_forn: fornecedoresAntigo.uf,
				email_forn: fornecedoresAntigo.email,
				celular_forn: fornecedoresAntigo.celular,
				telefone_forn: fornecedoresAntigo.telefone,
				fax_forn: fornecedoresAntigo.fax,
				pessoa_contato_forn: fornecedoresAntigo.pessoaContato,
				observacoes_forn: fornecedoresAntigo.observacoes
			}));
			if(fornecedoresNovos.length > 0){
				await prismaNovo.fornecedores.createMany({data: fornecedoresNovos});
				const totalProdutos = await prismaNovo.fornecedores.count();
				const antigoCertiticado = await prismaAntigo.fornecedores.count();
				console.log(antigoCertiticado, " registros localizados em Fornecedores antigo");
				console.log(totalProdutos, " registros adicionados em Fornecedores novo");
				console.log("-----------------------------------------------------");
			}else{
				console.log("Fornecedores vazio");
			}
		} catch (error) {
			throw new ErrorResponse(500, "Erro interno do servidor ao trocar fornecedores: " + error);
		}
	}
}
