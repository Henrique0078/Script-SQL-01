/* eslint-disable @typescript-eslint/no-explicit-any */
import { PrismaClient as OldPrismaClient } from "../../prisma/databases/antigoprisma";
import { PrismaClient as NewPrismaClient } from "../../prisma/databases/novoprisma";
import { prismaBancao, prismaBancaoAntigo } from "../../prisma";
import { ErrorResponse } from "../Model/Error/ErrorResponse";
import { empresas as empresasNovas } from "../../prisma/databases/bancaoprisma";
import { empresas as empresasVelhas } from "../../prisma/databases/bancaoAntigoprisma";
import createDatabase from "./dataBaseController";
import { TrocaController } from "./TrocaController";
import { Request, Response } from "express";

export class migracao {
	async init(req:Request, res:Response) {
		try {
			//atualizando nome Empresas
			const empresas = await prismaBancao.empresas.findMany({});
			for (const empresa of empresas) {
				empresa.banco_empresa = empresa.banco_empresa + "_2";
				await prismaBancao.empresas.update({
					where: { id_empresa: empresa.id_empresa },
					data: { banco_empresa: empresa.banco_empresa }
				});
			}

			//pega nome das empresa antigas e novas
			let empresasOld = await prismaBancaoAntigo.empresas.findMany({});
			let empresasNew = await prismaBancao.empresas.findMany({});

			const nomesDesejadosAntigos = [
				"b68241843000113",
				"b68241843000213",
				"b00739197000185",
				"b50275217000182",
				"b50275217000282"
			];

			const nomesDesejadosNovos = [
				"b68241843000113_2",
				"b68241843000213_2",
				"b00739197000185_2",
				"b50275217000182_2",
				"b50275217000282_2"
			];

			empresasNew = empresasNew.filter(empresa => nomesDesejadosNovos.includes(empresa.banco_empresa));
			empresasOld = empresasOld.filter(empresa => nomesDesejadosAntigos.includes(empresa.banco));

			for (let i = 0; i < empresasNew.length; i++) {
				await createDatabase(empresasNew[i].banco_empresa);
				const empresaVelha = empresasOld[i];
				const empresaNova = empresasNew[i];
				const { velhoPrisma, novoPrisma } = gerarPrismas(empresaVelha,empresaNova);
				console.log(empresasNew[i].banco_empresa);
				const Service = new TrocaController();
				await Service.troca(novoPrisma, velhoPrisma);
			}
			console.log("-------------------------------------------");
			console.log("------------------Terminou-----------------");
			res.status(200).json({message:"Ook"});
		} catch (error: any) {
			throw new ErrorResponse(500, error);
		}
	}
}
export function gerarPrismas(empresaVelha: empresasVelhas, empresanova: empresasNovas) {
	const newUrl = `mysql://root:soft@1973@localhost:3306/${empresanova.banco_empresa.replace(/\s/g, "")}?schema=public`;
	const oldUrl = `mysql://root:soft@1973@localhost:3306/${empresaVelha.banco.replace(/\s/g, "")}?schema=public`;
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
