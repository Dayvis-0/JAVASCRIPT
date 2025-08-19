const inputOne = document.querySelector("#input-one");
const inputTwo = document.querySelector("#input-two");

const show = document.querySelector(".show");
const showOne = document.querySelector(".showOne");

/*El evento keydown se activa cuando se presiona una tecla*/
inputOne.addEventListener(
    "keydown", 
    (event) => {
        show.textContent =  `Keyboard pressed: ${event.code}`;
});

/*El evento keyup se activa cuando se suelta una tecla*/
inputTwo.addEventListener(
    "keyup", 
    (event) => {
    showOne.textContent = `Loose kyeboard: ${event.code}`;
})