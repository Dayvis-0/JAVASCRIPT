/*Siempre que una variable se declara, pero no se inicializa no se le asigna un valor, se almacena como indefinida
Una funcion devuelve indefinida si no se devuelve ningún valor. Un método o una sentencia también devuevlen
indefinida si la variable que se evalúa no tiene valor asignado*/
function test(t) {
    if (t === undefined) {
        return "Undefined value!";
    }
    return t;
}

let x;

console.log(test(x));

var xyz;
if ("xyz" in window ) {
    console.log("Aaaaaaa");
} 