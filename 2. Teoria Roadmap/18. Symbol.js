/*Un symbol es un objeto integrado cuyo constructor devuelve una primitiva de simbolo (también llamada valor de
simbolo o simplemente un simbolo) que garantiza su singularidad. Los simbolos se utilizan a menudo para añadir
claves de propiedad únicas a un objeto que no entren en conflicto con las claves que cualquier otro código podria
añadirle y que estén ocultas a cualquier mecanismo que otro código utilice habitualmente para acceder al objeto.
Esto permite una forma de encapsulación debil, o una forma débil de ocultación de información.*/
const sym1 = Symbol(); 
const sym2 = Symbol("foo"); 
const sym3 = Symbol("foo"); 
console.log(sym1); 
console.log(sym2); 
console.log(sym3); 

/*El método Symbol.for(tokenString) toma una clave de cadena y devuelve un valor de simbolo de registro, mientras
que Symbol.keyFor(symbolValue) toma un valor de simbolo y devuelve la clave de cadena correspondiente. Cada
uno es el inverso del otro, por lo que se cumple lo siguiente.*/
console.log("\n");
console.log(`Symbol.keyFor(Symbol.for("tokenString")) === "tokenString" -> ${Symbol.keyFor(Symbol.for("tokenString")) === "tokenString"}`)

/*Propiedades estáticas
Son simbolos conocidos. En la descripción de estos simbolos, usaremos un lenguaje como "Symbol.hasInstance es un 
metodo que determina...", pero tenga en cuenta que esto se refiere a la semántica del método de un objeto que 
tiene este simbolo como nombre (ya que los simbolos conocidos actúan como "protocolos"), no al valor del simbolo en si
Un método que elimina recurso del objeto de forma asincrona cuando este queda fuera del ámbito. Se utiliza 
la declaración "await using"*/


