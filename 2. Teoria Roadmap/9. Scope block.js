/*lo que sucede allí es que siempre que tienes un conjunto de corchetes rizados como la declaración if, es 
lo que se conoce como bloque.*/

if (1 === 1) {
    // const cool1 = true;
}
// console.log(cool1);

if (1 === 1) {
    // let cool2 = true;
}
// console.log(cool2);

if (1 === 1) {
    var cool3 = true;
}
console.log(cool3);

let cool4;
if (1 === 1) {
    cool4 = true;
}
console.log(cool4);
/*Lo que esto hace es crear la variable en el ámbito superior (en este ejemplo es una variable global,
pero si se creara dentro de una funcioón, tendria alcance de función)*/
function isCool(name) {
    let cool5;

    if (name === 'wes') {
        const cool5 = false;
    }

    console.log(cool5);
    return cool5;
}

isCool('wes');

console.log('\n');
for (var i=0; i<10; i++) {
    console.log(i);
}
console.log(i);

/*Las variables var no tiene alcance de bloque, tiene alcance de función*/
console.log('\n');
function isCool1(name) {

    if (name === 'wes') {
        var cool6 = false;
    }

    console.log(cool6);
    return cool6;
}

isCool1('wes');

/*Si declaras var dentro de un bloque como un if, for o wwhile, no se queda dentro del blque, sino
que "se escapa" al alcance de la función o global*/
const dog = 'snickers';

function logDog() {
    console.log(dog);
}

function go() {
    const dog = 'sunny';
    logDog();
}

go();
/*Una función recuerda dónde fue definida*/