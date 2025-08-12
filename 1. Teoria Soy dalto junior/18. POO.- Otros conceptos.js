/* Herencia
Permite que una clase hija herede propiedades y metodos de una clase padre usando extend*/

class  Animal {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    describir() {
        return `${this.nombre} tiene ${this.edad} años`;
    }
};

class Perro extends Animal {
    constructor(nombre, edad, raza) {
        super(nombre, edad);
        this.raza = raza;
    }

    ladrar() {
        return 'Guau';
    }
};

// const miPerro = new Perro('Doki', 3, 'Doberman')

// console.log(miPerro.ladrar());
// console.log(miPerro.describir());

/* Metodos estaticos 
Los metodos estaticos pertenecen a la clase, no a los objetos. Se llaman sin instanciar la clase*/

class Utilidades {
    static saludar(nombre) {
        return `Hola ${nombre}`;
    }  
};

console.log(Utilidades.saludar('Dayvis'));

/* Metods accesores  
Los metods get y set permiten controlar el acceso a propiedades
_nombre -> No es realmente privado, accesible desde afuera sin
#nombre -> Es privado, no es accesible desde afuera*/

class Persona {
    constructor(nombre, edad) {
        this._nombre = nombre;
        this._edad = edad;
    }
    
    get getnombre() {
        return this._nombre;
    }

    set setnombre(newName) {
        if (newName.length > 0){
            this._nombre = newName
        }
        else {
            console.log('El nombre no peude estar vacio');
        };
    }
};

const per1 = new Persona('Dayvis', 19);

console.log(per1.getnombre);

per1.setnombre = 'Maria';

console.log(per1.getnombre);