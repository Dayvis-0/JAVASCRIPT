/*La declaracion const declara variables locales con alcance de bloque. El valor de una constante no se 
puede cambiar mediante la reasignación mediante el operador de asignación, pero si una constante
es un objeto, sus propiedades se pueden agregar, actualiza o eliminar.
Las declaraciones const tienen como alcance tanto los bloques como las funciones
Sintaxis:
const name1 = value1;
const name1 = value1, name2 = value2;
const name1 = value1, name2 = value2, /.../ nameN = valueN;*/
const number = 42;

try {
    number = 49;
} catch (err) {
    console.log(err);
}

/*Una const inicia declaraciones, no sentencias. Esto significa que no se puede usar una sola declaracion
const como cuerpo de un bloque (lo cual tiene sentido, ya que no hay forma de acceder a la variable)*/
console.log(number);
// if (true) const a = 1; Error

/*Se requiere un inicializador para una const. Debe especificar su valor en la misma declaracion, (Esto
tiene sentido, ya que no se puede modificar posteriormente.*/
// constt FOO;

/*Las constantes se pueden declarar con mayusculas o minusculas, pero una convencion comun es utilizar
todas las letras mayusculas, especialmente para las primitivas por que son verdaderamente inmutables.*/
const MY_FAV = 7;

console.log(`\nmy favorite  number is: ${MY_FAV}`);

// Alcance de bloque 
const MY_FAV_ONE = 7;

if (MY_FAV_ONE === 7) {
    const MY_FAV_ONE = 20;
    console.log(MY_FAV_ONE);

    // var MY_FAV_ONE = 20; SyntaxError
}

console.log(MY_FAV_ONE);

/*const tambien funciona con objetos, matrices y arrays. Intentar sobrescribir el objeto genera el error 
"Asignacion a variable constante"*/
const MY_OBJECT = { key: "value"};
// MY_OBJECT = { OTHER_KEY: "value"};
// Sin embargo, las claves de objeto no estan protegidas, por lo que la siguiente declaracion ejecuta sin problemas
MY_OBJECT.key = "otherValue";
console.log("\n");
console.log(MY_OBJECT);
// Necesitas usar Object.freeze() para hacer que un objeto sea inmutable 

// Declaracion con desestructuracion
const result = /(a+)(b+)(c+)/.exec("aaabcc");
const [, a, b, c] = result;
console.log("\n" + a, b, c); 