/*Los valores booleanos pueden ser uno de dos valores: verdadero o false, que representann el valor de 
verdad de una proposición lógica*/
const isObject = (obj) => !!obj && typeof obj === "object";
const isObject1 = (obj) => Boolean(obj) && typeof obj === "object";
console.log(`isObject({}) -> ${isObject({})}`);
console.log(`isObject(null) -> ${isObject(null)}`);
console.log(`isObject(null) -> ${isObject1(null)}`);

/*Primitivas booleanas y objetos booleanos
Para convertir valores no booleanos a booleanos, utilice Boolean omo función o el operador doble NOT.
No utilice el constructor Boolean con new.*/
const good = Boolean(1);
const good1 = !!2;
console.log('\n');
console.log(`good -> ${good}`);
console.log(`good1 -> ${good1}`);
/*Esto se debe a que todo los objetos, incluido u objeto booleano cuyo valor encapsulado es falso, son verdaderos
y se evalúan como verdadero en casos como las sentencias condicionales.*/
if (new Boolean(true)) {
    console.log("This log is printed.");
}
if (new Boolean(false)) {
    console.log("This log is ALSO printed.");
}

// Cohersion booleana
console.log('\n');
if ([] == false) {
  console.log("[] == false");
}
