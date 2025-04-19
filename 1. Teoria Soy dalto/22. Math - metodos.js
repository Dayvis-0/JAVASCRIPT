let n1, n2, n3, n4, n5, n6, n7, n8, n9;

n1 = Math.sqrt(100);
n2 = Math.cbrt(27);
n3 = Math.max(1,3,200);
n4 = Math.min(1,3,5);
n5 = Math.random();
n6 = Math.round(3.9);
n7 = Math.fround(3.9); // Devuelve la representacion flotante de precision mas cercano de un numero
n8 = Math.floor(9.9); // Devuelve el mayor entero menor o que o igual a un numero
n9 = Math.trunc(9.9999); // Devuelve la parte entera del numero

console.log(`La raiz cuadrada es: ${n1}La raiz cuubica es: ${n2}\nEl mayor es: ${n3}\nEl menor es: ${n4}
Un numero random: ${n5}\nNumero rendondeado: ${n6}\nRepresentacion flotante de presicion mas cercano: ${n7}
Maximo entero manor o igual a: ${n7}\nMayor entero menor que o igual es: ${n8}\nParte entera del numero: ${n9}`)