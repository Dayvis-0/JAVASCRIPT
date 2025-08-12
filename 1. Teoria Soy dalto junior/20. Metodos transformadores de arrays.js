const nume = [1,2,3], nume1 = [1,2,3], nume2 = [1,2,3], nume3 = [1,2,3], nume4 = [1,2,3];
const nume5 = [1,2,3], nume6 = [1,2,3], nume7 = [3,2,1], nume8 = [1,2,3], nume9 = [1,2,3], nume10 = [1,2,3];

// .push(element2, element2...) | Agrega elementos al final del array
nume.push(4); 

// .pop() - | Elimina y devuelve el ultimo elemento de un 
const most1 = nume1.pop();

// .shift() - cambio de posion | Elimina y devuelve el primer elemento
const most2 = nume2.shift();

// .unshift(element1, element2...) | Agregar elementos al inicio de un array, y devuelve la nueva longitud del array
const most3 = nume3.unshift(0);

// .splice(inicio, cantidad-eliminar, element1, ....) - empalme | Agrega, reemplaza o elimina elementos
nume4.splice(0, 0, 0);
nume5.splice(-1, 0, 4, 5); // Cuando de agrega el final, el elemento que estaba en el final se mueve al final

// .sort(funcion de comparacion) - ordenar | Ordenar los elementos
const most4 = nume6.sort();
const most5 = nume7.sort((a, b) => a - b);

// .reverse() -invertido | Invierte el orden
const most6 = nume8.reverse();

// .fill(valor, inicio, fin) - llenar | Rellena el array con un valor
const most7 = nume9.fill(100);

// .copyWithin(destino, inicio, fin) - copiar con en | Copia una parte del array dentro del mismo 
const most8 = nume10.copyWithin(0, 2);

console.log(most8);