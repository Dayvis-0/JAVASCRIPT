const buttBubbling = document.querySelector("#Butt-One");
const buttBubblingTwo = document.querySelector("#Butt-Two");
const buttBubblingThree = document.querySelector("#Butt-Three");

const constaOne = document.querySelector(".Cont-One");
const constaTwo = document.querySelector(".Cont-Two");
const constaOneTwo = document.querySelector(".Cont-Three");
const constaTwoTwo = document.querySelector(".Cont-Four");
const constaOneThree = document.querySelector(".Cont-Five");
const constaTwoThree = document.querySelector(".Cont-Six");

/*Event bubbling (burbujeo)
Es el comportamiento por defecto de los eventos en el DOM -> Cuando haces click (o cualquier evento) en un elemento, primero se ejecuta 
en el "elemento objetivo" y luego el evento "sube" hacia sus elementos padres, pasando por cada uno hasta llegar al document
Bubbling -> de abajo hacia arriba (document -> target)*/

/*Event capturing (captura) 
Es el contrario al bubbling -> El evento comienza en el documento y va bajando por los ancestros hasta llegar al elemento objetivo
para activarlo, debes indicar { capture:true } (o el tercer parametro true) en addEventListener
Capturing -> de arriba hacia abajo (target -> document)*/

// without true
constaOne.addEventListener("click", () => { alert("Click on red" ); }); 
constaTwo.addEventListener("click", () => { alert("Click on green" ); }); 
buttBubbling.addEventListener("click", () => { alert("Click on blue" ); }); 

// true in the red
constaOneTwo.addEventListener("click", () => { alert("Click on red" ); }, true); 
constaTwoTwo.addEventListener("click", () => { alert("Click on green" ); }); 
buttBubblingTwo.addEventListener("click", () => { alert("Click on   blue" ); }); 

// true in the green
constaOneThree.addEventListener("click", () => {  alert("Click on red" );  }); 
constaTwoThree.addEventListener("click", () => { alert("Click on green" ); }, true); 
buttBubblingThree.addEventListener("click", () => { alert("Click on blue" ); }); 