/*La declaracion let declara variables locales reasignables y con alcance de bloque, inicializando 
opcionalmente cada una de ellas con un valor
Sintaxis: 
let name1;
let name1 = value1;
let name1 = value1, name2 = value2;
let name1, name2 = value2;
let name1 = value1, name2, /.../ nameN = valueN;
*/
let x = 1;

if (x === 1) {
    let x = 2;

    console.log("From function "+ x);
}

console.log("From global "+ x);

/*El alcance de una variable declarada con let es una de las siguientes sintaxis entre llaves que contiene
mas estrechamente la declaracion let:
- Declaracion de bloque
- Declaracion switch
- Declaracion try...catch
- Cuerpo de una de las declaraciones for, si let esta en el encabezado de la declaracion
- Cuerpo de una funcion
- Bloque de inicializacion estatica

O si ninguna de las anteriores aplica:
- El modulo actual, para el codigo que se ejecuta en modo modulo
- El ambito global, para el codigo que se ejecuta en modo script

Zona muerta temporal
Se dice que una variable declarada con let, const o class, esta en una "zona muerta temporal" desde el inicio
del bloque hasta que la ejecucion de codigo llega al lugar donde se declara e inicializa la variable*/

{
    console.log(bar); // "Undefined"
    // console.log(foo); ReferencError: Cannot access 'foo' before inicialization

    var bar = 10;
    let foo = 2; // End to TDZ (for foo)
}

/*El termino "temporal" se utiliza porque la zona depende del orden de ejecucion (tiempo) y no del orden de 
escritura del codigo (posicion). Por ejemplo, el siguiente codigo funciona porque, aunque la funcion que usa
la variable "let" aparece antes de que se declare la variable, se llama fuera de la TDZ*/
{
    const func = () => console.log(letVar); 

    let letVar = 1;

    func();
}

// El uso del operador typeof para una variable en su TDZ genera un ReferenceError
{
    // typeof i;
    let i = 10;
}
// Esto difiere del uso de typeof para variables no declaradas y variables que contienen un valor indefinido
console.log(typeof undeclaredVariable);

/*Nota: Las declaraciones let y const solo se procesan cuando se procesa el script actual. Si tiene dos elementos
<script> dentro de un HTML, el primer script no esta sujeto a las restricciones de TDZ para las variables let o
const de nivel superior declaradas en el segundo script. Sin embargo, si declara una variable let o const
en el primer script, volver a declararla en el segundo generara un error de redeclaracion

Las declaraciones let no pueden estar en el mismo ambito que cualquier otra declaracion, incluidas las 
declaraciones let, const, class, function, var e import*/

{
    let fooo;
    // let fooo; SyntaxError: Identifier 'fooo' has already been declares
}

// Una declaracion let dentro del cuerpo de una funcion no puede tener el mismo nombre que un parametro
function foooo(aPara) {
    // let aPara = 1;
}
// Una declaracion let dentro de un bloque catch no puede tener el mismo nombre que el identificador asociado a catch
try {
} catch (ePara) {
    // let ePara = 1;
}

// Es posible que encuentres errores en las declaraciones switch porque solo hay un bloque
let xPara = 1;

switch (xPara) {
    case 0: 
        let fooooo;
        break;
    case 1: 
        // let fooooo; SyntaxError
        break;
}

// Para evitar el error, envuelva cada caso en una nueva declaracion de bloque
let xParamet = 1;

switch (xParamet) {
    case 0: {
        let fooooo;
        break;
    }
    case 1: {
        let fooooo; 
        break;
    }
}

/* Reglas de alcance 
Las variables declaradas por let tienen su ámbito en el bloque para el que se declaran, así como en 
cualquier subbloque que contenga. De esta manera, let funciona de forma muy similar a var. La principal 
diferencia radica en que el ámbito de una variable var es la función que la contiene en su totalidad:*/
function varTest() {
    var xVar = 1;
    {
        var xVar = 2; // Misma variable
        console.log("\nin block from function xVar = " + xVar);
    }
    console.log("in function xVar = " + xVar);
}

varTest();

function letTest() {
    let xLet = 1;
    {
        let xLet = 2;
        console.log("\nin block from function xLet = " + xLet);
    }

    console.log("in function xLet = " + xLet);
}

letTest();

// En el nivel superior de programas y funciones, let a diferencia de var, no crea una propiedad en el objeto global
var xVariable = "global";
let yVariable = "global";

console.log("\nxVariable = " + this.xVariable);
console.log("yVariable = " + this.yVariable);

//El siguiente código genera un ReferenceError en la línea mostrada:
function test() {
  var foo = 33;
  if (foo) {
    // let foo = foo + 55; // ReferenceError
  }
}
test();

/*Este fenómeno puede resultar confuso en una situación como la siguiente. La instrucción let n de n.a ya
está dentro del ámbito del bloque del bucle for...of. Por lo tanto, el identificador n.a se resuelve
como la propiedad a del objeto n, ubicada en la primera parte de la instrucción (let n). Esta aún se
encuentra en la zona muerta temporal, ya que su declaración no se ha alcanzado ni terminado.*/
function go(n) {
    // n aqui esta definido
    console.log("\n");
    console.log(n);

    // for (let n of n.a) {
    //     console.log(n); Reference error
    // }
}

go({a: [1,2,3]});

// Declaracion con desestructuracion
const result = /(a+)(b+)(c+)/.exec("aaabcc");
let [, a, b, c] = result;
console.log(a, b, c); // "aaa" "b" "cc"