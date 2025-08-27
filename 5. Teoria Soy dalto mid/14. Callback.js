const nameShow = document.getElementById("nameShow");
const inputName = document.getElementById("inputName");

/*Un callback function(funcion de devolucion de llamada)es una funcion pasada a otra funcion como argumento, que luego se invoca
dentro de la funcion externa para completar algun tipo de rutina o accion*/
inputName.addEventListener("change", () => {

    function test (callback) {
        const name = inputName.value;
        callback(name);
    }

    function greet (name) {
        nameShow.textContent = `Hello ${name}`;
    }

    test(greet);
})

/*Otras formas de hacer:

Segunda forma:
function test (callback) {
    const name = inputName.value;
    callback(name);
}

test(function greet (name) {
    nameShow.textContent = `Hello ${name}`;
});

Tercera forma:
function test (callback) {
    const name = inputName.value;
    callback(name);
}

test(function (name) {
    nameShow.textContent = `Hello ${name}`;
});

Cuarta forma
function test (callback) {
    const name = inputName.value;
    callback(name);
}

test((name) => {
    nameShow.textContent = `Hello ${name}`;
});

Quinta forma
function test (callback) {
    const name = inputName.value;
    callback(name);
}

test(name =>  nameShow.textContent = `Hello ${uname}`);*/