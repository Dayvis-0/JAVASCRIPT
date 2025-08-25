const pSetTimeOut = document.getElementById("pSetTimeOut");
const greetButt = document.getElementById("greetButt");

/*El metodo seTimeOut() de la interfaz Window establece un temporitzador que ejecuta una funcion o un fragmmento de codigo 
especifico una vez que expira el temporizador
Sintaxis
setTimeOut(code)
setTimeOut(code, delay)

setTimeOut(functionRef)
setTimeOut(functionRef, delay)
setTimeOut(functionRef, delay, param1)
setTimeOut(functionRef, delay, param1, param2)
setTimeOut(functionRef, delay, param1, param2, paramN)*/
function greet() {
    pSetTimeOut.textContent = `Hello`;
};

greetButt.addEventListener("click" , () => {
    setTimeout(greet, 2000);
});