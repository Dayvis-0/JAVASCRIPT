const buttA = document.querySelector("#button_A");
const headingA = document.querySelector("#heading_A");

const buttName = document.getElementById("buttName");
const pName = document.getElementById("pName");
const yourName = document.getElementById("yourName");

const buttAna = document.getElementById("buttAna");
const imgAna = document.getElementById("imgAna");

const arrayOne = document.getElementById("arrayOne");
const arrayTwo = document.getElementById("arrayTwo");

const objName = document.getElementById("objName");

const typeNumberOne = document.getElementById("typeNumberOne");
const typeNumberTwo = document.getElementById("typeNumberTwo");

let count = 1;

buttA.onclick = () => {
    buttA.textContent = "Try again!";
    headingA.textContent = `${count} clicks so far`;
    count += 1;
};

buttAna.addEventListener("click", () => {
    imgAna.classList.toggle("show");
});

/*Si se escribe un programa JS de varias lineas que declara e inicializa una variable, puede declarar una variable con var
despues de inicializarlo y seguira funcionando, esto solo funciona con var*/
buttName.addEventListener("click", () => {
    myName = yourName.value;

    function logName() {
        console.log(myName)
    }
    
    logName();
    
    var myName;
})

// Variable types

let myNameArray = ["Chris", "Bob", "Jim"];
arrayOne.textContent += `${myNameArray[0]}`;

let myNumberArray = [100, 15, 20];
arrayTwo.textContent += `${myNumberArray[2]}`;

let dog = {
    name: "Spot",
    breed: "Dalmatian"
};

objName.textContent += dog.name;

// Dynamic typing
let myNumber = "500";
typeNumberOne.textContent += typeof myNumber;
myNumber = 500;
typeNumberTwo.textContent += typeof myNumber;
