/* El tipo de dato Número en JS representa números de punto flotante, como 37 o -9.57
El constructor Number contiene constantes y métodos para trabajar con números. Los valores de otros tipos se
puede convertir en números mediante la función Number()*/
const number1 = 255;
const number2 = 255.0;
const number3 = 255 === 255.0;
const number4 = 255 === 0xff;
const number5 = 255 === 0b11111111;
const number6 = 255 === 0.255e3;
console.log(number1);
console.log(number2);
console.log(number3);
console.log(number4);
console.log(number5);
console.log(number6);
/* Cuando se usa como función, Number(valor) convierte una cadena u otro valor al tipo Número. Si el valor no se 
puede convertir, devuelve NaN*/
console.log("\n")
console.log(Number("123"));
console.log(`${Number("123") === 123}`);
console.log(Number("unicorn"));
console.log(Number(undefined));
console.log(Number(null));
console.log(Number(true));
console.log(Number(false));
console.log(Number(     ));
/*Conversion de numeros de ancho fijo
Los operadores bit a bit siempre convierten los operandos en enteros de 32 bits. en estos casos, tras convertir 
el valor a un número este se normaliza al ancho dado truncando primero la parte fraccionaria y luego tomando los
bits mas bajos en la codificacion de complemento a dos del entero*/
console.log("\n");
console.log(new Int32Array([1.1, 1.9, -1.9]));
console.log(new Int8Array([257, -275]));
console.log(new Uint8Array([257, -275]));
/*Propiedades estaticas*/