
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  NotFoundError,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions,
  warnOnce,
  defineDmmfProperty,
  Public,
} = require('./runtime/library')


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

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.NotFoundError = NotFoundError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = Extensions.getExtensionContext
Prisma.defineExtension = Extensions.defineExtension

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


  const path = require('path')

/**
 * Enums
 */
exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.EmpresasScalarFieldEnum = {
  id: 'id',
  cnpj: 'cnpj',
  xRazaoSocial: 'xRazaoSocial',
  xFant: 'xFant',
  xLgr: 'xLgr',
  nro: 'nro',
  xCpl: 'xCpl',
  xBairro: 'xBairro',
  cMun: 'cMun',
  xMun: 'xMun',
  uf: 'uf',
  cep: 'cep',
  fone: 'fone',
  ie: 'ie',
  crt: 'crt',
  token: 'token',
  banco: 'banco',
  status: 'status',
  email: 'email',
  idAtualizacaoBanco: 'idAtualizacaoBanco'
};

exports.Prisma.UsuariosScalarFieldEnum = {
  id: 'id',
  nome: 'nome',
  ultimo_nome: 'ultimo_nome',
  email: 'email',
  senha: 'senha',
  celular: 'celular',
  status: 'status',
  user_token: 'user_token',
  exclusivo: 'exclusivo'
};

exports.Prisma.Usuarios_x_empresasScalarFieldEnum = {
  id: 'id',
  id_empresa: 'id_empresa',
  id_usuario: 'id_usuario',
  id_grupo_usuario: 'id_grupo_usuario'
};

exports.Prisma.AcoesScalarFieldEnum = {
  id: 'id',
  descricao: 'descricao',
  descricao_titulo: 'descricao_titulo',
  tabela: 'tabela',
  tabela_titulo: 'tabela_titulo',
  valor_padrao: 'valor_padrao'
};

exports.Prisma.Acoes_x_gruposScalarFieldEnum = {
  id: 'id',
  id_acao: 'id_acao',
  id_grupo_usuario: 'id_grupo_usuario',
  permite: 'permite'
};

exports.Prisma.Grupos_usuariosScalarFieldEnum = {
  id: 'id',
  nome: 'nome',
  id_empresa: 'id_empresa',
  pagina_inicial: 'pagina_inicial'
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
  empresas: 'empresas',
  usuarios: 'usuarios',
  usuarios_x_empresas: 'usuarios_x_empresas',
  acoes: 'acoes',
  acoes_x_grupos: 'acoes_x_grupos',
  grupos_usuarios: 'grupos_usuarios'
};
/**
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "C:\\Users\\usuario022\\Desktop\\GitHub\\Script-SQL-01\\prisma\\databases\\bancaoAntigoprisma",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [
      {
        "fromEnvVar": null,
        "value": "windows",
        "native": true
      },
      {
        "fromEnvVar": null,
        "value": "debian-openssl-1.1.x"
      }
    ],
    "previewFeatures": [
      "views"
    ],
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": "../../../.env",
    "schemaEnvPath": "../../../.env"
  },
  "relativePath": "../..",
  "clientVersion": "5.5.2",
  "engineVersion": "aebc046ce8b88ebbcb45efe31cbe7d06fd6abc0a",
  "datasourceNames": [
    "db2"
  ],
  "activeProvider": "mysql",
  "postinstall": false,
  "inlineDatasources": {
    "db2": {
      "url": {
        "fromEnvVar": "DATABASE4_URL",
        "value": null
      }
    }
  },
  "inlineSchema": "Z2VuZXJhdG9yIGNsaWVudCB7CiAgcHJvdmlkZXIgICAgICAgID0gInByaXNtYS1jbGllbnQtanMiCiAgb3V0cHV0ICAgICAgICAgID0gIi4vZGF0YWJhc2VzL2JhbmNhb0FudGlnb3ByaXNtYSIKICBwcmV2aWV3RmVhdHVyZXMgPSBbInZpZXdzIl0KICBiaW5hcnlUYXJnZXRzICAgPSBbIm5hdGl2ZSIsICJkZWJpYW4tb3BlbnNzbC0xLjEueCJdCn0KCmRhdGFzb3VyY2UgZGIyIHsKICBwcm92aWRlciA9ICJteXNxbCIKICB1cmwgICAgICA9IGVudigiREFUQUJBU0U0X1VSTCIpCn0KCm1vZGVsIGVtcHJlc2FzIHsKICBpZCAgICAgICAgICAgICAgICAgIEJpZ0ludCAgICAgICAgICAgICAgICBAaWQgQHVuaXF1ZShtYXA6ICJpZCIpIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkKICBjbnBqICAgICAgICAgICAgICAgIFN0cmluZyAgICAgICAgICAgICAgICBAZGIyLlZhckNoYXIoMTgpCiAgeFJhemFvU29jaWFsICAgICAgICBTdHJpbmcgICAgICAgICAgICAgICAgQGRiMi5WYXJDaGFyKDYwKQogIHhGYW50ICAgICAgICAgICAgICAgU3RyaW5nICAgICAgICAgICAgICAgIEBkYjIuVmFyQ2hhcig2MCkKICB4TGdyICAgICAgICAgICAgICAgIFN0cmluZyAgICAgICAgICAgICAgICBAZGIyLlZhckNoYXIoNjApCiAgbnJvICAgICAgICAgICAgICAgICBTdHJpbmcgICAgICAgICAgICAgICAgQGRiMi5WYXJDaGFyKDYwKQogIHhDcGwgICAgICAgICAgICAgICAgU3RyaW5nICAgICAgICAgICAgICAgIEBkYjIuVmFyQ2hhcig2MCkKICB4QmFpcnJvICAgICAgICAgICAgIFN0cmluZyAgICAgICAgICAgICAgICBAZGIyLlZhckNoYXIoNjApCiAgY011biAgICAgICAgICAgICAgICBTdHJpbmcgICAgICAgICAgICAgICAgQGRiMi5WYXJDaGFyKDcpCiAgeE11biAgICAgICAgICAgICAgICBTdHJpbmcgICAgICAgICAgICAgICAgQGRiMi5WYXJDaGFyKDYwKQogIHVmICAgICAgICAgICAgICAgICAgU3RyaW5nICAgICAgICAgICAgICAgIEBkYjIuQ2hhcigyKQogIGNlcCAgICAgICAgICAgICAgICAgU3RyaW5nICAgICAgICAgICAgICAgIEBkYjIuVmFyQ2hhcig4KQogIGZvbmUgICAgICAgICAgICAgICAgU3RyaW5nICAgICAgICAgICAgICAgIEBkYjIuVmFyQ2hhcigxNCkKICBpZSAgICAgICAgICAgICAgICAgIFN0cmluZyAgICAgICAgICAgICAgICBAZGIyLlZhckNoYXIoMTQpCiAgY3J0ICAgICAgICAgICAgICAgICBTdHJpbmcgICAgICAgICAgICAgICAgQGRiMi5WYXJDaGFyKDEpCiAgdG9rZW4gICAgICAgICAgICAgICBTdHJpbmcgICAgICAgICAgICAgICAgQHVuaXF1ZShtYXA6ICJ0b2tlbiIpIEBkYjIuVmFyQ2hhcigxMDApCiAgYmFuY28gICAgICAgICAgICAgICBTdHJpbmcgICAgICAgICAgICAgICAgQGRiMi5WYXJDaGFyKDEwMCkKICBzdGF0dXMgICAgICAgICAgICAgIFN0cmluZyAgICAgICAgICAgICAgICBAZGIyLlZhckNoYXIoMSkKICBlbWFpbCAgICAgICAgICAgICAgIFN0cmluZz8gICAgICAgICAgICAgICBAZGIyLlZhckNoYXIoMTI5KQogIGlkQXR1YWxpemFjYW9CYW5jbyAgSW50PyAgICAgICAgICAgICAgICAgIEBkZWZhdWx0KDApCiAgZ3J1cG9zX3VzdWFyaW9zICAgICBncnVwb3NfdXN1YXJpb3NbXQogIHVzdWFyaW9zX3hfZW1wcmVzYXMgdXN1YXJpb3NfeF9lbXByZXNhc1tdCn0KCm1vZGVsIHVzdWFyaW9zIHsKICBpZCAgICAgICAgICAgICAgICAgIEJpZ0ludCAgICAgICAgICAgICAgICBAaWQgQHVuaXF1ZShtYXA6ICJpZCIpIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkKICBub21lICAgICAgICAgICAgICAgIFN0cmluZz8gICAgICAgICAgICAgICBAZGIyLlZhckNoYXIoNjApCiAgdWx0aW1vX25vbWUgICAgICAgICBTdHJpbmc/ICAgICAgICAgICAgICAgQGRiMi5WYXJDaGFyKDYwKQogIGVtYWlsICAgICAgICAgICAgICAgU3RyaW5nPyAgICAgICAgICAgICAgIEBkYjIuVmFyQ2hhcigxNTApCiAgc2VuaGEgICAgICAgICAgICAgICBTdHJpbmc/CiAgY2VsdWxhciAgICAgICAgICAgICBTdHJpbmc/ICAgICAgICAgICAgICAgQGRiMi5WYXJDaGFyKDE0KQogIHN0YXR1cyAgICAgICAgICAgICAgU3RyaW5nPyAgICAgICAgICAgICAgIEBkYjIuQ2hhcigxKQogIHVzZXJfdG9rZW4gICAgICAgICAgU3RyaW5nICAgICAgICAgICAgICAgIEB1bmlxdWUobWFwOiAidXNlcl90b2tlbiIpIEBkYjIuVmFyQ2hhcigxMDApCiAgZXhjbHVzaXZvICAgICAgICAgICBTdHJpbmc/ICAgICAgICAgICAgICAgQGRlZmF1bHQoIk4iKSBAZGIyLkNoYXIoMSkKICB1c3Vhcmlvc194X2VtcHJlc2FzIHVzdWFyaW9zX3hfZW1wcmVzYXNbXQp9Cgptb2RlbCB1c3Vhcmlvc194X2VtcHJlc2FzIHsKICBpZCAgICAgICAgICAgICAgIEJpZ0ludCAgICAgICAgICBAaWQgQHVuaXF1ZShtYXA6ICJpZCIpIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkKICBpZF9lbXByZXNhICAgICAgIEJpZ0ludAogIGlkX3VzdWFyaW8gICAgICAgQmlnSW50CiAgaWRfZ3J1cG9fdXN1YXJpbyBCaWdJbnQKICBlbXByZXNhcyAgICAgICAgIGVtcHJlc2FzICAgICAgICBAcmVsYXRpb24oZmllbGRzOiBbaWRfZW1wcmVzYV0sIHJlZmVyZW5jZXM6IFtpZF0sIG9uVXBkYXRlOiBSZXN0cmljdCwgbWFwOiAidXN1YXJpb3NfeF9lbXByZXNhc19pYmZrXzEiKQogIHVzdWFyaW9zICAgICAgICAgdXN1YXJpb3MgICAgICAgIEByZWxhdGlvbihmaWVsZHM6IFtpZF91c3VhcmlvXSwgcmVmZXJlbmNlczogW2lkXSwgb25VcGRhdGU6IFJlc3RyaWN0LCBtYXA6ICJ1c3Vhcmlvc194X2VtcHJlc2FzX2liZmtfMiIpCiAgZ3J1cG9zX3VzdWFyaW9zICBncnVwb3NfdXN1YXJpb3MgQHJlbGF0aW9uKGZpZWxkczogW2lkX2dydXBvX3VzdWFyaW9dLCByZWZlcmVuY2VzOiBbaWRdLCBvblVwZGF0ZTogUmVzdHJpY3QsIG1hcDogInVzdWFyaW9zX3hfZW1wcmVzYXNfaWJma18zIikKCiAgQEBpbmRleChbaWRfZW1wcmVzYV0sIG1hcDogImlkX2VtcHJlc2EiKQogIEBAaW5kZXgoW2lkX3VzdWFyaW9dLCBtYXA6ICJpZF91c3VhcmlvIikKICBAQGluZGV4KFtpZF9ncnVwb191c3VhcmlvXSwgbWFwOiAiaWRfZ3J1cG9fdXN1YXJpbyIpCn0KCm1vZGVsIGFjb2VzIHsKICBpZCAgICAgICAgICAgICAgIEJpZ0ludCAgICAgICAgICAgQGlkIEB1bmlxdWUobWFwOiAiaWQiKSBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpCiAgZGVzY3JpY2FvICAgICAgICBTdHJpbmcgICAgICAgICAgIEBkYjIuVmFyQ2hhcigxMDApCiAgZGVzY3JpY2FvX3RpdHVsbyBTdHJpbmcgICAgICAgICAgIEBkYjIuVmFyQ2hhcigxMDApCiAgdGFiZWxhICAgICAgICAgICBTdHJpbmcgICAgICAgICAgIEBkYjIuVmFyQ2hhcig0MCkKICB0YWJlbGFfdGl0dWxvICAgIFN0cmluZyAgICAgICAgICAgQGRiMi5WYXJDaGFyKDQwKQogIHZhbG9yX3BhZHJhbyAgICAgSW50PyAgICAgICAgICAgICBAZGVmYXVsdCgwKQogIGFjb2VzX3hfZ3J1cG9zICAgYWNvZXNfeF9ncnVwb3NbXQp9Cgptb2RlbCBhY29lc194X2dydXBvcyB7CiAgaWQgICAgICAgICAgICAgICBCaWdJbnQgICAgICAgICAgQGlkIEB1bmlxdWUobWFwOiAiaWQiKSBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpCiAgaWRfYWNhbyAgICAgICAgICBCaWdJbnQKICBpZF9ncnVwb191c3VhcmlvIEJpZ0ludAogIHBlcm1pdGUgICAgICAgICAgSW50CiAgYWNvZXMgICAgICAgICAgICBhY29lcyAgICAgICAgICAgQHJlbGF0aW9uKGZpZWxkczogW2lkX2FjYW9dLCByZWZlcmVuY2VzOiBbaWRdLCBvblVwZGF0ZTogUmVzdHJpY3QsIG1hcDogImFjb2VzX3hfZ3J1cG9zX2liZmtfMSIpCiAgZ3J1cG9zX3VzdWFyaW9zICBncnVwb3NfdXN1YXJpb3MgQHJlbGF0aW9uKGZpZWxkczogW2lkX2dydXBvX3VzdWFyaW9dLCByZWZlcmVuY2VzOiBbaWRdLCBvblVwZGF0ZTogUmVzdHJpY3QsIG1hcDogImFjb2VzX3hfZ3J1cG9zX2liZmtfMiIpCgogIEBAaW5kZXgoW2lkX2FjYW9dLCBtYXA6ICJpZF9hY2FvIikKICBAQGluZGV4KFtpZF9ncnVwb191c3VhcmlvXSwgbWFwOiAiaWRfZ3J1cG9fdXN1YXJpbyIpCn0KCm1vZGVsIGdydXBvc191c3VhcmlvcyB7CiAgaWQgICAgICAgICAgICAgICAgICBCaWdJbnQgICAgICAgICAgICAgICAgQGlkIEB1bmlxdWUobWFwOiAiaWQiKSBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpCiAgbm9tZSAgICAgICAgICAgICAgICBTdHJpbmcgICAgICAgICAgICAgICAgQGRiMi5WYXJDaGFyKDUwKQogIGlkX2VtcHJlc2EgICAgICAgICAgQmlnSW50CiAgcGFnaW5hX2luaWNpYWwgICAgICBTdHJpbmcgICAgICAgICAgICAgICAgQGRlZmF1bHQoIm5vdGFzLWZpc2NhaXMiKSBAZGIyLlZhckNoYXIoMjApCiAgYWNvZXNfeF9ncnVwb3MgICAgICBhY29lc194X2dydXBvc1tdCiAgZW1wcmVzYXMgICAgICAgICAgICBlbXByZXNhcyAgICAgICAgICAgICAgQHJlbGF0aW9uKGZpZWxkczogW2lkX2VtcHJlc2FdLCByZWZlcmVuY2VzOiBbaWRdLCBvblVwZGF0ZTogUmVzdHJpY3QsIG1hcDogImdydXBvc191c3Vhcmlvc19pYmZrXzEiKQogIHVzdWFyaW9zX3hfZW1wcmVzYXMgdXN1YXJpb3NfeF9lbXByZXNhc1tdCgogIEBAaW5kZXgoW2lkX2VtcHJlc2FdLCBtYXA6ICJpZF9lbXByZXNhIikKfQo=",
  "inlineSchemaHash": "9e00431c89b00414e856170c20843157d2d9fab4b4621f1b1fc0f9c987a83a0d",
  "noEngine": false
}

const fs = require('fs')

config.dirname = __dirname
if (!fs.existsSync(path.join(__dirname, 'schema.prisma'))) {
  const alternativePaths = [
    "prisma/databases/bancaoAntigoprisma",
    "databases/bancaoAntigoprisma",
  ]
  
  const alternativePath = alternativePaths.find((altPath) => {
    return fs.existsSync(path.join(process.cwd(), altPath, 'schema.prisma'))
  }) ?? alternativePaths[0]

  config.dirname = path.join(process.cwd(), alternativePath)
  config.isBundled = true
}

config.runtimeDataModel = JSON.parse("{\"models\":{\"empresas\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cnpj\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"xRazaoSocial\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"xFant\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"xLgr\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nro\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"xCpl\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"xBairro\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cMun\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"xMun\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"uf\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cep\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fone\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ie\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"crt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"token\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"banco\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"idAtualizacaoBanco\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"grupos_usuarios\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"grupos_usuarios\",\"relationName\":\"empresasTogrupos_usuarios\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"usuarios_x_empresas\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"usuarios_x_empresas\",\"relationName\":\"empresasTousuarios_x_empresas\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"usuarios\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nome\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ultimo_nome\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"senha\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"celular\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user_token\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"exclusivo\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"N\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"usuarios_x_empresas\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"usuarios_x_empresas\",\"relationName\":\"usuariosTousuarios_x_empresas\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"usuarios_x_empresas\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"id_empresa\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"id_usuario\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"id_grupo_usuario\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"empresas\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"empresas\",\"relationName\":\"empresasTousuarios_x_empresas\",\"relationFromFields\":[\"id_empresa\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"usuarios\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"usuarios\",\"relationName\":\"usuariosTousuarios_x_empresas\",\"relationFromFields\":[\"id_usuario\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"grupos_usuarios\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"grupos_usuarios\",\"relationName\":\"grupos_usuariosTousuarios_x_empresas\",\"relationFromFields\":[\"id_grupo_usuario\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"acoes\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"descricao\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"descricao_titulo\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tabela\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tabela_titulo\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"valor_padrao\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"acoes_x_grupos\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"acoes_x_grupos\",\"relationName\":\"acoesToacoes_x_grupos\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"acoes_x_grupos\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"id_acao\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"id_grupo_usuario\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"permite\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"acoes\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"acoes\",\"relationName\":\"acoesToacoes_x_grupos\",\"relationFromFields\":[\"id_acao\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"grupos_usuarios\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"grupos_usuarios\",\"relationName\":\"acoes_x_gruposTogrupos_usuarios\",\"relationFromFields\":[\"id_grupo_usuario\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"grupos_usuarios\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nome\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"id_empresa\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pagina_inicial\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"notas-fiscais\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"acoes_x_grupos\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"acoes_x_grupos\",\"relationName\":\"acoes_x_gruposTogrupos_usuarios\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"empresas\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"empresas\",\"relationName\":\"empresasTogrupos_usuarios\",\"relationFromFields\":[\"id_empresa\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"usuarios_x_empresas\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"usuarios_x_empresas\",\"relationName\":\"grupos_usuariosTousuarios_x_empresas\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false}},\"enums\":{},\"types\":{}}")
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)



const { warnEnvConflicts } = require('./runtime/library')

warnEnvConflicts({
    rootEnvPath: config.relativeEnvPaths.rootEnvPath && path.resolve(config.dirname, config.relativeEnvPaths.rootEnvPath),
    schemaEnvPath: config.relativeEnvPaths.schemaEnvPath && path.resolve(config.dirname, config.relativeEnvPaths.schemaEnvPath)
})

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

// file annotations for bundling tools to include these files
path.join(__dirname, "query_engine-windows.dll.node");
path.join(process.cwd(), "prisma/databases/bancaoAntigoprisma/query_engine-windows.dll.node")

// file annotations for bundling tools to include these files
path.join(__dirname, "libquery_engine-debian-openssl-1.1.x.so.node");
path.join(process.cwd(), "prisma/databases/bancaoAntigoprisma/libquery_engine-debian-openssl-1.1.x.so.node")
// file annotations for bundling tools to include these files
path.join(__dirname, "schema.prisma");
path.join(process.cwd(), "prisma/databases/bancaoAntigoprisma/schema.prisma")
