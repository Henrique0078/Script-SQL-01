import { PrismaClient } from "@prisma/client";
import { prismaBancao, prismaBancaoAntigo } from "../../prisma";
import { ErrorResponse } from "../Model/Error/ErrorResponse";
import { empresas as empresasNovas} from "../../prisma/databases/bancaoprisma";
import { empresas as empresasVelhas} from "../../prisma/databases/bancaoAntigoprisma";
import createDatabase from "./dataBaseController";

export class migracao{
	async init(){
		try {
			let i = 0;
			//atualizando nome Empresas
			const empresas  = await prismaBancao.empresas.findMany({});
			empresas.forEach((empresa)=>{empresa.banco_empresa = empresa.banco_empresa+"-2";});
			await prismaBancao.empresas.updateMany({data:empresas});

			//pega nome das empresa antigas e novas
			const empresasOld = await prismaBancaoAntigo.empresas.findMany({});
			const empresasNew = await prismaBancao.empresas.findMany({});
			// cria os prismas
			for (let i = 0; i < empresasNew.length; i++) {
				await createDatabase(empresasNew[i].banco_empresa);
				const {velhoPrisma,novoPrisma} = this.gerarPrismas(empresasOld[i],empresasNew[i]);

			}
		} catch (error:any) {
			throw new ErrorResponse(500,"FUDEU TUDO");
		}
	}
	gerarPrismas(empresaVelha:empresasVelhas,empresanova:empresasNovas){
		const velhoPrisma = new PrismaClient({
			datasources: {
				db: {
					url: `mysql://root:soft@1973@localhost:3306/${empresaVelha.banco}`
				}
			}
		});

		const novoPrisma = new PrismaClient({
			datasources: {
				db: {
					url:`mysql://root:soft@1973@localhost:3306/${empresanova.banco_empresa}`
				}
			}
		});
		return {velhoPrisma,novoPrisma};
	}
}
