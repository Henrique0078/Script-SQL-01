import mysql from "mysql";

export default async function createDatabase(nomeBanco: string) {
	try {
		//CRIA O BANCO
		const connection = mysql.createConnection({
			host: process.env.HOST,
			user: process.env.USUARIO,
			password: process.env.SENHA,
			multipleStatements: true,

		});
		// SQL para criar o banco de dados
		const createDatabaseSQL = `
		DROP DATABASE IF EXISTS ${nomeBanco};
		CREATE DATABASE ${nomeBanco};
		USE ${nomeBanco};`;

		await queryAsync(createDatabaseSQL, connection);
		///////////////////////////////////////////////
		// CRIA A CONEXÃO COM O BANCO
		const connectionBanquinho = mysql.createConnection({
			host: process.env.HOST,
			user: process.env.USUARIO,
			password: process.env.SENHA,
			database: nomeBanco,
			multipleStatements: true,
		});
		///////////////////////////////////////////////
		//////////////CRIA A TABELAS///////////////////
		///////////////////////////////////////////////

		//////////////CERTIFICADO/////////////////////


		const certificado = `
		DROP TABLE IF EXISTS certificado;
		/*!40101 SET @saved_cs_client     = @@character_set_client */;
		/*!50503 SET character_set_client = utf8mb4 */;
		CREATE TABLE certificado (
		  id_certificado int(11) NOT NULL AUTO_INCREMENT,
		  senha_certificado varchar(15) DEFAULT NULL,
		  serie_certificado varchar(30) DEFAULT NULL,
		  nm_certificado varchar(30) DEFAULT NULL,
		  path_certificado varchar(250) DEFAULT NULL,
		  PRIMARY KEY (id_certificado)
		) ENGINE=InnoDB DEFAULT CHARSET=latin1;
		/*!40101 SET character_set_client = @saved_cs_client */;
		`;
		await queryAsync(certificado, connectionBanquinho);


		//////////VENDEDORES/////////////////////////////


		const vendedores = `
		DROP TABLE IF EXISTS vendedores;
		/*!40101 SET @saved_cs_client     = @@character_set_client */;
		/*!50503 SET character_set_client = utf8mb4 */;
		CREATE TABLE vendedores (
		  id_vendedor int(11) NOT NULL AUTO_INCREMENT,
		  id_sirius_vendedor int(11) DEFAULT NULL,
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
		  numero_vendedor int(11) DEFAULT NULL,
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
		  UNIQUE KEY id_sirius_vendedor_UNIQUE (id_sirius_vendedor)
		) ENGINE=InnoDB DEFAULT CHARSET=latin1;
		/*!40101 SET character_set_client = @saved_cs_client */;
		`;
		await queryAsync(vendedores, connectionBanquinho);


		////////////CONDICOES DE PAGAMENTOS///////////////////


		const condicao_pagamento = `
		DROP TABLE IF EXISTS condicoes_pagamento;
		/*!40101 SET @saved_cs_client     = @@character_set_client */;
		/*!50503 SET character_set_client = utf8mb4 */;
		CREATE TABLE condicoes_pagamento (
		  id_cp int(11) NOT NULL AUTO_INCREMENT,
		  id_sirius_cp int(11) DEFAULT NULL,
		  descricao_cp varchar(50) NOT NULL,
		  PRIMARY KEY (id_cp),
		  UNIQUE KEY id_sirius_cp_UNIQUE (id_sirius_cp)
		) ENGINE=InnoDB DEFAULT CHARSET=latin1;
		/*!40101 SET character_set_client = @saved_cs_client */;
		`;
		await queryAsync(condicao_pagamento, connectionBanquinho);

		////////////LISTAS DE PREÇOS/////////////////////////

		const listas_precos = `
		DROP TABLE IF EXISTS listas_precos;
		/*!40101 SET @saved_cs_client     = @@character_set_client */;
		/*!50503 SET character_set_client = utf8mb4 */;
		CREATE TABLE listas_precos (
		  id_lp int(11) NOT NULL AUTO_INCREMENT,
		  descricao_lp varchar(100) NOT NULL,
		  id_sirius_lp int(11) DEFAULT NULL,
		  PRIMARY KEY (id_lp),
		  UNIQUE KEY id_sirius_lp_UNIQUE (id_sirius_lp)
		) ENGINE=InnoDB DEFAULT CHARSET=latin1;
		/*!40101 SET character_set_client = @saved_cs_client */;

			`;
		await queryAsync(listas_precos, connectionBanquinho);

		////////////CLIENTES//////////////////////////////


		const clientes = `
		DROP TABLE IF EXISTS clientes;
		/*!40101 SET @saved_cs_client     = @@character_set_client */;
		/*!50503 SET character_set_client = utf8mb4 */;
		CREATE TABLE clientes (
		id_cliente int(11) NOT NULL AUTO_INCREMENT,
		id_sirius_cliente int(11) DEFAULT NULL,
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
		exclusivo_cliente int(11) DEFAULT '0',
		id_vendedor_cliente int(11) DEFAULT '0',
		id_vendedor_sirius_cliente int(11) DEFAULT '0',
		id_lista_preco_cliente int(11) DEFAULT '0',
		id_condicao_pagamento_cliente int(11) DEFAULT NULL,
		contato_cliente varchar(60) DEFAULT NULL,
		nm_contato_cliente varchar(60) DEFAULT NULL,
		id_condicao_pagamento_sirius_cliente int(11) DEFAULT NULL,
		PRIMARY KEY (id_cliente),
		UNIQUE KEY id_sirius_cliente_UNIQUE (id_sirius_cliente),
		KEY fk_cliente_condicao_pagamento_idx (id_condicao_pagamento_cliente),
		CONSTRAINT fk_cliente_condicao_pagamento_idx FOREIGN KEY (id_condicao_pagamento_cliente) REFERENCES condicoes_pagamento (id_cp)
		) ENGINE=InnoDB 20 DEFAULT CHARSET=latin1;
		/*!40101 SET character_set_client = @saved_cs_client */;`;
		await queryAsync(clientes, connectionBanquinho);

		const enderecos = `
		DROP TABLE IF EXISTS enderecos;
		/*!40101 SET @saved_cs_client     = @@character_set_client */;
		/*!50503 SET character_set_client = utf8mb4 */;
		CREATE TABLE enderecos (
		  id_endereco int(11) NOT NULL AUTO_INCREMENT,
		  cep_endereco varchar(8) NOT NULL,
		  logradouro_endereco varchar(60) NOT NULL,
		  numero_endereco varchar(8) NOT NULL,
		  complemento_endereco varchar(60) NOT NULL,
		  bairro_endereco varchar(60) NOT NULL,
		  cidade_endereco varchar(60) NOT NULL,
		  cod_mun_endereco varchar(7) NOT NULL,
		  cod_uf_endereco varchar(2) NOT NULL,
		  uf_endereco varchar(2) NOT NULL,
		  id_cliente_endereco int(11) NOT NULL,
		  tipo_endereco_endereco varchar(1) NOT NULL,
		  status_endereco char(1) DEFAULT 'A',
		  tipo_logradouro_endereco varchar(45) NOT NULL,
		  PRIMARY KEY (id_endereco),
		  KEY fk_enderecos_clientes_idx (id_cliente_endereco),
		  CONSTRAINT fk_enderecos_clientes_idx FOREIGN KEY (id_cliente_endereco) REFERENCES clientes (id_cliente)
		) ENGINE=InnoDB DEFAULT CHARSET=latin1;
		/*!40101 SET character_set_client = @saved_cs_client */;
		`;
		await queryAsync(enderecos, connectionBanquinho);

		const contatos = `
		DROP TABLE IF EXISTS contatos;
		/*!40101 SET @saved_cs_client     = @@character_set_client */;
		/*!50503 SET character_set_client = utf8mb4 */;
		CREATE TABLE contatos (
		  id_contato int(11) NOT NULL AUTO_INCREMENT,
		  nm_contato varchar(60) NOT NULL,
		  tipo_contato varchar(1) NOT NULL,
		  id_cliente_contato int(11) NOT NULL,
		  PRIMARY KEY (id_contato),
		  KEY fk_contato_clientes_idx (id_cliente_contato),
		  CONSTRAINT fk_contato_clientes_idx FOREIGN KEY (id_cliente_contato) REFERENCES clientes (id_cliente)
		) ENGINE=InnoDB DEFAULT CHARSET=latin1;
		/*!40101 SET character_set_client = @saved_cs_client */;
		 `;
		await queryAsync(contatos, connectionBanquinho);


		const fornecedores = `
		DROP TABLE IF EXISTS fornecedores;
		/*!40101 SET @saved_cs_client     = @@character_set_client */;
		/*!50503 SET character_set_client = utf8mb4 */;
		CREATE TABLE fornecedores (
		  id_forn int(11) NOT NULL AUTO_INCREMENT,
		  fantasia_forn varchar(80) DEFAULT NULL,
		  razao_social_forn varchar(80) NOT NULL,
		  status_forn char(1) DEFAULT NULL,
		  cpf_cnpj_forn varchar(14) DEFAULT NULL,
		  tipo_forn char(1) DEFAULT NULL,
		  insc_estadual_forn varchar(80) DEFAULT NULL,
		  cep_forn varchar(80) DEFAULT NULL,
		  logradouro_forn varchar(80) DEFAULT NULL,
		  numero_forn int(11) DEFAULT NULL,
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
		) ENGINE=InnoDB DEFAULT CHARSET=latin1;
		/*!40101 SET character_set_client = @saved_cs_client */;

			); `;
		await queryAsync(fornecedores, connectionBanquinho);

		const grupoUsuarios = `
		DROP TABLE IF EXISTS grupos_usuarios;
		/*!40101 SET @saved_cs_client     = @@character_set_client */;
		/*!50503 SET character_set_client = utf8mb4 */;
		CREATE TABLE grupos_usuarios (
		id_gu int(11) NOT NULL AUTO_INCREMENT,
		nm_gu varchar(100) NOT NULL,
		pg_inicial_gu varchar(45) NOT NULL DEFAULT 'pedido-venda',
		PRIMARY KEY (id_gu),
		UNIQUE KEY nm_gu_UNIQUE (nm_gu)
		) ENGINE=InnoDB DEFAULT CHARSET=latin1;
		/*!40101 SET character_set_client = @saved_cs_client */;
		`;
		await queryAsync(grupoUsuarios, connectionBanquinho);

		const vendedoresUsuarios = `
		DROP TABLE IF EXISTS vendedores_usuarios;
		/*!40101 SET @saved_cs_client     = @@character_set_client */;
		/*!50503 SET character_set_client = utf8mb4 */;
		CREATE TABLE vendedores_usuarios (
		  id_vu int(11) NOT NULL AUTO_INCREMENT,
		  id_usuario_vu int(11) DEFAULT NULL,
		  id_vendedor_vu int(11) DEFAULT NULL,
		  id_sirius_vendedor_vu int(11) DEFAULT NULL,
		  PRIMARY KEY (id_vu),
		  UNIQUE KEY id_usuario_vu_UNIQUE (id_usuario_vu),
		  UNIQUE KEY id_sirius_vendedor_vu_UNIQUE (id_sirius_vendedor_vu),
		  KEY fk_vu_vendedores_idx (id_vendedor_vu),
		  CONSTRAINT fk_vu_vendedores_idx FOREIGN KEY (id_vendedor_vu) REFERENCES vendedores (id_vendedor)
		) ENGINE=InnoDB DEFAULT CHARSET=latin1;
		/*!40101 SET character_set_client = @saved_cs_client */;
		`;
		await queryAsync(vendedoresUsuarios, connectionBanquinho);




		const usuariosGrupoUsuarios = `
		DROP TABLE IF EXISTS usuarios_grupos_usuarios;
		/*!40101 SET @saved_cs_client     = @@character_set_client */;
		/*!50503 SET character_set_client = utf8mb4 */;
		CREATE TABLE usuarios_grupos_usuarios (
		  id_ugu int(11) NOT NULL AUTO_INCREMENT,
		  id_usuario_ugu int(11) NOT NULL,
		  id_grupos_usuarios_ugu int(11) NOT NULL,
		  PRIMARY KEY (id_ugu),
		  UNIQUE KEY id_usuario_ugu_UNIQUE (id_usuario_ugu),
		  KEY fk_ugu_grupos_usuarios_idx (id_grupos_usuarios_ugu),
		  CONSTRAINT fk_ugu_grupos_usuarios_idx FOREIGN KEY (id_grupos_usuarios_ugu) REFERENCES grupos_usuarios (id_gu)
		) ENGINE=InnoDB DEFAULT CHARSET=latin1;
		/*!40101 SET character_set_client = @saved_cs_client */;
		`;
		await queryAsync(usuariosGrupoUsuarios, connectionBanquinho);



		const permissoes = `
		DROP TABLE IF EXISTS permissoes;
		/*!40101 SET @saved_cs_client     = @@character_set_client */;
		/*!50503 SET character_set_client = utf8mb4 */;
		CREATE TABLE permissoes (
		  id_permissao int(11) NOT NULL AUTO_INCREMENT,
		  id_grupo_usuarios_permissao int(11) NOT NULL,
		  nm_permissao varchar(45) NOT NULL,
		  modulo_permissao varchar(45) NOT NULL,
		  criar_permissao int(11) NOT NULL DEFAULT '0',
		  ler_permissao int(11) NOT NULL DEFAULT '0',
		  atualizar_permissao int(11) NOT NULL DEFAULT '0',
		  deletar_permissao int(11) NOT NULL DEFAULT '0',
		  PRIMARY KEY (id_permissao),
		  KEY fk_permissoes_grupos_usuarios_idx (id_grupo_usuarios_permissao),
		  CONSTRAINT fk_permissoes_grupos_usuarios_idx FOREIGN KEY (id_grupo_usuarios_permissao) REFERENCES grupos_usuarios (id_gu)
		) ENGINE=InnoDB DEFAULT CHARSET=latin1;
		/*!40101 SET character_set_client = @saved_cs_client */;
		`;
		await queryAsync(permissoes, connectionBanquinho);



		const parametros = `
		DROP TABLE IF EXISTS permissoes;
		/*!40101 SET @saved_cs_client     = @@character_set_client */;
		/*!50503 SET character_set_client = utf8mb4 */;
		CREATE TABLE permissoes (
		  id_permissao int(11) NOT NULL AUTO_INCREMENT,
		  id_grupo_usuarios_permissao int(11) NOT NULL,
		  nm_permissao varchar(45) NOT NULL,
		  modulo_permissao varchar(45) NOT NULL,
		  criar_permissao int(11) NOT NULL DEFAULT '0',
		  ler_permissao int(11) NOT NULL DEFAULT '0',
		  atualizar_permissao int(11) NOT NULL DEFAULT '0',
		  deletar_permissao int(11) NOT NULL DEFAULT '0',
		  PRIMARY KEY (id_permissao),
		  KEY fk_permissoes_grupos_usuarios_idx (id_grupo_usuarios_permissao),
		  CONSTRAINT fk_permissoes_grupos_usuarios_idx FOREIGN KEY (id_grupo_usuarios_permissao) REFERENCES grupos_usuarios (id_gu)
		) ENGINE=InnoDB DEFAULT CHARSET=latin1;
		/*!40101 SET character_set_client = @saved_cs_client */;
		 `;
		await queryAsync(parametros, connectionBanquinho);

		////////////TRANSPORTADORES///////////////////

		const transportadores = `
		DROP TABLE IF EXISTS transportadores;
		/*!40101 SET @saved_cs_client     = @@character_set_client */;
		/*!50503 SET character_set_client = utf8mb4 */;
		CREATE TABLE transportadores (
		  id_transportador int(11) NOT NULL AUTO_INCREMENT,
		  id_sirius_transportador int(11) NOT NULL,
		  nm_transportador varchar(120) NOT NULL,
		  status_transportador varchar(1) NOT NULL DEFAULT 'A',
		  PRIMARY KEY (id_transportador),
		  UNIQUE KEY id_sirius_transportador_UNIQUE (id_sirius_transportador)
		) ENGINE=InnoDB DEFAULT CHARSET=latin1;
		/*!40101 SET character_set_client = @saved_cs_client */;

			`;
		await queryAsync(transportadores, connectionBanquinho);

		////////////MODALIDADE DE FRETE///////////////////

		const modalidade_frete = `
		DROP TABLE IF EXISTS modalidade_frete;
		/*!40101 SET @saved_cs_client     = @@character_set_client */;
		/*!50503 SET character_set_client = utf8mb4 */;
		CREATE TABLE modalidade_frete (
		  id_mf int(11) NOT NULL AUTO_INCREMENT,
		  nm_mf varchar(141) NOT NULL,
		  valor_mf int(11) NOT NULL,
		  PRIMARY KEY (id_mf),
		  UNIQUE KEY valor_mf_UNIQUE (valor_mf)
		) ENGINE=InnoDB DEFAULT CHARSET=latin1;
		/*!40101 SET character_set_client = @saved_cs_client */;


			INSERT INTO modalidade_frete VALUES
			(1, 'Contratação do Frete Por Conta do Remetente', 0),
			(2, 'Contratação do Frete Por Conta do Destinatário', 1),
			(3, 'Contratação do Frete Por Conta do Terceiros', 2),
			(4, 'Transporte Próprio por conta do Remetente', 3),
			(5, 'Transporte Próprio por conta do Destinatário', 4),
			(6, 'Sem Ocorrência de Transporte', 9);
			`;
		await queryAsync(modalidade_frete, connectionBanquinho);

		////////////IMAGENS//////////////////////////////

		const imagens = `
		DROP TABLE IF EXISTS imagens;
		/*!40101 SET @saved_cs_client     = @@character_set_client */;
		/*!50503 SET character_set_client = utf8mb4 */;
		CREATE TABLE imagens (
		  id_imagem int(11) NOT NULL AUTO_INCREMENT,
		  imagem longblob,
		  desc_imagem varchar(256) DEFAULT NULL,
		  PRIMARY KEY (id_imagem)
		) ENGINE=InnoDB DEFAULT CHARSET=latin1;
		/*!40101 SET character_set_client = @saved_cs_client */;
			`;
		await queryAsync(imagens, connectionBanquinho);

		////////////RESTAURANTES/////////////////////////

		const restaurantes = `
		DROP TABLE IF EXISTS restaurantes;
		/*!40101 SET @saved_cs_client     = @@character_set_client */;
		/*!50503 SET character_set_client = utf8mb4 */;
		CREATE TABLE restaurantes (
		  id_restaurante int(11) NOT NULL AUTO_INCREMENT,
		  id_empresa_restaurante int(11) NOT NULL,
		  id_imagem_restaurante int(11) DEFAULT NULL,
		  nm_restaurante varchar(149) DEFAULT NULL,
		  PRIMARY KEY (id_restaurante),
		  KEY fk_restaurante_imagens_idx (id_imagem_restaurante),
		  CONSTRAINT fk_restaurante_imagens_idx FOREIGN KEY (id_imagem_restaurante) REFERENCES imagens (id_imagem)
		) ENGINE=InnoDB DEFAULT CHARSET=latin1;
		/*!40101 SET character_set_client = @saved_cs_client */;
			`;
		await queryAsync(restaurantes, connectionBanquinho);

		////////////FIRST PAGE IMAGES////////////////////////

		const first_page_images = `
		DROP TABLE IF EXISTS first_page_images;
		/*!40101 SET @saved_cs_client     = @@character_set_client */;
		/*!50503 SET character_set_client = utf8mb4 */;
		CREATE TABLE first_page_images (
		  id_fpi int(11) NOT NULL AUTO_INCREMENT,
		  id_restaurante_fpi int(11) NOT NULL,
		  id_imagem_fpi int(11) DEFAULT NULL,
		  PRIMARY KEY (id_fpi),
		  KEY fk_fpi_restaurantes_idx (id_restaurante_fpi),
		  KEY fk_fpi_imagens_idx (id_imagem_fpi),
		  CONSTRAINT fk_fpi_imagens_idx FOREIGN KEY (id_imagem_fpi) REFERENCES imagens (id_imagem),
		  CONSTRAINT fk_fpi_restaurantes_idx FOREIGN KEY (id_restaurante_fpi) REFERENCES restaurantes (id_restaurante)
		) ENGINE=InnoDB DEFAULT CHARSET=latin1;
		/*!40101 SET character_set_client = @saved_cs_client */;

			`;
		await queryAsync(first_page_images, connectionBanquinho);

		////////////CAROUSEL IMAGES///////////////////////////

		const carousel_images = `
		DROP TABLE IF EXISTS carousel_images;
		/*!40101 SET @saved_cs_client     = @@character_set_client */;
		/*!50503 SET character_set_client = utf8mb4 */;
		CREATE TABLE carousel_images (
		  id_ci int(11) NOT NULL AUTO_INCREMENT,
		  id_restaurante_ci int(11) NOT NULL,
		  id_imagem_ci int(11) DEFAULT NULL,
		  ordem_number_ci int(11) NOT NULL,
		  PRIMARY KEY (id_ci),
		  KEY fk_ci_restaurantes_idx (id_restaurante_ci),
		  KEY fk_ci_imagens_idx (id_imagem_ci),
		  CONSTRAINT fk_ci_imagens_idx FOREIGN KEY (id_imagem_ci) REFERENCES imagens (id_imagem),
		  CONSTRAINT fk_ci_restaurantes_idx FOREIGN KEY (id_restaurante_ci) REFERENCES restaurantes (id_restaurante)
		) ENGINE=InnoDB DEFAULT CHARSET=latin1;
		/*!40101 SET character_set_client = @saved_cs_client */;

			`;
		await queryAsync(carousel_images, connectionBanquinho);

		////////////MENUS///////////////////////////////////

		const menus = `
		DROP TABLE IF EXISTS menus;
		/*!40101 SET @saved_cs_client     = @@character_set_client */;
		/*!50503 SET character_set_client = utf8mb4 */;
		CREATE TABLE menus (
		  id_menu int(11) NOT NULL AUTO_INCREMENT,
		  id_restaurante_menu int(11) NOT NULL,
		  id_imagem_menu int(11) DEFAULT NULL,
		  titulo_menu varchar(200) NOT NULL,
		  texto_menu varchar(200) DEFAULT NULL,
		  PRIMARY KEY (id_menu),
		  KEY fk_menu_restaurantes_idx (id_restaurante_menu),
		  KEY fk_menu_imagens_idx (id_imagem_menu),
		  CONSTRAINT fk_menu_imagens_idx FOREIGN KEY (id_imagem_menu) REFERENCES imagens (id_imagem),
		  CONSTRAINT fk_menu_restaurantes_idx FOREIGN KEY (id_restaurante_menu) REFERENCES restaurantes (id_restaurante)
		) ENGINE=InnoDB DEFAULT CHARSET=latin1;
		/*!40101 SET character_set_client = @saved_cs_client */;

			`;
		await queryAsync(menus, connectionBanquinho);

		////////////SUBMENUS/////////////////////////////////

		const submenus = `
		DROP TABLE IF EXISTS submenus;
		/*!40101 SET @saved_cs_client     = @@character_set_client */;
		/*!50503 SET character_set_client = utf8mb4 */;
		CREATE TABLE submenus (
		  id_submenu int(11) NOT NULL AUTO_INCREMENT,
		  id_menu_submenu int(11) NOT NULL,
		  titulo_submenu varchar(200) NOT NULL,
		  texto_submenu varchar(200) DEFAULT NULL,
		  PRIMARY KEY (id_submenu),
		  KEY fk_submenus_menus_idx (id_menu_submenu),
		  CONSTRAINT fk_submenu_menus_idx FOREIGN KEY (id_menu_submenu) REFERENCES menus (id_menu)
		) ENGINE=InnoDB DEFAULT CHARSET=latin1;
		/*!40101 SET character_set_client = @saved_cs_client */;

			`;
		await queryAsync(submenus, connectionBanquinho);

		////////////PRODUTOS/////////////////////////////////

		const produtos =`
		DROP TABLE IF EXISTS produtos;
		/*!40101 SET @saved_cs_client     = @@character_set_client */;
		/*!50503 SET character_set_client = utf8mb4 */;
		CREATE TABLE produtos (
		  id_prod int(11) NOT NULL AUTO_INCREMENT,
		  id_sirius_prod int(11) DEFAULT NULL,
		  cod_prod varchar(60) DEFAULT NULL,
		  descricao_prod varchar(120) NOT NULL,
		  cod_ean_prod varchar(14) DEFAULT NULL,
		  ncm_prod varchar(8) DEFAULT NULL,
		  cfop_prod varchar(4) DEFAULT NULL,
		  un_com_prod varchar(6) DEFAULT NULL,
		  qtd_com_prod decimal(15,3) DEFAULT NULL,
		  vlr_un_com_prod decimal(20,10) DEFAULT NULL,
		  vlr_prod decimal(20,10) DEFAULT NULL,
		  cod_ean_trib_prod varchar(14) DEFAULT NULL,
		  un_trib_prod varchar(6) DEFAULT NULL,
		  qtd_trib_prod decimal(15,3) DEFAULT NULL,
		  vlr_un_trib_prod decimal(20,10) DEFAULT NULL,
		  saldo_prod decimal(15,3) DEFAULT NULL,
		  status_prod varchar(1) NOT NULL,
		  texto_prod varchar(200) DEFAULT NULL,
		  novo_prod tinyint(1) DEFAULT '0',
		  acucar_prod tinyint(1) DEFAULT '0',
		  lactose_prod tinyint(1) DEFAULT '0',
		  gluten_prod tinyint(1) DEFAULT '0',
		  vegetariano_prod tinyint(1) DEFAULT '0',
		  vegano_prod tinyint(1) DEFAULT '0',
		  id_imagem int(11) DEFAULT NULL,
		  id_submenu int(11) DEFAULT NULL,
		  PRIMARY KEY (id_prod),
		  UNIQUE KEY id_sirius_prod_UNIQUE (id_sirius_prod),
		  KEY produtos_id_submenu_fkey (id_submenu),
		  KEY produtos_id_imagem_fkey (id_imagem),
		  CONSTRAINT produtos_id_imagem_fkey FOREIGN KEY (id_imagem) REFERENCES imagens (id_imagem) ON DELETE SET NULL ON UPDATE CASCADE,
		  CONSTRAINT produtos_id_submenu_fkey FOREIGN KEY (id_submenu) REFERENCES submenus (id_submenu) ON DELETE SET NULL ON UPDATE CASCADE
		) ENGINE=InnoDB DEFAULT CHARSET=latin1;
		/*!40101 SET character_set_client = @saved_cs_client */;
		`
			;
		await queryAsync(produtos, connectionBanquinho);

		////////////EXTRAS///////////////////////////////////

		const extras = `
		DROP TABLE IF EXISTS extras;
		/*!40101 SET @saved_cs_client     = @@character_set_client */;
		/*!50503 SET character_set_client = utf8mb4 */;
		CREATE TABLE extras (
		  id_extra int(11) NOT NULL AUTO_INCREMENT,
		  titulo_extra varchar(200) NOT NULL,
		  texto_extra varchar(200) DEFAULT NULL,
		  preco_extra decimal(20,10) NOT NULL,
		  PRIMARY KEY (id_extra)
		) ENGINE=InnoDB DEFAULT CHARSET=latin1;
		/*!40101 SET character_set_client = @saved_cs_client */;

			`;
		await queryAsync(extras, connectionBanquinho);

		////////////PRODUTOS_EXTRAS///////////////////////////

		const produtos_extras = `
		DROP TABLE IF EXISTS produtos_extras;
		/*!40101 SET @saved_cs_client     = @@character_set_client */;
		/*!50503 SET character_set_client = utf8mb4 */;
		CREATE TABLE produtos_extras (
		  id_produto_pe int(11) NOT NULL,
		  id_extra_pe int(11) NOT NULL,
		  PRIMARY KEY (id_produto_pe,id_extra_pe),
		  KEY fk_pe_produtos_idx (id_produto_pe),
		  KEY fk_pe_extras_idx (id_extra_pe),
		  CONSTRAINT fk_pe_extras_idx FOREIGN KEY (id_extra_pe) REFERENCES extras (id_extra),
		  CONSTRAINT fk_pe_produtos_idx FOREIGN KEY (id_produto_pe) REFERENCES produtos (id_prod)
		) ENGINE=InnoDB DEFAULT CHARSET=latin1;
		/*!40101 SET character_set_client = @saved_cs_client */;

			`;
		await queryAsync(produtos_extras, connectionBanquinho);

		////////////LISTAS DE PREÇOS PRODUTOS/////////////////

		const listas_precos_produtos = `
		DROP TABLE IF EXISTS listas_precos_produtos;
		/*!40101 SET @saved_cs_client     = @@character_set_client */;
		/*!50503 SET character_set_client = utf8mb4 */;
		CREATE TABLE listas_precos_produtos (
		  id_lpp int(11) NOT NULL AUTO_INCREMENT,
		  id_sirius_lpp int(11) DEFAULT NULL,
		  id_lista_lpp int(11) DEFAULT '0',
		  id_produto_lpp int(11) DEFAULT '0',
		  valor_lpp decimal(15,2) DEFAULT '0.00',
		  id_produto_sirius_lpp int(11) DEFAULT NULL,
		  PRIMARY KEY (id_lpp),
		  UNIQUE KEY id_sirius_lpp_UNIQUE (id_sirius_lpp),
		  KEY fk_lpp_listas_precos_idx (id_lista_lpp),
		  KEY fk_lpp_produtos_idx (id_produto_lpp),
		  CONSTRAINT fk_lpp_listas_precos_idx FOREIGN KEY (id_lista_lpp) REFERENCES listas_precos (id_lp),
		  CONSTRAINT fk_lpp_produtos_idx FOREIGN KEY (id_produto_lpp) REFERENCES produtos (id_prod)
		) ENGINE=InnoDB DEFAULT CHARSET=latin1;
		/*!40101 SET character_set_client = @saved_cs_client */;

			`;
		await queryAsync(listas_precos_produtos, connectionBanquinho);

		////////////ATIVIDADES GRUPOS/////////////////////////

		const atividades_grupos = `
		CREATE TABLE atividades_grupos (
			id_ag int NOT NULL AUTO_INCREMENT,
			id_grupos_usuarios_ag int NOT NULL,
			id_atividade_ag int NOT NULL,
			nm_atividade_ag varchar(151) DEFAULT NULL,
			valor_ag int DEFAULT '0',
			descricao_ag varchar(60) DEFAULT NULL,
			PRIMARY KEY (id_ag),
			KEY fk_ag_grupos_usuarios_idx (id_grupos_usuarios_ag),
			CONSTRAINT fk_ag_grupos_usuarios_idx FOREIGN KEY (id_grupos_usuarios_ag) REFERENCES grupos_usuarios (id_gu)
		  );
			`;
		await queryAsync(atividades_grupos, connectionBanquinho);

		////////////PEDIDOS VENDA/////////////////////////////

		const pedidos_venda = `
		DROP TABLE IF EXISTS pedidos_venda;
		/*!40101 SET @saved_cs_client     = @@character_set_client */;
		/*!50503 SET character_set_client = utf8mb4 */;
		CREATE TABLE pedidos_venda (
		id_pv int(11) NOT NULL AUTO_INCREMENT,
		numero_pv int(11) DEFAULT NULL,
		id_vendedor_pv int(11) DEFAULT NULL,
		id_cliente_pv int(11) DEFAULT NULL,
		id_usuario_pv int(11) DEFAULT NULL,
		desconto_pv decimal(20,10) DEFAULT NULL,
		valor_bruto_pv decimal(20,10) NOT NULL,
		valor_liquido_pv decimal(20,10) DEFAULT NULL,
		status_pv varchar(1) NOT NULL,
		observacoes_pv varchar(80) DEFAULT NULL,
		data_criacao_pv datetime NOT NULL,
		cliente_contato_pv varchar(45) DEFAULT NULL,
		data_realizacao_pv datetime DEFAULT NULL,
		data_sincronizacao_pv datetime DEFAULT NULL,
		id_condicao_pagamento_pv int(11) DEFAULT NULL,
		entrega_cep_pv varchar(8) DEFAULT NULL,
		entrega_logradouro_pv varchar(60) DEFAULT NULL,
		entrega_numero_pv varchar(8) DEFAULT NULL,
		entrega_complemento_pv varchar(60) DEFAULT NULL,
		entrega_bairro_pv varchar(60) DEFAULT NULL,
		entrega_cidade_pv varchar(60) DEFAULT NULL,
		entrega_uf_pv varchar(2) DEFAULT NULL,
		id_transportadores_pv int(11) DEFAULT NULL,
		id_modalidade_frete_pv int(11) DEFAULT NULL,
		id_cliente_escolheu_pv varchar(40) DEFAULT NULL,
		pagamento_pv decimal(20,10) DEFAULT NULL,
		troco_pv decimal(20,10) DEFAULT NULL,
		PRIMARY KEY (id_pv),
		KEY fk_pv_vendedores_idx (id_vendedor_pv),
		KEY fk_pv_clientes_idx (id_cliente_pv),
		KEY fk_pv_condicoes_pagamento_idx (id_condicao_pagamento_pv),
		KEY fk_pv_transportadores_idx (id_transportadores_pv),
		KEY fk_pv_modalidade_frete_idx (id_modalidade_frete_pv),
		CONSTRAINT fk_pv_clientes_idx FOREIGN KEY (id_cliente_pv) REFERENCES clientes (id_cliente),
		CONSTRAINT fk_pv_condicoes_pagamento_idx FOREIGN KEY (id_condicao_pagamento_pv) REFERENCES condicoes_pagamento (id_cp),
		CONSTRAINT fk_pv_modalidade_frete_idx FOREIGN KEY (id_modalidade_frete_pv) REFERENCES modalidade_frete (id_mf),
		CONSTRAINT fk_pv_transportadores_idx FOREIGN KEY (id_transportadores_pv) REFERENCES transportadores (id_transportador),
		CONSTRAINT fk_pv_vendedores_idx FOREIGN KEY (id_vendedor_pv) REFERENCES vendedores (id_vendedor)
		) ENGINE=InnoDB DEFAULT CHARSET=latin1;
		/*!40101 SET character_set_client = @saved_cs_client */;
		`;
		await queryAsync(pedidos_venda, connectionBanquinho);

		////////////PEDIDOS VENDA ITENS////////////////////////

		const pedidos_venda_itens = `
			DROP TABLE IF EXISTS pedidos_venda_itens;
			/*!40101 SET @saved_cs_client     = @@character_set_client */;
			/*!50503 SET character_set_client = utf8mb4 */;
			CREATE TABLE pedidos_venda_itens (
			id_pvi int(11) NOT NULL AUTO_INCREMENT,
			id_pedido_pvi int(11) DEFAULT NULL,
			id_produto_pvi int(11) DEFAULT NULL,
			id_produto_sirius_pvi int(11) DEFAULT NULL,
			prod_descricao_pvi varchar(120) DEFAULT NULL,
			prod_unidade_pvi varchar(6) DEFAULT NULL,
			prod_quantidade_pvi decimal(15,3) NOT NULL,
			prod_valor_unitario_pvi decimal(20,10) NOT NULL,
			prod_ean_pvi varchar(14) DEFAULT NULL,
			prod_codigo_pvi varchar(60) DEFAULT NULL,
			valor_total_pvi decimal(20,10) DEFAULT NULL,
			id_lista_preco_pvi int(11) DEFAULT NULL,
			PRIMARY KEY (id_pvi),
			KEY fk_pvi_pedido_idx (id_pedido_pvi),
			KEY fk_pvi_produto_idx (id_produto_pvi),
			KEY fk_pvi_lista_preco_idx (id_lista_preco_pvi),
			CONSTRAINT fk_pvi_lista_preco_idx FOREIGN KEY (id_lista_preco_pvi) REFERENCES listas_precos (id_lp),
			CONSTRAINT fk_pvi_pedido_idx FOREIGN KEY (id_pedido_pvi) REFERENCES pedidos_venda (id_pv),
			CONSTRAINT fk_pvi_produto_idx FOREIGN KEY (id_produto_pvi) REFERENCES produtos (id_prod)
			) ENGINE=InnoDB DEFAULT CHARSET=latin1;
			/*!40101 SET character_set_client = @saved_cs_client */;
			/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
			/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
			/*!50003 SET @saved_col_connection = @@collation_connection */ ;
			/*!50003 SET character_set_client  = utf8 */ ;
			/*!50003 SET character_set_results = utf8 */ ;
			/*!50003 SET collation_connection  = utf8_general_ci */ ;
			/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
			/*!50003 SET sql_mode              = 'IGNORE_SPACE,ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
			DELIMITER ;;
			/*!50003 CREATE*/ /*!50017 DEFINER=root@localhost*/ /*!50003 TRIGGER atualiza_valor_bruto
			AFTER INSERT ON pedidos_venda_itens
			FOR EACH ROW
			BEGIN
			UPDATE pedidos_venda
			SET valor_bruto_pv = valor_bruto_pv + NEW.valor_total_pvi
			WHERE id_pv = NEW.id_pedido_pvi;
			END */;;
			DELIMITER ;
			/*!50003 SET sql_mode              = @saved_sql_mode */ ;
			/*!50003 SET character_set_client  = @saved_cs_client */ ;
			/*!50003 SET character_set_results = @saved_cs_results */ ;
			/*!50003 SET collation_connection  = @saved_col_connection */ ;
			`;
		await queryAsync(pedidos_venda_itens, connectionBanquinho);

		////////////PEDIDOS VENDA PAGAMENTOS////////////////////

		const pedidos_venda_pagamentos = `
		DROP TABLE IF EXISTS pedidos_venda_pagamentos;
		/*!40101 SET @saved_cs_client     = @@character_set_client */;
		/*!50503 SET character_set_client = utf8mb4 */;
		CREATE TABLE pedidos_venda_pagamentos (
		id_pvp int(11) NOT NULL AUTO_INCREMENT,
		id_pedido_pvp int(11) DEFAULT NULL,
		forma_pagamento_pvp varchar(2) NOT NULL,
		valor_pvp decimal(20,10) NOT NULL,
		data_criacao_pvp datetime NOT NULL,
		data_vencimento_pvp datetime NOT NULL,
		PRIMARY KEY (id_pvp),
		KEY fk_pvp_pedido_idx (id_pedido_pvp),
		CONSTRAINT fk_pvp_pedido_idx FOREIGN KEY (id_pedido_pvp) REFERENCES pedidos_venda (id_pv)
		) ENGINE=InnoDB DEFAULT CHARSET=latin1;
		/*!40101 SET character_set_client = @saved_cs_client */;
		`;
		await queryAsync(pedidos_venda_pagamentos, connectionBanquinho);

		////////////PRODUTOS MOVIMENTACOES//////////////////////

		const produtos_movimentacoes = `
		DROP TABLE IF EXISTS produtos_movimentacoes;
		/*!40101 SET @saved_cs_client     = @@character_set_client */;
		/*!50503 SET character_set_client = utf8mb4 */;
		CREATE TABLE produtos_movimentacoes (
		id_pm int(11) NOT NULL AUTO_INCREMENT,
		id_pedido_venda_pm int(11) DEFAULT NULL,
		id_produto_pm int(11) NOT NULL,
		id_usuario_pm int(11) NOT NULL,
		saldo_anterior_pm decimal(15,3) DEFAULT NULL,
		saldo_atual_pm decimal(15,3) DEFAULT NULL,
		quantidade_pm decimal(15,3) NOT NULL,
		tipo_movimentacao_pm varchar(191) NOT NULL,
		data_hora_pm datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
		numero_nota_fiscal_pm int(11) DEFAULT NULL,
		observacao_pm varchar(191) DEFAULT NULL,
		PRIMARY KEY (id_pm),
		KEY fk_pm_pedido_venda_idx (id_pedido_venda_pm),
		KEY fk_pm_produtos_idx (id_produto_pm),
		CONSTRAINT fk_pm_pedido_venda_idx FOREIGN KEY (id_pedido_venda_pm) REFERENCES pedidos_venda (id_pv),
		CONSTRAINT fk_pm_produtos_idx FOREIGN KEY (id_produto_pm) REFERENCES produtos (id_prod)
		) ENGINE=InnoDB DEFAULT CHARSET=latin1;
		/*!40101 SET character_set_client = @saved_cs_client */;
		/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
		/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
		/*!50003 SET @saved_col_connection = @@collation_connection */ ;
		/*!50003 SET character_set_client  = utf8 */ ;
		/*!50003 SET character_set_results = utf8 */ ;
		/*!50003 SET collation_connection  = utf8_general_ci */ ;
		/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
		/*!50003 SET sql_mode              = 'IGNORE_SPACE,ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
		DELIMITER ;;
		/*!50003 CREATE*/ /*!50017 DEFINER=root@localhost*/ /*!50003 TRIGGER before_insert_produtos_movimentacoes
		BEFORE INSERT ON produtos_movimentacoes
		FOR EACH ROW
		BEGIN
		DECLARE saldo_anterior INT;
		DECLARE saldo_atual INT;

		SELECT saldo_prod INTO saldo_anterior FROM produtos WHERE id_prod = NEW.id_produto_pm;

		UPDATE produtos SET saldo_prod = saldo + NEW.quantidade_pm WHERE id_prod = NEW.id_produto_pm;

		SELECT saldo_prod INTO saldo_atual FROM produtos WHERE id_prod = NEW.id_produto_pm;

		SET NEW.saldo_anterior_pm = saldo_anterior;
		SET NEW.saldo_atual_pm = saldo_atual;
		SET NEW.data_hora_pm = NOW(3);
		END */;;
		DELIMITER ;
		/*!50003 SET sql_mode              = @saved_sql_mode */ ;
		/*!50003 SET character_set_client  = @saved_cs_client */ ;
		/*!50003 SET character_set_results = @saved_cs_results */ ;
		/*!50003 SET collation_connection  = @saved_col_connection */ ;
			`;
		await queryAsync(produtos_movimentacoes, connectionBanquinho);

		////////////CLIENTES PRODUTOS//////////////////////////

		const clientes_produtos = `
		DROP TABLE IF EXISTS clientes_produtos;
		/*!40101 SET @saved_cs_client     = @@character_set_client */;
		/*!50503 SET character_set_client = utf8mb4 */;
		CREATE TABLE clientes_produtos (
		id_clipro int(11) NOT NULL AUTO_INCREMENT,
		valor_clipro decimal(20,10) NOT NULL,
		id_cliente_clipro int(11) NOT NULL,
		id_produto_clipro int(11) NOT NULL,
		id_sirius_clipro int(11) DEFAULT NULL,
		PRIMARY KEY (id_clipro),
		KEY fk_clipro_clientes_idx (id_cliente_clipro),
		KEY fk_clipro_produtos_idx (id_produto_clipro),
		CONSTRAINT fk_clipro_clientes_idx FOREIGN KEY (id_cliente_clipro) REFERENCES clientes (id_cliente),
		CONSTRAINT fk_clipro_produtos_idx FOREIGN KEY (id_produto_clipro) REFERENCES produtos (id_prod)
		) ENGINE=InnoDB DEFAULT CHARSET=latin1;
		/*!40101 SET character_set_client = @saved_cs_client */;
		`
			;
		await queryAsync(clientes_produtos, connectionBanquinho);

		// const usuarios = `
		// 	CREATE TABLE usuarios(
		// 	id_usuario int NOT NULL AUTO_INCREMENT,
		// 	id_grupo_usuario int NOT NULL,
		// 	nome_usuario varchar(50) NOT NULL,
		// 	email_usuario varchar(100) NOT NULL,
		// 	senha_usuario varchar(100) NOT NULL,
		// 	PRIMARY KEY(id_usuario),
		// 	INDEX fk_usuarios_grupos_usuarios_idx(id_grupo_usuario ASC),
		// 	CONSTRAINT fk_usuarios_grupos_usuarios_idx
		// 	FOREIGN KEY(id_grupo_usuario)
		// 	REFERENCES grupos_usuarios(id_gu)
		// 	);
		// 	`;
		// await queryAsync(usuarios, connectionBanquinho);

		////////////TRIGGERS/////////////////////////////////////

		// const atualiza_valor_bruto_trigger = `
		// 	CREATE TRIGGER atualiza_valor_bruto
		// 	AFTER INSERT ON pedidos_venda_itens
		// 	FOR EACH ROW
		// 	BEGIN
		// 	UPDATE pedidos_venda
		// 	SET valor_bruto_pv = valor_bruto_pv + NEW.valor_total_pvi
		// 	WHERE id_pv = NEW.id_pedido_pvi;
		// 	END;
		// 	`;
		// await queryAsync(atualiza_valor_bruto_trigger, connectionBanquinho);

		// const before_insert_produtos_movimentacoes_trigger = `
		// 	CREATE TRIGGER before_insert_produtos_movimentacoes
		// 	BEFORE INSERT ON produtos_movimentacoes
		// 	FOR EACH ROW
		// 	BEGIN
		// 	DECLARE saldo_anterior INT;
		// 	DECLARE saldo_atual INT;

		// 	SELECT saldo_prod INTO saldo_anterior FROM produtos WHERE id_prod = NEW.id_produto_pm;

		// 	UPDATE produtos SET saldo_prod = saldo + NEW.quantidade_pm WHERE id_prod = NEW.id_produto_pm;

		// 	SELECT saldo_prod INTO saldo_atual FROM produtos WHERE id_prod = NEW.id_produto_pm;

		// 	SET NEW.saldo_anterior_pm = saldo_anterior;
		// 	SET NEW.saldo_atual_pm = saldo_atual;
		// 	SET NEW.data_hora_pm = NOW(3);
		// 	END;
		// 	`;
		// await queryAsync(before_insert_produtos_movimentacoes_trigger, connectionBanquinho);
		const before_insert_user_token_trigger = `
			REATE DEFINER='softclever'@'localhost' TRIGGER tgr_usuarios_tokens BEFORE INSERT ON usuarios FOR EACH ROW  BEGIN 	 SET NEW.token_usuario = UUID();  END$$
		`;
		await queryAsync(before_insert_user_token_trigger, connectionBanquinho);

		console.log("Banco de dados criado com sucesso!");
	} catch (error) {
		console.error("Erro ao criar o banco de dados:", error);
	}
}
function queryAsync(query: string, connection: mysql.Connection) {
	return new Promise((resolve, reject) => {
		connection.query(query, (err, result) => {
			if (err) {
				reject(err);
			} else {
				resolve(result);
			}
		});
	});
}
