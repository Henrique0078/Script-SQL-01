import * as mysql from "mysql2/promise";

export default async function createDatabase(nomeBanco:string) {
	const connection = await mysql.createConnection({
		host: process.env.HOST,
		user: process.env.USUARIO,
		password: process.env.SENHA,
		multipleStatements: true,
	});

	try {
		// SQL para criar o banco de dados
		const createDatabaseSQL = `DROP DATABASE IF EXISTS ${nomeBanco};
		CREATE DATABASE ${nomeBanco};
		USE ${nomeBanco};

		-- --------------------------------------------------------------
		-- Tabela certificado FEITO
		-- --------------------------------------------------------------
		CREATE TABLE certificado (
		  id_certificado int NOT NULL AUTO_INCREMENT,
		  senha_certificado varchar(15) DEFAULT NULL,
		  serie_certificado varchar(30) DEFAULT NULL,
		  nm_certificado varchar(30) DEFAULT NULL,
		  path_certificado varchar(250) DEFAULT NULL,
		  PRIMARY KEY (id_certificado)
		);

		-- --------------------------------------------------------------
		-- Tabela vendedores FEITO
		-- --------------------------------------------------------------
		CREATE TABLE vendedores (
		  id_vendedor int NOT NULL AUTO_INCREMENT,
		  id_sirius_vendedor int DEFAULT NULL,
		  nm_vendedor varchar(80) NOT NULL,
		  apelido_vendedor varchar(80) DEFAULT NULL,
		  status_vendedor char(1) NOT NULL,
		  cpf_vendedor varchar(14) DEFAULT NULL,
		  cnpj_vendedor varchar(18) DEFAULT NULL,
		  insc_estadual_vendedor varchar(15) DEFAULT NULL,
		  rg_vendedor varchar(12) DEFAULT NULL,
		  telefone_vendedor varchar(21) DEFAULT NULL,
		  celular_vendedor varchar(20) DEFAULT NULL,
		  email_vendedor varchar(80) DEFAULT NULL,
		  fax_vendedor varchar(80) DEFAULT NULL,
		  pessoa_contato_vendedor varchar(80) DEFAULT NULL,
		  cep_vendedor varchar(10) DEFAULT NULL,
		  logradouro_vendedor varchar(80) DEFAULT NULL,
		  numero_vendedor int DEFAULT NULL,
		  complemento_vendedor varchar(80) DEFAULT NULL,
		  bairro_vendedor varchar(80) DEFAULT NULL,
		  regiao_vendedor varchar(80) DEFAULT NULL,
		  cidade_vendedor varchar(80) DEFAULT NULL,
		  uf_vendedor char(2) DEFAULT NULL,
		  departamento_vendedor varchar(80) DEFAULT NULL,
		  porcentagem_comissao_vendedor decimal(7,4) DEFAULT NULL,
		  porcentagem_desc_max_vendedor decimal(7,4) DEFAULT NULL,
		  nm_banco_vendedor varchar(80) DEFAULT NULL,
		  numero_banco_vendedor varchar(80) DEFAULT NULL,
		  agencia_vendedor varchar(80) DEFAULT NULL,
		  digito_agencia_vendedor varchar(80) DEFAULT NULL,
		  conta_vendedor varchar(80) DEFAULT NULL,
		  digito_conta_vendedor varchar(80) DEFAULT NULL,
		  observacoes_vendedor varchar(255) DEFAULT NULL,
		  PRIMARY KEY (id_vendedor),
		  UNIQUE KEY id_sirius_vendedor_UNIQUE (id_sirius_vendedor ASC)
		);

		-- --------------------------------------------------------------
		-- Tabela condicoes_pagamento FEITO
		-- --------------------------------------------------------------
		CREATE TABLE condicoes_pagamento (
		  id_cp int NOT NULL AUTO_INCREMENT,
		  id_sirius_cp int DEFAULT NULL,
		  descricao_cp varchar(50) NOT NULL,
		  PRIMARY KEY (id_cp),
		  UNIQUE KEY id_sirius_cp_UNIQUE (id_sirius_cp ASC)
		);

		-- --------------------------------------------------------------
		-- Tabela clientes FEITO
		-- --------------------------------------------------------------
		CREATE TABLE clientes (
		  id_cliente int NOT NULL AUTO_INCREMENT,
		  id_sirius_cliente int DEFAULT NULL,
		  status_cliente varchar(1) NOT NULL,
		  created_at_cliente datetime(6) NOT NULL,
		  updated_at_cliente datetime(6) NOT NULL,
		  razao_social_cliente varchar(60) NOT NULL,
		  fantasia_cliente varchar(60) DEFAULT NULL,
		  cpf_cliente varchar(11) NOT NULL,
		  cnpj_cliente varchar(14) NOT NULL,
		  id_estrangeiro_cliente varchar(20) DEFAULT NULL,
		  ind_ie_cliente varchar(1) DEFAULT NULL,
		  insc_estadual_cliente varchar(15) DEFAULT NULL,
		  insc_municipal_cliente varchar(15) DEFAULT NULL,
		  tipo_cliente char(1) NOT NULL,
		  exclusivo_cliente int DEFAULT '0',
		  id_vendedor_cliente int DEFAULT '0',
		  id_vendedor_sirius_cliente int DEFAULT '0',
		  id_lista_preco_cliente int DEFAULT '0',
		  id_condicao_pagamento_cliente int DEFAULT NULL,
		  contato_cliente varchar(60) DEFAULT NULL,
		  nm_contato_cliente varchar(60) DEFAULT NULL,
		  id_condicao_pagamento_sirius_cliente int DEFAULT NULL,
		  PRIMARY KEY (id_cliente),
		  UNIQUE KEY id_sirius_cliente_UNIQUE (id_sirius_cliente ASC),
		  INDEX fk_cliente_condicao_pagamento_idx (id_condicao_pagamento_cliente ASC),
			CONSTRAINT fk_cliente_condicao_pagamento_idx
				FOREIGN KEY (id_condicao_pagamento_cliente)
				REFERENCES condicoes_pagamento (id_cp)
		);

		-- --------------------------------------------------------------
		-- Tabela enderecos FEITO
		-- --------------------------------------------------------------
		CREATE TABLE enderecos (
		  id_endereco int NOT NULL AUTO_INCREMENT,
		  cep_endereco varchar(8) NOT NULL,
		  logradouro_endereco varchar(60) NOT NULL,
		  numero_endereco varchar(8) NOT NULL,
		  complemento_endereco varchar(60) NOT NULL,
		  bairro_endereco varchar(60) NOT NULL,
		  cidade_endereco varchar(60) NOT NULL,
		  cod_mun_endereco varchar(7) NOT NULL,
		  cod_uf_endereco varchar(2) NOT NULL,
		  uf_endereco varchar(2) NOT NULL,
		  id_cliente_endereco int NOT NULL,
		  tipo_endereco_endereco varchar(1) NOT NULL,
		  status_endereco char(1) DEFAULT 'A',
		  tipo_logradouro_endereco varchar(45) NOT NULL,
		  PRIMARY KEY (id_endereco),
		  INDEX fk_enderecos_clientes_idx (id_cliente_endereco ASC),
			CONSTRAINT fk_enderecos_clientes_idx
				FOREIGN KEY (id_cliente_endereco)
				REFERENCES clientes (id_cliente)
		);

		-- --------------------------------------------------------------
		-- Tabela contatos FEITO
		-- --------------------------------------------------------------
		CREATE TABLE contatos (
		  id_contato int NOT NULL AUTO_INCREMENT,
		  nm_contato varchar(60) NOT NULL,
		  tipo_contato varchar(1) NOT NULL,
		  id_cliente_contato int NOT NULL,
		  PRIMARY KEY (id_contato),
		  INDEX fk_contato_clientes_idx (id_cliente_contato ASC),
			CONSTRAINT fk_contato_clientes_idx
				FOREIGN KEY (id_cliente_contato)
				REFERENCES clientes (id_cliente)
		);

		-- --------------------------------------------------------------
		-- Tabela fornecedores FEITO
		-- --------------------------------------------------------------
		CREATE TABLE fornecedores (
		  id_forn int NOT NULL AUTO_INCREMENT,
		  fantasia_forn varchar(80) DEFAULT NULL,
		  razao_social_forn varchar(80) NOT NULL,
		  status_forn char(1) DEFAULT NULL,
		  cpf_cnpj_forn varchar(14) DEFAULT NULL,
		  tipo_forn char(1) DEFAULT NULL,
		  insc_estadual_forn varchar(80) DEFAULT NULL,
		  cep_forn varchar(80) DEFAULT NULL,
		  logradouro_forn varchar(80) DEFAULT NULL,
		  numero_forn int DEFAULT NULL,
		  complemento_forn varchar(80) DEFAULT NULL,
		  bairro_forn varchar(80) DEFAULT NULL,
		  cidade_forn varchar(80) DEFAULT NULL,
		  uf_forn char(2) DEFAULT NULL,
		  email_forn varchar(80) DEFAULT NULL,
		  celular_forn varchar(80) DEFAULT NULL,
		  telefone_forn varchar(80) DEFAULT NULL,
		  fax_forn varchar(80) DEFAULT NULL,
		  pessoa_contato_forn varchar(80) DEFAULT NULL,
		  observacoes_forn varchar(255) DEFAULT NULL,
		  PRIMARY KEY (id_forn)
		);

		-- --------------------------------------------------------------
		-- Tabela grupos_usuarios FEITO
		-- --------------------------------------------------------------
		CREATE TABLE grupos_usuarios (
		  id_gu int NOT NULL AUTO_INCREMENT,
		  nm_gu varchar(100) NOT NULL,
		  PRIMARY KEY (id_gu),
		  UNIQUE KEY nm_gu_UNIQUE (nm_gu ASC)
		);

		-- --------------------------------------------------------------
		-- Tabela vendedores_usuarios FEITO
		-- --------------------------------------------------------------
		CREATE TABLE vendedores_usuarios (
		  id_vu int NOT NULL AUTO_INCREMENT,
		  id_usuario_vu int DEFAULT NULL,
		  id_vendedor_vu int DEFAULT NULL,
		  id_sirius_vendedor_vu int DEFAULT NULL,
		  PRIMARY KEY (id_vu),
		  UNIQUE KEY id_usuario_vu_UNIQUE (id_usuario_vu ASC),
		  UNIQUE KEY id_sirius_vendedor_vu_UNIQUE (id_sirius_vendedor_vu ASC),
		  INDEX fk_vu_vendedores_idx (id_vendedor_vu ASC),
			CONSTRAINT fk_vu_vendedores_idx
				FOREIGN KEY (id_vendedor_vu)
				REFERENCES vendedores (id_vendedor)
		);

		-- --------------------------------------------------------------
		-- Tabela usuarios_grupos_usuarios FEITO
		-- --------------------------------------------------------------
		CREATE TABLE usuarios_grupos_usuarios (
		  id_ugu int NOT NULL AUTO_INCREMENT,
		  id_usuario_ugu int NOT NULL,
		  id_grupos_usuarios_ugu int NOT NULL,
		  PRIMARY KEY (id_ugu),
		  UNIQUE KEY id_usuario_ugu_UNIQUE (id_usuario_ugu ASC),
		  INDEX fk_ugu_grupos_usuarios_idx (id_grupos_usuarios_ugu ASC),
			CONSTRAINT fk_ugu_grupos_usuarios_idx
				FOREIGN KEY (id_grupos_usuarios_ugu)
				REFERENCES grupos_usuarios (id_gu)
		);

		-- --------------------------------------------------------------
		-- Tabela permissoes FEITO
		-- --------------------------------------------------------------
		CREATE TABLE permissoes (
		  id_permissao int NOT NULL AUTO_INCREMENT,
		  id_grupo_usuarios_permissao int NOT NULL,
		  nm_permissao varchar(45) NOT NULL,
		  modulo_permissao varchar(45) NOT NULL,
		  criar_permissao int NOT NULL DEFAULT '0',
		  ler_permissao int NOT NULL DEFAULT '0',
		  atualizar_permissao int NOT NULL DEFAULT '0',
		  deletar_permissao int NOT NULL DEFAULT '0',
		  PRIMARY KEY (id_permissao),
		  INDEX fk_permissoes_grupos_usuarios_idx (id_grupo_usuarios_permissao ASC),
			CONSTRAINT fk_permissoes_grupos_usuarios_idx
				FOREIGN KEY (id_grupo_usuarios_permissao)
				REFERENCES grupos_usuarios (id_gu)
		);

		-- --------------------------------------------------------------
		-- Tabela parametros FEITO
		-- --------------------------------------------------------------
		CREATE TABLE parametros (
		  id_parametro int NOT NULL AUTO_INCREMENT,
		  nm_parametro varchar(255) DEFAULT NULL,
		  valor_parametro int DEFAULT NULL,
		  descricao_parametro varchar(255) DEFAULT NULL,
		  PRIMARY KEY (id_parametro)
		);

		-- --------------------------------------------------------------
		-- Tabela transportadores FEITO
		-- --------------------------------------------------------------
		CREATE TABLE transportadores (
		  id_transportador int NOT NULL AUTO_INCREMENT,
		  id_sirius_transportador int NOT NULL,
		  nm_transportador varchar(120) NOT NULL,
		  status_transportador varchar(1) NOT NULL DEFAULT 'A',
		  PRIMARY KEY (id_transportador),
		  UNIQUE KEY id_sirius_transportador_UNIQUE (id_sirius_transportador ASC)
		);

		-- --------------------------------------------------------------
		-- Tabela modalidade_frete NOVA
		-- --------------------------------------------------------------
		CREATE TABLE modalidade_frete (
		  id_mf int NOT NULL AUTO_INCREMENT,
		  nm_mf varchar(141) NOT NULL,
		  valor_mf int NOT NULL,
		  PRIMARY KEY(id_mf),
		  UNIQUE KEY valor_mf_UNIQUE (valor_mf ASC)
		);

		INSERT INTO modalidade_frete VALUES
		(1, 'Contratação do Frete Por Conta do Remetente', 0),
		(2, 'Contratação do Frete Por Conta do Destinatário', 1),
		(3, 'Contratação do Frete Por Conta do Terceiros', 2),
		(4, 'Transporte Próprio por conta do Remetente', 3),
		(5, 'Transporte Próprio por conta do Destinatário', 4),
		(6, 'Sem Ocorrência de Transporte', 9);

		-- --------------------------------------------------------------------------------------------------------------------------------------------
		-- SiriusRestaurante INICIO 07/12/2023
		-- --------------------------------------------------------------------------------------------------------------------------------------------
		-- --------------------------------------------------------------
		-- Tabela imagens
		-- --------------------------------------------------------------
		CREATE TABLE imagens (
			id_imagem int NOT NULL AUTO_INCREMENT,
			imagem LONGBLOB NULL,
			desc_imagem varchar(256) NULL,
			PRIMARY KEY(id_imagem)
		);

		-- --------------------------------------------------------------
		-- Tabela restaurantes
		-- --------------------------------------------------------------
		CREATE TABLE restaurantes (
			id_restaurante int NOT NULL AUTO_INCREMENT,
			id_empresa_restaurante int NOT NULL,
			id_imagem_restaurante int NULL,
			nm_restaurante varchar(149) NULL,
			PRIMARY KEY(id_restaurante),
			INDEX fk_restaurante_imagens_idx (id_imagem_restaurante ASC),
			CONSTRAINT fk_restaurante_imagens_idx
				FOREIGN KEY (id_imagem_restaurante)
				REFERENCES imagens (id_imagem)
		);

		-- --------------------------------------------------------------
		-- Tabela first_page_images
		-- --------------------------------------------------------------
		CREATE TABLE first_page_images (
			id_fpi int NOT NULL AUTO_INCREMENT,
			id_restaurante_fpi int NOT NULL,
			id_imagem_fpi int NULL,
			PRIMARY KEY(id_fpi),
			INDEX fk_fpi_restaurantes_idx (id_restaurante_fpi ASC),
			CONSTRAINT fk_fpi_restaurantes_idx
				FOREIGN KEY (id_restaurante_fpi)
				REFERENCES restaurantes (id_restaurante),
			INDEX fk_fpi_imagens_idx (id_imagem_fpi ASC),
			CONSTRAINT fk_fpi_imagens_idx
				FOREIGN KEY (id_imagem_fpi)
				REFERENCES imagens (id_imagem)
		);

		-- --------------------------------------------------------------
		-- Tabela carousel_images
		-- --------------------------------------------------------------
		CREATE TABLE carousel_images (
			id_ci int NOT NULL AUTO_INCREMENT,
			id_restaurante_ci int NOT NULL,
			id_imagem_ci int NULL,
			ordem_number_ci int NOT NULL,
			PRIMARY KEY(id_ci),
			INDEX fk_ci_restaurantes_idx (id_restaurante_ci ASC),
			CONSTRAINT fk_ci_restaurantes_idx
				FOREIGN KEY (id_restaurante_ci)
				REFERENCES restaurantes (id_restaurante),
			INDEX fk_ci_imagens_idx (id_imagem_ci ASC),
			CONSTRAINT fk_ci_imagens_idx
				FOREIGN KEY (id_imagem_ci)
				REFERENCES imagens (id_imagem)
		);

		-- --------------------------------------------------------------
		-- Tabela menus
		-- --------------------------------------------------------------
		CREATE TABLE menus (
			id_menu int NOT NULL AUTO_INCREMENT,
			id_restaurante_menu int NOT NULL,
			id_imagem_menu int NULL,
			titulo_menu varchar(200) NOT NULL,
			texto_menu varchar(200) NULL,
			PRIMARY KEY(id_menu),
			INDEX fk_menu_restaurantes_idx (id_restaurante_menu ASC),
			CONSTRAINT fk_menu_restaurantes_idx
				FOREIGN KEY (id_restaurante_menu)
				REFERENCES restaurantes (id_restaurante),
			INDEX fk_menu_imagens_idx (id_imagem_menu ASC),
			CONSTRAINT fk_menu_imagens_idx
				FOREIGN KEY (id_imagem_menu)
				REFERENCES imagens (id_imagem)
		);

		-- --------------------------------------------------------------
		-- Tabela submenus
		-- --------------------------------------------------------------
		CREATE TABLE submenus (
			id_submenu int NOT NULL AUTO_INCREMENT,
			id_menu_submenu int NOT NULL,
			titulo_submenu varchar(200) NOT NULL,
			texto_submenu varchar(200) NULL,
			PRIMARY KEY(id_submenu),
			INDEX fk_submenus_menus_idx (id_menu_submenu ASC),
			CONSTRAINT fk_submenu_menus_idx
				FOREIGN KEY (id_menu_submenu)
				REFERENCES menus (id_menu)
		);

		-- --------------------------------------------------------------------------------------------------------------------------------------------
		-- SiriusRestaurante FIM 07/12/2023
		-- --------------------------------------------------------------------------------------------------------------------------------------------
		-- --------------------------------------------------------------
		-- Tabela produtos FEITO
		-- --------------------------------------------------------------
		CREATE TABLE produtos (
		  id_prod int NOT NULL AUTO_INCREMENT,
		  id_sirius_prod int DEFAULT NULL,
		  cod_prod varchar(60) NULL,
		  descricao_prod varchar(120) NOT NULL,
		  cod_ean_prod varchar(14) NULL,
		  ncm_prod varchar(8) NOT NULL,
		  cfop_prod varchar(4) NOT NULL,
		  un_com_prod varchar(6) DEFAULT NULL,
		  qtd_com_prod DECIMAL(15,3) DEFAULT NULL,
		  vlr_un_com_prod DECIMAL(20,10) DEFAULT NULL,
		  vlr_prod DECIMAL(20,10) DEFAULT NULL,
		  cod_ean_trib_prod varchar(14) DEFAULT NULL,
		  un_trib_prod varchar(6) DEFAULT NULL,
		  qtd_trib_prod DECIMAL(15,3) DEFAULT NULL,
		  vlr_un_trib_prod DECIMAL(20,10) DEFAULT NULL,
		  saldo_prod DECIMAL(15,3) DEFAULT NULL,
		  status_prod varchar(1) NOT NULL,
		  texto_prod varchar(200) NULL, -- Sirius Restaurante 07/12/2023
		  novo_prod BOOLEAN DEFAULT FALSE, -- Sirius Restaurante 07/12/2023
		  acucar_prod BOOLEAN DEFAULT FALSE, -- Sirius Restaurante 07/12/2023
		  lactose_prod BOOLEAN DEFAULT FALSE, -- Sirius Restaurante 07/12/2023
		  gluten_prod BOOLEAN DEFAULT FALSE, -- Sirius Restaurante 07/12/2023
		  vegetariano_prod BOOLEAN DEFAULT FALSE, -- Sirius Restaurante 07/12/2023
		  vegano_prod BOOLEAN DEFAULT FALSE, -- Sirius Restaurante 07/12/2023
		  PRIMARY KEY (id_prod),
		  UNIQUE KEY id_sirius_prod_UNIQUE (id_sirius_prod ASC)
		);

		-- --------------------------------------------------------------------------------------------------------------------------------------------
		-- SiriusRestaurante INICIO 07/12/2023
		-- --------------------------------------------------------------------------------------------------------------------------------------------
		-- --------------------------------------------------------------
		-- Tabela extras NOVO
		-- --------------------------------------------------------------
		CREATE TABLE extras (
			id_extra int NOT NULL AUTO_INCREMENT,
			titulo_extra varchar(200) NOT NULL,
			texto_extra varchar(200) NULL,
			preco_extra decimal(20,10) NOT NULL,
			PRIMARY KEY(id_extra)
		);

		-- --------------------------------------------------------------
		-- Tabela produtos_extras NOVO
		-- --------------------------------------------------------------
		CREATE TABLE produtos_extras (
			id_produto_pe int NOT NULL,
			id_extra_pe int NOT NULL,
			PRIMARY KEY(id_produto_pe, id_extra_pe),
			INDEX fk_pe_produtos_idx (id_produto_pe ASC),
			CONSTRAINT fk_pe_produtos_idx
				FOREIGN KEY (id_produto_pe)
				REFERENCES produtos (id_prod),
			INDEX fk_pe_extras_idx (id_extra_pe ASC),
			CONSTRAINT fk_pe_extras_idx
				FOREIGN KEY (id_extra_pe)
				REFERENCES extras (id_extra)
		);

		-- --------------------------------------------------------------------------------------------------------------------------------------------
		-- SiriusRestaurante FIM 07/12/2023
		-- --------------------------------------------------------------------------------------------------------------------------------------------

		-- --------------------------------------------------------------
		-- Tabela listas_precos FEITO
		-- --------------------------------------------------------------
		CREATE TABLE listas_precos (
		  id_lp int NOT NULL AUTO_INCREMENT,
		  descricao_lp varchar(100) NOT NULL,
		  id_sirius_lp int DEFAULT NULL, -- id listas precos no sirius
		  PRIMARY KEY (id_lp),
		  UNIQUE KEY id_sirius_lp_UNIQUE (id_sirius_lp ASC)
		);

		-- --------------------------------------------------------------
		-- Tabela listas_precos_produtos FEITO
		-- --------------------------------------------------------------
		CREATE TABLE listas_precos_produtos (
		  id_lpp int NOT NULL AUTO_INCREMENT,
		  id_lista_lpp int DEFAULT '0',
		  id_produto_lpp int DEFAULT '0',
		  valor_lpp decimal(15,2) DEFAULT '0.00',
		  id_produto_sirius_lpp int DEFAULT NULL, -- id produtos no sirius
		  PRIMARY KEY (id_lpp),
		  INDEX fk_lpp_listas_precos_idx (id_lista_lpp ASC),
		  CONSTRAINT fk_lpp_listas_precos_idx
				FOREIGN KEY (id_lista_lpp)
				REFERENCES listas_precos (id_lp),
		  INDEX fk_lpp_produtos_idx (id_produto_lpp ASC),
		  CONSTRAINT fk_lpp_produtos_idx
				FOREIGN KEY (id_produto_lpp)
				REFERENCES produtos (id_prod)
		);

		-- --------------------------------------------------------------
		-- Tabela atividades_grupos NOVO
		-- --------------------------------------------------------------
		CREATE TABLE atividades_grupos (
		  id_ag int NOT NULL AUTO_INCREMENT,
		  id_grupos_usuarios_ag int NOT NULL,
		  id_atividade_ag int NOT NULL,
		  valor_ag int DEFAULT '0',
		  descricao_ag varchar(60) DEFAULT NULL,
		  PRIMARY KEY (id_ag),
		  INDEX fk_ag_grupos_usuarios_idx (id_grupos_usuarios_ag ASC),
		  CONSTRAINT fk_ag_grupos_usuarios_idx
				FOREIGN KEY (id_grupos_usuarios_ag)
				REFERENCES grupos_usuarios (id_gu)
		);

		-- --------------------------------------------------------------
		-- Tabela pedidos_venda FEITO
		-- --------------------------------------------------------------
		CREATE TABLE pedidos_venda (
		  id_pv int NOT NULL AUTO_INCREMENT,
		  numero_pv int DEFAULT NULL,
		  id_vendedor_pv int DEFAULT NULL,
		  id_cliente_pv int DEFAULT NULL,
		  id_usuario_pv int DEFAULT NULL,
		  desconto_pv decimal(20,10) DEFAULT NULL,
		  valor_bruto_pv decimal(20,10) NOT NULL,
		  valor_liquido_pv decimal(20,10) DEFAULT NULL,
		  status_pv varchar(1) NOT NULL,
		  observacoes_pv varchar(80) DEFAULT NULL,
		  data_criacao_pv datetime NOT NULL,
		  cliente_contato_pv varchar(45) DEFAULT NULL,
		  data_realizacao_pv datetime DEFAULT NULL,
		  data_sincronizacao_pv datetime DEFAULT NULL,
		  id_condicao_pagamento_pv int DEFAULT NULL,
		  entrega_cep_pv varchar(8) DEFAULT NULL,
		  entrega_logradouro_pv varchar(60) DEFAULT NULL,
		  entrega_numero_pv varchar(8) DEFAULT NULL,
		  entrega_complemento_pv varchar(60) DEFAULT NULL,
		  entrega_bairro_pv varchar(60) DEFAULT NULL,
		  entrega_cidade_pv varchar(60) DEFAULT NULL,
		  entrega_uf_pv varchar(2) DEFAULT NULL,
		  id_transportadores_pv int DEFAULT NULL,
		  id_modalidade_frete_pv int DEFAULT NULL,
		  id_cliente_escolheu_pv varchar(40) DEFAULT NULL,
		  pagamento_pv decimal(20,10) DEFAULT NULL,
		  troco_pv decimal(20,10) DEFAULT NULL,
		  PRIMARY KEY (id_pv),
		  INDEX fk_pv_vendedores_idx (id_vendedor_pv ASC),
			CONSTRAINT fk_pv_vendedores_idx
				FOREIGN KEY (id_vendedor_pv)
				REFERENCES vendedores (id_vendedor),
		  INDEX fk_pv_clientes_idx (id_cliente_pv ASC),
			CONSTRAINT fk_pv_clientes_idx
				FOREIGN KEY (id_cliente_pv)
				REFERENCES clientes (id_cliente),
		  INDEX fk_pv_condicoes_pagamento_idx (id_condicao_pagamento_pv ASC),
			CONSTRAINT fk_pv_condicoes_pagamento_idx
				FOREIGN KEY (id_condicao_pagamento_pv) -- Arrumada FK 08/12/2023
				REFERENCES condicoes_pagamento (id_cp),
		  INDEX fk_pv_transportadores_idx (id_transportadores_pv ASC),
			CONSTRAINT fk_pv_transportadores_idx
				FOREIGN KEY (id_transportadores_pv)
				REFERENCES transportadores (id_transportador),
		  INDEX fk_pv_modalidade_frete_idx (id_modalidade_frete_pv ASC),
			CONSTRAINT fk_pv_modalidade_frete_idx
				FOREIGN KEY (id_modalidade_frete_pv)
				REFERENCES modalidade_frete (id_mf)
		);

		-- --------------------------------------------------------------
		-- Tabela pedidos_venda_itens FEITO
		-- --------------------------------------------------------------
		CREATE TABLE pedidos_venda_itens (
		  id_pvi int NOT NULL AUTO_INCREMENT,
		  id_pedido_pvi int DEFAULT NULL,
		  id_produto_pvi int DEFAULT NULL,
		  id_produto_sirius_pvi int DEFAULT NULL, -- id de produto no sirius
		  prod_descricao_pvi varchar(120) DEFAULT NULL,
		  prod_unidade_pvi varchar(6) DEFAULT NULL,
		  prod_quantidade_pvi DECIMAL(15,3) NOT NULL,
		  prod_valor_unitario_pvi decimal(20,10) NOT NULL,
		  prod_ean_pvi varchar(14) DEFAULT NULL,
		  prod_codigo_pvi varchar(60) DEFAULT NULL,
		  valor_total_pvi decimal(20,10) DEFAULT NULL,
		  id_lista_preco_pvi int DEFAULT NULL,
		  PRIMARY KEY (id_pvi),
		  INDEX fk_pvi_pedido_idx (id_pedido_pvi ASC),
			CONSTRAINT fk_pvi_pedido_idx
				FOREIGN KEY (id_pedido_pvi)
				REFERENCES pedidos_venda (id_pv),
		  INDEX fk_pvi_produto_idx (id_produto_pvi ASC),
			CONSTRAINT fk_pvi_produto_idx
				FOREIGN KEY (id_produto_pvi)
				REFERENCES produtos (id_prod),
		  INDEX fk_pvi_lista_preco_idx (id_lista_preco_pvi ASC),
			CONSTRAINT fk_pvi_lista_preco_idx
				FOREIGN KEY (id_lista_preco_pvi)
				REFERENCES listas_precos (id_lp)
		);

		-- --------------------------------------------------------------
		-- Tabela pedidos_venda_pagamentos FEITO
		-- --------------------------------------------------------------
		CREATE TABLE pedidos_venda_pagamentos (
		  id_pvp int NOT NULL AUTO_INCREMENT,
		  id_pedido_pvp int DEFAULT NULL,
		  forma_pagamento_pvp varchar(2) NOT NULL,
		  valor_pvp decimal(20,10) NOT NULL,
		  data_criacao_pvp datetime NOT NULL,
		  data_vencimento_pvp datetime NOT NULL,
		  PRIMARY KEY (id_pvp),
		  INDEX fk_pvp_pedido_idx (id_pedido_pvp ASC),
			CONSTRAINT fk_pvp_pedido_idx
				FOREIGN KEY (id_pedido_pvp)
				REFERENCES pedidos_venda (id_pv)
		);

		-- --------------------------------------------------------------
		-- Tabela produtos_movimentacoes NOVO
		-- --------------------------------------------------------------
		CREATE TABLE produtos_movimentacoes (
		  id_pm int NOT NULL AUTO_INCREMENT,
		  id_pedido_venda_pm int DEFAULT NULL,
		  id_produto_pm int NOT NULL,
		  id_usuario_pm int NOT NULL,
		  saldo_anterior_pm DECIMAL(15,3) DEFAULT NULL,
		  saldo_atual_pm DECIMAL(15,3) DEFAULT NULL,
		  quantidade_pm DECIMAL(15,3) NOT NULL,
		  tipo_movimentacao_pm varchar(191) NOT NULL,
		  data_hora_pm datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
		  numero_nota_fiscal_pm int DEFAULT NULL,
		  observacao_pm varchar(191) DEFAULT NULL,
		  PRIMARY KEY (id_pm),
		  INDEX fk_pm_pedido_venda_idx (id_pedido_venda_pm ASC),
			CONSTRAINT fk_pm_pedido_venda_idx
				FOREIGN KEY (id_pedido_venda_pm)
				REFERENCES pedidos_venda (id_pv),
		  INDEX fk_pm_produtos_idx (id_produto_pm ASC),
			CONSTRAINT fk_pm_produtos_idx
				FOREIGN KEY (id_produto_pm)
				REFERENCES produtos (id_prod)
		);

		-- --------------------------------------------------------------
		-- Tabela clientes_produtos FEITO
		-- --------------------------------------------------------------
		CREATE TABLE clientes_produtos (
		  id_clipro int NOT NULL AUTO_INCREMENT,
		  valor_clipro decimal(20,10) NOT NULL,
		  id_cliente_clipro int NOT NULL,
		  id_produto_clipro int NOT NULL,
		  id_sirius_clipro int DEFAULT NULL,
		  PRIMARY KEY (id_clipro),
		  INDEX fk_clipro_clientes_idx (id_cliente_clipro ASC),
			CONSTRAINT fk_clipro_clientes_idx
				FOREIGN KEY (id_cliente_clipro)
				REFERENCES clientes (id_cliente),
		  INDEX fk_clipro_produtos_idx (id_produto_clipro ASC),
			CONSTRAINT fk_clipro_produtos_idx
				FOREIGN KEY (id_produto_clipro)
				REFERENCES produtos (id_prod)
		);

		-- --------------------------------------------------------------
		-- Triggers
		-- --------------------------------------------------------------
		
		CREATE TRIGGER atualiza_valor_bruto
		AFTER INSERT ON pedidos_venda_itens
		FOR EACH ROW
		BEGIN
			-- Atualiza o valor_bruto na tabela pedidos_venda após inserção de novo registro
			UPDATE pedidos_venda
			SET valor_bruto_pv = valor_bruto_pv + NEW.valor_total_pvi
			WHERE id_pv = NEW.id_pedido_pvi;
		END;
		

		
		CREATE TRIGGER before_insert_produtos_movimentacoes
		BEFORE INSERT ON produtos_movimentacoes
		FOR EACH ROW
		BEGIN
			DECLARE saldo_anterior INT;
			DECLARE saldo_atual INT;

			-- Obter o saldo anterior da tabela produtos
			SELECT saldo_prod INTO saldo_anterior FROM produtos WHERE id_prod = NEW.id_produto_pm;

			-- Subtrair a quantidade da coluna saldo na tabela produtos
			UPDATE produtos SET saldo_prod = saldo + NEW.quantidade_pm WHERE id_prod = NEW.id_produto_pm;

			-- Obter o saldo atual após a subtração da quantidade
			SELECT saldo_prod INTO saldo_atual FROM produtos WHERE id_prod = NEW.id_produto_pm;

			-- Preencher as colunas saldo_anterior e saldo_atual na tabela produtos_movimentacoes
			SET NEW.saldo_anterior_pm = saldo_anterior;
			SET NEW.saldo_atual_pm = saldo_atual;

			-- Preencher a coluna data_e_hora com a data e hora atual
			SET NEW.data_hora_pm = NOW(3);
		END;
		`;

		// Executar a consulta SQL
		await connection.query(createDatabaseSQL);
		console.log("Banco de dados criado com sucesso!");
	} catch (error) {
		console.error("Erro ao criar o banco de dados:", error);
	} finally {
		// Fechar a conexão
		await connection.end();
	}
}
