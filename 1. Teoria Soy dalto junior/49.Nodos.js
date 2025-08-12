const div = document.querySelector(".div3");
const show = document.querySelector(".show");
const show1 = document.querySelector(".show1");

/*El método closest() de la interfaz Element recorre el elemento y sus padres (dirigiéndose hacia la raiz del documento)
hasta encontrar un nodo que coincida con el CSS selector especificado.*/
const closeDiv = div.closest(".div1");
const closeDiv1 = div.closest(".div1");

show.textContent = `El closets: ${closeDiv.className}`;
show1.textContent = `El closets: ${closeDiv1.outerHTML}`;