const buttAddEventListe = document.querySelector("#buttAddEvent");
const buttAddEventListe1 = document.querySelector("#buttAddEvent1");
const buttAddEventListe2 = document.querySelector("#buttAddEvent2");

const selectAddEvent = document.querySelector("#selectAddEvent");

const show = document.querySelector(".show");
/*El metodoaddEventListener() de la interfaz EventTarget configura una funcion que se llamara cada vez que se entregue el evento
especificado al objetivo.
Los objetos comunes son: Element, o sus hijos, Document, y window, pero el objeto puede ser cualquier objeto que admita 
eventos (como IDBRequest)
Sintaxis:
addEventListener(type, listener)
addEventListener(type, listener, options)
addEventListener(type, listener, useCapture)*/

//addEventListener(type, listener)
buttAddEventListe.addEventListener("click", function () {
    console.log("button clicled (basic form)");
});

//addEventListener(type, listener, options)
buttAddEventListe1.addEventListener("click", () => {
    console.log("I only run once");
}, { once:true });

buttAddEventListe2.addEventListener("click", (e) => {
    const property = selectAddEvent.value;

    if (property) {
        show.textContent = `${property} : ${e[property]}`;
    } else {
        show.textContent = ``
    }
});
