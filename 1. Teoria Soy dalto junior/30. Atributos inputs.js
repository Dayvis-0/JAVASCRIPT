const input = document.querySelector(".input-normal");
const input1 = document.querySelector(".input-normal-1");
const input2 = document.querySelector(".input-normal-2");
const input3 = document.querySelector(".input-normal-3");
const input4 = document.querySelector(".input-normal-4");
const input5 = document.querySelector(".input-normal-5");
const input6 = document.querySelector(".input-normal-6");
const input7 = document.querySelector(".input-normal-7");
const input8 = document.querySelector(".input-normal-8");
const input9 = document.querySelector(".input-normal-9");
const input10 = document.querySelector(".input-normal-9");
const input11 = document.querySelector(".input-normal-10");
const input12 = document.querySelector(".input-normal-11");

const r1_class = document.getElementById("class");
const r2_value = document.getElementById("value");
const r3_color = document.getElementById("t_color");
const r4_date = document.getElementById("t_date");
const r5_number = document.getElementById("t_number");
const r6_pass = document.getElementById("t_pass");
const r7_acc_img = document.getElementById("t_acc_img");
const r8_acc_gif = document.getElementById("t_acc_gif");
const r9_acc_video = document.getElementById("t_acc_video");
const r10_minlen = document.getElementById("t_minlen");
const r11_minlenatt = document.getElementById("t_minlen_att");
const r12_place = document.getElementById("t_place");
// className - nombre de la clase | Obtiene y establece el valor del atributo class del elemento especificado 
r1_class.textContent = `Clase: ${input.className}`;
// textContent - Contenido del texto | Representa el contenido de texto de un nodo y sus decendientes
r2_value.textContent = `Valor: ${input1.value}`;
// type - tipo | Tipo de control a mostrar
r3_color.textContent = `Type: ${input2.type = "color"}`;
r4_date.textContent = `Type: ${input3.type = "date"}`;
r5_number.textContent = `Type: ${input4.type = "number"}`;
r6_pass.textContent = `Type: ${input5.type = "password"}`;
/* accept - acepta | Toma como valor una lista separada por comas de uno o más tipos de archivos, o 
especificadores de tipo de archivo unicos, que describen que tipos de archivos permitir*/
r7_acc_img.textContent = `Accept ${input6.accept = "image/png"}`;
r8_acc_gif.textContent = `Accept ${input7.accept = "image/gif"}`;
r9_acc_video.textContent = `Accept ${input8.accept = "video/mp4"}`;
/* minLength - longitud minima | Especifica la longitud minima de los datos de texto*/
r10_minlen.textContent = `minLenght ${input10.minLength = 3}`;
//  minlength  con setAtribute 
r11_minlenatt.textContent = `minLenght ${input11.setAttribute("minlength", "3")}`;
// placeholder - marcador de posicion | Define el texto que se muestra en un control de formulario cuando este no tiene ningun valor
r12_place.textContent = `placeholder ${input12.placeholder = "hola mundo"}`;