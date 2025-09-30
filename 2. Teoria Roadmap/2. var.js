/*La declaracion var declara variables con alcance funcional o global, inicializando opcionalmente cada una en un valor
Sintaxis
var name1;
var name1 = value1;
var name1 = value1, name2 = value2;
var name1, name2 = value2;
var name1 = value1, name2, /.../ nameN = valueN;
*/

var x = 1;

if (x === 1) {
    var x = 2;
    console.log(x);
}

console.log(x);

function foo() {
    var y = 1;

    function bar() {
        var z = 2;
        console.log("from bar " + y);
        console.log("from bar " + z);
    }

    bar();

    console.log("from foo " + y);
    //console.log("from foo " + z); Error of scope
}

foo();

/*Es importante destacar que otras construcciones de bloques, incluidas las declaraciones de bloque, try...catch, switch,
 encabezados de una de las declaraciones for, no crean ámbitos para var, y las variables declaradas con var dentro de dicho
  bloque pueden seguir siendo referenciadas fuera del bloque.*/
for (var a of [1, 2, 3]);
console.log("for " + a);

/*En un script, una variable declarada con var se añade como propiedad no configurable del objeto global. Esto 
significa que su descriptor de propiedad no se puede modificar ni eliminar con delete. JavaScript cuenta con gestión
automática de memoria, y no tendría sentido usar el operador delete en una variable global.

"use strict";

var xn = 1;

Object.hasOwn(globalThis, "xn");
delete globalThis.xn;
delete xn;
*/

// Hoisting