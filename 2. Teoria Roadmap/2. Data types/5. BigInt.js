/*Los valores BigInit representan valores enteros que son demasiados altos o demasiados bajos para
ser representados por el número primitivo.*/
const preInteger = 9007199254740991n;
console.log(`BigInt(preInteger) -> ${BigInt(preInteger)}`);
console.log(`BigInt(0b11111111111111111111111111111111111111111111111111111) -> ${BigInt(0b11111111111111111111111111111111111111111111111111111)}`);
console.log(`typeof 1n === "bigint" -> ${typeof 1n === "bigint"}`);
console.log(`typeof BigInt("1") === "bigint" -> ${typeof BigInt("1") === "bigint"}`);
/*Operadores
La mayoria de los operadores admiten BigInits, sin embargo la mayoria no permite que los operandos
sean de tipos mixtos: ambos operandos deben ser BigInt o ninguno*/
const previousMaxSafe = BigInt(Number.MAX_SAFE_INTEGER);
console.log(`previousMaxSafe + 1n -> ${previousMaxSafe + 1n}`);
console.log(`previousMaxSafe + 2n -> ${previousMaxSafe + 2n}`);
console.log(`previousMaxSafe * 2n -> ${previousMaxSafe * 2n}`);
const prod = previousMaxSafe * 2n;
console.log(`prod - 10n -> ${prod - 10n}`);
console.log(`prod % 10n -> ${prod % 10n}`);
console.log(`2n ** 54n -> ${2n ** 54n}`);
const bigN = 2n ** 54n;
console.log(`bigN * - 1n -> ${bigN * - 1n}`);
console.log(`4n / 2n -> ${4n / 2n}`);
console.log(`5n / 2n -> ${5n / 2n}`);

/*Condicional
Es decir, sólo 0n es falso; todo lo demás es verdadero*/
console.log('\n');
if (0n) {
    console.log("Hello from the if");
} else {
    console.log("Hello from the else");
}

/* Uso dentro de JSON
Usar JSON.stringify() con cualquier valor BigInt generará un TypeError, ya que los valores BigInt no se
serializan en JSON por defecto. Por lo tanto, puede implementar su propio método toJSON() (que es uno de 
los pocos casos en los que no se desaconseja explícitamente aplicar parches a objetos integrados):*/
BigInt.prototype.toJSON = function () {
    return { $bigint: this.toString() };
};

const data = {
    normal: 42,
    big: 9007199254740993n
};
console.log('\n');
console.log(`JSON.stringify(data, null, 2) -> ${JSON.stringify(data, null, 2)}`);