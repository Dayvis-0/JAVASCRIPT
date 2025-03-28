/* Que es un paradigma?
Es un enfoque fundamental o estilo de programacino que define como loos desarrolladores conceptualizan 
y estructuran su codigo para resolver problemas*/

/* Que es POO?
Es un paradigma de progamacion  queparte del concepto de objetos como base los cuales contienen informacion en forma
de campos y codigos en forma de mmetodos  */


class Animal {
    constructor (especie, edad, color) {
        //Propiedades
        this.especie = especie; 
        this.edad = edad;
        this.color = color;
        this.info = `Soy un ${this.especie} tengo ${this.edad} años y soy  de color ${this.color}`;
    };

    salu () {
        if (this.especie == 'Perro') {
            return 'Guau';
        };

        if (this.especie == 'Gato') {
            return 'Miau';
        };
    };

    verInfo () {
        return this.info;
    };

};


let perro = new Animal('Perro', 2, 'Blanco');
let gato = new Animal('Gato', 3, 'Negro');

console.log(perro.salu());
console.log(gato.salu());
console.log(perro.verInfo());
console.log(gato.verInfo());