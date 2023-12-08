import { prismaAntigo, prismaNovo } from "../../../prisma";
import { clientes_produtos } from "../../../prisma/databases/novoprisma";
import { ErrorResponse } from "../Error/ErrorResponse";
import { convertBigIntToString } from "../Utils";

export default class ClientesProdutosService{
	async troca(){
		try {
			const ClientesProdutosAntigos = await prismaAntigo.clientes_x_produtos.findMany({});
			const ClientesProdutosNovos : clientes_produtos[] = ClientesProdutosAntigos.map((ClientesProdutosAntigo)=>({
				id_clipro: parseInt(convertBigIntToString(ClientesProdutosAntigo.id)),
				valor_clipro: ClientesProdutosAntigo.valor,
				id_cliente_clipro: parseInt(convertBigIntToString(ClientesProdutosAntigo.cliente_id)),
				id_produto_clipro: parseInt(convertBigIntToString(ClientesProdutosAntigo.produto_id)),
				id_sirius_clipro: parseInt(convertBigIntToString(ClientesProdutosAntigo.id_sirius))
			}));
			if(ClientesProdutosNovos.length > 0){
				await prismaNovo.clientes_produtos.createMany({data: ClientesProdutosNovos});
			}
		} catch (error) {
			throw new ErrorResponse(500, "Erro interno do servidor ao trocar Produtos Movimentacoes: " + error);
		}
	}
}