const show = document.querySelector(".show");
const show1 = document.querySelector(".show1");
const show2 = document.querySelector(".show2");
const show3 = document.querySelector(".show3");

/*La propiedad de solo lectura Node.nextSibling devuelve el siguiente nodo con respecto al indicado en la lista de nodos(childNodes) 
a la que pertenece o null si el nodo especificado es el ultimo en dicha lista*/
const two = document.querySelector(".two");
show.textContent = `El nextSibling es: ${two.nextSibling} - ${two.nextSibling.outerHTML}`;

/*La propiedad de solo lectura Node.previousSibling devuelve el inmediantamente anterior al especificado en la lista de nodos
childNodes de su padre, o null si el nodo especificado es el primero en dicha lista*/
const two1 = document.querySelector(".two1");
show1.textContent = `El previousSiblings es: ${two1.previousSibling} - ${two1.previousSibling.outerHTML}`;

/*La propiedad de solo lectura Node.previousSibling devuelve el inmediantamente anterior al especificado en la lista de nodos
childNodes de su padre, o null si el nodo especificado es el primero en dicha lista*/
const two2 = document.querySelector(".two2");
show2.textContent = `El previousNextSiblings es: ${two2.nextElementSibling} - ${two2.nextElementSibling.outerHTML}`;

/*La propiedad de sólo lectura NonDocumentTypeChildNode.nextElementSibling devuelve el elemento inmediatamente posterior al 
especificado, dentro de la lista de elementos hijos de su padre, o bien null si el elemento especificado es el último en dicha lista.*/
const two3 = document.querySelector(".two3"); 
show3.textContent = `El nextElementSibling es: ${two3.previousElementSibling} - ${two3.previousElementSibling.outerHTML}`;