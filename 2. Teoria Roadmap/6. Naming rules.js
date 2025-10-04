/*Las variables en JS ditinguen entre minúsculas y mayusculas. Por lo tanto, las variables de JS
con caracteres en minúscula y mayúsculas son diferentes:*/

var name = 'Robin Wieruch';
var Name = 'Dennis Wieruch';
var NAME = 'Thomas Wieruch';

console.log(name);
console.log(Name);
console.log(NAME);

// Una breve descripción general de los diferentes estilos de casos
var camelCase = 'Used in JS';
var PascalCase = 'Used in JS';
var snake_case = 'Not normally used in js';
// var kebab-case = 'Not used in js';

/*Convenciones de nomencaltura de JS: BOOLEAN
Un prefijo como is, are o has ayuda a todos los desarrolladores de JS a distinguir un valor booleano con
solo mirarlo*/
var visible = true; // bad
var isVisible = true; // good
var equal = false; // bad
var areEqual = false; // good
var encryption = true; // bad
var haEncryption = true; // good

/*Convenciones de nomencaltura de JS: FUNCTION
Las funciones en JS también se escriben en CamelCase. Además, es recomendable indicar que hace la funcion
prefijando el nombre de la funcion con un verbo*/
// bad
function name(firstName, lastName) {
    return `${firstName} ${lastName}`;
}
// good
function getName(firstName, lastName) {
    return `${firstName} ${lastName}`;
}
/*Este prefijo puede ser cualquier cosa (p. ej., obtener, buscar, enviar, aplicar, calcular, computar,
publicar). Es otra regla flexible a considerar para tener variables de JS más autodescriptivas*/

/*Convenciones de nomencaltura de JS: CLASS
Una clase de JS se declara con un PascalCase a diferencia de otras estructuras de datos en JS*/
class SoftwareDeveloper  {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

var me = new SoftwareDeveloper('Dayvis', 'Atao');

/*Convenciones de nomencaltura de JS: COMPONENT
Los componentes no están presentes en todas partes en JS, pero son comunes en frameworks frontend como
React. Dado que un componente se instancia (pero se añade al DOM) como una clase de JS, también se
declara comúnmente  con PascalCase.*/
// bad
function userProfile(user) {
    /*return (
        <div>
            <span>First Name: {user.firstName}</span>
            <span>Last Name: {user.lastName}</span>
        </div>
    );*/
}
// good 
function UserProfile(user) {
    // return (
    //     <div>
    //         <span>First Name: {user.firstName}</span>
    //         <span>Last Name: {user.lastName}</span>
    //     </div>
    // );
}

/*Cuando se utiliza un componente, se distingue de los componentes web y HTML nativos, porque su primera
letra siempre se escribe en mayúscula.*/

/* <div>
    <UserProfile 
        user={{firstName: 'Dayvis', lastName: 'Atao'}}
    />
</div> */

/*Convenciones de nomencaltura de JS: METHODS
De manera idéntica a las funciones de JS, un método en una clase de JS se declara con camelCase*/
class SoftwareDeveloperOne {
    constructor(firstName, lastName) {
        this.firstName =firstName;
        this.lastName = lastName;
    }

    getName() {
        return `${this.firstName} ${this.lastName}`;
    }
}

var meOne = new SoftwareDeveloperOne('Dayvis', 'Atao');

console.log(meOne.getName());

/*Convenciones de nomencaltura de JS: PRIVATE
*/