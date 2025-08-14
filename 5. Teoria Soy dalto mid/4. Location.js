const buttLocaHref = document.querySelector("#locatiHref");
const buttLocaHostname = document.querySelector("#locatiHostname");
const buttLocaPathname = document.querySelector("#locatiPathname");
const buttLocaProtocol = document.querySelector("#locatiProtocol");
const buttLocaAssign = document.querySelector("#locatiAssign");

const show = document.querySelector(".show");
const show1 = document.querySelector(".show1");
const show2 = document.querySelector(".show2");
const show3 = document.querySelector(".show3");
const show4 = document.querySelector(".show4");

/*La propiedad href de la interfaz Location es una stringifier que devuelve una cadena que contiene
el conjunto URL y permite actualizar el href*/
buttLocaHref.addEventListener("click", () =>  {
    const locaHref = window.location.href;

    show.textContent = `The href is: ${locaHref}`;
});

/*La propiedad hostname de la interfaz Location es una cadena que contiene cualquier de los dos nombre de dominio o Direccion IP de 
la URL de ubicacion. Si la URl no tiene un nombre de host, esta propiedad contiene una cadena vacia "". Las direcciones es IPv4 e
IPv6 se normalizan, como eliminar los ceros inciales, y los nombres de dominio se convierte en una IDN*/
buttLocaHostname.addEventListener("click", () => {
    const locatHostname = window.location.hostname;
    
    show1.textContent = `The hostname is: ${locatHostname}`;
});

/*La propiedad pathname de la interfaz Location es una cadena que contiene la ruta de la URL de la ubicacion. SI no hay camino, pathname
 estara vacio: de lo contrario, pathname contiene un / inicial seguido de la ruta de la URL, sin incluir la cadena o fragmento de consulta*/
buttLocaPathname.addEventListener("click", () => {
    const locatPathname = window.location.pathname;

    show2.textContent =  `The pathname is: ${locatPathname}`;
});

/*La propiedad de la interfaz Location es una cadena que contiene el protocolo o esquema de la URL de la ubicacion, incluido el final ":"*/
buttLocaProtocol.addEventListener("click", () => {
    const locatProtocol = window.location.protocol;

    show3.textContent = `The protocol is: ${locatProtocol}`;
});

/*El metodo assign() metodo de la interfaz Location hace que la ventana se cargue y mostrar el documento en la URL especificada. una vez
realizada la navegacion, el usuario puede navegue de regreso a la pagina que llamo Location.assign() presionando el boton "atras"
assign(url)*/
buttLocaAssign.addEventListener("click", () => {
    const locatAssign = window.location.assign("https://youtube.com");
});