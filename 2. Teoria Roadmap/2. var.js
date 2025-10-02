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
    console.log("From function " + x);
}

console.log("From global " + x);

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

/*Hoisting
Declarar un var en cualquier parte del código equivale a declararla al principio. Esto también significa que una variable puede parecer
utilizada antes de ser declarada. Este comportamiento se denomina "hoisting", ya que parece que la declaración de la variable
se mueve al principio de la función, el bloque de inicialización estática o el código fuente del script donde aparece.*/  
bla = 2;
var bla;
// Esto se entiende explicitamente como
var bla;
bla = 2;

function doSomething() {
    console.log(bar);
    var bar = 111;
    console.log(bar);
}
// Esto se entiende explicitamente como
function doSomething() {
    var bar;
    console.log(bar);
    bar = 111;
    console.log(bar);
}

/*Redeclaraciones
Las declaraciones de variables duplicadas que utilizan var no generarán un error, incluso en modo estricto, y la variable
no perderá su valor, a menos que la declaración tenga un inicializador.*/

var a = 1;
var a = 2;
console.log("a = " + a);
var a;
console.log("a = " + a);

/*Las declaracion var también pueden estar en el mismo ámbito que una declaración de función. En este caso, el inicializador de la declaración
de var siempre sobrescribe el valor de la función, independientemente de su posición relativa. Esto se debe a que las declaraciones de 
función se elevan antes de que se evalúe cualquier inicializador, por lo que este último aparece después y sobrescribe el valor.*/
var aone = 1;
function aone() {}
console.log("\naone = " + aone);

// Las declaraciones var no pueden estar en el mismo ámbito que una declaración let, const, class o import.
var atwo = 1;
// let atwo = 1;  SyntaxError: Identifier 'atwo' has already been declared

// Dado que las declaraciones de variables no tienen como ámbito los bloques, esto también se aplica al siguiente caso:
let athree = 1;
{
    // var athree = 1;  SyntaxError: Identifier 'athree' has already been declared
}

// No se aplica al siguiente caso, donde let está en un ámbito secundario de var, no en el mismo ámbito:
var afour = 1;
{
    let afour = 2;
}

// Una declaracion de var dentro del cuerpo de una funcion puede tener el mismo nombre que un parametro
function foo(a) {
    var a = 1;
    console.log(a);
}

foo(2);

/*Una declaración de variable dentro de un bloque catch puede tener el mismo nombre que el identificador enlazado a catch, pero solo si el 
enlace catch es un identificador simple, no un patrón de desestructuración. Esta sintaxis está obsoleta y no debe utilizarse con confianza. En
 este caso, la declaración se eleva fuera del bloque catch, pero cualquier valor asignado dentro del bloque catch no es visible fuera de js.*/
try {
    throw new Error();
} catch (e) {
    var e = 2;
}

console.log("\n e = " + e);
// Explicitamente como
var e;

try {
    throw new Error();
} catch (e) {
    e = 2;
    console.log("\nFrom the catch "+ e);
}

console.log(e);

// Asignar dos variables con un unico valor de cadena
var ice = "You";
var cream = ice;
// Esto es equivalente a 
var prac, tice = prac = "Deam";

console.log("\nice = " + ice);
console.log("cream = " + cream);
console.log("prac = " + prac);
console.log("tice = " + tice);

// Tenga en cuenta el ordem
var order = inthis, inthis = "A";
console.log("\norder = " + order);
console.log("inthis = " + inthis);

/*Esto es explicitamente como
var order,inthis;
order = inthis;
y = "A"*/

/* Inicializacion de varias variables

El operador de asignacion (=) se evalua de derecha a izquierda. Entonces la linea se cree como
var var1 = (var2 = 1);
Entonces la instruccion queda como:
var var1 = 1;*/
var var1 = var2 = 1;

console.log("\n" + var1, var2);

var var5 = 0;
function f() {
    var var5 = var6 = 1; // Declara var5 localmente, declara y globalmente
    // en modo no estricto se crea implícitamente una variable global var6
}

f();

console.log("var5 = " + var5 + " var6 = " + var6); // 0 1

"use strict";

var varia = 0;

function funct() {
    var varia = variatwo = 1;
}

funct();

console.log("\nvaria = " + varia + " variatwo = " + variatwo)

/*Las variables que parecen ser globales implícitas pueden ser referencias a variables en un ámbito de función externo:*/
var assign0 = 0;
console.log("\n" + typeof assign3);

function aFunc() { 
    var assign2 = 2;

    console.log("\nassign0 = " + assign0 + " assign2 = " + assign2);

    function bFunc() { 
        assign0 = 3;
        assign2 = 4;
        assign3 = 5;
    }

    bFunc();
    console.log("\nassign0 = " + assign0 + " assign2 = " + assign2 + " assign3 = " + assign3);
}

aFunc();
console.log("\nassign0 = " + assign0 + " assign3 = " + assign3);
console.log(typeof assign2);

// Declaración con desestructuración 
// El lado izquierdo de cada = también puede ser un patrón de enlace. Esto permite crear varias variables a la vez.
const result = /(a+)(b+)(c+)/.exec("aaabcc");
// var [,a, b, c] = result;
// console.log("\n" + a, b, c);

console.log(result);