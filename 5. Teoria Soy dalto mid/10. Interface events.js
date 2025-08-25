const log = document.querySelector(".event-log-contents");
const log1 = document.querySelector("#log");

const badImg = document.querySelector(".bad-img");
const imgError = document.querySelector("#img-error");

const show = document.querySelector(".show"); 
const show1 = document.querySelector(".show1"); 
const show2 = document.querySelector(".show2"); 

const scrollOut = document.querySelector("#scroll"); 
const heightOut = document.querySelector("#height");
const widthOut = document.querySelector("#width");

const inputSelect = document.querySelector("#inputSelect");
/*El evento error se activa en un elemento cuando un recurso no se pudo cargar o no se puede usar. Por ejemplo,
si un script tiene un error de ejecucion o no se puede encontrar una imagen o no es valida*/
badImg.addEventListener("error", (event) => {
    log.textContent += `${event.type}: Loading image\n`; 
    console.log(event);
});

imgError.addEventListener("click", () => {
    badImg.setAttribute("src", "i-dont-exist");
});

/*El evento load se activa para elementos que contienen un recurso cuando este se ha cargado correctamente. Actualmente, la lista de 
elementos HTML admitidos es: <body>, <embed>, <iframe>, <img>, <link>, <object>, <script>, <style>, y <track>
Este evento no se puede cancelar y no burbujea*/
window.addEventListener("load", () => {
    show.textContent = `the site has loaded`;
});

/*El evento beforeunload se activa cuando la ventana actual, el documento contenido y los recursos asociados estan a punto de 
descargarse. El documento aun esta visible y el evento aun se puede cancelar en este momento.
Importante no funciona en algunos navegadores mas utilizados*/
addEventListener("beforeunload", () => {
    show1.textContent = `Helloo`;
})

/*El evento resize se activa cuando se cambia el tamaño de la vista (ventana) del documento. Este evento o se puede cancelar y no burbujea*/
function reportWindowResize () {
    heightOut.textContent = window.innerHeight;
    widthOut.textContent = window.innerWidth;
}

window.onresize = reportWindowResize;

/*El evento scroll se produce cuando la vista del documento o un elemento es deslizado*/
addEventListener("scroll", () => {
    scrollOut.textContent = `scrolled`;
});

/*El evento select se activa cuando se ha seleccionado algun texto*/
function logSelection (event) {
    const selection = event.target.value.substring(
        event.target.selectionStart,
        event.target.selectionEnd,
    );
    
    log1.textContent = `You selected: ${selection}`;
};

inputSelect.addEventListener("select", logSelection);