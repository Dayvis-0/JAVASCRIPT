const cont = document.querySelector(".container1");
const cont1 = document.querySelector(".container3");
const cont2 = document.querySelector(".container4");
const cont3 = document.querySelector(".container5");
const old_h2 = document.querySelector(".h2");
const old_h2_1 = document.querySelector(".h21");
const show = document.querySelector(".show");
const show1 = document.querySelector(".show1");
const show2 = document.querySelector(".show2");

const new_h2 = document.createElement("H2");
new_h2.innerHTML = "World";

/*El metodo Node.replaceChild() reemplaza un nodo hijo del elemento especificado por otro
Sintaxis -> parentNode.replaceChild(newChild, oldChild)*/
cont.replaceChild(new_h2, old_h2);

/*El metodo Node.removeChild(child) de la interfaz Node elimina a un nodo hijo del DOM y devuelve el noddo eliminado*/
show.textContent = `El elemento eliminado es: ${cont1.removeChild(old_h2_1).innerHTML}`;

/*El metodo Node.hasChild() devuelve un valor Booleano indicando si el Node(nodo) actual tiene nodos hijos o no*/
const band = cont2.hasChildNodes();

if(band) {
    show1.textContent = `El elemento tiene hijos : ${band}`;
}

const band1 = cont3.hasChildNodes();

if(!band1) {
    show2.textContent = `El elemento no tiene hijos: ${band1}`;
}