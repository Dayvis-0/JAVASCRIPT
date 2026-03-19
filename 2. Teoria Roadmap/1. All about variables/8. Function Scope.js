/*El alcance de la función es que cuando se crean variables dentro de una función, 
estas variables solo están disponibles dentro de esa función.*/

// Ejemplo 1

const age1 = 100;

function go1() {
    const hair = "blonde";
}

go1();
console.log(age1);
// console.log(hair); Esto genera un error de referencia, porque hair tien un alcance }
// de función

// Example 2

const age2 = 54;

function go2() {
    const hair = 'blonde';
    console.log("From go3 hair = " + hair + ", age2 = " + age2);
}

function go3() {
    const age2 = 110; 
    const hair = 'blonde';
    console.log("From go2 hair = " + hair + ", age2 = " + age2);
}


go2();
go3();

// Example 3

const age3 = 100;

function go3() {
    const hair3 = 'blonde';
    const age3 = 200;
    console.log("Where go() hair3 = " + hair3 + " age3 = " + age3);
    /*No se puede acceder a age = 100; desde la función go(), no hay forma de hacerlo 
    porque la variable ha sido sombreado (lo que significa que ha sido sobreescrito).*/
}

/*Las variables, si no se encuentran dentro de una función, subirán un nivel más alto 
y buscáran una variable en ese ámbito, subirá a un nivel superior. Esto se lo llama 
variables de sombra*/
go3();
console.log("Where global age = " + age3);