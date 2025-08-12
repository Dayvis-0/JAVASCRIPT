let parr1, parr2, parr3, parr4;

// getElementById - obtener elemento por su id | Devuelve una referencia al elemento por su ID
parr1 = document.getElementById("parrafo"); 
// getElementByTagName - obtener element por nombre de etiqueta | Devuelve una lista de elementos con un nombre determinado
parr2 = document.getElementsByTagName("p"); 
// querySelector - selector de consultas | Devuelve el primer elemento del documento que coincida con el grupo especificado de selectores
parr3 = document.querySelector(".parra");
// querySelectorAll - selector de consultas | Devuelve un nodo lista estatica que representa una listaa de elementos del documento que coninciden con el grupo de selectores indicados
parr4 = document.querySelectorAll(".pa"); 

document.write(parr1);
document.write("\n" + parr2 + parr2[0] + "\n" + parr3 + "\n" + parr4);