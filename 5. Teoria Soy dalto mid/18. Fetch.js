/*La API Fetch proporciona una interfaz para obtener recursos (incluso a traves de la red). Es un reemplazo mas potente
y flexible para XMLHttpRequest*/
request  = fetch("https://reqres.in/api/users?page=2", {
    headers: {
        "x-api-key": "reqres-free-v1"
    }
});

request
    .then(res => res.json())
    .then(res => console.log(res))
/*El metodo text() de la interfaz Response toma una Response transmitir y leerlo hasta su finalizacion. Devuelve una promesa
que se resuelve con un String. La respuesta es siempre decodificacion usandoo UTF-8
El metodo json() de la interfaz Response toma a Response transmitir y leerlo hasta su finalizacion. Devuelve una promesa
que se resuelve con el resultado de analizar el cuerpo del texto como JSON*/