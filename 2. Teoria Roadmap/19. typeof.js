// El operador typeof devuelve una cadena que indica el tipo de valor del operando
console.log(`typeof 42 -> ${typeof 42}`);
console.log(`typeof "blubber ->" ${typeof "blubber"}`);
console.log(`typeof true -> ${typeof true}`);
console.log(`typeof undeclaredVariable -> ${typeof undeclaredVariable}`);
// Numbers
console.log('\n');
console.log(`typeof 37 === "number" -> ${typeof 37 === "number"}`);
// Strings
console.log('\n');
console.log(`typeof "" === "string" -> ${typeof "" === "string"}`);
// Boolean
console.log('\n');
console.log(`typeof true === "boolean" -> ${typeof true === "boolean"}`);
// Symbol
console.log('\n');
console.log(`typeof Symbol() === "symbol" -> ${typeof Symbol() === "symbol"}`);
// Undefined
console.log('\n');
console.log(`typeof undefined === "undefined" -> ${typeof undefined === "undefined"}`);
// Objects
console.log('\n');
console.log(`typeof { a : 1 } === "object" -> ${typeof typeof { a : 1 } === "object"}`);
// Function
console.log('\n');
console.log(`typeof typeof function() {} === "function" -> ${typeof function() {} === "function"}`);