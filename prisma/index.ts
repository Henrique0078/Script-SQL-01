import { PrismaClient } from "@prisma/client";

const createPrismaClient = (databaseUrl: string) => {
	return new PrismaClient({
		datasources: {
			db: {
				url: databaseUrl,
			},
		},
	});
};

const prismaNovo = createPrismaClient(process.env.DATABASE_URL || "");
const prismaAntigo = createPrismaClient(process.env.DATABASE2_URL || "");

export { prismaAntigo, prismaNovo };
