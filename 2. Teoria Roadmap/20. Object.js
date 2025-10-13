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
console.log('\n');
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
console.log('\n');
const Animal = {
    type: "Invertebrates",
    displayType() {
        console.log(this.type);
    },
};

const animal = Object.create(Animal);
animal.displayType();

const fish = Object.create(Animal);
fish.type = "Fishes";
fish.displayType();

/*Objetos y propiedades
Un objeto JS tiene propiedades asiciadas. Las propiedades de un objeto son básicamente las mismas que las variable
excepto que están asociadas a objetos, no ámbitos. Las propiedades de un objeto definen sus caracteristicas*/
const myCarOne = {
    make: "Ford",
    model: "Mustang",
    year: 1969,
};
/*Los nombres de propiedad distinguen entre mayúsculas y minúsculas. Los nombres de propiedad solo pueden ser 
cadenas o símbolos; todas las claves se convierten en cadenas, a menos que sean simbolos. Los indices
de matriz son, de hecho, propiedades con claves de cadena que contiene enteros.

Acceder a las propiedades
Se puede acceder a una propiedad de un objeto por su nombre. Los descriptores de acceso a propiedades tienen dos
sintaxis: notación de punto y notación de corchetes.*/
myCarOne.make = "Other";
myCarOne["make"] = "Other";

/*El nombre de una propiedad de objeto puede ser cualquier cadena o símbolo de JavaScript, incluyendo una cadena 
vacía. Sin embargo, no se puede usar la notación de puntos para acceder a una propiedad cuyo nombre no sea un 
identificador válido de JavaScript. Por ejemplo, solo se puede acceder a un nombre de propiedad que contenga un
espacio o un guion, que comience con un número o que esté dentro de una variable mediante la notación de 
corchetes. Esta notación también es muy útil cuando los nombres de propiedad deben determinarse dinámicamente, 
es decir, no se pueden determinar hasta el tiempo de ejecución. Algunos ejemplos son los siguientes:*/
const myObj = {};
const str = "myString";
const randOne = Math.random();
const anotherObject = {};

myObj.type = "Do syntax for a key named type";
myObj["date created"] = "This key is in variable str";
myObj[str] = "This key is in variable str";
myObj[randOne] = "A random number is the key here";
myObj[anotherObject] = "This key is object anotherObj";
myObj[""] = "This key is an empty string";

console.log('\n');
console.log(myObj);
console.log(myObj.myString);
console.log('\n');
console.log(myObj.str);
console.log(myObj[str]);
console.log(myObj.myString);

// Esto permite acceder a cualquier propiedad según lo determinado en tiempo de ejecución
const myCarTwo = {};
let propertyName = "make";
myCarTwo[propertyName] = "Ford";
propertyName = "model";
myCarTwo[propertyName] = "Mustang";
console.log(myCarTwo);

/*Enumeración de propiedades
Bucles for...in. Este método recorre todas las propiedades de cadena enumerables de un objeto, asi como su cadena de prototipos*/
function showProps(obj, objName) {
    let result = "";
    for (const i in obj) {
        if (Object.hasOwn(obj, i)) {
            result += `${objName}.${i} = ${obj[i]}\n`;
        }
    }

    console.log(result);
}

console.log('\n');
showProps({name: "Dayvis", age: 20});
// Lo anterior es equivalente a
function showPropsOne(obj, objName) {
    let result = "";
    Object.keys(obj).forEach((i) => {
        result += `${objName}.${i} = ${obj[i]}\n`;
    });
    console.log(result);
}