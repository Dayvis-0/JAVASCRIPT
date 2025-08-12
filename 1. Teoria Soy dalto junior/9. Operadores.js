/* Los operadores de comparacion y operadores logicos se usan para evaluar condiciones en expresiones booleanas*/

let iqual, iquals, desi, desis, mayo, meno, mayoiqua, menoiqua;
let iqualstri, iqualstri1, desistri, desistri1;
let and1, and2, or1, or2, nega1, nega2;

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

and1 = (5 > 3) && (10 > 1); // Devuelve true si las dos condiciones son verdaderas 
and2 = (5 > 10) && (10 < 1); 
or2 = (5 > 1) || (9 > 0) ;// Devuelve true si al menos una condicion es verdadera
or1 = (5 > 100) || (0 > 10); 
nega1 = ! (5 > 0); //Niega una condicion
nega2 = ! (0 > 100);

console.log(`\tOperadores de comparacion\n
Primer numero: ${nume1}, segundo numero: ${nume2} son iguales?: ${iqual}
Primer numero: ${nume1}, segundo numero: ${nume2} son estrictamente iguales?: ${iquals}
Primer numero: ${nume1}, segundo numero en string: ${nume2} son  iguales?: ${iqualstri}
Primer numero: ${nume1}, segundo numero en string: ${nume2} son estrictamente iguales?: ${iqualstri1}
Primer numero: ${nume1}, segundo numero: ${nume2} son desiguales?: ${desi}
Primer numero: ${nume1}, segundo numero: ${nume2} son estrictamente desiguales?: ${desis}
Primer numero: ${nume1}, segundo numero en string: ${nume2} son desiguales?: ${desistri}
Primer numero: ${nume1}, segundo numero en string: ${nume2} son estrictamente desiguales?: ${desistri1}
\n\tOperadores logicos\n
Verdaero y verdadero: ${and1}
Verdaero y falso: ${and1}
Verdaero o verdaero: ${or1}
Verdaero o falso: ${or2}
Negacion de verdadero: ${nega1}
Negacion de verdadero: ${nega2}`);