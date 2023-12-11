import { prismaAntigo, prismaNovo } from "../../../prisma";
import { ErrorResponse } from "../Error/ErrorResponse";
import { convertBigIntToString } from "../Utils";

export default class ProdutosService{
	async troca(){
		try {
			const ProdutosAntigos = await prismaAntigo.produtos.findMany({});
			const ProdutosNovos = ProdutosAntigos.map((ProdutosAntigo)=>({
				id_prod: parseInt(convertBigIntToString(ProdutosAntigo.id)),
				id_sirius_prod: parseInt(convertBigIntToString(ProdutosAntigo.id_sirius)),
				cod_prod: ProdutosAntigo.codProduto != "" ? ProdutosAntigo.codProduto : null,
				descricao_prod: ProdutosAntigo.descricao,
				cod_ean_prod: ProdutosAntigo.codEAN != "" ? ProdutosAntigo.codEAN : null,
				ncm_prod: ProdutosAntigo.ncm,
				cfop_prod: ProdutosAntigo.cfop,
				un_com_prod: ProdutosAntigo.unCom,
				qtd_com_prod: ProdutosAntigo.qtdCom,
				vlr_un_com_prod: ProdutosAntigo.vlrUnCom,
				vlr_prod: ProdutosAntigo.vlrProd,
				cod_ean_trib_prod: ProdutosAntigo.codEAN,
				un_trib_prod: ProdutosAntigo.unTrib,
				qtd_trib_prod: ProdutosAntigo.qtdTrib,
				vlr_un_trib_prod: ProdutosAntigo.vlrUnTrib,
				saldo_prod: ProdutosAntigo.saldo,
				status_prod: ProdutosAntigo.status,
				texto_prod: null,
				novo_prod: null,
				acucar_prod: null,
				lactose_prod: null,
				gluten_prod: null,
				vegetariano_prod: null,
				vegano_prod: null
			}));
			if(ProdutosNovos.length > 0){
				await prismaNovo.produtos.createMany({data: ProdutosNovos});
				const totalProdutos = await prismaNovo.produtos.count();
				const antigoCertiticado = await prismaAntigo.produtos.count();
				console.log(antigoCertiticado, " registros localizados em Produtos antigo");
				console.log(totalProdutos, " registros adicionados em Produtos novo");
				console.log("-----------------------------------------------------");
			}else{
				console.log("Produtos vazio");
			}
		} catch (error) {
			throw new ErrorResponse(500, "Erro interno do servidor ao trocar Produtos: " + error);
		}
	}
}