
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

exports.Prisma.Atividades_gruposScalarFieldEnum = {
  id_ag: 'id_ag',
  id_grupos_usuarios_ag: 'id_grupos_usuarios_ag',
  id_atividade_ag: 'id_atividade_ag',
  valor_ag: 'valor_ag',
  descricao_ag: 'descricao_ag'
};

exports.Prisma.Carousel_imagesScalarFieldEnum = {
  id_ci: 'id_ci',
  id_restaurante_ci: 'id_restaurante_ci',
  id_imagem_ci: 'id_imagem_ci',
  ordem_number_ci: 'ordem_number_ci'
};

exports.Prisma.CertificadoScalarFieldEnum = {
  id_certificado: 'id_certificado',
  senha_certificado: 'senha_certificado',
  serie_certificado: 'serie_certificado',
  nm_certificado: 'nm_certificado',
  path_certificado: 'path_certificado'
};

exports.Prisma.ClientesScalarFieldEnum = {
  id_cliente: 'id_cliente',
  id_sirius_cliente: 'id_sirius_cliente',
  status_cliente: 'status_cliente',
  created_at_cliente: 'created_at_cliente',
  updated_at_cliente: 'updated_at_cliente',
  razao_social_cliente: 'razao_social_cliente',
  fantasia_cliente: 'fantasia_cliente',
  cpf_cliente: 'cpf_cliente',
  cnpj_cliente: 'cnpj_cliente',
  id_estrangeiro_cliente: 'id_estrangeiro_cliente',
  ind_ie_cliente: 'ind_ie_cliente',
  insc_estadual_cliente: 'insc_estadual_cliente',
  insc_municipal_cliente: 'insc_municipal_cliente',
  tipo_cliente: 'tipo_cliente',
  exclusivo_cliente: 'exclusivo_cliente',
  id_vendedor_cliente: 'id_vendedor_cliente',
  id_vendedor_sirius_cliente: 'id_vendedor_sirius_cliente',
  id_lista_preco_cliente: 'id_lista_preco_cliente',
  id_condicao_pagamento_cliente: 'id_condicao_pagamento_cliente',
  contato_cliente: 'contato_cliente',
  nm_contato_cliente: 'nm_contato_cliente',
  id_condicao_pagamento_sirius_cliente: 'id_condicao_pagamento_sirius_cliente'
};

exports.Prisma.Clientes_produtosScalarFieldEnum = {
  id_clipro: 'id_clipro',
  valor_clipro: 'valor_clipro',
  id_cliente_clipro: 'id_cliente_clipro',
  id_produto_clipro: 'id_produto_clipro',
  id_sirius_clipro: 'id_sirius_clipro'
};

exports.Prisma.Condicoes_pagamentoScalarFieldEnum = {
  id_cp: 'id_cp',
  id_sirius_cp: 'id_sirius_cp',
  descricao_cp: 'descricao_cp'
};

exports.Prisma.ContatosScalarFieldEnum = {
  id_contato: 'id_contato',
  nm_contato: 'nm_contato',
  tipo_contato: 'tipo_contato',
  id_cliente_contato: 'id_cliente_contato'
};

exports.Prisma.EnderecosScalarFieldEnum = {
  id_endereco: 'id_endereco',
  cep_endereco: 'cep_endereco',
  logradouro_endereco: 'logradouro_endereco',
  numero_endereco: 'numero_endereco',
  complemento_endereco: 'complemento_endereco',
  bairro_endereco: 'bairro_endereco',
  cidade_endereco: 'cidade_endereco',
  cod_mun_endereco: 'cod_mun_endereco',
  cod_uf_endereco: 'cod_uf_endereco',
  uf_endereco: 'uf_endereco',
  id_cliente_endereco: 'id_cliente_endereco',
  tipo_endereco_endereco: 'tipo_endereco_endereco',
  status_endereco: 'status_endereco',
  tipo_logradouro_endereco: 'tipo_logradouro_endereco'
};

exports.Prisma.ExtrasScalarFieldEnum = {
  id_extra: 'id_extra',
  titulo_extra: 'titulo_extra',
  texto_extra: 'texto_extra',
  preco_extra: 'preco_extra'
};

exports.Prisma.First_page_imagesScalarFieldEnum = {
  id_fpi: 'id_fpi',
  id_restaurante_fpi: 'id_restaurante_fpi',
  id_imagem_fpi: 'id_imagem_fpi'
};

exports.Prisma.FornecedoresScalarFieldEnum = {
  id_forn: 'id_forn',
  fantasia_forn: 'fantasia_forn',
  razao_social_forn: 'razao_social_forn',
  status_forn: 'status_forn',
  cpf_cnpj_forn: 'cpf_cnpj_forn',
  tipo_forn: 'tipo_forn',
  insc_estadual_forn: 'insc_estadual_forn',
  cep_forn: 'cep_forn',
  logradouro_forn: 'logradouro_forn',
  numero_forn: 'numero_forn',
  complemento_forn: 'complemento_forn',
  bairro_forn: 'bairro_forn',
  cidade_forn: 'cidade_forn',
  uf_forn: 'uf_forn',
  email_forn: 'email_forn',
  celular_forn: 'celular_forn',
  telefone_forn: 'telefone_forn',
  fax_forn: 'fax_forn',
  pessoa_contato_forn: 'pessoa_contato_forn',
  observacoes_forn: 'observacoes_forn'
};

exports.Prisma.Grupos_usuariosScalarFieldEnum = {
  id_gu: 'id_gu',
  nm_gu: 'nm_gu'
};

exports.Prisma.ImagensScalarFieldEnum = {
  id_imagem: 'id_imagem',
  imagem: 'imagem',
  desc_imagem: 'desc_imagem'
};

exports.Prisma.Listas_precosScalarFieldEnum = {
  id_lp: 'id_lp',
  descricao_lp: 'descricao_lp',
  id_sirius_lp: 'id_sirius_lp'
};

exports.Prisma.Listas_precos_produtosScalarFieldEnum = {
  id_lpp: 'id_lpp',
  id_lista_lpp: 'id_lista_lpp',
  id_produto_lpp: 'id_produto_lpp',
  valor_lpp: 'valor_lpp',
  id_produto_sirius_lpp: 'id_produto_sirius_lpp'
};

exports.Prisma.MenusScalarFieldEnum = {
  id_menu: 'id_menu',
  id_restaurante_menu: 'id_restaurante_menu',
  id_imagem_menu: 'id_imagem_menu',
  titulo_menu: 'titulo_menu',
  texto_menu: 'texto_menu'
};

exports.Prisma.Modalidade_freteScalarFieldEnum = {
  id_mf: 'id_mf',
  nm_mf: 'nm_mf',
  valor_mf: 'valor_mf'
};

exports.Prisma.ParametrosScalarFieldEnum = {
  id_parametro: 'id_parametro',
  nm_parametro: 'nm_parametro',
  valor_parametro: 'valor_parametro',
  descricao_parametro: 'descricao_parametro'
};

exports.Prisma.Pedidos_vendaScalarFieldEnum = {
  id_pv: 'id_pv',
  numero_pv: 'numero_pv',
  id_vendedor_pv: 'id_vendedor_pv',
  id_cliente_pv: 'id_cliente_pv',
  id_usuario_pv: 'id_usuario_pv',
  desconto_pv: 'desconto_pv',
  valor_bruto_pv: 'valor_bruto_pv',
  valor_liquido_pv: 'valor_liquido_pv',
  status_pv: 'status_pv',
  observacoes_pv: 'observacoes_pv',
  data_criacao_pv: 'data_criacao_pv',
  cliente_contato_pv: 'cliente_contato_pv',
  data_realizacao_pv: 'data_realizacao_pv',
  data_sincronizacao_pv: 'data_sincronizacao_pv',
  id_condicao_pagamento_pv: 'id_condicao_pagamento_pv',
  entrega_cep_pv: 'entrega_cep_pv',
  entrega_logradouro_pv: 'entrega_logradouro_pv',
  entrega_numero_pv: 'entrega_numero_pv',
  entrega_complemento_pv: 'entrega_complemento_pv',
  entrega_bairro_pv: 'entrega_bairro_pv',
  entrega_cidade_pv: 'entrega_cidade_pv',
  entrega_uf_pv: 'entrega_uf_pv',
  id_transportadores_pv: 'id_transportadores_pv',
  id_modalidade_frete_pv: 'id_modalidade_frete_pv',
  id_cliente_escolheu_pv: 'id_cliente_escolheu_pv',
  pagamento_pv: 'pagamento_pv',
  troco_pv: 'troco_pv'
};

exports.Prisma.Pedidos_venda_itensScalarFieldEnum = {
  id_pvi: 'id_pvi',
  id_pedido_pvi: 'id_pedido_pvi',
  id_produto_pvi: 'id_produto_pvi',
  id_produto_sirius_pvi: 'id_produto_sirius_pvi',
  prod_descricao_pvi: 'prod_descricao_pvi',
  prod_unidade_pvi: 'prod_unidade_pvi',
  prod_quantidade_pvi: 'prod_quantidade_pvi',
  prod_valor_unitario_pvi: 'prod_valor_unitario_pvi',
  prod_ean_pvi: 'prod_ean_pvi',
  prod_codigo_pvi: 'prod_codigo_pvi',
  valor_total_pvi: 'valor_total_pvi',
  id_lista_preco_pvi: 'id_lista_preco_pvi'
};

exports.Prisma.Pedidos_venda_pagamentosScalarFieldEnum = {
  id_pvp: 'id_pvp',
  id_pedido_pvp: 'id_pedido_pvp',
  forma_pagamento_pvp: 'forma_pagamento_pvp',
  valor_pvp: 'valor_pvp',
  data_criacao_pvp: 'data_criacao_pvp',
  data_vencimento_pvp: 'data_vencimento_pvp'
};

exports.Prisma.PermissoesScalarFieldEnum = {
  id_permissao: 'id_permissao',
  id_grupo_usuarios_permissao: 'id_grupo_usuarios_permissao',
  nm_permissao: 'nm_permissao',
  modulo_permissao: 'modulo_permissao',
  criar_permissao: 'criar_permissao',
  ler_permissao: 'ler_permissao',
  atualizar_permissao: 'atualizar_permissao',
  deletar_permissao: 'deletar_permissao'
};

exports.Prisma.ProdutosScalarFieldEnum = {
  id_prod: 'id_prod',
  id_sirius_prod: 'id_sirius_prod',
  cod_prod: 'cod_prod',
  descricao_prod: 'descricao_prod',
  cod_ean_prod: 'cod_ean_prod',
  ncm_prod: 'ncm_prod',
  cfop_prod: 'cfop_prod',
  un_com_prod: 'un_com_prod',
  qtd_com_prod: 'qtd_com_prod',
  vlr_un_com_prod: 'vlr_un_com_prod',
  vlr_prod: 'vlr_prod',
  cod_ean_trib_prod: 'cod_ean_trib_prod',
  un_trib_prod: 'un_trib_prod',
  qtd_trib_prod: 'qtd_trib_prod',
  vlr_un_trib_prod: 'vlr_un_trib_prod',
  saldo_prod: 'saldo_prod',
  status_prod: 'status_prod',
  texto_produto: 'texto_produto',
  novo_produto: 'novo_produto',
  acucar_produto: 'acucar_produto',
  lactose_produto: 'lactose_produto',
  gluten_produto: 'gluten_produto',
  vegetariano_produto: 'vegetariano_produto',
  vegano_produto: 'vegano_produto'
};

exports.Prisma.Produtos_extrasScalarFieldEnum = {
  id_produto_pe: 'id_produto_pe',
  id_extra_pe: 'id_extra_pe'
};

exports.Prisma.Produtos_movimentacoesScalarFieldEnum = {
  id_pm: 'id_pm',
  id_pedido_venda_pm: 'id_pedido_venda_pm',
  id_produto_pm: 'id_produto_pm',
  id_usuario_pm: 'id_usuario_pm',
  saldo_anterior_pm: 'saldo_anterior_pm',
  saldo_atual_pm: 'saldo_atual_pm',
  quantidade_pm: 'quantidade_pm',
  tipo_movimentacao_pm: 'tipo_movimentacao_pm',
  data_hora_pm: 'data_hora_pm',
  numero_nota_fiscal_pm: 'numero_nota_fiscal_pm',
  observacao_pm: 'observacao_pm'
};

exports.Prisma.RestaurantesScalarFieldEnum = {
  id_restaurante: 'id_restaurante',
  id_empresa_restaurante: 'id_empresa_restaurante',
  id_imagem_restaurante: 'id_imagem_restaurante',
  nm_restaurante: 'nm_restaurante'
};

exports.Prisma.SubmenusScalarFieldEnum = {
  id_submenu: 'id_submenu',
  id_menu_submenu: 'id_menu_submenu',
  titulo_submenu: 'titulo_submenu',
  texto_submenu: 'texto_submenu'
};

exports.Prisma.TransportadoresScalarFieldEnum = {
  id_transportador: 'id_transportador',
  id_sirius_transportador: 'id_sirius_transportador',
  nm_transportador: 'nm_transportador',
  status_transportador: 'status_transportador'
};

exports.Prisma.Usuarios_grupos_usuariosScalarFieldEnum = {
  id_ugu: 'id_ugu',
  id_usuario_ugu: 'id_usuario_ugu',
  id_grupos_usuarios_ugu: 'id_grupos_usuarios_ugu'
};

exports.Prisma.VendedoresScalarFieldEnum = {
  id_vendedor: 'id_vendedor',
  id_sirius_vendedor: 'id_sirius_vendedor',
  nm_vendedor: 'nm_vendedor',
  apelido_vendedor: 'apelido_vendedor',
  status_vendedor: 'status_vendedor',
  cpf_vendedor: 'cpf_vendedor',
  cnpj_vendedor: 'cnpj_vendedor',
  insc_estadual_vendedor: 'insc_estadual_vendedor',
  rg_vendedor: 'rg_vendedor',
  telefone_vendedor: 'telefone_vendedor',
  celular_vendedor: 'celular_vendedor',
  email_vendedor: 'email_vendedor',
  fax_vendedor: 'fax_vendedor',
  pessoa_contato_vendedor: 'pessoa_contato_vendedor',
  cep_vendedor: 'cep_vendedor',
  logradouro_vendedor: 'logradouro_vendedor',
  numero_vendedor: 'numero_vendedor',
  complemento_vendedor: 'complemento_vendedor',
  bairro_vendedor: 'bairro_vendedor',
  regiao_vendedor: 'regiao_vendedor',
  cidade_vendedor: 'cidade_vendedor',
  uf_vendedor: 'uf_vendedor',
  departamento_vendedor: 'departamento_vendedor',
  porcentagem_comissao_vendedor: 'porcentagem_comissao_vendedor',
  porcentagem_desc_max_vendedor: 'porcentagem_desc_max_vendedor',
  nm_banco_vendedor: 'nm_banco_vendedor',
  numero_banco_vendedor: 'numero_banco_vendedor',
  agencia_vendedor: 'agencia_vendedor',
  digito_agencia_vendedor: 'digito_agencia_vendedor',
  conta_vendedor: 'conta_vendedor',
  digito_conta_vendedor: 'digito_conta_vendedor',
  observacoes_vendedor: 'observacoes_vendedor'
};

exports.Prisma.Vendedores_usuariosScalarFieldEnum = {
  id_vu: 'id_vu',
  id_usuario_vu: 'id_usuario_vu',
  id_vendedor_vu: 'id_vendedor_vu',
  id_sirius_vendedor_vu: 'id_sirius_vendedor_vu'
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
  atividades_grupos: 'atividades_grupos',
  carousel_images: 'carousel_images',
  certificado: 'certificado',
  clientes: 'clientes',
  clientes_produtos: 'clientes_produtos',
  condicoes_pagamento: 'condicoes_pagamento',
  contatos: 'contatos',
  enderecos: 'enderecos',
  extras: 'extras',
  first_page_images: 'first_page_images',
  fornecedores: 'fornecedores',
  grupos_usuarios: 'grupos_usuarios',
  imagens: 'imagens',
  listas_precos: 'listas_precos',
  listas_precos_produtos: 'listas_precos_produtos',
  menus: 'menus',
  modalidade_frete: 'modalidade_frete',
  parametros: 'parametros',
  pedidos_venda: 'pedidos_venda',
  pedidos_venda_itens: 'pedidos_venda_itens',
  pedidos_venda_pagamentos: 'pedidos_venda_pagamentos',
  permissoes: 'permissoes',
  produtos: 'produtos',
  produtos_extras: 'produtos_extras',
  produtos_movimentacoes: 'produtos_movimentacoes',
  restaurantes: 'restaurantes',
  submenus: 'submenus',
  transportadores: 'transportadores',
  usuarios_grupos_usuarios: 'usuarios_grupos_usuarios',
  vendedores: 'vendedores',
  vendedores_usuarios: 'vendedores_usuarios'
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
