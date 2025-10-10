/* El tipo de dato Número en JS representa números de punto flotante, como 37 o -9.57
El constructor Number contiene constantes y métodos para trabajar con números. Los valores de otros tipos se
puede convertir en números mediante la función Number()*/
const number1 = 255;
const number2 = 255.0;
const number3 = 255 === 255.0;
const number4 = 255 === 0xff;
const number5 = 255 === 0b11111111;
const number6 = 255 === 0.255e3;
console.log(`255 -> ${number1}`);
console.log(`255.0 -> ${number2}`);
console.log(`255 === 255.0 -> ${number3}`);
console.log(`255 === 0xff -> ${number4}`);
console.log(`255 === 0b11111111 ${number5}`);
console.log(`255 === 0.255e3 ${number6}`);
/* Cuando se usa como función, Number(valor) convierte una cadena u otro valor al tipo Número. Si el valor no se 
puede convertir, devuelve NaN*/
console.log("\n")
console.log(`Number("123") -> ${Number("123")}`);
console.log(`${Number("123") === 123}`);
console.log(`Number("unicorn") -> ${Number("unicorn")}`);
console.log(`Number(undefined) -> ${Number(undefined)}`);
console.log(`Number(null) -> ${Number(null)}`);
console.log(`Number(true) -> ${Number(true)}`);
console.log(`Number(false) -> ${Number(false)}`);
console.log(`Number(     ) -> ${Number(     )}`);
/*Conversion de numeros de ancho fijo
Los operadores bit a bit siempre convierten los operandos en enteros de 32 bits. en estos casos, tras convertir 
el valor a un número este se normaliza al ancho dado truncando primero la parte fraccionaria y luego tomando los
bits mas bajos en la codificacion de complemento a dos del entero*/
console.log("\n");
console.log(new Int32Array([1.1, 1.9, -1.9]));
console.log(new Int8Array([257, -275]));
console.log(new Uint8Array([257, -275]));
/*Propiedades estaticas*/
console.log("\n");
// El intervalo más pequeño entre dos números representables
const result = Math.abs(0.2 - 0.3 + 0.1);
console.log(`${result} < ${Number.EPSILON} -> ${result < Number.EPSILON}`);
// El número positivo más grande representable
console.log(`Number.MAX_VALUE -> ${Number.MAX_VALUE}`);
// El número positivo representable más pequeño, es decir, el número positivo más cercano a cero (sin ser realmente cero)
console.log(`Number.MIN_VALUE -> ${Number.MIN_VALUE}`);
// Valor especial que representa el infinito negativo. Se devuelve en caso de desbordamiento
console.log(`Number.NEGATIVE_INFINITY -> ${Number.NEGATIVE_INFINITY}`);
// Valor especial que representa el infinito. Se devuelve en aso de desbordamiento
console.log(`Number.POSITIVE_INFINITY -> ${Number.POSITIVE_INFINITY}`);

// Metodos estaticos
console.log('\n');
// Determina si el valor pasado es un número finito
console.log(`Number.isFinite(1/0) -> ${Number.isFinite(1/0)}`);
console.log(`Number.isFinite(10/5) -> ${Number.isFinite(10/5)}`);
// Determina si el valor pasado es un entero
console.log(`Number.isInteger(5/10) -> ${Number.isInteger(10 / 5)}`);
console.log(`Number.isInteger(5/11) -> ${Number.isInteger(11 / 5)}`);
/* Esto es lo mismo que la funcion parseFloat(). parseFloat() analiza un argumento de cadena y devuelve un 
numero de punto flotante. Si no puede analizar un número a partir de un argumento, devuelve NaN*/
console.log(`Number.parseFloat("4.567abcdefgh") -> ${Number.parseFloat("4.567abcdefgh")}`);
console.log(`Number.parseFloat("adsa") -> ${Number.parseFloat("adsa")}`);
/* Esto es lo mismo que la función global parseInt(). Analiza un argumento de cadena y devuelve
un entero de la base o el radio especificado*/
console.log(`Number.parseInt("123", 10) -> ${Number.parseInt("123", 10)}`);
console.log(`Number.parseInt("ff", 16) -> ${Number.parseInt("ff", 16)}`);
console.log(`Number.parseInt("xyz") -> ${Number.parseInt("xyz")}`);
// Metodos de instancia
console.log('\n');
// Devuelve una cadena que representa el número en notación exponencial
const num = 123456;
const num1 = new Number(42);
console.log(`num.toExponential(2) -> ${num.toExponential(2)}`);
console.log(`num.toString() -> ${num.toString()}`);
console.log(`num.toString(2) -> ${num.toString(2)}`);
console.log(`num.valueOf() ->${num1.valueOf()}`);