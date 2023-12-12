
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
      "value": "C:\\Users\\usuario022\\Desktop\\GitHub\\Script-SQL-01\\prisma\\databases\\bancaoprisma",
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
        "fromEnvVar": "DATABASE3_URL",
        "value": null
      }
    }
  },
  "inlineSchema": "Z2VuZXJhdG9yIGNsaWVudCB7DQogIHByb3ZpZGVyICAgICAgICA9ICJwcmlzbWEtY2xpZW50LWpzIg0KICBvdXRwdXQgICAgICAgICAgPSAiLi9kYXRhYmFzZXMvYmFuY2FvcHJpc21hIg0KICBwcmV2aWV3RmVhdHVyZXMgPSBbInZpZXdzIl0NCiAgYmluYXJ5VGFyZ2V0cyAgID0gWyJuYXRpdmUiLCAiZGViaWFuLW9wZW5zc2wtMS4xLngiXQ0KfQ0KDQpkYXRhc291cmNlIGRiMiB7DQogIHByb3ZpZGVyID0gIm15c3FsIg0KICB1cmwgICAgICA9IGVudigiREFUQUJBU0UzX1VSTCIpDQp9DQoNCm1vZGVsIHBhcmFtZXRyb3Mgew0KICBpZF9wYXJhbWV0cm8gICAgICAgIEludCAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKQ0KICBubV9wYXJhbWV0cm8gICAgICAgIFN0cmluZyBAdW5pcXVlKG1hcDogIm5tX3BhcmFtZXRyb19VTklRVUUiKSBAZGIyLlZhckNoYXIoODApDQogIHZhbG9yX3BhcmFtZXRybyAgICAgSW50DQogIGRlc2NyaWNhb19wYXJhbWV0cm8gU3RyaW5nIEBkYjIuVmFyQ2hhcigyNTYpDQp9DQoNCm1vZGVsIGF0aXZpZGFkZXMgew0KICBpZF9hdGl2aWRhZGUgICAgICAgIEludCAgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkNCiAgbm1fYXRpdmlkYWRlICAgICAgICBTdHJpbmc/IEB1bmlxdWUobWFwOiAibm1fYXRpdmlkYWRlX1VOSVFVRSIpIEBkYjIuVmFyQ2hhcigxNTApDQogIHZhbG9yX2F0aXZpZGFkZSAgICAgSW50PyAgICBAZGVmYXVsdCgwKQ0KICBkZXNjcmljYW9fYXRpdmlkYWRlIFN0cmluZz8gQGRiMi5WYXJDaGFyKDE1MCkNCn0NCg0KbW9kZWwgZW1wcmVzYXMgew0KICBpZF9lbXByZXNhICAgICAgICAgICAgICAgICBJbnQgICAgICAgICAgICAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKQ0KICBjbnBqX2VtcHJlc2EgICAgICAgICAgICAgICBTdHJpbmcgICAgICAgICAgICBAdW5pcXVlKG1hcDogImNucGpfZW1wcmVzYV9VTklRVUUiKSBAZGIyLlZhckNoYXIoMTgpDQogIHJhemFvX3NvY2lhbF9lbXByZXNhICAgICAgIFN0cmluZyAgICAgICAgICAgIEBkYjIuVmFyQ2hhcig2MCkNCiAgbm9tZV9mYW50YXNpYV9lbXByZXNhICAgICAgU3RyaW5nICAgICAgICAgICAgQGRiMi5WYXJDaGFyKDYwKQ0KICBsb2dyYWRvdXJvX2VtcHJlc2EgICAgICAgICBTdHJpbmcgICAgICAgICAgICBAZGIyLlZhckNoYXIoNjApDQogIG51bWVyb19lbXByZXNhICAgICAgICAgICAgIFN0cmluZyAgICAgICAgICAgIEBkYjIuVmFyQ2hhcig2MCkNCiAgY29tcGxlbWVudG9fZW1wcmVzYSAgICAgICAgU3RyaW5nICAgICAgICAgICAgQGRiMi5WYXJDaGFyKDYwKQ0KICBiYWlycm9fZW1wcmVzYSAgICAgICAgICAgICBTdHJpbmcgICAgICAgICAgICBAZGIyLlZhckNoYXIoNjApDQogIGNvZGlnb19tdW5pY2lwYWxfZW1wcmVzYSAgIFN0cmluZyAgICAgICAgICAgIEBkYjIuVmFyQ2hhcig3KQ0KICBtdW5pY2lwaW9fZW1wcmVzYSAgICAgICAgICBTdHJpbmcgICAgICAgICAgICBAZGIyLlZhckNoYXIoNjApDQogIHVmX2VtcHJlc2EgICAgICAgICAgICAgICAgIFN0cmluZyAgICAgICAgICAgIEBkYjIuQ2hhcigyKQ0KICBjZXBfZW1wcmVzYSAgICAgICAgICAgICAgICBTdHJpbmcgICAgICAgICAgICBAZGIyLlZhckNoYXIoOCkNCiAgdGVsZWZvbmVfZW1wcmVzYSAgICAgICAgICAgU3RyaW5nICAgICAgICAgICAgQGRiMi5WYXJDaGFyKDE0KQ0KICBpbnNjcmljYW9fZXN0YWR1YWxfZW1wcmVzYSBTdHJpbmcgICAgICAgICAgICBAZGIyLlZhckNoYXIoMTQpDQogIGNlcnRpZmljYWRvX2VtcHJlc2EgICAgICAgIFN0cmluZyAgICAgICAgICAgIEBkYjIuVmFyQ2hhcigxKQ0KICBiYW5jb19lbXByZXNhICAgICAgICAgICAgICBTdHJpbmcgICAgICAgICAgICBAZGIyLlZhckNoYXIoMTAwKQ0KICBzdGF0dXNfZW1wcmVzYSAgICAgICAgICAgICBTdHJpbmcgICAgICAgICAgICBAZGIyLlZhckNoYXIoMSkNCiAgZW1haWxfZW1wcmVzYSAgICAgICAgICAgICAgU3RyaW5nPyAgICAgICAgICAgQGRiMi5WYXJDaGFyKDEyOSkNCiAgdmVyc2FvX2JhbmNvX2VtcHJlc2EgICAgICAgSW50PyAgICAgICAgICAgICAgQGRlZmF1bHQoMCkNCiAgbW9kdWxvX2VtcHJlc2EgICAgICAgICAgICAgbW9kdWxvX2VtcHJlc2FbXQ0KICB1c3VhcmlvX2VtcHJlc2EgICAgICAgICAgICB1c3VhcmlvX2VtcHJlc2FbXQ0KfQ0KDQptb2RlbCBtb2R1bG9fZW1wcmVzYSB7DQogIGlkX21vZHVsb19tZSAgSW50DQogIGlkX2VtcHJlc2FfbWUgSW50DQogIGVtcHJlc2FzICAgICAgZW1wcmVzYXMgQHJlbGF0aW9uKGZpZWxkczogW2lkX2VtcHJlc2FfbWVdLCByZWZlcmVuY2VzOiBbaWRfZW1wcmVzYV0sIG9uVXBkYXRlOiBSZXN0cmljdCwgbWFwOiAiZmtfbWVfZW1wcmVzYXNfaWR4IikNCiAgbW9kdWxvcyAgICAgICBtb2R1bG9zICBAcmVsYXRpb24oZmllbGRzOiBbaWRfZW1wcmVzYV9tZV0sIHJlZmVyZW5jZXM6IFtpZF9tb2R1bG9dLCBvblVwZGF0ZTogUmVzdHJpY3QsIG1hcDogImZrX21lX21vZHVsb3NfaWR4IikNCg0KICBAQGlkKFtpZF9tb2R1bG9fbWUsIGlkX2VtcHJlc2FfbWVdKQ0KICBAQGluZGV4KFtpZF9lbXByZXNhX21lXSwgbWFwOiAiZmtfbWVfZW1wcmVzYXNfaWR4IikNCiAgQEBpbmRleChbaWRfZW1wcmVzYV9tZV0sIG1hcDogImZrX21lX21vZHVsb3NfaWR4IikNCn0NCg0KbW9kZWwgbW9kdWxvcyB7DQogIGlkX21vZHVsbyAgICAgICAgIEludCAgICAgICAgICAgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkNCiAgbm1fbW9kdWxvICAgICAgICAgU3RyaW5nPyAgICAgICAgICBAdW5pcXVlKG1hcDogIm5tX21vZHVsb19VTklRVUUiKSBAZGIyLlZhckNoYXIoNTApDQogIG1vZHVsb19lbXByZXNhICAgIG1vZHVsb19lbXByZXNhW10NCg0KDQp9DQoNCm1vZGVsIHVzdWFyaW9fZW1wcmVzYSB7DQogIGlkX3VlICAgICAgICAgSW50ICAgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkNCiAgaWRfdXN1YXJpb191ZSBJbnQNCiAgaWRfZW1wcmVzYV91ZSBJbnQNCiAgZW1wcmVzYXMgICAgICBlbXByZXNhcyBAcmVsYXRpb24oZmllbGRzOiBbaWRfZW1wcmVzYV91ZV0sIHJlZmVyZW5jZXM6IFtpZF9lbXByZXNhXSwgb25VcGRhdGU6IFJlc3RyaWN0LCBtYXA6ICJma191ZV9lbXByZXNhX2lkeCIpDQogIHVzdWFyaW9zICAgICAgdXN1YXJpb3MgQHJlbGF0aW9uKGZpZWxkczogW2lkX3VzdWFyaW9fdWVdLCByZWZlcmVuY2VzOiBbaWRfdXN1YXJpb10sIG9uVXBkYXRlOiBSZXN0cmljdCwgbWFwOiAiZmtfdWVfdXN1YXJpb19pZHgiKQ0KDQogIEBAaW5kZXgoW2lkX2VtcHJlc2FfdWVdLCBtYXA6ICJma191ZV9lbXByZXNhX2lkeCIpDQogIEBAaW5kZXgoW2lkX3VzdWFyaW9fdWVdLCBtYXA6ICJma191ZV91c3VhcmlvX2lkeCIpDQp9DQoNCm1vZGVsIHVzdWFyaW9zIHsNCiAgaWRfdXN1YXJpbyAgICAgICAgICBJbnQgICAgICAgICAgICAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKQ0KICBubV91c3VhcmlvICAgICAgICAgIFN0cmluZz8gICAgICAgICAgIEBkYjIuVmFyQ2hhcig2MCkNCiAgdWx0aW1vX25vbWVfdXN1YXJpbyBTdHJpbmc/ICAgICAgICAgICBAZGIyLlZhckNoYXIoNjApDQogIGVtYWlsX3VzdWFyaW8gICAgICAgU3RyaW5nPyAgICAgICAgICAgQHVuaXF1ZShtYXA6ICJlbWFpbF91c3VhcmlvX1VOSVFVRSIpIEBkYjIuVmFyQ2hhcigxNTApDQogIHNlbmhhX3VzdWFyaW8gICAgICAgU3RyaW5nPw0KICBjZWx1bGFyX3VzdWFyaW8gICAgIFN0cmluZz8gICAgICAgICAgIEBkYjIuVmFyQ2hhcigxNCkNCiAgc3RhdHVzX3VzdWFyaW8gICAgICBTdHJpbmc/ICAgICAgICAgICBAZGVmYXVsdCgiQSIpIEBkYjIuQ2hhcigxKQ0KICB1c3VhcmlvX2VtcHJlc2EgICAgIHVzdWFyaW9fZW1wcmVzYVtdDQp9DQo=",
  "inlineSchemaHash": "13f0f043538a1b1d08c9bf64d6933ff85db78e4e71af40d55e1e58c09315d6fb",
  "noEngine": false
}

const fs = require('fs')

config.dirname = __dirname
if (!fs.existsSync(path.join(__dirname, 'schema.prisma'))) {
  const alternativePaths = [
    "prisma/databases/bancaoprisma",
    "databases/bancaoprisma",
  ]
  
  const alternativePath = alternativePaths.find((altPath) => {
    return fs.existsSync(path.join(process.cwd(), altPath, 'schema.prisma'))
  }) ?? alternativePaths[0]

  config.dirname = path.join(process.cwd(), alternativePath)
  config.isBundled = true
}

config.runtimeDataModel = JSON.parse("{\"models\":{\"parametros\":{\"dbName\":null,\"fields\":[{\"name\":\"id_parametro\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nm_parametro\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"valor_parametro\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"descricao_parametro\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"atividades\":{\"dbName\":null,\"fields\":[{\"name\":\"id_atividade\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nm_atividade\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"valor_atividade\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"descricao_atividade\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"empresas\":{\"dbName\":null,\"fields\":[{\"name\":\"id_empresa\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cnpj_empresa\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"razao_social_empresa\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nome_fantasia_empresa\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"logradouro_empresa\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"numero_empresa\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"complemento_empresa\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"bairro_empresa\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"codigo_municipal_empresa\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"municipio_empresa\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"uf_empresa\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cep_empresa\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"telefone_empresa\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"inscricao_estadual_empresa\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"certificado_empresa\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"banco_empresa\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status_empresa\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email_empresa\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"versao_banco_empresa\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"modulo_empresa\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"modulo_empresa\",\"relationName\":\"empresasTomodulo_empresa\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"usuario_empresa\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"usuario_empresa\",\"relationName\":\"empresasTousuario_empresa\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"modulo_empresa\":{\"dbName\":null,\"fields\":[{\"name\":\"id_modulo_me\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"id_empresa_me\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"empresas\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"empresas\",\"relationName\":\"empresasTomodulo_empresa\",\"relationFromFields\":[\"id_empresa_me\"],\"relationToFields\":[\"id_empresa\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"modulos\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"modulos\",\"relationName\":\"modulo_empresaTomodulos\",\"relationFromFields\":[\"id_empresa_me\"],\"relationToFields\":[\"id_modulo\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":{\"name\":null,\"fields\":[\"id_modulo_me\",\"id_empresa_me\"]},\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"modulos\":{\"dbName\":null,\"fields\":[{\"name\":\"id_modulo\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nm_modulo\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"modulo_empresa\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"modulo_empresa\",\"relationName\":\"modulo_empresaTomodulos\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"usuario_empresa\":{\"dbName\":null,\"fields\":[{\"name\":\"id_ue\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"id_usuario_ue\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"id_empresa_ue\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"empresas\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"empresas\",\"relationName\":\"empresasTousuario_empresa\",\"relationFromFields\":[\"id_empresa_ue\"],\"relationToFields\":[\"id_empresa\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"usuarios\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"usuarios\",\"relationName\":\"usuario_empresaTousuarios\",\"relationFromFields\":[\"id_usuario_ue\"],\"relationToFields\":[\"id_usuario\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"usuarios\":{\"dbName\":null,\"fields\":[{\"name\":\"id_usuario\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nm_usuario\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ultimo_nome_usuario\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email_usuario\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"senha_usuario\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"celular_usuario\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status_usuario\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"A\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"usuario_empresa\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"usuario_empresa\",\"relationName\":\"usuario_empresaTousuarios\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false}},\"enums\":{},\"types\":{}}")
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
path.join(process.cwd(), "prisma/databases/bancaoprisma/query_engine-windows.dll.node")

// file annotations for bundling tools to include these files
path.join(__dirname, "libquery_engine-debian-openssl-1.1.x.so.node");
path.join(process.cwd(), "prisma/databases/bancaoprisma/libquery_engine-debian-openssl-1.1.x.so.node")
// file annotations for bundling tools to include these files
path.join(__dirname, "schema.prisma");
path.join(process.cwd(), "prisma/databases/bancaoprisma/schema.prisma")
