import { prismaNovo, prismaAntigo } from "../../../prisma";
import { certificado } from "../../../prisma/databases/novoprisma";
import { ErrorResponse } from "../Error/ErrorResponse";

export default class ClientesService{
	async troca(){
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
			}
		} catch (error) {
			throw new ErrorResponse(500, "Erro interno do servidor ao trocar Certificado: " + error);
		}
	}
}
