/*Un objeto es una colección de propiedades, y una propiedad es una asociación entre un nombre (o clave) y un
valor. El valor de una propiedad puede ser una función, en cuyo caso se denomina método.

La sintaxis para un objeto que utiliza un inicializador de un objeto es:
const objt = {
    property1: value1,
    2: value2,
    "property n": value3
}
*/

let x;
const cond = true;
if (cond) {
    x = { greeting: "hi there" };
}
console.log(`x.greeting -> ${x.greeting}`);

const myHonda = {
    color: "red",
    wheels: 4,
    engine: { cylindre: 4, size: 2.2},
};

console.log(`myHonda.color -> ${myHonda.color}
myHonda.engine -> ${myHonda.engine}
myHonda.engine.cylindre -> ${myHonda.engine.cylindre}`)

// Una función constructora es simplemente una función normal que se usa con la palabra clave new para crear objetos
function Car(make, model, year, owner) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.owner = owner;
}
function Person(name, age, sex) {
    this.name = name;
    this.age = age;
    this.sex = sex;
}

const rend = new Person("Rand McKinnon", 33, "M");
const myCar = new Car("Eagle", "Talon TSi", 1993, rend);
console.log(`His name is: ${myCar.make} and owner is: ${myCar.owner.name}`);
myCar.color = "black";
console.log(`The color of your car is: ${myCar.color}`);

/* Usando el método Object.create()
También se pueden crear objetos mediante el método Object.crate(). Este método puede ser mmuy útil, ya que 
permite elegir el prototipo del objeto que se desea crear, sin necesidad del objeto que se desea crear, sin 
necesidad de definir una función constructora*/ 