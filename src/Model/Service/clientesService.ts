import { prismaNovo, prismaAntigo } from "../../../prisma";
import { ErrorResponse } from "../Error/ErrorResponse";
import { clienteNovo } from "../Interfaces/clientesInterface";
import { convertBigIntToString } from "../Utils";

export default class clientesService{
	async troca(){
		try {
			const clientesAntigos = await prismaAntigo.clientes.findMany({});
			const clientes: clienteNovo[] = clientesAntigos.map((clienteAntigo) => ({
				id_cliente: parseInt(convertBigIntToString(clienteAntigo.id)),
				id_sirius_cliente: parseInt(convertBigIntToString(clienteAntigo.id_sirius)),
				status_cliente: clienteAntigo.status,
				created_at_cliente: clienteAntigo.dataFoiCadastrado,
				updated_at_cliente: clienteAntigo.dataUltimaAtualizacao,
				razao_social_cliente: clienteAntigo.razaoSocial,
				fantasia_cliente: clienteAntigo.fantasia,
				cpf_cliente: clienteAntigo.cpf,
				cnpj_cliente: clienteAntigo.cnpj,
				id_estrangeiro_cliente: clienteAntigo.idEstrangeiro,
				ind_ie_cliente: clienteAntigo.indIE,
				insc_estadual_cliente: clienteAntigo.inscEstadual,
				insc_municipal_cliente: clienteAntigo.inscMunicipal,
				tipo_cliente: clienteAntigo.tipoCliente,
				exclusivo_cliente: clienteAntigo.exclusivo,
				id_vendedor_cliente: parseInt(convertBigIntToString(clienteAntigo.vendedor_id)),
				id_vendedor_sirius_cliente: parseInt(convertBigIntToString(clienteAntigo.vendedor_id_sirius)),
				id_lista_preco_cliente: parseInt(convertBigIntToString(clienteAntigo.lista_preco_id)),
				id_condicao_pagamento_cliente: parseInt(convertBigIntToString(clienteAntigo.condicao_pagamento_id)),
				contato_cliente: clienteAntigo.contato,
				nm_contato_cliente: clienteAntigo.contato_nome,
				id_condicao_pagamento_sirius_cliente: clienteAntigo.condicao_pagamento_id_sirius,
			}));
			await prismaNovo.clientes.createMany({data: clientes});
		} catch (error) {
			throw new ErrorResponse(500, "Erro interno do servidor");
		}
	}
}