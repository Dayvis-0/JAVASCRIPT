/* Abstraccion 
Consiste en ocultar los detalles inncesarios y solo mostrar lo esencial de un objeto*/

// Importacion para modularidad | Ejemplo Definir una clases en archivos diferentes para organizarlas mejor
// import { Persona } from './Persona.js';     

class Choche {
    constructor (marca, modelo) {
        this.marca = marca;
        this.modelo =modelo;
    }

    arranca() {
        console.log(`${this.marca}, ${this.modelo} ha arrancado.`);
    }   

    frenar() {
        console.log(`${this.marca}, ${this.modelo} ha frenado.`)
    }
};

const micoche = new Choche('Toyota', 'Corolla');

micoche.arranca();
micoche.frenar();

// Se ve que oculta detalles como el sistema de encendido o la combustion

/* Modularidad 
Consiste en dividir el codigo en partes reutilizables e independientes*/

// const per1 = new Persona('Dayvis', 19);
// const per2 = new Persona('Maria', 20);

// per1.saludar();
// per2.saludar();

/* Polimorfismo
Es la capacidad de que diferentes clases tengan metodos con el mismo nombre, pero con comportamientos distintos*/

class Animal {
    hacerSonido() {
        console.log('Sonido generico');
    }
};

class Perro extends Animal {
    hacerSonido() {
        console.log('Guau');
    }
};

class Gato extends Animal {
    hacerSonido() {
        console.log('Miau')
    }
};

const animales = [new Perro(), new Gato(), new Animal()];

animales.forEach(anima => anima.hacerSonido());

/* Encapsulamiento 
Se refiere a restringir el acceso a ciertas propiedades o metodos usando modificadores de acceso */

class CuentaBancaria {
    #saldo;

    constructor (saldoini) {
        this.#saldo = saldoini;
    }

    verSaldo() {
        return this.#saldo;
    }
};

const cuenta = new CuentaBancaria(100);

console.log(cuenta.verSaldo());
//console.log(cuenta.#saldo); No se puede acceder directament