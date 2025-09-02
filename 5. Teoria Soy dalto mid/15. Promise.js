const resuOne = document.getElementById("resultOne");
const inputNameOne = document.getElementById("nameOne");
const resuTwo = document.getElementById("resultTwo");
const inputNameTwo = document.getElementById("nameTwo");
const resuThree = document.getElementById("resultThree");
const inputNameThree = document.getElementById("nameThree");

/*El objeto Promise representa la eventual finalizacion (o falla) de una operacion asincronica y su valor resultante*/
/*1*/
inputNameOne.addEventListener("change", () => {
    let name = inputNameOne.value; 

    const promise = new Promise((resolve, reject) => {
        if (name !== "dayvis") reject("Sorry, the name is not Dayvis")
        else resolve (name)
    })

    resuOne.textContent = promise;
})

/*El metodo then() de la instancia Promise toman dos argumentos: funciones de devolucion de llamada para las casos cumplidos y 
rechazados de la Promise. Almacena las devoluciones de llamada dentro de la promesa a la que  sse llama y devuelve inmediatamente 
otro objeto Promise, permitiendote cadena de llamadas a otros metodos de promesa 
2*/
inputNameTwo.addEventListener("change", () => {
    let name = inputNameTwo.value; 

    const promise = new Promise((resolve, reject) => {
        if (name !== "dayvis") reject("Sorry, the name is not Dayvis")
        else resolve (name)
    })
    
    promise.then((result) => {
        resuTwo.textContent = result;
    })
})

/*El metodo catch() de la instancia Promise programan una funcion que se llamara cuando se rechace la promesa. Inmediatamente devuelve
otro objeto Promise, permitiendote cadena de llamadas a otros metodos de promesas. Es un atajo para then(undefined, onRejected) 
3*/
inputNameThree.addEventListener("change", () => {
    let name = inputNameThree.value; 

    const promise = new Promise((resolve, reject) => {
        if (name !== "dayvis") reject("Sorry, the name is not Dayvis")
        else resolve (name)
    })

    promise.then((result) => {
        resuThree.textContent = result;
    }).catch((e) => {
        resuThree.textContent = e;
    })
})
