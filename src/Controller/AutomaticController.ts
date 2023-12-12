/* eslint-disable @typescript-eslint/no-explicit-any */
import { PrismaClient as OldPrismaClient }  from "../../prisma/databases/antigoprisma";
import { PrismaClient as NewPrismaClient} from "../../prisma/databases/novoprisma";
import { prismaBancao, prismaBancaoAntigo } from "../../prisma";
import { ErrorResponse } from "../Model/Error/ErrorResponse";
import { empresas as empresasNovas} from "../../prisma/databases/bancaoprisma";
import { empresas as empresasVelhas} from "../../prisma/databases/bancaoAntigoprisma";
import createDatabase from "./dataBaseController";
import { TrocaController } from "./TrocaController";

export class migracao{
	async init(){
		try {
			//atualizando nome Empresas
			const empresas  = await prismaBancao.empresas.findMany({});
			//empresas.forEach((empresa)=>{empresa.banco_empresa = empresa.banco_empresa+"-2";});
			for (const empresa of empresas){
				empresa.banco_empresa = empresa.banco_empresa+"_2";
				await prismaBancao.empresas.update({
					where:{id_empresa: empresa.id_empresa},
					data:{banco_empresa : empresa.banco_empresa}
				});
			}
			//await prismaBancao.empresas.updateMany({data:empresas});

			//pega nome das empresa antigas e novas
			const empresasOld = await prismaBancaoAntigo.empresas.findMany({});
			const empresasNew = await prismaBancao.empresas.findMany({});
			// cria os prismas
			for (const empresaNova of empresasNew) {
				// Use 'of' for each element in 'empresasOld'
				for (const empresaAntiga of empresasOld) {
					await createDatabase(empresaNova.banco_empresa);
					const { velhoPrisma, novoPrisma } = this.gerarPrismas(empresaAntiga.banco, empresaNova.banco_empresa);
					const Service = new TrocaController();
					await Service.troca(novoPrisma, velhoPrisma);
				}
			}
			
			// for (let i = 0; i < empresasNew.length; i++) {
			// 	await createDatabase(empresasNew[i].banco_empresa);
			// 	const {velhoPrisma,novoPrisma} = this.gerarPrismas(empresasOld[i],empresasNew[i]);
			// 	const Service = new TrocaController();
			// 	await Service.troca(novoPrisma,velhoPrisma);

			// }
		} catch (error:any) {
			throw new ErrorResponse(500,"FUDEU TUDO: " + error);
		}
	}
	// gerarPrismas(empresaVelha:empresasVelhas,empresanova:empresasNovas){
	// 	const velhoPrisma = new OldPrismaClient({
	// 		datasources: {
	// 			db: {
	// 				url: `mysql://root:soft@1973@localhost:3306/${empresaVelha.banco}`
	// 			}
	// 		}
	// 	});

	// 	const novoPrisma = new NewPrismaClient({
	// 		datasources: {
	// 			db2: {
	// 				url:`mysql://root:soft@1973@localhost:3306/${empresanova.banco_empresa}`
	// 			}
	// 		}
	// 	});
	// 	return {velhoPrisma,novoPrisma};
	// }
	gerarPrismas(empresaVelha: string, empresaNova: string){
		const velhoPrisma = new OldPrismaClient({
			datasources: {
				db: {
					url: `mysql://root:soft@1973@localhost:3306/${empresaVelha}`
				}
			}
		});
		
		const novoPrisma = new NewPrismaClient({
			datasources: {
				db2: {
					url:`mysql://root:soft@1973@localhost:3306/${empresaNova}`
				}
			}
		});
		return {velhoPrisma,novoPrisma};
	}
}
