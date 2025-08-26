const setTimeOut1 = document.getElementById("setTimeOut1");
const setTimeOut2 = document.getElementById("setTimeOut2");
const setInterval1 = document.getElementById("setInterval1");
const setInterval2 = document.getElementById("setInterval2");
const greetButt1 = document.getElementById("greetButt1");
const greetButt2 = document.getElementById("greetButt2");
const greetButt3 = document.getElementById("greetButt3");
const greetButt4 = document.getElementById("greetButt4");

const inputName = document.getElementById("name");
const inputName1 = document.getElementById("name1");

const removeSetTime1 = document.getElementById("removeSetTime1");
const removeSetTime2 = document.getElementById("removeSetTime2");

const removeSetInterval1 = document.getElementById("removeSetInterval1");
const removeSetInterval2 = document.getElementById("removeSetInterval2");
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
let setTimeOne, setTimeTwo; 
function greetInterOne() {
    setTimeOut1.textContent = `Hello`;
};

greetButt1.addEventListener("click" , () => {
    setTimeOne = setTimeout(greetInterOne, 2000);
});

removeSetTime1.addEventListener("click", () => {
    clearTimeout(setTimeOne);
    alert("Deleted");
});

function greetTimeTwo(name) {
    setTimeOut2.textContent = `Hello ${name}`;
};

greetButt2.addEventListener("click", () => {
    const name = inputName.value;
    setTimeTwo = setTimeout(greetTimeTwo, 2000, name);
});

removeSetTime2.addEventListener("click", () => {
    clearTimeout(setTimeTwo);
    alert("Deleted");
});

/*El metodo setInterval() metodo de la interfaz Window llama repentinamente a una funcion o ejecuta un fragmento de codigo, con
un retraso de tiempo fijo entre cada llamada
Sintaxis
setTimeOut(code)
setTimeOut(code, delay)

setTimeOut(functionRef)
setTimeOut(functionRef, delay)
setTimeOut(functionRef, delay, arg1)
setTimeOut(functionRef, delay, arg1, arg2)
setTimeOut(functionRef, delay, arg1, arg2, argN)*/
let setInterOne, setInterTwo;
function greetInterOne() {
    setInterval1.textContent += `hello `;
};

greetButt3.addEventListener("click", () => {
    setInterOne = setInterval(greetInterOne, 2000);
});

removeSetInterval1.addEventListener("click", () => {
    clearInterval(setInterOne);
    alert("arrested");
});

function greetInterTwo(name) {
    setInterval2.textContent += `hello ${name}  `;
};

greetButt4.addEventListener("click", () => {
    const name = inputName1.value;
    setInterTwo = setInterval(greetInterTwo, 2000, name);
});

removeSetInterval2.addEventListener("click", () => {
    clearInterval(setInterTwo);    
    alert("arrested");
});