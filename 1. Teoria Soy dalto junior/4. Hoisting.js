/*El hoisting es un comportamiento de Javascript deonde las declaraciones de variables y funciones son ¡elevadas¡ 
al inicio de su scope antes de ejecutar el coodigo

Estto significa que puedes usar variables y funciones antes de declararlas en tu codigo*/

//Las variables declaradas con let y const tambien son elevadas, pero NO se puede usar antes de su declaracion, esto se llama Temporall Dead Zone
 
//console.log(y); // La declaracion es elevada, pero no inicializada Error

let y = 20;

console.log(y)

// Las funciones declaradas con function se elevan completadas, por lo que puede llamarlas antes de declararlas
saludar();

function saludar() { // JavaScript mueve la funcion completa al inicio
    console.log('Hello');
}