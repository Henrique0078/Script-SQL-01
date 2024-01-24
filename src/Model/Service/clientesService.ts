import { PrismaClient as PrismaClientAntigo } from "../../../prisma/databases/antigoprisma";
import { PrismaClient as PrismaClientNovo } from "../../../prisma/databases/novoprisma";
import { ErrorResponse } from "../Error/ErrorResponse";
import { clienteNovo } from "../Interfaces/clientesInterface";
import { convertBigIntToString } from "../Utils";

export default class ClientesService {
	async troca(condicao_pagamento: number, prismaNovo: PrismaClientNovo, prismaAntigo: PrismaClientAntigo) {
		try {
			const clientesAntigos = await prismaAntigo.clientes.findMany({});
			const clientes: clienteNovo[] = clientesAntigos.map((clienteAntigo) => ({
				id_cliente: parseInt(convertBigIntToString(clienteAntigo.id)),
				id_sirius_cliente: parseInt(convertBigIntToString(clienteAntigo.id_sirius)),
				status_cliente: clienteAntigo.status,
				id_lista_preco_cliente: parseInt(convertBigIntToString(clienteAntigo.lista_preco_id)) > 0 ? parseInt(convertBigIntToString(clienteAntigo.lista_preco_id)) : null,
				id_condicao_pagamento_cliente: parseInt(convertBigIntToString(clienteAntigo.condicao_pagamento_id)) > 0 && parseInt(convertBigIntToString(clienteAntigo.condicao_pagamento_id)) < condicao_pagamento ? parseInt(convertBigIntToString(clienteAntigo.condicao_pagamento_id)) : null,
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
				contato_cliente: clienteAntigo.contato,
				nm_contato_cliente: clienteAntigo.contato_nome,
				id_condicao_pagamento_sirius_cliente: null,
			}));
			if (clientes.length > 0) {
				await prismaNovo.clientes.createMany({ data: clientes });
				const totalProdutos = await prismaNovo.clientes.count();
				const antigoCertiticado = await prismaAntigo.clientes.count();
				console.log(antigoCertiticado, " registros localizados em Clientes antigo");
				console.log(totalProdutos, " registros adicionados em Clientes novo");
				console.log("-----------------------------------------------------");
			} else {
				console.log("Clientes vazio");
			}
		} catch (error) {
			console.log(error);
			throw new ErrorResponse(500, "Erro interno do servidor ao trocar clientes: ");
		}
	}
}
