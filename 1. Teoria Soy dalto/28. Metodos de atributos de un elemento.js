let rangoEtario = document.querySelector(".rangoEtario");

/* setAtrribute - establecer atributo | Establece el valor de un atributo en el elemento indicado. Si el atributo ya existe, el valor es actualizado, en
caso contrario, el nuevo atributo es añadido con el nombre y valor indicado */
rangoEtario.setAttribute("type", "color");

/*getAtrribute - obtener atributo | Devuelve el valor del atributo especificado en el elemento. Si el atributo especificado no existe, el valor
retornado puede ser tanto null como ""(una cadena vacia), */
const valorDelAtributo = rangoEtario.getAttribute("type");

document.write(valorDelAtributo);

/*removeAtrribute - eliminar atributo | Eliminar un atributo especificado*/
rangoEtario.removeAttribute("type");