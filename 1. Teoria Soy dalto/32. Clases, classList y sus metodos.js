const title = document.querySelector(".titleone");
const title1 = document.querySelector(".titletwo");
const title2 = document.querySelector(".titlethree");
const title3 = document.querySelector(".titlefour");
const show = document.querySelector(".show");
const show1 = document.querySelector(".show1");

/*La propiedad de solo lectura Element.classList devuelve una coleccion activa de DOMTokenList de los atributos de clase del elemento*/

/* add(String[,String])
Añade las clases indicadas. Si estas clases existieran en el atributo del elemento seran ignorados*/
title.classList.add("big");
/* remove(String[,String])
Elimina las clases indicadas. Nota: Eliminar una clase que no existe NO produce error*/
title1.classList.remove("big");
/*item(Number)
Devuelve el valor de la clase por indice de coleccion*/
show.textContent = `En el indice 1: ${title2.classList.item(1)}`;
/* contains(String) contiene
Comprueba si la clase indicada existe en el atributo de clase del elemento*/
if(title3.classList.contains("one")) {
    show1.textContent = `La clase existe`;
}
/* toggle(String [,force])
Cuando solo hay un argumento presente: Alterna el valor de la clase: ej., si la clase existe la elimina y devuelve false, si no, la añade
y devuelve true. Cuando el segundo argumento esta presente: Si el segundo argumento se evalua como true, se añade la clase indicada, y
se evalua como false, lo elimina*/
