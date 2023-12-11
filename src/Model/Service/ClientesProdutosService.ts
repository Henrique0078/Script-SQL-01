import { prismaNovo, prismaAntigo } from "../../../prisma";
import { clientes_produtos } from "../../../prisma/databases/novoprisma";
import { ErrorResponse } from "../Error/ErrorResponse";

import { convertBigIntToString } from "../Utils";

export default class ClientesProdutosService{
	async troca(){
		try {
			const clientesProdutosAntigos = await prismaAntigo.clientes_x_produtos.findMany({});
			const clientesProdutos: clientes_produtos[] = clientesProdutosAntigos.map((clienteProdutosAntigo) => ({
				id_clipro: parseInt(convertBigIntToString(clienteProdutosAntigo.id)),
				valor_clipro: clienteProdutosAntigo.valor,
				id_cliente_clipro: parseInt(convertBigIntToString(clienteProdutosAntigo.cliente_id)),
				id_produto_clipro: parseInt(convertBigIntToString(clienteProdutosAntigo.produto_id)),
				id_sirius_clipro: parseInt(convertBigIntToString(clienteProdutosAntigo.id_sirius))
			}));
			if(clientesProdutos.length > 0){
				await prismaNovo.clientes_produtos.createMany({data: clientesProdutos});
				const totalProdutos = await prismaNovo.clientes_produtos.count();
				const antigoCertiticado = await prismaAntigo.clientes_x_produtos.count();
				console.log(antigoCertiticado, " registros localizados em Cliente Produtos antigo");
				console.log(totalProdutos, " registros adicionados em Cliente Produtos novo");
			}
		} catch (error) {
			throw new ErrorResponse(500, "Erro interno do servidor ao trocar clientes: " + error);
		}
	}
}