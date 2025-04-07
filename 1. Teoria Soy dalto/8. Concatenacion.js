let nomb1, fra1, tex1, tex2, edad, mensa1, mensa2;
let n1, n2, frase, fra2, fra3, mensa, nomb, mensa10;

nomb = 'Dayvis';
nomb1 = 'Maria';
fra1 = 'Hello '
tex1 = 'Hola ';
tex2 = 'Mundo';
edad = 19;
n1 = 1;
n2 = 100;

frase = 'Hola '+ nomb + '!'; // Usar el signo + para concatenarr dos strings
fra1 += nomb1; // Usando += para agregar texto a una variable existente
fra2 = tex1.concat(tex2); // Usando el metodo concat para concatenar un texto a otro
fra3 = '' + n1 + n2;

// Usando backticks
mensa =  `Hola, mi nommbre es ${nomb} y tengo ${edad} años`;
mensa1 = `Soy '${nomb}'
y estoy programando en "JavaScript"
Siuuuuu`; /* Para escribir en muchas lineas en JS, pero solo mostrar en una linea en HTML*/

mensa2 = `
    <div>
        <h1>Good</h1>
    </div>
`; /*Tambien se puede esccibir codigo HTML dentro del backtick*/

mensa10 = 'Jeje';

console.log(frase);
console.log(fra1);
console.log(fra2);
console.log(mensa);
console.log(fra3);
console.log(mensa1);
document.write(mensa1);
document.write(mensa2);
console.log(mensa10)