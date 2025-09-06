const buttSeria = document.getElementById("buttSeria");
const buttDeseria = document.getElementById("buttDeseria");

const showSeria = document.getElementById("showSeria");
const showDeseria = document.getElementById("showDeseria");

/*Serializacion
El proceso mediente el cual un objeto o estructura de datos se traduce a un formato adecuado para su transferencia a traves de 
una red o almacenamiento (por ejemplo, en un búfer de matriz o formato de archivo)*/
const serializad = '{"variable1" : "PEDRO", "variable2" : "DAYVIS"}';

buttSeria.addEventListener("click", () => {
    showSeria.textContent =  serializad;
});

buttDeseria.addEventListener("click", () => {
    showDeseria.textContent = JSON.parse(serializad);
});