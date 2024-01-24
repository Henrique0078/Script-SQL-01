import mysql from "mysql";
import fs from "fs";
import { extractCreateTableStatement } from "../Model/Utils";

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
		//CRIA A CONEXÃO COM O BANCO
		const connectionBanquinho = mysql.createConnection({
			host: process.env.HOST,
			user: process.env.USUARIO,
			password: process.env.SENHA,
			database: nomeBanco,
			multipleStatements: true,
		});


		///////////////////////////////////////////////
		//////////////CRIA As TABELAS//////////////////
		///////////////////////////////////////////////

		const dumpFilePath = "C:/Users/Natan/Documents/GitHub/BackupBRestaurantCaio.sql";
		const dumpContent = fs.readFileSync(dumpFilePath, "utf8");

		const arrayTabelas = [];

		const certificado = extractCreateTableStatement("certificado", dumpContent);
		arrayTabelas.push(certificado);

		const vendedores = extractCreateTableStatement("vendedores", dumpContent);
		arrayTabelas.push(vendedores);

		const condicoes_pagamento = extractCreateTableStatement("condicoes_pagamento", dumpContent);
		arrayTabelas.push(condicoes_pagamento);

		const listas_precos = extractCreateTableStatement("listas_precos", dumpContent);
		arrayTabelas.push(listas_precos);

		const clientes = extractCreateTableStatement("clientes", dumpContent);
		arrayTabelas.push(clientes);

		const enderecos = extractCreateTableStatement("enderecos", dumpContent);
		arrayTabelas.push(enderecos);

		const contatos = extractCreateTableStatement("contatos", dumpContent);
		arrayTabelas.push(contatos);

		const fornecedores = extractCreateTableStatement("fornecedores", dumpContent);
		arrayTabelas.push(fornecedores);

		const grupos_usuarios = extractCreateTableStatement("grupos_usuarios", dumpContent);
		arrayTabelas.push(grupos_usuarios);

		const vendedores_usuarios = extractCreateTableStatement("vendedores_usuarios", dumpContent);
		arrayTabelas.push(vendedores_usuarios);

		const usuarios_grupos_usuarios = extractCreateTableStatement("usuarios_grupos_usuarios", dumpContent);
		arrayTabelas.push(usuarios_grupos_usuarios);

		const permissoes = extractCreateTableStatement("permissoes", dumpContent);
		arrayTabelas.push(permissoes);

		const parametros = extractCreateTableStatement("parametros", dumpContent);
		arrayTabelas.push(parametros);

		const transportadores = extractCreateTableStatement("transportadores", dumpContent);
		arrayTabelas.push(transportadores);

		const modalidade_frete = extractCreateTableStatement("modalidade_frete", dumpContent);
		arrayTabelas.push(modalidade_frete);

		const imagens = extractCreateTableStatement("imagens", dumpContent);
		arrayTabelas.push(imagens);

		const restaurantes = extractCreateTableStatement("restaurantes", dumpContent);
		arrayTabelas.push(restaurantes);

		const first_page_images = extractCreateTableStatement("first_page_images", dumpContent);
		arrayTabelas.push(first_page_images);

		const carousel_images = extractCreateTableStatement("carousel_images", dumpContent);
		arrayTabelas.push(carousel_images);

		const menus = extractCreateTableStatement("menus", dumpContent);
		arrayTabelas.push(menus);


		const submenus = extractCreateTableStatement("submenus", dumpContent);
		arrayTabelas.push(submenus);

		const produtos = extractCreateTableStatement("produtos", dumpContent);
		arrayTabelas.push(produtos);

		const extras = extractCreateTableStatement("extras", dumpContent);
		arrayTabelas.push(extras);

		const produtos_extras = extractCreateTableStatement("produtos_extras", dumpContent);
		arrayTabelas.push(produtos_extras);

		const listas_precos_produtos = extractCreateTableStatement("listas_precos_produtos", dumpContent);
		arrayTabelas.push(listas_precos_produtos);

		const atividades_grupos = extractCreateTableStatement("atividades_grupos", dumpContent);
		arrayTabelas.push(atividades_grupos);

		const forma_pagamento = extractCreateTableStatement("forma_pagamento", dumpContent);
		arrayTabelas.push(forma_pagamento);

		const pedidos_venda = extractCreateTableStatement("pedidos_venda", dumpContent);
		arrayTabelas.push(pedidos_venda);

		const pedidos_venda_itens = extractCreateTableStatement("pedidos_venda_itens", dumpContent);
		arrayTabelas.push(pedidos_venda_itens);

		const pedidos_venda_pagamentos = extractCreateTableStatement("pedidos_venda_pagamentos", dumpContent);
		arrayTabelas.push(pedidos_venda_pagamentos);

		const produtos_movimentacoes = extractCreateTableStatement("produtos_movimentacoes", dumpContent);
		arrayTabelas.push(produtos_movimentacoes);


		const clientes_produtos = extractCreateTableStatement("clientes_produtos", dumpContent);
		arrayTabelas.push(clientes_produtos);

		const controle_caixa = extractCreateTableStatement("controle_caixa", dumpContent);
		arrayTabelas.push(controle_caixa);

		const caixa_movimentacoes = extractCreateTableStatement("caixa_movimentacoes", dumpContent);
		arrayTabelas.push(caixa_movimentacoes);


		for (let i = 0; i < arrayTabelas.length; i++) {
			const element = arrayTabelas[i];
			await queryAsync(element, connectionBanquinho);
			console.log(`Tabela ${i} criada com sucesso`);
			console.log("------------------------------------------");
		}


		///////////////////////////////////////////////
		//////////////////TRIGGERS/////////////////////
		///////////////////////////////////////////////

		const before_insert_caixa_movimentacoes = `
			CREATE TRIGGER before_insert_caixa_movimentacoes
			BEFORE INSERT ON caixa_movimentacoes FOR EACH ROW
			BEGIN
				DECLARE saldo_atual DECIMAL(20,10);
				DECLARE saldo_atual_final DECIMAL(20,10);
				DECLARE saldo_atual_inicial DECIMAL(20,10);

				SELECT saldo_final_controle_caixa, saldo_inicial_controle_caixa
				INTO saldo_atual_final, saldo_atual_inicial
				FROM controle_caixa
				WHERE id_controle_caixa = NEW.id_controle_caixa_cm;

				UPDATE controle_caixa
				SET saldo_final_controle_caixa = saldo_atual_final + NEW.valor_pago_cm
				WHERE id_controle_caixa = NEW.id_controle_caixa_cm;

				IF NEW.tipo_operacao_cm = 'Reforco' OR NEW.tipo_operacao_cm = 'Retirada' THEN
					UPDATE controle_caixa
					SET saldo_inicial_controle_caixa = saldo_atual_inicial + NEW.valor_pago_cm
					WHERE id_controle_caixa = NEW.id_controle_caixa_cm;
				END IF;
			END;

			`;

		await queryAsync(before_insert_caixa_movimentacoes, connectionBanquinho);


		const before_insert_produtos_movimentacoes = `
			CREATE TRIGGER before_insert_produtos_movimentacoes
			BEFORE INSERT ON produtos_movimentacoes FOR EACH ROW
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

		await queryAsync(before_insert_produtos_movimentacoes, connectionBanquinho);


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
