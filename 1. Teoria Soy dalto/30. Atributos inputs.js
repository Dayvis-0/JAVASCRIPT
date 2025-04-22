const input = document.querySelector(".input-normal");
const input1 = document.querySelector(".input-normal-1")

// className - nombre de la clase | Obtiene y establece el valor del atributo class del elemento especificado 
const resultado = document.getElementById("resultado");
resultado.textContent = `Clase: ${input.className}, Valor: ${input1.value}`;