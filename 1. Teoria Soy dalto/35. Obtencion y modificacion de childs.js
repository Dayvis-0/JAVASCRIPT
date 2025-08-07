const cont = document.querySelector(".container");
const show = document.querySelector(".show");
const show1 = document.querySelector(".show1");
const show2 = document.querySelector(".show2");
const show3 = document.querySelector(".show3");
const show4 = document.querySelector(".show4");
const show5 = document.querySelector(".show5");

/*La propiedad de solo lectura firstChild de la interfaz Node devuelve el primer hijo del nodo en el arbol, o null si el nodo no tiene hijos*/
show.textContent = `El primer nodo es: ${cont.firstChild} -> ${cont.firstChild.outerHTML}`;

/*La propiedad de solo lectura lastChild devuelve el utlimo hijo del nodo. Si su padre es un elemento, entonces el hijo es generalmente
un nodo de element, nodo de texto o un nodo de comentario. Devuelve null sin no hay elementos hijos*/
show1.textContent = `El ultimo nodo es: ${cont.lastChild} -> ${cont.lastChild.outerHTML}`;

/*La propiedad de solo lectura firstElementChild devuelve el primer hijo de un elemento Element, o null si no hay elementos secundarios*/
show2.textContent = `El primer elemento es  ${cont.firstElementChild} -> ${cont.firstElementChild.outerHTML}`;

/*La propiedad de solo lectura lastElementChild devuelve el utlimo hijo de un elemento Element, o null sinno hay elementos secundarios.*/
show3.textContent = `El ultimo elemento es  ${cont.lastElementChild} -> ${cont.lastElementChild.outerHTML}`;

/*La propiedad de solo lectura childNodes devuelve una coleccion de hijos nodes del elemento dado donde el primer nodo hijoes asignado un indice 0*/
show4.textContent = `Coleccion de nodos hijos: ${[...cont.childNodes].map( n => n.nodeName).join(', ')}`;

/*La propiedad de solo lectura children devuelve un vivo HTMLCollection que contiene a todo el children elements del elementosobre el cual fue llamado*/
show5.textContent = `Coleccion de hijo: ${[...cont.children].map(n => n.nodeName).join(', ')}`;