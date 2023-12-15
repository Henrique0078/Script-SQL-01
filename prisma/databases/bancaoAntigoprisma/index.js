
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

exports.Prisma.ParametrosScalarFieldEnum = {
  id: 'id',
  parametro: 'parametro',
  valorParametro: 'valorParametro',
  descricao: 'descricao'
};

exports.Prisma.AtividadesScalarFieldEnum = {
  id_atividade: 'id_atividade',
  atividade: 'atividade',
  valor: 'valor',
  descricao: 'descricao'
};

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

exports.Prisma.ModulosScalarFieldEnum = {
  id_modulo: 'id_modulo',
  modulo: 'modulo'
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
  id_usuario: 'id_usuario'
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
  modulos: 'modulos',
  usuarios: 'usuarios',
  usuarios_x_empresas: 'usuarios_x_empresas'
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
  "inlineSchema": "Z2VuZXJhdG9yIGNsaWVudCB7DQogIHByb3ZpZGVyICAgICAgICA9ICJwcmlzbWEtY2xpZW50LWpzIg0KICBvdXRwdXQgICAgICAgICAgPSAiLi9kYXRhYmFzZXMvYmFuY2FvQW50aWdvcHJpc21hIg0KICBwcmV2aWV3RmVhdHVyZXMgPSBbInZpZXdzIl0NCiAgYmluYXJ5VGFyZ2V0cyAgID0gWyJuYXRpdmUiLCAiZGViaWFuLW9wZW5zc2wtMS4xLngiXQ0KfQ0KDQpkYXRhc291cmNlIGRiMiB7DQogIHByb3ZpZGVyID0gIm15c3FsIg0KICB1cmwgICAgICA9IGVudigiREFUQUJBU0U0X1VSTCIpDQp9DQoNCm1vZGVsIHBhcmFtZXRyb3Mgew0KICBpZCAgICAgICAgICAgICBJbnQgICAgQGlkIEB1bmlxdWUobWFwOiAiaWRfVU5JUVVFIikgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKQ0KICBwYXJhbWV0cm8gICAgICBTdHJpbmcgQHVuaXF1ZShtYXA6ICJwYXJhbWV0cm9fVU5JUVVFIikgQGRiMi5WYXJDaGFyKDgwKQ0KICB2YWxvclBhcmFtZXRybyBJbnQNCiAgZGVzY3JpY2FvICAgICAgU3RyaW5nIEBkYjIuVmFyQ2hhcigyNTYpDQp9DQoNCm1vZGVsIGF0aXZpZGFkZXMgew0KICBpZF9hdGl2aWRhZGUgSW50ICAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKQ0KICBhdGl2aWRhZGUgICAgU3RyaW5nPyBAdW5pcXVlKG1hcDogImF0aXZpZGFkZSIpIEBkYjIuVmFyQ2hhcigyMCkNCiAgdmFsb3IgICAgICAgIEludD8gICAgQGRlZmF1bHQoMCkNCiAgZGVzY3JpY2FvICAgIFN0cmluZz8gQGRiMi5WYXJDaGFyKDYwKQ0KfQ0KDQptb2RlbCBlbXByZXNhcyB7DQogIGlkICAgICAgICAgICAgICAgICAgSW50ICAgICAgICAgICAgICAgICAgIEBpZCBAdW5pcXVlKG1hcDogImlkIikgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKQ0KICBjbnBqICAgICAgICAgICAgICAgIFN0cmluZyAgICAgICAgICAgICAgICBAZGIyLlZhckNoYXIoMTgpDQogIHhSYXphb1NvY2lhbCAgICAgICAgU3RyaW5nICAgICAgICAgICAgICAgIEBkYjIuVmFyQ2hhcig2MCkNCiAgeEZhbnQgICAgICAgICAgICAgICBTdHJpbmcgICAgICAgICAgICAgICAgQGRiMi5WYXJDaGFyKDYwKQ0KICB4TGdyICAgICAgICAgICAgICAgIFN0cmluZyAgICAgICAgICAgICAgICBAZGIyLlZhckNoYXIoNjApDQogIG5ybyAgICAgICAgICAgICAgICAgU3RyaW5nICAgICAgICAgICAgICAgIEBkYjIuVmFyQ2hhcig2MCkNCiAgeENwbCAgICAgICAgICAgICAgICBTdHJpbmcgICAgICAgICAgICAgICAgQGRiMi5WYXJDaGFyKDYwKQ0KICB4QmFpcnJvICAgICAgICAgICAgIFN0cmluZyAgICAgICAgICAgICAgICBAZGIyLlZhckNoYXIoNjApDQogIGNNdW4gICAgICAgICAgICAgICAgU3RyaW5nICAgICAgICAgICAgICAgIEBkYjIuVmFyQ2hhcig3KQ0KICB4TXVuICAgICAgICAgICAgICAgIFN0cmluZyAgICAgICAgICAgICAgICBAZGIyLlZhckNoYXIoNjApDQogIHVmICAgICAgICAgICAgICAgICAgU3RyaW5nICAgICAgICAgICAgICAgIEBkYjIuQ2hhcigyKQ0KICBjZXAgICAgICAgICAgICAgICAgIFN0cmluZyAgICAgICAgICAgICAgICBAZGIyLlZhckNoYXIoOCkNCiAgZm9uZSAgICAgICAgICAgICAgICBTdHJpbmcgICAgICAgICAgICAgICAgQGRiMi5WYXJDaGFyKDE0KQ0KICBpZSAgICAgICAgICAgICAgICAgIFN0cmluZyAgICAgICAgICAgICAgICBAZGIyLlZhckNoYXIoMTQpDQogIGNydCAgICAgICAgICAgICAgICAgU3RyaW5nICAgICAgICAgICAgICAgIEBkYjIuVmFyQ2hhcigxKQ0KICB0b2tlbiAgICAgICAgICAgICAgIFN0cmluZyAgICAgICAgICAgICAgICBAdW5pcXVlKG1hcDogInRva2VuIikgQGRiMi5WYXJDaGFyKDEyOCkNCiAgYmFuY28gICAgICAgICAgICAgICBTdHJpbmcgICAgICAgICAgICAgICAgQGRiMi5WYXJDaGFyKDEwMCkNCiAgc3RhdHVzICAgICAgICAgICAgICBTdHJpbmcgICAgICAgICAgICAgICAgQGRiMi5WYXJDaGFyKDEpDQogIGVtYWlsICAgICAgICAgICAgICAgU3RyaW5nPyAgICAgICAgICAgICAgIEBkYjIuVmFyQ2hhcigxMjkpDQogIGlkQXR1YWxpemFjYW9CYW5jbyAgSW50PyAgICAgICAgICAgICAgICAgIEBkZWZhdWx0KDApDQogIHVzdWFyaW9zX3hfZW1wcmVzYXMgdXN1YXJpb3NfeF9lbXByZXNhc1tdDQp9DQoNCm1vZGVsIG1vZHVsb3Mgew0KICBpZF9tb2R1bG8gSW50ICAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKQ0KICBtb2R1bG8gICAgU3RyaW5nPyBAdW5pcXVlKG1hcDogIm1vZHVsbyIpIEBkYjIuVmFyQ2hhcig1MCkNCn0NCg0KbW9kZWwgdXN1YXJpb3Mgew0KICBpZCAgICAgICAgICAgICAgICAgIEludCAgICAgICAgICAgICAgICAgICBAaWQgQHVuaXF1ZShtYXA6ICJpZCIpIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkNCiAgbm9tZSAgICAgICAgICAgICAgICBTdHJpbmc/ICAgICAgICAgICAgICAgQGRiMi5WYXJDaGFyKDYwKQ0KICB1bHRpbW9fbm9tZSAgICAgICAgIFN0cmluZz8gICAgICAgICAgICAgICBAZGIyLlZhckNoYXIoNjApDQogIGVtYWlsICAgICAgICAgICAgICAgU3RyaW5nPyAgICAgICAgICAgICAgIEBkYjIuVmFyQ2hhcigxNTApDQogIHNlbmhhICAgICAgICAgICAgICAgU3RyaW5nPw0KICBjZWx1bGFyICAgICAgICAgICAgIFN0cmluZz8gICAgICAgICAgICAgICBAZGIyLlZhckNoYXIoMTQpDQogIHN0YXR1cyAgICAgICAgICAgICAgU3RyaW5nPyAgICAgICAgICAgICAgIEBkZWZhdWx0KCJBIikgQGRiMi5DaGFyKDEpDQogIHVzZXJfdG9rZW4gICAgICAgICAgU3RyaW5nICAgICAgICAgICAgICAgIEB1bmlxdWUobWFwOiAidXNlcl90b2tlbiIpIEBkYjIuVmFyQ2hhcigxMjgpDQogIGV4Y2x1c2l2byAgICAgICAgICAgU3RyaW5nPyAgICAgICAgICAgICAgIEBkZWZhdWx0KCJOIikgQGRiMi5DaGFyKDEpDQogIHVzdWFyaW9zX3hfZW1wcmVzYXMgdXN1YXJpb3NfeF9lbXByZXNhc1tdDQp9DQoNCm1vZGVsIHVzdWFyaW9zX3hfZW1wcmVzYXMgew0KICBpZCAgICAgICAgIEludCAgICAgIEBpZCBAdW5pcXVlKG1hcDogImlkIikgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKQ0KICBpZF9lbXByZXNhIEludA0KICBpZF91c3VhcmlvIEludA0KICBlbXByZXNhcyAgIGVtcHJlc2FzIEByZWxhdGlvbihmaWVsZHM6IFtpZF9lbXByZXNhXSwgcmVmZXJlbmNlczogW2lkXSwgb25VcGRhdGU6IFJlc3RyaWN0LCBtYXA6ICJ1c3Vhcmlvc194X2VtcHJlc2FzX2liZmtfMSIpDQogIHVzdWFyaW9zICAgdXN1YXJpb3MgQHJlbGF0aW9uKGZpZWxkczogW2lkX3VzdWFyaW9dLCByZWZlcmVuY2VzOiBbaWRdLCBvblVwZGF0ZTogUmVzdHJpY3QsIG1hcDogInVzdWFyaW9zX3hfZW1wcmVzYXNfaWJma18yIikNCg0KICBAQGluZGV4KFtpZF9lbXByZXNhXSwgbWFwOiAiaWRfZW1wcmVzYSIpDQogIEBAaW5kZXgoW2lkX3VzdWFyaW9dLCBtYXA6ICJpZF91c3VhcmlvIikNCn0NCg==",
  "inlineSchemaHash": "1cf1d7cc8d5109a0a1a408d2eb59bc5c99c077e06dc3b9c9cdc6f596d5a6f941",
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

config.runtimeDataModel = JSON.parse("{\"models\":{\"parametros\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"parametro\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"valorParametro\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"descricao\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"atividades\":{\"dbName\":null,\"fields\":[{\"name\":\"id_atividade\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"atividade\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"valor\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"descricao\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"empresas\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cnpj\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"xRazaoSocial\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"xFant\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"xLgr\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nro\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"xCpl\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"xBairro\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cMun\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"xMun\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"uf\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cep\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fone\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ie\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"crt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"token\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"banco\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"idAtualizacaoBanco\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"usuarios_x_empresas\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"usuarios_x_empresas\",\"relationName\":\"empresasTousuarios_x_empresas\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"modulos\":{\"dbName\":null,\"fields\":[{\"name\":\"id_modulo\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"modulo\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"usuarios\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nome\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ultimo_nome\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"senha\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"celular\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"A\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user_token\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"exclusivo\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"N\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"usuarios_x_empresas\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"usuarios_x_empresas\",\"relationName\":\"usuariosTousuarios_x_empresas\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"usuarios_x_empresas\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"id_empresa\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"id_usuario\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"empresas\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"empresas\",\"relationName\":\"empresasTousuarios_x_empresas\",\"relationFromFields\":[\"id_empresa\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"usuarios\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"usuarios\",\"relationName\":\"usuariosTousuarios_x_empresas\",\"relationFromFields\":[\"id_usuario\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false}},\"enums\":{},\"types\":{}}")
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
