const cont = document.querySelector(".container");
const cont1 = document.querySelector(".container1");
const show = document.querySelector(".show");
const show1 = document.querySelector(".show1");
const show2 = document.querySelector(".show2");
const show3 = document.querySelector(".show3");

/*La propiedad de solo lectura parentElement de la interfaz Node devuelve el padre del nodo DOM Element, o null si el nodo tampoco tiene 
padre, o su padre no es DOM Element, Node.parentNode por otro lado devuelve cualquier tipo de padre, independientemente de su tipo*/
const elem = cont.parentElement;
show.textContent = `El parent element es: ${elem}`;
show1.textContent = `El parent element es: ${elem.outerHTML}`;

/*La propiedad de solo lectura parentNode de la interfaz Node devuelve el padre del nodo especifico en el arbol DOM*/
const elem1 = cont1.parentNode;
show2.textContent = `El parent node es: ${elem1}`;
show3.textContent = `El parent node es: ${elem1.outerHTML}`;
