/* eslint-disable @typescript-eslint/no-explicit-any */
import { PrismaClient as OldPrismaClient } from "../../prisma/databases/antigoprisma";
import { PrismaClient as NewPrismaClient } from "../../prisma/databases/novoprisma";
import { prismaBancao, prismaBancaoAntigo } from "../../prisma";
import { ErrorResponse } from "../Model/Error/ErrorResponse";
import { empresas as empresasNovas } from "../../prisma/databases/bancaoprisma";
import { empresas as empresasVelhas } from "../../prisma/databases/bancaoAntigoprisma";
import createDatabase from "./dataBaseController";
import { TrocaController } from "./TrocaController";

export class migracao {
	async init() {
		try {
			//atualizando nome Empresas
			const empresas = await prismaBancao.empresas.findMany({});
			//empresas.forEach((empresa)=>{empresa.banco_empresa = empresa.banco_empresa+"-2";});
			for (const empresa of empresas) {
				empresa.banco_empresa = empresa.banco_empresa + "_2";
				await prismaBancao.empresas.update({
					where: { id_empresa: empresa.id_empresa },
					data: { banco_empresa: empresa.banco_empresa }
				});
			}
			//await prismaBancao.empresas.updateMany({data:empresas});

			//pega nome das empresa antigas e novas
			const empresasOld = await prismaBancaoAntigo.empresas.findMany({});
			const empresasNew = await prismaBancao.empresas.findMany({});
			// cria os prismas

			for (let i = 0; i < empresasNew.length; i++) {
				await createDatabase(empresasNew[i].banco_empresa);
				const empresaVelha = empresasOld[i];
				const empresaNova = empresasNew[i];
				const { velhoPrisma, novoPrisma } = gerarPrismas(empresaVelha,empresaNova);
				console.log(empresasNew[i].banco_empresa);
				const Service = new TrocaController();
				await Service.troca(novoPrisma, velhoPrisma);
			}
		} catch (error: any) {
			throw new ErrorResponse(500, error);
		}
	}
}
export function gerarPrismas(empresaVelha: empresasVelhas, empresanova: empresasNovas) {
	const newUrl = `mysql://avelino:coxinha123@192.168.0.144:3306/${empresanova.banco_empresa.replace(/\s/g, "")}?schema=public`;
	const oldUrl = `mysql://avelino:coxinha123@192.168.0.144:3306/${empresaVelha.banco.replace(/\s/g, "")}?schema=public`;
	const velhoPrisma = new OldPrismaClient({
		datasources: {
			db: {
				url: oldUrl,
			}
		}
	});

	const novoPrisma = new NewPrismaClient({
		datasources: {
			db2: {
				url: newUrl,
			}
		}
	});
	return { velhoPrisma, novoPrisma };
}
