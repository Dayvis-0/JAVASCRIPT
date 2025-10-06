/*El alcance de la función es que cuando se crean variables dentro de una función, estas variables
soloo están disponibles dentro de esa función*/
const age = 100;

function go() {
    const hair = 'blonde';
    const age = 2000;
    console.log(hair, age);
    /*No se puede acceder a age = 100; desde la función go(), no hay forma de hacerlo porque
    la variable ha sido sombreado (lo qye significa que ha sido sobrescrito)*/
}
/*Las variables, si no se encuentran dentor de una función, subirán un nivel más alto y buscáran una 
variable en ese ámbito, subirá a un nivel superior. Esto se lo llama variables de sombra*/
console.log(age);
go();