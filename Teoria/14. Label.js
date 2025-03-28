/* Un label es un identificador que puedes asignar a un bucle (for, while, do while).
Se junta con break o continue para controlar multiples bucles anidados*/

let n1 = ['Tres', 'Cuatro', 'Cinco'] ;
let n2 = ['Uno', 'Dos', n1, 'Seis'] ;

for1:
for (let j in n2) {
    if (j == 2) {
        for (let k of n1 ) {
            if (k == 'Tres') {
                continue for1;
            };
            console.log(k);
        };
    }
    else {
        console.log(n2[j]);
    };
};