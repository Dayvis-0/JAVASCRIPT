const contOne = document.querySelector(".cont-one");
const contTwo = document.querySelector(".cont-two");
const contThree = document.querySelector(".cont-three");
const contFour = document.querySelector(".cont-four");
const contFive = document.querySelector(".cont-five");
const contSix = document.querySelector(".cont-six");
const contSeven = document.querySelector(".cont-seven");
const contEight = document.querySelector(".cont-eight");
const contNine = document.querySelector(".cont-nine");
const contTen = document.querySelector(".cont-ten");
const contEleven = document.querySelector(".cont-eleven");
const contTwelve = document.querySelector(".cont-twelve");

const buttOne = document.querySelector("#one");
const buttTwo = document.querySelector("#two");
const buttThree = document.querySelector("#three");
const buttFour = document.querySelector("#four");
const buttFive = document.querySelector("#five");
const buttSix = document.querySelector("#six");

/*El metodo stopPropagation() de la interfaz event evita una propagacion del evento actual en la captura y sus faces burbujeantes. 
Sin embargoo, no impide que se produzcan comportamientos predeterminados; por ejemplo, los clicks en los enlaces aun procesan. Si
quieres detener esos comportamientos, mira el metodo preventDefault(). Tampoco lo hace evitar la propagacion a otros controladores 
de eventos del elemento actual.*/

// without stopPropagation
buttOne.addEventListener("click", (event) => { alert("Click on blue"); }) ;
contOne.addEventListener("click", (event) => { alert("Click on red"); }) ;
contTwo.addEventListener("click", (event) => { alert("Click on green"); }) ;

// stopPropagation in red
buttTwo.addEventListener("click", (event) => { alert("Click on blue"); }) ;
contThree.addEventListener("click", (event) => {
    alert("Click on red");
    event.stopPropagation();
});
contFour.addEventListener("click", (event) => {
    alert("Click on green");
});

// stopPropagation in green
buttThree.addEventListener("click", (event) => { alert("Click on blue"); 
});
contFive.addEventListener("click", (event) => {
    alert("Click on red");
});
contSix.addEventListener("click", (event) => {
    alert("Click on green");
    event.stopPropagation();
});

// stopPropagation in buuton
buttFour.addEventListener("click", (event) => { 
    alert("Click on blue"); 
    event.stopPropagation();
});
contSeven.addEventListener("click", (event) => {
    alert("Click on red");
});
contEight.addEventListener("click", (event) => {
    alert("Click on green");
});

// stopPropagation in red and true
buttFive.addEventListener("click", (event) => { alert("Click on blue"); }) ;
contNine.addEventListener("click", (event) => {
    alert("Click on red");
    event.stopPropagation();
}, true);
contTen.addEventListener("click", (event) => {
    alert("Click on green");
});

// stopPropagation in green and true
buttSix.addEventListener("click", (event) => { alert("Click on blue"); 
});
contEleven.addEventListener("click", (event) => {
    alert("Click on red");
});
contTwelve.addEventListener("click", (event) => {
    alert("Click on green");
    event.stopPropagation();
}, true);
