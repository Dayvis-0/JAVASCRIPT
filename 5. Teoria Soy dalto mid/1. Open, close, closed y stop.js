const buttOpen = document.querySelector(".open");
const buttClose = document.querySelector(".close");
const buttCheck = document.querySelector(".check");
const buttStop =document.querySelector(".check1");

const contClosed = document.querySelector(".closed");
const contStop = document.querySelector(".stop");

// const URL = "1. Open, close, closed y stop.js";
const URL = "Pagina-lenta.html";
/*Carga un recurso en el contexto de un nuevo navegador (como una ventana) o uno que ya existe, dependiendo de los parametro
Sintaxis:
open()
open(url)
open(url, target)
open(url, target, windowFeatures)*/
let wind;
buttOpen.addEventListener('click', () => {
    wind = window.open(URL);
});
/*El metodo Window.close() cierra la ventana actual, o la ventana en la que fue llamado
Las ventanas son script-closable si fueron creados por contenido web. Esto generalmenteincluye:
- Window se abrio usando Window,open()
- Window se abrio a traves de contenido web, como enalaces(<a></a>) o formas (<from target="_blank">), sin acciones modificadoras de usuario*/
buttClose.addEventListener('click', () => {
    wind.close();
});     

/*La propiedad de solo lectura Window.closed indica si la ventana a la que se hace referencia esta cerrada o no
Valores posibles:
- true: La ventana ha sido abierta
- false: La ventana esta abierta*/
buttCheck.addEventListener('click', () => {
    if (wind) {
        if (wind.closed) {
            contClosed.textContent = 'The windows is closed'
        } else {
            contClosed.textContent = 'The windows is not closed'
        }
    }
});

/*El Window.stop() detiene una mayor carga de recursos en la corriente contexto de navegacion, equivalente al
boton de parada del navegador*/
buttStop.addEventListener('click', () => {
    if(wind && !wind.closed) {
        wind.stop();
        contStop.textContent = `The window is stop`;
    } else {
        contStop.textContent = `The window is not stop`;
    }
});