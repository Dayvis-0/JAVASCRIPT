const buttAlert = document.querySelector(".alert");
const buttPrint = document.querySelector(".print");
const buttPrompt = document.querySelector(".prompt");
const buttPrompt1 = document.querySelector(".prompt1");
const buttPrompt2 = document.querySelector(".prompt2");
const buttConfirm = document.querySelector(".confirm");
const buttConfirm1 = document.querySelector(".confirm1");

const showPrompt = document.querySelector(".show"); 
const showPrompt1 = document.querySelector(".show1"); 
const showPrompt2 = document.querySelector(".show2"); 
const showConfirm = document.querySelector(".show3"); 
const showConfirm1 = document.querySelector(".show4"); 

/*window.alert() le indica al navegador que muestre un cuadro de dialogo con un mesaje opcional y que espere hasta 
que el usuario cierre el cuadro de dialogo
Sintaxis:
alert()
alert(message)*/

buttAlert.addEventListener('click', () => {
    window.alert("Hello");
});

/*Abre un cuadro de dialogo de impresion para imprimir el documento actual. Si el documento aun se esta cargando cuando se llama
a esta funcion, entonces el documento terminara de cargarse antes de abrir el cuadro de dialogo de impresion*/
buttPrint.addEventListener('click' , () => {
    window.print()
});

/*window.prompt() le indica al navegador que muestre un cuadro de dialogo con un mensaje opcional que solicita al usuario que 
ingrese algun texto y que espere hasta que el usuario envie el texto o cancele el cuadro de dialogo.

Bajo algunas condiciones (cuando el usuario cambia de pestaña, por ejemplo), es posible que el navegador no muestre el cuadro
de dialogo o que no espere a que el usuario envie texto o cancele el cuadro de dialogo.

Sintaxis: 
prompt()
prompt(message) -> mesagge = cadena de texto para mostrar al usuario
prompt(message, defaultValue) -> defaultValue = Una cadena que contiene el valor predeterminado que se muestra en el campo de entrada de texto 
Retorna el texo o null*/
buttPrompt.addEventListener('click', () => {
    const wind1 = window.prompt();
    showPrompt.textContent = `The user write is: ${wind1}`;
});

buttPrompt1.addEventListener('click', () => {
    const wind1 = window.prompt("How are you?");
    showPrompt1.textContent = `The user write is: ${wind1}`;
});

buttPrompt2.addEventListener('click', () => {
    const wind1 = window.prompt("Are you feeling lucky", "sure");
    showPrompt2.textContent = `The user write is: ${wind1}`;
});

/*window.confirm() le indica al navegador que muestre un cuadro de dialogo con un mesaje opcional y que espere hasta 
que el usuario confirme o cancele el caudro de dialogo.
Bajo algunas condiciones --por ejemplo, cuando el usuario cambia de pestaña-- es posible que el navegador en realidad no muestre
un cuadro de dialogoo que no espere a que el usuario confirme o cancele el cuadro de dialogo
Sintaxis:
confirm()
confirm(message) -> Una cadena que desea mostrar en el cuadro de dialogo de confirmacion
Retorna true si esta bien o cancelr false. Si un navegador ignora los cuadros de dialogos en la pagina, entonces el valor siempre sera false*/

buttConfirm.addEventListener('click', () => {
    const wind1 = window.confirm();
    showConfirm.textContent = `Confirm? ${wind1}`;
});

buttConfirm1.addEventListener('click', () => {
    const wind1 = window.confirm("Are you okay?");
    showConfirm1.textContent = `Confirm? ${wind1}`;
});