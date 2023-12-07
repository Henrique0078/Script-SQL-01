// Função para converter campos BigInt em strings
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