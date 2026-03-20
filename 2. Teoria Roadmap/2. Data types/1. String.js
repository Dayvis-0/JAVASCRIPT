/* El objeto String se utiliza para representar y manipular una secuencia de caracteres

Las cadenas se pueden crear como primitivas, a partir de cadenas literales o 
como objetos, utilizando el contructor String()*/
console.log("Creando strings");
const string1 = "A string primitive";
const string2 = 'Also a string primitive';
const string3 = `Yet another string primitive`;
const string4 = new String("A string primitive");

/*Acceso a caracteres

Hay dos maneras de acceder a un carácter individual en una cadena. La primera es el 
método charAt():*/
console.log("Acceso a caracteres");
console.log("cat  - charAt(1) = " + "cat".charAt(1));

/* La otra forma es tratar la cadena como un objeto similar a una matriz, donde los 
caracteres individuales corresponden a un indice numérico */
console.log("cat - \"cat\"[1] = " + "cat"[1]); 

/*Comparación de cadenas
Utilice los operadores menor que y mayor que para comparar cadenas:*/
console.log("\nComparación de cadenas");
const a = "a";
const b = "b";
if (a < b) {
    console.log(`${a} is less than ${b}`);
} else if (a > b) {
    console.log(`${a} is greater than ${b}`);
} else {
    console.log(`${a} and ${b} are equal.`);
}

/*Tenga en cuenta que todos los operadores de comparación, incluidos === y ==, 
distinguen entre mayúsculas y minúsculas en las cadenas. Una forma común de comparar 
cadenas sin distinción entre mayúsculas y minúsculas es convertir ambas a mayúsculas 
o minúsculas antes de compararlas.*/

function areEqualCaseInsensivite(str1, str2) {
    return str1.toUpperCase() === str2.toUpperCase();
}

console.log("asd.toUpperCase() === ASd.toUpperCase() = " + areEqualCaseInsensivite("asd", "ASd"));

const areEqualInUpperCase = (str1, str2) => 
    str1.toUpperCase() === str2.toUpperCase();

const areEqualInLowerCase = (str1, str2) => 
    str1.toLowerCase() === str2.toLowerCase();

console.log("ß.toUpperCase() === ss.toUpperCase() = " + areEqualInUpperCase("ß", "ss")); // true, deberia ser false
console.log("ı.toLowerCase() === I.toLowerCase() = " + areEqualInUpperCase("ı", "I")); // false, deberia ser true

/*Una solución robusta y que tiene en cuenta la configuració regional para probar 
la igualdad sin distinción entre mayúsculas y minúsculas es utilizar la API 
Intl.Collator o el método localeCompare() de la cadena (comparten la misma interfaz) 
con la opción de sensibilidad establecida en "accent" o "base"*/

const areEqual = (str1, str2, locale = "en-US") =>
    str1.localeCompare(str2, locale, { sensitivity: "accent"}) === 0;

console.log("\"ß\".localeCompare(\"ss\", \"de\", { sensitivity: \"accent\"}) === 0 = " + areEqual("ß", "ss", "de"));
console.log("\"ı\".localeCompare(\"I\", \"tr\", { sensitivity: \"accent\"}) === 0 = " + areEqual("ı", "I", "tr"));

/*Primitivas de cadena y objetos de cadena
Tenga en cuenta que JS distingue entre objetos de cadena y valores de cadena primitivos. 
Las cadenas literales (indicadas mediante comillas dobles o simples) y las cadenas 
devueltas por llamadas a String en un contexto sin constructor (es decir, llamadas 
sin usar la palabra clave "new") son cadenas  primitivas. En contextos donde se invoca 
un método en una cadena primitiva o se busca una propiedad, JavaScript encapsulará 
automáticamente la cadena primitiva y llamará al método o realizará la búsqueda de 
la propiedad en el objeto contenedor.*/

console.log('\nPrimitivas de cadena y objetos de cadena');
const strPrim = "foo"; // Un literal is un string primitivo
const strPrim2 = String(1); // Forzando a entrar en la cadena primitiva "1"
const strPrim3 = String(true); // Forzando a entrar en la cadena primitiva "true"
const strObj = new String(strPrim); // La caden con new devuelve un objeto contenedor de cadena
console.log("strPrim = \"foo\" - typeof = " + typeof strPrim);
console.log("strPrim2 = String(1) - typeof = " + typeof strPrim2);
console.log("strPrim3 = String(true) - typeof = " + typeof strPrim3);
console.log("strPrim = new String(strPrim) - typeof = " + typeof strObj);
/* Advertencia: rara vez deberías usar String como constructor.

Las primitivas de cadena y los objetos String también generan resultados diferentes 
al usar eval(). las  primitivas pasadas a eval se tratan como código fuente; los objetos 
String se tratan como todos los demás objetos, devolviendo el objeto. Por ejemplo:*/

const s1 = "2 + 2"; // Crea una cadena primitiva
const s2 = new String("2 + 2"); // Crea un objeto String 
console.log("eval(\"2 + 2\") = " + eval(s1));
console.log("eval(new String(\"2 + 2\")) = " + eval(s2));
console.log("eval(new String(\"2 + 2\").valueOf()) = " + eval(s2.valueOf()));

/*Coerción
Significa que JS convierte automáticamente un tipo de dato en otro cuando una operación 
lo necesita.*/

console.log('\nCoerción');
console.log("String(\"hola\") = " + String("hola") + " | typeof = " + typeof String("hola"));
console.log("String(undefined) = " + String(undefined) + " | typeof = " + typeof String(undefined));
console.log("String(null) = " + String(null) + " | typeof = " + typeof String(null));
console.log("String(true) = " + String(true) + " | typeof = " + typeof String(true));
console.log("String(123) = " + String(123) + " | typeof = " + typeof String(123));
console.log("String(-5.5) = " + String(-5.5) + " | typeof = " + typeof String(-5.5));
console.log("String(1e3) = " + String(1e3) + " | typeof = " + typeof String(1e3));
console.log("String(NaN) = " + String(NaN) + " | typeof = " + typeof String(NaN));
console.log("String(Infinity) = " + String(Infinity) + " | typeof = " + typeof String(Infinity));
console.log("String(123n) = " + String(123n) + " | typeof = " + typeof String(123n));
console.log("String(Symbol(\"id\")) = " + String(Symbol("id")) + " | typeof = " + typeof String(Symbol("id")));
// const symbolStr = "Hola " + Symbol("id") TypeError; 
const obj = { a:1 };

console.log("String({ a:1 }) = " + String(obj));

const obj1 = {
    valueOf() { return 42; },
    toString() { return{}; }
};

console.log("String(obj1) = " + String(obj1));

const obj2 = {
    toString() { return{}; },
    valueOf() { return 42; }
};
console.log("String(obj2) = " + String(obj2));
/*
String(obj) - toString() → valueOf() - "[object Object]"
Number(obj)	- valueOf() → toString() - 42*/
console.log(`${123}`);
console.log(`${true}`);
const obj3 = { toString() { return "objeto"; }};
console.log(`${obj3}`);
console.log("" + 123);

/*Caracteres UTF-16, puntos de código Unicode y grupos de grafemas*/
console.log("\nCaracteres UTF-16, puntos de código Unicode y grupos de grafemas");
console.log("😄".split(""));
console.log('😄');
/* Operador spread ... -> Sirve para expandir o distribuir los elementos de un objeto 
iterable, como un arreglo o una cadena en lugares donde se esperan multiples elementos*/ 
console.log([..."👉🏿"]); 

console.log("\nMetodos estaticos");
/* Metodos estaticos
Devuelve una cadena creada a partir de la secuencia especidificada de unidades de 
código UTF-16*/
console.log("String.fromCharCode(189, 43, 190, 61) = " + String.fromCharCode(189, 43, 190, 61));

//Devuelve una candena creada a partir de la secuencia especificada de puntos de código
console.log("String.fromCodePoint(9731, 9733, 9842, 0x2f804) = " + String.fromCodePoint(9731, 9733, 9842, 0x2f804));

// Devuelve una cadena creada a partir de una cadena de plantilla sin procesar
console.log("String.raw`HI\\n${1+1}!` = "+ String.raw`HI\n${1+1}!`);

console.log("\nPropiedades de instancia");
/*Propiedades de instancia
Refleja la longitud de la cadena. Solo lectura*/
const str5 = "Life, the universe and everthing. Answer: ";
console.log(`${str5} ${str5.length}`);

/*Métodos de instancia

Devuelve el carácter (exactamente una unidad de codigo UTF-16) en el indice especificado. 
Acepta enteros negativos, que contengan hacia atrás desde el último carácter de la cadena.*/
console.log("\nMétodos de instancia");
const sentence = "The quick browm fox jumps over the lazy dog.";
console.log(`An index of -1 returns the character ${sentence.at(-1)}`);

// Devuelve el cáracter (exactamente una unidad de codigo UTF-16) en el indice especificado 
// solo acepta indices positivos
console.log(`The character at index 1 is ${sentence.charAt(1)}`);

// Devuelve un número que es el valor de la unidad de código UTF-16 en el indice dado
console.log(`Character code ${sentence.charCodeAt(5)} is equal to ${sentence.charAt(5)}`);

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

/*El método split() de los valores String toma un patrón y divide esta cadena en 
una lista ordenada de subcadenas buscando el patrón, coloca estas subcadenas en 
un array y devuelve el array.*/
const splitEx = "2026-03-26".split("-");
console.log("split - \"2026-03-26\".split(\"-\");");
console.log(splitEx);

/*El método trim() de los valores String elimina los espacios en blanco de ambos
extremos de esta cadena y devuelve una nueva cadena, sin modificar la cadena original.*/
const trimEx = "  Hello  ";
console.log("trim - \"  Hello  \".trim();");
console.log(trimEx.trim());

/*El método includes() de los valores String realiza una búsqueda que distingue entre 
mayúsculas y minúsculas para determinar si una cadena dada se puede encontrar dentro 
de esa cadena, devolviendo verdadero o falso según corresponda.*/
const includesEx = "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes";
console.log("includes - \"https://developer.mozilla.org\".includes(\"https\");");
console.log(includesEx.includes("https"));

/*El método replace() de los valores String devuelve una cadena con una, algunas o todas 
las coincidencias de un patrón reemplazadas por un reemplazo. 

El patrón puede ser una cadena de texto o una expresión regular, y el reemplazo puede 
ser una cadena de texto o una función que se ejecuta para cada coincidencia.*/

const paragraph = "I think Ruth's dog is cuter than your dog!";
console.log("replace - \"I think Ruth's dog is cuter than your dog!\".replace(\"Ruth's\", \"my\");");
console.log(paragraph.replace("Ruth's", "my"));

const regex = /dog/i;
console.log(paragraph.replace(regex, "ferret"));


/**/
