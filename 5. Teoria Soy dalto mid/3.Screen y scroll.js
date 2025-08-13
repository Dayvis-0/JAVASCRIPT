const buttDelecScreen = document.querySelector("#screenSelect");
const buttScreenLeft = document.querySelector("#screenLeft");
const buttScreenTop = document.querySelector("#screenTop");
const buttScrollX = document.querySelector("#scrollX");
const buttScrollY = document.querySelector("#scrollY");

const xCoordInput = document.querySelector("#xCoord");
const YCoordInput = document.querySelector("#yCoord");

const scrollToSmoothBtn = document.querySelector("#scrollToSmooth");
const scrollToInstantBtn = document.querySelector("#scrollToInstant");

const show = document.querySelector(".show");
const show1 = document.querySelector(".show1");
const show2 = document.querySelector(".show2");
const show3 = document.querySelector(".show3");
const show4 = document.querySelector(".show4");
/*La propiedad window.screen devuelve una referencia al obtejo de pantalla asociado con la ventana. El sreen objeto, implementando
el Screen interfaz, es un objeto especial para inspeccionar las propiedades de la pantalla en la que se representa la ventana actual*/
buttDelecScreen.addEventListener("change", () => {
    const property = buttDelecScreen.value;

    if (property) {
        show.textContent = ` ${property} : ${window.screen[property]}`;
    } else {
        show.textContent = "";
    }
});

/*La propiedad window.scrrenLeft de solo lectura devuelve la distancia horizontal, en pixeles CSS, desde el borde izquierdo
de la ventana grafica del navegador del usuario, al lado izquierdo de la pantalla*/
buttScreenLeft.addEventListener("click", () => {
    show1.textContent = `The screen left is: ${window.screenLeft}`;
});

/*La propiedad window.scrrenLeft de solo lectura devuelve la distancia vertical, en pixeles CSS, desde el borde izquierdo
de la ventana grafica del navegador del usuario, al lado superior de la pantalla*/
buttScreenTop.addEventListener("click", () => {
    show2.textContent = `The screen top is: ${window.screenTop}`;
});

/*La propiedad window.scrollX de solo lectura devuelve la distancia horizontal, en pixeles CSS, del borde izquierdo de la 
ventana grafica del navegador del usuario el lado izquierdo de la pantalla*/
buttScrollX.addEventListener("click", () => {
    show3.textContent = `The scroll horizontally is: ${window.screenX}`;
});

/*La propiedad window.scrollY de solo lectura devuelve la distancia horizontal, en pixeles CSS, del borde izquierdo de la 
ventana grafica del navegador del usuario hasta el borde superior de la pantalla*/
buttScrollY.addEventListener("click", () => {
    show4.textContent = `The scroll vertically is: ${window.screenY}`;
});

/*El metodo window.scroll() desplaza la ventana a un lugar particular en el documento
scroll(xCoord, yCoord)
scroll(options)*/
scrollToCoordBtn.addEventListener("click", () => {
    const xCoord = parseInt(xCoordInput.value);
    const yCoord = parseInt(YCoordInput.value);

    if (!isNaN(xCoord) && !isNaN(yCoord)) {
        window.scroll(xCoord, yCoord);
    } else {
        alert("Please enter valid numbers for both coordinates");
    }
});

scrollToSmoothBtn.addEventListener("click", () => {
    window.scroll({
        top: 500,
        left: 0,
        behavior: "smooth"
    });
});

scrollToInstantBtn.addEventListener("click", () => {
    window.scroll({
        top: 500,
        left: 0,
        behavior: "auto"
    });
});