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

Para escapar de una comilla invertida en un literal de plantilla, coloque una barra invertida (\) antes de la comilla invertida*/
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
