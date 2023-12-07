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

const prismaAntigo = createPrismaClient(process.env.DATABASE_URL || "");
const prismaNovo = createPrismaClient(process.env.DATABASE2_URL || "");

export { prismaAntigo, prismaNovo };
