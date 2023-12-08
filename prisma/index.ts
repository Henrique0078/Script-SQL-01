import { PrismaClient as OldPrismaClient }  from "./databases/antigoprisma";
import { PrismaClient as NewPrismaClient} from "./databases/novoprisma";

const prismaAntigo = new OldPrismaClient();
const prismaNovo = new NewPrismaClient();

export { prismaAntigo, prismaNovo };
