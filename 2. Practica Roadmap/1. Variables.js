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

// Task list
const valueInpTask = document.getElementById("inpTask");
const buttAdd = document.getElementById("buttAdd");
const buttClear = document.getElementById("buttClear");
const tasksNumber = document.getElementById("tasksNumber");
const taskList = document.getElementById("taskList");

let tasks = [];

function updateTaskList() {
    taskList.innerHTML = "";
    tasksNumber.textContent = `Task: ${tasks.length}`;

    tasks.forEach((task, index) => {
        let li = document.createElement("li");
        li.className = "task-item";
        li.textContent = task;
        li.onclick = () => toggleTask(index);
        taskList.appendChild(li);
    });
}


function toggleTask(index) {
    let taskItem = taskList.children(index);
    taskItem.classList.toggle("comppleted");
}

buttAdd.addEventListener("click", () => {
    let task = valueInpTask.value.trim();
    if (task) {
        tasks.push(task);
        valueInpTask.value = "";
        updateTaskList();
    }
});

valueInpTask.addEventListener("keypress", (e) => {
    if (e === "Enter") {
        buttAdd.click();
    }
});

buttClear.addEventListener("click", () => {
    tasks = [];
    updateTaskList();
});

// Colo aleatorio
const randomColor = document.getElementById("randomColor");
const nextColor = document.getElementById("nextColor");
const colorDisplay = document.getElementById("colorDisplay");
const colorName = document.getElementById("colorName");

let colors = ["#FF6B6B", "#4ECDC4", "#45B7D1", "#96CEB4", "#FFEAA7", "#DDA0DD", "#98D8C8"];
let colorNames = ["Red", "Blue green", "Blue", "Green", "Yellow", "Purple", "Mint"];
let currentColorIndex = 0;

randomColor.addEventListener("click", () => {
    currentColorIndex = Math.floor(Math.random() * colors.length);
    colorDisplay.style.backgroundColor = colors[currentColorIndex];
    colorName.textContent = `Current color: ${colorNames[currentColorIndex]}`;
})

nextColor.addEventListener("click", () => {
    currentColorIndex = (currentColorIndex + 1) % colors.length;
    colorDisplay.style.backgroundColor = colors[currentColorIndex];
    colorName.textContent = `Current color: ${colorNames[currentColorIndex]}`;
})

// Contador de textos
const coutChaWoLi = document.getElementById("coutChaWoLi");
const countCharacter = document.getElementById("countCharacter");
const countWords = document.getElementById("countWords");
const countLines = document.getElementById("countLines");
const countText = document.getElementById("countText");
const countTextValue = countText.value;

function countCharacters ()  {
    const count = 0;

    if (countTextValue.trim() != "") {
        count = countTextValue;
    }

    return count;    
}

coutChaWoLi.addEventListener("click", () => {
    countCharacter.textContent = countCharacters();
})