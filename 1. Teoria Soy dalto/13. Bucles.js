/* Los bucles permiten repetir una accion varias veces */

let nume = 1;

/* Mientras la condicion se cumpla se realizara lo que esta dentro del bloque */
console.log('\tWhile\n');
while (nume  <= 10) {
    //console.log(nume);
    
    if (nume == 5) {
        break
    };

    nume++;
};

/* Ejecuta al menos una vez*/
console.log('\tDo while\n');
do {
    //console.log(nume);
    nume++;
} while (nume <= 10);

/* Ejecuta para un numero fijo de repeticiones*/
console.log('\tFor creciente\n');
for (let i = 0; i <= 5;  i++) {
    //console.log(i);
};

console.log('\tFor decreciente\n');
for (let i = 10; i >= 1;  i--) {
    //console.log(i);
};

let colo  = ['black', 'yellow', 'green', 'red'];

/* Recorre directamente los valores de un array */
console.log('\tFor of con lista\n');
for (let color of colo) {
    //console.log(color);
};

let colo1 = {
    nomb: 'Dayvis',
    age: 19
};

/* Recorre las claves de un objeto, */
console.log('\tFor in con objeto\n');
for (let color in colo1) {
    //console.log(`${color}: ${colo1[color]}`);
};

console.log('\tFor in con lista\n');
for (let color in colo) {
    //console.log(`Me va a mostrar el indice cuando se usa lista: ${color}`);
};

let arr1 = ['Tres', 'Cuatro', 'Cinco'];
let arr2 = ['Uno', 'Dos', arr1];

for (let array in arr2) {
    if (array == 2) {
        for (let array1 of arr1) { 
            if (array1 == 'Cuatro'){
                continue;
            };
            //console.log(array1);
        };
    }
    else {
        //console.log(arr2[array]);
    };
};
