const input = document.querySelector(".input-normal");
const input1 = document.querySelector(".input-normal-1");;
const input2 = document.querySelector(".input-normal-2");;
const input3 = document.querySelector(".input-normal-3");;
const input4 = document.querySelector(".input-normal-4");;
const input5 = document.querySelector(".input-normal-5");;
const input6 = document.querySelector(".input-normal-6");;
const input7 = document.querySelector(".input-normal-7");;
const input8 = document.querySelector(".input-normal-8");;

const r1_class = document.getElementById("class");
const r2_value = document.getElementById("value");
const r3_color = document.getElementById("t_color");
const r4_date = document.getElementById("t_date");
const r5_number = document.getElementById("t_number");
const r6_pass = document.getElementById("t_pass");
const r7 = document.getElementById("re7");
// className - nombre de la clase | Obtiene y establece el valor del atributo class del elemento especificado 
r1_class.textContent = `Clase: ${input.className}`
// textContent - Contenido del texto | Representa el contenido de texto de un nodo y sus decendientes
r2_value.textContent = `Valor: ${input1.value}`;
// type - tipo | Tipo de control a mostrar
r3_color.textContent = `Type: ${input2.type = "color"}`;
r4_date.textContent = `Type: ${input3.type = "date"}`;
r5_number.textContent = `Type: ${input4.type = "number"}`;
r6_pass.textContent = `Type: ${input5.type = "password"}`;