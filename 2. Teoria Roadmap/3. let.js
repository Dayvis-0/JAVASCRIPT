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
