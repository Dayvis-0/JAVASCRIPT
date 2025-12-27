/*Con variables globales, ya sea que tenga unaa etiqueta de script, un archivo JS o lo ejecute en la 
consola, cada vez que declare una variable, etará disponible en cualquier lugar de la aplicación*/
const first = 'wes';
let second = 'bos';
var age = 100;
/*Si escribes window.first y window.second conseguirás undefined, pero cuando escribes window.age -> 100
Esto porque var las varibles están adjuntas al objeto window y tienen alcance global, y const y let, cuando
se declaran como en el ejemplo anterior, todavia tiene alcance global, simplemente no estan adjuntas a 
la ventana*/
function sayHi(){console.log('\nhi');}
/*¿Por qué está disponible en window.sayHi()?
Porque todo lo que está en el ámbito global está adjunto al objeto de ventana con la excepción de const y let*/
