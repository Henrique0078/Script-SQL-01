
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  detectRuntime,
} = require('./runtime/index-browser')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.5.2
 * Query Engine version: aebc046ce8b88ebbcb45efe31cbe7d06fd6abc0a
 */
Prisma.prismaVersion = {
  client: "5.5.2",
  engine: "aebc046ce8b88ebbcb45efe31cbe7d06fd6abc0a"
}

Prisma.PrismaClientKnownRequestError = () => {
  throw new Error(`PrismaClientKnownRequestError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  throw new Error(`PrismaClientUnknownRequestError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientRustPanicError = () => {
  throw new Error(`PrismaClientRustPanicError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientInitializationError = () => {
  throw new Error(`PrismaClientInitializationError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientValidationError = () => {
  throw new Error(`PrismaClientValidationError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.NotFoundError = () => {
  throw new Error(`NotFoundError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  throw new Error(`sqltag is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.empty = () => {
  throw new Error(`empty is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.join = () => {
  throw new Error(`join is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.raw = () => {
  throw new Error(`raw is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  throw new Error(`Extensions.getExtensionContext is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.defineExtension = () => {
  throw new Error(`Extensions.defineExtension is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}

/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.ParametrosScalarFieldEnum = {
  id_parametro: 'id_parametro',
  nm_parametro: 'nm_parametro',
  valor_parametro: 'valor_parametro',
  descricao_parametro: 'descricao_parametro'
};

exports.Prisma.AtividadesScalarFieldEnum = {
  id_atividade: 'id_atividade',
  nm_atividade: 'nm_atividade',
  valor_atividade: 'valor_atividade',
  descricao_atividade: 'descricao_atividade'
};

exports.Prisma.EmpresasScalarFieldEnum = {
  id_empresa: 'id_empresa',
  cnpj_empresa: 'cnpj_empresa',
  razao_social_empresa: 'razao_social_empresa',
  nome_fantasia_empresa: 'nome_fantasia_empresa',
  logradouro_empresa: 'logradouro_empresa',
  numero_empresa: 'numero_empresa',
  complemento_empresa: 'complemento_empresa',
  bairro_empresa: 'bairro_empresa',
  codigo_municipal_empresa: 'codigo_municipal_empresa',
  municipio_empresa: 'municipio_empresa',
  uf_empresa: 'uf_empresa',
  cep_empresa: 'cep_empresa',
  telefone_empresa: 'telefone_empresa',
  inscricao_estadual_empresa: 'inscricao_estadual_empresa',
  certificado_empresa: 'certificado_empresa',
  banco_empresa: 'banco_empresa',
  status_empresa: 'status_empresa',
  email_empresa: 'email_empresa',
  versao_banco_empresa: 'versao_banco_empresa'
};

exports.Prisma.Modulo_empresaScalarFieldEnum = {
  id_modulo_me: 'id_modulo_me',
  id_empresa_me: 'id_empresa_me'
};

exports.Prisma.ModulosScalarFieldEnum = {
  id_modulo: 'id_modulo',
  nm_modulo: 'nm_modulo'
};

exports.Prisma.Usuario_empresaScalarFieldEnum = {
  id_ue: 'id_ue',
  id_usuario_ue: 'id_usuario_ue',
  id_empresa_ue: 'id_empresa_ue'
};

exports.Prisma.UsuariosScalarFieldEnum = {
  id_usuario: 'id_usuario',
  nm_usuario: 'nm_usuario',
  ultimo_nome_usuario: 'ultimo_nome_usuario',
  email_usuario: 'email_usuario',
  senha_usuario: 'senha_usuario',
  celular_usuario: 'celular_usuario',
  status_usuario: 'status_usuario'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};


exports.Prisma.ModelName = {
  parametros: 'parametros',
  atividades: 'atividades',
  empresas: 'empresas',
  modulo_empresa: 'modulo_empresa',
  modulos: 'modulos',
  usuario_empresa: 'usuario_empresa',
  usuarios: 'usuarios'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        const runtime = detectRuntime()
        const edgeRuntimeName = {
          'workerd': 'Cloudflare Workers',
          'deno': 'Deno and Deno Deploy',
          'netlify': 'Netlify Edge Functions',
          'edge-light': 'Vercel Edge Functions',
        }[runtime]

        let message = 'PrismaClient is unable to run in '
        if (edgeRuntimeName !== undefined) {
          message += edgeRuntimeName + '. As an alternative, try Accelerate: https://pris.ly/d/accelerate.'
        } else {
          message += 'this browser environment, or has been bundled for the browser (running in `' + runtime + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://github.com/prisma/prisma/issues`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
