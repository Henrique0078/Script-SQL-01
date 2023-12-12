import { PrismaClient as PrismaClientAntigo} from "../../../prisma/databases/antigoprisma";
import { PrismaClient as PrismaClientNovo } from "../../../prisma/databases/novoprisma";
import { certificado } from "../../../prisma/databases/novoprisma";
import { ErrorResponse } from "../Error/ErrorResponse";

export default class CertificadoService{
	async troca(prismaNovo:PrismaClientNovo, prismaAntigo: PrismaClientAntigo){
		try {
			const certificadosAntigos = await prismaAntigo.certificado.findMany({});
			const certificados :certificado[] = certificadosAntigos.map((certificadoAntigo) => ({
				id_certificado: certificadoAntigo.id,
				senha_certificado: certificadoAntigo.senhaCert,
				serie_certificado: certificadoAntigo.serieCert,
				nm_certificado: certificadoAntigo.nomeCert,
				path_certificado: certificadoAntigo.pathCert,
			}));
			if(certificados.length > 0){
				await prismaNovo.certificado.createMany({data: certificados});
				const totalProdutos = await prismaNovo.certificado.count();
				const antigoCertiticado = await prismaAntigo.certificado.count();
				console.log(antigoCertiticado, " registros localizados em Certificado antigo");
				console.log(totalProdutos, " registros adicionados em Certificado novo");
				console.log("-----------------------------------------------------");
			}else{
				console.log("Certificado vazio");
			}
		} catch (error) {
			throw new ErrorResponse(500, "Erro interno do servidor ao trocar Certificado: " + error);
		}
	}
}
