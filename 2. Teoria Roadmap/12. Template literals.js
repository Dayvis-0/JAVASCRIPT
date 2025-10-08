/*Los literales de plantilla son literales delimitados con caracteres de comillas invertidas (`), lo que  permite cadenas 
de varias lineas, interpolación de cadenas con expresiones integradas y construcciones especiales llamadas plantillas 
etiquetadas.
Los literales de plantilla a veces se denominan informalemente cadenas de plantilla, ya que se utilizan principalmente 
para la interpolacion de cadenas (para crear mediante cadenas la sustitución de marcadores de posición). Sin embarg, un 
literal de plantilla de etiquetado no puede generar una cadena; se puede usar con una función de etiqueta personalizada
para realizar las operaciones que se deseeen en las diferentes parte del literal de plantilla.
Sintaxis:
`string text`

`string text line 1`
`string text line 2`

`string text ${expression} string text`

tagFunction`string text ${expression} string text`

Para escapar de una comilla invertida en un literal de plantilla, coloque una barra invertida (\) antes de la 
comilla invertida. Escapar un carácter significa decirle al lenguaje que no lo interprete con su signiificado 
habitual, sino que lo trate como un texto literal*/
if (`\`` === "`") {
    console.log(true);
}
// Los signos de dólar también se puede escapar para evitar la interpolación
if (`\${1}` === "${1}") {
    console.log("\n");  
    console.log(true);
}

/*Cadenas de varias lineas
Cualquier carácter de nueva linea insertado en la fuente es parte del literal de plantilla
Usando literales de plantilla, puedes hacer una cadena de varias lineas con esto*/
console.log("\n");
console.log(`string text line 1
string text line 2`);
/*Al igual que los literales de cadena normales, puede escribir una cadena de una sola linea en varias lineas para facilitar
la lectura del código fuente, escapando la nueva linea con una barra invertida (\)*/
console.log("\n");
console.log(`string terxt line 1 \ 
string terxt line 2`);

/*Interpolación de cadenas
Con los literales de plantilla, puede evitar el operador de concatenación (y mejorar la legibilidad de su código) al usar 
marcadores de posición con el formato $[expresion} para realizar sustituciones para expresiones integradas.*/
const a = 5;
const b = 10;
console.log(`
Fifteen is ${a + b} and not ${2 * a + b}`);


/*Plantillas de anidamiento
En ciertos casos, anidar una plantilla es la forma mas sencilla (y quizás más legible) de tener cadenas  
configurables. Dentro de una plantilla delimitada por comillas invertidas, es sencillo permitir comillas
invertidas internas usándolas dentro de un marcador de poosición ${expresion} dentro de una plantilla.
Por ejemplo, sin literales de plantilla, si quisiera devolver un valor predeterminado en función
de una condición particular, podria hacer lo siguiente*/
function isLargeScreen() { return false; }
const item =  {
    isCollapsed: true
};
let classes1 = "header";
classes1 += isLargeScreen()
    ? ""
    : item.isCollapsed
      ? " icon-expander"
      : " icon-expander";

// Con una plantilla literal pero sin anidación podrias hacer esto:
 const classes2 = `header ${
    isLargeScreen() ? "" : item.isCollapsed ? "icon-expander" : "icon collapser"
}`;

// Con la anidación de literales de plantilla puedes hacer esto:
const classes3 = `header ${
    isLargeScreen() ? "" : `icon - ${item.isCollapsed ? "expander" : "collapser"}`
}`;

console.log('\n' + classes3);

/*Plantillas etiquetadas
Una forma mas avanzada de literales de plantilla son las plantillas etiquetadas. Las etiquetas permiten analizar 
literales de plantilla con función. El primer argumento de una función de etiqueta contiene una matriz de 
valores de cadena. Los demas argumentos estan relacionados con las expresiones. El nombre de la función
utilizada para la etiqueta puede ser el que desees*/
const person = "Mike";
const age = 28;

function myTag(strings, personExp, ageExp) {
    const str0 = strings[0]; // "That"
    const str1 = strings[1]; // " is a "
    const str2 = strings[2]; // "."

    const ageStr = ageExp < 100 ? "youngster" : "centenarian"; 

    // Incluso podemos devolver una cadena construida usando un literal de plantilla
    return `${str0}${personExp}${str1}${ageStr}${str2}`;
}

const outoupt = myTag`That ${person} is a ${age}.`;
console.log('\n' + outoupt);

/*La etiqueta no tiene que ser un identificador simple. Puede usar cualquier exppresión con precedencia mayor a 16,
lo que concluye acceso a propiedades, llamadas a funciones, nuevas expresiones o incluso otro literal de plantilla*/
console.log("\n");
console.log`Hello`;
console.log.bind(1,2)`Hello`;
new Function("console.log(arguments)")`Hello`;

function recursive(strings, ...values) {
    console.log(strings, values);
    return recursive;
}

recursive`Hello``World`;

// Las funciones de etiqueta ni siquiera necesitan devolver una cadena
function template(strings, ...keys) {
    return (...values) => {
        const dict = values[values.length - 1] || {};
        const result = [strings[0]];
        keys.forEach((key, i) => {
            const value = Number.isInteger(key) ? values[key] : dict[key];
            result.push(value, strings[i + 1]);
        });
        return result.join("");
    };
}

const t1Closure = template`${0}${1}${2}!`;
t1Closure("Y", "A");

console.log('\n');
console.log(t1Closure);