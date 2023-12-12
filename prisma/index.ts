import { PrismaClient as OldPrismaClient }  from "./databases/antigoprisma";
import { PrismaClient as NewPrismaClient} from "./databases/novoprisma";
import { PrismaClient as BancaoPrismaCliente} from "./databases/bancaoprisma";
import { PrismaClient as BancaoAntigoPrismaCliente} from "./databases/bancaoAntigoprisma";


const prismaAntigo = new OldPrismaClient();

const prismaNovo = new NewPrismaClient();

const prismaBancao = new BancaoPrismaCliente();

const prismaBancaoAntigo = new BancaoAntigoPrismaCliente();

export { prismaAntigo, prismaNovo, prismaBancao, prismaBancaoAntigo };
