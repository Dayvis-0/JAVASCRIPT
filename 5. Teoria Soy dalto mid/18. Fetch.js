const buttConsole1 = document.getElementById("showConsole1");
const buttConsole2 = document.getElementById("showConsole2");
const buttConsole3 = document.getElementById("showConsole3");

/*La API Fetch proporciona una interfaz para obtener recursos (incluso a traves de la red). Es un reemplazo mas potente
y flexible para XMLHttpRequest*/

buttConsole1.addEventListener("click", () => {
    reques  = fetch('https://reqres.in/api/users', {
        headers: {
            'x-api-key': 'reqres-free-v1'
        }
    });

    reques
        .then(res => res.json())
        .then(data => console.log(data))
})


/*El metodo text() de la interfaz Response toma una Response transmitir y leerlo hasta su finalizacion. Devuelve una promesa
que se resuelve con un String. La respuesta es siempre decodificacion usandoo UTF-8
El metodo json() de la interfaz Response toma a Response transmitir y leerlo hasta su finalizacion. Devuelve una promesa
que se resuelve con el resultado de analizar el cuerpo del texto como JSON*/

buttConsole2.addEventListener("click", () => {
    request  = fetch('https://reqres.in/api/users', {
        headers: {
            'x-api-key': 'reqres-free-v1'
        }
    });
    
    request
        .then(res => res.text())
        .then(data => console.log(data))
})

/*El metodo HTTP POST envia datos al servidor. El tipo de cuerpo de la solicitud se indica mediante la cabecera Content-Type*/
buttConsole3.addEventListener("click", () => {
    request = fetch('https://reqres.in/api/users', {
        method: 'POST',
        headers: {
            'x-api-key': 'reqres-free-v1',
            'Content-Type': 'application/json'    
        },
        body: JSON.stringify({
            name: 'Dayvis',
            job: 'Developer'
        })
    })
    .then(res => res.json())
    .then(data => console.log(data))
})