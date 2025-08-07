const cont = document.querySelector(".container1");
const cont1 = document.querySelector(".container3");
const old_h2 = document.querySelector(".h2");
const old_h2_1 = document.querySelector(".h21");
const show = document.querySelector(".show");

const new_h2 = document.createElement("H2");
new_h2.innerHTML = "World";

/*El metodo Node.replaceChild() reemplaza un nodo hijo del elemento especificado por otro
Sintaxis -> parentNode.replaceChild(newChild, oldChild)*/
cont.replaceChild(new_h2, old_h2);

/*El mmetodo removeChild(child) de la interfaz Node elimina a un nodo hijo del DOM y devuelve el noddo eliminado*/
show.textContent = `El elemento eliminado es: ${cont1.removeChild(old_h2_1).innerHTML}`;

/**/