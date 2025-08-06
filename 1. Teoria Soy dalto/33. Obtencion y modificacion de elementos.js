const element = document.querySelector(".element");
const element1 = document.querySelector(".element1");
const element2 = document.querySelector(".element2");
const element3 = document.querySelector(".element3");
const show = document.querySelector(".show");
const show1 = document.querySelector(".show1");
const show2 = document.querySelector(".show2");
const show3 = document.querySelector(".show3");

/*La propiedad textContent de la interfaz Node representa el contenido de texto de un nodo y sus decendientes*/
show.textContent = `Texto extraido: ${element.textContent}`;
show1.textContent = `Texto extraido: ${element1.textContent}`;

/*La propiedad innerHTML devuelve o establece la sintaxis HTML describiendo las descendientes del elemento*/
show2.textContent= `Texto extraido: ${element2.innerHTML}`;

/*El atributo outerHTML del interfaz DOM element obtiene el fragmento HTML serializado que describe el elemento incluyendo sus 
descendientes. Puede ser asignado para reemplazar el elemento por los nodos resultantes de examinar de la cadena proporcionada*/
show3.textContent = `Texto extraido: ${element3.outerHTML}`;