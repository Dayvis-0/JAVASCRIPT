// Count clicks
const buttClicks = document.getElementById("buttClicks");
const showCount = document.getElementById("showCount");
const buttResetClicks = document.getElementById("buttResetClicks");
let count = 0;

buttClicks.addEventListener("click", () => {
    buttClicks.textContent = "Click me again";
    count =  count + 1;
    showCount.textContent = `${count} so far`;
})

buttResetClicks.addEventListener("click", () => {
    buttClicks.textContent = "Press me";
    count = 0;
    showCount.textContent = "";
})

// Your information
const buttInConsole = document.getElementById("buttInConsole");
const buttHere = document.getElementById("buttHere");
const inpInforma = document.getElementById("inpInforma");
const yourName = document.getElementById("yourName");

function validateInput () {
    if (inpInforma.value.trim() === "") {
        alert("Please write your name");
        return true;
    }

    return false;
}
buttInConsole.addEventListener("click", () => {
    if (!validateInput())  {
        console.log(inpInforma.value);
    }
})

buttHere.addEventListener("click", () => {
    if (!validateInput()) {
        yourName.textContent = inpInforma.value;
    }
})

// Toglle image
const buttTogle = document.getElementById("buttTogle");
const imgA = document.getElementById("imgAna");

buttTogle.addEventListener("click", () => {
    imgA.classList.toggle("show");
})

// Calculator
const inpOne = document.getElementById("inpOne");
const inpTwo = document.getElementById("inpTwo");
const buttCalcu = document.getElementById("buttCalcu");
const buttClean = document.getElementById("buttClean");
const showResult = document.getElementById("showResult");
const opertions = document.getElementById("opertions");

function nonNumber () {
    if (inpOne.value.trim() === "" || inpTwo.value.trim() === "") {
        alert("Select or type a number");
        return true;
    }

    return false;
}

buttCalcu.addEventListener("click", () => {
    const numberOne = parseFloat(inpOne.value);
    const numberTwo = parseFloat(inpTwo.value);
    const operation = opertions.value;

    if (!nonNumber())  {
        switch(operation) {
            case "1": 
                showResult.textContent = `${numberOne} + ${numberTwo} = ${numberOne + numberTwo}`;
                break;
            case "2":
                showResult.textContent = `${numberOne} - ${numberTwo} = ${numberOne - numberTwo}`;
                break;
            case "3":
                showResult.textContent = `${numberOne} * ${numberTwo} = ${numberOne * numberTwo}`;
                break;
            case "4":
                showResult.textContent = `${numberOne} / ${numberTwo} = ${numberOne / numberTwo}`;
                break;
        }
    }
})

buttClean.addEventListener("click", () => {
    inpOne.value = "";
    inpTwo.value = "";
    showResult.textContent = "";
})