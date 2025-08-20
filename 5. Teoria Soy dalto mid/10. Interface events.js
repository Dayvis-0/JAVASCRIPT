const log = document.querySelector(".event-log-contents");

const badImg = document.querySelector(".bad-img");
const imgError = document.querySelector("#img-error");

/*El evento error se activa en un elemento cuando un recurso no se pudo cargar o no se puede usar. Por ejemplo,
si un script tiene un error de ejecucion o no se puede encontrar una imagen o no es valida*/
badImg.addEventListener("error", (event) => {
    log.textContent += `${event.type}: Loading image\n`; 
    console.log(event);
});

imgError.addEventListener("click", () => {
    badImg.setAttribute("src", "i-dont-exist");
});

/*El evento load se activa para elementos que contienen un recurso cuando este se ha cargado*/