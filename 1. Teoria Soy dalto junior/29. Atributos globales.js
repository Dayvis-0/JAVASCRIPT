const titulo1 = document.querySelector(".titulo1");
const titulo2 = document.querySelector(".titulo2");
const titulo3 = document.querySelector(".titulo3");
const titulo4 = document.querySelector(".titulo4");
const caja = document.querySelector(".caja");
const tabind1 = document.querySelector(".tab1");
const tabind2 = document.querySelector(".tab2");
const tabind3 = document.querySelector(".tab3");
const title = document.querySelector(".title");

// contentEditable - contenido editable | Especifica si el elemento es editable o no | Valores:  true - indica si el elemento es
// contentEditable | false - indica que el elemento no puede ser editado | inherit - indica que el elemento hereda el estado editable del padre
titulo1.setAttribute("contentEditable", "true");
titulo2.setAttribute("contentEditable", "false");
titulo3.setAttribute("contentEditable", "true");
titulo4.setAttribute("contentEditable", "inherit");
// hidden - oculta | Es una propiedad solo de lectura, retorna un valor Booleano que indica si la pagina esta considerada oculta o no
caja.removeAttribute("hidden");
// tabindex - indice de pestañas | Indica si un elemento puede ser enfocado, y si participa en la navegacion secuencial del teclado <tab>
tabind1.setAttribute("tabindex", "1");
tabind2.setAttribute("tabindex", "3");
tabind3.setAttribute("tabindex", "2");
// title - titulo | Obtiene o establece el titulo actual del documento  
title.setAttribute("title", "caja blue")