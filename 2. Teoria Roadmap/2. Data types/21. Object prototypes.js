// La cadena de prototipo

const myObject = {
    city: "Madrid",
    greet() {
        console.log(`Greetings from ${this.city}`);
    },
};

myObject.greet();

// Cual es el prototipo de myObject
console.log("" + Object.getPrototypeOf(myObject));

// El prototipo de un objeto no siempre es Object.prototype
const myDate = new Date();
let object = myDate;

do {
    object = Object.getPrototypeOf(object);
    console.log(object);
} while (object);

// Propiedades de sombreado
/*Qué sucede si defines una propiedad en un objeto, cuando ya existe una propiedad 
con el mismo nombre definida en el prototipo del objeto? Veamos:*/
const myDate1 = new Date(1995, 11, 17);

console.log(myDate1.getTime());

myDate1.getTime = function () {
    console.log("something else!");
};

myDate1.getTime();

// Establecer un prototipo
/* 1. Usando Object.create()
El método Object.create() crea un nuevo objeto y permite especificar un objeto que 
se utilizará como prototipo del nuevo objeto.
Ejemplo:*/

const personPrototype = {
    greet() {
        console.log("hello!");
    },
};

const carl = Object.create(personPrototype);
carl.greet();

// 2. Usando un constructor

const personPrototype1 = {
    greet() {
        console.log(`hello, my name is ${this.name}`);
    }
}

function Person(name) {
    this.name = name
}

Object.assign(Person.prototype, personPrototype1);

const p = new Person("Ana");
p.greet();