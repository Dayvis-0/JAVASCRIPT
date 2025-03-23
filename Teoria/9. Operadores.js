/* Los operadores de comparacion y operadores logicos se usan para evaluar condiciones en expresiones booleanas*/

let iqual, iquals, desi, desis, mayo, meno, mayoiqua, menoiqua;
let iqualstri, iqualstri1, desistri, desistri1;

let nume1 = 1;
let nume2 = 2;
let nume3 = '3';

/* Operadores de comparacion: */

iqual = nume1 == nume2; /* Igualdadad | Compara valores, no tipos*/
iquals = nume1 === nume2; /* Igualdad estricta | Compara valor y tipo*/
iqualstri = nume1 == nume3; 
iqualstri1 = nume1 === nume3;
desi = nume1 != nume2; /* Desigualdad | Compara valores, no tipos*/
desis = nume1 !== nume2; /* Desigualdad estricta | Compara valores y tipos*/
desistri = nume1 != nume3;
desistri1 = nume1 !== nume3;

/* Operadores logicos */

console.log(`Primer numero: ${nume1}, segundo numero: ${nume2} son iguales?: ${iqual}`);
console.log(`Primer numero: ${nume1}, segundo numero: ${nume2} son estrictamente iguales?: ${iquals}`);
console.log(`Primer numero: ${nume1}, segundo numero en string: ${nume2} son  iguales?: ${iqualstri}`);
console.log(`Primer numero: ${nume1}, segundo numero en string: ${nume2} son estrictamente iguales?: ${iqualstri1}`);
console.log(`Primer numero: ${nume1}, segundo numero: ${nume2} son desiguales?: ${desi}`);
console.log(`Primer numero: ${nume1}, segundo numero: ${nume2} son estrictamente desiguales?: ${desis}`);
console.log(`Primer numero: ${nume1}, segundo numero en string: ${nume2} son desiguales?: ${desistri}`);
console.log(`Primer numero: ${nume1}, segundo numero en string: ${nume2} son estrictamente desiguales?: ${desistri1}`);