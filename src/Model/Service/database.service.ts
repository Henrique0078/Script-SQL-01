import mysql from "mysql";
import { ErrorResponse } from "./error.service";
import { fornecedores } from '../../../prisma/databases/main/index';
export default class database_service {
	async createDatabase(nomeBanco: string) {
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
      USE ${nomeBanco};
      -- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
      --
      -- Host: 192.168.0.126    Database: b_restaurante
      -- ------------------------------------------------------
      -- Server version	5.7.43-log

      /*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
      /*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
      /*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
      /*!50503 SET NAMES utf8 */;
      /*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
      /*!40103 SET TIME_ZONE='+00:00' */;
      /*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
      /*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
      /*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
      /*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

      --
      -- Table structure for table _prisma_migrations
      --`;

			await this.queryAsync(createDatabaseSQL, connection);
			/////      /////////////////////////////////////////////////////////////////////////////////////////
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

			const certificado = `
      --
      -- Table structure for table certificado
      --

      DROP TABLE IF EXISTS certificado;
      /*!40101 SET @saved_cs_client     = @@character_set_client */;
      /*!50503 SET character_set_client = utf8mb4 */;
      CREATE TABLE certificado (
      id_certificado int(11) NOT NULL AUTO_INCREMENT,
      senha_certificado varchar(15) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
      serie_certificado varchar(30) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
      nm_certificado varchar(30) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
      path_certificado varchar(250) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
      PRIMARY KEY (id_certificado)
      ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
      /*!40101 SET character_set_client = @saved_cs_client */;
      `;

			await this.queryAsync(certificado, connectionBanquinho);

			///////////////////////////////////////////////

			const vendedores = `
      --
      -- Table structure for table vendedores
      --

      DROP TABLE IF EXISTS vendedores;
      /*!40101 SET @saved_cs_client     = @@character_set_client */;
      /*!50503 SET character_set_client = utf8mb4 */;
      CREATE TABLE vendedores (
      id_vendedor int(11) NOT NULL AUTO_INCREMENT,
      id_sirius_vendedor int(11) DEFAULT NULL,
      nm_vendedor varchar(80) COLLATE utf8mb4_unicode_ci NOT NULL,
      apelido_vendedor varchar(80) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
      status_vendedor char(1) COLLATE utf8mb4_unicode_ci NOT NULL,
      cpf_vendedor varchar(14) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
      cnpj_vendedor varchar(18) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
      insc_estadual_vendedor varchar(15) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
      rg_vendedor varchar(12) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
      telefone_vendedor varchar(21) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
      celular_vendedor varchar(20) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
      email_vendedor varchar(80) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
      fax_vendedor varchar(80) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
      pessoa_contato_vendedor varchar(80) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
      cep_vendedor varchar(10) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
      logradouro_vendedor varchar(80) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
      numero_vendedor int(11) DEFAULT NULL,
      complemento_vendedor varchar(80) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
      bairro_vendedor varchar(80) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
      regiao_vendedor varchar(80) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
      cidade_vendedor varchar(80) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
      uf_vendedor char(2) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
      departamento_vendedor varchar(80) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
      porcentagem_comissao_vendedor decimal(7,4) DEFAULT NULL,
      porcentagem_desc_max_vendedor decimal(7,4) DEFAULT NULL,
      nm_banco_vendedor varchar(80) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
      numero_banco_vendedor varchar(80) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
      agencia_vendedor varchar(80) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
      digito_agencia_vendedor varchar(80) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
      conta_vendedor varchar(80) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
      digito_conta_vendedor varchar(80) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
      observacoes_vendedor varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
      PRIMARY KEY (id_vendedor),
      UNIQUE KEY id_sirius_vendedor_UNIQUE (id_sirius_vendedor)
      ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
      /*!40101 SET character_set_client = @saved_cs_client */;
      `;

			await this.queryAsync(vendedores, connectionBanquinho);
			///////////////////////////////////////////////

			const condicoes_pagamento = `
      --
      -- Table structure for table condicoes_pagamento
      --

      DROP TABLE IF EXISTS condicoes_pagamento;
      /*!40101 SET @saved_cs_client     = @@character_set_client */;
      /*!50503 SET character_set_client = utf8mb4 */;
      CREATE TABLE condicoes_pagamento (
      id_cp int(11) NOT NULL AUTO_INCREMENT,
      id_sirius_cp int(11) DEFAULT NULL,
      descricao_cp varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
      PRIMARY KEY (id_cp),
      UNIQUE KEY id_sirius_cp_UNIQUE (id_sirius_cp)
      ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
      /*!40101 SET character_set_client = @saved_cs_client */;
      `;

			await this.queryAsync(condicoes_pagamento, connectionBanquinho);

			///////////////////////////////////////////////

			const listas_precos = `
      --
      -- Table structure for table listas_precos
      --

      DROP TABLE IF EXISTS listas_precos;
      /*!40101 SET @saved_cs_client     = @@character_set_client */;
      /*!50503 SET character_set_client = utf8mb4 */;
      CREATE TABLE listas_precos (
      id_lp int(11) NOT NULL AUTO_INCREMENT,
      descricao_lp varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
      id_sirius_lp int(11) DEFAULT NULL,
      PRIMARY KEY (id_lp),
      UNIQUE KEY id_sirius_lp_UNIQUE (id_sirius_lp)
      ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
      /*!40101 SET character_set_client = @saved_cs_client */;
      `;

			await this.queryAsync(listas_precos, connectionBanquinho);

			///////////////////////////////////////////////

			const clientes = `
      --
      -- Table structure for table clientes
      --

      DROP TABLE IF EXISTS clientes;
      /*!40101 SET @saved_cs_client     = @@character_set_client */;
      /*!50503 SET character_set_client = utf8mb4 */;
      CREATE TABLE clientes (
      id_cliente int(11) NOT NULL AUTO_INCREMENT,
      id_sirius_cliente int(11) DEFAULT NULL,
      status_cliente varchar(1) COLLATE utf8mb4_unicode_ci NOT NULL,
      created_at_cliente datetime(6) NOT NULL,
      updated_at_cliente datetime(6) NOT NULL,
      razao_social_cliente varchar(60) COLLATE utf8mb4_unicode_ci NOT NULL,
      fantasia_cliente varchar(60) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
      cpf_cliente varchar(11) COLLATE utf8mb4_unicode_ci NOT NULL,
      cnpj_cliente varchar(14) COLLATE utf8mb4_unicode_ci NOT NULL,
      id_estrangeiro_cliente varchar(20) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
      ind_ie_cliente varchar(1) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
      insc_estadual_cliente varchar(15) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
      insc_municipal_cliente varchar(15) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
      tipo_cliente char(1) COLLATE utf8mb4_unicode_ci NOT NULL,
      exclusivo_cliente int(11) DEFAULT '0',
      id_vendedor_cliente int(11) DEFAULT '0',
      id_vendedor_sirius_cliente int(11) DEFAULT '0',
      id_lista_preco_cliente int(11) DEFAULT '0',
      id_condicao_pagamento_cliente int(11) DEFAULT NULL,
      contato_cliente varchar(60) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
      nm_contato_cliente varchar(60) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
      id_condicao_pagamento_sirius_cliente int(11) DEFAULT NULL,
      PRIMARY KEY (id_cliente),
      UNIQUE KEY id_sirius_cliente_UNIQUE (id_sirius_cliente),
      KEY fk_cliente_condicao_pagamento_idx (id_condicao_pagamento_cliente),
      CONSTRAINT fk_cliente_condicao_pagamento_idx FOREIGN KEY (id_condicao_pagamento_cliente) REFERENCES condicoes_pagamento (id_cp)
      ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
      /*!40101 SET character_set_client = @saved_cs_client */;

      `;

			await this.queryAsync(clientes, connectionBanquinho);

			///////////////////////////////////////////////

			const enderecos = `
      --
      -- Table structure for table enderecos
      --

      DROP TABLE IF EXISTS enderecos;
      /*!40101 SET @saved_cs_client     = @@character_set_client */;
      /*!50503 SET character_set_client = utf8mb4 */;
      CREATE TABLE enderecos (
      id_endereco int(11) NOT NULL AUTO_INCREMENT,
      cep_endereco varchar(8) COLLATE utf8mb4_unicode_ci NOT NULL,
      logradouro_endereco varchar(60) COLLATE utf8mb4_unicode_ci NOT NULL,
      numero_endereco varchar(8) COLLATE utf8mb4_unicode_ci NOT NULL,
      complemento_endereco varchar(60) COLLATE utf8mb4_unicode_ci NOT NULL,
      bairro_endereco varchar(60) COLLATE utf8mb4_unicode_ci NOT NULL,
      cidade_endereco varchar(60) COLLATE utf8mb4_unicode_ci NOT NULL,
      cod_mun_endereco varchar(7) COLLATE utf8mb4_unicode_ci NOT NULL,
      cod_uf_endereco varchar(2) COLLATE utf8mb4_unicode_ci NOT NULL,
      uf_endereco varchar(2) COLLATE utf8mb4_unicode_ci NOT NULL,
      id_cliente_endereco int(11) NOT NULL,
      tipo_endereco_endereco varchar(1) COLLATE utf8mb4_unicode_ci NOT NULL,
      status_endereco char(1) COLLATE utf8mb4_unicode_ci DEFAULT 'A',
      tipo_logradouro_endereco varchar(45) COLLATE utf8mb4_unicode_ci NOT NULL,
      PRIMARY KEY (id_endereco),
      KEY fk_enderecos_clientes_idx (id_cliente_endereco),
      CONSTRAINT fk_enderecos_clientes_idx FOREIGN KEY (id_cliente_endereco) REFERENCES clientes (id_cliente)
      ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
      /*!40101 SET character_set_client = @saved_cs_client */;
      `;

			await this.queryAsync(enderecos, connectionBanquinho);


			///////////////////////////////////////////////

			const contatos = `
      --
      -- Table structure for table contatos
      --

      DROP TABLE IF EXISTS contatos;
      /*!40101 SET @saved_cs_client     = @@character_set_client */;
      /*!50503 SET character_set_client = utf8mb4 */;
      CREATE TABLE contatos (
      id_contato int(11) NOT NULL AUTO_INCREMENT,
      nm_contato varchar(60) COLLATE utf8mb4_unicode_ci NOT NULL,
      tipo_contato varchar(1) COLLATE utf8mb4_unicode_ci NOT NULL,
      id_cliente_contato int(11) NOT NULL,
      PRIMARY KEY (id_contato),
      KEY fk_contato_clientes_idx (id_cliente_contato),
      CONSTRAINT fk_contato_clientes_idx FOREIGN KEY (id_cliente_contato) REFERENCES clientes (id_cliente)
      ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
      /*!40101 SET character_set_client = @saved_cs_client */;
      `;

			await this.queryAsync(contatos, connectionBanquinho);

			///////////////////////////////////////////////

			const fornecedores = `
      --
      -- Table structure for table fornecedores
      --

      DROP TABLE IF EXISTS fornecedores;
      /*!40101 SET @saved_cs_client     = @@character_set_client */;
      /*!50503 SET character_set_client = utf8mb4 */;
      CREATE TABLE fornecedores (
      id_forn int(11) NOT NULL AUTO_INCREMENT,
      fantasia_forn varchar(80) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
      razao_social_forn varchar(80) COLLATE utf8mb4_unicode_ci NOT NULL,
      status_forn char(1) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
      cpf_cnpj_forn varchar(14) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
      tipo_forn char(1) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
      insc_estadual_forn varchar(80) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
      cep_forn varchar(80) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
      logradouro_forn varchar(80) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
      numero_forn int(11) DEFAULT NULL,
      complemento_forn varchar(80) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
      bairro_forn varchar(80) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
      cidade_forn varchar(80) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
      uf_forn char(2) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
      email_forn varchar(80) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
      celular_forn varchar(80) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
      telefone_forn varchar(80) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
      fax_forn varchar(80) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
      pessoa_contato_forn varchar(80) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
      observacoes_forn varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
      PRIMARY KEY (id_forn)
      ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
      /*!40101 SET character_set_client = @saved_cs_client */;
      `;

			await this.queryAsync(fornecedores, connectionBanquinho);

			///////////////////////////////////////////////

			const grupos_usuarios = `
      --
      -- Table structure for table grupos_usuarios
      --

      DROP TABLE IF EXISTS grupos_usuarios;
      /*!40101 SET @saved_cs_client     = @@character_set_client */;
      /*!50503 SET character_set_client = utf8mb4 */;
      CREATE TABLE grupos_usuarios (
      id_gu int(11) NOT NULL AUTO_INCREMENT,
      nm_gu varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
      pg_inicial_gu varchar(45) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'pedido-venda',
      PRIMARY KEY (id_gu),
      UNIQUE KEY nm_gu_UNIQUE (nm_gu)
      ) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
      /*!40101 SET character_set_client = @saved_cs_client */;

      `;

			await this.queryAsync(grupos_usuarios, connectionBanquinho);

			///////////////////////////////////////////////

			const vendedores_usuarios = `
      --
      -- Table structure for table vendedores_usuarios
      --

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
      ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
      /*!40101 SET character_set_client = @saved_cs_client */;
      `;

			await this.queryAsync(vendedores_usuarios, connectionBanquinho);

			///////////////////////////////////////////////

			const usuarios_grupos_usuarios = `
      --
      -- Table structure for table usuarios_grupos_usuarios
      --

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
      ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
      /*!40101 SET character_set_client = @saved_cs_client */;
      `;

			await this.queryAsync(usuarios_grupos_usuarios, connectionBanquinho);

			///////////////////////////////////////////////

			const permissoes = `
      --
      -- Table structure for table permissoes
      --

      DROP TABLE IF EXISTS permissoes;
      /*!40101 SET @saved_cs_client     = @@character_set_client */;
      /*!50503 SET character_set_client = utf8mb4 */;
      CREATE TABLE permissoes (
      id_permissao int(11) NOT NULL AUTO_INCREMENT,
      id_grupo_usuarios_permissao int(11) NOT NULL,
      nm_permissao varchar(45) COLLATE utf8mb4_unicode_ci NOT NULL,
      modulo_permissao varchar(45) COLLATE utf8mb4_unicode_ci NOT NULL,
      criar_permissao int(11) NOT NULL DEFAULT '0',
      ler_permissao int(11) NOT NULL DEFAULT '0',
      atualizar_permissao int(11) NOT NULL DEFAULT '0',
      deletar_permissao int(11) NOT NULL DEFAULT '0',
      PRIMARY KEY (id_permissao),
      KEY fk_permissoes_grupos_usuarios_idx (id_grupo_usuarios_permissao),
      CONSTRAINT fk_permissoes_grupos_usuarios_idx FOREIGN KEY (id_grupo_usuarios_permissao) REFERENCES grupos_usuarios (id_gu)
      ) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
      /*!40101 SET character_set_client = @saved_cs_client */;
      `;

			await this.queryAsync(permissoes, connectionBanquinho);
			///////////////////////////////////////////////

			const parametros = `
      --
      -- Table structure for table parametros
      --

      DROP TABLE IF EXISTS parametros;
      /*!40101 SET @saved_cs_client     = @@character_set_client */;
      /*!50503 SET character_set_client = utf8mb4 */;
      CREATE TABLE parametros (
      id_parametro int(11) NOT NULL AUTO_INCREMENT,
      nm_parametro varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
      valor_parametro int(11) DEFAULT NULL,
      descricao_parametro varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
      PRIMARY KEY (id_parametro)
      ) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
      /*!40101 SET character_set_client = @saved_cs_client */;
      `;

			await this.queryAsync(parametros, connectionBanquinho);
			///////////////////////////////////////////////

			const transportadores = `
      --
      -- Table structure for table transportadores
      --

      DROP TABLE IF EXISTS transportadores;
      /*!40101 SET @saved_cs_client     = @@character_set_client */;
      /*!50503 SET character_set_client = utf8mb4 */;
      CREATE TABLE transportadores (
      id_transportador int(11) NOT NULL AUTO_INCREMENT,
      id_sirius_transportador int(11) NOT NULL,
      nm_transportador varchar(120) COLLATE utf8mb4_unicode_ci NOT NULL,
      status_transportador varchar(1) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'A',
      PRIMARY KEY (id_transportador),
      UNIQUE KEY id_sirius_transportador_UNIQUE (id_sirius_transportador)
      ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
      /*!40101 SET character_set_client = @saved_cs_client */;
      `;

			await this.queryAsync(transportadores, connectionBanquinho);
			///////////////////////////////////////////////

			const modalidade_frete = `
      --
      -- Table structure for table modalidade_frete
      --

      DROP TABLE IF EXISTS modalidade_frete;
      /*!40101 SET @saved_cs_client     = @@character_set_client */;
      /*!50503 SET character_set_client = utf8mb4 */;
      CREATE TABLE modalidade_frete (
      id_mf int(11) NOT NULL AUTO_INCREMENT,
      nm_mf varchar(141) COLLATE utf8mb4_unicode_ci NOT NULL,
      valor_mf int(11) NOT NULL,
      PRIMARY KEY (id_mf),
      UNIQUE KEY valor_mf_UNIQUE (valor_mf)
      ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
      /*!40101 SET character_set_client = @saved_cs_client */;
      `;

			await this.queryAsync(modalidade_frete, connectionBanquinho);

			///////////////////////////////////////////////

			const imagens = `

      --
      -- Table structure for table imagens
      --

      DROP TABLE IF EXISTS imagens;
      /*!40101 SET @saved_cs_client     = @@character_set_client */;
      /*!50503 SET character_set_client = utf8mb4 */;
      CREATE TABLE imagens (
      id_imagem int(11) NOT NULL AUTO_INCREMENT,
      imagem longblob,
      desc_imagem varchar(256) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
      PRIMARY KEY (id_imagem)
      ) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
      /*!40101 SET character_set_client = @saved_cs_client */;
      `;

			await this.queryAsync(imagens, connectionBanquinho);

			///////////////////////////////////////////////

			const restaurantes = `

      --
      -- Table structure for table restaurantes
      --

      DROP TABLE IF EXISTS restaurantes;
      /*!40101 SET @saved_cs_client     = @@character_set_client */;
      /*!50503 SET character_set_client = utf8mb4 */;
      CREATE TABLE restaurantes (
      id_restaurante int(11) NOT NULL AUTO_INCREMENT,
      id_empresa_restaurante int(11) NOT NULL,
      id_imagem_restaurante int(11) DEFAULT NULL,
      nm_restaurante varchar(149) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
      PRIMARY KEY (id_restaurante),
      KEY fk_restaurante_imagens_idx (id_imagem_restaurante),
      CONSTRAINT fk_restaurante_imagens_idx FOREIGN KEY (id_imagem_restaurante) REFERENCES imagens (id_imagem)
      ) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
      /*!40101 SET character_set_client = @saved_cs_client */;
      `;

			await this.queryAsync(restaurantes, connectionBanquinho);

			////////////FIRST PAGE IMAGES////////////////////////

			const first_page_images = `
        CREATE TABLE first_page_images(
        id_fpi int NOT NULL AUTO_INCREMENT,
        id_restaurante_fpi int NOT NULL,
        id_imagem_fpi int NULL,
        PRIMARY KEY(id_fpi),
        INDEX fk_fpi_restaurantes_idx(id_restaurante_fpi ASC),
        CONSTRAINT fk_fpi_restaurantes_idx
        FOREIGN KEY(id_restaurante_fpi)
        REFERENCES restaurantes(id_restaurante),
        INDEX fk_fpi_imagens_idx(id_imagem_fpi ASC),
        CONSTRAINT fk_fpi_imagens_idx
        FOREIGN KEY(id_imagem_fpi)
        REFERENCES imagens(id_imagem)
        );
        `;
			await this.queryAsync(first_page_images, connectionBanquinho);

			///////////////////////////////////////////////

			const carousel_images = `
      --
      -- Table structure for table carousel_images
      --

      DROP TABLE IF EXISTS carousel_images;
      /*!40101 SET @saved_cs_client     = @@character_set_client */;
      /*!50503 SET character_set_client = utf8mb4 */;
      CREATE TABLE carousel_images (
      id_ci int(11) NOT NULL AUTO_INCREMENT,
      id_restaurante_ci int(11) NOT NULL,
      id_imagem_ci int(11) DEFAULT NULL,
      ordem_number_ci int(11) NOT NULL,
      PRIMARY KEY (id_ci),
      KEY fk_ci_imagens_idx (id_imagem_ci),
      KEY fk_ci_restaurantes_idx (id_restaurante_ci),
      CONSTRAINT fk_ci_imagens_idx FOREIGN KEY (id_imagem_ci) REFERENCES imagens (id_imagem),
      CONSTRAINT fk_ci_restaurantes_idx FOREIGN KEY (id_restaurante_ci) REFERENCES restaurantes (id_restaurante)
      ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
      /*!40101 SET character_set_client = @saved_cs_client */;
      `;

			await this.queryAsync(carousel_images, connectionBanquinho);

			///////////////////////////////////////////////

			const menus = `
      --
      -- Table structure for table menus
      --

      DROP TABLE IF EXISTS menus;
      /*!40101 SET @saved_cs_client     = @@character_set_client */;
      /*!50503 SET character_set_client = utf8mb4 */;
      CREATE TABLE menus (
      id_menu int(11) NOT NULL AUTO_INCREMENT,
      id_restaurante_menu int(11) NOT NULL,
      id_imagem_menu int(11) DEFAULT NULL,
      titulo_menu varchar(200) COLLATE utf8mb4_unicode_ci NOT NULL,
      texto_menu varchar(200) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
      PRIMARY KEY (id_menu),
      KEY fk_menu_imagens_idx (id_imagem_menu),
      KEY fk_menu_restaurantes_idx (id_restaurante_menu),
      CONSTRAINT fk_menu_imagens_idx FOREIGN KEY (id_imagem_menu) REFERENCES imagens (id_imagem),
      CONSTRAINT fk_menu_restaurantes_idx FOREIGN KEY (id_restaurante_menu) REFERENCES restaurantes (id_restaurante)
      ) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
      /*!40101 SET character_set_client = @saved_cs_client */;
      `;

			await this.queryAsync(menus, connectionBanquinho);
			///////////////////////////////////////////////

			const submenus = `
      --
      -- Table structure for table submenus
      --

      DROP TABLE IF EXISTS submenus;
      /*!40101 SET @saved_cs_client     = @@character_set_client */;
      /*!50503 SET character_set_client = utf8mb4 */;
      CREATE TABLE submenus (
      id_submenu int(11) NOT NULL AUTO_INCREMENT,
      id_menu_submenu int(11) NOT NULL,
      titulo_submenu varchar(200) COLLATE utf8mb4_unicode_ci NOT NULL,
      texto_submenu varchar(200) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
      PRIMARY KEY (id_submenu),
      KEY fk_submenus_menus_idx (id_menu_submenu),
      CONSTRAINT fk_submenu_menus_idx FOREIGN KEY (id_menu_submenu) REFERENCES menus (id_menu)
      ) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
      /*!40101 SET character_set_client = @saved_cs_client */;
      `;

			await this.queryAsync(submenus, connectionBanquinho);
			///////////////////////////////////////////////

			const produtos = `

      --
      -- Table structure for table produtos
      --

      DROP TABLE IF EXISTS produtos;
      /*!40101 SET @saved_cs_client     = @@character_set_client */;
      /*!50503 SET character_set_client = utf8mb4 */;
      CREATE TABLE produtos (
      id_prod int(11) NOT NULL AUTO_INCREMENT,
      id_sirius_prod int(11) DEFAULT NULL,
      id_submenu int(11) DEFAULT NULL,
      cod_prod varchar(60) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
      descricao_prod varchar(120) COLLATE utf8mb4_unicode_ci NOT NULL,
      cod_ean_prod varchar(14) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
      ncm_prod varchar(8) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
      cfop_prod varchar(4) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
      un_com_prod varchar(6) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
      qtd_com_prod decimal(15,3) DEFAULT NULL,
      vlr_un_com_prod decimal(20,10) DEFAULT NULL,
      vlr_prod decimal(20,10) DEFAULT NULL,
      cod_ean_trib_prod varchar(14) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
      un_trib_prod varchar(6) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
      qtd_trib_prod decimal(15,3) DEFAULT NULL,
      vlr_un_trib_prod decimal(20,10) DEFAULT NULL,
      saldo_prod decimal(15,3) DEFAULT NULL,
      status_prod varchar(1) COLLATE utf8mb4_unicode_ci NOT NULL,
      texto_prod varchar(200) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
      novo_prod tinyint(1) DEFAULT '0',
      acucar_prod tinyint(1) DEFAULT '0',
      lactose_prod tinyint(1) DEFAULT '0',
      gluten_prod tinyint(1) DEFAULT '0',
      vegetariano_prod tinyint(1) DEFAULT '0',
      vegano_prod tinyint(1) DEFAULT '0',
      id_imagem int(11) DEFAULT NULL,
      PRIMARY KEY (id_prod),
      UNIQUE KEY id_sirius_prod_UNIQUE (id_sirius_prod),
      KEY produtos_id_submenu_fkey (id_submenu),
      KEY produtos_id_imagem_fkey (id_imagem),
      CONSTRAINT produtos_id_imagem_fkey FOREIGN KEY (id_imagem) REFERENCES imagens (id_imagem) ON DELETE SET NULL ON UPDATE CASCADE,
      CONSTRAINT produtos_id_submenu_fkey FOREIGN KEY (id_submenu) REFERENCES submenus (id_submenu) ON DELETE SET NULL ON UPDATE CASCADE
      ) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
      /*!40101 SET character_set_client = @saved_cs_client */;
      `;

			await this.queryAsync(produtos, connectionBanquinho);
			///////////////////////////////////////////////

			const extras = `
      --
      -- Table structure for table extras
      --

      DROP TABLE IF EXISTS extras;
      /*!40101 SET @saved_cs_client     = @@character_set_client */;
      /*!50503 SET character_set_client = utf8mb4 */;
      CREATE TABLE extras (
      id_extra int(11) NOT NULL AUTO_INCREMENT,
      titulo_extra varchar(200) COLLATE utf8mb4_unicode_ci NOT NULL,
      texto_extra varchar(200) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
      preco_extra decimal(20,10) NOT NULL,
      PRIMARY KEY (id_extra)
      ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
      /*!40101 SET character_set_client = @saved_cs_client */;
      `;

			await this.queryAsync(extras, connectionBanquinho);
			///////////////////////////////////////////////

			const produtos_extras = `
      --
      -- Table structure for table produtos_extras
      --

      DROP TABLE IF EXISTS produtos_extras;
      /*!40101 SET @saved_cs_client     = @@character_set_client */;
      /*!50503 SET character_set_client = utf8mb4 */;
      CREATE TABLE produtos_extras (
      id_produto_pe int(11) NOT NULL,
      id_extra_pe int(11) NOT NULL,
      PRIMARY KEY (id_produto_pe,id_extra_pe),
      KEY fk_pe_extras_idx (id_extra_pe),
      KEY fk_pe_produtos_idx (id_produto_pe),
      CONSTRAINT fk_pe_extras_idx FOREIGN KEY (id_extra_pe) REFERENCES extras (id_extra),
      CONSTRAINT fk_pe_produtos_idx FOREIGN KEY (id_produto_pe) REFERENCES produtos (id_prod)
      ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
      /*!40101 SET character_set_client = @saved_cs_client */;
      `;

			await this.queryAsync(produtos_extras, connectionBanquinho);
			///////////////////////////////////////////////

			const listas_precos_produtos = `
      --
      -- Table structure for table listas_precos_produtos
      --

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
      ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
      /*!40101 SET character_set_client = @saved_cs_client */;
      `;

			await this.queryAsync(listas_precos_produtos, connectionBanquinho);

			///////////////////////////////////////////////

			const atividades_grupos = `
      DROP TABLE IF EXISTS atividades_grupos;
      CREATE TABLE atividades_grupos (
        id_ag int(11) NOT NULL AUTO_INCREMENT,
        id_grupos_usuarios_ag int(11) NOT NULL,
        id_atividade_ag int(11) NOT NULL,
        nm_atividade_ag varchar(150) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
        valor_ag int(11) DEFAULT '0',
        descricao_ag varchar(60) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
        PRIMARY KEY (id_ag),
        UNIQUE KEY nm_atividade_ag_UNIQUE (nm_atividade_ag),
        KEY fk_ag_grupos_usuarios_idx (id_grupos_usuarios_ag),
        CONSTRAINT fk_ag_grupos_usuarios_idx FOREIGN KEY (id_grupos_usuarios_ag) REFERENCES grupos_usuarios (id_gu)
      ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
      `;

			await this.queryAsync(atividades_grupos, connectionBanquinho);
			///////////////////////////////////////////////

			const forma_pagamento = `
      --
      -- Table structure for table forma_pagamento
      --

      DROP TABLE IF EXISTS forma_pagamento;
      /*!40101 SET @saved_cs_client     = @@character_set_client */;
      /*!50503 SET character_set_client = utf8mb4 */;
      CREATE TABLE forma_pagamento (
      id_fp int(11) NOT NULL AUTO_INCREMENT,
      nm_fp varchar(100) DEFAULT NULL,
      PRIMARY KEY (id_fp)
      ) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=latin1;
      /*!40101 SET character_set_client = @saved_cs_client */;


      `;

			await this.queryAsync(forma_pagamento, connectionBanquinho);

			///////////////////////////////////////////////

			const pedidos_venda = `
      CREATE TABLE pedidos_venda (
        id_pv int(11) NOT NULL AUTO_INCREMENT,
        numero_pv int(11) DEFAULT NULL,
        id_vendedor_pv int(11) DEFAULT NULL,
        id_cliente_pv int(11) DEFAULT NULL,
        id_usuario_pv int(11) DEFAULT NULL,
        desconto_pv decimal(20,10) DEFAULT NULL,
        valor_bruto_pv decimal(20,10) NOT NULL,
        valor_liquido_pv decimal(20,10) DEFAULT NULL,
        status_pv varchar(1) COLLATE utf8mb4_unicode_ci NOT NULL,
        observacoes_pv varchar(80) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
        data_criacao_pv datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
        cliente_contato_pv varchar(45) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
        data_realizacao_pv datetime DEFAULT NULL,
        data_sincronizacao_pv datetime DEFAULT NULL,
        id_forma_pagamento_pv int(11) DEFAULT NULL,
        entrega_cep_pv varchar(8) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
        entrega_logradouro_pv varchar(60) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
        entrega_numero_pv varchar(8) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
        entrega_complemento_pv varchar(60) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
        entrega_bairro_pv varchar(60) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
        entrega_cidade_pv varchar(60) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
        entrega_uf_pv varchar(2) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
        id_transportadores_pv int(11) DEFAULT NULL,
        id_modalidade_frete_pv int(11) DEFAULT NULL,
        id_cliente_escolheu_pv varchar(40) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
        pagamento_pv decimal(20,10) DEFAULT NULL,
        troco_pv decimal(20,10) DEFAULT NULL,
        PRIMARY KEY (id_pv),
        KEY fk_pv_clientes_idx (id_cliente_pv),
        KEY fk_pv_modalidade_frete_idx (id_modalidade_frete_pv),
        KEY fk_pv_transportadores_idx (id_transportadores_pv),
        KEY fk_pv_vendedores_idx (id_vendedor_pv),
        KEY fk_pv_forma_pagamento_idx_idx (id_forma_pagamento_pv),
        CONSTRAINT fk_pv_clientes_idx FOREIGN KEY (id_cliente_pv) REFERENCES clientes (id_cliente),
        CONSTRAINT fk_pv_forma_pagamento_idx FOREIGN KEY (id_forma_pagamento_pv) REFERENCES forma_pagamento (id_fp) ON DELETE NO ACTION ON UPDATE NO ACTION,
        CONSTRAINT fk_pv_modalidade_frete_idx FOREIGN KEY (id_modalidade_frete_pv) REFERENCES modalidade_frete (id_mf),
        CONSTRAINT fk_pv_transportadores_idx FOREIGN KEY (id_transportadores_pv) REFERENCES transportadores (id_transportador),
        CONSTRAINT fk_pv_vendedores_idx FOREIGN KEY (id_vendedor_pv) REFERENCES vendedores (id_vendedor)
      ) ENGINE=InnoDB AUTO_INCREMENT=49 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
      `;

			await this.queryAsync(pedidos_venda, connectionBanquinho);

			///////////////////////////////////////////////

			const pedidos_venda_itens = `
      --
      -- Table structure for table pedidos_venda_itens
      --

      DROP TABLE IF EXISTS pedidos_venda_itens;
      /*!40101 SET @saved_cs_client     = @@character_set_client */;
      /*!50503 SET character_set_client = utf8mb4 */;
      CREATE TABLE pedidos_venda_itens (
      id_pvi int(11) NOT NULL AUTO_INCREMENT,
      id_pedido_pvi int(11) DEFAULT NULL,
      id_produto_pvi int(11) DEFAULT NULL,
      id_produto_sirius_pvi int(11) DEFAULT NULL,
      prod_descricao_pvi varchar(120) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
      prod_unidade_pvi varchar(6) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
      prod_quantidade_pvi decimal(15,3) NOT NULL,
      prod_valor_unitario_pvi decimal(20,10) NOT NULL,
      prod_ean_pvi varchar(14) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
      prod_codigo_pvi varchar(60) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
      valor_total_pvi decimal(20,10) DEFAULT NULL,
      id_lista_preco_pvi int(11) DEFAULT NULL,
      PRIMARY KEY (id_pvi),
      KEY fk_pvi_lista_preco_idx (id_lista_preco_pvi),
      KEY fk_pvi_pedido_idx (id_pedido_pvi),
      KEY fk_pvi_produto_idx (id_produto_pvi),
      CONSTRAINT fk_pvi_lista_preco_idx FOREIGN KEY (id_lista_preco_pvi) REFERENCES listas_precos (id_lp),
      CONSTRAINT fk_pvi_pedido_idx FOREIGN KEY (id_pedido_pvi) REFERENCES pedidos_venda (id_pv),
      CONSTRAINT fk_pvi_produto_idx FOREIGN KEY (id_produto_pvi) REFERENCES produtos (id_prod)
      ) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
      /*!40101 SET character_set_client = @saved_cs_client */;
      `;

			await this.queryAsync(pedidos_venda_itens, connectionBanquinho);

			///////////////////////////////////////////////

			const pedidos_venda_pagamentos = `
      --
      -- Table structure for table pedidos_venda_pagamentos
      --

      DROP TABLE IF EXISTS pedidos_venda_pagamentos;
      /*!40101 SET @saved_cs_client     = @@character_set_client */;
      /*!50503 SET character_set_client = utf8mb4 */;
      CREATE TABLE pedidos_venda_pagamentos (
      id_pvp int(11) NOT NULL AUTO_INCREMENT,
      id_pedido_pvp int(11) DEFAULT NULL,
      forma_pagamento_pvp varchar(2) COLLATE utf8mb4_unicode_ci NOT NULL,
      valor_pvp decimal(20,10) NOT NULL,
      data_criacao_pvp datetime NOT NULL,
      data_vencimento_pvp datetime NOT NULL,
      PRIMARY KEY (id_pvp),
      KEY fk_pvp_pedido_idx (id_pedido_pvp),
      CONSTRAINT fk_pvp_pedido_idx FOREIGN KEY (id_pedido_pvp) REFERENCES pedidos_venda (id_pv)
      ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
      /*!40101 SET character_set_client = @saved_cs_client */;
      `;

			await this.queryAsync(pedidos_venda_pagamentos, connectionBanquinho);

			///////////////////////////////////////////////

			const produtos_movimentacoes = `
      --
      -- Table structure for table produtos_movimentacoes
      --

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
      tipo_movimentacao_pm varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
      data_hora_pm datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
      numero_nota_fiscal_pm int(11) DEFAULT NULL,
      observacao_pm varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
      PRIMARY KEY (id_pm),
      KEY fk_pm_pedido_venda_idx (id_pedido_venda_pm),
      KEY fk_pm_produtos_idx (id_produto_pm),
      CONSTRAINT fk_pm_pedido_venda_idx FOREIGN KEY (id_pedido_venda_pm) REFERENCES pedidos_venda (id_pv),
      CONSTRAINT fk_pm_produtos_idx FOREIGN KEY (id_produto_pm) REFERENCES produtos (id_prod)
      ) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
      /*!40101 SET character_set_client = @saved_cs_client */;
      `;

			await this.queryAsync(produtos_movimentacoes, connectionBanquinho);

			///////////////////////////////////////////////

			const clientes_produtos = `
      --
      -- Table structure for table clientes_produtos
      --

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
      ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
      /*!40101 SET character_set_client = @saved_cs_client */;

      `;

			await this.queryAsync(clientes_produtos, connectionBanquinho);

			///////////////////////////////////////////////

			const controle_caixa = `
      --
      -- Table structure for table controle_caixa
      --

      DROP TABLE IF EXISTS controle_caixa;
      /*!40101 SET @saved_cs_client     = @@character_set_client */;
      /*!50503 SET character_set_client = utf8mb4 */;
      CREATE TABLE controle_caixa (
      id_controle_caixa int(11) NOT NULL AUTO_INCREMENT,
      id_usuario_controle_caixa int(11) NOT NULL,
      data_abertura_controle_caixa timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
      data_fechamento_controle_caixa timestamp NULL DEFAULT NULL,
      saldo_inicial_controle_caixa decimal(20,10) DEFAULT NULL,
      saldo_final_controle_caixa decimal(20,10) DEFAULT NULL,
      PRIMARY KEY (id_controle_caixa)
      ) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=latin1;
      /*!40101 SET character_set_client = @saved_cs_client */;
      `;

			await this.queryAsync(controle_caixa, connectionBanquinho);

			///////////////////////////////////////////////

			const caixa_movimentacoes = `
      DROP TABLE IF EXISTS caixa_movimentacoes;
      /*!40101 SET @saved_cs_client     = @@character_set_client */;
      /*!50503 SET character_set_client = utf8mb4 */;
      CREATE TABLE caixa_movimentacoes (
      id_cm int(11) NOT NULL AUTO_INCREMENT,
      id_controle_caixa_cm int(11) NOT NULL,
      data_atual_cm timestamp(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
      tipo_operacao_cm varchar(10) NOT NULL,
      id_pedido_venda_cm int(11) DEFAULT NULL,
      id_forma_pagamento_cm int(11) NOT NULL,
      valor_pago_cm decimal(20,10) NOT NULL,
      valor_troco_cm decimal(20,10) NOT NULL,
      PRIMARY KEY (id_cm),
      KEY fk_cm_forma_pagamento_idx (id_forma_pagamento_cm),
      KEY fk_cm_pedido_venda_idx (id_pedido_venda_cm),
      KEY fk_cm_controle_caixa_idx (id_controle_caixa_cm),
      CONSTRAINT fk_cm_controle_caixa_idx FOREIGN KEY (id_controle_caixa_cm) REFERENCES controle_caixa (id_controle_caixa),
      CONSTRAINT fk_cm_forma_pagamento_idx FOREIGN KEY (id_forma_pagamento_cm) REFERENCES forma_pagamento (id_fp),
      CONSTRAINT fk_cm_pedido_venda_idx FOREIGN KEY (id_pedido_venda_cm) REFERENCES pedidos_venda (id_pv)
      ) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=latin1;
      /*!40101 SET character_set_client = @saved_cs_client */;
      /*!50003 SET @saved_cs_client      = @@character_set_client */ ;
      /*!50003 SET @saved_cs_results     = @@character_set_results */ ;
      /*!50003 SET @saved_col_connection = @@collation_connection */ ;
      /*!50003 SET character_set_client  = utf8mb4 */ ;
      /*!50003 SET character_set_results = utf8mb4 */ ;
      /*!50003 SET collation_connection  = utf8mb4_general_ci */ ;
      /*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
      /*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;


      `;

			await this.queryAsync(caixa_movimentacoes, connectionBanquinho);

			///////////////////////////////////////////////
			const trigger1 = `
      CREATE TRIGGER before_insert_caixa_movimentacoes
      BEFORE INSERT ON caixa_movimentacoes FOR EACH ROW
      BEGIN
      DECLARE saldo_atual DECIMAL(20,10);
      DECLARE saldo_atual_final DECIMAL(20,10);
      DECLARE saldo_atual_inicial DECIMAL(20,10);

      -- Obter o saldo_final_controle_caixa atual
      SELECT saldo_final_controle_caixa, saldo_inicial_controle_caixa
      INTO saldo_atual_final, saldo_atual_inicial
      FROM controle_caixa
      WHERE id_controle_caixa = NEW.id_controle_caixa_cm;

      -- Atualizar o saldo_final_controle_caixa com o valor_pago_cm
      UPDATE controle_caixa
      SET saldo_final_controle_caixa = saldo_atual_final + NEW.valor_pago_cm
      WHERE id_controle_caixa = NEW.id_controle_caixa_cm;

      -- Atualizar o saldo_inicial_controle_caixa se a operação for do tipo 'Reforco'
      IF NEW.tipo_operacao_cm = 'Reforco' OR NEW.tipo_operacao_cm = 'Retirada' THEN
      UPDATE controle_caixa
      SET saldo_inicial_controle_caixa = saldo_atual_inicial + NEW.valor_pago_cm
      WHERE id_controle_caixa = NEW.id_controle_caixa_cm;
      END IF;
      END */;;
      `

			///////////////////////////////////////////////
			const atualiza_valor_bruto_trigger = `
			CREATE TRIGGER atualiza_valor_bruto
			AFTER INSERT ON pedidos_venda_itens
			FOR EACH ROW
			BEGIN
			UPDATE pedidos_venda
			SET valor_bruto_pv = valor_bruto_pv + NEW.valor_total_pvi
			WHERE id_pv = NEW.id_pedido_pvi;
			END;
			`;
			await this.queryAsync(atualiza_valor_bruto_trigger, connectionBanquinho);


			///////////////////////////////////////////////

			const before_insert_produtos_movimentacoes_trigger = `
			CREATE TRIGGER before_insert_produtos_movimentacoes
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
			END;
			`;
			await this.queryAsync(before_insert_produtos_movimentacoes_trigger, connectionBanquinho);

			///////////////////////////////////////////////

			const extras_pedidos = `
      --
      -- Table structure for table first_page_images
      --

      DROP TABLE IF EXISTS first_page_images;
      /*!40101 SET @saved_cs_client     = @@character_set_client */;
      /*!50503 SET character_set_client = utf8mb4 */;
      CREATE TABLE first_page_images (
      id_fpi int(11) NOT NULL AUTO_INCREMENT,
      id_restaurante_fpi int(11) NOT NULL,
      id_imagem_fpi int(11) DEFAULT NULL,
      PRIMARY KEY (id_fpi),
      KEY fk_fpi_imagens_idx (id_imagem_fpi),
      KEY fk_fpi_restaurantes_idx (id_restaurante_fpi),
      CONSTRAINT fk_fpi_imagens_idx FOREIGN KEY (id_imagem_fpi) REFERENCES imagens (id_imagem),
      CONSTRAINT fk_fpi_restaurantes_idx FOREIGN KEY (id_restaurante_fpi) REFERENCES restaurantes (id_restaurante)
      ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
      /*!40101 SET character_set_client = @saved_cs_client */;
      `;

			await this.queryAsync(extras_pedidos, connectionBanquinho);

			///////////////////////////////////////////////


			console.log("Banco de dados criado com sucesso!");
		} catch (error) {
			console.error("Erro ao criar o banco de dados:", error);
			throw new ErrorResponse(500, "Erro ao criar o banco de dados");

		}
	}
	async queryAsync(query: string, connection: mysql.Connection) {
		return new Promise((resolve, reject) => {
			connection.query(query, (err: any, result: any) => {
				if (err) {
					reject(err);
				} else {
					resolve(result);
				}
			});
		});
	}
}

