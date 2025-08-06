const title = document.querySelector(".titleone");
const title1 = document.querySelector(".titletwo");
const title2 = document.querySelector(".titlethree");
const title3 = document.querySelector(".titlefour");
const title4 = document.querySelector(".titlefive");
const title5 = document.querySelector(".titlesix");
const title6 = document.querySelector(".titleseven");
const title7 = document.querySelector(".titleeight");
const title8 = document.querySelector(".titlenine");
const show = document.querySelector(".show");
const show1 = document.querySelector(".show1");
const show2 = document.querySelector(".show2");
const show3 = document.querySelector(".show3");
const show4 = document.querySelector(".show4");
const show5 = document.querySelector(".show5");
const show6 = document.querySelector(".show6");
const show7 = document.querySelector(".show7");
const show8 = document.querySelector(".show8");

/*La propiedad de solo lectura Element.classList devuelve una coleccion activa de DOMTokenList de los atributos de clase del elemento*/

/* add(String[,String])
Añade las clases indicadas. Si estas clases existieran en el atributo del elemento seran ignorados*/
title.classList.add("big");
show.textContent = `Agregado ${title.classList.item(1)}`;
/* remove(String[,String])
Elimina las clases indicadas. Nota: Eliminar una clase que no existe NO produce error*/
title1.classList.remove("big");
show1.textContent = `Eliminado big`;
/*item(Number)
Devuelve el valor de la clase por indice de coleccion*/
show2.textContent = `En el indice 1: ${title2.classList.item(1)}`;
/* contains(String) contiene
Comprueba si la clase indicada existe en el atributo de clase del elemento*/
if(title3.classList.contains("one")) {
    show3.textContent = `La clase existe`;
}
/* toggle(String [,force])
Cuando solo hay un argumento presente: Alterna el valor de la clase: ej., si la clase existe la elimina y devuelve false, si no, la añade
y devuelve true. Cuando el segundo argumento esta presente: Si el segundo argumento se evalua como true, se añade la clase indicada, y si
se evalua como false, lo elimina*/
const toggle = title4.classList.toggle("one"); 
if(!(toggle)) {
    show4.textContent = `Eliminado one: devuelve ${toggle}`;
}

const toggle1 = title5.classList.toggle("two"); 
if (toggle1) {
    show5.textContent = `Agregado two: devuelve ${toggle1}`;
}

show6.textContent = `Añadido ${title6.classList.toggle("One", true)} : ${title6.classList.item(3)} `;
show7.textContent = `Eliminado ${title6.classList.item(1)} : ${title7.classList.toggle("one", false)}`;
/*replace( oldClass, newClass)
Reemplaza una clase existente por una nueva*/
show8.textContent = `Remplazando ${title8.classList.item(1)}: devuelve ${title8.classList.replace("hola", "hello")} :por ${title8.classList.item(1)}`;