const showName = document.getElementById("showNames");

/*El operador await se utiliza para esperar un Promise y obtener su valor de cumplimiento. Solo se puede utilizar dentro 
de una funcion asincrona o en el nivel superior del modulo
Sintaxis
awit expresion

La declaracion async function crea un vinculante de una nueva funcion asincrona a un nombre determinado. El await se permite
la palabra clave dentro del cuerpo de la funcion, lo que permite escribir un comportamiento asincrono basado en estilo mas limpio
y evita la necesidad de configurar explicitamente cadenas de promesas*/

const getInformation = (text) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {resolve(text)}, Math.random()*200);
    })
}

const displayData = async () => {
    data1 = await getInformation("1: Dayvis");
    data2 = await getInformation("2: Dayvi");
    data3 = await getInformation("3: Dayv");
    showName.textContent = `${data1} - ${data2} - ${data3}` ;
}

displayData();