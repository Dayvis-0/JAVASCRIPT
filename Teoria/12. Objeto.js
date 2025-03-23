/* Objetos {clave:valor} 
Se pueden acceder a los valores con objeto["clave"] o objeto.clave*/

let persona = {
    nomb: 'Dayvis',
    age: 19,
    ciudad: 'Apurimac'
};

console.log(`El nombre de la persona es: ${persona.nomb}
Tiene: ${persona.age} años
Vive en ${persona["ciudad"]}`);