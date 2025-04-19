console.clear()
console.log("This is the other level")
console.group(); // Crea un nuevo grupo de linea en el console web
console.log("Level 2");
console.group();
console.log("Level 3");
console.group();
console.warn("More of level 3");
console.groupEnd();
console.log("Back ot level 2");
console.groupEnd();
console.log("Back ot the other level");
console.groupEnd();
console.clear();
console.groupCollapsed(); // Crea un un grupo en line pero contraido
console.log("Hola");
console.groupEnd();