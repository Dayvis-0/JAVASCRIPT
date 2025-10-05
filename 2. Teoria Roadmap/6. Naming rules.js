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

console.log('\n' + meOne.getName());

/*Convenciones de nomencaltura de JS: PRIVATE
Un guión bajo (_) delante de una variable, función o método en JS. Significa que es privada. Aunque
JS no puede imponerlo, declarar algo como privado nos indica cómo debe o no usarse.
Por ejemplo, un método privado en una clase solo debe ser utilizado internamente por la clase, pero
se debe evitar su uso en la instancia de la clase:*/
class SoftwareDeveloperTwo {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.name = this._getName(firstName, lastName);
    }

    _getName(firstName, lastName) {
        return `${firstName} ${lastName}`;
    }
}

var meTwo = new SoftwareDeveloperTwo('Dayvis', 'Atao');
//good
var names = meTwo.name;
console.log('\n' + names);
/* bad
names1 = me._getName(me.firstName, me.lastName);
console.log(names1); 
Una variable/función privada también puede aparecer en un archivp JS. Esto podria significar que la
variable/función no deberia usarse fuera de este archivo, sino solo intenamentepara calcular
lógica de negocio adicional para otras funciones dentro del mismo archivo*/

/* Convenciones de nomencaltura de JS: CONSTANT
Por último, pero no menos importantes, hay constantes(que pretenden, ser variables inmutables) en JS
que se escribe en letras mayúsculas.*/
const SECONDS = 60;
const MINUTES = 60;
const HOURS = 24;
const DAY = SECONDS * MINUTES * HOURS;
const DAYS_UNTIL_TOMORROW = 1;

/*Convenciones de nomencaltura de JS: GLOBAL VARIABLE
- Una variable global de JS se declara en la parte superior de un proyecto/archivo
- Una variable global de JS se escribe en camelCase si es mutable
- Una variable global de JS se escirbe en MAYÚSCULAS si es inmutable*/

/*Convenciones de nomencaltura de JS: DASH
Un guion en una variable de JS tampoco es de sentido comun. Simplemente complica las cosas, es 
como usarlos en un objeto*/
//bad
var person = {
    'first-name' : 'Dayvis',
    'last-name' : 'Atao'
};
var firstNameS = person['first-name'];
//good
var personS = {
    firstName : 'Dayvis',
    lastName : 'Atao'
};
var firstNameSS = personS.firstName;

/*Convenciones de nomencaltura de JS: FILES
Existen dos estrategias para nombrar archivos en JS. PascalCase y kebab-case. En aplicaciones frontend
de JS, es frecuente usar PascalCase para nombrar componentes (p. eje. componentes de React)
- components/
--- user/
----- UserProfile.js
----- UserList.js
----- UserItem.js
--- ui/
----- Dialog.js
----- Dropdown.js
----- Table.js
Pero al contrario, en una aplicación backend de JS: kebab-case es el sentido común
- ruting/
--- user-route.js
--- messages-route.js*/

