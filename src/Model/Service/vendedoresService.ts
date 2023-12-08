import { prismaNovo, prismaAntigo } from "../../../prisma";

import { ErrorResponse } from "../Error/ErrorResponse";
import { vendedores } from "../../../prisma/databases/novoprisma";
import { convertBigIntToString } from "../Utils";

export default class ClientesService{
	async troca(){
		try {
			const vendedoresAntigos = await prismaAntigo.vendedores.findMany({});
			const vendedores: vendedores[] = vendedoresAntigos.map((vendedorAntigo) => ({
				agencia_vendedor: vendedorAntigo.agencia,
				apelido_vendedor: vendedorAntigo.apelido,
				bairro_vendedor: vendedorAntigo.bairro,
				celular_vendedor: vendedorAntigo.celular,
				cep_vendedor: vendedorAntigo.cep,
				cidade_vendedor: vendedorAntigo.cidade,
				cnpj_vendedor: vendedorAntigo.cnpj,
				complemento_vendedor: vendedorAntigo.complemento,
				conta_vendedor: vendedorAntigo.conta,
				cpf_vendedor: vendedorAntigo.cpf,
				departamento_vendedor: vendedorAntigo.departamento,
				digito_agencia_vendedor: vendedorAntigo.digitoAgencia,
				digito_conta_vendedor: vendedorAntigo.digitoConta,
				email_vendedor: vendedorAntigo.email,
				fax_vendedor: vendedorAntigo.fax,
				id_sirius_vendedor: parseInt(convertBigIntToString(vendedorAntigo.id_sirius)),
				id_vendedor: parseInt(convertBigIntToString(vendedorAntigo.id)),
				insc_estadual_vendedor: vendedorAntigo.inscEstadual,
				logradouro_vendedor: vendedorAntigo.logradouro,
				nome_vendedor: vendedorAntigo.nome,
				nm_banco_vendedor: vendedorAntigo.numeroBanco,
				nm_vendedor: vendedorAntigo.nome,
				numero_banco_vendedor: vendedorAntigo.numeroBanco,
				numero_vendedor: vendedorAntigo.numero,
				observacoes_vendedor: vendedorAntigo.observacoes,
				pessoa_contato_vendedor: vendedorAntigo.pessoaContato,
				porcentagem_comissao_vendedor: vendedorAntigo.porcComissao,
				porcentagem_desc_max_vendedor: vendedorAntigo.porcDescMax,
				regiao_vendedor: vendedorAntigo.regiao,
				rg_vendedor: vendedorAntigo.rg,
				status_vendedor: vendedorAntigo.status,
				telefone_vendedor: vendedorAntigo.telefone,
				uf_vendedor: vendedorAntigo.uf,
			}));
			if(vendedores.length > 0){
				await prismaNovo.vendedores.createMany({data: vendedores});
			}
		} catch (error) {
			throw new ErrorResponse(500, "Erro interno do servidor ao trocar vendedores: " + error);
		}
	}
}
