//array.map((elemento, índice, arrayOriginal) => {
// tu lógica aquí
//}) Forma de la funcion para map y filter

// (previousValue, currentValue, currentIndex, array) => { ... } forma de funcion para reduce

const nume = [1, 2, 3, 4, 5, 1], salu = ['H', 'o', 'l', 'a'];
const personas = [
    {nombre: 'Dayvis', edad: 15},
    {nombre: 'Maria', edad: 19}
];

// .slice(inicio, fin) -  cortar | Devuelve una copia parcial del array
const most = nume.slice(2, 3);

// .map(funcion) | Devuelve nuevo array con valore modificados 
const most1 = nume.map(x => x * 2);

const most2 = nume.map((valor, i, arrayOriginal) => {
    //console.log(`valor: ${valor}, indice: ${i}, array: ${arrayOriginal}`)
});

// .filter(funcion) - filtrar | Devuelve elementos que complan la condicion
const most3 = nume.filter(x => (x & 1) === 0);
const most4 = nume.filter((valor, i, arrayOriginal) => {
    //console.log(`valor: ${valor}, indice: ${i}, array: ${arrayOriginal}`)
});
const most5 = personas.filter(p => p.edad > 18);

// .reduce(funcion, valorInicial) - reducir | Reeduce el array a un solo valor 
const most6 = nume.reduce((acum, val) => acum + val, 0);
const most7 = salu.reduce((acum, val) => acum + val, '');
const most8 = salu.reduce((acc, letra) => {
    acc[letra] = (acc[letra] || 0), + 1;
    return acc
}, {});

// .forEach(funcion) | Ejecuta funcion para cada elemento (sin retorno)
const most9 = nume.forEach((num) => {
//    console.log(num)
});
const most10 = salu.forEach((valor, indice) => {
    //console.log(`indice: ${indice}, valor ${valor}`)
});

// .find(funcion) -  encontrar | Devuelve el primer elemento que cumpla la condicion
const most11 = nume.find((num) => num > 3);
const most12 = personas.find((persona) => persona.nombre === 'Maria'); 

// .findIndex(funcion) | Devuelve el indice del primer elemento valido
const most13 = nume.findIndex((num) => num > 3);

// .some(funcion) - alguno | true si al menos uno comple la condicion
const most14 = nume.some((nume) => nume === 1);
const most15 = nume.some((nume) => nume === 10);

// .every(funcion) - cada | true si todos cumplen la condicion
const most16 = nume.every((nume) => typeof nume === 'number');
const most17 = nume.every((nume) => (nume & 1) == 0);

// .includes(valor, desde) - incluye | Verifica si esta presente
const most18 = nume.includes(3);
const most19 = nume.includes(3,3);

// .indexOf(valor, desde) - indice de | Primer indice del valor
const most20 = nume.indexOf(1);
const most21 = nume.indexOf(1, 1);

// .LastindexOf(valor, desde) - ultimo indice de | Ultimo indice del valor
const most22 = nume.lastIndexOf(1); 
const most23 = nume.lastIndexOf(1, -2); 

// .join(separador) - unirse | Une los elementos de un string
const salu1 = salu.join(' <-> ')

// .concat(arr1, arr2, ...) - concatenacion | Devuelve un nuevo array unido
const arr2 = [6, 7, 8];
const most24 = nume.concat(arr2);

// .flat(profunidad) - plano | Aplana arrays anidados
const arrapla = [1,[2,[3,[4]]]];
const most25 = arrapla.flat(Infinity); 

console.log(most25);