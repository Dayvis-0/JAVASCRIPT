/*En JS, las funciones recuerdan el lugar en el código donde fueron declaradas, 
no donde se ejecutaan. Lo que eso significa es que la forma en que se realiza 
la búsqueda de variables o la búsqueda de alcance es donde se definen las 
funciones, no donde se ejecutan.*/

// Example 1

const dog = 'snickers';

function logDog() {
    console.log("from logDog " + dog);
}

function go() {
    const dog = 'sunny';
    logDog();
}

go();

// Example 2

const dog1 = 'snickers';

function logDog1(dog1) {
    console.log("from logDog1 " + dog1);
}

function go1() {
  const dog1 = 'sunny';
  logDog1('rufus');
}

go1();

// Example 3

function logDog2(dog){ // is declared here
    // const dog = whateverYouPassedInAsTheFirstArgumentToTheFunction; Error it was already declared
    console.log("form logDog2 " + dog)
}

function go2() {
    const dog = 'sunny';
    logDog2(dog);
}


go2();

// Al igual que las variables, las funciones tiene alcance a la función principal
function sayHi(name) {
    function yell() {
        console.log(name.toUpperCase());
    }

    yell();
}

sayHi("Hello");
// yell(); Esta funciona esta solo en el scope de sayHi no esta en el scope global