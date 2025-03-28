// Una funion es un bloque de codigo que realiza una tarea en especifica

function salu() {
    console.log('Hola que tal');
};

function salu2(nose){
    console.log(`Hola ${nose}, que tal?`);
}

function sumas(n, n1) {
    return n, n1;
}

//let nomb = prompt('Cual es su nombre');

//if (nomb != '') {
//    salu2(nomb);
//}
//else {
//    salu();
//};

// let suma = sumas(1,2);

// document.write(suma);

// Funcion flecha es un forma ams corta de escribit funciones
// Ventajas: si solo se usa un parametro no es necesario usar parentesis
// Venataj: si el codigo hace una sola linea se puede eliminar los corchetes  

const nomb = (nom) => {
    console.log(`Hola ${nom}`)
};

nomb('Dayvis');