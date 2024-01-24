
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
} = require('./runtime/edge')


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
      "value": "C:\\Users\\Natan\\Documents\\GitHub\\Script-SQL-01\\prisma\\databases\\bancaoAntigoprisma",
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
  "inlineSchema": "Z2VuZXJhdG9yIGNsaWVudCB7DQogIHByb3ZpZGVyICAgICAgICA9ICJwcmlzbWEtY2xpZW50LWpzIg0KICBvdXRwdXQgICAgICAgICAgPSAiLi9kYXRhYmFzZXMvYmFuY2FvQW50aWdvcHJpc21hIg0KICBwcmV2aWV3RmVhdHVyZXMgPSBbInZpZXdzIl0NCiAgYmluYXJ5VGFyZ2V0cyAgID0gWyJuYXRpdmUiLCAiZGViaWFuLW9wZW5zc2wtMS4xLngiXQ0KfQ0KDQpkYXRhc291cmNlIGRiMiB7DQogIHByb3ZpZGVyID0gIm15c3FsIg0KICB1cmwgICAgICA9IGVudigiREFUQUJBU0U0X1VSTCIpDQp9DQoNCm1vZGVsIGVtcHJlc2FzIHsNCiAgaWQgICAgICAgICAgICAgICAgICBCaWdJbnQgICAgICAgICAgICAgICAgQGlkIEB1bmlxdWUobWFwOiAiaWQiKSBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpDQogIGNucGogICAgICAgICAgICAgICAgU3RyaW5nICAgICAgICAgICAgICAgIEBkYjIuVmFyQ2hhcigxOCkNCiAgeFJhemFvU29jaWFsICAgICAgICBTdHJpbmcgICAgICAgICAgICAgICAgQGRiMi5WYXJDaGFyKDYwKQ0KICB4RmFudCAgICAgICAgICAgICAgIFN0cmluZyAgICAgICAgICAgICAgICBAZGIyLlZhckNoYXIoNjApDQogIHhMZ3IgICAgICAgICAgICAgICAgU3RyaW5nICAgICAgICAgICAgICAgIEBkYjIuVmFyQ2hhcig2MCkNCiAgbnJvICAgICAgICAgICAgICAgICBTdHJpbmcgICAgICAgICAgICAgICAgQGRiMi5WYXJDaGFyKDYwKQ0KICB4Q3BsICAgICAgICAgICAgICAgIFN0cmluZyAgICAgICAgICAgICAgICBAZGIyLlZhckNoYXIoNjApDQogIHhCYWlycm8gICAgICAgICAgICAgU3RyaW5nICAgICAgICAgICAgICAgIEBkYjIuVmFyQ2hhcig2MCkNCiAgY011biAgICAgICAgICAgICAgICBTdHJpbmcgICAgICAgICAgICAgICAgQGRiMi5WYXJDaGFyKDcpDQogIHhNdW4gICAgICAgICAgICAgICAgU3RyaW5nICAgICAgICAgICAgICAgIEBkYjIuVmFyQ2hhcig2MCkNCiAgdWYgICAgICAgICAgICAgICAgICBTdHJpbmcgICAgICAgICAgICAgICAgQGRiMi5DaGFyKDIpDQogIGNlcCAgICAgICAgICAgICAgICAgU3RyaW5nICAgICAgICAgICAgICAgIEBkYjIuVmFyQ2hhcig4KQ0KICBmb25lICAgICAgICAgICAgICAgIFN0cmluZyAgICAgICAgICAgICAgICBAZGIyLlZhckNoYXIoMTQpDQogIGllICAgICAgICAgICAgICAgICAgU3RyaW5nICAgICAgICAgICAgICAgIEBkYjIuVmFyQ2hhcigxNCkNCiAgY3J0ICAgICAgICAgICAgICAgICBTdHJpbmcgICAgICAgICAgICAgICAgQGRiMi5WYXJDaGFyKDEpDQogIHRva2VuICAgICAgICAgICAgICAgU3RyaW5nICAgICAgICAgICAgICAgIEB1bmlxdWUobWFwOiAidG9rZW4iKSBAZGIyLlZhckNoYXIoMTAwKQ0KICBiYW5jbyAgICAgICAgICAgICAgIFN0cmluZyAgICAgICAgICAgICAgICBAZGIyLlZhckNoYXIoMTAwKQ0KICBzdGF0dXMgICAgICAgICAgICAgIFN0cmluZyAgICAgICAgICAgICAgICBAZGIyLlZhckNoYXIoMSkNCiAgZW1haWwgICAgICAgICAgICAgICBTdHJpbmc/ICAgICAgICAgICAgICAgQGRiMi5WYXJDaGFyKDEyOSkNCiAgaWRBdHVhbGl6YWNhb0JhbmNvICBJbnQ/ICAgICAgICAgICAgICAgICAgQGRlZmF1bHQoMCkNCiAgZ3J1cG9zX3VzdWFyaW9zICAgICBncnVwb3NfdXN1YXJpb3NbXQ0KICB1c3Vhcmlvc194X2VtcHJlc2FzIHVzdWFyaW9zX3hfZW1wcmVzYXNbXQ0KfQ0KDQptb2RlbCB1c3VhcmlvcyB7DQogIGlkICAgICAgICAgICAgICAgICAgQmlnSW50ICAgICAgICAgICAgICAgIEBpZCBAdW5pcXVlKG1hcDogImlkIikgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKQ0KICBub21lICAgICAgICAgICAgICAgIFN0cmluZz8gICAgICAgICAgICAgICBAZGIyLlZhckNoYXIoNjApDQogIHVsdGltb19ub21lICAgICAgICAgU3RyaW5nPyAgICAgICAgICAgICAgIEBkYjIuVmFyQ2hhcig2MCkNCiAgZW1haWwgICAgICAgICAgICAgICBTdHJpbmc/ICAgICAgICAgICAgICAgQGRiMi5WYXJDaGFyKDE1MCkNCiAgc2VuaGEgICAgICAgICAgICAgICBTdHJpbmc/DQogIGNlbHVsYXIgICAgICAgICAgICAgU3RyaW5nPyAgICAgICAgICAgICAgIEBkYjIuVmFyQ2hhcigxNCkNCiAgc3RhdHVzICAgICAgICAgICAgICBTdHJpbmc/ICAgICAgICAgICAgICAgQGRiMi5DaGFyKDEpDQogIHVzZXJfdG9rZW4gICAgICAgICAgU3RyaW5nICAgICAgICAgICAgICAgIEB1bmlxdWUobWFwOiAidXNlcl90b2tlbiIpIEBkYjIuVmFyQ2hhcigxMDApDQogIGV4Y2x1c2l2byAgICAgICAgICAgU3RyaW5nPyAgICAgICAgICAgICAgIEBkZWZhdWx0KCJOIikgQGRiMi5DaGFyKDEpDQogIHVzdWFyaW9zX3hfZW1wcmVzYXMgdXN1YXJpb3NfeF9lbXByZXNhc1tdDQp9DQoNCm1vZGVsIHVzdWFyaW9zX3hfZW1wcmVzYXMgew0KICBpZCAgICAgICAgICAgICAgIEJpZ0ludCAgICAgICAgICBAaWQgQHVuaXF1ZShtYXA6ICJpZCIpIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkNCiAgaWRfZW1wcmVzYSAgICAgICBCaWdJbnQNCiAgaWRfdXN1YXJpbyAgICAgICBCaWdJbnQNCiAgaWRfZ3J1cG9fdXN1YXJpbyBCaWdJbnQNCiAgZW1wcmVzYXMgICAgICAgICBlbXByZXNhcyAgICAgICAgQHJlbGF0aW9uKGZpZWxkczogW2lkX2VtcHJlc2FdLCByZWZlcmVuY2VzOiBbaWRdLCBvblVwZGF0ZTogUmVzdHJpY3QsIG1hcDogInVzdWFyaW9zX3hfZW1wcmVzYXNfaWJma18xIikNCiAgdXN1YXJpb3MgICAgICAgICB1c3VhcmlvcyAgICAgICAgQHJlbGF0aW9uKGZpZWxkczogW2lkX3VzdWFyaW9dLCByZWZlcmVuY2VzOiBbaWRdLCBvblVwZGF0ZTogUmVzdHJpY3QsIG1hcDogInVzdWFyaW9zX3hfZW1wcmVzYXNfaWJma18yIikNCiAgZ3J1cG9zX3VzdWFyaW9zICBncnVwb3NfdXN1YXJpb3MgQHJlbGF0aW9uKGZpZWxkczogW2lkX2dydXBvX3VzdWFyaW9dLCByZWZlcmVuY2VzOiBbaWRdLCBvblVwZGF0ZTogUmVzdHJpY3QsIG1hcDogInVzdWFyaW9zX3hfZW1wcmVzYXNfaWJma18zIikNCg0KICBAQGluZGV4KFtpZF9lbXByZXNhXSwgbWFwOiAiaWRfZW1wcmVzYSIpDQogIEBAaW5kZXgoW2lkX3VzdWFyaW9dLCBtYXA6ICJpZF91c3VhcmlvIikNCiAgQEBpbmRleChbaWRfZ3J1cG9fdXN1YXJpb10sIG1hcDogImlkX2dydXBvX3VzdWFyaW8iKQ0KfQ0KDQptb2RlbCBhY29lcyB7DQogIGlkICAgICAgICAgICAgICAgQmlnSW50ICAgICAgICAgICBAaWQgQHVuaXF1ZShtYXA6ICJpZCIpIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkNCiAgZGVzY3JpY2FvICAgICAgICBTdHJpbmcgICAgICAgICAgIEBkYjIuVmFyQ2hhcigxMDApDQogIGRlc2NyaWNhb190aXR1bG8gU3RyaW5nICAgICAgICAgICBAZGIyLlZhckNoYXIoMTAwKQ0KICB0YWJlbGEgICAgICAgICAgIFN0cmluZyAgICAgICAgICAgQGRiMi5WYXJDaGFyKDQwKQ0KICB0YWJlbGFfdGl0dWxvICAgIFN0cmluZyAgICAgICAgICAgQGRiMi5WYXJDaGFyKDQwKQ0KICB2YWxvcl9wYWRyYW8gICAgIEludD8gICAgICAgICAgICAgQGRlZmF1bHQoMCkNCiAgYWNvZXNfeF9ncnVwb3MgICBhY29lc194X2dydXBvc1tdDQp9DQoNCm1vZGVsIGFjb2VzX3hfZ3J1cG9zIHsNCiAgaWQgICAgICAgICAgICAgICBCaWdJbnQgICAgICAgICAgQGlkIEB1bmlxdWUobWFwOiAiaWQiKSBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpDQogIGlkX2FjYW8gICAgICAgICAgQmlnSW50DQogIGlkX2dydXBvX3VzdWFyaW8gQmlnSW50DQogIHBlcm1pdGUgICAgICAgICAgSW50DQogIGFjb2VzICAgICAgICAgICAgYWNvZXMgICAgICAgICAgIEByZWxhdGlvbihmaWVsZHM6IFtpZF9hY2FvXSwgcmVmZXJlbmNlczogW2lkXSwgb25VcGRhdGU6IFJlc3RyaWN0LCBtYXA6ICJhY29lc194X2dydXBvc19pYmZrXzEiKQ0KICBncnVwb3NfdXN1YXJpb3MgIGdydXBvc191c3VhcmlvcyBAcmVsYXRpb24oZmllbGRzOiBbaWRfZ3J1cG9fdXN1YXJpb10sIHJlZmVyZW5jZXM6IFtpZF0sIG9uVXBkYXRlOiBSZXN0cmljdCwgbWFwOiAiYWNvZXNfeF9ncnVwb3NfaWJma18yIikNCg0KICBAQGluZGV4KFtpZF9hY2FvXSwgbWFwOiAiaWRfYWNhbyIpDQogIEBAaW5kZXgoW2lkX2dydXBvX3VzdWFyaW9dLCBtYXA6ICJpZF9ncnVwb191c3VhcmlvIikNCn0NCg0KbW9kZWwgZ3J1cG9zX3VzdWFyaW9zIHsNCiAgaWQgICAgICAgICAgICAgICAgICBCaWdJbnQgICAgICAgICAgICAgICAgQGlkIEB1bmlxdWUobWFwOiAiaWQiKSBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpDQogIG5vbWUgICAgICAgICAgICAgICAgU3RyaW5nICAgICAgICAgICAgICAgIEBkYjIuVmFyQ2hhcig1MCkNCiAgaWRfZW1wcmVzYSAgICAgICAgICBCaWdJbnQNCiAgcGFnaW5hX2luaWNpYWwgICAgICBTdHJpbmcgICAgICAgICAgICAgICAgQGRlZmF1bHQoIm5vdGFzLWZpc2NhaXMiKSBAZGIyLlZhckNoYXIoMjApDQogIGFjb2VzX3hfZ3J1cG9zICAgICAgYWNvZXNfeF9ncnVwb3NbXQ0KICBlbXByZXNhcyAgICAgICAgICAgIGVtcHJlc2FzICAgICAgICAgICAgICBAcmVsYXRpb24oZmllbGRzOiBbaWRfZW1wcmVzYV0sIHJlZmVyZW5jZXM6IFtpZF0sIG9uVXBkYXRlOiBSZXN0cmljdCwgbWFwOiAiZ3J1cG9zX3VzdWFyaW9zX2liZmtfMSIpDQogIHVzdWFyaW9zX3hfZW1wcmVzYXMgdXN1YXJpb3NfeF9lbXByZXNhc1tdDQoNCiAgQEBpbmRleChbaWRfZW1wcmVzYV0sIG1hcDogImlkX2VtcHJlc2EiKQ0KfQ0K",
  "inlineSchemaHash": "56f64a4fd55a05b1ec36d8aa4952eac397a9c6a00a5b58ad432f05e4731a67f5",
  "noEngine": false
}
config.dirname = '/'

config.runtimeDataModel = JSON.parse("{\"models\":{\"empresas\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cnpj\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"xRazaoSocial\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"xFant\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"xLgr\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nro\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"xCpl\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"xBairro\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cMun\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"xMun\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"uf\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cep\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fone\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ie\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"crt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"token\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"banco\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"idAtualizacaoBanco\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"grupos_usuarios\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"grupos_usuarios\",\"relationName\":\"empresasTogrupos_usuarios\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"usuarios_x_empresas\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"usuarios_x_empresas\",\"relationName\":\"empresasTousuarios_x_empresas\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"usuarios\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nome\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ultimo_nome\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"senha\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"celular\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user_token\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"exclusivo\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"N\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"usuarios_x_empresas\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"usuarios_x_empresas\",\"relationName\":\"usuariosTousuarios_x_empresas\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"usuarios_x_empresas\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"id_empresa\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"id_usuario\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"id_grupo_usuario\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"empresas\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"empresas\",\"relationName\":\"empresasTousuarios_x_empresas\",\"relationFromFields\":[\"id_empresa\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"usuarios\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"usuarios\",\"relationName\":\"usuariosTousuarios_x_empresas\",\"relationFromFields\":[\"id_usuario\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"grupos_usuarios\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"grupos_usuarios\",\"relationName\":\"grupos_usuariosTousuarios_x_empresas\",\"relationFromFields\":[\"id_grupo_usuario\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"acoes\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"descricao\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"descricao_titulo\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tabela\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tabela_titulo\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"valor_padrao\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"acoes_x_grupos\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"acoes_x_grupos\",\"relationName\":\"acoesToacoes_x_grupos\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"acoes_x_grupos\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"id_acao\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"id_grupo_usuario\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"permite\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"acoes\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"acoes\",\"relationName\":\"acoesToacoes_x_grupos\",\"relationFromFields\":[\"id_acao\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"grupos_usuarios\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"grupos_usuarios\",\"relationName\":\"acoes_x_gruposTogrupos_usuarios\",\"relationFromFields\":[\"id_grupo_usuario\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"grupos_usuarios\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nome\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"id_empresa\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pagina_inicial\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"notas-fiscais\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"acoes_x_grupos\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"acoes_x_grupos\",\"relationName\":\"acoes_x_gruposTogrupos_usuarios\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"empresas\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"empresas\",\"relationName\":\"empresasTogrupos_usuarios\",\"relationFromFields\":[\"id_empresa\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"usuarios_x_empresas\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"usuarios_x_empresas\",\"relationName\":\"grupos_usuariosTousuarios_x_empresas\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false}},\"enums\":{},\"types\":{}}")
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)


config.injectableEdgeEnv = () => ({
  parsed: {
    DATABASE4_URL: typeof globalThis !== 'undefined' && globalThis['DATABASE4_URL'] || typeof process !== 'undefined' && process.env && process.env.DATABASE4_URL || undefined
  }
})

if (typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined) {
  Debug.enable(typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined)
}

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

