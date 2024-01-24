// Função para converter campos BigInt em strings
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function convertBigIntToString(obj: any) {
	for (const key in obj) {
		if (Object.prototype.hasOwnProperty.call(obj, key)) {
			if (typeof obj[key] === "bigint") {
				obj[key] = obj[key].toString();
			}
		}
	}
	return obj;
}

export function extractCreateTableStatement(tableName, dumpContent) {
	// Utilizando expressão regular para encontrar as instruções CREATE TABLE da tabela específica
	// eslint-disable-next-line quotes
	const createTableRegex = new RegExp(`CREATE TABLE \`${tableName}\`[^;]*;`, 'g');
	const matches = dumpContent.match(createTableRegex);

	// Verifica se há correspondências
	if (matches) {
		// Atribui a primeira correspondência a uma variável (você pode iterar sobre as correspondências conforme necessário)
		const createTableStatement = matches[0];
		const sqlSemQuebrasDeLinha = createTableStatement.replace(/\r?\n|\r/g, "");
		// eslint-disable-next-line quotes
		console.log(`SQL da Tabela ${tableName} criada com sucesso!`);
		return sqlSemQuebrasDeLinha;
	} else {
		console.log(`Nenhuma instrução CREATE TABLE encontrada para a tabela ${tableName} no arquivo.`);
		return null;
	}
}
