/* Scope o (ambito) es el contexto dende una variable es accesible en el codigo. Define en que parte de codigo se puede usar una variable*/

// Tipos de scope:

//Global
let glo = 'Estoy en el scope global';

function mostGlo() {
    console.log(glo); // Accede a la variable global
}

mostGlo(); 

console.log(glo) // Tambien accede a la variable global

function funEje() {
    let varia = 'Estoy en la funcion'; // Funciona aqui
    console.log(varia)
}

funEje();

if (true) {
    let n1 = 11; // Solo funciona aqui 
    console.log(n1)
}
