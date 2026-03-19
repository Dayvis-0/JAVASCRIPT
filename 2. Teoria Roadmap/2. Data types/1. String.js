/* El objeto String se utiliza para representar y manipular una secuencia de caracteres
Las cadenas se pueden crear como primitivas, a partir de cadenas literales o 
como objetos, utilizando el contructor String()*/

const string1 = "A string primitive";
const string2 = 'Also a string primitive';
const string3 = `Yet another string primitive`;
const string4 = new String("A string primitive");

/*Acceso a caracteres
Hay dos maneras de acceder a un carácter individual en una cadena. La primera es el 
método charAt():*/
console.log("cat".charAt(1));
// La otra forma es tratar la cadena como un objeto similar a una matriz, donde los 
// caracteres individuales corresponden a un indice numérico
console.log("cat"[1]); 

/*Comparación de cadenas
Utilic los operadores menor que y mayor que para comparar cadenas:*/
const a = "a";
const b = "b";
console.log('\n');
if (a < b) {
    console.log(`${a} is less than ${b}`);
} else if (a > b) {
    console.log(`${a} is greater than ${b}`);
} else {
    console.log(`${a} and ${b} are equal.`);
}

/*Tenga en cuenta que todos los operadores de comparación, incluidos === y ==, 
distinguen entre mayúsculas y minúsculas en las cadenas. Una fomra común de comparar 
cadenas sin distinción entre mayúsculas y minúsculas es convertir ambas a mayúsculas 
o minúsculas antes de compararlas*/

console.log('\n');
function areEqualCaseInsensivite(str1, str2) {
    return str1.toUpperCase() === str2.toUpperCase();
}

console.log(areEqualCaseInsensivite("asd", "ASd"));

const areEqualInUpperCase = (str1, str2) => 
    str1.toUpperCase() === str2.toUpperCase();

const areEqualInLowerCase = (str1, str2) => 
    str1.toLowerCase() === str2.toLowerCase();

console.log(areEqualInUpperCase("ß", "ss")); // true, deberia ser false
console.log(areEqualInUpperCase("ı", "I")); // false, deberia ser true

/*Una solución robusta y que tiene en cuenta la configuració regional para probar 
la igualdad sin distinción entre mayúsculas y minúsculas es utilizar la API 
Intl.Collator o el método localeCompare() de la cadena (comparten la misma interfaz) 
con la opción de sensibilidad establecida en "accent" o "base"*/

const areEqual = (str1, str2, locale = "en-US") =>
    str1.localeCompare(str2, locale, { sensitivity: "accent"}) === 0;

console.log("\n");
console.log(areEqual("ß", "ss", "de"));
console.log(areEqual("ı", "I", "tr"));

/*Primitivas de cadena y objetos de cadena
Tenga en cuenta que JS distingue entre objetos de cadena y valores de cadena primitivos. 
Las cadenas literales (indicadas mediante comillas dobles o simples) y las cadenas 
devueltas por llamadas a String en un contexto sin constructor (es decir, llamadas 
sin usar la palabra clave "new") son cadenas  primitivas. En contextos donde se invoca 
un método en una cadena primitiva o se busca una propiedad, JavaScript encapsulará 
automáticamente la cadena primitiva y llamará al método o realizará la búsqueda de 
la propiedad en el objeto contenedor.*/

const strPrim = "foo"; // Un literal is un string primitivo
const strPrim2 = String(1); // Forzando a entrar en la cadena primitiva "1"
const strPrim3 = String(true); // Forzando a entrar en la cadena primitiva "true"
const strObj = new String(strPrim); // La caden con new devuelve un objeto contenedor de cadena
console.log('\n');
console.log(typeof strPrim);
console.log(typeof strPrim2);
console.log(typeof strPrim3);
console.log(typeof strObj);
// Advertencia: rara vez deberías usar String como constructor.

/*Las primitivas de cadena y los objetos String también generan resultados diferentes 
al usar eval(). las  primitivas pasadas a eval se tratan como código fuente; los objetos 
String se tratan como todos los demás objetos, devolviendo el objeto. Por ejemplo:*/

const s1 = "2 + 2"; // Crea una cadena primitiva
const s2 = new String("2 + 2"); // Crea un objeto String 
console.log('\n'); 
console.log(eval(s1));
console.log(eval(s2));
console.log(eval(s2.valueOf()));

/*Coerción
Significa que JS convierte automáticamente un tipo de dato en otro cuando una operación 
lo necesita*/

console.log('\n');
console.log(String("hola"));
console.log(String(undefined));
console.log(String(null));
console.log(String(true));
console.log(String(123));
console.log(String(-5.5));
console.log(String(1e3));
console.log(String(NaN));
console.log(String(Infinity));
console.log(String(123n));
console.log(String(Symbol("id")));
// const symbolStr = "Hola " + Symbol("id") TypeError; 
const obj = { a:1 };
console.log(String(obj));
const obj1 = {
    valueOf() { return 42; },
    toString() { return{}; }
};
console.log(String(obj1));
const obj2 = {
    toString() { return{}; },
    valueOf() { return 42; }
};
console.log(String(obj2));
/*
String(obj) - toString() → valueOf() - "[object Object]"
Number(obj)	- valueOf() → toString() - 42*/
console.log(`${123}`);
console.log(`${true}`);
const obj3 = { toString() { return "objeto"; }};
console.log(`${obj3}`);
console.log("" + 123);

/*Caracteres UTF-16, puntos de código Unicode y grupos de grafemas*/
console.log("\n");
console.log("😄".split(""));
console.log('😄');
/* Operador spread ... -> Sirve para expandir o distribuir los elementos de un objeto 
iterable, como un arreglo o una cadena en lugares donde se esperan multiples elementos*/ 
console.log([..."👉🏿"]); 

/* Metodos estaticos
Devuelve una cadena creada a partir de la secuencia especidificada de unidades de 
código UTF-16*/
console.log("\n");
console.log(String.fromCharCode(189, 43, 190, 61));
//Devuelve una candena creada a partir de la secuencia especificada de puntos de código
console.log(String.fromCodePoint(9731, 9733, 9842, 0x2f804));
// Devuelve una cadena creada a partir de una cadena de plantilla sin procesar
console.log(String.raw`HI\n${1+1}!`);

/*Propiedades de instancia
Refleja la longitud de la cadena. Solo lectura*/
const str5 = "Life, the universe and everthing. Answer: ";
console.log(`${str5} ${str5.length}`);

/*Metodos de instancia

Devuelve el carácter (examctamente una unidad de codigo UTF-16) en el indice especificado. 
Acepta enteros negativos, que contengan hacia atrás desde el último carácter de la cadena*/
console.log("\n");
const sentence = "The quick browm fox jumps over the lazy dog.";
console.log(`An index of -1 returns the character ${sentence.at(-1)}`)
// Devuelve el cáracter (exactamente una unidad de codigo UTF-16) en el indice especificado 
// solo acepta indices positivos
console.log(`The character at index 1 is ${sentence.charAt(1)}`);
// Devuelve un número que es el valor de la unidad de código UTF-16 en el indice dado
console.log(`Character  code ${sentence.charCodeAt(5)} is equal to ${sentence.charAt(5)}`);
// Devuelve un número entero no negativo que es el valor del punto de código codificado 
// en UTF-16 que comienza en la posición especificada
const icons = "☃★♲";
console.log(icons.codePointAt(1));
// Combina el texto de dos (o más) cadenas y devuelve una nueva cadena
const stri1 = "Hello";
const stri2 = "World";
console.log(stri1.concat(" ", stri2));
// Determina si una cadena termina con los caracteres de la cadena searchString
const strin1 = "Cats are the best";
console.log("Cats are the best" + strin1.endsWith("best"));
console.log("Cats are the best" + strin1.endsWith("best", 15));
// Determina si la cadena de llamada contiene searchString
const sentence1 = "The quick brown fox jumps over the lazy dog.";
const word = "fox";
console.log(
    `The word "${word}" ${
        sentence.includes(word) ? "is" : "is not"
    } in the sentence`,
)
