/*En JS, las funciones recuerdan el lugar en el código donde fueron declaradas, no donde se ejecutaan.
Lo que eso significa es que la forma en que se realiza la búsqueda de variables o laa búsqueda de alcance es
donde se definen las funciones, no donde se ejecutan.*/
const dog = 'snickers';

function logDog() {
  console.log(dog);
}

function go() {
  const dog = 'sunny';
  logDog();
}

go();

const dog1 = 'snickers';

function logDog1(dog1) {
  console.log(dog1);
}

function go1() {
  const dog1 = 'sunny';
  logDog1('Dayvis');
}

go1();
// Al igual que las variables, las funciones tiene alcance a la función principal
function sayHi(name) {
  function yell() {
    console.log(name.toUpperCase());
  }

  yell();
}

// yell();