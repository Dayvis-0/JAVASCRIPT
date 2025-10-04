/*Se refiere al proceso mediante el cuale el interprete parece mover la declaracion de funciones, variables, clases o importaciones
en la parte superior de su alcance, antes de la ejecucion del codigo*/

// Ejemplo de Temporal Dead Zone(TDZ)
const x = 1;
{
   // console.log(x);
   const x = 2;
}

/*Poder utiliza el valor de una variable en su alcance antes de la linea en la que se declara ("Elevacion
de valor"). La funcion completa es "elevada" con su implementacion, no solo su nombre.*/
console.log("Elevacion de valor: " + sum(2,3));

function sum(a,b) {
   return a + b;
}

/*Poder hacer referencia a una variable en su ambito antes de la linea en la que se declara, sin lanzar un
ReferenceError, pero el valor siempre es undefined. ("Elevación de declaración")*/
console.log("\nElevación de declaración"+ xVar);
var xVar = 10;
console.log(xVar);

/*La declaracion de la variable provoca cambios de comportamiento en su alcance antes de la linea 
en la que se declara.*/
// console.log(a); ReferenceError
let a = 5;

/*Los efectos secundarios de una declaracion se producen antes de evaluar el resto del codig que la contiene*/
var z = 1;

(function() {
   console.log("\n" + z);
   var z = 2;
   console.log(z);
})();

/*Es lo que se llama una IIFE (Immediately Invoked Function Expression) o función autoejecutable.
(function() {
  // código aislado aquí
})();

- Los paréntesis externos (function(){...}) le dicen a JS que eso no es una declaración de función 
  normal, sino una expresión de función.

- Los paréntesis finales () ejecutan inmediatamente esa función.

Todo lo que declares dentro del IIFE (car, let, const, funciones) vive solo ahi y no "ensucia" el ambito global*/