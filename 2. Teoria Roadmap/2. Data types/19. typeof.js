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

// typeof null 
console.log('\n');
console.log(`typeof null === "object" ${typeof null === "object"}`);

// Metodo personalizado que obtiene un tipo más específico 
function type(value) {
    if (value === null) {
        return "null";
    }

    const baseType = typeof value;

    // Tipos primitivos
    if (!["object", "function"].includes(baseType)) {
        return baseType;
    }

    const tag = value[Symbol.toStringTag];
    if (typeof tag === "string") {
        return tag;
    }

    if (
        baseType === "function" &&
        Function.prototype.toString.call(value).startsWith("class")
    ) {
        return "class";
    }

    const calssName = value.constructor.name;
    if (typeof calssName === "string" && calssName != "") {
        return calssName;
    }

    return baseType;
}
console.log("\nMetodo personalizado que obtiene un tipo más especifico")
console.log(`\ntype(null) = ${type(null)}`);
console.log(`\ntype([1, 2, 3]) = ${type([1, 2, 3])}`);
console.log(`\ntype(new Date()) = ${type(new Date())}`);
console.log(`\ntype(new Map()) = ${type(new Map())}`);
console.log(`\ntype(class Miclase {}) = ${type(class Miclase {})}`);
class Miclase {}
console.log(`\ntype(new Miclase()) = ${type(new Miclase())}`);