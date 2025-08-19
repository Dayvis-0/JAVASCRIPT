const buuttClick = document.querySelector("#butt-zero");
const buuttDblclick = document.querySelector("#butt-one");
const buuttMouseOver = document.querySelector("#butt-two");
const contOneMouseOut = document.querySelector(".mouseOut");
const buuttContextMenu = document.querySelector("#butt-four");
const buuttMouseUp = document.querySelector("#butt-five");
const buuttMouseMove = document.querySelector("#butt-six");
const buuttMouseLeave = document.querySelector("#butt-seven");
const buuttMouseDown = document.querySelector("#butt-eight");

/*Un elemento recibe un evento click en el que ocurre cualquiera de las siguientes situaciones:
- Se presiona y suelta un boton del dispositivo señalador (como el boton principal del mouse) mientras el puntero se
encuentra dentro del elemento
- Se realiza un gesto tactil dentro del elemento
- Cualquier interaccion del usuario que sea equivalente a un click, como presionar el boton Space clave o Enter calve mientras
el elemento esta enfocado. Tenga en cuenta que esto es solo se aplica a elementos con un controlador de eventos clave 
predeterminado y, por lo tanto, excluye otros elementos que se han hecho enfocables configurando el atributo tabindex*/
buuttClick.addEventListener("click" , () => {
    alert("you clicked");
})

/*El evento dblclick se activa cuando se hace doble click en un boton del dipositivo señanalor (como el boton principal
del mause); es decir, cuando se hace click rapidamente dos veces en un solo elemento en un lapso de tiempo my corto. */
buuttDblclick.addEventListener("dblclick", () => {
    alert("you douuble-clicked");
});

/*El evento mouseover se dispara contra un Element cuando se utiliza un dispositivo señalador (como un mouse o un trackpad)
para mover el cursor sobre el elemento o uno de sus elementos secundarios*/
buuttMouseOver.addEventListener("mouseover", () => {
    alert("you wen over");
});

/*El evento mouseout se dispara contra un Element cuando se utiliza un dispositivo señalador (normalmente un raton)
para mover el cursor de modo que ya no quede contenido dentro del elemento o de uno de sus hijos*/
contOneMouseOut.addEventListener(
    "mouseout", 
    (event) => {
    event.target.style.background = "#fff";
    
    setTimeout(() => {
        event.target.style.background = "";
    }, 200);
});

/*El evento contextmenu se activa cuando el usuario intenta abrir un menu contextual. Este evento generalmente se activa
haciendo click con el boton derecho del mouse o presionandola tecla del menu contextual*/
buuttContextMenu.addEventListener("contextmenu", () => {
    alert("you are pressing the right click");
});

/*El evento mouseup se dispara contra un element cuando se suelta un boton en un dispositivo señalador (como un 
mouse o un trackpad) mientras el puntero esta ubicado dentro de el.*/
buuttMouseUp.addEventListener("mouseup", () => {
    alert("yoou released the mouse")
});

/*El evento mousemove se activa en un elemento cuando se mueve un dispositivo señalador (generalmente un mouse)
mientras el punto de acceso del cursor esta dentro de el*/
buuttMouseMove.addEventListener("mousemove", () => {
    alert("you moved");
});

/*El evento mouseleave se dispara contra un Element cuando el cursor de un dispositivo señalador (normalmente
un raton) se mueve fuera de el*/
buuttMouseLeave.addEventListener("mouseleave", () => {
    alert("you left");
});

/*El evento mousedown se dispara contra un Element cuando se presiona un boton del dispositivo señalador
mientras el puntero esta dentro del elemento*/
buuttMouseDown.addEventListener("mousedown", () => {
    alert("you pressed");
});
