const conta = document.querySelector(".container");
const conta1 = document.querySelector(".container1");
const show = document.querySelector(".show");
const show1 = document.querySelector(".show1");
const show2 = document.querySelector(".show2");
const show3 = document.querySelector(".show3");

/*El metodo crateElement() crea un elemento HTML especificado por su tagName, o un HTMLUnknownElement si su tagName no se reconoce
Sintaxis
element = document.createElement(tagName, [options]);
tagName -> Cadena que especifica el tipo de elemento a crear
options -> Un objeto opcional ElementCreationOptionsque contiene una unica propiedad llamada is, cuyo valor es el de la etiqueta name
de un elemento perzonalizado definido previamente utilizando customElements.define()*/

const item = document.createElement("LI");
show.textContent = `${item} : ${item.outerHTML}`;

/*createTextNode Crea un nuevo nodo de texto. Este metodo puede ser usado para escapar caracteres HTML
var text = document.createTextNode(data);
- text es un nodo text
- data es una cadena de texto string que contiene los datos a poner en el nodo de texto*/
const text = document.createTextNode("Hello world");
show1.textContent = `${text} : ${text.textContent}`;

/*appendChild Agrega un nuevo nodo al final de la lista de un elemento hijo de un elemento padre especificado*/
item.appendChild(text);
show2.textContent = `Ejemplo: ${item.outerHTML}`;
conta.appendChild(item)

/*creatDocuementFragment() Crea un nuevo DocumentFragment vacio, dentro del cual el nodo del DOM puede ser adicionado para 
construir un nuevo arbol DOM fuera de la pantalla*/
const frag = document.createDocumentFragment(); 
for (i=0; i<20; i++) {
    const item1 = document.createElement("LI");
    const text1 = document.createTextNode(`Hello world ${i}`);
    item1.appendChild(text1);
    frag.appendChild(item1);
}

conta1.appendChild(frag);